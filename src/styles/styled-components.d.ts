import 'styled-componets';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    search: string;
    white: string;
    gray: string;
    outline: string;
    retweet: string;
    like: string;
    twitter: string;
    twitter_dark_hover: string;
    twitter_dark_hover: string;
    twitter_light_hover: string;
  };
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
