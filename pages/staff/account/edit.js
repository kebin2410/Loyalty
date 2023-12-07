import ShortNavbar from "../../../components/navBar/ShortNavbar";
import StaffMain from "../../../components/main/staff";
import Footer from "../../../components/footer/Footer";
export default function Login() {
    return (
        <>
            <ShortNavbar />
            <StaffMain />
            <Footer />
        </>
    );
}

Login.getLayout = function getLayout(page) {
    return <>{page}</>;
};
