import { createAsyncThunk } from "@reduxjs/toolkit";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Thunk: Gọi API
export const fetchPosts = createAsyncThunk<Post[]>(
  "posts/fetchPosts",
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Failed to fetch posts");
    return await res.json();
  },
);
