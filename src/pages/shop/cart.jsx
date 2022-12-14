import Head from 'next/head'
import Image from 'next/image'
import ImageLoader from '~/components/imageLoader'
import Section, { SectionTitle } from '~/components/section'
import Layout from '~/layouts'

function Cart() {
    return (
        <>
            <Head>
                <title>Giỏ hàng của bạn | Store Online</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/icon-cart.png' />
            </Head>
            <Layout>
                <Section>
                    <SectionTitle>Quản lý giỏ hàng của bạn</SectionTitle>
                </Section>
                <Section>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 2fr 1fr 1fr',
                        }}
                    >
                        <div>
                            <input type='checkbox' />
                        </div>
                        <Image
                            src='/image-view-default.png'
                            alt='image'
                            height={50}
                            width={50}
                        />
                        <div>Sản phẩm abc</div>
                        <div>
                            Giá sản phẩm: 249000 <sup>đ</sup>
                        </div>
                        <div>Số lượng: 15 cái</div>
                    </div>
                </Section>
            </Layout>
        </>
    )
}

export default Cart
