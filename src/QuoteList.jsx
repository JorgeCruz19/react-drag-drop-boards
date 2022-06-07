import { Droppable, Draggable } from "react-beautiful-dnd";

const QuoteItem = ({ quote, isDragging, provided }) => {
	return (
		<a
			href={quote.author.url}
			colors={quote.author.colors}
			ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
			className={`card-quote ${isDragging && "border"}`}
		>
			<img
				style={{ height: 40, width: 40, borderRadius: "50%" }}
				src={quote.author.avatarUrl}
				alt={quote.author.name}
			/>
			<div>
				<p>{quote.content}</p>
				<div>
					<h2>{quote.author.name}</h2>
					<small>id:{quote.id}</small>
				</div>
			</div>
		</a>
	);
};

const InnerQuoteList = ({ quotes }) => {
	return quotes.map((quote, index) => (
		<Draggable
			key={quote.id}
			draggableId={quote.id}
			index={index}
			shouldRespectForceTouch={false}
		>
			{(dragProvided, dragSnapshot) => (
				<QuoteItem
					key={quote.id}
					quote={quote}
					isDragging={dragSnapshot.isDragging}
					provided={dragProvided}
				/>
			)}
		</Draggable>
	));
};

const InnerList = ({ title, dropProvided, quotes }) => {
	return (
		<div className="inner-list">
			{title}
			<div style={{ minHeight: 250 }} ref={dropProvided.innerRef}>
				<InnerQuoteList quotes={quotes} />
				{dropProvided.placeholder}
			</div>
		</div>
	);
};

const QuoteList = ({ style, listId = "LIST", listType, quotes, title }) => {
	return (
		<Droppable droppableId={listId} type={listType}>
			{(dropProvided, dropSnapshot) => (
				<div
					{...dropProvided.droppableProps}
					className={`${
						dropSnapshot.isDraggingOver
							? "is-draggingOver"
							: Boolean(dropSnapshot.draggingFromThisWith)
							? "is-draggingFrom"
							: "gray"
					}`}
					style={style}
				>
					<InnerList
						quotes={quotes}
						title={title}
						dropProvided={dropProvided}
					/>
				</div>
			)}
		</Droppable>
	);
};

export default QuoteList;
