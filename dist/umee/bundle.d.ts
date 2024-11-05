import * as _362 from "./leverage/v1/events";
import * as _363 from "./leverage/v1/genesis";
import * as _364 from "./leverage/v1/gov";
import * as _365 from "./leverage/v1/leverage";
import * as _366 from "./leverage/v1/query";
import * as _367 from "./leverage/v1/tx";
import * as _368 from "./oracle/v1/events";
import * as _369 from "./oracle/v1/genesis";
import * as _370 from "./oracle/v1/oracle";
import * as _371 from "./oracle/v1/query";
import * as _372 from "./oracle/v1/tx";
import * as _595 from "./leverage/v1/query.rpc.Query";
import * as _596 from "./oracle/v1/query.rpc.Query";
import * as _597 from "./leverage/v1/tx.rpc.msg";
import * as _598 from "./oracle/v1/tx.rpc.msg";
export declare namespace umee {
    namespace leverage {
        const v1: {
            MsgClientImpl: typeof _597.MsgClientImpl;
            QueryClientImpl: typeof _595.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _366.QueryParams): Promise<_366.QueryParamsResponse>;
                registeredTokens(request?: _366.QueryRegisteredTokens): Promise<_366.QueryRegisteredTokensResponse>;
                marketSummary(request: _366.QueryMarketSummary): Promise<_366.QueryMarketSummaryResponse>;
                accountBalances(request: _366.QueryAccountBalances): Promise<_366.QueryAccountBalancesResponse>;
                accountSummary(request: _366.QueryAccountSummary): Promise<_366.QueryAccountSummaryResponse>;
                liquidationTargets(request?: _366.QueryLiquidationTargets): Promise<_366.QueryLiquidationTargetsResponse>;
                badDebts(request?: _366.QueryBadDebts): Promise<_366.QueryBadDebtsResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    supply(value: _367.MsgSupply): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdraw(value: _367.MsgWithdraw): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    collateralize(value: _367.MsgCollateralize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    decollateralize(value: _367.MsgDecollateralize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    borrow(value: _367.MsgBorrow): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    repay(value: _367.MsgRepay): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    liquidate(value: _367.MsgLiquidate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    supply(value: _367.MsgSupply): {
                        typeUrl: string;
                        value: _367.MsgSupply;
                    };
                    withdraw(value: _367.MsgWithdraw): {
                        typeUrl: string;
                        value: _367.MsgWithdraw;
                    };
                    collateralize(value: _367.MsgCollateralize): {
                        typeUrl: string;
                        value: _367.MsgCollateralize;
                    };
                    decollateralize(value: _367.MsgDecollateralize): {
                        typeUrl: string;
                        value: _367.MsgDecollateralize;
                    };
                    borrow(value: _367.MsgBorrow): {
                        typeUrl: string;
                        value: _367.MsgBorrow;
                    };
                    repay(value: _367.MsgRepay): {
                        typeUrl: string;
                        value: _367.MsgRepay;
                    };
                    liquidate(value: _367.MsgLiquidate): {
                        typeUrl: string;
                        value: _367.MsgLiquidate;
                    };
                };
                fromPartial: {
                    supply(value: _367.MsgSupply): {
                        typeUrl: string;
                        value: _367.MsgSupply;
                    };
                    withdraw(value: _367.MsgWithdraw): {
                        typeUrl: string;
                        value: _367.MsgWithdraw;
                    };
                    collateralize(value: _367.MsgCollateralize): {
                        typeUrl: string;
                        value: _367.MsgCollateralize;
                    };
                    decollateralize(value: _367.MsgDecollateralize): {
                        typeUrl: string;
                        value: _367.MsgDecollateralize;
                    };
                    borrow(value: _367.MsgBorrow): {
                        typeUrl: string;
                        value: _367.MsgBorrow;
                    };
                    repay(value: _367.MsgRepay): {
                        typeUrl: string;
                        value: _367.MsgRepay;
                    };
                    liquidate(value: _367.MsgLiquidate): {
                        typeUrl: string;
                        value: _367.MsgLiquidate;
                    };
                };
            };
            AminoConverter: {
                "/umee.leverage.v1.MsgSupply": {
                    aminoType: string;
                    toAmino: (message: _367.MsgSupply) => _367.MsgSupplyAmino;
                    fromAmino: (object: _367.MsgSupplyAmino) => _367.MsgSupply;
                };
                "/umee.leverage.v1.MsgWithdraw": {
                    aminoType: string;
                    toAmino: (message: _367.MsgWithdraw) => _367.MsgWithdrawAmino;
                    fromAmino: (object: _367.MsgWithdrawAmino) => _367.MsgWithdraw;
                };
                "/umee.leverage.v1.MsgCollateralize": {
                    aminoType: string;
                    toAmino: (message: _367.MsgCollateralize) => _367.MsgCollateralizeAmino;
                    fromAmino: (object: _367.MsgCollateralizeAmino) => _367.MsgCollateralize;
                };
                "/umee.leverage.v1.MsgDecollateralize": {
                    aminoType: string;
                    toAmino: (message: _367.MsgDecollateralize) => _367.MsgDecollateralizeAmino;
                    fromAmino: (object: _367.MsgDecollateralizeAmino) => _367.MsgDecollateralize;
                };
                "/umee.leverage.v1.MsgBorrow": {
                    aminoType: string;
                    toAmino: (message: _367.MsgBorrow) => _367.MsgBorrowAmino;
                    fromAmino: (object: _367.MsgBorrowAmino) => _367.MsgBorrow;
                };
                "/umee.leverage.v1.MsgRepay": {
                    aminoType: string;
                    toAmino: (message: _367.MsgRepay) => _367.MsgRepayAmino;
                    fromAmino: (object: _367.MsgRepayAmino) => _367.MsgRepay;
                };
                "/umee.leverage.v1.MsgLiquidate": {
                    aminoType: string;
                    toAmino: (message: _367.MsgLiquidate) => _367.MsgLiquidateAmino;
                    fromAmino: (object: _367.MsgLiquidateAmino) => _367.MsgLiquidate;
                };
            };
            MsgSupply: {
                typeUrl: string;
                encode(message: _367.MsgSupply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgSupply;
                fromPartial(object: Partial<_367.MsgSupply>): _367.MsgSupply;
                fromAmino(object: _367.MsgSupplyAmino): _367.MsgSupply;
                toAmino(message: _367.MsgSupply): _367.MsgSupplyAmino;
                fromAminoMsg(object: _367.MsgSupplyAminoMsg): _367.MsgSupply;
                fromProtoMsg(message: _367.MsgSupplyProtoMsg): _367.MsgSupply;
                toProto(message: _367.MsgSupply): Uint8Array;
                toProtoMsg(message: _367.MsgSupply): _367.MsgSupplyProtoMsg;
            };
            MsgWithdraw: {
                typeUrl: string;
                encode(message: _367.MsgWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgWithdraw;
                fromPartial(object: Partial<_367.MsgWithdraw>): _367.MsgWithdraw;
                fromAmino(object: _367.MsgWithdrawAmino): _367.MsgWithdraw;
                toAmino(message: _367.MsgWithdraw): _367.MsgWithdrawAmino;
                fromAminoMsg(object: _367.MsgWithdrawAminoMsg): _367.MsgWithdraw;
                fromProtoMsg(message: _367.MsgWithdrawProtoMsg): _367.MsgWithdraw;
                toProto(message: _367.MsgWithdraw): Uint8Array;
                toProtoMsg(message: _367.MsgWithdraw): _367.MsgWithdrawProtoMsg;
            };
            MsgCollateralize: {
                typeUrl: string;
                encode(message: _367.MsgCollateralize, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgCollateralize;
                fromPartial(object: Partial<_367.MsgCollateralize>): _367.MsgCollateralize;
                fromAmino(object: _367.MsgCollateralizeAmino): _367.MsgCollateralize;
                toAmino(message: _367.MsgCollateralize): _367.MsgCollateralizeAmino;
                fromAminoMsg(object: _367.MsgCollateralizeAminoMsg): _367.MsgCollateralize;
                fromProtoMsg(message: _367.MsgCollateralizeProtoMsg): _367.MsgCollateralize;
                toProto(message: _367.MsgCollateralize): Uint8Array;
                toProtoMsg(message: _367.MsgCollateralize): _367.MsgCollateralizeProtoMsg;
            };
            MsgDecollateralize: {
                typeUrl: string;
                encode(message: _367.MsgDecollateralize, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgDecollateralize;
                fromPartial(object: Partial<_367.MsgDecollateralize>): _367.MsgDecollateralize;
                fromAmino(object: _367.MsgDecollateralizeAmino): _367.MsgDecollateralize;
                toAmino(message: _367.MsgDecollateralize): _367.MsgDecollateralizeAmino;
                fromAminoMsg(object: _367.MsgDecollateralizeAminoMsg): _367.MsgDecollateralize;
                fromProtoMsg(message: _367.MsgDecollateralizeProtoMsg): _367.MsgDecollateralize;
                toProto(message: _367.MsgDecollateralize): Uint8Array;
                toProtoMsg(message: _367.MsgDecollateralize): _367.MsgDecollateralizeProtoMsg;
            };
            MsgBorrow: {
                typeUrl: string;
                encode(message: _367.MsgBorrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgBorrow;
                fromPartial(object: Partial<_367.MsgBorrow>): _367.MsgBorrow;
                fromAmino(object: _367.MsgBorrowAmino): _367.MsgBorrow;
                toAmino(message: _367.MsgBorrow): _367.MsgBorrowAmino;
                fromAminoMsg(object: _367.MsgBorrowAminoMsg): _367.MsgBorrow;
                fromProtoMsg(message: _367.MsgBorrowProtoMsg): _367.MsgBorrow;
                toProto(message: _367.MsgBorrow): Uint8Array;
                toProtoMsg(message: _367.MsgBorrow): _367.MsgBorrowProtoMsg;
            };
            MsgRepay: {
                typeUrl: string;
                encode(message: _367.MsgRepay, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgRepay;
                fromPartial(object: Partial<_367.MsgRepay>): _367.MsgRepay;
                fromAmino(object: _367.MsgRepayAmino): _367.MsgRepay;
                toAmino(message: _367.MsgRepay): _367.MsgRepayAmino;
                fromAminoMsg(object: _367.MsgRepayAminoMsg): _367.MsgRepay;
                fromProtoMsg(message: _367.MsgRepayProtoMsg): _367.MsgRepay;
                toProto(message: _367.MsgRepay): Uint8Array;
                toProtoMsg(message: _367.MsgRepay): _367.MsgRepayProtoMsg;
            };
            MsgLiquidate: {
                typeUrl: string;
                encode(message: _367.MsgLiquidate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgLiquidate;
                fromPartial(object: Partial<_367.MsgLiquidate>): _367.MsgLiquidate;
                fromAmino(object: _367.MsgLiquidateAmino): _367.MsgLiquidate;
                toAmino(message: _367.MsgLiquidate): _367.MsgLiquidateAmino;
                fromAminoMsg(object: _367.MsgLiquidateAminoMsg): _367.MsgLiquidate;
                fromProtoMsg(message: _367.MsgLiquidateProtoMsg): _367.MsgLiquidate;
                toProto(message: _367.MsgLiquidate): Uint8Array;
                toProtoMsg(message: _367.MsgLiquidate): _367.MsgLiquidateProtoMsg;
            };
            MsgSupplyResponse: {
                typeUrl: string;
                encode(message: _367.MsgSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgSupplyResponse;
                fromPartial(object: Partial<_367.MsgSupplyResponse>): _367.MsgSupplyResponse;
                fromAmino(object: _367.MsgSupplyResponseAmino): _367.MsgSupplyResponse;
                toAmino(message: _367.MsgSupplyResponse): _367.MsgSupplyResponseAmino;
                fromAminoMsg(object: _367.MsgSupplyResponseAminoMsg): _367.MsgSupplyResponse;
                fromProtoMsg(message: _367.MsgSupplyResponseProtoMsg): _367.MsgSupplyResponse;
                toProto(message: _367.MsgSupplyResponse): Uint8Array;
                toProtoMsg(message: _367.MsgSupplyResponse): _367.MsgSupplyResponseProtoMsg;
            };
            MsgWithdrawResponse: {
                typeUrl: string;
                encode(message: _367.MsgWithdrawResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgWithdrawResponse;
                fromPartial(object: Partial<_367.MsgWithdrawResponse>): _367.MsgWithdrawResponse;
                fromAmino(object: _367.MsgWithdrawResponseAmino): _367.MsgWithdrawResponse;
                toAmino(message: _367.MsgWithdrawResponse): _367.MsgWithdrawResponseAmino;
                fromAminoMsg(object: _367.MsgWithdrawResponseAminoMsg): _367.MsgWithdrawResponse;
                fromProtoMsg(message: _367.MsgWithdrawResponseProtoMsg): _367.MsgWithdrawResponse;
                toProto(message: _367.MsgWithdrawResponse): Uint8Array;
                toProtoMsg(message: _367.MsgWithdrawResponse): _367.MsgWithdrawResponseProtoMsg;
            };
            MsgCollateralizeResponse: {
                typeUrl: string;
                encode(_: _367.MsgCollateralizeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgCollateralizeResponse;
                fromPartial(_: Partial<_367.MsgCollateralizeResponse>): _367.MsgCollateralizeResponse;
                fromAmino(_: _367.MsgCollateralizeResponseAmino): _367.MsgCollateralizeResponse;
                toAmino(_: _367.MsgCollateralizeResponse): _367.MsgCollateralizeResponseAmino;
                fromAminoMsg(object: _367.MsgCollateralizeResponseAminoMsg): _367.MsgCollateralizeResponse;
                fromProtoMsg(message: _367.MsgCollateralizeResponseProtoMsg): _367.MsgCollateralizeResponse;
                toProto(message: _367.MsgCollateralizeResponse): Uint8Array;
                toProtoMsg(message: _367.MsgCollateralizeResponse): _367.MsgCollateralizeResponseProtoMsg;
            };
            MsgDecollateralizeResponse: {
                typeUrl: string;
                encode(_: _367.MsgDecollateralizeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgDecollateralizeResponse;
                fromPartial(_: Partial<_367.MsgDecollateralizeResponse>): _367.MsgDecollateralizeResponse;
                fromAmino(_: _367.MsgDecollateralizeResponseAmino): _367.MsgDecollateralizeResponse;
                toAmino(_: _367.MsgDecollateralizeResponse): _367.MsgDecollateralizeResponseAmino;
                fromAminoMsg(object: _367.MsgDecollateralizeResponseAminoMsg): _367.MsgDecollateralizeResponse;
                fromProtoMsg(message: _367.MsgDecollateralizeResponseProtoMsg): _367.MsgDecollateralizeResponse;
                toProto(message: _367.MsgDecollateralizeResponse): Uint8Array;
                toProtoMsg(message: _367.MsgDecollateralizeResponse): _367.MsgDecollateralizeResponseProtoMsg;
            };
            MsgBorrowResponse: {
                typeUrl: string;
                encode(_: _367.MsgBorrowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgBorrowResponse;
                fromPartial(_: Partial<_367.MsgBorrowResponse>): _367.MsgBorrowResponse;
                fromAmino(_: _367.MsgBorrowResponseAmino): _367.MsgBorrowResponse;
                toAmino(_: _367.MsgBorrowResponse): _367.MsgBorrowResponseAmino;
                fromAminoMsg(object: _367.MsgBorrowResponseAminoMsg): _367.MsgBorrowResponse;
                fromProtoMsg(message: _367.MsgBorrowResponseProtoMsg): _367.MsgBorrowResponse;
                toProto(message: _367.MsgBorrowResponse): Uint8Array;
                toProtoMsg(message: _367.MsgBorrowResponse): _367.MsgBorrowResponseProtoMsg;
            };
            MsgRepayResponse: {
                typeUrl: string;
                encode(message: _367.MsgRepayResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgRepayResponse;
                fromPartial(object: Partial<_367.MsgRepayResponse>): _367.MsgRepayResponse;
                fromAmino(object: _367.MsgRepayResponseAmino): _367.MsgRepayResponse;
                toAmino(message: _367.MsgRepayResponse): _367.MsgRepayResponseAmino;
                fromAminoMsg(object: _367.MsgRepayResponseAminoMsg): _367.MsgRepayResponse;
                fromProtoMsg(message: _367.MsgRepayResponseProtoMsg): _367.MsgRepayResponse;
                toProto(message: _367.MsgRepayResponse): Uint8Array;
                toProtoMsg(message: _367.MsgRepayResponse): _367.MsgRepayResponseProtoMsg;
            };
            MsgLiquidateResponse: {
                typeUrl: string;
                encode(message: _367.MsgLiquidateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _367.MsgLiquidateResponse;
                fromPartial(object: Partial<_367.MsgLiquidateResponse>): _367.MsgLiquidateResponse;
                fromAmino(object: _367.MsgLiquidateResponseAmino): _367.MsgLiquidateResponse;
                toAmino(message: _367.MsgLiquidateResponse): _367.MsgLiquidateResponseAmino;
                fromAminoMsg(object: _367.MsgLiquidateResponseAminoMsg): _367.MsgLiquidateResponse;
                fromProtoMsg(message: _367.MsgLiquidateResponseProtoMsg): _367.MsgLiquidateResponse;
                toProto(message: _367.MsgLiquidateResponse): Uint8Array;
                toProtoMsg(message: _367.MsgLiquidateResponse): _367.MsgLiquidateResponseProtoMsg;
            };
            QueryParams: {
                typeUrl: string;
                encode(_: _366.QueryParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryParams;
                fromPartial(_: Partial<_366.QueryParams>): _366.QueryParams;
                fromAmino(_: _366.QueryParamsAmino): _366.QueryParams;
                toAmino(_: _366.QueryParams): _366.QueryParamsAmino;
                fromAminoMsg(object: _366.QueryParamsAminoMsg): _366.QueryParams;
                fromProtoMsg(message: _366.QueryParamsProtoMsg): _366.QueryParams;
                toProto(message: _366.QueryParams): Uint8Array;
                toProtoMsg(message: _366.QueryParams): _366.QueryParamsProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _366.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryParamsResponse;
                fromPartial(object: Partial<_366.QueryParamsResponse>): _366.QueryParamsResponse;
                fromAmino(object: _366.QueryParamsResponseAmino): _366.QueryParamsResponse;
                toAmino(message: _366.QueryParamsResponse): _366.QueryParamsResponseAmino;
                fromAminoMsg(object: _366.QueryParamsResponseAminoMsg): _366.QueryParamsResponse;
                fromProtoMsg(message: _366.QueryParamsResponseProtoMsg): _366.QueryParamsResponse;
                toProto(message: _366.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _366.QueryParamsResponse): _366.QueryParamsResponseProtoMsg;
            };
            QueryRegisteredTokens: {
                typeUrl: string;
                encode(_: _366.QueryRegisteredTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryRegisteredTokens;
                fromPartial(_: Partial<_366.QueryRegisteredTokens>): _366.QueryRegisteredTokens;
                fromAmino(_: _366.QueryRegisteredTokensAmino): _366.QueryRegisteredTokens;
                toAmino(_: _366.QueryRegisteredTokens): _366.QueryRegisteredTokensAmino;
                fromAminoMsg(object: _366.QueryRegisteredTokensAminoMsg): _366.QueryRegisteredTokens;
                fromProtoMsg(message: _366.QueryRegisteredTokensProtoMsg): _366.QueryRegisteredTokens;
                toProto(message: _366.QueryRegisteredTokens): Uint8Array;
                toProtoMsg(message: _366.QueryRegisteredTokens): _366.QueryRegisteredTokensProtoMsg;
            };
            QueryRegisteredTokensResponse: {
                typeUrl: string;
                encode(message: _366.QueryRegisteredTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryRegisteredTokensResponse;
                fromPartial(object: Partial<_366.QueryRegisteredTokensResponse>): _366.QueryRegisteredTokensResponse;
                fromAmino(object: _366.QueryRegisteredTokensResponseAmino): _366.QueryRegisteredTokensResponse;
                toAmino(message: _366.QueryRegisteredTokensResponse): _366.QueryRegisteredTokensResponseAmino;
                fromAminoMsg(object: _366.QueryRegisteredTokensResponseAminoMsg): _366.QueryRegisteredTokensResponse;
                fromProtoMsg(message: _366.QueryRegisteredTokensResponseProtoMsg): _366.QueryRegisteredTokensResponse;
                toProto(message: _366.QueryRegisteredTokensResponse): Uint8Array;
                toProtoMsg(message: _366.QueryRegisteredTokensResponse): _366.QueryRegisteredTokensResponseProtoMsg;
            };
            QueryMarketSummary: {
                typeUrl: string;
                encode(message: _366.QueryMarketSummary, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryMarketSummary;
                fromPartial(object: Partial<_366.QueryMarketSummary>): _366.QueryMarketSummary;
                fromAmino(object: _366.QueryMarketSummaryAmino): _366.QueryMarketSummary;
                toAmino(message: _366.QueryMarketSummary): _366.QueryMarketSummaryAmino;
                fromAminoMsg(object: _366.QueryMarketSummaryAminoMsg): _366.QueryMarketSummary;
                fromProtoMsg(message: _366.QueryMarketSummaryProtoMsg): _366.QueryMarketSummary;
                toProto(message: _366.QueryMarketSummary): Uint8Array;
                toProtoMsg(message: _366.QueryMarketSummary): _366.QueryMarketSummaryProtoMsg;
            };
            QueryMarketSummaryResponse: {
                typeUrl: string;
                encode(message: _366.QueryMarketSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryMarketSummaryResponse;
                fromPartial(object: Partial<_366.QueryMarketSummaryResponse>): _366.QueryMarketSummaryResponse;
                fromAmino(object: _366.QueryMarketSummaryResponseAmino): _366.QueryMarketSummaryResponse;
                toAmino(message: _366.QueryMarketSummaryResponse): _366.QueryMarketSummaryResponseAmino;
                fromAminoMsg(object: _366.QueryMarketSummaryResponseAminoMsg): _366.QueryMarketSummaryResponse;
                fromProtoMsg(message: _366.QueryMarketSummaryResponseProtoMsg): _366.QueryMarketSummaryResponse;
                toProto(message: _366.QueryMarketSummaryResponse): Uint8Array;
                toProtoMsg(message: _366.QueryMarketSummaryResponse): _366.QueryMarketSummaryResponseProtoMsg;
            };
            QueryAccountBalances: {
                typeUrl: string;
                encode(message: _366.QueryAccountBalances, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryAccountBalances;
                fromPartial(object: Partial<_366.QueryAccountBalances>): _366.QueryAccountBalances;
                fromAmino(object: _366.QueryAccountBalancesAmino): _366.QueryAccountBalances;
                toAmino(message: _366.QueryAccountBalances): _366.QueryAccountBalancesAmino;
                fromAminoMsg(object: _366.QueryAccountBalancesAminoMsg): _366.QueryAccountBalances;
                fromProtoMsg(message: _366.QueryAccountBalancesProtoMsg): _366.QueryAccountBalances;
                toProto(message: _366.QueryAccountBalances): Uint8Array;
                toProtoMsg(message: _366.QueryAccountBalances): _366.QueryAccountBalancesProtoMsg;
            };
            QueryAccountBalancesResponse: {
                typeUrl: string;
                encode(message: _366.QueryAccountBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryAccountBalancesResponse;
                fromPartial(object: Partial<_366.QueryAccountBalancesResponse>): _366.QueryAccountBalancesResponse;
                fromAmino(object: _366.QueryAccountBalancesResponseAmino): _366.QueryAccountBalancesResponse;
                toAmino(message: _366.QueryAccountBalancesResponse): _366.QueryAccountBalancesResponseAmino;
                fromAminoMsg(object: _366.QueryAccountBalancesResponseAminoMsg): _366.QueryAccountBalancesResponse;
                fromProtoMsg(message: _366.QueryAccountBalancesResponseProtoMsg): _366.QueryAccountBalancesResponse;
                toProto(message: _366.QueryAccountBalancesResponse): Uint8Array;
                toProtoMsg(message: _366.QueryAccountBalancesResponse): _366.QueryAccountBalancesResponseProtoMsg;
            };
            QueryAccountSummary: {
                typeUrl: string;
                encode(message: _366.QueryAccountSummary, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryAccountSummary;
                fromPartial(object: Partial<_366.QueryAccountSummary>): _366.QueryAccountSummary;
                fromAmino(object: _366.QueryAccountSummaryAmino): _366.QueryAccountSummary;
                toAmino(message: _366.QueryAccountSummary): _366.QueryAccountSummaryAmino;
                fromAminoMsg(object: _366.QueryAccountSummaryAminoMsg): _366.QueryAccountSummary;
                fromProtoMsg(message: _366.QueryAccountSummaryProtoMsg): _366.QueryAccountSummary;
                toProto(message: _366.QueryAccountSummary): Uint8Array;
                toProtoMsg(message: _366.QueryAccountSummary): _366.QueryAccountSummaryProtoMsg;
            };
            QueryAccountSummaryResponse: {
                typeUrl: string;
                encode(message: _366.QueryAccountSummaryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryAccountSummaryResponse;
                fromPartial(object: Partial<_366.QueryAccountSummaryResponse>): _366.QueryAccountSummaryResponse;
                fromAmino(object: _366.QueryAccountSummaryResponseAmino): _366.QueryAccountSummaryResponse;
                toAmino(message: _366.QueryAccountSummaryResponse): _366.QueryAccountSummaryResponseAmino;
                fromAminoMsg(object: _366.QueryAccountSummaryResponseAminoMsg): _366.QueryAccountSummaryResponse;
                fromProtoMsg(message: _366.QueryAccountSummaryResponseProtoMsg): _366.QueryAccountSummaryResponse;
                toProto(message: _366.QueryAccountSummaryResponse): Uint8Array;
                toProtoMsg(message: _366.QueryAccountSummaryResponse): _366.QueryAccountSummaryResponseProtoMsg;
            };
            QueryLiquidationTargets: {
                typeUrl: string;
                encode(_: _366.QueryLiquidationTargets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryLiquidationTargets;
                fromPartial(_: Partial<_366.QueryLiquidationTargets>): _366.QueryLiquidationTargets;
                fromAmino(_: _366.QueryLiquidationTargetsAmino): _366.QueryLiquidationTargets;
                toAmino(_: _366.QueryLiquidationTargets): _366.QueryLiquidationTargetsAmino;
                fromAminoMsg(object: _366.QueryLiquidationTargetsAminoMsg): _366.QueryLiquidationTargets;
                fromProtoMsg(message: _366.QueryLiquidationTargetsProtoMsg): _366.QueryLiquidationTargets;
                toProto(message: _366.QueryLiquidationTargets): Uint8Array;
                toProtoMsg(message: _366.QueryLiquidationTargets): _366.QueryLiquidationTargetsProtoMsg;
            };
            QueryLiquidationTargetsResponse: {
                typeUrl: string;
                encode(message: _366.QueryLiquidationTargetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryLiquidationTargetsResponse;
                fromPartial(object: Partial<_366.QueryLiquidationTargetsResponse>): _366.QueryLiquidationTargetsResponse;
                fromAmino(object: _366.QueryLiquidationTargetsResponseAmino): _366.QueryLiquidationTargetsResponse;
                toAmino(message: _366.QueryLiquidationTargetsResponse): _366.QueryLiquidationTargetsResponseAmino;
                fromAminoMsg(object: _366.QueryLiquidationTargetsResponseAminoMsg): _366.QueryLiquidationTargetsResponse;
                fromProtoMsg(message: _366.QueryLiquidationTargetsResponseProtoMsg): _366.QueryLiquidationTargetsResponse;
                toProto(message: _366.QueryLiquidationTargetsResponse): Uint8Array;
                toProtoMsg(message: _366.QueryLiquidationTargetsResponse): _366.QueryLiquidationTargetsResponseProtoMsg;
            };
            QueryBadDebts: {
                typeUrl: string;
                encode(_: _366.QueryBadDebts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryBadDebts;
                fromPartial(_: Partial<_366.QueryBadDebts>): _366.QueryBadDebts;
                fromAmino(_: _366.QueryBadDebtsAmino): _366.QueryBadDebts;
                toAmino(_: _366.QueryBadDebts): _366.QueryBadDebtsAmino;
                fromAminoMsg(object: _366.QueryBadDebtsAminoMsg): _366.QueryBadDebts;
                fromProtoMsg(message: _366.QueryBadDebtsProtoMsg): _366.QueryBadDebts;
                toProto(message: _366.QueryBadDebts): Uint8Array;
                toProtoMsg(message: _366.QueryBadDebts): _366.QueryBadDebtsProtoMsg;
            };
            QueryBadDebtsResponse: {
                typeUrl: string;
                encode(message: _366.QueryBadDebtsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _366.QueryBadDebtsResponse;
                fromPartial(object: Partial<_366.QueryBadDebtsResponse>): _366.QueryBadDebtsResponse;
                fromAmino(object: _366.QueryBadDebtsResponseAmino): _366.QueryBadDebtsResponse;
                toAmino(message: _366.QueryBadDebtsResponse): _366.QueryBadDebtsResponseAmino;
                fromAminoMsg(object: _366.QueryBadDebtsResponseAminoMsg): _366.QueryBadDebtsResponse;
                fromProtoMsg(message: _366.QueryBadDebtsResponseProtoMsg): _366.QueryBadDebtsResponse;
                toProto(message: _366.QueryBadDebtsResponse): Uint8Array;
                toProtoMsg(message: _366.QueryBadDebtsResponse): _366.QueryBadDebtsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _365.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _365.Params;
                fromPartial(object: Partial<_365.Params>): _365.Params;
                fromAmino(object: _365.ParamsAmino): _365.Params;
                toAmino(message: _365.Params): _365.ParamsAmino;
                fromAminoMsg(object: _365.ParamsAminoMsg): _365.Params;
                fromProtoMsg(message: _365.ParamsProtoMsg): _365.Params;
                toProto(message: _365.Params): Uint8Array;
                toProtoMsg(message: _365.Params): _365.ParamsProtoMsg;
            };
            Token: {
                typeUrl: string;
                encode(message: _365.Token, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _365.Token;
                fromPartial(object: Partial<_365.Token>): _365.Token;
                fromAmino(object: _365.TokenAmino): _365.Token;
                toAmino(message: _365.Token): _365.TokenAmino;
                fromAminoMsg(object: _365.TokenAminoMsg): _365.Token;
                fromProtoMsg(message: _365.TokenProtoMsg): _365.Token;
                toProto(message: _365.Token): Uint8Array;
                toProtoMsg(message: _365.Token): _365.TokenProtoMsg;
            };
            UpdateRegistryProposal: {
                typeUrl: string;
                encode(message: _364.UpdateRegistryProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _364.UpdateRegistryProposal;
                fromPartial(object: Partial<_364.UpdateRegistryProposal>): _364.UpdateRegistryProposal;
                fromAmino(object: _364.UpdateRegistryProposalAmino): _364.UpdateRegistryProposal;
                toAmino(message: _364.UpdateRegistryProposal): _364.UpdateRegistryProposalAmino;
                fromAminoMsg(object: _364.UpdateRegistryProposalAminoMsg): _364.UpdateRegistryProposal;
                fromProtoMsg(message: _364.UpdateRegistryProposalProtoMsg): _364.UpdateRegistryProposal;
                toProto(message: _364.UpdateRegistryProposal): Uint8Array;
                toProtoMsg(message: _364.UpdateRegistryProposal): _364.UpdateRegistryProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _363.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _363.GenesisState;
                fromPartial(object: Partial<_363.GenesisState>): _363.GenesisState;
                fromAmino(object: _363.GenesisStateAmino): _363.GenesisState;
                toAmino(message: _363.GenesisState): _363.GenesisStateAmino;
                fromAminoMsg(object: _363.GenesisStateAminoMsg): _363.GenesisState;
                fromProtoMsg(message: _363.GenesisStateProtoMsg): _363.GenesisState;
                toProto(message: _363.GenesisState): Uint8Array;
                toProtoMsg(message: _363.GenesisState): _363.GenesisStateProtoMsg;
            };
            AdjustedBorrow: {
                typeUrl: string;
                encode(message: _363.AdjustedBorrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _363.AdjustedBorrow;
                fromPartial(object: Partial<_363.AdjustedBorrow>): _363.AdjustedBorrow;
                fromAmino(object: _363.AdjustedBorrowAmino): _363.AdjustedBorrow;
                toAmino(message: _363.AdjustedBorrow): _363.AdjustedBorrowAmino;
                fromAminoMsg(object: _363.AdjustedBorrowAminoMsg): _363.AdjustedBorrow;
                fromProtoMsg(message: _363.AdjustedBorrowProtoMsg): _363.AdjustedBorrow;
                toProto(message: _363.AdjustedBorrow): Uint8Array;
                toProtoMsg(message: _363.AdjustedBorrow): _363.AdjustedBorrowProtoMsg;
            };
            Collateral: {
                typeUrl: string;
                encode(message: _363.Collateral, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _363.Collateral;
                fromPartial(object: Partial<_363.Collateral>): _363.Collateral;
                fromAmino(object: _363.CollateralAmino): _363.Collateral;
                toAmino(message: _363.Collateral): _363.CollateralAmino;
                fromAminoMsg(object: _363.CollateralAminoMsg): _363.Collateral;
                fromProtoMsg(message: _363.CollateralProtoMsg): _363.Collateral;
                toProto(message: _363.Collateral): Uint8Array;
                toProtoMsg(message: _363.Collateral): _363.CollateralProtoMsg;
            };
            BadDebt: {
                typeUrl: string;
                encode(message: _363.BadDebt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _363.BadDebt;
                fromPartial(object: Partial<_363.BadDebt>): _363.BadDebt;
                fromAmino(object: _363.BadDebtAmino): _363.BadDebt;
                toAmino(message: _363.BadDebt): _363.BadDebtAmino;
                fromAminoMsg(object: _363.BadDebtAminoMsg): _363.BadDebt;
                fromProtoMsg(message: _363.BadDebtProtoMsg): _363.BadDebt;
                toProto(message: _363.BadDebt): Uint8Array;
                toProtoMsg(message: _363.BadDebt): _363.BadDebtProtoMsg;
            };
            InterestScalar: {
                typeUrl: string;
                encode(message: _363.InterestScalar, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _363.InterestScalar;
                fromPartial(object: Partial<_363.InterestScalar>): _363.InterestScalar;
                fromAmino(object: _363.InterestScalarAmino): _363.InterestScalar;
                toAmino(message: _363.InterestScalar): _363.InterestScalarAmino;
                fromAminoMsg(object: _363.InterestScalarAminoMsg): _363.InterestScalar;
                fromProtoMsg(message: _363.InterestScalarProtoMsg): _363.InterestScalar;
                toProto(message: _363.InterestScalar): Uint8Array;
                toProtoMsg(message: _363.InterestScalar): _363.InterestScalarProtoMsg;
            };
            EventSupply: {
                typeUrl: string;
                encode(message: _362.EventSupply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _362.EventSupply;
                fromPartial(object: Partial<_362.EventSupply>): _362.EventSupply;
                fromAmino(object: _362.EventSupplyAmino): _362.EventSupply;
                toAmino(message: _362.EventSupply): _362.EventSupplyAmino;
                fromAminoMsg(object: _362.EventSupplyAminoMsg): _362.EventSupply;
                fromProtoMsg(message: _362.EventSupplyProtoMsg): _362.EventSupply;
                toProto(message: _362.EventSupply): Uint8Array;
                toProtoMsg(message: _362.EventSupply): _362.EventSupplyProtoMsg;
            };
            EventWithdraw: {
                typeUrl: string;
                encode(message: _362.EventWithdraw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _362.EventWithdraw;
                fromPartial(object: Partial<_362.EventWithdraw>): _362.EventWithdraw;
                fromAmino(object: _362.EventWithdrawAmino): _362.EventWithdraw;
                toAmino(message: _362.EventWithdraw): _362.EventWithdrawAmino;
                fromAminoMsg(object: _362.EventWithdrawAminoMsg): _362.EventWithdraw;
                fromProtoMsg(message: _362.EventWithdrawProtoMsg): _362.EventWithdraw;
                toProto(message: _362.EventWithdraw): Uint8Array;
                toProtoMsg(message: _362.EventWithdraw): _362.EventWithdrawProtoMsg;
            };
            EventCollaterize: {
                typeUrl: string;
                encode(message: _362.EventCollaterize, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _362.EventCollaterize;
                fromPartial(object: Partial<_362.EventCollaterize>): _362.EventCollaterize;
                fromAmino(object: _362.EventCollaterizeAmino): _362.EventCollaterize;
                toAmino(message: _362.EventCollaterize): _362.EventCollaterizeAmino;
                fromAminoMsg(object: _362.EventCollaterizeAminoMsg): _362.EventCollaterize;
                fromProtoMsg(message: _362.EventCollaterizeProtoMsg): _362.EventCollaterize;
                toProto(message: _362.EventCollaterize): Uint8Array;
                toProtoMsg(message: _362.EventCollaterize): _362.EventCollaterizeProtoMsg;
            };
            EventDecollaterize: {
                typeUrl: string;
                encode(message: _362.EventDecollaterize, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _362.EventDecollaterize;
                fromPartial(object: Partial<_362.EventDecollaterize>): _362.EventDecollaterize;
                fromAmino(object: _362.EventDecollaterizeAmino): _362.EventDecollaterize;
                toAmino(message: _362.EventDecollaterize): _362.EventDecollaterizeAmino;
                fromAminoMsg(object: _362.EventDecollaterizeAminoMsg): _362.EventDecollaterize;
                fromProtoMsg(message: _362.EventDecollaterizeProtoMsg): _362.EventDecollaterize;
                toProto(message: _362.EventDecollaterize): Uint8Array;
                toProtoMsg(message: _362.EventDecollaterize): _362.EventDecollaterizeProtoMsg;
            };
            EventBorrow: {
                typeUrl: string;
                encode(message: _362.EventBorrow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _362.EventBorrow;
                fromPartial(object: Partial<_362.EventBorrow>): _362.EventBorrow;
                fromAmino(object: _362.EventBorrowAmino): _362.EventBorrow;
                toAmino(message: _362.EventBorrow): _362.EventBorrowAmino;
                fromAminoMsg(object: _362.EventBorrowAminoMsg): _362.EventBorrow;
                fromProtoMsg(message: _362.EventBorrowProtoMsg): _362.EventBorrow;
                toProto(message: _362.EventBorrow): Uint8Array;
                toProtoMsg(message: _362.EventBorrow): _362.EventBorrowProtoMsg;
            };
            EventRepay: {
                typeUrl: string;
                encode(message: _362.EventRepay, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _362.EventRepay;
                fromPartial(object: Partial<_362.EventRepay>): _362.EventRepay;
                fromAmino(object: _362.EventRepayAmino): _362.EventRepay;
                toAmino(message: _362.EventRepay): _362.EventRepayAmino;
                fromAminoMsg(object: _362.EventRepayAminoMsg): _362.EventRepay;
                fromProtoMsg(message: _362.EventRepayProtoMsg): _362.EventRepay;
                toProto(message: _362.EventRepay): Uint8Array;
                toProtoMsg(message: _362.EventRepay): _362.EventRepayProtoMsg;
            };
            EventLiquidate: {
                typeUrl: string;
                encode(message: _362.EventLiquidate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _362.EventLiquidate;
                fromPartial(object: Partial<_362.EventLiquidate>): _362.EventLiquidate;
                fromAmino(object: _362.EventLiquidateAmino): _362.EventLiquidate;
                toAmino(message: _362.EventLiquidate): _362.EventLiquidateAmino;
                fromAminoMsg(object: _362.EventLiquidateAminoMsg): _362.EventLiquidate;
                fromProtoMsg(message: _362.EventLiquidateProtoMsg): _362.EventLiquidate;
                toProto(message: _362.EventLiquidate): Uint8Array;
                toProtoMsg(message: _362.EventLiquidate): _362.EventLiquidateProtoMsg;
            };
            EventInterestAccrual: {
                typeUrl: string;
                encode(message: _362.EventInterestAccrual, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _362.EventInterestAccrual;
                fromPartial(object: Partial<_362.EventInterestAccrual>): _362.EventInterestAccrual;
                fromAmino(object: _362.EventInterestAccrualAmino): _362.EventInterestAccrual;
                toAmino(message: _362.EventInterestAccrual): _362.EventInterestAccrualAmino;
                fromAminoMsg(object: _362.EventInterestAccrualAminoMsg): _362.EventInterestAccrual;
                fromProtoMsg(message: _362.EventInterestAccrualProtoMsg): _362.EventInterestAccrual;
                toProto(message: _362.EventInterestAccrual): Uint8Array;
                toProtoMsg(message: _362.EventInterestAccrual): _362.EventInterestAccrualProtoMsg;
            };
            EventRepayBadDebt: {
                typeUrl: string;
                encode(message: _362.EventRepayBadDebt, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _362.EventRepayBadDebt;
                fromPartial(object: Partial<_362.EventRepayBadDebt>): _362.EventRepayBadDebt;
                fromAmino(object: _362.EventRepayBadDebtAmino): _362.EventRepayBadDebt;
                toAmino(message: _362.EventRepayBadDebt): _362.EventRepayBadDebtAmino;
                fromAminoMsg(object: _362.EventRepayBadDebtAminoMsg): _362.EventRepayBadDebt;
                fromProtoMsg(message: _362.EventRepayBadDebtProtoMsg): _362.EventRepayBadDebt;
                toProto(message: _362.EventRepayBadDebt): Uint8Array;
                toProtoMsg(message: _362.EventRepayBadDebt): _362.EventRepayBadDebtProtoMsg;
            };
            EventReservesExhausted: {
                typeUrl: string;
                encode(message: _362.EventReservesExhausted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _362.EventReservesExhausted;
                fromPartial(object: Partial<_362.EventReservesExhausted>): _362.EventReservesExhausted;
                fromAmino(object: _362.EventReservesExhaustedAmino): _362.EventReservesExhausted;
                toAmino(message: _362.EventReservesExhausted): _362.EventReservesExhaustedAmino;
                fromAminoMsg(object: _362.EventReservesExhaustedAminoMsg): _362.EventReservesExhausted;
                fromProtoMsg(message: _362.EventReservesExhaustedProtoMsg): _362.EventReservesExhausted;
                toProto(message: _362.EventReservesExhausted): Uint8Array;
                toProtoMsg(message: _362.EventReservesExhausted): _362.EventReservesExhaustedProtoMsg;
            };
            EventFundOracle: {
                typeUrl: string;
                encode(message: _362.EventFundOracle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _362.EventFundOracle;
                fromPartial(object: Partial<_362.EventFundOracle>): _362.EventFundOracle;
                fromAmino(object: _362.EventFundOracleAmino): _362.EventFundOracle;
                toAmino(message: _362.EventFundOracle): _362.EventFundOracleAmino;
                fromAminoMsg(object: _362.EventFundOracleAminoMsg): _362.EventFundOracle;
                fromProtoMsg(message: _362.EventFundOracleProtoMsg): _362.EventFundOracle;
                toProto(message: _362.EventFundOracle): Uint8Array;
                toProtoMsg(message: _362.EventFundOracle): _362.EventFundOracleProtoMsg;
            };
        };
    }
    namespace oracle {
        const v1: {
            MsgClientImpl: typeof _598.MsgClientImpl;
            QueryClientImpl: typeof _596.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                exchangeRates(request: _371.QueryExchangeRates): Promise<_371.QueryExchangeRatesResponse>;
                activeExchangeRates(request?: _371.QueryActiveExchangeRates): Promise<_371.QueryActiveExchangeRatesResponse>;
                feederDelegation(request: _371.QueryFeederDelegation): Promise<_371.QueryFeederDelegationResponse>;
                missCounter(request: _371.QueryMissCounter): Promise<_371.QueryMissCounterResponse>;
                slashWindow(request?: _371.QuerySlashWindow): Promise<_371.QuerySlashWindowResponse>;
                aggregatePrevote(request: _371.QueryAggregatePrevote): Promise<_371.QueryAggregatePrevoteResponse>;
                aggregatePrevotes(request?: _371.QueryAggregatePrevotes): Promise<_371.QueryAggregatePrevotesResponse>;
                aggregateVote(request: _371.QueryAggregateVote): Promise<_371.QueryAggregateVoteResponse>;
                aggregateVotes(request?: _371.QueryAggregateVotes): Promise<_371.QueryAggregateVotesResponse>;
                params(request?: _371.QueryParams): Promise<_371.QueryParamsResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRatePrevote(value: _372.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    aggregateExchangeRateVote(value: _372.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _372.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRatePrevote(value: _372.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: _372.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: _372.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _372.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _372.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _372.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRatePrevote(value: _372.MsgAggregateExchangeRatePrevote): {
                        typeUrl: string;
                        value: _372.MsgAggregateExchangeRatePrevote;
                    };
                    aggregateExchangeRateVote(value: _372.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _372.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _372.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _372.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/umee.oracle.v1.MsgAggregateExchangeRatePrevote": {
                    aminoType: string;
                    toAmino: (message: _372.MsgAggregateExchangeRatePrevote) => _372.MsgAggregateExchangeRatePrevoteAmino;
                    fromAmino: (object: _372.MsgAggregateExchangeRatePrevoteAmino) => _372.MsgAggregateExchangeRatePrevote;
                };
                "/umee.oracle.v1.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: (message: _372.MsgAggregateExchangeRateVote) => _372.MsgAggregateExchangeRateVoteAmino;
                    fromAmino: (object: _372.MsgAggregateExchangeRateVoteAmino) => _372.MsgAggregateExchangeRateVote;
                };
                "/umee.oracle.v1.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: (message: _372.MsgDelegateFeedConsent) => _372.MsgDelegateFeedConsentAmino;
                    fromAmino: (object: _372.MsgDelegateFeedConsentAmino) => _372.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRatePrevote: {
                typeUrl: string;
                encode(message: _372.MsgAggregateExchangeRatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _372.MsgAggregateExchangeRatePrevote;
                fromPartial(object: Partial<_372.MsgAggregateExchangeRatePrevote>): _372.MsgAggregateExchangeRatePrevote;
                fromAmino(object: _372.MsgAggregateExchangeRatePrevoteAmino): _372.MsgAggregateExchangeRatePrevote;
                toAmino(message: _372.MsgAggregateExchangeRatePrevote): _372.MsgAggregateExchangeRatePrevoteAmino;
                fromAminoMsg(object: _372.MsgAggregateExchangeRatePrevoteAminoMsg): _372.MsgAggregateExchangeRatePrevote;
                fromProtoMsg(message: _372.MsgAggregateExchangeRatePrevoteProtoMsg): _372.MsgAggregateExchangeRatePrevote;
                toProto(message: _372.MsgAggregateExchangeRatePrevote): Uint8Array;
                toProtoMsg(message: _372.MsgAggregateExchangeRatePrevote): _372.MsgAggregateExchangeRatePrevoteProtoMsg;
            };
            MsgAggregateExchangeRatePrevoteResponse: {
                typeUrl: string;
                encode(_: _372.MsgAggregateExchangeRatePrevoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _372.MsgAggregateExchangeRatePrevoteResponse;
                fromPartial(_: Partial<_372.MsgAggregateExchangeRatePrevoteResponse>): _372.MsgAggregateExchangeRatePrevoteResponse;
                fromAmino(_: _372.MsgAggregateExchangeRatePrevoteResponseAmino): _372.MsgAggregateExchangeRatePrevoteResponse;
                toAmino(_: _372.MsgAggregateExchangeRatePrevoteResponse): _372.MsgAggregateExchangeRatePrevoteResponseAmino;
                fromAminoMsg(object: _372.MsgAggregateExchangeRatePrevoteResponseAminoMsg): _372.MsgAggregateExchangeRatePrevoteResponse;
                fromProtoMsg(message: _372.MsgAggregateExchangeRatePrevoteResponseProtoMsg): _372.MsgAggregateExchangeRatePrevoteResponse;
                toProto(message: _372.MsgAggregateExchangeRatePrevoteResponse): Uint8Array;
                toProtoMsg(message: _372.MsgAggregateExchangeRatePrevoteResponse): _372.MsgAggregateExchangeRatePrevoteResponseProtoMsg;
            };
            MsgAggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _372.MsgAggregateExchangeRateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _372.MsgAggregateExchangeRateVote;
                fromPartial(object: Partial<_372.MsgAggregateExchangeRateVote>): _372.MsgAggregateExchangeRateVote;
                fromAmino(object: _372.MsgAggregateExchangeRateVoteAmino): _372.MsgAggregateExchangeRateVote;
                toAmino(message: _372.MsgAggregateExchangeRateVote): _372.MsgAggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _372.MsgAggregateExchangeRateVoteAminoMsg): _372.MsgAggregateExchangeRateVote;
                fromProtoMsg(message: _372.MsgAggregateExchangeRateVoteProtoMsg): _372.MsgAggregateExchangeRateVote;
                toProto(message: _372.MsgAggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _372.MsgAggregateExchangeRateVote): _372.MsgAggregateExchangeRateVoteProtoMsg;
            };
            MsgAggregateExchangeRateVoteResponse: {
                typeUrl: string;
                encode(_: _372.MsgAggregateExchangeRateVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _372.MsgAggregateExchangeRateVoteResponse;
                fromPartial(_: Partial<_372.MsgAggregateExchangeRateVoteResponse>): _372.MsgAggregateExchangeRateVoteResponse;
                fromAmino(_: _372.MsgAggregateExchangeRateVoteResponseAmino): _372.MsgAggregateExchangeRateVoteResponse;
                toAmino(_: _372.MsgAggregateExchangeRateVoteResponse): _372.MsgAggregateExchangeRateVoteResponseAmino;
                fromAminoMsg(object: _372.MsgAggregateExchangeRateVoteResponseAminoMsg): _372.MsgAggregateExchangeRateVoteResponse;
                fromProtoMsg(message: _372.MsgAggregateExchangeRateVoteResponseProtoMsg): _372.MsgAggregateExchangeRateVoteResponse;
                toProto(message: _372.MsgAggregateExchangeRateVoteResponse): Uint8Array;
                toProtoMsg(message: _372.MsgAggregateExchangeRateVoteResponse): _372.MsgAggregateExchangeRateVoteResponseProtoMsg;
            };
            MsgDelegateFeedConsent: {
                typeUrl: string;
                encode(message: _372.MsgDelegateFeedConsent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _372.MsgDelegateFeedConsent;
                fromPartial(object: Partial<_372.MsgDelegateFeedConsent>): _372.MsgDelegateFeedConsent;
                fromAmino(object: _372.MsgDelegateFeedConsentAmino): _372.MsgDelegateFeedConsent;
                toAmino(message: _372.MsgDelegateFeedConsent): _372.MsgDelegateFeedConsentAmino;
                fromAminoMsg(object: _372.MsgDelegateFeedConsentAminoMsg): _372.MsgDelegateFeedConsent;
                fromProtoMsg(message: _372.MsgDelegateFeedConsentProtoMsg): _372.MsgDelegateFeedConsent;
                toProto(message: _372.MsgDelegateFeedConsent): Uint8Array;
                toProtoMsg(message: _372.MsgDelegateFeedConsent): _372.MsgDelegateFeedConsentProtoMsg;
            };
            MsgDelegateFeedConsentResponse: {
                typeUrl: string;
                encode(_: _372.MsgDelegateFeedConsentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _372.MsgDelegateFeedConsentResponse;
                fromPartial(_: Partial<_372.MsgDelegateFeedConsentResponse>): _372.MsgDelegateFeedConsentResponse;
                fromAmino(_: _372.MsgDelegateFeedConsentResponseAmino): _372.MsgDelegateFeedConsentResponse;
                toAmino(_: _372.MsgDelegateFeedConsentResponse): _372.MsgDelegateFeedConsentResponseAmino;
                fromAminoMsg(object: _372.MsgDelegateFeedConsentResponseAminoMsg): _372.MsgDelegateFeedConsentResponse;
                fromProtoMsg(message: _372.MsgDelegateFeedConsentResponseProtoMsg): _372.MsgDelegateFeedConsentResponse;
                toProto(message: _372.MsgDelegateFeedConsentResponse): Uint8Array;
                toProtoMsg(message: _372.MsgDelegateFeedConsentResponse): _372.MsgDelegateFeedConsentResponseProtoMsg;
            };
            QueryExchangeRates: {
                typeUrl: string;
                encode(message: _371.QueryExchangeRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryExchangeRates;
                fromPartial(object: Partial<_371.QueryExchangeRates>): _371.QueryExchangeRates;
                fromAmino(object: _371.QueryExchangeRatesAmino): _371.QueryExchangeRates;
                toAmino(message: _371.QueryExchangeRates): _371.QueryExchangeRatesAmino;
                fromAminoMsg(object: _371.QueryExchangeRatesAminoMsg): _371.QueryExchangeRates;
                fromProtoMsg(message: _371.QueryExchangeRatesProtoMsg): _371.QueryExchangeRates;
                toProto(message: _371.QueryExchangeRates): Uint8Array;
                toProtoMsg(message: _371.QueryExchangeRates): _371.QueryExchangeRatesProtoMsg;
            };
            QueryExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _371.QueryExchangeRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryExchangeRatesResponse;
                fromPartial(object: Partial<_371.QueryExchangeRatesResponse>): _371.QueryExchangeRatesResponse;
                fromAmino(object: _371.QueryExchangeRatesResponseAmino): _371.QueryExchangeRatesResponse;
                toAmino(message: _371.QueryExchangeRatesResponse): _371.QueryExchangeRatesResponseAmino;
                fromAminoMsg(object: _371.QueryExchangeRatesResponseAminoMsg): _371.QueryExchangeRatesResponse;
                fromProtoMsg(message: _371.QueryExchangeRatesResponseProtoMsg): _371.QueryExchangeRatesResponse;
                toProto(message: _371.QueryExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _371.QueryExchangeRatesResponse): _371.QueryExchangeRatesResponseProtoMsg;
            };
            QueryActiveExchangeRates: {
                typeUrl: string;
                encode(_: _371.QueryActiveExchangeRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryActiveExchangeRates;
                fromPartial(_: Partial<_371.QueryActiveExchangeRates>): _371.QueryActiveExchangeRates;
                fromAmino(_: _371.QueryActiveExchangeRatesAmino): _371.QueryActiveExchangeRates;
                toAmino(_: _371.QueryActiveExchangeRates): _371.QueryActiveExchangeRatesAmino;
                fromAminoMsg(object: _371.QueryActiveExchangeRatesAminoMsg): _371.QueryActiveExchangeRates;
                fromProtoMsg(message: _371.QueryActiveExchangeRatesProtoMsg): _371.QueryActiveExchangeRates;
                toProto(message: _371.QueryActiveExchangeRates): Uint8Array;
                toProtoMsg(message: _371.QueryActiveExchangeRates): _371.QueryActiveExchangeRatesProtoMsg;
            };
            QueryActiveExchangeRatesResponse: {
                typeUrl: string;
                encode(message: _371.QueryActiveExchangeRatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryActiveExchangeRatesResponse;
                fromPartial(object: Partial<_371.QueryActiveExchangeRatesResponse>): _371.QueryActiveExchangeRatesResponse;
                fromAmino(object: _371.QueryActiveExchangeRatesResponseAmino): _371.QueryActiveExchangeRatesResponse;
                toAmino(message: _371.QueryActiveExchangeRatesResponse): _371.QueryActiveExchangeRatesResponseAmino;
                fromAminoMsg(object: _371.QueryActiveExchangeRatesResponseAminoMsg): _371.QueryActiveExchangeRatesResponse;
                fromProtoMsg(message: _371.QueryActiveExchangeRatesResponseProtoMsg): _371.QueryActiveExchangeRatesResponse;
                toProto(message: _371.QueryActiveExchangeRatesResponse): Uint8Array;
                toProtoMsg(message: _371.QueryActiveExchangeRatesResponse): _371.QueryActiveExchangeRatesResponseProtoMsg;
            };
            QueryFeederDelegation: {
                typeUrl: string;
                encode(message: _371.QueryFeederDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryFeederDelegation;
                fromPartial(object: Partial<_371.QueryFeederDelegation>): _371.QueryFeederDelegation;
                fromAmino(object: _371.QueryFeederDelegationAmino): _371.QueryFeederDelegation;
                toAmino(message: _371.QueryFeederDelegation): _371.QueryFeederDelegationAmino;
                fromAminoMsg(object: _371.QueryFeederDelegationAminoMsg): _371.QueryFeederDelegation;
                fromProtoMsg(message: _371.QueryFeederDelegationProtoMsg): _371.QueryFeederDelegation;
                toProto(message: _371.QueryFeederDelegation): Uint8Array;
                toProtoMsg(message: _371.QueryFeederDelegation): _371.QueryFeederDelegationProtoMsg;
            };
            QueryFeederDelegationResponse: {
                typeUrl: string;
                encode(message: _371.QueryFeederDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryFeederDelegationResponse;
                fromPartial(object: Partial<_371.QueryFeederDelegationResponse>): _371.QueryFeederDelegationResponse;
                fromAmino(object: _371.QueryFeederDelegationResponseAmino): _371.QueryFeederDelegationResponse;
                toAmino(message: _371.QueryFeederDelegationResponse): _371.QueryFeederDelegationResponseAmino;
                fromAminoMsg(object: _371.QueryFeederDelegationResponseAminoMsg): _371.QueryFeederDelegationResponse;
                fromProtoMsg(message: _371.QueryFeederDelegationResponseProtoMsg): _371.QueryFeederDelegationResponse;
                toProto(message: _371.QueryFeederDelegationResponse): Uint8Array;
                toProtoMsg(message: _371.QueryFeederDelegationResponse): _371.QueryFeederDelegationResponseProtoMsg;
            };
            QueryMissCounter: {
                typeUrl: string;
                encode(message: _371.QueryMissCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryMissCounter;
                fromPartial(object: Partial<_371.QueryMissCounter>): _371.QueryMissCounter;
                fromAmino(object: _371.QueryMissCounterAmino): _371.QueryMissCounter;
                toAmino(message: _371.QueryMissCounter): _371.QueryMissCounterAmino;
                fromAminoMsg(object: _371.QueryMissCounterAminoMsg): _371.QueryMissCounter;
                fromProtoMsg(message: _371.QueryMissCounterProtoMsg): _371.QueryMissCounter;
                toProto(message: _371.QueryMissCounter): Uint8Array;
                toProtoMsg(message: _371.QueryMissCounter): _371.QueryMissCounterProtoMsg;
            };
            QueryMissCounterResponse: {
                typeUrl: string;
                encode(message: _371.QueryMissCounterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryMissCounterResponse;
                fromPartial(object: Partial<_371.QueryMissCounterResponse>): _371.QueryMissCounterResponse;
                fromAmino(object: _371.QueryMissCounterResponseAmino): _371.QueryMissCounterResponse;
                toAmino(message: _371.QueryMissCounterResponse): _371.QueryMissCounterResponseAmino;
                fromAminoMsg(object: _371.QueryMissCounterResponseAminoMsg): _371.QueryMissCounterResponse;
                fromProtoMsg(message: _371.QueryMissCounterResponseProtoMsg): _371.QueryMissCounterResponse;
                toProto(message: _371.QueryMissCounterResponse): Uint8Array;
                toProtoMsg(message: _371.QueryMissCounterResponse): _371.QueryMissCounterResponseProtoMsg;
            };
            QuerySlashWindow: {
                typeUrl: string;
                encode(_: _371.QuerySlashWindow, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QuerySlashWindow;
                fromPartial(_: Partial<_371.QuerySlashWindow>): _371.QuerySlashWindow;
                fromAmino(_: _371.QuerySlashWindowAmino): _371.QuerySlashWindow;
                toAmino(_: _371.QuerySlashWindow): _371.QuerySlashWindowAmino;
                fromAminoMsg(object: _371.QuerySlashWindowAminoMsg): _371.QuerySlashWindow;
                fromProtoMsg(message: _371.QuerySlashWindowProtoMsg): _371.QuerySlashWindow;
                toProto(message: _371.QuerySlashWindow): Uint8Array;
                toProtoMsg(message: _371.QuerySlashWindow): _371.QuerySlashWindowProtoMsg;
            };
            QuerySlashWindowResponse: {
                typeUrl: string;
                encode(message: _371.QuerySlashWindowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QuerySlashWindowResponse;
                fromPartial(object: Partial<_371.QuerySlashWindowResponse>): _371.QuerySlashWindowResponse;
                fromAmino(object: _371.QuerySlashWindowResponseAmino): _371.QuerySlashWindowResponse;
                toAmino(message: _371.QuerySlashWindowResponse): _371.QuerySlashWindowResponseAmino;
                fromAminoMsg(object: _371.QuerySlashWindowResponseAminoMsg): _371.QuerySlashWindowResponse;
                fromProtoMsg(message: _371.QuerySlashWindowResponseProtoMsg): _371.QuerySlashWindowResponse;
                toProto(message: _371.QuerySlashWindowResponse): Uint8Array;
                toProtoMsg(message: _371.QuerySlashWindowResponse): _371.QuerySlashWindowResponseProtoMsg;
            };
            QueryAggregatePrevote: {
                typeUrl: string;
                encode(message: _371.QueryAggregatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryAggregatePrevote;
                fromPartial(object: Partial<_371.QueryAggregatePrevote>): _371.QueryAggregatePrevote;
                fromAmino(object: _371.QueryAggregatePrevoteAmino): _371.QueryAggregatePrevote;
                toAmino(message: _371.QueryAggregatePrevote): _371.QueryAggregatePrevoteAmino;
                fromAminoMsg(object: _371.QueryAggregatePrevoteAminoMsg): _371.QueryAggregatePrevote;
                fromProtoMsg(message: _371.QueryAggregatePrevoteProtoMsg): _371.QueryAggregatePrevote;
                toProto(message: _371.QueryAggregatePrevote): Uint8Array;
                toProtoMsg(message: _371.QueryAggregatePrevote): _371.QueryAggregatePrevoteProtoMsg;
            };
            QueryAggregatePrevoteResponse: {
                typeUrl: string;
                encode(message: _371.QueryAggregatePrevoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryAggregatePrevoteResponse;
                fromPartial(object: Partial<_371.QueryAggregatePrevoteResponse>): _371.QueryAggregatePrevoteResponse;
                fromAmino(object: _371.QueryAggregatePrevoteResponseAmino): _371.QueryAggregatePrevoteResponse;
                toAmino(message: _371.QueryAggregatePrevoteResponse): _371.QueryAggregatePrevoteResponseAmino;
                fromAminoMsg(object: _371.QueryAggregatePrevoteResponseAminoMsg): _371.QueryAggregatePrevoteResponse;
                fromProtoMsg(message: _371.QueryAggregatePrevoteResponseProtoMsg): _371.QueryAggregatePrevoteResponse;
                toProto(message: _371.QueryAggregatePrevoteResponse): Uint8Array;
                toProtoMsg(message: _371.QueryAggregatePrevoteResponse): _371.QueryAggregatePrevoteResponseProtoMsg;
            };
            QueryAggregatePrevotes: {
                typeUrl: string;
                encode(_: _371.QueryAggregatePrevotes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryAggregatePrevotes;
                fromPartial(_: Partial<_371.QueryAggregatePrevotes>): _371.QueryAggregatePrevotes;
                fromAmino(_: _371.QueryAggregatePrevotesAmino): _371.QueryAggregatePrevotes;
                toAmino(_: _371.QueryAggregatePrevotes): _371.QueryAggregatePrevotesAmino;
                fromAminoMsg(object: _371.QueryAggregatePrevotesAminoMsg): _371.QueryAggregatePrevotes;
                fromProtoMsg(message: _371.QueryAggregatePrevotesProtoMsg): _371.QueryAggregatePrevotes;
                toProto(message: _371.QueryAggregatePrevotes): Uint8Array;
                toProtoMsg(message: _371.QueryAggregatePrevotes): _371.QueryAggregatePrevotesProtoMsg;
            };
            QueryAggregatePrevotesResponse: {
                typeUrl: string;
                encode(message: _371.QueryAggregatePrevotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryAggregatePrevotesResponse;
                fromPartial(object: Partial<_371.QueryAggregatePrevotesResponse>): _371.QueryAggregatePrevotesResponse;
                fromAmino(object: _371.QueryAggregatePrevotesResponseAmino): _371.QueryAggregatePrevotesResponse;
                toAmino(message: _371.QueryAggregatePrevotesResponse): _371.QueryAggregatePrevotesResponseAmino;
                fromAminoMsg(object: _371.QueryAggregatePrevotesResponseAminoMsg): _371.QueryAggregatePrevotesResponse;
                fromProtoMsg(message: _371.QueryAggregatePrevotesResponseProtoMsg): _371.QueryAggregatePrevotesResponse;
                toProto(message: _371.QueryAggregatePrevotesResponse): Uint8Array;
                toProtoMsg(message: _371.QueryAggregatePrevotesResponse): _371.QueryAggregatePrevotesResponseProtoMsg;
            };
            QueryAggregateVote: {
                typeUrl: string;
                encode(message: _371.QueryAggregateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryAggregateVote;
                fromPartial(object: Partial<_371.QueryAggregateVote>): _371.QueryAggregateVote;
                fromAmino(object: _371.QueryAggregateVoteAmino): _371.QueryAggregateVote;
                toAmino(message: _371.QueryAggregateVote): _371.QueryAggregateVoteAmino;
                fromAminoMsg(object: _371.QueryAggregateVoteAminoMsg): _371.QueryAggregateVote;
                fromProtoMsg(message: _371.QueryAggregateVoteProtoMsg): _371.QueryAggregateVote;
                toProto(message: _371.QueryAggregateVote): Uint8Array;
                toProtoMsg(message: _371.QueryAggregateVote): _371.QueryAggregateVoteProtoMsg;
            };
            QueryAggregateVoteResponse: {
                typeUrl: string;
                encode(message: _371.QueryAggregateVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryAggregateVoteResponse;
                fromPartial(object: Partial<_371.QueryAggregateVoteResponse>): _371.QueryAggregateVoteResponse;
                fromAmino(object: _371.QueryAggregateVoteResponseAmino): _371.QueryAggregateVoteResponse;
                toAmino(message: _371.QueryAggregateVoteResponse): _371.QueryAggregateVoteResponseAmino;
                fromAminoMsg(object: _371.QueryAggregateVoteResponseAminoMsg): _371.QueryAggregateVoteResponse;
                fromProtoMsg(message: _371.QueryAggregateVoteResponseProtoMsg): _371.QueryAggregateVoteResponse;
                toProto(message: _371.QueryAggregateVoteResponse): Uint8Array;
                toProtoMsg(message: _371.QueryAggregateVoteResponse): _371.QueryAggregateVoteResponseProtoMsg;
            };
            QueryAggregateVotes: {
                typeUrl: string;
                encode(_: _371.QueryAggregateVotes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryAggregateVotes;
                fromPartial(_: Partial<_371.QueryAggregateVotes>): _371.QueryAggregateVotes;
                fromAmino(_: _371.QueryAggregateVotesAmino): _371.QueryAggregateVotes;
                toAmino(_: _371.QueryAggregateVotes): _371.QueryAggregateVotesAmino;
                fromAminoMsg(object: _371.QueryAggregateVotesAminoMsg): _371.QueryAggregateVotes;
                fromProtoMsg(message: _371.QueryAggregateVotesProtoMsg): _371.QueryAggregateVotes;
                toProto(message: _371.QueryAggregateVotes): Uint8Array;
                toProtoMsg(message: _371.QueryAggregateVotes): _371.QueryAggregateVotesProtoMsg;
            };
            QueryAggregateVotesResponse: {
                typeUrl: string;
                encode(message: _371.QueryAggregateVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryAggregateVotesResponse;
                fromPartial(object: Partial<_371.QueryAggregateVotesResponse>): _371.QueryAggregateVotesResponse;
                fromAmino(object: _371.QueryAggregateVotesResponseAmino): _371.QueryAggregateVotesResponse;
                toAmino(message: _371.QueryAggregateVotesResponse): _371.QueryAggregateVotesResponseAmino;
                fromAminoMsg(object: _371.QueryAggregateVotesResponseAminoMsg): _371.QueryAggregateVotesResponse;
                fromProtoMsg(message: _371.QueryAggregateVotesResponseProtoMsg): _371.QueryAggregateVotesResponse;
                toProto(message: _371.QueryAggregateVotesResponse): Uint8Array;
                toProtoMsg(message: _371.QueryAggregateVotesResponse): _371.QueryAggregateVotesResponseProtoMsg;
            };
            QueryParams: {
                typeUrl: string;
                encode(_: _371.QueryParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryParams;
                fromPartial(_: Partial<_371.QueryParams>): _371.QueryParams;
                fromAmino(_: _371.QueryParamsAmino): _371.QueryParams;
                toAmino(_: _371.QueryParams): _371.QueryParamsAmino;
                fromAminoMsg(object: _371.QueryParamsAminoMsg): _371.QueryParams;
                fromProtoMsg(message: _371.QueryParamsProtoMsg): _371.QueryParams;
                toProto(message: _371.QueryParams): Uint8Array;
                toProtoMsg(message: _371.QueryParams): _371.QueryParamsProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _371.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _371.QueryParamsResponse;
                fromPartial(object: Partial<_371.QueryParamsResponse>): _371.QueryParamsResponse;
                fromAmino(object: _371.QueryParamsResponseAmino): _371.QueryParamsResponse;
                toAmino(message: _371.QueryParamsResponse): _371.QueryParamsResponseAmino;
                fromAminoMsg(object: _371.QueryParamsResponseAminoMsg): _371.QueryParamsResponse;
                fromProtoMsg(message: _371.QueryParamsResponseProtoMsg): _371.QueryParamsResponse;
                toProto(message: _371.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _371.QueryParamsResponse): _371.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _370.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _370.Params;
                fromPartial(object: Partial<_370.Params>): _370.Params;
                fromAmino(object: _370.ParamsAmino): _370.Params;
                toAmino(message: _370.Params): _370.ParamsAmino;
                fromAminoMsg(object: _370.ParamsAminoMsg): _370.Params;
                fromProtoMsg(message: _370.ParamsProtoMsg): _370.Params;
                toProto(message: _370.Params): Uint8Array;
                toProtoMsg(message: _370.Params): _370.ParamsProtoMsg;
            };
            Denom: {
                typeUrl: string;
                encode(message: _370.Denom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _370.Denom;
                fromPartial(object: Partial<_370.Denom>): _370.Denom;
                fromAmino(object: _370.DenomAmino): _370.Denom;
                toAmino(message: _370.Denom): _370.DenomAmino;
                fromAminoMsg(object: _370.DenomAminoMsg): _370.Denom;
                fromProtoMsg(message: _370.DenomProtoMsg): _370.Denom;
                toProto(message: _370.Denom): Uint8Array;
                toProtoMsg(message: _370.Denom): _370.DenomProtoMsg;
            };
            AggregateExchangeRatePrevote: {
                typeUrl: string;
                encode(message: _370.AggregateExchangeRatePrevote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _370.AggregateExchangeRatePrevote;
                fromPartial(object: Partial<_370.AggregateExchangeRatePrevote>): _370.AggregateExchangeRatePrevote;
                fromAmino(object: _370.AggregateExchangeRatePrevoteAmino): _370.AggregateExchangeRatePrevote;
                toAmino(message: _370.AggregateExchangeRatePrevote): _370.AggregateExchangeRatePrevoteAmino;
                fromAminoMsg(object: _370.AggregateExchangeRatePrevoteAminoMsg): _370.AggregateExchangeRatePrevote;
                fromProtoMsg(message: _370.AggregateExchangeRatePrevoteProtoMsg): _370.AggregateExchangeRatePrevote;
                toProto(message: _370.AggregateExchangeRatePrevote): Uint8Array;
                toProtoMsg(message: _370.AggregateExchangeRatePrevote): _370.AggregateExchangeRatePrevoteProtoMsg;
            };
            AggregateExchangeRateVote: {
                typeUrl: string;
                encode(message: _370.AggregateExchangeRateVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _370.AggregateExchangeRateVote;
                fromPartial(object: Partial<_370.AggregateExchangeRateVote>): _370.AggregateExchangeRateVote;
                fromAmino(object: _370.AggregateExchangeRateVoteAmino): _370.AggregateExchangeRateVote;
                toAmino(message: _370.AggregateExchangeRateVote): _370.AggregateExchangeRateVoteAmino;
                fromAminoMsg(object: _370.AggregateExchangeRateVoteAminoMsg): _370.AggregateExchangeRateVote;
                fromProtoMsg(message: _370.AggregateExchangeRateVoteProtoMsg): _370.AggregateExchangeRateVote;
                toProto(message: _370.AggregateExchangeRateVote): Uint8Array;
                toProtoMsg(message: _370.AggregateExchangeRateVote): _370.AggregateExchangeRateVoteProtoMsg;
            };
            ExchangeRateTuple: {
                typeUrl: string;
                encode(message: _370.ExchangeRateTuple, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _370.ExchangeRateTuple;
                fromPartial(object: Partial<_370.ExchangeRateTuple>): _370.ExchangeRateTuple;
                fromAmino(object: _370.ExchangeRateTupleAmino): _370.ExchangeRateTuple;
                toAmino(message: _370.ExchangeRateTuple): _370.ExchangeRateTupleAmino;
                fromAminoMsg(object: _370.ExchangeRateTupleAminoMsg): _370.ExchangeRateTuple;
                fromProtoMsg(message: _370.ExchangeRateTupleProtoMsg): _370.ExchangeRateTuple;
                toProto(message: _370.ExchangeRateTuple): Uint8Array;
                toProtoMsg(message: _370.ExchangeRateTuple): _370.ExchangeRateTupleProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _369.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _369.GenesisState;
                fromPartial(object: Partial<_369.GenesisState>): _369.GenesisState;
                fromAmino(object: _369.GenesisStateAmino): _369.GenesisState;
                toAmino(message: _369.GenesisState): _369.GenesisStateAmino;
                fromAminoMsg(object: _369.GenesisStateAminoMsg): _369.GenesisState;
                fromProtoMsg(message: _369.GenesisStateProtoMsg): _369.GenesisState;
                toProto(message: _369.GenesisState): Uint8Array;
                toProtoMsg(message: _369.GenesisState): _369.GenesisStateProtoMsg;
            };
            FeederDelegation: {
                typeUrl: string;
                encode(message: _369.FeederDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _369.FeederDelegation;
                fromPartial(object: Partial<_369.FeederDelegation>): _369.FeederDelegation;
                fromAmino(object: _369.FeederDelegationAmino): _369.FeederDelegation;
                toAmino(message: _369.FeederDelegation): _369.FeederDelegationAmino;
                fromAminoMsg(object: _369.FeederDelegationAminoMsg): _369.FeederDelegation;
                fromProtoMsg(message: _369.FeederDelegationProtoMsg): _369.FeederDelegation;
                toProto(message: _369.FeederDelegation): Uint8Array;
                toProtoMsg(message: _369.FeederDelegation): _369.FeederDelegationProtoMsg;
            };
            MissCounter: {
                typeUrl: string;
                encode(message: _369.MissCounter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _369.MissCounter;
                fromPartial(object: Partial<_369.MissCounter>): _369.MissCounter;
                fromAmino(object: _369.MissCounterAmino): _369.MissCounter;
                toAmino(message: _369.MissCounter): _369.MissCounterAmino;
                fromAminoMsg(object: _369.MissCounterAminoMsg): _369.MissCounter;
                fromProtoMsg(message: _369.MissCounterProtoMsg): _369.MissCounter;
                toProto(message: _369.MissCounter): Uint8Array;
                toProtoMsg(message: _369.MissCounter): _369.MissCounterProtoMsg;
            };
            EventDelegateFeedConsent: {
                typeUrl: string;
                encode(message: _368.EventDelegateFeedConsent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _368.EventDelegateFeedConsent;
                fromPartial(object: Partial<_368.EventDelegateFeedConsent>): _368.EventDelegateFeedConsent;
                fromAmino(object: _368.EventDelegateFeedConsentAmino): _368.EventDelegateFeedConsent;
                toAmino(message: _368.EventDelegateFeedConsent): _368.EventDelegateFeedConsentAmino;
                fromAminoMsg(object: _368.EventDelegateFeedConsentAminoMsg): _368.EventDelegateFeedConsent;
                fromProtoMsg(message: _368.EventDelegateFeedConsentProtoMsg): _368.EventDelegateFeedConsent;
                toProto(message: _368.EventDelegateFeedConsent): Uint8Array;
                toProtoMsg(message: _368.EventDelegateFeedConsent): _368.EventDelegateFeedConsentProtoMsg;
            };
            EventSetFxRate: {
                typeUrl: string;
                encode(message: _368.EventSetFxRate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _368.EventSetFxRate;
                fromPartial(object: Partial<_368.EventSetFxRate>): _368.EventSetFxRate;
                fromAmino(object: _368.EventSetFxRateAmino): _368.EventSetFxRate;
                toAmino(message: _368.EventSetFxRate): _368.EventSetFxRateAmino;
                fromAminoMsg(object: _368.EventSetFxRateAminoMsg): _368.EventSetFxRate;
                fromProtoMsg(message: _368.EventSetFxRateProtoMsg): _368.EventSetFxRate;
                toProto(message: _368.EventSetFxRate): Uint8Array;
                toProtoMsg(message: _368.EventSetFxRate): _368.EventSetFxRateProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            umee: {
                leverage: {
                    v1: _597.MsgClientImpl;
                };
                oracle: {
                    v1: _598.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            umee: {
                leverage: {
                    v1: {
                        params(request?: _366.QueryParams): Promise<_366.QueryParamsResponse>;
                        registeredTokens(request?: _366.QueryRegisteredTokens): Promise<_366.QueryRegisteredTokensResponse>;
                        marketSummary(request: _366.QueryMarketSummary): Promise<_366.QueryMarketSummaryResponse>;
                        accountBalances(request: _366.QueryAccountBalances): Promise<_366.QueryAccountBalancesResponse>;
                        accountSummary(request: _366.QueryAccountSummary): Promise<_366.QueryAccountSummaryResponse>;
                        liquidationTargets(request?: _366.QueryLiquidationTargets): Promise<_366.QueryLiquidationTargetsResponse>;
                        badDebts(request?: _366.QueryBadDebts): Promise<_366.QueryBadDebtsResponse>;
                    };
                };
                oracle: {
                    v1: {
                        exchangeRates(request: _371.QueryExchangeRates): Promise<_371.QueryExchangeRatesResponse>;
                        activeExchangeRates(request?: _371.QueryActiveExchangeRates): Promise<_371.QueryActiveExchangeRatesResponse>;
                        feederDelegation(request: _371.QueryFeederDelegation): Promise<_371.QueryFeederDelegationResponse>;
                        missCounter(request: _371.QueryMissCounter): Promise<_371.QueryMissCounterResponse>;
                        slashWindow(request?: _371.QuerySlashWindow): Promise<_371.QuerySlashWindowResponse>;
                        aggregatePrevote(request: _371.QueryAggregatePrevote): Promise<_371.QueryAggregatePrevoteResponse>;
                        aggregatePrevotes(request?: _371.QueryAggregatePrevotes): Promise<_371.QueryAggregatePrevotesResponse>;
                        aggregateVote(request: _371.QueryAggregateVote): Promise<_371.QueryAggregateVoteResponse>;
                        aggregateVotes(request?: _371.QueryAggregateVotes): Promise<_371.QueryAggregateVotesResponse>;
                        params(request?: _371.QueryParams): Promise<_371.QueryParamsResponse>;
                    };
                };
            };
        }>;
    };
}
