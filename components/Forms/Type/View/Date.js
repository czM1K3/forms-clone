import React from "react";
import { useShowForm } from "../../ShowForm";

const DateBox = ({id, name}) => {
	const [state, setState] = useShowForm();
	const setValue = (id, value) => {
		const newState = [...state].map((item) => item.id === id ? {...item, value} : item);
		setState(newState);
	}
	return (
		<>
			<h1>Date: {name}</h1>
			<input type="date" placeholder="Response" onChange={(e) => {
				const value = e.target.value;
				console.log(value);
				if (value.length === 0) {
					setValue(id, null);
					return;
				}
				setValue(id, value);
			}} />
		</>
	);
};

export default DateBox;
