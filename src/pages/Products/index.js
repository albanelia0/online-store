import {useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import Breadcrumbs from "../../component/Breadcrumbs"
import Card from "../../component/Card"
import Layout from "../../component/Layout"

import { Context } from "../../CartStoreContext"
import "./index.scss"

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

const Products = () => {

  const { products, handleToAddItemToCart } = useContext(Context)

  return (
    <div className="products-container">
      <Layout>
        <div className="header-container">
          <h3 className="header-container__title">Productos Destacados</h3>
          <Breadcrumbs/>
        </div>
        <div className="products">
          <Swiper
            slidesPerView={4}
            spaceBetween={105}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            className="mySwiper"
          >
          {products?.map(({id, image, title, price }) => {
            return (
              <SwiperSlide>
                <div key={id}>
                    <Card
                      handleToAddItemToCart={() => handleToAddItemToCart({id, image, title, price })}
                      title={title}
                      imgSrc={image}
                      price={price}
                    />
                </div>
              </SwiperSlide>
            )
          })}
          </Swiper>
        </div>
      </Layout>
    </div>
  )
}

export default Products
