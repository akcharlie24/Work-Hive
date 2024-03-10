import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SignupValidation } from "@/lib/validation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link } from "react-router-dom";
import Loader from "@/components/shared/Loader";

const SignupForm = () => {
  const isLoading = false;
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.c
    console.log(values);
  }

  return (
    <div className=" max-w-md  w-10/12 md:w-full md:mx-auto rounded-2xl md:rounded-2xl p-4 md:p-8 shadow-input bg-black ">
      <Form {...form}>
        <h2 className="font-bold text-xl text-neutral-200">
          Welcome to Work Hive
        </h2>
        <p className="text-md max-w-sm mt-1 text-neutral-300 mb-3 ">
          Create a new account
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Label>Name</Label>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Label>Username</Label>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="johndoe24" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Label>Email</Label>
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="johndoe@gmail.com"
                    {...field}
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
                <FormLabel>
                  <Label>Password</Label>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            {isLoading ? (
              <div className="flex-center gap-5">
                <Loader />
              </div>
            ) : (
              <div>
                Sign up &rarr;
                <BottomGradient />
              </div>
            )}
          </button>
        </form>
      </Form>
      <p className="text-small-regular text-light-2 text-center mt-4">
        Alerady have an account?
        <Link to="/sign-in" className="text-small-semibold text-primary-500 ml-2">
          Sign In
        </Link>
      </p>
    </div>
  );
};

const BottomGradient = () => {
  return ( 
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default SignupForm;
