import styles from "../../styles/StarRating.module.scss";
interface IProps {
  rate: number;
}
const StarRating = ({ rate }: IProps) => {
  const rates = [false, false, false, false, false];
  var i = rate;

  while (i--) {
    rates[i] = true;
  }

  return (
    <div className="star-rating">
      {rates.map((star, index) => {
        return (
          <span key={`${index}`} className={star ? styles.on : styles.off}>
            <span>&#9733;</span>
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
