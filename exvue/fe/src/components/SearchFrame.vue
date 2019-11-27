<template>
    <div class="searchFrame">
        <h1>검색</h1>
        
        <div class="searchInput">
            <div class="destination">
            목적지
            <v-input
                :messages="['목적지를 입력하세요']"></v-input>
            </div>

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
        <div class="searchButton">
            <v-btn >검색</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name : 'SearchFrame'
};
</script>

<style scoped>

</style>