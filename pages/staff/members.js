import ShortNavbar from "../../components/navBar/ShortNavbar";
import MemberMain from "../../components/main/staff/members";
import Footer from "../../components/footer/Footer";
export default function QRcode() {
    return (
        <>
            <ShortNavbar />
            <MemberMain />
            <Footer />
        </>
    );
}

QRcode.getLayout = function getLayout(page) {
    return <>{page}</>;
};
