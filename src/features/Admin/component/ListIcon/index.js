import React from "react";
import PropTypes from "prop-types";
import { BiMovie } from "react-icons/bi";
import {
  AiOutlineUsergroupAdd,
  AiFillLike,
  AiOutlineMoneyCollect,
} from "react-icons/ai";

function ListIcon(props) {
  return (
    <section className="adminSection">
      <div className="adminSection-center listItem">
        <article className="item">
          <span className="iconPink">
            <BiMovie />
          </span>
          <div>
            <h3>90</h3>
            <p>Movies</p>
          </div>
        </article>
        <article className="item">
          <span className="iconGreen">
            <AiOutlineUsergroupAdd />
          </span>
          <div>
            <h3>1232</h3>
            <p>Users</p>
          </div>
        </article>
        <article className="item">
          <span className="iconPurple">
            <AiFillLike />
          </span>
          <div>
            <h3>12424</h3>
            <p>Likes</p>
          </div>
        </article>
        <article className="item">
          <span className="iconYellow">
            <AiOutlineMoneyCollect />
          </span>
          <div>
            <h3>52023$</h3>
            <p>Earning</p>
          </div>
        </article>
      </div>
    </section>
  );
}

ListIcon.propTypes = {};

export default ListIcon;
