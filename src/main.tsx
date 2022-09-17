import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Router } from "./router";

import "@styles/tailwind.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>,
);
