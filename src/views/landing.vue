<template>
    <div style="scroll-behavior: smooth" >
        <rover-hero id="hero" ></rover-hero>
        <RoverUnique></RoverUnique>
        <rover-highlight></rover-highlight>
        <rover-highlight2></rover-highlight2>
        <RoverCarousel></RoverCarousel>
        <div class="sec1a" >
              <blackbutton :buttonname="buttonname" :classname="classname" ></blackbutton>
        </div>
        <dark-rover class="mtop"></dark-rover>
        <div class="sec1a">
           <p>SEEN IN</p>
        </div>
        <rover-features></rover-features>
        <chooserover class="mtop"></chooserover>
        <bucketlist class="mtop"></bucketlist>
        <rover-footer></rover-footer>
    </div>

</template>

<script setup>
import RoverHero from "../components/rover-hero.vue";
import RoverUnique from "../components/rover-unique.vue";
import RoverHighlight from "../components/rover-highlight.vue";
import RoverHighlight2 from "../components/rover-highlight2.vue";
import RoverCarousel from "../components/rover-carousel.vue";
import Blackbutton from "../components/button/blackbutton.vue";
import DarkRover from "../components/dark-rover.vue";
import RoverFeatures from "../components/rover-features.vue";
import Chooserover from "../components/chooserover.vue";
import Bucketlist from "../components/bucketlist.vue";
import RoverFooter from "../components/rover-footer.vue";

const  buttonname = "all vehicles"
const  classname = "unique-story"


</script>

<style lang="css" scoped>
.sec1a {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    height: 250px;
}
.sec1a p {
    letter-spacing: 2px;
    font-size: 2rem;
}

</style>