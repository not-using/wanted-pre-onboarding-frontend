import { act, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { setup } from "./routing";

test("회원가입 페이지에 이메일과 비밀번호 유효성 검사 모두 성공할 때", () => {
	setup(["/signup"]);

	const emailInput = screen.getByTestId("email-input");
	const passwordInput = screen.getByTestId("password-input");

	act(() => {
		user.type(emailInput, "te@st");
		user.type(passwordInput, "12345678");
	});
	expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
	expect(screen.queryByText("@를 포함해주세요")).not.toBeInTheDocument();
	expect(screen.queryByText("8자 이상 입력해주세요")).not.toBeInTheDocument();
});

test("회원가입 페이지에서 이메일이 실패했을 때 버튼 disabled", () => {
	setup(["/signup"]);
	const emailInput = screen.getByTestId("email-input");
	const passwordInput = screen.getByTestId("password-input");

	act(() => {
		user.type(emailInput, "test");
		user.type(passwordInput, "12345678");
	});
	expect(screen.getByRole("button")).toHaveAttribute("disabled");

	expect(screen.getByText("@를 포함해주세요")).toBeInTheDocument();
});

test("회원가입 페이지에서 비밀번호 실패했을 때 버튼 disabled", () => {
	setup(["/signup"]);

	const emailInput = screen.getByTestId("email-input");
	const passwordInput = screen.getByTestId("password-input");

	act(() => {
		user.type(emailInput, "te@st");
		user.type(passwordInput, "123456");
	});
	expect(screen.getByRole("button")).toHaveAttribute("disabled");
	expect(screen.getByText("8자 이상 입력해주세요")).toBeInTheDocument();
});
