import Head from 'next/head'
import { useEffect } from 'react'

// components
import ListProduct from '~/components/list'
import ProductItem from '~/components/list/product'
import Section, { SectionContent } from '~/components/section'
import CategoryItem from '~/components/sidebar/category'

// layouts
import SidebarLayout from '~/layouts/sidebarLayout'

// redux
import { useDispatch, useSelector } from 'react-redux'
import * as categoryApi from '~/redux/callApi/category'
import * as productApi from '~/redux/callApi/product'

function List() {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.product.list.loading)
    const products = useSelector((state) => state.product.list.data)
    const categories = useSelector((state) => state.category.list.data)

    useEffect(() => {
        const getProducts = () => {
            dispatch(productApi.getAll())
        }

        const getCategories = () => {
            dispatch(categoryApi.getAll())
        }

        getProducts()
        getCategories()
    }, [dispatch])

    return (
        <>
            <Head>
                <title>Danh sách sản phẩm</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/product.png' />
            </Head>
            <SidebarLayout
                title='Danh mục'
                data={categories}
                item={CategoryItem}
            >
                <Section>
                    <SectionContent>
                        {loading ? (
                            <div>loading...</div>
                        ) : products.length <= 0 ? (
                            <div>Không có sản phẩm</div>
                        ) : (
                            <ListProduct
                                layoutSidebar
                                data={products}
                                item={ProductItem}
                            />
                        )}
                    </SectionContent>
                </Section>
            </SidebarLayout>
        </>
    )
}

export default List
