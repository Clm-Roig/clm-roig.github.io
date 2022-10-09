export class SkillCategories {
  static readonly BACK_END = new SkillCategories("Back-end", "#132053");
  static readonly DBMS = new SkillCategories("DBMS", "#14524F");
  static readonly FRONT_END = new SkillCategories("Front-end", "#5D1309");
  static readonly MISC = new SkillCategories("Misc", "#333333");
  static readonly TEST_CI = new SkillCategories("Test / CI", "#663F00");

  // private to disallow creating other instances of this type
  private constructor(
    public readonly name: string,
    public readonly color: string
  ) {}
}
