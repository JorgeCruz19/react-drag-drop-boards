import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AppRouter from "./router/AppRouter";
import { ColumnsContextProvider } from "./context/ColumnsContext";

ReactDOM.render(
	<React.StrictMode>
		<ColumnsContextProvider>
			<AppRouter />
		</ColumnsContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
