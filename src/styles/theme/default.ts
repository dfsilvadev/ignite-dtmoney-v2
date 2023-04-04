const theme = {
  grid: {
    container: {
      sm: "33.75rem",
      md: "45rem",
      lg: "60rem",
      xlg: "71.25rem",
      xxlg: "82.5rem"
    }
  },
  border: {
    radius: "0.25rem",
    outlineOffiset: "0.125rem"
  },

  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Poppins, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    sizes: {
      xsmall: "0.75rem", // 12px
      small: "0.875rem", //14px
      medium: "1rem", // 16px
      large: "1.125rem", // 18px
      xlarge: "1.25rem", // 20px
      xxlarge: "1.75rem" // 28px
    }
  },

  spacings: {
    xxsmall: "0.5rem", //8px
    xsmall: "1rem", // 16px
    small: "1.5rem", // 24px
    medium: "2rem", // 32px
    large: "2.5rem" // 40px
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.15s ease-in-out"
  },

  colors: {
    white: "#fff",

    "gray-100": "#E1E1E6",
    "gray-300": "#C4C4CC",
    "gray-400": "#8D8D99",
    "gray-500": "#7C7C8A",
    "gray-600": "#323238",
    "gray-700": "#29292E",
    "gray-800": "#202024",
    "gray-900": "#121214",

    "green-300": "#00B37E",
    "green-500": "#00875F",
    "green-700": "#015F43",

    "red-300": "#F75A68",
    "red-500": "#AB222E",
    "red-700": "#7A1921"
  }
} as const;

export default theme;
