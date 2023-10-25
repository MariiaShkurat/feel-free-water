<template>
  <div class="page">
    <div class="section section-first">
      <div class="main-container first-container">
        <div class="adv-s1">
          <p class="text-s1 text-1">Доставка 2 бутилів води - 115 грн/бут.</p>
          <p class="text-s1 text-2">Доставка 1 бутиля води - 120 грн/бут.</p>
          <p class="text-s1 text-3">Доставка 10+ бутилів води - договірна ціна</p>
          <a class="text-s1 text-number" href="#contacts">Замовляйте зараз!</a>
        </div>
        <div class="photo-s1">
          <img src="../assets/pngs/bottles_water.png" alt="" />
        </div>
      </div>
    </div>

    <div class="section section-second">
      <div class="upper-wave wave">
        <img src="../assets/pngs/wave-1.png" alt="" />
      </div>
      <div class="main-container second-container">
        <div class="text-s2">
          Заставна вартість при доставці води за бутиль, складає 250 грн. Заставна вартість за
          бутиль повертається у повному обсязі при зупиненні співпраці.
        </div>
      </div>
      <div class="bottom-wave wave">
        <img src="../assets/pngs/wave-2.png" alt="" />
      </div>
    </div>

    <div class="section section-third">
      <div class="main-container third-container">
        <div class="badge-1 point-burst"><p>Якість</p></div>
        <div class="badge-2 point-burst"><p>Швидкість</p></div>
        <div class="badge-3 point-burst"><p>Доступна ціна</p></div>
      </div>
    </div>

    <div class="section section-fourth">
      <div class="main-container fourth-container">
        <div class="name-fourth-container">
          <h1>Додаткові товари</h1>
        </div>
        <ProductCarousel />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCarousel from '@/components/ProductCarousel.vue'
</script>

<style scoped>
.section-first {
  background-image: url('../assets/pngs/bgrd-grey-white.png');
  background-size: cover;
  /* background-position: center center; */
  background-repeat: no-repeat;
  /* background-color: rgb(64 67 71); */
  padding-top: 5%;
}

.adv-s1 {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.text-s1 {
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: -webkit-center;
}

.text-1 {
  flex: 2;
  font-weight: bold;
  font-size: 300%;

  color: #ee8434;
}

.text-2 {
  flex: 1;
  font-size: 150%;
  color: #cdc6c6;
  font-weight: bold;
}

.text-3 {
  flex: 1;
  font-size: 150%;
  color: #cdc6c6;
  font-weight: bold;
}

.text-number {
  background-color: #ee8434;
  color: #ffffff;
  border-radius: 20px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  font-size: 120%;
  text-decoration: none;
  width: 250px;
  align-self: center;
  padding: 20px 30px;
  margin: 4%;
  transition: all 0.5s ease 0s;
}

.text-number:hover {
  color: #cdc6c6;
  border-radius: 100px;
  transition: all 0.5s ease 0s;
}

.photo-s1 {
  flex: 1;
  display: flex;
  align-items: flex-end;
}

.photo-s1 img {
  max-width: 100%;
  height: auto;
}

/* second component */
.section-second {
  background-color: #f2f2f2;
  flex-direction: column;
  justify-content: space-between;
}

.second-container {
  justify-content: center;
  width: 100%;
}

.text-s2 {
  width: 40%;
  margin: 3%;
  padding: 2%;
  font-size: 120%;
  background-color: #ffffff;
  color: #000000;
  border-radius: 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.upper-wave {
  display: flex;
  justify-content: flex-start;
}

.bottom-wave {
  display: flex;
  justify-content: flex-end;
}

.wave img {
  max-width: 40%;
}

/* third component */
.third-container {
  justify-content: space-around;
  padding: 4%;
  flex-wrap: wrap;
  align-content: center;
}

.badge-1,
.badge-1::before,
.badge-1::after {
  background: #49beaa !important;
}

.badge-2,
.badge-2::before,
.badge-2::after {
  background: #ee8434 !important;
}

.badge-3,
.badge-3::before,
.badge-3::after {
  background: #24b9fe !important;
}

.point-burst p {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 100000000;
  font-size: 200%;
  font-weight: bold;
}

.point-burst {
  margin: 4%;
  background: #333;
  width: 200px;
  height: 200px;
  position: relative;
  text-align: center;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.point-burst:before,
.point-burst:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 200px;
  background: #333;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.point-burst:before {
  transform: rotate(30deg);
}
.point-burst:after {
  transform: rotate(60deg);
}

.section-fourth {
  background-color: #f2f2f2;
  padding: 5% 0 10% 0;
}

.fourth-container {
  flex-direction: column;
  align-items: center;
}

.name-fourth-container h1 {
  font-size: 200%;
  margin-bottom: 15% !important;
}

@media (min-width: 1095px) {
  .third-container {
    justify-content: space-between;
  }
}

@media (max-width: 750px) {
  .point-burst,
  .point-burst:before,
  .point-burst:after {
    height: 150px;
    width: 150px;
  }
  .point-burst p {
    font-size: 150%;
  }
}

@media (max-width: 860px) {
  .first-container {
    flex-direction: column !important;
  }
  .text-1 {
    font-size: 200% !important;
  }
}

@media (max-width: 600px) {
  .wave img {
    max-width: 80%;
  }
  .text-s2 {
    width: 75% !important;
    margin: 5% !important;
    padding: 3% !important;
    font-size: 100% !important;
  }
  .name-fourth-container h1 {
    font-size: 150% !important;
    margin-bottom: 30px !important;
  }

  .section-fourth {
    padding: 10% 0 0 0;
  }
}

@media (min-width: 601px) and (max-width: 992px) {
  .wave img {
    max-width: 60%;
  }
  .text-s2 {
    width: 70% !important;
  }
  .section-fourth {
    padding: 5% 0 0 0;
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .wave img {
    max-width: 50%;
  }
  .section-fourth {
    padding: 5% 0 0 0;
  }
}

@media (min-width: 1200px) {
  .section-fourth {
    padding: 4% 0 0 0;
  }
}
</style>
