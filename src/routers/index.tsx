import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "pages";
import Main from "pages/Main";
import NotFound from "pages/NotFound";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Main />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
);
