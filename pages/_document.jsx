import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2f2f2f" />
        <meta name="msapplication-TileColor" content="#2f2f2f" />
        <meta name="theme-color" content="#1a6ea6" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@agcsbahrain" />
        <meta name="twitter:creator" content="@agcsbahrain" />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:site_name" content="AlliedGulf.me" />
        <meta property="og:type" content="website" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TD9WJ26');
            `}
        </Script>
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: (
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-TD9WJ26"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              ></iframe>
            ),
          }}
        ></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
