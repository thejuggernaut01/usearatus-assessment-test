import { cn } from "@/lib/utils";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <main className={cn("", sora.className)}>
      <h2>Token List Technical Assesstment Exercise</h2>
    </main>
  );
}
