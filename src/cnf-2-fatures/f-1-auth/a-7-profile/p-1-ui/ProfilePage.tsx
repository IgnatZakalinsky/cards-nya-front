import React from "react";
import {DEV_VERSION} from "../../../../config";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";

const ProfilePage = () => {
    const {user} = useSelector((store: AppStoreType) => store.profile);

    DEV_VERSION && console.log('render ProfilePage');
    return (
        <div>
            ProfilePage
            <div>{user.name}</div>
        </div>
    );
};

export default ProfilePage;
