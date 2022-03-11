import axios from "../../utils/index";
//CORS configuration
class IncomeDataService {
  getAll() {
    return axios.get("/income");
  }
  get(id) {
    return axios.get(`/income/${id}`);
  }
  create(data) {
    return axios.post("/income", data);
  }
  update(id, data) {
    return axios.put(`/income/${id}`, data);
  }
  delete(id) {
    return axios.delete(`/income/${id}`);
  }
}
export default new IncomeDataService();
