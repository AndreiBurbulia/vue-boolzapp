const app = new Vue({
    el: "#app",
    data: {
        counter: 0,
        message: "",
        search: "",
        prova: "none",
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        visibility: "none"
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        visibility: "none"
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        visibility: "none"
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        visibility: "none"
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        visibility: "none"
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        visibility: "none"
                    }
                ],
            },

            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        visibility: "none"
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        visibility: "none"
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        visibility: "none"
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        visibility: "none"
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        visibility: "none"
                    }
                ],
            },
        ],
        img_utente: "./assets/img/avatar_io.jpg",
    },
    methods: {
        sendMessage() {
            // console.log();
            newMessage = {};
            newMessage.text = this.message;
            newMessage.date = dayjs().format("DD/MM/YYYY  HH:mm:ss");
            newMessage.status = "sent";
            newMessage.visibility = "none";

            //console.log(newMessage);
            this.contacts[this.counter].messages.push(newMessage);
            this.message = "";

            setTimeout(() => {
                automaticMessage = {
                    text: "Solo io ti rispondo subito",
                    date: dayjs().format("DD/MM/YYYY  HH:mm:ss"),
                    status: "received",
                    visibility: "none"
                };
                this.contacts[this.counter].messages.push(automaticMessage);

            }, 2000)
        },

        //funzione che rimuove il messagio selezionato
        removeMessage(index) {
            let conferma = confirm("Sei sicuro di voler cancellare il messaggio?");
            if (conferma) {
                this.contacts[this.counter].messages.splice(index, 1);
            } else {
                this.contacts[this.counter].messages[index].visibility = "none";

            }
        },

        showInfo(index) {
            if (this.contacts[this.counter].messages[index].visibility === "none") {
                this.contacts[this.counter].messages[index].visibility = "block";
            } else {
                this.contacts[this.counter].messages[index].visibility = "none";
            }
        },



    },

    computed: {
        filteredList() {
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
        /* con questa funzione va a prendere la mia lista e va a filtrare la lista cercando nel nome se ce il valore che
        ho inserito nell'input con valore search e se il nome comprende quel valore lo inserisce nel array e stampa 
        questo nuovo array */
        //https://codepen.io/AndrewThian/pen/QdeOVa
        //this permit to filter element
    }
})