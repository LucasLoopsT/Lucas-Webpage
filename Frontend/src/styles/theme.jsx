const dark = {
  COLORS: {
    bg: "#202020",
    bg_light: "#3b3b3b",
    bg_light2: "#555555",
    bg_dark: "#101010",
    bg_dark_70: "#101010b0",
    color_1: "#12FF65",
    color_2: "#AFFFCA",
    color_3: "#fff",
    color_4: "#fff",
    color_5: "#fff",
    WHITE: "#ffffff",
    LABEL: "#ffffff",
    INPUT_TEXT: "#ffffff",
    INPUT_AUTOFILL_BG: "#202020",
    MENU_LINES: "#ffffff",
    HEADING_H1: "#ffffff",
    SOCIAL_HOVER_TEXT: "#ffffff",
    CARD_HOVER_TEXT: "#ffffff",
    CARD_DETAIL_MOBILE: "#ffffff",
    CARD_SPINNER: "#ffffff",
  },
  mode: "dark",
};

const light = {
  COLORS: {
    bg: "#f0f2f1",
    bg_light: "#dde3df",
    bg_light2: "#c5ccc7",
    bg_dark: "#ffffff",
    bg_dark_70: "#ffffffc0",
    color_1: "#0a7a3f",
    color_2: "#1e4d32",
    color_3: "#0d3d24",
    color_4: "#1a1a1a",
    color_5: "#1a1a1a",
    WHITE: "#1a1a1a",
    LABEL: "#1a1a1a",
    INPUT_TEXT: "#1a1a1a",
    INPUT_AUTOFILL_BG: "#ffffff",
    MENU_LINES: "#1a1a1a",
    HEADING_H1: "#0a5c30",
    SOCIAL_HOVER_TEXT: "#ffffff",
    CARD_HOVER_TEXT: "#0d3d24",
    CARD_DETAIL_MOBILE: "#0d3d24",
    CARD_SPINNER: "#0a7a3f",
  },
  mode: "light",
};

export function getTheme(mode) {
  return mode === "light" ? light : dark;
}

export default dark;
