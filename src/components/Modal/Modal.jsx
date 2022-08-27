import { useRef } from "react";
import { unmountComponentAtNode } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import "./modal.css";

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
  },
};
const Modal = ({ children, title, root, setIsOpen }) => {
  const ref = useRef(null);

  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
    document.body.style.overflow = "auto";
    /* document.querySelector("#modal").remove(); */
    /* unmountComponentAtNode(root); */
  };

  return (
    <AnimatePresence>
      <div className="modal" id="modal">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          ref={ref}
          className="modal-container"
          onClick={handleCloseModal}
        ></motion.div>
        <motion.div variants={dropIn} initial="hidden" animate="visible" exit="exit" className="modal-inner-container">
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <button onClick={handleCloseModal} className="modal-close">
              <MdOutlineClose />
            </button>
          </div>
          <div className="modal-content">{children}</div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
