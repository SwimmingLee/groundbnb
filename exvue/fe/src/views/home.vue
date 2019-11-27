<template>
  <div class="home">
    <div>
      <search-frame></search-frame>
    </div>
    <div class="rooms" 
        style="overflow:scroll;"
        height=300px;>
      <ul style="list-sylte:none;padding-left:0px;">
        <li v-for="item in houseImgs" :key="item" style="float:left">
          <room-frame v-bind:_id=item._id v-bind:src="item.image[0]" v-bind:detail="item.description"></room-frame>
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
    return {
      items:new Array(),
      houseImgs: []
      };
  },
  created() {
    //this.arrNumber = new Array();
    for (var i =0 ; i<30; i++)
      this.items[i] =i;
    
    this.$http.get('/api/sharehouse')
              .then((response) => {
                this.houseImgs = response.data
              })
  },
}
</script>