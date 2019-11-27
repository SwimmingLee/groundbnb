<template>
    <div class="roomFrame">
        <div class="roomPic">
            <v-img src="https://a0.muscache.com/im/pictures/cd17b75f-9aee-4f68-b80d-dde84996fb4b.jpg?aki_policy=xx_large"
                    height=240
                    width=320>
            </v-img>
        </div>
        <div class="roomDesc">
            <h2>방의 이름입니다</h2>
            방에 대한 설명이 DB에서 불러와집니다
        </div>
        <div style="display:inline-block">
            <v-btn>알아보기</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name : "RoomFrame"
};
</script>

<style scoped>

</style>