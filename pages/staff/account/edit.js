import ShortNavbar from "../../../components/navBar/ShortNavbar";
import Edit from "../../../components/main/staff/edit";
import Footer from "../../../components/footer/Footer";
export default function Login() {
    return (
        <>
            <ShortNavbar />
            <Edit />
            <Footer />
        </>
    );
}

Login.getLayout = function getLayout(page) {
    return <>{page}</>;
};
