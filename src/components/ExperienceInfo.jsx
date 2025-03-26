function ExperienceInfo() {
    return (
        <div className="experience-info spacer">
            <h2>Experience</h2>
            <div className="form-group spacer">
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" name="company" required />
                <label htmlFor="position">Position:</label>
                <input type="text" id="position" name="position" required />
                <label htmlFor="responsibilities">Main responsibilities:</label>
                <textarea id="responsibilities" name="responsibilities" required />
                <label htmlFor="dateFrom">From:</label>
                <input type="text" id="dateFrom" name="dateFrom" required />
                <label htmlFor="dateUntil">Until:</label>
                <input type="text" id="dateUntil" name="dateUntil" required />
            </div>
        </div>
    );
}

export default ExperienceInfo;
