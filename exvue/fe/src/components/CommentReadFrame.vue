<template>
    <div>
        <v-text-field
            label=글쓴이
            disabled=true
            style="display:inline-block;width:20%">
        </v-text-field>
        <v-text-field
            label=작성일
            disabled=true
            style="display:inline-block;width:20%">
        </v-text-field>
        <v-text-field 
            label=내용
            disabled=true
            style="display:inline-block;width:60%">
        </v-text-field> 
    </div>
</template>

<script>
//import  from '@/components/';
export default {
    name : "CommentReadFrame"
};
</script>

<style scoped>

</style>