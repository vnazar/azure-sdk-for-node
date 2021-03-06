// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk?api-version=2019-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk\",\"name\":\"batchtestnodesdk\",\"type\":\"Microsoft.Batch/batchAccounts\",\"location\":\"japaneast\",\"properties\":{\"accountEndpoint\":\"batchtestnodesdk.japaneast.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"dedicatedCoreQuota\":700,\"dedicatedCoreQuotaPerVMFamily\":[{\"name\":\"standardAv2Family\",\"coreQuota\":100},{\"name\":\"standardDv2Family\",\"coreQuota\":100},{\"name\":\"standardDv3Family\",\"coreQuota\":100},{\"name\":\"standardEv3Family\",\"coreQuota\":50},{\"name\":\"standardDSv2Family\",\"coreQuota\":100},{\"name\":\"standardDSv3Family\",\"coreQuota\":100},{\"name\":\"standardESv3Family\",\"coreQuota\":50},{\"name\":\"standardFFamily\",\"coreQuota\":50},{\"name\":\"standardFSFamily\",\"coreQuota\":50},{\"name\":\"standardA0_A7Family\",\"coreQuota\":0},{\"name\":\"standardA8_A11Family\",\"coreQuota\":0},{\"name\":\"standardDFamily\",\"coreQuota\":0},{\"name\":\"standardGFamily\",\"coreQuota\":0},{\"name\":\"basicAFamily\",\"coreQuota\":0},{\"name\":\"standardNVFamily\",\"coreQuota\":0},{\"name\":\"standardNVPromoFamily\",\"coreQuota\":0},{\"name\":\"standardNCFamily\",\"coreQuota\":0},{\"name\":\"standardNCPromoFamily\",\"coreQuota\":0},{\"name\":\"standardHFamily\",\"coreQuota\":0},{\"name\":\"standardHPromoFamily\",\"coreQuota\":0},{\"name\":\"standardMSFamily\",\"coreQuota\":0},{\"name\":\"standardDSFamily\",\"coreQuota\":0},{\"name\":\"standardGSFamily\",\"coreQuota\":0},{\"name\":\"standardLSFamily\",\"coreQuota\":0},{\"name\":\"standardNCSv2Family\",\"coreQuota\":0},{\"name\":\"standardNDSFamily\",\"coreQuota\":0},{\"name\":\"standardNCSv3Family\",\"coreQuota\":0},{\"name\":\"standardFSv2Family\",\"coreQuota\":0},{\"name\":\"standardHBSFamily\",\"coreQuota\":0},{\"name\":\"standardHCSFamily\",\"coreQuota\":0}],\"dedicatedCoreQuotaPerVMFamilyEnforced\":false,\"lowPriorityCoreQuota\":500,\"poolQuota\":100,\"activeJobAndJobScheduleQuota\":300,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/nodesdkteststorage\",\"lastKeySync\":\"2019-08-05T19:05:58.6416423Z\"},\"poolAllocationMode\":\"BatchService\"},\"tags\":{\"Name\":\"tagName\",\"Value\":\"tagValue\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2172',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Mon, 05 Aug 2019 19:06:00 GMT',
  etag: '"0x8D719D7F4730816"',
  'x-ms-correlation-request-id': 'f937dff6-cba7-4ebc-bc48-5d1e4c8e11b6',
  'x-ms-request-id': '0dc75d94-f80f-455b-8963-9d70144da44b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190601Z:f937dff6-cba7-4ebc-bc48-5d1e4c8e11b6',
  date: 'Mon, 05 Aug 2019 19:06:00 GMT',
  connection: 'close' });
 return result; }]];