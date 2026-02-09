# Интеграция shadcn/ui в проект Ecobeton

## ✅ Установлено

### Зависимости
- ✅ `class-variance-authority` - для вариантов компонентов
- ✅ `clsx` - для условных классов
- ✅ `tailwind-merge` - для слияния Tailwind классов
- ✅ `tailwindcss-animate` - для анимаций
- ✅ `react-hook-form` - для работы с формами
- ✅ `@hookform/resolvers` - резолверы для валидации
- ✅ `zod` - схема валидации

### Компоненты shadcn/ui
- ✅ `Button` - кнопки с вариантами
- ✅ `Input` - поля ввода
- ✅ `Textarea` - многострочные поля
- ✅ `Select` - выпадающие списки
- ✅ `Card` - карточки
- ✅ `Badge` - бейджи
- ✅ `Form` - формы с валидацией
- ✅ `Dialog` - модальные окна
- ✅ `Accordion` - аккордеон (для FAQ)
- ✅ `Tabs` - вкладки
- ✅ `Alert` - уведомления
- ✅ `Label` - метки для форм

## 📁 Структура

```
src/
├── components/
│   └── ui/              # Компоненты shadcn/ui
│       ├── button.tsx
│       ├── input.tsx
│       ├── card.tsx
│       └── ...
├── lib/
│   └── utils.ts        # Утилита cn() для классов
└── ...
```

## 🚀 Использование

### Button

```tsx
import { Button } from "@/components/ui/button"

// Базовое использование
<Button>Кнопка</Button>

// Варианты
<Button variant="default">Основная</Button>
<Button variant="outline">Контурная</Button>
<Button variant="secondary">Вторичная</Button>
<Button variant="ghost">Призрачная</Button>
<Button variant="destructive">Удалить</Button>

// Размеры
<Button size="sm">Маленькая</Button>
<Button size="default">Обычная</Button>
<Button size="lg">Большая</Button>

// С иконкой
<Button>
  <ArrowRight className="mr-2" />
  Отправить
</Button>
```

### Input

```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="email@example.com" />
</div>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Заголовок</CardTitle>
    <CardDescription>Описание</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Содержимое карточки</p>
  </CardContent>
  <CardFooter>
    <Button>Действие</Button>
  </CardFooter>
</Card>
```

### Form с валидацией

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  email: z.string().email("Неверный email"),
  name: z.string().min(2, "Минимум 2 символа"),
})

export function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Отправить</Button>
      </form>
    </Form>
  )
}
```

### Dialog (Модальное окно)

```tsx
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

<Dialog>
  <DialogTrigger asChild>
    <Button>Открыть</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Заголовок</DialogTitle>
      <DialogDescription>Описание</DialogDescription>
    </DialogHeader>
    <p>Содержимое модального окна</p>
  </DialogContent>
</Dialog>
```

### Select

```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Выберите услугу" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="service1">Услуга 1</SelectItem>
    <SelectItem value="service2">Услуга 2</SelectItem>
    <SelectItem value="service3">Услуга 3</SelectItem>
  </SelectContent>
</Select>
```

### Badge

```tsx
import { Badge } from "@/components/ui/badge"

<Badge>Новый</Badge>
<Badge variant="secondary">Вторичный</Badge>
<Badge variant="destructive">Важно</Badge>
<Badge variant="outline">Контур</Badge>
```

### Accordion (для FAQ)

```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Вопрос 1?</AccordionTrigger>
    <AccordionContent>
      Ответ на вопрос 1
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Вопрос 2?</AccordionTrigger>
    <AccordionContent>
      Ответ на вопрос 2
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## 🎨 Кастомизация

### Цвета

Цвета настраиваются через CSS переменные в `src/index.css`. Текущие цвета Ecobeton сохранены в `primary` палитре в `tailwind.config.js`.

### Компоненты

Все компоненты находятся в `src/components/ui/` и могут быть полностью кастомизированы под бренд Ecobeton.

## 📝 Следующие шаги

1. **Миграция QuickForm** - использовать Form компоненты shadcn/ui
2. **Миграция ContactForm** - использовать Form компоненты
3. **Улучшение Card компонентов** - использовать Card из shadcn/ui для ServicesSection, ProjectsSection, Testimonials
4. **Добавление Dialog** - для просмотра сертификатов и деталей проектов
5. **Добавление Accordion** - для FAQ секций

## 🔗 Документация

- [shadcn/ui документация](https://ui.shadcn.com/)
- [Компоненты](https://ui.shadcn.com/docs/components)
- [Примеры](https://ui.shadcn.com/examples)

