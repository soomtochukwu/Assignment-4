import "./CreateLottery.css";

const CreateLottery = () => {
  return (
    <form className="CreateLottery lottery-inputs">
      <input placeholder="Lottery ID" type="text" />
      <input placeholder="Lottery Name" type="text" />
      <input type="submit" className="button" value="Create Lottery" />
    </form>
  );
};

export { CreateLottery };
