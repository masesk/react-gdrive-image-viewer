import React, { useEffect, useState } from "react";
import "./GDImageViewer.css";
function GDImageViewer(data) {
  const [imgIds, setImgIds] = useState([]);

  const [style, setStyle] = useState({});

  const [hover, setHover] = useState(false);

  const [newWindow, setNewWindw] = useState(false);

  const [clickable, setClickable] = useState(false);

  const [modal, setModal] = useState(false);

  const GOOGLE_API_KEY = data.data.gkey;
  const GOOGLE_DRIVE_URL_START =
    "https://www.googleapis.com/drive/v2/files?q=%27";
  const GOOGLE_DRIVE_URL_END = "%27+in+parents&key=";
  const GOOGLE_DRIVE_IMG_URL = "http://drive.google.com/uc?export=view&id=";
  const options = data.data.options;
  useEffect(() => {
    loadData();
    loadSettings(options);
  }, []);

  function loadSettings(options) {
    if (options.style) {
      setStyle(options.style);
    }
    if (options.onClick) {
      setClickable(true);
      if (options.onClick.newWindow) {
        setNewWindw(true);
      }
      if (options.onClick.modal) {
        setModal(true);
      }
    }
    if(options.hover){
      setHover(true)
    }
  }

  async function loadData() {
      await fetch(
        GOOGLE_DRIVE_URL_START +
          data.data.dirId +
          GOOGLE_DRIVE_URL_END +
          GOOGLE_API_KEY
      )
        .then(response => response.json())
        .then(jsonResp => {
          setImgIds(jsonResp.items);
        });
  }

  function ModalView(props) {
    return (
      <div>
        <div id="modal-container" class="modal">
          <span class="close">&times;</span>
          <img class="modal-content" id="curr-modal" />

          <div id="caption"></div>
        </div>
      </div>
    );
  }

  function showModal(imgId) {
    const modal = document.getElementById("modal-container");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    const modalImg = document.getElementById("curr-modal");
    modalImg.src = imgId;
    modal.style.display = "block";
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    };
  }

  return (
    <div>

      {modal && <ModalView/>}

      {imgIds &&
        imgIds.map((item, i) => {
          return (
            <a
              href={!modal && clickable && GOOGLE_DRIVE_IMG_URL + item.id}
              target={newWindow && "_blank"}
            >
              <img
                style={style}
                className={hover ? " gd-img gd-hover" : " gd-img "}
                onClick={() => {modal && showModal(GOOGLE_DRIVE_IMG_URL + item.id)}}
                src={GOOGLE_DRIVE_IMG_URL + item.id}
                key={i}
                alt=""
              />
            </a>
          );
        })}
    </div>
  );
}

export default GDImageViewer;
