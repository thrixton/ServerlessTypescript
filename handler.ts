import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";
import { DataMapper } from "@aws/dynamodb-data-mapper";
import { hashKey, table } from "@aws/dynamodb-data-mapper-annotations";
import { DynamoDB } from "aws-sdk";

const hello: Handler = (
  event: APIGatewayEvent,
  context: Context,
  cb: Callback
) => {
  const mapper = new DataMapper({
    client: new DynamoDB(),
    tableNamePrefix: `dev-`
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
      input: event
    })
  };

  cb(null, response);
};

@table("test")
export class Test {
  @hashKey()
  public id: string;
}
