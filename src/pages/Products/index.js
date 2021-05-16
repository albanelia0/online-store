import { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ReactComponent as LeftIcon } from './icons/chevron-left.svg'
import { ReactComponent as RightIcon } from './icons/chevron-right.svg'

import Breadcrumbs from '../../component/Breadcrumbs'
import Card from '../../component/Card'
import Layout from '../../component/Layout'

import { Context } from '../../CartStoreContext'
import './index.scss'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

const Products = () => {
  const { products, addItem } = useContext(Context)

  if (!products?.length) return null

  return (
    <div className='products-page'>
      <Layout>
        <div className='products-page__header'>
          <h3 className='products-page__header-title'>Productos Destacados</h3>
          <Breadcrumbs />
        </div>
        <div className='products-page__products'>
          <Swiper
            slidesPerView={4}
            spaceBetween={105}
            slidesPerGroup={1}
            loop
            loopFillGroupWithBlank
            navigation={{
              prevEl: '.products-page__slider-prev',
              nextEl: '.products-page__slider-next'
            }}
          >
            {products?.map(({ id, image, title, price }) => {
              return (
                <SwiperSlide key={id}>
                  <div>
                    <Card
                      handleToAddItemToCart={() => addItem({ id, image, title, price })}
                      title={title}
                      imgSrc={image}
                      price={price}
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <button className='products-page__slider-prev'><LeftIcon /></button>
          <button className='products-page__slider-next'><RightIcon /></button>
        </div>
      </Layout>
    </div>
  )
}

export default Products
