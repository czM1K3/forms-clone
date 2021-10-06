import React from "react";
import { useShowForm } from "../../ShowForm";

const Float = ({id, name}) => {
	const [state, setState] = useShowForm();
	const setValue = (id, value) => {
		const newState = [...state].map((item) => item.id === id ? {...item, value} : item);
		setState(newState);
	}
	return (
		<>
			<h1>Float: {name}</h1>
			<input type="number" step="0.01" placeholder="Response" onChange={(e) => {
				const value = parseFloat(e.target.value);
				if (!value) {
					setValue(id, null);
					return;
				}
				setValue(id, value);
			}} />
		</>
	);
};

export default Float;
