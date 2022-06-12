import {
	collection,
	onSnapshot,
	query,
	orderBy,
	deleteDoc,
  updateDoc,
	doc
} from "firebase/firestore";
import db from "../firebase.config";

const getAllProjects = async (setBoards) => {
  const q = query(collection(db, "projects"), orderBy("date", "desc"));
  onSnapshot(q, (snapShot) => {
    setBoards(snapShot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    }))
  });
};

const editProject = async (project, id) => {
  await updateDoc(doc(db, "projects", id),{
    name:project.name,
    description:project.description,
    date:project.date,
  })
}

const deleteProject = async (id) => {
  await deleteDoc(doc(db, "projects", id));
}

export {getAllProjects,editProject, deleteProject}