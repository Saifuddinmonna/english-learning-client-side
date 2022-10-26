import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Signup = () => {
	const { createUser } = useContext(AuthContext);
	console.log(createUser);
	const getFormValue = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name,photo,email,password)
		createUser(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user)
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage)
		})
	};

	const handleCreateUser = () => {};
	return (
		<div>
			<h1>this is signup</h1>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Sign Up now!</h1>
						<p className="py-6">
							Please Sign up! to see the content
						</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form onSubmit={getFormValue} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									placeholder="name"
									className="input input-bordered"
									name="name"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">
										Photo-URL
									</span>
								</label>
								<input
									type="text"
									placeholder="Profile Photo Url"
									className="input input-bordered"
									Name="photo"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="email"
									className="input input-bordered"
									Name="email"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="text"
									placeholder="password"
									className="input input-bordered"
									Name="password"
								/>
								<label className="label">
									<NavLink
										to="#"
										className="label-text-alt link link-hover">
										Forgot password?
									</NavLink>
								</label>
								<label className="label">
									Already have an account?
									<Link
										to="/login"
										className="label-text-alt link link-hover">
										Login
									</Link>
								</label>
							</div>
							<div className="form-control mt-6">
								<button
									type="submit"
									className="btn btn-primary">
									Sign up
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
