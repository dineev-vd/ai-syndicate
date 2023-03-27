import { Route, Routes, useNavigate } from "react-router-dom";
import { StartupStatus } from "../../components/StartupDescription/StartupDescription";
import StartupInfo from "../../components/StartupInfo/StartupsInfo";
import Paginator from "../../components/UIElements/Paginator/Paginator";
import Table from "../../components/UIElements/Table/Table";

const NewStartupsIdeas: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="startups-ideas-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.
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
              </div>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Brief Description</th>
                    <th>Support Goal</th>
                  </tr>
                </thead>
                <tbody>
                  {Array(20)
                    .fill(1)
                    .map((_, index) => (
                      <tr onClick={() => navigate(index.toString())}>
                        <td>Name {index}</td>
                        <td>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Quis ipsum suspendisse ultrices
                          gravida.
                        </td>
                        <td>{index * 1000}</td>
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
          element={<StartupInfo status={StartupStatus.NEW} />}
        />
      </Routes>
    </>
  );
};

export default NewStartupsIdeas;
