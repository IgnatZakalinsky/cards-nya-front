import React, {useState} from "react";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import {updateUser} from "../p-2-bll/updateUserThunk";
import {getUsers} from "../p-2-bll/getUsersThunk";
import { sendGeneralChatMessage } from "../p-2-bll/sendGeneralChatMessageThunk";
import {getGeneralChatMessages} from "../p-2-bll/getGeneralChatMessagesThunk";
import {putGrade} from "../p-2-bll/updateGradeThunk";
import InputNya from "../../../../cnf-0-common/c-1-ui/input/InputNya";

const ProfilePage = () => {
    const {user} = useSelector((store: AppStoreType) => store.profile);
    const [grade, setGrade] = useState("3");
    const [card_id, setCardId] = useState("5ef4caa609127b000481c75b");

    const dispatch = useDispatch();
    const update = () => dispatch(updateUser('nya', 'some avatar'));
    const get = () => dispatch(getUsers());
    const send = () => dispatch(sendGeneralChatMessage());
    const getMessages = () => dispatch(getGeneralChatMessages());
    const addGrade = () => dispatch(putGrade(grade, card_id));

    DEV_VERSION && console.log('render ProfilePage');
    return (
        <div>
            ProfilePage
            <div>{user.name}</div>
            <div>xy</div>
            <div>
                <ButtonNya onClick={update}>set name</ButtonNya>
                <ButtonNya onClick={get}>get users</ButtonNya>
                <ButtonNya onClick={send}>send message</ButtonNya>
                <ButtonNya onClick={getMessages}>get messages</ButtonNya>

                <div>
                    grade
                    <InputNya value={grade} onChange={e => setGrade(e.currentTarget.value)}/>
                    id
                    <InputNya value={card_id} onChange={e => setCardId(e.currentTarget.value)}/>
                    <ButtonNya onClick={addGrade}>put grade</ButtonNya>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;
