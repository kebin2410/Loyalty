import ShortNavbar from "../components/common/ShortNavbar";
import RegisterForm from "../components/Register/RegisterForm";
import Footer from "../components/footer/Footer";
export default function Register() {
  return (
    <>
      <ShortNavbar />
      <RegisterForm />
      <Footer />
    </>
  );
}

Register.getLayout = function getLayout(page) {
  return <>{page}</>;
};
