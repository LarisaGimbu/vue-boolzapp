const app = new Vue({
  el:'#app',

  data:{
    contacts:[
      {
        name: 'Michele',
        profile: 'img/avatar_1.jpg',
        textMsg: 'Tutto fatto!',
        date:'15/11/2021 15.36',
        active: false
      },
      {
        name: 'Fabio',
        profile: 'img/avatar_2.jpg',
        textMsg: 'Mi piacerebbe ma devo andare a',
        date:'15/11/2021 10.02',
        active: false
      },
      {
        name: 'Samuel',
        profile: 'img/avatar_3.jpg',
        textMsg: 'Ah scusa!',
        date:'13/11/2021 18.55',
        active: true
      },
      {
        name: 'Luisa',
        profile: 'img/avatar_4.jpg',
        textMsg: 'Si, ma preferirei andare al ci',
        date:'13/11/2021 12.22',
        active: false
      }
    ]
  }
});