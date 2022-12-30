import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class CreateFeedRequest extends jspb.Message {
  getFeedName(): string;
  setFeedName(value: string): CreateFeedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeedRequest): CreateFeedRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeedRequest;
  static deserializeBinaryFromReader(message: CreateFeedRequest, reader: jspb.BinaryReader): CreateFeedRequest;
}

export namespace CreateFeedRequest {
  export type AsObject = {
    feedName: string,
  }
}

export class CreateFeedReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeedReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeedReply): CreateFeedReply.AsObject;
  static serializeBinaryToWriter(message: CreateFeedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeedReply;
  static deserializeBinaryFromReader(message: CreateFeedReply, reader: jspb.BinaryReader): CreateFeedReply;
}

export namespace CreateFeedReply {
  export type AsObject = {
  }
}

export class FeedInfo extends jspb.Message {
  getFeedId(): number;
  setFeedId(value: number): FeedInfo;

  getFeedName(): string;
  setFeedName(value: string): FeedInfo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): FeedInfo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): FeedInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FeedInfo): FeedInfo.AsObject;
  static serializeBinaryToWriter(message: FeedInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedInfo;
  static deserializeBinaryFromReader(message: FeedInfo, reader: jspb.BinaryReader): FeedInfo;
}

export namespace FeedInfo {
  export type AsObject = {
    feedId: number,
    feedName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetFeedRequest extends jspb.Message {
  getFeedName(): string;
  setFeedName(value: string): GetFeedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeedRequest): GetFeedRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeedRequest;
  static deserializeBinaryFromReader(message: GetFeedRequest, reader: jspb.BinaryReader): GetFeedRequest;
}

export namespace GetFeedRequest {
  export type AsObject = {
    feedName: string,
  }
}

export class GetFeedReply extends jspb.Message {
  getInfo(): FeedInfo | undefined;
  setInfo(value?: FeedInfo): GetFeedReply;
  hasInfo(): boolean;
  clearInfo(): GetFeedReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeedReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeedReply): GetFeedReply.AsObject;
  static serializeBinaryToWriter(message: GetFeedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeedReply;
  static deserializeBinaryFromReader(message: GetFeedReply, reader: jspb.BinaryReader): GetFeedReply;
}

export namespace GetFeedReply {
  export type AsObject = {
    info?: FeedInfo.AsObject,
  }
}

export class ListFeedRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeedRequest): ListFeedRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeedRequest;
  static deserializeBinaryFromReader(message: ListFeedRequest, reader: jspb.BinaryReader): ListFeedRequest;
}

export namespace ListFeedRequest {
  export type AsObject = {
  }
}

export class ListFeedReply extends jspb.Message {
  getFeedsList(): Array<FeedInfo>;
  setFeedsList(value: Array<FeedInfo>): ListFeedReply;
  clearFeedsList(): ListFeedReply;
  addFeeds(value?: FeedInfo, index?: number): FeedInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeedReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeedReply): ListFeedReply.AsObject;
  static serializeBinaryToWriter(message: ListFeedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeedReply;
  static deserializeBinaryFromReader(message: ListFeedReply, reader: jspb.BinaryReader): ListFeedReply;
}

export namespace ListFeedReply {
  export type AsObject = {
    feedsList: Array<FeedInfo.AsObject>,
  }
}

export class DeleteFeedRequest extends jspb.Message {
  getFeedName(): string;
  setFeedName(value: string): DeleteFeedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeedRequest): DeleteFeedRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeedRequest;
  static deserializeBinaryFromReader(message: DeleteFeedRequest, reader: jspb.BinaryReader): DeleteFeedRequest;
}

export namespace DeleteFeedRequest {
  export type AsObject = {
    feedName: string,
  }
}

export class DeleteFeedReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeedReply.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeedReply): DeleteFeedReply.AsObject;
  static serializeBinaryToWriter(message: DeleteFeedReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeedReply;
  static deserializeBinaryFromReader(message: DeleteFeedReply, reader: jspb.BinaryReader): DeleteFeedReply;
}

export namespace DeleteFeedReply {
  export type AsObject = {
  }
}

export class CreateDataRequest extends jspb.Message {
  getFeedName(): string;
  setFeedName(value: string): CreateDataRequest;

  getValue(): number;
  setValue(value: number): CreateDataRequest;

  getRecordedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecordedAt(value?: google_protobuf_timestamp_pb.Timestamp): CreateDataRequest;
  hasRecordedAt(): boolean;
  clearRecordedAt(): CreateDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataRequest): CreateDataRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataRequest;
  static deserializeBinaryFromReader(message: CreateDataRequest, reader: jspb.BinaryReader): CreateDataRequest;
}

export namespace CreateDataRequest {
  export type AsObject = {
    feedName: string,
    value: number,
    recordedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateDataReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataReply.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataReply): CreateDataReply.AsObject;
  static serializeBinaryToWriter(message: CreateDataReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataReply;
  static deserializeBinaryFromReader(message: CreateDataReply, reader: jspb.BinaryReader): CreateDataReply;
}

export namespace CreateDataReply {
  export type AsObject = {
  }
}

export class ListDataRequest extends jspb.Message {
  getFeedName(): string;
  setFeedName(value: string): ListDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataRequest): ListDataRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataRequest;
  static deserializeBinaryFromReader(message: ListDataRequest, reader: jspb.BinaryReader): ListDataRequest;
}

export namespace ListDataRequest {
  export type AsObject = {
    feedName: string,
  }
}

export class Data extends jspb.Message {
  getValue(): number;
  setValue(value: number): Data;

  getRecordedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecordedAt(value?: google_protobuf_timestamp_pb.Timestamp): Data;
  hasRecordedAt(): boolean;
  clearRecordedAt(): Data;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Data.AsObject;
  static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
  static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Data;
  static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
  export type AsObject = {
    value: number,
    recordedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListDataReply extends jspb.Message {
  getListDataList(): Array<Data>;
  setListDataList(value: Array<Data>): ListDataReply;
  clearListDataList(): ListDataReply;
  addListData(value?: Data, index?: number): Data;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataReply): ListDataReply.AsObject;
  static serializeBinaryToWriter(message: ListDataReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataReply;
  static deserializeBinaryFromReader(message: ListDataReply, reader: jspb.BinaryReader): ListDataReply;
}

export namespace ListDataReply {
  export type AsObject = {
    listDataList: Array<Data.AsObject>,
  }
}

