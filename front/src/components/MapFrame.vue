
<template>
  <div>
    <h2>지도</h2>
    <div class="google-map" ref="googleMap"></div>
    <GmapMap
      :options="{
    zoomControl: true,
    mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: true,
   disableDefaultUi: false
   }"
      :center="{lat:36.8151,lng:127.1139}"
      :zoom="15"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>

export default {
    name : "MapFrame",
  props: {
    mapConfig: Object,
    apiKey: String,
  },

  data() {
    return {
      lati:location.latitude,
      lngi:location.longitude
    }
  },
}
</script>