import "./App.css";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			children: [
				{
					path: "/home",

					element: <Home></Home>,
				},

				{
					path: "*",
					element: <ErrorPage></ErrorPage>,
				},

				{
					path: "/blog",
					element: <Blog></Blog>,
				},
				{
					path: "/courses",
					loader: async () => fetch("products.json"),
					element: <Courses></Courses>,
				},
			],
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router}>
				
				
			</RouterProvider>
		</div>
	);
}

export default App;
