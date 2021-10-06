import { createContext, useState, useContext } from "react";

const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
	const [state, setState] = useState(null);
	return (
		<SessionContext.Provider value={{state, setState}}>
			{children}
		</SessionContext.Provider>
	);
};

export const useSession = () => {
	const context = useContext(SessionContext);
	return [context.state, context.setState];
};
