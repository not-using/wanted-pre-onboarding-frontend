import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "components/Layout";
import MainPage from "components/main/MainPage";
import NotFoundPage from "components/notFound/NotFoundPage";
import AuthPage from "components/auth/AuthPage";
import TodoPage from "components/todo/TodoPage";
import Protected from "routers/Protected";

export const routes = createRoutesFromElements(
	<Route path="/" element={<Layout />}>
		<Route index element={<MainPage />} />
		{/* 토큰 인증을 받지 않은 사용자만 접근 가능 */}
		<Route element={<Protected authenticated="forbidden" replace="/todo" />}>
			<Route path="signup" element={<AuthPage />} />
			<Route path="signin" element={<AuthPage />} />
		</Route>
		{/* 토큰 인증을 받은 사용자만 접근 가능 */}
		<Route element={<Protected authenticated="allowed" replace="/signin" />}>
			<Route path="todo" element={<TodoPage />} />
		</Route>
		<Route path="*" element={<NotFoundPage />} />
	</Route>
);

export const router = createBrowserRouter(routes);
