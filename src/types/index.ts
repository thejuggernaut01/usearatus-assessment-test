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

export type LargestGainer = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: number | null;
  last_updated: string;
};
