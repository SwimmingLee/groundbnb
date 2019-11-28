<template>
    <v-app id="inspire" style="height:200">
        <v-container>
           <v-row
            justify="space-around"
            no-gutters
          >
            <v-col cols="3">
              <v-menu
                ref="startMenu"
                :close-on-content-click="false"
                :return-value.sync="trip.start"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="trip.start"
                    label="Start date"
                    prepend-icon="mdi-calendar-today"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.startMenu.isActive = false"
                  >Cancel</v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="DateHandling()"
                  >OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
  
            <v-col cols="3">
              <v-menu
                ref="endMenu"
                :close-on-content-click="false"
                :return-value.sync="trip.end"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="trip.end"
                    label="End date"
                    prepend-icon="mdi-calendar-today"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.endMenu.isActive = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="DateHandling()"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>  
    </v-app>
</template>

<script>
//import  from '@/components/';
export default {
    name : "CheckInOutFrame",
    data(){
        return{
            date: null,
            trip: {
                start: null,
                end: null,
            }
        }   
    },
    methods: {
        DateHandling: ()=>{
            this.$store.state.trip = this.trip;
            this.$emit('date-handle')
            this.$refs.endMenu.save(this.date);
        }
    },
};
</script>

<style scoped>

</style>