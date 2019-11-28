<template>
    <div>
        <div style="float:left;width:50%">
            <h3>긍정적인 리뷰</h3>
                <ul style="list-style:none;padding-left:0px;">
                    <li v-for="item in items" :key="item">
                    <review-frame ></review-frame>
                    </li>
                </ul>
        </div>
        <div style="float:right;width:50%">
            <h3>부정적인 리뷰</h3>
            <ul style="list-style:none;padding-left:0px;">
                    <li v-for="item in items" :key="item">
                    <review-frame></review-frame>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
import ReviewFrame from '@/components/ReviewFrame';
export default {
    name :  "ReviewPopUp",
    components:{
        ReviewFrame
    },
    data() {
        var arrNumber = new Array();
        for (var i =0 ; i<10; i++)
        arrNumber[i] =i;
        return {items:arrNumber};
    }
};
</script>

<style scoped>

</style>