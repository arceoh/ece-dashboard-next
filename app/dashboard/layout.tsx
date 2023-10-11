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

// mx-auto max-w-7xl sm:px-6 lg:px-8 pt-4
