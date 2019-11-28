<template>
    <v-toolbar app color="red accent-3" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <a v-bind:href="'/'">
            <v-img src="@/assets/logo.png" max-width=50></v-img>
            </a>
            <v-spacer></v-spacer>
            <a v-bind:href="'/signin'">
            <v-btn flat>SIGN IN</v-btn>
            </a>
            <a v-bind:href="'/signup'">
            <v-btn color="brown lighten-3">JOIN</v-btn>
            </a>
    </v-toolbar>
</template>

<script>
export default {
    name : 'AppNavigation'
};
</script>

<style scoped>

</style>