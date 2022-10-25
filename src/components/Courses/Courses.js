import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCard from "./CoursesCard";

const Courses = () => {
	const coursesData = useLoaderData();
	console.log(coursesData);

	return (
		<div>
			<h1 className="text-primary fw-bolder ">
				{coursesData.length} Courses are Available Now
			</h1>
			<div className="grid grid-cols-2 ">
				{coursesData.map((course) => (
					<CoursesCard key={course.id} course={course}></CoursesCard>
				))}
			</div>
		</div>
	);
};

export default Courses;
