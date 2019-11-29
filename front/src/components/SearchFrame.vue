<template>
    <div class="searchFrame">
        <h1>검색</h1>
        
        <div class="searchInput">
            <div class="destination">
            <h3>목적지</h3>
            <v-text-field label="목적지를 입력하세요"
                        style="width:200"
                        single-line></v-text-field>
            
            </div>
            <div>
                <a v-bind:href="/search/">
                    <v-btn>검색</v-btn>
                </a>
            </div>
            <!--
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
            -->
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