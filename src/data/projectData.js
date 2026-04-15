import { img } from "../util.js";
/* Project data, including title, description, tags, and images. TODO: Add github links for public repo */
const projects = [
    {
        id: 1,
        title: "Open Ticket System",
        description:
            "Full-stack ASP.NET Core MVC ticket purchasing system with authentication and database integration.",
        tags: ["C#", "ASP.NET", "PostgreSQL"],
        images: [
            img("/images/ticketapp/ticket1.png"),
            img( "/images/ticketapp/ticket2.png"),
            img( "/images/ticketapp/ticket3.png"),
            img("/images/ticketapp/ticket4.png"),
            img("/images/ticketapp/ticket5.png"),
            img("/images/ticketapp/ticket6.png"),
        ],
        featured: true,
        github: "https://github.com/legendsofsosaria/COMP2139-ASSIGN2-GROUP36",
    },
    {
        id: 2,
        title: "Focus Fae",
        description:
            "ADHD-focused gamified productivity desktop application for task tracking and workflow management.",
        tags: ["Desktop App", "Godot Engine", "System Design"],
        images: [
            img("/images/focusfae/focusfae1.png"),
            img( "/images/focusfae/focusfae2.png"),
            img( "/images/focusfae/focusfae3.png"),
            img("/images/focusfae/focusfae4.png"),
        ],
        featured: false,
    },
    {
        id: 3,
        title: "PHP Forum System",
        description:
            "Web forum with authentication, posting, and voting system.",
        tags: ["PHP", "MySQL"],
        images: [
            img("/images/phpforum/forum1.png"),
            img("/images/phpforum/forum2.png"),
            img("/images/phpforum/forum3.png"),
        ],
        featured: false,
    },
    {
        id: 4,
        title: "Scorpio",
        description:
            "2D SDL-based side-scrolling game built in C++ featuring collision systems and gameplay mechanics.",
        tags: ["SDL", "C++", "Game Dev"],
        images: [
            img("/images/scorpio/scorpio1.png"),
            img("/images/scorpio/scorpio2.png"),
        ],
        featured: false,
        github: "https://github.com/legendsofsosaria/Scorpio",
    },
    {
        id: 5,
        title: "Legends of Sosaria",
        description:
            "Custom MMO server systems built in C#/.NET (ServUO) including spawn systems, dungeons, and world features.",
        tags: ["C#", "Game Systems", "Architecture"],
        images: [
            img("/images/los/los1.png"),
            img("/images/los/los2.png"),
            img("/images/los/los3.png"),
            img("/images/los/los4.png"),
            img("/images/los/los5.png"),
        ],
        featured: false,
    },
    {
        id: 6,
        title: "Kitchen Sync",
        description:
            "Dietary tracking and meal planning mobile application (in progress).",
        tags: ["Flutter", "WIP"],
        images: [img("/images/kitchensync/kitchen1.png")],
        featured: false,
    },
];

export default projects;