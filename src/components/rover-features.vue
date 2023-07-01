<template>
    <div class="feature-container">
          <div v-for="item in logos" :key="item.id" data-aos="fade-up"  data-aos-easing="ease-out-quart" :data-aos-duration="item.dur" > <a href=""><img :src="item.logo" alt="logo" class="logos"></a> </div>
    </div>
</template>

<script setup>

import logo1 from "../assets/svg/playboy-logo.svg"
import logo2 from "../assets/svg/luxury-logo.svg"
import logo3 from "../assets/svg/wsj-logo.svg"
import logo4 from "../assets/svg/outside-logo.svg"
import logo5 from "../assets/svg/uncrate-logo.svg"
import logo6 from "../assets/svg/the-drive-logo.svg"
import {ref} from "vue";


const logos = ref([
    {id: 1, logo:logo1, dur: 2000},
    {id: 2, logo:logo2, dur: 2500},
    {id: 3, logo:logo3, dur: 3000},
    {id: 4, logo:logo4, dur: 3500},
    {id: 5, logo:logo5, dur: 4000},
    {id: 6, logo:logo6, dur: 4500},
])


</script>

<style lang="scss" scoped>
.feature-container {
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: space-between;
}
.logos {
  width: 160px;
  height: 90px;
  transition: 1s;
}
.logos:hover {
  margin-bottom: 30px;
}

</style>