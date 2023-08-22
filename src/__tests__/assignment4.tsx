import { waitFor } from "@testing-library/react";
import { setup } from "./routing";

afterEach(() => {
  jest.clearAllMocks();
});

test('로컬스토리지에 토큰이 있는 상태로 "signin" 경로에 접근하면 "todo" 경로로 리다이렉트', async () => {
  const tokenExistedMock = (key: string) => (key === "token" ? "ok" : null);
  jest.spyOn(Storage.prototype, "getItem").mockImplementation(tokenExistedMock);

  const { router } = setup(["/signin"]);

  await waitFor(() => {
    expect(router.state.location.pathname).toBe("/todo");
  });
});

test('로컬스토리지에 토큰이 있는 상태로 "signup" 경로에 접근하면 "todo" 경로로 리다이렉트', async () => {
  const tokenExistedMock = (key: string) => (key === "token" ? "ok" : null);
  jest.spyOn(Storage.prototype, "getItem").mockImplementation(tokenExistedMock);

  const { router } = setup(["/signup"]);

  await waitFor(() => {
    expect(router.state.location.pathname).toBe("/todo");
  });
});

test('로컬스토리지에 토큰이 없는 상태로 "todo" 경로에 접근하면 "signin" 경로로 리다이렉트', async () => {
  const noTokenMock = () => null;
  jest.spyOn(Storage.prototype, "getItem").mockImplementation(noTokenMock);

  const { router } = setup(["/todo"]);

  await waitFor(() => {
    expect(router.state.location.pathname).toBe("/signin");
  });
});
