<template>
     <div>
        <div>
             <v-text-field style="width:300"
            label="검색할 지역을 넣어주세요">
            </v-text-field>
            <v-btn>검색</v-btn>
        </div>
        <div>
            <search-toolbar-frame></search-toolbar-frame>
        </div>
        <div>
            <search-result-frame></search-result-frame>
        </div>
    </div>
</template>

<script>
import SearchToolbarFrame from '@/components/SearchToolbarFrame';
import SearchResultFrame from '@/components/SearchResultFrame';
export default {
    name : 'search',
    components :{
        SearchToolbarFrame,
        SearchResultFrame
    }
};
</script>

<style scoped>

</style>