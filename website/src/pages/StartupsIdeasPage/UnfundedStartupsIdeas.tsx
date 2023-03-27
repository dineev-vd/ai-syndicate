import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { StartupStatus } from "../../components/StartupDescription/StartupDescription";
import StartupInfo from "../../components/StartupInfo/StartupsInfo";
import Paginator from "../../components/UIElements/Paginator/Paginator";
import Table from "../../components/UIElements/Table/Table";

const UnfundedStartupsIdeas: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="startups-ideas-description">
        The category contains a list of startups that did not score the required
        number of points (when voting on a 10-point scale) or did not score the
        required number of points in the scoring system
      </div>
      <Routes>
        <Route
          index
          element={
            <>
              <div className="startups-ideas-category">
                <div>
                  <div>Category</div>
                  <select></select>
                </div>
                <div>
                  <div>Date of receipt of moderation results</div>
                  <select></select>
                </div>
              </div>
              <Table>
                <thead>
                  <tr>
                    <th> Name</th>
                    <th>Date of receipt of moderation results</th>
                    <th>Brief description </th>
                    <th>Support gaol</th>
                    <th>support so far</th>
                  </tr>
                </thead>
                <tbody>
                  {Array(20)
                    .fill(1)
                    .map((_, index) => (
                      <tr onClick={() => navigate(index.toString())}>
                        <td>Name {index}</td>
                        <td>{new Date().toDateString()}</td>
                        <td>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida.
                        </td>
                        <td>{index * 1000}</td>
                        <td>{index * 200}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
              <div className="startups-ideas-paginator">
                <Paginator
                  activePage={1}
                  setActivePage={() => {}}
                  maxPages={20}
                />
              </div>
            </>
          }
        />
        <Route
          path=":startupId/*"
          element={<StartupInfo status={StartupStatus.UNFUNDED} />}
        />
      </Routes>
    </>
  );
};

export default UnfundedStartupsIdeas;
