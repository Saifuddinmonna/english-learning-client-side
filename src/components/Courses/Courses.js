import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCard from "./CoursesCard";

const Courses = () => {
	const coursesData = useLoaderData();
	console.log(coursesData);
	
	return (
                <div>
                        {coursesData.length}
			{coursesData.map((course) => (
				<CoursesCard key={course.id} course={course}></CoursesCard>
			))}
		</div>
	);
};

export default Courses;
