<template>
  <div class="product-card-tabs row">
    <div class="card-tabs-img col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
      <img :src="image" alt="Card image cap" />
    </div>
    <div class="description-card-tabs col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
      <h4 class="product-card-tabs-title" v-html="header"></h4>
      <div class="product-card-tabs-content">
        <v-tabs v-model="tab" class="tabs" align-tabs="title" color="#6EC4D7" fixed-tabs>
          <v-tab v-for="item in items" :key="item" :value="item">
            {{ item }}
          </v-tab>
        </v-tabs>
        <div class="card-tabs-text">
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="Опис">
                {{ description }}
              </v-window-item>

              <v-window-item value="Характеристики" v-html="characteristic"> </v-window-item>

              <v-window-item value="Ціна">
                <ul class="prices">
                  <li><b>Ціна: </b>{{ price }}</li>
                  <li v-if="rentPrice"><b>Оренда:</b> {{ rentPrice }}</li>
                  <li v-if="mortgagePrice"><b>Заставна вартість: </b>{{ mortgagePrice }}</li>
                </ul>
              </v-window-item>
            </v-window>
          </v-card-text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ['Опис', 'Характеристики', 'Ціна'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  props: ['image', 'header', 'description', 'characteristic', 'price', 'rentPrice', 'mortgagePrice']
}
</script>

<style scoped>
.product-card-tabs {
  border-radius: 30px;
  height: 90%;
  margin: 20px;
  width: 90%;
  align-self: center;
  overflow: hidden;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.card-tabs-img {
  aspect-ratio: 10/9;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  background-image: url('../assets/pngs/bgrd-card-blue-ecl-2.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 95%;
}

.card-tabs-img img {
  max-width: 100%;
  max-height: 100%;
  opacity: 100%;
}

.description-card-tabs {
  background-color: #404347;
  opacity: 95%;
}

.product-card-tabs-title {
  margin: 0;
  padding: 20px;
  text-align: center;
  color: white;
  font-weight: 600;
  white-space: pre-line;
}

.product-card-tabs-title p {
  font-weight: 300 !important;
}

.tabs {
  color: #cdc6c6;
  border-bottom: 1px #cdc6c6 solid;
}

.v-tab:first-child {
  margin-inline-start: 0px !important;
}

.card-tabs-text {
  color: #cdc6c6;
  font-size: 120%;
}

.v-window-item {
  white-space: pre-line;
  color: white;
  font-size: 110%;
  padding: 15px;
}

@media (max-width: 600px) {
  .product-card-tabs {
    width: 100%;
  }
}
</style>
