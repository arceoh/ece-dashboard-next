import Navbar from "../components/Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-full">
      <Navbar />
      <main>
        <div className="px-4">{children}</div>
      </main>
    </div>
  );
}
