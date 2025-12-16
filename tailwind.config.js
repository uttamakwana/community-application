/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: "rgb(14, 20, 35)",                     // hsl(222 70% 6%)
        "primary-foreground": "rgb(255, 255, 255)",     // hsl(0 0% 100%)

        secondary: "rgb(116, 66, 219)",                 // hsl(259 81% 63%)
        "secondary-foreground": "rgba(255, 255, 255, 0.8)", // hsl(0 0% 100% / 0.8)

        accent: "rgb(0, 113, 255)",                     // hsl(212 100% 50%)
        "accent-foreground": "rgb(255, 255, 255)",      // hsl(0 0% 100%)

        // Backgrounds
        background: "rgb(14, 20, 35)",                  // hsl(222 70% 6%)
        foreground: "rgb(255, 255, 255)",               // hsl(0 0% 100%)

        card: "rgb(25, 32, 45)",                        // hsl(215 30% 11%)
        "card-foreground": "rgb(255, 255, 255)",        // hsl(0 0% 100%)

        "input-background": "rgb(25, 32, 45)",          // hsl(215 30% 11%)

        // Muted
        muted: "rgb(243, 246, 249)",                    // hsl(210 20% 95%)
        "muted-foreground": "rgb(99, 115, 129)",        // hsl(215 20% 45%)

        // Structure
        border: "rgba(255, 255, 255, 0.2)",             // hsl(0 0% 100% / 0.2)
        input: "rgb(25, 32, 45)",                       // hsl(215 30% 11%)
        "input-foreground": "rgb(255, 255, 255)",                       // hsl(215 30% 11%)
        placeholder: "rgba(255, 255, 255, 0.5)",        // hsl(0 0% 100% / 0.5)
        "disabled-button": "rgba(255, 255, 255, 0.1)",  // hsl(0 0% 100% / 0.1)
        separator: "rgba(255, 255, 255, 0.1)",          // hsl(0 0% 100% / 0.1)

        // Action Button
        action: "rgb(222, 50, 116)",                    // hsl(340 82% 52%)
        "action-foreground": "rgb(255, 255, 255)",      // hsl(0 0% 100%)

        // Misc
        "footer-foreground": "hsl(var(--footer-foreground))",
        "header-foreground": "hsl(var(--header-foreground))",

        "post-icon-background": "rgba(0, 0, 0, 0.1)",   // hsl(0 0% 0% / 0.1)
        "post-icon-foreground": "rgba(0, 0, 0, 0.5)",   // hsl(0 0% 0% / 0.5)
        "post-icon-active-background": "rgba(0, 0, 0, 0.1)", // hsl(0 0% 0% / 0.1)
        "post-icon-active-foreground": "rgb(0, 0, 0)",  // hsl(0 0% 0%)

        // Semantic Colors
        success: "rgb(71, 193, 109)",                   // hsl(139 58% 47%)
        warning: "rgb(245, 158, 11)",                   // hsl(40 90% 55%)
        danger: "rgb(235, 56, 86)",                     // hsl(350 85% 53%)
        blue: "rgb(29, 124, 214)",                      // hsl(208 79% 51%)
        pink: "rgb(222, 50, 116)",                      // hsl(340 82% 52%)
      },

      fontFamily: {
        euclid: ["EuclidRegular"],
        "euclid-light": ["EuclidLight"],
        "euclid-medium": ["EuclidMedium"],
        "euclid-semibold": ["EuclidSemiBold"],
        "euclid-bold": ["EuclidBold"],
      },
    },
  },

  plugins: [],
};