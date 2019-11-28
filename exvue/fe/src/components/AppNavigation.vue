<template>
    <v-toolbar app color="red accent-3" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <a v-bind:href="'/'">
            <v-img src="@/assets/logo.png" max-width=50></v-img>
            </a>
            <v-spacer></v-spacer>
            <v-btn flat>SIGN IN</v-btn>
            <v-btn color="brown lighten-3">JOIN</v-btn>
    </v-toolbar>
</template>

<script>
export default {
    name : 'AppNavigation'
};
</script>

<style scoped>

</style>