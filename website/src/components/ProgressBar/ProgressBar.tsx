import "./ProgressBar.scss";

const ProgressBar: React.FC = () => {
  return <div className="progress-bar">
    <div className="progress-bar__upper">
      <div>Start date</div>
      <div>End  Date</div>
    </div>
    <div className="progress-bar__bar">
      <div className="progress-bar__progress"></div>
    </div>
    <div className="progress-bar__lower">
      <div>21/05/2020</div>
      <div>120 days left</div>
      <div>20/09/2022</div>
    </div>
  </div>;
};

export default ProgressBar;
