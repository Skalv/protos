import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    registeredTokens(request?: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponse>;
    marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse>;
    accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse>;
    accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse>;
    liquidationTargets(request?: QueryLiquidationTargets): Promise<QueryLiquidationTargetsResponse>;
    badDebts(request?: QueryBadDebts): Promise<QueryBadDebtsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParams): Promise<QueryParamsResponse>;
    registeredTokens(request?: QueryRegisteredTokens): Promise<QueryRegisteredTokensResponse>;
    marketSummary(request: QueryMarketSummary): Promise<QueryMarketSummaryResponse>;
    accountBalances(request: QueryAccountBalances): Promise<QueryAccountBalancesResponse>;
    accountSummary(request: QueryAccountSummary): Promise<QueryAccountSummaryResponse>;
    liquidationTargets(request?: QueryLiquidationTargets): Promise<QueryLiquidationTargetsResponse>;
    badDebts(request?: QueryBadDebts): Promise<QueryBadDebtsResponse>;
};
