<template>
  <div>
    <h1>Show Airplane By ID</h1>
    <p>id: {{ airplane.id }}</p>
    <p>AirplaneName: {{ airplane.airplanename }}</p>
    <p>Manufacturer: {{ airplane.manufacturer }}</p>
    <p>Model: {{ airplane.model }}</p>
    <p>Status: {{ airplane.status }}</p>
    <div><button @click="navigateTo('/airplane/edit/' + airplane.id)">edit</button>
      <button @click="navigateTo('/airplanes')">กลับ</button>
    </div>
  </div>
</template>
<script>
import AirplaneService from "@/services/AirplaneService";

export default {
  data() {
    return {
      airplane: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let airplaneId = this.$route.params.airplaneId;
      this.airplane = (await AirplaneService.show(airplaneId)).data;
      console.log(this.airplane);
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>