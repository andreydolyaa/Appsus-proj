import {storage} from '../services/storage-service.js';
import {utils} from '../../../../js/services/util-service.js';

var gEmails = [
    {
        id:'em01',
        fromName:'google tech',
        from:'info@gmail.com',
        subject: 'Security Wraning',
        body: 'Hey There, there was a suspicious activity in your linked google account',
        isRead: false,
        isNew:true,
        isSent: false,
        isDraft: false, 
        isStar:false,
        sentAt : 1604671749930,
    },
    {
        id:'em02',
        fromName:'goolge support',
        from:'info@gmail.com',
        subject: 'Creadit card validation',
        body: 'Billing issue: please validate your cerdit card',
        isRead: false, 
        isNew:true,
        isSent: false, 
        isDraft: false,
        isStar:false,
        sentAt :1580821161 ,     
    },
    {
        id:'em03',
        fromName:'facebook',
        from:'info@gmail.com',
        subject: 'Team Trump - voter suppression',
        body: 'Help stop voter suppression, irregularities and fraud!',
        isRead: false, 
        isNew:true,
        isSent: false, 
        isDraft: false,
        isStar:false,
        sentAt : 1604671749930,
    },
    {
        id:'em04',
        fromName:'twitter - Joe Rogan',
        from:'info@gmail.com',
        subject: 'One of my absolute favorite guests and people, the great and powerful @stevenrinella.',
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
        fromName:'Steave Wazzniak',
        from:'info@gmail.com',
        subject: 'Technical brilliance.',
        body: 'Technical brilliance. Creative passion. A shared dedication to the collaborative process.',
        isRead: false, 
        isNew:true,
        isSent: false, 
        isDraft:false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em06',
        fromName:'Tony Stark',
        from:'info@gmail.com',
        subject: 'What everybody wants.',
        body: 'Everybody wants a happy ending, right? But it doesn’t always roll that way.',
        isRead: false, 
        isNew:true,
        isSent: false, 
        isDraft:false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em07',
        fromName:'Thor God of Thunder',
        from:'info@gmail.com',
        subject: 'Im Still Worthy',
        body: 'Declaring Im still worthy after successfully summoning the hammer ',
        isRead: true, 
        isNew:true,
        isSent: false, 
        isDraft:false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em08',
        fromName:'Peter Quill aka Star-Lord:',
        from:'info@gmail.com',
        subject: 'What`s next....?',
        body: 'What Should We Do Next? Something Good, Something Bad? Bit Of Both?',
        isRead: true, 
        isNew:true,
        isSent: false, 
        isDraft:false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em09',
        fromName:'Gal Gadot aka Wonder women:',
        from:'info@gmail.com',
        subject: 'The Belief In Justice',
        body: 'If Loss Makes You Doubt Your Belief In Justice, Then You Never Truly Believed In Justice At All.”',
        isRead: true, 
        isNew:true,
        isSent: false, 
        isDraft:false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em010',
        fromName:'God',
        from:'info@gmail.com',
        subject: 'Genesis ',
        body: 'Let there be light',
        isRead: true, 
        isNew:false,
        isSent: false, 
        isDraft:false,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em011',
        fromName:'Instagram draft',
        from:'info@gmail.com',
        subject: 'Your account as been locked ',
        body: 'Hey supprot , my account has been locked',
        isRead: false, 
        isNew:false,
        isSent: false, 
        isDraft: true,
        isStar:false,
        sentAt : 1572872361,
    },
    {
        id:'em012',
        fromName:'Steave Jobs',
        from:'info@gmail.com',
        subject: 'Your inner Voice',
        body: 'Don’t let the noise of others’ opinions drown out your own inner voice.',
        isRead: false, 
        isNew:false,
        isSent: false, 
        isDraft:false,
        isStar:true,
        sentAt : 1572872361,
    },
    {
        id:'em013',
        fromName:'Twiiter',
        from:'info@gmail.com',
        subject: 'Bibi like your recent tweet...',
        body: 'Bibi like your recent tweet...',
        isRead: false, 
        isNew:false,
        isSent: true, 
        isDraft: false,
        isStar:false,
        sentAt : 1572872361,
    },
    
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

function updateEmailsDraft(sentMeail){
    sentMeail.id = utils.makeId();
    sentMeail.sentAt =  utils.getDateTimestamp();
    sentMeail.isDraft = true
    var sentMailCopy = JSON.parse(JSON.stringify(sentMeail))
    console.log('sentMeail',sentMeail)
    console.log('gEmails',gEmails)
    gEmails.push(sentMailCopy)

    saveEmailsToSorage(DATA_KEY_EMAILS_SENT, gEmails)
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
        return email.isRead === false 
        && email.isNew === true 

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


function loadEmailsFromStorage(){
    let emailsFromStorage = storage.loadFromStorage(DATA_KEY_EMAILS)
    if(emailsFromStorage) gEmails = emailsFromStorage 
}

