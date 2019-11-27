<template>
  <div>
    <div class="roomInfo">
      <h1>호산나하숙 아늑한 31층방</h1>
      {{room.location.address}}
      <p><v-icon color="warning">mdi-star</v-icon>4.96</p>
    <div class="roomPic" >
      <v-img v-bind:src="room.image[0]" height=320>  
      </v-img>
    </div>
    <div class="left" style="display:inline-block">
      <room-desc-frame></room-desc-frame>
      <review-set-frame></review-set-frame>
      <map-frame></map-frame>
    </div>
    <div class="right" style="display:inline-block">
      <host-frame></host-frame>
      <room-book-frame></room-book-frame>
    </div>
  </div>
</div>
</template>

<script>
import RoomBookFrame from '@/components/RoomBookFrame';
import RoomDescFrame from '@/components/RoomDescFrame';
import ReviewSetFrame from '@/components/ReviewSetFrame';
import HostFrame from '@/components/HostFrame';
import MapFrame from '@/components/MapFrame';

export default {
     name : 'roomDetail',
     components:{
       RoomBookFrame,
       RoomDescFrame,
       ReviewSetFrame,
       HostFrame,
       MapFrame
     },
    data() {
      return {
        room: {},
      }
    },
    created() {
      var path = '/api/sharehouse/' + this.$route.params.id
      this.$http.get(path)
              .then((response) => {
                this.room = response.data;
              })
    },

};
</script>

<style scoped>

</style>