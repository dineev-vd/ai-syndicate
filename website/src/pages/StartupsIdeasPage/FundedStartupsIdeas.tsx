import { Route, Routes, useNavigate } from "react-router-dom";
import Paginator from "../../components/UIElements/Paginator/Paginator";
import Table from "../../components/UIElements/Table/Table";
import StartupInfo from "../../components/StartupInfo/StartupsInfo";
import { StartupStatus } from "../../components/StartupDescription/StartupDescription";

const FundedStartupsIdeas: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="startups-ideas-description">
        The category contains a list of startups that have passed moderation
      </div>
      <Routes>
        <Route
          index
          element={
            <div>
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
                    <th>Brief Description </th>
                    <th>Support Goal</th>
                    <th>Support So Far</th>
                    <th>Complation Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {Array(20)
                    .fill(1)
                    .map((_, index) => (
                      <tr
                        key={index}
                        onClick={() => navigate(index.toString())}
                      >
                        <td>Name {index}</td>
                        <td>{new Date().toDateString()}</td>
                        <td>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida.
                        </td>
                        <td>{index * 1000}</td>
                        <td>{index * 1000}</td>
                        <td>75%</td>
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
            </div>
          }
        />
        <Route
          path=":startupId/*"
          element={<StartupInfo status={StartupStatus.FUNDED} />}
        />
      </Routes>
    </>
  );
};

export default FundedStartupsIdeas;
