<template>
    <div>
        <div>
            <stepper-frame></stepper-frame>
        </div>
        <div style="float:left;width=50%">
            이쪽은 stepper에 따라 바뀌는 sub부분
        </div>
        <div style="float:right;width=50%">
            <reserve-info-frame></reserve-info-frame>
        </div>
    </div>
</template>

<script>
import StepperFrame from '@/components/StepperFrame';
import ReserveInfoFrame from '@/components/ReserveInfoFrame';
export default {
    name : 'reserve',
    components:{
        StepperFrame,
        ReserveInfoFrame,
    }
};
</script>

<style scoped>

</style>