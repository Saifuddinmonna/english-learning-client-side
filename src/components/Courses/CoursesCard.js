import React from "react";

const CoursesCard = ({ course }) => {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src={course.pic} alt="Shoes" />
			</figure>

			<div className="card-body">
				<h2 className="card-title">
					{course.course}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">Fashion</div>
					<div className="badge badge-outline">Products</div>
				</div>
				<button className="btn btn-outline btn-secondary">
					Button
				</button>
				<button className="btn  w-full btn-secondary btn-circle">
					Button
				</button>
			</div>
		</div>
	);
};

export default CoursesCard;
