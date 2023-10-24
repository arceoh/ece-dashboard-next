import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

type Props = {
  children: React.ReactNode;
};
export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex-col flex">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
