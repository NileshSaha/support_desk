import { createAsyncThunk } from "@reduxjs/toolkit";

export function addAuthorization(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return config
}