import DashboardLayout from "./core/layouts/dashboard/DashboardLayout";
import Card from "./shared/components/Cards/Card/Card";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <DashboardLayout />
    </>
  );
}

export default App;
