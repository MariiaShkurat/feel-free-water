<template>
  <div class="product-card">
    <div class="product-card-img-container">
      <img class="product-card-img" :src="this.image" alt="Card image cap" />
    </div>

    <div class="product-card-body">
      <h5 class="product-card-title">{{ header }}</h5>
      <p class="product-card-text" v-if="content" v-html="content"></p>
    </div>
    <div class="product-price">
      <p>{{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'header', 'content', 'price']
}
</script>

<style scoped>
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 90%;
  flex: 1;
  overflow: hidden;
}
.product-card-title {
  font-size: 110%;
}

.product-card-text {
  font-size: 95%;
}

.product-card-img-container {
  width: 100%;
  aspect-ratio: 10/10;
  text-align: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  flex: 2;
}

.product-card-img {
  max-width: 100%;
  max-height: 100%;
}

.product-card-body {
  padding: 20px 20px 10px;
  border-bottom: 1px solid #cdc6c6;
  width: 100%;
  flex: 1;
  white-space: pre-line;
}
.product-card-body p {
  white-space: pre-line;
  padding: 15px 5px;
  font-weight: 300;
}

.product-price {
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px 20px;
  width: 100%;
  color: black;
  white-space: pre-line;
  font-size: 18px;
}
</style>
