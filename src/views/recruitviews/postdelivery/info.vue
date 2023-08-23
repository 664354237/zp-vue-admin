<template>
    <div class="home-container">
        <recruitviews-header :topActive='topActive'></recruitviews-header>
        <div class="home-content">
            <div class="home-info-box">
                <div class="info-title">
                    <span>高级教师</span>
                    <p class="backroot">返回列表</p>
                </div>
                <p class="info-time">发布于 2023-05-21</p>
                <div class="position">
                    <div class="posi-title">职位信息</div>
                </div>
                <div class="responsi">
                    <div class="res-item">
                        <div class="resp-title">岗位职责</div>
                        <p class="li">1、 全英文教授3到12岁儿童；</p>
                        <p class="li">2、 参与入职、晋级培训及教研活动，并将自己的教学经验进行传播；</p>
                        <p class="li">3、 开课后负责与家长沟通学员学习情况，做好家校互动；</p>
                        <p class="li">4、 定期对客户进行回访，做好学员课后辅导。</p>
                    </div>
                    <div class="res-item">
                        <div class="resp-title">任职要求</div>
                        <p class="li">1、 本科及以上学历，具备英语基础能力；</p>
                        <p class="li">2、 熟悉中国的教育体制，有英语教学经验者、通过TEM4、TEM8者优先；</p>
                        <p class="li">3、 喜欢孩子，热爱教育；善于分享，有较强的团队合作意识；</p>
                        <p class="li">4、 欢迎有海外留学背景、活泼外向的求职者。</p>
                    </div>
                </div>
                <div class="btnclick">
                    <router-link to="/recruitviews/notes/index">
                        <span>申请职位</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RecruitviewsHeader from '../components/header.vue';
import { GetDataTableInfoList } from '@/api/recruitviews/postdelivery/index.js';
export default {
    name: 'delivery',
    data() {
        return {
            topActive: 2,
        }
    },
    
    methods: {
        async HandleDataTableInfoList(TableId){
            let res = await GetDataTableInfoList({ id: TableId })
            if(res.code === 200){
                console.log(res)
            }
        }
    },
    components:{
        RecruitviewsHeader,
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
            .home-info-box{
                height: 100%;
                background-color: #fff;
                padding: 20px;
                border-radius: 20px;
                .btnclick{
                    width: 120px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background-color: #19134a;
                    font-size: 16px;
                    color: #ffffff;
                    border-radius: 40px;
                    margin: 0 auto;
                    cursor: pointer;
                }
                .btnclick:hover{
                    transition: 0.6s;
                    opacity: 0.6;
                }
                .position{
                    .posi-title{
                        font-size: 18px;
                        color: #333333;
                        font-weight: bold;
                        margin-bottom: 15px;
                        margin-top: 35px;
                    }
                }
                .responsi{
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    padding-bottom: 50px;
                    border-bottom: 1px solid #e1e1e1;
                    margin-bottom: 50px;
                    .res-item{
                        width: calc(100%/2 - 5px);
                        margin-right: 10px;
                        .resp-title{
                            font-size: 18px;
                            color: #333333;
                            font-weight: bold;
                            margin-top: 40px;
                            margin-bottom: 5px;
                        }
                        .li{
                            font-size: 16px;
                            line-height: 35px;
                            color: #999999;
                        }
                    }
                    .res-item:last-child{
                        margin-right: 0;
                    }
                }
                .info-time{
                    color: #999999;
                    font-size: 16px;
                    margin-top: 15px;
                }
                .info-title{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-bottom: 10px;
                    border-bottom: 1px solid #e1e1e1;
                    span{
                        font-size: 24px;
                        color: #333333;
                    }
                    .backroot{
                        width: 120px;
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        font-size: 16px;
                        color: #ffffff;
                        border-radius: 40px;
                        background-color: #ed8035;
                        cursor: pointer;
                    }
                    .backroot:hover{
                        transition: 0.6s;
                        opacity: 0.6;
                    }
                }
            }
        }
    }
</style>