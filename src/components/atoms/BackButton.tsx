import {MouseEventHandler} from 'react'
import BackIcon from './vectors/BackIcon';
import styles from "../../styles/BackButton.module.scss";
interface IProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const BackButton = ({onClick}: IProps) => {
  return (
    <button onClick={onClick} className={styles.back}>
      <BackIcon />
      <p>Back</p>
    </button>
  );
}

export default BackButton