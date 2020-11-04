import { utilService } from './utilService.js';

export const keepsService = {
    getNotes,
    addNewNote,
    createNewTxtNote,
    createNewImgNote,
    createNewTodosNote,
    createNewVideoNote
}

var gNotes = [
    {
        id:utilService.makeId(),
        type: "noteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id:utilService.makeId(),
        type: "noteImg",
        info: {
            url: "https://www.petfirst.com/wp-content/uploads/2018/03/Breed-Hero-Cavalier-King-Charles-Spaniel-1200x1200.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id:utilService.makeId(),
        type: "noteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    },
    {
        id:utilService.makeId(),
        type: 'noteVideo',
        info: {
            title: 'Cool Video!',
            url: 'https://www.youtube.com/embed?v=du8h0Rs6Hp0'
        }
    },
    
];



function getIdxById(noteId){
    return gNotes.findIndex(note => note.id === noteId);
}


function createNewTxtNote() {
    return {
        id:utilService.makeId(),
        type: "noteTxt",
        isPinned: false,
        info: {
            txt: ""
        }
    }
}

function createNewImgNote() {
    return {
        id:utilService.makeId(),
        type: 'noteImg',
        info: {
            url: "",
            title: ""
        },
        style: {
            backgroundColor: "#00d"
        }
    }
}

function createNewTodosNote() {
    return {
        id:utilService.makeId(),
        type: "noteTodos",
        info: {
            label: "",
            todos: []
        }
    }
}

function createNewVideoNote(){
    return {
        id:utilService.makeId(),
        type: 'noteVideo',
        info: {
            title: '',
            url: ''
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



console.log(gNotes);
// https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg
// https://media.istockphoto.com/photos/black-french-bulldog-picture-id936319476