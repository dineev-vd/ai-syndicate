import { Route, Routes } from "react-router-dom";
import Filler from "../../components/FillerSignup/FillerSignup";
import ProjectsTable from "../../components/ProjectsTable/ProjectsTable";
import { StartupStatus } from "../../components/StartupDescription/StartupDescription";
import StartupInfo from "../../components/StartupInfo/StartupsInfo";
import Paginator from "../../components/UIElements/Paginator/Paginator";
import "./ProjectsPage.scss";

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page">
      <Filler
        title="Our startup projects"
        description="Fund new and groundbreaking projects, including hits from Syndicate Platform"
      />
      <div className="projects-wrapper">
        <div className="projects-content">
          <Routes>
            <Route
              index
              element={
                <>
                  <h1>Projects Categories</h1>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </h2>
                  <div className="projects-categories">
                    <i className="bi bi-arrow-left project-categories__arrow"></i>
                    <div>All </div>
                    <div>Phones & Accessories</div>
                    <div>Audio</div>
                    <div>Education</div>
                    <div>Health & Fitness</div>
                    <div>Energy & Green Tech</div>
                    <i className="bi bi-arrow-right project-categories__arrow"></i>
                  </div>
                  <div className="projects-filters">
                    <div className="projects-filters-title">Filters</div>
                    <div className="projects-filters-content">
                      <div>
                        <div>Category</div>
                        <input></input>
                      </div>
                      <div>
                        <div>Support so far</div>
                        <input></input>
                      </div>
                      <div>
                        <div>Complation rate</div>
                        <input></input>
                      </div>
                    </div>
                    <div className="projects-filters-content">
                      <div>
                        <div>Support Goal</div>
                        <input></input>
                      </div>
                      <div>
                        <div>Country</div>
                        <input></input>
                      </div>
                      <div>
                        <div>Start Date</div>
                        <input></input>
                      </div>
                    </div>
                  </div>
                  <div className="projects-content__table">
                    <ProjectsTable />
                  </div>
                  <div className="projects-paginator">
                    <Paginator
                      activePage={1}
                      maxPages={50}
                      setActivePage={() => {}}
                    />
                  </div>
                </>
              }
            />
            <Route
              path=":startupId/*"
              element={<StartupInfo status={StartupStatus.PROMOTED} />}
            />
          </Routes>
        </div>
      </div>
      {/* <Routes>
        <Route path=":projectId" element={<ProjectDetails />} />
        <Route index element={<ProjectsTable />} />
      </Routes> */}
    </div>
  );
};

export default ProjectsPage;
