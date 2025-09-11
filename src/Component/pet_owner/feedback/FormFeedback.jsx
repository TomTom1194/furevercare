function FormFeedback() {
    return (
        <div className="container col-10 col-md-5 mx-auto my-5 border rounded p-3 ">
            <h2 className="text-primary mb-3 text-center">Feedback Form</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="feedback" class="form-label">Your feedback</label>
                    <textarea class="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Us</button>
            </form>
        </div>
    );
}

export default FormFeedback;