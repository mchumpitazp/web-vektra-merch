import HeaderDesktop from "../../components/HeaderDesktop";
import HeaderMobile from "../../components/HeaderMobile";
import StatisticsHero from "./StatisticsHero";
import StatisticsInfo from "./StatisticsInfo";


export default function Statistics() {
    return (
        <section id="statistics">
            <HeaderDesktop />
            <HeaderMobile />
            <StatisticsHero />
            <StatisticsInfo />
        </section>
    )
}