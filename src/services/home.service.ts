import { useQuery } from "@tanstack/react-query";
import api from "./base.service";
import { GlobalDataProps, TrendingCoinProps, LargestGainer } from "@/types";

const fetchGlobalMarketData = async () => {
  const response = await api.get("/global");
  return response.data.data as GlobalDataProps;
};

const fetchTrendingData = async () => {
  const response = await api.get("/search/trending");
  return response.data.coins as TrendingCoinProps[];
};

const fetchLargestGainer = async () => {
  const response = await api.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 100,
      page: 1,
      sparkline: false,
    },
  });
  return response.data as LargestGainer[];
};

const fetchTokenData = async () => {
  // const response = await api.get(
  //   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true',
  // );
  const response = await api.get(
    "  https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true",
  );

  return response.data;
};

export const useGlobalMarketData = () => {
  const {
    data: globalMarketData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["global-market-data"],
    queryFn: () => fetchGlobalMarketData(),
  });

  return { globalMarketData, isLoading, error };
};

export const useTrendingData = () => {
  const { data: trendingData } = useQuery({
    queryKey: ["trending-data"],
    queryFn: () => fetchTrendingData(),
  });

  return { trendingData };
};

export const useLargestGainerData = () => {
  const { data } = useQuery({
    queryKey: ["largest-gainer"],
    queryFn: () => fetchLargestGainer(),
  });

  return { data };
};

export const useTokenData = () => {
  const { data: tokens } = useQuery({
    queryKey: ["token-data"],
    queryFn: () => fetchTokenData(),
  });

  return { tokens };
};
