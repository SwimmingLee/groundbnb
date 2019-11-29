<template>
    <div>
        <comment-frame></comment-frame>
        <ul style="list-style:none">
            <li v-for="item in items" :key="item">
                <comment-read-frame>
                </comment-read-frame>
            </li>
        </ul>
    </div>
</template>

<script>
import CommentFrame from '@/components/CommentFrame';
import CommentReadFrame from '@/components/CommentReadFrame';
export default {
    name : "CommentListFrame",
    components:{
        CommentFrame,
        CommentReadFrame
    },
    data() {
        var arrNumber = new Array();
        for (var i =0 ; i<5; i++)
        arrNumber[i] =i;
        return {items:arrNumber};
    }
};
</script>

<style scoped>

</style>