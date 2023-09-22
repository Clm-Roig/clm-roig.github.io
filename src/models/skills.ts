import { SkillCategories } from "@/models/SkillCategories";

export const skills = [
  { name: "React", level: 4, category: SkillCategories.FRONT_END },
  { name: "MUI", level: 4, category: SkillCategories.FRONT_END },
  { name: "CSS 3", level: 4, category: SkillCategories.FRONT_END },
  { name: "HTML 5", level: 3, category: SkillCategories.FRONT_END },

  { name: "Vue.js", level: 1, category: SkillCategories.FRONT_END },
  { name: "SCSS", level: 2, category: SkillCategories.FRONT_END },
  { name: "BEM", level: 2, category: SkillCategories.FRONT_END },
  { name: "Framer", level: 1, category: SkillCategories.FRONT_END },

  { name: "Github Actions", level: 3, category: SkillCategories.TEST_CI },
  { name: "Jest", level: 3, category: SkillCategories.TEST_CI },
  { name: "Mocha", level: 2, category: SkillCategories.TEST_CI },
  { name: "Cypress", level: 2, category: SkillCategories.TEST_CI },

  { name: "Express", level: 3, category: SkillCategories.BACK_END },
  { name: "Node.js", level: 3, category: SkillCategories.BACK_END },
  { name: "Strapi", level: 2, category: SkillCategories.BACK_END },
  { name: "Python", level: 1, category: SkillCategories.BACK_END },

  { name: "Postgres", level: 3, category: SkillCategories.DBMS },
  { name: "SQL", level: 2, category: SkillCategories.DBMS },
  { name: "MongoDB", level: 3, category: SkillCategories.DBMS },

  { name: "TypeScript", level: 4, category: SkillCategories.MISC },
  { name: "JavaScript", level: 3, category: SkillCategories.MISC },
  { name: "Adobe Photoshop", level: 1, category: SkillCategories.MISC },
  { name: "Adobe Premiere", level: 1, category: SkillCategories.MISC },
  { name: "Docker", level: 2, category: SkillCategories.MISC },
  { name: "Git", level: 3, category: SkillCategories.MISC },
  { name: "Google Drive", level: 3, category: SkillCategories.MISC },
  { name: "Swagger", level: 2, category: SkillCategories.MISC },
];
