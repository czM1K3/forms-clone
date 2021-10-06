import React, { useState } from "react";
import { useSession } from "../../utils/sessionContext";
import Login from "../Login";

const CreateForm = () => {
	const [session] = useSession();
	
	if (!session) return <Login />
	return (
		<h1>Create form</h1>
	);
};

export default CreateForm;
