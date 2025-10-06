/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
  FormControl,
  Form,
} from "@/components/ui/form";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import Password from "./PasswordInput";
import { useRouter } from "next/navigation";

type LoginRequest = {
  email: string;
  password: string;
};

export default function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<LoginRequest>();
  const router = useRouter();



  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    try {
      const res = await fetch(
        "https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include", 
        }
      );

      const resData = await res.json();
      console.log(resData);

      if (resData?.success) {
        toast.success("Logged in successfully ✅");

        // ✅ Redirect based on user role or previous path
        if (resData?.data?.user?.role === "ADMIN") {
          router.push("/dashboard");
        } else {
          router.push("/");
        }
      } else {
        toast.error(resData?.message || "Invalid credentials");
      }
    } catch (error: any) {
      console.error(error);
      toast.error("Something went wrong");
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
          <CardTitle className="text-2xl font-bold">
            Log in to your account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="p-6"
                        placeholder="Enter your email"
                        type="email"
                        required
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Password {...field} value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-[#373DD2] hover:bg-[#2d34b8] text-white font-semibold rounded-full py-2 text-base"
              >
                LOG IN
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