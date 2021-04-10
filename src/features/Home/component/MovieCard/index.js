import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import star1 from "assets/star1.png";
import halfStar from "assets/halfstar.png";
import { AppContext } from "context/context";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { motion } from "framer-motion";
import { PopUpMovie } from "animation";

MovieCard.prototype = {
  danhGia: PropTypes.number.isRequired,
  hinhAnh: PropTypes.string.isRequired,
  tenPhim: PropTypes.string.isRequired,
  maPhim: PropTypes.number.isRequired,
  trailer: PropTypes.string.isRequired,
  handleOnEror: PropTypes.func.isRequired,
};
function MovieCard({
  danhGia,
  hinhAnh,
  tenPhim,
  maPhim,
  trailer,
  handleOnEror,
}) {
  const cloneDanhGia = danhGia > 10 ? 10 : danhGia;
  //console.log(trailer)
  const { showModal } = useContext(AppContext);
  return (
    <motion.article
      className="danhSachMovie__container--card"
      variants={PopUpMovie}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="imgContainer ">
        <img
          src={hinhAnh}
          alt={tenPhim}
          onError={() => {
            handleOnEror(maPhim);
          }}
        />
        <div className="imgContainerOverplay backgroundLinear">
          <button
            onClick={() => {
              showModal(trailer, "trailer");
            }}
          >
            <FaPlay />
          </button>
        </div>
      </div>
      <footer>
        <h3>
          <span>C18</span>
          {tenPhim}
        </h3>
        <p>120 phút</p>
        <div className="footerOverplay">
          <Link className="btn btn-danger" to={`/phim/${maPhim}`}>
            Mua vé
          </Link>
        </div>
      </footer>
      <div className="rate">
        <h4>{cloneDanhGia}</h4>
        <div className="star">
          {Array.from({ length: 5 }, (_, index) => {
            const testAStarOrHalf = Math.floor(cloneDanhGia / 2);

            return testAStarOrHalf >= index + 1 ? (
              <AiFillStar
                className="starIcon"
                color="#da8252"
                size="0.65rem"
                key={index}
              />
            ) : (
              <AiOutlineStar
                className="starIcon"
                color="#da8252"
                size="0.65rem"
                key={index}
              />
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}

export default MovieCard;
