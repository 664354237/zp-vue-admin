<template>
    <div :class="$style.container">
        <div :class="[$style.flex, $style['items-center']]">
            <div :class="$style['flex-1']">
                <slot name="perfix"></slot>
            </div>
            <div :class="[$style['flex-auto']]">
                <el-pagination v-bind="$attrs" v-on="$listeners"></el-pagination>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {}
    },
    methods: {}
}
</script>

<style lang="scss" module>
.container {
    margin-top: 25px;

    .flex {
        display: flex;
    }

    .flex-1 {
        flex: 1;
    }

    .flex-auto {
        flex: 0 0 auto;
    }

    .items-center {
        align-items: center;
    }

    .pr-10 {
        padding-right: 10px;
    }
}
</style>