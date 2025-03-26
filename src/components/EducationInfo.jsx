function EducationInfo() {
    // A section to add your educational experience (school name, title of study and date of study)
    return (
        <div className="education-info spacer">
            <h2>Education</h2>
            <div className="form-group spacer">
                <label htmlFor="school">School:</label>
                <input type="text" id="school" name="school" required />
                <label htmlFor="study">Study:</label>
                <input type="text" id="study" name="study" required />
                <label htmlFor="date">Date:</label>
                <input type="text" id="date" name="date" required />
            </div>
        </div>
    );
}

export default EducationInfo;
