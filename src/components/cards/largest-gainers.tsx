import React from "react";
import { useLargestGainerData } from "@/services/home.service";
// import Image from 'next/image';
// import BaseHelper from '@/utils/helper';
// import { cn } from '@/lib/utils';
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";

const LargestGainers = () => {
  const { largestGainer } = useLargestGainerData();
  console.log(largestGainer);

  return (
    <>
      <Card className="xl:flex-1">
        <CardContent className="space-y-5 p-0 py-4">
          <div className="flex items-center justify-between px-4">
            <CardTitle className="text-lg font-semibold">
              🚀 Largest Gainer
            </CardTitle>
            <div className="flex items-center">
              <p className="text-gray-700 text-sm">view more</p>
              <ChevronRight size={13} stroke="#374151" />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default LargestGainers;
