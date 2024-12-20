import { Params, ParamsAmino, ParamsSDKType, Token, TokenAmino, TokenSDKType } from "./leverage";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BadDebt, BadDebtAmino, BadDebtSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {
}
export interface QueryParamsProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryParams";
    value: Uint8Array;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsAmino {
}
export interface QueryParamsAminoMsg {
    type: "/umee.leverage.v1.QueryParams";
    value: QueryParamsAmino;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsSDKType {
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryParamsResponse";
    value: Uint8Array;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/umee.leverage.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse defines the response structure for the Params gRPC
 * service handler.
 */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryRegisteredTokens defines the request structure for the RegisteredTokens
 * gRPC service handler.
 */
export interface QueryRegisteredTokens {
}
export interface QueryRegisteredTokensProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryRegisteredTokens";
    value: Uint8Array;
}
/**
 * QueryRegisteredTokens defines the request structure for the RegisteredTokens
 * gRPC service handler.
 */
export interface QueryRegisteredTokensAmino {
}
export interface QueryRegisteredTokensAminoMsg {
    type: "/umee.leverage.v1.QueryRegisteredTokens";
    value: QueryRegisteredTokensAmino;
}
/**
 * QueryRegisteredTokens defines the request structure for the RegisteredTokens
 * gRPC service handler.
 */
export interface QueryRegisteredTokensSDKType {
}
/**
 * QueryRegisteredTokensResponse defines the response structure for the
 * RegisteredTokens gRPC service handler.
 */
export interface QueryRegisteredTokensResponse {
    registry: Token[];
}
export interface QueryRegisteredTokensResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryRegisteredTokensResponse";
    value: Uint8Array;
}
/**
 * QueryRegisteredTokensResponse defines the response structure for the
 * RegisteredTokens gRPC service handler.
 */
export interface QueryRegisteredTokensResponseAmino {
    registry?: TokenAmino[];
}
export interface QueryRegisteredTokensResponseAminoMsg {
    type: "/umee.leverage.v1.QueryRegisteredTokensResponse";
    value: QueryRegisteredTokensResponseAmino;
}
/**
 * QueryRegisteredTokensResponse defines the response structure for the
 * RegisteredTokens gRPC service handler.
 */
export interface QueryRegisteredTokensResponseSDKType {
    registry: TokenSDKType[];
}
/** QueryMarketSummary defines the request structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummary {
    denom: string;
}
export interface QueryMarketSummaryProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryMarketSummary";
    value: Uint8Array;
}
/** QueryMarketSummary defines the request structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummaryAmino {
    denom?: string;
}
export interface QueryMarketSummaryAminoMsg {
    type: "/umee.leverage.v1.QueryMarketSummary";
    value: QueryMarketSummaryAmino;
}
/** QueryMarketSummary defines the request structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummarySDKType {
    denom: string;
}
/** QueryMarketSummaryResponse defines the response structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummaryResponse {
    /** Symbol Denom is the human-readable representation of a token denom, for example "UMEE" or "ATOM". */
    symbolDenom: string;
    /** Exponent is the power of ten required to get from base denom to symbol denom. For example, an exponent of 6 means 10^6 uumee = 1 UMEE. */
    exponent: number;
    /** Oracle Price is the current USD value of a base token. Exponent must be applied to reach the price from symbol_denom. For example, a price of $0.000001 for 1 uumee is equivalent to $1.00 for 1 UMEE. Oracle price is nil when the oracle is down. */
    oraclePrice?: string;
    /** uToken Exchange Rate is the amount of base tokens received when withdrawing 1 uToken. For example, a uToken exchange rate of 1.5 means a supplier receives 3 uumee for every 2 u/uumee they wish to withdraw. The same applies in reverse: supplying 3 uumee would award 2 u/uumee at that time. */
    uTokenExchangeRate: string;
    /** Supply APY is the current interest rate suppliers are receiving for their deposits. For example, 0.11 would mean 11% APY. Supply APY is always less than borrow APY. */
    supplyAPY: string;
    /** Borrow APY is the current interest rate borrowers are being charged on their loans. For example, 0.2 would mean 20% APY. */
    borrowAPY: string;
    /** Supplied is the total amount of tokens supplied to the the system by all suppliers, including any interest earned. This includes that tokens which have been borrowed out or enabled as collateral, but excludes reserves. Supplied is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    supplied: string;
    /** Reserved is the total amount of tokens held in reserve by the module for emergencies. Reserves are always excluded from total supply, borrow, collateral, and liqduidity queries. Reserves are denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    reserved: string;
    /** Collateral is the total amount of uTokens collateralized by all borrowers. Collateral is denominated in uTokenso, so both uToken exchange rate and exponent must also be applied to convert to symbol denom. For example, if collateral is 4000000 u/uumee and uToken exhange rate is 1.2, then 5 UMEE have been collateralized. */
    collateral: string;
    /** Borrowed is the total amount of debt in this token held across all borrowers. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    borrowed: string;
    /** Liquidity is the amount of a token that has been supplied but not yet borrowed or reserved. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    liquidity: string;
    /** Maximum Borrow is the amount of a token that is available for borrowing, including that which has already been borrowed out. This amount is less than total supply due to safety limits. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. For example, if borrowed is 3000000 uumee and maximum borrow is 4000000 uumee, then 1 UMEE is currently available for borrowing. */
    maximumBorrow: string;
    /** Maximum Collateral is the amount of a token that can be collateralized, including that which is already collateral. This amount is less than total supply due to safety limits. It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. For example, if collateral is 4000000 u/uumee, uToken exhange rate is 1.2, and maximum borrow is 7000000 uumee, then a maximum of 2 additional UMEE is permitted to be collateralized. */
    maximumCollateral: string;
    /** Mimimum Liquidity is the minimum amount of liquidity in the module required by safety limits, based on the current collateral. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. For example, if liquidity is 9000000 uumee and minimum liquidity is 8000000 uumee, then a maximum of 1 additional UMEE is currently available for borrowing or withdrawal. */
    minimumLiquidity: string;
    /** uToken Supply is the total amount of a base token's associated uToken in circulation. */
    uTokenSupply: string;
    /** Available Borrow is the maximum additional amount of base tokens than can be borrowed based on current liquidity and system safety limits. It can also be calculated by MIN(maximum_borrow - borrowed, liquidity - minimum_liquidity). It is denominated in base tokens, so exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and borrowing is temporarily unavailable. */
    availableBorrow: string;
    /** Available Withdraw is the maximum amount of uTokens than can currently be withdrawn based on liquidity and system safety limits. It can also be calculated by (liquidity - minimum_liquidity). It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and withdrawal is temporarily unavailable. */
    availableWithdraw: string;
    /** Available Collateralize is the maximum additional amount of uTokens than can be collateralized based on current liquidity and system safety limits. It can also be calculated by (maximum_collateral, - collateral). It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and additional collateral cannot be created until more liquidity is present. */
    availableCollateralize: string;
}
export interface QueryMarketSummaryResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryMarketSummaryResponse";
    value: Uint8Array;
}
/** QueryMarketSummaryResponse defines the response structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummaryResponseAmino {
    /** Symbol Denom is the human-readable representation of a token denom, for example "UMEE" or "ATOM". */
    symbol_denom?: string;
    /** Exponent is the power of ten required to get from base denom to symbol denom. For example, an exponent of 6 means 10^6 uumee = 1 UMEE. */
    exponent?: number;
    /** Oracle Price is the current USD value of a base token. Exponent must be applied to reach the price from symbol_denom. For example, a price of $0.000001 for 1 uumee is equivalent to $1.00 for 1 UMEE. Oracle price is nil when the oracle is down. */
    oracle_price?: string;
    /** uToken Exchange Rate is the amount of base tokens received when withdrawing 1 uToken. For example, a uToken exchange rate of 1.5 means a supplier receives 3 uumee for every 2 u/uumee they wish to withdraw. The same applies in reverse: supplying 3 uumee would award 2 u/uumee at that time. */
    uToken_exchange_rate: string;
    /** Supply APY is the current interest rate suppliers are receiving for their deposits. For example, 0.11 would mean 11% APY. Supply APY is always less than borrow APY. */
    supply_APY: string;
    /** Borrow APY is the current interest rate borrowers are being charged on their loans. For example, 0.2 would mean 20% APY. */
    borrow_APY: string;
    /** Supplied is the total amount of tokens supplied to the the system by all suppliers, including any interest earned. This includes that tokens which have been borrowed out or enabled as collateral, but excludes reserves. Supplied is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    supplied?: string;
    /** Reserved is the total amount of tokens held in reserve by the module for emergencies. Reserves are always excluded from total supply, borrow, collateral, and liqduidity queries. Reserves are denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    reserved?: string;
    /** Collateral is the total amount of uTokens collateralized by all borrowers. Collateral is denominated in uTokenso, so both uToken exchange rate and exponent must also be applied to convert to symbol denom. For example, if collateral is 4000000 u/uumee and uToken exhange rate is 1.2, then 5 UMEE have been collateralized. */
    collateral?: string;
    /** Borrowed is the total amount of debt in this token held across all borrowers. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    borrowed?: string;
    /** Liquidity is the amount of a token that has been supplied but not yet borrowed or reserved. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. */
    liquidity?: string;
    /** Maximum Borrow is the amount of a token that is available for borrowing, including that which has already been borrowed out. This amount is less than total supply due to safety limits. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. For example, if borrowed is 3000000 uumee and maximum borrow is 4000000 uumee, then 1 UMEE is currently available for borrowing. */
    maximum_borrow?: string;
    /** Maximum Collateral is the amount of a token that can be collateralized, including that which is already collateral. This amount is less than total supply due to safety limits. It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. For example, if collateral is 4000000 u/uumee, uToken exhange rate is 1.2, and maximum borrow is 7000000 uumee, then a maximum of 2 additional UMEE is permitted to be collateralized. */
    maximum_collateral?: string;
    /** Mimimum Liquidity is the minimum amount of liquidity in the module required by safety limits, based on the current collateral. It is denominated in base tokens, so exponent must be applied to convert to symbol denom. For example, if liquidity is 9000000 uumee and minimum liquidity is 8000000 uumee, then a maximum of 1 additional UMEE is currently available for borrowing or withdrawal. */
    minimum_liquidity?: string;
    /** uToken Supply is the total amount of a base token's associated uToken in circulation. */
    uToken_supply: string;
    /** Available Borrow is the maximum additional amount of base tokens than can be borrowed based on current liquidity and system safety limits. It can also be calculated by MIN(maximum_borrow - borrowed, liquidity - minimum_liquidity). It is denominated in base tokens, so exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and borrowing is temporarily unavailable. */
    available_borrow?: string;
    /** Available Withdraw is the maximum amount of uTokens than can currently be withdrawn based on liquidity and system safety limits. It can also be calculated by (liquidity - minimum_liquidity). It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and withdrawal is temporarily unavailable. */
    available_withdraw?: string;
    /** Available Collateralize is the maximum additional amount of uTokens than can be collateralized based on current liquidity and system safety limits. It can also be calculated by (maximum_collateral, - collateral). It is denominated in uTokens, so both uToken exchange rate and exponent must be applied to convert to symbol denom. A negative availability means safety limits have been exceeded and additional collateral cannot be created until more liquidity is present. */
    available_collateralize?: string;
}
export interface QueryMarketSummaryResponseAminoMsg {
    type: "/umee.leverage.v1.QueryMarketSummaryResponse";
    value: QueryMarketSummaryResponseAmino;
}
/** QueryMarketSummaryResponse defines the response structure for the MarketSummary gRPC service handler. */
export interface QueryMarketSummaryResponseSDKType {
    symbol_denom: string;
    exponent: number;
    oracle_price?: string;
    uToken_exchange_rate: string;
    supply_APY: string;
    borrow_APY: string;
    supplied: string;
    reserved: string;
    collateral: string;
    borrowed: string;
    liquidity: string;
    maximum_borrow: string;
    maximum_collateral: string;
    minimum_liquidity: string;
    uToken_supply: string;
    available_borrow: string;
    available_withdraw: string;
    available_collateralize: string;
}
/** QueryAccountBalances defines the request structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalances {
    address: string;
}
export interface QueryAccountBalancesProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryAccountBalances";
    value: Uint8Array;
}
/** QueryAccountBalances defines the request structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalancesAmino {
    address?: string;
}
export interface QueryAccountBalancesAminoMsg {
    type: "/umee.leverage.v1.QueryAccountBalances";
    value: QueryAccountBalancesAmino;
}
/** QueryAccountBalances defines the request structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalancesSDKType {
    address: string;
}
/** QueryAccountBalancesResponse defines the response structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalancesResponse {
    /** Supplied contains all tokens the account has supplied, including interest earned. It is denominated in base tokens, so exponent from each coin's registered_tokens entry must be applied to convert to symbol denom. */
    supplied: Coin[];
    /** Collateral contains all uTokens the account has collateralized. It is denominated in uTokens, so both exponent and uToken exchange rate from each coin's market_summary must be applied to convert to base token symbol denom. */
    collateral: Coin[];
    /** Borrowed contains all tokens the account has borrowed, including interest owed. It is denominated in base tokens, so exponent from each coin's registered_tokens entry must be applied to convert to symbol denom. */
    borrowed: Coin[];
}
export interface QueryAccountBalancesResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryAccountBalancesResponse";
    value: Uint8Array;
}
/** QueryAccountBalancesResponse defines the response structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalancesResponseAmino {
    /** Supplied contains all tokens the account has supplied, including interest earned. It is denominated in base tokens, so exponent from each coin's registered_tokens entry must be applied to convert to symbol denom. */
    supplied?: CoinAmino[];
    /** Collateral contains all uTokens the account has collateralized. It is denominated in uTokens, so both exponent and uToken exchange rate from each coin's market_summary must be applied to convert to base token symbol denom. */
    collateral?: CoinAmino[];
    /** Borrowed contains all tokens the account has borrowed, including interest owed. It is denominated in base tokens, so exponent from each coin's registered_tokens entry must be applied to convert to symbol denom. */
    borrowed?: CoinAmino[];
}
export interface QueryAccountBalancesResponseAminoMsg {
    type: "/umee.leverage.v1.QueryAccountBalancesResponse";
    value: QueryAccountBalancesResponseAmino;
}
/** QueryAccountBalancesResponse defines the response structure for the AccountBalances gRPC service handler. */
export interface QueryAccountBalancesResponseSDKType {
    supplied: CoinSDKType[];
    collateral: CoinSDKType[];
    borrowed: CoinSDKType[];
}
/** QueryAccountSummary defines the request structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummary {
    address: string;
}
export interface QueryAccountSummaryProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryAccountSummary";
    value: Uint8Array;
}
/** QueryAccountSummary defines the request structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummaryAmino {
    address?: string;
}
export interface QueryAccountSummaryAminoMsg {
    type: "/umee.leverage.v1.QueryAccountSummary";
    value: QueryAccountSummaryAmino;
}
/** QueryAccountSummary defines the request structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummarySDKType {
    address: string;
}
/** QueryAccountSummaryResponse defines the response structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummaryResponse {
    /** Supplied Value is the sum of the USD value of all tokens the account has supplied, includng interest earned. */
    suppliedValue: string;
    /** Collateral Value is the sum of the USD value of all uTokens the account has collateralized. */
    collateralValue: string;
    /** Borrowed Value is the sum of the USD value of all tokens the account has borrowed, including interest owed. */
    borrowedValue: string;
    /** Borrow Limit is the maximum Borrowed Value the account is allowed to reach through direct borrowing. */
    borrowLimit: string;
    /** Liquidation Threshold is the Borrowed Value at which the account becomes eligible for liquidation. */
    liquidationThreshold: string;
}
export interface QueryAccountSummaryResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryAccountSummaryResponse";
    value: Uint8Array;
}
/** QueryAccountSummaryResponse defines the response structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummaryResponseAmino {
    /** Supplied Value is the sum of the USD value of all tokens the account has supplied, includng interest earned. */
    supplied_value?: string;
    /** Collateral Value is the sum of the USD value of all uTokens the account has collateralized. */
    collateral_value?: string;
    /** Borrowed Value is the sum of the USD value of all tokens the account has borrowed, including interest owed. */
    borrowed_value?: string;
    /** Borrow Limit is the maximum Borrowed Value the account is allowed to reach through direct borrowing. */
    borrow_limit?: string;
    /** Liquidation Threshold is the Borrowed Value at which the account becomes eligible for liquidation. */
    liquidation_threshold?: string;
}
export interface QueryAccountSummaryResponseAminoMsg {
    type: "/umee.leverage.v1.QueryAccountSummaryResponse";
    value: QueryAccountSummaryResponseAmino;
}
/** QueryAccountSummaryResponse defines the response structure for the AccountSummary gRPC service handler. */
export interface QueryAccountSummaryResponseSDKType {
    supplied_value: string;
    collateral_value: string;
    borrowed_value: string;
    borrow_limit: string;
    liquidation_threshold: string;
}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargets {
}
export interface QueryLiquidationTargetsProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryLiquidationTargets";
    value: Uint8Array;
}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsAmino {
}
export interface QueryLiquidationTargetsAminoMsg {
    type: "/umee.leverage.v1.QueryLiquidationTargets";
    value: QueryLiquidationTargetsAmino;
}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsSDKType {
}
/** QueryLiquidationTargetsResponse defines the response structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsResponse {
    /** Targets are the addresses of borrowers eligible for liquidation. */
    targets: string[];
}
export interface QueryLiquidationTargetsResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryLiquidationTargetsResponse";
    value: Uint8Array;
}
/** QueryLiquidationTargetsResponse defines the response structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsResponseAmino {
    /** Targets are the addresses of borrowers eligible for liquidation. */
    targets?: string[];
}
export interface QueryLiquidationTargetsResponseAminoMsg {
    type: "/umee.leverage.v1.QueryLiquidationTargetsResponse";
    value: QueryLiquidationTargetsResponseAmino;
}
/** QueryLiquidationTargetsResponse defines the response structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsResponseSDKType {
    targets: string[];
}
/**
 * QueryBadDebts defines the request structure for the
 * BedDebts gRPC service handler.
 */
export interface QueryBadDebts {
}
export interface QueryBadDebtsProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryBadDebts";
    value: Uint8Array;
}
/**
 * QueryBadDebts defines the request structure for the
 * BedDebts gRPC service handler.
 */
export interface QueryBadDebtsAmino {
}
export interface QueryBadDebtsAminoMsg {
    type: "/umee.leverage.v1.QueryBadDebts";
    value: QueryBadDebtsAmino;
}
/**
 * QueryBadDebts defines the request structure for the
 * BedDebts gRPC service handler.
 */
export interface QueryBadDebtsSDKType {
}
/** QueryBadDebtsResponse defines the response structure for the BedDebts gRPC service handler. */
export interface QueryBadDebtsResponse {
    /** Targets are borrow positions currently marked for bad debt repayment. Each contains an Address and a Denom. */
    targets: BadDebt[];
}
export interface QueryBadDebtsResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.QueryBadDebtsResponse";
    value: Uint8Array;
}
/** QueryBadDebtsResponse defines the response structure for the BedDebts gRPC service handler. */
export interface QueryBadDebtsResponseAmino {
    /** Targets are borrow positions currently marked for bad debt repayment. Each contains an Address and a Denom. */
    targets?: BadDebtAmino[];
}
export interface QueryBadDebtsResponseAminoMsg {
    type: "/umee.leverage.v1.QueryBadDebtsResponse";
    value: QueryBadDebtsResponseAmino;
}
/** QueryBadDebtsResponse defines the response structure for the BedDebts gRPC service handler. */
export interface QueryBadDebtsResponseSDKType {
    targets: BadDebtSDKType[];
}
export declare const QueryParams: {
    typeUrl: string;
    encode(_: QueryParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParams;
    fromPartial(_: Partial<QueryParams>): QueryParams;
    fromAmino(_: QueryParamsAmino): QueryParams;
    toAmino(_: QueryParams): QueryParamsAmino;
    fromAminoMsg(object: QueryParamsAminoMsg): QueryParams;
    fromProtoMsg(message: QueryParamsProtoMsg): QueryParams;
    toProto(message: QueryParams): Uint8Array;
    toProtoMsg(message: QueryParams): QueryParamsProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryRegisteredTokens: {
    typeUrl: string;
    encode(_: QueryRegisteredTokens, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredTokens;
    fromPartial(_: Partial<QueryRegisteredTokens>): QueryRegisteredTokens;
    fromAmino(_: QueryRegisteredTokensAmino): QueryRegisteredTokens;
    toAmino(_: QueryRegisteredTokens): QueryRegisteredTokensAmino;
    fromAminoMsg(object: QueryRegisteredTokensAminoMsg): QueryRegisteredTokens;
    fromProtoMsg(message: QueryRegisteredTokensProtoMsg): QueryRegisteredTokens;
    toProto(message: QueryRegisteredTokens): Uint8Array;
    toProtoMsg(message: QueryRegisteredTokens): QueryRegisteredTokensProtoMsg;
};
export declare const QueryRegisteredTokensResponse: {
    typeUrl: string;
    encode(message: QueryRegisteredTokensResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredTokensResponse;
    fromPartial(object: Partial<QueryRegisteredTokensResponse>): QueryRegisteredTokensResponse;
    fromAmino(object: QueryRegisteredTokensResponseAmino): QueryRegisteredTokensResponse;
    toAmino(message: QueryRegisteredTokensResponse): QueryRegisteredTokensResponseAmino;
    fromAminoMsg(object: QueryRegisteredTokensResponseAminoMsg): QueryRegisteredTokensResponse;
    fromProtoMsg(message: QueryRegisteredTokensResponseProtoMsg): QueryRegisteredTokensResponse;
    toProto(message: QueryRegisteredTokensResponse): Uint8Array;
    toProtoMsg(message: QueryRegisteredTokensResponse): QueryRegisteredTokensResponseProtoMsg;
};
export declare const QueryMarketSummary: {
    typeUrl: string;
    encode(message: QueryMarketSummary, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketSummary;
    fromPartial(object: Partial<QueryMarketSummary>): QueryMarketSummary;
    fromAmino(object: QueryMarketSummaryAmino): QueryMarketSummary;
    toAmino(message: QueryMarketSummary): QueryMarketSummaryAmino;
    fromAminoMsg(object: QueryMarketSummaryAminoMsg): QueryMarketSummary;
    fromProtoMsg(message: QueryMarketSummaryProtoMsg): QueryMarketSummary;
    toProto(message: QueryMarketSummary): Uint8Array;
    toProtoMsg(message: QueryMarketSummary): QueryMarketSummaryProtoMsg;
};
export declare const QueryMarketSummaryResponse: {
    typeUrl: string;
    encode(message: QueryMarketSummaryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketSummaryResponse;
    fromPartial(object: Partial<QueryMarketSummaryResponse>): QueryMarketSummaryResponse;
    fromAmino(object: QueryMarketSummaryResponseAmino): QueryMarketSummaryResponse;
    toAmino(message: QueryMarketSummaryResponse): QueryMarketSummaryResponseAmino;
    fromAminoMsg(object: QueryMarketSummaryResponseAminoMsg): QueryMarketSummaryResponse;
    fromProtoMsg(message: QueryMarketSummaryResponseProtoMsg): QueryMarketSummaryResponse;
    toProto(message: QueryMarketSummaryResponse): Uint8Array;
    toProtoMsg(message: QueryMarketSummaryResponse): QueryMarketSummaryResponseProtoMsg;
};
export declare const QueryAccountBalances: {
    typeUrl: string;
    encode(message: QueryAccountBalances, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountBalances;
    fromPartial(object: Partial<QueryAccountBalances>): QueryAccountBalances;
    fromAmino(object: QueryAccountBalancesAmino): QueryAccountBalances;
    toAmino(message: QueryAccountBalances): QueryAccountBalancesAmino;
    fromAminoMsg(object: QueryAccountBalancesAminoMsg): QueryAccountBalances;
    fromProtoMsg(message: QueryAccountBalancesProtoMsg): QueryAccountBalances;
    toProto(message: QueryAccountBalances): Uint8Array;
    toProtoMsg(message: QueryAccountBalances): QueryAccountBalancesProtoMsg;
};
export declare const QueryAccountBalancesResponse: {
    typeUrl: string;
    encode(message: QueryAccountBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountBalancesResponse;
    fromPartial(object: Partial<QueryAccountBalancesResponse>): QueryAccountBalancesResponse;
    fromAmino(object: QueryAccountBalancesResponseAmino): QueryAccountBalancesResponse;
    toAmino(message: QueryAccountBalancesResponse): QueryAccountBalancesResponseAmino;
    fromAminoMsg(object: QueryAccountBalancesResponseAminoMsg): QueryAccountBalancesResponse;
    fromProtoMsg(message: QueryAccountBalancesResponseProtoMsg): QueryAccountBalancesResponse;
    toProto(message: QueryAccountBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryAccountBalancesResponse): QueryAccountBalancesResponseProtoMsg;
};
export declare const QueryAccountSummary: {
    typeUrl: string;
    encode(message: QueryAccountSummary, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountSummary;
    fromPartial(object: Partial<QueryAccountSummary>): QueryAccountSummary;
    fromAmino(object: QueryAccountSummaryAmino): QueryAccountSummary;
    toAmino(message: QueryAccountSummary): QueryAccountSummaryAmino;
    fromAminoMsg(object: QueryAccountSummaryAminoMsg): QueryAccountSummary;
    fromProtoMsg(message: QueryAccountSummaryProtoMsg): QueryAccountSummary;
    toProto(message: QueryAccountSummary): Uint8Array;
    toProtoMsg(message: QueryAccountSummary): QueryAccountSummaryProtoMsg;
};
export declare const QueryAccountSummaryResponse: {
    typeUrl: string;
    encode(message: QueryAccountSummaryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountSummaryResponse;
    fromPartial(object: Partial<QueryAccountSummaryResponse>): QueryAccountSummaryResponse;
    fromAmino(object: QueryAccountSummaryResponseAmino): QueryAccountSummaryResponse;
    toAmino(message: QueryAccountSummaryResponse): QueryAccountSummaryResponseAmino;
    fromAminoMsg(object: QueryAccountSummaryResponseAminoMsg): QueryAccountSummaryResponse;
    fromProtoMsg(message: QueryAccountSummaryResponseProtoMsg): QueryAccountSummaryResponse;
    toProto(message: QueryAccountSummaryResponse): Uint8Array;
    toProtoMsg(message: QueryAccountSummaryResponse): QueryAccountSummaryResponseProtoMsg;
};
export declare const QueryLiquidationTargets: {
    typeUrl: string;
    encode(_: QueryLiquidationTargets, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidationTargets;
    fromPartial(_: Partial<QueryLiquidationTargets>): QueryLiquidationTargets;
    fromAmino(_: QueryLiquidationTargetsAmino): QueryLiquidationTargets;
    toAmino(_: QueryLiquidationTargets): QueryLiquidationTargetsAmino;
    fromAminoMsg(object: QueryLiquidationTargetsAminoMsg): QueryLiquidationTargets;
    fromProtoMsg(message: QueryLiquidationTargetsProtoMsg): QueryLiquidationTargets;
    toProto(message: QueryLiquidationTargets): Uint8Array;
    toProtoMsg(message: QueryLiquidationTargets): QueryLiquidationTargetsProtoMsg;
};
export declare const QueryLiquidationTargetsResponse: {
    typeUrl: string;
    encode(message: QueryLiquidationTargetsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidationTargetsResponse;
    fromPartial(object: Partial<QueryLiquidationTargetsResponse>): QueryLiquidationTargetsResponse;
    fromAmino(object: QueryLiquidationTargetsResponseAmino): QueryLiquidationTargetsResponse;
    toAmino(message: QueryLiquidationTargetsResponse): QueryLiquidationTargetsResponseAmino;
    fromAminoMsg(object: QueryLiquidationTargetsResponseAminoMsg): QueryLiquidationTargetsResponse;
    fromProtoMsg(message: QueryLiquidationTargetsResponseProtoMsg): QueryLiquidationTargetsResponse;
    toProto(message: QueryLiquidationTargetsResponse): Uint8Array;
    toProtoMsg(message: QueryLiquidationTargetsResponse): QueryLiquidationTargetsResponseProtoMsg;
};
export declare const QueryBadDebts: {
    typeUrl: string;
    encode(_: QueryBadDebts, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBadDebts;
    fromPartial(_: Partial<QueryBadDebts>): QueryBadDebts;
    fromAmino(_: QueryBadDebtsAmino): QueryBadDebts;
    toAmino(_: QueryBadDebts): QueryBadDebtsAmino;
    fromAminoMsg(object: QueryBadDebtsAminoMsg): QueryBadDebts;
    fromProtoMsg(message: QueryBadDebtsProtoMsg): QueryBadDebts;
    toProto(message: QueryBadDebts): Uint8Array;
    toProtoMsg(message: QueryBadDebts): QueryBadDebtsProtoMsg;
};
export declare const QueryBadDebtsResponse: {
    typeUrl: string;
    encode(message: QueryBadDebtsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBadDebtsResponse;
    fromPartial(object: Partial<QueryBadDebtsResponse>): QueryBadDebtsResponse;
    fromAmino(object: QueryBadDebtsResponseAmino): QueryBadDebtsResponse;
    toAmino(message: QueryBadDebtsResponse): QueryBadDebtsResponseAmino;
    fromAminoMsg(object: QueryBadDebtsResponseAminoMsg): QueryBadDebtsResponse;
    fromProtoMsg(message: QueryBadDebtsResponseProtoMsg): QueryBadDebtsResponse;
    toProto(message: QueryBadDebtsResponse): Uint8Array;
    toProtoMsg(message: QueryBadDebtsResponse): QueryBadDebtsResponseProtoMsg;
};
