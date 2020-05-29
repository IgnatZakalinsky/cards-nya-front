import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import axios from "axios";
import {DEV_VERSION} from "../../../config";


export const writeFile = (fileName: string, value: string) => {
    const link = document.createElement("a");
    link.href = "data:text/plain;content-disposition=attachment;filename=file," + value;
    link.download = fileName;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export const getFile = (url: string, fileName: string) => {
    // запросить файл
    axios.get(url, {responseType: 'blob'}) // !!! responseType: 'blob'
        .then(({data}) => {
            const blob = new Blob([data], {type : 'image/jpeg'});
            console.log(blob)

            // создать ссылку на файл
            const downloadUrl = window.URL.createObjectURL(blob);

            // создать тег "ссылка" на наш файл
            const link = document.createElement('a');
            link.href = downloadUrl;

            // добавить атрибуты нашему тегу: загрузочный, имя файла
            link.setAttribute('download', fileName);

            // добавить тег в документ
            document.body.appendChild(link);

            // нажать на ссылку
            link.click();

            // удалить тег из документа
            link.remove();
        });
};

const TestPage = () => {

    const inRef = useRef<HTMLInputElement>(null);

    const [code, setCode] = useState(false);
    const [base64, setBase64] = useState(true); // base64 - true, text - false
    const [text, setText] = useState('');
    const [file, setFile] = useState();
    const [fileURL, setFileURL] = useState();
    const [file64, setFile64] = useState();
    const [fileData, setFileData] = useState();

    const upload = (e: ChangeEvent<HTMLInputElement>) => {
        // e.preventDefault();
        const reader = new FileReader();
        const formData = new FormData(); // for send to back

        const newFile = e.target.files && e.target.files[0];

        if (newFile) {
            setFile(newFile);
            setFileURL(window.URL.createObjectURL(newFile));
            formData.append('myFile', newFile, newFile.name);
            setFileData(formData);

            if (code) { // reader
                reader.onloadend = () => {
                    setFile64(reader.result);
                };

                if (base64) reader.readAsDataURL(newFile);
                else reader.readAsText(newFile);
            }
        }
    };

    const send = () => {
        const response = axios.post('https://dry-forest-56016.herokuapp.com/file', fileData);
    };

    DEV_VERSION && console.log('render TestPage');
    return (
        <div>
            TestPage


            FileInput

            <input type="file" accept=".jpg, .jpeg, .png" multiple/>
            <hr style={{width: '100%'}}/>

            <label>
                reader
                <input type={'checkbox'} checked={code} onChange={e => setCode(e.currentTarget.checked)}/>
            </label>
            <label>
                base64
                <input type={'checkbox'} checked={base64} onChange={e => setBase64(e.currentTarget.checked)}/>
            </label>

            <img src={file64} alt={'file'} width={'300px'}/>
            <div>name: {file && file.name}</div>
            <div>lastModified: {file && file.lastModified}</div>
            {/*<div>size: {file && returnFileSize(file.size)}</div>*/}
            <div>type: {file && file.type}</div>

            <input
                ref={inRef}
                type={'file'}
                style={{display: 'none'}}
                onChange={upload}
            />
            <button onClick={() => inRef && inRef.current && inRef.current.click()}>add</button>
            <hr style={{width: '100%'}}/>

            <textarea value={text} onChange={e => setText(e.currentTarget.value)}/>
            <pre>{file64}</pre>
            <button onClick={() => writeFile('Text.txt', text + `\r\n` + file64)}>save</button>
            <button onClick={send}>send</button>
            <button onClick={() => getFile('https://dry-forest-56016.herokuapp.com/' + 'file', 'newFile.jpg')}>get</button>
        </div>
    );
};

export default TestPage;
