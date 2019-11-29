<template>
    <div>
        <div>
            <stepper-frame></stepper-frame>
        </div>
        <v-container>
            <v-row>
                <v-col>
                    <reserve-sub-frame></reserve-sub-frame>
                </v-col>
                <v-col>
                    <reserve-info-frame></reserve-info-frame>
                </v-col>
            </v-row>
            <v-row style="float:right">
                <a v-bind:href="'/reserve' + '/complete/'">
                <v-btn>예약하기!</v-btn>
                </a>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import StepperFrame from '@/components/StepperFrame';
import ReserveInfoFrame from '@/components/ReserveInfoFrame';
import ReserveSubFrame from '@/components/ReserveSubFrame';
export default {
    name : 'reserve',
    components:{
        StepperFrame,
        ReserveInfoFrame,
        ReserveSubFrame
    },
    created() {
      var path = '/api/sharehouse/' + this.$route.params.id
      this.$http.get(path)
              .then((response) => {
                this.room = response.data;
              })
    },
};
</script>

<style scoped>

</style>