import { SessionProvider } from "../utils/sessionContext";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
	return (
		<SessionProvider>
			<Component {...pageProps} />
		</SessionProvider>
	);
}

export default MyApp;
