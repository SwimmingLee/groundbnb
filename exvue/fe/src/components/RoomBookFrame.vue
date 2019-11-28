<template>
    <div class="roomBookFrame">
        <h1>예약하기</h1>
    
        <v-sheet class="schedule" height=300 width=200>
            <v-calendar
                type="month"></v-calendar>
        </v-sheet>
        
        <div class="searchButton">
            지금 예약하시면 {{price}}원/1일 부터~
            <a v-bind:href="'/reserve/' + _id">
                <v-btn >예약</v-btn>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name : "RoomBookFrame",
    props: ['_id','price']
};
</script>

<style scoped>

</style>