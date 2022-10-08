export class SkillCategories {
  static readonly BACK_END = new SkillCategories(
    "Back-end",
    "rgba(100, 100, 255, 0.3)"
  );
  static readonly DBMS = new SkillCategories(
    "DBMS",
    "rgba(100, 255, 100, 0.3)"
  );
  static readonly FRONT_END = new SkillCategories(
    "Front-end",
    "rgba(255, 100, 100, 0.3)"
  );
  static readonly MISC = new SkillCategories(
    "Misc",
    "rgba(200, 200, 200, 0.3)"
  );
  static readonly TEST_CI = new SkillCategories(
    "Test / CI",
    "rgba(255, 255, 50, 0.3)"
  );

  // private to disallow creating other instances of this type
  private constructor(
    private readonly name: string,
    private readonly color: string
  ) {}
}
