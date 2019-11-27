<template>
    <v-toolbar>
        <v-toolbar-items>
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                <v-btn
                    color="primary"
                    dark
                    v-on="on"
                >
                    날짜
                </v-btn>
                </template>
                <v-list>
                <v-list-item
                >
                    
                </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                <v-btn
                    color="primary"
                    dark
                    v-on="on"
                >
                    날짜
                </v-btn>
                </template>
                <v-list>
                <v-list-item
                >
                    
                </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                <v-btn
                    color="primary"
                    dark
                    v-on="on"
                >
                    인원
                </v-btn>
                </template>
                <v-list>
                <v-list-item
                >
                    
                </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                <v-btn
                    color="primary"
                    dark
                    v-on="on"
                >
                    숙소 유형
                </v-btn>
                </template>
                <v-list>
                <v-list-item
                >
                    
                </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                <v-btn
                    color="primary"
                    dark
                    v-on="on"
                >
                    가격
                </v-btn>
                </template>
                <v-list>
                <v-list-item
                >
                    
                </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                <v-btn
                    color="primary"
                    dark
                    v-on="on"
                >
                    호스트 언어
                </v-btn>
                </template>
                <v-list>
                <v-list-item
                >
                    
                </v-list-item>
                </v-list>
            </v-menu>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                <v-btn
                    color="primary"
                    dark
                    v-on="on"
                >
                    상세조건
                </v-btn>
                </template>
                <v-list>
                <v-list-item
                >
                    
                </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
//import  from '@/components/';
export default {
    name : "SearchToolbarFrame",
 
};
</script>

<style scoped>

</style>