class StudentService {
  constructor(axiosClient) {
    this.client = axiosClient;
    this.BASE_URL = 'student';
  }

  async getRequestList(studentname) {
    try {
      const response = await this.client.post(`${this.BASE_URL}/requestlist`, {
        studentname,
      });

      return response.data;
    } catch (err) {
      console.log(err.response.data);

      return [];
    }
  }

  async approveRequest(studentname, employername) {
    try {
      await this.client.post(`${this.BASE_URL}/approve`, {
        studentname,
        employername,
      });
    } catch (err) {
      console.log(err.response.data);

      throw new Error();
    }
  }

  async rejectRequest(studentname, employername) {
    try {
      await this.client.post(`${this.BASE_URL}/reject`, {
        studentname,
        employername,
      });
    } catch (err) {
      console.log(err.response.data);

      throw new Error();
    }
  }

  async exportToPDF(data) {
    try {
      const response = await this.client.post(
        'https://ifap-export-to-pdf-qoicwzb3ma-as.a.run.app/export',
        data,
        {
          responseType: 'blob',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/pdf',
          },
        },
      );

      return response.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async getAcademicPortfolio(studentFirstName) {
    try {
      const response = await this.client.get(
        `${this.BASE_URL}/academic-portfolio`,
        {params: {studentFirstName}},
      );

      return response.data;
    } catch (error) {
      console.log(error.response.data);

      return false;
    }
  }

  async saveAcademicPortfolio(portfolio) {
    try {
      await this.client.post(`${this.BASE_URL}/academic-portfolio`, portfolio);
    } catch (error) {
      console.log(error.response.data);

      throw new Error();
    }
  }

  async getInstitutes() {
    try {
      const response = await this.client.get('/institute');

      return response.data;
    } catch (err) {
      console.log(err.response.data);

      return [];
    }
  }
}

export default StudentService;
