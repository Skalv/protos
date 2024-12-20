//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Accounts queries all accounts
   */
  accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Payments queries all payments
   */
  payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.accounts = this.accounts.bind(this);
    this.payments = this.payments.bind(this);
  }
  accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.escrow.v1beta1.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new BinaryReader(data)));
  }
  payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse> {
    const data = QueryPaymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.escrow.v1beta1.Query", "Payments", data);
    return promise.then(data => QueryPaymentsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse> {
      return queryService.accounts(request);
    },
    payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse> {
      return queryService.payments(request);
    }
  };
};