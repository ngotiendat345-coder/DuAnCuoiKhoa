import { CLOSE_MODEL } from "constant/ListActionType";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
function FixIfram() {
  const { modal, modalType } = useSelector((state) => state.FilmReducer);
  const dispatch = useDispatch();
  const { link, title } = modalType;
  return (
    <div className={modal ? "fixIfram" : "fixIfram hide"}>
      <div style={{position:'relative'}}>
        <iframe src={link} alt={title} className="ifram1"></iframe>
        <button
          onClick={() => {
            dispatch({ type: CLOSE_MODEL });
          }}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}

export default FixIfram;
