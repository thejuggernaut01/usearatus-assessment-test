import React, { useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import MarketCap from "./cards/market-cap";
import TradingVol24h from "./cards/trading-vol-24h";
import { useGlobalMarketData } from "@/services/home.service";
import Trending from "./cards/trending";
import LargestGainers from "./cards/largest-gainers";

const Highlights = () => {
  const [hideDetails, setHideDetails] = useState(true);
  const [showHighlight, setShowHighlight] = useState(true);

  const { globalMarketData, isLoading, error } = useGlobalMarketData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching market data</div>;

  const totalMarketCap = globalMarketData?.total_market_cap?.usd;
  const marketCapChange24 =
    globalMarketData?.market_cap_change_percentage_24h_usd;
  const volume = globalMarketData?.total_volume.usd;

  return (
    <>
      <div className="space-y-10">
        <div className="space-y-4 md:space-y-0 md:flex md:justify-between md:items-start mt-5">
          <div className="space-y-2">
            <h1 className="text-lg md:text-2xl font-semibold">
              Cryptocurrency Prices by Market Cap
            </h1>
            <div className="text-sm text-gray-500 space-y-4 md:w-[90%] lg:w-full">
              <p>
                The global cryptocurrency market cap today is $2.69 Trillion, a{" "}
                <span>1.6%</span> change in the last 24 hours.{" "}
                <button
                  onClick={() => setHideDetails((prev) => !prev)}
                  className="font-medium text-gray-700 underline"
                >
                  {hideDetails ? "Read more" : "Hide"}
                </button>
              </p>
              {!hideDetails && (
                <p>
                  Total cryptocurrency trading volume in the last day is at $174
                  Billion. Bitcoin dominance is at 56.1% and Ethereum dominance
                  is at 13.1%. CoinGecko is now tracking 15,124
                  cryptocurrencies. The largest gainers in the industry right
                  now are{" "}
                  <span className="font-medium text-gray-700">Derivatives</span>{" "}
                  and{" "}
                  <span className="font-medium text-gray-700">Perpetuals</span>{" "}
                  cryptocurrencies.
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Label
              htmlFor="highlight"
              className="font-medium text-gray-700 text-lg"
            >
              Highlight
            </Label>
            <Switch
              id="highlight"
              checked={showHighlight}
              onCheckedChange={() => setShowHighlight((prev) => !prev)}
            />
          </div>
        </div>

        {showHighlight && (
          <div className="space-y-1 xl:space-y-0 xl:flex xl:gap-x-2">
            <div className="space-y-1 xl:flex-1">
              <MarketCap
                totalMarketCap={totalMarketCap}
                marketCapChange24={marketCapChange24}
              />
              <TradingVol24h volume={volume} />
            </div>
            <Trending />
            <LargestGainers />
          </div>
        )}
      </div>
    </>
  );
};

export default Highlights;
