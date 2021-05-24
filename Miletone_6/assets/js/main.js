const app = new Vue({
    el: "#app",
    data: {
        counter: null,
        message: "",
        search: "",
        indexMesagge: "0",
        visibilityInfoMessage: "none",
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
                name: 'Luis',
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
            {
                name: 'Giorgio',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'Andrei va in montagna questo fine settimana',
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
                        text: 'Nono, vuoi venire anche te?',
                        status: 'received',
                        visibility: "none"
                    },
                    {
                        date: '28/03/2020 17:20:10',
                        text: 'Purtroppo sono gia impegnato',
                        status: 'sent',
                        visibility: "none"
                    },
                ],
            },
            {
                name: 'Giulia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'Hai sentito la novita?',
                        status: 'received',
                        visibility: "none"
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'No, raccontami subito!',
                        status: 'sent',
                        visibility: "none"
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Appena ci vediamo ti racconto tutto!',
                        status: 'received',
                        visibility: "none"
                    }
                ],
            },
            {
                name: 'Genoveffo',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'Hai visto la partita?',
                        status: 'received',
                        visibility: "none"
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Si, che partita!',
                        status: 'sent',
                        visibility: "none"
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Veramente un bel gioco!',
                        status: 'received',
                        visibility: "none"
                    }
                ],
            },
            {
                name: 'Thor',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'Io sono il Dio del Tuono!',
                        status: 'received',
                        visibility: "none"
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'E io sono il Dio della programmazione!',
                        status: 'sent',
                        visibility: "none"
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Questa è Guerra!',
                        status: 'received',
                        visibility: "none"
                    }
                ],
            },

        ],
        img_utente: "./assets/img/avatar_io.jpg",
        registra: "registra",
        videochiamata: "none",

    },
    methods: {
        sendMessage() {
            newMessage = {};
            newMessage.text = this.message;
            newMessage.date = dayjs().format("DD/MM/YYYY  HH:mm:ss");
            newMessage.status = "sent";
            newMessage.visibility = "none";

            this.contacts[this.counter].messages.push(newMessage);
            this.message = "";

            setTimeout(() => {
                automaticMessage = {
                    text: "Solo io ti rispondo subito,  " + this.contacts[this.counter].name,
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

        infoMessage(index) {
            this.indexMesagge = index;
            this.visibilityInfoMessage = "block";
            this.contacts[this.counter].messages[index].visibility = "none";
        },

        closeInfoMessage() {
            this.visibilityInfoMessage = "none";
        },

        messaggioVocale() {
            if (this.registra === "registra") {
                console.log("registra");

                navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
                    audioMessage = {
                        text: "",
                        date: dayjs().format("DD/MM/YYYY  HH:mm:ss"),
                        status: "sent",
                        visibility: "none"
                    };
                    this.contacts[this.counter].messages.push(audioMessage);


                    mediaRecorder = new MediaRecorder(stream)
                    mediaRecorder.start()
                    chuck = []

                    mediaRecorder.addEventListener("dataavailable", e => {
                        chuck.push(e.data)
                    })

                    mediaRecorder.addEventListener("stop", e => {
                        blob = new Blob(chuck)
                        audio_url = URL.createObjectURL(blob)
                        audio = new Audio(audio_url)
                        audio.setAttribute("controls", 1)
                        let selezione = this.contacts[this.counter].name
                        let selezioneNumero = (this.contacts[this.counter].messages.length - 1).toString()
                        console.log(selezione + selezioneNumero);
                        //console.log(audio);
                        document.getElementById(selezione + selezioneNumero).appendChild(audio);
                    })

                })
                this.registra = "ferma"
            } else {
                console.log("ferma");
                mediaRecorder.stop()
                this.registra = "registra"
            }
        },

        avviaVideochiamata() {
            this.videochiamata = "flex";
            let constraintObj = {
                audio: false,
                video: {
                    facingMode: "user",
                    with: { min: 640, ideal: 1280, max: 1920 },
                    height: { min: 480, ideal: 720, max: 1080 }
                }
            }

            navigator.mediaDevices.getUserMedia(constraintObj).then(function (mediaStreamObj) {
                let video = document.querySelector("video");
                if ("srcObject" in video) {
                    video.srcObject = mediaStreamObj;
                } else {
                    video.src = window.URL.createObjectURL(mediaStreamObj)
                }
            })

        },

        fermaVideochiamata() {
            this.videochiamata = "none"
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

