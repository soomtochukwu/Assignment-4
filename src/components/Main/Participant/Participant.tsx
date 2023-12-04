interface ParticipantProps {
  account: string;
  getOwner: () => Promise<void>;
  owner: string;

  lotteryId_p: number;
  setLotteryId_p: () => Promise<void>;
  participate: () => Promise<void>;
}

const Participant = ({ account, getOwner, owner, lotteryId_p, setLotteryId_p, participate }: ParticipantProps) => {
  return (
    <div>
      <h4>{account}</h4>
      <div className="CreateLottery lottery-inputs">
        <input placeholder="Lottery ID" value={lotteryId_p} onInput={setLotteryId_p} type="number" />
        <input type="submit" className="button" onClick={participate} value="Participate" />
      </div>

      <div>
        <pre id="val">{owner}</pre>
        <button onClick={getOwner}>get owner</button>
      </div>
    </div>
  );
};

export { Participant };
