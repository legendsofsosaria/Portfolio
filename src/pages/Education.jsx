import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import transcripts from "../data/educationData.js";

function Education() {

    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <div className="page education-page">
            <article>
            <h1>Education</h1>
            <div>
                <h3>George Brown Polytechnic</h3>
                <p>Computer Programming and Analysis</p>
                <p>GPA: 3.94 | Dean’s List</p>
            </div>

            <div>
                <h3>Thompson Rivers University</h3>
                <p>Computer Science</p>
                <p>GPA: 3.68</p>
            </div>
            <div>
                <h2>Supporting Documents</h2>
                <p>Selected excerpts from academic records.</p>
                <div className="card-gallery">
                    {transcripts.map((item, i) => (
                        <div key={i} className="model-image">
                            <img
                                src={item.src}
                                onClick={() => setActiveIndex(i)}
                                data-bs-toggle="modal"
                                data-bs-target="#transcriptModal"
                            />
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="modal fade"
                id="transcriptModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content bg-dark border-0">

                    <div className="modal-body">

                        <div
                            id="transcriptCarousel"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >

                            {/* indicators */}
                            <div className="carousel-indicators">
                                {transcripts.map((_, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        data-bs-target="#transcriptCarousel"
                                        data-bs-slide-to={i}
                                        className={i === activeIndex ? "active" : ""}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>

                            {/* images */}
                            <div className="carousel-inner">
                                {transcripts.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`carousel-item ${i === activeIndex ? "active" : ""}`}
                                    >
                                        <div className="model-image">
                                            <p>{item.label}</p>
                                            <img
                                                src={item.src}
                                                className="img-fluid"
                                                style={{maxHeight: "90vh", objectFit: "contain"}}
                                                alt={item.label}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* controls */}
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#transcriptCarousel"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon"/>
                            </button>

                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#transcriptCarousel"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon"/>
                            </button>

                        </div>

                    </div>
                    </div>
                </div>
            </div>
            </article>
        </div>
    );
}

export default Education;