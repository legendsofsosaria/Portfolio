function Footer() {
    return (
        <footer className = "footer">
            <div id="footer-box">
                <a href="https://github.com/legendsofsosaria/">
                    <img className="footer-icon" src={import.meta.env.BASE_URL + "images/githubicon.png"} alt="GitHub"/>
                </a>
                <a href="https://github.com/legendsofsosaria/">GitHub</a>

                <a href="https://www.legendsofsosaria.com/">
                    <img className="footer-icon" src={import.meta.env.BASE_URL + "images/losicon.jpg"} alt="Legends of Sosaria"/>
                </a>
                <a href="https://www.legendsofsosaria.com/">Legends of Sosaria</a>
            </div>
            <p>
                &copy; Elizabeth House 💻<br/>
                Last Updated: April 2026
            </p>
        </footer>
    );
}

export default Footer;