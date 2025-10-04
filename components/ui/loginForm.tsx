/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
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
// import { useForm, type SubmitHandler } from "react-hook-form";
// import Password from "./layout/Password";


import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import Password from "./PasswordInput";

type LoginRequest = {
    email: string;
    password: string;
};

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const form = useForm<LoginRequest>()

const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
  try {
    const res = await fetch(`https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // ✅ send { email, password }
      credentials: "include"
    });


    console.log(res)


    console.log(data)
  } catch (error: any) {
    console.log(error)
  }
};


    // Blur background styles
    return (
        <div
            className={cn(
                "w-full flex items-center justify-center bg-cover bg-center relative",
                className
            )}
            style={{
                // Optionally, you can set a background image here
                background: "url('/your-bg.jpg') center/cover no-repeat",
            }}
            {...props}
        >
            <div className="absolute inset-0 z-0" />
            <Card className="w-full  mx-auto relative z-10 shadow-2xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">
                        Log in to your account
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel htmlFor="email">Email:</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="rounded-none p-6"
                                                placeholder="Email"
                                                id="email"
                                                type="email"
                                                autoComplete="email"
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
                                        <FormLabel>Password:</FormLabel>
                                        <FormControl>
                                            <Password
                                            
                                                {...field}
                                                value={field.value || ""}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full bg-[#373DD2] hover:bg-[#373cd2de] text-white font-semibold rounded-full py-2 text-base"
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

                    {/* Only Google login button */}


                </CardContent>
            </Card>
        </div>
    );
}

export default LoginForm;