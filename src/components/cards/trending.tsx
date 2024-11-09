import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { ChevronRight } from "lucide-react";
import { useTrendingData } from "@/services/home.service";
import Image from "next/image";
import BaseHelper from "@/utils/helper";
import { cn } from "@/lib/utils";

const Trending = () => {
  const { trendingData } = useTrendingData();
  // console.log(trendingData);

  return (
    <>
      <Card>
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
                    <p
                      className={cn(
                        data.item.data.price_change_percentage_24h?.usd &&
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
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Trending;
