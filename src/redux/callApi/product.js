import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../axios"

export const getAll = createAsyncThunk(
    'product/getAll',
    async (body, thunkAPI) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `/products`
            })

            return res.data
        } catch (error) {
            return error.response.data
        }
    }
)

export const getById = createAsyncThunk(
    'product/getById',
    async (id, thunkAPI) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `/products/${id}`
            })

            return res.data
        } catch (error) {
            return error.response.data
        }
    }
)