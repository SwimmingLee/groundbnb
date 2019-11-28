<template>
    <div class="signUpFrame" >
        <v-form v-model="valid" >
            <v-container style="width:500;height:500">
                <v-row>
                    <v-text-field label=id>
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field label=password>
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field  label=passwordcheck>
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field  label="이름">
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field  label="닉네임">
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-col
                        cols="12"
                        md="4">
                        <v-text-field label=YYYY>
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4">
                        <v-text-field label=MM>
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4">
                        <v-text-field label=DD>
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