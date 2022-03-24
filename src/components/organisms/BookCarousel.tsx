import Link from "next/link";
import React, { useState, MouseEventHandler } from "react";
import Slider from "react-slick";
import LeftCaretIcon from "../atoms/vectors/LeftCaretIcon";
import { IBookType } from "../../utils/helpers";
import styles from "../../styles/Slider.module.scss";
import FeatureBookDetails from "../molecules/FeatureBookDetails";

interface IProps {
  device?: "mobile" | "laptop";
  books: IBookType[];
}

const BookCarousel = ({ device, books }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<{
    id: number;
    active: boolean;
  }>({ id: -1, active: false });
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: device == "mobile" ? 2.5 : 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: styles.button__bar,
    beforeChange: (prev: any, next: any) => {
      setCurrentSlide(next);
    },
    appendDots: function AppenDot(dots: any) {
      return (
        <div>
          <ul>
            {dots.map((item: any, index: any) => {
              return <li key={index}>{item.props.children}</li>;
            })}
          </ul>
        </div>
      );
    },
    customPaging: function CustomPaging(index: any) {
      return (
        <button
          style={
            index === currentSlide
              ? { backgroundColor: "#64C000", outline: "none" }
              : { backgroundColor: "#DDDDDD", outline: "none" }
          }
        >
          {" "}
          {index + 1}
        </button>
      );
    },
  };

  return (
    <div
      className={
        device === "mobile" ? styles.SmBookCarousel : styles.LgBookCarousel
      }
    >
      <Slider {...settings}>
        {books.map((book, index) => (
          <div
            onMouseOver={() => setHoveredItem({ id: book.id, active: true })}
            onMouseLeave={() =>
              setHoveredItem({ ...hoveredItem, active: false })
            }
            key={`carousel_index-${index}`}
            className={styles.slide}
          >
            <img src={book.image_url} />
            <Link href="/[book]" as={`/${book.id}`}>
              <a>
                <div
                  className={
                    hoveredItem.id === book.id && hoveredItem.active
                      ? styles.bookOverlay
                      : styles.hideOverlay
                  }
                >
                  <FeatureBookDetails {...{ book }} />
                </div>
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default BookCarousel;

const SampleNextArrow = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button className={styles.next} onClick={onClick}>
      <LeftCaretIcon />
    </button>
  );
};
const SamplePrevArrow = ({
  onClick,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button className={styles.prev} onClick={onClick}>
      <LeftCaretIcon />
    </button>
  );
};
