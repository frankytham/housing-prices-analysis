import logging
import azure.functions as func

def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        req_body = req.get_json()
        suburb = req_body.get('suburb')
    except ValueError:
        pass

    logging.info(f"Request body: {req_body}")
    if suburb:
        return func.HttpResponse(suburb, status_code=200)
