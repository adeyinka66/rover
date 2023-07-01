<template>
        <div :class="classname">
            <button>{{ buttonname }}</button>
        </div>
</template>

<script>
export default  {
    name: "blackbutton"

}

</script>

<script setup>
const props = defineProps({
    buttonname: 'buttonname',
    classname: 'classname'
})
</script>

<style lang="scss" scoped>

</style>