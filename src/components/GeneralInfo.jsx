function GeneralInfo() {
    return (
        <div className="general-info spacer">
            <h2>General Information</h2>
            <div className="form-group spacer">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required />
            </div>
        </div>
    );
}

export default GeneralInfo;
