<template>
    <div style="width:1000">
        <div style="float:left;width:50%">
            <div>
                <h3>체크인/체크아웃</h3>
                <check-in-out-frame v-on:date-handle="DateReceive()"></check-in-out-frame>
             
            </div>
            <div>
                <h3>인원변경</h3>
                    <v-container>
                        <v-row>
                            <v-col>
                                성인
                            </v-col>
                            <v-col>
                                <v-btn icon
                                     v-if="adult > 0"
                                        v-on:click="adult == 0 ? adult = 0: adult--" >
                                    <v-icon>mdi-minus-circle-outline</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-input>{{adult}}</v-input>
                            </v-col>
                            <v-col>
                                <v-btn icon
                                    v-on:click="adult++">
                                    <v-icon>mdi-plus-circle-outline</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                어린이
                            </v-col>
                            <v-col>
                                <v-btn icon
                                    v-if="children > 0"
                                        v-on:click="children == 0 ? children = 0: children--">
                                    <v-icon>mdi-minus-circle-outline</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-input>{{children}}</v-input>
                            </v-col>
                            <v-col>
                                <v-btn icon
                                        v-on:click="children++">
                                    <v-icon>mdi-plus-circle-outline</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                영유아
                            </v-col>
                            <v-col>
                                <v-btn icon
                                    v-if="baby > 0"
                                        v-on:click="baby == 0 ? baby = 0: baby--" >
                                    <v-icon>mdi-minus-circle-outline</v-icon>
                                </v-btn>
                            </v-col>
                            <v-col>
                                <v-input>{{baby}}</v-input>
                            </v-col>
                            <v-col>
                                <v-btn icon
                                        v-on:click="baby++">
                                    <v-icon>mdi-plus-circle-outline</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
            </div>
        </div>
        <div style="float:right;width:50%">
            <div>
                <h3>주의사항</h3>
                DB불러오기
            </div>
            <div>
                <h3>추가규칙</h3>
                DB불러오기
            </div>
            <div>
                <h3>호스트에게 인사하기</h3>
                <v-textarea label="호스트에게 여행 목적을 간단히 설명해주세요"></v-textarea>
                
            </div>
        </div>
    </div>
</template>

<script>
import CheckInOutFrame from '@/components/CheckInOutFrame';
export default {
    name : "ReserveSubFrame",
    components:
    {
        CheckInOutFrame
    },
    data(){
        return {
            adult:0,
            children:0,
            baby:0,
            receiveDate:0,
            trip : {
                start:null,
                end:null
            }
        }
    },
    methods:{
        DateReceive : () => {
            this.trip = this.$store.state.trip;
        }
    }
};
</script>

<style scoped>

</style>