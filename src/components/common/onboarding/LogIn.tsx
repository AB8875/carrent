"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import api from "@/utils/axiosInstance";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FBIcon, GoogleIcon } from "@/components/helper/user/Icon";

const formSchema = z.object({
  username: z.string().min(4),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
      }
    ),
  checkbox: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms & Conditions",
  }),
});

const LogIn = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      checkbox: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await api.post("/auth/login", {
        username: values.username,
        password: values.password,
      });
      console.log(res);

      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("userId", res.data.data.user._id);

      router.push("/dashboard");
    } catch (err: any) {
      console.error("Login failed:", err?.response?.data || err.message);
      alert("Invalid username or password");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-[500px] space-y-4 lg:max-w-[602px] lg:space-y-6 xl:max-w-[762px]"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  placeholder="Enter your Username"
                  {...field}
                  className={`dark:border-primary border-white text-sm text-white placeholder:text-white sm:text-base ${
                    form.formState.errors.username && "!border-red-500"
                  }`}
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
              <FormControl>
                <Input
                  placeholder="Password"
                  type="password"
                  {...field}
                  className={`dark:border-primary border-white text-sm text-white placeholder:text-white sm:text-base ${
                    form.formState.errors.password && "!border-red-500"
                  }`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="checkbox"
          render={({ field }) => (
            <FormItem className="flex items-center gap-x-2">
              <div className="flex w-full flex-wrap items-center justify-between gap-x-10 gap-y-2 sm:flex-nowrap">
                <div className="flex items-center gap-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="dark:border-primary border-white text-white"
                    />
                  </FormControl>
                  <FormLabel
                    className={`text-sm text-white ${
                      form.formState.errors.checkbox && "!text-red-500"
                    }`}
                  >
                    I agreed to all Terms & Conditions
                  </FormLabel>
                </div>

                <Link
                  className="text-sm font-semibold text-white"
                  href="/auth/forget-password"
                >
                  Forgot Password ?
                </Link>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="my-3 h-full w-full rounded-sm text-base font-medium text-black sm:text-lg lg:py-3.5 lg:text-xl"
        >
          Log In
        </Button>
      </form>

      <div className="mx-auto max-w-[500px] space-y-4 lg:max-w-[602px] lg:space-y-6 xl:max-w-[762px]">
        <div className="my-3 flex items-center justify-center gap-2 text-sm text-white sm:text-base 2xl:pb-5">
          Already have an account?
          <Link
            href="/auth/signup/partner"
            className="text-primary font-medium transition-all duration-300 ease-in-out hover:underline"
          >
            Sign Up
          </Link>
        </div>

        <div className="mb-8 flex items-center gap-4 lg:mb-10 xl:mb-15">
          <div className="h-[0.4px] w-full bg-white"></div>
          <p className="text-sm font-semibold text-white">Or</p>
          <div className="h-[0.4px] w-full bg-white"></div>
        </div>

        <div className="my-3 flex w-full flex-col justify-between gap-3 sm:flex-row sm:gap-0 xl:my-5">
          <Button className="border-primary w-full items-center gap-1 border-1 bg-transparent text-white hover:text-black sm:w-[45%] sm:gap-2">
            <GoogleIcon /> Sign Up with Google
          </Button>
          <Button className="border-primary w-full items-center gap-1 border-1 bg-transparent text-white hover:text-black sm:w-[45%] sm:gap-2">
            <FBIcon /> Sign Up with Facebook
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default LogIn;
