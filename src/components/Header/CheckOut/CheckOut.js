import React from "react";
import "./CheckOut.css";
import { useContext } from "react";
import { FaRegUserCircle, FaUserCheck, FaUserCircle } from "react-icons/fa";

import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const CheckOut = () => {
	const { cart, user, premiumAccess } = useContext(AuthContext);
	console.log(cart);

	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

	console.log(user);
	return (
		<div className="border shadow-lg rounded m-2 p-3">
			<h1 className="rounded-3xl bg-red-50 border text-primary p-2 m-2 fw-bolder uppercase ">
				Checkout A Course
			</h1>
			<div className="flex">
				<div className="imag-hight border rounded-md shadow-md">
					{user.photoURL ? (
						<img
							className="border p-1 m-1 shadow-lg rounded-3xl h-10 mask mask-decagon w-44  img-fluid object-scale-down"
							src={user?.photoURL}
							alt=""
						/>
					) : (
						<FaUserCheck className="p-0 m-0 fs-3 inline-block align-align-items-center text-center"></FaUserCheck>
					)}
				</div>
				<div className="border p-3 m-3 shadow-lg  rounded-3xl text-left text-green-600">
					<p> User Name : {user?.displayName}</p>
					<p>User Email : {user?.email}</p>
					<p>
						User Creation Time :{" "}
						{user?.metadata?.creationTime || "No data founded"}
					</p>
					<p>Last Login Time : {user?.metadata?.lastSignInTime}</p>
				</div>
			</div>
			{/* {premiumAccess.map((singlecart) => (
				<div>{singlecart}</div>
			))} */}
			<h3 className="rounded bg-red-50 border text-primary p-2 m-2">
				Your premium access for the flowing {cart.length} Courses
			</h3>
			{cart?.map((member, Index) => (
				<div
					key={Index}
					className="text-primary border rounded-3xl p-3 m-3 bg-red-100">
					{member}
				</div>
			))}
		</div>
	);
};

export default CheckOut;
