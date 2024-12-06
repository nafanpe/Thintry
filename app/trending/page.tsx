import "@fontsource/poppins";
import Script from 'next/script';
import Image from 'next/image';
import MobileHeader from "@/components/mobile_header";
import DeskHeader from "@/components/desktop_header";
import Gride from "@/components/trending_gride";
import Footer from "@/components/footer";
import Link from "next/link";

export const metadata = {
    title: "Trending Articles / Grovix Lab",
    description: "Start reading trending articles now on Grovix Lab! Explore endless knowledge in your favorite category."
};

export default async function App() {
    const path = (
        <>
            <Link href="/">Home</Link>&nbsp;&gt;&nbsp;<Link href="/trending">Trending</Link>
        </>
    );
    return (
        <>
            <MobileHeader page={"trending"} path={path} />
            <div className="topContainer">
                <div className="desktopMenu"></div>
                <DeskHeader page={"trending"} path={path} />
                <div className="mainContainer">
                    <div className="fitCo">
                        <div className="grideGroup">
                            <Gride />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
