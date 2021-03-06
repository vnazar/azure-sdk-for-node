// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SPELL_CHECK_KEY'] = 'dummy';
  process.env['AZURE_SUBSCRIPTION_ID'] = '0b1f6471-1bf0-4dda-aec3-cb9272f09590';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://api.cognitive.microsoft.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/bing/v7.0/spellcheck', '*')
  .reply(200, "{\"_type\": \"SpellCheck\", \"flaggedTokens\": [{\"_type\": \"Spelling\\/FlaggedToken\", \"offset\": 0, \"token\": \"cognituve\", \"type\": \"UnknownToken\", \"suggestions\": [{\"_type\": \"Spelling\\/TokenSuggestion\", \"suggestion\": \"cognitive\", \"score\": 0.915075214584365}]}]}", { 'cache-control': 'private, max-age=0',
  'content-length': '250',
  'content-type': 'application/json; charset=utf-8',
  expires: 'Mon, 18 Dec 2017 18:45:48 GMT',
  vary: 'Accept-Encoding',
  server: 'Microsoft-HTTPAPI/2.0',
  p3p: 'CP="NON UNI COM NAV STA LOC CURa DEVa PSAa PSDa OUR IND"',
  'bingapis-traceid': 'A34C8F9AE7B3480194F01D37C41F7E65',
  'bingapis-sessionid': '055DE85B30B54EA2AFD163FE1E6DD540',
  'x-msedge-clientid': '291B119D1AF06CCB30E31AC11B676D8F',
  'x-msapi-userstate': 'efe0',
  'bingapis-market': 'en-US',
  'x-msedge-ref': 'Ref A: A34C8F9AE7B3480194F01D37C41F7E65 Ref B: CO1EDGE0521 Ref C: 2017-12-18T18:46:49Z',
  'apim-request-id': '1e71b26e-51cc-4a6c-8e1d-1d0d2ae2f20f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 18 Dec 2017 18:46:49 GMT',
  connection: 'close' });
 return result; }]];