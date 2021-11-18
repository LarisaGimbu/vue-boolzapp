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
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent',
          },
          {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received',
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
            status: 'sent',
          },
          {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
          },
          {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
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
            status: 'received',
          },
          {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
          },
          {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received',
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
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema ',
            status: 'received',
          }
        ],
      },
    ],
    activeChat : 0,

    textInput: '',

    searchChat: '',

    showUtilityBox: -1,

  },

  methods:{
    getLastMessage(index){
      if(this.contacts[index].messages != 0){
        lastMessage= this.contacts[index].messages[this.contacts[index].messages.length -1].message;

        if(lastMessage.length > 30){
          lastMessage = lastMessage.substr(0 , 30);
        }

        return lastMessage;
      }
      

      
    },
    getLastDate(index){
      if(this.contacts[index].messages != 0){
        lastDate= this.contacts[index].messages[this.contacts[index].messages.length -1].date;

        return lastDate;
      }
      
    },

    getLastAccess(){
      if(this.contacts[this.activeChat].messages != 0){
        lastAccess= this.contacts[this.activeChat].messages[this.contacts[this.activeChat].messages.length -1].date;

      }else{
        lastAccess = dayjs().format("DD/MM/YYYY HH:mm:ss");
      }
      
      return `Ultimo accesso ${lastAccess}`;
    },

    insertNewMessage(){

      if(this.textInput != ''){
        this.contacts[this.activeChat].messages.push({
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
          message: this.textInput,
          status: 'sent',
          showUtility: false
          
        })

        switch(this.textInput.toUpperCase()){
          case 'CIAO':
          case 'BUONGIORNO':
            reply= 'Ciao!';
            break;
          case 'COME STAI?':
            reply= 'Bene tu?';
            break;
          case 'BENE':
          case 'BENE DAI':
          case 'DEVO DIRE BENE':
          case 'MOLTO BENE':
          case 'BENE GRAZIE':
            reply= 'Mi fa piacere';
            break;
          case 'QUANDO?':
            reply= 'Quando vuoi tu';
            break;
          case 'TI AMO':
            reply= 'Scusa ma io no';
            break;
          case 'TI VA DI VEDERCI?':
          case 'TI VA DI USCIRE?':
          case 'POSSIAMO PARLARE?':
            reply= 'Si va bene!'
            break;
          default:
            reply= 'Scusa non ho capito cosa hai scritto'
          
        }
  
        this.textInput ='';
  
        setTimeout(()=>{
          
          this.contacts[this.activeChat].messages.push({
            date: dayjs().format("DD/MM/YYYY HH:mm"),
            message: reply,
            status: 'received',
            showUtility: false
          })
  
        }, 3000)
      }
      

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
      
    },

    closeUtilityBox(index){
      if(this.showUtilityBox === index){
        this.showUtilityBox = -1;
      }else{
        this.showUtilityBox = index;
      }
    },

    getMessageDelete(index){

      if(confirm('Sei sicuro di voler eliminare il messaggio?')){
        this.showUtilityBox = -1;
        this.contacts[this.activeChat].messages.splice(index, 1);
      }
     
    }
    
  }

});


