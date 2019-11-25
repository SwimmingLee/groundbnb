<template>
    <div>
        <h1>예약</h1>
        
        <div>
            <div>
            목적지
            <v-input
                :messages="['목적지를 입력하세요']"></v-input>
            </div>

            <div>
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

            <div>
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
    </div>
</template>

<script>
export default {
    name : 'Booking'
};
</script>

<style scoped>

</style>