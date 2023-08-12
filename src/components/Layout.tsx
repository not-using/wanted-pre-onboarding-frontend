import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "components/Header";

const Layout = () => {
	return (
		<>
			<Header />
			<StyledMain>
				<Outlet />
			</StyledMain>
		</>
	);
};

export default Layout;

export const StyledMain = styled.main`
	max-width: 1200px;
	padding: 1rem;
	margin: 0 auto;
	box-sizing: border-box;
`;
