<template>
    <div>
        <h1>후기</h1>
        <div>
            <review-frame style="float:left"></review-frame>
            <review-frame></review-frame>
        </div>
        <div>
            <review-frame style="float:left"></review-frame>
            <review-frame></review-frame>
        </div>
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
            <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
    }
};
</script>

<style scoped>

</style>