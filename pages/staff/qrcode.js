import ShortNavbar from "../../components/navBar/ShortNavbar";
import QrcodeMain from "../../components/main/staff/qrcode";
import Footer from "../../components/footer/Footer";
export default function QRcode() {
    return (
        <>
            <ShortNavbar />
            <QrcodeMain />
            <Footer />
        </>
    );
}

QRcode.getLayout = function getLayout(page) {
    return <>{page}</>;
};
