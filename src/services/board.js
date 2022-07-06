import { addDoc, arrayUnion, collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { db, timestamp } from "../firebase.config";

const getAllBoardOfProject = (projectId, setLists) => {
	const q = query(collection(db, "projects", projectId, "board"), orderBy("timestamp", "asc"));
	onSnapshot(q, (snapShot) => {
		setLists(
			snapShot.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(),
				};
			})
		);
	});
};

const addColumn = async (title, projectId) => {
	if (!title) {
		return;
	}
	await addDoc(collection(db, "projects", projectId, "board"), {
		title,
		cards: [],
		timestamp,
	});
};

const updateColumnTitle = async (title, projectId, columnId) => {
	const columnRef = doc(db, "projects", projectId, "board", columnId);
	await updateDoc(columnRef, {
		title: title,
	});
};

export { getAllBoardOfProject, updateColumnTitle, addColumn };
