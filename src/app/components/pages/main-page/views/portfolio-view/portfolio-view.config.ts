import { IPortfolioItem } from '../../../../../models/portfolio-item.interface';

export const PORTFOLIO_LIST: IPortfolioItem[] = [
  {
    name: 'Отэко',
    category: 'commercials',
    description:
      'Новогодний анимационный ролик для компании ОТЭКО. Агенство - enterprise 360',
    coverUrl:
      'media/images/oteko.jpg',
    videoUrl: 'https://player.vimeo.com/video/1075073678?h=250328ffc1',
  },
  {
    name: 'ВШЭ + ОРЗ Промо',
    category: 'commercials',
    coverUrl:
      'media/images/vshe-promo.jpg',
    videoUrl: 'https://player.vimeo.com/video/1075063725?h=649f2284a9',
  },
  {
    name: 'ВШЭ + ОРЗ Визитка',
    category: 'commercials',
    coverUrl:
      'media/images/vshe-vizitka.jpeg',
    videoUrl: 'https://player.vimeo.com/video/1075058540?h=4b031da711',
  },
  {
    name: 'Мудтрейлер фильма “Леди Макбет Мценского уезда”',
    category: 'commercials',
    description: `
      Мудтрейлер будущего фильма.
      </br></br>
      Катерина - молодая жена 50ти летнего Зиновия Борисовича, властного купца. Мечтая о любви, она заводит любовника - Сергея. 
      В одну из ночей, неожиданно для любовников, муж возвращается домой.
    `,
    coverUrl:
      'media/images/macbeth.png',
    videoUrl: 'https://player.vimeo.com/video/1075061604?h=7d09495446',
  },
  {
    name: 'НИШТЯК БРАТОК',
    category: 'commercials',
    description: 'Имиджевый ролик для бренда скейтеров и работяг',
    coverUrl:
      'media/images/nb.jpg',
    videoUrl: 'https://player.vimeo.com/video/1074966848?h=b3e6b08846',
  },
  {
    name: 'Шедевры русского села. Львовское кольцо',
    category: 'cinema',
    description: `
      Герои документального фильма  - сооружения, возведенные в тверской глубинке по проектам Николая Львова, и люди, 
      сохраняющие эти архитектурные жемчужины. Жемчужины, которые составляют собой ожерелье под названием "Львовское кольцо".
    `,
    coverUrl:
      'media/images/doc.avif',
    videoUrl: 'https://player.vimeo.com/video/1074967076?h=e0328afb8c',
  },
  {
    name: 'параНОРМАЛЬНАЯ',
    category: 'cinema',
    description: `
      Казалось бы, Наташа - абсолютно обычная девушка. Но она утверждает, что встречается.. с призраком! 
      Кто она - городская сумасшедшая, или отчаянная любящая женщина?
    `,
    coverUrl:
      'media/images/paraNORMAL.JPG',
    videoUrl: 'https://player.vimeo.com/video/1075062190?h=7e91b0d101',
  },
  {
    name: 'O.M.Y',
    category: 'cinema',
    description: `
      Авторский фильм о самоощущении во время депрессии и попытке выбраться из нее
    `,
    coverUrl:
      'media/images/omy-cover.avif',
    videoUrl: 'https://player.vimeo.com/video/1075059578?h=63a755e722',
  },
  {
    name: 'Клип-кавер “Шаланды полные кефали”',
    category: 'NDA',
    description: `
      Клип-кавер-поздравление на песню “Шаланды полные кефали”
    `,
    coverUrl:
      'media/images/shalangy_1.jpg',
    photoes: [
      'media/images/shalangy_1.jpg',
      'media/images/shalangy_2.jpg',
      'media/images/shalangy_3.jpg',
      'media/images/shalangy_4.jpg',
      'media/images/shalangy_5.jpg',
      'media/images/shalangy_6.jpg',
      'media/images/shalangy_7.jpg',
      'media/images/shalangy_8.jpg',
      'media/images/shalangy_9.jpg'
    ],
  },
  {
    name: 'МОНЕТА',
    category: 'commercials',
    description: `
      Поздравительный ролик для клиентов компании МОНЕТА”
    `,
    coverUrl:
      'media/images/moneta.jpg',
    videoUrl: 'https://player.vimeo.com/video/1075059275?h=c3c1a20958',
  },
];
