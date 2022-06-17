import 'styled-components';


declare module 'styled-components' {
  export type SpacingMap = { [key: number]: string }

  export type SwatchMap = { [key: string]: string }
  export interface DefaultTheme {
    spacing: SpacingMap,
    swatch: SwatchMap,
    palette: {
      primary: string,
      secondary: string,
      background: {
        primary: string
      }
      links: {
        primary: {
          default: string,
          hover: string
        }
      },
      text: {
        primary: string,
        secondary: string,
      },
      borders: {
        primary: string,
        secondary: string
      },
    }
  }
}