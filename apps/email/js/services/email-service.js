import {storage} from '../services/storage-service.js';
import {utils} from '../../../../js/services/util-service.js';

var gEmails = [
    {
        id:'em01',
        fromName:'google tech',
        from:'info@gmail.com',
        replies:['em02','em03'],
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
        replies:[],
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
        from:'info@facebook.com',
        replies:[],
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
        from:'info@twitter.com',
        replies:[],
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
        from:'thewaz@apple.com',
        replies:[],
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
        from:'tony.stark@gmail.com',
        replies:[],
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
        from:'thor@gmail.com',
        replies:[],
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
        from:'starlord@gmail.com',
        replies:[],
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
        from:'dal.gadot@gmail.com',
        replies:[],
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
        from:'got@sky.com',
        replies:[],
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
        from:'info@instagram.com',
        replies:[],
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
        from:'steave.jobs@apple.com',
        replies:[],
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
        from:'info@twitter.com',
        replies:[],
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
    getSelectedEmailReplies,
    getEmailsSent,
    getUnreadEamilsCount,

    setEmailAsRead,
    setEmailAsUnread,
    setEmailStar,

    updateEmailsSent,
    updateEmailsDraft,
    updateEmailsDraftSent,

    removeEmail,
}

var DATA_KEY_EMAILS ='emailsDB'
var DATA_KEY_EMAILS_SENT ='emailsSentDB'

loadEmailsFromStorage();  /// move to

function updateEmailsDraftSent(sentMeail,emailID){
    console.log('updateEmailsSent',sentMeail);
    //set email not draft
    var idx = getEmailInxByID(emailID)
    gEmails[idx].isDraft = false 

    // push new email 
    sentMeail.id = utils.makeId();
    sentMeail.sentAt =  utils.getDateTimestamp();
    
    sentMeail.isSent = true
    var sentMailCopy = JSON.parse(JSON.stringify(sentMeail))
    gEmails.push(sentMailCopy)
    console.log('gEmails',gEmails)

    saveEmailsToSorage(DATA_KEY_EMAILS_SENT, gEmails)
    return Promise.resolve('email sent');
}

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


function updateEmailsSent(sentMeail,emailTo,emailToId){
    console.log('updateEmailsSent',sentMeail,emailTo,emailToId);

    // push new email 
    sentMeail.id = utils.makeId();
    sentMeail.sentAt =  utils.getDateTimestamp();
    sentMeail.isSent = true
    var sentMailCopy = JSON.parse(JSON.stringify(sentMeail))

    // push new email to replies
    if(emailToId){
        console.log('reply');
        var idx = getEmailInxByID(emailToId)
        gEmails[idx].replies.push(sentMeail.id)
        //console.log('updateEmailsSent reply  gEmails',idx, gEmails)
    }else{
       
        gEmails.push(sentMailCopy)
        console.log('normal',gEmails);
    }

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

function getSelectedEmailReplies(replies){
    var res =[]
    for(var i = 0; i< replies.length ; i++){
        var idx = getEmailInxByID(replies[i]);
        res.push(gEmails[idx])
    }
    //console.log('getSelectedEmailReplies res',res)
    return res
    //return Promise.resolve(res);
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

