<template>
    <v-form v-model="valid" >
        <v-container style="width:500;height:500" >
            <v-row>
                <span>ID</span>
                <v-text-field v-model="userID">
                    id
                </v-text-field>
            </v-row>
            <v-row>
                <span>PASSWORD</span>
                <v-text-field v-model="userPWD" type="password">
                    password
                </v-text-field>
            </v-row>
            <v-row>
                <v-col align="center"> 
                    <v-btn v-on:click="login">로그인</v-btn>
                </v-col>
            </v-row>
        <v-divider>
        </v-divider>
            <v-row>
                <v-col class="text-center">
                    <v-btn color="primary">facebook 으로 접속</v-btn>
                </v-col>
            </v-row>
            <v-row>
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
    name : "SignInFrame",
    data() {
        return {
            userID:{},
            userPWD:{},
            token: {},
        }
    },
    methods: {
        login: function() {
            this.$http.post('/api/user/login', {
            params: {
                userId: this.userID,
                userPwd: this.userPWD
            }
        })
              .then((response) => {
                this.token = response.data.token;
                this.$cookie.set('login_token',this.token, 1);
                this.$router.push("/");
              })
        }
    },
    created() { 
    },
};
</script>

<style scoped>

</style>