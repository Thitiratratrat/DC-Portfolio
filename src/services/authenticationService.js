class AuthenticationService {
  constructor(axiosClient) {
    this.client = axiosClient;
    this.STUDENT_URL = 'student';
    this.INSTITUTE_URL = 'institute';
    this.EMPLOYER_URL = 'employer';
  }

  async login(phoneNumber) {
    try {
      const response = await this.client.post('/account/login', {
        phoneNumber,
      });

      return response.data;
    } catch (err) {
      console.log(err.response.data);

      return false;
    }
  }

  async registerStudent(firstname, lastname, gender, birthday, phoneNumber) {
    try {
      await this.client.post(`${this.STUDENT_URL}`, {
        firstName: firstname,
        lastName: lastname,
        gender,
        birthday,
        phoneNumber,
      });
    } catch (err) {
      console.log(err.response);

      throw new Error();
    }
  }

  async registerInstitute(instituteName, location, description, phoneNumber) {
    try {
      await this.client.post(`${this.INSTITUTE_URL}`, {
        instituteName,
        location,
        description,
        phoneNumber,
      });
    } catch (err) {
      console.log(err.response.data);

      throw new Error();
    }
  }

  async registerEmployer(firstname, lastname, company, position, phoneNumber) {
    try {
      await this.client.post(`${this.EMPLOYER_URL}`, {
        firstName: firstname,
        lastName: lastname,
        company,
        position,
        phoneNumber,
      });
    } catch (err) {
      console.log(err.response);

      throw new Error();
    }
  }

  async verifyStudent(code, studentFirstName) {
    try {
      await this.client.post(`${this.STUDENT_URL}/verify`, {
        studentFirstName,
        code,
      });
    } catch (err) {
      console.log(err.response);

      throw new Error();
    }
  }

  async verifyInstitute(code, instituteName) {
    try {
      await this.client.post(`${this.INSTITUTE_URL}/verify`, {
        instituteName,
        code,
      });
    } catch (err) {
      console.log(err.response);

      throw new Error();
    }
  }

  async verifyEmployer(code, employerName) {
    try {
      await this.client.post(`${this.EMPLOYER_URL}/verify`, {
        employerName,
        code,
      });
    } catch (err) {
      console.log(err.response);

      throw new Error();
    }
  }
}

export default AuthenticationService;
