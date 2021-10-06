import React from "react";
import { useCreateForm } from "../../ShowForm";

const Text = ({id}) => {
	const [state, setState] = useCreateForm();
	const setValue = (id, value) => {
		const newState = [...state].map((item) => item.id === id ? {...item, value} : item);
		setState(newState);
	}
	return (
		<>
			<h1>Text field</h1>
			<input type="text" onChange={(e) => {
				const value = e.target.value;
				if (value.length === 0) {
					setValue(id, null);
					return;
				}
				setValue(id, value);
			}} />
		</>
	);
};

export default Text;
