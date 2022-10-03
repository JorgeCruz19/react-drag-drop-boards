import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdAddBox, MdModeEditOutline, MdDelete } from "react-icons/md";
import { useColumnsContext } from "../../hooks/useColumnsContext";
import { openModalProject } from "../../utils/openModal";
import { formatDateTime } from "../../utils/formatDates";
import { getAllProjects, deleteProject } from "../../services/projects";
import Tooltip from "../../components/Tooltip/Tooltip";

import "./projects.css";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [boards, setBoards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { dispatch } = useColumnsContext();

  useEffect(() => {
    let isMounted = true;
    dispatch({ type: "EMPTY_COLUMNS", payload: null });
    getAllProjects(setBoards);
    return () => {
      isMounted = false;
    };
  }, []);

  const [isOpen, setIsOpen] = useState({
    type: "",
    id: "",
    isOpen: false,
  });


  const handleOpenModal = (type, id) => {
    /* openModalProject(type, id); */
    setIsOpen({type, id, isOpen: true})
  };

  return (
    <>
      <div className="project-container">
        <h1 className="project-title">Projects boards</h1>
        <button onClick={() => handleOpenModal("add","")} className="project-add">
          <MdAddBox />
        </button>
      </div>
      <div className="card-container">
        {boards.map((board) => (
          <div key={board.id} className="card">
            <div className="card-header">
              <h2 className="card-title">{board.name}</h2>
              <Tooltip id={board.id}>
                <button className="tooltip-edit" onClick={() => handleOpenModal("edit", board.id)}>
                  <MdModeEditOutline className="tooltip-edit-icon" />
                  Edit
                </button>
                <button className="tooltip-delete" onClick={() => deleteProject(board.id)}>
                  <MdDelete className="tooltip-delete-icon" />
                  Delete
                </button>
              </Tooltip>
            </div>
            <p className="card-description">{board.description}</p>
            <div className="card-footer">
              <span className="card-date">{formatDateTime(board.date.seconds)}</span>
              <Link to={`/projects/${board.id}`} className="card-link">
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
      {isOpen.isOpen && (<ProjectModal title={isOpen.type == "add" ? "Add project" : "Edit project"} type={isOpen.type} id={isOpen.id} setIsOpen={setIsOpen} />)}
    </>
  );
};

export default Projects;
