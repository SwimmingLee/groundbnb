<template>
    <div class="reserveStepper">
        <v-stepper>
            <v-stepper-header>
                <v-stepper-step
                    editable=true
                    step=1>
                    게스트 정보 확인
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step
                    editable=true
                    step=2>
                    숙소 이용규칙 확인
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step
                    editable=true
                    step=3>
                    결제 확인
                </v-stepper-step>
            </v-stepper-header>
        </v-stepper>
    </div>
</template>

<script>
//import  from '@/components/';
export default {
    name : "StepperFrame"
};
</script>

<style scoped>

</style>