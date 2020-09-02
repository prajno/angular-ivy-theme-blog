export interface Theme {
  name: string;
  class?: string;
  properties?: any;
}

export const oldTheme: Theme = {
  name: 'Old',
  class: 'old-theme',
  properties: {
    '--button-font-size': '10px',
  },
};

export const newTheme: Theme = {
  name: 'New',
  class: 'new-theme',
  properties: {
    '--button-font-size': '16px',
    '--font-style' : 'italic'
  },
};

export const availableThemes = [oldTheme, newTheme];

export const isSupportedTheme = (theme: Theme) => {
  return availableThemes.includes(theme);
};
