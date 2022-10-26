import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

const Blog = () => {
	return (
		<div className="text-red-900">
			<BeakerIcon className="h-6 w-6 text-blue-500" />
			<FontAwesomeIcon icon="fa-brands fa-google" />
			<i class="fa-brands fa-google"></i>
			<h1>thid is blog for testing</h1>
		</div>
	);
};

export default Blog;
