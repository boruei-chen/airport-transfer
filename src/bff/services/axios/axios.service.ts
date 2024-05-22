import axios from 'axios';
import interceptorsService from '@/bff/services/interceptors';

const instance = axios.create();
interceptorsService.interceptorRequest(instance);
interceptorsService.interceptorResponse(instance);

export default instance;
