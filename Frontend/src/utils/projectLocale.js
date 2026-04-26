/**
 * Display strings for a project: PT uses canonical fields; EN prefers *_en with PT fallback.
 */
export function getLocalizedProjectTexts(project, language) {
  const lang = String(language || "").toLowerCase();
  const useEnglish = lang.startsWith("en");

  if (useEnglish) {
    return {
      name: project.name_en || project.name || "",
      shortDescription:
        project.shortDescription_en || project.shortDescription || "",
      description: project.description_en || project.description || "",
    };
  }
  return {
    name: project.name || "",
    shortDescription: project.shortDescription || "",
    description: project.description || "",
  };
}
