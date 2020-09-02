import { availableThemes, Theme } from './theme.type';

const clearThemeProperties = (domElement: any) => {
  availableThemes.forEach((theme: Theme) => {
    Object.keys(theme.properties).forEach(key => {
      domElement.style.removeProperty(key);
    });
    domElement.classList.remove(theme.class);
  });
};

export const applyThemeProperties = (domElement: any, theme: Theme) => {
  clearThemeProperties(domElement);
  Object.keys(theme.properties).forEach(key => {
    domElement.style.setProperty(key, theme.properties[key]);
  });
  domElement.classList.add(theme.class);
};
