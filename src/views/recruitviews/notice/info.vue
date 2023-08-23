<template>
    <div class="home-container">
        <recruitviews-header :topActive='topActive'></recruitviews-header>
        <div class="home-content">
            <div class="content">
                <div class="info-top">
                    <div class="left">
                        <p class="title">省委党史研究室主任杨建伟教授为我校“青马工程”学员授课</p>
                        <p class="time">发布时间：2023.06.25</p>
                    </div>
                    <div class="right">
                        <span>下载附件</span>
                    </div>
                </div>
                <div class="info">
                    <p>为进一步加强学校师德师风建设，提升教师思想政治素质和职业道德素养，营造和谐稳定的校园氛围，以实际行动迎接党的二十大胜利召开，根据学校《2022年师德建设主题教育月活动方案》安排，９月22日，我校在河源校区博学大讲堂举行师德师风建设专题报告会暨教职工座谈会。党委教师工作部、人事处负责人，河源校区管委会班子成员，常驻河源校区全体教职工参加会议。报告会由河源校区管委会主要负责人主持</p>
                    <img src="@/assets/images/recru/notice.jpg" alt="">
                    <p>专题报告会上，党委教师工作部、人事处负责人以《涵养高尚师德 做“四有”好老师》为题，带领与会教师学习了新时代师德师风的丰富内涵，特别是习近平总书记对教师师德师风的要求，要求与会教师要深入学习贯彻习近平总书记对教育、对师德师风提出的重要论述精神，积极为学校建设中国特色世界水平技术师范大学作出贡献。她表示，新时代师德师风的重要内涵是对中国传统优秀师德的辩证性继承和时代性发展，作为高校教师，要坚持立德树人的教育初心，担当为党育人、为国育才的神圣使命，在师德养成上努力做到有厚度、有温度、有高度、有宽度，争做“有理想信念、有道德情操、有扎实学识、有仁爱之心”的“四有”好老师。同时，她解读了《新时代高校教师职业行为十项准则》等国家对师德师风的政策要求和学校有关制度，结合师德失范典型案例作了警示教育。</p>
                    <p>与会教师纷纷表示，师德师风建设专题报告会的举行，让大家更加明确了学校对师德师风的要求，增强了立德树人、培根铸魂的责任感和使命感，在今后的教书育人过程中，将严守师德、以身立教，当好学生健康成长的指导者和引路人。</p>
                    <p>教职工座谈会上，教师代表们畅所欲言，结合工作生活实际，对学校在人才培养、职称评定、校园建设、后勤服务等方面提出了有建设性的意见与建议。教师工作部、人事处、河源校区管委会负责人现场作了回应和解答。</p>
                    <p>据悉，我校历来高度重视教师队伍建设和师德师风建设，举办本次专题报告会，是学校2022年师德建设主题教育月活动重要内容之一。通过加强师德师风建设，努力培养造就具有坚定理想信念、深厚爱国情怀、高尚师德师风、极具创新能力的一流教师队伍，为学校发展赋能增效。</p>
                </div>
                <div class="info-bottom">
                    <div class="left">
                        <p class="title">上一篇：我校组织参加第41期广东高校学习论坛暨学校党委理论学习中心组（扩大）会</p>
                        <p class="time">下一篇：学校组织参加2022年全省秋季学期学校食品安全工作视频会</p>
                    </div>
                    <div class="right">
                        <router-link to="/recruitviews/notice">
                            <span>返回列表</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RecruitviewsHeader from '../components/header.vue';
export default {
    name: 'personal',
    data() {
        return {
            topActive: 5,
        }
    },
    methods: {

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
            .content{
                height: 100%;
                padding: 25px;
                background-color: #fff;
                border-radius: 20px;
                overflow-x: auto;
                &::-webkit-scrollbar {
                    width: 8px;
                    background-color: #f2f2f2;
                }
            
                &::-webkit-scrollbar-thumb {
                    border-radius: 5px;
                    background-color: #f99444;
                }
                .info{
                    p{
                        margin-bottom: 40px;
                        line-height: 25px;
                        color: #999999;
                        font-size: 16px;
                    }
                    img{
                        max-width: 100%;
                        display: block;
                        margin: 0 auto;
                        margin-bottom: 40px;
                    }
                }
                .info-top{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-bottom: 22px;
                    border-bottom: 1px solid #e1e1e1;
                    margin-bottom: 35px;
                    .left{
                        .title{
                            font-size: 24px;
                            color: #333333;
                            margin-bottom: 5px;
                        }
                        .time{
                            font-size: 16px;
                            color: #999999;
                        }
                    }
                    .right{
                        span{
                            display: block;
                            width: 120px;
                            height: 40px;
                            border-radius: 40px;
                            line-height: 40px;
                            text-align: center;
                            color: #fff;
                            font-size: 16px;
                            background-color: #ed8035;
                        }
                    }
                }
                .info-bottom{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 22px;
                    border-top: 1px solid #e1e1e1;
                    .left{
                        .title{
                            font-size: 16px;
                            color: #ed8035;
                            margin-bottom: 5px;
                        }
                        .time{
                            font-size: 16px;
                            color: #999999;
                        }
                    }
                    .right{
                        span{
                            display: block;
                            width: 120px;
                            height: 40px;
                            border-radius: 40px;
                            line-height: 40px;
                            text-align: center;
                            color: #fff;
                            font-size: 16px;
                            background-color: #ed8035;
                        }
                    }
                }
            }
        }
    }
</style>