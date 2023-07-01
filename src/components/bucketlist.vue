<template>
    <div class="bucket-list-container" >
       <div class="quote-img" ></div>
        <div class="quote-text"  data-aos="zoom-in" >
            <div class="author"><p>taiwo adeyinka</p></div> <div> <svg class="quote" xmlns="http://www.w3.org/2000/svg" width="30" height="26.72" viewBox="0 0 30 26.72"><g data-name="Layer 2"><path d="M30 12.69l-5.79 2.4A23.81 23.81 0 0026.57 25l-4.46 1.75A26.51 26.51 0 0117 10.89V0h13zm-16.9 0l-5.93 2.4A23.81 23.81 0 009.54 25l-4.47 1.72A26.5 26.5 0 010 10.89V0h13.1z" data-name="Layer 1"></path></g></svg></div>
            <div>
                <p class="my-bucket-list">
                    My bucket list is pretty short. Honestly, buying this Ford Bronco was definitely a scratch off of the bucket list.
                </p>
            </div>
            <blackbutton :buttonname="button" :classname="classname" ></blackbutton>
        </div>
    </div>
</template>

<script setup>

import Blackbutton from "./button/blackbutton.vue";
const   button = "Biography"
const classname = "unique-story"
</script>

<style lang="scss" scoped>
.bucket-list-container {
  display: flex;
  justify-content: space-around;

  align-items: center;
  margin: 8% 0;
  .quote-img {

    background-image: url("../assets/img/quote.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 40%;
    height: 550px;
  }
  .quote-text {

    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .author {
      width: 50%;
      color: #000;
      font-size: .95rem;
      letter-spacing: 0.25rem;
      line-height: 3rem;
      font-weight: 500;
    }
    .quote {
      width: 50%;
      color: #000;
      fill: #000;
      font-size: 5rem;
      height: 50px;
    }
    .my-bucket-list {
      width: 100%;
      color: #000;
      font-size: 2.55rem;
      line-height: 135%;
      padding: 10px 0;
    }
  }
}

</style>