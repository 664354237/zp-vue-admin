<template>
    <div class="notice">
        <div v-for="(item,index) in notice" :key="index">
            <router-link to="/recruitviews/notice/0">
                <div class="item-list">
                    <span class="icon">·</span>
                    <p class="list-title">{{ item.title }}</p>
                    <span class="list-time">{{ item.time }}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'notice',
    props:{
        notice:{
            type: Array,
            default: []
        }
    },
    data() {
        return {

        }
    },
    methods: {
    
    }
}
</script>

<style lang="scss" scope>
.notice{
    margin-top: 10px;
    .item-list{
        display: flex;
        align-items: center;
        height: 50px;
        border-bottom: 1px dashed #d1d0db;
        .icon{
            font-size: 20px;
            font-weight: bold;
            color: #ed8035;
            margin-right: 5px;
            display: block;
        }
        .list-title{
            font-size: 16px;
            color: #333333;
        }
        .list-time{
            font-size: 16px;
            color: #999999;
            margin-left: auto;
        }
    }
}
</style>