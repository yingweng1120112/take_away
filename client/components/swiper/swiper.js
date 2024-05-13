import { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          'width': '100%',
          'height': '100%',
          'border-radius': '10%',
          // 'border': '4px soild var(--border-color)',
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"

      >
        <SwiperSlide>
          <img
            style={{
              'width': '100%',
              'height': '100%',
            }}
            src="/images/pet-adopt/pet-1/柯基1.jpg" />
            {/* 720x480 */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              'width': '100%',
            'height': '100%',
            }}
            src="/images/pet-adopt/pet-1/柯基2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{
            'width': '100%',
            'height': '100%',
          }} src="/images/pet-adopt/pet-1/柯基3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{
            'width': '100%',
            'height': '100%',
          }} src="/images/pet-adopt/pet-1/柯基4.jpg" />
        </SwiperSlide>
      </Swiper>
      
    </>
  )
}