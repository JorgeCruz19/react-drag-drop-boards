import { arrayUnion, collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc, setDoc } from "firebase/firestore";
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

const addColumn = async (title, projectId, id) => {
	if (!title) {
		return;
	}
	await setDoc(doc(db, `projects/${projectId}/board`, id), {
		title,
		cards: [],
		timestamp,
	});
};

const deleteColumn = async (projectId, columnId) => {
	await deleteDoc(doc(db, "projects", projectId, "board", columnId));
};

const updateColumnTitle = async (title, projectId, columnId) => {
	const columnRef = doc(db, "projects", projectId, "board", columnId);
	await updateDoc(columnRef, {
		title: title,
	});
};

const addCard = async (title, projectId, columnId, cardId) => {
	if (!title) return;

	const card = {
		id: cardId,
		title,
	};

	const columnRef = doc(db, "projects", projectId, "board", columnId);
	await updateDoc(columnRef, {
		cards: arrayUnion(card),
	});
};

const updateCardTitle = async (title, projectId, column, cardId) => {
	const columnRef = doc(db, "projects", projectId, "board", column.id);

	await updateDoc(columnRef, {
		cards: column.cards.map((card) => {
			if (card.id === cardId) {
				card.title = title;
				return card;
			}
			return card;
		}),
	});
};

const removeCard = async (projectId, column, cardId) => {
	const columnRef = doc(db, "projects", projectId, "board", column.id);
	await updateDoc(columnRef, {
		cards: column.cards.filter((card) => card.id !== cardId),
	});
};

export { getAllBoardOfProject, updateColumnTitle, addColumn, deleteColumn, addCard, updateCardTitle, removeCard };
