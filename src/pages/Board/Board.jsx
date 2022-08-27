import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { collection, doc, orderBy, query, updateDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase.config";
import Column from "../../Column";
import AddButton from "../../components/Boards/AddButton";
import reorder from "../../reorder";
import { useColumnsContext } from "../../hooks/useColumnsContext";

const Board = () => {
  const { idBoard: projectId } = useParams();
  const { columns, dispatch } = useColumnsContext();

  useEffect(() => {
    const getAllBoardsOfProject = async () => {
      const q = query(collection(db, "projects", projectId, "board"), orderBy("timestamp", "asc"));
      const result = {};
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        result[doc.id] = { id: doc.id, ...doc.data() };
      });
      dispatch({ type: "SET_COLUMNS", payload: result });
    };

    getAllBoardsOfProject();
  }, []);

  const onDragEnd = async (result) => {
    const { destination, source, draggableId, type } = result;

    // dropped nowhere
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    if (type === "COLUMN") {
      const newColumns = Object.entries(columns).map(([columnId, column]) => ({ id: columnId, ...column }));
      const orderedColumns = reorder(newColumns, source.index, destination.index);
      const ordered = orderedColumns.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {});
      dispatch({ type: "SET_COLUMNS", payload: ordered });

      const destinationRef = doc(db, "projects", projectId, "board", newColumns[destination.index].id);
      const sourceRef = doc(db, "projects", projectId, "board", newColumns[source.index].id);

      await updateDoc(destinationRef, {
        timestamp: newColumns[source.index].timestamp,
      });
      await updateDoc(sourceRef, {
        timestamp: newColumns[destination.index].timestamp,
      });

      return;
    }

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.cards];
      const destItems = [...destColumn.cards];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      dispatch({
        type: "SET_COLUMNS",
        payload: {
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            cards: sourceItems,
          },
          [destination.droppableId]: {
            ...destColumn,
            cards: destItems,
          },
        },
      });
      const newColumns = Object.entries(columns).map(([columnId, column]) => ({ id: columnId, ...column }));
      const sourceList = newColumns.find((list) => list.id === source.droppableId);
      const destinationList = newColumns.find((list) => list.id === destination.droppableId);
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
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.cards];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      dispatch({
        type: "SET_COLUMNS",
        payload: {
          ...columns,
          [source.droppableId]: {
            ...column,
            cards: copiedItems,
          },
        },
      });
      const newColumns = Object.entries(columns).map(([columnId, column]) => ({ id: columnId, ...column }));
      const list = newColumns.find((list) => list.id === source.droppableId);
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
    }
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="COLUMN" direction="horizontal">
          {(provided) => (
            <div className="columns" {...provided.droppableProps} ref={provided.innerRef}>
              {columns &&
                Object.entries(columns).map(([columnId, column], index) => (
                  <Column key={column.id} columnId={column.id} index={index} column={column} />
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
