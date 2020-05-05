import axios from "axios";

export const baseURL = 'https://cards-nya-back.herokuapp.com/';

export const instance = axios.create({
    baseURL
});
