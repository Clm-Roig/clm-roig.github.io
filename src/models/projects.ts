import { ProjectType } from "@/models/ProjectType";
const { MISSION, PERSONAL_PROJECT } = ProjectType;

export const projects: ProjectList = {
  larsenToulousaine: {
    builtWith: "Next.js (React) - TypeScript - Mantine ｜ Prisma",
    imgPath: "larsen-toulousaine.jpg",
    internalSlug: "larsen-toulousaine",
    projectType: PERSONAL_PROJECT,
    url: "https://larsen-toulousaine.fr/",
  },
  batailLog: {
    builtWith: "React - TypeScript - MUI ｜ Express - Strapi - MongoDB",
    imgPath: "batail-log.jpg",
    internalSlug: "batail-log",
    projectType: MISSION,
    url: "https://www.batail-log.com/",
  },
  suivie: {
    builtWith: "React - TypeScript - MUI - Recharts - Redux - Cypress - Jest",
    imgPath: "suivie.jpg",
    internalSlug: "suivie",
    projectType: PERSONAL_PROJECT,
    url: "https://clm-roig.github.io/suivie",
  },
  grottocenter: {
    builtWith:
      "React - MUI - Redux - Storybook ｜ Sails.js - Mocha - PostGreSQL",
    imgPath: "grottocenter.jpg",
    internalSlug: "grottocenter",
    projectType: MISSION,
    url: "https://grottocenter.org",
  },
  mizk: {
    builtWith: "React - Chakra UI",
    imgPath: "mizk.jpg",
    internalSlug: "mizk",
    projectType: PERSONAL_PROJECT,
    url: "https://clm-roig.github.io/mizk/",
  },
};

type ProjectList = {
  [key: string]: {
    builtWith: string;
    imgPath: string;
    internalSlug: string;
    projectType: ProjectType;
    url: string;
  };
};
