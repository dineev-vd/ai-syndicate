import { Navigate, Route, Routes, useParams } from "react-router-dom";
import ImageBlock from "../ImageBlock/ImageBlock";
import StartupDescription, {
  StartupDescriprionProps,
} from "../StartupDescription/StartupDescription";
import Links from "../UIElements/Links/Links";
import "./StartupInfo.scss";

interface StartupInfoProps extends StartupDescriprionProps {}

const StartupInfo: React.FC<StartupInfoProps> = ({ status }) => {
  const { startupId } = useParams();

  return (
    <div className="startup-info">
      <div className="startup-info-content">
        <div className="startup-info-image-block">
          <ImageBlock />
        </div>
        <div className="startup-info-description">
          <StartupDescription status={status} />
        </div>
      </div>
      <div className="startup-info-tabs">
        <div className="startup-info-tabs__links">
          <Links
            links={[
              { location: "description", title: "Description" },
              { location: "plan", title: "Business Plan" },
              { location: "video", title: "Video Presentation" },
            ]}
          />
        </div>
        <div className="startup-info-tabs__content">
          <Routes>
            <Route index element={<Navigate to={"description"} replace />} />
            <Route
              path="description"
              element={
                <div>
                  Enhanced Hearing For Clearer Conversations. Crisp Sound &
                  Music. For Up To Severe Hearing Loss. Enhanced Hearing For
                  Clearer Conversations. Crisp Sound & Music. For Up To Severe
                  Hearing Loss.Enhanced Hearing For Clearer Conversations. Crisp
                  Sound & Music. For Up To Severe Hearing Loss.Enhanced Hearing
                  For Clearer Conversations. Crisp Sound & Music. For Up To
                  Severe Hearing Loss.Enhanced Hearing For Clearer
                  Conversations. Crisp Sound & Music. For Up To Severe Hearing
                  Loss.Enhanced Hearing For Clearer Conversations. Crisp Sound &
                  Music. For Up To Severe Hearing Loss.Enhanced Hearing For
                  Clearer Conversations. Crisp Sound & Music. For Enhanced
                  Hearing For Clearer Conversations. Crisp Sound & Music. For Up
                  To Severe Hearing Loss. Enhanced Hearing For Clearer
                  Conversations. Crisp Sound & Music. For Up To Severe Hearing
                  Loss.Enhanced Hearing For Clearer Conversations. Crisp Sound &
                  Music. For Up To Severe Hearing Loss.Enhanced Hearing For
                  Clearer Conversations. Crisp Sound & Music. For Up To Severe
                  Hearing Loss.Enhanced Hearing For Clearer Conversations. Crisp
                  Sound & Music. For Up To Severe Hearing Loss.Enhanced Hearing
                  For Clearer Conversations. Crisp Sound & Music. For Up To
                  Severe Hearing Loss.Enhanced Hearing For Clearer
                  Conversations. Crisp Sound & Music. For Enhanced Hearing For
                  Clearer Conversations. Crisp Sound & Music. For Up To Severe
                  Hearing Loss. Enhanced Hearing For Clearer Conversations.
                  Crisp Sound & Music. For Up To Severe Hearing Loss.Enhanced
                  Hearing For Clearer Conversations. Crisp Sound & Music. For Up
                  To Severe Hearing Loss.Enhanced Hearing For Clearer
                  Conversations. Crisp Sound & Music. For Up To Severe Hearing
                  Loss.Enhanced Hearing For Clearer Conversations. Crisp Sound &
                  Music. For Up To Severe Hearing Loss.Enhanced Hearing For
                  Clearer Conversations. Crisp Sound & Music. For Up To Severe
                  Hearing Loss.Enhanced Hearing For Clearer Conversations. Crisp
                  Sound & Music. For Enhanced Hearing For Clearer Conversations.
                  Crisp Sound & Music. For Up To Severe Hearing Loss. Enhanced
                  Hearing For Clearer Conversations. Crisp Sound & Music. For Up
                  To Severe Hearing Loss.Enhanced Hearing For Clearer
                  Conversations. Crisp Sound & Music. For Up To Severe Hearing
                  Loss.Enhanced Hearing For Clearer Conversations. Crisp Sound &
                  Music. For Up To Severe Hearing Loss.Enhanced Hearing For
                  Clearer Conversations. Crisp Sound & Music. For Up To Severe
                  Hearing Loss.Enhanced Hearing For Clearer Conversations. Crisp
                  Sound & Music. For Up To Severe Hearing Loss.Enhanced Hearing
                  For{" "}
                </div>
              }
            />
            <Route
              path="plan"
              element={
                <div>
                  Enhanced Hearing For Clearer Conversations. Crisp Sound &
                  Music. For Up To Severe Hearing Loss. Enhanced Hearing For
                  Clearer Conversations. Crisp Sound & Music. For Up To Severe
                  Hearing Loss.Enhanced Hearing For Clearer Conversations. Crisp
                  Sound & Music. For Up To Severe Hearing Loss.Enhanced Hearing
                  For Clearer Conversations. Crisp Sound & Music. For Up To
                  Severe Hearing Loss.Enhanced Hearing For Clearer
                  Conversations. Crisp Sound & Music. For Up To Severe Hearing
                  Loss.Enhanced Hearing For Clearer Conversations. Crisp Sound &
                  Music. For Up To Severe Hearing Loss.Enhanced Hearing For
                  Clearer Conversations. Crisp Sound & Music. For Enhanced
                  Hearing For Clearer Conversations. Crisp Sound & Music. For Up
                  To Severe Hearing Loss. Enhanced Hearing For Clearer
                  Conversations. Crisp Sound & Music. For Up To Severe Hearing
                  Loss.Enhanced Hearing For Clearer Conversations. Crisp Sound &
                  Music. For Up To Severe Hearing Loss.Enhanced Hearing For
                  Clearer Conversations. Crisp Sound & Music. For Up To Severe
                  Hearing Loss.Enhanced Hearing For Clearer Conversations. Crisp
                  Sound & Music. For Up To Severe Hearing Loss.Enhanced Hearing
                  For Clearer Conversations. Crisp Sound & Music. For Up To
                  Severe Hearing Loss.Enhanced Hearing For Clearer
                  Conversations. Crisp Sound & Music. For Enhanced Hearing For
                  Clearer Conversations. Crisp Sound & Music. For Up To Severe
                  Hearing Loss. Enhanced Hearing For Clearer Conversations.
                  Crisp Sound & Music. For Up To Severe Hearing Loss.Enhanced
                  Hearing For Clearer Conversations. Crisp Sound & Music. For Up
                  To Severe Hearing Loss.Enhanced Hearing For Clearer
                  Conversations. Crisp Sound & Music. For Up To Severe Hearing
                  Loss.Enhanced Hearing For Clearer Conversations. Crisp Sound &
                  Music. For Up To Severe Hearing Loss.Enhanced Hearing For
                  Clearer Conversations. Crisp Sound & Music. For Up To Severe
                  Hearing Loss.Enhanced Hearing For Clearer Conversations. Crisp
                  Sound & Music. For Enhanced Hearing For Clearer Conversations.
                  Crisp Sound & Music. For Up To Severe Hearing Loss. Enhanced
                  Hearing For Clearer Conversations. Crisp Sound & Music. For Up
                  To Severe Hearing Loss.Enhanced Hearing For Clearer
                  Conversations. Crisp Sound & Music. For Up To Severe Hearing
                  Loss.Enhanced Hearing For Clearer Conversations. Crisp Sound &
                  Music. For Up To Severe Hearing Loss.Enhanced Hearing For
                  Clearer Conversations. Crisp Sound & Music. For Up To Severe
                  Hearing Loss.Enhanced Hearing For Clearer Conversations. Crisp
                  Sound & Music. For Up To Severe Hearing Loss.Enhanced Hearing
                  For{" "}
                </div>
              }
            />
            <Route path="video" element={<div></div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default StartupInfo;
