import React from "react";
import { useCreateForm } from "../../CreateForm";

const Box = ({ id, text }) => {
	const [state, setState] = useCreateForm();
	const setValue = (id, name) => {
		setState([...state].map((item) => item.id === id ? {...item, name} : item));
	}
	const deleteId = (id) => {
		setState([...state].filter((item) => item.id !== id));
	};
	return (
		<>
			<h2>{text}</h2>
			<input type="text" placeholder="Name" onChange={(e) => {
				const value = e.target.value;
				if (value.length === 0) {
					setValue(id, null);
					return;
				}
				setValue(id, value);
			}} />
			<button onClick={() => deleteId(id)}>Delete</button>
		</>
	);
};

export default Box;
