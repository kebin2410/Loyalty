import ShortNavbar from "../components/common/ShortNavbar";
import OtpForm from "../components/otp/OtpForm";
import Footer from "../components/footer/Footer";
export default function Otp() {
  return (
    <>
      <ShortNavbar />
      <OtpForm />
      <Footer />
    </>
  );
}

Otp.getLayout = function getLayout(page) {
  return <>{page}</>;
};
