interface ParticipantProps {
  account: null;
  getBalance: () => Promise<void>;
  balance: null;
}

const Participant = ({ account, getBalance, balance }: ParticipantProps) => {
  return (
    <div>
      <h2>{account}</h2>
      <form className="CreateLottery lottery-inputs">
        <input placeholder="Lottery ID" type="text" />
        <input type="submit" className="button" value="Participate" />
      </form>

      <div>
        <pre id="val">{balance}</pre>
        <button onClick={getBalance}>get balance</button>
      </div>
    </div>
  );
};

export { Participant };
