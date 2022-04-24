import { DiPython, DiDocker } from "react-icons/di";
import { SiAmazonaws, SiTypescript, SiDjango,  } from "react-icons/si";
import {FaNodeJs} from 'react-icons/fa'

export const Skills = [
  {
    slug: "python",
    Component: DiPython,
    title: "Python",
    Description: () => <>I work on Rest API's, Scripts & Bots using Python 3.0.</>,
  },
  {
    slug: "django",
    Component: SiDjango,
    title: "Django",
    Description: () => <>Currently working profesionally and used everyday. </>,
  },
  {
    slug: "amazonaws",
    Component: SiAmazonaws,
    title: "AWS",
    Description: () => <>I have used AWS for deploy, lambdas, S3 and Chime in my jobs.</>,
  },
  {
    slug: "nodejs",
    Component: FaNodeJs,
    title: "NodeJs",
    Description: () => <>Used for create CLI, API's and collaborate in a Social Network.</>,
  },
  {
    slug: "typescript",
    Component: SiTypescript,
    title: "Typescript",
    Description: () => <>
    Used with React and Node Js instead JS taking advantage of his structure.</>,
  },
  {
    slug: "docker",
    Component: DiDocker,
    title: "Docker",
    Description: () => <>All of my projects are dockerized.</>,
  },
  
];
