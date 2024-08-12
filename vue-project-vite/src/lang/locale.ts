import { createApp } from 'vue';
import { createI18n } from 'vue-i18n'; // Импортируем createI18n правильно

import en from './en';
import ru from './ru';


// Создаем экземпляр i18n
const i18n = createI18n({
  locale: 'ru', // локаль по умолчанию
  legacy: false, // Это важно для использования Composition API //TODO для vue3 обязательно
  fallbackLocale: 'en', // резервная локаль
  messages: {
    ru: ru,
    en: en,
  },
});

// Экспорт функции для изменения локали
export const setLocale = (loc: any) => {
  
  i18n.global.locale.value= loc; // Изменение локали
};

export default i18n;
