import "./StatisticsItem.scss";

interface StatisticsItemProps {
  text: string;
}

const StatisticsItem: React.FC<StatisticsItemProps> = ({ text }) => {
  return (
    <div className="statistics-item">
      <div>{text}</div>
      <div className="statistics-item__count">10</div>
      <div className="statistics-item__circle"></div>
      <i className="bi bi-collection statistics-item__icon"></i>
      <div className="statistics-item__link">
        Go to link
        <i className="statistics-item__link-icon bi bi-chevron-double-right"></i>
      </div>
    </div>
  );
};

export default StatisticsItem;
