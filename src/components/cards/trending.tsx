import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { useTrendingData } from "@/services/home.service";
import Image from "next/image";
import BaseHelper from "@/utils/helper";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown, ChevronRight } from "lucide-react";

const Trending = () => {
  const { trendingData } = useTrendingData();

  return (
    <>
      <Card className="xl:flex-1">
        <CardContent className="space-y-5 p-0 py-4">
          <div className="flex items-center justify-between px-4">
            <CardTitle className="text-lg font-semibold">🔥 Trending</CardTitle>
            <div className="flex items-center">
              <p className="text-gray-700 text-sm">view more</p>
              <ChevronRight size={13} stroke="#374151" />
            </div>
          </div>

          <div className="space-y-1 text-sm px-2">
            {trendingData &&
              trendingData?.slice(0, 3).map((data) => (
                <div
                  key={data.item.coin_id}
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 hover:rounded"
                >
                  <div className="flex items-center gap-x-1">
                    <Image
                      src={data.item.small}
                      alt={data.item.name}
                      width={25}
                      height={25}
                    />
                    <p>{data.item.name}</p>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <p>{BaseHelper.currencyFormatter(data.item.data.price)}</p>

                    {data.item.data.price_change_percentage_24h?.usd && (
                      <div className="flex items-center">
                        {data.item.data.price_change_percentage_24h?.usd > 0 ? (
                          <ChevronUp size={16} stroke="#16a34a" />
                        ) : (
                          <ChevronDown size={16} stroke="#dc2626" />
                        )}

                        <p
                          className={cn(
                            data.item.data.price_change_percentage_24h?.usd > 0
                              ? "text-price-up"
                              : "text-price-down",
                          )}
                        >
                          {data.item.data.price_change_percentage_24h.usd
                            ?.toFixed(1)
                            .replace("-", "")}
                          %
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Trending;
