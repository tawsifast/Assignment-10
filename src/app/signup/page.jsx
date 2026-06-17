"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignupPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());
    console.log(user, "user");
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });
    console.log(data, error);
    if (data) {
      redirect("/");
    }
    if (error) {
      toast.error("Signup Unsuccessful");
    }
  };
return (
  <div className="w-6/12 mx-auto mt-20">
    <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      {/* Name  */}
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
        <Label>Name</Label>
        <Input placeholder="John Doe" />
        <FieldError />
      </TextField>
      {/* Image  */}
      <TextField isRequired name="image" type="url">
        <Label>Image URL</Label>
        <Input placeholder="Enter your image url" />
        <FieldError />
      </TextField>

      {/* Email  */}
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
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      {/* Password  */}
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
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  </div>
);
};
export default SignupPage;
