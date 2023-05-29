
API quick start outline
Set up FusionAuth to set access token and refresh tokens as cookies using new hosted backend (full docs incoming, but you can see the PR here: https://github.com/FusionAuth/fusionauth-site/pull/2115
Make sure jwt is signed with rs256 key
Write standalone service which returns 401 if user doesn't present a correct access token.
Service should return JSON if jwt is valid. Check signature using lib, not using validate endpoint. Also check audience, exp and issuer claims
Small bit of js on the browser to call the API, if it gets a 401, should call the refresh endpoint.


[ ] Check if reflecting the openId info is what Dan wants
[ ] Add call to API from website
[ ] Do the refresh thing on browser code if 401 is received (look up refresh endpoint)
[ ] Check if the token in being validated with signature? Is the .net lib just automatically doing this?
