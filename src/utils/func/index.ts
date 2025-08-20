/**
 * Combines multiple CSS module classes into a single string
 * @param classes - Array of CSS module classes
 * @returns Combined class string
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Creates a conditional class name utility
 * @param baseClass - Base CSS module class
 * @param conditionalClasses - Object with class names as keys and boolean conditions as values
 * @returns Combined class string
 */
export const classNames = (
  baseClass: string,
  conditionalClasses: Record<string, boolean | undefined | null> = {}
): string => {
  const classes = [baseClass];
  
  Object.entries(conditionalClasses).forEach(([className, condition]) => {
    if (condition) {
      classes.push(className);
    }
  });
  
  return classes.join(' ');
};
