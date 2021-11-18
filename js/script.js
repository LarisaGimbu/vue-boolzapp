const app = new Vue({
  el:'#app',
 
  data:{
    contacts:[
      {
        name: 'Michele',
        avatar: 'img/avatar_1.jpg',
        visible: true,
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
        avatar: 'img/avatar_2.jpg',
        visible: true,
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
              status: 'sent'
          }
        ],
      },
      {
        name: 'Samuel',
        avatar: 'img/avatar_3.jpg',
        visible: true,
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
        avatar: 'img/avatar_6.jpg',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema ',
              status: 'received'
          }
        ],
      },
    ],
    activeChat : 0,

    textInput: '',

    searchChat: '',
  },

  methods:{
    getLastMessage(index){
      lastMessage= this.contacts[index].messages[this.contacts[index].messages.length -1].message;

      if(lastMessage.length > 30){
        lastMessage = lastMessage.substr(0 , 30);
      }

      return lastMessage;

      
    },
    getLastDate(index){
      lastDate= this.contacts[index].messages[this.contacts[index].messages.length -1].date;

      return lastDate
    },

    insertNewMessage(){
      this.contacts[this.activeChat].messages.push({
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        message: this.textInput,
        status: 'sent'
      })

      this.textInput ='';

      setTimeout(()=>{
        
        this.contacts[this.activeChat].messages.push({
          date: dayjs().format("DD/MM/YYYY HH:mm"),
          message: 'ok',
          status: 'received'
        })

      }, 3000)

    },

    getSearchChat(){
      
      for(let i= 0; i<= this.contacts.length; i++){
        if(this.contacts[i].name.toUpperCase().includes(this.searchChat.toUpperCase())){
          this.contacts[i].visible = true;
        }else{
          this.contacts[i].visible = false;
        }

        console.log(this.contacts[i].visible);
      }
      
    }

    
  }

});


