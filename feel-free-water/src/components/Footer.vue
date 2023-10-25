<template>
  <div class="section foot" id="contacts">
    <div class="main-container foot-container">
      <div class="foot-lable">
        <div class="foot-img">
          <img src="../assets/pngs/lable_negativ-removebg.png" alt="" />
        </div>
        <div class="foot-free-water"><p>FEEL FREE WATER</p></div>
      </div>
      <div class="footer-contacts row">
        <div class="numbers col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
          <ul>
            <li>
              <a href="tel:+380731717705" style="white-space: nowrap"
                ><i class="bi bi-telephone"></i> +380(73)-171-77-05</a
              >
            </li>
            <li>
              <a href="tel:+380681717705" style="white-space: nowrap"
                ><i class="bi bi-telephone"></i> +380(68)-171-77-05</a
              >
            </li>
            <li>
              <a href="tel:+380951717707" style="white-space: nowrap"
                ><i class="bi bi-telephone"></i> +380(95)-171-77-07</a
              >
            </li>
          </ul>
        </div>
        <a
          href="mailto:feelfreewater@gmail.com"
          class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12"
          style="white-space: nowrap"
          ><i class="bi bi-envelope"></i> Mail</a
        >
        <a
          href="https://t.me/FeelFreeWater"
          class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12"
          style="white-space: nowrap"
          ><i class="bi bi-telegram"></i>Telegram</a
        >
        <a
          href="https://wa.me/+380951717707"
          class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12"
          style="white-space: nowrap"
          ><i class="bi bi-whatsapp"></i> WhatsApp</a
        >
        <a
          href="viber://chat?number=%2B380951717707"
          class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-12"
          style="white-space: nowrap"
          ><i class="bi bi-chat-dots"></i>Viber</a
        >
        <div class="row schedule-big">
          <div>Працюємо в радіусі 50км від м. Київ</div>
          <div>Приймаємо замовлення з 9:00 до 18:00 пн-сб</div>
        </div>
      </div>
      <div class="schedule-small">
        <div>Працюємо в радіусі 50км від м. Київ</div>
        <div>Приймаємо замовлення з 9:00 до 18:00 пн-сб</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.foot {
  background-color: #404347;
  box-shadow: rgb(48 47 47) 0px 6px 10px 0px inset;
}

.foot-container {
  justify-content: space-between;
  padding: 3% 0;
}

.foot-lable {
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.foot-img {
  width: 60%;
  display: flex;
  justify-content: center;
}

.foot-img img {
  width: inherit;
}

.foot-free-water {
  display: flex;
  justify-content: center;
  width: 100%;
}

.foot-free-water p {
  color: #ffffff;
  font-size: 140%;
}

.footer-contacts a {
  color: #ffffff;
  transition: all 0.3s ease 0s;
}

.footer-contacts a:hover {
  color: #cdc6c6;
  transition: all 0.3s ease 0s;
}
.footer-contacts a i {
  padding: 0 5px;
}

.schedule-small div {
  color: #cdc6c6;
}

.schedule-big div {
  color: #cdc6c6;
}

.footer-contacts {
  align-items: center;
}

@media (max-width: 359px) {
  * {
    white-space: wrap !important;
  }
}

@media (max-width: 396px) {
  .schedule-small {
    white-space: wrap !important;
  }
}

@media (max-width: 576px) {
  .foot-free-water {
    display: none;
  }

  .foot-img {
    width: 100%;
  }
  .footer-contacts {
    font-size: 100%;
    width: 55%;
    text-align: center;
  }
  .foot-lable {
    width: 45% !important;
    justify-content: center;
  }

  .schedule-big {
    display: none;
  }
  .foot-container {
    flex-wrap: wrap;
  }
  .schedule-small {
    padding: 15px 0;
    text-align: center;
    white-space: nowrap;
    width: 100%;
  }

  .col-12 {
    padding: 5px;
  }
}

@media (min-width: 576px) and (max-width: 747px) {
  .footer-contacts {
    font-size: 120%;
    width: 60%;
    text-align: start;
  }
  .foot-lable {
    width: 30%;
  }

  .foot-lable img {
    width: 100% !important;
  }
  .col-sm-12 {
    padding: 10px 0;
    text-align: center;
  }

  .col-sm-6 {
    padding-block: 10px;
  }
  .schedule-big {
    display: none;
  }
  .foot-container {
    flex-wrap: wrap;
  }
  .schedule-small {
    padding: 15px 0;
    text-align: center;
    white-space: nowrap;
    width: 100%;
  }

  .foot-img {
    width: 100%;
  }
  .foot-free-water {
    display: none;
  }
}

@media (min-width: 601px) and (max-width: 992px) {
  .foot-lable {
    width: 40%;
  }
  .foot-img {
    width: 70% !important;
  }
}

@media (min-width: 747px) and (max-width: 992px) {
  .footer-contacts {
    font-size: 110%;
    width: 100%;
    text-align: center;
    padding: 0 0px 0 30px;
  }
  .col-lg-3 {
    padding: 3px 0px;
  }
  .schedule-small {
    display: none;
  }
}

@media (min-width: 993px) and (max-width: 1200px) {
  .foot-lable {
    width: 40%;
    font-size: 150%;
  }
  .foot-img {
    width: 80% !important;
  }
  .footer-contacts {
    font-size: 130% !important;
    width: 70%;
    text-align-last: center;
  }
  .schedule-small {
    display: none;
  }
}

@media (min-width: 1201px) {
  .row {
    text-align-last: right;
  }
  .schedule {
    padding: 20px;
  }
  .foot-lable {
    width: 20%;
    font-size: 110%;
  }
  .foot-img {
    width: 80% !important;
  }
  .footer-contacts {
    font-size: 130% !important;
    width: 70% !important;
  }

  .footer-contacts a {
    margin: 1%;
  }
  .footer-contacts p {
    margin: 1%;
  }
  .foot-container {
    padding: 1% 0;
  }
  .schedule-small {
    display: none;
  }
}
</style>
