<template>
    <div class="rover_hero_container"  :style="{backgroundImage:`url(${bg_img})` }">
        <rover-navigation></rover-navigation>
        <div class="rover_hero_text">
            <div class="drive_dont"><p>DRIVE WHAT THEY DON'T</p></div>
            <div class="rover_hero_best_wrapper" >
                <div class="building_best"><h1>BUILDING THE BEST RIDES IN THE BUSINESS</h1></div>
                <div class="circle_text_container">
                    <svg viewBox="0 0 500 500">
                        <path id="curve" d="M 120, 250 m -60, 0 a 60,60 0 0,1 380,0 a 60,60 0 0,1 -370,0" />
                        <text >
                            <textPath xlink:href="#curve" class="path_curve">
                                The Difference Is In The Details
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import bg_img from '../assets/img/camaro.jpg';
import RoverNavigation from "./rover-navigation.vue";
</script>

<style lang="scss" scoped>

</style>