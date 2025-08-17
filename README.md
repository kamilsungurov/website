# Персональный сайт Камиля

## Описание
Одностраничный лендинг для привлечения клиентов на разработку Telegram-ботов, сайтов, программ и AI-видео.

## Технологии
- **HTML5** - семантическая разметка с поддержкой доступности
- **CSS3** - адаптивный дизайн с темной темой и градиентами
- **JavaScript** - интерактивность и формы
- **SEO** - структурированные данные Schema.org, мета-теги
- **Производительность** - оптимизированные шрифты и изображения

## Структура проекта
```
test_bot_kamil/
├── index.html          # Главная страница
├── styles.css          # Стили сайта
├── script.js           # JavaScript функциональность
├── robots.txt          # Инструкции для поисковых роботов
├── sitemap.xml         # Карта сайта для SEO
├── structured-data.json # Структурированные данные
└── README.md           # Документация
```

## Особенности

### SEO и доступность
- ✅ Семантическая HTML разметка
- ✅ Мета-теги для социальных сетей (Open Graph, Twitter)
- ✅ Структурированные данные Schema.org
- ✅ Атрибуты доступности (aria-labels, roles)
- ✅ Robots.txt и sitemap.xml
- ✅ Оптимизация для поисковых систем

### Адаптивность
- ✅ Мобильная адаптация (768px, 480px)
- ✅ Адаптивные изображения и шрифты
- ✅ Сенсорно-дружественные элементы управления

### Производительность
- ✅ Предзагрузка шрифтов Google Fonts
- ✅ Оптимизированные CSS и JavaScript
- ✅ Плавная прокрутка и анимации

## Контактная информация
- **Telegram**: @Fmkam123
- **WhatsApp**: +7 928 589-99-61
- **Email**: kamilsungurov8@gmail.com
- **YouTube**: https://youtube.com/@rezak_k?si=69xgAvUzkyqrOuoH

## Услуги и цены
- **Telegram-боты**: от 3 000 ₽ (2-5 дней)
- **Сайты и лендинги**: от 10 000 ₽ (3-7 дней)
- **Программы и скрипты**: от 2 000 ₽ (1-3 дня)
- **AI-видео и эдиты**: от 5 000 ₽ (2-4 дня)

---

## 🚀 ИНСТРУКЦИЯ ПО ДЕПЛОЮ

### Вариант 1: GitHub Pages (БЕСПЛАТНО)

1. **Создайте репозиторий на GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ВАШ_USERNAME/kamil-dev.git
   git push -u origin main
   ```

2. **Настройте GitHub Pages**:
   - Перейдите в Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Сохраните настройки

3. **Ваш сайт будет доступен по адресу**:
   `https://ВАШ_USERNAME.github.io/kamil-dev`

### Вариант 2: Netlify (БЕСПЛАТНО)

1. **Перейдите на [netlify.com](https://netlify.com)**
2. **Зарегистрируйтесь/войдите в аккаунт**
3. **Перетащите папку с сайтом** в область "Deploy"
4. **Получите бесплатный поддомен** типа `https://amazing-site-123.netlify.app`

### Вариант 3: Vercel (БЕСПЛАТНО)

1. **Установите Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Деплой**:
   ```bash
   cd /путь/к/папке/сайта
   vercel
   ```

3. **Следуйте инструкциям** в терминале

### Вариант 4: Собственный хостинг

1. **Купите домен** (например, на reg.ru, namecheap.com)
2. **Купите хостинг** (например, Timeweb, Beget, DigitalOcean)
3. **Загрузите файлы** через FTP/SFTP или панель управления
4. **Настройте DNS** для связи домена с хостингом

## 📋 Чеклист перед публикацией

- [ ] Проверьте все ссылки и контакты
- [ ] Убедитесь, что форма отправки работает
- [ ] Протестируйте на мобильных устройствах
- [ ] Проверьте скорость загрузки (PageSpeed Insights)
- [ ] Добавьте Google Analytics (если нужно)
- [ ] Настройте домен (если используете собственный)

## 🔧 Настройка после деплоя

### Обновите URL в файлах:
1. **В index.html** замените `https://kamil-dev.ru` на ваш реальный домен
2. **В sitemap.xml** обновите все URL
3. **В robots.txt** укажите правильный путь к sitemap

### Добавьте аналитику (опционально):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📞 Поддержка

Если возникнут вопросы по деплою или настройке, обращайтесь:
- Telegram: @Fmkam123
- Email: kamilsungurov8@gmail.com

---
*Сайт готов к публикации! 🎉*
