# react-gdrive-image-viewer

This library lets you use your Google Drive as a mini data storage to view your Google Drive images on a custom page.

## Benefits
* **Easy to use**: Updating photos displayed on a webpage can be done easily by adding the images in a Google Drive directory.
* **No authentication required**: Use of the API does not require OAuth authentication. Simply your API key.
* **Secure**: Google API console ensures that all requests using your API key are narrowed to a specific host address.
* **Flexible**: Styling changes can be applied through a JSON passed as a prop to the object.

## Setup

### Create Google API Consle Key

* Naviage to https://console.developers.google.com/ and sign in with your google account.
* Select "Create". Type in your project name and hit "Create".
* On the page it takes you next, press on **"Enable APIs and Service"**. Select **"Google Drive API"** from the list and press **"Enable"**.
* On the next page, select **"Create Credentials"**, or from the left panel, select **"Credentials"** and **"Create API Key"**. 
* When asked, select **"Restrict Key"**. In the **"Application restrictions"**, select **"http referrers"**  and add your website as restriction item in **"Website restrictions"**.
* In **API restrictions** sections, select Restrict Key for **Google Drive API**. Click save when done.
* Copy and save your API Key to be used later.

### Setup Google Drive Directory

* Navigate to http://drive.google.com. Find the directory that you want to share. Make sure it only contains images in formats readable by Google Drive and your targeted browser.
* **NOTE: THIS DIRECTORY WILL BE ACCESSIBLE BY ANYONE WITH A LINK AND ACCESSIBLE TO THE PUBLIC. MAKE SURE YOU DO NOT HAVE ANY SENSITIVE INFORMATION IN THIS DIRECTORY.**
* Right click on the directory and select **"Get Sharable Link"**. Copy the link and extract the id from it.
* The id can be extracted as follows **https://drive.google.com/open?id=ID_GOES_HERE**
* Now that you have your directory ID and Google API Key, we are ready to use this react component.

## Use Instructions

### import

```
import GDImageViewer from './path/to/lib/GDImageViewer';
import '/path/to/css/GDImageViewer.css'
```
### keys
```
const keys = {
    gkey: "{GOOGLE_API_KEY}",
    dirId: "{GOOGLE_DRIVE_PUBLIC_DIRECTORY_ID}"
}
```

### options
```
const options = {
    // react style object
    // https://reactjs.org/docs/dom-elements.html#style

    style: {
    },

    // behavior when image is clicked
    // if on click is empty (no modal or newWindow)
    // current tab will show full image
    // if modal true, image opens as overlay
    // on current tab
    // if new window is true, new tab is launched
    // with image url

    onClick: {
        modal: true,
        newWindow: false
    },
    
    //Use name of <FILE_NAME>.<EXTENSION> (image.png) to 
    // specify which images not to render

    exclude: {
        "1.jpg": true
    },


    //Use name of <FILE_NAME>.<EXTENSION> (image.png) to
    //attach className attribute to a specific image

    attachClass: {
        "2.jpg": "test"
    },


    //Use name of <FILE_NAME>.<EXTENSION> (image.png) to
    //attach id attribute to a specific image

    attachId: {
        "2.jpg": "test2"
    },



    // if set true, hover over opacity effect
    // will be set

    hover: true,

    //Container div class for each image
    imageContainerClass: "inline",

    // parent/container of each image container
    parentContainerClass: "main-content"
}

```

### initialize and pass prop
```
<GDImageViewer keys={keys} options={options}>
```

## Example
Checkout `src/example/ExampleGDrive.js` for a working implementation.

## Working Example
Checkout `https://masesk.github.io/react-gdrive-image-viewer` for a working example.