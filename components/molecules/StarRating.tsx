import {useState} from "react";
import styles from "../../styles/StarRating.module.scss";
interface IProps {
rate: number;
}
const StarRating = ({rate}: IProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const rates = [false, false, false, false, false];
     var  i = rate;

while (i--) {
    rates[i] = true;
}


     return (
    <div className="star-rating">
      {rates.map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={star ? styles.on : styles.off}
           
          >
            <span >&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;