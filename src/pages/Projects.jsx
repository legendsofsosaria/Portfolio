import { useState } from "react";
import { Modal } from "bootstrap";
import projects from "../data/projectData.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const openModal = (project) => {
        setSelectedProject(project);

        const modalElement = document.getElementById("projectModal");
        const modalInstance = Modal.getOrCreateInstance(modalElement);
        modalInstance.show();
    };

    return (
        <div className="page projects-page">
            <article>
                <div className="p-6 max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">Projects</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="card-gallery cursor-pointer"
                                onClick={() => openModal(project)}
                            >
                                <h2 className="mt-2 text-lg font-semibold">
                                    {project.title}
                                </h2>
                                <p className="text-sm mt-2">{project.images.length} images</p>
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-60 object-cover rounded-lg"
                                />
                                <h4 className="text-sm text-muted">{"Tags: " + project.tags.join(", ")}</h4>
                                {project.github && (
                                    <a
                                        className="github-links"
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        GitHub Link
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- MODAL SECTION --- */}
                <div
                    className="modal fade"
                    id="projectModal"
                    tabIndex="-1"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content bg-dark border-0 text-white">
                            <div className="modal-header border-secondary">
                                <h5 className="modal-title">{selectedProject?.title}</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>

                            <div className="modal-body">

                                {/* CAROUSEL */}
                                <div
                                    key={selectedProject?.id}
                                    id="projectCarousel"
                                    className="carousel slide"
                                >

                                    <div className="carousel-indicators">
                                        {selectedProject?.images.map((_, i) => (
                                            <button
                                                key={i}
                                                type="button"
                                                data-bs-target="#projectCarousel"
                                                data-bs-slide-to={i}
                                                className={i === 0 ? "active" : ""}
                                            />
                                        ))}
                                    </div>

                                    <div className="carousel-inner">
                                        {selectedProject?.images.map((imgSrc, i) => (
                                            <div
                                                key={i}
                                                className={`carousel-item ${i === 0 ? "active" : ""}`}
                                            >
                                                <div className="carousel-fixed d-flex flex-column align-items-center">
                                                    <img
                                                        src={imgSrc}
                                                        alt=""
                                                        style={{maxHeight: "70vh", width: "auto"}}
                                                    />

                                                    <div className="mt-3 text-center">
                                                        <small>{selectedProject?.description}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {selectedProject?.images.length > 1 && (
                                        <>
                                            <button
                                                className="carousel-control-prev"
                                                type="button"
                                                data-bs-target="#projectCarousel"
                                                data-bs-slide="prev"
                                            >
                                                <span className="carousel-control-prev-icon"/>
                                            </button>

                                            <button
                                                className="carousel-control-next"
                                                type="button"
                                                data-bs-target="#projectCarousel"
                                                data-bs-slide="next"
                                            >
                                                <span className="carousel-control-next-icon"/>
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}