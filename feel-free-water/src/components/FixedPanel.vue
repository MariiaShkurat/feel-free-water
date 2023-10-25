<template>
  <a href="#navbar"><i v-if="showArrow" class="bi bi-arrow-up-circle circle-panel"></i></a>
  <a href="#contacts" v-if="showArrow" class="contact-us-panel">
    <p>Зробити замовлення</p>
    <i class="bi bi-telephone"></i>
  </a>
</template>

<script>
export default {
  data() {
    return {
      showArrow: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showArrow = window.scrollY > 0
    }
  }
}
</script>

<style scoped>
.circle-panel {
  position: fixed;
  top: 60%;
  right: 50px;
  transform: translateY(-50%);
  z-index: 1000;
  font-size: 40px;
  color: #ee8434;
  transition: all 0.3s ease 0s;
  opacity: 85%;
}

.contact-us-panel {
  position: fixed;
  top: 35%;
  right: 0px;
  transform: translateY(-50%);
  z-index: 1000;
  color: white;
  writing-mode: vertical-rl;
  display: flex;
  background-color: #24b9fe;
  flex-direction: row;
  font-size: 20px;
  padding: 8px 10px;
  align-items: center;
  justify-content: flex-start;
  align-content: center;
  border-radius: 10px 0 0 10px;
  transition: all 0.3s ease 0s;
  opacity: 85%;
}

.contact-us-panel i {
  padding: 10px 0px;
}

.contact-us-panel:hover {
  color: #cdc6c6;
  transition: all 0.3s ease 0s;
}
.circle-panel:hover {
  color: #efa266;
  transition: all 0.3s ease 0s;
}

@media (max-width: 600px) {
  .circle-panel {
    right: 3px;
  }
}

@media (min-width: 601px) and (max-width: 992px) {
  .circle-panel {
    right: 20px;
  }
}
</style>
