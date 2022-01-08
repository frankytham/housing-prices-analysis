import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.');
  const suburb = req.body && req.body.suburb;

  context.res = {
    status: 200,
    body: {
      suburb: suburb,
    }
  };
};

export default httpTrigger;
