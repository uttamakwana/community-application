/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",

        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",
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

          /* App Backgrounds */
          "--background": "222 70% 6% 1",
          "--foreground": "0 0% 100% 1%",

          "--card": "215, 30%, 11%, 1",
          "--card-foreground": "0 0% 100% 1",

          "--input-background": "215, 30%, 11%, 1",

          /* Muted colors */
          "--muted": "210 20% 95%",
          "--muted-foreground": "215 20% 45%",

          /* Borders & Inputs */
          "--border": "215 15% 85%",
          "--input": "215 15% 85%",
          "--placeholder": "0, 0%, 100%, 0.5",
          "--disabled-button": "0, 0%, 100%, 0.1",
          "--seperator": "0, 0%, 100%, 0.1",

          "--action": "340, 82%, 52%, 1",
          "--action-foreground": "0, 0%, 100%, 1",

          "--footer-background": "0, 0%, 0%, 0.5",
          "--header-background": "0, 0%, 0%, 0.6",
          "--post-icon-background": "0, 0%, 0%, 0.1",
          "--post-icon-foreground": "0, 0%, 0%, 0.5",
          "--post-icon-active-background": "0, 0%, 0%, 0.1",
          "--post-icon-active-foreground": "0, 0%, 0%, 1",

          /* Semantic */
          "--pink": "340, 82%, 52%, 1",
          "--success": "139, 58%, 47%, 1", /* Green */
          "--warning": "40 90% 55%",  /* Amber */
          "--danger": "350, 85%, 53%, 1",    /* Red */
          "--blue": "208, 79%, 51%, 1",    /* Red */
        },

        /************ DARK MODE ************/
        "@media (prefers-color-scheme: dark)": {
          ":root": {
            /* Brand */
            "--primary": "174 70% 50%",
            "--primary-foreground": "0 0% 10%",

            "--accent": "210 90% 65%",
            "--accent-foreground": "0 0% 10%",

            /* App Backgrounds */
            "--background": "222 47% 7%",
            "--foreground": "0 0% 98%",

            "--card": "222 47% 9%",
            "--card-foreground": "0 0% 98%",

            /* Muted colors */
            "--muted": "215 20% 18%",
            "--muted-foreground": "215 20% 75%",

            /* Borders & Inputs */
            "--border": "215 15% 25%",
            "--input": "215 15% 25%",

            /* Semantic */
            "--success": "152 65% 55%",
            "--warning": "40 90% 60%",
            "--danger": "0 75% 60%",
          },
        },
      }),
  ],
};
