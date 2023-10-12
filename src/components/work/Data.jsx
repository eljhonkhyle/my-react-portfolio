import Work1 from "../../assets/work1.jpg"
import Work2 from "../../assets/work2.jpg"
import Work3 from "../../assets/work3.jpg"

export const projectsData  = [
    {
        id: 'project1',
        image: Work1,
        title: 'Portfolio',
        description: 'Explore the creative world of me through this carefully crafted online portfolio. This website is a curated showcase of my diverse talents, skills, and accomplishments.',
        category: 'web',
        link: 'https://ekb.netlify.app/',
        github: 'https://github.com/eljhonkhyle/my-react-portfolio'
    },

    {
        id: 'project2',
        image: Work2,
        title: 'Weather Hub',
        description: 'A weather site to provide users with up-to-date and location-specific information about current weather conditions and forecasts. ',
        category: 'web',
        link: 'https://weatherhuub.netlify.app/',
        github: 'https://github.com/eljhonkhyle/weather-app'
        
    },

    {
        id: 'project3',
        image: Work3,
        title: 'Task X Pro',
        description: 'A todo site to help users organize, prioritize, and manage their daily tasks and responsibilities. It offers a user-friendly interface for creating, tracking, and completing tasks efficiently.',
        category: 'web',
        link: 'https://taskxpro.vercel.app',
        github: 'https://github.com/eljhonkhyle/todo-list'
        
    },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'design'
    },
];