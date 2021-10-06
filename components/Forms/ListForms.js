import React, { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";
import Loading from "../Loading";
import SingleFormWidget from "./SingleFormWidget";

const ListForms = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [forms, setForms] = useState([]);

	const getForms = async () => {
		setLoading(true);
		const { data, error } = await supabase.from('form').select('*');
		setForms(data);
		if (error) setError(true);
		setLoading(false);
	}

	useEffect(() => getForms(), []);

	if (loading) return <Loading />;
	if (error) return <p>Error</p>;
	return (
		<div>
			{forms.map(form => <SingleFormWidget name={form.name} id={form.id} key={form.id} />)}
		</div>
	);
};

export default ListForms;
