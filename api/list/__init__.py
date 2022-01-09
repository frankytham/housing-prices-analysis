import azure.functions as func
import logging

def main(req: func.HttpRequest, doc: func.Out[func.Document]) -> func.HttpResponse:
    try:
        req_body = req.get_json()
        suburb = req_body.get('suburb')
    except ValueError:
        pass

    logging.info(f"Request body: {req_body}")
    if suburb:
        request_body = req.get_body()
        doc.set(func.Document.from_json(request_body))
        return func.HttpResponse(suburb, status_code=200)
