import ShortNavbar from "../../../components/navBar/ShortNavbar";
import EditMain from "../../../components/main/staff/edit";
import Footer from "../../../components/footer/Footer";
import MiniBar from "../../../components/navBar/minimalBar";
import {navData} from "../../../components/navBar/staff"; 

export default function Edit() {
    return (
        <>
            <ShortNavbar />
            <MiniBar items={navData}/>
            <EditMain />
            <Footer />
        </>
    );
}

Edit.getLayout = function getLayout(page) {
    return <>{page}</>;
};
