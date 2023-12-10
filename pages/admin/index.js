import Navbar from "../../components/navBar/ShortNavbar";
import LoginForm from "../../components/login/partner/LoginForm";
import Footer from "../../components/footer/Footer";
export default function Login() {
    return (
        <>
            <Navbar />
            <LoginForm />
            <Footer />
        </>
    );
}

Login.getLayout = function getLayout(page) {
    return <>{page}</>;
};
