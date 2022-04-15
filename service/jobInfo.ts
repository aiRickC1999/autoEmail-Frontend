import http from "./http";

const jobInfoApi = {
  getAllJobs(url: string) {
    return http.get("api/getAllJibs", "");
  },
};
export default jobInfoApi;
