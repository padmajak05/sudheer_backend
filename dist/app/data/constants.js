'use strict';

var CONSTANTS = {
    CE: {
        USERID: 'USERID',
        TXID: 'TXID=',
        SUCCESS: 'SUCCESS',
        FAILURE: 'FAILURE',
        CODE: 'CODE=',
        S200: 200,
        F400: 400,
        F401: 401,
        F500: 500,
        MSG: 'MSG=',
        STATUS: 'STATUS=',
        NAMETAG: 'APPNAME=',
        NAME: 'ContentEditor',
        IP: 'CLIENTIP=',
        SERVER: 'SERVER=',
        RTAG: 'REDIS=',
        RF: 'FOUND',
        RNF: 'NOT_FOUND',
        METHOD: 'METHOD=',
        DUR: 'DURATION=',
        CTY: 'COUNTRY=',
        PRD: 'PRODUCT=',
        TNAME: 'TNAME=',
        MS: 'ms',
        DEFAULT_VARIATION: 'default',
        SEQ_UNIQUE_CODE: 'SequelizeUniqueConstraintError',
        CREATED: '1',
        UPDATED: '6',
        IN_REVIEW: '3',
        IN_PREVIEW: '2',
        REJECTED: '4',
        APPROVED: '5',
        ERROR_CODES: {
            OFFER_CODE_UNIQUE: 'Offer Code Already Exists',
            OFFER_CODE_DOES_NOT_EXIST: 'Offer Code Does Not Exists',
            USER_ALREADY_EXISTS: 'User Already Exists For This Market',
            OFFER_CODE_ALREADY_EXISTS: 'Offer Code Already Exists For This Product',
            OFFER_DETAILS_EXIST: 'Offer Details Already Exists For This Language',
            CONTENT_ALREADY_EXIST: 'Content Already Exists For This Language',
            VAC_EXPERIENCE_EXISTS: 'VAC Experience Already Exists For This Experience Id',
            VAC_CONTENT_EXISTS: 'View All Cards Content Already Exists For This Experience'
        },
        CE_CREATEUPDATE: {
            client: 'acqeditor0618',
            user: 'icmssystemuser',
            location: '',
            pageproperties: {
                name: 'data',
                title: 'data',
                description: '',
                resourceType: 'jsonscaffold'
            },
            content: {}
        },
        CE_PAGEPUBLISH: {
            client: 'acqeditor0618',
            user: 'icmssystemuser',
            paths: [],
            type: 'page',
            environment: ''
        },
        CE_VERSIONCREATE: {
            content: {}
        }
    }
};

module.exports = CONSTANTS;