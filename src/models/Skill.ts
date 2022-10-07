import type { SkillCategories } from "./SkillCategories";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategories;
}
