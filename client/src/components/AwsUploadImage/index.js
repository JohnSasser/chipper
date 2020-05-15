import React, { useContext, useState, useEffect } from 'react';
import AwsUploadContext from '../AwsUploadContext';
import axios from 'axios';
import $ from 'jquery';


const AwsUploadImage = function () {
    const { fileState, setFileState } = useContext(AwsUploadContext);

    useEffect(() => {

    }, []);

    const singleFileChangedHandler = (event) => {
        setFileState({
            selectedFile: event.target.files[0]
        });
    };

    const singleFileUploadHandler = (event) => {
        event.preventDefault();
        const data = new FormData();// If file selected
        if (fileState.selectedFile) {
            data.append('profileImage', fileState.selectedFile, fileState.selectedFile.name);
            axios.post('/profile-img-upload', data, {
                headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
                .then((response) => {
                    if (200 === response.status) {
                        // If file size is larger than expected.
                        if (response.data.error) {
                            if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                                ocShowAlert('Max size: 2MB', 'red');
                            } else {
                                console.log("response.data awsupload.js l38:", response.data);// If not the given file type
                                ocShowAlert(response.data.error, 'red');
                            }
                        } else {
                            // Success
                            let fileData = response.data;
                            console.log('filedata', fileData);
                            setFileState({ ...fileState, recentImageURL: fileData.location })
                            ocShowAlert('File Uploaded', '#3089cf');
                        }
                    }
                }).catch((error) => {
                    // If another error
                    ocShowAlert(error, 'red');
                });
        } else {
            // if file not selected throw error
            ocShowAlert('Please upload file', 'red');
        }
    };

    const ocShowAlert = (message, background = '#3089cf') => {
        let alertContainer = document.querySelector('#oc-alert-container'),
            alertEl = document.createElement('div'),
            textNode = document.createTextNode(message);
        alertEl.setAttribute('class', 'oc-alert-pop-up');
        $(alertEl).css('background', background);
        alertEl.appendChild(textNode);
        alertContainer.appendChild(alertEl);
        setTimeout(function () {
            $(alertEl).fadeOut('slow');
            $(alertEl).remove();
        }, 3000);
    };

    console.log(fileState);

    return (
        <div className="container">
            {/* For Alert box*/}
            <div id="oc-alert-container"></div>
            {/* Single File Upload*/}
            <div className="card border-light mb-1 mt-3" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
                <div className="card-header">
                    <h5 style={{ color: '#555', marginLeft: '12px' }}>Upload Pet Picture</h5>
                    <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px ( Max 2MB )</p>
                </div>
                <div className="card-body">
                    <p className="card-text">Please upload an image for your profile</p>
                    <input type="file" onChange={singleFileChangedHandler} />
                    <div className="mt-5">
                        <button className="btn btn-info" onClick={singleFileUploadHandler}>Upload!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AwsUploadImage;