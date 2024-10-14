//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, Token, TokenAmino, TokenSDKType } from "./leverage";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BadDebt, BadDebtAmino, BadDebtSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParams {}
export interface QueryParamsProtoMsg {
  typeUrl: "/umee.leverage.v1.QueryParams";
  value: Uint8Array;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsAmino {}
export interface QueryParamsAminoMsg {
  type: "/umee.leverage.v1.QueryParams";
  value: QueryParamsAmino;
}
/**
 * QueryParams defines the request structure for the Params gRPC service
 * handler.
 */
export interface QueryParamsSDKType {}
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
export interface QueryRegisteredTokens {}
export interface QueryRegisteredTokensProtoMsg {
  typeUrl: "/umee.leverage.v1.QueryRegisteredTokens";
  value: Uint8Array;
}
/**
 * QueryRegisteredTokens defines the request structure for the RegisteredTokens
 * gRPC service handler.
 */
export interface QueryRegisteredTokensAmino {}
export interface QueryRegisteredTokensAminoMsg {
  type: "/umee.leverage.v1.QueryRegisteredTokens";
  value: QueryRegisteredTokensAmino;
}
/**
 * QueryRegisteredTokens defines the request structure for the RegisteredTokens
 * gRPC service handler.
 */
export interface QueryRegisteredTokensSDKType {}
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
export interface QueryLiquidationTargets {}
export interface QueryLiquidationTargetsProtoMsg {
  typeUrl: "/umee.leverage.v1.QueryLiquidationTargets";
  value: Uint8Array;
}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsAmino {}
export interface QueryLiquidationTargetsAminoMsg {
  type: "/umee.leverage.v1.QueryLiquidationTargets";
  value: QueryLiquidationTargetsAmino;
}
/** QueryLiquidationTargets defines the request structure for the LiquidationTargets gRPC service handler. */
export interface QueryLiquidationTargetsSDKType {}
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
export interface QueryBadDebts {}
export interface QueryBadDebtsProtoMsg {
  typeUrl: "/umee.leverage.v1.QueryBadDebts";
  value: Uint8Array;
}
/**
 * QueryBadDebts defines the request structure for the
 * BedDebts gRPC service handler.
 */
export interface QueryBadDebtsAmino {}
export interface QueryBadDebtsAminoMsg {
  type: "/umee.leverage.v1.QueryBadDebts";
  value: QueryBadDebtsAmino;
}
/**
 * QueryBadDebts defines the request structure for the
 * BedDebts gRPC service handler.
 */
export interface QueryBadDebtsSDKType {}
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
function createBaseQueryParams(): QueryParams {
  return {};
}
export const QueryParams = {
  typeUrl: "/umee.leverage.v1.QueryParams",
  encode(_: QueryParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryParams>): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  fromAmino(_: QueryParamsAmino): QueryParams {
    const message = createBaseQueryParams();
    return message;
  },
  toAmino(_: QueryParams): QueryParamsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsAminoMsg): QueryParams {
    return QueryParams.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsProtoMsg): QueryParams {
    return QueryParams.decode(message.value);
  },
  toProto(message: QueryParams): Uint8Array {
    return QueryParams.encode(message).finish();
  },
  toProtoMsg(message: QueryParams): QueryParamsProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryParams",
      value: QueryParams.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/umee.leverage.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredTokens(): QueryRegisteredTokens {
  return {};
}
export const QueryRegisteredTokens = {
  typeUrl: "/umee.leverage.v1.QueryRegisteredTokens",
  encode(_: QueryRegisteredTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryRegisteredTokens>): QueryRegisteredTokens {
    const message = createBaseQueryRegisteredTokens();
    return message;
  },
  fromAmino(_: QueryRegisteredTokensAmino): QueryRegisteredTokens {
    const message = createBaseQueryRegisteredTokens();
    return message;
  },
  toAmino(_: QueryRegisteredTokens): QueryRegisteredTokensAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredTokensAminoMsg): QueryRegisteredTokens {
    return QueryRegisteredTokens.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredTokensProtoMsg): QueryRegisteredTokens {
    return QueryRegisteredTokens.decode(message.value);
  },
  toProto(message: QueryRegisteredTokens): Uint8Array {
    return QueryRegisteredTokens.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredTokens): QueryRegisteredTokensProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryRegisteredTokens",
      value: QueryRegisteredTokens.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredTokensResponse(): QueryRegisteredTokensResponse {
  return {
    registry: []
  };
}
export const QueryRegisteredTokensResponse = {
  typeUrl: "/umee.leverage.v1.QueryRegisteredTokensResponse",
  encode(message: QueryRegisteredTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.registry) {
      Token.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registry.push(Token.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryRegisteredTokensResponse>): QueryRegisteredTokensResponse {
    const message = createBaseQueryRegisteredTokensResponse();
    message.registry = object.registry?.map(e => Token.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRegisteredTokensResponseAmino): QueryRegisteredTokensResponse {
    const message = createBaseQueryRegisteredTokensResponse();
    message.registry = object.registry?.map(e => Token.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryRegisteredTokensResponse): QueryRegisteredTokensResponseAmino {
    const obj: any = {};
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.registry = message.registry;
    }
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredTokensResponseAminoMsg): QueryRegisteredTokensResponse {
    return QueryRegisteredTokensResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredTokensResponseProtoMsg): QueryRegisteredTokensResponse {
    return QueryRegisteredTokensResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredTokensResponse): Uint8Array {
    return QueryRegisteredTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredTokensResponse): QueryRegisteredTokensResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryRegisteredTokensResponse",
      value: QueryRegisteredTokensResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMarketSummary(): QueryMarketSummary {
  return {
    denom: ""
  };
}
export const QueryMarketSummary = {
  typeUrl: "/umee.leverage.v1.QueryMarketSummary",
  encode(message: QueryMarketSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketSummary>): QueryMarketSummary {
    const message = createBaseQueryMarketSummary();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryMarketSummaryAmino): QueryMarketSummary {
    const message = createBaseQueryMarketSummary();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: QueryMarketSummary): QueryMarketSummaryAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryMarketSummaryAminoMsg): QueryMarketSummary {
    return QueryMarketSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketSummaryProtoMsg): QueryMarketSummary {
    return QueryMarketSummary.decode(message.value);
  },
  toProto(message: QueryMarketSummary): Uint8Array {
    return QueryMarketSummary.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketSummary): QueryMarketSummaryProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryMarketSummary",
      value: QueryMarketSummary.encode(message).finish()
    };
  }
};
function createBaseQueryMarketSummaryResponse(): QueryMarketSummaryResponse {
  return {
    symbolDenom: "",
    exponent: 0,
    oraclePrice: undefined,
    uTokenExchangeRate: "",
    supplyAPY: "",
    borrowAPY: "",
    supplied: "",
    reserved: "",
    collateral: "",
    borrowed: "",
    liquidity: "",
    maximumBorrow: "",
    maximumCollateral: "",
    minimumLiquidity: "",
    uTokenSupply: "",
    availableBorrow: "",
    availableWithdraw: "",
    availableCollateralize: ""
  };
}
export const QueryMarketSummaryResponse = {
  typeUrl: "/umee.leverage.v1.QueryMarketSummaryResponse",
  encode(message: QueryMarketSummaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.symbolDenom !== "") {
      writer.uint32(10).string(message.symbolDenom);
    }
    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }
    if (message.oraclePrice !== undefined) {
      writer.uint32(26).string(Decimal.fromUserInput(message.oraclePrice, 18).atomics);
    }
    if (message.uTokenExchangeRate !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.uTokenExchangeRate, 18).atomics);
    }
    if (message.supplyAPY !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.supplyAPY, 18).atomics);
    }
    if (message.borrowAPY !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.borrowAPY, 18).atomics);
    }
    if (message.supplied !== "") {
      writer.uint32(58).string(message.supplied);
    }
    if (message.reserved !== "") {
      writer.uint32(66).string(message.reserved);
    }
    if (message.collateral !== "") {
      writer.uint32(74).string(message.collateral);
    }
    if (message.borrowed !== "") {
      writer.uint32(82).string(message.borrowed);
    }
    if (message.liquidity !== "") {
      writer.uint32(90).string(message.liquidity);
    }
    if (message.maximumBorrow !== "") {
      writer.uint32(98).string(message.maximumBorrow);
    }
    if (message.maximumCollateral !== "") {
      writer.uint32(106).string(message.maximumCollateral);
    }
    if (message.minimumLiquidity !== "") {
      writer.uint32(114).string(message.minimumLiquidity);
    }
    if (message.uTokenSupply !== "") {
      writer.uint32(122).string(message.uTokenSupply);
    }
    if (message.availableBorrow !== "") {
      writer.uint32(130).string(message.availableBorrow);
    }
    if (message.availableWithdraw !== "") {
      writer.uint32(138).string(message.availableWithdraw);
    }
    if (message.availableCollateralize !== "") {
      writer.uint32(146).string(message.availableCollateralize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketSummaryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.symbolDenom = reader.string();
          break;
        case 2:
          message.exponent = reader.uint32();
          break;
        case 3:
          message.oraclePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.uTokenExchangeRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.supplyAPY = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.borrowAPY = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.supplied = reader.string();
          break;
        case 8:
          message.reserved = reader.string();
          break;
        case 9:
          message.collateral = reader.string();
          break;
        case 10:
          message.borrowed = reader.string();
          break;
        case 11:
          message.liquidity = reader.string();
          break;
        case 12:
          message.maximumBorrow = reader.string();
          break;
        case 13:
          message.maximumCollateral = reader.string();
          break;
        case 14:
          message.minimumLiquidity = reader.string();
          break;
        case 15:
          message.uTokenSupply = reader.string();
          break;
        case 16:
          message.availableBorrow = reader.string();
          break;
        case 17:
          message.availableWithdraw = reader.string();
          break;
        case 18:
          message.availableCollateralize = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryMarketSummaryResponse>): QueryMarketSummaryResponse {
    const message = createBaseQueryMarketSummaryResponse();
    message.symbolDenom = object.symbolDenom ?? "";
    message.exponent = object.exponent ?? 0;
    message.oraclePrice = object.oraclePrice ?? undefined;
    message.uTokenExchangeRate = object.uTokenExchangeRate ?? "";
    message.supplyAPY = object.supplyAPY ?? "";
    message.borrowAPY = object.borrowAPY ?? "";
    message.supplied = object.supplied ?? "";
    message.reserved = object.reserved ?? "";
    message.collateral = object.collateral ?? "";
    message.borrowed = object.borrowed ?? "";
    message.liquidity = object.liquidity ?? "";
    message.maximumBorrow = object.maximumBorrow ?? "";
    message.maximumCollateral = object.maximumCollateral ?? "";
    message.minimumLiquidity = object.minimumLiquidity ?? "";
    message.uTokenSupply = object.uTokenSupply ?? "";
    message.availableBorrow = object.availableBorrow ?? "";
    message.availableWithdraw = object.availableWithdraw ?? "";
    message.availableCollateralize = object.availableCollateralize ?? "";
    return message;
  },
  fromAmino(object: QueryMarketSummaryResponseAmino): QueryMarketSummaryResponse {
    const message = createBaseQueryMarketSummaryResponse();
    if (object.symbol_denom !== undefined && object.symbol_denom !== null) {
      message.symbolDenom = object.symbol_denom;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    if (object.oracle_price !== undefined && object.oracle_price !== null) {
      message.oraclePrice = object.oracle_price;
    }
    if (object.uToken_exchange_rate !== undefined && object.uToken_exchange_rate !== null) {
      message.uTokenExchangeRate = object.uToken_exchange_rate;
    }
    if (object.supply_APY !== undefined && object.supply_APY !== null) {
      message.supplyAPY = object.supply_APY;
    }
    if (object.borrow_APY !== undefined && object.borrow_APY !== null) {
      message.borrowAPY = object.borrow_APY;
    }
    if (object.supplied !== undefined && object.supplied !== null) {
      message.supplied = object.supplied;
    }
    if (object.reserved !== undefined && object.reserved !== null) {
      message.reserved = object.reserved;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = object.collateral;
    }
    if (object.borrowed !== undefined && object.borrowed !== null) {
      message.borrowed = object.borrowed;
    }
    if (object.liquidity !== undefined && object.liquidity !== null) {
      message.liquidity = object.liquidity;
    }
    if (object.maximum_borrow !== undefined && object.maximum_borrow !== null) {
      message.maximumBorrow = object.maximum_borrow;
    }
    if (object.maximum_collateral !== undefined && object.maximum_collateral !== null) {
      message.maximumCollateral = object.maximum_collateral;
    }
    if (object.minimum_liquidity !== undefined && object.minimum_liquidity !== null) {
      message.minimumLiquidity = object.minimum_liquidity;
    }
    if (object.uToken_supply !== undefined && object.uToken_supply !== null) {
      message.uTokenSupply = object.uToken_supply;
    }
    if (object.available_borrow !== undefined && object.available_borrow !== null) {
      message.availableBorrow = object.available_borrow;
    }
    if (object.available_withdraw !== undefined && object.available_withdraw !== null) {
      message.availableWithdraw = object.available_withdraw;
    }
    if (object.available_collateralize !== undefined && object.available_collateralize !== null) {
      message.availableCollateralize = object.available_collateralize;
    }
    return message;
  },
  toAmino(message: QueryMarketSummaryResponse): QueryMarketSummaryResponseAmino {
    const obj: any = {};
    obj.symbol_denom = message.symbolDenom === "" ? undefined : message.symbolDenom;
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    obj.oracle_price = message.oraclePrice === null ? undefined : message.oraclePrice;
    obj.uToken_exchange_rate = message.uTokenExchangeRate ?? "";
    obj.supply_APY = message.supplyAPY ?? "";
    obj.borrow_APY = message.borrowAPY ?? "";
    obj.supplied = message.supplied === "" ? undefined : message.supplied;
    obj.reserved = message.reserved === "" ? undefined : message.reserved;
    obj.collateral = message.collateral === "" ? undefined : message.collateral;
    obj.borrowed = message.borrowed === "" ? undefined : message.borrowed;
    obj.liquidity = message.liquidity === "" ? undefined : message.liquidity;
    obj.maximum_borrow = message.maximumBorrow === "" ? undefined : message.maximumBorrow;
    obj.maximum_collateral = message.maximumCollateral === "" ? undefined : message.maximumCollateral;
    obj.minimum_liquidity = message.minimumLiquidity === "" ? undefined : message.minimumLiquidity;
    obj.uToken_supply = message.uTokenSupply ?? "";
    obj.available_borrow = message.availableBorrow === "" ? undefined : message.availableBorrow;
    obj.available_withdraw = message.availableWithdraw === "" ? undefined : message.availableWithdraw;
    obj.available_collateralize = message.availableCollateralize === "" ? undefined : message.availableCollateralize;
    return obj;
  },
  fromAminoMsg(object: QueryMarketSummaryResponseAminoMsg): QueryMarketSummaryResponse {
    return QueryMarketSummaryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMarketSummaryResponseProtoMsg): QueryMarketSummaryResponse {
    return QueryMarketSummaryResponse.decode(message.value);
  },
  toProto(message: QueryMarketSummaryResponse): Uint8Array {
    return QueryMarketSummaryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMarketSummaryResponse): QueryMarketSummaryResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryMarketSummaryResponse",
      value: QueryMarketSummaryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountBalances(): QueryAccountBalances {
  return {
    address: ""
  };
}
export const QueryAccountBalances = {
  typeUrl: "/umee.leverage.v1.QueryAccountBalances",
  encode(message: QueryAccountBalances, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountBalances {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountBalances();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountBalances>): QueryAccountBalances {
    const message = createBaseQueryAccountBalances();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAccountBalancesAmino): QueryAccountBalances {
    const message = createBaseQueryAccountBalances();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountBalances): QueryAccountBalancesAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountBalancesAminoMsg): QueryAccountBalances {
    return QueryAccountBalances.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountBalancesProtoMsg): QueryAccountBalances {
    return QueryAccountBalances.decode(message.value);
  },
  toProto(message: QueryAccountBalances): Uint8Array {
    return QueryAccountBalances.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountBalances): QueryAccountBalancesProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryAccountBalances",
      value: QueryAccountBalances.encode(message).finish()
    };
  }
};
function createBaseQueryAccountBalancesResponse(): QueryAccountBalancesResponse {
  return {
    supplied: [],
    collateral: [],
    borrowed: []
  };
}
export const QueryAccountBalancesResponse = {
  typeUrl: "/umee.leverage.v1.QueryAccountBalancesResponse",
  encode(message: QueryAccountBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.supplied) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.borrowed) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountBalancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supplied.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.collateral.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.borrowed.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountBalancesResponse>): QueryAccountBalancesResponse {
    const message = createBaseQueryAccountBalancesResponse();
    message.supplied = object.supplied?.map(e => Coin.fromPartial(e)) || [];
    message.collateral = object.collateral?.map(e => Coin.fromPartial(e)) || [];
    message.borrowed = object.borrowed?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAccountBalancesResponseAmino): QueryAccountBalancesResponse {
    const message = createBaseQueryAccountBalancesResponse();
    message.supplied = object.supplied?.map(e => Coin.fromAmino(e)) || [];
    message.collateral = object.collateral?.map(e => Coin.fromAmino(e)) || [];
    message.borrowed = object.borrowed?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAccountBalancesResponse): QueryAccountBalancesResponseAmino {
    const obj: any = {};
    if (message.supplied) {
      obj.supplied = message.supplied.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.supplied = message.supplied;
    }
    if (message.collateral) {
      obj.collateral = message.collateral.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.collateral = message.collateral;
    }
    if (message.borrowed) {
      obj.borrowed = message.borrowed.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.borrowed = message.borrowed;
    }
    return obj;
  },
  fromAminoMsg(object: QueryAccountBalancesResponseAminoMsg): QueryAccountBalancesResponse {
    return QueryAccountBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountBalancesResponseProtoMsg): QueryAccountBalancesResponse {
    return QueryAccountBalancesResponse.decode(message.value);
  },
  toProto(message: QueryAccountBalancesResponse): Uint8Array {
    return QueryAccountBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountBalancesResponse): QueryAccountBalancesResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryAccountBalancesResponse",
      value: QueryAccountBalancesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountSummary(): QueryAccountSummary {
  return {
    address: ""
  };
}
export const QueryAccountSummary = {
  typeUrl: "/umee.leverage.v1.QueryAccountSummary",
  encode(message: QueryAccountSummary, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountSummary {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountSummary>): QueryAccountSummary {
    const message = createBaseQueryAccountSummary();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAccountSummaryAmino): QueryAccountSummary {
    const message = createBaseQueryAccountSummary();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountSummary): QueryAccountSummaryAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountSummaryAminoMsg): QueryAccountSummary {
    return QueryAccountSummary.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountSummaryProtoMsg): QueryAccountSummary {
    return QueryAccountSummary.decode(message.value);
  },
  toProto(message: QueryAccountSummary): Uint8Array {
    return QueryAccountSummary.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountSummary): QueryAccountSummaryProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryAccountSummary",
      value: QueryAccountSummary.encode(message).finish()
    };
  }
};
function createBaseQueryAccountSummaryResponse(): QueryAccountSummaryResponse {
  return {
    suppliedValue: "",
    collateralValue: "",
    borrowedValue: "",
    borrowLimit: "",
    liquidationThreshold: ""
  };
}
export const QueryAccountSummaryResponse = {
  typeUrl: "/umee.leverage.v1.QueryAccountSummaryResponse",
  encode(message: QueryAccountSummaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.suppliedValue !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.suppliedValue, 18).atomics);
    }
    if (message.collateralValue !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.collateralValue, 18).atomics);
    }
    if (message.borrowedValue !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.borrowedValue, 18).atomics);
    }
    if (message.borrowLimit !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.borrowLimit, 18).atomics);
    }
    if (message.liquidationThreshold !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.liquidationThreshold, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountSummaryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.suppliedValue = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.collateralValue = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.borrowedValue = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.borrowLimit = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.liquidationThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryAccountSummaryResponse>): QueryAccountSummaryResponse {
    const message = createBaseQueryAccountSummaryResponse();
    message.suppliedValue = object.suppliedValue ?? "";
    message.collateralValue = object.collateralValue ?? "";
    message.borrowedValue = object.borrowedValue ?? "";
    message.borrowLimit = object.borrowLimit ?? "";
    message.liquidationThreshold = object.liquidationThreshold ?? "";
    return message;
  },
  fromAmino(object: QueryAccountSummaryResponseAmino): QueryAccountSummaryResponse {
    const message = createBaseQueryAccountSummaryResponse();
    if (object.supplied_value !== undefined && object.supplied_value !== null) {
      message.suppliedValue = object.supplied_value;
    }
    if (object.collateral_value !== undefined && object.collateral_value !== null) {
      message.collateralValue = object.collateral_value;
    }
    if (object.borrowed_value !== undefined && object.borrowed_value !== null) {
      message.borrowedValue = object.borrowed_value;
    }
    if (object.borrow_limit !== undefined && object.borrow_limit !== null) {
      message.borrowLimit = object.borrow_limit;
    }
    if (object.liquidation_threshold !== undefined && object.liquidation_threshold !== null) {
      message.liquidationThreshold = object.liquidation_threshold;
    }
    return message;
  },
  toAmino(message: QueryAccountSummaryResponse): QueryAccountSummaryResponseAmino {
    const obj: any = {};
    obj.supplied_value = message.suppliedValue === "" ? undefined : message.suppliedValue;
    obj.collateral_value = message.collateralValue === "" ? undefined : message.collateralValue;
    obj.borrowed_value = message.borrowedValue === "" ? undefined : message.borrowedValue;
    obj.borrow_limit = message.borrowLimit === "" ? undefined : message.borrowLimit;
    obj.liquidation_threshold = message.liquidationThreshold === "" ? undefined : message.liquidationThreshold;
    return obj;
  },
  fromAminoMsg(object: QueryAccountSummaryResponseAminoMsg): QueryAccountSummaryResponse {
    return QueryAccountSummaryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountSummaryResponseProtoMsg): QueryAccountSummaryResponse {
    return QueryAccountSummaryResponse.decode(message.value);
  },
  toProto(message: QueryAccountSummaryResponse): Uint8Array {
    return QueryAccountSummaryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountSummaryResponse): QueryAccountSummaryResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryAccountSummaryResponse",
      value: QueryAccountSummaryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidationTargets(): QueryLiquidationTargets {
  return {};
}
export const QueryLiquidationTargets = {
  typeUrl: "/umee.leverage.v1.QueryLiquidationTargets",
  encode(_: QueryLiquidationTargets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidationTargets {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidationTargets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryLiquidationTargets>): QueryLiquidationTargets {
    const message = createBaseQueryLiquidationTargets();
    return message;
  },
  fromAmino(_: QueryLiquidationTargetsAmino): QueryLiquidationTargets {
    const message = createBaseQueryLiquidationTargets();
    return message;
  },
  toAmino(_: QueryLiquidationTargets): QueryLiquidationTargetsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLiquidationTargetsAminoMsg): QueryLiquidationTargets {
    return QueryLiquidationTargets.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidationTargetsProtoMsg): QueryLiquidationTargets {
    return QueryLiquidationTargets.decode(message.value);
  },
  toProto(message: QueryLiquidationTargets): Uint8Array {
    return QueryLiquidationTargets.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidationTargets): QueryLiquidationTargetsProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryLiquidationTargets",
      value: QueryLiquidationTargets.encode(message).finish()
    };
  }
};
function createBaseQueryLiquidationTargetsResponse(): QueryLiquidationTargetsResponse {
  return {
    targets: []
  };
}
export const QueryLiquidationTargetsResponse = {
  typeUrl: "/umee.leverage.v1.QueryLiquidationTargetsResponse",
  encode(message: QueryLiquidationTargetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.targets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLiquidationTargetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLiquidationTargetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryLiquidationTargetsResponse>): QueryLiquidationTargetsResponse {
    const message = createBaseQueryLiquidationTargetsResponse();
    message.targets = object.targets?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryLiquidationTargetsResponseAmino): QueryLiquidationTargetsResponse {
    const message = createBaseQueryLiquidationTargetsResponse();
    message.targets = object.targets?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryLiquidationTargetsResponse): QueryLiquidationTargetsResponseAmino {
    const obj: any = {};
    if (message.targets) {
      obj.targets = message.targets.map(e => e);
    } else {
      obj.targets = message.targets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryLiquidationTargetsResponseAminoMsg): QueryLiquidationTargetsResponse {
    return QueryLiquidationTargetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLiquidationTargetsResponseProtoMsg): QueryLiquidationTargetsResponse {
    return QueryLiquidationTargetsResponse.decode(message.value);
  },
  toProto(message: QueryLiquidationTargetsResponse): Uint8Array {
    return QueryLiquidationTargetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLiquidationTargetsResponse): QueryLiquidationTargetsResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryLiquidationTargetsResponse",
      value: QueryLiquidationTargetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBadDebts(): QueryBadDebts {
  return {};
}
export const QueryBadDebts = {
  typeUrl: "/umee.leverage.v1.QueryBadDebts",
  encode(_: QueryBadDebts, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBadDebts {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBadDebts();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<QueryBadDebts>): QueryBadDebts {
    const message = createBaseQueryBadDebts();
    return message;
  },
  fromAmino(_: QueryBadDebtsAmino): QueryBadDebts {
    const message = createBaseQueryBadDebts();
    return message;
  },
  toAmino(_: QueryBadDebts): QueryBadDebtsAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBadDebtsAminoMsg): QueryBadDebts {
    return QueryBadDebts.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBadDebtsProtoMsg): QueryBadDebts {
    return QueryBadDebts.decode(message.value);
  },
  toProto(message: QueryBadDebts): Uint8Array {
    return QueryBadDebts.encode(message).finish();
  },
  toProtoMsg(message: QueryBadDebts): QueryBadDebtsProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryBadDebts",
      value: QueryBadDebts.encode(message).finish()
    };
  }
};
function createBaseQueryBadDebtsResponse(): QueryBadDebtsResponse {
  return {
    targets: []
  };
}
export const QueryBadDebtsResponse = {
  typeUrl: "/umee.leverage.v1.QueryBadDebtsResponse",
  encode(message: QueryBadDebtsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.targets) {
      BadDebt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBadDebtsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBadDebtsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targets.push(BadDebt.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryBadDebtsResponse>): QueryBadDebtsResponse {
    const message = createBaseQueryBadDebtsResponse();
    message.targets = object.targets?.map(e => BadDebt.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBadDebtsResponseAmino): QueryBadDebtsResponse {
    const message = createBaseQueryBadDebtsResponse();
    message.targets = object.targets?.map(e => BadDebt.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBadDebtsResponse): QueryBadDebtsResponseAmino {
    const obj: any = {};
    if (message.targets) {
      obj.targets = message.targets.map(e => e ? BadDebt.toAmino(e) : undefined);
    } else {
      obj.targets = message.targets;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBadDebtsResponseAminoMsg): QueryBadDebtsResponse {
    return QueryBadDebtsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBadDebtsResponseProtoMsg): QueryBadDebtsResponse {
    return QueryBadDebtsResponse.decode(message.value);
  },
  toProto(message: QueryBadDebtsResponse): Uint8Array {
    return QueryBadDebtsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBadDebtsResponse): QueryBadDebtsResponseProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.QueryBadDebtsResponse",
      value: QueryBadDebtsResponse.encode(message).finish()
    };
  }
};