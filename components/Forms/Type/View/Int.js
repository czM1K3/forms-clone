import React from "react";
import { useShowForm } from "../../ShowForm";

const Int = ({id, name}) => {
	const [state, setState] = useShowForm();
	const setValue = (id, value) => {
		const newState = [...state].map((item) => item.id === id ? {...item, value} : item);
		setState(newState);
	}
	return (
		<>
			<h1>Int: {name}</h1>
			<input type="number" placeholder="Response" onChange={(e) => {
				const value = parseInt(e.target.value);
				if (!value) {
					setValue(id, null);
					return;
				}
				setValue(id, value);
			}} />
		</>
	);
};

export default Int;
