'use strict';

const errorMessages = {
    SERVER_ERROR: "Oops..Server error!!! Please conctact the system admin",
    UNIQUE_CONSTRAINT_ERROR: "Fields unique key validation error",
    NOT_FOUND: "The submitted request can not be understood",
    UNPARSABLE_REQUEST: "Can not parse the request. Please try again with correct format",
    TOKEN_IS_REQUIRED: 'No token provided',
    TOKEN_IS_EXPIRED: 'Token is expired. Please login again',
    TOKEN_IS_INVALID: 'Invalid Token. Please login again',
    INVALID_INPUT: 'Invalid input',


    //User Types
    INVALID_USER_TYPE: 'Invalid User type',
    // users services
    USER_CREATED: "User created successfully",

    USER_UPDATED: 'User updated successfully',
    USER_ID_EXISTS: 'User id already registered',
    USER_NOT_FOUND: 'User not found',
    USER_CREATION_SAME_CATEGORY_USERTYPES_REQUIRED: 'For User creation same category user types required',
    USER_ALREADY_VERIFIED: 'User already verified',
    INVALID_USER_ID: 'User not found',
    INVALID_USERNAME_OR_PASSWORD: 'Invalid Username/password',
    INVALID_PRACTITIONER_ID: 'Invalid practitioner',
    INVALID_ORG_USER_ROLE_ID: 'Invalid user role id',

    // User role

    INVALID_USER_ROLE_ID: 'Invalid user role id',
    // user verification

    INVALID_VERIFICATION_ID: 'Invalid verification id',

    // File uploads
    FILE_EXT_NOT_ALLOWED: 'Invalid file type',
    UNABLE_TO_UPLOAD_FILE: 'Server error unable to upload file',
    ATTACHMENT_REQUIRED: "Attachment required",
    FILE_INVALID_IMAGE_EXT: 'Invalid file type. Only images are allowed (.png,.jpg,.gif,.jpeg)',
    INVALID_ATTACHMENT_ID: 'Invalid attachment id',

    //Festivals
    INVALID_FESTIVAL_ID: 'Invalid Festival Id',

    // Products

    INVALID_PRODUCT_ID: 'Product not exist',

    //Orders
    INVALID_ORDER_ID: 'Invalid order id'

  }
;
export default errorMessages;
