# fusionauth-c--api
Demo for using FusionAuth with ASP apis



API quick start outline
Set up FusionAuth to set access token and refresh tokens as cookies using new hosted backend (full docs incoming, but you can see the PR here: https://github.com/FusionAuth/fusionauth-site/pull/2115
Make sure jwt is signed with rs256 key
Write standalone service which returns 401 if user doesn't present a correct access token.
Service should return JSON if jwt is valid. Check signature using lib, not using validate endpoint. Also check audience, exp and issuer claims
Small bit of js on the browser to call the API, if it gets a 401, should call the refresh endpoint.


## Notes:

- Add CORS on FusionAuth for the front end to get the user profile. Enabled "allow credentials in config"
- 