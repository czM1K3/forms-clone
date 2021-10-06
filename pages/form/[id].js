import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router"

const Form = () => {
	const router = useRouter();
	const { id } = router.query;
	const intId = parseInt(id);

	if (!intId) return <Layout>Invalid ID</Layout>;
	return (
		<Layout>
			<h1>{intId}</h1>
		</Layout>
	);
};

export default Form;
