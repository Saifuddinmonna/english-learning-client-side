import "./App.css";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Blog from "./components/Blog/Blog";
import Login from "./components/FirebaseAuthentication/Login/Login";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";

import CoursesCard from "./components/Courses/CoursesCard";
import CourseHolder from "./components/Courses/CourseHolder";
import Signup from "./components/FirebaseAuthentication/Signup/Signup";
import FAQ from "./components/FAQ/FAQ";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			errorElement:<ErrorPage></ErrorPage>,
			children: [
				{
					path: "/home",

					element: <Home></Home>,
				},

				{
					path: "/blog",
					element: <Blog></Blog>,
				},
				{
					path: "/signup",
					element: <Signup></Signup>,
				},
				{
					path: "/login",
					element: <Login></Login>,
				},
				{
					path: "/faq",
					element: <FAQ></FAQ>,
				},
				{
					path: "/courses",
					loader: () => {
						return fetch(
							"https://server-for-assignment-10.vercel.app/",
						);
					},
					element: <CourseHolder> </CourseHolder>,
					children: [
						{
							path: "/courses",
							loader: () => {
								return fetch(
									"https://server-for-assignment-10.vercel.app/",
								);
							},
							element: <Courses></Courses>,
							// children: [
							// 	{
							// 		path: "/courses/c",
							// 		loader: () => {
							// 			return fetch(
							// 				"https://server-for-assignment-10.vercel.app/",
							// 			);
							// 		},
							// 		element: <CoursesCard></CoursesCard>,
							// 	},
							// ],
						},
					],
				},
				{
					path: "*",
					element: <ErrorPage></ErrorPage>,
				},
			],
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
