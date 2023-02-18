import {
  FaStackOverflow,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaRegEnvelope,
} from 'react-icons/fa'

export const GITHUB_API_URL = 'https://api.github.com'

export const GITHUB_USERNAME = 'tal7aouy'

export const Companies = [
  {
    id: 1,
    institution: 'ChickenSpot',
    degree: 'Full Stack Developer - Intern',
    startDate: '01/2020',
    endDate: '06/2020',
  },
  {
    id: 2,
    institution: 'khamsat',
    degree: 'Full Stack Developer - Freelancer',
    startDate: '12/2020',
    endDate: '08/2022',
    url: 'https://khamsat.com/user/talhaouy_dev',
  },
  {
    id: 3,
    institution: 'Reliable',
    degree: 'Laravel Developer - Remote',
    startDate: '04/2022',
    endDate: '06/2022',
    url: 'https://law-mawthuq.com',
  },
  {
    id: 4,
    institution: 'Fiverr',
    degree: 'Laravel Developer - Freelancer',
    startDate: '08/2022',
    endDate: 'Present',
    url: 'https://www.fiverr.com/talhaouy_eth',
  },
  {
    id: 5,
    institution: 'Phlokk.com',
    degree: 'Laravel Developer - Part-time',
    startDate: '11/2022',
    endDate: 'Present',
    url: 'https://www.phlokk.com/',
  },
]

export const Institutions = [
  {
    id: 1,
    institution: 'Higher Institute for Applied Technology',
    degree: 'Specialized technician, Computer Science & Engineering',
    startDate: '2018',
    endDate: '2020',
  },
  {
    id: 2,
    institution: 'Udemy',
    degree: 'Have many certificates in Laravel, Payment Gateway',
    startDate: '2022',
    endDate: 'Present',
  },
]

export const SocialMedia = [
  {
    id: 1,
    label: 'Github',
    icon: <FaGithub />,
    url: 'https://github.com/tal7aouy',
  },
  {
    id: 2,
    label: 'Linkedin',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/tal7aouy/',
  },
  {
    id: 3,
    label: 'StackOverflow',
    icon: <FaStackOverflow />,
    url: 'https://stackoverflow.com/users/14920101/mhammed-talhaouy',
  },
  {
    id: 4,
    label: 'Mail to tal7aouy',
    icon: <FaRegEnvelope />,
    url: 'mailto:tal7aouy@gmail.com',
  },
  {
    id: 5,
    label: 'Twitter',
    icon: <FaTwitter />,
    url: 'mailto:tal7aouy@gmail.com',
  },
]
