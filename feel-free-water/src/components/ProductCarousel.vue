<template>
  <vueper-slides
    class="no-shadow custom-slider"
    :gap="3"
    :visible-slides="3"
    :slide-ratio="0.55"
    :dragging-distance="35"
    :bullets="false"
    :duration="2500"
    arrowsOutside
    autoplay
    touchable
    :breakpoints="breakpoints"
  >
    <vueper-slide v-for="(card, index) in cards" :key="card">
      <template #content>
        <productCard
          :image="card.image"
          :header="card.header"
          :content="card.content"
          :price="card.price"
        />
      </template>
    </vueper-slide>
  </vueper-slides>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import carousel_1 from '../assets/pngs/carousel/1.jpeg'
import carousel_2 from '../assets/pngs/carousel/2.jpg'
import carousel_3 from '../assets/pngs/carousel/3.jpg'
import carousel_5 from '../assets/pngs/carousel/5.jpg'
import carousel_6 from '../assets/pngs/carousel/6.jpg'
import carousel_7 from '../assets/pngs/carousel/7.jpg'
import carousel_8 from '../assets/pngs/carousel/8.jpg'
import carousel_9 from '../assets/pngs/carousel/9.jpeg'
import carousel_10 from '../assets/pngs/carousel/10.jpg'
import carousel_11 from '../assets/pngs/carousel/11.jpg'
import carousel_12 from '../assets/pngs/carousel/12.jpg'
import carousel_13 from '../assets/pngs/carousel/13.jpg'
import carousel_14 from '../assets/pngs/carousel/14.jpg'
import carousel_15 from '../assets/pngs/carousel/15.jpg'
import carousel_16 from '../assets/pngs/carousel/16.jpg'

export default {
  name: 'Carousel',
  name: 'Autoplay',
  components: {
    VueperSlides,
    VueperSlide,
    ProductCard
  },
  data() {
    return {
      cards: [
        {
          image: carousel_1,
          header: 'Моршинська Premium слабогазована, 0,75л',
          content: `<b>Виробник:</b> Україна \n  <b>Бренд:</b> Моршинська \n<b>Місткість:</b> 0,75л \n<b>Кількість у ящику:</b> 6 шт. \n<b>Матеріал:</b> скло`,
          price: '66.60 грн/1 шт.'
        },
        {
          image: carousel_2,
          header: 'Моршинська Premium негазована, 0,75л',
          content: `<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 0,75л \n<b>Кількість у ящику:</b> 6 шт. \n<b>Матеріал:</b> скло`,
          price: '66.60 грн/1 шт.'
        },
        {
          image: carousel_3,
          header: 'Моршинська Premium слабогазована, 0,5л',
          content: `<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 0,5л \n<b>Кількість у ящику:</b> 6 шт. \n<b>Матеріал:</b> скло`,
          price: '32.46 грн/1 шт.'
        },
        // {
        //   image: '../assets/pngs/carousel/4.jpg',
        //   header:  'Моршинська Premium слабогазована, 0,33л',
        //   content: 'content-text',
        //   price: '200 грн'
        // },
        {
          image: carousel_5,
          header: 'Моршинська Premium негазована, 0,33л',
          content: `<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 0,33л \n<b>Кількість у ящику:</b> 12 шт. \n<b>Матеріал:</b> скло`,
          price: '32.46 грн/1 шт.'
        },
        {
          image: carousel_6,
          header: 'Моршинська слабогазована, 1,5л',
          content: `<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 1,5л \n<b>Кількість у ящику:</b> 6 шт.`,
          price: `23.12 грн/1 шт. \n138.70 грн/6 шт.`
        },
        {
          image: carousel_7,
          header: 'Моршинська негазована, 1,5л',
          content: `<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 1,5л \n<b>Кількість у ящику:</b> 6 шт.`,
          price: `139 грн/6 шт.`
        },
        {
          image: carousel_8,
          header: 'Моршинська сильногазована, 1,5л',
          content: `<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 1,5л \n<b>Кількість у ящику:</b> 6 шт.`,
          price: `23.12 грн/1 шт. \n138 грн/6 шт.`
        },
        {
          image: carousel_9,
          header: 'Моршинська негазована, 1,5л',
          content: `<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 1,5л \n<b>Кількість у ящику:</b> 6 шт.`,
          price: `139 грн/6 шт.`
        },
        {
          image: carousel_10,
          header: 'Моршинська слабогазована, 0,75л',
          content: `<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 0,75л \n<b>Кількість у ящику:</b> 12 шт.`,
          price: `18.63 грн/1 шт. \n223.56 грн/12 шт.`
        },
        {
          image: carousel_11,
          header: 'Моршинська слабогазована, 0,5л',
          content: `<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 0,5л \n<b>Кількість у ящику:</b> 12 шт.`,
          price: `20 грн/1 шт.`
        },
        {
          image: carousel_12,
          header: 'Моршинська негазована, 0,5л',
          content: `<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 0,5л \n<b>Кількість у ящику:</b> 12 шт.`,
          price: `15.87 грн/1 шт. \n190.44 грн/12 шт.`
        },
        {
          image: carousel_13,
          header: 'Моршинська негазована, 0,33л',
          content: `<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 0,33л \n<b>Кількість у ящику:</b> 12 шт.`,
          price: `15.87 грн/1 шт. \n190.44 грн/12 шт.`
        },
        {
          image: carousel_14,
          header: `Моршинська з ароматом Лимон-Лайм-М'ята, 0,33л`,
          content: `Сильногазований напій \n<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 0,33л \n<b>Кількість у ящику:</b> 12 шт.`,
          price: '21.80 грн/1 шт.'
        },
        {
          image: carousel_15,
          header: 'Моршинська Лимонада зі смаком яблука, 0,33л',
          content: `Сильногазований напій \n<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 0,33л \n<b>Кількість у ящику:</b> 12 шт.`,
          price: '290 грн/12 шт.'
        },
        {
          image: carousel_16,
          header: 'Моршинська Лимонада зі смаком апельсина та персика, 0,33л',
          content: `Сильногазований напій \n<b>Виробник:</b> Україна \n<b>Бренд:</b> Моршинська \n<b>Місткість:</b> 0,33л \n<b>Кількість у ящику:</b> 12 шт.`,
          price: '290 грн/12 шт.'
        }
      ],

      breakpoints: {
        400: { visibleSlides: 1, slideMultiple: 1, slideRatio: 2.2 },
        700: { visibleSlides: 1, slideMultiple: 1, slideRatio: 2 },
        1000: { visibleSlides: 2, slideMultiple: 2, slideRatio: 1.1 },
        1200: { visibleSlides: 3, slideMultiple: 0, slideRatio: 0.8 }
      }
    }
  }
}
</script>
<style scoped>
.custom-slider {
  width: 100%;
}

@media (min-width: 1001px) {
  .vueperslide {
    opacity: 0.9;
    transition: 0.5s;
  }

  .vueperslide--active ~ .vueperslide {
    opacity: 0.9;
    transition: 0.5s;
  }
  .vueperslide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.05);
    transition: 0.5s;
  }

  .vueperslide {
    padding: 20px;
    transition: 0.5s;
  }
}
</style>
