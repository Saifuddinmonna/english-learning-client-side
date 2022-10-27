import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Courses from "./Courses";
import CoursesCard from "./CoursesCard";

const CourseHolder = () => {
	const coursesloder = useLoaderData();
	return (
		<div className="grid grid-cols-12 border  gap-2 container my-3">
			<div className="col-span-3 border border-r-4 rounded-md ">
				<h1>{coursesloder.length} Courses Are Available Now</h1>
				{coursesloder.map((course) => (
					<div
						className="border rounded py-2  w-full "
						key={course.id}>
						<button className="w-full btn btn-outline-info">
							<NavLink
								className="text-decoration-none"
								to={`/courses/course/${course.id}`}>
								{course.course}
							</NavLink>
						</button>
					</div>
				))}
			</div>
			<div className="col-span-8 border border-r-4 rounded-md">
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default CourseHolder;
