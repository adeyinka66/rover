<template>
    <div class="dark-rover-background">
     <div class="left-wing">  </div>
      <div class="right-wing"></div>

        <div class="circle_text_container_dark">
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
</template>

<script setup>

</script>

<style lang="scss" scoped>
.dark-rover-background {
  background-image: url("../assets/img/darkcarcover.jpg");
  width: 100%;
  height: 580px;
  background-position: center;
  background-size: cover;
  filter: grayscale(50%);
  display: flex;
  position: relative;
  align-items: center;
  .left-wing{
     width: 50%;
    border-right: 1.5px solid #fff;
    height: 585px;

  }
  .right-wing{
    width: 50%;
    border-left: 1.5px solid #fff;
    height: 585px;
  }
}

</style>