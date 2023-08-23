<template>
    <div class="home-container">
        <recruitviews-header :topActive='topActive'></recruitviews-header>
        <div class="home-content">
            <div class="content">
                <div class="active-list">
                    <div class="title" :class="active === 1 ? 'active' : ''" @click="HandleClickActive(1)">
                        <span>通知</span>
                    </div>
                    <div class="title" :class="active === 2 ? 'active' : ''" @click="HandleClickActive(2)">
                        <span>公告</span>
                    </div>
                </div>
                <div v-if="active === 1">
                    <notice-announ :notice="notice"></notice-announ>
                </div>
                <div v-if="active === 2">
                    <notice-announ :notice="notice"></notice-announ>
                    <notice-announ :notice="notice"></notice-announ>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RecruitviewsHeader from '../components/header.vue';
import NoticeAnnoun from '../components/NoticeAnnoun.vue';
export default {
    name: 'personal',
    data() {
        return {
            topActive: 5,
            active:1,
            notice:[]
        }
    },
    created(){
        this.notice = [
            {
                title: '学校校友会召开第一届第九次理事会会议',
                time: '2023.06.27'
            },
            {
                title: '学校校友会召开第一届第九次理事会会议',
                time: '2023.06.27'
            },
            {
                title: '学校校友会召开第一届第九次理事会会议',
                time: '2023.06.27'
            }
        ]
    },
    methods: {
        HandleClickActive(index){
            this.active = index
        }
    },
    components:{
        RecruitviewsHeader,
        NoticeAnnoun
    }
}
</script>

<style lang="scss" scope>
    .home-container {
        height: 100%;
        width: 100%;
        min-width: 1600px;
        overflow: auto;
        .home-content{
            padding: 25px;
            height: calc(100% - 100px);
            background-color: #f0eff6;
            .content{
                height: 100%;
                padding: 25px;
                background-color: #fff;
                border-radius: 20px;
                .active-list{
                    display: flex;
                    border-bottom: 1px solid #e8e7ed;
                    .title{
                        color: #333333;
                        font-size: 24px;
                        padding-bottom: 20px;
                        cursor: pointer;
                        span{
                            width: 70px;
                            display: block;
                            text-align: center;
                        }
                    }
                    .title:first-child{
                        span{
                            border-right: 1px solid #e8e7ed;
                        }
                    }
                    .active{
                        color: #ed8035;
                        border-bottom: 5px solid #ed8035;
                    }
                }
            }
        }
    }
</style>