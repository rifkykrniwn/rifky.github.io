import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiChakraui,
  SiCodeigniter,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiBootstrap,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiGulp,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPrisma,
  SiPycharm,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSass,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,

  SiVuedotjs,
  SiStreamlit,
} from "react-icons/si";

type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = "100%";

export const STACKS: stacksProps = {
  PHP: <SiPhp size={iconSize} className="text-[#707fc0]" />,
  Laravel: <SiLaravel size={iconSize} className="text-red-600" />,
  CodeIgniter: <SiCodeigniter size={iconSize} className="text-red-600" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  Bootstrap: (
    <SiBootstrap size={iconSize} className="text-purple-500" />
  ),
  // GraphQL: <SiGraphql size={iconSize} className="text-pink-600" />,
  "Material UI": <SiMui size={iconSize} className="text-sky-400" />,

  // "React Native": <SiReact size={iconSize} className="text-sky-600" />,
  // Expo: <SiExpo size={iconSize} />,

  "Vue.js": <SiVuedotjs size={iconSize} className="text-green-500" />,
  HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  "Node JS": <SiNodedotjs size={iconSize} className="text-green-600" />,
  Github: <SiGithub size={iconSize} className="text-primary" />,
  Python: <SiPython size={iconSize} className="text-yellow-400" />,
};
