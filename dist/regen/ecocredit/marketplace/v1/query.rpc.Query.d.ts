import { Rpc } from "../../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QuerySellOrderRequest, QuerySellOrderResponse, QuerySellOrdersRequest, QuerySellOrdersResponse, QuerySellOrdersByBatchDenomRequest, QuerySellOrdersByBatchDenomResponse, QuerySellOrdersByAddressRequest, QuerySellOrdersByAddressResponse, QueryAllowedDenomsRequest, QueryAllowedDenomsResponse } from "./query";
/** Msg is the regen.ecocredit.marketplace.v1 Query service. */
export interface Query {
    /** SellOrder queries a sell order by its ID */
    sellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse>;
    /** SellOrders queries a paginated list of all sell orders */
    sellOrders(request?: QuerySellOrdersRequest): Promise<QuerySellOrdersResponse>;
    /**
     * SellOrdersByDenom queries a paginated list of all sell orders of a specific
     * ecocredit denom
     */
    sellOrdersByBatchDenom(request: QuerySellOrdersByBatchDenomRequest): Promise<QuerySellOrdersByBatchDenomResponse>;
    /**
     * SellOrdersByAddress queries a paginated list of all sell orders from a
     * specific address
     */
    sellOrdersByAddress(request: QuerySellOrdersByAddressRequest): Promise<QuerySellOrdersByAddressResponse>;
    /**
     * AllowedDenoms queries all denoms allowed to be set in the AskPrice of a
     * sell order
     */
    allowedDenoms(request?: QueryAllowedDenomsRequest): Promise<QueryAllowedDenomsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    sellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse>;
    sellOrders(request?: QuerySellOrdersRequest): Promise<QuerySellOrdersResponse>;
    sellOrdersByBatchDenom(request: QuerySellOrdersByBatchDenomRequest): Promise<QuerySellOrdersByBatchDenomResponse>;
    sellOrdersByAddress(request: QuerySellOrdersByAddressRequest): Promise<QuerySellOrdersByAddressResponse>;
    allowedDenoms(request?: QueryAllowedDenomsRequest): Promise<QueryAllowedDenomsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    sellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse>;
    sellOrders(request?: QuerySellOrdersRequest): Promise<QuerySellOrdersResponse>;
    sellOrdersByBatchDenom(request: QuerySellOrdersByBatchDenomRequest): Promise<QuerySellOrdersByBatchDenomResponse>;
    sellOrdersByAddress(request: QuerySellOrdersByAddressRequest): Promise<QuerySellOrdersByAddressResponse>;
    allowedDenoms(request?: QueryAllowedDenomsRequest): Promise<QueryAllowedDenomsResponse>;
};
