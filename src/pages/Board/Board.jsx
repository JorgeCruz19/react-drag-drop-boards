import { useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { data, data2 } from "../../data";
import Column from "../../Column";
import AddButton from "../../components/Boards/AddButton";
import { useEffect } from "react";
import { getAllBoardOfProject } from "../../services/board";

const Board = () => {
	const { idBoard: projectId } = useParams();
	const [ordered, setOrdered] = useState(data2.columns);
	const [columns, setColumns] = useState([]);

	useEffect(() => {
		getAllBoardOfProject(projectId, setColumns);
	}, []);

	return (
		<div className="App">
			<DragDropContext onDragEnd={null}>
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
