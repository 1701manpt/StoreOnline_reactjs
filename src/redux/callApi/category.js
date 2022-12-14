import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '~/axiosHttp'
import handleError from '~/utils/handleError'

export const getAll = createAsyncThunk(
    'category/getAll',
    async (body, { rejectWithValue }) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `/categories`,
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    },
)

export const getById = createAsyncThunk(
    'category/getById',
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `/categories/${id}`,
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    },
)

export const getProductsByCategory = createAsyncThunk(
    'category/getProductsByCategory',
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `/categories/${id}/products`,
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    },
)

export const add = createAsyncThunk(
    'category/add',
    async ({ data, axiosPrivate }, { rejectWithValue }) => {
        try {
            const res = await axiosPrivate({
                method: 'POST',
                url: `/categories`,
                data: data,
            })

            return res.data
        } catch (error) {
            return handleError({ error, rejectWithValue })
        }
    },
)
