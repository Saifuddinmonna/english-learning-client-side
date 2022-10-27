import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Course = () => {
	const singleCourse = useLoaderData();

	const [cart, setCart] = useState([]);

	const { id, pic, details, course } = singleCourse;
	const { handleAddtoCart, handlepremiumAccess } = useContext(AuthContext);

	const handlehandleAddtoCart = (id) => {
		console.log("id frim details handoler", singleCourse);

		let newCart = [];
		const exists = cart.find((coursename) => coursename === course);
		if (!exists) {
			newCart = [...cart, course];
		} else {
			alert("You Already a Premium Access");
		}

		setCart(newCart);
		handlepremiumAccess(cart);
		console.log("premium access", cart);
	};

	console.log("this is for signle page singleCourse details", singleCourse);
	const onButtonClickpdf = ({ id }) => {
		// using Java Script method to get PDF file
		const url = `https://server-for-assignment-10.vercel.app/courses/${id}`;
		fetch("SamplePDF.pdf").then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "SamplePDF.pdf";
				alink.click();
			});
		});
	};
	return (
		<div className="border shadow rounded-md m-2 p-3">
			<div className="card w-full bg-base-100 shadow-xl">
				<header className="border rounded shadow-sm m-2 p-2 position-relative ">
					<h2>{singleCourse.course}</h2>
					<button
						onClick={() => onButtonClickpdf(id)}
						className="position-absolute  top-1 right-1 btn btn-outline btn-primary rounded-circle text-white btn-sm">
						{" "}
						Make Pdf
					</button>
					<div>
						<p className="border shadow rounded-md m-1 p-1">
							{singleCourse.details}
						</p>
					</div>
				</header>
				<figure className="border rounded shadow-sm m-2 p-2 ">
					<img src={singleCourse.pic} alt="Shoes" />
				</figure>
				<div className="border rounded shadow-sm m-2 p-2 text-justify">
					<p>{singleCourse.moredetails}</p>

					<div className="card-actions justify-end">
						<button
							onClick={() =>
								handlehandleAddtoCart(singleCourse.id)
							}
							className=" btn bg-red-500   btn-warning w-full">
							Get Premium Access
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;
