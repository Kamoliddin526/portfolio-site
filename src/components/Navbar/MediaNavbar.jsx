import React, { useState } from "react";
import { Modal } from "antd";
import MediaIcons from './MediaIcons.jpg'

const MediaNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="main__navbar">
        <div className="icon__nav">
            <div className="media__time">9:41</div>
            <div className="media__icons">
                 <img src={MediaIcons} alt="" />
            </div>
        </div>
        <div className="media__navbar">
      <button className="dot__wrapper" onClick={showModal}>
        <div className="dotOne"></div>
        <div className="dotSecond"></div>
        <div className="dotThree"></div>
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        closable={false}
      >
        
      </Modal>
      <div className="media__logo">
        <h2>trxvl.</h2>
      </div>
        </div>
    </div>
  );
};

export default MediaNavbar;
