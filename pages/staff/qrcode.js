import ShortNavbar from "../../components/navBar/ShortNavbar";
import QrcodeMain from "../../components/main/staff/qrcode";
import Footer from "../../components/footer/Footer";
import MiniBar from "../../components/navBar/minimalBar";
import {navData} from "../../components/navBar/staff"; 
export default function QRcode() {
    return (
        <>
            <ShortNavbar />
            <MiniBar items={navData}/>
            <QrcodeMain />
            <Footer />
        </>
    );
}

QRcode.getLayout = function getLayout(page) {
    return <>{page}</>;
};
