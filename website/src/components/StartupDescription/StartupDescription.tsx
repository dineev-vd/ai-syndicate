import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { investInId, selectUser } from "../../store/userReducer";
import ProgressBar from "../ProgressBar/ProgressBar";
import BlueButton from "../UIElements/BlueButton/BlueButton";
import "./StartupDescription.scss";

export enum StartupStatus {
  NEW,
  FUNDED,
  UNFUNDED,
  PROMOTED,
}

export interface StartupDescriprionProps {
  status?: StartupStatus;
}

const StartupDescription: React.FC<StartupDescriprionProps> = ({
  status = StartupStatus.NEW,
}) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { startupId } = useParams();
  const navigate = useNavigate();

  const numbers = useMemo(() => {
    switch (status) {
      case StartupStatus.FUNDED:
      case StartupStatus.PROMOTED:
        return (
          <>
            <div>
              <div>
                <i className="bi bi-bullseye"></i> Support Goal
              </div>
              <div>50000$</div>
            </div>
            <div>
              <div>
                <i className="bi bi-flag"></i> Points
              </div>
              <div>89/100</div>
            </div>
            <div>
              <div>
                <i className="bi bi-calendar-check"></i> Date of receipt of
                moderation results
              </div>
              <div>21-05-2020</div>
            </div>
            <div>
              <div>
                <i className="bi bi-currency-dollar"></i> support so far
              </div>
              <div>50000$</div>
            </div>
            <div>
              <div>
                <i className="bi bi-graph-up-arrow"></i> Complation rate
              </div>
              <div>74%</div>
            </div>
          </>
        );

      case StartupStatus.NEW:
        return (
          <>
            <div>
              <div>
                <i className="bi bi-bullseye"></i> Support Goal
              </div>
              <div>50000$</div>
            </div>
            <div>
              <div>
                <i className="bi bi-flag"></i> Points
              </div>
              <div>89/100</div>
            </div>
          </>
        );

      case StartupStatus.UNFUNDED:
        return (
          <>
            <div>
              <div>
                <i className="bi bi-bullseye"></i> Support Goal
              </div>
              <div>500$</div>
            </div>
            <div>
              <div>
                <i className="bi bi-flag"></i> Points
              </div>
              <div style={{ color: "red" }}>10/100</div>
            </div>
            <div>
              <div>
                <i className="bi bi-currency-dollar"></i> support so far
              </div>
              <div style={{ color: "red" }}>500$</div>
            </div>
          </>
        );
    }
  }, [status]);

  return (
    <div className="startup-description">
      <div className="startup-description-upper">
        <div className="startup-description-upper__info">
          <h1>Startup {startupId}</h1>
          <div>
            <b>Owner:</b> company name
          </div>
          <div className="startup-description-numbers">{numbers}</div>
        </div>
        <div className="startup-description-upper__socials"></div>
      </div>
      <div className="startup-description-lower">
        {status === StartupStatus.FUNDED && (
          <div className="startup-description-lower__progress-bar">
            <ProgressBar />
          </div>
        )}
        <div className="startup-description-lower__details">
          Enhanced Hearing For Clearer Conversations. Crisp Sound & Music. For
          Up To Severe Hearing Loss. Enhanced Hearing For Clearer Conversations.
          Crisp Sound & Music. For Up To Severe Hearing Loss.Enhanced Hearing
          For Clearer Conversations. Crisp Sound & Music. For Up To Severe
          Hearing Loss.Enhanced Hearing For Clearer Conversations. Crisp
        </div>
        <div className="startup-description-lower__buttons">
          {status === StartupStatus.FUNDED && (
            <>
              <BlueButton name="Invest" />
              <BlueButton name="Buy NFT" />
            </>
          )}
          {status === StartupStatus.UNFUNDED && (
            <>
              <BlueButton name="Buy a startup idea right now" />
            </>
          )}
          {status === StartupStatus.NEW && (
            <>
              <BlueButton name="Vote" />
            </>
          )}
          {status === StartupStatus.PROMOTED && startupId && (
            <>
              {user &&
              startupId &&
              user.investedStartups &&
              user.investedStartups.includes(startupId) ? (
                <BlueButton onClick={() => navigate("/dashboard/investments")} name="Dashboard" style={{backgroundColor: "lightgreen"}}/>
                ) : (
                <BlueButton onClick={() => user ? dispatch(investInId(startupId)) : navigate("/login")} name="Invest" />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartupDescription;
