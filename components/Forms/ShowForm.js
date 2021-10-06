import React, { useState, createContext, useContext } from "react";
import toast from "react-hot-toast";
import { useSession } from "../../utils/sessionContext";
import Login from "../Login";
import Text from "./Type/View/Text";

const CreateFormContext = createContext(null);

const CreateForm = () => {
	const [session] = useSession();
	const [selectedTypes, setSelectedTypes] = useState([]);


	
	if (!session) return <Login />
	return (
		<div>
			<h1>Create form</h1>
			<div>
				<button onClick={() => {
					const id = Math.round(Math.random() * 1000000);
					setSelectedTypes([...selectedTypes, { value: null, id, render: <Text key={id} id={id} />}])
				}}>Add text</button>
			</div>
			<CreateFormContext.Provider value={{ selectedTypes, setSelectedTypes }}>
				<div>
					{selectedTypes.map(element => element.render)}
				</div>
			</CreateFormContext.Provider>
			<div>
				<button
					onClick={() => {
						console.log(selectedTypes);
					}}
				>Submit</button>
			</div>
		</div>
	);
};

export default CreateForm;

export const useCreateForm = () => {
	const context = useContext(CreateFormContext);
	return [context.selectedTypes, context.setSelectedTypes]
};