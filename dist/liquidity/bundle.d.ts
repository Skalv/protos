import * as _223 from "./v1beta1/genesis";
import * as _224 from "./v1beta1/liquidity";
import * as _225 from "./v1beta1/query";
import * as _226 from "./v1beta1/tx";
import * as _500 from "./v1beta1/query.rpc.Query";
import * as _501 from "./v1beta1/tx.rpc.msg";
export declare namespace liquidity {
    const v1beta1: {
        MsgClientImpl: typeof _501.MsgClientImpl;
        QueryClientImpl: typeof _500.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            liquidityPools(request?: _225.QueryLiquidityPoolsRequest): Promise<_225.QueryLiquidityPoolsResponse>;
            liquidityPool(request: _225.QueryLiquidityPoolRequest): Promise<_225.QueryLiquidityPoolResponse>;
            liquidityPoolByPoolCoinDenom(request: _225.QueryLiquidityPoolByPoolCoinDenomRequest): Promise<_225.QueryLiquidityPoolResponse>;
            liquidityPoolByReserveAcc(request: _225.QueryLiquidityPoolByReserveAccRequest): Promise<_225.QueryLiquidityPoolResponse>;
            liquidityPoolBatch(request: _225.QueryLiquidityPoolBatchRequest): Promise<_225.QueryLiquidityPoolBatchResponse>;
            poolBatchSwapMsgs(request: _225.QueryPoolBatchSwapMsgsRequest): Promise<_225.QueryPoolBatchSwapMsgsResponse>;
            poolBatchSwapMsg(request: _225.QueryPoolBatchSwapMsgRequest): Promise<_225.QueryPoolBatchSwapMsgResponse>;
            poolBatchDepositMsgs(request: _225.QueryPoolBatchDepositMsgsRequest): Promise<_225.QueryPoolBatchDepositMsgsResponse>;
            poolBatchDepositMsg(request: _225.QueryPoolBatchDepositMsgRequest): Promise<_225.QueryPoolBatchDepositMsgResponse>;
            poolBatchWithdrawMsgs(request: _225.QueryPoolBatchWithdrawMsgsRequest): Promise<_225.QueryPoolBatchWithdrawMsgsResponse>;
            poolBatchWithdrawMsg(request: _225.QueryPoolBatchWithdrawMsgRequest): Promise<_225.QueryPoolBatchWithdrawMsgResponse>;
            params(request?: _225.QueryParamsRequest): Promise<_225.QueryParamsResponse>;
        };
        registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createPool(value: _226.MsgCreatePool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                depositWithinBatch(value: _226.MsgDepositWithinBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                withdrawWithinBatch(value: _226.MsgWithdrawWithinBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                swap(value: _226.MsgSwapWithinBatch): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                directSwap(value: _226.MsgDirectSwap): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createPool(value: _226.MsgCreatePool): {
                    typeUrl: string;
                    value: _226.MsgCreatePool;
                };
                depositWithinBatch(value: _226.MsgDepositWithinBatch): {
                    typeUrl: string;
                    value: _226.MsgDepositWithinBatch;
                };
                withdrawWithinBatch(value: _226.MsgWithdrawWithinBatch): {
                    typeUrl: string;
                    value: _226.MsgWithdrawWithinBatch;
                };
                swap(value: _226.MsgSwapWithinBatch): {
                    typeUrl: string;
                    value: _226.MsgSwapWithinBatch;
                };
                directSwap(value: _226.MsgDirectSwap): {
                    typeUrl: string;
                    value: _226.MsgDirectSwap;
                };
            };
            fromPartial: {
                createPool(value: _226.MsgCreatePool): {
                    typeUrl: string;
                    value: _226.MsgCreatePool;
                };
                depositWithinBatch(value: _226.MsgDepositWithinBatch): {
                    typeUrl: string;
                    value: _226.MsgDepositWithinBatch;
                };
                withdrawWithinBatch(value: _226.MsgWithdrawWithinBatch): {
                    typeUrl: string;
                    value: _226.MsgWithdrawWithinBatch;
                };
                swap(value: _226.MsgSwapWithinBatch): {
                    typeUrl: string;
                    value: _226.MsgSwapWithinBatch;
                };
                directSwap(value: _226.MsgDirectSwap): {
                    typeUrl: string;
                    value: _226.MsgDirectSwap;
                };
            };
        };
        AminoConverter: {
            "/liquidity.v1beta1.MsgCreatePool": {
                aminoType: string;
                toAmino: (message: _226.MsgCreatePool) => _226.MsgCreatePoolAmino;
                fromAmino: (object: _226.MsgCreatePoolAmino) => _226.MsgCreatePool;
            };
            "/liquidity.v1beta1.MsgDepositWithinBatch": {
                aminoType: string;
                toAmino: (message: _226.MsgDepositWithinBatch) => _226.MsgDepositWithinBatchAmino;
                fromAmino: (object: _226.MsgDepositWithinBatchAmino) => _226.MsgDepositWithinBatch;
            };
            "/liquidity.v1beta1.MsgWithdrawWithinBatch": {
                aminoType: string;
                toAmino: (message: _226.MsgWithdrawWithinBatch) => _226.MsgWithdrawWithinBatchAmino;
                fromAmino: (object: _226.MsgWithdrawWithinBatchAmino) => _226.MsgWithdrawWithinBatch;
            };
            "/liquidity.v1beta1.MsgSwapWithinBatch": {
                aminoType: string;
                toAmino: (message: _226.MsgSwapWithinBatch) => _226.MsgSwapWithinBatchAmino;
                fromAmino: (object: _226.MsgSwapWithinBatchAmino) => _226.MsgSwapWithinBatch;
            };
            "/liquidity.v1beta1.MsgDirectSwap": {
                aminoType: string;
                toAmino: (message: _226.MsgDirectSwap) => _226.MsgDirectSwapAmino;
                fromAmino: (object: _226.MsgDirectSwapAmino) => _226.MsgDirectSwap;
            };
        };
        MsgCreatePool: {
            typeUrl: string;
            encode(message: _226.MsgCreatePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _226.MsgCreatePool;
            fromPartial(object: Partial<_226.MsgCreatePool>): _226.MsgCreatePool;
            fromAmino(object: _226.MsgCreatePoolAmino): _226.MsgCreatePool;
            toAmino(message: _226.MsgCreatePool): _226.MsgCreatePoolAmino;
            fromAminoMsg(object: _226.MsgCreatePoolAminoMsg): _226.MsgCreatePool;
            fromProtoMsg(message: _226.MsgCreatePoolProtoMsg): _226.MsgCreatePool;
            toProto(message: _226.MsgCreatePool): Uint8Array;
            toProtoMsg(message: _226.MsgCreatePool): _226.MsgCreatePoolProtoMsg;
        };
        MsgCreatePoolResponse: {
            typeUrl: string;
            encode(_: _226.MsgCreatePoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _226.MsgCreatePoolResponse;
            fromPartial(_: Partial<_226.MsgCreatePoolResponse>): _226.MsgCreatePoolResponse;
            fromAmino(_: _226.MsgCreatePoolResponseAmino): _226.MsgCreatePoolResponse;
            toAmino(_: _226.MsgCreatePoolResponse): _226.MsgCreatePoolResponseAmino;
            fromAminoMsg(object: _226.MsgCreatePoolResponseAminoMsg): _226.MsgCreatePoolResponse;
            fromProtoMsg(message: _226.MsgCreatePoolResponseProtoMsg): _226.MsgCreatePoolResponse;
            toProto(message: _226.MsgCreatePoolResponse): Uint8Array;
            toProtoMsg(message: _226.MsgCreatePoolResponse): _226.MsgCreatePoolResponseProtoMsg;
        };
        MsgDepositWithinBatch: {
            typeUrl: string;
            encode(message: _226.MsgDepositWithinBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _226.MsgDepositWithinBatch;
            fromPartial(object: Partial<_226.MsgDepositWithinBatch>): _226.MsgDepositWithinBatch;
            fromAmino(object: _226.MsgDepositWithinBatchAmino): _226.MsgDepositWithinBatch;
            toAmino(message: _226.MsgDepositWithinBatch): _226.MsgDepositWithinBatchAmino;
            fromAminoMsg(object: _226.MsgDepositWithinBatchAminoMsg): _226.MsgDepositWithinBatch;
            fromProtoMsg(message: _226.MsgDepositWithinBatchProtoMsg): _226.MsgDepositWithinBatch;
            toProto(message: _226.MsgDepositWithinBatch): Uint8Array;
            toProtoMsg(message: _226.MsgDepositWithinBatch): _226.MsgDepositWithinBatchProtoMsg;
        };
        MsgDepositWithinBatchResponse: {
            typeUrl: string;
            encode(_: _226.MsgDepositWithinBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _226.MsgDepositWithinBatchResponse;
            fromPartial(_: Partial<_226.MsgDepositWithinBatchResponse>): _226.MsgDepositWithinBatchResponse;
            fromAmino(_: _226.MsgDepositWithinBatchResponseAmino): _226.MsgDepositWithinBatchResponse;
            toAmino(_: _226.MsgDepositWithinBatchResponse): _226.MsgDepositWithinBatchResponseAmino;
            fromAminoMsg(object: _226.MsgDepositWithinBatchResponseAminoMsg): _226.MsgDepositWithinBatchResponse;
            fromProtoMsg(message: _226.MsgDepositWithinBatchResponseProtoMsg): _226.MsgDepositWithinBatchResponse;
            toProto(message: _226.MsgDepositWithinBatchResponse): Uint8Array;
            toProtoMsg(message: _226.MsgDepositWithinBatchResponse): _226.MsgDepositWithinBatchResponseProtoMsg;
        };
        MsgWithdrawWithinBatch: {
            typeUrl: string;
            encode(message: _226.MsgWithdrawWithinBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _226.MsgWithdrawWithinBatch;
            fromPartial(object: Partial<_226.MsgWithdrawWithinBatch>): _226.MsgWithdrawWithinBatch;
            fromAmino(object: _226.MsgWithdrawWithinBatchAmino): _226.MsgWithdrawWithinBatch;
            toAmino(message: _226.MsgWithdrawWithinBatch): _226.MsgWithdrawWithinBatchAmino;
            fromAminoMsg(object: _226.MsgWithdrawWithinBatchAminoMsg): _226.MsgWithdrawWithinBatch;
            fromProtoMsg(message: _226.MsgWithdrawWithinBatchProtoMsg): _226.MsgWithdrawWithinBatch;
            toProto(message: _226.MsgWithdrawWithinBatch): Uint8Array;
            toProtoMsg(message: _226.MsgWithdrawWithinBatch): _226.MsgWithdrawWithinBatchProtoMsg;
        };
        MsgWithdrawWithinBatchResponse: {
            typeUrl: string;
            encode(_: _226.MsgWithdrawWithinBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _226.MsgWithdrawWithinBatchResponse;
            fromPartial(_: Partial<_226.MsgWithdrawWithinBatchResponse>): _226.MsgWithdrawWithinBatchResponse;
            fromAmino(_: _226.MsgWithdrawWithinBatchResponseAmino): _226.MsgWithdrawWithinBatchResponse;
            toAmino(_: _226.MsgWithdrawWithinBatchResponse): _226.MsgWithdrawWithinBatchResponseAmino;
            fromAminoMsg(object: _226.MsgWithdrawWithinBatchResponseAminoMsg): _226.MsgWithdrawWithinBatchResponse;
            fromProtoMsg(message: _226.MsgWithdrawWithinBatchResponseProtoMsg): _226.MsgWithdrawWithinBatchResponse;
            toProto(message: _226.MsgWithdrawWithinBatchResponse): Uint8Array;
            toProtoMsg(message: _226.MsgWithdrawWithinBatchResponse): _226.MsgWithdrawWithinBatchResponseProtoMsg;
        };
        MsgSwapWithinBatch: {
            typeUrl: string;
            encode(message: _226.MsgSwapWithinBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _226.MsgSwapWithinBatch;
            fromPartial(object: Partial<_226.MsgSwapWithinBatch>): _226.MsgSwapWithinBatch;
            fromAmino(object: _226.MsgSwapWithinBatchAmino): _226.MsgSwapWithinBatch;
            toAmino(message: _226.MsgSwapWithinBatch): _226.MsgSwapWithinBatchAmino;
            fromAminoMsg(object: _226.MsgSwapWithinBatchAminoMsg): _226.MsgSwapWithinBatch;
            fromProtoMsg(message: _226.MsgSwapWithinBatchProtoMsg): _226.MsgSwapWithinBatch;
            toProto(message: _226.MsgSwapWithinBatch): Uint8Array;
            toProtoMsg(message: _226.MsgSwapWithinBatch): _226.MsgSwapWithinBatchProtoMsg;
        };
        MsgSwapWithinBatchResponse: {
            typeUrl: string;
            encode(_: _226.MsgSwapWithinBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _226.MsgSwapWithinBatchResponse;
            fromPartial(_: Partial<_226.MsgSwapWithinBatchResponse>): _226.MsgSwapWithinBatchResponse;
            fromAmino(_: _226.MsgSwapWithinBatchResponseAmino): _226.MsgSwapWithinBatchResponse;
            toAmino(_: _226.MsgSwapWithinBatchResponse): _226.MsgSwapWithinBatchResponseAmino;
            fromAminoMsg(object: _226.MsgSwapWithinBatchResponseAminoMsg): _226.MsgSwapWithinBatchResponse;
            fromProtoMsg(message: _226.MsgSwapWithinBatchResponseProtoMsg): _226.MsgSwapWithinBatchResponse;
            toProto(message: _226.MsgSwapWithinBatchResponse): Uint8Array;
            toProtoMsg(message: _226.MsgSwapWithinBatchResponse): _226.MsgSwapWithinBatchResponseProtoMsg;
        };
        MsgDirectSwap: {
            typeUrl: string;
            encode(message: _226.MsgDirectSwap, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _226.MsgDirectSwap;
            fromPartial(object: Partial<_226.MsgDirectSwap>): _226.MsgDirectSwap;
            fromAmino(object: _226.MsgDirectSwapAmino): _226.MsgDirectSwap;
            toAmino(message: _226.MsgDirectSwap): _226.MsgDirectSwapAmino;
            fromAminoMsg(object: _226.MsgDirectSwapAminoMsg): _226.MsgDirectSwap;
            fromProtoMsg(message: _226.MsgDirectSwapProtoMsg): _226.MsgDirectSwap;
            toProto(message: _226.MsgDirectSwap): Uint8Array;
            toProtoMsg(message: _226.MsgDirectSwap): _226.MsgDirectSwapProtoMsg;
        };
        MsgDirectSwapResponse: {
            typeUrl: string;
            encode(message: _226.MsgDirectSwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _226.MsgDirectSwapResponse;
            fromPartial(object: Partial<_226.MsgDirectSwapResponse>): _226.MsgDirectSwapResponse;
            fromAmino(object: _226.MsgDirectSwapResponseAmino): _226.MsgDirectSwapResponse;
            toAmino(message: _226.MsgDirectSwapResponse): _226.MsgDirectSwapResponseAmino;
            fromAminoMsg(object: _226.MsgDirectSwapResponseAminoMsg): _226.MsgDirectSwapResponse;
            fromProtoMsg(message: _226.MsgDirectSwapResponseProtoMsg): _226.MsgDirectSwapResponse;
            toProto(message: _226.MsgDirectSwapResponse): Uint8Array;
            toProtoMsg(message: _226.MsgDirectSwapResponse): _226.MsgDirectSwapResponseProtoMsg;
        };
        QueryLiquidityPoolRequest: {
            typeUrl: string;
            encode(message: _225.QueryLiquidityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryLiquidityPoolRequest;
            fromPartial(object: Partial<_225.QueryLiquidityPoolRequest>): _225.QueryLiquidityPoolRequest;
            fromAmino(object: _225.QueryLiquidityPoolRequestAmino): _225.QueryLiquidityPoolRequest;
            toAmino(message: _225.QueryLiquidityPoolRequest): _225.QueryLiquidityPoolRequestAmino;
            fromAminoMsg(object: _225.QueryLiquidityPoolRequestAminoMsg): _225.QueryLiquidityPoolRequest;
            fromProtoMsg(message: _225.QueryLiquidityPoolRequestProtoMsg): _225.QueryLiquidityPoolRequest;
            toProto(message: _225.QueryLiquidityPoolRequest): Uint8Array;
            toProtoMsg(message: _225.QueryLiquidityPoolRequest): _225.QueryLiquidityPoolRequestProtoMsg;
        };
        QueryLiquidityPoolResponse: {
            typeUrl: string;
            encode(message: _225.QueryLiquidityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryLiquidityPoolResponse;
            fromPartial(object: Partial<_225.QueryLiquidityPoolResponse>): _225.QueryLiquidityPoolResponse;
            fromAmino(object: _225.QueryLiquidityPoolResponseAmino): _225.QueryLiquidityPoolResponse;
            toAmino(message: _225.QueryLiquidityPoolResponse): _225.QueryLiquidityPoolResponseAmino;
            fromAminoMsg(object: _225.QueryLiquidityPoolResponseAminoMsg): _225.QueryLiquidityPoolResponse;
            fromProtoMsg(message: _225.QueryLiquidityPoolResponseProtoMsg): _225.QueryLiquidityPoolResponse;
            toProto(message: _225.QueryLiquidityPoolResponse): Uint8Array;
            toProtoMsg(message: _225.QueryLiquidityPoolResponse): _225.QueryLiquidityPoolResponseProtoMsg;
        };
        QueryLiquidityPoolByPoolCoinDenomRequest: {
            typeUrl: string;
            encode(message: _225.QueryLiquidityPoolByPoolCoinDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryLiquidityPoolByPoolCoinDenomRequest;
            fromPartial(object: Partial<_225.QueryLiquidityPoolByPoolCoinDenomRequest>): _225.QueryLiquidityPoolByPoolCoinDenomRequest;
            fromAmino(object: _225.QueryLiquidityPoolByPoolCoinDenomRequestAmino): _225.QueryLiquidityPoolByPoolCoinDenomRequest;
            toAmino(message: _225.QueryLiquidityPoolByPoolCoinDenomRequest): _225.QueryLiquidityPoolByPoolCoinDenomRequestAmino;
            fromAminoMsg(object: _225.QueryLiquidityPoolByPoolCoinDenomRequestAminoMsg): _225.QueryLiquidityPoolByPoolCoinDenomRequest;
            fromProtoMsg(message: _225.QueryLiquidityPoolByPoolCoinDenomRequestProtoMsg): _225.QueryLiquidityPoolByPoolCoinDenomRequest;
            toProto(message: _225.QueryLiquidityPoolByPoolCoinDenomRequest): Uint8Array;
            toProtoMsg(message: _225.QueryLiquidityPoolByPoolCoinDenomRequest): _225.QueryLiquidityPoolByPoolCoinDenomRequestProtoMsg;
        };
        QueryLiquidityPoolByReserveAccRequest: {
            typeUrl: string;
            encode(message: _225.QueryLiquidityPoolByReserveAccRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryLiquidityPoolByReserveAccRequest;
            fromPartial(object: Partial<_225.QueryLiquidityPoolByReserveAccRequest>): _225.QueryLiquidityPoolByReserveAccRequest;
            fromAmino(object: _225.QueryLiquidityPoolByReserveAccRequestAmino): _225.QueryLiquidityPoolByReserveAccRequest;
            toAmino(message: _225.QueryLiquidityPoolByReserveAccRequest): _225.QueryLiquidityPoolByReserveAccRequestAmino;
            fromAminoMsg(object: _225.QueryLiquidityPoolByReserveAccRequestAminoMsg): _225.QueryLiquidityPoolByReserveAccRequest;
            fromProtoMsg(message: _225.QueryLiquidityPoolByReserveAccRequestProtoMsg): _225.QueryLiquidityPoolByReserveAccRequest;
            toProto(message: _225.QueryLiquidityPoolByReserveAccRequest): Uint8Array;
            toProtoMsg(message: _225.QueryLiquidityPoolByReserveAccRequest): _225.QueryLiquidityPoolByReserveAccRequestProtoMsg;
        };
        QueryLiquidityPoolBatchRequest: {
            typeUrl: string;
            encode(message: _225.QueryLiquidityPoolBatchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryLiquidityPoolBatchRequest;
            fromPartial(object: Partial<_225.QueryLiquidityPoolBatchRequest>): _225.QueryLiquidityPoolBatchRequest;
            fromAmino(object: _225.QueryLiquidityPoolBatchRequestAmino): _225.QueryLiquidityPoolBatchRequest;
            toAmino(message: _225.QueryLiquidityPoolBatchRequest): _225.QueryLiquidityPoolBatchRequestAmino;
            fromAminoMsg(object: _225.QueryLiquidityPoolBatchRequestAminoMsg): _225.QueryLiquidityPoolBatchRequest;
            fromProtoMsg(message: _225.QueryLiquidityPoolBatchRequestProtoMsg): _225.QueryLiquidityPoolBatchRequest;
            toProto(message: _225.QueryLiquidityPoolBatchRequest): Uint8Array;
            toProtoMsg(message: _225.QueryLiquidityPoolBatchRequest): _225.QueryLiquidityPoolBatchRequestProtoMsg;
        };
        QueryLiquidityPoolBatchResponse: {
            typeUrl: string;
            encode(message: _225.QueryLiquidityPoolBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryLiquidityPoolBatchResponse;
            fromPartial(object: Partial<_225.QueryLiquidityPoolBatchResponse>): _225.QueryLiquidityPoolBatchResponse;
            fromAmino(object: _225.QueryLiquidityPoolBatchResponseAmino): _225.QueryLiquidityPoolBatchResponse;
            toAmino(message: _225.QueryLiquidityPoolBatchResponse): _225.QueryLiquidityPoolBatchResponseAmino;
            fromAminoMsg(object: _225.QueryLiquidityPoolBatchResponseAminoMsg): _225.QueryLiquidityPoolBatchResponse;
            fromProtoMsg(message: _225.QueryLiquidityPoolBatchResponseProtoMsg): _225.QueryLiquidityPoolBatchResponse;
            toProto(message: _225.QueryLiquidityPoolBatchResponse): Uint8Array;
            toProtoMsg(message: _225.QueryLiquidityPoolBatchResponse): _225.QueryLiquidityPoolBatchResponseProtoMsg;
        };
        QueryLiquidityPoolsRequest: {
            typeUrl: string;
            encode(message: _225.QueryLiquidityPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryLiquidityPoolsRequest;
            fromPartial(object: Partial<_225.QueryLiquidityPoolsRequest>): _225.QueryLiquidityPoolsRequest;
            fromAmino(object: _225.QueryLiquidityPoolsRequestAmino): _225.QueryLiquidityPoolsRequest;
            toAmino(message: _225.QueryLiquidityPoolsRequest): _225.QueryLiquidityPoolsRequestAmino;
            fromAminoMsg(object: _225.QueryLiquidityPoolsRequestAminoMsg): _225.QueryLiquidityPoolsRequest;
            fromProtoMsg(message: _225.QueryLiquidityPoolsRequestProtoMsg): _225.QueryLiquidityPoolsRequest;
            toProto(message: _225.QueryLiquidityPoolsRequest): Uint8Array;
            toProtoMsg(message: _225.QueryLiquidityPoolsRequest): _225.QueryLiquidityPoolsRequestProtoMsg;
        };
        QueryLiquidityPoolsResponse: {
            typeUrl: string;
            encode(message: _225.QueryLiquidityPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryLiquidityPoolsResponse;
            fromPartial(object: Partial<_225.QueryLiquidityPoolsResponse>): _225.QueryLiquidityPoolsResponse;
            fromAmino(object: _225.QueryLiquidityPoolsResponseAmino): _225.QueryLiquidityPoolsResponse;
            toAmino(message: _225.QueryLiquidityPoolsResponse): _225.QueryLiquidityPoolsResponseAmino;
            fromAminoMsg(object: _225.QueryLiquidityPoolsResponseAminoMsg): _225.QueryLiquidityPoolsResponse;
            fromProtoMsg(message: _225.QueryLiquidityPoolsResponseProtoMsg): _225.QueryLiquidityPoolsResponse;
            toProto(message: _225.QueryLiquidityPoolsResponse): Uint8Array;
            toProtoMsg(message: _225.QueryLiquidityPoolsResponse): _225.QueryLiquidityPoolsResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _225.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryParamsRequest;
            fromPartial(_: Partial<_225.QueryParamsRequest>): _225.QueryParamsRequest;
            fromAmino(_: _225.QueryParamsRequestAmino): _225.QueryParamsRequest;
            toAmino(_: _225.QueryParamsRequest): _225.QueryParamsRequestAmino;
            fromAminoMsg(object: _225.QueryParamsRequestAminoMsg): _225.QueryParamsRequest;
            fromProtoMsg(message: _225.QueryParamsRequestProtoMsg): _225.QueryParamsRequest;
            toProto(message: _225.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _225.QueryParamsRequest): _225.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _225.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryParamsResponse;
            fromPartial(object: Partial<_225.QueryParamsResponse>): _225.QueryParamsResponse;
            fromAmino(object: _225.QueryParamsResponseAmino): _225.QueryParamsResponse;
            toAmino(message: _225.QueryParamsResponse): _225.QueryParamsResponseAmino;
            fromAminoMsg(object: _225.QueryParamsResponseAminoMsg): _225.QueryParamsResponse;
            fromProtoMsg(message: _225.QueryParamsResponseProtoMsg): _225.QueryParamsResponse;
            toProto(message: _225.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _225.QueryParamsResponse): _225.QueryParamsResponseProtoMsg;
        };
        QueryPoolBatchSwapMsgsRequest: {
            typeUrl: string;
            encode(message: _225.QueryPoolBatchSwapMsgsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryPoolBatchSwapMsgsRequest;
            fromPartial(object: Partial<_225.QueryPoolBatchSwapMsgsRequest>): _225.QueryPoolBatchSwapMsgsRequest;
            fromAmino(object: _225.QueryPoolBatchSwapMsgsRequestAmino): _225.QueryPoolBatchSwapMsgsRequest;
            toAmino(message: _225.QueryPoolBatchSwapMsgsRequest): _225.QueryPoolBatchSwapMsgsRequestAmino;
            fromAminoMsg(object: _225.QueryPoolBatchSwapMsgsRequestAminoMsg): _225.QueryPoolBatchSwapMsgsRequest;
            fromProtoMsg(message: _225.QueryPoolBatchSwapMsgsRequestProtoMsg): _225.QueryPoolBatchSwapMsgsRequest;
            toProto(message: _225.QueryPoolBatchSwapMsgsRequest): Uint8Array;
            toProtoMsg(message: _225.QueryPoolBatchSwapMsgsRequest): _225.QueryPoolBatchSwapMsgsRequestProtoMsg;
        };
        QueryPoolBatchSwapMsgRequest: {
            typeUrl: string;
            encode(message: _225.QueryPoolBatchSwapMsgRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryPoolBatchSwapMsgRequest;
            fromPartial(object: Partial<_225.QueryPoolBatchSwapMsgRequest>): _225.QueryPoolBatchSwapMsgRequest;
            fromAmino(object: _225.QueryPoolBatchSwapMsgRequestAmino): _225.QueryPoolBatchSwapMsgRequest;
            toAmino(message: _225.QueryPoolBatchSwapMsgRequest): _225.QueryPoolBatchSwapMsgRequestAmino;
            fromAminoMsg(object: _225.QueryPoolBatchSwapMsgRequestAminoMsg): _225.QueryPoolBatchSwapMsgRequest;
            fromProtoMsg(message: _225.QueryPoolBatchSwapMsgRequestProtoMsg): _225.QueryPoolBatchSwapMsgRequest;
            toProto(message: _225.QueryPoolBatchSwapMsgRequest): Uint8Array;
            toProtoMsg(message: _225.QueryPoolBatchSwapMsgRequest): _225.QueryPoolBatchSwapMsgRequestProtoMsg;
        };
        QueryPoolBatchSwapMsgsResponse: {
            typeUrl: string;
            encode(message: _225.QueryPoolBatchSwapMsgsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryPoolBatchSwapMsgsResponse;
            fromPartial(object: Partial<_225.QueryPoolBatchSwapMsgsResponse>): _225.QueryPoolBatchSwapMsgsResponse;
            fromAmino(object: _225.QueryPoolBatchSwapMsgsResponseAmino): _225.QueryPoolBatchSwapMsgsResponse;
            toAmino(message: _225.QueryPoolBatchSwapMsgsResponse): _225.QueryPoolBatchSwapMsgsResponseAmino;
            fromAminoMsg(object: _225.QueryPoolBatchSwapMsgsResponseAminoMsg): _225.QueryPoolBatchSwapMsgsResponse;
            fromProtoMsg(message: _225.QueryPoolBatchSwapMsgsResponseProtoMsg): _225.QueryPoolBatchSwapMsgsResponse;
            toProto(message: _225.QueryPoolBatchSwapMsgsResponse): Uint8Array;
            toProtoMsg(message: _225.QueryPoolBatchSwapMsgsResponse): _225.QueryPoolBatchSwapMsgsResponseProtoMsg;
        };
        QueryPoolBatchSwapMsgResponse: {
            typeUrl: string;
            encode(message: _225.QueryPoolBatchSwapMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryPoolBatchSwapMsgResponse;
            fromPartial(object: Partial<_225.QueryPoolBatchSwapMsgResponse>): _225.QueryPoolBatchSwapMsgResponse;
            fromAmino(object: _225.QueryPoolBatchSwapMsgResponseAmino): _225.QueryPoolBatchSwapMsgResponse;
            toAmino(message: _225.QueryPoolBatchSwapMsgResponse): _225.QueryPoolBatchSwapMsgResponseAmino;
            fromAminoMsg(object: _225.QueryPoolBatchSwapMsgResponseAminoMsg): _225.QueryPoolBatchSwapMsgResponse;
            fromProtoMsg(message: _225.QueryPoolBatchSwapMsgResponseProtoMsg): _225.QueryPoolBatchSwapMsgResponse;
            toProto(message: _225.QueryPoolBatchSwapMsgResponse): Uint8Array;
            toProtoMsg(message: _225.QueryPoolBatchSwapMsgResponse): _225.QueryPoolBatchSwapMsgResponseProtoMsg;
        };
        QueryPoolBatchDepositMsgsRequest: {
            typeUrl: string;
            encode(message: _225.QueryPoolBatchDepositMsgsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryPoolBatchDepositMsgsRequest;
            fromPartial(object: Partial<_225.QueryPoolBatchDepositMsgsRequest>): _225.QueryPoolBatchDepositMsgsRequest;
            fromAmino(object: _225.QueryPoolBatchDepositMsgsRequestAmino): _225.QueryPoolBatchDepositMsgsRequest;
            toAmino(message: _225.QueryPoolBatchDepositMsgsRequest): _225.QueryPoolBatchDepositMsgsRequestAmino;
            fromAminoMsg(object: _225.QueryPoolBatchDepositMsgsRequestAminoMsg): _225.QueryPoolBatchDepositMsgsRequest;
            fromProtoMsg(message: _225.QueryPoolBatchDepositMsgsRequestProtoMsg): _225.QueryPoolBatchDepositMsgsRequest;
            toProto(message: _225.QueryPoolBatchDepositMsgsRequest): Uint8Array;
            toProtoMsg(message: _225.QueryPoolBatchDepositMsgsRequest): _225.QueryPoolBatchDepositMsgsRequestProtoMsg;
        };
        QueryPoolBatchDepositMsgRequest: {
            typeUrl: string;
            encode(message: _225.QueryPoolBatchDepositMsgRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryPoolBatchDepositMsgRequest;
            fromPartial(object: Partial<_225.QueryPoolBatchDepositMsgRequest>): _225.QueryPoolBatchDepositMsgRequest;
            fromAmino(object: _225.QueryPoolBatchDepositMsgRequestAmino): _225.QueryPoolBatchDepositMsgRequest;
            toAmino(message: _225.QueryPoolBatchDepositMsgRequest): _225.QueryPoolBatchDepositMsgRequestAmino;
            fromAminoMsg(object: _225.QueryPoolBatchDepositMsgRequestAminoMsg): _225.QueryPoolBatchDepositMsgRequest;
            fromProtoMsg(message: _225.QueryPoolBatchDepositMsgRequestProtoMsg): _225.QueryPoolBatchDepositMsgRequest;
            toProto(message: _225.QueryPoolBatchDepositMsgRequest): Uint8Array;
            toProtoMsg(message: _225.QueryPoolBatchDepositMsgRequest): _225.QueryPoolBatchDepositMsgRequestProtoMsg;
        };
        QueryPoolBatchDepositMsgsResponse: {
            typeUrl: string;
            encode(message: _225.QueryPoolBatchDepositMsgsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryPoolBatchDepositMsgsResponse;
            fromPartial(object: Partial<_225.QueryPoolBatchDepositMsgsResponse>): _225.QueryPoolBatchDepositMsgsResponse;
            fromAmino(object: _225.QueryPoolBatchDepositMsgsResponseAmino): _225.QueryPoolBatchDepositMsgsResponse;
            toAmino(message: _225.QueryPoolBatchDepositMsgsResponse): _225.QueryPoolBatchDepositMsgsResponseAmino;
            fromAminoMsg(object: _225.QueryPoolBatchDepositMsgsResponseAminoMsg): _225.QueryPoolBatchDepositMsgsResponse;
            fromProtoMsg(message: _225.QueryPoolBatchDepositMsgsResponseProtoMsg): _225.QueryPoolBatchDepositMsgsResponse;
            toProto(message: _225.QueryPoolBatchDepositMsgsResponse): Uint8Array;
            toProtoMsg(message: _225.QueryPoolBatchDepositMsgsResponse): _225.QueryPoolBatchDepositMsgsResponseProtoMsg;
        };
        QueryPoolBatchDepositMsgResponse: {
            typeUrl: string;
            encode(message: _225.QueryPoolBatchDepositMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryPoolBatchDepositMsgResponse;
            fromPartial(object: Partial<_225.QueryPoolBatchDepositMsgResponse>): _225.QueryPoolBatchDepositMsgResponse;
            fromAmino(object: _225.QueryPoolBatchDepositMsgResponseAmino): _225.QueryPoolBatchDepositMsgResponse;
            toAmino(message: _225.QueryPoolBatchDepositMsgResponse): _225.QueryPoolBatchDepositMsgResponseAmino;
            fromAminoMsg(object: _225.QueryPoolBatchDepositMsgResponseAminoMsg): _225.QueryPoolBatchDepositMsgResponse;
            fromProtoMsg(message: _225.QueryPoolBatchDepositMsgResponseProtoMsg): _225.QueryPoolBatchDepositMsgResponse;
            toProto(message: _225.QueryPoolBatchDepositMsgResponse): Uint8Array;
            toProtoMsg(message: _225.QueryPoolBatchDepositMsgResponse): _225.QueryPoolBatchDepositMsgResponseProtoMsg;
        };
        QueryPoolBatchWithdrawMsgsRequest: {
            typeUrl: string;
            encode(message: _225.QueryPoolBatchWithdrawMsgsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryPoolBatchWithdrawMsgsRequest;
            fromPartial(object: Partial<_225.QueryPoolBatchWithdrawMsgsRequest>): _225.QueryPoolBatchWithdrawMsgsRequest;
            fromAmino(object: _225.QueryPoolBatchWithdrawMsgsRequestAmino): _225.QueryPoolBatchWithdrawMsgsRequest;
            toAmino(message: _225.QueryPoolBatchWithdrawMsgsRequest): _225.QueryPoolBatchWithdrawMsgsRequestAmino;
            fromAminoMsg(object: _225.QueryPoolBatchWithdrawMsgsRequestAminoMsg): _225.QueryPoolBatchWithdrawMsgsRequest;
            fromProtoMsg(message: _225.QueryPoolBatchWithdrawMsgsRequestProtoMsg): _225.QueryPoolBatchWithdrawMsgsRequest;
            toProto(message: _225.QueryPoolBatchWithdrawMsgsRequest): Uint8Array;
            toProtoMsg(message: _225.QueryPoolBatchWithdrawMsgsRequest): _225.QueryPoolBatchWithdrawMsgsRequestProtoMsg;
        };
        QueryPoolBatchWithdrawMsgRequest: {
            typeUrl: string;
            encode(message: _225.QueryPoolBatchWithdrawMsgRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryPoolBatchWithdrawMsgRequest;
            fromPartial(object: Partial<_225.QueryPoolBatchWithdrawMsgRequest>): _225.QueryPoolBatchWithdrawMsgRequest;
            fromAmino(object: _225.QueryPoolBatchWithdrawMsgRequestAmino): _225.QueryPoolBatchWithdrawMsgRequest;
            toAmino(message: _225.QueryPoolBatchWithdrawMsgRequest): _225.QueryPoolBatchWithdrawMsgRequestAmino;
            fromAminoMsg(object: _225.QueryPoolBatchWithdrawMsgRequestAminoMsg): _225.QueryPoolBatchWithdrawMsgRequest;
            fromProtoMsg(message: _225.QueryPoolBatchWithdrawMsgRequestProtoMsg): _225.QueryPoolBatchWithdrawMsgRequest;
            toProto(message: _225.QueryPoolBatchWithdrawMsgRequest): Uint8Array;
            toProtoMsg(message: _225.QueryPoolBatchWithdrawMsgRequest): _225.QueryPoolBatchWithdrawMsgRequestProtoMsg;
        };
        QueryPoolBatchWithdrawMsgsResponse: {
            typeUrl: string;
            encode(message: _225.QueryPoolBatchWithdrawMsgsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryPoolBatchWithdrawMsgsResponse;
            fromPartial(object: Partial<_225.QueryPoolBatchWithdrawMsgsResponse>): _225.QueryPoolBatchWithdrawMsgsResponse;
            fromAmino(object: _225.QueryPoolBatchWithdrawMsgsResponseAmino): _225.QueryPoolBatchWithdrawMsgsResponse;
            toAmino(message: _225.QueryPoolBatchWithdrawMsgsResponse): _225.QueryPoolBatchWithdrawMsgsResponseAmino;
            fromAminoMsg(object: _225.QueryPoolBatchWithdrawMsgsResponseAminoMsg): _225.QueryPoolBatchWithdrawMsgsResponse;
            fromProtoMsg(message: _225.QueryPoolBatchWithdrawMsgsResponseProtoMsg): _225.QueryPoolBatchWithdrawMsgsResponse;
            toProto(message: _225.QueryPoolBatchWithdrawMsgsResponse): Uint8Array;
            toProtoMsg(message: _225.QueryPoolBatchWithdrawMsgsResponse): _225.QueryPoolBatchWithdrawMsgsResponseProtoMsg;
        };
        QueryPoolBatchWithdrawMsgResponse: {
            typeUrl: string;
            encode(message: _225.QueryPoolBatchWithdrawMsgResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _225.QueryPoolBatchWithdrawMsgResponse;
            fromPartial(object: Partial<_225.QueryPoolBatchWithdrawMsgResponse>): _225.QueryPoolBatchWithdrawMsgResponse;
            fromAmino(object: _225.QueryPoolBatchWithdrawMsgResponseAmino): _225.QueryPoolBatchWithdrawMsgResponse;
            toAmino(message: _225.QueryPoolBatchWithdrawMsgResponse): _225.QueryPoolBatchWithdrawMsgResponseAmino;
            fromAminoMsg(object: _225.QueryPoolBatchWithdrawMsgResponseAminoMsg): _225.QueryPoolBatchWithdrawMsgResponse;
            fromProtoMsg(message: _225.QueryPoolBatchWithdrawMsgResponseProtoMsg): _225.QueryPoolBatchWithdrawMsgResponse;
            toProto(message: _225.QueryPoolBatchWithdrawMsgResponse): Uint8Array;
            toProtoMsg(message: _225.QueryPoolBatchWithdrawMsgResponse): _225.QueryPoolBatchWithdrawMsgResponseProtoMsg;
        };
        WeightedAddress: {
            typeUrl: string;
            encode(message: _224.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _224.WeightedAddress;
            fromPartial(object: Partial<_224.WeightedAddress>): _224.WeightedAddress;
            fromAmino(object: _224.WeightedAddressAmino): _224.WeightedAddress;
            toAmino(message: _224.WeightedAddress): _224.WeightedAddressAmino;
            fromAminoMsg(object: _224.WeightedAddressAminoMsg): _224.WeightedAddress;
            fromProtoMsg(message: _224.WeightedAddressProtoMsg): _224.WeightedAddress;
            toProto(message: _224.WeightedAddress): Uint8Array;
            toProtoMsg(message: _224.WeightedAddress): _224.WeightedAddressProtoMsg;
        };
        PoolType: {
            typeUrl: string;
            encode(message: _224.PoolType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _224.PoolType;
            fromPartial(object: Partial<_224.PoolType>): _224.PoolType;
            fromAmino(object: _224.PoolTypeAmino): _224.PoolType;
            toAmino(message: _224.PoolType): _224.PoolTypeAmino;
            fromAminoMsg(object: _224.PoolTypeAminoMsg): _224.PoolType;
            fromProtoMsg(message: _224.PoolTypeProtoMsg): _224.PoolType;
            toProto(message: _224.PoolType): Uint8Array;
            toProtoMsg(message: _224.PoolType): _224.PoolTypeProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _224.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _224.Params;
            fromPartial(object: Partial<_224.Params>): _224.Params;
            fromAmino(object: _224.ParamsAmino): _224.Params;
            toAmino(message: _224.Params): _224.ParamsAmino;
            fromAminoMsg(object: _224.ParamsAminoMsg): _224.Params;
            fromProtoMsg(message: _224.ParamsProtoMsg): _224.Params;
            toProto(message: _224.Params): Uint8Array;
            toProtoMsg(message: _224.Params): _224.ParamsProtoMsg;
        };
        Pool: {
            typeUrl: string;
            encode(message: _224.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _224.Pool;
            fromPartial(object: Partial<_224.Pool>): _224.Pool;
            fromAmino(object: _224.PoolAmino): _224.Pool;
            toAmino(message: _224.Pool): _224.PoolAmino;
            fromAminoMsg(object: _224.PoolAminoMsg): _224.Pool;
            fromProtoMsg(message: _224.PoolProtoMsg): _224.Pool;
            toProto(message: _224.Pool): Uint8Array;
            toProtoMsg(message: _224.Pool): _224.PoolProtoMsg;
        };
        PoolMetadata: {
            typeUrl: string;
            encode(message: _224.PoolMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _224.PoolMetadata;
            fromPartial(object: Partial<_224.PoolMetadata>): _224.PoolMetadata;
            fromAmino(object: _224.PoolMetadataAmino): _224.PoolMetadata;
            toAmino(message: _224.PoolMetadata): _224.PoolMetadataAmino;
            fromAminoMsg(object: _224.PoolMetadataAminoMsg): _224.PoolMetadata;
            fromProtoMsg(message: _224.PoolMetadataProtoMsg): _224.PoolMetadata;
            toProto(message: _224.PoolMetadata): Uint8Array;
            toProtoMsg(message: _224.PoolMetadata): _224.PoolMetadataProtoMsg;
        };
        PoolBatch: {
            typeUrl: string;
            encode(message: _224.PoolBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _224.PoolBatch;
            fromPartial(object: Partial<_224.PoolBatch>): _224.PoolBatch;
            fromAmino(object: _224.PoolBatchAmino): _224.PoolBatch;
            toAmino(message: _224.PoolBatch): _224.PoolBatchAmino;
            fromAminoMsg(object: _224.PoolBatchAminoMsg): _224.PoolBatch;
            fromProtoMsg(message: _224.PoolBatchProtoMsg): _224.PoolBatch;
            toProto(message: _224.PoolBatch): Uint8Array;
            toProtoMsg(message: _224.PoolBatch): _224.PoolBatchProtoMsg;
        };
        DepositMsgState: {
            typeUrl: string;
            encode(message: _224.DepositMsgState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _224.DepositMsgState;
            fromPartial(object: Partial<_224.DepositMsgState>): _224.DepositMsgState;
            fromAmino(object: _224.DepositMsgStateAmino): _224.DepositMsgState;
            toAmino(message: _224.DepositMsgState): _224.DepositMsgStateAmino;
            fromAminoMsg(object: _224.DepositMsgStateAminoMsg): _224.DepositMsgState;
            fromProtoMsg(message: _224.DepositMsgStateProtoMsg): _224.DepositMsgState;
            toProto(message: _224.DepositMsgState): Uint8Array;
            toProtoMsg(message: _224.DepositMsgState): _224.DepositMsgStateProtoMsg;
        };
        WithdrawMsgState: {
            typeUrl: string;
            encode(message: _224.WithdrawMsgState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _224.WithdrawMsgState;
            fromPartial(object: Partial<_224.WithdrawMsgState>): _224.WithdrawMsgState;
            fromAmino(object: _224.WithdrawMsgStateAmino): _224.WithdrawMsgState;
            toAmino(message: _224.WithdrawMsgState): _224.WithdrawMsgStateAmino;
            fromAminoMsg(object: _224.WithdrawMsgStateAminoMsg): _224.WithdrawMsgState;
            fromProtoMsg(message: _224.WithdrawMsgStateProtoMsg): _224.WithdrawMsgState;
            toProto(message: _224.WithdrawMsgState): Uint8Array;
            toProtoMsg(message: _224.WithdrawMsgState): _224.WithdrawMsgStateProtoMsg;
        };
        SwapMsgState: {
            typeUrl: string;
            encode(message: _224.SwapMsgState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _224.SwapMsgState;
            fromPartial(object: Partial<_224.SwapMsgState>): _224.SwapMsgState;
            fromAmino(object: _224.SwapMsgStateAmino): _224.SwapMsgState;
            toAmino(message: _224.SwapMsgState): _224.SwapMsgStateAmino;
            fromAminoMsg(object: _224.SwapMsgStateAminoMsg): _224.SwapMsgState;
            fromProtoMsg(message: _224.SwapMsgStateProtoMsg): _224.SwapMsgState;
            toProto(message: _224.SwapMsgState): Uint8Array;
            toProtoMsg(message: _224.SwapMsgState): _224.SwapMsgStateProtoMsg;
        };
        PoolRecord: {
            typeUrl: string;
            encode(message: _223.PoolRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _223.PoolRecord;
            fromPartial(object: Partial<_223.PoolRecord>): _223.PoolRecord;
            fromAmino(object: _223.PoolRecordAmino): _223.PoolRecord;
            toAmino(message: _223.PoolRecord): _223.PoolRecordAmino;
            fromAminoMsg(object: _223.PoolRecordAminoMsg): _223.PoolRecord;
            fromProtoMsg(message: _223.PoolRecordProtoMsg): _223.PoolRecord;
            toProto(message: _223.PoolRecord): Uint8Array;
            toProtoMsg(message: _223.PoolRecord): _223.PoolRecordProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _223.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _223.GenesisState;
            fromPartial(object: Partial<_223.GenesisState>): _223.GenesisState;
            fromAmino(object: _223.GenesisStateAmino): _223.GenesisState;
            toAmino(message: _223.GenesisState): _223.GenesisStateAmino;
            fromAminoMsg(object: _223.GenesisStateAminoMsg): _223.GenesisState;
            fromProtoMsg(message: _223.GenesisStateProtoMsg): _223.GenesisState;
            toProto(message: _223.GenesisState): Uint8Array;
            toProtoMsg(message: _223.GenesisState): _223.GenesisStateProtoMsg;
        };
    };
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
            liquidity: {
                v1beta1: _501.MsgClientImpl;
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
            liquidity: {
                v1beta1: {
                    liquidityPools(request?: _225.QueryLiquidityPoolsRequest): Promise<_225.QueryLiquidityPoolsResponse>;
                    liquidityPool(request: _225.QueryLiquidityPoolRequest): Promise<_225.QueryLiquidityPoolResponse>;
                    liquidityPoolByPoolCoinDenom(request: _225.QueryLiquidityPoolByPoolCoinDenomRequest): Promise<_225.QueryLiquidityPoolResponse>;
                    liquidityPoolByReserveAcc(request: _225.QueryLiquidityPoolByReserveAccRequest): Promise<_225.QueryLiquidityPoolResponse>;
                    liquidityPoolBatch(request: _225.QueryLiquidityPoolBatchRequest): Promise<_225.QueryLiquidityPoolBatchResponse>;
                    poolBatchSwapMsgs(request: _225.QueryPoolBatchSwapMsgsRequest): Promise<_225.QueryPoolBatchSwapMsgsResponse>;
                    poolBatchSwapMsg(request: _225.QueryPoolBatchSwapMsgRequest): Promise<_225.QueryPoolBatchSwapMsgResponse>;
                    poolBatchDepositMsgs(request: _225.QueryPoolBatchDepositMsgsRequest): Promise<_225.QueryPoolBatchDepositMsgsResponse>;
                    poolBatchDepositMsg(request: _225.QueryPoolBatchDepositMsgRequest): Promise<_225.QueryPoolBatchDepositMsgResponse>;
                    poolBatchWithdrawMsgs(request: _225.QueryPoolBatchWithdrawMsgsRequest): Promise<_225.QueryPoolBatchWithdrawMsgsResponse>;
                    poolBatchWithdrawMsg(request: _225.QueryPoolBatchWithdrawMsgRequest): Promise<_225.QueryPoolBatchWithdrawMsgResponse>;
                    params(request?: _225.QueryParamsRequest): Promise<_225.QueryParamsResponse>;
                };
            };
        }>;
    };
}
