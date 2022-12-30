import { InfoClient } from "../../../lib/info/InfoServiceClientPb";

import {
  ListDataRequest,
  ListDataReply,
  Data,
  CreateDataReply,
  CreateDataRequest,
} from "../../../lib/info/info_pb";

import { GRPCClientConfig } from "../abstract/types";
import gRPCClientAbstract from "../abstract/gRPCClient";
// import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

class rpcInfoClient extends gRPCClientAbstract {
  constructor(config: GRPCClientConfig) {
    config.serviceName = "INFO";
    super(InfoClient, config);
  }

  //   async signUp(username: string, password: string) {
  //     const req = new SignUpRequest();
  //     req.setUserName(username);
  //     req.setPassword(password);
  //     return await this.gRPCClientRequest<SignUpReply.AsObject>("signUp", req);
  //   }

  async listData(feedName: string) {
    const req = new ListDataRequest();
    req.setFeedName(feedName);
    return await this.gRPCClientRequest<ListDataReply.AsObject>(
      "listData",
      req
    );
  }

  async CreateData(feedName: string, value: number) {
    const req = new CreateDataRequest();
    req.setFeedName(feedName);
    req.setValue(value);
    return await this.gRPCClientRequest<CreateDataReply.AsObject>(
      "createData",
      req
    );
  }

}

export default rpcInfoClient;
