require('dotenv').config();
const checkEnv = require('check-env');
const required = ['REACT_APP_AWS_REGION',
                  'REACT_APP_COGNITO_IDENTITYPOOLID',
                  'REACT_APP_COGNITO_USERPOOLID',
                  'REACT_APP_COGNITO_USERPOOLWEBCLIENTID']

checkEnv(required);