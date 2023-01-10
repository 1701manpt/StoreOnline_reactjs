import Head from 'next/head'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Authentication from '~/components/authentication/admin'
import Button from '~/components/button'
import Form, { FormAction, FormContent, FormResult } from '~/components/form'
import Input from '~/components/form/input'
import Section, { SectionContent, SectionTitle } from '~/components/section'
import useAxiosPrivate from '~/hooks/useAxiosPrivate'
import Layout from '~/layouts/admin'
import { add } from '~/redux/callApi/category'

export default function Add() {
    const dispatch = useDispatch()
    const axiosPrivate = useAxiosPrivate()
    const validation = useSelector((state) => state.category.add.error)
    // const message = useSelector((state) => state.category.add.message)

    const [state, setState] = useState({})
    const [showResult, setShowResult] = useState(false)
    const onChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleAddCategory = () => {
        dispatch(add({ data: state, axiosPrivate }))
        setShowResult(true)
    }

    return (
        <Authentication>
            <Head>
                <title>Thêm danh mục mới | Store Online</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/icon-manage-category.png' />
            </Head>
            <Layout>
                <Section>
                    <SectionTitle>Thông tin danh mục mới</SectionTitle>
                    <SectionContent>
                        {/* {showResult && <FormResult>{message}</FormResult>} */}
                        <Form>
                            <FormContent>
                                <Input
                                    label='Tên danh mục'
                                    type='text'
                                    name='name'
                                    onChange={(e) => {
                                        onChangeState(e)
                                    }}
                                    error={validation}
                                />
                                <Input
                                    label='Ảnh đại diện'
                                    type='text'
                                    name='image'
                                    onChange={(e) => {
                                        onChangeState(e)
                                    }}
                                    error={validation}
                                />
                            </FormContent>
                            <FormAction>
                                <Button
                                    type='submit'
                                    onClick={handleAddCategory}
                                >
                                    Thêm mới danh mục
                                </Button>
                            </FormAction>
                        </Form>
                    </SectionContent>
                </Section>
            </Layout>
        </Authentication>
    )
}
