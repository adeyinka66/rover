<template>
    <div>
        <Carousel :itemsToShow="2.85" :wrapAround="true" :transition="500">
            <Slide v-for="slide in rovers" :key="slide.id">
                <div class="carousel__item size"><img :src="slide.img" alt="rover"></div>
            </Slide>

            <template #addons>
                <Pagination />
                <Navigation />
            </template>
        </Carousel>
    </div>


</template>

<script>

import featured1 from "../assets/img/Featured1.jpg"
import featured2 from "../assets/img/Featured2.jpg"
import featured3 from "../assets/img/Featured3.jpg"
import featured4 from "../assets/img/Featured4.jpg"


import { defineComponent } from 'vue'
import { Carousel, Pagination,  Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({

    name: 'rover-carousel',

    components: {
        Carousel,
        Slide,
        Pagination,

    },
    data() {
        return {
            featured1: featured1,
            featured2: featured2,
            featured3: featured3,
            featured4: featured4,

           rovers: [
               {id:1, img: featured1},
               {id:2, img: featured2},
               {id:3, img: featured3},
               {id:4, img: featured4},
           ],

        }
    },
})
</script>

<style lang="scss" scoped>

.size {
    width:500px ;
    height: 400px;
    border-radius: 15px;
}

.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}


</style>