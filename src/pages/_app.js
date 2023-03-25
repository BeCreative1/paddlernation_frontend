import "@/styles/globals.css";
import Head from "next/head";
import "animate.css/animate.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
