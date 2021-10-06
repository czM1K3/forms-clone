import React, { useState, useEffect } from "react";
import { useSession } from "../utils/sessionContext";
import { supabase } from "../utils/supabaseClient";
import Loading from "./Loading";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	const [loading, setLoading] = useState(true);

	const [session, setSession] = useSession();

	useEffect(() => {
		setSession(supabase.auth.session());
		supabase.auth.onAuthStateChange((_event, session) => setSession(session));
		setLoading(false)
	}, []);

	return (
		<>
			<Navbar />
			<div className="container">
				{loading ? <Loading /> : children}
			</div>
		</>
	);
};

export default Layout;
