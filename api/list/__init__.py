import azure.functions as func
import os
import base64
import requests
import json

def main(req: func.HttpRequest, suburbdoc: func.Out[func.Document], listingdoc: func.Out[func.Document]) -> func.HttpResponse:
    # try:
    suburb = req.get_json().get('suburb')
    if suburb:
        req_body = req.get_body()
        suburbdoc.set(func.Document.from_json(req_body))

        client_id = os.environ['DOMAIN_API_CLIENT_ID']
        client_secret = os.environ['DOMAIN_API_CLIENT_SECRET']
        auth = base64.b64encode(bytes(f'{client_id}:{client_secret}','utf-8')).decode()
        url = 'https://auth.domain.com.au/v1/connect/token'
        data = {
            'grant_type': 'client_credentials',
            'scope': 'api_listings_read'
        }
        headers = {
            'Authorization': f'Basic {auth}',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        res = requests.post(url, data=data, headers=headers)
        
        access_token = res.json()['access_token']
        url = 'https://api.domain.com.au/v1/listings/residential/_search'
        headers = {
            'Authorization': f'Bearer {access_token}',
            'Content-Type': 'application/json'
        }
        data = '''
{
  "listingType": "Sale",
  "locations": [
    {
      "suburb": "%s",
      "includeSurroundingSuburbs": false
    }
  ],
  "excludePriceWithheld": true,
  "excludeDepositTaken": true
}''' % suburb
        res = requests.post(url, data=data, headers=headers)

        result = {}
        result['listings'] = res.json()
        listingdoc.set(func.Document.from_dict(result))
        return func.HttpResponse(json.dumps(result), status_code=200)

    # except Exception as e:
    #     return func.HttpResponse(status_code=400)
