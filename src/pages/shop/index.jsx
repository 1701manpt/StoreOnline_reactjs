// reactjs
import { useEffect } from 'react'

// nextjs
import Head from 'next/head'

// components
import CategoryItem from '../../components/list/category'
import List from '../../components/list'
import Section, { SectionContent, SectionTitle } from '../../components/section'
import ProductItem from '../../components/list/product'

// layouts
import Layout from '../../layouts'

// redux
import { useDispatch, useSelector } from 'react-redux'
import * as productApi from '../../redux/callApi/product'
import * as categoryApi from '../../redux/callApi/category'

export default function Shop() {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.list?.products)
    const categories = useSelector((state) => state.category.list?.categories)

    const getProducts = () => {
        dispatch(productApi.getAll())
    }

    const getCategories = () => {
        dispatch(categoryApi.getAll())
    }

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/homeShop.png" />
            </Head>
            <Layout>
                <Section>
                    <SectionTitle>Danh mục</SectionTitle>
                    <SectionContent>
                        <List data={categories} item={CategoryItem} />
                    </SectionContent>
                </Section>
                <Section
                    style={{ backgroundImage: 'linear-gradient(135deg, #FF4E00 15%, #FFFFFF 0%)' }}
                >
                    <SectionTitle style={{ color: '#FFFFFF' }}>Sản phẩm thịnh hành</SectionTitle>
                    <SectionContent>
                        <List
                            data={products}
                            item={ProductItem}
                            styleOfItem={{ backgroundImage: 'linear-gradient(135deg, #dfe9f3 10%, #ffffff 100%)' }}
                        />
                    </SectionContent>
                </Section>
                <Section
                    style={{
                        backgroundImage: 'linear-gradient(135deg, #FCCF31 10%, #ffffff 100%)'
                    }}
                >
                    <SectionTitle style={{ color: '#E80505' }}>Sản phẩm ưu đãi</SectionTitle>
                    <SectionContent>
                        <List
                            data={products}
                            item={ProductItem}
                        />
                    </SectionContent>
                </Section>
            </Layout >
        </>
    )
}