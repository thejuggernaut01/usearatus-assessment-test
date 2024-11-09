import { useQuery } from "@tanstack/react-query";
import api from "./base.service";
import { GlobalDataProps, TrendingCoinProps } from "@/types";

const getGlobalMarketData = async () => {
  const response = await api.get("/global");
  return response.data.data as GlobalDataProps;
};

const getTrendingData = async () => {
  const response = await api.get("/search/trending");
  return response.data.coins as TrendingCoinProps[];
};

const getLargestGainer = async () => {
  const response = await api.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: 100,
      page: 1,
      sparkline: false,
    },
  });

  return response.data;
};

export const useGlobalMarketData = () => {
  const {
    data: globalMarketData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["global-market-data"],
    queryFn: () => getGlobalMarketData(),
  });

  return { globalMarketData, isLoading, error };
};

export const useTrendingData = () => {
  const { data: trendingData } = useQuery({
    queryKey: ["trending-data"],
    queryFn: () => getTrendingData(),
  });

  return { trendingData };
};

export const useLargestGainerData = () => {
  const { data: largestGainer } = useQuery({
    queryKey: ["largest-gainer"],
    queryFn: () => getLargestGainer(),
  });

  return { largestGainer };
};
