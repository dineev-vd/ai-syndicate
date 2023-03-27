import { createElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Configuration, StartupControllerApi } from "../../generated";
import { StartupDto } from "../../generated/models/StartupDto";
import { investInId, selectUser } from "../../store/userReducer";
import BlueButton from "../UIElements/BlueButton/BlueButton";
import Table from "../UIElements/Table/Table";
import "./ProjectsTable.scss";

const array: StartupDto[] = Array(20)
  .fill(1)
  .map((_, index) => ({
    currentStatus: `Status ${index}`,
    description: `Description ${index}`,
    domain: `Domain ${index}`,
    id: `${index}`,
    targetBudget: index * 1000,
    title: `Title ${index}`,
  }));

const ProjectsTable: React.FC = () => {
  const [projectList, setProjectList] = useState<StartupDto[]>(array);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <div className="projects-table">
        <Table>
          <thead>
            <tr>
              <th>Current Status</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Domain</th>
              <th>Target Budget</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {projectList.map((project) => (
              <tr key={project.id} onClick={() => navigate(project.id ?? "")}>
                <td>{project.currentStatus}</td>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{project.domain}</td>
                <td>{project.targetBudget}$</td>
                <td style={{ zIndex: 1 }}>
                  {user &&
                  project.id &&
                  user.investedStartups.includes(project.id) ? (
                    <BlueButton
                    onClick={(e) => e.stopPropagation()}
                    style={{backgroundColor: "lightgreen"}} name="Dashboard" />
                  ) : (
                    <BlueButton
                      onClick={(e) => {
                        e.stopPropagation();
                        user ?
                        project.id && dispatch(investInId(project.id)) : navigate("/login");
                      }}
                      name="Invest"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ProjectsTable;
