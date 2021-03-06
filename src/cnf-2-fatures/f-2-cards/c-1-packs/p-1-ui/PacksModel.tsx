import React from "react";
import {TableNyaModelType} from "../../../../cnf-0-common/c-1-ui/table/TableNya";
import {PackType} from "../p-2-bll/PacksInitState";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";
import {PATH} from "../../../../cnf-1-main/m-1-ui/main/routes/Pages";

export const packsModel = (
    add: () => void,
    del: (id: string) => void,
    update: (id: string) => void,
): TableNyaModelType[] => [
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
    {
        title: (index, loading) => (
            <div key={'buttons-title-' + index} style={{width: 150}}>
                <ButtonNya onClick={add}>add</ButtonNya>
            </div>
        ),
        render: (dataItem: PackType, modelIndex, dataIndex, loading) => (
            <div key={'buttons-cell-' + dataItem._id} style={{width: 250}}>
                <ButtonNya onClick={() => del(dataItem._id)}>del</ButtonNya>
                <ButtonNya onClick={() => update(dataItem._id)}>update</ButtonNya>
                <LinkNya to={PATH.CARDS + '/' + dataItem._id}>cards</LinkNya>
                <LinkNya to={PATH.LEARN + '/' + dataItem._id}>learn</LinkNya>
            </div>
        )
    },

];
