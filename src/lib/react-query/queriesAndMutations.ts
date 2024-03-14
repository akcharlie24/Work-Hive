import {
  useMutation
} from "@tanstack/react-query";
import { INewUser } from "@/types";
import { createUserAccount, signInAccount } from "../appwrite/api";

//tan stack query is used for data fetching and mutation with features like caching and infinite scroll.

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};
