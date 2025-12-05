import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const [loaded, error] = useFonts({
    EuclidLight: require("../assets/fonts/Euclid Circular A Light.ttf"),
    EuclidRegular: require("../assets/fonts/Euclid Circular A Regular.ttf"),
    EuclidMedium: require("../assets/fonts/Euclid Circular A Medium.ttf"),
    EuclidSemiBold: require("../assets/fonts/Euclid Circular A SemiBold.ttf"),
    EuclidBold: require("../assets/fonts/Euclid Circular A Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <Stack screenOptions={{ headerShown: false }} />
  </ThemeProvider>;
}
