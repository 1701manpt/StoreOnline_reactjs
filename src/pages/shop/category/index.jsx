import Head from "next/head"
import { useEffect, useState } from "react"

// components
import CategoryItem from "../../../components/list/category"
import List from "../../../components/list"
import Section, { SectionContent } from "../../../components/section"

// layouts
import Layout from "../../../layouts"

// redux
import { useDispatch, useSelector } from "react-redux"
import * as categoryApi from "../../../redux/callApi/category"

function List() {

    const dispatch = useDispatch()
    const loading = useSelector((state) => state.product.list?.loading)
    const categories = useSelector((state) => state.category.list?.categories)

    const getCategories = () => {
        dispatch(categoryApi.getAll())
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            <Head>
                <title>Danh sách sản phẩm</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/product.png" />
            </Head>
            <Layout>
                <Section style={{ backgroundImage: 'linear-gradient(135deg, #9796f0 10%, #FBC7D4 100%)' }}>
                    <SectionContent>
                        {loading ? <div>loading...</div>
                            : categories && <List
                                data={categories}
                                item={CategoryItem}
                                style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}
                            />}
                    </SectionContent>
                </Section>
            </Layout>
        </>
    )
}

export default List