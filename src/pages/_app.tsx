// pages/_app.tsx
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  );
}
