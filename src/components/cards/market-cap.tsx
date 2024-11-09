import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import BaseHelper from "@/utils/helper";

type MarketCapProps = {
  totalMarketCap: number | undefined;
  marketCapChange24: number | undefined;
};

const MarketCap: React.FC<MarketCapProps> = ({
  totalMarketCap,
  marketCapChange24,
}) => {
  return (
    <Card>
      <CardContent className="space-y-1 flex flex-col justify-center ">
        <CardTitle className="text-lg font-semibold">
          {BaseHelper.currencyFormatter(totalMarketCap)}
        </CardTitle>
        <CardDescription className="text-gray-500 font-medium flex items-center gap-x-1">
          <p className="font-medium">Market Cap</p>{" "}
          {marketCapChange24 && (
            <p className="flex items-center">
              {marketCapChange24 > 0 ? (
                <ChevronUp size={16} stroke="#16a34a" />
              ) : (
                <ChevronDown size={16} stroke="#dc2626" />
              )}

              <span className="text-[#dc2626]">
                {marketCapChange24.toFixed(1)}%
              </span>
            </p>
          )}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default MarketCap;
