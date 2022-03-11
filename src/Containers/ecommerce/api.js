import http from "../utils/index";
//CORS configuration
class IncomeDataService {
  getAll() {
    return http.get("/income");
  }
  get(id) {
    return http.get(`/income/${id}`);
  }
  create(data) {
    return http.post("/income", data);
  }
  update(id, data) {
    return http.put(`/income/${id}`, data);
  }
  delete(id) {
    return http.delete(`/income/${id}`);
  }
}
export default new IncomeDataService();
