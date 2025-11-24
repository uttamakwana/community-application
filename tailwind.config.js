/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",

        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",


        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        "input-background": "hsl(var(--input-background))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        placeholder: "hsl(var(--placeholder))",
        "disabled-button": "hsl(var(--disabled-button))",
        "seperator": "hsl(var(--seperator))",

        action: "hsl(var(--action))",
        "action-foreground": "hsl(var(--action-foreground))",

        "footer-foreground": "hsl(var(--footer-foreground))",
        "header-foreground": "hsl(var(--header-foreground))",

        "post-icon-background": "hsl(var(--post-icon-background))",
        "post-icon-foreground": "hsl(var(--post-icon-foreground))",
        "post-icon-active-background": "hsl(var(--post-icon-active-background))",
        "post-icon-active-foreground": "hsl(var(--post-icon-active-foreground))",

        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",
        blue: "hsl(var(--blue))",
        pink: "hsl(var(--pink))",
      },
    },
  },

  plugins: [
    ({ addBase }) =>
      addBase({
        /************ LIGHT MODE ************/
        ":root": {
          /* Brand */
          "--primary": "259, 81%, 63%, 1",
          "--primary-foreground": "0 0% 100%",

          "--secondary": "259, 81%, 63%, 1",
          "--secondary-foreground": "0 0% 100% 0.8",

          "--accent": "212, 100%, 50%, 1",
          "--accent-foreground": "0 0% 100%",

          /* Backgrounds */
          "--background": "222 70% 6% 1",
          "--foreground": "0 0% 100% 1%",

          "--card": "215, 30%, 11%, 1",
          "--card-foreground": "0 0% 100% 1",

          "--input-background": "215, 30%, 11%, 1",

          /* Muted */
          "--muted": "210 20% 95%",
          "--muted-foreground": "215 20% 45%",

          /* Structure */
          "--border": "215 15% 85%",
          "--input": "215 15% 85%",
          "--placeholder": "0, 0%, 100%, 0.5",
          "--disabled-button": "0, 0%, 100%, 0.1",
          "--seperator": "0, 0%, 100%, 0.1",

          /* Action Button */
          "--action": "340, 82%, 52%, 1",
          "--action-foreground": "0, 0%, 100%, 1",

          /* Misc */
          "--footer-background": "0, 0%, 0%, 0.5",
          "--header-background": "0, 0%, 0%, 0.6",

          "--post-icon-background": "0, 0%, 0%, 0.1",
          "--post-icon-foreground": "0, 0%, 0%, 0.5",
          "--post-icon-active-background": "0, 0%, 0%, 0.1",
          "--post-icon-active-foreground": "0, 0%, 0%, 1",

          /* Semantic */
          "--pink": "340, 82%, 52%, 1",
          "--success": "139, 58%, 47%, 1",
          "--warning": "40 90% 55%",
          "--danger": "350, 85%, 53%, 1",
          "--blue": "208, 79%, 51%, 1",
        },

        /************ DARK MODE ************/
        "@media (prefers-color-scheme: dark)": {
          ":root": {
            /* Brand */
            "--primary": "340 82% 60%",
            "--primary-foreground": "0 0% 10%",

            "--secondary": "260 55% 65%",
            "--secondary-foreground": "0 0% 10%",

            "--accent": "210 90% 65%",
            "--accent-foreground": "0 0% 10%",

            "--action": "340 82% 60%",
            "--action-foreground": "0 0% 10%",

            "--pink": "340 82% 60%",

            /* Backgrounds */
            "--background": "222 48% 5%",
            "--foreground": "0 0% 98%",

            "--card": "222 40% 8%",
            "--card-foreground": "0 0% 98%",

            "--input-background": "222 40% 10%",

            /* Muted */
            "--muted": "220 15% 20%",
            "--muted-foreground": "220 15% 70%",

            /* Structure */
            "--border": "220 15% 25%",
            "--input": "220 15% 25%",

            "--placeholder": "0 0% 100% / 0.4",
            "--disabled-button": "0 0% 100% / 0.08",
            "--seperator": "0 0% 100% / 0.15",

            /* Semantic */
            "--success": "152 60% 45%",
            "--warning": "40 95% 55%",
            "--danger": "0 70% 55%",
            "--blue": "210 90% 60%",

            /* Misc */
            "--footer-background": "0 0% 0% / 0.3",
            "--header-background": "0 0% 0% / 0.4",

            "--post-icon-background": "0 0% 100% / 0.05",
            "--post-icon-foreground": "0 0% 100% / 0.6",

            "--post-icon-active-background": "0 0% 100% / 0.15",
            "--post-icon-active-foreground": "0 0% 100% / 1",
          },
        },
      }),
  ],
};
