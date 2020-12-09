import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      header: string;
    };
    responsive: {
      small: string,
      medium: string
      large: string
    }
  }
}