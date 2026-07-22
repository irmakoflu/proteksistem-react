import tr from './tr';
import en from './en';

const dictionaries = { tr, en };

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

export function useTranslation(lang) {
  const dict = dictionaries[lang] || dictionaries.tr;
  const t = (path) => {
    const value = getByPath(dict, path);
    return value !== undefined ? value : path;
  };
  return { t };
}