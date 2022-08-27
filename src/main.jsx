import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import { ColumnsContextProvider } from "./context/ColumnsContext";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<ColumnsContextProvider>
			<AppRouter />
		</ColumnsContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
