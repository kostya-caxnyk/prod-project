import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Article } from 'entities/Article'
import {
  ArticleBlockType,
  ArticleType
} from 'entities/Article/model/types/article'
import { ArticleDetails } from './ArticleDetails'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
}

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
  <ArticleDetails {...args} />
)

const article: Article = {
  id: '1',
  title: 'Новини JavaScript',
  subtitle: 'Що нового в JS за 2022 рік?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  user: { id: '1', avatar: '', username: 'Kostya' },
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок цього блоку',
      paragraphs: [
        'Програма, яку за традицією називають «Hello, world!», дуже проста. Вона виводить куди-небудь фразу «Hello, world!», або іншу подібну, за допомогою певної мови.',
        "JavaScript — це мова, на якій можна виконувати програми в різних середовищах. У нашому випадку мова йде про браузери та серверну платформу Node.js. Якщо ви до цього моменту ще не написали жодного рядка коду на JS і читаєте цей текст у браузері, на настільному комп'ютері, це означає, що ви буквально за кілька секунд від своєї першої JavaScript-програми.",
        'Існують і інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Зазвичай код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати і безпосередньо в код сторінки. Все це робиться за допомогою тегу <script>. Коли браузер виявляє такий код, він виконує його. Деталі про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою за допомогою JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і за допомогою цього ресурсу (шукайте кнопку «Спробуйте самі»), але ми зробимо трохи інакше. А саме, створимо у якомусь текстовому редакторі (наприклад, в VS Code або Notepad++) новий файл, який назвемо hello.html, і додамо до нього наступний код:'
      ]
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    }
  ]
}

export const Normal = Template.bind({})
Normal.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article
    }
  })
]

export const Loading = Template.bind({})
Loading.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article
    }
  })
]

export const Error = Template.bind({})
Error.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article
    }
  })
]
