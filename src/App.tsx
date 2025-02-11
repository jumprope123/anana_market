import { Outlet } from "react-router-dom";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

import Header from "./layout/header";
function App() {
  ModuleRegistry.registerModules([AllCommunityModule]);
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
