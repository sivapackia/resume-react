import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import User  from "./Main.json"
export const Slice=createSlice(
    {
        name:"Portfolio",
        initialState:{
          Array:User.array
        },
        reducers:{

        }
    }
) 
export default Slice.reducer