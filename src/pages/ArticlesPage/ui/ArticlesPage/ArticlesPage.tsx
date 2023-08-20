import { Article, ArticleList, ArticleView } from 'entities/Article'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

const article = {
  id: '1',
  title: 'Новини JavaScript',
  subtitle: 'Що нового в JS за 2022 рік?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: ['IT'],
  user: {
    id: '1',
    username: 'Kostya',
    avatar:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nj.com%2Fentertainment%2F2020%2F05%2Feveryones-posting-their-facebook-avatar-how-to-make-yours-even-if-it-looks-nothing-like-you.html&psig=AOvVaw0POudbbcSCKi4ofjUd3r0N&ust=1692610324131000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjFyPv26oADFQAAAAAdAAAAABAE'
  },
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок цього блоку',
      paragraphs: [
        'Програма, яку за традицією називають «Hello, world!», дуже проста. Вона виводить куди-небудь фразу «Hello, world!», або іншу подібну, за допомогою певної мови.',
        "JavaScript — це мова, на якій можна виконувати програми в різних середовищах. У нашому випадку мова йде про браузери та серверну платформу Node.js. Якщо ви до цього моменту ще не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільному комп'ютері, це означає, що ви буквально за кілька секунд від своєї першої JavaScript-програми.",
        'Існують і інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Зазвичай код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати і безпосередньо в код сторінки. Все це робиться за допомогою тегу <script>. Коли браузер виявляє такий код, він виконує його. Деталі про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою за допомогою JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і за допомогою цього ресурсу (шукайте кнопку «Спробуйте самі»), але ми зробимо трохи інакше. А саме, створимо у якомусь текстовому редакторі (наприклад, в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо до нього наступний код:'
      ]
    },
    {
      id: '4',
      type: 'CODE',
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'Заголовок цього блоку',
      paragraphs: [
        'Програма, яку за традицією називають «Hello, world!», дуже проста. Вона виводить куди-небудь фразу «Hello, world!», або іншу подібну, за допомогою певної мови.',
        'Існують і інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Зазвичай код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати і безпосередньо в код сторінки. Все це робиться за допомогою тегу <script>. Коли браузер виявляє такий код, він виконує його. Деталі про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою за допомогою JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і за допомогою цього ресурсу (шукайте кнопку «Спробуйте самі»), але ми зробимо трохи інакше. А саме, створимо у якомусь текстовому редакторі (наприклад, в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо до нього наступний код:'
      ]
    },
    {
      id: '2',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Малюнок 1 - знімок сайту'
    },
    {
      id: '3',
      type: 'CODE',
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    },
    {
      id: '7',
      type: 'TEXT',
      title: 'Заголовок цього блоку',
      paragraphs: [
        "JavaScript — це мова, на якій можна виконувати програми в різних середовищах. У нашому випадку мова йде про браузери та серверну платформу Node.js. Якщо ви до цього моменту ще не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільному комп'ютері, це означає, що ви буквально за кілька секунд від своєї першої JavaScript-програми.",
        'Існують і інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Зазвичай код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати і безпосередньо в код сторінки. Все це робиться за допомогою тегу <script>. Коли браузер виявляє такий код, він виконує його. Деталі про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою за допомогою JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і за допомогою цього ресурсу (шукайте кнопку «Спробуйте самі»), але ми зробимо трохи інакше. А саме, створимо у якомусь текстовому редакторі (наприклад, в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо до нього наступний код:'
      ]
    },
    {
      id: '8',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Малюнок 1 - знімок сайту'
    },
    {
      id: '9',
      type: 'TEXT',
      title: 'Заголовок цього блоку',
      paragraphs: [
        "JavaScript — це мова, на якій можна виконувати програми в різних середовищах. У нашому випадку мова йде про браузери та серверну платформу Node.js. Якщо ви до цього моменту ще не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільному комп'ютері, це означає, що ви буквально за кілька секунд від своєї першої JavaScript-програми."
      ]
    }
  ]
} as Article

const ArticlesPage = memo(() => {
  const { t } = useTranslation()

  return (
    <ArticleList
      articles={Array.from({ length: 16 }).map((_, idx) => ({
        ...article,
        id: `${idx}`
      }))}
      view={ArticleView.BIG}
    />
  )
})

export default ArticlesPage
