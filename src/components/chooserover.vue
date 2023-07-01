<template>
    <div class="choose-container">
        <p> WHY CHOOSE METAL & GAS? </p>

        <div class="choose-text-body" v-for="texts in text" :key="texts.title" data-aos="fade-up" >
            <h1>{{ texts.title }}</h1>
            <p>{{ texts.subtitle }}</p>
        </div>
    </div>
</template>

<script setup>
import lamboImg from "../assets/img/lambo.jpg"
import {ref} from "vue";

const text = ref([
    {title: "QUALITY", subtitle: "Hand built to the highest standard."},
    {title: "PASSION", subtitle: "No-one cares as much as we do."},
    {title: "PRIDE!", subtitle: "Meet our vehicles and you'll see why."},
])

</script>

<style lang="scss" scoped>
.choose-container {
  width: 100%;
  height: auto;

    background-color: #000;
    background-image: url("../assets/img/lambo.jpg");
    background-size: cover;
    background-position: center;
    padding: 100px 0;
    filter: grayscale(35%);
    p {
        letter-spacing: 2px;
        font-size: 1.5rem;
        margin-top: 3%;
        text-align: center;
        color: #fff;
    }
    .choose-text-body {
        width: 100%;
        text-align: center;
        padding: 30px 0;
        h1 {
            font-size: 10.75rem;
            font-weight: 700;
            line-height: 60%;
            text-transform: uppercase;
            color: #fff;
        }
        p {
            font-size: 1.375rem;
        }
    }
}

</style>