import React from "react";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const FAQ = () => {
	return (
		<div className="text-dark bg-stone-50 container rounded-md m-5 p-4 shadow-lg">
			<h1 className="border shadow rounded-full p-3">This is FAQ</h1>
			<div>
				<h5 className="border shadow rounded-full p-3 text-left line-height">
					How does NodeJS works internally?
					<br /> What does node actually do? <br />
					Is Node a web server? <br />
					Is Node.js backend or middleware? Is node multithreaded?
					<br />
					What is an API node? Why node js is called node?
					<p>
						How does node Express work? <br /> Express is a node js
						web application framework that provides broad features
						for building web and mobile applications. It is used to
						build a single page, multipage, and hybrid web
						application. It's a layer built on the top of the Node
						js that helps manage servers and routes.Oct 13, 2022
						Express JS Tutorial: br What is Express in Node JS?
						tutorials › <br />
						what-is-express-js Search for: How does node Express
						work? How does node execute?
						<br /> Node. js takes a different approach. It runs a
						single-threaded event loop registered with the system to
						handle connections, and each new connection causes a
						JavaScript callback function to fire.Oct 1, 2022 What is
						Node.js? The JavaScript runtime explained - <br />
						Software Development Search for: How does node execute?
						How does NodeJS works internally?
						<br />
						Node JS Web Server internally maintains a Limited Thread
						pool to provide services to the Client Requests. Node JS
						Web Server receives those requests and places them into
						a Queue. It is known as “Event Queue”. Node JS Web
						Server internally has a Component, known as “Event
						Loop”.Aug 3, 2022 Node JS Architecture - Single Threaded
						Event Loop
					</p>
				</h5>
			</div>
		</div>
	);
};

export default FAQ;
