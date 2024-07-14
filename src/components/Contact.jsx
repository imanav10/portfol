import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <button className="btn btn-primary" onClick={toggleModal}>
        Open Contact Modal
      </button>

      {showModal && (
        <Draggable>
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title" style={{color: 'black'}}>Contact</h2>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggleModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {/* Form content */}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={toggleModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default Contact;