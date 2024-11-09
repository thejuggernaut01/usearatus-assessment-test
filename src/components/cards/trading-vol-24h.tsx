import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import BaseHelper from "@/utils/helper";

type TradingVol24hProps = {
  volume: number | undefined;
};

const TradingVol24h: React.FC<TradingVol24hProps> = ({ volume }) => {
  return (
    <Card className="h-1/2">
      <CardContent className="space-y-1 flex flex-col justify-center ">
        <CardTitle className="text-lg font-semibold">
          {BaseHelper.currencyFormatter(volume)}
        </CardTitle>
        <CardDescription className="text-gray-500 font-medium">
          24h Trading Volume
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default TradingVol24h;
