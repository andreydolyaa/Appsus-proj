import { utilService } from './utilService.js';

export const keepsService = {
    getNotes,
    addNewNote
}

var gNotes = [
    {
        type: "noteTxt",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "noteImg",
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "noteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];



function addNewNote(note){
    gNotes.push(note);
    console.log(gNotes);
}


function getNotes(){
    return Promise.resolve(gNotes);
}


console.log('not the function',gNotes);


