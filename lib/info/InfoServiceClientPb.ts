/**
 * @fileoverview gRPC-Web generated client stub for info
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as info_pb from './info_pb';


export class InfoClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateFeed = new grpcWeb.MethodDescriptor(
    '/info.Info/CreateFeed',
    grpcWeb.MethodType.UNARY,
    info_pb.CreateFeedRequest,
    info_pb.CreateFeedReply,
    (request: info_pb.CreateFeedRequest) => {
      return request.serializeBinary();
    },
    info_pb.CreateFeedReply.deserializeBinary
  );

  createFeed(
    request: info_pb.CreateFeedRequest,
    metadata: grpcWeb.Metadata | null): Promise<info_pb.CreateFeedReply>;

  createFeed(
    request: info_pb.CreateFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: info_pb.CreateFeedReply) => void): grpcWeb.ClientReadableStream<info_pb.CreateFeedReply>;

  createFeed(
    request: info_pb.CreateFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: info_pb.CreateFeedReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/info.Info/CreateFeed',
        request,
        metadata || {},
        this.methodDescriptorCreateFeed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/info.Info/CreateFeed',
    request,
    metadata || {},
    this.methodDescriptorCreateFeed);
  }

  methodDescriptorGetFeed = new grpcWeb.MethodDescriptor(
    '/info.Info/GetFeed',
    grpcWeb.MethodType.UNARY,
    info_pb.GetFeedRequest,
    info_pb.GetFeedReply,
    (request: info_pb.GetFeedRequest) => {
      return request.serializeBinary();
    },
    info_pb.GetFeedReply.deserializeBinary
  );

  getFeed(
    request: info_pb.GetFeedRequest,
    metadata: grpcWeb.Metadata | null): Promise<info_pb.GetFeedReply>;

  getFeed(
    request: info_pb.GetFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: info_pb.GetFeedReply) => void): grpcWeb.ClientReadableStream<info_pb.GetFeedReply>;

  getFeed(
    request: info_pb.GetFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: info_pb.GetFeedReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/info.Info/GetFeed',
        request,
        metadata || {},
        this.methodDescriptorGetFeed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/info.Info/GetFeed',
    request,
    metadata || {},
    this.methodDescriptorGetFeed);
  }

  methodDescriptorListFeed = new grpcWeb.MethodDescriptor(
    '/info.Info/ListFeed',
    grpcWeb.MethodType.UNARY,
    info_pb.ListFeedRequest,
    info_pb.ListFeedReply,
    (request: info_pb.ListFeedRequest) => {
      return request.serializeBinary();
    },
    info_pb.ListFeedReply.deserializeBinary
  );

  listFeed(
    request: info_pb.ListFeedRequest,
    metadata: grpcWeb.Metadata | null): Promise<info_pb.ListFeedReply>;

  listFeed(
    request: info_pb.ListFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: info_pb.ListFeedReply) => void): grpcWeb.ClientReadableStream<info_pb.ListFeedReply>;

  listFeed(
    request: info_pb.ListFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: info_pb.ListFeedReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/info.Info/ListFeed',
        request,
        metadata || {},
        this.methodDescriptorListFeed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/info.Info/ListFeed',
    request,
    metadata || {},
    this.methodDescriptorListFeed);
  }

  methodDescriptorDeleteFeed = new grpcWeb.MethodDescriptor(
    '/info.Info/DeleteFeed',
    grpcWeb.MethodType.UNARY,
    info_pb.DeleteFeedRequest,
    info_pb.DeleteFeedReply,
    (request: info_pb.DeleteFeedRequest) => {
      return request.serializeBinary();
    },
    info_pb.DeleteFeedReply.deserializeBinary
  );

  deleteFeed(
    request: info_pb.DeleteFeedRequest,
    metadata: grpcWeb.Metadata | null): Promise<info_pb.DeleteFeedReply>;

  deleteFeed(
    request: info_pb.DeleteFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: info_pb.DeleteFeedReply) => void): grpcWeb.ClientReadableStream<info_pb.DeleteFeedReply>;

  deleteFeed(
    request: info_pb.DeleteFeedRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: info_pb.DeleteFeedReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/info.Info/DeleteFeed',
        request,
        metadata || {},
        this.methodDescriptorDeleteFeed,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/info.Info/DeleteFeed',
    request,
    metadata || {},
    this.methodDescriptorDeleteFeed);
  }

  methodDescriptorCreateData = new grpcWeb.MethodDescriptor(
    '/info.Info/CreateData',
    grpcWeb.MethodType.UNARY,
    info_pb.CreateDataRequest,
    info_pb.CreateDataReply,
    (request: info_pb.CreateDataRequest) => {
      return request.serializeBinary();
    },
    info_pb.CreateDataReply.deserializeBinary
  );

  createData(
    request: info_pb.CreateDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<info_pb.CreateDataReply>;

  createData(
    request: info_pb.CreateDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: info_pb.CreateDataReply) => void): grpcWeb.ClientReadableStream<info_pb.CreateDataReply>;

  createData(
    request: info_pb.CreateDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: info_pb.CreateDataReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/info.Info/CreateData',
        request,
        metadata || {},
        this.methodDescriptorCreateData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/info.Info/CreateData',
    request,
    metadata || {},
    this.methodDescriptorCreateData);
  }

  methodDescriptorListData = new grpcWeb.MethodDescriptor(
    '/info.Info/ListData',
    grpcWeb.MethodType.UNARY,
    info_pb.ListDataRequest,
    info_pb.ListDataReply,
    (request: info_pb.ListDataRequest) => {
      return request.serializeBinary();
    },
    info_pb.ListDataReply.deserializeBinary
  );

  listData(
    request: info_pb.ListDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<info_pb.ListDataReply>;

  listData(
    request: info_pb.ListDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: info_pb.ListDataReply) => void): grpcWeb.ClientReadableStream<info_pb.ListDataReply>;

  listData(
    request: info_pb.ListDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: info_pb.ListDataReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/info.Info/ListData',
        request,
        metadata || {},
        this.methodDescriptorListData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/info.Info/ListData',
    request,
    metadata || {},
    this.methodDescriptorListData);
  }

}

