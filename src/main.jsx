import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MobileHandlerProvider } from "./utils/MobileHandlerProvider.jsx";

createRoot(document.getElementById("root")).render(
	<MobileHandlerProvider>
		<App />
	</MobileHandlerProvider>
);
