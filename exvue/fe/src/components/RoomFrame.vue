<template>
    <div class="roomFrame">
        <div class="roomPic">
            <v-img v-bind:src="src"
                    height=240
                    width=320>
            </v-img>
        </div>
        <div class="roomDesc">
            <h2>방의 이름입니다</h2>
            {{detail}}
        </div>
        <div style="display:inline-block">
            <a v-bind:href="'/room/' + _id">
                <v-btn>알아보기</v-btn>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name : "RoomFrame",
    props: ['src', 'detail', '_id']
};
</script>

<style scoped>

</style>