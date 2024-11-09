interface IEnvironment {
  COINGECKO: {
    URL: string;
    API_KEY: string;
  };
}

const isProduction = process.env.NODE_ENV === "production";

export const ENVIRONMENT: IEnvironment = {
  COINGECKO: {
    API_KEY: (isProduction
      ? process.env.COINGECKO_API_KEY
      : process.env.NEXT_PUBLIC_COINGECKO_API_KEY) as string,
    URL: (isProduction
      ? process.env.COINGECKO_URL
      : process.env.NEXT_PUBLIC_COINGECKO_URL) as string,
  },
};
