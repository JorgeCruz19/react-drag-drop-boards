import { useState } from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import Tooltip from "../Tooltip/Tooltip";
import { deleteColumn, updateColumnTitle } from "../../services/board";
import { useColumnsContext } from "../../hooks/useColumnsContext";

const Title = ({ title, columnId }) => {
  const projectId = window.location.pathname.split("/")[2];
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { dispatch } = useColumnsContext();
  const handleOnBlur = () => {
    dispatch({
      type: "UPDATE_TITLE",
      payload: {
        id: columnId,
        title: newTitle,
      },
    });
    updateColumnTitle(newTitle, projectId, columnId);
    setOpen(!open);
  };
  return (
    <>
      {open ? (
        <input
          type="text"
          className="column-input-title"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
          onBlur={handleOnBlur}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleOnBlur();
            }
            return;
          }}
          autoFocus
        />
      ) : (
        <>
          <h4 onClick={() => setOpen(!open)} className="column-title">
            {title}
          </h4>
          <Tooltip id={columnId}>
            <button
              className="tooltip-edit"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <MdModeEditOutline className="tooltip-edit-icon" />
              Edit
            </button>
            <button
              className="tooltip-delete"
              onClick={(e) => {
                e.stopPropagation();
                dispatch({
                  type: "DELETE_COLUMN",
                  payload: {
                    id: columnId,
                  },
                });
                deleteColumn(projectId, columnId);
              }}
            >
              <MdDelete className="tooltip-delete-icon" />
              Delete
            </button>
          </Tooltip>
        </>
      )}
    </>
  );
};

export default Title;
