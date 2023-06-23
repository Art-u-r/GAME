/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Коля',
          email: '1@1',
          password: '123',
          count: null,
        },
        {
          name: 'Женя',
          email: '2@2',
          password: '123',
          count: null,
        },
        {
          name: 'Павел',
          email: '3@3',
          password: '123',
          count: null,
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'Эльбрус',
        },
        {
          title: 'Фильмы',
        },
        {
          title: 'JavaScript',
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Quizzes',
      [
        {
          question: 'Сколько всего фаз на нашем буткемпе?',
          answer: '4',
          point: 100,
          result: null,
          theme_id: 1,
        },
        {
          question: 'В какую компанию чаще всего попадают выпускники Эльбруса?',
          answer: 'Сбербанк',
          point: 200,
          result: null,
          theme_id: 1,
        },
        {
          question: 'Как зовут офис-менеджера',
          answer: 'Соня',
          point: 300,
          result: null,
          theme_id: 1,
        },
        {
          question: 'Сколько частей фильмов в истории Гарри Поттера?',
          answer: '7',
          point: 200,
          result: null,
          theme_id: 2,
        },
        {
          question: 'Сколько было актеров, игравших Бэтмена в фильмах с 2000-ых годов?',
          answer: '3',
          point: 300,
          result: null,
          theme_id: 2,
        },
        {
          question: 'Сколько фильмов срежиссировал Qweнтин Тарантино?',
          answer: '9',
          point: 400,
          result: null,
          theme_id: 2,
        },
        {
          question: 'Map - мутирующий метод массива?',
          answer: 'нет',
          point: 100,
          result: null,
          theme_id: 3,
        },
        {
          question: 'null и undefined - что из них явно присвоенное значение?',
          answer: 'null',
          point: 300,
          result: null,
          theme_id: 3,
        },
        {
          question: 'В каком году появился JavaScript?',
          answer: '1995',
          point: 500,
          result: null,
          theme_id: 3,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Themes', null, {});
    await queryInterface.bulkDelete('Quizzes', null, {});
  },
};
