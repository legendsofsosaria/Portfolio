import { useState } from "react";
import emailjs from "@emailjs/browser";
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, message } = form;

        if (!name || !email || !message) {
            alert("Please enter your name, email, and message.");
            return;
        }

        try {
            const response = await emailjs.send(
                "service_8k8xc2g",
                "template_f0fnsre",
                {
                    name,
                    email,
                    message
                },
                "NKICBVMFnItHvIN6z"
            );

            console.log({ name, email, message });

            console.log("SUCCESS!", response);
            alert("Your information has been submitted");

            setForm({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            console.error("FAILED...", error);
            alert("There was an error sending your message. Please try again.");
        }
    };

    return (
        <div className="page contact-page">
            <h1>Contact Me</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                />

                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                />

                <button type="submit" className="button">Submit</button>
                <button
                    type="button"
                    className="button"
                    onClick={() => setForm({ name: "", email: "", message: "" })}
                >
                    Clear
                </button>
            </form>
        </div>
    );
}

export default Contact;