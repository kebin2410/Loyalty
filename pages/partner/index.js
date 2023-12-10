import Navbar from "../../components/navBar/ShortNavbar";
import LoginForm from "../../components/login/partner/LoginForm";
import Footer from "../../components/footer/Footer";
import Minibar from "../../components/navBar/minimalBar";
import { navData } from "../../components/navBar/miniData/partner";
import { PartnerMenuInfo } from "../../components/navBar/userMenu/userMenuData";
export default function Login() {
    return (
        <>
            <Navbar userMenu={PartnerMenuInfo}/>
            <Minibar items={navData}/>
            <LoginForm />
            <Footer />
        </>
    );
}

Login.getLayout = function getLayout(page) {
    return <>{page}</>;
};
