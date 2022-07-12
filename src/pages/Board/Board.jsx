import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import Column from "../../Column";
import AddButton from "../../components/Boards/AddButton";
import { getAllBoardOfProject } from "../../services/board";
import reorder from "../../reorder";
import { useColumnsContext } from "../../hooks/useColumnsContext";
let unsubscribe = null;

const Board = () => {
  const { idBoard: projectId } = useParams();
  /* const [columns, setColumns] = useState({}); */
  const [isLoading, setIsLoading] = useState(true);
  const [ordered, setOrdered] = useState([]);
  const { columns, dispatch } = useColumnsContext();

  useEffect(() => {
    /* getAllBoardOfProject(projectId, setColumns); */
    const q = query(
      collection(db, "projects", projectId, "board"),
      orderBy("timestamp", "asc")
    );
    unsubscribe = onSnapshot(q, (snapShot) => {
      const result = snapShot.docs.reduce(
        (obj, cur) => ({
          ...obj,
          [cur.id]: {
            id: cur.id,
            title: cur.data().title,
            timestamp: cur.data().timestamp,
            cards: cur.data().cards,
          },
        }),
        {}
      );
      /* setColumns(result); */
      dispatch({ type: "SET_COLUMNS", payload: result });
      /* setOrdered(Object.keys(result)); */
    });
    setIsLoading(false);
  }, []);
  const onDragEnd = async (result) => {
    const { destination, source, draggableId, type } = result;
    unsubscribe();
    // dropped nowhere
    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (type === "COLUMN") {
      let columnsValues = Object.values(columns);
      const orderedColumns = reorder(
        columnsValues,
        source.index,
        destination.index
      );
      const result = orderedColumns.reduce(
        (obj, cur) => ({
          ...obj,
          [cur.id]: {
            id: cur.id,
            title: cur.title,
            timestamp: cur.timestamp,
            cards: cur.cards,
          },
        }),
        {}
      );
      setColumns(result);

      const newColumns = Object.values(columns);
      const destinationRef = doc(
        db,
        "projects",
        projectId,
        "board",
        newColumns[destination.index].id
      );
      const sourceRef = doc(
        db,
        "projects",
        projectId,
        "board",
        newColumns[source.index].id
      );

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
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          cards: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          cards: destItems,
        },
      });
      const newColumns = Object.values(columns);
      const sourceList = newColumns.find(
        (list) => list.id === source.droppableId
      );
      const destinationList = newColumns.find(
        (list) => list.id === destination.droppableId
      );
      const draggingCard = sourceList.cards.filter(
        (card) => card.id === draggableId
      )[0];

      const sourceListRef = doc(
        db,
        "projects",
        projectId,
        "board",
        source.droppableId
      );

      sourceList.cards.splice(source.index, 1);

      await updateDoc(sourceListRef, {
        cards: sourceList.cards,
      });

      const destinationListRef = doc(
        db,
        "projects",
        projectId,
        "board",
        destination.droppableId
      );
      destinationList.cards.splice(destination.index, 0, draggingCard);

      await updateDoc(destinationListRef, {
        cards: destinationList.cards,
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.cards];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          cards: copiedItems,
        },
      });
      const newColumns = Object.values(columns);
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

      const listRef = doc(
        db,
        "projects",
        projectId,
        "board",
        destination.droppableId
      );

      await updateDoc(listRef, {
        cards: updatedCards,
      });
    }
  };
  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Droppable droppableId="board" type="COLUMN" direction="horizontal">
            {(provided) => (
              <div
                className="columns"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {columns &&
                  Object.keys(columns).map((column, index) => (
                    <Column
                      key={column}
                      index={index}
                      column={columns[column]}
                    />
                  ))}

                {<AddButton type={"column"} />}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        )}
      </DragDropContext>
    </div>
  );
};

export default Board;
