import nock from "nock";
import { screen, waitFor } from "@testing-library/react";
import { apiUrl } from "constants/apiUrl";
import { axiosInstance } from "constants/axios";
import { todos } from "fixtures/todos";
import { setup } from "./routing";

beforeAll(() => {
  axiosInstance.defaults.adapter = "http";
});

afterEach(() => {
  nock.cleanAll();
  jest.clearAllMocks();
});

test('"/todo" 경로에 접속하면 투두리스트의 목록을 볼 수 있다', async () => {
  jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => "ok");
  nock(apiUrl).get("/todos").reply(200, todos);

  setup(["/todo"]);

  await waitFor(() => {
    const todoElements = screen.getAllByText(/todo test/);
    expect(todoElements).toHaveLength(3);
  });
});

test("TODO 목록에서 input checkbox가 포함되어 있다.", async () => {
  jest.spyOn(Storage.prototype, "getItem").mockImplementation(() => "ok");
  nock(apiUrl).get("/todos").reply(200, todos);

  setup(["/todo"]);

  await waitFor(() => {
    expect(screen.getAllByRole("checkbox")).toHaveLength(3);
  });
});
