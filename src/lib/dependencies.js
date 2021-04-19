import axios from 'axios';
import AuthenticationService from '../services/authenticationService';

const client = axios.create({baseURL: 'http://34.117.208.133/'});
const authenticationService = new AuthenticationService(client);

export {authenticationService};
