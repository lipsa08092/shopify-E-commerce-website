import StatCard from "../../Components/Admin/StartCard"

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">
        Welcome to Shopify
      </h1>

      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Total Categories" value="6" />
        <StatCard title="Total Products" value="100" />
        <StatCard title="General Inquiries" value="50" />
        <StatCard title="Bot Inquiries" value="19" />
      </div>
    </>
  );
};

export default Dashboard;
