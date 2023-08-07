import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<header>헤더</header>
			<Outlet />
		</>
	);
};

export default Layout;
