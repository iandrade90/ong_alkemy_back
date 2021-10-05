'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Rodrigo',
      lastName: 'Fernandez',
      email: 'rfernandez@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 1,
      image: 'https://i.pinimg.com/originals/37/2a/cc/372acc72dfb648efd50181542bad3c63.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'María',
      lastName: 'Torres',
      email: 'maritorres@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 1,
      image: 'https://i.pinimg.com/originals/37/2a/cc/372acc72dfb648efd50181542bad3c63.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Carla',
      lastName: 'Solalinde',
      email: 'carlas@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 1,
      image: 'https://concepto.de/wp-content/uploads/2018/04/animales-vertebrados-e1523302137501.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Ricardo',
      lastName: 'Fiorente',
      email: 'ricardo23@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 1,
      image: 'https://pm1.narvii.com/8027/623502a403f3e38438fb1bd0947b74c5f0eadf73r1-256-256v2_hq.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Nicolas',
      lastName: 'Serra',
      email: 'nicolaserra@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 1,
      image: 'https://fotos.perfil.com/2020/02/26/trim/950/534/quokka-02262020-919630.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Pamela',
      lastName: 'Caceres',
      email: 'c.pame@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-syHuMii0YGA0-iJQpzou9FuPPcCeMDy0Tw&usqp=CAU',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Fernando',
      lastName: 'Larreta',
      email: 'ferla@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 1,
      image: 'https://media.ambito.com/p/cbe6d9bb1b0544dc81a323418963b881/adjuntos/239/imagenes/037/614/0037614301/gato.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Cristian',
      lastName: 'Toledo',
      email: 'cristo@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQ4juJ9Q7kEmt7yJvGpkHMWVTSrGomabEqw&usqp=CAU',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Mercedes',
      lastName: 'Rivarola',
      email: 'merce04@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk920MB01xGrgNN4A0goI3FL4qL2el6NmW8g&usqp=CAU',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Laura',
      lastName: 'Acevedo',
      email: 'a.lau90@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 1,
      image: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/182C2/production/_109101099_gettyimages-967315896.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Celeste',
      lastName: 'Acevedo',
      email: 'celeacevedo@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 2,
      image: 'https://concepto.de/wp-content/uploads/2019/03/Reino-animal-item-3.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Julio',
      lastName: 'Cardozo',
      email: 'juliocardozo@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-dP7Euwyqa9Xhcx-ZdfD1lKKr1gENzcVn3Q&usqp=CAU',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Daniela',
      lastName: 'Gonzalez',
      email: 'danigon@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpXwhc568PFtfwqR66j-5cRaqrkUbBL-Vxg&usqp=CAU',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Fabian',
      lastName: 'Caceres',
      email: 'fabicaceres@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxpIAXznvVrkbyHSy5ubvOobYVWEL_dTgHQ&usqp=CAU',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Alejandro',
      lastName: 'Morel',
      email: 'alemorel@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 2,
      image: 'https://udgtv.com/wp-content/uploads/2021/02/Hipop%C3%B3tamo-Nicaragua-EFE-2-696x482-696x482.jpg',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Gabriel',
      lastName: 'Renzo',
      email: 'renzo.g@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4C2lKNAhYCEHqeQLAutO9zD_-vZlLYwAVzg&usqp=CAU',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Lautaro',
      lastName: 'Jimenez',
      email: 'lauji@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPnr0Hf_IwiPDUS8_HPNXFfBvwBd1KKKXEw&usqp=CAU',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Analia',
      lastName: 'Barreto',
      email: 'b.ana@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReK0YXIDf6o34doQCXOX8QDhqUxPDlH5bTDg&usqp=CAU',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Marta',
      lastName: 'Lescano',
      email: 'martales@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqDHxtuarJA7Ffa09-CUW_QkY9qBgQirzqA&usqp=CAU',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      firstName: 'Leticia',
      lastName: 'Paredes',
      email: 'letipa45@test.com',
      // Important: Password not encrypted yet! 
      password: '12345678',
      roleId: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_044JoxOJWUCpt3CB9txW2AjfR4qEe_47lg&usqp=CAU',
      createdAt: new Date,
      updatedAt: new Date
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
