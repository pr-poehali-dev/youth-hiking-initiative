import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const hikes = [
    {
      title: "Горы Кавказа",
      difficulty: "Средний",
      duration: "3 дня",
      price: "8,000 ₽",
      description:
        "Захватывающий маршрут через живописные горные тропы с ночевкой в палатках",
      features: ["Восход в горах", "Костер", "Фотосессия"],
    },
    {
      title: "Лесные тропы",
      difficulty: "Легкий",
      duration: "2 дня",
      price: "5,000 ₽",
      description:
        "Идеальный маршрут для новичков через смешанный лес с озерами",
      features: ["Рыбалка", "Грибы", "Пикник"],
    },
    {
      title: "Экстрим-поход",
      difficulty: "Сложный",
      duration: "5 дней",
      price: "15,000 ₽",
      description:
        "Вызов для опытных туристов: скалолазание и высокогорные переходы",
      features: ["Альпинизм", "Виа-феррата", "Экстрим"],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легкий":
        return "bg-green-100 text-green-800";
      case "Средний":
        return "bg-orange-100 text-orange-800";
      case "Сложный":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Mountain" size={32} className="text-green-600" />
              <h1 className="text-2xl font-bold text-gray-800">ПоходЪ</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#home"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#hikes"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Походы
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Приключения для
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">
                {" "}
                смелых
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Присоединяйся к нашему сообществу молодых путешественников!
              Открывай новые места, заводи друзей и получай незабываемые эмоции.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8"
              >
                <Icon name="MapPin" size={20} className="mr-2" />
                Выбрать маршрут
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">О нас</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы объединяем молодежь в увлекательных походах по самым красивым
              местам России
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Комьюнити</h4>
              <p className="text-gray-600">
                Более 500 активных участников от 16 до 30 лет
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-orange-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Опыт</h4>
              <p className="text-gray-600">
                5 лет организации походов и 200+ маршрутов
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-red-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Безопасность</h4>
              <p className="text-gray-600">
                Сертифицированные гиды и полная страховка
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hikes Section */}
      <section id="hikes" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Походы</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выбери свой уровень приключений — от легких прогулок до
              экстремальных вызовов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {hikes.map((hike, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{hike.title}</CardTitle>
                    <Badge className={getDifficultyColor(hike.difficulty)}>
                      {hike.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {hike.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icon
                          name="Clock"
                          size={16}
                          className="text-gray-500"
                        />
                        <span className="text-sm text-gray-600">
                          {hike.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon
                          name="Wallet"
                          size={16}
                          className="text-gray-500"
                        />
                        <span className="text-sm text-gray-600">
                          {hike.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hike.features.map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-orange-500 hover:from-green-700 hover:to-orange-600 text-white">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Контакты</h3>
            <p className="text-lg text-gray-600">
              Готов к приключениям? Свяжись с нами!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Как нас найти</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-green-600" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-green-600" />
                  <span>info@pohod.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-green-600" />
                  <span>Москва, ул. Туристская, 1</span>
                </div>
              </div>
              <div className="mt-6">
                <h5 className="font-semibold mb-2">Мы в соцсетях:</h5>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Icon name="MessageCircle" size={16} className="mr-1" />
                    Telegram
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Camera" size={16} className="mr-1" />
                    Instagram
                  </Button>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Записаться на поход</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Имя
                    </label>
                    <input
                      className="w-full p-2 border rounded-md"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Телефон
                    </label>
                    <input
                      className="w-full p-2 border rounded-md"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">
                      Выберите поход
                    </label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Горы Кавказа</option>
                      <option>Лесные тропы</option>
                      <option>Экстрим-поход</option>
                    </select>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-green-600 to-orange-500 hover:from-green-700 hover:to-orange-600 text-white">
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Mountain" size={24} className="text-green-400" />
            <h6 className="text-xl font-bold">ПоходЪ</h6>
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 ПоходЪ. Все права защищены. Путешествуй с умом!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
