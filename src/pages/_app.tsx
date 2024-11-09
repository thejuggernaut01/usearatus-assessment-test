import TanstackProvider from "@/context/tanstack-provide";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TanstackProvider>
      <Component {...pageProps} />
    </TanstackProvider>
  );
}
