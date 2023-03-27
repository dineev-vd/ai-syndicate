import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { selectUser } from "../../store/userReducer";

const TotalInvestedChard: React.FC = () => {
  const user = useSelector(selectUser);
  const data = useMemo(
    () =>
      (user &&
        user.investedStartups.map((value, index) => ({
          amount: +value * 1000,
          index: index,
        }))) ??
      [],
    [user]
  );

  return (
    <LineChart width={1500} height={400} data={data}>
      <XAxis dataKey="index" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line
        type="linear"
        dataKey="amount"
        stroke="#73BBFF"
        yAxisId={0}
        strokeWidth={5}
      />
    </LineChart>
  );
};

export default TotalInvestedChard;
