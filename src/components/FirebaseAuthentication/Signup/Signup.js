import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
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
							<div className="card-body">
								<div className="form-control">
									<label className="label">
										<span className="label-text">
											Name
										</span>
									</label>
									<input
										type="text"
										placeholder="name"
									className="input input-bordered"
									name='name'
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
									name="photo-URL"
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">
											Email
										</span>
									</label>
									<input
										type="text"
										placeholder="email"
									className="input input-bordered"
									name='email'
									/>
								</div>
								<div className="form-control">
									<label className="label">
										<span className="label-text">
											Password
										</span>
									</label>
									<input
										type="text"
										placeholder="password"
									className="input input-bordered"
									name="password"
									/>
									<label className="label">
										<a
											href="#"
											className="label-text-alt link link-hover">
											Forgot password?
										</a>
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
									<button type='submit' className="btn btn-primary">
										Sign up
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Signup;