<template>
  <div>
    <h2>{{ jobInfo.taskname }}</h2>
    <button @click="getAllJobs">getAllJobs</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import jobInfoApi from "../../service/jobInfo";
export default defineComponent({
  setup() {
    let jobInfo: any = reactive({
      taskname: "123",
    });
    async function getAllJobs() {
      console.log("尝试登入");
      const res: any = await jobInfoApi.getAllJobs("");
      console.log("res:", res.data[0].taskname);
      jobInfo.taskname = res.data[0].taskname;
    }
    return {
      jobInfo,
      getAllJobs,
    };
  },
});
</script>

<style scoped>
</style>