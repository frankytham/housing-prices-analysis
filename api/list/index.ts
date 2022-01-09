import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const suburb = req.body && req.body.suburb;
  context.res = {
    status: 200,
    body: {
      suburb: suburb,
    }
  };
  context.log(context.res);
};

export default httpTrigger;
