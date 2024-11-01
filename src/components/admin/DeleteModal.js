import React from 'react';
import { Modal } from 'react-bootstrap';
import '../../admin.css';

const DeleteModal = ({ show, onHide, onConfirm }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      className="fixed inset-0 flex items-center justify-center custom-modal-backdrop" // Apply custom class
    >
      <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-md mx-auto">
        <Modal.Header className="flex justify-between items-center border-b-2 pb-2">
          <h5 className="text-xl font-semibold text-gray-800">Confirm Delete Movie</h5>
          <button onClick={onHide} className="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </Modal.Header>
        <Modal.Body className="my-4 text-gray-700">
          Are you sure you want to delete this movie?
        </Modal.Body>
        <Modal.Footer className="flex justify-end gap-3">
          <button
            onClick={onHide}
            className="px-4 py-2 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
          >
            Delete
          </button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default DeleteModal;
