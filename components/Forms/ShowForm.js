import React, { useState, createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { supabase } from "../../utils/supabaseClient";
import Loading from "../Loading";
import Login from "../Login";
import Int from "./Type/View/Int";
import Text from "./Type/View/Text";
import Float from "./Type/View/Float";
import DateBox from "./Type/View/Date";

const ShowFormContext = createContext(null);

const ShowForm = ({id}) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [formName, setFormname] = useState("");
	const [selectedTypes, setSelectedTypes] = useState([]);

	const loadForm = async () => {
		const { data: baseForm, error } = await supabase.from("form").select("*").eq("id", id);
		if (error || !baseForm.length) {
			setError(true);
			return;
		}
		setFormname(baseForm[0].name);
		const { data: formFields, error2 } = await supabase.from("form_row").select("*").eq("form_id", id);
		if (error2) {
			setError(true);
			return;
		}
		setSelectedTypes(formFields.map((field) => {
			const id = Math.round(Math.random() * 1000000);
			if (field.type === "text") return { value: null, id, render: <Text key={id} id={id} name={field.name} />};
			if (field.type === "int") return { value: null, id, render: <Int key={id} id={id} name={field.name} />};
			if (field.type === "float") return { value: null, id, render: <Float key={id} id={id} name={field.name} />};
			if (field.type === "date") return { value: null, id, render: <DateBox key={id} id={id} name={field.name} />};
			return null;
		}).filter((field) => field));
		setLoading(false);
	};

	useEffect(() => loadForm(), []);
	
	if (error) return <p>Error</p>;
	if (loading) return <Loading />;
	return (
		<div>
			<h1>Form {formName}</h1>
			<ShowFormContext.Provider value={{ selectedTypes, setSelectedTypes }}>
				<div>
					{selectedTypes.map(element => element.render)}
				</div>
			</ShowFormContext.Provider>
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

export default ShowForm;

export const useShowForm = () => {
	const context = useContext(ShowFormContext);
	return [context.selectedTypes, context.setSelectedTypes]
};