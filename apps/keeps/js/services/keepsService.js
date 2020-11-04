import { utilService } from './utilService.js';

export const keepsService = {
    getNotes,
    addNewNote,
    createNewTxtNote
}

var gNotes = [
    {
        type: "noteTxt",
        display: 'noteTxtDisplay',
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "noteImg",
        display: 'noteImgDisplay',
        info: {
            url: "https://www.petfirst.com/wp-content/uploads/2018/03/Breed-Hero-Cavalier-King-Charles-Spaniel-1200x1200.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "noteTodos",
        display: 'noteTodosDisplay',
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        type:'noteVideo',
        display:'noteVideoDisplay',
        info:{
            title:'Cool Video!',
            url:'https://www.youtube.com/embed?v=du8h0Rs6Hp0'
        }
    }
];

function createNewTxtNote(){
    return {
        type: "noteTxt",
        display: 'noteTxtDisplay',
        isPinned: false,
        info: {
            txt: ""
        }
    }
}


function addNewNote(note) {
    gNotes.push(note);
    console.log(gNotes);
}


function getNotes() {
    return Promise.resolve(gNotes);
}


console.log('not the function', gNotes);


