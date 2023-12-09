import ShortNavbar from "../../components/navBar/ShortNavbar";
import EarnMain from "../../components/main/staff/earn";
import Footer from "../../components/footer/Footer";
import MiniBar from "../../components/navBar/minimalBar";
import {navData} from "../../components/navBar/staff"; 

export default function Earn() {
    return (
        <>
            <ShortNavbar />
            <MiniBar items={navData}/>
            <EarnMain />
            <Footer />
        </>
    );
}

Earn.getLayout = function getLayout(page) {
    return <>{page}</>;
};
