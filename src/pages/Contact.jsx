import { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.css";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = form;

        if (!name || !email || !message) {
            alert("Please enter your name, email, and message.");
            return;
        }

        const templateParams = {
            name,
            email,
            message
        };

        emailjs.send(
            "service_8k8xc2g",
            "template_f0fnsre",
            templateParams,
            "NKICBVMFnItHvIN6z"
        )
            .then(() => {
                alert("Your information has been submitted");

                setForm({
                    name: "",
                    email: "",
                    message: ""
                });
            })
            .catch((error) => {
                alert("There was an error sending your message. Please try again.");
                console.log("Error:", error);
            });
    };

    return (
        <div className="page contact-page">
            <h1>Contact Me</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <label htmlFor="email">Email:</label>
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                />

                <button type="submit" className="button">Submit</button>
                <button type="button" className="button" onClick={() =>
                    setForm({name: "", email: "", message: ""})
                }>
                    Clear
                </button>
            </form>
        </div>
    );
}

export default Contact;