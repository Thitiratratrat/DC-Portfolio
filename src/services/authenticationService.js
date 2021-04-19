class AuthenticationService {
  constructor(axiosClient) {
    this.client = axiosClient;
    this.BASE_URL = 'user';
  }

  async login(phoneNumber) {}

  async registerStudent(firstname, lastname, gender, birthday, phoneNumber) {}

  async registerInstitute(instituteName, location, description, phoneNumber) {}

  async registerEmployer(firstname, lastname, company, position, phoneNumber) {}

  async verfiyOTPCode(OTP) {}
}

export default AuthenticationService;
