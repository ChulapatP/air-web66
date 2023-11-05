<template>
  <div>
    <h1>Create Airplane</h1>
    <form v-on:submit.prevent="createAirplane">
      <p>AirplaneName: <input type="text" v-model="airplane.airplanename"></p>
      <p>Manufacturer: <input type="text" v-model="airplane.manufacturer"></p>
      <p>Model: <input type="text" v-model="airplane.model"></p>
      <p>Status: <input type="text" v-model="airplane.status"></p>
      <p><button type="submit">create Airplane</button></p>
    </form>
  </div>
</template>
<script>
import AirplaneService from '@/services/AirplaneService'
export default {
  data() {
    return {
      airplane: {
        airplanename: '',
        manufacturer: '',
        model: '',
        status: '',
      }
    }
  },
  methods: {
    async createAirplane() {
      try {
        await AirplaneService.post(this.airplane)
        this.$router.push({
          name: 'airplanes'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped></style>