class InstituteService {
  constructor(axiosClient) {
    this.client = axiosClient;
    this.BASE_URL = 'student';
  }

  async searchStudents(queryParam) {
    try {
      const response = await this.client.get(
        `${this.BASE_URL}/search-by-institute`,
        {
          params: {...queryParam},
        },
      );

      return response.data;
    } catch (err) {
      console.log(err.response.data);

      return [];
    }
  }

  async getStudentFiles(studentName) {
    try {
      const response = await this.client.get(`${this.BASE_URL}/files`, {
        params: {studentName},
      });

      return response.data;
    } catch (error) {
      console.log(error.reponse.data);

      return [];
    }
  }

  async uploadFile(studentName, file, fileName) {
    const formData = new FormData();

    formData.append('file', {
      uri: file,
      name: fileName,
      type: 'application/pdf',
    });

    try {
      await this.client.post(`/institute/upload`, formData, {
        params: {studentName},
      });
    } catch (error) {
      console.log(error.response.data);
    }
  }
}

export default InstituteService;
