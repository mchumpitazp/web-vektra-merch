import MainFaq from './MainFaq';
import HeaderDesktop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import MainHero from "./MainHero";
import MainHowItWorks from "./MainHowItWorks";
import MainPanels from "./MainPanels";
import MainProducts from "./MainProducts";
import MainFooter from './MainFooter';

export default function Main() {
    return (
        <>
            <HeaderDesktop />
            <HeaderMobile />
            <MainHero />
            <MainHowItWorks />
            <MainProducts />
            <MainPanels />
            <MainFaq />
            <MainFooter />
        </>
    )
}