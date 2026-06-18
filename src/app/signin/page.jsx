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
import { ShieldCheck, Lock } from "lucide-react";

const SigninPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());
    console.log(user, "user");
    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });
    console.log(data, error);
    if (data) {
      redirect("/");
    }
    if (error) {
      toast.error("Sign in Unsuccessful");
    }
  };

  return (
    <div className="min-h-screen bg-[#030307] text-slate-100 flex items-center justify-center p-4 antialiased">
      {/* Background Decorative Overlay Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="w-full max-w-md bg-[#09090f] border border-white/5 rounded-2xl p-8 shadow-2xl relative z-10 space-y-6">
        
        {/* Header Title Section */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center size-12 bg-white/5 border border-white/10 rounded-xl text-slate-200 mb-2 shadow-sm">
            <Lock className="size-5" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Welcome Back
          </h1>
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            Sign in to access your secure management console
          </p>
        </div>

        {/* Input Form Wrapper */}
        <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
          
          {/* Email Form Control Group */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full space-y-1.5"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Email Address
            </Label>
            <Input 
              placeholder="john@example.com" 
              className="w-full bg-[#030307] border border-white/10 rounded-xl text-slate-100 placeholder-slate-600 focus:border-white/20 px-4 py-2.5 transition-all text-sm outline-none"
            />
            <FieldError className="text-xs font-medium text-rose-400 pt-1 block" />
          </TextField>

          {/* Password Form Control Group */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            className="w-full space-y-1.5"
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
            <Label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Password
            </Label>
            <Input 
              placeholder="Enter your password" 
              className="w-full bg-[#030307] border border-white/10 rounded-xl text-slate-100 placeholder-slate-600 focus:border-white/20 px-4 py-2.5 transition-all text-sm outline-none"
            />
            <Description className="text-[11px] font-medium text-slate-500 pt-0.5 leading-relaxed block">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError className="text-xs font-medium text-rose-400 pt-1 block" />
          </TextField>

          {/* Action Row Buttons */}
          <div className="flex items-center gap-3 pt-2 w-full">
            <Button 
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#030307] hover:bg-slate-200 px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all shadow-sm cursor-pointer"
            >
              <Check className="size-4 shrink-0" />
              Sign In
            </Button>
            
            <Button 
              type="reset" 
              variant="secondary"
              className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 rounded-xl text-sm font-semibold tracking-wide transition-all cursor-pointer"
            >
              Reset
            </Button>
          </div>
          
        </Form>
      </div>
    </div>
  );
};

export default SigninPage;