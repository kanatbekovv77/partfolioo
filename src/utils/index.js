import { Pages } from "../pages"

import homeIcon from '../icons/home.svg'
import homeIconActive from '../icons/home active.svg'
import portfolioIcon from '../icons/portfolio.svg'
import portfolioIconActive from '../icons/portfolio active.svg'
import blogIcon from '../icons/threedots.svg'
import blogIconActive from '../icons/threedots active.svg'

import front from '../icons/front.svg'
import project from '../icons/project.svg'
import { Images } from "../images"


export const NavList = [
  {
    id: 1, 
    title: 'Home',
    route: '/',
    icon: homeIcon,
    activeIcon: homeIconActive
  },
  {
    id: 2,
    title: 'Portfolio',
    route: '/portfolio/',
    icon: portfolioIcon,
    activeIcon: portfolioIconActive
  },
  {
    id: 3, 
    title: 'Stacks',
    route: '/stacks/',
    icon: blogIcon,
    activeIcon: blogIconActive
  }
]

export const StacksList = [
  {
    id: 1, 
    title: 'HTML5',
    percent: 50,
    direction: 'Frontend'
  },
  {
    id: 2, 
    title: 'CSS3',
    percent: 50,
    direction: 'Frontend'
  },
  {
    id: 3, 
    title: 'JavaScript',
    percent: 40,
    direction: 'Frontend'
  },
  {
    id: 4, 
    title: 'React JS',
    percent: 40,
    direction: 'Frontend'
  },
  {
    id: 8, 
    title: 'Python',
    percent: 80,
    direction: 'Backend'
  },
  {
    id: 10, 
    title: 'Django Rest',
    percent: 40,
    direction: 'Backend'
  }
]

export const PUBLIC_ROUTES = [
  {
    id:1,
    route: '/',
    page: <Pages.Home />,
  },
  {
    id:2,
    route: '/portfolio/',
    page: <Pages.Portfolio />,
  },
  {
    id:3, 
    route: '/stacks/',
    page: <Pages.Stacks />
  }
]

export const MySkillsList = [
  {
    id: 1, 
    title: 'Web Development',
    desc: 'You will receive a customized plan for your fitness journey, and lots of support.',
    icon: front
  },
  {
    id: 2, 
    title: 'Project Management',
    desc: 'You will receive a customized plan for your fitness journey, and lots of support.',
    icon: project
  }
]


export const Projects = [
  {
    id: 1, 
    title: 'Urban Construction',
    image: "https://lh3.googleusercontent.com/p/AF1QipOqVu7DfGBnUbfAXC8D5x1C1SlvluYrhORZNoo=s1360-w1360-h1020",
    stacks: [
      'Design',
      'Frontend',
      'Backend'
    ],
    link: 'https://urban-construction-fyp-k.vercel.app/'
  }
]