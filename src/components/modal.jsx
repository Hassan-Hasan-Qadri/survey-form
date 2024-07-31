import Form from "./form";
import Stars from "./stars";

function Modal({ isOpen, onClose, shapeName, markDone }) {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted for:', shapeName);
    markDone(shapeName);
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal-overlay">
        <Stars/>

      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Form for {shapeName}</h2>
        <Form handleSubmit = {handleSubmit}/>
      </div>
    </div>
  );
}

export default Modal;
