import type { DefaultTheme, SpacingMap } from 'styled-components'

export const SPACER = 1;
export const SPACER_UNIT = "rem";

const spacingSizes = [1, 2, 3, 4, 5, 6, 7, 8];

const spacing: SpacingMap = spacingSizes.reduce((acc, currentSpacingUnit) => {
  return { ...acc, [currentSpacingUnit]: `${currentSpacingUnit * SPACER}${SPACER_UNIT}` }
}, {});

const swatch = {
  tomato: "#CA3A47",
  lightTomato: "#E28C91",
  grapefruit: "#FF9F93",
  white: "#fff",
  charcol: "#2f2911",
  forest: "#3f4c46d"
}

const theme: DefaultTheme = {
  spacing,
  swatch,
  palette: {
    background: {
      primary: swatch.white
    },
    text: {
      primary: swatch.charcol,
      secondary: "green",
    },
    links: {
      primary: {
        default: swatch.tomato,
        hover: swatch.grapefruit,
      },
      secondary: {
        default: swatch.charcol,
        hover: swatch.tomato,
      }
    },
    borders: {
      primary: swatch.tomato,
      secondary: swatch.lightTomato
    }
  }
}

export default theme;