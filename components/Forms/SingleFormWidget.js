import React from "react";
import Link from "next/link";

const SingleFormWidget = ({name, id}) => (
	<div>
		<h1>{name}</h1>
		<Link href={`/form/${id}`}>Fill form</Link>
	</div>
);

export default SingleFormWidget;
