import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "routers";

export const setup = (paths?: string[]) => {
  const router = createMemoryRouter(routes, { initialEntries: paths });
  render(<RouterProvider router={router} />);
  return { router };
};

test("/signup 경로에 회원가입 기능 개발", () => {
  setup(["/signup"]);

  expect(screen.getByRole("heading")).toHaveTextContent("회원가입");
  expect(screen.getByLabelText("이메일")).toBeInTheDocument();
  expect(screen.getByLabelText("비밀번호")).toBeInTheDocument();
  expect(screen.getByRole("button")).toHaveTextContent("회원가입");
  expect(screen.getByTestId("email-input")).toBeInTheDocument();
  expect(screen.getByTestId("password-input")).toBeInTheDocument();
  expect(screen.getByTestId("signup-button")).toBeInTheDocument();
});

test("/signin 경로에 로그인 기능 개발", () => {
  setup(["/signin"]);

  expect(screen.getByRole("heading")).toHaveTextContent("로그인");
  expect(screen.getByLabelText("이메일")).toBeInTheDocument();
  expect(screen.getByLabelText("비밀번호")).toBeInTheDocument();
  expect(screen.getByRole("button")).toHaveTextContent("로그인");
  expect(screen.getByTestId("email-input")).toBeInTheDocument();
  expect(screen.getByTestId("password-input")).toBeInTheDocument();
  expect(screen.getByTestId("signin-button")).toBeInTheDocument();
});
