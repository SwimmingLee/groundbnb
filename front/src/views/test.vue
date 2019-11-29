<template>
    <div>
        <alert></alert>
        <v-button></v-button>
        <v-button2 @click='dont'></v-button2>
        <v-list>
            <v-list-content @click='gimotti'>
                1
            </v-list-content>
             <v-list-content>
                2
            </v-list-content>
             <v-list-content>
                3
            </v-list-content>
        </v-list>
        <v-calendar></v-calendar>
    </div>
</template>

<script>
// @ is an alias to /src
import Alert from '@/components/test/Alert';
import VButton from '@/components/test/Button'
import VButton2 from '@/components/test/Button2'
export default {
    name: 'test',
    components: {
        Alert,
        VButton,
        VButton2,
  },
      methods: {
        dont () {
            //console.log('누르지 말랬지!')
        }
    }
}
</script>