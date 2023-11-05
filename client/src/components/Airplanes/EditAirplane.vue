<template>
  <div>
    <h1>Edit Airplane</h1>
    <form v-on:submit.prevent="editUser">
      <p>AirplaneName: <input type="text" v-model="airplane.airplanename" /></p>
      <p>Manufacturer: <input type="text" v-model="airplane.manufacturer" /></p>
      <p>Model: <input type="text" v-model="airplane.model" /></p>
      <p>Status: <input type="text" v-model="airplane.status" /></p>
      <p><button type="submit">Edit</button></p>
    </form>
    <hr />
    <div>
      <p>AirplaneName: {{ airplane.airplanename }}</p>
      <p>Manufacturer: {{ airplane.manufacturer }}</p>
      <p>Model: {{ airplane.model }}</p>
      <p>Status: {{ airplane.status }}</p>
      <p></p>
    </div>
  </div>
</template>
<script>
import AirplaneService from "@/services/AirplaneService";
export default {
  data() {
    return {
      airplane: {
        airplanename: "",
        manufacturer: "",
        model : "",
        status: "",
      }
    };
  },
  methods: {
    async editUser() {
      try {
        await AirplaneService.put(this.airplane);
        this.$router.push({
          name: "airplanes"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let airplaneId = this.$route.params.airplaneId;
      this.airplane = (await AirplaneService.show(airplaneId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>