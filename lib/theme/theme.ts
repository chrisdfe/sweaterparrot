import type { DefaultTheme, SpacingMap } from 'styled-components'

export const SPACER = 1;
export const SPACER_UNIT = "rem";

const spacingSizes = [1, 2, 3, 4, 5, 6, 7, 8];

const spacing: SpacingMap = spacingSizes.reduce((acc, currentSpacingUnit) => {
  return { ...acc, [currentSpacingUnit]: `${currentSpacingUnit * SPACER}${SPACER_UNIT}` }
}, {});

const swatch = {
  red: "#ff4422"
}

const theme: DefaultTheme = {
  spacing,
  swatch,
  palette: {
    primary: "red",
    secondary: "pink",
    background: {
      primary: "white"
    },
    text: {
      primary: "black",
      secondary: "green",
    },
    links: {
      primary: {
        default: swatch.red,
        hover: "blue",
      }
    },
    borders: {
      primary: swatch.red,
      secondary: "pink"
    }
  }
}

export default theme;