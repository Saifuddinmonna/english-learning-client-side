import React from "react";

const CoursesCard = ({ course }) => {
	return (
		<div>
			{course.id}
			<h2>{course.course}</h2>
			<div>
				<img className="img-fluid" src={course.pic} alt="" />
			</div>
		</div>
	);
};

export default CoursesCard;
