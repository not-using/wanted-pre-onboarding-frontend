import { axiosInstance } from "constants/axios";
import { todos } from "fixtures/todos";
import nock from "nock";
import { setup } from "./routing";
import { apiUrl } from "constants/apiUrl";
import { act, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";

beforeAll(() => {
  axiosInstance.defaults.adapter = "http";
});

afterEach(() => {
  nock.cleanAll();
  jest.clearAllMocks();
});

test("새로운 투두를 추가할 수 있는 입력창과 버튼을 확인할 수 있다", async () => {
  jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => "ok");
  nock(apiUrl).get("/todos").reply(200, todos);

  setup(["/todo"]);

  await waitFor(() => {
    expect(screen.getByTestId("new-todo-input")).toBeInTheDocument();
    expect(screen.getByTestId("new-todo-add-button")).toBeInTheDocument();
  });
});

test("새로운 투두를 입력하고 추가 버튼을 클릭하면 새로운 TODO로 추가된다", async () => {
  jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => "ok");
  nock(apiUrl).get("/todos").reply(200, todos);
  nock(apiUrl)
    .post("/todos", { todo: "todo test 4" })
    .reply(200, { id: 4, todo: "todo test 4", isCheck: false, userID: 1 });

  setup(["/todo"]);

  // 추가하기 전 기본 투두 3개 확인
  await waitFor(() => {
    expect(screen.getAllByRole("checkbox")).toHaveLength(3);
  });

  act(() => {
    user.type(screen.getByTestId("new-todo-input"), "todo test 4");
    user.click(screen.getByTestId("new-todo-add-button"));
  });

  // 새로운 투두 추가, 투두 4개 확인
  await waitFor(() => {
    expect(screen.getAllByRole("checkbox")).toHaveLength(4);
  });
});
