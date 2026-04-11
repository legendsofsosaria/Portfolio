const resumeData = {
    name: "Brittney [Elizabeth] House",
    contact: {
        location: "371 Nesbitt Street, Windsor, NS B0N 2T0",
        email: "elizabeth.house@georgebrown.ca",
        phone: "902-788-7633 (C)",
        github: "https://www.github.com/legendsofsosaria"
    },

    objective:
        "Inventive and organized software developer seeking a Junior Software Developer position where I can collaborate in team-based development and apply my experience in C#, Java, PHP, and database-driven web applications.",

    highlights: [
        "Strong background in C# with experience in Java and PHP",
        "Designed, deployed, tested, and maintained software systems",
        "Skilled in problem-solving, teamwork, and managing development workflows",
        "Supported customer bug reports, suggestions, and issues in a live multiplayer game server",
        "Developed and deployed web applications with database systems",
        "Comfortable collaborating in team-based development environments"
    ],

    education: [
        {
            title: "Studied Computing Science",
            school: "Thompson Rivers University",
            location: "Kamloops, British Columbia",
            dates: "Aug 2023 – Dec 2027",
            gpa: "3.68"
        },
        {
            title: "Studied Computer Programming and Analysis",
            school: "George Brown Polytechnic",
            location: "Toronto, Ontario",
            dates: "Sept 2024 – April 2027",
            gpa: "3.94",
            extra: "Dean’s List"
        },
        {
            title: "Associate’s Degree in Specialized Technology in Patisserie and Baking",
            school: "Le Cordon Bleu Institute of Culinary Arts",
            location: "Pittsburgh, PA",
            dates: "June 2008 – April 2010"
        }
    ],

    skills: {
        languages: {
            advanced: ["C#"],
            proficient: ["Java", "PHP", "SQL", "Python"],
            familiar: ["C", "GDScript", "JavaScript", "TypeScript", "Bash/Shell", "Assembly"]
        },

        tools: {
            advanced: ["Git", "Jira"],
            proficient: ["ASP.NET Core MVC/Razor", "PostgreSQL", "Azure"],
            familiar: ["Godot Engine", "Bootstrap", "React", "Flutter"]
        },

        concepts: {
            advanced: ["Object-Oriented Programming (OOP)", "Database Design", "Game Development"],
            proficient: ["Web Application Development", "Test-Driven Development (TDD)"],
            familiar: ["Data Structures & Algorithms", "SDL"]
        }
    },

    experience: [
        {
            title: "Game Developer / Owner",
            company: "Geeky Gamers",
            location: "Windsor, NS",
            dates: "Jan 2019 – Present",
            bullets: [
                "Developed and maintained a live multiplayer game server using C#",
                "Designed and implemented custom gameplay systems and mechanics",
                "Built and deployed server features, bug fixes, and content updates",
                "Managed version control and team collaboration using Git and Jira",
                "Handled player support, bug reports, and gameplay issues"
            ]
        },
        {
            title: "Executive Pastry Chef",
            company: "Various Restaurants",
            location: "Washington, DC & Bethesda, MD",
            dates: "2010 – 2017",
            bullets: [
                "Led teams of 6–12 in high-volume kitchen environments",
                "Controlled food and labor costs while maintaining quality standards",
                "Trained and supervised staff to improve efficiency and consistency",
                "Developed and tested new recipes for restaurants, hotels, and bakeries"
            ]
        }
    ],

    projects: [
        {
            name: "Focus Fae – Lead Back-End Developer",
            tech: "Godot Engine, GDScript",
            bullets: [
                "Built gamified productivity application with task and habit tracking",
                "Implemented Pomodoro-style focus timer with pause/resume",
                "Designed progression system with XP, leveling, and currency",
                "Built virtual companion system reflecting user engagement",
                "Implemented inventory and shop systems",
                "Used Agile workflow with sprint planning and task tracking"
            ]
        },
        {
            name: "Ticket Purchasing Web Application – Full Stack Developer",
            tech: "ASP.NET Core, Azure, SQL / Supabase",
            bullets: [
                "Built web app for purchasing and managing event tickets",
                "Developed backend services using ASP.NET Core",
                "Designed relational database system",
                "Deployed application using Microsoft Azure"
            ]
        },
        {
            name: "Kitchen Sync – Solo Developer (In Progress)",
            tech: "Flutter, Dart",
            bullets: [
                "Developing mobile app for dietary tracking and recipes",
                "Implemented meal logging with macronutrient tracking",
                "Designing structured recipe management system",
                "Planning data sync features between users"
            ]
        }
    ]
};

export default resumeData;