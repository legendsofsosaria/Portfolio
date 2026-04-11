import resumeData from "../data/resumeData";

function Resume() {
    return (
        <>
            <aside>
                <a href="/ElizabethHouseResume.pdf" download>Download My
                    Resume</a>
            </aside>
            <article id="resume-pdf">

                <h1>{resumeData.name}</h1>

                {/* CONTACT */}
                <section>
                    <p>
                        <a href={`mailto:${resumeData.contact.email}`}>
                        {resumeData.contact.email}
                        </a>{" "}
                        | {resumeData.contact.phone}
                    </p>
                    <p>
                        <a href={resumeData.contact.github}>GitHub</a>
                    </p>
                </section>

                {/* OBJECTIVE */}
                <section>
                    <h2>Objective</h2>
                    <p>{resumeData.objective}</p>
                </section>

                {/* HIGHLIGHTS */}
                <section>
                    <h2>Highlights of Qualifications</h2>
                    <ul>
                        {resumeData.highlights.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </section>

                {/* SKILLS */}
                <section>
                    <h2>Technical Skills</h2>
                    <h3>Languages</h3>
                    <p><strong>Advanced:</strong> {resumeData.skills.languages.advanced.join(", ")}</p>
                    <p><strong>Proficient:</strong> {resumeData.skills.languages.proficient.join(", ")}</p>
                    <p><strong>Familiar:</strong> {resumeData.skills.languages.familiar.join(", ")}</p>
                    <br></br>
                    <h3>Tools</h3>
                    <p><strong>Advanced:</strong> {resumeData.skills.tools.advanced.join(", ")}</p>
                    <p><strong>Proficient:</strong> {resumeData.skills.tools.proficient.join(", ")}</p>
                    <p><strong>Familiar:</strong> {resumeData.skills.tools.familiar.join(", ")}</p>
                    <br></br>
                    <h3>Concepts</h3>
                    <p><strong>Advanced:</strong> {resumeData.skills.concepts.advanced.join(", ")}</p>
                    <p><strong>Proficient:</strong> {resumeData.skills.concepts.proficient.join(", ")}</p>
                    <p><strong>Familiar:</strong> {resumeData.skills.concepts.familiar.join(", ")}</p>
                </section>

                {/* EDUCATION */}
                <section>
                    <h2>Education</h2>
                    {resumeData.education.map((edu, i) => (
                        <div className="resume-entry" key={i}>

                            {/* ROW 1 */}
                            <div className="resume-top-row">
                                <h3>{edu.title}</h3>
                                <span className="resume-dates">{edu.dates}</span>
                            </div>

                            {/* ROW 2 */}
                            <div className="resume-school">
                                {edu.school} — {edu.location}
                            </div>

                            {/* ROW 3 (GPA + EXTRA SAME LINE) */}
                            {(edu.gpa || edu.extra) && (
                                <div className="resume-meta">
                                    {edu.gpa && <span>GPA: {edu.gpa}</span>}
                                    {edu.gpa && edu.extra && <span> | </span>}
                                    {edu.extra && <span>{edu.extra}</span>}
                                </div>
                            )}

                        </div>
                    ))}
                </section>

                {/* EXPERIENCE */}
                <section>
                    <h2>Work Experience</h2>

                    {resumeData.experience.map((job, i) => (
                        <div className="resume-entry" key={i}>

                            {/* TOP ROW */}
                            <div className="resume-top-row">
                                <h3>{job.title}</h3>
                                <span className="resume-dates">{job.dates}</span>
                            </div>

                            {/* COMPANY */}
                            <div className="resume-school">
                                <strong>{job.company}</strong> — {job.location}
                            </div>

                            {/* BULLETS */}
                            <ul>
                                {job.bullets.map((b, j) => (
                                    <li key={j}>{b}</li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </section>

                {/* PROJECTS */}
                <section>
                    <h2>Projects</h2>

                    {resumeData.projects.map((project, i) => (
                        <div className="resume-entry" key={i}>
                            <h3>{project.name}</h3>
                            <p><em>{project.tech}</em></p>
                            <ul>
                                {project.bullets.map((b, j) => (
                                    <li key={j}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

            </article>
        </>
    );
}

export default Resume;