<template>
    <div class="home-container">
        <recruitviews-header :topActive='topActive'></recruitviews-header>
        <div class="home-content">
            <div class="content">
                <div class="tableconter">
                    <!-- 标题 start -->
                        <div class="recru-title"><span>个人信息</span></div>
                    <!-- 标题 end -->
                    <notes-info></notes-info>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RecruitviewsHeader from '../components/header.vue'
import NotesInfo from './components/info.vue'
export default {
    name: 'personal',
    data() {
        return {
            topActive: 4,
            name: '',
            phone: '',
            email: '',
            password: '',
            password1: '',
        }
    },
    methods: {
    
    },
    components:{
        RecruitviewsHeader,
        NotesInfo
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
                .tableconter{
                    height: 100%;
                    width: 100%;
                    overflow: auto;
                }
                .recru-title{
                    font-size: 24px;
                    color: #333333;
                    padding-bottom: 15px;
                    font-weight: bold;
                    border-bottom: 1px solid #e1e1e1;
                    margin-bottom: 65px;
                }
            }
        }
    }
</style>