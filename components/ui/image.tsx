// src/components/ui/image.tsx
import { cn } from "@/lib/cn";
import { ImageProps, Image as RNImage } from "expo-image";

interface CustomImageProps extends ImageProps {
  className?: string;
}

export function Image({ className, style, ...props }: CustomImageProps) {
  return <RNImage {...props} style={style} className={cn(className)} />;
}
