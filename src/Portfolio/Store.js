import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Slice } from "./Reducer";

const Store=configureStore(
    {
        reducer:{
              data:Slice
        }
    }
)

export default Store