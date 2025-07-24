"use client";
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
import React, { FunctionComponent } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import api from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";
import { FBIcon, GoogleIcon } from "@/components/helper/user/Icon";
interface SignInProps {
  username?: string;
  email?: string;
  pasword?: string;
}
const formSchema = z.object({
  username: z.string().min(4),
  email: z.string().email("Invalid email address"),
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
  checkbox: z.boolean().refine((val) => val === true),
});
const SignIn: FunctionComponent<SignInProps> = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      checkbox: false,
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await api.post("/auth/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      });

      router.push("/auth/login/partner");
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
                  placeholder="Username"
                  {...field}
                  className={`dark:border-primary border-white text-sm text-white placeholder:text-white sm:text-base ${
                    form.formState.errors.username && "!border-red-500"
                  }`}
                />
              </FormControl>
              {/* <FormMessage className="absolute top-full text-red-500" /> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  placeholder="Email address"
                  {...field}
                  className={`dark:border-primary border-white text-sm text-white placeholder:text-white sm:text-base ${
                    form.formState.errors.email && "!border-red-500"
                  }`}
                />
              </FormControl>
              <FormMessage className="absolute top-full text-red-500" />
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
              <FormControl>
                <Checkbox
                  className={`dark:border-primary border-white text-sm text-white placeholder:text-white/70 sm:text-base`}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel
                className={`dark:border-primary text-sm text-white sm:text-base ${
                  form.formState.errors.checkbox && "!text-red-500"
                }`}
              >
                I agreed to all Terms & Conditions{" "}
              </FormLabel>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />

        <button
          type="submit"
          className="bg-primary my-3 flex w-full justify-center rounded-sm py-2 text-base font-medium text-black sm:text-lg lg:py-3.5 lg:text-xl"
        >
          Sign Up
        </button>
      </form>
      <div className="mx-auto max-w-[500px] space-y-4 lg:max-w-[602px] lg:space-y-6 xl:max-w-[762px]">
        <div className="my-3 flex items-center justify-center gap-2 text-sm text-white sm:text-base 2xl:pb-5">
          Already have an account?{" "}
          <Link
            href={"/auth/login/partner"}
            className="text-primary font-medium transition-all duration-300 ease-in-out hover:underline"
          >
            Log In
          </Link>
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

export default SignIn;
