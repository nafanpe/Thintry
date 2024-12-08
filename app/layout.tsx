import "@/app/css/globals.css";
import Header from "@/components/Header/Header";
import HeaderMobile from '@/components/HeaderMobile/HeaderMobile'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/fav/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/fav/favicon.svg" />
        <link rel="shortcut icon" href="/fav/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/fav/site.webmanifest" />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
      </head>
      <body>
        <div className='homepage-master-container'>
          <div className='homepage-container'>
            <Header />
            <div className='centre-section'>
              <div className='left-container'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
