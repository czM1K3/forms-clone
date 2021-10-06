import React, { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Loading from "./Loading";

const Login = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");

	const handleLogin = async (email) => {
		try {
			setLoading(true);
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
		} catch (error) {
			console.log(error);
		} finally { 
			setLoading(false);
		}
	};

	if (loading) return <Loading />;
	return (
		<div className="container">
			<h1>Login</h1>
			<input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
					handleLogin(email);
				}}
			>
				Login
			</button>
		</div>
	);
};

export default Login;
