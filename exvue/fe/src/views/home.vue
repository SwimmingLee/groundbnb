<template>
  <div class="home">
    <div>
      <search-frame></search-frame>
    </div>
    <div class="rooms" 
        style="overflow:scroll;"
        height=300px;>
      <ul style="list-sylte:none;padding-left:0px;">
        <li v-for="item in items" :key="item" style="float:left">
          <room-frame ></room-frame>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchFrame from '@/components/SearchFrame';
import RoomFrame from '@/components/RoomFrame';
export default {
  name: 'home',
  components: {
    SearchFrame,
    RoomFrame
  },
  data(){
    var arrNumber = new Array();
    for (var i =0 ; i<100; i++)
      arrNumber[i] =i;
    return {items:arrNumber};
  }
}
</script>