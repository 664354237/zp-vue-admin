<template>
    <el-button :class="$style['hook-button']" v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </el-button>
</template>

<script>
export default  {
    data() {
        return {}
    }
}
</script>

<style lang="scss" module>
$color-primary:#494a9a;
$color-warning:#ed8035;
$color-success:#40aa96;
$color-danger:#f00;
$color-info:#d3d4d6;
$color-exciting:#9e04fa;

.hook-button {

    &:global(.el-button.is-disabled) {
        opacity: .5;

    }

    &:global(.el-button--primary) {
        background-color: $color-primary;
        border-color: $color-primary;
        &:global(.is-plain) {
            background-color: #fff;
            border-color: $color-primary;
            color: $color-primary;
        }
        
    }

    &:global(.el-button--warning) {
        background-color: $color-warning;
        border-color: $color-warning;
        &:global(.is-plain) {
            background-color: #fff;
            border-color: $color-warning;
            color: $color-warning;
        }
    }


    &:global(.el-button--success) {
        background-color: $color-success;
        border-color: $color-success;
    }

    &:global(.el-button--danger) {
        background-color: $color-danger;
        border-color: $color-danger;
    }



    &:global(.el-button--exciting) {
        background-color: $color-exciting;
        border-color: $color-exciting;
        color: #fff;
        &:global(.is-plain) {
            background-color: #fff;
            border-color: $color-exciting;
            color: $color-exciting;
        }
        
    }


    &:global(.el-button--info) {
        background-color: $color-info;
        border-color: $color-info;
        color: #fff;
        &:global(.is-plain) {
            background-color: #fff;
            border-color: $color-info;
            color: #818181;
        }
        
    }

    


}
</style>