import React from 'react';
import GImageViewer from '../GDImageViewer'
import './ExampleGDrive.css'

const ExampleGDrive = () => {
    const options = {
        style: {
            width: "150px",
            height: "150px"
        },
    
    
        onClick: {
            modal: true,
            newWindow: false
        },

    
        exclude: {
            "1.jpg": true
        },
    

        attachClass: {
            "2.jpg": "test"
        },
    

        attachId: {
            "2.jpg": "test2"
        },
    
        hover: true,
        imageContainerClass: "inline",
        parentContainerClass: "main-content"
    }

    const keys = {
        gkey: "YOUR_KEY_HERE", //change this to your key
        dirId: "1HbRyDdXLnhmnDRj4n8eXnexKbEr2bw1N" //change this to your directory key
    }
    
    return(
        <>
        <h1>Example React-GDrive-Image-Viewer</h1>
        <GImageViewer keys={keys} options={options}/>
        <a className={"text"} rel="noopener noreferrer" href={`https://drive.google.com/drive/u/2/folders/${keys.dirId}`} target="_blank">Open folder on Google Drive with ID: {keys.dirId}</a>
        </>
    )
}

export default ExampleGDrive;