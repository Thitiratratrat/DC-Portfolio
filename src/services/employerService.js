class EmployerService {
  constructor(axiosClient) {
    this.client = axiosClient;
    this.BASE_URL = 'student';
  }

  async requestConsent(studentname, employername) {
    try {
      await this.client.post(`${this.BASE_URL}/request`, {
        studentname,
        employername,
      });
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async getStudentDetail(studentname, employername) {
    try {
      const response = await this.client.post(`${this.BASE_URL}/detail`, {
        studentname,
        employername,
      });

      return response.data;
    } catch (err) {
      console.log(err.response.data);

      return false;
    }
  }

  async searchStudent(filter) {
    try {
      const response = await this.client.post(
        `${this.BASE_URL}/search`,
        filter,
      );

      return response.data;
    } catch (error) {
      console.log(err.response.data);

      return [];
    }
  }
}

export default EmployerService;
