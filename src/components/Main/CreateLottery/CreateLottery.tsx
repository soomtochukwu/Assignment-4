/* eslint-disable @typescript-eslint/ban-ts-comment */
import "./CreateLottery.css";
interface createLotteryProps {
  createLottery: () => Promise<void>;
  setLotteryId: () => Promise<void>;
  setNoOfPart: () => Promise<void>;
  lotteryId: number;
  Lottery_noOfPart: number;
}

const CreateLottery = ({
  createLottery,
  setLotteryId,
  setNoOfPart,
  lotteryId,
  Lottery_noOfPart
}: createLotteryProps) => {

  return (
    <div className="CreateLottery lottery-inputs">

      <input
        placeholder="Lottery ID"
        value={lotteryId}
        min={1}
        onChange={setLotteryId}
        type="number"
      />

      <input
        placeholder="Lottery Name"
        /* value={Lottery_Name}
        onChange={setName} */
        type="text"
      />

      <input
        placeholder="No Of Participants"
        value={Lottery_noOfPart}
        onChange={setNoOfPart}
        min={2}
        type="number"
      />

      <input
        type="submit"
        onClick={createLottery}
        className="button"
        value="Create Lottery"
      />

    </div>
  );
};

export { CreateLottery };
