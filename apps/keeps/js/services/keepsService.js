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
        id:utilService.makeId(),
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
    {
        id:utilService.makeId(),
        type: "noteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do4324 ", doneAt: 187111111 },
                { txt: "Do 345345gt", doneAt: 187111111 },
                { txt: "Do dfsg", doneAt: 187111111 },
                { txt: "Do fdgdfsbs", doneAt: 187111111 },
                { txt: "Do this", doneAt: 187111111 },
                { txt: "Do bdsfbis", doneAt: 187111111 },
                { txt: "Do this", doneAt: 187111111 },
                { txt: "Do tbsdbdfb", doneAt: 187111111 }
            ]
        }
    },
    {
        id:utilService.makeId(),
        type: "noteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#ABEBC6"
        }
    },
    {
        id:utilService.makeId(),
        type: "noteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Babyss!"
        },
        style: {
            backgroundColor: "#BFC9CA"
        }
    },
    {
        id:utilService.makeId(),
        type: "noteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#AED6F1"
        }
    },
    
];



function getIdxById(noteId){
    return gNotes.findIndex(note => note.id === noteId);
}



function deleteNote(noteId){
    var noteIdx = getIdxById(noteId)
    gNotes.splice(noteIdx,1);
    console.log(gNotes);
}



function addNewNote(note) {
    gNotes.push(note);
    console.log(gNotes);
}



function placeNoteOnTop(noteId){
    var noteIdx = getIdxById(noteId);
    var note = gNotes[noteIdx];
    gNotes.splice(noteIdx,1);
    gNotes.unshift(note);
}





function getNotes() {
    return Promise.resolve(gNotes);
}



function editedNote(noteId,newNote){
    var currNoteIdx = getIdxById(noteId);
    gNotes.splice(currNoteIdx,1,newNote)
    console.log(gNotes);
}







function createNewTxtNote() {
    return {
        id:utilService.makeId(),
        type: "noteTxt",
        isPinned: false,
        info: {
            txt: ""
        },
        style: {
            backgroundColor: "#A2D9CE"
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
            backgroundColor: "#A2D9CE"
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
        },
        style: {
            backgroundColor: "#A2D9CE"
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
        },
        style: {
            backgroundColor: "#A2D9CE"
        }
    }
}






console.log(gNotes);
// https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg
// https://media.istockphoto.com/photos/black-french-bulldog-picture-id936319476