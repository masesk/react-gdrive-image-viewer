import GDImageViewer from "./GDImageViewer"
import ReactDOM from 'react-dom'
import React from 'react'
const options = {
    style: {
    },
    onClick: {
        modal: true,
        newWindow: false
    },
    hover: false,
    exclude: {
        "3.jpg": true
    },
    attachClass: {
        
    },
    attachId: {

    }
    
}

const data = {
    gkey: "",
    dirId: "",
    header: "name1",
    options: options
}

ReactDOM.render(<GDImageViewer data={data}/>, document.getElementById('root'))