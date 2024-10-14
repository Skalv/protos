//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParams, QueryParamsResponse, QueryRegisteredTokens, QueryRegisteredTokensResponse, QueryMarketSummary, QueryMarketSummaryResponse, QueryAccountBalances, QueryAccountBalancesResponse, QueryAccountSummary, QueryAccountSummaryResponse, QueryLiquidationTargets, QueryLiquidationTargetsResponse, QueryBadDebts, QueryBadDebtsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the x/leverage module. */
  params(request?: QueryParams): Promise<QueryParamsResponse>;
  /** RegisteredTokens queries for all the registered tokens. */
  registeredTokens(request?: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponse>;
  /** MarketSummary queries a base asset's current borrowing and supplying conditions. */
  marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse>;
  /** AccountBalances queries an account's current supply, collateral, and borrow positions. */
  accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse>;
  /** AccountSummary queries USD values representing an account's total positions and borrowing limits. It requires oracle prices to return successfully. */
  accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse>;
  /** LiquidationTargets queries a list of all borrower account addresses eligible for liquidation. */
  liquidationTargets(request?: QueryLiquidationTargets): Promise<QueryLiquidationTargetsResponse>;
  /** BadDebts queries a list of borrow positions that have been marked for bad debt repayment. */
  badDebts(request?: QueryBadDebts): Promise<QueryBadDebtsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.registeredTokens = this.registeredTokens.bind(this);
    this.marketSummary = this.marketSummary.bind(this);
    this.accountBalances = this.accountBalances.bind(this);
    this.accountSummary = this.accountSummary.bind(this);
    this.liquidationTargets = this.liquidationTargets.bind(this);
    this.badDebts = this.badDebts.bind(this);
  }
  params(request: QueryParams = {}): Promise<QueryParamsResponse> {
    const data = QueryParams.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  registeredTokens(request: QueryRegisteredTokens = {}): Promise<QueryRegisteredTokensResponse> {
    const data = QueryRegisteredTokens.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "RegisteredTokens", data);
    return promise.then(data => QueryRegisteredTokensResponse.decode(new BinaryReader(data)));
  }
  marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse> {
    const data = QueryMarketSummary.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "MarketSummary", data);
    return promise.then(data => QueryMarketSummaryResponse.decode(new BinaryReader(data)));
  }
  accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse> {
    const data = QueryAccountBalances.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "AccountBalances", data);
    return promise.then(data => QueryAccountBalancesResponse.decode(new BinaryReader(data)));
  }
  accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse> {
    const data = QueryAccountSummary.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "AccountSummary", data);
    return promise.then(data => QueryAccountSummaryResponse.decode(new BinaryReader(data)));
  }
  liquidationTargets(request: QueryLiquidationTargets = {}): Promise<QueryLiquidationTargetsResponse> {
    const data = QueryLiquidationTargets.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "LiquidationTargets", data);
    return promise.then(data => QueryLiquidationTargetsResponse.decode(new BinaryReader(data)));
  }
  badDebts(request: QueryBadDebts = {}): Promise<QueryBadDebtsResponse> {
    const data = QueryBadDebts.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Query", "BadDebts", data);
    return promise.then(data => QueryBadDebtsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParams): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    registeredTokens(request?: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponse> {
      return queryService.registeredTokens(request);
    },
    marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse> {
      return queryService.marketSummary(request);
    },
    accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse> {
      return queryService.accountBalances(request);
    },
    accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse> {
      return queryService.accountSummary(request);
    },
    liquidationTargets(request?: QueryLiquidationTargets): Promise<QueryLiquidationTargetsResponse> {
      return queryService.liquidationTargets(request);
    },
    badDebts(request?: QueryBadDebts): Promise<QueryBadDebtsResponse> {
      return queryService.badDebts(request);
    }
  };
};