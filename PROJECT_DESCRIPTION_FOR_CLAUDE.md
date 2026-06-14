# Mare Vivo — описание проекта для передачи в Claude

Документ предназначен для того, чтобы другой ассистент (Claude) мог быстро понять проект, дать оценку, предложить улучшения и при необходимости их реализовать.

---

## 1. Общее описание

**Mare Vivo** — демо-сайт одной страницы (SPA) для итальянского прибрежного рыбного ресторана. Сайт современный, минималистичный, с акцентом на средиземноморскую эстетику и свежие морепродукты.

- **Тип:** одностраничный лендинг (landing page)
- **Цель:** презентация ресторана, меню, контактов и бронирования
- **Языки интерфейса:** английский (EN) и итальянский (IT), переключатель в шапке
- **Стек:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS

---

## 2. Структура проекта

```
demo1 Mare Vivo/
├── app/
│   ├── globals.css      # глобальные стили, Tailwind, scroll-margin для секций
│   ├── layout.tsx       # корневой layout, шрифты (Inter, Cormorant Garamond), LanguageProvider
│   └── page.tsx         # единственная страница — композиция всех секций
├── components/
│   ├── AboutSection.tsx     # блок «О нас» с текстом и изображением
│   ├── BookingSection.tsx   # блок бронирования: телефон, WhatsApp, Instagram
│   ├── DishCard.tsx         # карточка блюда (изображение, название, описание, цена)
│   ├── ExperienceText.tsx  # текст «Опыт Mare Vivo» под Hero
│   ├── FeaturedDishes.tsx   # секция «Избранные блюда» (4 карточки)
│   ├── Footer.tsx           # подвал: адрес, часы работы, соцсети, копирайт
│   ├── Hero.tsx             # главный баннер (фон Unsplash), заголовок, CTA
│   ├── LanguageProvider.tsx # контекст языка (en/it), сохранение в localStorage
│   ├── MapSection.tsx       # карта Google Maps (адрес: Bari, Via della Marina 18)
│   ├── MenuSection.tsx      # меню по категориям (Antipasti, Primi, Secondi)
│   ├── Navbar.tsx           # фиксированная шапка: логотип, навигация, EN/IT, кнопка «Prenota»
│   ├── Reveal.tsx           # анимация появления при скролле (IntersectionObserver)
│   └── SectionHeading.tsx   # общий заголовок секции (eyebrow, title, description)
├── lib/
│   ├── data.ts             # типы: Dish, MenuItem, MenuSection
│   └── translations.ts     # все тексты EN/IT, featured dishes, menu sections
├── next.config.mjs         # remotePatterns для images.unsplash.com
├── tailwind.config.ts      # кастомные цвета (sand, deep, ocean, olive), шрифты, тени
├── package.json
├── tsconfig.json           # paths: "@/*" -> "./*"
└── README.md
```

---

## 3. Ключевые возможности

- **Многоязычность:** EN/IT через контекст `LanguageProvider`, переводы и данные меню в `lib/translations.ts`. Локаль сохраняется в `localStorage` (`mare-vivo-locale`), атрибут `lang` на `<html>` обновляется.
- **Навигация:** якорные ссылки (#hero, #menu, #featured, #about, #book), плавная прокрутка (`scroll-behavior: smooth`), `scroll-margin-top` у секций для учёта фиксированной шапки.
- **Визуал:** кастомная палитра Tailwind (sand, deep, ocean, olive), шрифты Cormorant Garamond (заголовки) и Inter (текст), тени `shadow-soft`. Изображения — Next.js `Image` и Unsplash (hero, блюда, about).
- **Анимации:** компонент `Reveal` с IntersectionObserver — появление блоков при скролле (opacity + translate-y), опциональный `delay`.
- **Контакты и бронирование:** ссылки tel:, wa.me, Instagram; заглушки номеров (+39 000 000 0000). Карта — iframe Google Maps по адресу в Бари.

---

## 4. Данные и контент

- **Тексты:** полностью в `lib/translations.ts` — навигация, hero, experience, featured, menu, about, booking, footer. Структура `translations[locale]`, функции `getTranslations`, `getFeaturedDishes`, `getMenuSections`.
- **Меню:** 3 категории (Antipasti di Mare, Primi, Secondi di Pesce), по 3 блюда в каждой; названия, описания, цены на EN и IT.
- **Featured dishes:** 4 блюда с картинками (Unsplash), названия/описания/цены на двух языках.
- **Адрес:** Via della Marina 18, 70122 Bari, Italy. Часы: обед 12:00–15:00, ужин 19:00–23:00, выходной понедельник.

---

## 5. Технические детали

- **Next.js 14:** App Router, один route — главная страница. Метаданные в `layout.tsx`: title «Mare Vivo | Fresh Seafood. Mediterranean Soul.», description про coastal seafood restaurant.
- **Клиентские компоненты:** Hero, Navbar, LanguageProvider, Reveal, все секции с переводами — помечены `"use client"`. DishCard и SectionHeading без хуков — могут оставаться серверными.
- **Изображения:** разрешён только `images.unsplash.com` в `next.config.mjs`. Остальные домены нужно добавлять в `remotePatterns`.
- **ESLint:** конфиг Next.js (`.eslintrc.json`), линтинг через `npm run lint`.

---

## 6. Что можно улучшить (идеи для оценки и предложений)

- **Контент:** заменить заглушки телефона/WhatsApp/Instagram на реальные контакты; при необходимости вынести адрес и часы в конфиг или CMS.
- **Доступность (a11y):** проверить контраст, фокусы, aria-метки, семантику (например, nav, main, section с заголовками).
- **SEO:** один HTML без маршрутов — можно усилить мета-теги, Open Graph, структурированные данные (LocalBusiness, Restaurant).
- **Производительность:** оптимизация изображений (форматы, размеры), возможно — отложенная загрузка карты или замена на статичную картинку + ссылку на карты.
- **UX:** мобильное меню (сейчас на мобилке только кнопка «Menu» и «Prenota»); возможно форма бронирования или интеграция с системой бронирования.
- **Код:** вынести типы из `lib/data.ts` и использовать их последовательно; рассмотреть разделение `translations.ts` на части (тексты UI vs данные меню) при росте проекта.
- **Тесты:** единичные тесты для ключевых компонентов и провайдера языка; e2e для главной страницы и переключения языка.
- **Деплой:** инструкции для Vercel/Netlify или статического экспорта (`output: 'export'`), если нужен чисто статический хостинг.

---

## 7. Запуск

```bash
npm install
npm run dev
```

Открыть http://localhost:3000. Сборка: `npm run build`, запуск продакшена: `npm start`.

---

## 8. Запрос к Claude

По этому описанию просим:

1. **Оценить** проект: архитектура, структура кода, соответствие лучшим практикам для лендинга ресторана.
2. **Предложить конкретные улучшения** по приоритетам (критичные / желательные / опциональные) в областях: доступность, SEO, производительность, UX, поддержка кода.
3. **По желанию** — предложить или реализовать отдельные улучшения (например, мобильное меню, улучшение метаданных, рефакторинг переводов).

Достаточно контекста в этом файле и в структуре репозитория; при необходимости можно обращаться к конкретным файлам по путям выше.
