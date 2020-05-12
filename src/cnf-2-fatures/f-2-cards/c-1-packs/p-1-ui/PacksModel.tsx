import React from "react";
import {TableNyaModelType} from "../../../../cnf-0-common/c-1-ui/table/TableNya";
import {PackType} from "../p-2-bll/PacksInitState";

export const packsModel: TableNyaModelType[] = [
    {
        title: (index, loading) => (
            <div key={'name-title-' + index} style={{width: 150}}>Name</div>
        ),
        render: (dataItem: PackType, modelIndex, dataIndex, loading) => (
            <div key={'name-cell-' + dataItem._id} style={{width: 150}}>
                {dataItem.name}
            </div>
        )
    },
    {
        title: (index, loading) => (
            <div key={'grade-title-' + index} style={{width: 150}}>Grade</div>
        ),
        render: (dataItem: PackType, modelIndex, dataIndex, loading) => (
            <div key={'grade-cell-' + dataItem._id} style={{width: 150}}>
                {dataItem.grade}
            </div>
        )
    },

];
