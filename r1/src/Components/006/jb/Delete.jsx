export default function Delete() {
  return (
    <div className="modal show">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close"></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}