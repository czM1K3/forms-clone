import React from "react";
import { useShowForm } from "../../ShowForm";

const Text = ({id, name}) => {
	const [state, setState] = useShowForm();
	const setValue = (id, value) => {
		const newState = [...state].map((item) => item.id === id ? {...item, value} : item);
		setState(newState);
	}
	return (
		<li className="list-group-item d-flex justify-content-between">
			<h2>Text: {name}</h2>
			<input type="text" placeholder="Response" onChange={(e) => {
				const value = e.target.value;
				if (value.length === 0) {
					setValue(id, null);
					return;
				}
				setValue(id, value);
			}} />
		</li>
	);
};

export default Text;
