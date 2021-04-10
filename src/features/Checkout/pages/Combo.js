import React, { useContext, useState } from "react";
import popcorn1 from "assets/booking/popcorn-0.svg";
import popcorn2 from "assets/booking/popcorn2.png";
import popcorn3 from "assets/booking/popcorn3.png";
import popcorn4 from "assets/booking/popcorn-4.svg";
import { chonCombo } from "redux/action/BookingAction";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { AppContext } from "context/context";
import { motion } from "framer-motion";
import { comboAnimation } from "animation";

function Combo() {
  const [comboChoose, setComboChoose] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const { showModal } = useContext(AppContext);
  const listCombo = [
    {
      label: "Combo mini",
      name: "combomini",
      hinhAnh: popcorn1,
      giaTien: 40000,
    },
    { label: "Combo đại", name: "combodai", hinhAnh: popcorn2, giaTien: 50000 },
    {
      label: "Combo mix mini",
      name: "combomixmini",
      hinhAnh: popcorn3,
      giaTien: 60000,
    },
    {
      label: "Combo mix big",
      name: "combomixbig",
      hinhAnh: popcorn4,
      giaTien: 70000,
    },
  ];
  return (
    <motion.div
      className="container"
      variants={comboAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose combo</h3>
      <ul>
        {listCombo.map((item) => (
          <li className="type" key={item.name}>
            <div>
              <input
                type="radio"
                name="selector"
                defaultValue={item.label}
                id={item.name}
                onClick={(e) => {
                  if (e.currentTarget.checked) {
                    setComboChoose(item);
                  }
                }}
              />
              <label htmlFor={item.name}>{item.label}</label>
              <div className="check" />
            </div>
            <div>
              <img src={item.hinhAnh} alt={item.name} />
            </div>
          </li>
        ))}
      </ul>

      <button
        className="btnCheckout"
        onClick={() => {
          if (comboChoose) {
            dispatch(chonCombo(comboChoose));
            history.push("/checkout/datve");
            localStorage.setItem("combo", JSON.stringify(comboChoose));
          } else {
            showModal("Xin hãy chọn combo", "normal");
          }
        }}
      >
        Next
      </button>
    </motion.div>
  );
}

export default Combo;
