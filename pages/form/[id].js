import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router"
import ShowForm from "../../components/Forms/ShowForm";

const Form = () => {
	const router = useRouter();
	const { id } = router.query;
	const intId = parseInt(id);

	if (!intId) return <Layout>Invalid ID</Layout>;
	return (
		<Layout>
			<ShowForm id={id} />
		</Layout>
	);
};

export default Form;
