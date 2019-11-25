<template>
  <div class="home">
    <booking></booking>
  </div>
</template>

<script>
// @ is an alias to /src
import Booking from '@/components/Booking';

export default {
  name: 'home',
  components: {
    Booking
  }
}
</script>