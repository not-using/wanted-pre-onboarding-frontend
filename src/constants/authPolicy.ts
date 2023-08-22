export const authPolicy = {
  email: {
    validator: (email: string) => email.includes("@"),
    invalidMessage: "@를 포함해주세요",
  },
  password: {
    validator: (password: string) => password.length >= 8,
    invalidMessage: "8자 이상 입력해주세요",
  },
};
