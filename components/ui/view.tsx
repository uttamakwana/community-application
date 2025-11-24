// src/components/ui/view.tsx
import { cn } from "@/lib/cn";
import { View as RNView, ViewProps } from "react-native";

interface CustomViewProps extends ViewProps {
  className?: string;
}

export function View({ className, style, ...props }: CustomViewProps) {
  return <RNView {...props} style={style} className={cn(className)} />;
}
