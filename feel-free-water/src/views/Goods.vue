<template>
  <div class="page goods-page">
    <div class="vawe"><img src="../assets/pngs/vawe-top-goods.png" alt="" /></div>

    <div class="main-container goods-container">
      <div class="row">
        <div v-for="card in cards" :key="card" class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
          <productCard
            :image="card.image"
            :header="card.header"
            :content="card.content"
            :price="card.price"
          />
        </div>
      </div>
    </div>
    <div class="vawe"><img src="../assets/pngs/vawe-bottom-goods.png" alt="" /></div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import goods_1 from '../assets/pngs/goods/1.JPG'
import goods_3 from '../assets/pngs/goods/3.JPG'
import goods_4 from '../assets/pngs/goods/4.JPG'
import goods_5 from '../assets/pngs/goods/5.JPG'
import goods_6 from '../assets/pngs/goods/6.JPG'
import goods_7 from '../assets/pngs/goods/7.JPG'
import goods_8 from '../assets/pngs/goods/8.JPG'
import goods_9 from '../assets/pngs/goods/9.JPG'
import goods_10 from '../assets/pngs/goods/10.JPG'
import goods_11 from '../assets/pngs/goods/11.JPG'
import goods_13 from '../assets/pngs/goods/13.JPG'
import goods_14 from '../assets/pngs/goods/14.JPG'
import goods_15 from '../assets/pngs/goods/15.JPG'
import goods_26 from '../assets/pngs/goods/26.JPG'
import goods_16 from '../assets/pngs/goods/16.JPG'
import goods_17 from '../assets/pngs/goods/17.JPG'
import goods_18 from '../assets/pngs/goods/18.JPG'
import goods_19 from '../assets/pngs/goods/19.JPG'
import goods_20 from '../assets/pngs/goods/20.JPG'
import goods_21 from '../assets/pngs/goods/21.JPG'
import goods_23 from '../assets/pngs/goods/23.JPG'
import goods_25 from '../assets/pngs/goods/25.JPG'
import goods_24 from '../assets/pngs/goods/24.JPG'

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      cards: [
        {
          image: goods_1,
          header: 'Папір офісний OFFICE COPY/PRINT, А4',
          content: '',
          price: '250 грн'
        },
        // {
        //   image: '../assets/pngs/goods/2.JPG',
        //   header: 'Header-text',
        //   content: 'content-text',
        //   price: '200 грн.'
        // },
        {
          image: goods_3,
          header: 'Папір офісний Maestro Standard+, А4',
          content: '',
          price: '300 грн'
        },
        {
          image: goods_4,
          header: 'Папір офісний Q-CONNECT, А4',
          content: '',
          price: '270 грн'
        },
        {
          image: goods_5,
          header: 'Змінний балон для освіжувача повітря Sky',
          content: `<b> Аромат: </b> гранатовий гренадін \n <b> Місткість: </b>  260 мл \n Свіжість до 60 днів`,
          price: '100 грн'
        },
        {
          image: goods_6,
          header: 'Аерозолі Econom',
          content: `<b> Місткість: </b> 300 мл \n <b> Кількість у ящику:</b> 24 шт.`,
          price: '45 грн'
        },
        {
          image: goods_7,
          header: 'Мило Clean Up 5л',
          content: '',
          price: '141 грн'
        },
        {
          image: goods_8,
          header: 'Мішки для сміття \n ТМ Помічниця',
          content: `<b>Місткість:</b> 20 л \n <b>Колір:</b> білий \n<b> Кількість в упаковці:</b> 50 шт. \n <b>Кількість у ящику:</b> 70 шт.`,
          price: '41 грн'
        },
        {
          image: goods_9,
          header: 'Мішки для сміття \n Сlean Up',
          content: `<b>Місткість:</b> 35 л \n <b>Колір:</b> чорний \n <b>Кількість в упаковці:</b> 50 шт. \n <b>Кількість у ящику:</b> 50 шт.`,
          price: '33 грн'
        },
        {
          image: goods_10,
          header: 'Мішки для сміття \n Пан Пакет',
          content: `<b>Місткість:</b> 60 л \n <b>Кількість в упаковці:</b> 40 шт. \n <b>Кількість у ящику:</b> 50 шт.`,
          price: '52 грн'
        },
        {
          image: goods_11,
          header: 'Одноразові виделки \n  100 шт.',
          content: '<b>Матеріал:</b> пластик',
          price: '2.50 грн/шт.'
        },
        // {
        //   image: '../assets/pngs/goods/12.JPG',
        //   header: 'Header-text',
        //   content: 'content-text',
        //   price: '200 грн.'
        // },
        {
          image: goods_13,
          header: 'Одноразові ложки \n 100 шт.',
          content: '<b>Матеріал:</b> пластик',
          price: '1.33 грн/шт.'
        },
        {
          image: goods_14,
          header: 'Одноразові тарілки \n 100 шт.',
          content: `<b>Розмір: </b>20,5 см \n <b>Кількість в упаковці:</b> 100 шт. \n <b>Кількість у ящику: </b>20 шт.`,
          price: '205 грн'
        },
        {
          image: goods_15,
          header: 'Стакан пластиковий одноразовий \n 100 шт.',
          content: '<b>Ящик:</b> 28 упаковок',
          price: `43 грн/уп. \n  1204 грн/ящ.`
        },
        {
          image: goods_26,
          header: 'Цукор в пакетиках \n 200 шт.',
          content: '<b>Упаковка:</b> 200 шт.',
          price: `65 грн/уп.`
        },
        {
          image: goods_16,
          header: 'Зубочистки 1000 шт інд.',
          content: `<b>Кількість в упаковці:</b> 1000 шт. \n <b>Кількість у ящику:</b> 50 шт. \n<b> Матеріал:</b> дерево`,
          price: '80 грн'
        },
        {
          image: goods_17,
          header: 'Антибактеріальні вологі серветки \n  Origami Antibacterial \n 100 шт.',
          content: '',
          price: '50 грн'
        },
        {
          image: goods_18,
          header: 'Серветка косметична \n  100 шт.',
          content: '',
          price: '48 грн/пач.'
        },
        {
          image: goods_19,
          header: 'Рушники паперові LUXE',
          content: `<b>Колір:</b> білий \n <b>Кількість шарів:</b> 2 \n <b> Кількість в упаковці: </b>200шт.`,
          price: '77 грн/уп.'
        },
        {
          image: goods_20,
          header: 'Серветки віскозні \n Clean Up 5 шт.',
          content: `Для вологого та сухого прибирання приміщень, миття поверхонь, скла та ін. \n <b>Матеріал:</b> віскоза 60(+/- 8)% поліестер 40(+/-8)% \n <b>Кількість серветок в ящику:</b> 100 шт.`,
          price: '20 грн'
        },
        {
          image: goods_21,
          header: 'Папір туалетний Professional',
          content: `<b>Місткість:</b> 55м \n Розмір:</b> D-110/d-50/H-93 \n<b> Кількість шарів:</b> 2 \n <b>Кількість в упаковці:</b> 6 шт. \n <b>Матеріал: </b>целюлоза \n <b>Тип:</b> рулон на гільзі`,
          price: '55,70 грн'
        },
        {
          image: goods_23,
          header: 'Туалетний папір в листах Luxe',
          content: '<b>Місткість:</b> 200л \n <b>Ящик:</b> 40шт.',
          price: `33.60 грн/шт. \n 1345 грн/ящ.`
        },
        {
          image: goods_25,
          header: 'Туалетний папір «Papero»',
          content: `<b>Місткість:</b> 12,5 м \n  <b>Розмір: </b> D-110/d-50/H-93 \n <b>Кількість у ящику:</b> 48 шт.`,
          price: '450 грн/ящ.'
        },
        {
          image: goods_24,
          header: 'Накладки на сидіння унітазу 1/4',
          content: `<b>Кількість в упаковці:</b> 150 шт. \n <b>Кількість у ящику:</b> 25 шт.`,
          price: '145 грн'
        }
      ]
    }
  }
}
</script>

<style scoped>
.goods-container {
  align-self: center;
  padding: 50px 0;
  flex: 1;
}
.row {
  justify-content: center;
}
.vawe {
  width: 100%;
}
.vawe img {
  width: inherit;
}
.goods-page {
  background-color: #f2f2f2;
}

@media (max-width: 600px) {
  .vawe {
    width: 190%;
  }
}

@media (min-width: 601px) and (max-width: 992px) {
  .vawe {
    width: 130%;
  }
}
</style>
