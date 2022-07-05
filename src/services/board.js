import { addDoc, arrayUnion, collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";

const updateListTitle = (title, listId) => {
	const listRef = doc(db, "lists", listId);

	lists.forEach(async (list) => {
		if (list.id === listId) {
			list.title = title;
			await updateDoc(listRef, {
				title: title,
			});
		}
		return list;
	});
};
