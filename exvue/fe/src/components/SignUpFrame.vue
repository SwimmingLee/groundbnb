<template>
    <div class="signUpFrame" >
        <v-form v-model="valid" >
            <v-container width=200 height=500>
                <v-row  width=200>
                    <v-text-field>
                        id
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field>
                        password
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field>
                        passwordcheck
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field>
                        이름
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field>
                        닉네임
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-col
                        cols="12"
                        md="4">
                        <v-text-field>
                            YYYY
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4">
                        <v-text-field>
                            MM
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4">
                        <v-text-field>
                            DD
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col align="center">
                        <v-btn>회원가입</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
//import  from '@/components/';
export default {
    name : "SignUpFrame",
    
};
</script>

<style scoped>

</style>