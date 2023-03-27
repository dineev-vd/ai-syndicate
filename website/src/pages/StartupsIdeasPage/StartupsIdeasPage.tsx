import { Navigate, Route, Routes } from "react-router-dom";
import Filler from "../../components/FillerSignup/FillerSignup";
import Links from "../../components/UIElements/Links/Links";
import Paginator from "../../components/UIElements/Paginator/Paginator";
import Table from "../../components/UIElements/Table/Table";
import FundedStartupsIdeas from "./FundedStartupsIdeas";
import NewStartupsIdeas from "./NewStartupsIdeas";
import "./StartupsIdeasPage.scss";
import UnfundedStartupsIdeas from "./UnfundedStartupsIdeas";

const StartupsIdeasPage: React.FC = () => {
  return (
    <div>
      <Filler
        title="AI startup ideas registration bank"
        description="Fund new and groundbreaking projects, including hits from Syndicate Platform"
      />
      <div className="startups-ideas-wrapper">
        <div className="startups-ideas">
          <div className="startups-ideas-links">
            <Links
              links={[
                { title: "Funded startups", location: "funded" },
                { title: "New startups", location: "new" },
                { title: "Unfunded startups", location: "unfunded" },
              ]}
            />
          </div>
          <Routes>
            <Route index element={<Navigate to={"funded"} replace />} />
            <Route path="new/*" element={<NewStartupsIdeas />} />
            <Route path="unfunded/*" element={<UnfundedStartupsIdeas />} />
            <Route path="funded/*" element={<FundedStartupsIdeas />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default StartupsIdeasPage;
