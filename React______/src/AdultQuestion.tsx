import { FC } from "react";

type AdultOrNotProps = {
  setIsAdult: (value: boolean) => void;
};

const AdultOrNot: FC<AdultOrNotProps> = ({ setIsAdult }) => {
  const yesHandler = () => {
    setIsAdult(true);
  };

  const noHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.type);
    setIsAdult(false);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      Вам Есть 18?
      <button onClick={yesHandler}>Да</button>
      <button onClick={noHandler}>Нет</button>
      <input type="text" onChange={onChangeHandler} />
    </div>
  );
};

export default AdultOrNot;
