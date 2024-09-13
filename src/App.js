import "./App.css";
import SideBar from "./components/sidebar";
import Header from "./components/header";
import OverviewPage from "./components/pages/overviewPage";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Campaign from "./components/pages/campaign";
import CampaignInfo from "./components/pages/campaignInfo";

import CreateCampaigns from "./components/pages/createCampaign";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="w-[292px] fixed">
          <SideBar />
        </div>
        <div className="md:ml-[292px]">
          <Header />
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<OverviewPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/campaign" element={<Campaign />} />

            <Route path="/create-campaigns" element={<CreateCampaigns />} />

            <Route
              path="/campaign/:campaignName/:id"
              element={<CampaignInfo />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
