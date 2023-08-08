import "./App.css";
import Modal from "react-modal";
import React, { useState } from "react";

Modal.setAppElement("#root");
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Open model
      </button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            background: "grey",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <button
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default App;
