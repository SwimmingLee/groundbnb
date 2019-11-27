<template>
    <div>
        <div class="houseInfo">
            <h3>숙소 정보</h3>
                <div style="display:inline-block; width:50%">
                    <v-img src="https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large"
                            width = 200>
                    </v-img>
                </div>
                <div style="display:inline-block; width:50%">
                    XXX하우스
                    <br>서울시 마포구
                    <br>별이 다섯개
                    <br>원래 여기도 프레임화해야되는데
                    <br>
                </div>
        </div>
            
            
        
        <v-divider></v-divider>
        <div class="reserveInfo">
            <h3>이용 정보</h3>
             <div class="schedule">
                <div style="display:inline-block">
                    체크인
                    <v-input
                        :messages="['YYYYMMDD']"></v-input>
                    </div>
                    <div style="display:inline-block">
                    체크아웃
                    <v-input
                        :messages="['YYYYMMDD']"></v-input>
                    </div>
                </div>

                <div class="passenger">
                    <div style="display:inline-block">
                    성인
                    <v-input
                        :messages="['YYYYMMDD']"></v-input>
                    </div>
                    <div style="display:inline-block">
                    어린이
                    <v-input
                        :messages="['YYYYMMDD']"></v-input>
                    </div>
                </div>
        </div>

        <v-divider></v-divider>
        <div class="priceInfo">
            <h3>요금 정보</h3>
            숙박비
            <br>청소비
            <br>수수료
            <v-divider></v-divider>
            총 합계
        </div>
    </div>
</template>

<script>
import HostFrameMini from '@/components/HostFrameMini';
import HostFrame from '@/components/HostFrame';
export default {
    name : "ReserveInfoFrame",
    conponents :{
        HostFrameMini,
        HostFrame,
    }
};
</script>

<style scoped>

</style>