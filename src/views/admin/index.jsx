import Temperature from "views/admin/components/Temperature";
import SpeedFan from "views/admin/components/SpeedFan";

const Dashboard = () => {
  return (
    <div>

      {/* Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <SpeedFan />
        <Temperature />
      </div>
    </div>
  );
};

export default Dashboard;
