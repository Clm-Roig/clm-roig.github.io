import { SkillCategories } from "@/models/SkillCategories";

export const skills = [
  { name: "React", level: 4, category: SkillCategories.FRONT_END },
  { name: "MUI", level: 4, category: SkillCategories.FRONT_END },
  { name: "CSS 3", level: 3, category: SkillCategories.FRONT_END },
  { name: "HTML 5", level: 3, category: SkillCategories.FRONT_END },
  { name: "Github Actions", level: 3, category: SkillCategories.TEST_CI },
  { name: "Git", level: 3, category: SkillCategories.MISC },

  { name: "Vue.js", level: 1, category: SkillCategories.FRONT_END },
  { name: "SCSS", level: 1, category: SkillCategories.FRONT_END },
  { name: "BEM", level: 1, category: SkillCategories.FRONT_END },

  { name: "Jest", level: 3, category: SkillCategories.TEST_CI },
  { name: "Cypress", level: 2, category: SkillCategories.TEST_CI },

  { name: "Sails.js", level: 3, category: SkillCategories.BACK_END },
  { name: "Node.js", level: 1, category: SkillCategories.BACK_END },

  { name: "Postgres", level: 3, category: SkillCategories.DBMS },
  { name: "SQL", level: 2, category: SkillCategories.DBMS },
  { name: "MongoDB", level: 1, category: SkillCategories.DBMS },

  { name: "Adobe Photoshop", level: 1, category: SkillCategories.MISC },
  { name: "Adobe Premiere", level: 1, category: SkillCategories.MISC },
  { name: "Google Drive", level: 4, category: SkillCategories.MISC },
  { name: "Swagger", level: 2, category: SkillCategories.MISC },
  { name: "Trello", level: 2, category: SkillCategories.MISC },
];
