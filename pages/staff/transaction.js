import ShortNavbar from "../../components/navBar/ShortNavbar";
import TransactionMain from "../../components/main/staff/transaction";
import Footer from "../../components/footer/Footer";
import MiniBar from "../../components/navBar/minimalBar";
import {navData} from "../../components/navBar/staff"; 
export default function QRcode() {
    return (
        <>
            <ShortNavbar />
            <MiniBar items={navData}/>
            <TransactionMain />
            <Footer />
        </>
    );
}

QRcode.getLayout = function getLayout(page) {
    return <>{page}</>;
};
