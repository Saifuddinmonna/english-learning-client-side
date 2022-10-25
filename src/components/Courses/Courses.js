import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

const Courses = () => {
	const coursesData = useLoaderData();
	console.log(coursesData);

	return (
		<div>
			<div className=" bg-orange-100 grid grid-cols-2 gap-2">
				{coursesData.map((course) => (
					<>
						<div className="border rounded-md shadow-md p-2">
							<div className="card w-full bg-base-100 shadow-xl">
								<figure>
									<img src={course.pic} alt="Shoes" />
								</figure>
								<div className="card-body">
									<h2 className="card-title">
										{course.course}
										<div className="badge badge-secondary">
											NEW
										</div>
									</h2>
									<p>{course.details}</p>
									<div className="card-actions justify-end">
										<p>
											Monthly Subscription Price : tk
											{course.price}
										</p>
										<div className="badge  badge-outline-primary">
											<NavLink
												to={`/course/${course.id}`}>
												Get Premium Membership
											</NavLink>
										</div>
										<div className="badge badge-outline-primary">
											<NavLink
												to={`/course/${course.id}`}>
												Show Details
											</NavLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default Courses;
