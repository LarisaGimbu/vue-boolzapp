const app = new Vue({
  el:'#app',

  data:{
    contacts:[
      {
        name: 'Michele',
        profile: 'img/avatar_1.jpg',
        textMsg: 'Tutto fatto!',
        active: false,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di dargli da mangiare',
              status: 'sent'
          },
          {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        profile: 'img/avatar_2.jpg',
        textMsg: 'Mi piacerebbe ma devo andare a',
        active: false,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
          },
          {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
          },
          {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'received'
          }
        ],
      },
      {
        name: 'Samuel',
        profile: 'img/avatar_3.jpg',
        textMsg: 'Ah scusa!',
        active: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
          },
          {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
          },
          {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
          }
      ],
      },
      {
        name: 'Luisa',
        profile: 'img/avatar_4.jpg',
        textMsg: 'Si, ma preferirei andare al ci',
        active: false,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
          }
        ],
      },
    ],
 
  },

 
});



