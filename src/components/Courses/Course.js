import React from "react";
import { useLoaderData } from "react-router-dom";

const Course = () => {
	const course = useLoaderData();
	console.log("this is for signle page course details", course);
	return (
		<div className="border shadow rounded-md m-2 p-3">
			<p>{course.id}</p>
			<div className="card w-full bg-base-100 shadow-xl">
				<header className="border rounded shadow-sm m-2 p-2 position-relative ">
					<h2>{course.course}</h2>
					<button className="position-absolute  top-1 right-1 btn btn-outline btn-primary text-white btn-sm">
						{" "}
						Make Pdf
					</button>
				</header>
				<figure className="border rounded shadow-sm m-2 p-2 ">
					<img src={course.pic} alt="Shoes" />
				</figure>
				<div className="border rounded shadow-sm m-2 p-2 ">
					<p>{course.detals}</p>
					<p>{course.moredetails}</p>

					<div className="card-actions justify-end">
						<div className="badge badge-outline">Fashion</div>
						<div className="badge badge-outline">Products</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;
