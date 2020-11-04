import {storage} from '../services/storage-service.js';

var gEmails= [
    {
    id:'em01',
    subject: 'Wassap?',
     body: 'Pick up!',
      isRead: false, 
      sentAt : 1551133930594
    },
    {
    id:'em02',
    subject: 'Wassap?',
    body: 'Pick up!',
     isRead: false, 
     sentAt : 1551133930594
    },
    {
    id:'em03',
    subject: 'Wassap?',
    body: 'Pick up!',
    isRead: false, 
    sentAt : 1551133930594
    },
]

var DATA_KEY_EMAILS ='emailsDB'

loadEmailsFromStorage();  /// move to

export const emailService = {
    loadEmailsFromStorage,
    getEmails,
    getSelectedEmail,
}

function getEmailInxByID(emailID){
    const idx = gEmails.findIndex(email => email.id === emailID);
    return idx
}

function getSelectedEmail(emailID){
    console.log(emailID)
    var idx = getEmailInxByID(emailID);
    console.log('service',gEmails[idx])
    return Promise.resolve(gEmails[idx]);
}

function getEmails(){
    return Promise.resolve(gEmails);
}

function saveEmailsToSorage(){
    console.log('saving to storage')
    storage.saveToStorage( DATA_KEY_EMAILS, gEmails)
}
function loadEmailsFromStorage(){
    console.log('loading from storage')
    let emailsFromStorage = storage.loadFromStorage(DATA_KEY_EMAILS)
    if(emailsFromStorage) gEmails = emailsFromStorage 
}

