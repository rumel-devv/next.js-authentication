"use client";
import WelcomePage from "@/Components/Welcome";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";

const SignUpPage =  () => {

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const UserData = Object.fromEntries(formData.entries())
    
    const { data, error } = await authClient.signUp.email({
    name: UserData.name,
    email: UserData.email,
    password: UserData.password,
});

console.log('user data respone',{data,error});
if(error){
  alert('error signing up' + error.message)
}

if(data){
  alert('Sign up successfull')
  window.location.href = "/welcome";
}

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-600 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Sign Up
        </h2>

        <Form className="flex w-80 flex-col gap-4" onSubmit={onSubmit}>
          {/* Name */}
           <TextField
                 isRequired
                 name="name"
                 validate={(value) => {
                   if (value.length < 3) {
                     return "Name must be at least 3 characters";
                   }
                   return null;
                 }}
               >
                 <Label className="text-white">Name</Label>
                 <br />
                 <Input
                    name="name"
                   className="bg-white/50 text-white py-1 px-2 rounded-md"
                   placeholder="enter your name"
                 />
                 <FieldError />
               </TextField>

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
          <TextField
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
          </TextField>

          {/* Buttons */}
          <div className="flex gap-2">
            <Button
              className="w-full bg-blue-500 text-white py-1 rounded-md "
              type="submit"
            >
              Submit
            </Button>

            <Button className="w-full bg-blue-500 text-white py-1 rounded-md  " type="reset" >
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
