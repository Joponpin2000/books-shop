import React, { useState,MouseEventHandler } from "react";
import Slider from "react-slick";
import StarRating from "../molecules/StarRating";
import LeftCaretIcon from "../atoms/vectors/LeftCaretIcon";
import PersonsIcon from "../atoms/vectors/PersonsIcon";
import HeartIcon from "../atoms/vectors/HeartIcon";
import StarIcon from "../atoms/vectors/StarIcon";
import { IBookType, renderTags, parseDate } from "../../utils/helpers";
import styles from "../../styles/Slider.module.scss";

const SampleNextArrow = ({ onClick }: { onClick?: MouseEventHandler<HTMLButtonElement> | undefined }) => {
  return (
    <button className={styles.next} onClick={onClick}>
      <LeftCaretIcon />
    </button>
  );
};
const SamplePrevArrow = ({ onClick }: { onClick?: MouseEventHandler<HTMLButtonElement> | undefined }) => {
  return (
    <button className={styles.prev} onClick={onClick}>
      <LeftCaretIcon />
    </button>
  );
};

interface IProps { device?: string, books: IBookType[] }

const BookCarousel = ({ device, books }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredItem, setHoveredItem] = useState<{id: number, active: boolean}>({id: -1, active: false});
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
    <div className={styles.con}>
      <Slider {...settings}>
        {books.map((book, index) => (
            <div
             onMouseOver={()=> setHoveredItem({id: book.id, active: true})}
                onMouseLeave={() => setHoveredItem({ ...hoveredItem, active: false })}
                key={`carouselindex-${index}`} className={styles.slide}>
              <img 
             
               src={book.image_url}   />
                {hoveredItem.id === book.id && hoveredItem.active &&
                    <div className={styles.bookOverlay}>
                   {book.available_copies > 0 && <p className={styles.available}>Available</p>}
                   <h3 className={styles.title}>{book.title}</h3>
                   <div className={styles.groupBox}>
                       <p className={styles.subtitle}>{book.publisher}</p>
                    <p className={styles.subtitle}>{parseDate(book.release_date)}</p>
                   </div>
                    <div className={styles.groupBox}>
                       <p className={styles.groupTitle}>Genre</p>
                    <p className={styles.subtitle}>{book.genre}</p>
                   </div>
                   <div className={styles.groupBox}>
                       <p className={styles.groupTitle}>Tags</p>
                    <p className={styles.subtitle}>{renderTags(book.tags)}</p>
                   </div>
                    <div className={styles.groupBox}>
                       <p className={styles.groupTitle}>Tags</p>
                    <p className={styles.subtitle}>{renderTags(book.tags)}</p>
                   </div>
                    <div className={styles.groupRow}>
          <div className={styles.box}>
            <PersonsIcon />
            <p className={styles.label}>{book.number_of_purchases}</p>
          </div>
          <div className={styles.box}>
            <HeartIcon />
            <p className={styles.label}>{book.likes}</p>
          </div>
          <div className={styles.ratingBox}>
            <p className={styles.ratingLabel}>Rating: {book.rating}</p>
              
                <StarRating  rate={Math.round(book.rating)} />
            
          </div>
        </div>
                  </div>
                  }
            </div>
          ))}
      </Slider>
    </div>
  );
};
export default BookCarousel;