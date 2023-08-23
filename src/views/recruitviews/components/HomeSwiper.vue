<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="tab">
                    <img src="@/assets/images/recru/swiper.png" alt="">
                </div>
            </div>
            <div class="swiper-slide">
                <div class="tab">
                    <img src="@/assets/images/recru/swiper.png" alt="">
                </div>
            </div>
            <div class="swiper-slide">
                <div class="tab">
                    <img src="@/assets/images/recru/swiper.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/swiper-bundle';
export default {
    name: 'swiper',
    data() {
        return {

        }
    },
    mounted(){
        this.initSwiper()
    },
    methods: {
        initSwiper() {
            this.swiper = new Swiper('.swiper-container', {
                slidesPerView: 1, // 设置一屏显示七个小 tab
                spaceBetween: 0, // 设置小 tab 之间的间距
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
                }
            });
        },
    }
}
</script>

<style lang="scss" scope>
.swiper-container{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .tab{
        width: 100%;
        height: 100%;
        img{
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
</style>