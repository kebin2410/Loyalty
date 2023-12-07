import ShortNavbar from "../../../components/navBar/ShortNavbar";
import EditMain from "../../../components/main/staff/edit";
import Footer from "../../../components/footer/Footer";
export default function Edit() {
    return (
        <>
            <ShortNavbar />
            <EditMain />
            <Footer />
        </>
    );
}

Edit.getLayout = function getLayout(page) {
    return <>{page}</>;
};
