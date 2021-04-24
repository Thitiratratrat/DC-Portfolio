import axios from 'axios';
import AuthenticationService from '../services/authenticationService';
import StudentService from '../services/studentService';
import EmployerService from '../services/employerService';
import InstituteService from '../services/instituteService';

const client = axios.create({baseURL: 'http://34.117.208.133/api/'});
const authenticationService = new AuthenticationService(client);
const studentService = new StudentService(client);
const employerService = new EmployerService(client);
const instituteService = new InstituteService(client);

export {
  authenticationService,
  studentService,
  employerService,
  instituteService,
};
