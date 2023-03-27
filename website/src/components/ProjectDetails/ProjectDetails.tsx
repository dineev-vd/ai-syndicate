import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Configuration, StartupControllerApi } from "../../generated";
import { StartupDto } from "../../generated/models/StartupDto";
import style from "./ProjectDetails.module.scss";

// const { REACT_APP_API_ENDPOINT } = process.env;

const ProjectDetails: React.FC = () => {
  const [project, setProject] = useState<StartupDto>();
  const { projectId } = useParams();
  // const config = new Configuration({ basePath: REACT_APP_API_ENDPOINT });
  // const api = new StartupControllerApi(config);

  useEffect(() => {
    if (!projectId) return;

    // api.getStartupUsingGET({ id: projectId }).then((response) => {
    //   setProject(response);
    // });
    setProject({
      currentStatus: `Status ${projectId}`,
      description: `Description ${projectId}`,
      domain: `Domain ${projectId}`,
      id: `fake_id_${projectId}`,
      targetBudget: +projectId * 1000,
      title: `Title ${projectId}`,
    });
  }, [projectId]);

  return (
    <>
      <div className={style.projectDetails}>
        {project && (
          <>
            <div className="project-details-title">{project.title}</div>
            <div className="project-details-desc">{project.description}</div>
            <div className="project-details-domain">
              Domain: {project.domain}
            </div>
            <div className="project-details-status">
              Status: {project.currentStatus}
            </div>
            <div className="project-details-target-budget">
              Goal: {project.targetBudget}$
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProjectDetails;
