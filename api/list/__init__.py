import azure.functions as func

def main(req: func.HttpRequest, doc: func.Out[func.Document]) -> func.HttpResponse:
    try:
        suburb = req.get_json().get('suburb')
    except Exception as e:
        return func.HttpResponse(status_code=400)

    if suburb:
        req_body = req.get_body()
        doc.set(func.Document.from_json(req_body))
        return func.HttpResponse(req_body, status_code=200)
