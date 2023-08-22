import { useState } from "react";

interface IProps {
  initialChecked?: boolean;
  changeChecked: (changed: boolean) => void;
}
const CheckBox = ({ initialChecked = false, changeChecked }: IProps) => {
  const [isCompleted, setIsCompleted] = useState(initialChecked);

  const changeIsCompleted = () => {
    setIsCompleted(!isCompleted);
    changeChecked(!isCompleted);
  };
  return (
    <input type="checkbox" checked={isCompleted} onChange={changeIsCompleted} />
  );
};

export default CheckBox;
