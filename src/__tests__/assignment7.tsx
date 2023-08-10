import { axiosInstance } from "constants/axios";
import { setup } from "./routing";
import nock from "nock";
import { apiUrl } from "constants/apiUrl";
import { todos } from "fixtures/todos";
import { act, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";

beforeAll(() => {
	axiosInstance.defaults.adapter = "http";
});

afterEach(() => {
	nock.cleanAll();
	jest.clearAllMocks();
});

test("투두의 체크박스를 통해 완료 여부를 수정할 수 있다", async () => {
	jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => "ok");
	nock(apiUrl).get("/todos").reply(200, todos);

	setup(["/todo"]);

	// 미완료 상태 투두 2개 확인
	await waitFor(() => {
		const checkboxes: HTMLInputElement[] = screen.getAllByRole("checkbox");
		expect(checkboxes.filter((box) => box?.checked === false)).toHaveLength(2);
	});

	act(() => {
		user.click(screen.getByRole("checkbox", { name: "todo test 1" }));
	});

	// 미완료 투두 1개로 변화
	await waitFor(() => {
		const checkboxes: HTMLInputElement[] = screen.getAllByRole("checkbox");
		expect(checkboxes.filter((box) => box?.checked === false)).toHaveLength(1);
	});

	act(() => {
		user.click(screen.getByRole("checkbox", { name: "todo test 1" }));
	});

	// 미완료 투두 2개로 다시 변화
	await waitFor(() => {
		const checkboxes: HTMLInputElement[] = screen.getAllByRole("checkbox");
		expect(checkboxes.filter((box) => box?.checked === false)).toHaveLength(2);
	});
});
