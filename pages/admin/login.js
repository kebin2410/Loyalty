import ShortNavbar from "../../components/navBar/ShortNavbar";
import LoginForm from "../../components/login/admin/LoginForm";
import Footer from "../../components/footer/Footer";
export default function Login() {
  return (
    <>
      <ShortNavbar />
      <LoginForm />
      <Footer />
    </>
  );
}

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};
