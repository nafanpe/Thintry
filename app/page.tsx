import "@fontsource/poppins";
import "@/app/page.css";
import Script from 'next/script';
import Image from 'next/image';
import Read from "@/components/Grid/Read";
// import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Find Your Perfect Articles, Every Time.",
  description: "Start reading now on Grovix Lab! Explore endless knowledge in your favorite category."
};

export default async function App() {
  return (
    <>
      <Read />
    </>
  );
}
