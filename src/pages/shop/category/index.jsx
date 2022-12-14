import Head from 'next/head'
import { useEffect } from 'react'

// components
import ListCategory from '~/components/list'
import CategoryItem from '~/components/list/category'
import Section, { SectionContent } from '~/components/section'

// layouts
import Layout from 'layouts'

// redux
import { useDispatch, useSelector } from 'react-redux'
import * as categoryApi from '~/redux/callApi/category'

function List() {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.product.list.loading)
    const categories = useSelector((state) => state.category.list.data)

    useEffect(() => {
        const getCategories = () => {
            dispatch(categoryApi.getAll())
        }

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
            <Layout>
                <Section>
                    <SectionContent>
                        {loading ? (
                            <div>loading...</div>
                        ) : categories.data.length <= 0 ? (
                            <div>Không có danh mục</div>
                        ) : (
                            <ListCategory
                                data={categories}
                                item={CategoryItem}
                            />
                        )}
                    </SectionContent>
                </Section>
            </Layout>
        </>
    )
}

export default List
