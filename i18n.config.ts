export default defineI18nConfig(() => ({
    legacy: false,
    fallbackLocale: "en",
    locale: "en",
    messages: {
      en: {
        welcome: "A Unity game developer from Germany, with my current big project being Superslide.\nThis website is still in early developement, and will change drastically over time.",
        navbar: {
            home: "Home",
            projects: "Projects",
            skills: "Skills"
        },

        footer: {
            text_part1: "Built with ",
            text_part2: " and ",
            text_part3: ". Source available on ",
            link_nuxt: "Nuxt",
            link_tailwind: "Tailwind",
            link_github: "Github",
        },

        project_descriptions: {
            superslide: "Slide through epic levels, spend your time in endless mode and climb the leaderboards!",
            flappy_christmas: "Jump through the chimneys!",
            coming_soon: "Coming Soon",
        },

        index: {
            title_projects: "My Projects",
            typing_effect: {
                unity_dev: "Unity Game Developer",
                mobile_game_dev: "Mobile Game Developer",
                web_dev: "Web Developer",
                pixel_artist: "Pixel Artist",
                superslide_dev: "Creator of Superslide",
            }
        },
    
        superslide: {
            mirror_reminder: "Mirror version coming here soon...",
        },

        skills: {
            title_software: "Software",
            title_technologies: "Technologies & Frameworks",
        },
      },
      de: {
        welcome: "Ein Unity-Spieleentwickler aus Deutschland, dessen aktuelles großes Projekt Superslide ist.\nDiese Website befindet sich noch in der Entwicklung und wird sich im Laufe der Zeit drastisch verändern.",
        
        navbar: {
            home: "Home",
            projects: "Projekte",
            skills: "Skills"
        },

        footer: {
            text_part1: "Erstellt mit ",
            text_part2: " und ",
            text_part3: ". Quelle verfügbar auf ",
            link_nuxt: "Nuxt",
            link_tailwind: "Tailwind",
            link_github: "Github",
        },

        project_descriptions: {
            superslide: "Slide durch epische Level, verbringe deine Zeit im Endlosmodus und erklimme die Ranglisten!",
            flappy_christmas: "Springe durch die Schornsteine!",
            coming_soon: "Kommt bald",
        },
   
        index: {
            title_projects: "Meine Projekte",
            typing_effect: {
                unity_dev: "Unity Spieleentwickler",
                mobile_game_dev: "Handyspiel-Entwickler",
                web_dev: "Web-Entwickler",
                pixel_artist: "Pixelartist",
                superslide_dev: "Ersteller von Superslide",
            }
        },

        superslide: {
            mirror_reminder: "Hier erscheint bald eine Mirror-Version...",
        },

        skills: {
            title_software: "Programme",
            title_technologies: "Technologien & Frameworks",
        },
      }
    }
  }))