import { AxiosResponse } from "axios";
import { ExtractionResultsDto, QueuesApi } from "./api";
import { Configuration } from "./configuration";
import * as FormData from "form-data";

export class Butler {
  protected queuesApi: QueuesApi;

  constructor(apiKey: string) {
    const config = new Configuration({accessToken: apiKey});
    config.formDataCtor = FormData;
    this.queuesApi = new QueuesApi(config);
  }

  extractFile(queueId: string, file: any): Promise<AxiosResponse<ExtractionResultsDto, any>> {
    return this.queuesApi.extractFile(queueId, file);
  }
}