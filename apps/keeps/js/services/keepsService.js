import { utilService } from './utilService.js';

export const keepsService = {
    getNotes,
    addNewNote,
    createNewTxtNote,
    createNewImgNote,
    createNewTodosNote,
    createNewVideoNote,
    deleteNote,
    editedNote,
    placeNoteOnTop,
    changeVideoUrl,
    searchNotes
}



var gFiltredNotes = [];
var gNotes = [
    {
        id: utilService.makeId(),
        type: "noteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#FAD7A0"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteImg",
        info: {
            url: "https://www.petfirst.com/wp-content/uploads/2018/03/Breed-Hero-Cavalier-King-Charles-Spaniel-1200x1200.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#D4EFDF"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteTodos",
        info: {
            label: "Today todos -",
            todos: [
                { txt: "Wash the car", doneAt: false },
                { txt: "Buy groceries", doneAt: false }
            ]
        },
        style: {
            backgroundColor: "#D4E6F1"
        }
    },
    {
        id: utilService.makeId(),
        type: 'noteVideo',
        info: {
            title: 'Great Music!',
            url: "https://www.youtube.com/embed/JpJUKbhCr-A",
        },
        style: {
            backgroundColor: "#D4E6F1"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteTodos",
        info: {
            label: "Things to buy today:",
            todos: [
                { txt: "Milk", doneAt: false },
                { txt: "Bread", doneAt: false },
                { txt: "Tomatoes", doneAt: false },
                { txt: "Bananas", doneAt: false },
                { txt: "Cucumbers", doneAt: false },
                { txt: "Ice cream", doneAt: false },
                { txt: "Meats", doneAt: false },
                { txt: "Onions", doneAt: false },
                { txt: "Ganja", doneAt: false }
            ]
        },
        style: {
            backgroundColor: "#BFC9CA"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteTxt",
        isPinned: true,
        info: {
            txt: `Plutonium is a radioactive chemical element with the symbol Pu and atomic number 94. It is an actinide metal of silvery-gray appearance that tarnishes when exposed to air, and forms a dull coating when oxidized. The element normally exhibits six allotropes and four oxidation states. It reacts with carbon, halogens, nitrogen, silicon, and hydrogen.
            `
        },
        style: {
            backgroundColor: "#AED6F1"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteTxt",
        isPinned: true,
        info: {
            txt: "BARBER TODAY AT 17:00 !! DON'T FORGET"
        },
        style: {
            backgroundColor: "#ABEBC6"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteImg",
        info: {
            url: "https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg",
            title: "DOGGO"
        },
        style: {
            backgroundColor: "#FADBD8"
        }
    },

];



function searchNotes(word) {
    gFiltredNotes = gNotes.filter(note =>
        note.type === 'noteTxt' && note.info.txt.toLowerCase().includes(word.toLowerCase())
        || note.type === 'noteImg' && note.info.title.toLowerCase().includes(word.toLowerCase())
        || note.type === 'noteTodos' && note.info.label.toLowerCase().includes(word.toLowerCase())
        || note.type === 'noteVideo' && note.info.title.toLowerCase().includes(word.toLowerCase())
    );
    return gFiltredNotes;
}



function changeVideoUrl(url) {
    console.log(url);
    return url.replace('watch?v=', 'embed/');
}


function getIdxById(noteId) {
    return gNotes.findIndex(note => note.id === noteId);
}



function deleteNote(noteId) {
    var noteIdx = getIdxById(noteId)
    gNotes.splice(noteIdx, 1);
}



function addNewNote(note) {
    gNotes.unshift(note);
}



function placeNoteOnTop(noteId) {
    var noteIdx = getIdxById(noteId);
    var note = gNotes[noteIdx];
    gNotes.splice(noteIdx, 1);
    gNotes.unshift(note);
}






function getNotes() {
    return Promise.resolve(gNotes);
}



function editedNote(noteId, newNote) {
    var currNoteIdx = getIdxById(noteId);
    gNotes.splice(currNoteIdx, 1, newNote)
}







function createNewTxtNote() {
    return {
        id: utilService.makeId(),
        type: "noteTxt",
        isPinned: false,
        info: {
            txt: ""
        },
        style: {
            backgroundColor: "#D4E6F1"
        }
    }
}

function createNewImgNote() {
    return {
        id: utilService.makeId(),
        type: 'noteImg',
        info: {
            url: "",
            title: ""
        },
        style: {
            backgroundColor: "#D4E6F1"
        }
    }
}

function createNewTodosNote() {
    return {
        id: utilService.makeId(),
        type: "noteTodos",
        info: {
            label: "",
            todos: []
        },
        style: {
            backgroundColor: "#ABEBC6"
        }
    }
}

function createNewVideoNote() {
    return {
        id: utilService.makeId(),
        type: 'noteVideo',
        info: {
            title: '',
            url: ''
        },
        style: {
            backgroundColor: "#D4E6F1"
        }
    }
}






console.log('sdfsdfsdfsdf',gNotes);
// https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg
// https://media.istockphoto.com/photos/black-french-bulldog-picture-id936319476