// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .head('/pools/nodesdktestpool1?api-version=2019-08-01.10.0')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 05 Aug 2019 19:39:48 GMT',
  etag: '0x8D719DCACFC291F',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4f208c11-d5fd-47a7-972f-8bb0e7d1aa33',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 05 Aug 2019 19:39:52 GMT',
  connection: 'close' });
 return result; }]];