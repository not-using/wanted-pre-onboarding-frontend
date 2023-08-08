import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "pages";
import Main from "pages/Main";
import NotFound from "pages/NotFound";
import Auth from "pages/Auth";
import Todo from "pages/Todo";
import Protected from "routers/Protected";

export const routes = createRoutesFromElements(
	<Route path="/" element={<Layout />}>
		<Route index element={<Main />} />
		{/* 토큰 인증을 받지 않은 사용자만 접근 가능 */}
		<Route element={<Protected authenticated="forbidden" replace="/todo" />}>
			<Route path="signup" element={<Auth />} />
			<Route path="signin" element={<Auth />} />
		</Route>
		{/* 토큰 인증을 받은 사용자만 접근 가능 */}
		<Route element={<Protected authenticated="allowed" replace="/signin" />}>
			<Route path="todo" element={<Todo />} />
		</Route>
		<Route path="*" element={<NotFound />} />
	</Route>
);

export const router = createBrowserRouter(routes);
