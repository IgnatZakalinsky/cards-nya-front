import React from "react";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import {getPacks} from "../p-2-bll/getPacksThunk";
import {addPack} from "../p-2-bll/addPackThunk";

const PacksPage = () => {
    // const {user} = useSelector((store: AppStoreType) => store.profile);
    const dispatch = useDispatch();

    const getPacksCallback = () => dispatch(getPacks());
    const addPackCallback = () => dispatch(addPack());

    DEV_VERSION && console.log('render PacksPage');
    return (
        <div>
            PacksPage

            <ButtonNya onClick={getPacksCallback}>get</ButtonNya>
            <ButtonNya onClick={addPackCallback}>add</ButtonNya>
        </div>
    );
};

export default PacksPage;
