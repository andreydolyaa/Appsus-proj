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
    placeNoteOnTop
}

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
            backgroundColor: "#FAE5D3"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteTodos",
        info: {
            label: "Today todos -",
            todos: [
                { txt: "Wash the car", doneAt: null },
                { txt: "Buy groceries", doneAt: 187111111 }
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
            title: 'Cool Video!',
            url: 'https://www.youtube.com/embed?v=du8h0Rs6Hp0'
        },
        style: {
            backgroundColor: "#D4E6F1"
        }
    },
    {
        id: utilService.makeId(),
        type: "noteTodos",
        info: {
            label: "Thing to buy today:",
            todos: [
                { txt: "Milk", doneAt: null },
                { txt: "Bread", doneAt: 187111111 },
                { txt: "Tomatoes", doneAt: 187111111 },
                { txt: "Bananas", doneAt: 187111111 },
                { txt: "Cucumbers", doneAt: 187111111 },
                { txt: "Ice cream", doneAt: 187111111 },
                { txt: "Meats", doneAt: 187111111 },
                { txt: "Onions", doneAt: 187111111 },
                { txt: "Ganja", doneAt: 187111111 }
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
            txt: `fear of the dark!!! -- 
            Fear of the dark ,Fear of the dark 
            I have constant fear that something's always near 
            Fear of the dark, Fear of the dark 
            I have a phobia that someone's always there 

            Have you run your fingers down the wall 
            And have you felt your neck skin crawl 
            When you're searching for the light? 
            Sometimes when you're scared to take a look 
            At the corner of the room 
            You've sensed that something's watching you.
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



function getIdxById(noteId) {
    return gNotes.findIndex(note => note.id === noteId);
}



function deleteNote(noteId) {
    var noteIdx = getIdxById(noteId)
    gNotes.splice(noteIdx, 1);
    console.log(gNotes);
}



function addNewNote(note) {
    gNotes.push(note);
    console.log(gNotes);
}



function placeNoteOnTop(noteId) {
    var noteIdx = getIdxById(noteId);
    var note = gNotes[noteIdx];
    gNotes.splice(noteIdx, 1);
    gNotes.unshift(note);
    console.log(noteId);
}





function getNotes() {
    return Promise.resolve(gNotes);
}



function editedNote(noteId, newNote) {
    var currNoteIdx = getIdxById(noteId);
    gNotes.splice(currNoteIdx, 1, newNote)
    console.log(gNotes);
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
            backgroundColor: "#FFFFFF"
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
            backgroundColor: "#FFFFFF"
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
            backgroundColor: "#FFFFFF"
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
            backgroundColor: "#FFFFFF"
        }
    }
}






console.log(gNotes);
// https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg
// https://media.istockphoto.com/photos/black-french-bulldog-picture-id936319476