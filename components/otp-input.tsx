// src/components/ui/otp-input.tsx
import { cn } from '@/lib/cn';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Dimensions,
    Keyboard,
    NativeSyntheticEvent,
    Platform,
    Text,
    TextInput,
    TextInputKeyPressEventData,
    TouchableOpacity,
    View,
} from 'react-native';

export type OTPInputProps = {
    /** Number of OTP digits */
    length?: number;
    /** Callback when OTP is completely filled */
    onComplete?: (otp: string) => void;
    /** Callback when OTP value changes */
    onChange?: (otp: string) => void;
    /** Whether to auto-focus first input on mount */
    autoFocus?: boolean;
    /** Whether the component is disabled */
    disabled?: boolean;
    /** Whether to hide the OTP values (for password/PIN) */
    secureTextEntry?: boolean;
    /** Error message to display */
    error?: string;
    /** Success message to display */
    success?: string;
    /** Custom container class */
    containerClassName?: string;
    /** Custom input class */
    inputClassName?: string;
    /** Custom error text class */
    errorClassName?: string;
    /** Custom success text class */
    successClassName?: string;
    /** Placeholder character for empty inputs */
    placeholder?: string;
    /** Keyboard type for inputs */
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
    /** Whether to auto-submit when OTP is complete */
    autoSubmit?: boolean;
    /** Time in ms to auto-submit after OTP is complete */
    autoSubmitDelay?: number;
    /** Reset OTP values */
    reset?: boolean;
    /** On reset callback */
    onReset?: () => void;
    /** Clear OTP values */
    clear?: boolean;
    /** On clear callback */
    onClear?: () => void;
    /** Blur all inputs on submit */
    blurOnSubmit?: boolean;
    /** Value for controlled component */
    value?: string;
    /** Whether to show resend OTP option */
    showResend?: boolean;
    /** Resend OTP callback */
    onResend?: () => void;
    /** Resend cooldown time in seconds */
    resendCooldown?: number;
    /** Resend button text */
    resendButtonText?: string;
    /** Cooldown text template */
    cooldownText?: string;
    /** Whether input is in loading state */
    loading?: boolean;
    /** Loading indicator component */
    loadingIndicator?: React.ReactNode;
};

const ControlledOTPInput: React.FC<OTPInputProps> = ({
    length = 4,
    onComplete,
    onChange,
    autoFocus = true,
    disabled = false,
    secureTextEntry = false,
    error,
    success,
    containerClassName,
    inputClassName,
    errorClassName,
    successClassName,
    placeholder = '○',
    keyboardType = 'number-pad',
    autoSubmit = true,
    autoSubmitDelay = 300,
    reset = false,
    onReset,
    clear = false,
    onClear,
    blurOnSubmit = true,
    value: controlledValue,
    showResend = false,
    onResend,
    resendCooldown = 30,
    resendButtonText = 'Resend OTP',
    cooldownText = 'Resend in {seconds}s',
    loading = false,
    loadingIndicator,
}) => {
    // State
    const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
    const [activeIndex, setActiveIndex] = useState<number>(autoFocus ? 0 : -1);
    const [cooldown, setCooldown] = useState<number>(0);
    const [hasCompleted, setHasCompleted] = useState<boolean>(false);

    // Derived States
    const currentOtpLength = otp.filter(Boolean).length;
    const isFilled = length === currentOtpLength;

    // Refs
    const inputRefs = useRef<(TextInput | null)[]>([]);
    const containerRef = useRef<View>(null);

    // Handle controlled value
    useEffect(() => {
        if (controlledValue !== undefined) {
            const otpArray = controlledValue.split('').slice(0, length);
            const newOtp = [...Array(length)].map((_, i) => otpArray[i] || '');
            setOtp(newOtp);

            if (controlledValue.length === length) {
                setHasCompleted(true);
            }
        }
    }, [controlledValue, length]);

    // Reset OTP
    useEffect(() => {
        if (reset) {
            handleReset();
            onReset?.();
        }
    }, [reset]);

    // Clear OTP
    useEffect(() => {
        if (clear) {
            handleClear();
            onClear?.();
        }
    }, [clear]);

    // Cooldown timer
    useEffect(() => {
        let timer: number;

        if (cooldown > 0) {
            timer = setInterval(() => {
                setCooldown((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [cooldown]);

    // Auto-submit timer
    useEffect(() => {
        let timer: number;

        if (hasCompleted && autoSubmit && onComplete && !disabled && !loading) {
            const otpString = otp.join('');
            timer = setTimeout(() => {
                onComplete(otpString);
            }, autoSubmitDelay);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [hasCompleted, otp, autoSubmit, autoSubmitDelay, onComplete, disabled, loading]);

    // Focus management
    const focusInput = useCallback((index: number) => {
        if (disabled || loading) return;

        const input = inputRefs.current[index];
        if (input) {
            input.focus();
            setActiveIndex(index);
        }
    }, [disabled, loading]);

    const blurAllInputs = useCallback(() => {
        inputRefs.current.forEach((input) => input?.blur());
        setActiveIndex(-1);
        Keyboard.dismiss();
    }, []);

    // Handle OTP change
    const handleChange = useCallback((text: string, index: number) => {
        if (disabled || loading) return;

        // Allow only single character
        const char = text.charAt(text.length - 1);

        // Validate based on keyboard type
        let isValid = true;
        if (keyboardType === 'number-pad' || keyboardType === 'numeric' || keyboardType === 'decimal-pad') {
            isValid = /^\d*$/.test(char);
        }

        if (!isValid && char !== '') return;

        const newOtp = [...otp];

        if (char === '') {
            // Handle backspace/delete
            newOtp[index] = '';
            setOtp(newOtp);

            if (index > 0) {
                focusInput(index - 1);
            }
        } else {
            // Handle new character
            newOtp[index] = char;
            setOtp(newOtp);

            // Move to next input if available
            if (index < length - 1) {
                focusInput(index + 1);
            } else {
                // Last input filled
                if (blurOnSubmit) {
                    blurAllInputs();
                }
            }
        }

        const otpString = newOtp.join('');
        onChange?.(otpString);

        // Check if OTP is complete
        const isComplete = newOtp.every((digit) => digit !== '');
        setHasCompleted(isComplete);

        if (isComplete && onComplete && !autoSubmit) {
            onComplete(otpString);
        }
    }, [otp, length, disabled, loading, keyboardType, focusInput, blurOnSubmit, blurAllInputs, onChange, onComplete, autoSubmit]);

    // Handle key press
    const handleKeyPress = useCallback((e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
        if (disabled || loading) return;

        const { key } = e.nativeEvent;

        if (key === 'Backspace') {
            if (otp[index] === '' && index > 0) {
                // Move to previous input on backspace if current is empty
                focusInput(index - 1);
            }
        } else if (key === 'ArrowLeft' && index > 0) {
            focusInput(index - 1);
        } else if (key === 'ArrowRight' && index < length - 1) {
            focusInput(index + 1);
        }
    }, [otp, disabled, loading, length, focusInput]);

    // Handle paste
    const handlePaste = useCallback(async (index: number) => {
        if (disabled || loading) return;

        try {
            // Note: Clipboard API requires additional setup in React Native
            // For now, we'll handle programmatic paste via props
            // In a real implementation, you might want to use @react-native-clipboard/clipboard

            // This is a placeholder for clipboard functionality
            console.log('Paste functionality would be implemented here');
        } catch (error) {
            console.error('Paste failed:', error);
        }
    }, [disabled, loading]);

    // Handle container press (focus first empty input)
    const handleContainerPress = useCallback(() => {
        if (disabled || loading) return;

        const firstEmptyIndex = otp.findIndex((digit) => digit === '');
        const indexToFocus = firstEmptyIndex === -1 ? length - 1 : firstEmptyIndex;
        focusInput(indexToFocus);
    }, [otp, length, disabled, loading, focusInput]);

    // Reset handler
    const handleReset = useCallback(() => {
        setOtp(Array(length).fill(''));
        setActiveIndex(autoFocus ? 0 : -1);
        setHasCompleted(false);
        focusInput(0);
    }, [length, autoFocus, focusInput]);

    // Clear handler
    const handleClear = useCallback(() => {
        setOtp(Array(length).fill(''));
        setActiveIndex(-1);
        setHasCompleted(false);
        blurAllInputs();
    }, [length, blurAllInputs]);

    // Resend handler
    const handleResend = useCallback(() => {
        if (cooldown > 0 || disabled || loading) return;

        handleReset();
        setCooldown(resendCooldown);
        onResend?.();
    }, [cooldown, disabled, loading, resendCooldown, handleReset, onResend]);

    // Get input styles based on state
    const getInputStyles = useCallback((index: number) => {
        const baseStyles = "w-12 h-12 rounded-lg text-center text-xl font-bold";
        const isEmpty = otp[index] === '';
        const isActive = activeIndex === index;

        let stateStyles = "";

        if (disabled) {
            stateStyles = "bg-disabled-button text-gray-400";
        } else if (isFilled) {
            stateStyles = "border border-success bg-input text-foreground";
        } else if (loading) {
            stateStyles = "bg-disabled-button text-gray-400";
        } else if (error) {
            stateStyles = "border-red-500 bg-input";
        } else if (success) {
            stateStyles = "border-green-500 bg-input";
        } else if (isActive) {
            stateStyles = "bg-input text-foreground";
        } else if (isEmpty) {
            stateStyles = "bg-input text-gray-400";
        } else {
            stateStyles = "bg-input text-foreground";
        }

        return cn(baseStyles, stateStyles, inputClassName);
    }, [otp, activeIndex, disabled, loading, error, success, inputClassName]);

    // Get placeholder text
    const getPlaceholder = useCallback((index: number) => {
        if (secureTextEntry && otp[index] !== '') {
            return '•';
        }
        return placeholder;
    }, [secureTextEntry, otp, placeholder]);

    // Calculate input width based on screen size
    const calculateInputWidth = useCallback(() => {
        const screenWidth = Dimensions.get('window').width;
        const maxInputsInRow = 6;
        const spacing = 8;

        if (length <= maxInputsInRow) {
            const totalSpacing = (length - 1) * spacing;
            return (screenWidth - 48 - totalSpacing) / length;
        } else {
            // For longer OTPs, use fixed size with scroll
            return 48;
        }
    }, [length]);

    const calculateInputHeight = useCallback(() => { return 48 }, [length])

    // Render loading indicator
    const renderLoadingIndicator = () => {
        if (!loading) return null;

        if (loadingIndicator) {
            return loadingIndicator;
        }

        return (
            <View className="absolute inset-0 bg-white/50 rounded-lg items-center justify-center">
                <View className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </View>
        );
    };

    return (
        <View className={cn("w-full", containerClassName)}>
            {/* OTP Inputs Container */}
            <TouchableOpacity
                activeOpacity={1}
                onPress={handleContainerPress}
                disabled={disabled || loading}
                ref={containerRef}
            >
                <View className="flex-row justify-between space-x-2 relative">
                    {Array.from({ length }).map((_, index) => (
                        <View key={index} className="relative">
                            <TextInput
                                ref={(ref) => {
                                    inputRefs.current[index] = ref;
                                }}
                                value={otp[index]}
                                onChangeText={(text) => handleChange(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                                onFocus={() => setActiveIndex(index)}
                                onBlur={() => setActiveIndex(-1)}
                                className={getInputStyles(index)}
                                style={{
                                    width: calculateInputWidth(),
                                    height: calculateInputHeight(),
                                }}
                                maxLength={1}
                                keyboardType={keyboardType}
                                secureTextEntry={secureTextEntry && otp[index] !== ''}
                                editable={!disabled && !loading}
                                selectTextOnFocus={!disabled && !loading}
                                contextMenuHidden={true}
                                autoCapitalize="none"
                                autoCorrect={false}
                                textAlign="center"
                                caretHidden={Platform.OS === 'ios' && secureTextEntry}
                                // For Android copy/paste
                                onSelectionChange={({ nativeEvent: { selection } }) => {
                                    if (selection.start !== selection.end) {
                                        // Clear selection to prevent copying
                                        inputRefs.current[index]?.setNativeProps({
                                            selection: { start: selection.end, end: selection.end }
                                        });
                                    }
                                }}
                            />

                            {/* Placeholder */}
                            {/* {otp[index] === '' && activeIndex !== index && !disabled && !loading && (
                                <Text className="absolute inset-0 text-center text-xl text-gray-400 leading-[48px] pointer-events-none">
                                    {placeholder}
                                </Text>
                            )} */}

                            {/* Loading overlay for this input */}
                            {loading && index === activeIndex && renderLoadingIndicator()}
                        </View>
                    ))}

                    {/* Global loading overlay */}
                    {loading && (
                        <View className="absolute inset-0 bg-white/50 rounded-lg items-center justify-center">
                            <View className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
                        </View>
                    )}
                </View>
            </TouchableOpacity>

            {/* Error Message */}
            {error && (
                <Text className={cn("text-red-500 text-sm mt-2 text-center", errorClassName)}>
                    {error}
                </Text>
            )}

            {/* Success Message */}
            {success && (
                <Text className={cn("text-green-500 text-sm mt-2 text-center", successClassName)}>
                    {success}
                </Text>
            )}

            {/* Instructions */}
            {/* {!error && !success && !disabled && !loading && (
                <Text className="text-gray-500 text-sm mt-2 text-center">
                    {secureTextEntry ? 'Enter your PIN' : `Enter ${length}-digit ${keyboardType.includes('number') ? 'code' : 'OTP'}`}
                </Text>
            )} */}
            <Text className="text-foreground mt-[20px]">
                Resend OTP?
            </Text>

            {/* Resend OTP Section */}
            {showResend && (
                <View className="mt-4 items-center">
                    {cooldown > 0 ? (
                        <Text className="text-gray-500 text-sm">
                            {cooldownText.replace('{seconds}', cooldown.toString())}
                        </Text>
                    ) : (
                        <TouchableOpacity
                            onPress={handleResend}
                            disabled={disabled || loading}
                            activeOpacity={0.7}
                        >
                            <Text className={cn(
                                "text-primary font-medium text-sm",
                                (disabled || loading) && "text-gray-400"
                            )}>
                                {resendButtonText}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            )}

            {/* Action Buttons (for debugging/development) */}
            {/* {__DEV__ && (
                <View className="flex-row justify-center space-x-4 mt-4">
                    <TouchableOpacity
                        onPress={handleClear}
                        className="px-3 py-1 bg-gray-200 rounded"
                    >
                        <Text className="text-sm">Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleReset}
                        className="px-3 py-1 bg-gray-200 rounded"
                    >
                        <Text className="text-sm">Reset</Text>
                    </TouchableOpacity>
                </View>
            )} */}
        </View>
    );
};

// HOC for controlled usage
export const OTPInput = React.memo(
    ControlledOTPInput,
    (prevProps, nextProps) => {
        // Custom comparison to prevent unnecessary re-renders
        return (
            prevProps.value === nextProps.value &&
            prevProps.error === nextProps.error &&
            prevProps.success === nextProps.success &&
            prevProps.disabled === nextProps.disabled &&
            prevProps.loading === nextProps.loading &&
            prevProps.reset === nextProps.reset &&
            prevProps.clear === nextProps.clear &&
            prevProps.length === nextProps.length
        );
    }
);