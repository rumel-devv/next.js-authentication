"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import {Eye, EyeSlash} from "@gravity-ui/icons";
import { useState } from "react";

const SignInPage = () => {

  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const UserData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
       email: UserData.email,
       password: UserData.password,
      rememberMe: true,
    });

    console.log("user data respone", { data, error });
    if (error) {
      alert("error signin" + error.message);
    }

    if (data) {
      alert("Sign in successfull");
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Sign in
        </h2>

        <Form className="flex w-80 flex-col gap-4" onSubmit={onSubmit}>
         

          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-white">Email</Label>
            <br />
            <Input
              name="email"
              className="bg-white/50 text-white py-1 px-2 rounded-md"
              placeholder="enter your email"
            />
            <FieldError />
          </TextField>

          {/* Password */}
          {/* <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-white">Password</Label>
            <br />
            <Input
              name="password"
              className="bg-white/50 text-white py-1 px-2 rounded-md"
              placeholder="Enter your password"
            />
            <br />
            <FieldError />
          </TextField> */}

           <TextField className="w-full " name="password">
      <Label className="text-white">Password</Label>
      <InputGroup>
        <InputGroup.Input
          className="w-full "
          type={isVisible ? "text" : "password"}
          name="password"
          placeholder="Your password"
        />
        <InputGroup.Suffix className="pr-0">
          <Button
            isIconOnly
            aria-label={isVisible ? "Hide password" : "Show password"}
            size="sm"
            variant="ghost"
            onPress={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>

          {/* Buttons */}
          <div className="flex gap-2">
            <Button
              className="w-full bg-blue-500 text-white py-1 rounded-md "
              type="submit"
            >
              Submit
            </Button>

            <Button
              className="w-full bg-blue-500 text-white py-1 rounded-md  "
              type="reset"
            >
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInPage;
