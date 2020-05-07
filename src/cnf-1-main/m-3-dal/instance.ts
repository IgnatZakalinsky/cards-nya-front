import axios from "axios";
import {DEV_VERSION} from "../../config";

export const baseURL = DEV_VERSION
    ? 'http://localhost:7542/'
    : 'https://cards-nya-back.herokuapp.com/';

export const instance = axios.create({
    baseURL
});
