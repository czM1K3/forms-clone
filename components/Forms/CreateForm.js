import React, { useState, createContext, useContext } from "react";
import Login from "../Login";
import Box from "./Type/Create/Box";
import { useSession } from "../../utils/sessionContext";
import toast from "react-hot-toast";
import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/router";

const CreateFormContext = createContext(null);

const CreateForm = () => {
	const router = useRouter();
	const [session] = useSession();
	const [selectedTypes, setSelectedTypes] = useState([]);
	const [name, setName] = useState("");

	const createType = (type, text) => {
		const id = Math.round(Math.random() * 1000000);
		setSelectedTypes([...selectedTypes, { name: null, id, type, render: <Box key={id} id={id} text={text} />}])
	}

	const submit = async () => {
		if (!name) {
			toast.error("Please enter a name for your form");
			return;
		}
		if(selectedTypes.length === 0) {
			toast.error("Please select at least one type");
			return;
		}
		const types = selectedTypes.map(({ id, type, name }) => ({ id, type, name }));
		if (types.map(x => x.name).includes(null)) {
			toast.error("Please fill in all the names");
			return;
		}
		console.log(types);

		const { data, error } = await supabase.from("form").insert({name, user: supabase.auth.user().id});
		if (error) {
			toast.error("Error creating form");
			return;
		}
		const formId = data[0].id;
		
		const { error2 } = await supabase.from("form_row").insert(types.map((type) => ({form_id: formId, type: type.type, name: type.name})));
		if (error2) {
			toast.error("Error creating form");
			return;
		}
		toast.success("Form created");
		router.push(`/form/${formId}`);
	}
	
	if (!session) return <Login />
	return (
		<div>
			<h2>Create form</h2>
			<div>
				<button onClick={() => createType("text", "Text field") }>Add text</button>
				<button onClick={() => createType("int", "Int field") }>Add int</button>
				<button onClick={() => createType("float", "Float field") }>Add float</button>
				<button onClick={() => createType("date", "Date field") }>Date float</button>
			</div>
			<div>
				<input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Form name" />
			</div>
			<CreateFormContext.Provider value={{ selectedTypes, setSelectedTypes }}>
				<div>
					{selectedTypes.map(element => element.render)}
				</div>
			</CreateFormContext.Provider>
			<div>
				<button
					onClick={() => submit()}
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