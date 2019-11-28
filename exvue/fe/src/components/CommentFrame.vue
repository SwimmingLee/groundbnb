<template>
    <div>
        <v-text-field
            label=글쓴이
            style="display:inline-block;width:20%">
        </v-text-field>
        <v-text-field 
            label=내용
            style="display:inline-block;width:60%">
        </v-text-field> 
        <v-btn>작성완료</v-btn>
    </div>
</template>

<script>
//import  from '@/components/';
export default {
    name : "CommentFrame"
};
</script>

<style scoped>

</style>