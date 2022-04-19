import React from "react";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUp from "./SignUp";

test("Signup is in the Document", () => {
  const { getByText } = render(<SignUp onSubmit={(obj) => console.log(obj)} />);
  expect(getByText(/Signup/i)).toBeInTheDocument();
});

test("inputs should be initially empty", () => {
  const { queryByRole, queryByLabelText } = render(
    <SignUp onSubmit={(obj) => console.log(obj)} />
  );
  const nameField = queryByRole("textbox", { name: /name/i });
  const emailField = queryByRole("textbox", { name: /email/i });
  const passwordField = queryByLabelText("password");
  const passwordConfirmField = queryByLabelText("confirm-password");

  expect((nameField as HTMLInputElement).value).toBe("");
  expect((emailField as HTMLInputElement).value).toBe("");
  expect((passwordField as HTMLInputElement).value).toBe("");
  expect((passwordConfirmField as HTMLInputElement).value).toBe("");
});

test("SubmitButton should be disabled when email invalid", async () => {
  const user = userEvent.setup();
  const { queryByRole, queryByLabelText } = render(
    <SignUp onSubmit={(obj) => console.log(obj)} />
  );
  const nameField = queryByRole("textbox", { name: /name/i });
  const emailField = queryByRole("textbox", { name: /email/i });
  const passwordField = queryByLabelText("password");
  const passwordConfirmField = queryByLabelText("confirm-password");

  if (nameField) {
    await user.click(nameField);
    await user.keyboard("name");
  }
  if (emailField) {
    await user.click(emailField);
    await user.keyboard("email@email");
  }
  if (passwordField) {
    await user.click(passwordField);
    await user.keyboard("!Password1");
  }
  if (passwordConfirmField) {
    await user.click(passwordConfirmField);
    await user.keyboard("!Password1");
  }
  const submitButton = queryByRole("button", { name: /submit/i });

  expect((submitButton as HTMLButtonElement).disabled).toBe(true);
});

test("SubmitButton should be disabled when password has no number", async () => {
  const user = userEvent.setup();
  const { queryByRole, queryByLabelText } = render(
    <SignUp onSubmit={(obj) => console.log(obj)} />
  );
  const nameField = queryByRole("textbox", { name: /name/i });
  const emailField = queryByRole("textbox", { name: /email/i });
  const passwordField = queryByLabelText("password");
  const passwordConfirmField = queryByLabelText("confirm-password");

  if (nameField) {
    await user.click(nameField);
    await user.keyboard("name");
  }
  if (emailField) {
    await user.click(emailField);
    await user.keyboard("email@email.de");
  }
  if (passwordField) {
    await user.click(passwordField);
    await user.keyboard("!Password");
  }
  if (passwordConfirmField) {
    await user.click(passwordConfirmField);
    await user.keyboard("!Password");
  }
  const submitButton = queryByRole("button", { name: /submit/i });

  expect((submitButton as HTMLButtonElement).disabled).toBe(true);
});

test("SubmitButton should be disabled when password has no special-char", async () => {
  const user = userEvent.setup();
  const { queryByRole, queryByLabelText } = render(
    <SignUp onSubmit={(obj) => console.log(obj)} />
  );
  const nameField = queryByRole("textbox", { name: /name/i });
  const emailField = queryByRole("textbox", { name: /email/i });
  const passwordField = queryByLabelText("password");
  const passwordConfirmField = queryByLabelText("confirm-password");

  if (nameField) {
    await user.click(nameField);
    await user.keyboard("name");
  }
  if (emailField) {
    await user.click(emailField);
    await user.keyboard("email@email.de");
  }
  if (passwordField) {
    await user.click(passwordField);
    await user.keyboard("Password1");
  }
  if (passwordConfirmField) {
    await user.click(passwordConfirmField);
    await user.keyboard("Password1");
  }
  const submitButton = queryByRole("button", { name: /submit/i });

  expect((submitButton as HTMLButtonElement).disabled).toBe(true);
});

test("SubmitButton should be disabled when password has no upper-case-letter", async () => {
  const user = userEvent.setup();
  const { queryByRole, queryByLabelText } = render(
    <SignUp onSubmit={(obj) => console.log(obj)} />
  );
  const nameField = queryByRole("textbox", { name: /name/i });
  const emailField = queryByRole("textbox", { name: /email/i });
  const passwordField = queryByLabelText("password");
  const passwordConfirmField = queryByLabelText("confirm-password");

  if (nameField) {
    await user.click(nameField);
    await user.keyboard("name");
  }
  if (emailField) {
    await user.click(emailField);
    await user.keyboard("email@email.de");
  }
  if (passwordField) {
    await user.click(passwordField);
    await user.keyboard("!password1");
  }
  if (passwordConfirmField) {
    await user.click(passwordConfirmField);
    await user.keyboard("!password1");
  }
  const submitButton = queryByRole("button", { name: /submit/i });

  expect((submitButton as HTMLButtonElement).disabled).toBe(true);
});

test("SubmitButton should be disabled when password has no lower-case-letter", async () => {
  const user = userEvent.setup();
  const { queryByRole, queryByLabelText } = render(
    <SignUp onSubmit={(obj) => console.log(obj)} />
  );
  const nameField = queryByRole("textbox", { name: /name/i });
  const emailField = queryByRole("textbox", { name: /email/i });
  const passwordField = queryByLabelText("password");
  const passwordConfirmField = queryByLabelText("confirm-password");

  if (nameField) {
    await user.click(nameField);
    await user.keyboard("name");
  }
  if (emailField) {
    await user.click(emailField);
    await user.keyboard("email@email.de");
  }
  if (passwordField) {
    await user.click(passwordField);
    await user.keyboard("!PASSWORD1");
  }
  if (passwordConfirmField) {
    await user.click(passwordConfirmField);
    await user.keyboard("!PASSWORD1");
  }
  const submitButton = queryByRole("button", { name: /submit/i });

  expect((submitButton as HTMLButtonElement).disabled).toBe(true);
});

test("SubmitButton should be disabled when password has less than 8 chars", async () => {
  const user = userEvent.setup();
  const { queryByRole, queryByLabelText } = render(
    <SignUp onSubmit={(obj) => console.log(obj)} />
  );
  const nameField = queryByRole("textbox", { name: /name/i });
  const emailField = queryByRole("textbox", { name: /email/i });
  const passwordField = queryByLabelText("password");
  const passwordConfirmField = queryByLabelText("confirm-password");

  if (nameField) {
    await user.click(nameField);
    await user.keyboard("name");
  }
  if (emailField) {
    await user.click(emailField);
    await user.keyboard("email@email.de");
  }
  if (passwordField) {
    await user.click(passwordField);
    await user.keyboard("!Passw1");
  }
  if (passwordConfirmField) {
    await user.click(passwordConfirmField);
    await user.keyboard("!Passw1");
  }
  const submitButton = queryByRole("button", { name: /submit/i });

  expect((submitButton as HTMLButtonElement).disabled).toBe(true);
});

test("SubmitButton should be disabled when passwords doesn´t match", async () => {
  const user = userEvent.setup();
  const { queryByRole, queryByLabelText } = render(
    <SignUp onSubmit={(obj) => console.log(obj)} />
  );
  const nameField = queryByRole("textbox", { name: /name/i });
  const emailField = queryByRole("textbox", { name: /email/i });
  const passwordField = queryByLabelText("password");
  const passwordConfirmField = queryByLabelText("confirm-password");

  if (nameField) {
    await user.click(nameField);
    await user.keyboard("name");
  }
  if (emailField) {
    await user.click(emailField);
    await user.keyboard("email@email.de");
  }
  if (passwordField) {
    await user.click(passwordField);
    await user.keyboard("!Password1");
  }
  if (passwordConfirmField) {
    await user.click(passwordConfirmField);
    await user.keyboard("!Password2");
  }
  const submitButton = queryByRole("button", { name: /submit/i });

  expect((submitButton as HTMLButtonElement).disabled).toBe(true);
});

test("SubmitButton should not be disabled when all fields valid", async () => {
  const user = userEvent.setup();
  const { queryByRole, queryByLabelText } = render(
    <SignUp onSubmit={(obj) => console.log(obj)} />
  );
  const nameField = queryByRole("textbox", { name: /name/i });
  const emailField = queryByRole("textbox", { name: /email/i });
  const passwordField = queryByLabelText("password");
  const passwordConfirmField = queryByLabelText("confirm-password");

  if (nameField) {
    await user.click(nameField);
    await user.keyboard("name");
  }
  if (emailField) {
    await user.click(emailField);
    await user.keyboard("email@email.de");
  }
  if (passwordField) {
    await user.click(passwordField);
    await user.keyboard("!Password1");
  }
  if (passwordConfirmField) {
    await user.click(passwordConfirmField);
    await user.keyboard("!Password1");
  }
  const submitButton = queryByRole("button", { name: /submit/i });

  expect((submitButton as HTMLButtonElement).disabled).toBe(false);
});

test("should be able to type in email field", async () => {
  const user = userEvent.setup();
  const { queryByRole } = render(
    <SignUp onSubmit={(obj) => console.log(obj)} />
  );
  const emailTextBox = queryByRole("textbox", { name: /email/i });
  if (emailTextBox) {
    await user.click(emailTextBox);
    await user.keyboard("email@email.com");
  }

  expect((emailTextBox as HTMLInputElement).value).toBe("email@email.com");
});

test("should be able to type in password field", async () => {
  const user = userEvent.setup();
  const { getByLabelText } = render(<SignUp onSubmit={() => {}} />);
  const passwordTextBox = getByLabelText("password");
  if (passwordTextBox) {
    await user.click(passwordTextBox);
    await user.keyboard("Password1!");
  }
  expect((passwordTextBox as HTMLInputElement).value).toBe("Password1!");
});

test("should be able to type in password-confirmation field", async () => {
  const user = userEvent.setup();
  const { getByLabelText } = render(
    <SignUp onSubmit={(obj) => console.log(obj)} />
  );
  const passwordTextBox = getByLabelText("confirm-password");
  if (passwordTextBox) {
    await user.click(passwordTextBox);
    await user.keyboard("Password1!");
  }
  expect((passwordTextBox as HTMLInputElement).value).toBe("Password1!");
});
