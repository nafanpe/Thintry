import "@/app/css/globals.css";
import Header from "@/components/Header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
