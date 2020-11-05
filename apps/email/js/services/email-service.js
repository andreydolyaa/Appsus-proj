import {storage} from '../services/storage-service.js';
import {utils} from '../../../../js/services/util-service.js';

var gEmails = [
    {
        id:'em01',
        from:'google tech',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        isNew:true,
        isSent: false,
        isDraft: false, 
        isStar:false,
        sentAt : 1551133930594,
    },
    {
        id:'em02',
        from:'goolge support',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false, 
        isNew:true,
        isSent: false, 
        isDraft: false,
        isStar:false,
        sentAt :1580821161 ,     
    },
    {
        id:'em03',
        from:'facebook',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false, 
        isNew:true,
        isSent: false, 
        isDraft: false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em04',
        from:'twiiter',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false, 
        isNew:false,
        isSent: false, 
        isDraft: false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em05',
        from:'Steave Wazzniak',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false, 
        isNew:true,
        isSent: false, 
        isDraft:false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em06',
        from:'Tony Stark',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false, 
        isNew:true,
        isSent: false, 
        isDraft:false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em07',
        from:'Thor God of Thunder',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true, 
        isNew:true,
        isSent: false, 
        isDraft:false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em08',
        from:'Peter Quill aka Star-Lord:',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true, 
        isNew:true,
        isSent: false, 
        isDraft:false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em09',
        from:'Gal Gadot aka Wonder women:',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true, 
        isNew:true,
        isSent: false, 
        isDraft:false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em010',
        from:'God',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: true, 
        isNew:false,
        isSent: false, 
        isDraft:false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em011',
        from:'Instagram draft',
        subject: 'Wassap? ',
        body: 'Pick up!',
        isRead: false, 
        isNew:false,
        isSent: false, 
        isDraft: true,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em012',
        from:'Steave Jobs star',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false, 
        isNew:false,
        isSent: false, 
        isDraft:false,
        isStar:true,
        sentAt : 1572872361,
    },
    {
        id:'em013',
        from:'twiiter sent',
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false, 
        isNew:false,
        isSent: true, 
        isDraft: false,
        isStar:false,
        sentAt : 1572872361,
    },
    
]

var gEmailsSent = [


]

export const emailService = {
    loadEmailsFromStorage,
    getEmails,
    getEmailsInbox,
    getSelectedEmail,
    getEmailsSent,
    getUnreadEamilsCount,

    setEmailAsRead,
    setEmailAsUnread,
    setEmailStar,

    updateEmailsSent,
    updateEmailsDraft,

    removeEmail,
}

var DATA_KEY_EMAILS ='emailsDB'
var DATA_KEY_EMAILS_SENT ='emailsSentDB'

loadEmailsFromStorage();  /// move to
loadEmailsFromStorageSent();  /// move to
 


function updateEmailsDraft(sentMeail){
    sentMeail.id = utils.makeId();
    sentMeail.sentAt =  utils.getDateTimestamp();
    sentMeail.isDraft = true
    var sentMailCopy = JSON.parse(JSON.stringify(sentMeail))
    console.log('sentMeail',sentMeail)
    console.log('gEmails',gEmails)
    gEmails.push(sentMailCopy)

    //saveEmailsToSorage(DATA_KEY_EMAILS_SENT, gEmails)
    return Promise.resolve('email draft');
}

function updateEmailsSent(sentMeail){

    sentMeail.id = utils.makeId();
    sentMeail.sentAt =  utils.getDateTimestamp();
    sentMeail.isSent = true
    var sentMailCopy = JSON.parse(JSON.stringify(sentMeail))
    gEmails.push(sentMailCopy)

    saveEmailsToSorage(DATA_KEY_EMAILS_SENT, gEmails)
    return Promise.resolve('email sent');
}

function setEmailStar(emailID){
    var idx = getEmailInxByID(emailID)
    gEmails[idx].isStar = !gEmails[idx].isStar
    return Promise.resolve('Email set as Stared');
}

function getUnreadEamilsCount(){
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
    saveEmailsToSorage(DATA_KEY_EMAILS, gEmails)
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

function getEmailsSent(){
    var res = gEmails.filter(email => {
        return email.isSent === true;
    })
    console.log('getEmailsSent() gEmails',gEmails)
    console.log('getEmailsSent() res',res)
    gEmailsSent = res;
    return Promise.resolve(gEmailsSent);
}

function getEmailsInbox(){
    var res = gEmails.filter(email => {
        return email.isNew === true;
    })
    return Promise.resolve(res);
}

function getEmails(){
    return Promise.resolve(gEmails);
}

function saveEmailsToSorage(dataKey, arr){
    console.log('saving to storage')
    storage.saveToStorage( dataKey, arr)
}

function loadEmailsFromStorageSent(){
    let emailsFromStorage = storage.loadFromStorage(DATA_KEY_EMAILS_SENT)
    if(emailsFromStorage) gEmailsSent = emailsFromStorage 
}

function loadEmailsFromStorage(){
    let emailsFromStorage = storage.loadFromStorage(DATA_KEY_EMAILS)
    if(emailsFromStorage) gEmails = emailsFromStorage 
}

