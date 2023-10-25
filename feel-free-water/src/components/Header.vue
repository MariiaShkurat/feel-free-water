<template>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
    <router-link to="/" class="navbar-brand"
      ><img src="../assets/pngs/lable.png" alt="" class="label" />
      <p class="feel-free-p">FEEL FREE WATER</p></router-link
    >

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link" :class="{ 'active-link': $route.path === '/' }"
            >Доставка води</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/coolers"
            class="nav-link"
            :class="{ 'active-link': $route.path === '/coolers' }"
            >Кулери</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/goods"
            class="nav-link"
            :class="{ 'active-link': $route.path === '/goods' }"
            >Господарські товари</router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contacts">Контакти</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarHidden: false,
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
      this.navbarHidden = window.scrollY > 0
    }
  }
}
</script>

<style scoped>
.active-link {
  color: #000000;
}
.navbar {
  background-color: #f2f2f2;
  padding: 0.5rem 5rem;
  box-shadow: 0 4px 15px -6px rgb(31 31 31);
  --bs-navbar-padding-x: 0.5rem !important;
}
.navbar-nav {
  font-size: 25px;
}

.feel-free-p {
  padding-left: 3%;
  font-size: 130%;
}

.navbar-brand {
  display: flex !important;
  align-items: center;
  flex-direction: row;
}

.navbar-collapse {
  flex-direction: row-reverse;
}

.text-label {
  width: 350px;
  margin-left: 10px;
}

@media (max-width: 600px) {
  .text-label {
    width: 150px;
  }
  .label {
    height: 40px;
  }
  .navbar {
    padding: 0.5rem 0.5rem;
  }
}

@media (min-width: 601px) and (max-width: 992px) {
  .text-label {
    width: 250px;
  }
  .label {
    height: 70px;
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .text-label {
    width: 350px;
  }
  .label {
    height: 80px;
  }
}

@media (min-width: 1201px) {
  .text-label {
    max-width: 350px;
  }
  .label {
    height: 80px;
  }
}
</style>
