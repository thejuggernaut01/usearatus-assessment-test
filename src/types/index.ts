export type GlobalDataProps = {
  active_cryptocurrencies: number;
  ended_icos: number;
  market_cap_change_percentage_24h_usd: number | undefined;
  market_cap_percentage: {
    [key: string]: number;
  };
  markets: number;
  ongoing_icos: number;
  total_market_cap: {
    usd?: number;
    [key: string]: number | undefined;
  };
  total_volume: {
    usd?: number;
    [key: string]: number | undefined;
  };
  upcoming_icos: number;
  updated_at: number;
};

export type TrendingCoinProps = {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
    data: {
      price: number;
      price_btc: string;
      price_change_percentage_24h: {
        usd?: number;
        btc?: number;
        [currency: string]: number | undefined;
      };
      market_cap: string;
      market_cap_btc: string;
      total_volume: string;
      total_volume_btc: string;
      sparkline: string;
      content: {
        title: string;
        description: string;
      };
    };
  };
};
