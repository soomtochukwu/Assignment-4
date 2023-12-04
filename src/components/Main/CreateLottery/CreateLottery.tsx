import "./CreateLottery.css";

interface createLotteryProps {
  createLottery: () => Promise<void>;
}

const CreateLottery = ({ createLottery }: createLotteryProps) => {
  return (
    <form className="CreateLottery lottery-inputs">
      <input placeholder="Lottery ID" type="text" />
      <input placeholder="Lottery Name" type="text" />
      <input type="submit" onClick={createLottery} className="button" value="Create Lottery" />
    </form>
  );
};

export { CreateLottery };
