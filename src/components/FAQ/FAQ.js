import React from "react";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const FAQ = () => {
	return (
		<div className="text-dark bg-orange-700 m-5">
			<h1>This is FAQ</h1>
			<div
				className="tooltip tooltip-open tooltip-bottom"
				data-tip="hello">
				<button className="btn">Bottom</button>
				<>
					{["top", "right", "bottom", "left"].map((placement) => (
						<d
							key={placement}
			    		placement={placement}
							overlay={
								<Tooltip id={`tooltip-${placement}`}>
									Tooltip on <strong>{placement}</strong>.
								</Tooltip>
							}>
							<Button variant="white">
								Tooltip on {placement}
							</Button>
						</d>
					))}
				</>
			</div>

			
		</div>


	);
};

export default FAQ;
