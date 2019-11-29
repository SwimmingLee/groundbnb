<template>
    <div>
       <v-dialog v-model="dialog" width="600px">
            <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">댓글 더보기</v-btn>
            </template>
        <v-card>
          <v-card-title>
            <span class="headline">댓글</span>
          </v-card-title>
          <v-card-text>
              <comment-list-frame></comment-list-frame>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
import CommentListFrame from '@/components/CommentListFrame';
export default {
    name : "CommentPopupFrame",
    components :{
        CommentListFrame
    },
};
</script>

<style scoped>

</style>