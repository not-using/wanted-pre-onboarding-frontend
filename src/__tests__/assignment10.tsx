import { axiosInstance } from "constants/axios";
import { setup } from "./routing";
import nock from "nock";
import { apiUrl } from "constants/apiUrl";
import { todos } from "fixtures/todos";
import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";

beforeAll(() => {
	axiosInstance.defaults.adapter = "http";
});

afterEach(() => {
	nock.cleanAll();
	jest.clearAllMocks();
});

test("투두 우측에 수정버튼을 클릭하면 수정모드가 활성화 되어 내용을 변경할 수 있다", async () => {
	jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => "ok");
	nock(apiUrl).get("/todos").reply(200, todos);

	setup(["/todo"]);

	const modifyButtons = await screen.findAllByTestId("modify-button");
	act(() => {
		user.click(modifyButtons[0]);
	});

	const modifyInput = screen.getByTestId("modify-input");
	await waitFor(() => {
		expect(modifyInput).toBeInTheDocument();
	});

	act(() => {
		fireEvent.change(modifyInput, { target: { value: "added" } });
	});

	await waitFor(async () => {
		expect(modifyInput).toHaveValue("added");
	});
});

test("수정모드에서는 제출버튼과 취소버튼이 표시된다", async () => {
	jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => "ok");
	nock(apiUrl).get("/todos").reply(200, todos);

	setup(["/todo"]);

	const modifyButtons = await screen.findAllByTestId("modify-button");
	act(() => {
		user.click(modifyButtons[0]);
	});
	await waitFor(() => {
		expect(screen.getByTestId("submit-button")).toBeInTheDocument();
		expect(screen.getByTestId("cancel-button")).toBeInTheDocument();
	});
});

test("수정모드에서 취소버튼을 클릭하면 수정 내용이 초기화되고 수정 모드가 비활성화 된다", async () => {
	jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => "ok");
	nock(apiUrl).get("/todos").reply(200, todos);

	setup(["/todo"]);

	const modifyButtons = await screen.findAllByTestId("modify-button");
	act(() => {
		user.click(modifyButtons[0]);
	});

	const modifyInput = screen.getByTestId("modify-input");

	act(() => {
		fireEvent.change(modifyInput, { target: { value: "added" } });
	});

	await waitFor(async () => {
		expect(modifyInput).toHaveValue("added");
	});

	act(() => {
		fireEvent.click(screen.getByTestId("cancel-button"));
	});

	await waitFor(() => {
		expect(screen.queryAllByTestId("modify-input")).toHaveLength(0);
		expect(screen.queryAllByText("added")).toHaveLength(0);
	});
});

test("수정모드에서 제출버튼을 클릭하면 수정 내용이 업데이트 된다", async () => {
	jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => "ok");
	nock(apiUrl).get("/todos").reply(200, todos);

	nock(apiUrl)
		.put("/todos/1", { isCompleted: false, todo: "replaced" })
		.reply(200, {
			isCompleted: false,
			todo: "replaced",
		});

	setup(["/todo"]);

	const modifyButtons = await screen.findAllByTestId("modify-button");
	act(() => {
		user.click(modifyButtons[0]);
	});

	const modifyInput = screen.getByTestId("modify-input");

	act(() => {
		fireEvent.change(modifyInput, { target: { value: "replaced" } });
		fireEvent.click(screen.getByTestId("submit-button"));
	});

	await waitFor(() => {
		expect(screen.queryAllByTestId("modify-input")).toHaveLength(0);
		expect(screen.getByText("replaced")).toBeInTheDocument();
	});
});
