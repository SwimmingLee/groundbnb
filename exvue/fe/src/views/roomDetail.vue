<template>
  <div>
    <div class="roomInfo">
      {{room}}
      <h1>{{room.title}}</h1>
      {{room.location.address}}
      <p><v-icon color="warning">mdi-star</v-icon>{{room.comment.userRating}}</p>
    <div class="roomPic" >
      <v-img v-bind:src="room.image[0]" height=320>  
      </v-img>
    </div>
    <div class="left" style="display:inline-block">
      <room-desc-frame v-bind:facilities="room.facilities" v-bind:description="room.description"></room-desc-frame>
      <review-set-frame></review-set-frame>
      <map-frame v-bind:location="room.location"></map-frame>
    </div>
    <div class="right" style="display:inline-block">
      <map-frame v-bind:location="room.location"></map-frame>
      <host-frame></host-frame>
      <room-book-frame v-bind:_id="$route.params.id" v-bind:price="room.price"></room-book-frame>
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