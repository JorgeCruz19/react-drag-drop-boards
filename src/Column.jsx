import { Draggable } from "react-beautiful-dnd";
import QuoteList from "./QuoteList";

const Column = ({ title, quotes, index }) => {
	return (
		<Draggable draggableId={title} index={index}>
			{(provided, snapshot) => (
				<div
					className="column"
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					<div
						className={`column-header ${
							snapshot.isDragging ? "is-active" : null
						}`}
					>
						<h4 {...provided.dragHandleProps} className="column-title">
							{title}
						</h4>
					</div>
					<QuoteList
						style={{
							backgroundColor: snapshot.isDragging
								? "rgb(227, 252, 239)"
								: null,
							paddingBottom: 8,
						}}
						listId={title}
						listType="QUOTE"
						quotes={quotes}
					/>
				</div>
			)}
		</Draggable>
	);
};

export default Column;
