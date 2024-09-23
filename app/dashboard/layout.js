import Navbar from "@/components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="shadow-lg">
        <Navbar />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
