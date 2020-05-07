import React, {ReactNode} from "react";
import {RouteComponentProps} from "react-router-dom";
import LoginPage from "../../../../cnf-2-fatures/f-1-auth/a-1-login/l-1-ui/LoginPage";
import RegisterPage from "../../../../cnf-2-fatures/f-1-auth/a-2-register/r-1-ui/RegisterPage";

export type PageType = {
    id: number;
    title: string;
    path?: string;
    params?: string;
    exact?: boolean;
    page: (props: RouteComponentProps<any>) => ReactNode;
};

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
};

export const pages: PageType[] = [
    {id: 0, title: 'login', path: PATH.LOGIN, exact: true, page: () => <LoginPage/>},
    {id: 1, title: 'register', path: PATH.REGISTER, exact: true, page: () => <RegisterPage/>},
    // {
    //     id: 2, title: 'profile', path: PATH.PROFILE, params: '/:id', exact: true,
    //     page: (p) => <div>{p.match.params.id}</div>
    // },
    {id: 2, title: 'profile', path: PATH.PROFILE, exact: true, page: () => <div>pr</div>},

    {id: 9999, title: 'error404', page: () => <div>error404</div>}
];
