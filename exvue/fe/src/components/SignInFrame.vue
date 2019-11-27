<template>
    
         <v-form v-model="valid" >
            <v-container width=200 height=500>
                <v-row  width=200>
                    <v-text-field>
                        id
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field width=300>
                        password
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-col align="center"> 
                        <v-btn>로그인</v-btn>
                    </v-col>
                </v-row>
            </v-container>
            <v-divider>
            </v-divider>
            <v-container>
                <v-row align="center">
                    <v-col class="text-center">
                        <v-btn color="primary" >facebook 으로 접속</v-btn>
                    </v-col>
                </v-row>
                <v-row align="center">
                    <v-col class="text-center">
                        <v-btn>google 으로 접속</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>

</template>

<script>
//import  from '@/components/';
export default {
    name : "SignInFrame"
};
</script>

<style scoped>

</style>