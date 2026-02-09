# План интеграции новой дизайн-системы в React Vite проект

## 📋 Обзор архитектуры

Ваш проект на React Vite требует структурированного подхода к интеграции новой премиум дизайн-системы ECOBETON GRUPP.

---

## 🎯 Phase 1: Подготовка инфраструктуры (1-2 дня)

### 1.1 Структура проекта

```
src/
├── assets/
│   ├── images/
│   │   ├── logo/
│   │   │   ├── ecobeton-logo.svg
│   │   │   ├── ecobeton-logo-mono.svg
│   │   │   └── logo-pattern.svg
│   │   ├── textures/
│   │   │   ├── concrete-texture.jpg
│   │   │   └── concrete-polished.jpg
│   │   └── projects/
│   ├── icons/
│   │   └── index.js (экспорт всех иконок)
│   └── fonts/
│       └── inter/ или montserrat/
├── styles/
│   ├── tokens/
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   ├── shadows.css
│   │   └── index.css
│   ├── global.css
│   └── animations.css
├── components/
│   ├── ui/ (атомарные компоненты)
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Icon/
│   │   ├── Badge/
│   │   └── Input/
│   ├── sections/ (секции страницы)
│   │   ├── Hero/
│   │   ├── Statistics/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Projects/
│   │   ├── WhyChooseUs/
│   │   ├── Testimonials/
│   │   ├── Awards/
│   │   ├── Contact/
│   │   └── Footer/
│   └── layout/
│       ├── Header/
│       ├── Navigation/
│       └── Container/
├── hooks/
│   ├── useScrollAnimation.js
│   ├── useIntersectionObserver.js
│   └── useWindowSize.js
├── utils/
│   └── animations.js
└── App.jsx
```

### 1.2 Установка зависимостей

```bash
# Иконки
npm install lucide-react

# Анимации
npm install framer-motion

# Intersection Observer для scroll animations
npm install react-intersection-observer

# CSS utilities (опционально)
npm install clsx

# Если нужен Tailwind (необязательно, можно чистый CSS)
npm install -D tailwindcss postcss autoprefixer
```

---

## 🎨 Phase 2: Создание Design Tokens (1 день)

### 2.1 `src/styles/tokens/colors.css`

```css
:root {
  /* === CRITICAL: NEW BRAND COLORS === */
  
  /* Grays (from logo) */
  --color-charcoal: #1a1a1a;
  --color-dark-gray: #2a2a2a;
  --color-medium-gray: #4a4a4a;
  --color-light-gray: #666666;
  --color-border-gray: #e0e0e0;
  --color-bg-light: #f8f8f8;
  
  /* Accent Green (from logo) */
  --color-green-primary: #7cb342;
  --color-green-light: #9ccc65;
  --color-green-hover: #6a9c35;
  
  /* Semantic */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-text-muted: #808080;
  --color-text-on-dark: #ffffff;
  --color-text-on-dark-muted: #c0c0c0;
  
  /* Backgrounds */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8f8f8;
  --color-bg-dark: #1a1a1a;
  --color-bg-dark-secondary: #2a2a2a;
  
  /* States */
  --color-success: #7cb342;
  --color-error: #ea4335;
  --color-warning: #ff9800;
  
  /* === DEPRECATED COLORS (TO REMOVE) === */
  /* DO NOT USE THESE: */
  /* --color-blue: #4285F4; */
  /* --color-red: #EA4335; */
  /* --color-purple: #9C27B0; */
  /* --color-yellow: #FFC107; */
}
```

### 2.2 `src/styles/tokens/typography.css`

```css
:root {
  /* Font Families */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-heading: 'Montserrat', 'Inter', sans-serif;
  
  /* Font Sizes */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 2rem;        /* 32px */
  --text-4xl: 2.5rem;      /* 40px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.5rem;      /* 56px */
  --text-7xl: 4rem;        /* 64px */
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  
  /* Line Heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.7;
  
  /* Letter Spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
}
```

### 2.3 `src/styles/tokens/spacing.css`

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  
  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 12px;
  --radius-xl: 20px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}
```

### 2.4 `src/styles/tokens/shadows.css`

```css
:root {
  /* Subtle shadows for cards */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.08);
  --shadow-xl: 0 12px 32px rgba(0, 0, 0, 0.12);
  
  /* Green accent shadows */
  --shadow-green-sm: 0 4px 16px rgba(124, 179, 66, 0.15);
  --shadow-green-md: 0 8px 24px rgba(124, 179, 66, 0.25);
  --shadow-green-lg: 0 12px 32px rgba(124, 179, 66, 0.35);
  
  /* Dark mode shadows */
  --shadow-dark: 0 8px 32px rgba(0, 0, 0, 0.3);
  --shadow-dark-lg: 0 20px 60px rgba(0, 0, 0, 0.4);
}
```

### 2.5 `src/styles/animations.css`

```css
/* Transitions */
:root {
  --transition-fast: 150ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;
  --transition-curve: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Keyframe Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Utility classes */
.animate-fade-in-up {
  animation: fadeInUp 0.6s var(--transition-curve);
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s var(--transition-curve);
}

.transition-all {
  transition: all var(--transition-base) var(--transition-curve);
}
```

---

## 🧩 Phase 3: Создание UI компонентов (2-3 дня)

### 3.1 Button Component

**`src/components/ui/Button/Button.jsx`**

```jsx
import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const classes = `btn btn--${variant} btn--${size} ${className}`;
  
  return (
    <button 
      className={classes} 
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="btn__icon btn__icon--loading" />}
      {!loading && icon && iconPosition === 'left' && (
        <span className="btn__icon btn__icon--left">{icon}</span>
      )}
      <span className="btn__text">{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <span className="btn__icon btn__icon--right">{icon}</span>
      )}
      {!loading && !icon && variant === 'primary' && (
        <ArrowRight className="btn__icon btn__icon--right" size={20} />
      )}
    </button>
  );
};

export default Button;
```

**`src/components/ui/Button/Button.css`**

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-primary);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-base) var(--transition-curve);
  border: none;
  outline: none;
  position: relative;
}

/* Variants */
.btn--primary {
  background: linear-gradient(135deg, var(--color-green-primary) 0%, var(--color-green-light) 100%);
  color: var(--color-text-on-dark);
  box-shadow: var(--shadow-green-md);
}

.btn--primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-green-lg);
}

.btn--secondary {
  background: transparent;
  color: var(--color-text-primary);
  border: 2px solid var(--color-border-gray);
}

.btn--secondary:hover:not(:disabled) {
  border-color: var(--color-green-primary);
  color: var(--color-green-primary);
  background: rgba(124, 179, 66, 0.05);
}

.btn--ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border: none;
}

.btn--ghost:hover:not(:disabled) {
  color: var(--color-green-primary);
  background: rgba(124, 179, 66, 0.05);
}

/* Sizes */
.btn--sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.btn--md {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
}

.btn--lg {
  padding: var(--space-5) var(--space-10);
  font-size: var(--text-lg);
}

/* States */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn:active:not(:disabled) {
  transform: translateY(0);
}

/* Icons */
.btn__icon {
  display: flex;
  align-items: center;
  transition: transform var(--transition-base) var(--transition-curve);
}

.btn:hover .btn__icon--right {
  transform: translateX(4px);
}

.btn:hover .btn__icon--left {
  transform: translateX(-4px);
}

.btn__icon--loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### 3.2 Card Component

**`src/components/ui/Card/Card.jsx`**

```jsx
import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  ...props 
}) => {
  const classes = `card card--${variant} ${hover ? 'card--hover' : ''} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => (
  <div className={`card__header ${className}`}>{children}</div>
);

const CardBody = ({ children, className = '' }) => (
  <div className={`card__body ${className}`}>{children}</div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`card__footer ${className}`}>{children}</div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
```

**`src/components/ui/Card/Card.css`**

```css
.card {
  background: var(--color-bg-primary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-base) var(--transition-curve);
}

.card--default {
  border: 2px solid var(--color-border-gray);
  box-shadow: var(--shadow-sm);
}

.card--elevated {
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: var(--shadow-md);
}

.card--dark {
  background: var(--color-bg-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Hover effect */
.card--hover:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-green-primary);
}

/* Card sections */
.card__header {
  padding: var(--space-8) var(--space-6);
  border-bottom: 1px solid var(--color-border-gray);
}

.card__body {
  padding: var(--space-8) var(--space-6);
}

.card__footer {
  padding: var(--space-6);
  border-top: 1px solid var(--color-border-gray);
}
```

### 3.3 Icon Component с интеграцией Lucide React

**`src/components/ui/Icon/Icon.jsx`**

```jsx
import React from 'react';
import * as LucideIcons from 'lucide-react';
import './Icon.css';

const Icon = ({ 
  name, 
  size = 24, 
  color,
  variant = 'default',
  className = '',
  ...props 
}) => {
  const IconComponent = LucideIcons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const classes = `icon icon--${variant} ${className}`;
  const iconColor = color || (variant === 'green' ? 'var(--color-green-primary)' : 'currentColor');
  
  return (
    <IconComponent 
      className={classes}
      size={size}
      color={iconColor}
      strokeWidth={1.5}
      {...props}
    />
  );
};

export default Icon;
```

**`src/components/ui/Icon/Icon.css`**

```css
.icon {
  flex-shrink: 0;
  transition: all var(--transition-base) var(--transition-curve);
}

.icon--default {
  color: var(--color-medium-gray);
}

.icon--green {
  color: var(--color-green-primary);
}

.icon--muted {
  color: var(--color-text-muted);
}

/* Hover states */
.icon--hoverable:hover {
  color: var(--color-green-primary);
  transform: scale(1.1);
}
```

---

## 🏗️ Phase 4: Создание секций (5-7 дней)

### 4.1 Statistics Section (приоритет!)

**`src/components/sections/Statistics/Statistics.jsx`**

```jsx
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Icon from '../../ui/Icon/Icon';
import Card from '../../ui/Card/Card';
import './Statistics.css';

const statisticsData = [
  {
    id: 1,
    icon: 'Calendar',
    number: '12+',
    label: 'Aastat kogemust',
    description: 'Professionaalset kogemust ehitussektoris'
  },
  {
    id: 2,
    icon: 'Briefcase',
    number: '100+',
    label: 'Edukalt projekti',
    description: 'Lõpetatud kvaliteetseid projekte'
  },
  {
    id: 3,
    icon: 'Heart',
    number: '100%',
    label: 'Klientide rahulolu',
    description: 'Meie klientidest on rahul'
  },
  {
    id: 4,
    icon: 'Leaf', // ONLY GREEN ICON
    number: '2x',
    label: 'Ökoloogiline',
    description: 'Keskkonnasõbralik lähenemine',
    isGreen: true
  }
];

const Statistics = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="statistics" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="statistics__header">
          <span className="section-badge">
            <Icon name="TrendingUp" size={16} variant="green" />
            <span>Meie saavutused</span>
          </span>
          <h2 className="section-heading">Numbrid, mis räägivad kvaliteedist</h2>
        </div>

        {/* Stats Grid */}
        <div className="statistics__grid">
          {statisticsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <Card variant="elevated" hover>
                <Card.Body>
                  <div className="stat-card">
                    {/* Icon Container */}
                    <div className="stat-card__icon-container">
                      <Icon 
                        name={stat.icon} 
                        size={32}
                        variant={stat.isGreen ? 'green' : 'default'}
                      />
                    </div>
                    
                    {/* Number */}
                    <div className="stat-card__number">
                      {stat.number}
                    </div>
                    
                    {/* Green underline (only for green variant) */}
                    {stat.isGreen && <div className="stat-card__underline" />}
                    
                    {/* Label */}
                    <div className="stat-card__label">
                      {stat.label}
                    </div>
                    
                    {/* Description */}
                    <p className="stat-card__description">
                      {stat.description}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
```

**`src/components/sections/Statistics/Statistics.css`**

```css
.statistics {
  padding: var(--space-20) 0;
  background: var(--color-bg-secondary);
}

.statistics__header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-5);
  background: rgba(124, 179, 66, 0.1);
  border: 1px solid rgba(124, 179, 66, 0.3);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-green-primary);
  margin-bottom: var(--space-5);
}

.section-heading {
  font-size: var(--text-5xl);
  font-weight: var(--font-extrabold);
  color: var(--color-text-primary);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-tight);
}

.statistics__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-8);
  max-width: 1200px;
  margin: 0 auto;
}

/* Stat Card */
.stat-card {
  text-align: center;
  padding: var(--space-8) var(--space-6);
}

.stat-card__icon-container {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--space-6);
  background: linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base) var(--transition-curve);
}

.card:hover .stat-card__icon-container {
  background: linear-gradient(135deg, 
    rgba(124, 179, 66, 0.1) 0%, 
    rgba(124, 179, 66, 0.15) 100%
  );
  transform: scale(1.05);
}

.stat-card__number {
  font-size: var(--text-7xl);
  font-weight: var(--font-extrabold);
  color: var(--color-text-primary);
  line-height: 1;
  margin-bottom: var(--space-3);
}

.stat-card__underline {
  width: 40px;
  height: 3px;
  background: var(--color-green-primary);
  margin: var(--space-4) auto;
  border-radius: 2px;
}

.stat-card__label {
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.stat-card__description {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
}

/* Responsive */
@media (max-width: 768px) {
  .section-heading {
    font-size: var(--text-3xl);
  }
  
  .statistics__grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 🔄 Phase 5: Миграционная стратегия (3-5 дней)

### 5.1 Создание Feature Flags

**`src/utils/featureFlags.js`**

```javascript
const FEATURE_FLAGS = {
  NEW_HERO: true,
  NEW_STATISTICS: true,
  NEW_ABOUT: false,
  NEW_SERVICES: false,
  NEW_PROJECTS: false,
  NEW_TESTIMONIALS: false,
  NEW_CONTACT: false,
  NEW_FOOTER: false
};

export const isFeatureEnabled = (feature) => {
  return FEATURE_FLAGS[feature] || false;
};

export default FEATURE_FLAGS;
```

### 5.2 Постепенное замещение компонентов

**`src/App.jsx` (пример)**

```jsx
import React from 'react';
import { isFeatureEnabled } from './utils/featureFlags';

// Old components
import OldHero from './components/old/Hero';
import OldStatistics from './components/old/Statistics';

// New components
import NewHero from './components/sections/Hero/Hero';
import NewStatistics from './components/sections/Statistics/Statistics';

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      {isFeatureEnabled('NEW_HERO') ? <NewHero /> : <OldHero />}
      
      {/* Statistics Section */}
      {isFeatureEnabled('NEW_STATISTICS') ? <NewStatistics /> : <OldStatistics />}
      
      {/* ... остальные секции */}
    </div>
  );
}

export default App;
```

---

## 📊 Phase 6: Тестирование и оптимизация (2-3 дня)

### 6.1 Performance Checklist

```javascript
// src/utils/performance.js

// Lazy loading для секций
export const lazyLoadSection = (importFunc) => {
  return React.lazy(importFunc);
};

// Usage
const Projects = lazyLoadSection(() => 
  import('./components/sections/Projects/Projects')
);

// Intersection Observer для анимаций
export const useScrollAnimation = (options = {}) => {
  const { threshold = 0.1, triggerOnce = true } = options;
  
  const { ref, inView } = useInView({
    threshold,
    triggerOnce
  });
  
  return { ref, inView };
};
```

### 6.2 Accessibility Checklist

- [ ] Все интерактивные элементы доступны с клавиатуры
- [ ] Контрастность текста соответствует WCAG AA (минимум 4.5:1)
- [ ] Все изображения имеют alt-текст
- [ ] Aria-labels для иконок без текста
- [ ] Focus states видимы и понятны
- [ ] Заголовки используют правильную иерархию (h1 → h2 → h3)

---

## 📅 Полный Timeline внедрения

### Неделя 1: Инфраструктура
- День 1-2: Структура проекта + Design Tokens
- День 3-4: UI компоненты (Button, Card, Icon, Badge)
- День 5: Тестирование UI компонентов

### Неделя 2: Приоритетные секции
- День 1-2: Hero Section
- День 3-4: Statistics Section
- День 5: About Section

### Неделя 3: Средние секции
- День 1-2: Services Section
- День 3-4: Projects Portfolio
- День 5: Why Choose Us

### Неделя 4: Финальные секции
- День 1-2: Testimonials + Awards
- День 3-4: Contact + Footer
- День 5: Финальная интеграция

### Неделя 5: Полировка
- День 1-2: Performance оптимизация
- День 3-4: Accessibility аудит
- День 5: Final testing & deploy

---

## 🚀 Быстрый старт (команды для начала)

```bash
# 1. Создать структуру
mkdir -p src/{styles/tokens,components/{ui,sections,layout},hooks,utils}

# 2. Установить зависимости
npm install lucide-react framer-motion react-intersection-observer clsx

# 3. Создать базовые файлы
touch src/styles/tokens/{colors,typography,spacing,shadows}.css
touch src/styles/{global,animations}.css
touch src/components