// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Storage/checkNameAvailability?api-version=2015-06-15', '*')
  .reply(200, "{\"message\":\"The storage account named testacc3906 is already taken.\",\"nameAvailable\":false,\"reason\":\"AlreadyExists\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '117',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0d429cf0-d7df-46cd-80da-5f5f3c878bd9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '0d429cf0-d7df-46cd-80da-5f5f3c878bd9',
  'x-ms-routing-request-id': 'WESTUS:20151208T014019Z:0d429cf0-d7df-46cd-80da-5f5f3c878bd9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 08 Dec 2015 01:40:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Storage/checkNameAvailability?api-version=2015-06-15', '*')
  .reply(200, "{\"message\":\"The storage account named testacc3906 is already taken.\",\"nameAvailable\":false,\"reason\":\"AlreadyExists\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '117',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '0d429cf0-d7df-46cd-80da-5f5f3c878bd9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '0d429cf0-d7df-46cd-80da-5f5f3c878bd9',
  'x-ms-routing-request-id': 'WESTUS:20151208T014019Z:0d429cf0-d7df-46cd-80da-5f5f3c878bd9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 08 Dec 2015 01:40:19 GMT',
  connection: 'close' });
 return result; }]];