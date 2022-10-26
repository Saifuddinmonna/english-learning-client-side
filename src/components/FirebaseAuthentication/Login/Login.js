import React from "react";
import { Form, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
	return (
		<div>
			<h1>this is login</h1>

			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Login now!</h1>
						<p className="py-6">Please Login! to see the content</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form action="/events" className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="email"
									className="input input-bordered"
									name="email"
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
									name="password"
								/>
								<label className="label">
									<Link
										to="#"
										className="label-text-alt link link-hover">
										Forgot password?
									</Link>
								</label>
								<label className="label">
									Don't have an account?
									<Link
										to="/signup"
										className="label-text-alt link link-hover">
										Sign Up
									</Link>
								</label>
							</div>
							<div className="form-control mt-6">
								<button
									type="submit"
									className="btn btn-primary">
									Login
								</button>
							</div>
							<div className="form-control mt-6">
								<button
									type="submit"
									className="btn btn-primary">
									Login with Google
								</button>
							</div>
							<div className="form-control mt-6">
								<button
									type="submit"
									className="btn btn-primary">
									Login in Github
								</button>
							</div>
						</form>
					</div>
					<FontAwesomeIcon icon="fa-brands fa-google" />
					<i class="fa-brands fa-google"></i>
				</div>
			</div>
		</div>
	);
};

export default Login;
