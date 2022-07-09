import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { addDoc, arrayUnion, collection, deleteDoc, doc, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import Column from "../../Column";
import AddButton from "../../components/Boards/AddButton";
import { getAllBoardOfProject } from "../../services/board";

const Board = () => {
	const { idBoard: projectId } = useParams();
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		/* getAllBoardOfProject(projectId, setColumns); */
		const q = query(collection(db, "projects", projectId, "board"), orderBy("timestamp", "asc"));
		onSnapshot(q, (snapShot) => {
			setColumns(
				snapShot.docs.map((doc) => {
					return {
						id: doc.id,
						...doc.data(),
					};
				})
			);
		});
	}, []);

	const onDragEnd = async (result) => {
		const { destination, source, draggableId, type } = result;

		if (!destination) {
			return;
		}

		if (type === "COLUMN") {
			const destinationRef = doc(db, "projects", projectId, "board", columns[destination.index].id);
			const sourceRef = doc(db, "projects", projectId, "board", columns[source.index].id);
			await updateDoc(destinationRef, {
				timestamp: columns[source.index].timestamp,
			});
			await updateDoc(sourceRef, {
				timestamp: columns[destination.index].timestamp,
			});
			return;
		}

		if (source.droppableId === destination.droppableId) {
			const list = columns.find((list) => list.id === source.droppableId);

			const updatedCards = list.cards.map((card, index) => {
				if (index === source.index) {
					return list.cards[destination.index];
				}
				if (index === destination.index) {
					return list.cards[source.index];
				}
				return card;
			});
			const listRef = doc(db, "projects", projectId, "board", destination.droppableId);
			await updateDoc(listRef, {
				cards: updatedCards,
			});
		} else {
			const sourceList = columns.find((list) => list.id === source.droppableId);
			const destinationList = columns.find((list) => list.id === destination.droppableId);
			const draggingCard = sourceList.cards.filter((card) => card.id === draggableId)[0];

			const sourceListRef = doc(db, "projects", projectId, "board", source.droppableId);

			sourceList.cards.splice(source.index, 1);
			await updateDoc(sourceListRef, {
				cards: sourceList.cards,
			});

			const destinationListRef = doc(db, "projects", projectId, "board", destination.droppableId);
			destinationList.cards.splice(destination.index, 0, draggingCard);

			await updateDoc(destinationListRef, {
				cards: destinationList.cards,
			});
		}
	};

	return (
		<div className="App">
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="board" type="COLUMN" direction="horizontal">
					{(provided) => (
						<div className="columns" {...provided.droppableProps} ref={provided.innerRef}>
							{columns.map((column, index) => (
								<Column key={column.id} index={index} column={column} />
							))}
							{<AddButton type={"column"} />}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default Board;
