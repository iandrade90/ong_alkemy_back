"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Entries", [
      {
        name: "Novedad de muestra 1",
        content:
          "<p>Esto es una novedad de prueba, En esta sección se pueden agregar novedades de <strong>cualquier índole</strong>. Recuerde que estas novedades se verán en el Home de la página por lo que puede aprovechar para mostrarle al público el lado más interesante",
        image:
          "https://cdn.pixabay.com/photo/2018/05/09/22/44/piglet-3386356_960_720.jpg",
        type: "News",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Novedad de muestra 2",
        content:
          "<p>Esto es una novedad de prueba, En esta sección se pueden agregar novedades de <strong>cualquier índole</strong>. Recuerde que estas novedades se verán en el Home de la página por lo que puede aprovechar para mostrarle al público el lado más interesante",
        image:
          "https://cdn.pixabay.com/photo/2017/10/31/20/57/hands-2906458_960_720.jpg",
        type: "News",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Novedad de muestra 3",
        content:
          "<p>Esto es una novedad de prueba, En esta sección se pueden agregar novedades de <strong>cualquier índole</strong>. Recuerde que estas novedades se verán en el Home de la página por lo que puede aprovechar para mostrarle al público el lado más interesante",
        image:
          "https://cdn.pixabay.com/photo/2020/01/11/04/16/elephants-4756614_960_720.jpg",
        type: "News",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Novedad de muestra 4",
        content:
          "<p>Esto es una novedad de prueba, En esta sección se pueden agregar novedades de <strong>cualquier índole</strong>. Recuerde que estas novedades se verán en el Home de la página por lo que puede aprovechar para mostrarle al público el lado más interesante",
        image:
          "https://cdn.pixabay.com/photo/2014/11/03/17/40/leopard-515509_960_720.jpg",
        type: "News",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Novedad de muestra 5",
        content:
          "<p>Esto es una novedad de prueba, En esta sección se pueden agregar novedades de <strong>cualquier índole</strong>. Recuerde que estas novedades se verán en el Home de la página por lo que puede aprovechar para mostrarle al público el lado más interesante",
        image:
          "https://cdn.pixabay.com/photo/2015/09/05/19/37/ice-924747_960_720.jpg",
        type: "News",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Novedad de muestra 6",
        content:
          "<p>Esto es una novedad de prueba, En esta sección se pueden agregar novedades de <strong>cualquier índole</strong>. Recuerde que estas novedades se verán en el Home de la página por lo que puede aprovechar para mostrarle al público el lado más interesante",
        image:
          "https://cdn.pixabay.com/photo/2021/09/15/21/29/lake-6627781_960_720.jpg",
        type: "News",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
