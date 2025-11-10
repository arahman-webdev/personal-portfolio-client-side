/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import {
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
  FormControl,
  Form,
} from "@/app/components/ui/form";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import Password from "./PasswordInput";
import { useRouter } from "next/navigation";

type LoginRequest = {
  email: string;
  password: string;
};

export default function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<LoginRequest>({
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(
        "http://localhost:5000/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );

      const resData = await res.json();

     
      if (resData?.success) {
        toast.success("Logged in successfully ✅");
        // Redirect based on role
        if (resData?.data?.user?.role === "ADMIN") {
          router.push("/dashboard");
        } else {
          router.push("/");
        }
      } else {
        toast.error(resData?.message || "Invalid email or password");
        console.log(resData?.message)
      }
    } catch (error: any) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "w-full flex items-center justify-center bg-cover bg-center min-h-screen relative",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md mx-auto shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Log in to your account</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        type="email"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                rules={{
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Password {...field} disabled={loading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#373DD2] hover:bg-[#2d34b8] text-white font-semibold rounded-full py-2 text-base"
              >
                {loading ? "Logging in..." : "LOG IN"}
              </Button>
            </form>
          </Form>

          <div className="flex items-center gap-2 my-4">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-gray-500 text-xs font-medium">Or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
