// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'chart.pie.fill': 'pie-chart',
  'clock.fill': 'schedule',
  'person.fill': 'person',
  'gearshape.fill': 'settings',

  // === EXPENSE ACTIONS ===
  'plus.circle.fill': 'add-circle',
  'minus.circle.fill': 'remove-circle',
  'creditcard.fill': 'credit-card',
  'banknote.fill': 'payments',
  'dollarsign.circle.fill': 'attach-money',
  'dollarsign.square.fill': 'monetization-on',

  // === SPLIT EXPENSES ===
  'person.2.fill': 'group',
  'square.and.arrow.up.fill': 'share',
  'arrow.triangle.2.circlepath': 'swap-horiz',
  'link.circle.fill': 'link',
  'person.crop.circle.badge.plus': 'person-add',

  // === CATEGORIES ===
  'cart.fill': 'shopping-cart',
  'bag.fill': 'shopping-bag',
  'fork.knife': 'restaurant',
  'car.fill': 'directions-car',
  'airplane': 'flight',
  'gamecontroller.fill': 'sports-esports',
  'film.fill': 'movie',
  'heart.fill': 'favorite',
  'house.circle.fill': 'home-work',
  'graduationcap.fill': 'school',
  'stethoscope': 'medical-services',
  'gift.fill': 'card-giftcard',
  'cup.and.saucer.fill': 'local-cafe',
  'fuelpump.fill': 'local-gas-station',
  'wrench.fill': 'build',
  'tshirt.fill': 'checkroom',

  // === HISTORY & ANALYTICS ===
  'clock.arrow.circlepath': 'history',
  'list.bullet': 'format-list-bulleted',
  'chart.bar.fill': 'bar-chart',
  'chart.line.uptrend.xyaxis': 'show-chart',
  'calendar': 'calendar-today',
  'archivebox.fill': 'archive',
  'doc.text.fill': 'description',

  // === USER & PROFILE ===
  'person.crop.circle': 'account-circle',
  'person.crop.circle.fill': 'account-circle',
  'person.crop.square': 'portrait',
  'at.circle.fill': 'alternate-email',
  'phone.circle.fill': 'phone',
  'envelope.fill': 'email',

  // === PREFERENCES & SETTINGS ===
  'bell.fill': 'notifications',
  'bell.slash.fill': 'notifications-off',
  'eye.fill': 'visibility',
  'eye.slash.fill': 'visibility-off',
  'lock.fill': 'lock',
  'lock.open.fill': 'lock-open',
  'shield.fill': 'security',
  'key.fill': 'vpn-key',

  // === STATUS & ACTIONS ===
  'checkmark.circle.fill': 'check-circle',
  'xmark.circle.fill': 'cancel',
  'exclamationmark.triangle.fill': 'warning',
  'info.circle.fill': 'info',
  'questionmark.circle.fill': 'help',

  // === TRANSACTION STATUS ===
  'hourglass': 'hourglass-empty',
  'checkmark.seal.fill': 'verified',
  'clock.badge.exclamationmark': 'pending',
  'arrow.up.circle.fill': 'trending-up',    // Income
  'arrow.down.circle.fill': 'trending-down', // Expense

  // === FILTER & SEARCH ===
  'magnifyingglass': 'search',
  'line.3.horizontal.decrease.circle': 'tune',
  'slider.horizontal.3': 'filter-list',
  'tag.fill': 'local-offer',
  'folder.fill': 'folder',

  // === MONEY TRANSFERS ===
  'arrow.left.arrow.right': 'swap-horiz',
  'bank.fill': 'account-balance',
  'wallet.pass.fill': 'wallet',
  'qrcode': 'qr-code',

  // === NOTIFICATIONS & ALERTS ===
  'message.fill': 'message',
  'bubble.left.fill': 'chat',
  'app.badge.fill': 'notification-important',

  // === EDITING ACTIONS ===
  'pencil.circle.fill': 'edit',
  'trash.fill': 'delete',
  'square.and.pencil': 'drive-file-rename-outline',
  'doc.on.doc.fill': 'content-copy',
  'arrow.uturn.backward.circle.fill': 'undo',
  'arrow.uturn.forward.circle.fill': 'redo',

  // === NAVIGATION ===
  'chevron.left': 'chevron-left',
  'chevron.right': 'chevron-right',
  'chevron.up': 'expand-less',
  'chevron.down': 'expand-more',
  'arrow.up': 'arrow-upward',
  'arrow.down': 'arrow-downward',
  'list.bullet.indent': 'format-indent-increase',

  // === SYSTEM ===
  'square.and.arrow.down.fill': 'file-download',
  'square.and.arrow.up.fill': 'file-upload',
  'icloud.fill': 'cloud',
  'wifi': 'wifi',
  'wifi.slash': 'wifi-off',
  'power': 'power-settings-new',

  // === EXPENSE SPECIFIC ===
  'receipt.fill': 'receipt',
  'percent': 'percent',
  'equal.circle.fill': 'drag-handle',
  'divide.circle.fill': 'exposure-neg-1',
  'number.circle.fill': 'tag',

  // === USER ROLES ===
  'crown.fill': 'emoji-events',      // Admin/Premium
  'star.fill': 'star',               // Favorite/Important
  'person.fill.viewfinder': 'supervisor-account', // Group admin

  // === PAYMENT METHODS ===
  'applelogo': 'phone-iphone',       // Apple Pay
  'creditcard.circle.fill': 'payment', // Generic payment
  'banknote': 'money',               // Cash
  'qrcode.viewfinder': 'qr-code-scanner', // QR payment
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
