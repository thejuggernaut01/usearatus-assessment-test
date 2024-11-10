import React from "react";
import { useLargestGainerData } from "@/services/home.service";
import Image from "next/image";
import BaseHelper from "@/utils/helper";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";

const LargestGainers = () => {
  // According to Coingecko doc,
  // largest gainer endpoint '/coins/top_gainers_losers' is exclusively for Paid Plan Subscribers.
  // so i made use of the coin list market data endpoint /coins/markets
  const { data } = useLargestGainerData();

  // Sort coins by 24-hour percentage change in descending order
  const largestGainer = data?.sort(
    (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h,
  );

  return (
    <>
      <Card className="xl:flex-1">
        <CardContent className="space-y-5 p-0 py-4">
          <div className="flex items-center justify-between px-4">
            <CardTitle className="text-lg font-semibold">
              🚀 Largest Gainer
            </CardTitle>
            <div className="flex items-center cursor-pointer hover:text-green-500">
              <p className="text-gray-700 text-sm hover:text-green-500">
                view more
              </p>
              <ChevronRight
                size={13}
                className="text-gray-700 text-sm hover:text-green-500"
              />
            </div>
          </div>

          <div className="space-y-1 text-sm px-2">
            {largestGainer &&
              largestGainer?.slice(0, 3).map((data) => (
                <div
                  key={data.id}
                  className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 hover:rounded"
                >
                  <div className="flex items-center gap-x-1">
                    <Image
                      src={data.image}
                      alt={data.name}
                      width={25}
                      height={25}
                    />
                    <p>{data.name}</p>
                  </div>

                  <div className="flex items-center gap-x-2">
                    <p>{BaseHelper.currencyFormatter(data.current_price)}</p>

                    {data.price_change_percentage_24h && (
                      <div className="flex items-center">
                        {data.price_change_percentage_24h > 0 ? (
                          <ChevronUp size={16} stroke="#16a34a" />
                        ) : (
                          <ChevronDown size={16} stroke="#dc2626" />
                        )}

                        <p
                          className={cn(
                            data.price_change_percentage_24h > 0
                              ? "text-price-up"
                              : "text-price-down",
                          )}
                        >
                          {data.price_change_percentage_24h
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

export default LargestGainers;
