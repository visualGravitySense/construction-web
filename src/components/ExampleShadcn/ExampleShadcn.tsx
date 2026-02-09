import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle } from "lucide-react"

/**
 * Пример компонента, использующего shadcn/ui
 * Этот компонент можно использовать как референс при миграции существующих компонентов
 */
const ExampleShadcn = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Примеры компонентов shadcn/ui</h2>
          <p className="text-gray-600 mb-6">
            Все компоненты готовы к использованию и полностью кастомизированы под проект Ecobeton
          </p>
        </div>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Кнопки</CardTitle>
            <CardDescription>Различные варианты кнопок</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button>Основная</Button>
              <Button variant="outline">Контурная</Button>
              <Button variant="secondary">Вторичная</Button>
              <Button variant="ghost">Призрачная</Button>
              <Button variant="destructive">Удалить</Button>
              <Button size="sm">Маленькая</Button>
              <Button size="lg">Большая</Button>
              <Button>
                <ArrowRight className="mr-2" />
                С иконкой
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Бейджи</CardTitle>
            <CardDescription>Для статусов и меток</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Новый</Badge>
              <Badge variant="secondary">Вторичный</Badge>
              <Badge variant="destructive">Важно</Badge>
              <Badge variant="outline">Контур</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Form Inputs */}
        <Card>
          <CardHeader>
            <CardTitle>Поля ввода</CardTitle>
            <CardDescription>Примеры форм</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Введите имя" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
              <Button className="w-full">
                <CheckCircle className="mr-2" />
                Отправить
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="text-primary-600" />
              shadcn/ui успешно интегрирован!
            </CardTitle>
            <CardDescription>
              Все компоненты готовы к использованию в проекте Ecobeton
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Компоненты установлены и настроены
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Tailwind CSS интегрирован
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                TypeScript поддержка
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Доступность (a11y) из коробки
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Начать миграцию компонентов
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default ExampleShadcn

