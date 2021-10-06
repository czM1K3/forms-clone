import React from "react";
import Link from "next/link";

const SingleFormWidget = ({name, id}) => (
	<li className="list-group-item">
		<div className="d-flex justify-content-between">
			
			<h2>{name}</h2>
			<Link href={`/form/${id}`}>
				<button className="btn btn-primary">Fill form</button>
			</Link>
		</div>
	</li>
);

export default SingleFormWidget;
