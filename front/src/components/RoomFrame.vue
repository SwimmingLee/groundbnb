<template>
    <div class="roomFrame">
        <div class="roomPic">
            <v-img v-bind:src="src"
                    height=240
                    width=320>
            </v-img>
        </div>
        <div class="roomDesc">
            <h2>{{item.title}}</h2>
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
    props: ['src', 'detail', '_id','item']
};
</script>

<style scoped>

</style>