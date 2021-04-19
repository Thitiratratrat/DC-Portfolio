import axios from 'axios';
import AuthenticationService from '../services/authenticationService';

const client = axios.create({baseURL: 'https://www.intouch-api.page/'});
const authenticationService = new AuthenticationService(client);

export {authenticationService};
