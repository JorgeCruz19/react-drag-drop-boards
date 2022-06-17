import { useParams } from "react-router-dom";

const Board = () => {
	const params = useParams();
	console.log(params);
	return <div>Board</div>;
};

export default Board;
