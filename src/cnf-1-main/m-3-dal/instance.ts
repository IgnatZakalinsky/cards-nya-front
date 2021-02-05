import axios from "axios";
import {DEV_VERSION} from "../../config";

export const baseURL = DEV_VERSION
    ? 'http://localhost:7542/1.0/'
    : 'https://cards-nya-back.herokuapp.com/1.0/';

export const instance = axios.create({
    baseURL
});

// 1