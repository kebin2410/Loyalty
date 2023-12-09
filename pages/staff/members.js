import ShortNavbar from "../../components/navBar/ShortNavbar";
import MemberMain from "../../components/main/staff/members";
import Footer from "../../components/footer/Footer";
import MiniBar from "../../components/navBar/minimalBar";
import {navData} from "../../components/navBar/staff"; 
export default function QRcode() {
    return (
        <>
            <ShortNavbar />
            <MiniBar items={navData}/>
            <MemberMain />
            <Footer />
        </>
    );
}

QRcode.getLayout = function getLayout(page) {
    return <>{page}</>;
};
