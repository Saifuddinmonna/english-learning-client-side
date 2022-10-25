import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main />,
			children: [
				{
					path: "/home",

					element: <Home></Home>,
				},
				{
					path: "/home",

					element: <Home></Home>,
				},
				{
					path: "/home",

					element: <Home></Home>,
				},
				{
					path: "/courses",
					loader: async () => fetch("products.json"),
					element: <Courses></Courses>,
				},

				{
					path: "*",
					element: <ErrorPage></ErrorPage>,
				},
			],
		},
		{
			path: "/blog",
			element: <Blog></Blog>,
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
