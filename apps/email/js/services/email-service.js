import {storage} from '../services/storage-service.js';

var gEmails= [
    {
        id:'em01',
        from:'goolge tech',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false, 
        sentAt : 1551133930594,
    },
    {
        id:'em02',
        from:'goolge tech',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false, 
        sentAt :1580821161 ,     
    },
    {
        id:'em03',
        from:'goolge tech',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false, 
        sentAt : 1572872361,
    },
]

var DATA_KEY_EMAILS ='emailsDB'

loadEmailsFromStorage();  /// move to

export const emailService = {
    loadEmailsFromStorage,
    getEmails,
    getSelectedEmail,
    removeEmail,
    setEmailAsRead,
    setEmailAsUnread,
    getUnreadEamils,
}

function getUnreadEamils(){
    var res = gEmails.filter(email => {
        return email.isRead === false;
      })
    var unreadEmailCount = res.length
    return Promise.resolve(unreadEmailCount);
}

function setEmailAsUnread(emailID){
    var idx = getEmailInxByID(emailID)
    gEmails[idx].isRead = false
    return Promise.resolve('Email unread');
}

function setEmailAsRead(emailID){
    var idx = getEmailInxByID(emailID)
    gEmails[idx].isRead =true
    return Promise.resolve('Email read');
}

function removeEmail(emailID){
    console.log('emailId',emailID)
    var idx = getEmailInxByID(emailID)
    gEmails.splice(idx, 1);
    console.log('gEmails',gEmails)
    saveEmailsToSorage()
    return Promise.resolve('Email deleted');
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

