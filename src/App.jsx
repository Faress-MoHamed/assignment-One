import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Experience from "./Pages/Experience/Experience";
import Work from "./Pages/Work/Work";

function App() {
	const routes = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "/skills",
					element: <Skills />,
				},
				{
					path: "/experience",
					element: <Experience />,
				},
				{
					path: "/work",
					element: <Work />,
				},
			],
		},
	]);
	return <>
		<RouterProvider router={routes} />
	</>;
}

export default App;
