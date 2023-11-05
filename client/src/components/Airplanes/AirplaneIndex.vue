<template>
  <div>
    <h2>Get All Airplanes</h2>
    <h4>จํานวนเครื่องบินทั้งหมด {{ airplanes.length }} ลำ</h4>
    <div><button @click="navigateTo('/airplane/create')">เพื่มข้อมูล Airplane</button>
      <button @click="navigateTo('/users')">กลับไป Users</button>
    </div>
    <hr>
    <div v-for="airplane in airplanes" v-bind:key="airplane.id">
      <p>id: {{ airplane.id }}</p>
      <p>AirplaneName: {{ airplane.airplanename }}</p>
      <p>Manufacturer: {{ airplane.manufacturer }}</p>
      <p>Model: {{ airplane.model }}</p>
      <p>Status: {{ airplane.status }}</p>
      <div><button v-on:click="navigateTo('/airplane/' + airplane.id)">ดูข้อมูล</button>
        <button @click="navigateTo('/airplane/edit/' + airplane.id)">edit</button>
        <button @click="deleteAirplane(airplane)">delete</button>
      </div>
      <hr>
    </div>
  </div>
</template>
<script>
import AirplaneService from "@/services/AirplaneService";

export default {
  data() {
    return {
      airplanes: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteAirplane(airplane) {
      let result = confirm("Want of delete?");
      if (result) {
        try {
          await AirplaneService.delete(airplane);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.airplanes = (await AirplaneService.index()).data;
    }
  },
  async created() {
    try {
      this.airplanes = (await AirplaneService.index()).data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>