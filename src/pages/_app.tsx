import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18n";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      {mounted && <Component {...pageProps} />}
    </I18nextProvider>
  );
}

export default App;
