// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .head('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask2/files/stderr.txt?api-version=2019-06-01.9.0')
  .reply(200, "", { 'content-length': '0',
  'content-type': 'text/plain',
  'last-modified': 'Thu, 06 Jun 2019 23:43:18 GMT',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c53222bf-b154-4f33-aaf1-d90ca9e60511',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  'ocp-creation-time': 'Thu, 06 Jun 2019 23:43:18 GMT',
  'ocp-batch-file-isdirectory': 'False',
  'ocp-batch-file-url':
   'https%3A%2F%2Ftest1.westus.batch.azure.com%2Fjobs%2FHelloWorldJobNodeSDKTest%2Ftasks%2FHelloWorldNodeSDKTestTask2%2Ffiles%2Fstderr.txt',
  date: 'Thu, 06 Jun 2019 23:44:51 GMT',
  connection: 'close' });
 return result; }]];