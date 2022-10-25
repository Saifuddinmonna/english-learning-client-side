import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Courses from "./Courses";
import CoursesCard from "./CoursesCard";

const CourseHolder = () => {
	const couresloder = useLoaderData();
	return (
		<div className="grid grid-cols-12 border  gap-2 container my-3">
			<div className="col-span-3 border border-r-4 rounded-md ">
				{couresloder.map((course) => (
					<div
						className="border rounded py-2 btn btn-outline-info w-full "
						key={course.id}>
						<NavLink to={`/courses/${course.id}`}>{course.course}</NavLink>
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
