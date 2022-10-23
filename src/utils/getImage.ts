import type { Image } from "../models/Images";
import { useI18n } from "vue-i18n";

export enum AVAILABLE_PROJECTS {
  grottocenter = "grottocenter",
  suivie = "suivie",
}

export const getImage = (
  imageName: string,
  project?: AVAILABLE_PROJECTS,
  extension = "jpg",
  caption?: string
) => {
  const { t } = useI18n();
  return {
    caption: project ? t(`projects.${project}.images.${imageName}`) : caption,
    path: `${project ? project + "/" : ""}${imageName}.${extension}`,
  } as Image;
};
