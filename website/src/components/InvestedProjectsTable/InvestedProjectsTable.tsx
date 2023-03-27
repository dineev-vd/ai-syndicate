import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StartupDto } from "../../generated";
import { selectUser } from "../../store/userReducer";
import Paginator from "../UIElements/Paginator/Paginator";
import Table from "../UIElements/Table/Table";
import "./InvestedProjectsTable.scss";

const InvestedProjectsTable: React.FC = () => {
  const [projects, setProjects] = useState<StartupDto[]>([]);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    setProjects(
      user.investedStartups.map((index) => ({
        currentStatus: `Status ${index}`,
        description: `Description ${index}`,
        domain: `Domain ${index}`,
        id: `${index}`,
        targetBudget: +index * 1000,
        title: `Title ${index}`,
      }))
    );
  }, [user]);

  return (
    <div className="invested-projects">
      <div className="invested-projects-total">
        Total Investments:{" "}
        {projects
          .map((p) => p.targetBudget ?? 0)
          .reduce((prev, cur) => prev + cur, 0)}
        $
      </div>
      <div className="invested-projects-controls">
        <div>Filters</div>
        <label>
          ID<input></input>
        </label>
        <label>
          Project Name<input></input>
        </label>
      </div>
      <div className="invested-projects-table">
        <Table>
          <thead>
            <tr>
              <th>Current Status</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Domain</th>
              <th>Invested</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={index}
                onClick={() =>
                  navigate(project.id ? `/projects/${project.id}` : "")
                }
              >
                <td>{project.currentStatus}</td>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{project.domain}</td>
                <td>{project.targetBudget}$</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="invested-projects-table__paginator">
        </div>
      </div>
    </div>
  );
};

export default InvestedProjectsTable;
