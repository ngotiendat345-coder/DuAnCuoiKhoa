import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, iframePopup, modalPopup } from "animation";
import { Link } from "react-router-dom";
import { AppContext } from "context/context";
// Modal.prototype = {
//   showModal: PropTypes.bool.isRequired,
//   setShowModal: PropTypes.func.isRequired,
//   isSuccess: PropTypes.func.isRequired,
//   text: PropTypes.string.isRequired,
//   post: PropTypes.bool,
// };

function Modal() {
  const { isModalOpen, modalData, closeModal } = useContext(AppContext);
  const { text, type } = modalData;
  const renderModal = () => {
    if (type === "success" || type === "error") {
      return (
        <React.Fragment>
          <motion.div
            className="backDrop"
            variants={fadeIn}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.div
              className="modal"
              variants={modalPopup}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {type === "success" ? (
                <FiCheckCircle color="green" size="3rem" />
              ) : (
                <FiXCircle color="red" size="3rem" />
              )}
              <p>{text}</p>
              <button onClick={closeModal}>Yeah</button>
            </motion.div>
          </motion.div>
        </React.Fragment>
      );
    }
    if (type === "trailer") {
      return (
        <React.Fragment>
          <motion.div
            className="backDrop"
            variants={fadeIn}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.div
              className="iframContainer"
              variants={iframePopup}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <iframe src={text} alt={"iframe"}></iframe>
              <button onClick={closeModal}>
                <AiOutlineClose size="3rem" />
              </button>
            </motion.div>
          </motion.div>
        </React.Fragment>
      );
    }
    if (type === "link") {
      return (
        <React.Fragment>
          <motion.div
            className="backDrop"
            variants={fadeIn}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.div
              className="modal"
              variants={modalPopup}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <p>{text}</p>
              <Link to="/">
                <button>Back home</button>
              </Link>
            </motion.div>
          </motion.div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <motion.div
          className="backDrop"
          variants={fadeIn}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <motion.div
            className="modal"
            variants={modalPopup}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <p>{text}</p>
            <button onClick={closeModal}>Yeah</button>
          </motion.div>
        </motion.div>
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      <AnimatePresence exitBeforeEnter>
        {isModalOpen && renderModal()}
      </AnimatePresence>
    </React.Fragment>
  );
}

export default Modal;
// {isSuccess ? (
//   <FiCheckCircle color="green" size="3rem" />
// ) : (
//   <FiXCircle color="red" size="3rem" />
// )}
// <p>{text}</p>
// {!post && (
//   <React.Fragment>
//     {isSuccess ? (
//       <Link to="/">
//         <button>Back Home</button>
//       </Link>
//     ) : (
//       <button
//         onClick={() => {
//           setShowModal({
//             showModal: false,
//             text: "",
//             isSuccess: false,
//           });
//         }}
//       >
//         Yeah
//       </button>
//     )}
//   </React.Fragment>
// )}
// {post && (
//   <React.Fragment>
//     {isSuccess ? (
//       <React.Fragment>
//         <Link to="/">
//           <button>Back Home</button>
//         </Link>
//         <button
//           onClick={() => {
//             setShowModal({
//               showModal: false,
//               text: "",
//               isSuccess: false,
//             });
//           }}
//         >
//           Login
//         </button>
//       </React.Fragment>
//     ) : (
//       <button
//         onClick={() => {
//           setShowModal({
//             showModal: false,
//             text: "",
//             isSuccess: false,
//           });
//         }}
//       >
//         Yeah
//       </button>
//     )}
//   </React.Fragment>
// )}
