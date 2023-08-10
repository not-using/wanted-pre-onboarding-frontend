import { act, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import nock from "nock";
import { setup } from "./routing";
import { apiUrl } from "constants/apiUrl";
import { axiosInstance } from "constants/axios";

beforeAll(() => {
	// xhr adapter 일 경우 nock 사용 불가능
	axiosInstance.defaults.adapter = "http";
});

afterEach(() => {
	nock.cleanAll();
});

afterAll(() => {
	jest.clearAllMocks();
});

test("회원가입 요청 성공시 리다이렉트", async () => {
	const { router } = setup(["/signup"]);

	nock(apiUrl)
		.post("/auth/signup", { email: "test@!", password: "12345678" })
		.reply(201);

	act(() => {
		user.type(screen.getByLabelText("이메일"), "test@!");
		user.type(screen.getByLabelText("비밀번호"), "12345678");
		user.click(screen.getByRole("button", { name: "회원가입" }));
	});

	await waitFor(async () => {
		expect(router.state.location.pathname).toBe("/signin"); // 리다이렉트
	});
});

test("회원가입 요청 실패시 에러메시지 출력", async () => {
	const { router } = setup(["/signup"]);

	nock(apiUrl)
		.post("/auth/signup", { email: "test@@", password: "12345678" })
		.reply(400);

	act(() => {
		user.type(screen.getByLabelText("이메일"), "test@@");
		user.type(screen.getByLabelText("비밀번호"), "12345678");
		user.click(screen.getByRole("button", { name: "회원가입" }));
	});

	await waitFor(() => {
		expect(screen.getByText("다시 확인해주세요.")).toBeInTheDocument();
	});
	expect(router.state.location.pathname).toBe("/signup"); // 페이지 유지
});

test("로그인 요청 성공시 토큰 저장 후 리다이렉트", async () => {
	const { router } = setup(["/signin"]);

	jest.spyOn(Storage.prototype, "setItem");
	Storage.prototype.setItem = jest.fn();

	nock(apiUrl)
		.post("/auth/signin", { email: "test@!", password: "12345678" })
		.reply(200, { access_token: "token" });

	act(() => {
		user.type(screen.getByLabelText("이메일"), "test@!");
		user.type(screen.getByLabelText("비밀번호"), "12345678");
		user.click(screen.getByRole("button", { name: "로그인" }));
	});

	await waitFor(async () => {
		expect(localStorage.setItem).toHaveBeenCalled();
	});
	expect(router.state.location.pathname).toBe("/todo"); // 리다이렉트
});

test("로그인 요청 실패시 에러메시지 출력", async () => {
	const { router } = setup(["/signin"]);

	nock(apiUrl)
		.post("/auth/signin", { email: "test@@", password: "12345678" })
		.reply(400);

	act(() => {
		user.type(screen.getByLabelText("이메일"), "test@@");
		user.type(screen.getByLabelText("비밀번호"), "12345678");
		user.click(screen.getByRole("button", { name: "로그인" }));
	});

	await waitFor(async () => {
		expect(screen.getByText("다시 확인해주세요.")).toBeInTheDocument();
	});
	expect(router.state.location.pathname).toBe("/signin"); // 페이지 유지
});
