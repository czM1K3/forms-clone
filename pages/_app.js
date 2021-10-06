import { SessionProvider } from "../utils/sessionContext";
import "bootstrap/dist/css/bootstrap.css";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
	return (
		<SessionProvider>
			<Toaster />
			<Component {...pageProps} />
		</SessionProvider>
	);
}

export default MyApp;
