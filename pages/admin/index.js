import Navbar from "../../components/navBar/Navbar";
import AdminDashboard from "../../components/main/admin/admin";
import { navData } from "../../components/navBar/miniData/admin";
import MinimalBar from "../../components/navBar/minimalBar";
import Footer from "../../components/footer/Footer";
export default function Dashboard() {
    return (
        <>
            <Navbar />
            <MinimalBar items={navData}/>
            <AdminDashboard />
            <Footer />
        </>
    );
}

Dashboard.getLayout = function getLayout(page) {
    return <>{page}</>;
};
