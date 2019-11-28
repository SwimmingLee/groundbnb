<template>
    <div>
        <h1>후기</h1>
        <div>
          <ul style="list-style:none;">
            <li v-for="item in items" :key="item">
              <review-frame></review-frame>
            </li>
          </ul>
        </div>
        <div>
          <v-dialog v-model="dialog" width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">모든 200개 후기 보기</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">후기</span>
            </v-card-title>
            <v-card-text>
                <review-pop-up></review-pop-up>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              </v-card-actions>
          </v-card>
        </v-dialog>
        </div>
    </div>
</template>

<script>
import ReviewFrame from '@/components/ReviewFrame';
import ReviewPopUp from '@/components/ReviewPopUp';
export default {
    name : "ReviewSetFrame",
    components:{
        ReviewFrame,
        ReviewPopUp
    },
    data(){
      var arrNumber = new Array();
      for (var i =0 ; i<4; i++)
        arrNumber[i] =i;
      return {items:arrNumber};
    }
};
</script>

<style scoped>

</style>