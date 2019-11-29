<template>
    <div class="reviewForm">
        <div class="reviewHead">
            <div style="float:left">
                <v-avatar color="indigo" size="36"></v-avatar>
            </div>
            <div>
                <div class="reviewAuthor" style="float:left">
                    김명수
                </div>
                <div class="reviewDay">
                    2019년 11월 11일
                </div>
                <div class="reviewStar">
                    <v-icon v-for="index in rating" :key="index" color="warning">mdi-star</v-icon>
                </div>
            </div>

        </div>
        <div class="reviewBody">
            증말 최고의 집이라고 말할수잇는 부분이구요. 다시 태어나도 다시 오고 싶은 집입니다.
        </div>
        <comment-popup-frame></comment-popup-frame>


    </div>
</template>

<script>
import CommentPopupFrame from '@/components/CommentPopupFrame';
export default {
    name : "ReviewFrame",
    components:{
        CommentPopupFrame
    },
    data() {
        return{rating:5}
    }
};
</script>

<style scoped>

</style>