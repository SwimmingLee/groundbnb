<template>
  <div>
    <div class="roomInfo">
      <h1>호산나하숙 아늑한 3층방</h1>
      집주소를 db로부터 받아옵니다
      <p><v-icon color="warning">mdi-star</v-icon>4.96</p>
    <div class="roomPic" >
      <v-img src="https://a0.muscache.com/im/pictures/a211e229-4c34-44d9-a7cb-82304660bc27.jpg?aki_policy=large"
        height=320
        ></v-img>
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
     name : 'room',
     components:{
       RoomBookFrame,
       RoomDescFrame,
       ReviewSetFrame,
       HostFrame,
       MapFrame
     },
    data() {

    }
};
</script>

<style scoped>

</style>