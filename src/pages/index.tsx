import Highlights from "@/components/highlights";
import { cn } from "@/lib/utils";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <main className={cn("w-[95%] md:w-[90%] mx-auto", sora.className)}>
      <Highlights />
    </main>
  );
}
