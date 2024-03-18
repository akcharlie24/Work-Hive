import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { INewPost, INewUser } from "@/types";
import {
  createPost,
  createUserAccount,
  getRecentPosts,
  signInAccount,
  signOutAccount,
} from "../appwrite/api";
import { QUERY_KEYS } from "./queryKeys";

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

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post: INewPost) => createPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({ /* this will remove the stale data  */
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
        /* this is a good practice to save urself from typos while building large applications, you wont get typos here as the GET_RECENT_POSTS will complain if there is typo */
      });
    },
  });
};

export const useGetRecentPosts = () => {
  return useQuery({
    queryKey : [QUERY_KEYS.GET_RECENT_POSTS], /* this key helps removing the stale data */
    queryFn : getRecentPosts,
  })
};
