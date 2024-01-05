import Navbar from "../components/Header/Navbar"
import Slider from "../components/Slider/Slider.jsx"
import OTT_House from "../components/OTT_House/OTT_House"
import Footer from "../components/Footer/Footer.jsx"

export default function Home() {
    return (
        <div className="w-full min-h-screen scrollbar-hide">
            <Navbar />
            <Slider />
            <OTT_House />
            <Footer />
        </div>
    )
}