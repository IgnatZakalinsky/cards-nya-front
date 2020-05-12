import React, {useEffect} from "react";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {getPacks} from "../p-2-bll/getPacksThunk";
import TableNya from "../../../../cnf-0-common/c-1-ui/table/TableNya";
import {packsModel} from "./PacksModel";

const PacksContainer = React.memo(() => {
    const {packs} = useSelector((store: AppStoreType) => store.packs);

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('PacksContainer useEffect');

        dispatch(getPacks());

        return () => {
            console.log('PacksContainer useEffect off');
        }
    }, [dispatch]);

    DEV_VERSION && console.log('render PacksContainer');
    return (
        <div>
            <TableNya model={packsModel} data={packs}/>
        </div>
    )
});

export default PacksContainer;
