# Устранение проблем с shadcn/ui

## Ошибка 500 (Internal Server Error)

### ✅ Исправлено

1. **Удалены директивы "use client"**
   - Удалены из `form.tsx` и `accordion.tsx`
   - Эти директивы используются только в Next.js, не в Vite

2. **Исправлена конфигурация Vite**
   - Обновлен `vite.config.ts` для правильной работы с path aliases в Windows
   - Использован `fileURLToPath` для определения `__dirname` в ES модулях

### Проверка

Если ошибка 500 все еще возникает:

1. **Остановите dev сервер** (Ctrl+C)

2. **Очистите кэш и переустановите зависимости:**
   ```bash
   rm -rf node_modules
   rm -rf .vite
   npm install
   ```

3. **Перезапустите dev сервер:**
   ```bash
   npm run dev
   ```

4. **Проверьте консоль браузера** на наличие ошибок

### Возможные причины ошибки 500

1. **Проблемы с path aliases**
   - Убедитесь, что `vite.config.ts` правильно настроен
   - Проверьте, что `tsconfig.json` содержит правильные path aliases

2. **Проблемы с импортами**
   - Убедитесь, что все компоненты ui используют правильные пути (`@/components/ui/...`)
   - Проверьте, что `src/lib/utils.ts` существует и экспортирует функцию `cn()`

3. **Проблемы с CSS переменными**
   - Убедитесь, что `src/index.css` содержит все необходимые CSS переменные
   - Проверьте, что `tailwind.config.js` правильно настроен

4. **Проблемы с зависимостями**
   - Убедитесь, что все зависимости установлены: `npm install`
   - Проверьте версии зависимостей в `package.json`

### Проверка конфигурации

#### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

#### tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

#### src/lib/utils.ts
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Если проблема не решена

1. Проверьте логи сервера разработки в терминале
2. Проверьте консоль браузера (F12) на наличие ошибок JavaScript
3. Убедитесь, что все файлы компонентов ui существуют в `src/components/ui/`
4. Попробуйте пересобрать проект: `npm run build`

### Контакты для поддержки

Если проблема не решена, проверьте:
- [Документация shadcn/ui](https://ui.shadcn.com/)
- [Документация Vite](https://vitejs.dev/)
- [Документация Tailwind CSS](https://tailwindcss.com/)

