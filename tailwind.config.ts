import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px"
      },
      colors: {
        brand: {
          w1: "#E6E6E6",
          w2: "#C4C4C4",
          g1: "#666666",
          g2: "#2E2E2E",
          k: "#000000",
          o: "#FF4D00",
          o2: "#FF2B00",
          r: "#E60002",
          r2: "#FF4D4D",
          y: "#FFCD1A",
          g: "#00FF9B",
          white: "#FFFFFF"
        },
        codeblock: {
          o: "#FF4D00",
          lo: "#FF9C71",
          do: "#EBBA9F",
          k2: "#0A0A0A"
        }
      },
      fontSize: {
        blog: [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.0em",
            fontWeight: "500"
          }
        ],
        "f-h0": [
          "6.125rem",
          {
            lineHeight: "5.5rem",
            letterSpacing: "-0.04em",
            fontWeight: "600"
          }
        ],
        "f-h0-mobile": [
          "2.875rem",
          {
            lineHeight: "2.45rem",
            letterSpacing: "-0.04em",
            fontWeight: "600"
          }
        ],
        "f-h1": [
          "4.75rem",
          {
            lineHeight: "4.25rem",
            letterSpacing: "-0.04em",
            fontWeight: "600"
          }
        ],
        "f-h1-mobile": [
          "2.1875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.03em",
            fontWeight: "600"
          }
        ],
        "f-h2": [
          "2.375rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.04em",
            fontWeight: "600"
          }
        ],
        "f-h2-mobile": [
          "1.5rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-0.03em",
            fontWeight: "600"
          }
        ],
        "f-h3": [
          "1.5rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "-0.03em",
            fontWeight: "600"
          }
        ],
        "f-h3-mobile": [
          "1.25rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "-0.03em",
            fontWeight: "600"
          }
        ],
        "f-h4": [
          "1.25rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "600"
          }
        ],
        "f-h4-mobile": [
          "0.9375rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-0.02em",
            fontWeight: "600"
          }
        ],
        "f-p": [
          "0.8125rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.0em",
            fontWeight: "600"
          }
        ],
        "f-p-mobile": [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.0em",
            fontWeight: "600"
          }
        ]
      },
      spacing: {
        "0.75": "0.1875rem",
        "1.25": "0.3125rem",
        "1.75": "0.4375rem",
        "2.25": "0.5625rem",
        "2.5": "0.625rem",
        "4.5": "1.125rem",
        "10.5": "2.625rem",
        "13": "3.25rem",
        "18": "4.5rem",
        "23": "5.75rem",
        "38": "9.5rem",
        "61": "15.25rem"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        flauta: ["var(--font-flauta)"]
      },
      maxWidth: {
        full: "120rem"
      },
      zIndex: {
        navbar: "1000"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" }
        },
        "actionable-blink": {
          "20%,60%,100%": {
            "--opacity-hover-value": "100"
          },
          "40%,80%": {
            "--opacity-hover-value": "var(--opacity-hover-anim-target)"
          }
        },
        "slide-up": {
          from: {
            transform: "translateY(100%)",
            opacity: "0"
          },
          to: {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        "fade-in-out": {
          "0%, 15%, 100%": {
            opacity: "0"
          },
          "3%, 12%": {
            opacity: "1"
          }
        },
        "fade-out-in": {
          "0%, 15%, 100%": {
            opacity: "1"
          },
          "3%, 12%": {
            opacity: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out forwards",
        "accordion-up": "accordion-up 0.2s ease-out forwards",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "slide-up": "slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "actionable-blink":
          "actionable-blink var(--anim-duration) var(--anim-delay) linear forwards",
        "fade-in-out":
          "fade-in-out var(--anim-duration, 3s) var(--anim-delay, 0s) ease-in-out infinite",
        "fade-out-in":
          "fade-out-in var(--anim-duration, 3s) var(--anim-delay, 0s) ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config
