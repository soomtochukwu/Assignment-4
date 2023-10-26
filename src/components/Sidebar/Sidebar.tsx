import { Lotteries } from "./Lotteries/Lotteries";
import { Participants } from "./Participants/Participants";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Lotteries />
      <Participants />
    </div>
  );
};

export { Sidebar };
