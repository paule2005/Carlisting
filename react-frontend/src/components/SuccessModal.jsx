import './SuccessModal.css';

function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="success-modal-overlay" onClick={onClose}>
      <div className="success-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="success-modal-content">
          <div className="success-checkmark">
            <div className="checkmark-icon">✓</div>
          </div>
          
          <h2 className="success-title">Successfully Ordered!</h2>
          
          <p className="success-message">
            Check your email for other info. We will reach you out.
          </p>
          
          <p className="success-thank-you">
            Thank you for trusting <span className="company-name">CarListing Corporation</span>.
          </p>
          
          <button className="success-ok-btn" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
