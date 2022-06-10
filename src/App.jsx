import { useState } from "react";
import { data } from "./data";
import reorder, { reorderQuoteMap } from "./reorder";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./App.css";
import Column from "./Column";

function App() {
	const [columns, setColumns] = useState(data);
	const [ordered, setOrdered] = useState(Object.keys(data));

	const onDragEnd = (result) => {
		/* if (result.combine) {
			if (result.type === "COLUMN") {
				const shallow = [...ordered];
				shallow.splice(result.source.index, 1);
				setOrdered(shallow);
				return;
			}

			const column = columns[result.source.droppableId];
			const withQuoteRemoved = [...column];
			withQuoteRemoved.splice(result.source.index, 1);
			const columns = {
				...columns,
				[result.source.droppableId]: withQuoteRemoved,
			};
			setColumns(columns);
			return;
		} */

		// dropped nowhere
		if (!result.destination) {
			return;
		}

		const source = result.source;
		const destination = result.destination;

		// did not move anywhere - can bail early
		if (
			source.droppableId === destination.droppableId &&
			source.index === destination.index
		) {
			return;
		}

		// reordering column
		if (result.type === "COLUMN") {
			const orderedColumns = reorder(ordered, source.index, destination.index);

			setOrdered(orderedColumns);

			return;
		}

		const data = reorderQuoteMap({
			quoteMap: columns,
			source,
			destination,
		});

		setColumns(data.quoteMap);
		console.log(columns);
	};

	return (
		<div className="App">
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="board" type="COLUMN" direction="horizontal">
					{(provided) => (
						<div
							className="columns"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{ordered.map((key, index) => (
								<Column
									key={key}
									index={index}
									title={key}
									quotes={columns[key]}
								/>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
}

export default App;
