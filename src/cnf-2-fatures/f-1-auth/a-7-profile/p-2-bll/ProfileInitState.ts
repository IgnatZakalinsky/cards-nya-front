export type UserType = {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;

    name: string;
    verified: boolean;

    token: string;
    tokenDeathTime: number;

    created: Date;
    updated: Date;
}

export type ProfileStateType = {
    loading: boolean;
    success: boolean;
    error: string;

    user: UserType
}

export const ProfileInitState: ProfileStateType = {
    loading: false,
    success: false,
    error: '',

    user: {
        _id: '0',
        email: '',
        rememberMe: false,
        isAdmin: false,

        name: 'fake',
        verified: false,

        token: '',
        tokenDeathTime: 0,

        created: new Date(),
        updated: new Date(),
    }
};
