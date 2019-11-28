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
                    @click="$refs.startMenu.save(date)"
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
                    @click="$refs.endMenu.save(date)"
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

export default {
    name : "CheckInOutFrame",
    component:{

    },
    data(){
        return{
            date: null,
        }   
    },
    computed: {
      trip() {
        return this.$store.getters.trip;
      }
    }
};
</script>

<style scoped>

</style>