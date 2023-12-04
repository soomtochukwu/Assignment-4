interface ParticipantProps {
  account: string;
  getOwner: () => Promise<void>;
  owner: string;
}

const Participant = ({ account, getOwner, owner }: ParticipantProps) => {
  return (
    <div>
      <h4>{account}</h4>
      <form className="CreateLottery lottery-inputs">
        <input placeholder="Lottery ID" type="text" />
        <input type="submit" className="button" value="Participate" />
      </form>

      <div>
        <pre id="val">{owner}</pre>
        <button onClick={getOwner}>get owner</button>
      </div>
    </div>
  );
};

export { Participant };
