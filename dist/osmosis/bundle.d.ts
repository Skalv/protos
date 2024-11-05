import * as _231 from "./downtime-detector/v1beta1/downtime_duration";
import * as _232 from "./downtime-detector/v1beta1/genesis";
import * as _233 from "./downtime-detector/v1beta1/query";
import * as _234 from "./epochs/genesis";
import * as _235 from "./epochs/query";
import * as _236 from "./gamm/pool-models/balancer/balancerPool";
import * as _237 from "./gamm/v1beta1/genesis";
import * as _238 from "./gamm/v1beta1/query";
import * as _239 from "./gamm/v1beta1/tx";
import * as _240 from "./gamm/pool-models/balancer/tx/tx";
import * as _241 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _242 from "./gamm/pool-models/stableswap/tx";
import * as _243 from "./gamm/v2/query";
import * as _244 from "./ibc-rate-limit/v1beta1/params";
import * as _245 from "./ibc-rate-limit/v1beta1/query";
import * as _246 from "./incentives/gauge";
import * as _247 from "./incentives/genesis";
import * as _248 from "./incentives/params";
import * as _249 from "./incentives/query";
import * as _250 from "./incentives/tx";
import * as _251 from "./lockup/genesis";
import * as _252 from "./lockup/lock";
import * as _253 from "./lockup/params";
import * as _254 from "./lockup/query";
import * as _255 from "./lockup/tx";
import * as _256 from "./mint/v1beta1/genesis";
import * as _257 from "./mint/v1beta1/mint";
import * as _258 from "./mint/v1beta1/query";
import * as _259 from "./pool-incentives/v1beta1/genesis";
import * as _260 from "./pool-incentives/v1beta1/gov";
import * as _261 from "./pool-incentives/v1beta1/incentives";
import * as _262 from "./pool-incentives/v1beta1/query";
import * as _263 from "./protorev/v1beta1/genesis";
import * as _264 from "./protorev/v1beta1/gov";
import * as _265 from "./protorev/v1beta1/params";
import * as _266 from "./protorev/v1beta1/protorev";
import * as _267 from "./protorev/v1beta1/query";
import * as _268 from "./protorev/v1beta1/tx";
import * as _269 from "./sumtree/v1beta1/tree";
import * as _270 from "./superfluid/genesis";
import * as _271 from "./superfluid/params";
import * as _272 from "./superfluid/query";
import * as _273 from "./superfluid/superfluid";
import * as _274 from "./superfluid/tx";
import * as _275 from "./swaprouter/v1beta1/genesis";
import * as _276 from "./swaprouter/v1beta1/module_route";
import * as _277 from "./swaprouter/v1beta1/query";
import * as _278 from "./swaprouter/v1beta1/swap_route";
import * as _279 from "./swaprouter/v1beta1/tx";
import * as _280 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _281 from "./tokenfactory/v1beta1/genesis";
import * as _282 from "./tokenfactory/v1beta1/params";
import * as _283 from "./tokenfactory/v1beta1/query";
import * as _284 from "./tokenfactory/v1beta1/tx";
import * as _285 from "./twap/v1beta1/genesis";
import * as _286 from "./twap/v1beta1/query";
import * as _287 from "./twap/v1beta1/twap_record";
import * as _288 from "./txfees/v1beta1/feetoken";
import * as _289 from "./txfees/v1beta1/genesis";
import * as _290 from "./txfees/v1beta1/gov";
import * as _291 from "./txfees/v1beta1/query";
import * as _292 from "./valset-pref/v1beta1/query";
import * as _293 from "./valset-pref/v1beta1/state";
import * as _294 from "./valset-pref/v1beta1/tx";
import * as _523 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _524 from "./epochs/query.rpc.Query";
import * as _525 from "./gamm/v1beta1/query.rpc.Query";
import * as _526 from "./gamm/v2/query.rpc.Query";
import * as _527 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _528 from "./incentives/query.rpc.Query";
import * as _529 from "./lockup/query.rpc.Query";
import * as _530 from "./mint/v1beta1/query.rpc.Query";
import * as _531 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _532 from "./protorev/v1beta1/query.rpc.Query";
import * as _533 from "./superfluid/query.rpc.Query";
import * as _534 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _535 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _536 from "./twap/v1beta1/query.rpc.Query";
import * as _537 from "./txfees/v1beta1/query.rpc.Query";
import * as _538 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _539 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _540 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _541 from "./gamm/v1beta1/tx.rpc.msg";
import * as _542 from "./incentives/tx.rpc.msg";
import * as _543 from "./lockup/tx.rpc.msg";
import * as _544 from "./protorev/v1beta1/tx.rpc.msg";
import * as _545 from "./superfluid/tx.rpc.msg";
import * as _546 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _547 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _548 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _523.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _233.RecoveredSinceDowntimeOfLengthRequest): Promise<_233.RecoveredSinceDowntimeOfLengthResponse>;
            };
            RecoveredSinceDowntimeOfLengthRequest: {
                typeUrl: string;
                encode(message: _233.RecoveredSinceDowntimeOfLengthRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _233.RecoveredSinceDowntimeOfLengthRequest;
                fromPartial(object: Partial<_233.RecoveredSinceDowntimeOfLengthRequest>): _233.RecoveredSinceDowntimeOfLengthRequest;
                fromAmino(object: _233.RecoveredSinceDowntimeOfLengthRequestAmino): _233.RecoveredSinceDowntimeOfLengthRequest;
                toAmino(message: _233.RecoveredSinceDowntimeOfLengthRequest): _233.RecoveredSinceDowntimeOfLengthRequestAmino;
                fromAminoMsg(object: _233.RecoveredSinceDowntimeOfLengthRequestAminoMsg): _233.RecoveredSinceDowntimeOfLengthRequest;
                toAminoMsg(message: _233.RecoveredSinceDowntimeOfLengthRequest): _233.RecoveredSinceDowntimeOfLengthRequestAminoMsg;
                fromProtoMsg(message: _233.RecoveredSinceDowntimeOfLengthRequestProtoMsg): _233.RecoveredSinceDowntimeOfLengthRequest;
                toProto(message: _233.RecoveredSinceDowntimeOfLengthRequest): Uint8Array;
                toProtoMsg(message: _233.RecoveredSinceDowntimeOfLengthRequest): _233.RecoveredSinceDowntimeOfLengthRequestProtoMsg;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                typeUrl: string;
                encode(message: _233.RecoveredSinceDowntimeOfLengthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _233.RecoveredSinceDowntimeOfLengthResponse;
                fromPartial(object: Partial<_233.RecoveredSinceDowntimeOfLengthResponse>): _233.RecoveredSinceDowntimeOfLengthResponse;
                fromAmino(object: _233.RecoveredSinceDowntimeOfLengthResponseAmino): _233.RecoveredSinceDowntimeOfLengthResponse;
                toAmino(message: _233.RecoveredSinceDowntimeOfLengthResponse): _233.RecoveredSinceDowntimeOfLengthResponseAmino;
                fromAminoMsg(object: _233.RecoveredSinceDowntimeOfLengthResponseAminoMsg): _233.RecoveredSinceDowntimeOfLengthResponse;
                toAminoMsg(message: _233.RecoveredSinceDowntimeOfLengthResponse): _233.RecoveredSinceDowntimeOfLengthResponseAminoMsg;
                fromProtoMsg(message: _233.RecoveredSinceDowntimeOfLengthResponseProtoMsg): _233.RecoveredSinceDowntimeOfLengthResponse;
                toProto(message: _233.RecoveredSinceDowntimeOfLengthResponse): Uint8Array;
                toProtoMsg(message: _233.RecoveredSinceDowntimeOfLengthResponse): _233.RecoveredSinceDowntimeOfLengthResponseProtoMsg;
            };
            GenesisDowntimeEntry: {
                typeUrl: string;
                encode(message: _232.GenesisDowntimeEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _232.GenesisDowntimeEntry;
                fromPartial(object: Partial<_232.GenesisDowntimeEntry>): _232.GenesisDowntimeEntry;
                fromAmino(object: _232.GenesisDowntimeEntryAmino): _232.GenesisDowntimeEntry;
                toAmino(message: _232.GenesisDowntimeEntry): _232.GenesisDowntimeEntryAmino;
                fromAminoMsg(object: _232.GenesisDowntimeEntryAminoMsg): _232.GenesisDowntimeEntry;
                toAminoMsg(message: _232.GenesisDowntimeEntry): _232.GenesisDowntimeEntryAminoMsg;
                fromProtoMsg(message: _232.GenesisDowntimeEntryProtoMsg): _232.GenesisDowntimeEntry;
                toProto(message: _232.GenesisDowntimeEntry): Uint8Array;
                toProtoMsg(message: _232.GenesisDowntimeEntry): _232.GenesisDowntimeEntryProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _232.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _232.GenesisState;
                fromPartial(object: Partial<_232.GenesisState>): _232.GenesisState;
                fromAmino(object: _232.GenesisStateAmino): _232.GenesisState;
                toAmino(message: _232.GenesisState): _232.GenesisStateAmino;
                fromAminoMsg(object: _232.GenesisStateAminoMsg): _232.GenesisState;
                toAminoMsg(message: _232.GenesisState): _232.GenesisStateAminoMsg;
                fromProtoMsg(message: _232.GenesisStateProtoMsg): _232.GenesisState;
                toProto(message: _232.GenesisState): Uint8Array;
                toProtoMsg(message: _232.GenesisState): _232.GenesisStateProtoMsg;
            };
            downtimeFromJSON(object: any): _231.Downtime;
            downtimeToJSON(object: _231.Downtime): string;
            Downtime: typeof _231.Downtime;
            DowntimeSDKType: typeof _231.Downtime;
            DowntimeAmino: typeof _231.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _524.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _235.QueryEpochsInfoRequest): Promise<_235.QueryEpochsInfoResponse>;
                currentEpoch(request: _235.QueryCurrentEpochRequest): Promise<_235.QueryCurrentEpochResponse>;
            };
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _235.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _235.QueryEpochsInfoRequest;
                fromPartial(_: Partial<_235.QueryEpochsInfoRequest>): _235.QueryEpochsInfoRequest;
                fromAmino(_: _235.QueryEpochsInfoRequestAmino): _235.QueryEpochsInfoRequest;
                toAmino(_: _235.QueryEpochsInfoRequest): _235.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _235.QueryEpochsInfoRequestAminoMsg): _235.QueryEpochsInfoRequest;
                toAminoMsg(message: _235.QueryEpochsInfoRequest): _235.QueryEpochsInfoRequestAminoMsg;
                fromProtoMsg(message: _235.QueryEpochsInfoRequestProtoMsg): _235.QueryEpochsInfoRequest;
                toProto(message: _235.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _235.QueryEpochsInfoRequest): _235.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _235.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _235.QueryEpochsInfoResponse;
                fromPartial(object: Partial<_235.QueryEpochsInfoResponse>): _235.QueryEpochsInfoResponse;
                fromAmino(object: _235.QueryEpochsInfoResponseAmino): _235.QueryEpochsInfoResponse;
                toAmino(message: _235.QueryEpochsInfoResponse): _235.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _235.QueryEpochsInfoResponseAminoMsg): _235.QueryEpochsInfoResponse;
                toAminoMsg(message: _235.QueryEpochsInfoResponse): _235.QueryEpochsInfoResponseAminoMsg;
                fromProtoMsg(message: _235.QueryEpochsInfoResponseProtoMsg): _235.QueryEpochsInfoResponse;
                toProto(message: _235.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _235.QueryEpochsInfoResponse): _235.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _235.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _235.QueryCurrentEpochRequest;
                fromPartial(object: Partial<_235.QueryCurrentEpochRequest>): _235.QueryCurrentEpochRequest;
                fromAmino(object: _235.QueryCurrentEpochRequestAmino): _235.QueryCurrentEpochRequest;
                toAmino(message: _235.QueryCurrentEpochRequest): _235.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _235.QueryCurrentEpochRequestAminoMsg): _235.QueryCurrentEpochRequest;
                toAminoMsg(message: _235.QueryCurrentEpochRequest): _235.QueryCurrentEpochRequestAminoMsg;
                fromProtoMsg(message: _235.QueryCurrentEpochRequestProtoMsg): _235.QueryCurrentEpochRequest;
                toProto(message: _235.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _235.QueryCurrentEpochRequest): _235.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _235.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _235.QueryCurrentEpochResponse;
                fromPartial(object: Partial<_235.QueryCurrentEpochResponse>): _235.QueryCurrentEpochResponse;
                fromAmino(object: _235.QueryCurrentEpochResponseAmino): _235.QueryCurrentEpochResponse;
                toAmino(message: _235.QueryCurrentEpochResponse): _235.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _235.QueryCurrentEpochResponseAminoMsg): _235.QueryCurrentEpochResponse;
                toAminoMsg(message: _235.QueryCurrentEpochResponse): _235.QueryCurrentEpochResponseAminoMsg;
                fromProtoMsg(message: _235.QueryCurrentEpochResponseProtoMsg): _235.QueryCurrentEpochResponse;
                toProto(message: _235.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _235.QueryCurrentEpochResponse): _235.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _234.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _234.EpochInfo;
                fromPartial(object: Partial<_234.EpochInfo>): _234.EpochInfo;
                fromAmino(object: _234.EpochInfoAmino): _234.EpochInfo;
                toAmino(message: _234.EpochInfo): _234.EpochInfoAmino;
                fromAminoMsg(object: _234.EpochInfoAminoMsg): _234.EpochInfo;
                toAminoMsg(message: _234.EpochInfo): _234.EpochInfoAminoMsg;
                fromProtoMsg(message: _234.EpochInfoProtoMsg): _234.EpochInfo;
                toProto(message: _234.EpochInfo): Uint8Array;
                toProtoMsg(message: _234.EpochInfo): _234.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _234.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _234.GenesisState;
                fromPartial(object: Partial<_234.GenesisState>): _234.GenesisState;
                fromAmino(object: _234.GenesisStateAmino): _234.GenesisState;
                toAmino(message: _234.GenesisState): _234.GenesisStateAmino;
                fromAminoMsg(object: _234.GenesisStateAminoMsg): _234.GenesisState;
                toAminoMsg(message: _234.GenesisState): _234.GenesisStateAminoMsg;
                fromProtoMsg(message: _234.GenesisStateProtoMsg): _234.GenesisState;
                toProto(message: _234.GenesisState): Uint8Array;
                toProtoMsg(message: _234.GenesisState): _234.GenesisStateProtoMsg;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _541.MsgClientImpl;
            QueryClientImpl: typeof _525.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _238.QueryPoolsRequest): Promise<_238.QueryPoolsResponse>;
                numPools(request?: _238.QueryNumPoolsRequest): Promise<_238.QueryNumPoolsResponse>;
                totalLiquidity(request?: _238.QueryTotalLiquidityRequest): Promise<_238.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _238.QueryPoolsWithFilterRequest): Promise<_238.QueryPoolsWithFilterResponse>;
                pool(request: _238.QueryPoolRequest): Promise<_238.QueryPoolResponse>;
                poolType(request: _238.QueryPoolTypeRequest): Promise<_238.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _238.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_238.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _238.QueryCalcJoinPoolSharesRequest): Promise<_238.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _238.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_238.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _238.QueryPoolParamsRequest): Promise<_238.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _238.QueryTotalPoolLiquidityRequest): Promise<_238.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _238.QueryTotalSharesRequest): Promise<_238.QueryTotalSharesResponse>;
                spotPrice(request: _238.QuerySpotPriceRequest): Promise<_238.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _238.QuerySwapExactAmountInRequest): Promise<_238.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _238.QuerySwapExactAmountOutRequest): Promise<_238.QuerySwapExactAmountOutResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _239.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _239.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _239.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _239.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _239.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _239.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _239.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _239.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _239.MsgJoinPool): {
                        typeUrl: string;
                        value: _239.MsgJoinPool;
                    };
                    exitPool(value: _239.MsgExitPool): {
                        typeUrl: string;
                        value: _239.MsgExitPool;
                    };
                    swapExactAmountIn(value: _239.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _239.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _239.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _239.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _239.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _239.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _239.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _239.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _239.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _239.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _239.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _239.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _239.MsgJoinPool): {
                        typeUrl: string;
                        value: _239.MsgJoinPool;
                    };
                    exitPool(value: _239.MsgExitPool): {
                        typeUrl: string;
                        value: _239.MsgExitPool;
                    };
                    swapExactAmountIn(value: _239.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _239.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _239.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _239.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _239.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _239.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _239.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _239.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _239.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _239.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _239.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _239.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _239.MsgJoinPool) => _239.MsgJoinPoolAmino;
                    fromAmino: (object: _239.MsgJoinPoolAmino) => _239.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _239.MsgExitPool) => _239.MsgExitPoolAmino;
                    fromAmino: (object: _239.MsgExitPoolAmino) => _239.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _239.MsgSwapExactAmountIn) => _239.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _239.MsgSwapExactAmountInAmino) => _239.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _239.MsgSwapExactAmountOut) => _239.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _239.MsgSwapExactAmountOutAmino) => _239.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _239.MsgJoinSwapExternAmountIn) => _239.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _239.MsgJoinSwapExternAmountInAmino) => _239.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _239.MsgJoinSwapShareAmountOut) => _239.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _239.MsgJoinSwapShareAmountOutAmino) => _239.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _239.MsgExitSwapExternAmountOut) => _239.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _239.MsgExitSwapExternAmountOutAmino) => _239.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _239.MsgExitSwapShareAmountIn) => _239.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _239.MsgExitSwapShareAmountInAmino) => _239.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                typeUrl: string;
                encode(message: _239.MsgJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgJoinPool;
                fromPartial(object: Partial<_239.MsgJoinPool>): _239.MsgJoinPool;
                fromAmino(object: _239.MsgJoinPoolAmino): _239.MsgJoinPool;
                toAmino(message: _239.MsgJoinPool): _239.MsgJoinPoolAmino;
                fromAminoMsg(object: _239.MsgJoinPoolAminoMsg): _239.MsgJoinPool;
                toAminoMsg(message: _239.MsgJoinPool): _239.MsgJoinPoolAminoMsg;
                fromProtoMsg(message: _239.MsgJoinPoolProtoMsg): _239.MsgJoinPool;
                toProto(message: _239.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _239.MsgJoinPool): _239.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                typeUrl: string;
                encode(message: _239.MsgJoinPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgJoinPoolResponse;
                fromPartial(object: Partial<_239.MsgJoinPoolResponse>): _239.MsgJoinPoolResponse;
                fromAmino(object: _239.MsgJoinPoolResponseAmino): _239.MsgJoinPoolResponse;
                toAmino(message: _239.MsgJoinPoolResponse): _239.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _239.MsgJoinPoolResponseAminoMsg): _239.MsgJoinPoolResponse;
                toAminoMsg(message: _239.MsgJoinPoolResponse): _239.MsgJoinPoolResponseAminoMsg;
                fromProtoMsg(message: _239.MsgJoinPoolResponseProtoMsg): _239.MsgJoinPoolResponse;
                toProto(message: _239.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _239.MsgJoinPoolResponse): _239.MsgJoinPoolResponseProtoMsg;
            };
            MsgExitPool: {
                typeUrl: string;
                encode(message: _239.MsgExitPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgExitPool;
                fromPartial(object: Partial<_239.MsgExitPool>): _239.MsgExitPool;
                fromAmino(object: _239.MsgExitPoolAmino): _239.MsgExitPool;
                toAmino(message: _239.MsgExitPool): _239.MsgExitPoolAmino;
                fromAminoMsg(object: _239.MsgExitPoolAminoMsg): _239.MsgExitPool;
                toAminoMsg(message: _239.MsgExitPool): _239.MsgExitPoolAminoMsg;
                fromProtoMsg(message: _239.MsgExitPoolProtoMsg): _239.MsgExitPool;
                toProto(message: _239.MsgExitPool): Uint8Array;
                toProtoMsg(message: _239.MsgExitPool): _239.MsgExitPoolProtoMsg;
            };
            MsgExitPoolResponse: {
                typeUrl: string;
                encode(message: _239.MsgExitPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgExitPoolResponse;
                fromPartial(object: Partial<_239.MsgExitPoolResponse>): _239.MsgExitPoolResponse;
                fromAmino(object: _239.MsgExitPoolResponseAmino): _239.MsgExitPoolResponse;
                toAmino(message: _239.MsgExitPoolResponse): _239.MsgExitPoolResponseAmino;
                fromAminoMsg(object: _239.MsgExitPoolResponseAminoMsg): _239.MsgExitPoolResponse;
                toAminoMsg(message: _239.MsgExitPoolResponse): _239.MsgExitPoolResponseAminoMsg;
                fromProtoMsg(message: _239.MsgExitPoolResponseProtoMsg): _239.MsgExitPoolResponse;
                toProto(message: _239.MsgExitPoolResponse): Uint8Array;
                toProtoMsg(message: _239.MsgExitPoolResponse): _239.MsgExitPoolResponseProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _239.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.SwapAmountInRoute;
                fromPartial(object: Partial<_239.SwapAmountInRoute>): _239.SwapAmountInRoute;
                fromAmino(object: _239.SwapAmountInRouteAmino): _239.SwapAmountInRoute;
                toAmino(message: _239.SwapAmountInRoute): _239.SwapAmountInRouteAmino;
                fromAminoMsg(object: _239.SwapAmountInRouteAminoMsg): _239.SwapAmountInRoute;
                toAminoMsg(message: _239.SwapAmountInRoute): _239.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _239.SwapAmountInRouteProtoMsg): _239.SwapAmountInRoute;
                toProto(message: _239.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _239.SwapAmountInRoute): _239.SwapAmountInRouteProtoMsg;
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _239.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_239.MsgSwapExactAmountIn>): _239.MsgSwapExactAmountIn;
                fromAmino(object: _239.MsgSwapExactAmountInAmino): _239.MsgSwapExactAmountIn;
                toAmino(message: _239.MsgSwapExactAmountIn): _239.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _239.MsgSwapExactAmountInAminoMsg): _239.MsgSwapExactAmountIn;
                toAminoMsg(message: _239.MsgSwapExactAmountIn): _239.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _239.MsgSwapExactAmountInProtoMsg): _239.MsgSwapExactAmountIn;
                toProto(message: _239.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _239.MsgSwapExactAmountIn): _239.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _239.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_239.MsgSwapExactAmountInResponse>): _239.MsgSwapExactAmountInResponse;
                fromAmino(object: _239.MsgSwapExactAmountInResponseAmino): _239.MsgSwapExactAmountInResponse;
                toAmino(message: _239.MsgSwapExactAmountInResponse): _239.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _239.MsgSwapExactAmountInResponseAminoMsg): _239.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _239.MsgSwapExactAmountInResponse): _239.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _239.MsgSwapExactAmountInResponseProtoMsg): _239.MsgSwapExactAmountInResponse;
                toProto(message: _239.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _239.MsgSwapExactAmountInResponse): _239.MsgSwapExactAmountInResponseProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _239.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.SwapAmountOutRoute;
                fromPartial(object: Partial<_239.SwapAmountOutRoute>): _239.SwapAmountOutRoute;
                fromAmino(object: _239.SwapAmountOutRouteAmino): _239.SwapAmountOutRoute;
                toAmino(message: _239.SwapAmountOutRoute): _239.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _239.SwapAmountOutRouteAminoMsg): _239.SwapAmountOutRoute;
                toAminoMsg(message: _239.SwapAmountOutRoute): _239.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _239.SwapAmountOutRouteProtoMsg): _239.SwapAmountOutRoute;
                toProto(message: _239.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _239.SwapAmountOutRoute): _239.SwapAmountOutRouteProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _239.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_239.MsgSwapExactAmountOut>): _239.MsgSwapExactAmountOut;
                fromAmino(object: _239.MsgSwapExactAmountOutAmino): _239.MsgSwapExactAmountOut;
                toAmino(message: _239.MsgSwapExactAmountOut): _239.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _239.MsgSwapExactAmountOutAminoMsg): _239.MsgSwapExactAmountOut;
                toAminoMsg(message: _239.MsgSwapExactAmountOut): _239.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _239.MsgSwapExactAmountOutProtoMsg): _239.MsgSwapExactAmountOut;
                toProto(message: _239.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _239.MsgSwapExactAmountOut): _239.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _239.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_239.MsgSwapExactAmountOutResponse>): _239.MsgSwapExactAmountOutResponse;
                fromAmino(object: _239.MsgSwapExactAmountOutResponseAmino): _239.MsgSwapExactAmountOutResponse;
                toAmino(message: _239.MsgSwapExactAmountOutResponse): _239.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _239.MsgSwapExactAmountOutResponseAminoMsg): _239.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _239.MsgSwapExactAmountOutResponse): _239.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _239.MsgSwapExactAmountOutResponseProtoMsg): _239.MsgSwapExactAmountOutResponse;
                toProto(message: _239.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _239.MsgSwapExactAmountOutResponse): _239.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgJoinSwapExternAmountIn: {
                typeUrl: string;
                encode(message: _239.MsgJoinSwapExternAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgJoinSwapExternAmountIn;
                fromPartial(object: Partial<_239.MsgJoinSwapExternAmountIn>): _239.MsgJoinSwapExternAmountIn;
                fromAmino(object: _239.MsgJoinSwapExternAmountInAmino): _239.MsgJoinSwapExternAmountIn;
                toAmino(message: _239.MsgJoinSwapExternAmountIn): _239.MsgJoinSwapExternAmountInAmino;
                fromAminoMsg(object: _239.MsgJoinSwapExternAmountInAminoMsg): _239.MsgJoinSwapExternAmountIn;
                toAminoMsg(message: _239.MsgJoinSwapExternAmountIn): _239.MsgJoinSwapExternAmountInAminoMsg;
                fromProtoMsg(message: _239.MsgJoinSwapExternAmountInProtoMsg): _239.MsgJoinSwapExternAmountIn;
                toProto(message: _239.MsgJoinSwapExternAmountIn): Uint8Array;
                toProtoMsg(message: _239.MsgJoinSwapExternAmountIn): _239.MsgJoinSwapExternAmountInProtoMsg;
            };
            MsgJoinSwapExternAmountInResponse: {
                typeUrl: string;
                encode(message: _239.MsgJoinSwapExternAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgJoinSwapExternAmountInResponse;
                fromPartial(object: Partial<_239.MsgJoinSwapExternAmountInResponse>): _239.MsgJoinSwapExternAmountInResponse;
                fromAmino(object: _239.MsgJoinSwapExternAmountInResponseAmino): _239.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _239.MsgJoinSwapExternAmountInResponse): _239.MsgJoinSwapExternAmountInResponseAmino;
                fromAminoMsg(object: _239.MsgJoinSwapExternAmountInResponseAminoMsg): _239.MsgJoinSwapExternAmountInResponse;
                toAminoMsg(message: _239.MsgJoinSwapExternAmountInResponse): _239.MsgJoinSwapExternAmountInResponseAminoMsg;
                fromProtoMsg(message: _239.MsgJoinSwapExternAmountInResponseProtoMsg): _239.MsgJoinSwapExternAmountInResponse;
                toProto(message: _239.MsgJoinSwapExternAmountInResponse): Uint8Array;
                toProtoMsg(message: _239.MsgJoinSwapExternAmountInResponse): _239.MsgJoinSwapExternAmountInResponseProtoMsg;
            };
            MsgJoinSwapShareAmountOut: {
                typeUrl: string;
                encode(message: _239.MsgJoinSwapShareAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgJoinSwapShareAmountOut;
                fromPartial(object: Partial<_239.MsgJoinSwapShareAmountOut>): _239.MsgJoinSwapShareAmountOut;
                fromAmino(object: _239.MsgJoinSwapShareAmountOutAmino): _239.MsgJoinSwapShareAmountOut;
                toAmino(message: _239.MsgJoinSwapShareAmountOut): _239.MsgJoinSwapShareAmountOutAmino;
                fromAminoMsg(object: _239.MsgJoinSwapShareAmountOutAminoMsg): _239.MsgJoinSwapShareAmountOut;
                toAminoMsg(message: _239.MsgJoinSwapShareAmountOut): _239.MsgJoinSwapShareAmountOutAminoMsg;
                fromProtoMsg(message: _239.MsgJoinSwapShareAmountOutProtoMsg): _239.MsgJoinSwapShareAmountOut;
                toProto(message: _239.MsgJoinSwapShareAmountOut): Uint8Array;
                toProtoMsg(message: _239.MsgJoinSwapShareAmountOut): _239.MsgJoinSwapShareAmountOutProtoMsg;
            };
            MsgJoinSwapShareAmountOutResponse: {
                typeUrl: string;
                encode(message: _239.MsgJoinSwapShareAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgJoinSwapShareAmountOutResponse;
                fromPartial(object: Partial<_239.MsgJoinSwapShareAmountOutResponse>): _239.MsgJoinSwapShareAmountOutResponse;
                fromAmino(object: _239.MsgJoinSwapShareAmountOutResponseAmino): _239.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _239.MsgJoinSwapShareAmountOutResponse): _239.MsgJoinSwapShareAmountOutResponseAmino;
                fromAminoMsg(object: _239.MsgJoinSwapShareAmountOutResponseAminoMsg): _239.MsgJoinSwapShareAmountOutResponse;
                toAminoMsg(message: _239.MsgJoinSwapShareAmountOutResponse): _239.MsgJoinSwapShareAmountOutResponseAminoMsg;
                fromProtoMsg(message: _239.MsgJoinSwapShareAmountOutResponseProtoMsg): _239.MsgJoinSwapShareAmountOutResponse;
                toProto(message: _239.MsgJoinSwapShareAmountOutResponse): Uint8Array;
                toProtoMsg(message: _239.MsgJoinSwapShareAmountOutResponse): _239.MsgJoinSwapShareAmountOutResponseProtoMsg;
            };
            MsgExitSwapShareAmountIn: {
                typeUrl: string;
                encode(message: _239.MsgExitSwapShareAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgExitSwapShareAmountIn;
                fromPartial(object: Partial<_239.MsgExitSwapShareAmountIn>): _239.MsgExitSwapShareAmountIn;
                fromAmino(object: _239.MsgExitSwapShareAmountInAmino): _239.MsgExitSwapShareAmountIn;
                toAmino(message: _239.MsgExitSwapShareAmountIn): _239.MsgExitSwapShareAmountInAmino;
                fromAminoMsg(object: _239.MsgExitSwapShareAmountInAminoMsg): _239.MsgExitSwapShareAmountIn;
                toAminoMsg(message: _239.MsgExitSwapShareAmountIn): _239.MsgExitSwapShareAmountInAminoMsg;
                fromProtoMsg(message: _239.MsgExitSwapShareAmountInProtoMsg): _239.MsgExitSwapShareAmountIn;
                toProto(message: _239.MsgExitSwapShareAmountIn): Uint8Array;
                toProtoMsg(message: _239.MsgExitSwapShareAmountIn): _239.MsgExitSwapShareAmountInProtoMsg;
            };
            MsgExitSwapShareAmountInResponse: {
                typeUrl: string;
                encode(message: _239.MsgExitSwapShareAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgExitSwapShareAmountInResponse;
                fromPartial(object: Partial<_239.MsgExitSwapShareAmountInResponse>): _239.MsgExitSwapShareAmountInResponse;
                fromAmino(object: _239.MsgExitSwapShareAmountInResponseAmino): _239.MsgExitSwapShareAmountInResponse;
                toAmino(message: _239.MsgExitSwapShareAmountInResponse): _239.MsgExitSwapShareAmountInResponseAmino;
                fromAminoMsg(object: _239.MsgExitSwapShareAmountInResponseAminoMsg): _239.MsgExitSwapShareAmountInResponse;
                toAminoMsg(message: _239.MsgExitSwapShareAmountInResponse): _239.MsgExitSwapShareAmountInResponseAminoMsg;
                fromProtoMsg(message: _239.MsgExitSwapShareAmountInResponseProtoMsg): _239.MsgExitSwapShareAmountInResponse;
                toProto(message: _239.MsgExitSwapShareAmountInResponse): Uint8Array;
                toProtoMsg(message: _239.MsgExitSwapShareAmountInResponse): _239.MsgExitSwapShareAmountInResponseProtoMsg;
            };
            MsgExitSwapExternAmountOut: {
                typeUrl: string;
                encode(message: _239.MsgExitSwapExternAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgExitSwapExternAmountOut;
                fromPartial(object: Partial<_239.MsgExitSwapExternAmountOut>): _239.MsgExitSwapExternAmountOut;
                fromAmino(object: _239.MsgExitSwapExternAmountOutAmino): _239.MsgExitSwapExternAmountOut;
                toAmino(message: _239.MsgExitSwapExternAmountOut): _239.MsgExitSwapExternAmountOutAmino;
                fromAminoMsg(object: _239.MsgExitSwapExternAmountOutAminoMsg): _239.MsgExitSwapExternAmountOut;
                toAminoMsg(message: _239.MsgExitSwapExternAmountOut): _239.MsgExitSwapExternAmountOutAminoMsg;
                fromProtoMsg(message: _239.MsgExitSwapExternAmountOutProtoMsg): _239.MsgExitSwapExternAmountOut;
                toProto(message: _239.MsgExitSwapExternAmountOut): Uint8Array;
                toProtoMsg(message: _239.MsgExitSwapExternAmountOut): _239.MsgExitSwapExternAmountOutProtoMsg;
            };
            MsgExitSwapExternAmountOutResponse: {
                typeUrl: string;
                encode(message: _239.MsgExitSwapExternAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _239.MsgExitSwapExternAmountOutResponse;
                fromPartial(object: Partial<_239.MsgExitSwapExternAmountOutResponse>): _239.MsgExitSwapExternAmountOutResponse;
                fromAmino(object: _239.MsgExitSwapExternAmountOutResponseAmino): _239.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _239.MsgExitSwapExternAmountOutResponse): _239.MsgExitSwapExternAmountOutResponseAmino;
                fromAminoMsg(object: _239.MsgExitSwapExternAmountOutResponseAminoMsg): _239.MsgExitSwapExternAmountOutResponse;
                toAminoMsg(message: _239.MsgExitSwapExternAmountOutResponse): _239.MsgExitSwapExternAmountOutResponseAminoMsg;
                fromProtoMsg(message: _239.MsgExitSwapExternAmountOutResponseProtoMsg): _239.MsgExitSwapExternAmountOutResponse;
                toProto(message: _239.MsgExitSwapExternAmountOutResponse): Uint8Array;
                toProtoMsg(message: _239.MsgExitSwapExternAmountOutResponse): _239.MsgExitSwapExternAmountOutResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _238.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryPoolRequest;
                fromPartial(object: Partial<_238.QueryPoolRequest>): _238.QueryPoolRequest;
                fromAmino(object: _238.QueryPoolRequestAmino): _238.QueryPoolRequest;
                toAmino(message: _238.QueryPoolRequest): _238.QueryPoolRequestAmino;
                fromAminoMsg(object: _238.QueryPoolRequestAminoMsg): _238.QueryPoolRequest;
                toAminoMsg(message: _238.QueryPoolRequest): _238.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _238.QueryPoolRequestProtoMsg): _238.QueryPoolRequest;
                toProto(message: _238.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _238.QueryPoolRequest): _238.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _238.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryPoolResponse;
                fromPartial(object: Partial<_238.QueryPoolResponse>): _238.QueryPoolResponse;
                fromAmino(object: _238.QueryPoolResponseAmino): _238.QueryPoolResponse;
                toAmino(message: _238.QueryPoolResponse): _238.QueryPoolResponseAmino;
                fromAminoMsg(object: _238.QueryPoolResponseAminoMsg): _238.QueryPoolResponse;
                toAminoMsg(message: _238.QueryPoolResponse): _238.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _238.QueryPoolResponseProtoMsg): _238.QueryPoolResponse;
                toProto(message: _238.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _238.QueryPoolResponse): _238.QueryPoolResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _238.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryPoolsRequest;
                fromPartial(object: Partial<_238.QueryPoolsRequest>): _238.QueryPoolsRequest;
                fromAmino(object: _238.QueryPoolsRequestAmino): _238.QueryPoolsRequest;
                toAmino(message: _238.QueryPoolsRequest): _238.QueryPoolsRequestAmino;
                fromAminoMsg(object: _238.QueryPoolsRequestAminoMsg): _238.QueryPoolsRequest;
                toAminoMsg(message: _238.QueryPoolsRequest): _238.QueryPoolsRequestAminoMsg;
                fromProtoMsg(message: _238.QueryPoolsRequestProtoMsg): _238.QueryPoolsRequest;
                toProto(message: _238.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _238.QueryPoolsRequest): _238.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _238.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryPoolsResponse;
                fromPartial(object: Partial<_238.QueryPoolsResponse>): _238.QueryPoolsResponse;
                fromAmino(object: _238.QueryPoolsResponseAmino): _238.QueryPoolsResponse;
                toAmino(message: _238.QueryPoolsResponse): _238.QueryPoolsResponseAmino;
                fromAminoMsg(object: _238.QueryPoolsResponseAminoMsg): _238.QueryPoolsResponse;
                toAminoMsg(message: _238.QueryPoolsResponse): _238.QueryPoolsResponseAminoMsg;
                fromProtoMsg(message: _238.QueryPoolsResponseProtoMsg): _238.QueryPoolsResponse;
                toProto(message: _238.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _238.QueryPoolsResponse): _238.QueryPoolsResponseProtoMsg;
            };
            QueryNumPoolsRequest: {
                typeUrl: string;
                encode(_: _238.QueryNumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryNumPoolsRequest;
                fromPartial(_: Partial<_238.QueryNumPoolsRequest>): _238.QueryNumPoolsRequest;
                fromAmino(_: _238.QueryNumPoolsRequestAmino): _238.QueryNumPoolsRequest;
                toAmino(_: _238.QueryNumPoolsRequest): _238.QueryNumPoolsRequestAmino;
                fromAminoMsg(object: _238.QueryNumPoolsRequestAminoMsg): _238.QueryNumPoolsRequest;
                toAminoMsg(message: _238.QueryNumPoolsRequest): _238.QueryNumPoolsRequestAminoMsg;
                fromProtoMsg(message: _238.QueryNumPoolsRequestProtoMsg): _238.QueryNumPoolsRequest;
                toProto(message: _238.QueryNumPoolsRequest): Uint8Array;
                toProtoMsg(message: _238.QueryNumPoolsRequest): _238.QueryNumPoolsRequestProtoMsg;
            };
            QueryNumPoolsResponse: {
                typeUrl: string;
                encode(message: _238.QueryNumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryNumPoolsResponse;
                fromPartial(object: Partial<_238.QueryNumPoolsResponse>): _238.QueryNumPoolsResponse;
                fromAmino(object: _238.QueryNumPoolsResponseAmino): _238.QueryNumPoolsResponse;
                toAmino(message: _238.QueryNumPoolsResponse): _238.QueryNumPoolsResponseAmino;
                fromAminoMsg(object: _238.QueryNumPoolsResponseAminoMsg): _238.QueryNumPoolsResponse;
                toAminoMsg(message: _238.QueryNumPoolsResponse): _238.QueryNumPoolsResponseAminoMsg;
                fromProtoMsg(message: _238.QueryNumPoolsResponseProtoMsg): _238.QueryNumPoolsResponse;
                toProto(message: _238.QueryNumPoolsResponse): Uint8Array;
                toProtoMsg(message: _238.QueryNumPoolsResponse): _238.QueryNumPoolsResponseProtoMsg;
            };
            QueryPoolTypeRequest: {
                typeUrl: string;
                encode(message: _238.QueryPoolTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryPoolTypeRequest;
                fromPartial(object: Partial<_238.QueryPoolTypeRequest>): _238.QueryPoolTypeRequest;
                fromAmino(object: _238.QueryPoolTypeRequestAmino): _238.QueryPoolTypeRequest;
                toAmino(message: _238.QueryPoolTypeRequest): _238.QueryPoolTypeRequestAmino;
                fromAminoMsg(object: _238.QueryPoolTypeRequestAminoMsg): _238.QueryPoolTypeRequest;
                toAminoMsg(message: _238.QueryPoolTypeRequest): _238.QueryPoolTypeRequestAminoMsg;
                fromProtoMsg(message: _238.QueryPoolTypeRequestProtoMsg): _238.QueryPoolTypeRequest;
                toProto(message: _238.QueryPoolTypeRequest): Uint8Array;
                toProtoMsg(message: _238.QueryPoolTypeRequest): _238.QueryPoolTypeRequestProtoMsg;
            };
            QueryPoolTypeResponse: {
                typeUrl: string;
                encode(message: _238.QueryPoolTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryPoolTypeResponse;
                fromPartial(object: Partial<_238.QueryPoolTypeResponse>): _238.QueryPoolTypeResponse;
                fromAmino(object: _238.QueryPoolTypeResponseAmino): _238.QueryPoolTypeResponse;
                toAmino(message: _238.QueryPoolTypeResponse): _238.QueryPoolTypeResponseAmino;
                fromAminoMsg(object: _238.QueryPoolTypeResponseAminoMsg): _238.QueryPoolTypeResponse;
                toAminoMsg(message: _238.QueryPoolTypeResponse): _238.QueryPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _238.QueryPoolTypeResponseProtoMsg): _238.QueryPoolTypeResponse;
                toProto(message: _238.QueryPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _238.QueryPoolTypeResponse): _238.QueryPoolTypeResponseProtoMsg;
            };
            QueryCalcJoinPoolSharesRequest: {
                typeUrl: string;
                encode(message: _238.QueryCalcJoinPoolSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryCalcJoinPoolSharesRequest;
                fromPartial(object: Partial<_238.QueryCalcJoinPoolSharesRequest>): _238.QueryCalcJoinPoolSharesRequest;
                fromAmino(object: _238.QueryCalcJoinPoolSharesRequestAmino): _238.QueryCalcJoinPoolSharesRequest;
                toAmino(message: _238.QueryCalcJoinPoolSharesRequest): _238.QueryCalcJoinPoolSharesRequestAmino;
                fromAminoMsg(object: _238.QueryCalcJoinPoolSharesRequestAminoMsg): _238.QueryCalcJoinPoolSharesRequest;
                toAminoMsg(message: _238.QueryCalcJoinPoolSharesRequest): _238.QueryCalcJoinPoolSharesRequestAminoMsg;
                fromProtoMsg(message: _238.QueryCalcJoinPoolSharesRequestProtoMsg): _238.QueryCalcJoinPoolSharesRequest;
                toProto(message: _238.QueryCalcJoinPoolSharesRequest): Uint8Array;
                toProtoMsg(message: _238.QueryCalcJoinPoolSharesRequest): _238.QueryCalcJoinPoolSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolSharesResponse: {
                typeUrl: string;
                encode(message: _238.QueryCalcJoinPoolSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryCalcJoinPoolSharesResponse;
                fromPartial(object: Partial<_238.QueryCalcJoinPoolSharesResponse>): _238.QueryCalcJoinPoolSharesResponse;
                fromAmino(object: _238.QueryCalcJoinPoolSharesResponseAmino): _238.QueryCalcJoinPoolSharesResponse;
                toAmino(message: _238.QueryCalcJoinPoolSharesResponse): _238.QueryCalcJoinPoolSharesResponseAmino;
                fromAminoMsg(object: _238.QueryCalcJoinPoolSharesResponseAminoMsg): _238.QueryCalcJoinPoolSharesResponse;
                toAminoMsg(message: _238.QueryCalcJoinPoolSharesResponse): _238.QueryCalcJoinPoolSharesResponseAminoMsg;
                fromProtoMsg(message: _238.QueryCalcJoinPoolSharesResponseProtoMsg): _238.QueryCalcJoinPoolSharesResponse;
                toProto(message: _238.QueryCalcJoinPoolSharesResponse): Uint8Array;
                toProtoMsg(message: _238.QueryCalcJoinPoolSharesResponse): _238.QueryCalcJoinPoolSharesResponseProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                typeUrl: string;
                encode(message: _238.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryCalcExitPoolCoinsFromSharesRequest;
                fromPartial(object: Partial<_238.QueryCalcExitPoolCoinsFromSharesRequest>): _238.QueryCalcExitPoolCoinsFromSharesRequest;
                fromAmino(object: _238.QueryCalcExitPoolCoinsFromSharesRequestAmino): _238.QueryCalcExitPoolCoinsFromSharesRequest;
                toAmino(message: _238.QueryCalcExitPoolCoinsFromSharesRequest): _238.QueryCalcExitPoolCoinsFromSharesRequestAmino;
                fromAminoMsg(object: _238.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): _238.QueryCalcExitPoolCoinsFromSharesRequest;
                toAminoMsg(message: _238.QueryCalcExitPoolCoinsFromSharesRequest): _238.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg;
                fromProtoMsg(message: _238.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): _238.QueryCalcExitPoolCoinsFromSharesRequest;
                toProto(message: _238.QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array;
                toProtoMsg(message: _238.QueryCalcExitPoolCoinsFromSharesRequest): _238.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                typeUrl: string;
                encode(message: _238.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryCalcExitPoolCoinsFromSharesResponse;
                fromPartial(object: Partial<_238.QueryCalcExitPoolCoinsFromSharesResponse>): _238.QueryCalcExitPoolCoinsFromSharesResponse;
                fromAmino(object: _238.QueryCalcExitPoolCoinsFromSharesResponseAmino): _238.QueryCalcExitPoolCoinsFromSharesResponse;
                toAmino(message: _238.QueryCalcExitPoolCoinsFromSharesResponse): _238.QueryCalcExitPoolCoinsFromSharesResponseAmino;
                fromAminoMsg(object: _238.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): _238.QueryCalcExitPoolCoinsFromSharesResponse;
                toAminoMsg(message: _238.QueryCalcExitPoolCoinsFromSharesResponse): _238.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg;
                fromProtoMsg(message: _238.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): _238.QueryCalcExitPoolCoinsFromSharesResponse;
                toProto(message: _238.QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array;
                toProtoMsg(message: _238.QueryCalcExitPoolCoinsFromSharesResponse): _238.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg;
            };
            QueryPoolParamsRequest: {
                typeUrl: string;
                encode(message: _238.QueryPoolParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryPoolParamsRequest;
                fromPartial(object: Partial<_238.QueryPoolParamsRequest>): _238.QueryPoolParamsRequest;
                fromAmino(object: _238.QueryPoolParamsRequestAmino): _238.QueryPoolParamsRequest;
                toAmino(message: _238.QueryPoolParamsRequest): _238.QueryPoolParamsRequestAmino;
                fromAminoMsg(object: _238.QueryPoolParamsRequestAminoMsg): _238.QueryPoolParamsRequest;
                toAminoMsg(message: _238.QueryPoolParamsRequest): _238.QueryPoolParamsRequestAminoMsg;
                fromProtoMsg(message: _238.QueryPoolParamsRequestProtoMsg): _238.QueryPoolParamsRequest;
                toProto(message: _238.QueryPoolParamsRequest): Uint8Array;
                toProtoMsg(message: _238.QueryPoolParamsRequest): _238.QueryPoolParamsRequestProtoMsg;
            };
            QueryPoolParamsResponse: {
                typeUrl: string;
                encode(message: _238.QueryPoolParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryPoolParamsResponse;
                fromPartial(object: Partial<_238.QueryPoolParamsResponse>): _238.QueryPoolParamsResponse;
                fromAmino(object: _238.QueryPoolParamsResponseAmino): _238.QueryPoolParamsResponse;
                toAmino(message: _238.QueryPoolParamsResponse): _238.QueryPoolParamsResponseAmino;
                fromAminoMsg(object: _238.QueryPoolParamsResponseAminoMsg): _238.QueryPoolParamsResponse;
                toAminoMsg(message: _238.QueryPoolParamsResponse): _238.QueryPoolParamsResponseAminoMsg;
                fromProtoMsg(message: _238.QueryPoolParamsResponseProtoMsg): _238.QueryPoolParamsResponse;
                toProto(message: _238.QueryPoolParamsResponse): Uint8Array;
                toProtoMsg(message: _238.QueryPoolParamsResponse): _238.QueryPoolParamsResponseProtoMsg;
            };
            QueryTotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _238.QueryTotalPoolLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryTotalPoolLiquidityRequest;
                fromPartial(object: Partial<_238.QueryTotalPoolLiquidityRequest>): _238.QueryTotalPoolLiquidityRequest;
                fromAmino(object: _238.QueryTotalPoolLiquidityRequestAmino): _238.QueryTotalPoolLiquidityRequest;
                toAmino(message: _238.QueryTotalPoolLiquidityRequest): _238.QueryTotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _238.QueryTotalPoolLiquidityRequestAminoMsg): _238.QueryTotalPoolLiquidityRequest;
                toAminoMsg(message: _238.QueryTotalPoolLiquidityRequest): _238.QueryTotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _238.QueryTotalPoolLiquidityRequestProtoMsg): _238.QueryTotalPoolLiquidityRequest;
                toProto(message: _238.QueryTotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _238.QueryTotalPoolLiquidityRequest): _238.QueryTotalPoolLiquidityRequestProtoMsg;
            };
            QueryTotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _238.QueryTotalPoolLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryTotalPoolLiquidityResponse;
                fromPartial(object: Partial<_238.QueryTotalPoolLiquidityResponse>): _238.QueryTotalPoolLiquidityResponse;
                fromAmino(object: _238.QueryTotalPoolLiquidityResponseAmino): _238.QueryTotalPoolLiquidityResponse;
                toAmino(message: _238.QueryTotalPoolLiquidityResponse): _238.QueryTotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _238.QueryTotalPoolLiquidityResponseAminoMsg): _238.QueryTotalPoolLiquidityResponse;
                toAminoMsg(message: _238.QueryTotalPoolLiquidityResponse): _238.QueryTotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _238.QueryTotalPoolLiquidityResponseProtoMsg): _238.QueryTotalPoolLiquidityResponse;
                toProto(message: _238.QueryTotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _238.QueryTotalPoolLiquidityResponse): _238.QueryTotalPoolLiquidityResponseProtoMsg;
            };
            QueryTotalSharesRequest: {
                typeUrl: string;
                encode(message: _238.QueryTotalSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryTotalSharesRequest;
                fromPartial(object: Partial<_238.QueryTotalSharesRequest>): _238.QueryTotalSharesRequest;
                fromAmino(object: _238.QueryTotalSharesRequestAmino): _238.QueryTotalSharesRequest;
                toAmino(message: _238.QueryTotalSharesRequest): _238.QueryTotalSharesRequestAmino;
                fromAminoMsg(object: _238.QueryTotalSharesRequestAminoMsg): _238.QueryTotalSharesRequest;
                toAminoMsg(message: _238.QueryTotalSharesRequest): _238.QueryTotalSharesRequestAminoMsg;
                fromProtoMsg(message: _238.QueryTotalSharesRequestProtoMsg): _238.QueryTotalSharesRequest;
                toProto(message: _238.QueryTotalSharesRequest): Uint8Array;
                toProtoMsg(message: _238.QueryTotalSharesRequest): _238.QueryTotalSharesRequestProtoMsg;
            };
            QueryTotalSharesResponse: {
                typeUrl: string;
                encode(message: _238.QueryTotalSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryTotalSharesResponse;
                fromPartial(object: Partial<_238.QueryTotalSharesResponse>): _238.QueryTotalSharesResponse;
                fromAmino(object: _238.QueryTotalSharesResponseAmino): _238.QueryTotalSharesResponse;
                toAmino(message: _238.QueryTotalSharesResponse): _238.QueryTotalSharesResponseAmino;
                fromAminoMsg(object: _238.QueryTotalSharesResponseAminoMsg): _238.QueryTotalSharesResponse;
                toAminoMsg(message: _238.QueryTotalSharesResponse): _238.QueryTotalSharesResponseAminoMsg;
                fromProtoMsg(message: _238.QueryTotalSharesResponseProtoMsg): _238.QueryTotalSharesResponse;
                toProto(message: _238.QueryTotalSharesResponse): Uint8Array;
                toProtoMsg(message: _238.QueryTotalSharesResponse): _238.QueryTotalSharesResponseProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                typeUrl: string;
                encode(message: _238.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryCalcJoinPoolNoSwapSharesRequest;
                fromPartial(object: Partial<_238.QueryCalcJoinPoolNoSwapSharesRequest>): _238.QueryCalcJoinPoolNoSwapSharesRequest;
                fromAmino(object: _238.QueryCalcJoinPoolNoSwapSharesRequestAmino): _238.QueryCalcJoinPoolNoSwapSharesRequest;
                toAmino(message: _238.QueryCalcJoinPoolNoSwapSharesRequest): _238.QueryCalcJoinPoolNoSwapSharesRequestAmino;
                fromAminoMsg(object: _238.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): _238.QueryCalcJoinPoolNoSwapSharesRequest;
                toAminoMsg(message: _238.QueryCalcJoinPoolNoSwapSharesRequest): _238.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg;
                fromProtoMsg(message: _238.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): _238.QueryCalcJoinPoolNoSwapSharesRequest;
                toProto(message: _238.QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array;
                toProtoMsg(message: _238.QueryCalcJoinPoolNoSwapSharesRequest): _238.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                typeUrl: string;
                encode(message: _238.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryCalcJoinPoolNoSwapSharesResponse;
                fromPartial(object: Partial<_238.QueryCalcJoinPoolNoSwapSharesResponse>): _238.QueryCalcJoinPoolNoSwapSharesResponse;
                fromAmino(object: _238.QueryCalcJoinPoolNoSwapSharesResponseAmino): _238.QueryCalcJoinPoolNoSwapSharesResponse;
                toAmino(message: _238.QueryCalcJoinPoolNoSwapSharesResponse): _238.QueryCalcJoinPoolNoSwapSharesResponseAmino;
                fromAminoMsg(object: _238.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): _238.QueryCalcJoinPoolNoSwapSharesResponse;
                toAminoMsg(message: _238.QueryCalcJoinPoolNoSwapSharesResponse): _238.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg;
                fromProtoMsg(message: _238.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): _238.QueryCalcJoinPoolNoSwapSharesResponse;
                toProto(message: _238.QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array;
                toProtoMsg(message: _238.QueryCalcJoinPoolNoSwapSharesResponse): _238.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg;
            };
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _238.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QuerySpotPriceRequest;
                fromPartial(object: Partial<_238.QuerySpotPriceRequest>): _238.QuerySpotPriceRequest;
                fromAmino(object: _238.QuerySpotPriceRequestAmino): _238.QuerySpotPriceRequest;
                toAmino(message: _238.QuerySpotPriceRequest): _238.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _238.QuerySpotPriceRequestAminoMsg): _238.QuerySpotPriceRequest;
                toAminoMsg(message: _238.QuerySpotPriceRequest): _238.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _238.QuerySpotPriceRequestProtoMsg): _238.QuerySpotPriceRequest;
                toProto(message: _238.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _238.QuerySpotPriceRequest): _238.QuerySpotPriceRequestProtoMsg;
            };
            QueryPoolsWithFilterRequest: {
                typeUrl: string;
                encode(message: _238.QueryPoolsWithFilterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryPoolsWithFilterRequest;
                fromPartial(object: Partial<_238.QueryPoolsWithFilterRequest>): _238.QueryPoolsWithFilterRequest;
                fromAmino(object: _238.QueryPoolsWithFilterRequestAmino): _238.QueryPoolsWithFilterRequest;
                toAmino(message: _238.QueryPoolsWithFilterRequest): _238.QueryPoolsWithFilterRequestAmino;
                fromAminoMsg(object: _238.QueryPoolsWithFilterRequestAminoMsg): _238.QueryPoolsWithFilterRequest;
                toAminoMsg(message: _238.QueryPoolsWithFilterRequest): _238.QueryPoolsWithFilterRequestAminoMsg;
                fromProtoMsg(message: _238.QueryPoolsWithFilterRequestProtoMsg): _238.QueryPoolsWithFilterRequest;
                toProto(message: _238.QueryPoolsWithFilterRequest): Uint8Array;
                toProtoMsg(message: _238.QueryPoolsWithFilterRequest): _238.QueryPoolsWithFilterRequestProtoMsg;
            };
            QueryPoolsWithFilterResponse: {
                typeUrl: string;
                encode(message: _238.QueryPoolsWithFilterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryPoolsWithFilterResponse;
                fromPartial(object: Partial<_238.QueryPoolsWithFilterResponse>): _238.QueryPoolsWithFilterResponse;
                fromAmino(object: _238.QueryPoolsWithFilterResponseAmino): _238.QueryPoolsWithFilterResponse;
                toAmino(message: _238.QueryPoolsWithFilterResponse): _238.QueryPoolsWithFilterResponseAmino;
                fromAminoMsg(object: _238.QueryPoolsWithFilterResponseAminoMsg): _238.QueryPoolsWithFilterResponse;
                toAminoMsg(message: _238.QueryPoolsWithFilterResponse): _238.QueryPoolsWithFilterResponseAminoMsg;
                fromProtoMsg(message: _238.QueryPoolsWithFilterResponseProtoMsg): _238.QueryPoolsWithFilterResponse;
                toProto(message: _238.QueryPoolsWithFilterResponse): Uint8Array;
                toProtoMsg(message: _238.QueryPoolsWithFilterResponse): _238.QueryPoolsWithFilterResponseProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _238.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QuerySpotPriceResponse;
                fromPartial(object: Partial<_238.QuerySpotPriceResponse>): _238.QuerySpotPriceResponse;
                fromAmino(object: _238.QuerySpotPriceResponseAmino): _238.QuerySpotPriceResponse;
                toAmino(message: _238.QuerySpotPriceResponse): _238.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _238.QuerySpotPriceResponseAminoMsg): _238.QuerySpotPriceResponse;
                toAminoMsg(message: _238.QuerySpotPriceResponse): _238.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _238.QuerySpotPriceResponseProtoMsg): _238.QuerySpotPriceResponse;
                toProto(message: _238.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _238.QuerySpotPriceResponse): _238.QuerySpotPriceResponseProtoMsg;
            };
            QuerySwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _238.QuerySwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QuerySwapExactAmountInRequest;
                fromPartial(object: Partial<_238.QuerySwapExactAmountInRequest>): _238.QuerySwapExactAmountInRequest;
                fromAmino(object: _238.QuerySwapExactAmountInRequestAmino): _238.QuerySwapExactAmountInRequest;
                toAmino(message: _238.QuerySwapExactAmountInRequest): _238.QuerySwapExactAmountInRequestAmino;
                fromAminoMsg(object: _238.QuerySwapExactAmountInRequestAminoMsg): _238.QuerySwapExactAmountInRequest;
                toAminoMsg(message: _238.QuerySwapExactAmountInRequest): _238.QuerySwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _238.QuerySwapExactAmountInRequestProtoMsg): _238.QuerySwapExactAmountInRequest;
                toProto(message: _238.QuerySwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _238.QuerySwapExactAmountInRequest): _238.QuerySwapExactAmountInRequestProtoMsg;
            };
            QuerySwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _238.QuerySwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QuerySwapExactAmountInResponse;
                fromPartial(object: Partial<_238.QuerySwapExactAmountInResponse>): _238.QuerySwapExactAmountInResponse;
                fromAmino(object: _238.QuerySwapExactAmountInResponseAmino): _238.QuerySwapExactAmountInResponse;
                toAmino(message: _238.QuerySwapExactAmountInResponse): _238.QuerySwapExactAmountInResponseAmino;
                fromAminoMsg(object: _238.QuerySwapExactAmountInResponseAminoMsg): _238.QuerySwapExactAmountInResponse;
                toAminoMsg(message: _238.QuerySwapExactAmountInResponse): _238.QuerySwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _238.QuerySwapExactAmountInResponseProtoMsg): _238.QuerySwapExactAmountInResponse;
                toProto(message: _238.QuerySwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _238.QuerySwapExactAmountInResponse): _238.QuerySwapExactAmountInResponseProtoMsg;
            };
            QuerySwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _238.QuerySwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QuerySwapExactAmountOutRequest;
                fromPartial(object: Partial<_238.QuerySwapExactAmountOutRequest>): _238.QuerySwapExactAmountOutRequest;
                fromAmino(object: _238.QuerySwapExactAmountOutRequestAmino): _238.QuerySwapExactAmountOutRequest;
                toAmino(message: _238.QuerySwapExactAmountOutRequest): _238.QuerySwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _238.QuerySwapExactAmountOutRequestAminoMsg): _238.QuerySwapExactAmountOutRequest;
                toAminoMsg(message: _238.QuerySwapExactAmountOutRequest): _238.QuerySwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _238.QuerySwapExactAmountOutRequestProtoMsg): _238.QuerySwapExactAmountOutRequest;
                toProto(message: _238.QuerySwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _238.QuerySwapExactAmountOutRequest): _238.QuerySwapExactAmountOutRequestProtoMsg;
            };
            QuerySwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _238.QuerySwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QuerySwapExactAmountOutResponse;
                fromPartial(object: Partial<_238.QuerySwapExactAmountOutResponse>): _238.QuerySwapExactAmountOutResponse;
                fromAmino(object: _238.QuerySwapExactAmountOutResponseAmino): _238.QuerySwapExactAmountOutResponse;
                toAmino(message: _238.QuerySwapExactAmountOutResponse): _238.QuerySwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _238.QuerySwapExactAmountOutResponseAminoMsg): _238.QuerySwapExactAmountOutResponse;
                toAminoMsg(message: _238.QuerySwapExactAmountOutResponse): _238.QuerySwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _238.QuerySwapExactAmountOutResponseProtoMsg): _238.QuerySwapExactAmountOutResponse;
                toProto(message: _238.QuerySwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _238.QuerySwapExactAmountOutResponse): _238.QuerySwapExactAmountOutResponseProtoMsg;
            };
            QueryTotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _238.QueryTotalLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryTotalLiquidityRequest;
                fromPartial(_: Partial<_238.QueryTotalLiquidityRequest>): _238.QueryTotalLiquidityRequest;
                fromAmino(_: _238.QueryTotalLiquidityRequestAmino): _238.QueryTotalLiquidityRequest;
                toAmino(_: _238.QueryTotalLiquidityRequest): _238.QueryTotalLiquidityRequestAmino;
                fromAminoMsg(object: _238.QueryTotalLiquidityRequestAminoMsg): _238.QueryTotalLiquidityRequest;
                toAminoMsg(message: _238.QueryTotalLiquidityRequest): _238.QueryTotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _238.QueryTotalLiquidityRequestProtoMsg): _238.QueryTotalLiquidityRequest;
                toProto(message: _238.QueryTotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _238.QueryTotalLiquidityRequest): _238.QueryTotalLiquidityRequestProtoMsg;
            };
            QueryTotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _238.QueryTotalLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _238.QueryTotalLiquidityResponse;
                fromPartial(object: Partial<_238.QueryTotalLiquidityResponse>): _238.QueryTotalLiquidityResponse;
                fromAmino(object: _238.QueryTotalLiquidityResponseAmino): _238.QueryTotalLiquidityResponse;
                toAmino(message: _238.QueryTotalLiquidityResponse): _238.QueryTotalLiquidityResponseAmino;
                fromAminoMsg(object: _238.QueryTotalLiquidityResponseAminoMsg): _238.QueryTotalLiquidityResponse;
                toAminoMsg(message: _238.QueryTotalLiquidityResponse): _238.QueryTotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _238.QueryTotalLiquidityResponseProtoMsg): _238.QueryTotalLiquidityResponse;
                toProto(message: _238.QueryTotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _238.QueryTotalLiquidityResponse): _238.QueryTotalLiquidityResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _236.Pool | _241.Pool | import("../google/protobuf/any").Any;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Params: {
                typeUrl: string;
                encode(message: _237.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _237.Params;
                fromPartial(object: Partial<_237.Params>): _237.Params;
                fromAmino(object: _237.ParamsAmino): _237.Params;
                toAmino(message: _237.Params): _237.ParamsAmino;
                fromAminoMsg(object: _237.ParamsAminoMsg): _237.Params;
                toAminoMsg(message: _237.Params): _237.ParamsAminoMsg;
                fromProtoMsg(message: _237.ParamsProtoMsg): _237.Params;
                toProto(message: _237.Params): Uint8Array;
                toProtoMsg(message: _237.Params): _237.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _237.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _237.GenesisState;
                fromPartial(object: Partial<_237.GenesisState>): _237.GenesisState;
                fromAmino(object: _237.GenesisStateAmino): _237.GenesisState;
                toAmino(message: _237.GenesisState): _237.GenesisStateAmino;
                fromAminoMsg(object: _237.GenesisStateAminoMsg): _237.GenesisState;
                toAminoMsg(message: _237.GenesisState): _237.GenesisStateAminoMsg;
                fromProtoMsg(message: _237.GenesisStateProtoMsg): _237.GenesisState;
                toProto(message: _237.GenesisState): Uint8Array;
                toProtoMsg(message: _237.GenesisState): _237.GenesisStateProtoMsg;
            };
            SmoothWeightChangeParams: {
                typeUrl: string;
                encode(message: _236.SmoothWeightChangeParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _236.SmoothWeightChangeParams;
                fromPartial(object: Partial<_236.SmoothWeightChangeParams>): _236.SmoothWeightChangeParams;
                fromAmino(object: _236.SmoothWeightChangeParamsAmino): _236.SmoothWeightChangeParams;
                toAmino(message: _236.SmoothWeightChangeParams): _236.SmoothWeightChangeParamsAmino;
                fromAminoMsg(object: _236.SmoothWeightChangeParamsAminoMsg): _236.SmoothWeightChangeParams;
                toAminoMsg(message: _236.SmoothWeightChangeParams): _236.SmoothWeightChangeParamsAminoMsg;
                fromProtoMsg(message: _236.SmoothWeightChangeParamsProtoMsg): _236.SmoothWeightChangeParams;
                toProto(message: _236.SmoothWeightChangeParams): Uint8Array;
                toProtoMsg(message: _236.SmoothWeightChangeParams): _236.SmoothWeightChangeParamsProtoMsg;
            };
            PoolParams: {
                typeUrl: string;
                encode(message: _236.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _236.PoolParams;
                fromPartial(object: Partial<_236.PoolParams>): _236.PoolParams;
                fromAmino(object: _236.PoolParamsAmino): _236.PoolParams;
                toAmino(message: _236.PoolParams): _236.PoolParamsAmino;
                fromAminoMsg(object: _236.PoolParamsAminoMsg): _236.PoolParams;
                toAminoMsg(message: _236.PoolParams): _236.PoolParamsAminoMsg;
                fromProtoMsg(message: _236.PoolParamsProtoMsg): _236.PoolParams;
                toProto(message: _236.PoolParams): Uint8Array;
                toProtoMsg(message: _236.PoolParams): _236.PoolParamsProtoMsg;
            };
            PoolAsset: {
                typeUrl: string;
                encode(message: _236.PoolAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _236.PoolAsset;
                fromPartial(object: Partial<_236.PoolAsset>): _236.PoolAsset;
                fromAmino(object: _236.PoolAssetAmino): _236.PoolAsset;
                toAmino(message: _236.PoolAsset): _236.PoolAssetAmino;
                fromAminoMsg(object: _236.PoolAssetAminoMsg): _236.PoolAsset;
                toAminoMsg(message: _236.PoolAsset): _236.PoolAssetAminoMsg;
                fromProtoMsg(message: _236.PoolAssetProtoMsg): _236.PoolAsset;
                toProto(message: _236.PoolAsset): Uint8Array;
                toProtoMsg(message: _236.PoolAsset): _236.PoolAssetProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _236.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _236.Pool;
                fromPartial(object: Partial<_236.Pool>): _236.Pool;
                fromAmino(object: _236.PoolAmino): _236.Pool;
                toAmino(message: _236.Pool): _236.PoolAmino;
                fromAminoMsg(object: _236.PoolAminoMsg): _236.Pool;
                toAminoMsg(message: _236.Pool): _236.PoolAminoMsg;
                fromProtoMsg(message: _236.PoolProtoMsg): _236.Pool;
                toProto(message: _236.Pool): Uint8Array;
                toProtoMsg(message: _236.Pool): _236.PoolProtoMsg;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _539.MsgClientImpl;
                    registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _240.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _240.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _240.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _240.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _240.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _240.MsgCreateBalancerPool) => _240.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _240.MsgCreateBalancerPoolAmino) => _240.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        typeUrl: string;
                        encode(message: _240.MsgCreateBalancerPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _240.MsgCreateBalancerPool;
                        fromPartial(object: Partial<_240.MsgCreateBalancerPool>): _240.MsgCreateBalancerPool;
                        fromAmino(object: _240.MsgCreateBalancerPoolAmino): _240.MsgCreateBalancerPool;
                        toAmino(message: _240.MsgCreateBalancerPool): _240.MsgCreateBalancerPoolAmino;
                        fromAminoMsg(object: _240.MsgCreateBalancerPoolAminoMsg): _240.MsgCreateBalancerPool;
                        toAminoMsg(message: _240.MsgCreateBalancerPool): _240.MsgCreateBalancerPoolAminoMsg;
                        fromProtoMsg(message: _240.MsgCreateBalancerPoolProtoMsg): _240.MsgCreateBalancerPool;
                        toProto(message: _240.MsgCreateBalancerPool): Uint8Array;
                        toProtoMsg(message: _240.MsgCreateBalancerPool): _240.MsgCreateBalancerPoolProtoMsg;
                    };
                    MsgCreateBalancerPoolResponse: {
                        typeUrl: string;
                        encode(message: _240.MsgCreateBalancerPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _240.MsgCreateBalancerPoolResponse;
                        fromPartial(object: Partial<_240.MsgCreateBalancerPoolResponse>): _240.MsgCreateBalancerPoolResponse;
                        fromAmino(object: _240.MsgCreateBalancerPoolResponseAmino): _240.MsgCreateBalancerPoolResponse;
                        toAmino(message: _240.MsgCreateBalancerPoolResponse): _240.MsgCreateBalancerPoolResponseAmino;
                        fromAminoMsg(object: _240.MsgCreateBalancerPoolResponseAminoMsg): _240.MsgCreateBalancerPoolResponse;
                        toAminoMsg(message: _240.MsgCreateBalancerPoolResponse): _240.MsgCreateBalancerPoolResponseAminoMsg;
                        fromProtoMsg(message: _240.MsgCreateBalancerPoolResponseProtoMsg): _240.MsgCreateBalancerPoolResponse;
                        toProto(message: _240.MsgCreateBalancerPoolResponse): Uint8Array;
                        toProtoMsg(message: _240.MsgCreateBalancerPoolResponse): _240.MsgCreateBalancerPoolResponseProtoMsg;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _540.MsgClientImpl;
                    registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _242.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _242.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _242.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _242.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _242.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _242.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _242.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _242.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _242.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _242.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: (message: _242.MsgCreateStableswapPool) => _242.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _242.MsgCreateStableswapPoolAmino) => _242.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _242.MsgStableSwapAdjustScalingFactors) => _242.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _242.MsgStableSwapAdjustScalingFactorsAmino) => _242.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        typeUrl: string;
                        encode(message: _242.MsgCreateStableswapPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _242.MsgCreateStableswapPool;
                        fromPartial(object: Partial<_242.MsgCreateStableswapPool>): _242.MsgCreateStableswapPool;
                        fromAmino(object: _242.MsgCreateStableswapPoolAmino): _242.MsgCreateStableswapPool;
                        toAmino(message: _242.MsgCreateStableswapPool): _242.MsgCreateStableswapPoolAmino;
                        fromAminoMsg(object: _242.MsgCreateStableswapPoolAminoMsg): _242.MsgCreateStableswapPool;
                        toAminoMsg(message: _242.MsgCreateStableswapPool): _242.MsgCreateStableswapPoolAminoMsg;
                        fromProtoMsg(message: _242.MsgCreateStableswapPoolProtoMsg): _242.MsgCreateStableswapPool;
                        toProto(message: _242.MsgCreateStableswapPool): Uint8Array;
                        toProtoMsg(message: _242.MsgCreateStableswapPool): _242.MsgCreateStableswapPoolProtoMsg;
                    };
                    MsgCreateStableswapPoolResponse: {
                        typeUrl: string;
                        encode(message: _242.MsgCreateStableswapPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _242.MsgCreateStableswapPoolResponse;
                        fromPartial(object: Partial<_242.MsgCreateStableswapPoolResponse>): _242.MsgCreateStableswapPoolResponse;
                        fromAmino(object: _242.MsgCreateStableswapPoolResponseAmino): _242.MsgCreateStableswapPoolResponse;
                        toAmino(message: _242.MsgCreateStableswapPoolResponse): _242.MsgCreateStableswapPoolResponseAmino;
                        fromAminoMsg(object: _242.MsgCreateStableswapPoolResponseAminoMsg): _242.MsgCreateStableswapPoolResponse;
                        toAminoMsg(message: _242.MsgCreateStableswapPoolResponse): _242.MsgCreateStableswapPoolResponseAminoMsg;
                        fromProtoMsg(message: _242.MsgCreateStableswapPoolResponseProtoMsg): _242.MsgCreateStableswapPoolResponse;
                        toProto(message: _242.MsgCreateStableswapPoolResponse): Uint8Array;
                        toProtoMsg(message: _242.MsgCreateStableswapPoolResponse): _242.MsgCreateStableswapPoolResponseProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        typeUrl: string;
                        encode(message: _242.MsgStableSwapAdjustScalingFactors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _242.MsgStableSwapAdjustScalingFactors;
                        fromPartial(object: Partial<_242.MsgStableSwapAdjustScalingFactors>): _242.MsgStableSwapAdjustScalingFactors;
                        fromAmino(object: _242.MsgStableSwapAdjustScalingFactorsAmino): _242.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _242.MsgStableSwapAdjustScalingFactors): _242.MsgStableSwapAdjustScalingFactorsAmino;
                        fromAminoMsg(object: _242.MsgStableSwapAdjustScalingFactorsAminoMsg): _242.MsgStableSwapAdjustScalingFactors;
                        toAminoMsg(message: _242.MsgStableSwapAdjustScalingFactors): _242.MsgStableSwapAdjustScalingFactorsAminoMsg;
                        fromProtoMsg(message: _242.MsgStableSwapAdjustScalingFactorsProtoMsg): _242.MsgStableSwapAdjustScalingFactors;
                        toProto(message: _242.MsgStableSwapAdjustScalingFactors): Uint8Array;
                        toProtoMsg(message: _242.MsgStableSwapAdjustScalingFactors): _242.MsgStableSwapAdjustScalingFactorsProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        typeUrl: string;
                        encode(_: _242.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _242.MsgStableSwapAdjustScalingFactorsResponse;
                        fromPartial(_: Partial<_242.MsgStableSwapAdjustScalingFactorsResponse>): _242.MsgStableSwapAdjustScalingFactorsResponse;
                        fromAmino(_: _242.MsgStableSwapAdjustScalingFactorsResponseAmino): _242.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _242.MsgStableSwapAdjustScalingFactorsResponse): _242.MsgStableSwapAdjustScalingFactorsResponseAmino;
                        fromAminoMsg(object: _242.MsgStableSwapAdjustScalingFactorsResponseAminoMsg): _242.MsgStableSwapAdjustScalingFactorsResponse;
                        toAminoMsg(message: _242.MsgStableSwapAdjustScalingFactorsResponse): _242.MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
                        fromProtoMsg(message: _242.MsgStableSwapAdjustScalingFactorsResponseProtoMsg): _242.MsgStableSwapAdjustScalingFactorsResponse;
                        toProto(message: _242.MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
                        toProtoMsg(message: _242.MsgStableSwapAdjustScalingFactorsResponse): _242.MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
                    };
                    PoolParams: {
                        typeUrl: string;
                        encode(message: _241.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _241.PoolParams;
                        fromPartial(object: Partial<_241.PoolParams>): _241.PoolParams;
                        fromAmino(object: _241.PoolParamsAmino): _241.PoolParams;
                        toAmino(message: _241.PoolParams): _241.PoolParamsAmino;
                        fromAminoMsg(object: _241.PoolParamsAminoMsg): _241.PoolParams;
                        toAminoMsg(message: _241.PoolParams): _241.PoolParamsAminoMsg;
                        fromProtoMsg(message: _241.PoolParamsProtoMsg): _241.PoolParams;
                        toProto(message: _241.PoolParams): Uint8Array;
                        toProtoMsg(message: _241.PoolParams): _241.PoolParamsProtoMsg;
                    };
                    Pool: {
                        typeUrl: string;
                        encode(message: _241.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _241.Pool;
                        fromPartial(object: Partial<_241.Pool>): _241.Pool;
                        fromAmino(object: _241.PoolAmino): _241.Pool;
                        toAmino(message: _241.Pool): _241.PoolAmino;
                        fromAminoMsg(object: _241.PoolAminoMsg): _241.Pool;
                        toAminoMsg(message: _241.Pool): _241.PoolAminoMsg;
                        fromProtoMsg(message: _241.PoolProtoMsg): _241.Pool;
                        toProto(message: _241.Pool): Uint8Array;
                        toProtoMsg(message: _241.Pool): _241.PoolProtoMsg;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _526.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _243.QuerySpotPriceRequest): Promise<_243.QuerySpotPriceResponse>;
            };
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _243.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _243.QuerySpotPriceRequest;
                fromPartial(object: Partial<_243.QuerySpotPriceRequest>): _243.QuerySpotPriceRequest;
                fromAmino(object: _243.QuerySpotPriceRequestAmino): _243.QuerySpotPriceRequest;
                toAmino(message: _243.QuerySpotPriceRequest): _243.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _243.QuerySpotPriceRequestAminoMsg): _243.QuerySpotPriceRequest;
                toAminoMsg(message: _243.QuerySpotPriceRequest): _243.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _243.QuerySpotPriceRequestProtoMsg): _243.QuerySpotPriceRequest;
                toProto(message: _243.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _243.QuerySpotPriceRequest): _243.QuerySpotPriceRequestProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _243.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _243.QuerySpotPriceResponse;
                fromPartial(object: Partial<_243.QuerySpotPriceResponse>): _243.QuerySpotPriceResponse;
                fromAmino(object: _243.QuerySpotPriceResponseAmino): _243.QuerySpotPriceResponse;
                toAmino(message: _243.QuerySpotPriceResponse): _243.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _243.QuerySpotPriceResponseAminoMsg): _243.QuerySpotPriceResponse;
                toAminoMsg(message: _243.QuerySpotPriceResponse): _243.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _243.QuerySpotPriceResponseProtoMsg): _243.QuerySpotPriceResponse;
                toProto(message: _243.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _243.QuerySpotPriceResponse): _243.QuerySpotPriceResponseProtoMsg;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _527.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _245.QueryParamsRequest): Promise<_245.QueryParamsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _245.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _245.QueryParamsRequest;
                fromPartial(_: Partial<_245.QueryParamsRequest>): _245.QueryParamsRequest;
                fromAmino(_: _245.QueryParamsRequestAmino): _245.QueryParamsRequest;
                toAmino(_: _245.QueryParamsRequest): _245.QueryParamsRequestAmino;
                fromAminoMsg(object: _245.QueryParamsRequestAminoMsg): _245.QueryParamsRequest;
                toAminoMsg(message: _245.QueryParamsRequest): _245.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _245.QueryParamsRequestProtoMsg): _245.QueryParamsRequest;
                toProto(message: _245.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _245.QueryParamsRequest): _245.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _245.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _245.QueryParamsResponse;
                fromPartial(object: Partial<_245.QueryParamsResponse>): _245.QueryParamsResponse;
                fromAmino(object: _245.QueryParamsResponseAmino): _245.QueryParamsResponse;
                toAmino(message: _245.QueryParamsResponse): _245.QueryParamsResponseAmino;
                fromAminoMsg(object: _245.QueryParamsResponseAminoMsg): _245.QueryParamsResponse;
                toAminoMsg(message: _245.QueryParamsResponse): _245.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _245.QueryParamsResponseProtoMsg): _245.QueryParamsResponse;
                toProto(message: _245.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _245.QueryParamsResponse): _245.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _244.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _244.Params;
                fromPartial(object: Partial<_244.Params>): _244.Params;
                fromAmino(object: _244.ParamsAmino): _244.Params;
                toAmino(message: _244.Params): _244.ParamsAmino;
                fromAminoMsg(object: _244.ParamsAminoMsg): _244.Params;
                toAminoMsg(message: _244.Params): _244.ParamsAminoMsg;
                fromProtoMsg(message: _244.ParamsProtoMsg): _244.Params;
                toProto(message: _244.Params): Uint8Array;
                toProtoMsg(message: _244.Params): _244.ParamsProtoMsg;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _542.MsgClientImpl;
        QueryClientImpl: typeof _528.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _249.ModuleToDistributeCoinsRequest): Promise<_249.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _249.GaugeByIDRequest): Promise<_249.GaugeByIDResponse>;
            gauges(request?: _249.GaugesRequest): Promise<_249.GaugesResponse>;
            activeGauges(request?: _249.ActiveGaugesRequest): Promise<_249.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _249.ActiveGaugesPerDenomRequest): Promise<_249.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _249.UpcomingGaugesRequest): Promise<_249.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _249.UpcomingGaugesPerDenomRequest): Promise<_249.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _249.RewardsEstRequest): Promise<_249.RewardsEstResponse>;
            lockableDurations(request?: _249.QueryLockableDurationsRequest): Promise<_249.QueryLockableDurationsResponse>;
        };
        registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _250.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _250.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _250.MsgCreateGauge): {
                    typeUrl: string;
                    value: _250.MsgCreateGauge;
                };
                addToGauge(value: _250.MsgAddToGauge): {
                    typeUrl: string;
                    value: _250.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _250.MsgCreateGauge): {
                    typeUrl: string;
                    value: _250.MsgCreateGauge;
                };
                addToGauge(value: _250.MsgAddToGauge): {
                    typeUrl: string;
                    value: _250.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _250.MsgCreateGauge) => _250.MsgCreateGaugeAmino;
                fromAmino: (object: _250.MsgCreateGaugeAmino) => _250.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _250.MsgAddToGauge) => _250.MsgAddToGaugeAmino;
                fromAmino: (object: _250.MsgAddToGaugeAmino) => _250.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            typeUrl: string;
            encode(message: _250.MsgCreateGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _250.MsgCreateGauge;
            fromPartial(object: Partial<_250.MsgCreateGauge>): _250.MsgCreateGauge;
            fromAmino(object: _250.MsgCreateGaugeAmino): _250.MsgCreateGauge;
            toAmino(message: _250.MsgCreateGauge): _250.MsgCreateGaugeAmino;
            fromAminoMsg(object: _250.MsgCreateGaugeAminoMsg): _250.MsgCreateGauge;
            toAminoMsg(message: _250.MsgCreateGauge): _250.MsgCreateGaugeAminoMsg;
            fromProtoMsg(message: _250.MsgCreateGaugeProtoMsg): _250.MsgCreateGauge;
            toProto(message: _250.MsgCreateGauge): Uint8Array;
            toProtoMsg(message: _250.MsgCreateGauge): _250.MsgCreateGaugeProtoMsg;
        };
        MsgCreateGaugeResponse: {
            typeUrl: string;
            encode(_: _250.MsgCreateGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _250.MsgCreateGaugeResponse;
            fromPartial(_: Partial<_250.MsgCreateGaugeResponse>): _250.MsgCreateGaugeResponse;
            fromAmino(_: _250.MsgCreateGaugeResponseAmino): _250.MsgCreateGaugeResponse;
            toAmino(_: _250.MsgCreateGaugeResponse): _250.MsgCreateGaugeResponseAmino;
            fromAminoMsg(object: _250.MsgCreateGaugeResponseAminoMsg): _250.MsgCreateGaugeResponse;
            toAminoMsg(message: _250.MsgCreateGaugeResponse): _250.MsgCreateGaugeResponseAminoMsg;
            fromProtoMsg(message: _250.MsgCreateGaugeResponseProtoMsg): _250.MsgCreateGaugeResponse;
            toProto(message: _250.MsgCreateGaugeResponse): Uint8Array;
            toProtoMsg(message: _250.MsgCreateGaugeResponse): _250.MsgCreateGaugeResponseProtoMsg;
        };
        MsgAddToGauge: {
            typeUrl: string;
            encode(message: _250.MsgAddToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _250.MsgAddToGauge;
            fromPartial(object: Partial<_250.MsgAddToGauge>): _250.MsgAddToGauge;
            fromAmino(object: _250.MsgAddToGaugeAmino): _250.MsgAddToGauge;
            toAmino(message: _250.MsgAddToGauge): _250.MsgAddToGaugeAmino;
            fromAminoMsg(object: _250.MsgAddToGaugeAminoMsg): _250.MsgAddToGauge;
            toAminoMsg(message: _250.MsgAddToGauge): _250.MsgAddToGaugeAminoMsg;
            fromProtoMsg(message: _250.MsgAddToGaugeProtoMsg): _250.MsgAddToGauge;
            toProto(message: _250.MsgAddToGauge): Uint8Array;
            toProtoMsg(message: _250.MsgAddToGauge): _250.MsgAddToGaugeProtoMsg;
        };
        MsgAddToGaugeResponse: {
            typeUrl: string;
            encode(_: _250.MsgAddToGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _250.MsgAddToGaugeResponse;
            fromPartial(_: Partial<_250.MsgAddToGaugeResponse>): _250.MsgAddToGaugeResponse;
            fromAmino(_: _250.MsgAddToGaugeResponseAmino): _250.MsgAddToGaugeResponse;
            toAmino(_: _250.MsgAddToGaugeResponse): _250.MsgAddToGaugeResponseAmino;
            fromAminoMsg(object: _250.MsgAddToGaugeResponseAminoMsg): _250.MsgAddToGaugeResponse;
            toAminoMsg(message: _250.MsgAddToGaugeResponse): _250.MsgAddToGaugeResponseAminoMsg;
            fromProtoMsg(message: _250.MsgAddToGaugeResponseProtoMsg): _250.MsgAddToGaugeResponse;
            toProto(message: _250.MsgAddToGaugeResponse): Uint8Array;
            toProtoMsg(message: _250.MsgAddToGaugeResponse): _250.MsgAddToGaugeResponseProtoMsg;
        };
        ModuleToDistributeCoinsRequest: {
            typeUrl: string;
            encode(_: _249.ModuleToDistributeCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.ModuleToDistributeCoinsRequest;
            fromPartial(_: Partial<_249.ModuleToDistributeCoinsRequest>): _249.ModuleToDistributeCoinsRequest;
            fromAmino(_: _249.ModuleToDistributeCoinsRequestAmino): _249.ModuleToDistributeCoinsRequest;
            toAmino(_: _249.ModuleToDistributeCoinsRequest): _249.ModuleToDistributeCoinsRequestAmino;
            fromAminoMsg(object: _249.ModuleToDistributeCoinsRequestAminoMsg): _249.ModuleToDistributeCoinsRequest;
            toAminoMsg(message: _249.ModuleToDistributeCoinsRequest): _249.ModuleToDistributeCoinsRequestAminoMsg;
            fromProtoMsg(message: _249.ModuleToDistributeCoinsRequestProtoMsg): _249.ModuleToDistributeCoinsRequest;
            toProto(message: _249.ModuleToDistributeCoinsRequest): Uint8Array;
            toProtoMsg(message: _249.ModuleToDistributeCoinsRequest): _249.ModuleToDistributeCoinsRequestProtoMsg;
        };
        ModuleToDistributeCoinsResponse: {
            typeUrl: string;
            encode(message: _249.ModuleToDistributeCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.ModuleToDistributeCoinsResponse;
            fromPartial(object: Partial<_249.ModuleToDistributeCoinsResponse>): _249.ModuleToDistributeCoinsResponse;
            fromAmino(object: _249.ModuleToDistributeCoinsResponseAmino): _249.ModuleToDistributeCoinsResponse;
            toAmino(message: _249.ModuleToDistributeCoinsResponse): _249.ModuleToDistributeCoinsResponseAmino;
            fromAminoMsg(object: _249.ModuleToDistributeCoinsResponseAminoMsg): _249.ModuleToDistributeCoinsResponse;
            toAminoMsg(message: _249.ModuleToDistributeCoinsResponse): _249.ModuleToDistributeCoinsResponseAminoMsg;
            fromProtoMsg(message: _249.ModuleToDistributeCoinsResponseProtoMsg): _249.ModuleToDistributeCoinsResponse;
            toProto(message: _249.ModuleToDistributeCoinsResponse): Uint8Array;
            toProtoMsg(message: _249.ModuleToDistributeCoinsResponse): _249.ModuleToDistributeCoinsResponseProtoMsg;
        };
        GaugeByIDRequest: {
            typeUrl: string;
            encode(message: _249.GaugeByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.GaugeByIDRequest;
            fromPartial(object: Partial<_249.GaugeByIDRequest>): _249.GaugeByIDRequest;
            fromAmino(object: _249.GaugeByIDRequestAmino): _249.GaugeByIDRequest;
            toAmino(message: _249.GaugeByIDRequest): _249.GaugeByIDRequestAmino;
            fromAminoMsg(object: _249.GaugeByIDRequestAminoMsg): _249.GaugeByIDRequest;
            toAminoMsg(message: _249.GaugeByIDRequest): _249.GaugeByIDRequestAminoMsg;
            fromProtoMsg(message: _249.GaugeByIDRequestProtoMsg): _249.GaugeByIDRequest;
            toProto(message: _249.GaugeByIDRequest): Uint8Array;
            toProtoMsg(message: _249.GaugeByIDRequest): _249.GaugeByIDRequestProtoMsg;
        };
        GaugeByIDResponse: {
            typeUrl: string;
            encode(message: _249.GaugeByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.GaugeByIDResponse;
            fromPartial(object: Partial<_249.GaugeByIDResponse>): _249.GaugeByIDResponse;
            fromAmino(object: _249.GaugeByIDResponseAmino): _249.GaugeByIDResponse;
            toAmino(message: _249.GaugeByIDResponse): _249.GaugeByIDResponseAmino;
            fromAminoMsg(object: _249.GaugeByIDResponseAminoMsg): _249.GaugeByIDResponse;
            toAminoMsg(message: _249.GaugeByIDResponse): _249.GaugeByIDResponseAminoMsg;
            fromProtoMsg(message: _249.GaugeByIDResponseProtoMsg): _249.GaugeByIDResponse;
            toProto(message: _249.GaugeByIDResponse): Uint8Array;
            toProtoMsg(message: _249.GaugeByIDResponse): _249.GaugeByIDResponseProtoMsg;
        };
        GaugesRequest: {
            typeUrl: string;
            encode(message: _249.GaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.GaugesRequest;
            fromPartial(object: Partial<_249.GaugesRequest>): _249.GaugesRequest;
            fromAmino(object: _249.GaugesRequestAmino): _249.GaugesRequest;
            toAmino(message: _249.GaugesRequest): _249.GaugesRequestAmino;
            fromAminoMsg(object: _249.GaugesRequestAminoMsg): _249.GaugesRequest;
            toAminoMsg(message: _249.GaugesRequest): _249.GaugesRequestAminoMsg;
            fromProtoMsg(message: _249.GaugesRequestProtoMsg): _249.GaugesRequest;
            toProto(message: _249.GaugesRequest): Uint8Array;
            toProtoMsg(message: _249.GaugesRequest): _249.GaugesRequestProtoMsg;
        };
        GaugesResponse: {
            typeUrl: string;
            encode(message: _249.GaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.GaugesResponse;
            fromPartial(object: Partial<_249.GaugesResponse>): _249.GaugesResponse;
            fromAmino(object: _249.GaugesResponseAmino): _249.GaugesResponse;
            toAmino(message: _249.GaugesResponse): _249.GaugesResponseAmino;
            fromAminoMsg(object: _249.GaugesResponseAminoMsg): _249.GaugesResponse;
            toAminoMsg(message: _249.GaugesResponse): _249.GaugesResponseAminoMsg;
            fromProtoMsg(message: _249.GaugesResponseProtoMsg): _249.GaugesResponse;
            toProto(message: _249.GaugesResponse): Uint8Array;
            toProtoMsg(message: _249.GaugesResponse): _249.GaugesResponseProtoMsg;
        };
        ActiveGaugesRequest: {
            typeUrl: string;
            encode(message: _249.ActiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.ActiveGaugesRequest;
            fromPartial(object: Partial<_249.ActiveGaugesRequest>): _249.ActiveGaugesRequest;
            fromAmino(object: _249.ActiveGaugesRequestAmino): _249.ActiveGaugesRequest;
            toAmino(message: _249.ActiveGaugesRequest): _249.ActiveGaugesRequestAmino;
            fromAminoMsg(object: _249.ActiveGaugesRequestAminoMsg): _249.ActiveGaugesRequest;
            toAminoMsg(message: _249.ActiveGaugesRequest): _249.ActiveGaugesRequestAminoMsg;
            fromProtoMsg(message: _249.ActiveGaugesRequestProtoMsg): _249.ActiveGaugesRequest;
            toProto(message: _249.ActiveGaugesRequest): Uint8Array;
            toProtoMsg(message: _249.ActiveGaugesRequest): _249.ActiveGaugesRequestProtoMsg;
        };
        ActiveGaugesResponse: {
            typeUrl: string;
            encode(message: _249.ActiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.ActiveGaugesResponse;
            fromPartial(object: Partial<_249.ActiveGaugesResponse>): _249.ActiveGaugesResponse;
            fromAmino(object: _249.ActiveGaugesResponseAmino): _249.ActiveGaugesResponse;
            toAmino(message: _249.ActiveGaugesResponse): _249.ActiveGaugesResponseAmino;
            fromAminoMsg(object: _249.ActiveGaugesResponseAminoMsg): _249.ActiveGaugesResponse;
            toAminoMsg(message: _249.ActiveGaugesResponse): _249.ActiveGaugesResponseAminoMsg;
            fromProtoMsg(message: _249.ActiveGaugesResponseProtoMsg): _249.ActiveGaugesResponse;
            toProto(message: _249.ActiveGaugesResponse): Uint8Array;
            toProtoMsg(message: _249.ActiveGaugesResponse): _249.ActiveGaugesResponseProtoMsg;
        };
        ActiveGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _249.ActiveGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.ActiveGaugesPerDenomRequest;
            fromPartial(object: Partial<_249.ActiveGaugesPerDenomRequest>): _249.ActiveGaugesPerDenomRequest;
            fromAmino(object: _249.ActiveGaugesPerDenomRequestAmino): _249.ActiveGaugesPerDenomRequest;
            toAmino(message: _249.ActiveGaugesPerDenomRequest): _249.ActiveGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _249.ActiveGaugesPerDenomRequestAminoMsg): _249.ActiveGaugesPerDenomRequest;
            toAminoMsg(message: _249.ActiveGaugesPerDenomRequest): _249.ActiveGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _249.ActiveGaugesPerDenomRequestProtoMsg): _249.ActiveGaugesPerDenomRequest;
            toProto(message: _249.ActiveGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _249.ActiveGaugesPerDenomRequest): _249.ActiveGaugesPerDenomRequestProtoMsg;
        };
        ActiveGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _249.ActiveGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.ActiveGaugesPerDenomResponse;
            fromPartial(object: Partial<_249.ActiveGaugesPerDenomResponse>): _249.ActiveGaugesPerDenomResponse;
            fromAmino(object: _249.ActiveGaugesPerDenomResponseAmino): _249.ActiveGaugesPerDenomResponse;
            toAmino(message: _249.ActiveGaugesPerDenomResponse): _249.ActiveGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _249.ActiveGaugesPerDenomResponseAminoMsg): _249.ActiveGaugesPerDenomResponse;
            toAminoMsg(message: _249.ActiveGaugesPerDenomResponse): _249.ActiveGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _249.ActiveGaugesPerDenomResponseProtoMsg): _249.ActiveGaugesPerDenomResponse;
            toProto(message: _249.ActiveGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _249.ActiveGaugesPerDenomResponse): _249.ActiveGaugesPerDenomResponseProtoMsg;
        };
        UpcomingGaugesRequest: {
            typeUrl: string;
            encode(message: _249.UpcomingGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.UpcomingGaugesRequest;
            fromPartial(object: Partial<_249.UpcomingGaugesRequest>): _249.UpcomingGaugesRequest;
            fromAmino(object: _249.UpcomingGaugesRequestAmino): _249.UpcomingGaugesRequest;
            toAmino(message: _249.UpcomingGaugesRequest): _249.UpcomingGaugesRequestAmino;
            fromAminoMsg(object: _249.UpcomingGaugesRequestAminoMsg): _249.UpcomingGaugesRequest;
            toAminoMsg(message: _249.UpcomingGaugesRequest): _249.UpcomingGaugesRequestAminoMsg;
            fromProtoMsg(message: _249.UpcomingGaugesRequestProtoMsg): _249.UpcomingGaugesRequest;
            toProto(message: _249.UpcomingGaugesRequest): Uint8Array;
            toProtoMsg(message: _249.UpcomingGaugesRequest): _249.UpcomingGaugesRequestProtoMsg;
        };
        UpcomingGaugesResponse: {
            typeUrl: string;
            encode(message: _249.UpcomingGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.UpcomingGaugesResponse;
            fromPartial(object: Partial<_249.UpcomingGaugesResponse>): _249.UpcomingGaugesResponse;
            fromAmino(object: _249.UpcomingGaugesResponseAmino): _249.UpcomingGaugesResponse;
            toAmino(message: _249.UpcomingGaugesResponse): _249.UpcomingGaugesResponseAmino;
            fromAminoMsg(object: _249.UpcomingGaugesResponseAminoMsg): _249.UpcomingGaugesResponse;
            toAminoMsg(message: _249.UpcomingGaugesResponse): _249.UpcomingGaugesResponseAminoMsg;
            fromProtoMsg(message: _249.UpcomingGaugesResponseProtoMsg): _249.UpcomingGaugesResponse;
            toProto(message: _249.UpcomingGaugesResponse): Uint8Array;
            toProtoMsg(message: _249.UpcomingGaugesResponse): _249.UpcomingGaugesResponseProtoMsg;
        };
        UpcomingGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _249.UpcomingGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.UpcomingGaugesPerDenomRequest;
            fromPartial(object: Partial<_249.UpcomingGaugesPerDenomRequest>): _249.UpcomingGaugesPerDenomRequest;
            fromAmino(object: _249.UpcomingGaugesPerDenomRequestAmino): _249.UpcomingGaugesPerDenomRequest;
            toAmino(message: _249.UpcomingGaugesPerDenomRequest): _249.UpcomingGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _249.UpcomingGaugesPerDenomRequestAminoMsg): _249.UpcomingGaugesPerDenomRequest;
            toAminoMsg(message: _249.UpcomingGaugesPerDenomRequest): _249.UpcomingGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _249.UpcomingGaugesPerDenomRequestProtoMsg): _249.UpcomingGaugesPerDenomRequest;
            toProto(message: _249.UpcomingGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _249.UpcomingGaugesPerDenomRequest): _249.UpcomingGaugesPerDenomRequestProtoMsg;
        };
        UpcomingGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _249.UpcomingGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.UpcomingGaugesPerDenomResponse;
            fromPartial(object: Partial<_249.UpcomingGaugesPerDenomResponse>): _249.UpcomingGaugesPerDenomResponse;
            fromAmino(object: _249.UpcomingGaugesPerDenomResponseAmino): _249.UpcomingGaugesPerDenomResponse;
            toAmino(message: _249.UpcomingGaugesPerDenomResponse): _249.UpcomingGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _249.UpcomingGaugesPerDenomResponseAminoMsg): _249.UpcomingGaugesPerDenomResponse;
            toAminoMsg(message: _249.UpcomingGaugesPerDenomResponse): _249.UpcomingGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _249.UpcomingGaugesPerDenomResponseProtoMsg): _249.UpcomingGaugesPerDenomResponse;
            toProto(message: _249.UpcomingGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _249.UpcomingGaugesPerDenomResponse): _249.UpcomingGaugesPerDenomResponseProtoMsg;
        };
        RewardsEstRequest: {
            typeUrl: string;
            encode(message: _249.RewardsEstRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.RewardsEstRequest;
            fromPartial(object: Partial<_249.RewardsEstRequest>): _249.RewardsEstRequest;
            fromAmino(object: _249.RewardsEstRequestAmino): _249.RewardsEstRequest;
            toAmino(message: _249.RewardsEstRequest): _249.RewardsEstRequestAmino;
            fromAminoMsg(object: _249.RewardsEstRequestAminoMsg): _249.RewardsEstRequest;
            toAminoMsg(message: _249.RewardsEstRequest): _249.RewardsEstRequestAminoMsg;
            fromProtoMsg(message: _249.RewardsEstRequestProtoMsg): _249.RewardsEstRequest;
            toProto(message: _249.RewardsEstRequest): Uint8Array;
            toProtoMsg(message: _249.RewardsEstRequest): _249.RewardsEstRequestProtoMsg;
        };
        RewardsEstResponse: {
            typeUrl: string;
            encode(message: _249.RewardsEstResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.RewardsEstResponse;
            fromPartial(object: Partial<_249.RewardsEstResponse>): _249.RewardsEstResponse;
            fromAmino(object: _249.RewardsEstResponseAmino): _249.RewardsEstResponse;
            toAmino(message: _249.RewardsEstResponse): _249.RewardsEstResponseAmino;
            fromAminoMsg(object: _249.RewardsEstResponseAminoMsg): _249.RewardsEstResponse;
            toAminoMsg(message: _249.RewardsEstResponse): _249.RewardsEstResponseAminoMsg;
            fromProtoMsg(message: _249.RewardsEstResponseProtoMsg): _249.RewardsEstResponse;
            toProto(message: _249.RewardsEstResponse): Uint8Array;
            toProtoMsg(message: _249.RewardsEstResponse): _249.RewardsEstResponseProtoMsg;
        };
        QueryLockableDurationsRequest: {
            typeUrl: string;
            encode(_: _249.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.QueryLockableDurationsRequest;
            fromPartial(_: Partial<_249.QueryLockableDurationsRequest>): _249.QueryLockableDurationsRequest;
            fromAmino(_: _249.QueryLockableDurationsRequestAmino): _249.QueryLockableDurationsRequest;
            toAmino(_: _249.QueryLockableDurationsRequest): _249.QueryLockableDurationsRequestAmino;
            fromAminoMsg(object: _249.QueryLockableDurationsRequestAminoMsg): _249.QueryLockableDurationsRequest;
            toAminoMsg(message: _249.QueryLockableDurationsRequest): _249.QueryLockableDurationsRequestAminoMsg;
            fromProtoMsg(message: _249.QueryLockableDurationsRequestProtoMsg): _249.QueryLockableDurationsRequest;
            toProto(message: _249.QueryLockableDurationsRequest): Uint8Array;
            toProtoMsg(message: _249.QueryLockableDurationsRequest): _249.QueryLockableDurationsRequestProtoMsg;
        };
        QueryLockableDurationsResponse: {
            typeUrl: string;
            encode(message: _249.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _249.QueryLockableDurationsResponse;
            fromPartial(object: Partial<_249.QueryLockableDurationsResponse>): _249.QueryLockableDurationsResponse;
            fromAmino(object: _249.QueryLockableDurationsResponseAmino): _249.QueryLockableDurationsResponse;
            toAmino(message: _249.QueryLockableDurationsResponse): _249.QueryLockableDurationsResponseAmino;
            fromAminoMsg(object: _249.QueryLockableDurationsResponseAminoMsg): _249.QueryLockableDurationsResponse;
            toAminoMsg(message: _249.QueryLockableDurationsResponse): _249.QueryLockableDurationsResponseAminoMsg;
            fromProtoMsg(message: _249.QueryLockableDurationsResponseProtoMsg): _249.QueryLockableDurationsResponse;
            toProto(message: _249.QueryLockableDurationsResponse): Uint8Array;
            toProtoMsg(message: _249.QueryLockableDurationsResponse): _249.QueryLockableDurationsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _248.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _248.Params;
            fromPartial(object: Partial<_248.Params>): _248.Params;
            fromAmino(object: _248.ParamsAmino): _248.Params;
            toAmino(message: _248.Params): _248.ParamsAmino;
            fromAminoMsg(object: _248.ParamsAminoMsg): _248.Params;
            toAminoMsg(message: _248.Params): _248.ParamsAminoMsg;
            fromProtoMsg(message: _248.ParamsProtoMsg): _248.Params;
            toProto(message: _248.Params): Uint8Array;
            toProtoMsg(message: _248.Params): _248.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _247.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _247.GenesisState;
            fromPartial(object: Partial<_247.GenesisState>): _247.GenesisState;
            fromAmino(object: _247.GenesisStateAmino): _247.GenesisState;
            toAmino(message: _247.GenesisState): _247.GenesisStateAmino;
            fromAminoMsg(object: _247.GenesisStateAminoMsg): _247.GenesisState;
            toAminoMsg(message: _247.GenesisState): _247.GenesisStateAminoMsg;
            fromProtoMsg(message: _247.GenesisStateProtoMsg): _247.GenesisState;
            toProto(message: _247.GenesisState): Uint8Array;
            toProtoMsg(message: _247.GenesisState): _247.GenesisStateProtoMsg;
        };
        Gauge: {
            typeUrl: string;
            encode(message: _246.Gauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _246.Gauge;
            fromPartial(object: Partial<_246.Gauge>): _246.Gauge;
            fromAmino(object: _246.GaugeAmino): _246.Gauge;
            toAmino(message: _246.Gauge): _246.GaugeAmino;
            fromAminoMsg(object: _246.GaugeAminoMsg): _246.Gauge;
            toAminoMsg(message: _246.Gauge): _246.GaugeAminoMsg;
            fromProtoMsg(message: _246.GaugeProtoMsg): _246.Gauge;
            toProto(message: _246.Gauge): Uint8Array;
            toProtoMsg(message: _246.Gauge): _246.GaugeProtoMsg;
        };
        LockableDurationsInfo: {
            typeUrl: string;
            encode(message: _246.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _246.LockableDurationsInfo;
            fromPartial(object: Partial<_246.LockableDurationsInfo>): _246.LockableDurationsInfo;
            fromAmino(object: _246.LockableDurationsInfoAmino): _246.LockableDurationsInfo;
            toAmino(message: _246.LockableDurationsInfo): _246.LockableDurationsInfoAmino;
            fromAminoMsg(object: _246.LockableDurationsInfoAminoMsg): _246.LockableDurationsInfo;
            toAminoMsg(message: _246.LockableDurationsInfo): _246.LockableDurationsInfoAminoMsg;
            fromProtoMsg(message: _246.LockableDurationsInfoProtoMsg): _246.LockableDurationsInfo;
            toProto(message: _246.LockableDurationsInfo): Uint8Array;
            toProtoMsg(message: _246.LockableDurationsInfo): _246.LockableDurationsInfoProtoMsg;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _543.MsgClientImpl;
        QueryClientImpl: typeof _529.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _254.ModuleBalanceRequest): Promise<_254.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _254.ModuleLockedAmountRequest): Promise<_254.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _254.AccountUnlockableCoinsRequest): Promise<_254.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _254.AccountUnlockingCoinsRequest): Promise<_254.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _254.AccountLockedCoinsRequest): Promise<_254.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _254.AccountLockedPastTimeRequest): Promise<_254.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _254.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_254.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _254.AccountUnlockedBeforeTimeRequest): Promise<_254.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _254.AccountLockedPastTimeDenomRequest): Promise<_254.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _254.LockedDenomRequest): Promise<_254.LockedDenomResponse>;
            lockedByID(request: _254.LockedRequest): Promise<_254.LockedResponse>;
            syntheticLockupsByLockupID(request: _254.SyntheticLockupsByLockupIDRequest): Promise<_254.SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: _254.AccountLockedLongerDurationRequest): Promise<_254.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _254.AccountLockedDurationRequest): Promise<_254.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _254.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_254.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _254.AccountLockedLongerDurationDenomRequest): Promise<_254.AccountLockedLongerDurationDenomResponse>;
            params(request?: _254.QueryParamsRequest): Promise<_254.QueryParamsResponse>;
        };
        registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _255.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _255.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _255.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _255.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _255.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _255.MsgLockTokens): {
                    typeUrl: string;
                    value: _255.MsgLockTokens;
                };
                beginUnlockingAll(value: _255.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _255.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _255.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _255.MsgBeginUnlocking;
                };
                extendLockup(value: _255.MsgExtendLockup): {
                    typeUrl: string;
                    value: _255.MsgExtendLockup;
                };
                forceUnlock(value: _255.MsgForceUnlock): {
                    typeUrl: string;
                    value: _255.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _255.MsgLockTokens): {
                    typeUrl: string;
                    value: _255.MsgLockTokens;
                };
                beginUnlockingAll(value: _255.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _255.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _255.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _255.MsgBeginUnlocking;
                };
                extendLockup(value: _255.MsgExtendLockup): {
                    typeUrl: string;
                    value: _255.MsgExtendLockup;
                };
                forceUnlock(value: _255.MsgForceUnlock): {
                    typeUrl: string;
                    value: _255.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _255.MsgLockTokens) => _255.MsgLockTokensAmino;
                fromAmino: (object: _255.MsgLockTokensAmino) => _255.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _255.MsgBeginUnlockingAll) => _255.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _255.MsgBeginUnlockingAllAmino) => _255.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _255.MsgBeginUnlocking) => _255.MsgBeginUnlockingAmino;
                fromAmino: (object: _255.MsgBeginUnlockingAmino) => _255.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _255.MsgExtendLockup) => _255.MsgExtendLockupAmino;
                fromAmino: (object: _255.MsgExtendLockupAmino) => _255.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _255.MsgForceUnlock) => _255.MsgForceUnlockAmino;
                fromAmino: (object: _255.MsgForceUnlockAmino) => _255.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            typeUrl: string;
            encode(message: _255.MsgLockTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _255.MsgLockTokens;
            fromPartial(object: Partial<_255.MsgLockTokens>): _255.MsgLockTokens;
            fromAmino(object: _255.MsgLockTokensAmino): _255.MsgLockTokens;
            toAmino(message: _255.MsgLockTokens): _255.MsgLockTokensAmino;
            fromAminoMsg(object: _255.MsgLockTokensAminoMsg): _255.MsgLockTokens;
            toAminoMsg(message: _255.MsgLockTokens): _255.MsgLockTokensAminoMsg;
            fromProtoMsg(message: _255.MsgLockTokensProtoMsg): _255.MsgLockTokens;
            toProto(message: _255.MsgLockTokens): Uint8Array;
            toProtoMsg(message: _255.MsgLockTokens): _255.MsgLockTokensProtoMsg;
        };
        MsgLockTokensResponse: {
            typeUrl: string;
            encode(message: _255.MsgLockTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _255.MsgLockTokensResponse;
            fromPartial(object: Partial<_255.MsgLockTokensResponse>): _255.MsgLockTokensResponse;
            fromAmino(object: _255.MsgLockTokensResponseAmino): _255.MsgLockTokensResponse;
            toAmino(message: _255.MsgLockTokensResponse): _255.MsgLockTokensResponseAmino;
            fromAminoMsg(object: _255.MsgLockTokensResponseAminoMsg): _255.MsgLockTokensResponse;
            toAminoMsg(message: _255.MsgLockTokensResponse): _255.MsgLockTokensResponseAminoMsg;
            fromProtoMsg(message: _255.MsgLockTokensResponseProtoMsg): _255.MsgLockTokensResponse;
            toProto(message: _255.MsgLockTokensResponse): Uint8Array;
            toProtoMsg(message: _255.MsgLockTokensResponse): _255.MsgLockTokensResponseProtoMsg;
        };
        MsgBeginUnlockingAll: {
            typeUrl: string;
            encode(message: _255.MsgBeginUnlockingAll, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _255.MsgBeginUnlockingAll;
            fromPartial(object: Partial<_255.MsgBeginUnlockingAll>): _255.MsgBeginUnlockingAll;
            fromAmino(object: _255.MsgBeginUnlockingAllAmino): _255.MsgBeginUnlockingAll;
            toAmino(message: _255.MsgBeginUnlockingAll): _255.MsgBeginUnlockingAllAmino;
            fromAminoMsg(object: _255.MsgBeginUnlockingAllAminoMsg): _255.MsgBeginUnlockingAll;
            toAminoMsg(message: _255.MsgBeginUnlockingAll): _255.MsgBeginUnlockingAllAminoMsg;
            fromProtoMsg(message: _255.MsgBeginUnlockingAllProtoMsg): _255.MsgBeginUnlockingAll;
            toProto(message: _255.MsgBeginUnlockingAll): Uint8Array;
            toProtoMsg(message: _255.MsgBeginUnlockingAll): _255.MsgBeginUnlockingAllProtoMsg;
        };
        MsgBeginUnlockingAllResponse: {
            typeUrl: string;
            encode(message: _255.MsgBeginUnlockingAllResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _255.MsgBeginUnlockingAllResponse;
            fromPartial(object: Partial<_255.MsgBeginUnlockingAllResponse>): _255.MsgBeginUnlockingAllResponse;
            fromAmino(object: _255.MsgBeginUnlockingAllResponseAmino): _255.MsgBeginUnlockingAllResponse;
            toAmino(message: _255.MsgBeginUnlockingAllResponse): _255.MsgBeginUnlockingAllResponseAmino;
            fromAminoMsg(object: _255.MsgBeginUnlockingAllResponseAminoMsg): _255.MsgBeginUnlockingAllResponse;
            toAminoMsg(message: _255.MsgBeginUnlockingAllResponse): _255.MsgBeginUnlockingAllResponseAminoMsg;
            fromProtoMsg(message: _255.MsgBeginUnlockingAllResponseProtoMsg): _255.MsgBeginUnlockingAllResponse;
            toProto(message: _255.MsgBeginUnlockingAllResponse): Uint8Array;
            toProtoMsg(message: _255.MsgBeginUnlockingAllResponse): _255.MsgBeginUnlockingAllResponseProtoMsg;
        };
        MsgBeginUnlocking: {
            typeUrl: string;
            encode(message: _255.MsgBeginUnlocking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _255.MsgBeginUnlocking;
            fromPartial(object: Partial<_255.MsgBeginUnlocking>): _255.MsgBeginUnlocking;
            fromAmino(object: _255.MsgBeginUnlockingAmino): _255.MsgBeginUnlocking;
            toAmino(message: _255.MsgBeginUnlocking): _255.MsgBeginUnlockingAmino;
            fromAminoMsg(object: _255.MsgBeginUnlockingAminoMsg): _255.MsgBeginUnlocking;
            toAminoMsg(message: _255.MsgBeginUnlocking): _255.MsgBeginUnlockingAminoMsg;
            fromProtoMsg(message: _255.MsgBeginUnlockingProtoMsg): _255.MsgBeginUnlocking;
            toProto(message: _255.MsgBeginUnlocking): Uint8Array;
            toProtoMsg(message: _255.MsgBeginUnlocking): _255.MsgBeginUnlockingProtoMsg;
        };
        MsgBeginUnlockingResponse: {
            typeUrl: string;
            encode(message: _255.MsgBeginUnlockingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _255.MsgBeginUnlockingResponse;
            fromPartial(object: Partial<_255.MsgBeginUnlockingResponse>): _255.MsgBeginUnlockingResponse;
            fromAmino(object: _255.MsgBeginUnlockingResponseAmino): _255.MsgBeginUnlockingResponse;
            toAmino(message: _255.MsgBeginUnlockingResponse): _255.MsgBeginUnlockingResponseAmino;
            fromAminoMsg(object: _255.MsgBeginUnlockingResponseAminoMsg): _255.MsgBeginUnlockingResponse;
            toAminoMsg(message: _255.MsgBeginUnlockingResponse): _255.MsgBeginUnlockingResponseAminoMsg;
            fromProtoMsg(message: _255.MsgBeginUnlockingResponseProtoMsg): _255.MsgBeginUnlockingResponse;
            toProto(message: _255.MsgBeginUnlockingResponse): Uint8Array;
            toProtoMsg(message: _255.MsgBeginUnlockingResponse): _255.MsgBeginUnlockingResponseProtoMsg;
        };
        MsgExtendLockup: {
            typeUrl: string;
            encode(message: _255.MsgExtendLockup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _255.MsgExtendLockup;
            fromPartial(object: Partial<_255.MsgExtendLockup>): _255.MsgExtendLockup;
            fromAmino(object: _255.MsgExtendLockupAmino): _255.MsgExtendLockup;
            toAmino(message: _255.MsgExtendLockup): _255.MsgExtendLockupAmino;
            fromAminoMsg(object: _255.MsgExtendLockupAminoMsg): _255.MsgExtendLockup;
            toAminoMsg(message: _255.MsgExtendLockup): _255.MsgExtendLockupAminoMsg;
            fromProtoMsg(message: _255.MsgExtendLockupProtoMsg): _255.MsgExtendLockup;
            toProto(message: _255.MsgExtendLockup): Uint8Array;
            toProtoMsg(message: _255.MsgExtendLockup): _255.MsgExtendLockupProtoMsg;
        };
        MsgExtendLockupResponse: {
            typeUrl: string;
            encode(message: _255.MsgExtendLockupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _255.MsgExtendLockupResponse;
            fromPartial(object: Partial<_255.MsgExtendLockupResponse>): _255.MsgExtendLockupResponse;
            fromAmino(object: _255.MsgExtendLockupResponseAmino): _255.MsgExtendLockupResponse;
            toAmino(message: _255.MsgExtendLockupResponse): _255.MsgExtendLockupResponseAmino;
            fromAminoMsg(object: _255.MsgExtendLockupResponseAminoMsg): _255.MsgExtendLockupResponse;
            toAminoMsg(message: _255.MsgExtendLockupResponse): _255.MsgExtendLockupResponseAminoMsg;
            fromProtoMsg(message: _255.MsgExtendLockupResponseProtoMsg): _255.MsgExtendLockupResponse;
            toProto(message: _255.MsgExtendLockupResponse): Uint8Array;
            toProtoMsg(message: _255.MsgExtendLockupResponse): _255.MsgExtendLockupResponseProtoMsg;
        };
        MsgForceUnlock: {
            typeUrl: string;
            encode(message: _255.MsgForceUnlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _255.MsgForceUnlock;
            fromPartial(object: Partial<_255.MsgForceUnlock>): _255.MsgForceUnlock;
            fromAmino(object: _255.MsgForceUnlockAmino): _255.MsgForceUnlock;
            toAmino(message: _255.MsgForceUnlock): _255.MsgForceUnlockAmino;
            fromAminoMsg(object: _255.MsgForceUnlockAminoMsg): _255.MsgForceUnlock;
            toAminoMsg(message: _255.MsgForceUnlock): _255.MsgForceUnlockAminoMsg;
            fromProtoMsg(message: _255.MsgForceUnlockProtoMsg): _255.MsgForceUnlock;
            toProto(message: _255.MsgForceUnlock): Uint8Array;
            toProtoMsg(message: _255.MsgForceUnlock): _255.MsgForceUnlockProtoMsg;
        };
        MsgForceUnlockResponse: {
            typeUrl: string;
            encode(message: _255.MsgForceUnlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _255.MsgForceUnlockResponse;
            fromPartial(object: Partial<_255.MsgForceUnlockResponse>): _255.MsgForceUnlockResponse;
            fromAmino(object: _255.MsgForceUnlockResponseAmino): _255.MsgForceUnlockResponse;
            toAmino(message: _255.MsgForceUnlockResponse): _255.MsgForceUnlockResponseAmino;
            fromAminoMsg(object: _255.MsgForceUnlockResponseAminoMsg): _255.MsgForceUnlockResponse;
            toAminoMsg(message: _255.MsgForceUnlockResponse): _255.MsgForceUnlockResponseAminoMsg;
            fromProtoMsg(message: _255.MsgForceUnlockResponseProtoMsg): _255.MsgForceUnlockResponse;
            toProto(message: _255.MsgForceUnlockResponse): Uint8Array;
            toProtoMsg(message: _255.MsgForceUnlockResponse): _255.MsgForceUnlockResponseProtoMsg;
        };
        ModuleBalanceRequest: {
            typeUrl: string;
            encode(_: _254.ModuleBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.ModuleBalanceRequest;
            fromPartial(_: Partial<_254.ModuleBalanceRequest>): _254.ModuleBalanceRequest;
            fromAmino(_: _254.ModuleBalanceRequestAmino): _254.ModuleBalanceRequest;
            toAmino(_: _254.ModuleBalanceRequest): _254.ModuleBalanceRequestAmino;
            fromAminoMsg(object: _254.ModuleBalanceRequestAminoMsg): _254.ModuleBalanceRequest;
            toAminoMsg(message: _254.ModuleBalanceRequest): _254.ModuleBalanceRequestAminoMsg;
            fromProtoMsg(message: _254.ModuleBalanceRequestProtoMsg): _254.ModuleBalanceRequest;
            toProto(message: _254.ModuleBalanceRequest): Uint8Array;
            toProtoMsg(message: _254.ModuleBalanceRequest): _254.ModuleBalanceRequestProtoMsg;
        };
        ModuleBalanceResponse: {
            typeUrl: string;
            encode(message: _254.ModuleBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.ModuleBalanceResponse;
            fromPartial(object: Partial<_254.ModuleBalanceResponse>): _254.ModuleBalanceResponse;
            fromAmino(object: _254.ModuleBalanceResponseAmino): _254.ModuleBalanceResponse;
            toAmino(message: _254.ModuleBalanceResponse): _254.ModuleBalanceResponseAmino;
            fromAminoMsg(object: _254.ModuleBalanceResponseAminoMsg): _254.ModuleBalanceResponse;
            toAminoMsg(message: _254.ModuleBalanceResponse): _254.ModuleBalanceResponseAminoMsg;
            fromProtoMsg(message: _254.ModuleBalanceResponseProtoMsg): _254.ModuleBalanceResponse;
            toProto(message: _254.ModuleBalanceResponse): Uint8Array;
            toProtoMsg(message: _254.ModuleBalanceResponse): _254.ModuleBalanceResponseProtoMsg;
        };
        ModuleLockedAmountRequest: {
            typeUrl: string;
            encode(_: _254.ModuleLockedAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.ModuleLockedAmountRequest;
            fromPartial(_: Partial<_254.ModuleLockedAmountRequest>): _254.ModuleLockedAmountRequest;
            fromAmino(_: _254.ModuleLockedAmountRequestAmino): _254.ModuleLockedAmountRequest;
            toAmino(_: _254.ModuleLockedAmountRequest): _254.ModuleLockedAmountRequestAmino;
            fromAminoMsg(object: _254.ModuleLockedAmountRequestAminoMsg): _254.ModuleLockedAmountRequest;
            toAminoMsg(message: _254.ModuleLockedAmountRequest): _254.ModuleLockedAmountRequestAminoMsg;
            fromProtoMsg(message: _254.ModuleLockedAmountRequestProtoMsg): _254.ModuleLockedAmountRequest;
            toProto(message: _254.ModuleLockedAmountRequest): Uint8Array;
            toProtoMsg(message: _254.ModuleLockedAmountRequest): _254.ModuleLockedAmountRequestProtoMsg;
        };
        ModuleLockedAmountResponse: {
            typeUrl: string;
            encode(message: _254.ModuleLockedAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.ModuleLockedAmountResponse;
            fromPartial(object: Partial<_254.ModuleLockedAmountResponse>): _254.ModuleLockedAmountResponse;
            fromAmino(object: _254.ModuleLockedAmountResponseAmino): _254.ModuleLockedAmountResponse;
            toAmino(message: _254.ModuleLockedAmountResponse): _254.ModuleLockedAmountResponseAmino;
            fromAminoMsg(object: _254.ModuleLockedAmountResponseAminoMsg): _254.ModuleLockedAmountResponse;
            toAminoMsg(message: _254.ModuleLockedAmountResponse): _254.ModuleLockedAmountResponseAminoMsg;
            fromProtoMsg(message: _254.ModuleLockedAmountResponseProtoMsg): _254.ModuleLockedAmountResponse;
            toProto(message: _254.ModuleLockedAmountResponse): Uint8Array;
            toProtoMsg(message: _254.ModuleLockedAmountResponse): _254.ModuleLockedAmountResponseProtoMsg;
        };
        AccountUnlockableCoinsRequest: {
            typeUrl: string;
            encode(message: _254.AccountUnlockableCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountUnlockableCoinsRequest;
            fromPartial(object: Partial<_254.AccountUnlockableCoinsRequest>): _254.AccountUnlockableCoinsRequest;
            fromAmino(object: _254.AccountUnlockableCoinsRequestAmino): _254.AccountUnlockableCoinsRequest;
            toAmino(message: _254.AccountUnlockableCoinsRequest): _254.AccountUnlockableCoinsRequestAmino;
            fromAminoMsg(object: _254.AccountUnlockableCoinsRequestAminoMsg): _254.AccountUnlockableCoinsRequest;
            toAminoMsg(message: _254.AccountUnlockableCoinsRequest): _254.AccountUnlockableCoinsRequestAminoMsg;
            fromProtoMsg(message: _254.AccountUnlockableCoinsRequestProtoMsg): _254.AccountUnlockableCoinsRequest;
            toProto(message: _254.AccountUnlockableCoinsRequest): Uint8Array;
            toProtoMsg(message: _254.AccountUnlockableCoinsRequest): _254.AccountUnlockableCoinsRequestProtoMsg;
        };
        AccountUnlockableCoinsResponse: {
            typeUrl: string;
            encode(message: _254.AccountUnlockableCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountUnlockableCoinsResponse;
            fromPartial(object: Partial<_254.AccountUnlockableCoinsResponse>): _254.AccountUnlockableCoinsResponse;
            fromAmino(object: _254.AccountUnlockableCoinsResponseAmino): _254.AccountUnlockableCoinsResponse;
            toAmino(message: _254.AccountUnlockableCoinsResponse): _254.AccountUnlockableCoinsResponseAmino;
            fromAminoMsg(object: _254.AccountUnlockableCoinsResponseAminoMsg): _254.AccountUnlockableCoinsResponse;
            toAminoMsg(message: _254.AccountUnlockableCoinsResponse): _254.AccountUnlockableCoinsResponseAminoMsg;
            fromProtoMsg(message: _254.AccountUnlockableCoinsResponseProtoMsg): _254.AccountUnlockableCoinsResponse;
            toProto(message: _254.AccountUnlockableCoinsResponse): Uint8Array;
            toProtoMsg(message: _254.AccountUnlockableCoinsResponse): _254.AccountUnlockableCoinsResponseProtoMsg;
        };
        AccountUnlockingCoinsRequest: {
            typeUrl: string;
            encode(message: _254.AccountUnlockingCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountUnlockingCoinsRequest;
            fromPartial(object: Partial<_254.AccountUnlockingCoinsRequest>): _254.AccountUnlockingCoinsRequest;
            fromAmino(object: _254.AccountUnlockingCoinsRequestAmino): _254.AccountUnlockingCoinsRequest;
            toAmino(message: _254.AccountUnlockingCoinsRequest): _254.AccountUnlockingCoinsRequestAmino;
            fromAminoMsg(object: _254.AccountUnlockingCoinsRequestAminoMsg): _254.AccountUnlockingCoinsRequest;
            toAminoMsg(message: _254.AccountUnlockingCoinsRequest): _254.AccountUnlockingCoinsRequestAminoMsg;
            fromProtoMsg(message: _254.AccountUnlockingCoinsRequestProtoMsg): _254.AccountUnlockingCoinsRequest;
            toProto(message: _254.AccountUnlockingCoinsRequest): Uint8Array;
            toProtoMsg(message: _254.AccountUnlockingCoinsRequest): _254.AccountUnlockingCoinsRequestProtoMsg;
        };
        AccountUnlockingCoinsResponse: {
            typeUrl: string;
            encode(message: _254.AccountUnlockingCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountUnlockingCoinsResponse;
            fromPartial(object: Partial<_254.AccountUnlockingCoinsResponse>): _254.AccountUnlockingCoinsResponse;
            fromAmino(object: _254.AccountUnlockingCoinsResponseAmino): _254.AccountUnlockingCoinsResponse;
            toAmino(message: _254.AccountUnlockingCoinsResponse): _254.AccountUnlockingCoinsResponseAmino;
            fromAminoMsg(object: _254.AccountUnlockingCoinsResponseAminoMsg): _254.AccountUnlockingCoinsResponse;
            toAminoMsg(message: _254.AccountUnlockingCoinsResponse): _254.AccountUnlockingCoinsResponseAminoMsg;
            fromProtoMsg(message: _254.AccountUnlockingCoinsResponseProtoMsg): _254.AccountUnlockingCoinsResponse;
            toProto(message: _254.AccountUnlockingCoinsResponse): Uint8Array;
            toProtoMsg(message: _254.AccountUnlockingCoinsResponse): _254.AccountUnlockingCoinsResponseProtoMsg;
        };
        AccountLockedCoinsRequest: {
            typeUrl: string;
            encode(message: _254.AccountLockedCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedCoinsRequest;
            fromPartial(object: Partial<_254.AccountLockedCoinsRequest>): _254.AccountLockedCoinsRequest;
            fromAmino(object: _254.AccountLockedCoinsRequestAmino): _254.AccountLockedCoinsRequest;
            toAmino(message: _254.AccountLockedCoinsRequest): _254.AccountLockedCoinsRequestAmino;
            fromAminoMsg(object: _254.AccountLockedCoinsRequestAminoMsg): _254.AccountLockedCoinsRequest;
            toAminoMsg(message: _254.AccountLockedCoinsRequest): _254.AccountLockedCoinsRequestAminoMsg;
            fromProtoMsg(message: _254.AccountLockedCoinsRequestProtoMsg): _254.AccountLockedCoinsRequest;
            toProto(message: _254.AccountLockedCoinsRequest): Uint8Array;
            toProtoMsg(message: _254.AccountLockedCoinsRequest): _254.AccountLockedCoinsRequestProtoMsg;
        };
        AccountLockedCoinsResponse: {
            typeUrl: string;
            encode(message: _254.AccountLockedCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedCoinsResponse;
            fromPartial(object: Partial<_254.AccountLockedCoinsResponse>): _254.AccountLockedCoinsResponse;
            fromAmino(object: _254.AccountLockedCoinsResponseAmino): _254.AccountLockedCoinsResponse;
            toAmino(message: _254.AccountLockedCoinsResponse): _254.AccountLockedCoinsResponseAmino;
            fromAminoMsg(object: _254.AccountLockedCoinsResponseAminoMsg): _254.AccountLockedCoinsResponse;
            toAminoMsg(message: _254.AccountLockedCoinsResponse): _254.AccountLockedCoinsResponseAminoMsg;
            fromProtoMsg(message: _254.AccountLockedCoinsResponseProtoMsg): _254.AccountLockedCoinsResponse;
            toProto(message: _254.AccountLockedCoinsResponse): Uint8Array;
            toProtoMsg(message: _254.AccountLockedCoinsResponse): _254.AccountLockedCoinsResponseProtoMsg;
        };
        AccountLockedPastTimeRequest: {
            typeUrl: string;
            encode(message: _254.AccountLockedPastTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedPastTimeRequest;
            fromPartial(object: Partial<_254.AccountLockedPastTimeRequest>): _254.AccountLockedPastTimeRequest;
            fromAmino(object: _254.AccountLockedPastTimeRequestAmino): _254.AccountLockedPastTimeRequest;
            toAmino(message: _254.AccountLockedPastTimeRequest): _254.AccountLockedPastTimeRequestAmino;
            fromAminoMsg(object: _254.AccountLockedPastTimeRequestAminoMsg): _254.AccountLockedPastTimeRequest;
            toAminoMsg(message: _254.AccountLockedPastTimeRequest): _254.AccountLockedPastTimeRequestAminoMsg;
            fromProtoMsg(message: _254.AccountLockedPastTimeRequestProtoMsg): _254.AccountLockedPastTimeRequest;
            toProto(message: _254.AccountLockedPastTimeRequest): Uint8Array;
            toProtoMsg(message: _254.AccountLockedPastTimeRequest): _254.AccountLockedPastTimeRequestProtoMsg;
        };
        AccountLockedPastTimeResponse: {
            typeUrl: string;
            encode(message: _254.AccountLockedPastTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedPastTimeResponse;
            fromPartial(object: Partial<_254.AccountLockedPastTimeResponse>): _254.AccountLockedPastTimeResponse;
            fromAmino(object: _254.AccountLockedPastTimeResponseAmino): _254.AccountLockedPastTimeResponse;
            toAmino(message: _254.AccountLockedPastTimeResponse): _254.AccountLockedPastTimeResponseAmino;
            fromAminoMsg(object: _254.AccountLockedPastTimeResponseAminoMsg): _254.AccountLockedPastTimeResponse;
            toAminoMsg(message: _254.AccountLockedPastTimeResponse): _254.AccountLockedPastTimeResponseAminoMsg;
            fromProtoMsg(message: _254.AccountLockedPastTimeResponseProtoMsg): _254.AccountLockedPastTimeResponse;
            toProto(message: _254.AccountLockedPastTimeResponse): Uint8Array;
            toProtoMsg(message: _254.AccountLockedPastTimeResponse): _254.AccountLockedPastTimeResponseProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _254.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_254.AccountLockedPastTimeNotUnlockingOnlyRequest>): _254.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromAmino(object: _254.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _254.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _254.AccountLockedPastTimeNotUnlockingOnlyRequest): _254.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _254.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): _254.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAminoMsg(message: _254.AccountLockedPastTimeNotUnlockingOnlyRequest): _254.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _254.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): _254.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toProto(message: _254.AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _254.AccountLockedPastTimeNotUnlockingOnlyRequest): _254.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _254.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_254.AccountLockedPastTimeNotUnlockingOnlyResponse>): _254.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromAmino(object: _254.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _254.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _254.AccountLockedPastTimeNotUnlockingOnlyResponse): _254.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _254.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): _254.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAminoMsg(message: _254.AccountLockedPastTimeNotUnlockingOnlyResponse): _254.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _254.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): _254.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toProto(message: _254.AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _254.AccountLockedPastTimeNotUnlockingOnlyResponse): _254.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
        };
        AccountUnlockedBeforeTimeRequest: {
            typeUrl: string;
            encode(message: _254.AccountUnlockedBeforeTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountUnlockedBeforeTimeRequest;
            fromPartial(object: Partial<_254.AccountUnlockedBeforeTimeRequest>): _254.AccountUnlockedBeforeTimeRequest;
            fromAmino(object: _254.AccountUnlockedBeforeTimeRequestAmino): _254.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _254.AccountUnlockedBeforeTimeRequest): _254.AccountUnlockedBeforeTimeRequestAmino;
            fromAminoMsg(object: _254.AccountUnlockedBeforeTimeRequestAminoMsg): _254.AccountUnlockedBeforeTimeRequest;
            toAminoMsg(message: _254.AccountUnlockedBeforeTimeRequest): _254.AccountUnlockedBeforeTimeRequestAminoMsg;
            fromProtoMsg(message: _254.AccountUnlockedBeforeTimeRequestProtoMsg): _254.AccountUnlockedBeforeTimeRequest;
            toProto(message: _254.AccountUnlockedBeforeTimeRequest): Uint8Array;
            toProtoMsg(message: _254.AccountUnlockedBeforeTimeRequest): _254.AccountUnlockedBeforeTimeRequestProtoMsg;
        };
        AccountUnlockedBeforeTimeResponse: {
            typeUrl: string;
            encode(message: _254.AccountUnlockedBeforeTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountUnlockedBeforeTimeResponse;
            fromPartial(object: Partial<_254.AccountUnlockedBeforeTimeResponse>): _254.AccountUnlockedBeforeTimeResponse;
            fromAmino(object: _254.AccountUnlockedBeforeTimeResponseAmino): _254.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _254.AccountUnlockedBeforeTimeResponse): _254.AccountUnlockedBeforeTimeResponseAmino;
            fromAminoMsg(object: _254.AccountUnlockedBeforeTimeResponseAminoMsg): _254.AccountUnlockedBeforeTimeResponse;
            toAminoMsg(message: _254.AccountUnlockedBeforeTimeResponse): _254.AccountUnlockedBeforeTimeResponseAminoMsg;
            fromProtoMsg(message: _254.AccountUnlockedBeforeTimeResponseProtoMsg): _254.AccountUnlockedBeforeTimeResponse;
            toProto(message: _254.AccountUnlockedBeforeTimeResponse): Uint8Array;
            toProtoMsg(message: _254.AccountUnlockedBeforeTimeResponse): _254.AccountUnlockedBeforeTimeResponseProtoMsg;
        };
        AccountLockedPastTimeDenomRequest: {
            typeUrl: string;
            encode(message: _254.AccountLockedPastTimeDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedPastTimeDenomRequest;
            fromPartial(object: Partial<_254.AccountLockedPastTimeDenomRequest>): _254.AccountLockedPastTimeDenomRequest;
            fromAmino(object: _254.AccountLockedPastTimeDenomRequestAmino): _254.AccountLockedPastTimeDenomRequest;
            toAmino(message: _254.AccountLockedPastTimeDenomRequest): _254.AccountLockedPastTimeDenomRequestAmino;
            fromAminoMsg(object: _254.AccountLockedPastTimeDenomRequestAminoMsg): _254.AccountLockedPastTimeDenomRequest;
            toAminoMsg(message: _254.AccountLockedPastTimeDenomRequest): _254.AccountLockedPastTimeDenomRequestAminoMsg;
            fromProtoMsg(message: _254.AccountLockedPastTimeDenomRequestProtoMsg): _254.AccountLockedPastTimeDenomRequest;
            toProto(message: _254.AccountLockedPastTimeDenomRequest): Uint8Array;
            toProtoMsg(message: _254.AccountLockedPastTimeDenomRequest): _254.AccountLockedPastTimeDenomRequestProtoMsg;
        };
        AccountLockedPastTimeDenomResponse: {
            typeUrl: string;
            encode(message: _254.AccountLockedPastTimeDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedPastTimeDenomResponse;
            fromPartial(object: Partial<_254.AccountLockedPastTimeDenomResponse>): _254.AccountLockedPastTimeDenomResponse;
            fromAmino(object: _254.AccountLockedPastTimeDenomResponseAmino): _254.AccountLockedPastTimeDenomResponse;
            toAmino(message: _254.AccountLockedPastTimeDenomResponse): _254.AccountLockedPastTimeDenomResponseAmino;
            fromAminoMsg(object: _254.AccountLockedPastTimeDenomResponseAminoMsg): _254.AccountLockedPastTimeDenomResponse;
            toAminoMsg(message: _254.AccountLockedPastTimeDenomResponse): _254.AccountLockedPastTimeDenomResponseAminoMsg;
            fromProtoMsg(message: _254.AccountLockedPastTimeDenomResponseProtoMsg): _254.AccountLockedPastTimeDenomResponse;
            toProto(message: _254.AccountLockedPastTimeDenomResponse): Uint8Array;
            toProtoMsg(message: _254.AccountLockedPastTimeDenomResponse): _254.AccountLockedPastTimeDenomResponseProtoMsg;
        };
        LockedDenomRequest: {
            typeUrl: string;
            encode(message: _254.LockedDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.LockedDenomRequest;
            fromPartial(object: Partial<_254.LockedDenomRequest>): _254.LockedDenomRequest;
            fromAmino(object: _254.LockedDenomRequestAmino): _254.LockedDenomRequest;
            toAmino(message: _254.LockedDenomRequest): _254.LockedDenomRequestAmino;
            fromAminoMsg(object: _254.LockedDenomRequestAminoMsg): _254.LockedDenomRequest;
            toAminoMsg(message: _254.LockedDenomRequest): _254.LockedDenomRequestAminoMsg;
            fromProtoMsg(message: _254.LockedDenomRequestProtoMsg): _254.LockedDenomRequest;
            toProto(message: _254.LockedDenomRequest): Uint8Array;
            toProtoMsg(message: _254.LockedDenomRequest): _254.LockedDenomRequestProtoMsg;
        };
        LockedDenomResponse: {
            typeUrl: string;
            encode(message: _254.LockedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.LockedDenomResponse;
            fromPartial(object: Partial<_254.LockedDenomResponse>): _254.LockedDenomResponse;
            fromAmino(object: _254.LockedDenomResponseAmino): _254.LockedDenomResponse;
            toAmino(message: _254.LockedDenomResponse): _254.LockedDenomResponseAmino;
            fromAminoMsg(object: _254.LockedDenomResponseAminoMsg): _254.LockedDenomResponse;
            toAminoMsg(message: _254.LockedDenomResponse): _254.LockedDenomResponseAminoMsg;
            fromProtoMsg(message: _254.LockedDenomResponseProtoMsg): _254.LockedDenomResponse;
            toProto(message: _254.LockedDenomResponse): Uint8Array;
            toProtoMsg(message: _254.LockedDenomResponse): _254.LockedDenomResponseProtoMsg;
        };
        LockedRequest: {
            typeUrl: string;
            encode(message: _254.LockedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.LockedRequest;
            fromPartial(object: Partial<_254.LockedRequest>): _254.LockedRequest;
            fromAmino(object: _254.LockedRequestAmino): _254.LockedRequest;
            toAmino(message: _254.LockedRequest): _254.LockedRequestAmino;
            fromAminoMsg(object: _254.LockedRequestAminoMsg): _254.LockedRequest;
            toAminoMsg(message: _254.LockedRequest): _254.LockedRequestAminoMsg;
            fromProtoMsg(message: _254.LockedRequestProtoMsg): _254.LockedRequest;
            toProto(message: _254.LockedRequest): Uint8Array;
            toProtoMsg(message: _254.LockedRequest): _254.LockedRequestProtoMsg;
        };
        LockedResponse: {
            typeUrl: string;
            encode(message: _254.LockedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.LockedResponse;
            fromPartial(object: Partial<_254.LockedResponse>): _254.LockedResponse;
            fromAmino(object: _254.LockedResponseAmino): _254.LockedResponse;
            toAmino(message: _254.LockedResponse): _254.LockedResponseAmino;
            fromAminoMsg(object: _254.LockedResponseAminoMsg): _254.LockedResponse;
            toAminoMsg(message: _254.LockedResponse): _254.LockedResponseAminoMsg;
            fromProtoMsg(message: _254.LockedResponseProtoMsg): _254.LockedResponse;
            toProto(message: _254.LockedResponse): Uint8Array;
            toProtoMsg(message: _254.LockedResponse): _254.LockedResponseProtoMsg;
        };
        SyntheticLockupsByLockupIDRequest: {
            typeUrl: string;
            encode(message: _254.SyntheticLockupsByLockupIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.SyntheticLockupsByLockupIDRequest;
            fromPartial(object: Partial<_254.SyntheticLockupsByLockupIDRequest>): _254.SyntheticLockupsByLockupIDRequest;
            fromAmino(object: _254.SyntheticLockupsByLockupIDRequestAmino): _254.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _254.SyntheticLockupsByLockupIDRequest): _254.SyntheticLockupsByLockupIDRequestAmino;
            fromAminoMsg(object: _254.SyntheticLockupsByLockupIDRequestAminoMsg): _254.SyntheticLockupsByLockupIDRequest;
            toAminoMsg(message: _254.SyntheticLockupsByLockupIDRequest): _254.SyntheticLockupsByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _254.SyntheticLockupsByLockupIDRequestProtoMsg): _254.SyntheticLockupsByLockupIDRequest;
            toProto(message: _254.SyntheticLockupsByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _254.SyntheticLockupsByLockupIDRequest): _254.SyntheticLockupsByLockupIDRequestProtoMsg;
        };
        SyntheticLockupsByLockupIDResponse: {
            typeUrl: string;
            encode(message: _254.SyntheticLockupsByLockupIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.SyntheticLockupsByLockupIDResponse;
            fromPartial(object: Partial<_254.SyntheticLockupsByLockupIDResponse>): _254.SyntheticLockupsByLockupIDResponse;
            fromAmino(object: _254.SyntheticLockupsByLockupIDResponseAmino): _254.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _254.SyntheticLockupsByLockupIDResponse): _254.SyntheticLockupsByLockupIDResponseAmino;
            fromAminoMsg(object: _254.SyntheticLockupsByLockupIDResponseAminoMsg): _254.SyntheticLockupsByLockupIDResponse;
            toAminoMsg(message: _254.SyntheticLockupsByLockupIDResponse): _254.SyntheticLockupsByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _254.SyntheticLockupsByLockupIDResponseProtoMsg): _254.SyntheticLockupsByLockupIDResponse;
            toProto(message: _254.SyntheticLockupsByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _254.SyntheticLockupsByLockupIDResponse): _254.SyntheticLockupsByLockupIDResponseProtoMsg;
        };
        AccountLockedLongerDurationRequest: {
            typeUrl: string;
            encode(message: _254.AccountLockedLongerDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedLongerDurationRequest;
            fromPartial(object: Partial<_254.AccountLockedLongerDurationRequest>): _254.AccountLockedLongerDurationRequest;
            fromAmino(object: _254.AccountLockedLongerDurationRequestAmino): _254.AccountLockedLongerDurationRequest;
            toAmino(message: _254.AccountLockedLongerDurationRequest): _254.AccountLockedLongerDurationRequestAmino;
            fromAminoMsg(object: _254.AccountLockedLongerDurationRequestAminoMsg): _254.AccountLockedLongerDurationRequest;
            toAminoMsg(message: _254.AccountLockedLongerDurationRequest): _254.AccountLockedLongerDurationRequestAminoMsg;
            fromProtoMsg(message: _254.AccountLockedLongerDurationRequestProtoMsg): _254.AccountLockedLongerDurationRequest;
            toProto(message: _254.AccountLockedLongerDurationRequest): Uint8Array;
            toProtoMsg(message: _254.AccountLockedLongerDurationRequest): _254.AccountLockedLongerDurationRequestProtoMsg;
        };
        AccountLockedLongerDurationResponse: {
            typeUrl: string;
            encode(message: _254.AccountLockedLongerDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedLongerDurationResponse;
            fromPartial(object: Partial<_254.AccountLockedLongerDurationResponse>): _254.AccountLockedLongerDurationResponse;
            fromAmino(object: _254.AccountLockedLongerDurationResponseAmino): _254.AccountLockedLongerDurationResponse;
            toAmino(message: _254.AccountLockedLongerDurationResponse): _254.AccountLockedLongerDurationResponseAmino;
            fromAminoMsg(object: _254.AccountLockedLongerDurationResponseAminoMsg): _254.AccountLockedLongerDurationResponse;
            toAminoMsg(message: _254.AccountLockedLongerDurationResponse): _254.AccountLockedLongerDurationResponseAminoMsg;
            fromProtoMsg(message: _254.AccountLockedLongerDurationResponseProtoMsg): _254.AccountLockedLongerDurationResponse;
            toProto(message: _254.AccountLockedLongerDurationResponse): Uint8Array;
            toProtoMsg(message: _254.AccountLockedLongerDurationResponse): _254.AccountLockedLongerDurationResponseProtoMsg;
        };
        AccountLockedDurationRequest: {
            typeUrl: string;
            encode(message: _254.AccountLockedDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedDurationRequest;
            fromPartial(object: Partial<_254.AccountLockedDurationRequest>): _254.AccountLockedDurationRequest;
            fromAmino(object: _254.AccountLockedDurationRequestAmino): _254.AccountLockedDurationRequest;
            toAmino(message: _254.AccountLockedDurationRequest): _254.AccountLockedDurationRequestAmino;
            fromAminoMsg(object: _254.AccountLockedDurationRequestAminoMsg): _254.AccountLockedDurationRequest;
            toAminoMsg(message: _254.AccountLockedDurationRequest): _254.AccountLockedDurationRequestAminoMsg;
            fromProtoMsg(message: _254.AccountLockedDurationRequestProtoMsg): _254.AccountLockedDurationRequest;
            toProto(message: _254.AccountLockedDurationRequest): Uint8Array;
            toProtoMsg(message: _254.AccountLockedDurationRequest): _254.AccountLockedDurationRequestProtoMsg;
        };
        AccountLockedDurationResponse: {
            typeUrl: string;
            encode(message: _254.AccountLockedDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedDurationResponse;
            fromPartial(object: Partial<_254.AccountLockedDurationResponse>): _254.AccountLockedDurationResponse;
            fromAmino(object: _254.AccountLockedDurationResponseAmino): _254.AccountLockedDurationResponse;
            toAmino(message: _254.AccountLockedDurationResponse): _254.AccountLockedDurationResponseAmino;
            fromAminoMsg(object: _254.AccountLockedDurationResponseAminoMsg): _254.AccountLockedDurationResponse;
            toAminoMsg(message: _254.AccountLockedDurationResponse): _254.AccountLockedDurationResponseAminoMsg;
            fromProtoMsg(message: _254.AccountLockedDurationResponseProtoMsg): _254.AccountLockedDurationResponse;
            toProto(message: _254.AccountLockedDurationResponse): Uint8Array;
            toProtoMsg(message: _254.AccountLockedDurationResponse): _254.AccountLockedDurationResponseProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _254.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromPartial(object: Partial<_254.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _254.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromAmino(object: _254.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _254.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _254.AccountLockedLongerDurationNotUnlockingOnlyRequest): _254.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _254.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): _254.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAminoMsg(message: _254.AccountLockedLongerDurationNotUnlockingOnlyRequest): _254.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _254.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): _254.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toProto(message: _254.AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _254.AccountLockedLongerDurationNotUnlockingOnlyRequest): _254.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _254.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromPartial(object: Partial<_254.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _254.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromAmino(object: _254.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _254.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _254.AccountLockedLongerDurationNotUnlockingOnlyResponse): _254.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _254.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): _254.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAminoMsg(message: _254.AccountLockedLongerDurationNotUnlockingOnlyResponse): _254.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _254.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): _254.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toProto(message: _254.AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _254.AccountLockedLongerDurationNotUnlockingOnlyResponse): _254.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
        };
        AccountLockedLongerDurationDenomRequest: {
            typeUrl: string;
            encode(message: _254.AccountLockedLongerDurationDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedLongerDurationDenomRequest;
            fromPartial(object: Partial<_254.AccountLockedLongerDurationDenomRequest>): _254.AccountLockedLongerDurationDenomRequest;
            fromAmino(object: _254.AccountLockedLongerDurationDenomRequestAmino): _254.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _254.AccountLockedLongerDurationDenomRequest): _254.AccountLockedLongerDurationDenomRequestAmino;
            fromAminoMsg(object: _254.AccountLockedLongerDurationDenomRequestAminoMsg): _254.AccountLockedLongerDurationDenomRequest;
            toAminoMsg(message: _254.AccountLockedLongerDurationDenomRequest): _254.AccountLockedLongerDurationDenomRequestAminoMsg;
            fromProtoMsg(message: _254.AccountLockedLongerDurationDenomRequestProtoMsg): _254.AccountLockedLongerDurationDenomRequest;
            toProto(message: _254.AccountLockedLongerDurationDenomRequest): Uint8Array;
            toProtoMsg(message: _254.AccountLockedLongerDurationDenomRequest): _254.AccountLockedLongerDurationDenomRequestProtoMsg;
        };
        AccountLockedLongerDurationDenomResponse: {
            typeUrl: string;
            encode(message: _254.AccountLockedLongerDurationDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.AccountLockedLongerDurationDenomResponse;
            fromPartial(object: Partial<_254.AccountLockedLongerDurationDenomResponse>): _254.AccountLockedLongerDurationDenomResponse;
            fromAmino(object: _254.AccountLockedLongerDurationDenomResponseAmino): _254.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _254.AccountLockedLongerDurationDenomResponse): _254.AccountLockedLongerDurationDenomResponseAmino;
            fromAminoMsg(object: _254.AccountLockedLongerDurationDenomResponseAminoMsg): _254.AccountLockedLongerDurationDenomResponse;
            toAminoMsg(message: _254.AccountLockedLongerDurationDenomResponse): _254.AccountLockedLongerDurationDenomResponseAminoMsg;
            fromProtoMsg(message: _254.AccountLockedLongerDurationDenomResponseProtoMsg): _254.AccountLockedLongerDurationDenomResponse;
            toProto(message: _254.AccountLockedLongerDurationDenomResponse): Uint8Array;
            toProtoMsg(message: _254.AccountLockedLongerDurationDenomResponse): _254.AccountLockedLongerDurationDenomResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _254.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.QueryParamsRequest;
            fromPartial(_: Partial<_254.QueryParamsRequest>): _254.QueryParamsRequest;
            fromAmino(_: _254.QueryParamsRequestAmino): _254.QueryParamsRequest;
            toAmino(_: _254.QueryParamsRequest): _254.QueryParamsRequestAmino;
            fromAminoMsg(object: _254.QueryParamsRequestAminoMsg): _254.QueryParamsRequest;
            toAminoMsg(message: _254.QueryParamsRequest): _254.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _254.QueryParamsRequestProtoMsg): _254.QueryParamsRequest;
            toProto(message: _254.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _254.QueryParamsRequest): _254.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _254.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _254.QueryParamsResponse;
            fromPartial(object: Partial<_254.QueryParamsResponse>): _254.QueryParamsResponse;
            fromAmino(object: _254.QueryParamsResponseAmino): _254.QueryParamsResponse;
            toAmino(message: _254.QueryParamsResponse): _254.QueryParamsResponseAmino;
            fromAminoMsg(object: _254.QueryParamsResponseAminoMsg): _254.QueryParamsResponse;
            toAminoMsg(message: _254.QueryParamsResponse): _254.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _254.QueryParamsResponseProtoMsg): _254.QueryParamsResponse;
            toProto(message: _254.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _254.QueryParamsResponse): _254.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _253.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _253.Params;
            fromPartial(object: Partial<_253.Params>): _253.Params;
            fromAmino(object: _253.ParamsAmino): _253.Params;
            toAmino(message: _253.Params): _253.ParamsAmino;
            fromAminoMsg(object: _253.ParamsAminoMsg): _253.Params;
            toAminoMsg(message: _253.Params): _253.ParamsAminoMsg;
            fromProtoMsg(message: _253.ParamsProtoMsg): _253.Params;
            toProto(message: _253.Params): Uint8Array;
            toProtoMsg(message: _253.Params): _253.ParamsProtoMsg;
        };
        lockQueryTypeFromJSON(object: any): _252.LockQueryType;
        lockQueryTypeToJSON(object: _252.LockQueryType): string;
        LockQueryType: typeof _252.LockQueryType;
        LockQueryTypeSDKType: typeof _252.LockQueryType;
        LockQueryTypeAmino: typeof _252.LockQueryType;
        PeriodLock: {
            typeUrl: string;
            encode(message: _252.PeriodLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _252.PeriodLock;
            fromPartial(object: Partial<_252.PeriodLock>): _252.PeriodLock;
            fromAmino(object: _252.PeriodLockAmino): _252.PeriodLock;
            toAmino(message: _252.PeriodLock): _252.PeriodLockAmino;
            fromAminoMsg(object: _252.PeriodLockAminoMsg): _252.PeriodLock;
            toAminoMsg(message: _252.PeriodLock): _252.PeriodLockAminoMsg;
            fromProtoMsg(message: _252.PeriodLockProtoMsg): _252.PeriodLock;
            toProto(message: _252.PeriodLock): Uint8Array;
            toProtoMsg(message: _252.PeriodLock): _252.PeriodLockProtoMsg;
        };
        QueryCondition: {
            typeUrl: string;
            encode(message: _252.QueryCondition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _252.QueryCondition;
            fromPartial(object: Partial<_252.QueryCondition>): _252.QueryCondition;
            fromAmino(object: _252.QueryConditionAmino): _252.QueryCondition;
            toAmino(message: _252.QueryCondition): _252.QueryConditionAmino;
            fromAminoMsg(object: _252.QueryConditionAminoMsg): _252.QueryCondition;
            toAminoMsg(message: _252.QueryCondition): _252.QueryConditionAminoMsg;
            fromProtoMsg(message: _252.QueryConditionProtoMsg): _252.QueryCondition;
            toProto(message: _252.QueryCondition): Uint8Array;
            toProtoMsg(message: _252.QueryCondition): _252.QueryConditionProtoMsg;
        };
        SyntheticLock: {
            typeUrl: string;
            encode(message: _252.SyntheticLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _252.SyntheticLock;
            fromPartial(object: Partial<_252.SyntheticLock>): _252.SyntheticLock;
            fromAmino(object: _252.SyntheticLockAmino): _252.SyntheticLock;
            toAmino(message: _252.SyntheticLock): _252.SyntheticLockAmino;
            fromAminoMsg(object: _252.SyntheticLockAminoMsg): _252.SyntheticLock;
            toAminoMsg(message: _252.SyntheticLock): _252.SyntheticLockAminoMsg;
            fromProtoMsg(message: _252.SyntheticLockProtoMsg): _252.SyntheticLock;
            toProto(message: _252.SyntheticLock): Uint8Array;
            toProtoMsg(message: _252.SyntheticLock): _252.SyntheticLockProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _251.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _251.GenesisState;
            fromPartial(object: Partial<_251.GenesisState>): _251.GenesisState;
            fromAmino(object: _251.GenesisStateAmino): _251.GenesisState;
            toAmino(message: _251.GenesisState): _251.GenesisStateAmino;
            fromAminoMsg(object: _251.GenesisStateAminoMsg): _251.GenesisState;
            toAminoMsg(message: _251.GenesisState): _251.GenesisStateAminoMsg;
            fromProtoMsg(message: _251.GenesisStateProtoMsg): _251.GenesisState;
            toProto(message: _251.GenesisState): Uint8Array;
            toProtoMsg(message: _251.GenesisState): _251.GenesisStateProtoMsg;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _530.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _258.QueryParamsRequest): Promise<_258.QueryParamsResponse>;
                epochProvisions(request?: _258.QueryEpochProvisionsRequest): Promise<_258.QueryEpochProvisionsResponse>;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _258.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _258.QueryParamsRequest;
                fromPartial(_: Partial<_258.QueryParamsRequest>): _258.QueryParamsRequest;
                fromAmino(_: _258.QueryParamsRequestAmino): _258.QueryParamsRequest;
                toAmino(_: _258.QueryParamsRequest): _258.QueryParamsRequestAmino;
                fromAminoMsg(object: _258.QueryParamsRequestAminoMsg): _258.QueryParamsRequest;
                toAminoMsg(message: _258.QueryParamsRequest): _258.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _258.QueryParamsRequestProtoMsg): _258.QueryParamsRequest;
                toProto(message: _258.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _258.QueryParamsRequest): _258.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _258.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _258.QueryParamsResponse;
                fromPartial(object: Partial<_258.QueryParamsResponse>): _258.QueryParamsResponse;
                fromAmino(object: _258.QueryParamsResponseAmino): _258.QueryParamsResponse;
                toAmino(message: _258.QueryParamsResponse): _258.QueryParamsResponseAmino;
                fromAminoMsg(object: _258.QueryParamsResponseAminoMsg): _258.QueryParamsResponse;
                toAminoMsg(message: _258.QueryParamsResponse): _258.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _258.QueryParamsResponseProtoMsg): _258.QueryParamsResponse;
                toProto(message: _258.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _258.QueryParamsResponse): _258.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _258.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _258.QueryEpochProvisionsRequest;
                fromPartial(_: Partial<_258.QueryEpochProvisionsRequest>): _258.QueryEpochProvisionsRequest;
                fromAmino(_: _258.QueryEpochProvisionsRequestAmino): _258.QueryEpochProvisionsRequest;
                toAmino(_: _258.QueryEpochProvisionsRequest): _258.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _258.QueryEpochProvisionsRequestAminoMsg): _258.QueryEpochProvisionsRequest;
                toAminoMsg(message: _258.QueryEpochProvisionsRequest): _258.QueryEpochProvisionsRequestAminoMsg;
                fromProtoMsg(message: _258.QueryEpochProvisionsRequestProtoMsg): _258.QueryEpochProvisionsRequest;
                toProto(message: _258.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _258.QueryEpochProvisionsRequest): _258.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _258.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _258.QueryEpochProvisionsResponse;
                fromPartial(object: Partial<_258.QueryEpochProvisionsResponse>): _258.QueryEpochProvisionsResponse;
                fromAmino(object: _258.QueryEpochProvisionsResponseAmino): _258.QueryEpochProvisionsResponse;
                toAmino(message: _258.QueryEpochProvisionsResponse): _258.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _258.QueryEpochProvisionsResponseAminoMsg): _258.QueryEpochProvisionsResponse;
                toAminoMsg(message: _258.QueryEpochProvisionsResponse): _258.QueryEpochProvisionsResponseAminoMsg;
                fromProtoMsg(message: _258.QueryEpochProvisionsResponseProtoMsg): _258.QueryEpochProvisionsResponse;
                toProto(message: _258.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _258.QueryEpochProvisionsResponse): _258.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _257.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _257.Minter;
                fromPartial(object: Partial<_257.Minter>): _257.Minter;
                fromAmino(object: _257.MinterAmino): _257.Minter;
                toAmino(message: _257.Minter): _257.MinterAmino;
                fromAminoMsg(object: _257.MinterAminoMsg): _257.Minter;
                toAminoMsg(message: _257.Minter): _257.MinterAminoMsg;
                fromProtoMsg(message: _257.MinterProtoMsg): _257.Minter;
                toProto(message: _257.Minter): Uint8Array;
                toProtoMsg(message: _257.Minter): _257.MinterProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _257.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _257.WeightedAddress;
                fromPartial(object: Partial<_257.WeightedAddress>): _257.WeightedAddress;
                fromAmino(object: _257.WeightedAddressAmino): _257.WeightedAddress;
                toAmino(message: _257.WeightedAddress): _257.WeightedAddressAmino;
                fromAminoMsg(object: _257.WeightedAddressAminoMsg): _257.WeightedAddress;
                toAminoMsg(message: _257.WeightedAddress): _257.WeightedAddressAminoMsg;
                fromProtoMsg(message: _257.WeightedAddressProtoMsg): _257.WeightedAddress;
                toProto(message: _257.WeightedAddress): Uint8Array;
                toProtoMsg(message: _257.WeightedAddress): _257.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _257.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _257.DistributionProportions;
                fromPartial(object: Partial<_257.DistributionProportions>): _257.DistributionProportions;
                fromAmino(object: _257.DistributionProportionsAmino): _257.DistributionProportions;
                toAmino(message: _257.DistributionProportions): _257.DistributionProportionsAmino;
                fromAminoMsg(object: _257.DistributionProportionsAminoMsg): _257.DistributionProportions;
                toAminoMsg(message: _257.DistributionProportions): _257.DistributionProportionsAminoMsg;
                fromProtoMsg(message: _257.DistributionProportionsProtoMsg): _257.DistributionProportions;
                toProto(message: _257.DistributionProportions): Uint8Array;
                toProtoMsg(message: _257.DistributionProportions): _257.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _257.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _257.Params;
                fromPartial(object: Partial<_257.Params>): _257.Params;
                fromAmino(object: _257.ParamsAmino): _257.Params;
                toAmino(message: _257.Params): _257.ParamsAmino;
                fromAminoMsg(object: _257.ParamsAminoMsg): _257.Params;
                toAminoMsg(message: _257.Params): _257.ParamsAminoMsg;
                fromProtoMsg(message: _257.ParamsProtoMsg): _257.Params;
                toProto(message: _257.Params): Uint8Array;
                toProtoMsg(message: _257.Params): _257.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _256.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _256.GenesisState;
                fromPartial(object: Partial<_256.GenesisState>): _256.GenesisState;
                fromAmino(object: _256.GenesisStateAmino): _256.GenesisState;
                toAmino(message: _256.GenesisState): _256.GenesisStateAmino;
                fromAminoMsg(object: _256.GenesisStateAminoMsg): _256.GenesisState;
                toAminoMsg(message: _256.GenesisState): _256.GenesisStateAminoMsg;
                fromProtoMsg(message: _256.GenesisStateProtoMsg): _256.GenesisState;
                toProto(message: _256.GenesisState): Uint8Array;
                toProtoMsg(message: _256.GenesisState): _256.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _531.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _262.QueryGaugeIdsRequest): Promise<_262.QueryGaugeIdsResponse>;
                distrInfo(request?: _262.QueryDistrInfoRequest): Promise<_262.QueryDistrInfoResponse>;
                params(request?: _262.QueryParamsRequest): Promise<_262.QueryParamsResponse>;
                lockableDurations(request?: _262.QueryLockableDurationsRequest): Promise<_262.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _262.QueryIncentivizedPoolsRequest): Promise<_262.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _262.QueryExternalIncentiveGaugesRequest): Promise<_262.QueryExternalIncentiveGaugesResponse>;
            };
            QueryGaugeIdsRequest: {
                typeUrl: string;
                encode(message: _262.QueryGaugeIdsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryGaugeIdsRequest;
                fromPartial(object: Partial<_262.QueryGaugeIdsRequest>): _262.QueryGaugeIdsRequest;
                fromAmino(object: _262.QueryGaugeIdsRequestAmino): _262.QueryGaugeIdsRequest;
                toAmino(message: _262.QueryGaugeIdsRequest): _262.QueryGaugeIdsRequestAmino;
                fromAminoMsg(object: _262.QueryGaugeIdsRequestAminoMsg): _262.QueryGaugeIdsRequest;
                toAminoMsg(message: _262.QueryGaugeIdsRequest): _262.QueryGaugeIdsRequestAminoMsg;
                fromProtoMsg(message: _262.QueryGaugeIdsRequestProtoMsg): _262.QueryGaugeIdsRequest;
                toProto(message: _262.QueryGaugeIdsRequest): Uint8Array;
                toProtoMsg(message: _262.QueryGaugeIdsRequest): _262.QueryGaugeIdsRequestProtoMsg;
            };
            QueryGaugeIdsResponse: {
                typeUrl: string;
                encode(message: _262.QueryGaugeIdsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryGaugeIdsResponse;
                fromPartial(object: Partial<_262.QueryGaugeIdsResponse>): _262.QueryGaugeIdsResponse;
                fromAmino(object: _262.QueryGaugeIdsResponseAmino): _262.QueryGaugeIdsResponse;
                toAmino(message: _262.QueryGaugeIdsResponse): _262.QueryGaugeIdsResponseAmino;
                fromAminoMsg(object: _262.QueryGaugeIdsResponseAminoMsg): _262.QueryGaugeIdsResponse;
                toAminoMsg(message: _262.QueryGaugeIdsResponse): _262.QueryGaugeIdsResponseAminoMsg;
                fromProtoMsg(message: _262.QueryGaugeIdsResponseProtoMsg): _262.QueryGaugeIdsResponse;
                toProto(message: _262.QueryGaugeIdsResponse): Uint8Array;
                toProtoMsg(message: _262.QueryGaugeIdsResponse): _262.QueryGaugeIdsResponseProtoMsg;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                typeUrl: string;
                encode(message: _262.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromPartial(object: Partial<_262.QueryGaugeIdsResponse_GaugeIdWithDuration>): _262.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromAmino(object: _262.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _262.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _262.QueryGaugeIdsResponse_GaugeIdWithDuration): _262.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                fromAminoMsg(object: _262.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): _262.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAminoMsg(message: _262.QueryGaugeIdsResponse_GaugeIdWithDuration): _262.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
                fromProtoMsg(message: _262.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): _262.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toProto(message: _262.QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
                toProtoMsg(message: _262.QueryGaugeIdsResponse_GaugeIdWithDuration): _262.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
            };
            QueryDistrInfoRequest: {
                typeUrl: string;
                encode(_: _262.QueryDistrInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryDistrInfoRequest;
                fromPartial(_: Partial<_262.QueryDistrInfoRequest>): _262.QueryDistrInfoRequest;
                fromAmino(_: _262.QueryDistrInfoRequestAmino): _262.QueryDistrInfoRequest;
                toAmino(_: _262.QueryDistrInfoRequest): _262.QueryDistrInfoRequestAmino;
                fromAminoMsg(object: _262.QueryDistrInfoRequestAminoMsg): _262.QueryDistrInfoRequest;
                toAminoMsg(message: _262.QueryDistrInfoRequest): _262.QueryDistrInfoRequestAminoMsg;
                fromProtoMsg(message: _262.QueryDistrInfoRequestProtoMsg): _262.QueryDistrInfoRequest;
                toProto(message: _262.QueryDistrInfoRequest): Uint8Array;
                toProtoMsg(message: _262.QueryDistrInfoRequest): _262.QueryDistrInfoRequestProtoMsg;
            };
            QueryDistrInfoResponse: {
                typeUrl: string;
                encode(message: _262.QueryDistrInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryDistrInfoResponse;
                fromPartial(object: Partial<_262.QueryDistrInfoResponse>): _262.QueryDistrInfoResponse;
                fromAmino(object: _262.QueryDistrInfoResponseAmino): _262.QueryDistrInfoResponse;
                toAmino(message: _262.QueryDistrInfoResponse): _262.QueryDistrInfoResponseAmino;
                fromAminoMsg(object: _262.QueryDistrInfoResponseAminoMsg): _262.QueryDistrInfoResponse;
                toAminoMsg(message: _262.QueryDistrInfoResponse): _262.QueryDistrInfoResponseAminoMsg;
                fromProtoMsg(message: _262.QueryDistrInfoResponseProtoMsg): _262.QueryDistrInfoResponse;
                toProto(message: _262.QueryDistrInfoResponse): Uint8Array;
                toProtoMsg(message: _262.QueryDistrInfoResponse): _262.QueryDistrInfoResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _262.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryParamsRequest;
                fromPartial(_: Partial<_262.QueryParamsRequest>): _262.QueryParamsRequest;
                fromAmino(_: _262.QueryParamsRequestAmino): _262.QueryParamsRequest;
                toAmino(_: _262.QueryParamsRequest): _262.QueryParamsRequestAmino;
                fromAminoMsg(object: _262.QueryParamsRequestAminoMsg): _262.QueryParamsRequest;
                toAminoMsg(message: _262.QueryParamsRequest): _262.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _262.QueryParamsRequestProtoMsg): _262.QueryParamsRequest;
                toProto(message: _262.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _262.QueryParamsRequest): _262.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _262.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryParamsResponse;
                fromPartial(object: Partial<_262.QueryParamsResponse>): _262.QueryParamsResponse;
                fromAmino(object: _262.QueryParamsResponseAmino): _262.QueryParamsResponse;
                toAmino(message: _262.QueryParamsResponse): _262.QueryParamsResponseAmino;
                fromAminoMsg(object: _262.QueryParamsResponseAminoMsg): _262.QueryParamsResponse;
                toAminoMsg(message: _262.QueryParamsResponse): _262.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _262.QueryParamsResponseProtoMsg): _262.QueryParamsResponse;
                toProto(message: _262.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _262.QueryParamsResponse): _262.QueryParamsResponseProtoMsg;
            };
            QueryLockableDurationsRequest: {
                typeUrl: string;
                encode(_: _262.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryLockableDurationsRequest;
                fromPartial(_: Partial<_262.QueryLockableDurationsRequest>): _262.QueryLockableDurationsRequest;
                fromAmino(_: _262.QueryLockableDurationsRequestAmino): _262.QueryLockableDurationsRequest;
                toAmino(_: _262.QueryLockableDurationsRequest): _262.QueryLockableDurationsRequestAmino;
                fromAminoMsg(object: _262.QueryLockableDurationsRequestAminoMsg): _262.QueryLockableDurationsRequest;
                toAminoMsg(message: _262.QueryLockableDurationsRequest): _262.QueryLockableDurationsRequestAminoMsg;
                fromProtoMsg(message: _262.QueryLockableDurationsRequestProtoMsg): _262.QueryLockableDurationsRequest;
                toProto(message: _262.QueryLockableDurationsRequest): Uint8Array;
                toProtoMsg(message: _262.QueryLockableDurationsRequest): _262.QueryLockableDurationsRequestProtoMsg;
            };
            QueryLockableDurationsResponse: {
                typeUrl: string;
                encode(message: _262.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryLockableDurationsResponse;
                fromPartial(object: Partial<_262.QueryLockableDurationsResponse>): _262.QueryLockableDurationsResponse;
                fromAmino(object: _262.QueryLockableDurationsResponseAmino): _262.QueryLockableDurationsResponse;
                toAmino(message: _262.QueryLockableDurationsResponse): _262.QueryLockableDurationsResponseAmino;
                fromAminoMsg(object: _262.QueryLockableDurationsResponseAminoMsg): _262.QueryLockableDurationsResponse;
                toAminoMsg(message: _262.QueryLockableDurationsResponse): _262.QueryLockableDurationsResponseAminoMsg;
                fromProtoMsg(message: _262.QueryLockableDurationsResponseProtoMsg): _262.QueryLockableDurationsResponse;
                toProto(message: _262.QueryLockableDurationsResponse): Uint8Array;
                toProtoMsg(message: _262.QueryLockableDurationsResponse): _262.QueryLockableDurationsResponseProtoMsg;
            };
            QueryIncentivizedPoolsRequest: {
                typeUrl: string;
                encode(_: _262.QueryIncentivizedPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryIncentivizedPoolsRequest;
                fromPartial(_: Partial<_262.QueryIncentivizedPoolsRequest>): _262.QueryIncentivizedPoolsRequest;
                fromAmino(_: _262.QueryIncentivizedPoolsRequestAmino): _262.QueryIncentivizedPoolsRequest;
                toAmino(_: _262.QueryIncentivizedPoolsRequest): _262.QueryIncentivizedPoolsRequestAmino;
                fromAminoMsg(object: _262.QueryIncentivizedPoolsRequestAminoMsg): _262.QueryIncentivizedPoolsRequest;
                toAminoMsg(message: _262.QueryIncentivizedPoolsRequest): _262.QueryIncentivizedPoolsRequestAminoMsg;
                fromProtoMsg(message: _262.QueryIncentivizedPoolsRequestProtoMsg): _262.QueryIncentivizedPoolsRequest;
                toProto(message: _262.QueryIncentivizedPoolsRequest): Uint8Array;
                toProtoMsg(message: _262.QueryIncentivizedPoolsRequest): _262.QueryIncentivizedPoolsRequestProtoMsg;
            };
            IncentivizedPool: {
                typeUrl: string;
                encode(message: _262.IncentivizedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.IncentivizedPool;
                fromPartial(object: Partial<_262.IncentivizedPool>): _262.IncentivizedPool;
                fromAmino(object: _262.IncentivizedPoolAmino): _262.IncentivizedPool;
                toAmino(message: _262.IncentivizedPool): _262.IncentivizedPoolAmino;
                fromAminoMsg(object: _262.IncentivizedPoolAminoMsg): _262.IncentivizedPool;
                toAminoMsg(message: _262.IncentivizedPool): _262.IncentivizedPoolAminoMsg;
                fromProtoMsg(message: _262.IncentivizedPoolProtoMsg): _262.IncentivizedPool;
                toProto(message: _262.IncentivizedPool): Uint8Array;
                toProtoMsg(message: _262.IncentivizedPool): _262.IncentivizedPoolProtoMsg;
            };
            QueryIncentivizedPoolsResponse: {
                typeUrl: string;
                encode(message: _262.QueryIncentivizedPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryIncentivizedPoolsResponse;
                fromPartial(object: Partial<_262.QueryIncentivizedPoolsResponse>): _262.QueryIncentivizedPoolsResponse;
                fromAmino(object: _262.QueryIncentivizedPoolsResponseAmino): _262.QueryIncentivizedPoolsResponse;
                toAmino(message: _262.QueryIncentivizedPoolsResponse): _262.QueryIncentivizedPoolsResponseAmino;
                fromAminoMsg(object: _262.QueryIncentivizedPoolsResponseAminoMsg): _262.QueryIncentivizedPoolsResponse;
                toAminoMsg(message: _262.QueryIncentivizedPoolsResponse): _262.QueryIncentivizedPoolsResponseAminoMsg;
                fromProtoMsg(message: _262.QueryIncentivizedPoolsResponseProtoMsg): _262.QueryIncentivizedPoolsResponse;
                toProto(message: _262.QueryIncentivizedPoolsResponse): Uint8Array;
                toProtoMsg(message: _262.QueryIncentivizedPoolsResponse): _262.QueryIncentivizedPoolsResponseProtoMsg;
            };
            QueryExternalIncentiveGaugesRequest: {
                typeUrl: string;
                encode(_: _262.QueryExternalIncentiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryExternalIncentiveGaugesRequest;
                fromPartial(_: Partial<_262.QueryExternalIncentiveGaugesRequest>): _262.QueryExternalIncentiveGaugesRequest;
                fromAmino(_: _262.QueryExternalIncentiveGaugesRequestAmino): _262.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _262.QueryExternalIncentiveGaugesRequest): _262.QueryExternalIncentiveGaugesRequestAmino;
                fromAminoMsg(object: _262.QueryExternalIncentiveGaugesRequestAminoMsg): _262.QueryExternalIncentiveGaugesRequest;
                toAminoMsg(message: _262.QueryExternalIncentiveGaugesRequest): _262.QueryExternalIncentiveGaugesRequestAminoMsg;
                fromProtoMsg(message: _262.QueryExternalIncentiveGaugesRequestProtoMsg): _262.QueryExternalIncentiveGaugesRequest;
                toProto(message: _262.QueryExternalIncentiveGaugesRequest): Uint8Array;
                toProtoMsg(message: _262.QueryExternalIncentiveGaugesRequest): _262.QueryExternalIncentiveGaugesRequestProtoMsg;
            };
            QueryExternalIncentiveGaugesResponse: {
                typeUrl: string;
                encode(message: _262.QueryExternalIncentiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _262.QueryExternalIncentiveGaugesResponse;
                fromPartial(object: Partial<_262.QueryExternalIncentiveGaugesResponse>): _262.QueryExternalIncentiveGaugesResponse;
                fromAmino(object: _262.QueryExternalIncentiveGaugesResponseAmino): _262.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _262.QueryExternalIncentiveGaugesResponse): _262.QueryExternalIncentiveGaugesResponseAmino;
                fromAminoMsg(object: _262.QueryExternalIncentiveGaugesResponseAminoMsg): _262.QueryExternalIncentiveGaugesResponse;
                toAminoMsg(message: _262.QueryExternalIncentiveGaugesResponse): _262.QueryExternalIncentiveGaugesResponseAminoMsg;
                fromProtoMsg(message: _262.QueryExternalIncentiveGaugesResponseProtoMsg): _262.QueryExternalIncentiveGaugesResponse;
                toProto(message: _262.QueryExternalIncentiveGaugesResponse): Uint8Array;
                toProtoMsg(message: _262.QueryExternalIncentiveGaugesResponse): _262.QueryExternalIncentiveGaugesResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _261.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _261.Params;
                fromPartial(object: Partial<_261.Params>): _261.Params;
                fromAmino(object: _261.ParamsAmino): _261.Params;
                toAmino(message: _261.Params): _261.ParamsAmino;
                fromAminoMsg(object: _261.ParamsAminoMsg): _261.Params;
                toAminoMsg(message: _261.Params): _261.ParamsAminoMsg;
                fromProtoMsg(message: _261.ParamsProtoMsg): _261.Params;
                toProto(message: _261.Params): Uint8Array;
                toProtoMsg(message: _261.Params): _261.ParamsProtoMsg;
            };
            LockableDurationsInfo: {
                typeUrl: string;
                encode(message: _261.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _261.LockableDurationsInfo;
                fromPartial(object: Partial<_261.LockableDurationsInfo>): _261.LockableDurationsInfo;
                fromAmino(object: _261.LockableDurationsInfoAmino): _261.LockableDurationsInfo;
                toAmino(message: _261.LockableDurationsInfo): _261.LockableDurationsInfoAmino;
                fromAminoMsg(object: _261.LockableDurationsInfoAminoMsg): _261.LockableDurationsInfo;
                toAminoMsg(message: _261.LockableDurationsInfo): _261.LockableDurationsInfoAminoMsg;
                fromProtoMsg(message: _261.LockableDurationsInfoProtoMsg): _261.LockableDurationsInfo;
                toProto(message: _261.LockableDurationsInfo): Uint8Array;
                toProtoMsg(message: _261.LockableDurationsInfo): _261.LockableDurationsInfoProtoMsg;
            };
            DistrInfo: {
                typeUrl: string;
                encode(message: _261.DistrInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _261.DistrInfo;
                fromPartial(object: Partial<_261.DistrInfo>): _261.DistrInfo;
                fromAmino(object: _261.DistrInfoAmino): _261.DistrInfo;
                toAmino(message: _261.DistrInfo): _261.DistrInfoAmino;
                fromAminoMsg(object: _261.DistrInfoAminoMsg): _261.DistrInfo;
                toAminoMsg(message: _261.DistrInfo): _261.DistrInfoAminoMsg;
                fromProtoMsg(message: _261.DistrInfoProtoMsg): _261.DistrInfo;
                toProto(message: _261.DistrInfo): Uint8Array;
                toProtoMsg(message: _261.DistrInfo): _261.DistrInfoProtoMsg;
            };
            DistrRecord: {
                typeUrl: string;
                encode(message: _261.DistrRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _261.DistrRecord;
                fromPartial(object: Partial<_261.DistrRecord>): _261.DistrRecord;
                fromAmino(object: _261.DistrRecordAmino): _261.DistrRecord;
                toAmino(message: _261.DistrRecord): _261.DistrRecordAmino;
                fromAminoMsg(object: _261.DistrRecordAminoMsg): _261.DistrRecord;
                toAminoMsg(message: _261.DistrRecord): _261.DistrRecordAminoMsg;
                fromProtoMsg(message: _261.DistrRecordProtoMsg): _261.DistrRecord;
                toProto(message: _261.DistrRecord): Uint8Array;
                toProtoMsg(message: _261.DistrRecord): _261.DistrRecordProtoMsg;
            };
            PoolToGauge: {
                typeUrl: string;
                encode(message: _261.PoolToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _261.PoolToGauge;
                fromPartial(object: Partial<_261.PoolToGauge>): _261.PoolToGauge;
                fromAmino(object: _261.PoolToGaugeAmino): _261.PoolToGauge;
                toAmino(message: _261.PoolToGauge): _261.PoolToGaugeAmino;
                fromAminoMsg(object: _261.PoolToGaugeAminoMsg): _261.PoolToGauge;
                toAminoMsg(message: _261.PoolToGauge): _261.PoolToGaugeAminoMsg;
                fromProtoMsg(message: _261.PoolToGaugeProtoMsg): _261.PoolToGauge;
                toProto(message: _261.PoolToGauge): Uint8Array;
                toProtoMsg(message: _261.PoolToGauge): _261.PoolToGaugeProtoMsg;
            };
            PoolToGauges: {
                typeUrl: string;
                encode(message: _261.PoolToGauges, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _261.PoolToGauges;
                fromPartial(object: Partial<_261.PoolToGauges>): _261.PoolToGauges;
                fromAmino(object: _261.PoolToGaugesAmino): _261.PoolToGauges;
                toAmino(message: _261.PoolToGauges): _261.PoolToGaugesAmino;
                fromAminoMsg(object: _261.PoolToGaugesAminoMsg): _261.PoolToGauges;
                toAminoMsg(message: _261.PoolToGauges): _261.PoolToGaugesAminoMsg;
                fromProtoMsg(message: _261.PoolToGaugesProtoMsg): _261.PoolToGauges;
                toProto(message: _261.PoolToGauges): Uint8Array;
                toProtoMsg(message: _261.PoolToGauges): _261.PoolToGaugesProtoMsg;
            };
            ReplacePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _260.ReplacePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _260.ReplacePoolIncentivesProposal;
                fromPartial(object: Partial<_260.ReplacePoolIncentivesProposal>): _260.ReplacePoolIncentivesProposal;
                fromAmino(object: _260.ReplacePoolIncentivesProposalAmino): _260.ReplacePoolIncentivesProposal;
                toAmino(message: _260.ReplacePoolIncentivesProposal): _260.ReplacePoolIncentivesProposalAmino;
                fromAminoMsg(object: _260.ReplacePoolIncentivesProposalAminoMsg): _260.ReplacePoolIncentivesProposal;
                toAminoMsg(message: _260.ReplacePoolIncentivesProposal): _260.ReplacePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _260.ReplacePoolIncentivesProposalProtoMsg): _260.ReplacePoolIncentivesProposal;
                toProto(message: _260.ReplacePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _260.ReplacePoolIncentivesProposal): _260.ReplacePoolIncentivesProposalProtoMsg;
            };
            UpdatePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _260.UpdatePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _260.UpdatePoolIncentivesProposal;
                fromPartial(object: Partial<_260.UpdatePoolIncentivesProposal>): _260.UpdatePoolIncentivesProposal;
                fromAmino(object: _260.UpdatePoolIncentivesProposalAmino): _260.UpdatePoolIncentivesProposal;
                toAmino(message: _260.UpdatePoolIncentivesProposal): _260.UpdatePoolIncentivesProposalAmino;
                fromAminoMsg(object: _260.UpdatePoolIncentivesProposalAminoMsg): _260.UpdatePoolIncentivesProposal;
                toAminoMsg(message: _260.UpdatePoolIncentivesProposal): _260.UpdatePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _260.UpdatePoolIncentivesProposalProtoMsg): _260.UpdatePoolIncentivesProposal;
                toProto(message: _260.UpdatePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _260.UpdatePoolIncentivesProposal): _260.UpdatePoolIncentivesProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _259.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _259.GenesisState;
                fromPartial(object: Partial<_259.GenesisState>): _259.GenesisState;
                fromAmino(object: _259.GenesisStateAmino): _259.GenesisState;
                toAmino(message: _259.GenesisState): _259.GenesisStateAmino;
                fromAminoMsg(object: _259.GenesisStateAminoMsg): _259.GenesisState;
                toAminoMsg(message: _259.GenesisState): _259.GenesisStateAminoMsg;
                fromProtoMsg(message: _259.GenesisStateProtoMsg): _259.GenesisState;
                toProto(message: _259.GenesisState): Uint8Array;
                toProtoMsg(message: _259.GenesisState): _259.GenesisStateProtoMsg;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _544.MsgClientImpl;
            QueryClientImpl: typeof _532.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _267.QueryParamsRequest): Promise<_267.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _267.QueryGetProtoRevNumberOfTradesRequest): Promise<_267.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _267.QueryGetProtoRevProfitsByDenomRequest): Promise<_267.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _267.QueryGetProtoRevAllProfitsRequest): Promise<_267.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByPool(request: _267.QueryGetProtoRevStatisticsByPoolRequest): Promise<_267.QueryGetProtoRevStatisticsByPoolResponse>;
                getProtoRevAllStatistics(request?: _267.QueryGetProtoRevAllStatisticsRequest): Promise<_267.QueryGetProtoRevAllStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _267.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_267.QueryGetProtoRevTokenPairArbRoutesResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _268.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _268.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _268.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _268.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _268.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _268.MsgSetDeveloperAccount;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _268.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _268.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _268.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _268.MsgSetDeveloperAccount;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: (message: _268.MsgSetHotRoutes) => _268.MsgSetHotRoutesAmino;
                    fromAmino: (object: _268.MsgSetHotRoutesAmino) => _268.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: (message: _268.MsgSetDeveloperAccount) => _268.MsgSetDeveloperAccountAmino;
                    fromAmino: (object: _268.MsgSetDeveloperAccountAmino) => _268.MsgSetDeveloperAccount;
                };
            };
            MsgSetHotRoutes: {
                typeUrl: string;
                encode(message: _268.MsgSetHotRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _268.MsgSetHotRoutes;
                fromPartial(object: Partial<_268.MsgSetHotRoutes>): _268.MsgSetHotRoutes;
                fromAmino(object: _268.MsgSetHotRoutesAmino): _268.MsgSetHotRoutes;
                toAmino(message: _268.MsgSetHotRoutes): _268.MsgSetHotRoutesAmino;
                fromAminoMsg(object: _268.MsgSetHotRoutesAminoMsg): _268.MsgSetHotRoutes;
                toAminoMsg(message: _268.MsgSetHotRoutes): _268.MsgSetHotRoutesAminoMsg;
                fromProtoMsg(message: _268.MsgSetHotRoutesProtoMsg): _268.MsgSetHotRoutes;
                toProto(message: _268.MsgSetHotRoutes): Uint8Array;
                toProtoMsg(message: _268.MsgSetHotRoutes): _268.MsgSetHotRoutesProtoMsg;
            };
            MsgSetHotRoutesResponse: {
                typeUrl: string;
                encode(_: _268.MsgSetHotRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _268.MsgSetHotRoutesResponse;
                fromPartial(_: Partial<_268.MsgSetHotRoutesResponse>): _268.MsgSetHotRoutesResponse;
                fromAmino(_: _268.MsgSetHotRoutesResponseAmino): _268.MsgSetHotRoutesResponse;
                toAmino(_: _268.MsgSetHotRoutesResponse): _268.MsgSetHotRoutesResponseAmino;
                fromAminoMsg(object: _268.MsgSetHotRoutesResponseAminoMsg): _268.MsgSetHotRoutesResponse;
                toAminoMsg(message: _268.MsgSetHotRoutesResponse): _268.MsgSetHotRoutesResponseAminoMsg;
                fromProtoMsg(message: _268.MsgSetHotRoutesResponseProtoMsg): _268.MsgSetHotRoutesResponse;
                toProto(message: _268.MsgSetHotRoutesResponse): Uint8Array;
                toProtoMsg(message: _268.MsgSetHotRoutesResponse): _268.MsgSetHotRoutesResponseProtoMsg;
            };
            MsgSetDeveloperAccount: {
                typeUrl: string;
                encode(message: _268.MsgSetDeveloperAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _268.MsgSetDeveloperAccount;
                fromPartial(object: Partial<_268.MsgSetDeveloperAccount>): _268.MsgSetDeveloperAccount;
                fromAmino(object: _268.MsgSetDeveloperAccountAmino): _268.MsgSetDeveloperAccount;
                toAmino(message: _268.MsgSetDeveloperAccount): _268.MsgSetDeveloperAccountAmino;
                fromAminoMsg(object: _268.MsgSetDeveloperAccountAminoMsg): _268.MsgSetDeveloperAccount;
                toAminoMsg(message: _268.MsgSetDeveloperAccount): _268.MsgSetDeveloperAccountAminoMsg;
                fromProtoMsg(message: _268.MsgSetDeveloperAccountProtoMsg): _268.MsgSetDeveloperAccount;
                toProto(message: _268.MsgSetDeveloperAccount): Uint8Array;
                toProtoMsg(message: _268.MsgSetDeveloperAccount): _268.MsgSetDeveloperAccountProtoMsg;
            };
            MsgSetDeveloperAccountResponse: {
                typeUrl: string;
                encode(_: _268.MsgSetDeveloperAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _268.MsgSetDeveloperAccountResponse;
                fromPartial(_: Partial<_268.MsgSetDeveloperAccountResponse>): _268.MsgSetDeveloperAccountResponse;
                fromAmino(_: _268.MsgSetDeveloperAccountResponseAmino): _268.MsgSetDeveloperAccountResponse;
                toAmino(_: _268.MsgSetDeveloperAccountResponse): _268.MsgSetDeveloperAccountResponseAmino;
                fromAminoMsg(object: _268.MsgSetDeveloperAccountResponseAminoMsg): _268.MsgSetDeveloperAccountResponse;
                toAminoMsg(message: _268.MsgSetDeveloperAccountResponse): _268.MsgSetDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _268.MsgSetDeveloperAccountResponseProtoMsg): _268.MsgSetDeveloperAccountResponse;
                toProto(message: _268.MsgSetDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _268.MsgSetDeveloperAccountResponse): _268.MsgSetDeveloperAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _267.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryParamsRequest;
                fromPartial(_: Partial<_267.QueryParamsRequest>): _267.QueryParamsRequest;
                fromAmino(_: _267.QueryParamsRequestAmino): _267.QueryParamsRequest;
                toAmino(_: _267.QueryParamsRequest): _267.QueryParamsRequestAmino;
                fromAminoMsg(object: _267.QueryParamsRequestAminoMsg): _267.QueryParamsRequest;
                toAminoMsg(message: _267.QueryParamsRequest): _267.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _267.QueryParamsRequestProtoMsg): _267.QueryParamsRequest;
                toProto(message: _267.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _267.QueryParamsRequest): _267.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _267.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryParamsResponse;
                fromPartial(object: Partial<_267.QueryParamsResponse>): _267.QueryParamsResponse;
                fromAmino(object: _267.QueryParamsResponseAmino): _267.QueryParamsResponse;
                toAmino(message: _267.QueryParamsResponse): _267.QueryParamsResponseAmino;
                fromAminoMsg(object: _267.QueryParamsResponseAminoMsg): _267.QueryParamsResponse;
                toAminoMsg(message: _267.QueryParamsResponse): _267.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _267.QueryParamsResponseProtoMsg): _267.QueryParamsResponse;
                toProto(message: _267.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _267.QueryParamsResponse): _267.QueryParamsResponseProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                typeUrl: string;
                encode(_: _267.QueryGetProtoRevNumberOfTradesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryGetProtoRevNumberOfTradesRequest;
                fromPartial(_: Partial<_267.QueryGetProtoRevNumberOfTradesRequest>): _267.QueryGetProtoRevNumberOfTradesRequest;
                fromAmino(_: _267.QueryGetProtoRevNumberOfTradesRequestAmino): _267.QueryGetProtoRevNumberOfTradesRequest;
                toAmino(_: _267.QueryGetProtoRevNumberOfTradesRequest): _267.QueryGetProtoRevNumberOfTradesRequestAmino;
                fromAminoMsg(object: _267.QueryGetProtoRevNumberOfTradesRequestAminoMsg): _267.QueryGetProtoRevNumberOfTradesRequest;
                toAminoMsg(message: _267.QueryGetProtoRevNumberOfTradesRequest): _267.QueryGetProtoRevNumberOfTradesRequestAminoMsg;
                fromProtoMsg(message: _267.QueryGetProtoRevNumberOfTradesRequestProtoMsg): _267.QueryGetProtoRevNumberOfTradesRequest;
                toProto(message: _267.QueryGetProtoRevNumberOfTradesRequest): Uint8Array;
                toProtoMsg(message: _267.QueryGetProtoRevNumberOfTradesRequest): _267.QueryGetProtoRevNumberOfTradesRequestProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                typeUrl: string;
                encode(message: _267.QueryGetProtoRevNumberOfTradesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryGetProtoRevNumberOfTradesResponse;
                fromPartial(object: Partial<_267.QueryGetProtoRevNumberOfTradesResponse>): _267.QueryGetProtoRevNumberOfTradesResponse;
                fromAmino(object: _267.QueryGetProtoRevNumberOfTradesResponseAmino): _267.QueryGetProtoRevNumberOfTradesResponse;
                toAmino(message: _267.QueryGetProtoRevNumberOfTradesResponse): _267.QueryGetProtoRevNumberOfTradesResponseAmino;
                fromAminoMsg(object: _267.QueryGetProtoRevNumberOfTradesResponseAminoMsg): _267.QueryGetProtoRevNumberOfTradesResponse;
                toAminoMsg(message: _267.QueryGetProtoRevNumberOfTradesResponse): _267.QueryGetProtoRevNumberOfTradesResponseAminoMsg;
                fromProtoMsg(message: _267.QueryGetProtoRevNumberOfTradesResponseProtoMsg): _267.QueryGetProtoRevNumberOfTradesResponse;
                toProto(message: _267.QueryGetProtoRevNumberOfTradesResponse): Uint8Array;
                toProtoMsg(message: _267.QueryGetProtoRevNumberOfTradesResponse): _267.QueryGetProtoRevNumberOfTradesResponseProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                typeUrl: string;
                encode(message: _267.QueryGetProtoRevProfitsByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryGetProtoRevProfitsByDenomRequest;
                fromPartial(object: Partial<_267.QueryGetProtoRevProfitsByDenomRequest>): _267.QueryGetProtoRevProfitsByDenomRequest;
                fromAmino(object: _267.QueryGetProtoRevProfitsByDenomRequestAmino): _267.QueryGetProtoRevProfitsByDenomRequest;
                toAmino(message: _267.QueryGetProtoRevProfitsByDenomRequest): _267.QueryGetProtoRevProfitsByDenomRequestAmino;
                fromAminoMsg(object: _267.QueryGetProtoRevProfitsByDenomRequestAminoMsg): _267.QueryGetProtoRevProfitsByDenomRequest;
                toAminoMsg(message: _267.QueryGetProtoRevProfitsByDenomRequest): _267.QueryGetProtoRevProfitsByDenomRequestAminoMsg;
                fromProtoMsg(message: _267.QueryGetProtoRevProfitsByDenomRequestProtoMsg): _267.QueryGetProtoRevProfitsByDenomRequest;
                toProto(message: _267.QueryGetProtoRevProfitsByDenomRequest): Uint8Array;
                toProtoMsg(message: _267.QueryGetProtoRevProfitsByDenomRequest): _267.QueryGetProtoRevProfitsByDenomRequestProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                typeUrl: string;
                encode(message: _267.QueryGetProtoRevProfitsByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryGetProtoRevProfitsByDenomResponse;
                fromPartial(object: Partial<_267.QueryGetProtoRevProfitsByDenomResponse>): _267.QueryGetProtoRevProfitsByDenomResponse;
                fromAmino(object: _267.QueryGetProtoRevProfitsByDenomResponseAmino): _267.QueryGetProtoRevProfitsByDenomResponse;
                toAmino(message: _267.QueryGetProtoRevProfitsByDenomResponse): _267.QueryGetProtoRevProfitsByDenomResponseAmino;
                fromAminoMsg(object: _267.QueryGetProtoRevProfitsByDenomResponseAminoMsg): _267.QueryGetProtoRevProfitsByDenomResponse;
                toAminoMsg(message: _267.QueryGetProtoRevProfitsByDenomResponse): _267.QueryGetProtoRevProfitsByDenomResponseAminoMsg;
                fromProtoMsg(message: _267.QueryGetProtoRevProfitsByDenomResponseProtoMsg): _267.QueryGetProtoRevProfitsByDenomResponse;
                toProto(message: _267.QueryGetProtoRevProfitsByDenomResponse): Uint8Array;
                toProtoMsg(message: _267.QueryGetProtoRevProfitsByDenomResponse): _267.QueryGetProtoRevProfitsByDenomResponseProtoMsg;
            };
            QueryGetProtoRevAllProfitsRequest: {
                typeUrl: string;
                encode(_: _267.QueryGetProtoRevAllProfitsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryGetProtoRevAllProfitsRequest;
                fromPartial(_: Partial<_267.QueryGetProtoRevAllProfitsRequest>): _267.QueryGetProtoRevAllProfitsRequest;
                fromAmino(_: _267.QueryGetProtoRevAllProfitsRequestAmino): _267.QueryGetProtoRevAllProfitsRequest;
                toAmino(_: _267.QueryGetProtoRevAllProfitsRequest): _267.QueryGetProtoRevAllProfitsRequestAmino;
                fromAminoMsg(object: _267.QueryGetProtoRevAllProfitsRequestAminoMsg): _267.QueryGetProtoRevAllProfitsRequest;
                toAminoMsg(message: _267.QueryGetProtoRevAllProfitsRequest): _267.QueryGetProtoRevAllProfitsRequestAminoMsg;
                fromProtoMsg(message: _267.QueryGetProtoRevAllProfitsRequestProtoMsg): _267.QueryGetProtoRevAllProfitsRequest;
                toProto(message: _267.QueryGetProtoRevAllProfitsRequest): Uint8Array;
                toProtoMsg(message: _267.QueryGetProtoRevAllProfitsRequest): _267.QueryGetProtoRevAllProfitsRequestProtoMsg;
            };
            QueryGetProtoRevAllProfitsResponse: {
                typeUrl: string;
                encode(message: _267.QueryGetProtoRevAllProfitsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryGetProtoRevAllProfitsResponse;
                fromPartial(object: Partial<_267.QueryGetProtoRevAllProfitsResponse>): _267.QueryGetProtoRevAllProfitsResponse;
                fromAmino(object: _267.QueryGetProtoRevAllProfitsResponseAmino): _267.QueryGetProtoRevAllProfitsResponse;
                toAmino(message: _267.QueryGetProtoRevAllProfitsResponse): _267.QueryGetProtoRevAllProfitsResponseAmino;
                fromAminoMsg(object: _267.QueryGetProtoRevAllProfitsResponseAminoMsg): _267.QueryGetProtoRevAllProfitsResponse;
                toAminoMsg(message: _267.QueryGetProtoRevAllProfitsResponse): _267.QueryGetProtoRevAllProfitsResponseAminoMsg;
                fromProtoMsg(message: _267.QueryGetProtoRevAllProfitsResponseProtoMsg): _267.QueryGetProtoRevAllProfitsResponse;
                toProto(message: _267.QueryGetProtoRevAllProfitsResponse): Uint8Array;
                toProtoMsg(message: _267.QueryGetProtoRevAllProfitsResponse): _267.QueryGetProtoRevAllProfitsResponseProtoMsg;
            };
            QueryGetProtoRevStatisticsByPoolRequest: {
                typeUrl: string;
                encode(message: _267.QueryGetProtoRevStatisticsByPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryGetProtoRevStatisticsByPoolRequest;
                fromPartial(object: Partial<_267.QueryGetProtoRevStatisticsByPoolRequest>): _267.QueryGetProtoRevStatisticsByPoolRequest;
                fromAmino(object: _267.QueryGetProtoRevStatisticsByPoolRequestAmino): _267.QueryGetProtoRevStatisticsByPoolRequest;
                toAmino(message: _267.QueryGetProtoRevStatisticsByPoolRequest): _267.QueryGetProtoRevStatisticsByPoolRequestAmino;
                fromAminoMsg(object: _267.QueryGetProtoRevStatisticsByPoolRequestAminoMsg): _267.QueryGetProtoRevStatisticsByPoolRequest;
                toAminoMsg(message: _267.QueryGetProtoRevStatisticsByPoolRequest): _267.QueryGetProtoRevStatisticsByPoolRequestAminoMsg;
                fromProtoMsg(message: _267.QueryGetProtoRevStatisticsByPoolRequestProtoMsg): _267.QueryGetProtoRevStatisticsByPoolRequest;
                toProto(message: _267.QueryGetProtoRevStatisticsByPoolRequest): Uint8Array;
                toProtoMsg(message: _267.QueryGetProtoRevStatisticsByPoolRequest): _267.QueryGetProtoRevStatisticsByPoolRequestProtoMsg;
            };
            QueryGetProtoRevStatisticsByPoolResponse: {
                typeUrl: string;
                encode(message: _267.QueryGetProtoRevStatisticsByPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryGetProtoRevStatisticsByPoolResponse;
                fromPartial(object: Partial<_267.QueryGetProtoRevStatisticsByPoolResponse>): _267.QueryGetProtoRevStatisticsByPoolResponse;
                fromAmino(object: _267.QueryGetProtoRevStatisticsByPoolResponseAmino): _267.QueryGetProtoRevStatisticsByPoolResponse;
                toAmino(message: _267.QueryGetProtoRevStatisticsByPoolResponse): _267.QueryGetProtoRevStatisticsByPoolResponseAmino;
                fromAminoMsg(object: _267.QueryGetProtoRevStatisticsByPoolResponseAminoMsg): _267.QueryGetProtoRevStatisticsByPoolResponse;
                toAminoMsg(message: _267.QueryGetProtoRevStatisticsByPoolResponse): _267.QueryGetProtoRevStatisticsByPoolResponseAminoMsg;
                fromProtoMsg(message: _267.QueryGetProtoRevStatisticsByPoolResponseProtoMsg): _267.QueryGetProtoRevStatisticsByPoolResponse;
                toProto(message: _267.QueryGetProtoRevStatisticsByPoolResponse): Uint8Array;
                toProtoMsg(message: _267.QueryGetProtoRevStatisticsByPoolResponse): _267.QueryGetProtoRevStatisticsByPoolResponseProtoMsg;
            };
            QueryGetProtoRevAllStatisticsRequest: {
                typeUrl: string;
                encode(_: _267.QueryGetProtoRevAllStatisticsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryGetProtoRevAllStatisticsRequest;
                fromPartial(_: Partial<_267.QueryGetProtoRevAllStatisticsRequest>): _267.QueryGetProtoRevAllStatisticsRequest;
                fromAmino(_: _267.QueryGetProtoRevAllStatisticsRequestAmino): _267.QueryGetProtoRevAllStatisticsRequest;
                toAmino(_: _267.QueryGetProtoRevAllStatisticsRequest): _267.QueryGetProtoRevAllStatisticsRequestAmino;
                fromAminoMsg(object: _267.QueryGetProtoRevAllStatisticsRequestAminoMsg): _267.QueryGetProtoRevAllStatisticsRequest;
                toAminoMsg(message: _267.QueryGetProtoRevAllStatisticsRequest): _267.QueryGetProtoRevAllStatisticsRequestAminoMsg;
                fromProtoMsg(message: _267.QueryGetProtoRevAllStatisticsRequestProtoMsg): _267.QueryGetProtoRevAllStatisticsRequest;
                toProto(message: _267.QueryGetProtoRevAllStatisticsRequest): Uint8Array;
                toProtoMsg(message: _267.QueryGetProtoRevAllStatisticsRequest): _267.QueryGetProtoRevAllStatisticsRequestProtoMsg;
            };
            QueryGetProtoRevAllStatisticsResponse: {
                typeUrl: string;
                encode(message: _267.QueryGetProtoRevAllStatisticsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryGetProtoRevAllStatisticsResponse;
                fromPartial(object: Partial<_267.QueryGetProtoRevAllStatisticsResponse>): _267.QueryGetProtoRevAllStatisticsResponse;
                fromAmino(object: _267.QueryGetProtoRevAllStatisticsResponseAmino): _267.QueryGetProtoRevAllStatisticsResponse;
                toAmino(message: _267.QueryGetProtoRevAllStatisticsResponse): _267.QueryGetProtoRevAllStatisticsResponseAmino;
                fromAminoMsg(object: _267.QueryGetProtoRevAllStatisticsResponseAminoMsg): _267.QueryGetProtoRevAllStatisticsResponse;
                toAminoMsg(message: _267.QueryGetProtoRevAllStatisticsResponse): _267.QueryGetProtoRevAllStatisticsResponseAminoMsg;
                fromProtoMsg(message: _267.QueryGetProtoRevAllStatisticsResponseProtoMsg): _267.QueryGetProtoRevAllStatisticsResponse;
                toProto(message: _267.QueryGetProtoRevAllStatisticsResponse): Uint8Array;
                toProtoMsg(message: _267.QueryGetProtoRevAllStatisticsResponse): _267.QueryGetProtoRevAllStatisticsResponseProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                typeUrl: string;
                encode(_: _267.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromPartial(_: Partial<_267.QueryGetProtoRevTokenPairArbRoutesRequest>): _267.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromAmino(_: _267.QueryGetProtoRevTokenPairArbRoutesRequestAmino): _267.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAmino(_: _267.QueryGetProtoRevTokenPairArbRoutesRequest): _267.QueryGetProtoRevTokenPairArbRoutesRequestAmino;
                fromAminoMsg(object: _267.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): _267.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAminoMsg(message: _267.QueryGetProtoRevTokenPairArbRoutesRequest): _267.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg;
                fromProtoMsg(message: _267.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): _267.QueryGetProtoRevTokenPairArbRoutesRequest;
                toProto(message: _267.QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array;
                toProtoMsg(message: _267.QueryGetProtoRevTokenPairArbRoutesRequest): _267.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                typeUrl: string;
                encode(message: _267.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _267.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromPartial(object: Partial<_267.QueryGetProtoRevTokenPairArbRoutesResponse>): _267.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromAmino(object: _267.QueryGetProtoRevTokenPairArbRoutesResponseAmino): _267.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAmino(message: _267.QueryGetProtoRevTokenPairArbRoutesResponse): _267.QueryGetProtoRevTokenPairArbRoutesResponseAmino;
                fromAminoMsg(object: _267.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): _267.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAminoMsg(message: _267.QueryGetProtoRevTokenPairArbRoutesResponse): _267.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg;
                fromProtoMsg(message: _267.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): _267.QueryGetProtoRevTokenPairArbRoutesResponse;
                toProto(message: _267.QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array;
                toProtoMsg(message: _267.QueryGetProtoRevTokenPairArbRoutesResponse): _267.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg;
            };
            TokenPairArbRoutes: {
                typeUrl: string;
                encode(message: _266.TokenPairArbRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _266.TokenPairArbRoutes;
                fromPartial(object: Partial<_266.TokenPairArbRoutes>): _266.TokenPairArbRoutes;
                fromAmino(object: _266.TokenPairArbRoutesAmino): _266.TokenPairArbRoutes;
                toAmino(message: _266.TokenPairArbRoutes): _266.TokenPairArbRoutesAmino;
                fromAminoMsg(object: _266.TokenPairArbRoutesAminoMsg): _266.TokenPairArbRoutes;
                toAminoMsg(message: _266.TokenPairArbRoutes): _266.TokenPairArbRoutesAminoMsg;
                fromProtoMsg(message: _266.TokenPairArbRoutesProtoMsg): _266.TokenPairArbRoutes;
                toProto(message: _266.TokenPairArbRoutes): Uint8Array;
                toProtoMsg(message: _266.TokenPairArbRoutes): _266.TokenPairArbRoutesProtoMsg;
            };
            Route: {
                typeUrl: string;
                encode(message: _266.Route, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _266.Route;
                fromPartial(object: Partial<_266.Route>): _266.Route;
                fromAmino(object: _266.RouteAmino): _266.Route;
                toAmino(message: _266.Route): _266.RouteAmino;
                fromAminoMsg(object: _266.RouteAminoMsg): _266.Route;
                toAminoMsg(message: _266.Route): _266.RouteAminoMsg;
                fromProtoMsg(message: _266.RouteProtoMsg): _266.Route;
                toProto(message: _266.Route): Uint8Array;
                toProtoMsg(message: _266.Route): _266.RouteProtoMsg;
            };
            Trade: {
                typeUrl: string;
                encode(message: _266.Trade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _266.Trade;
                fromPartial(object: Partial<_266.Trade>): _266.Trade;
                fromAmino(object: _266.TradeAmino): _266.Trade;
                toAmino(message: _266.Trade): _266.TradeAmino;
                fromAminoMsg(object: _266.TradeAminoMsg): _266.Trade;
                toAminoMsg(message: _266.Trade): _266.TradeAminoMsg;
                fromProtoMsg(message: _266.TradeProtoMsg): _266.Trade;
                toProto(message: _266.Trade): Uint8Array;
                toProtoMsg(message: _266.Trade): _266.TradeProtoMsg;
            };
            PoolStatistics: {
                typeUrl: string;
                encode(message: _266.PoolStatistics, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _266.PoolStatistics;
                fromPartial(object: Partial<_266.PoolStatistics>): _266.PoolStatistics;
                fromAmino(object: _266.PoolStatisticsAmino): _266.PoolStatistics;
                toAmino(message: _266.PoolStatistics): _266.PoolStatisticsAmino;
                fromAminoMsg(object: _266.PoolStatisticsAminoMsg): _266.PoolStatistics;
                toAminoMsg(message: _266.PoolStatistics): _266.PoolStatisticsAminoMsg;
                fromProtoMsg(message: _266.PoolStatisticsProtoMsg): _266.PoolStatistics;
                toProto(message: _266.PoolStatistics): Uint8Array;
                toProtoMsg(message: _266.PoolStatistics): _266.PoolStatisticsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _265.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _265.Params;
                fromPartial(object: Partial<_265.Params>): _265.Params;
                fromAmino(object: _265.ParamsAmino): _265.Params;
                toAmino(message: _265.Params): _265.ParamsAmino;
                fromAminoMsg(object: _265.ParamsAminoMsg): _265.Params;
                toAminoMsg(message: _265.Params): _265.ParamsAminoMsg;
                fromProtoMsg(message: _265.ParamsProtoMsg): _265.Params;
                toProto(message: _265.Params): Uint8Array;
                toProtoMsg(message: _265.Params): _265.ParamsProtoMsg;
            };
            SetProtoRevEnabledProposal: {
                typeUrl: string;
                encode(message: _264.SetProtoRevEnabledProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _264.SetProtoRevEnabledProposal;
                fromPartial(object: Partial<_264.SetProtoRevEnabledProposal>): _264.SetProtoRevEnabledProposal;
                fromAmino(object: _264.SetProtoRevEnabledProposalAmino): _264.SetProtoRevEnabledProposal;
                toAmino(message: _264.SetProtoRevEnabledProposal): _264.SetProtoRevEnabledProposalAmino;
                fromAminoMsg(object: _264.SetProtoRevEnabledProposalAminoMsg): _264.SetProtoRevEnabledProposal;
                toAminoMsg(message: _264.SetProtoRevEnabledProposal): _264.SetProtoRevEnabledProposalAminoMsg;
                fromProtoMsg(message: _264.SetProtoRevEnabledProposalProtoMsg): _264.SetProtoRevEnabledProposal;
                toProto(message: _264.SetProtoRevEnabledProposal): Uint8Array;
                toProtoMsg(message: _264.SetProtoRevEnabledProposal): _264.SetProtoRevEnabledProposalProtoMsg;
            };
            SetProtoRevAdminAccountProposal: {
                typeUrl: string;
                encode(message: _264.SetProtoRevAdminAccountProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _264.SetProtoRevAdminAccountProposal;
                fromPartial(object: Partial<_264.SetProtoRevAdminAccountProposal>): _264.SetProtoRevAdminAccountProposal;
                fromAmino(object: _264.SetProtoRevAdminAccountProposalAmino): _264.SetProtoRevAdminAccountProposal;
                toAmino(message: _264.SetProtoRevAdminAccountProposal): _264.SetProtoRevAdminAccountProposalAmino;
                fromAminoMsg(object: _264.SetProtoRevAdminAccountProposalAminoMsg): _264.SetProtoRevAdminAccountProposal;
                toAminoMsg(message: _264.SetProtoRevAdminAccountProposal): _264.SetProtoRevAdminAccountProposalAminoMsg;
                fromProtoMsg(message: _264.SetProtoRevAdminAccountProposalProtoMsg): _264.SetProtoRevAdminAccountProposal;
                toProto(message: _264.SetProtoRevAdminAccountProposal): Uint8Array;
                toProtoMsg(message: _264.SetProtoRevAdminAccountProposal): _264.SetProtoRevAdminAccountProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _263.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _263.GenesisState;
                fromPartial(object: Partial<_263.GenesisState>): _263.GenesisState;
                fromAmino(object: _263.GenesisStateAmino): _263.GenesisState;
                toAmino(message: _263.GenesisState): _263.GenesisStateAmino;
                fromAminoMsg(object: _263.GenesisStateAminoMsg): _263.GenesisState;
                toAminoMsg(message: _263.GenesisState): _263.GenesisStateAminoMsg;
                fromProtoMsg(message: _263.GenesisStateProtoMsg): _263.GenesisState;
                toProto(message: _263.GenesisState): Uint8Array;
                toProtoMsg(message: _263.GenesisState): _263.GenesisStateProtoMsg;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                typeUrl: string;
                encode(message: _269.Node, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _269.Node;
                fromPartial(object: Partial<_269.Node>): _269.Node;
                fromAmino(object: _269.NodeAmino): _269.Node;
                toAmino(message: _269.Node): _269.NodeAmino;
                fromAminoMsg(object: _269.NodeAminoMsg): _269.Node;
                toAminoMsg(message: _269.Node): _269.NodeAminoMsg;
                fromProtoMsg(message: _269.NodeProtoMsg): _269.Node;
                toProto(message: _269.Node): Uint8Array;
                toProtoMsg(message: _269.Node): _269.NodeProtoMsg;
            };
            Child: {
                typeUrl: string;
                encode(message: _269.Child, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _269.Child;
                fromPartial(object: Partial<_269.Child>): _269.Child;
                fromAmino(object: _269.ChildAmino): _269.Child;
                toAmino(message: _269.Child): _269.ChildAmino;
                fromAminoMsg(object: _269.ChildAminoMsg): _269.Child;
                toAminoMsg(message: _269.Child): _269.ChildAminoMsg;
                fromProtoMsg(message: _269.ChildProtoMsg): _269.Child;
                toProto(message: _269.Child): Uint8Array;
                toProtoMsg(message: _269.Child): _269.ChildProtoMsg;
            };
            Leaf: {
                typeUrl: string;
                encode(message: _269.Leaf, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _269.Leaf;
                fromPartial(object: Partial<_269.Leaf>): _269.Leaf;
                fromAmino(object: _269.LeafAmino): _269.Leaf;
                toAmino(message: _269.Leaf): _269.LeafAmino;
                fromAminoMsg(object: _269.LeafAminoMsg): _269.Leaf;
                toAminoMsg(message: _269.Leaf): _269.LeafAminoMsg;
                fromProtoMsg(message: _269.LeafProtoMsg): _269.Leaf;
                toProto(message: _269.Leaf): Uint8Array;
                toProtoMsg(message: _269.Leaf): _269.LeafProtoMsg;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _545.MsgClientImpl;
        QueryClientImpl: typeof _533.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _272.QueryParamsRequest): Promise<_272.QueryParamsResponse>;
            assetType(request: _272.AssetTypeRequest): Promise<_272.AssetTypeResponse>;
            allAssets(request?: _272.AllAssetsRequest): Promise<_272.AllAssetsResponse>;
            assetMultiplier(request: _272.AssetMultiplierRequest): Promise<_272.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _272.AllIntermediaryAccountsRequest): Promise<_272.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _272.ConnectedIntermediaryAccountRequest): Promise<_272.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _272.QueryTotalDelegationByValidatorForDenomRequest): Promise<_272.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _272.TotalSuperfluidDelegationsRequest): Promise<_272.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _272.SuperfluidDelegationAmountRequest): Promise<_272.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _272.SuperfluidDelegationsByDelegatorRequest): Promise<_272.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _272.SuperfluidUndelegationsByDelegatorRequest): Promise<_272.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _272.SuperfluidDelegationsByValidatorDenomRequest): Promise<_272.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _272.QueryTotalDelegationByDelegatorRequest): Promise<_272.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _272.QueryUnpoolWhitelistRequest): Promise<_272.QueryUnpoolWhitelistResponse>;
        };
        registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _274.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _274.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _274.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _274.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _274.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _274.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _274.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _274.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _274.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _274.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _274.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _274.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _274.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _274.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _274.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _274.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _274.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _274.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _274.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _274.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _274.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _274.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _274.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _274.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _274.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _274.MsgSuperfluidDelegate) => _274.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _274.MsgSuperfluidDelegateAmino) => _274.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _274.MsgSuperfluidUndelegate) => _274.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _274.MsgSuperfluidUndelegateAmino) => _274.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _274.MsgSuperfluidUnbondLock) => _274.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _274.MsgSuperfluidUnbondLockAmino) => _274.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _274.MsgLockAndSuperfluidDelegate) => _274.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _274.MsgLockAndSuperfluidDelegateAmino) => _274.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _274.MsgUnPoolWhitelistedPool) => _274.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _274.MsgUnPoolWhitelistedPoolAmino) => _274.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _274.MsgSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _274.MsgSuperfluidDelegate;
            fromPartial(object: Partial<_274.MsgSuperfluidDelegate>): _274.MsgSuperfluidDelegate;
            fromAmino(object: _274.MsgSuperfluidDelegateAmino): _274.MsgSuperfluidDelegate;
            toAmino(message: _274.MsgSuperfluidDelegate): _274.MsgSuperfluidDelegateAmino;
            fromAminoMsg(object: _274.MsgSuperfluidDelegateAminoMsg): _274.MsgSuperfluidDelegate;
            toAminoMsg(message: _274.MsgSuperfluidDelegate): _274.MsgSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _274.MsgSuperfluidDelegateProtoMsg): _274.MsgSuperfluidDelegate;
            toProto(message: _274.MsgSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _274.MsgSuperfluidDelegate): _274.MsgSuperfluidDelegateProtoMsg;
        };
        MsgSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(_: _274.MsgSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _274.MsgSuperfluidDelegateResponse;
            fromPartial(_: Partial<_274.MsgSuperfluidDelegateResponse>): _274.MsgSuperfluidDelegateResponse;
            fromAmino(_: _274.MsgSuperfluidDelegateResponseAmino): _274.MsgSuperfluidDelegateResponse;
            toAmino(_: _274.MsgSuperfluidDelegateResponse): _274.MsgSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _274.MsgSuperfluidDelegateResponseAminoMsg): _274.MsgSuperfluidDelegateResponse;
            toAminoMsg(message: _274.MsgSuperfluidDelegateResponse): _274.MsgSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _274.MsgSuperfluidDelegateResponseProtoMsg): _274.MsgSuperfluidDelegateResponse;
            toProto(message: _274.MsgSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _274.MsgSuperfluidDelegateResponse): _274.MsgSuperfluidDelegateResponseProtoMsg;
        };
        MsgSuperfluidUndelegate: {
            typeUrl: string;
            encode(message: _274.MsgSuperfluidUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _274.MsgSuperfluidUndelegate;
            fromPartial(object: Partial<_274.MsgSuperfluidUndelegate>): _274.MsgSuperfluidUndelegate;
            fromAmino(object: _274.MsgSuperfluidUndelegateAmino): _274.MsgSuperfluidUndelegate;
            toAmino(message: _274.MsgSuperfluidUndelegate): _274.MsgSuperfluidUndelegateAmino;
            fromAminoMsg(object: _274.MsgSuperfluidUndelegateAminoMsg): _274.MsgSuperfluidUndelegate;
            toAminoMsg(message: _274.MsgSuperfluidUndelegate): _274.MsgSuperfluidUndelegateAminoMsg;
            fromProtoMsg(message: _274.MsgSuperfluidUndelegateProtoMsg): _274.MsgSuperfluidUndelegate;
            toProto(message: _274.MsgSuperfluidUndelegate): Uint8Array;
            toProtoMsg(message: _274.MsgSuperfluidUndelegate): _274.MsgSuperfluidUndelegateProtoMsg;
        };
        MsgSuperfluidUndelegateResponse: {
            typeUrl: string;
            encode(_: _274.MsgSuperfluidUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _274.MsgSuperfluidUndelegateResponse;
            fromPartial(_: Partial<_274.MsgSuperfluidUndelegateResponse>): _274.MsgSuperfluidUndelegateResponse;
            fromAmino(_: _274.MsgSuperfluidUndelegateResponseAmino): _274.MsgSuperfluidUndelegateResponse;
            toAmino(_: _274.MsgSuperfluidUndelegateResponse): _274.MsgSuperfluidUndelegateResponseAmino;
            fromAminoMsg(object: _274.MsgSuperfluidUndelegateResponseAminoMsg): _274.MsgSuperfluidUndelegateResponse;
            toAminoMsg(message: _274.MsgSuperfluidUndelegateResponse): _274.MsgSuperfluidUndelegateResponseAminoMsg;
            fromProtoMsg(message: _274.MsgSuperfluidUndelegateResponseProtoMsg): _274.MsgSuperfluidUndelegateResponse;
            toProto(message: _274.MsgSuperfluidUndelegateResponse): Uint8Array;
            toProtoMsg(message: _274.MsgSuperfluidUndelegateResponse): _274.MsgSuperfluidUndelegateResponseProtoMsg;
        };
        MsgSuperfluidUnbondLock: {
            typeUrl: string;
            encode(message: _274.MsgSuperfluidUnbondLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _274.MsgSuperfluidUnbondLock;
            fromPartial(object: Partial<_274.MsgSuperfluidUnbondLock>): _274.MsgSuperfluidUnbondLock;
            fromAmino(object: _274.MsgSuperfluidUnbondLockAmino): _274.MsgSuperfluidUnbondLock;
            toAmino(message: _274.MsgSuperfluidUnbondLock): _274.MsgSuperfluidUnbondLockAmino;
            fromAminoMsg(object: _274.MsgSuperfluidUnbondLockAminoMsg): _274.MsgSuperfluidUnbondLock;
            toAminoMsg(message: _274.MsgSuperfluidUnbondLock): _274.MsgSuperfluidUnbondLockAminoMsg;
            fromProtoMsg(message: _274.MsgSuperfluidUnbondLockProtoMsg): _274.MsgSuperfluidUnbondLock;
            toProto(message: _274.MsgSuperfluidUnbondLock): Uint8Array;
            toProtoMsg(message: _274.MsgSuperfluidUnbondLock): _274.MsgSuperfluidUnbondLockProtoMsg;
        };
        MsgSuperfluidUnbondLockResponse: {
            typeUrl: string;
            encode(_: _274.MsgSuperfluidUnbondLockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _274.MsgSuperfluidUnbondLockResponse;
            fromPartial(_: Partial<_274.MsgSuperfluidUnbondLockResponse>): _274.MsgSuperfluidUnbondLockResponse;
            fromAmino(_: _274.MsgSuperfluidUnbondLockResponseAmino): _274.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _274.MsgSuperfluidUnbondLockResponse): _274.MsgSuperfluidUnbondLockResponseAmino;
            fromAminoMsg(object: _274.MsgSuperfluidUnbondLockResponseAminoMsg): _274.MsgSuperfluidUnbondLockResponse;
            toAminoMsg(message: _274.MsgSuperfluidUnbondLockResponse): _274.MsgSuperfluidUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _274.MsgSuperfluidUnbondLockResponseProtoMsg): _274.MsgSuperfluidUnbondLockResponse;
            toProto(message: _274.MsgSuperfluidUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _274.MsgSuperfluidUnbondLockResponse): _274.MsgSuperfluidUnbondLockResponseProtoMsg;
        };
        MsgLockAndSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _274.MsgLockAndSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _274.MsgLockAndSuperfluidDelegate;
            fromPartial(object: Partial<_274.MsgLockAndSuperfluidDelegate>): _274.MsgLockAndSuperfluidDelegate;
            fromAmino(object: _274.MsgLockAndSuperfluidDelegateAmino): _274.MsgLockAndSuperfluidDelegate;
            toAmino(message: _274.MsgLockAndSuperfluidDelegate): _274.MsgLockAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _274.MsgLockAndSuperfluidDelegateAminoMsg): _274.MsgLockAndSuperfluidDelegate;
            toAminoMsg(message: _274.MsgLockAndSuperfluidDelegate): _274.MsgLockAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _274.MsgLockAndSuperfluidDelegateProtoMsg): _274.MsgLockAndSuperfluidDelegate;
            toProto(message: _274.MsgLockAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _274.MsgLockAndSuperfluidDelegate): _274.MsgLockAndSuperfluidDelegateProtoMsg;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(message: _274.MsgLockAndSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _274.MsgLockAndSuperfluidDelegateResponse;
            fromPartial(object: Partial<_274.MsgLockAndSuperfluidDelegateResponse>): _274.MsgLockAndSuperfluidDelegateResponse;
            fromAmino(object: _274.MsgLockAndSuperfluidDelegateResponseAmino): _274.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _274.MsgLockAndSuperfluidDelegateResponse): _274.MsgLockAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _274.MsgLockAndSuperfluidDelegateResponseAminoMsg): _274.MsgLockAndSuperfluidDelegateResponse;
            toAminoMsg(message: _274.MsgLockAndSuperfluidDelegateResponse): _274.MsgLockAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _274.MsgLockAndSuperfluidDelegateResponseProtoMsg): _274.MsgLockAndSuperfluidDelegateResponse;
            toProto(message: _274.MsgLockAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _274.MsgLockAndSuperfluidDelegateResponse): _274.MsgLockAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgUnPoolWhitelistedPool: {
            typeUrl: string;
            encode(message: _274.MsgUnPoolWhitelistedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _274.MsgUnPoolWhitelistedPool;
            fromPartial(object: Partial<_274.MsgUnPoolWhitelistedPool>): _274.MsgUnPoolWhitelistedPool;
            fromAmino(object: _274.MsgUnPoolWhitelistedPoolAmino): _274.MsgUnPoolWhitelistedPool;
            toAmino(message: _274.MsgUnPoolWhitelistedPool): _274.MsgUnPoolWhitelistedPoolAmino;
            fromAminoMsg(object: _274.MsgUnPoolWhitelistedPoolAminoMsg): _274.MsgUnPoolWhitelistedPool;
            toAminoMsg(message: _274.MsgUnPoolWhitelistedPool): _274.MsgUnPoolWhitelistedPoolAminoMsg;
            fromProtoMsg(message: _274.MsgUnPoolWhitelistedPoolProtoMsg): _274.MsgUnPoolWhitelistedPool;
            toProto(message: _274.MsgUnPoolWhitelistedPool): Uint8Array;
            toProtoMsg(message: _274.MsgUnPoolWhitelistedPool): _274.MsgUnPoolWhitelistedPoolProtoMsg;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            typeUrl: string;
            encode(message: _274.MsgUnPoolWhitelistedPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _274.MsgUnPoolWhitelistedPoolResponse;
            fromPartial(object: Partial<_274.MsgUnPoolWhitelistedPoolResponse>): _274.MsgUnPoolWhitelistedPoolResponse;
            fromAmino(object: _274.MsgUnPoolWhitelistedPoolResponseAmino): _274.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _274.MsgUnPoolWhitelistedPoolResponse): _274.MsgUnPoolWhitelistedPoolResponseAmino;
            fromAminoMsg(object: _274.MsgUnPoolWhitelistedPoolResponseAminoMsg): _274.MsgUnPoolWhitelistedPoolResponse;
            toAminoMsg(message: _274.MsgUnPoolWhitelistedPoolResponse): _274.MsgUnPoolWhitelistedPoolResponseAminoMsg;
            fromProtoMsg(message: _274.MsgUnPoolWhitelistedPoolResponseProtoMsg): _274.MsgUnPoolWhitelistedPoolResponse;
            toProto(message: _274.MsgUnPoolWhitelistedPoolResponse): Uint8Array;
            toProtoMsg(message: _274.MsgUnPoolWhitelistedPoolResponse): _274.MsgUnPoolWhitelistedPoolResponseProtoMsg;
        };
        superfluidAssetTypeFromJSON(object: any): _273.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _273.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _273.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _273.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _273.SuperfluidAssetType;
        SuperfluidAsset: {
            typeUrl: string;
            encode(message: _273.SuperfluidAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _273.SuperfluidAsset;
            fromPartial(object: Partial<_273.SuperfluidAsset>): _273.SuperfluidAsset;
            fromAmino(object: _273.SuperfluidAssetAmino): _273.SuperfluidAsset;
            toAmino(message: _273.SuperfluidAsset): _273.SuperfluidAssetAmino;
            fromAminoMsg(object: _273.SuperfluidAssetAminoMsg): _273.SuperfluidAsset;
            toAminoMsg(message: _273.SuperfluidAsset): _273.SuperfluidAssetAminoMsg;
            fromProtoMsg(message: _273.SuperfluidAssetProtoMsg): _273.SuperfluidAsset;
            toProto(message: _273.SuperfluidAsset): Uint8Array;
            toProtoMsg(message: _273.SuperfluidAsset): _273.SuperfluidAssetProtoMsg;
        };
        SuperfluidIntermediaryAccount: {
            typeUrl: string;
            encode(message: _273.SuperfluidIntermediaryAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _273.SuperfluidIntermediaryAccount;
            fromPartial(object: Partial<_273.SuperfluidIntermediaryAccount>): _273.SuperfluidIntermediaryAccount;
            fromAmino(object: _273.SuperfluidIntermediaryAccountAmino): _273.SuperfluidIntermediaryAccount;
            toAmino(message: _273.SuperfluidIntermediaryAccount): _273.SuperfluidIntermediaryAccountAmino;
            fromAminoMsg(object: _273.SuperfluidIntermediaryAccountAminoMsg): _273.SuperfluidIntermediaryAccount;
            toAminoMsg(message: _273.SuperfluidIntermediaryAccount): _273.SuperfluidIntermediaryAccountAminoMsg;
            fromProtoMsg(message: _273.SuperfluidIntermediaryAccountProtoMsg): _273.SuperfluidIntermediaryAccount;
            toProto(message: _273.SuperfluidIntermediaryAccount): Uint8Array;
            toProtoMsg(message: _273.SuperfluidIntermediaryAccount): _273.SuperfluidIntermediaryAccountProtoMsg;
        };
        OsmoEquivalentMultiplierRecord: {
            typeUrl: string;
            encode(message: _273.OsmoEquivalentMultiplierRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _273.OsmoEquivalentMultiplierRecord;
            fromPartial(object: Partial<_273.OsmoEquivalentMultiplierRecord>): _273.OsmoEquivalentMultiplierRecord;
            fromAmino(object: _273.OsmoEquivalentMultiplierRecordAmino): _273.OsmoEquivalentMultiplierRecord;
            toAmino(message: _273.OsmoEquivalentMultiplierRecord): _273.OsmoEquivalentMultiplierRecordAmino;
            fromAminoMsg(object: _273.OsmoEquivalentMultiplierRecordAminoMsg): _273.OsmoEquivalentMultiplierRecord;
            toAminoMsg(message: _273.OsmoEquivalentMultiplierRecord): _273.OsmoEquivalentMultiplierRecordAminoMsg;
            fromProtoMsg(message: _273.OsmoEquivalentMultiplierRecordProtoMsg): _273.OsmoEquivalentMultiplierRecord;
            toProto(message: _273.OsmoEquivalentMultiplierRecord): Uint8Array;
            toProtoMsg(message: _273.OsmoEquivalentMultiplierRecord): _273.OsmoEquivalentMultiplierRecordProtoMsg;
        };
        SuperfluidDelegationRecord: {
            typeUrl: string;
            encode(message: _273.SuperfluidDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _273.SuperfluidDelegationRecord;
            fromPartial(object: Partial<_273.SuperfluidDelegationRecord>): _273.SuperfluidDelegationRecord;
            fromAmino(object: _273.SuperfluidDelegationRecordAmino): _273.SuperfluidDelegationRecord;
            toAmino(message: _273.SuperfluidDelegationRecord): _273.SuperfluidDelegationRecordAmino;
            fromAminoMsg(object: _273.SuperfluidDelegationRecordAminoMsg): _273.SuperfluidDelegationRecord;
            toAminoMsg(message: _273.SuperfluidDelegationRecord): _273.SuperfluidDelegationRecordAminoMsg;
            fromProtoMsg(message: _273.SuperfluidDelegationRecordProtoMsg): _273.SuperfluidDelegationRecord;
            toProto(message: _273.SuperfluidDelegationRecord): Uint8Array;
            toProtoMsg(message: _273.SuperfluidDelegationRecord): _273.SuperfluidDelegationRecordProtoMsg;
        };
        LockIdIntermediaryAccountConnection: {
            typeUrl: string;
            encode(message: _273.LockIdIntermediaryAccountConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _273.LockIdIntermediaryAccountConnection;
            fromPartial(object: Partial<_273.LockIdIntermediaryAccountConnection>): _273.LockIdIntermediaryAccountConnection;
            fromAmino(object: _273.LockIdIntermediaryAccountConnectionAmino): _273.LockIdIntermediaryAccountConnection;
            toAmino(message: _273.LockIdIntermediaryAccountConnection): _273.LockIdIntermediaryAccountConnectionAmino;
            fromAminoMsg(object: _273.LockIdIntermediaryAccountConnectionAminoMsg): _273.LockIdIntermediaryAccountConnection;
            toAminoMsg(message: _273.LockIdIntermediaryAccountConnection): _273.LockIdIntermediaryAccountConnectionAminoMsg;
            fromProtoMsg(message: _273.LockIdIntermediaryAccountConnectionProtoMsg): _273.LockIdIntermediaryAccountConnection;
            toProto(message: _273.LockIdIntermediaryAccountConnection): Uint8Array;
            toProtoMsg(message: _273.LockIdIntermediaryAccountConnection): _273.LockIdIntermediaryAccountConnectionProtoMsg;
        };
        UnpoolWhitelistedPools: {
            typeUrl: string;
            encode(message: _273.UnpoolWhitelistedPools, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _273.UnpoolWhitelistedPools;
            fromPartial(object: Partial<_273.UnpoolWhitelistedPools>): _273.UnpoolWhitelistedPools;
            fromAmino(object: _273.UnpoolWhitelistedPoolsAmino): _273.UnpoolWhitelistedPools;
            toAmino(message: _273.UnpoolWhitelistedPools): _273.UnpoolWhitelistedPoolsAmino;
            fromAminoMsg(object: _273.UnpoolWhitelistedPoolsAminoMsg): _273.UnpoolWhitelistedPools;
            toAminoMsg(message: _273.UnpoolWhitelistedPools): _273.UnpoolWhitelistedPoolsAminoMsg;
            fromProtoMsg(message: _273.UnpoolWhitelistedPoolsProtoMsg): _273.UnpoolWhitelistedPools;
            toProto(message: _273.UnpoolWhitelistedPools): Uint8Array;
            toProtoMsg(message: _273.UnpoolWhitelistedPools): _273.UnpoolWhitelistedPoolsProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _272.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.QueryParamsRequest;
            fromPartial(_: Partial<_272.QueryParamsRequest>): _272.QueryParamsRequest;
            fromAmino(_: _272.QueryParamsRequestAmino): _272.QueryParamsRequest;
            toAmino(_: _272.QueryParamsRequest): _272.QueryParamsRequestAmino;
            fromAminoMsg(object: _272.QueryParamsRequestAminoMsg): _272.QueryParamsRequest;
            toAminoMsg(message: _272.QueryParamsRequest): _272.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _272.QueryParamsRequestProtoMsg): _272.QueryParamsRequest;
            toProto(message: _272.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _272.QueryParamsRequest): _272.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _272.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.QueryParamsResponse;
            fromPartial(object: Partial<_272.QueryParamsResponse>): _272.QueryParamsResponse;
            fromAmino(object: _272.QueryParamsResponseAmino): _272.QueryParamsResponse;
            toAmino(message: _272.QueryParamsResponse): _272.QueryParamsResponseAmino;
            fromAminoMsg(object: _272.QueryParamsResponseAminoMsg): _272.QueryParamsResponse;
            toAminoMsg(message: _272.QueryParamsResponse): _272.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _272.QueryParamsResponseProtoMsg): _272.QueryParamsResponse;
            toProto(message: _272.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _272.QueryParamsResponse): _272.QueryParamsResponseProtoMsg;
        };
        AssetTypeRequest: {
            typeUrl: string;
            encode(message: _272.AssetTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.AssetTypeRequest;
            fromPartial(object: Partial<_272.AssetTypeRequest>): _272.AssetTypeRequest;
            fromAmino(object: _272.AssetTypeRequestAmino): _272.AssetTypeRequest;
            toAmino(message: _272.AssetTypeRequest): _272.AssetTypeRequestAmino;
            fromAminoMsg(object: _272.AssetTypeRequestAminoMsg): _272.AssetTypeRequest;
            toAminoMsg(message: _272.AssetTypeRequest): _272.AssetTypeRequestAminoMsg;
            fromProtoMsg(message: _272.AssetTypeRequestProtoMsg): _272.AssetTypeRequest;
            toProto(message: _272.AssetTypeRequest): Uint8Array;
            toProtoMsg(message: _272.AssetTypeRequest): _272.AssetTypeRequestProtoMsg;
        };
        AssetTypeResponse: {
            typeUrl: string;
            encode(message: _272.AssetTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.AssetTypeResponse;
            fromPartial(object: Partial<_272.AssetTypeResponse>): _272.AssetTypeResponse;
            fromAmino(object: _272.AssetTypeResponseAmino): _272.AssetTypeResponse;
            toAmino(message: _272.AssetTypeResponse): _272.AssetTypeResponseAmino;
            fromAminoMsg(object: _272.AssetTypeResponseAminoMsg): _272.AssetTypeResponse;
            toAminoMsg(message: _272.AssetTypeResponse): _272.AssetTypeResponseAminoMsg;
            fromProtoMsg(message: _272.AssetTypeResponseProtoMsg): _272.AssetTypeResponse;
            toProto(message: _272.AssetTypeResponse): Uint8Array;
            toProtoMsg(message: _272.AssetTypeResponse): _272.AssetTypeResponseProtoMsg;
        };
        AllAssetsRequest: {
            typeUrl: string;
            encode(_: _272.AllAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.AllAssetsRequest;
            fromPartial(_: Partial<_272.AllAssetsRequest>): _272.AllAssetsRequest;
            fromAmino(_: _272.AllAssetsRequestAmino): _272.AllAssetsRequest;
            toAmino(_: _272.AllAssetsRequest): _272.AllAssetsRequestAmino;
            fromAminoMsg(object: _272.AllAssetsRequestAminoMsg): _272.AllAssetsRequest;
            toAminoMsg(message: _272.AllAssetsRequest): _272.AllAssetsRequestAminoMsg;
            fromProtoMsg(message: _272.AllAssetsRequestProtoMsg): _272.AllAssetsRequest;
            toProto(message: _272.AllAssetsRequest): Uint8Array;
            toProtoMsg(message: _272.AllAssetsRequest): _272.AllAssetsRequestProtoMsg;
        };
        AllAssetsResponse: {
            typeUrl: string;
            encode(message: _272.AllAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.AllAssetsResponse;
            fromPartial(object: Partial<_272.AllAssetsResponse>): _272.AllAssetsResponse;
            fromAmino(object: _272.AllAssetsResponseAmino): _272.AllAssetsResponse;
            toAmino(message: _272.AllAssetsResponse): _272.AllAssetsResponseAmino;
            fromAminoMsg(object: _272.AllAssetsResponseAminoMsg): _272.AllAssetsResponse;
            toAminoMsg(message: _272.AllAssetsResponse): _272.AllAssetsResponseAminoMsg;
            fromProtoMsg(message: _272.AllAssetsResponseProtoMsg): _272.AllAssetsResponse;
            toProto(message: _272.AllAssetsResponse): Uint8Array;
            toProtoMsg(message: _272.AllAssetsResponse): _272.AllAssetsResponseProtoMsg;
        };
        AssetMultiplierRequest: {
            typeUrl: string;
            encode(message: _272.AssetMultiplierRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.AssetMultiplierRequest;
            fromPartial(object: Partial<_272.AssetMultiplierRequest>): _272.AssetMultiplierRequest;
            fromAmino(object: _272.AssetMultiplierRequestAmino): _272.AssetMultiplierRequest;
            toAmino(message: _272.AssetMultiplierRequest): _272.AssetMultiplierRequestAmino;
            fromAminoMsg(object: _272.AssetMultiplierRequestAminoMsg): _272.AssetMultiplierRequest;
            toAminoMsg(message: _272.AssetMultiplierRequest): _272.AssetMultiplierRequestAminoMsg;
            fromProtoMsg(message: _272.AssetMultiplierRequestProtoMsg): _272.AssetMultiplierRequest;
            toProto(message: _272.AssetMultiplierRequest): Uint8Array;
            toProtoMsg(message: _272.AssetMultiplierRequest): _272.AssetMultiplierRequestProtoMsg;
        };
        AssetMultiplierResponse: {
            typeUrl: string;
            encode(message: _272.AssetMultiplierResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.AssetMultiplierResponse;
            fromPartial(object: Partial<_272.AssetMultiplierResponse>): _272.AssetMultiplierResponse;
            fromAmino(object: _272.AssetMultiplierResponseAmino): _272.AssetMultiplierResponse;
            toAmino(message: _272.AssetMultiplierResponse): _272.AssetMultiplierResponseAmino;
            fromAminoMsg(object: _272.AssetMultiplierResponseAminoMsg): _272.AssetMultiplierResponse;
            toAminoMsg(message: _272.AssetMultiplierResponse): _272.AssetMultiplierResponseAminoMsg;
            fromProtoMsg(message: _272.AssetMultiplierResponseProtoMsg): _272.AssetMultiplierResponse;
            toProto(message: _272.AssetMultiplierResponse): Uint8Array;
            toProtoMsg(message: _272.AssetMultiplierResponse): _272.AssetMultiplierResponseProtoMsg;
        };
        SuperfluidIntermediaryAccountInfo: {
            typeUrl: string;
            encode(message: _272.SuperfluidIntermediaryAccountInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.SuperfluidIntermediaryAccountInfo;
            fromPartial(object: Partial<_272.SuperfluidIntermediaryAccountInfo>): _272.SuperfluidIntermediaryAccountInfo;
            fromAmino(object: _272.SuperfluidIntermediaryAccountInfoAmino): _272.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _272.SuperfluidIntermediaryAccountInfo): _272.SuperfluidIntermediaryAccountInfoAmino;
            fromAminoMsg(object: _272.SuperfluidIntermediaryAccountInfoAminoMsg): _272.SuperfluidIntermediaryAccountInfo;
            toAminoMsg(message: _272.SuperfluidIntermediaryAccountInfo): _272.SuperfluidIntermediaryAccountInfoAminoMsg;
            fromProtoMsg(message: _272.SuperfluidIntermediaryAccountInfoProtoMsg): _272.SuperfluidIntermediaryAccountInfo;
            toProto(message: _272.SuperfluidIntermediaryAccountInfo): Uint8Array;
            toProtoMsg(message: _272.SuperfluidIntermediaryAccountInfo): _272.SuperfluidIntermediaryAccountInfoProtoMsg;
        };
        AllIntermediaryAccountsRequest: {
            typeUrl: string;
            encode(message: _272.AllIntermediaryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.AllIntermediaryAccountsRequest;
            fromPartial(object: Partial<_272.AllIntermediaryAccountsRequest>): _272.AllIntermediaryAccountsRequest;
            fromAmino(object: _272.AllIntermediaryAccountsRequestAmino): _272.AllIntermediaryAccountsRequest;
            toAmino(message: _272.AllIntermediaryAccountsRequest): _272.AllIntermediaryAccountsRequestAmino;
            fromAminoMsg(object: _272.AllIntermediaryAccountsRequestAminoMsg): _272.AllIntermediaryAccountsRequest;
            toAminoMsg(message: _272.AllIntermediaryAccountsRequest): _272.AllIntermediaryAccountsRequestAminoMsg;
            fromProtoMsg(message: _272.AllIntermediaryAccountsRequestProtoMsg): _272.AllIntermediaryAccountsRequest;
            toProto(message: _272.AllIntermediaryAccountsRequest): Uint8Array;
            toProtoMsg(message: _272.AllIntermediaryAccountsRequest): _272.AllIntermediaryAccountsRequestProtoMsg;
        };
        AllIntermediaryAccountsResponse: {
            typeUrl: string;
            encode(message: _272.AllIntermediaryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.AllIntermediaryAccountsResponse;
            fromPartial(object: Partial<_272.AllIntermediaryAccountsResponse>): _272.AllIntermediaryAccountsResponse;
            fromAmino(object: _272.AllIntermediaryAccountsResponseAmino): _272.AllIntermediaryAccountsResponse;
            toAmino(message: _272.AllIntermediaryAccountsResponse): _272.AllIntermediaryAccountsResponseAmino;
            fromAminoMsg(object: _272.AllIntermediaryAccountsResponseAminoMsg): _272.AllIntermediaryAccountsResponse;
            toAminoMsg(message: _272.AllIntermediaryAccountsResponse): _272.AllIntermediaryAccountsResponseAminoMsg;
            fromProtoMsg(message: _272.AllIntermediaryAccountsResponseProtoMsg): _272.AllIntermediaryAccountsResponse;
            toProto(message: _272.AllIntermediaryAccountsResponse): Uint8Array;
            toProtoMsg(message: _272.AllIntermediaryAccountsResponse): _272.AllIntermediaryAccountsResponseProtoMsg;
        };
        ConnectedIntermediaryAccountRequest: {
            typeUrl: string;
            encode(message: _272.ConnectedIntermediaryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.ConnectedIntermediaryAccountRequest;
            fromPartial(object: Partial<_272.ConnectedIntermediaryAccountRequest>): _272.ConnectedIntermediaryAccountRequest;
            fromAmino(object: _272.ConnectedIntermediaryAccountRequestAmino): _272.ConnectedIntermediaryAccountRequest;
            toAmino(message: _272.ConnectedIntermediaryAccountRequest): _272.ConnectedIntermediaryAccountRequestAmino;
            fromAminoMsg(object: _272.ConnectedIntermediaryAccountRequestAminoMsg): _272.ConnectedIntermediaryAccountRequest;
            toAminoMsg(message: _272.ConnectedIntermediaryAccountRequest): _272.ConnectedIntermediaryAccountRequestAminoMsg;
            fromProtoMsg(message: _272.ConnectedIntermediaryAccountRequestProtoMsg): _272.ConnectedIntermediaryAccountRequest;
            toProto(message: _272.ConnectedIntermediaryAccountRequest): Uint8Array;
            toProtoMsg(message: _272.ConnectedIntermediaryAccountRequest): _272.ConnectedIntermediaryAccountRequestProtoMsg;
        };
        ConnectedIntermediaryAccountResponse: {
            typeUrl: string;
            encode(message: _272.ConnectedIntermediaryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.ConnectedIntermediaryAccountResponse;
            fromPartial(object: Partial<_272.ConnectedIntermediaryAccountResponse>): _272.ConnectedIntermediaryAccountResponse;
            fromAmino(object: _272.ConnectedIntermediaryAccountResponseAmino): _272.ConnectedIntermediaryAccountResponse;
            toAmino(message: _272.ConnectedIntermediaryAccountResponse): _272.ConnectedIntermediaryAccountResponseAmino;
            fromAminoMsg(object: _272.ConnectedIntermediaryAccountResponseAminoMsg): _272.ConnectedIntermediaryAccountResponse;
            toAminoMsg(message: _272.ConnectedIntermediaryAccountResponse): _272.ConnectedIntermediaryAccountResponseAminoMsg;
            fromProtoMsg(message: _272.ConnectedIntermediaryAccountResponseProtoMsg): _272.ConnectedIntermediaryAccountResponse;
            toProto(message: _272.ConnectedIntermediaryAccountResponse): Uint8Array;
            toProtoMsg(message: _272.ConnectedIntermediaryAccountResponse): _272.ConnectedIntermediaryAccountResponseProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            typeUrl: string;
            encode(message: _272.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.QueryTotalDelegationByValidatorForDenomRequest;
            fromPartial(object: Partial<_272.QueryTotalDelegationByValidatorForDenomRequest>): _272.QueryTotalDelegationByValidatorForDenomRequest;
            fromAmino(object: _272.QueryTotalDelegationByValidatorForDenomRequestAmino): _272.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _272.QueryTotalDelegationByValidatorForDenomRequest): _272.QueryTotalDelegationByValidatorForDenomRequestAmino;
            fromAminoMsg(object: _272.QueryTotalDelegationByValidatorForDenomRequestAminoMsg): _272.QueryTotalDelegationByValidatorForDenomRequest;
            toAminoMsg(message: _272.QueryTotalDelegationByValidatorForDenomRequest): _272.QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
            fromProtoMsg(message: _272.QueryTotalDelegationByValidatorForDenomRequestProtoMsg): _272.QueryTotalDelegationByValidatorForDenomRequest;
            toProto(message: _272.QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
            toProtoMsg(message: _272.QueryTotalDelegationByValidatorForDenomRequest): _272.QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            typeUrl: string;
            encode(message: _272.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.QueryTotalDelegationByValidatorForDenomResponse;
            fromPartial(object: Partial<_272.QueryTotalDelegationByValidatorForDenomResponse>): _272.QueryTotalDelegationByValidatorForDenomResponse;
            fromAmino(object: _272.QueryTotalDelegationByValidatorForDenomResponseAmino): _272.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _272.QueryTotalDelegationByValidatorForDenomResponse): _272.QueryTotalDelegationByValidatorForDenomResponseAmino;
            fromAminoMsg(object: _272.QueryTotalDelegationByValidatorForDenomResponseAminoMsg): _272.QueryTotalDelegationByValidatorForDenomResponse;
            toAminoMsg(message: _272.QueryTotalDelegationByValidatorForDenomResponse): _272.QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
            fromProtoMsg(message: _272.QueryTotalDelegationByValidatorForDenomResponseProtoMsg): _272.QueryTotalDelegationByValidatorForDenomResponse;
            toProto(message: _272.QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
            toProtoMsg(message: _272.QueryTotalDelegationByValidatorForDenomResponse): _272.QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
        };
        Delegations: {
            typeUrl: string;
            encode(message: _272.Delegations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.Delegations;
            fromPartial(object: Partial<_272.Delegations>): _272.Delegations;
            fromAmino(object: _272.DelegationsAmino): _272.Delegations;
            toAmino(message: _272.Delegations): _272.DelegationsAmino;
            fromAminoMsg(object: _272.DelegationsAminoMsg): _272.Delegations;
            toAminoMsg(message: _272.Delegations): _272.DelegationsAminoMsg;
            fromProtoMsg(message: _272.DelegationsProtoMsg): _272.Delegations;
            toProto(message: _272.Delegations): Uint8Array;
            toProtoMsg(message: _272.Delegations): _272.DelegationsProtoMsg;
        };
        TotalSuperfluidDelegationsRequest: {
            typeUrl: string;
            encode(_: _272.TotalSuperfluidDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.TotalSuperfluidDelegationsRequest;
            fromPartial(_: Partial<_272.TotalSuperfluidDelegationsRequest>): _272.TotalSuperfluidDelegationsRequest;
            fromAmino(_: _272.TotalSuperfluidDelegationsRequestAmino): _272.TotalSuperfluidDelegationsRequest;
            toAmino(_: _272.TotalSuperfluidDelegationsRequest): _272.TotalSuperfluidDelegationsRequestAmino;
            fromAminoMsg(object: _272.TotalSuperfluidDelegationsRequestAminoMsg): _272.TotalSuperfluidDelegationsRequest;
            toAminoMsg(message: _272.TotalSuperfluidDelegationsRequest): _272.TotalSuperfluidDelegationsRequestAminoMsg;
            fromProtoMsg(message: _272.TotalSuperfluidDelegationsRequestProtoMsg): _272.TotalSuperfluidDelegationsRequest;
            toProto(message: _272.TotalSuperfluidDelegationsRequest): Uint8Array;
            toProtoMsg(message: _272.TotalSuperfluidDelegationsRequest): _272.TotalSuperfluidDelegationsRequestProtoMsg;
        };
        TotalSuperfluidDelegationsResponse: {
            typeUrl: string;
            encode(message: _272.TotalSuperfluidDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.TotalSuperfluidDelegationsResponse;
            fromPartial(object: Partial<_272.TotalSuperfluidDelegationsResponse>): _272.TotalSuperfluidDelegationsResponse;
            fromAmino(object: _272.TotalSuperfluidDelegationsResponseAmino): _272.TotalSuperfluidDelegationsResponse;
            toAmino(message: _272.TotalSuperfluidDelegationsResponse): _272.TotalSuperfluidDelegationsResponseAmino;
            fromAminoMsg(object: _272.TotalSuperfluidDelegationsResponseAminoMsg): _272.TotalSuperfluidDelegationsResponse;
            toAminoMsg(message: _272.TotalSuperfluidDelegationsResponse): _272.TotalSuperfluidDelegationsResponseAminoMsg;
            fromProtoMsg(message: _272.TotalSuperfluidDelegationsResponseProtoMsg): _272.TotalSuperfluidDelegationsResponse;
            toProto(message: _272.TotalSuperfluidDelegationsResponse): Uint8Array;
            toProtoMsg(message: _272.TotalSuperfluidDelegationsResponse): _272.TotalSuperfluidDelegationsResponseProtoMsg;
        };
        SuperfluidDelegationAmountRequest: {
            typeUrl: string;
            encode(message: _272.SuperfluidDelegationAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.SuperfluidDelegationAmountRequest;
            fromPartial(object: Partial<_272.SuperfluidDelegationAmountRequest>): _272.SuperfluidDelegationAmountRequest;
            fromAmino(object: _272.SuperfluidDelegationAmountRequestAmino): _272.SuperfluidDelegationAmountRequest;
            toAmino(message: _272.SuperfluidDelegationAmountRequest): _272.SuperfluidDelegationAmountRequestAmino;
            fromAminoMsg(object: _272.SuperfluidDelegationAmountRequestAminoMsg): _272.SuperfluidDelegationAmountRequest;
            toAminoMsg(message: _272.SuperfluidDelegationAmountRequest): _272.SuperfluidDelegationAmountRequestAminoMsg;
            fromProtoMsg(message: _272.SuperfluidDelegationAmountRequestProtoMsg): _272.SuperfluidDelegationAmountRequest;
            toProto(message: _272.SuperfluidDelegationAmountRequest): Uint8Array;
            toProtoMsg(message: _272.SuperfluidDelegationAmountRequest): _272.SuperfluidDelegationAmountRequestProtoMsg;
        };
        SuperfluidDelegationAmountResponse: {
            typeUrl: string;
            encode(message: _272.SuperfluidDelegationAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.SuperfluidDelegationAmountResponse;
            fromPartial(object: Partial<_272.SuperfluidDelegationAmountResponse>): _272.SuperfluidDelegationAmountResponse;
            fromAmino(object: _272.SuperfluidDelegationAmountResponseAmino): _272.SuperfluidDelegationAmountResponse;
            toAmino(message: _272.SuperfluidDelegationAmountResponse): _272.SuperfluidDelegationAmountResponseAmino;
            fromAminoMsg(object: _272.SuperfluidDelegationAmountResponseAminoMsg): _272.SuperfluidDelegationAmountResponse;
            toAminoMsg(message: _272.SuperfluidDelegationAmountResponse): _272.SuperfluidDelegationAmountResponseAminoMsg;
            fromProtoMsg(message: _272.SuperfluidDelegationAmountResponseProtoMsg): _272.SuperfluidDelegationAmountResponse;
            toProto(message: _272.SuperfluidDelegationAmountResponse): Uint8Array;
            toProtoMsg(message: _272.SuperfluidDelegationAmountResponse): _272.SuperfluidDelegationAmountResponseProtoMsg;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _272.SuperfluidDelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.SuperfluidDelegationsByDelegatorRequest;
            fromPartial(object: Partial<_272.SuperfluidDelegationsByDelegatorRequest>): _272.SuperfluidDelegationsByDelegatorRequest;
            fromAmino(object: _272.SuperfluidDelegationsByDelegatorRequestAmino): _272.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _272.SuperfluidDelegationsByDelegatorRequest): _272.SuperfluidDelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _272.SuperfluidDelegationsByDelegatorRequestAminoMsg): _272.SuperfluidDelegationsByDelegatorRequest;
            toAminoMsg(message: _272.SuperfluidDelegationsByDelegatorRequest): _272.SuperfluidDelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _272.SuperfluidDelegationsByDelegatorRequestProtoMsg): _272.SuperfluidDelegationsByDelegatorRequest;
            toProto(message: _272.SuperfluidDelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _272.SuperfluidDelegationsByDelegatorRequest): _272.SuperfluidDelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _272.SuperfluidDelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.SuperfluidDelegationsByDelegatorResponse;
            fromPartial(object: Partial<_272.SuperfluidDelegationsByDelegatorResponse>): _272.SuperfluidDelegationsByDelegatorResponse;
            fromAmino(object: _272.SuperfluidDelegationsByDelegatorResponseAmino): _272.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _272.SuperfluidDelegationsByDelegatorResponse): _272.SuperfluidDelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _272.SuperfluidDelegationsByDelegatorResponseAminoMsg): _272.SuperfluidDelegationsByDelegatorResponse;
            toAminoMsg(message: _272.SuperfluidDelegationsByDelegatorResponse): _272.SuperfluidDelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _272.SuperfluidDelegationsByDelegatorResponseProtoMsg): _272.SuperfluidDelegationsByDelegatorResponse;
            toProto(message: _272.SuperfluidDelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _272.SuperfluidDelegationsByDelegatorResponse): _272.SuperfluidDelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _272.SuperfluidUndelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.SuperfluidUndelegationsByDelegatorRequest;
            fromPartial(object: Partial<_272.SuperfluidUndelegationsByDelegatorRequest>): _272.SuperfluidUndelegationsByDelegatorRequest;
            fromAmino(object: _272.SuperfluidUndelegationsByDelegatorRequestAmino): _272.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _272.SuperfluidUndelegationsByDelegatorRequest): _272.SuperfluidUndelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _272.SuperfluidUndelegationsByDelegatorRequestAminoMsg): _272.SuperfluidUndelegationsByDelegatorRequest;
            toAminoMsg(message: _272.SuperfluidUndelegationsByDelegatorRequest): _272.SuperfluidUndelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _272.SuperfluidUndelegationsByDelegatorRequestProtoMsg): _272.SuperfluidUndelegationsByDelegatorRequest;
            toProto(message: _272.SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _272.SuperfluidUndelegationsByDelegatorRequest): _272.SuperfluidUndelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _272.SuperfluidUndelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.SuperfluidUndelegationsByDelegatorResponse;
            fromPartial(object: Partial<_272.SuperfluidUndelegationsByDelegatorResponse>): _272.SuperfluidUndelegationsByDelegatorResponse;
            fromAmino(object: _272.SuperfluidUndelegationsByDelegatorResponseAmino): _272.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _272.SuperfluidUndelegationsByDelegatorResponse): _272.SuperfluidUndelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _272.SuperfluidUndelegationsByDelegatorResponseAminoMsg): _272.SuperfluidUndelegationsByDelegatorResponse;
            toAminoMsg(message: _272.SuperfluidUndelegationsByDelegatorResponse): _272.SuperfluidUndelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _272.SuperfluidUndelegationsByDelegatorResponseProtoMsg): _272.SuperfluidUndelegationsByDelegatorResponse;
            toProto(message: _272.SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _272.SuperfluidUndelegationsByDelegatorResponse): _272.SuperfluidUndelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _272.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.SuperfluidDelegationsByValidatorDenomRequest;
            fromPartial(object: Partial<_272.SuperfluidDelegationsByValidatorDenomRequest>): _272.SuperfluidDelegationsByValidatorDenomRequest;
            fromAmino(object: _272.SuperfluidDelegationsByValidatorDenomRequestAmino): _272.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _272.SuperfluidDelegationsByValidatorDenomRequest): _272.SuperfluidDelegationsByValidatorDenomRequestAmino;
            fromAminoMsg(object: _272.SuperfluidDelegationsByValidatorDenomRequestAminoMsg): _272.SuperfluidDelegationsByValidatorDenomRequest;
            toAminoMsg(message: _272.SuperfluidDelegationsByValidatorDenomRequest): _272.SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _272.SuperfluidDelegationsByValidatorDenomRequestProtoMsg): _272.SuperfluidDelegationsByValidatorDenomRequest;
            toProto(message: _272.SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _272.SuperfluidDelegationsByValidatorDenomRequest): _272.SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _272.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.SuperfluidDelegationsByValidatorDenomResponse;
            fromPartial(object: Partial<_272.SuperfluidDelegationsByValidatorDenomResponse>): _272.SuperfluidDelegationsByValidatorDenomResponse;
            fromAmino(object: _272.SuperfluidDelegationsByValidatorDenomResponseAmino): _272.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _272.SuperfluidDelegationsByValidatorDenomResponse): _272.SuperfluidDelegationsByValidatorDenomResponseAmino;
            fromAminoMsg(object: _272.SuperfluidDelegationsByValidatorDenomResponseAminoMsg): _272.SuperfluidDelegationsByValidatorDenomResponse;
            toAminoMsg(message: _272.SuperfluidDelegationsByValidatorDenomResponse): _272.SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _272.SuperfluidDelegationsByValidatorDenomResponseProtoMsg): _272.SuperfluidDelegationsByValidatorDenomResponse;
            toProto(message: _272.SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _272.SuperfluidDelegationsByValidatorDenomResponse): _272.SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromPartial(object: Partial<_272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromAmino(object: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
            fromAminoMsg(object: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAminoMsg(message: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toProto(message: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromPartial(object: Partial<_272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromAmino(object: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
            fromAminoMsg(object: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAminoMsg(message: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toProto(message: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
        };
        QueryTotalDelegationByDelegatorRequest: {
            typeUrl: string;
            encode(message: _272.QueryTotalDelegationByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.QueryTotalDelegationByDelegatorRequest;
            fromPartial(object: Partial<_272.QueryTotalDelegationByDelegatorRequest>): _272.QueryTotalDelegationByDelegatorRequest;
            fromAmino(object: _272.QueryTotalDelegationByDelegatorRequestAmino): _272.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _272.QueryTotalDelegationByDelegatorRequest): _272.QueryTotalDelegationByDelegatorRequestAmino;
            fromAminoMsg(object: _272.QueryTotalDelegationByDelegatorRequestAminoMsg): _272.QueryTotalDelegationByDelegatorRequest;
            toAminoMsg(message: _272.QueryTotalDelegationByDelegatorRequest): _272.QueryTotalDelegationByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _272.QueryTotalDelegationByDelegatorRequestProtoMsg): _272.QueryTotalDelegationByDelegatorRequest;
            toProto(message: _272.QueryTotalDelegationByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _272.QueryTotalDelegationByDelegatorRequest): _272.QueryTotalDelegationByDelegatorRequestProtoMsg;
        };
        QueryTotalDelegationByDelegatorResponse: {
            typeUrl: string;
            encode(message: _272.QueryTotalDelegationByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.QueryTotalDelegationByDelegatorResponse;
            fromPartial(object: Partial<_272.QueryTotalDelegationByDelegatorResponse>): _272.QueryTotalDelegationByDelegatorResponse;
            fromAmino(object: _272.QueryTotalDelegationByDelegatorResponseAmino): _272.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _272.QueryTotalDelegationByDelegatorResponse): _272.QueryTotalDelegationByDelegatorResponseAmino;
            fromAminoMsg(object: _272.QueryTotalDelegationByDelegatorResponseAminoMsg): _272.QueryTotalDelegationByDelegatorResponse;
            toAminoMsg(message: _272.QueryTotalDelegationByDelegatorResponse): _272.QueryTotalDelegationByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _272.QueryTotalDelegationByDelegatorResponseProtoMsg): _272.QueryTotalDelegationByDelegatorResponse;
            toProto(message: _272.QueryTotalDelegationByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _272.QueryTotalDelegationByDelegatorResponse): _272.QueryTotalDelegationByDelegatorResponseProtoMsg;
        };
        QueryUnpoolWhitelistRequest: {
            typeUrl: string;
            encode(_: _272.QueryUnpoolWhitelistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.QueryUnpoolWhitelistRequest;
            fromPartial(_: Partial<_272.QueryUnpoolWhitelistRequest>): _272.QueryUnpoolWhitelistRequest;
            fromAmino(_: _272.QueryUnpoolWhitelistRequestAmino): _272.QueryUnpoolWhitelistRequest;
            toAmino(_: _272.QueryUnpoolWhitelistRequest): _272.QueryUnpoolWhitelistRequestAmino;
            fromAminoMsg(object: _272.QueryUnpoolWhitelistRequestAminoMsg): _272.QueryUnpoolWhitelistRequest;
            toAminoMsg(message: _272.QueryUnpoolWhitelistRequest): _272.QueryUnpoolWhitelistRequestAminoMsg;
            fromProtoMsg(message: _272.QueryUnpoolWhitelistRequestProtoMsg): _272.QueryUnpoolWhitelistRequest;
            toProto(message: _272.QueryUnpoolWhitelistRequest): Uint8Array;
            toProtoMsg(message: _272.QueryUnpoolWhitelistRequest): _272.QueryUnpoolWhitelistRequestProtoMsg;
        };
        QueryUnpoolWhitelistResponse: {
            typeUrl: string;
            encode(message: _272.QueryUnpoolWhitelistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _272.QueryUnpoolWhitelistResponse;
            fromPartial(object: Partial<_272.QueryUnpoolWhitelistResponse>): _272.QueryUnpoolWhitelistResponse;
            fromAmino(object: _272.QueryUnpoolWhitelistResponseAmino): _272.QueryUnpoolWhitelistResponse;
            toAmino(message: _272.QueryUnpoolWhitelistResponse): _272.QueryUnpoolWhitelistResponseAmino;
            fromAminoMsg(object: _272.QueryUnpoolWhitelistResponseAminoMsg): _272.QueryUnpoolWhitelistResponse;
            toAminoMsg(message: _272.QueryUnpoolWhitelistResponse): _272.QueryUnpoolWhitelistResponseAminoMsg;
            fromProtoMsg(message: _272.QueryUnpoolWhitelistResponseProtoMsg): _272.QueryUnpoolWhitelistResponse;
            toProto(message: _272.QueryUnpoolWhitelistResponse): Uint8Array;
            toProtoMsg(message: _272.QueryUnpoolWhitelistResponse): _272.QueryUnpoolWhitelistResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _271.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _271.Params;
            fromPartial(object: Partial<_271.Params>): _271.Params;
            fromAmino(object: _271.ParamsAmino): _271.Params;
            toAmino(message: _271.Params): _271.ParamsAmino;
            fromAminoMsg(object: _271.ParamsAminoMsg): _271.Params;
            toAminoMsg(message: _271.Params): _271.ParamsAminoMsg;
            fromProtoMsg(message: _271.ParamsProtoMsg): _271.Params;
            toProto(message: _271.Params): Uint8Array;
            toProtoMsg(message: _271.Params): _271.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _270.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _270.GenesisState;
            fromPartial(object: Partial<_270.GenesisState>): _270.GenesisState;
            fromAmino(object: _270.GenesisStateAmino): _270.GenesisState;
            toAmino(message: _270.GenesisState): _270.GenesisStateAmino;
            fromAminoMsg(object: _270.GenesisStateAminoMsg): _270.GenesisState;
            toAminoMsg(message: _270.GenesisState): _270.GenesisStateAminoMsg;
            fromProtoMsg(message: _270.GenesisStateProtoMsg): _270.GenesisState;
            toProto(message: _270.GenesisState): Uint8Array;
            toProtoMsg(message: _270.GenesisState): _270.GenesisStateProtoMsg;
        };
    };
    namespace swaprouter {
        const v1beta1: {
            MsgClientImpl: typeof _546.MsgClientImpl;
            QueryClientImpl: typeof _534.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _277.ParamsRequest): Promise<_277.ParamsResponse>;
                estimateSwapExactAmountIn(request: _277.EstimateSwapExactAmountInRequest): Promise<_277.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _277.EstimateSwapExactAmountOutRequest): Promise<_277.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _277.NumPoolsRequest): Promise<_277.NumPoolsResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _279.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _279.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _279.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _279.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _279.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _279.MsgSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _279.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _279.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _279.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _279.MsgSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _279.MsgSwapExactAmountIn) => _279.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _279.MsgSwapExactAmountInAmino) => _279.MsgSwapExactAmountIn;
                };
                "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _279.MsgSwapExactAmountOut) => _279.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _279.MsgSwapExactAmountOutAmino) => _279.MsgSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _279.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _279.MsgSwapExactAmountIn;
                fromPartial(object: Partial<_279.MsgSwapExactAmountIn>): _279.MsgSwapExactAmountIn;
                fromAmino(object: _279.MsgSwapExactAmountInAmino): _279.MsgSwapExactAmountIn;
                toAmino(message: _279.MsgSwapExactAmountIn): _279.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _279.MsgSwapExactAmountInAminoMsg): _279.MsgSwapExactAmountIn;
                toAminoMsg(message: _279.MsgSwapExactAmountIn): _279.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _279.MsgSwapExactAmountInProtoMsg): _279.MsgSwapExactAmountIn;
                toProto(message: _279.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _279.MsgSwapExactAmountIn): _279.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _279.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _279.MsgSwapExactAmountInResponse;
                fromPartial(object: Partial<_279.MsgSwapExactAmountInResponse>): _279.MsgSwapExactAmountInResponse;
                fromAmino(object: _279.MsgSwapExactAmountInResponseAmino): _279.MsgSwapExactAmountInResponse;
                toAmino(message: _279.MsgSwapExactAmountInResponse): _279.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _279.MsgSwapExactAmountInResponseAminoMsg): _279.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _279.MsgSwapExactAmountInResponse): _279.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _279.MsgSwapExactAmountInResponseProtoMsg): _279.MsgSwapExactAmountInResponse;
                toProto(message: _279.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _279.MsgSwapExactAmountInResponse): _279.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _279.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _279.MsgSwapExactAmountOut;
                fromPartial(object: Partial<_279.MsgSwapExactAmountOut>): _279.MsgSwapExactAmountOut;
                fromAmino(object: _279.MsgSwapExactAmountOutAmino): _279.MsgSwapExactAmountOut;
                toAmino(message: _279.MsgSwapExactAmountOut): _279.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _279.MsgSwapExactAmountOutAminoMsg): _279.MsgSwapExactAmountOut;
                toAminoMsg(message: _279.MsgSwapExactAmountOut): _279.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _279.MsgSwapExactAmountOutProtoMsg): _279.MsgSwapExactAmountOut;
                toProto(message: _279.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _279.MsgSwapExactAmountOut): _279.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _279.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _279.MsgSwapExactAmountOutResponse;
                fromPartial(object: Partial<_279.MsgSwapExactAmountOutResponse>): _279.MsgSwapExactAmountOutResponse;
                fromAmino(object: _279.MsgSwapExactAmountOutResponseAmino): _279.MsgSwapExactAmountOutResponse;
                toAmino(message: _279.MsgSwapExactAmountOutResponse): _279.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _279.MsgSwapExactAmountOutResponseAminoMsg): _279.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _279.MsgSwapExactAmountOutResponse): _279.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _279.MsgSwapExactAmountOutResponseProtoMsg): _279.MsgSwapExactAmountOutResponse;
                toProto(message: _279.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _279.MsgSwapExactAmountOutResponse): _279.MsgSwapExactAmountOutResponseProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _278.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _278.SwapAmountInRoute;
                fromPartial(object: Partial<_278.SwapAmountInRoute>): _278.SwapAmountInRoute;
                fromAmino(object: _278.SwapAmountInRouteAmino): _278.SwapAmountInRoute;
                toAmino(message: _278.SwapAmountInRoute): _278.SwapAmountInRouteAmino;
                fromAminoMsg(object: _278.SwapAmountInRouteAminoMsg): _278.SwapAmountInRoute;
                toAminoMsg(message: _278.SwapAmountInRoute): _278.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _278.SwapAmountInRouteProtoMsg): _278.SwapAmountInRoute;
                toProto(message: _278.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _278.SwapAmountInRoute): _278.SwapAmountInRouteProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _278.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _278.SwapAmountOutRoute;
                fromPartial(object: Partial<_278.SwapAmountOutRoute>): _278.SwapAmountOutRoute;
                fromAmino(object: _278.SwapAmountOutRouteAmino): _278.SwapAmountOutRoute;
                toAmino(message: _278.SwapAmountOutRoute): _278.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _278.SwapAmountOutRouteAminoMsg): _278.SwapAmountOutRoute;
                toAminoMsg(message: _278.SwapAmountOutRoute): _278.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _278.SwapAmountOutRouteProtoMsg): _278.SwapAmountOutRoute;
                toProto(message: _278.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _278.SwapAmountOutRoute): _278.SwapAmountOutRouteProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _277.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _277.ParamsRequest;
                fromPartial(_: Partial<_277.ParamsRequest>): _277.ParamsRequest;
                fromAmino(_: _277.ParamsRequestAmino): _277.ParamsRequest;
                toAmino(_: _277.ParamsRequest): _277.ParamsRequestAmino;
                fromAminoMsg(object: _277.ParamsRequestAminoMsg): _277.ParamsRequest;
                toAminoMsg(message: _277.ParamsRequest): _277.ParamsRequestAminoMsg;
                fromProtoMsg(message: _277.ParamsRequestProtoMsg): _277.ParamsRequest;
                toProto(message: _277.ParamsRequest): Uint8Array;
                toProtoMsg(message: _277.ParamsRequest): _277.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _277.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _277.ParamsResponse;
                fromPartial(object: Partial<_277.ParamsResponse>): _277.ParamsResponse;
                fromAmino(object: _277.ParamsResponseAmino): _277.ParamsResponse;
                toAmino(message: _277.ParamsResponse): _277.ParamsResponseAmino;
                fromAminoMsg(object: _277.ParamsResponseAminoMsg): _277.ParamsResponse;
                toAminoMsg(message: _277.ParamsResponse): _277.ParamsResponseAminoMsg;
                fromProtoMsg(message: _277.ParamsResponseProtoMsg): _277.ParamsResponse;
                toProto(message: _277.ParamsResponse): Uint8Array;
                toProtoMsg(message: _277.ParamsResponse): _277.ParamsResponseProtoMsg;
            };
            EstimateSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _277.EstimateSwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _277.EstimateSwapExactAmountInRequest;
                fromPartial(object: Partial<_277.EstimateSwapExactAmountInRequest>): _277.EstimateSwapExactAmountInRequest;
                fromAmino(object: _277.EstimateSwapExactAmountInRequestAmino): _277.EstimateSwapExactAmountInRequest;
                toAmino(message: _277.EstimateSwapExactAmountInRequest): _277.EstimateSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _277.EstimateSwapExactAmountInRequestAminoMsg): _277.EstimateSwapExactAmountInRequest;
                toAminoMsg(message: _277.EstimateSwapExactAmountInRequest): _277.EstimateSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _277.EstimateSwapExactAmountInRequestProtoMsg): _277.EstimateSwapExactAmountInRequest;
                toProto(message: _277.EstimateSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _277.EstimateSwapExactAmountInRequest): _277.EstimateSwapExactAmountInRequestProtoMsg;
            };
            EstimateSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _277.EstimateSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _277.EstimateSwapExactAmountInResponse;
                fromPartial(object: Partial<_277.EstimateSwapExactAmountInResponse>): _277.EstimateSwapExactAmountInResponse;
                fromAmino(object: _277.EstimateSwapExactAmountInResponseAmino): _277.EstimateSwapExactAmountInResponse;
                toAmino(message: _277.EstimateSwapExactAmountInResponse): _277.EstimateSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _277.EstimateSwapExactAmountInResponseAminoMsg): _277.EstimateSwapExactAmountInResponse;
                toAminoMsg(message: _277.EstimateSwapExactAmountInResponse): _277.EstimateSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _277.EstimateSwapExactAmountInResponseProtoMsg): _277.EstimateSwapExactAmountInResponse;
                toProto(message: _277.EstimateSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _277.EstimateSwapExactAmountInResponse): _277.EstimateSwapExactAmountInResponseProtoMsg;
            };
            EstimateSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _277.EstimateSwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _277.EstimateSwapExactAmountOutRequest;
                fromPartial(object: Partial<_277.EstimateSwapExactAmountOutRequest>): _277.EstimateSwapExactAmountOutRequest;
                fromAmino(object: _277.EstimateSwapExactAmountOutRequestAmino): _277.EstimateSwapExactAmountOutRequest;
                toAmino(message: _277.EstimateSwapExactAmountOutRequest): _277.EstimateSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _277.EstimateSwapExactAmountOutRequestAminoMsg): _277.EstimateSwapExactAmountOutRequest;
                toAminoMsg(message: _277.EstimateSwapExactAmountOutRequest): _277.EstimateSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _277.EstimateSwapExactAmountOutRequestProtoMsg): _277.EstimateSwapExactAmountOutRequest;
                toProto(message: _277.EstimateSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _277.EstimateSwapExactAmountOutRequest): _277.EstimateSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _277.EstimateSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _277.EstimateSwapExactAmountOutResponse;
                fromPartial(object: Partial<_277.EstimateSwapExactAmountOutResponse>): _277.EstimateSwapExactAmountOutResponse;
                fromAmino(object: _277.EstimateSwapExactAmountOutResponseAmino): _277.EstimateSwapExactAmountOutResponse;
                toAmino(message: _277.EstimateSwapExactAmountOutResponse): _277.EstimateSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _277.EstimateSwapExactAmountOutResponseAminoMsg): _277.EstimateSwapExactAmountOutResponse;
                toAminoMsg(message: _277.EstimateSwapExactAmountOutResponse): _277.EstimateSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _277.EstimateSwapExactAmountOutResponseProtoMsg): _277.EstimateSwapExactAmountOutResponse;
                toProto(message: _277.EstimateSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _277.EstimateSwapExactAmountOutResponse): _277.EstimateSwapExactAmountOutResponseProtoMsg;
            };
            NumPoolsRequest: {
                typeUrl: string;
                encode(_: _277.NumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _277.NumPoolsRequest;
                fromPartial(_: Partial<_277.NumPoolsRequest>): _277.NumPoolsRequest;
                fromAmino(_: _277.NumPoolsRequestAmino): _277.NumPoolsRequest;
                toAmino(_: _277.NumPoolsRequest): _277.NumPoolsRequestAmino;
                fromAminoMsg(object: _277.NumPoolsRequestAminoMsg): _277.NumPoolsRequest;
                toAminoMsg(message: _277.NumPoolsRequest): _277.NumPoolsRequestAminoMsg;
                fromProtoMsg(message: _277.NumPoolsRequestProtoMsg): _277.NumPoolsRequest;
                toProto(message: _277.NumPoolsRequest): Uint8Array;
                toProtoMsg(message: _277.NumPoolsRequest): _277.NumPoolsRequestProtoMsg;
            };
            NumPoolsResponse: {
                typeUrl: string;
                encode(message: _277.NumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _277.NumPoolsResponse;
                fromPartial(object: Partial<_277.NumPoolsResponse>): _277.NumPoolsResponse;
                fromAmino(object: _277.NumPoolsResponseAmino): _277.NumPoolsResponse;
                toAmino(message: _277.NumPoolsResponse): _277.NumPoolsResponseAmino;
                fromAminoMsg(object: _277.NumPoolsResponseAminoMsg): _277.NumPoolsResponse;
                toAminoMsg(message: _277.NumPoolsResponse): _277.NumPoolsResponseAminoMsg;
                fromProtoMsg(message: _277.NumPoolsResponseProtoMsg): _277.NumPoolsResponse;
                toProto(message: _277.NumPoolsResponse): Uint8Array;
                toProtoMsg(message: _277.NumPoolsResponse): _277.NumPoolsResponseProtoMsg;
            };
            poolTypeFromJSON(object: any): _276.PoolType;
            poolTypeToJSON(object: _276.PoolType): string;
            PoolType: typeof _276.PoolType;
            PoolTypeSDKType: typeof _276.PoolType;
            PoolTypeAmino: typeof _276.PoolType;
            ModuleRoute: {
                typeUrl: string;
                encode(message: _276.ModuleRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _276.ModuleRoute;
                fromPartial(object: Partial<_276.ModuleRoute>): _276.ModuleRoute;
                fromAmino(object: _276.ModuleRouteAmino): _276.ModuleRoute;
                toAmino(message: _276.ModuleRoute): _276.ModuleRouteAmino;
                fromAminoMsg(object: _276.ModuleRouteAminoMsg): _276.ModuleRoute;
                toAminoMsg(message: _276.ModuleRoute): _276.ModuleRouteAminoMsg;
                fromProtoMsg(message: _276.ModuleRouteProtoMsg): _276.ModuleRoute;
                toProto(message: _276.ModuleRoute): Uint8Array;
                toProtoMsg(message: _276.ModuleRoute): _276.ModuleRouteProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _275.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _275.Params;
                fromPartial(object: Partial<_275.Params>): _275.Params;
                fromAmino(object: _275.ParamsAmino): _275.Params;
                toAmino(message: _275.Params): _275.ParamsAmino;
                fromAminoMsg(object: _275.ParamsAminoMsg): _275.Params;
                toAminoMsg(message: _275.Params): _275.ParamsAminoMsg;
                fromProtoMsg(message: _275.ParamsProtoMsg): _275.Params;
                toProto(message: _275.Params): Uint8Array;
                toProtoMsg(message: _275.Params): _275.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _275.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _275.GenesisState;
                fromPartial(object: Partial<_275.GenesisState>): _275.GenesisState;
                fromAmino(object: _275.GenesisStateAmino): _275.GenesisState;
                toAmino(message: _275.GenesisState): _275.GenesisStateAmino;
                fromAminoMsg(object: _275.GenesisStateAminoMsg): _275.GenesisState;
                toAminoMsg(message: _275.GenesisState): _275.GenesisStateAminoMsg;
                fromProtoMsg(message: _275.GenesisStateProtoMsg): _275.GenesisState;
                toProto(message: _275.GenesisState): Uint8Array;
                toProtoMsg(message: _275.GenesisState): _275.GenesisStateProtoMsg;
            };
        };
    }
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _547.MsgClientImpl;
            QueryClientImpl: typeof _535.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _283.QueryParamsRequest): Promise<_283.QueryParamsResponse>;
                denomAuthorityMetadata(request: _283.QueryDenomAuthorityMetadataRequest): Promise<_283.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _283.QueryDenomsFromCreatorRequest): Promise<_283.QueryDenomsFromCreatorResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _284.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _284.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _284.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _284.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _284.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _284.MsgCreateDenom): {
                        typeUrl: string;
                        value: _284.MsgCreateDenom;
                    };
                    mint(value: _284.MsgMint): {
                        typeUrl: string;
                        value: _284.MsgMint;
                    };
                    burn(value: _284.MsgBurn): {
                        typeUrl: string;
                        value: _284.MsgBurn;
                    };
                    changeAdmin(value: _284.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _284.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _284.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _284.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _284.MsgCreateDenom): {
                        typeUrl: string;
                        value: _284.MsgCreateDenom;
                    };
                    mint(value: _284.MsgMint): {
                        typeUrl: string;
                        value: _284.MsgMint;
                    };
                    burn(value: _284.MsgBurn): {
                        typeUrl: string;
                        value: _284.MsgBurn;
                    };
                    changeAdmin(value: _284.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _284.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _284.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _284.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _284.MsgCreateDenom) => _284.MsgCreateDenomAmino;
                    fromAmino: (object: _284.MsgCreateDenomAmino) => _284.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _284.MsgMint) => _284.MsgMintAmino;
                    fromAmino: (object: _284.MsgMintAmino) => _284.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _284.MsgBurn) => _284.MsgBurnAmino;
                    fromAmino: (object: _284.MsgBurnAmino) => _284.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _284.MsgChangeAdmin) => _284.MsgChangeAdminAmino;
                    fromAmino: (object: _284.MsgChangeAdminAmino) => _284.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _284.MsgSetDenomMetadata) => _284.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _284.MsgSetDenomMetadataAmino) => _284.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _284.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _284.MsgCreateDenom;
                fromPartial(object: Partial<_284.MsgCreateDenom>): _284.MsgCreateDenom;
                fromAmino(object: _284.MsgCreateDenomAmino): _284.MsgCreateDenom;
                toAmino(message: _284.MsgCreateDenom): _284.MsgCreateDenomAmino;
                fromAminoMsg(object: _284.MsgCreateDenomAminoMsg): _284.MsgCreateDenom;
                toAminoMsg(message: _284.MsgCreateDenom): _284.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _284.MsgCreateDenomProtoMsg): _284.MsgCreateDenom;
                toProto(message: _284.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _284.MsgCreateDenom): _284.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _284.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _284.MsgCreateDenomResponse;
                fromPartial(object: Partial<_284.MsgCreateDenomResponse>): _284.MsgCreateDenomResponse;
                fromAmino(object: _284.MsgCreateDenomResponseAmino): _284.MsgCreateDenomResponse;
                toAmino(message: _284.MsgCreateDenomResponse): _284.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _284.MsgCreateDenomResponseAminoMsg): _284.MsgCreateDenomResponse;
                toAminoMsg(message: _284.MsgCreateDenomResponse): _284.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _284.MsgCreateDenomResponseProtoMsg): _284.MsgCreateDenomResponse;
                toProto(message: _284.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _284.MsgCreateDenomResponse): _284.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _284.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _284.MsgMint;
                fromPartial(object: Partial<_284.MsgMint>): _284.MsgMint;
                fromAmino(object: _284.MsgMintAmino): _284.MsgMint;
                toAmino(message: _284.MsgMint): _284.MsgMintAmino;
                fromAminoMsg(object: _284.MsgMintAminoMsg): _284.MsgMint;
                toAminoMsg(message: _284.MsgMint): _284.MsgMintAminoMsg;
                fromProtoMsg(message: _284.MsgMintProtoMsg): _284.MsgMint;
                toProto(message: _284.MsgMint): Uint8Array;
                toProtoMsg(message: _284.MsgMint): _284.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _284.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _284.MsgMintResponse;
                fromPartial(_: Partial<_284.MsgMintResponse>): _284.MsgMintResponse;
                fromAmino(_: _284.MsgMintResponseAmino): _284.MsgMintResponse;
                toAmino(_: _284.MsgMintResponse): _284.MsgMintResponseAmino;
                fromAminoMsg(object: _284.MsgMintResponseAminoMsg): _284.MsgMintResponse;
                toAminoMsg(message: _284.MsgMintResponse): _284.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _284.MsgMintResponseProtoMsg): _284.MsgMintResponse;
                toProto(message: _284.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _284.MsgMintResponse): _284.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _284.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _284.MsgBurn;
                fromPartial(object: Partial<_284.MsgBurn>): _284.MsgBurn;
                fromAmino(object: _284.MsgBurnAmino): _284.MsgBurn;
                toAmino(message: _284.MsgBurn): _284.MsgBurnAmino;
                fromAminoMsg(object: _284.MsgBurnAminoMsg): _284.MsgBurn;
                toAminoMsg(message: _284.MsgBurn): _284.MsgBurnAminoMsg;
                fromProtoMsg(message: _284.MsgBurnProtoMsg): _284.MsgBurn;
                toProto(message: _284.MsgBurn): Uint8Array;
                toProtoMsg(message: _284.MsgBurn): _284.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _284.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _284.MsgBurnResponse;
                fromPartial(_: Partial<_284.MsgBurnResponse>): _284.MsgBurnResponse;
                fromAmino(_: _284.MsgBurnResponseAmino): _284.MsgBurnResponse;
                toAmino(_: _284.MsgBurnResponse): _284.MsgBurnResponseAmino;
                fromAminoMsg(object: _284.MsgBurnResponseAminoMsg): _284.MsgBurnResponse;
                toAminoMsg(message: _284.MsgBurnResponse): _284.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _284.MsgBurnResponseProtoMsg): _284.MsgBurnResponse;
                toProto(message: _284.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _284.MsgBurnResponse): _284.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _284.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _284.MsgChangeAdmin;
                fromPartial(object: Partial<_284.MsgChangeAdmin>): _284.MsgChangeAdmin;
                fromAmino(object: _284.MsgChangeAdminAmino): _284.MsgChangeAdmin;
                toAmino(message: _284.MsgChangeAdmin): _284.MsgChangeAdminAmino;
                fromAminoMsg(object: _284.MsgChangeAdminAminoMsg): _284.MsgChangeAdmin;
                toAminoMsg(message: _284.MsgChangeAdmin): _284.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _284.MsgChangeAdminProtoMsg): _284.MsgChangeAdmin;
                toProto(message: _284.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _284.MsgChangeAdmin): _284.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _284.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _284.MsgChangeAdminResponse;
                fromPartial(_: Partial<_284.MsgChangeAdminResponse>): _284.MsgChangeAdminResponse;
                fromAmino(_: _284.MsgChangeAdminResponseAmino): _284.MsgChangeAdminResponse;
                toAmino(_: _284.MsgChangeAdminResponse): _284.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _284.MsgChangeAdminResponseAminoMsg): _284.MsgChangeAdminResponse;
                toAminoMsg(message: _284.MsgChangeAdminResponse): _284.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _284.MsgChangeAdminResponseProtoMsg): _284.MsgChangeAdminResponse;
                toProto(message: _284.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _284.MsgChangeAdminResponse): _284.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _284.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _284.MsgSetDenomMetadata;
                fromPartial(object: Partial<_284.MsgSetDenomMetadata>): _284.MsgSetDenomMetadata;
                fromAmino(object: _284.MsgSetDenomMetadataAmino): _284.MsgSetDenomMetadata;
                toAmino(message: _284.MsgSetDenomMetadata): _284.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _284.MsgSetDenomMetadataAminoMsg): _284.MsgSetDenomMetadata;
                toAminoMsg(message: _284.MsgSetDenomMetadata): _284.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _284.MsgSetDenomMetadataProtoMsg): _284.MsgSetDenomMetadata;
                toProto(message: _284.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _284.MsgSetDenomMetadata): _284.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _284.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _284.MsgSetDenomMetadataResponse;
                fromPartial(_: Partial<_284.MsgSetDenomMetadataResponse>): _284.MsgSetDenomMetadataResponse;
                fromAmino(_: _284.MsgSetDenomMetadataResponseAmino): _284.MsgSetDenomMetadataResponse;
                toAmino(_: _284.MsgSetDenomMetadataResponse): _284.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _284.MsgSetDenomMetadataResponseAminoMsg): _284.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _284.MsgSetDenomMetadataResponse): _284.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _284.MsgSetDenomMetadataResponseProtoMsg): _284.MsgSetDenomMetadataResponse;
                toProto(message: _284.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _284.MsgSetDenomMetadataResponse): _284.MsgSetDenomMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _283.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _283.QueryParamsRequest;
                fromPartial(_: Partial<_283.QueryParamsRequest>): _283.QueryParamsRequest;
                fromAmino(_: _283.QueryParamsRequestAmino): _283.QueryParamsRequest;
                toAmino(_: _283.QueryParamsRequest): _283.QueryParamsRequestAmino;
                fromAminoMsg(object: _283.QueryParamsRequestAminoMsg): _283.QueryParamsRequest;
                toAminoMsg(message: _283.QueryParamsRequest): _283.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _283.QueryParamsRequestProtoMsg): _283.QueryParamsRequest;
                toProto(message: _283.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _283.QueryParamsRequest): _283.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _283.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _283.QueryParamsResponse;
                fromPartial(object: Partial<_283.QueryParamsResponse>): _283.QueryParamsResponse;
                fromAmino(object: _283.QueryParamsResponseAmino): _283.QueryParamsResponse;
                toAmino(message: _283.QueryParamsResponse): _283.QueryParamsResponseAmino;
                fromAminoMsg(object: _283.QueryParamsResponseAminoMsg): _283.QueryParamsResponse;
                toAminoMsg(message: _283.QueryParamsResponse): _283.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _283.QueryParamsResponseProtoMsg): _283.QueryParamsResponse;
                toProto(message: _283.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _283.QueryParamsResponse): _283.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _283.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _283.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: Partial<_283.QueryDenomAuthorityMetadataRequest>): _283.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _283.QueryDenomAuthorityMetadataRequestAmino): _283.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _283.QueryDenomAuthorityMetadataRequest): _283.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _283.QueryDenomAuthorityMetadataRequestAminoMsg): _283.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _283.QueryDenomAuthorityMetadataRequest): _283.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _283.QueryDenomAuthorityMetadataRequestProtoMsg): _283.QueryDenomAuthorityMetadataRequest;
                toProto(message: _283.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _283.QueryDenomAuthorityMetadataRequest): _283.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _283.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _283.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: Partial<_283.QueryDenomAuthorityMetadataResponse>): _283.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _283.QueryDenomAuthorityMetadataResponseAmino): _283.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _283.QueryDenomAuthorityMetadataResponse): _283.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _283.QueryDenomAuthorityMetadataResponseAminoMsg): _283.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _283.QueryDenomAuthorityMetadataResponse): _283.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _283.QueryDenomAuthorityMetadataResponseProtoMsg): _283.QueryDenomAuthorityMetadataResponse;
                toProto(message: _283.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _283.QueryDenomAuthorityMetadataResponse): _283.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _283.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _283.QueryDenomsFromCreatorRequest;
                fromPartial(object: Partial<_283.QueryDenomsFromCreatorRequest>): _283.QueryDenomsFromCreatorRequest;
                fromAmino(object: _283.QueryDenomsFromCreatorRequestAmino): _283.QueryDenomsFromCreatorRequest;
                toAmino(message: _283.QueryDenomsFromCreatorRequest): _283.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _283.QueryDenomsFromCreatorRequestAminoMsg): _283.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _283.QueryDenomsFromCreatorRequest): _283.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _283.QueryDenomsFromCreatorRequestProtoMsg): _283.QueryDenomsFromCreatorRequest;
                toProto(message: _283.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _283.QueryDenomsFromCreatorRequest): _283.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _283.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _283.QueryDenomsFromCreatorResponse;
                fromPartial(object: Partial<_283.QueryDenomsFromCreatorResponse>): _283.QueryDenomsFromCreatorResponse;
                fromAmino(object: _283.QueryDenomsFromCreatorResponseAmino): _283.QueryDenomsFromCreatorResponse;
                toAmino(message: _283.QueryDenomsFromCreatorResponse): _283.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _283.QueryDenomsFromCreatorResponseAminoMsg): _283.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _283.QueryDenomsFromCreatorResponse): _283.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _283.QueryDenomsFromCreatorResponseProtoMsg): _283.QueryDenomsFromCreatorResponse;
                toProto(message: _283.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _283.QueryDenomsFromCreatorResponse): _283.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _282.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _282.Params;
                fromPartial(object: Partial<_282.Params>): _282.Params;
                fromAmino(object: _282.ParamsAmino): _282.Params;
                toAmino(message: _282.Params): _282.ParamsAmino;
                fromAminoMsg(object: _282.ParamsAminoMsg): _282.Params;
                toAminoMsg(message: _282.Params): _282.ParamsAminoMsg;
                fromProtoMsg(message: _282.ParamsProtoMsg): _282.Params;
                toProto(message: _282.Params): Uint8Array;
                toProtoMsg(message: _282.Params): _282.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _281.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _281.GenesisState;
                fromPartial(object: Partial<_281.GenesisState>): _281.GenesisState;
                fromAmino(object: _281.GenesisStateAmino): _281.GenesisState;
                toAmino(message: _281.GenesisState): _281.GenesisStateAmino;
                fromAminoMsg(object: _281.GenesisStateAminoMsg): _281.GenesisState;
                toAminoMsg(message: _281.GenesisState): _281.GenesisStateAminoMsg;
                fromProtoMsg(message: _281.GenesisStateProtoMsg): _281.GenesisState;
                toProto(message: _281.GenesisState): Uint8Array;
                toProtoMsg(message: _281.GenesisState): _281.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _281.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _281.GenesisDenom;
                fromPartial(object: Partial<_281.GenesisDenom>): _281.GenesisDenom;
                fromAmino(object: _281.GenesisDenomAmino): _281.GenesisDenom;
                toAmino(message: _281.GenesisDenom): _281.GenesisDenomAmino;
                fromAminoMsg(object: _281.GenesisDenomAminoMsg): _281.GenesisDenom;
                toAminoMsg(message: _281.GenesisDenom): _281.GenesisDenomAminoMsg;
                fromProtoMsg(message: _281.GenesisDenomProtoMsg): _281.GenesisDenom;
                toProto(message: _281.GenesisDenom): Uint8Array;
                toProtoMsg(message: _281.GenesisDenom): _281.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _280.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _280.DenomAuthorityMetadata;
                fromPartial(object: Partial<_280.DenomAuthorityMetadata>): _280.DenomAuthorityMetadata;
                fromAmino(object: _280.DenomAuthorityMetadataAmino): _280.DenomAuthorityMetadata;
                toAmino(message: _280.DenomAuthorityMetadata): _280.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _280.DenomAuthorityMetadataAminoMsg): _280.DenomAuthorityMetadata;
                toAminoMsg(message: _280.DenomAuthorityMetadata): _280.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _280.DenomAuthorityMetadataProtoMsg): _280.DenomAuthorityMetadata;
                toProto(message: _280.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _280.DenomAuthorityMetadata): _280.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _536.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _286.ParamsRequest): Promise<_286.ParamsResponse>;
                arithmeticTwap(request: _286.ArithmeticTwapRequest): Promise<_286.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _286.ArithmeticTwapToNowRequest): Promise<_286.ArithmeticTwapToNowResponse>;
            };
            TwapRecord: {
                typeUrl: string;
                encode(message: _287.TwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _287.TwapRecord;
                fromPartial(object: Partial<_287.TwapRecord>): _287.TwapRecord;
                fromAmino(object: _287.TwapRecordAmino): _287.TwapRecord;
                toAmino(message: _287.TwapRecord): _287.TwapRecordAmino;
                fromAminoMsg(object: _287.TwapRecordAminoMsg): _287.TwapRecord;
                toAminoMsg(message: _287.TwapRecord): _287.TwapRecordAminoMsg;
                fromProtoMsg(message: _287.TwapRecordProtoMsg): _287.TwapRecord;
                toProto(message: _287.TwapRecord): Uint8Array;
                toProtoMsg(message: _287.TwapRecord): _287.TwapRecordProtoMsg;
            };
            ArithmeticTwapRequest: {
                typeUrl: string;
                encode(message: _286.ArithmeticTwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _286.ArithmeticTwapRequest;
                fromPartial(object: Partial<_286.ArithmeticTwapRequest>): _286.ArithmeticTwapRequest;
                fromAmino(object: _286.ArithmeticTwapRequestAmino): _286.ArithmeticTwapRequest;
                toAmino(message: _286.ArithmeticTwapRequest): _286.ArithmeticTwapRequestAmino;
                fromAminoMsg(object: _286.ArithmeticTwapRequestAminoMsg): _286.ArithmeticTwapRequest;
                toAminoMsg(message: _286.ArithmeticTwapRequest): _286.ArithmeticTwapRequestAminoMsg;
                fromProtoMsg(message: _286.ArithmeticTwapRequestProtoMsg): _286.ArithmeticTwapRequest;
                toProto(message: _286.ArithmeticTwapRequest): Uint8Array;
                toProtoMsg(message: _286.ArithmeticTwapRequest): _286.ArithmeticTwapRequestProtoMsg;
            };
            ArithmeticTwapResponse: {
                typeUrl: string;
                encode(message: _286.ArithmeticTwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _286.ArithmeticTwapResponse;
                fromPartial(object: Partial<_286.ArithmeticTwapResponse>): _286.ArithmeticTwapResponse;
                fromAmino(object: _286.ArithmeticTwapResponseAmino): _286.ArithmeticTwapResponse;
                toAmino(message: _286.ArithmeticTwapResponse): _286.ArithmeticTwapResponseAmino;
                fromAminoMsg(object: _286.ArithmeticTwapResponseAminoMsg): _286.ArithmeticTwapResponse;
                toAminoMsg(message: _286.ArithmeticTwapResponse): _286.ArithmeticTwapResponseAminoMsg;
                fromProtoMsg(message: _286.ArithmeticTwapResponseProtoMsg): _286.ArithmeticTwapResponse;
                toProto(message: _286.ArithmeticTwapResponse): Uint8Array;
                toProtoMsg(message: _286.ArithmeticTwapResponse): _286.ArithmeticTwapResponseProtoMsg;
            };
            ArithmeticTwapToNowRequest: {
                typeUrl: string;
                encode(message: _286.ArithmeticTwapToNowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _286.ArithmeticTwapToNowRequest;
                fromPartial(object: Partial<_286.ArithmeticTwapToNowRequest>): _286.ArithmeticTwapToNowRequest;
                fromAmino(object: _286.ArithmeticTwapToNowRequestAmino): _286.ArithmeticTwapToNowRequest;
                toAmino(message: _286.ArithmeticTwapToNowRequest): _286.ArithmeticTwapToNowRequestAmino;
                fromAminoMsg(object: _286.ArithmeticTwapToNowRequestAminoMsg): _286.ArithmeticTwapToNowRequest;
                toAminoMsg(message: _286.ArithmeticTwapToNowRequest): _286.ArithmeticTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _286.ArithmeticTwapToNowRequestProtoMsg): _286.ArithmeticTwapToNowRequest;
                toProto(message: _286.ArithmeticTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _286.ArithmeticTwapToNowRequest): _286.ArithmeticTwapToNowRequestProtoMsg;
            };
            ArithmeticTwapToNowResponse: {
                typeUrl: string;
                encode(message: _286.ArithmeticTwapToNowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _286.ArithmeticTwapToNowResponse;
                fromPartial(object: Partial<_286.ArithmeticTwapToNowResponse>): _286.ArithmeticTwapToNowResponse;
                fromAmino(object: _286.ArithmeticTwapToNowResponseAmino): _286.ArithmeticTwapToNowResponse;
                toAmino(message: _286.ArithmeticTwapToNowResponse): _286.ArithmeticTwapToNowResponseAmino;
                fromAminoMsg(object: _286.ArithmeticTwapToNowResponseAminoMsg): _286.ArithmeticTwapToNowResponse;
                toAminoMsg(message: _286.ArithmeticTwapToNowResponse): _286.ArithmeticTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _286.ArithmeticTwapToNowResponseProtoMsg): _286.ArithmeticTwapToNowResponse;
                toProto(message: _286.ArithmeticTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _286.ArithmeticTwapToNowResponse): _286.ArithmeticTwapToNowResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _286.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _286.ParamsRequest;
                fromPartial(_: Partial<_286.ParamsRequest>): _286.ParamsRequest;
                fromAmino(_: _286.ParamsRequestAmino): _286.ParamsRequest;
                toAmino(_: _286.ParamsRequest): _286.ParamsRequestAmino;
                fromAminoMsg(object: _286.ParamsRequestAminoMsg): _286.ParamsRequest;
                toAminoMsg(message: _286.ParamsRequest): _286.ParamsRequestAminoMsg;
                fromProtoMsg(message: _286.ParamsRequestProtoMsg): _286.ParamsRequest;
                toProto(message: _286.ParamsRequest): Uint8Array;
                toProtoMsg(message: _286.ParamsRequest): _286.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _286.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _286.ParamsResponse;
                fromPartial(object: Partial<_286.ParamsResponse>): _286.ParamsResponse;
                fromAmino(object: _286.ParamsResponseAmino): _286.ParamsResponse;
                toAmino(message: _286.ParamsResponse): _286.ParamsResponseAmino;
                fromAminoMsg(object: _286.ParamsResponseAminoMsg): _286.ParamsResponse;
                toAminoMsg(message: _286.ParamsResponse): _286.ParamsResponseAminoMsg;
                fromProtoMsg(message: _286.ParamsResponseProtoMsg): _286.ParamsResponse;
                toProto(message: _286.ParamsResponse): Uint8Array;
                toProtoMsg(message: _286.ParamsResponse): _286.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _285.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _285.Params;
                fromPartial(object: Partial<_285.Params>): _285.Params;
                fromAmino(object: _285.ParamsAmino): _285.Params;
                toAmino(message: _285.Params): _285.ParamsAmino;
                fromAminoMsg(object: _285.ParamsAminoMsg): _285.Params;
                toAminoMsg(message: _285.Params): _285.ParamsAminoMsg;
                fromProtoMsg(message: _285.ParamsProtoMsg): _285.Params;
                toProto(message: _285.Params): Uint8Array;
                toProtoMsg(message: _285.Params): _285.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _285.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _285.GenesisState;
                fromPartial(object: Partial<_285.GenesisState>): _285.GenesisState;
                fromAmino(object: _285.GenesisStateAmino): _285.GenesisState;
                toAmino(message: _285.GenesisState): _285.GenesisStateAmino;
                fromAminoMsg(object: _285.GenesisStateAminoMsg): _285.GenesisState;
                toAminoMsg(message: _285.GenesisState): _285.GenesisStateAminoMsg;
                fromProtoMsg(message: _285.GenesisStateProtoMsg): _285.GenesisState;
                toProto(message: _285.GenesisState): Uint8Array;
                toProtoMsg(message: _285.GenesisState): _285.GenesisStateProtoMsg;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _537.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _291.QueryFeeTokensRequest): Promise<_291.QueryFeeTokensResponse>;
                denomSpotPrice(request: _291.QueryDenomSpotPriceRequest): Promise<_291.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _291.QueryDenomPoolIdRequest): Promise<_291.QueryDenomPoolIdResponse>;
                baseDenom(request?: _291.QueryBaseDenomRequest): Promise<_291.QueryBaseDenomResponse>;
            };
            QueryFeeTokensRequest: {
                typeUrl: string;
                encode(_: _291.QueryFeeTokensRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _291.QueryFeeTokensRequest;
                fromPartial(_: Partial<_291.QueryFeeTokensRequest>): _291.QueryFeeTokensRequest;
                fromAmino(_: _291.QueryFeeTokensRequestAmino): _291.QueryFeeTokensRequest;
                toAmino(_: _291.QueryFeeTokensRequest): _291.QueryFeeTokensRequestAmino;
                fromAminoMsg(object: _291.QueryFeeTokensRequestAminoMsg): _291.QueryFeeTokensRequest;
                toAminoMsg(message: _291.QueryFeeTokensRequest): _291.QueryFeeTokensRequestAminoMsg;
                fromProtoMsg(message: _291.QueryFeeTokensRequestProtoMsg): _291.QueryFeeTokensRequest;
                toProto(message: _291.QueryFeeTokensRequest): Uint8Array;
                toProtoMsg(message: _291.QueryFeeTokensRequest): _291.QueryFeeTokensRequestProtoMsg;
            };
            QueryFeeTokensResponse: {
                typeUrl: string;
                encode(message: _291.QueryFeeTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _291.QueryFeeTokensResponse;
                fromPartial(object: Partial<_291.QueryFeeTokensResponse>): _291.QueryFeeTokensResponse;
                fromAmino(object: _291.QueryFeeTokensResponseAmino): _291.QueryFeeTokensResponse;
                toAmino(message: _291.QueryFeeTokensResponse): _291.QueryFeeTokensResponseAmino;
                fromAminoMsg(object: _291.QueryFeeTokensResponseAminoMsg): _291.QueryFeeTokensResponse;
                toAminoMsg(message: _291.QueryFeeTokensResponse): _291.QueryFeeTokensResponseAminoMsg;
                fromProtoMsg(message: _291.QueryFeeTokensResponseProtoMsg): _291.QueryFeeTokensResponse;
                toProto(message: _291.QueryFeeTokensResponse): Uint8Array;
                toProtoMsg(message: _291.QueryFeeTokensResponse): _291.QueryFeeTokensResponseProtoMsg;
            };
            QueryDenomSpotPriceRequest: {
                typeUrl: string;
                encode(message: _291.QueryDenomSpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _291.QueryDenomSpotPriceRequest;
                fromPartial(object: Partial<_291.QueryDenomSpotPriceRequest>): _291.QueryDenomSpotPriceRequest;
                fromAmino(object: _291.QueryDenomSpotPriceRequestAmino): _291.QueryDenomSpotPriceRequest;
                toAmino(message: _291.QueryDenomSpotPriceRequest): _291.QueryDenomSpotPriceRequestAmino;
                fromAminoMsg(object: _291.QueryDenomSpotPriceRequestAminoMsg): _291.QueryDenomSpotPriceRequest;
                toAminoMsg(message: _291.QueryDenomSpotPriceRequest): _291.QueryDenomSpotPriceRequestAminoMsg;
                fromProtoMsg(message: _291.QueryDenomSpotPriceRequestProtoMsg): _291.QueryDenomSpotPriceRequest;
                toProto(message: _291.QueryDenomSpotPriceRequest): Uint8Array;
                toProtoMsg(message: _291.QueryDenomSpotPriceRequest): _291.QueryDenomSpotPriceRequestProtoMsg;
            };
            QueryDenomSpotPriceResponse: {
                typeUrl: string;
                encode(message: _291.QueryDenomSpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _291.QueryDenomSpotPriceResponse;
                fromPartial(object: Partial<_291.QueryDenomSpotPriceResponse>): _291.QueryDenomSpotPriceResponse;
                fromAmino(object: _291.QueryDenomSpotPriceResponseAmino): _291.QueryDenomSpotPriceResponse;
                toAmino(message: _291.QueryDenomSpotPriceResponse): _291.QueryDenomSpotPriceResponseAmino;
                fromAminoMsg(object: _291.QueryDenomSpotPriceResponseAminoMsg): _291.QueryDenomSpotPriceResponse;
                toAminoMsg(message: _291.QueryDenomSpotPriceResponse): _291.QueryDenomSpotPriceResponseAminoMsg;
                fromProtoMsg(message: _291.QueryDenomSpotPriceResponseProtoMsg): _291.QueryDenomSpotPriceResponse;
                toProto(message: _291.QueryDenomSpotPriceResponse): Uint8Array;
                toProtoMsg(message: _291.QueryDenomSpotPriceResponse): _291.QueryDenomSpotPriceResponseProtoMsg;
            };
            QueryDenomPoolIdRequest: {
                typeUrl: string;
                encode(message: _291.QueryDenomPoolIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _291.QueryDenomPoolIdRequest;
                fromPartial(object: Partial<_291.QueryDenomPoolIdRequest>): _291.QueryDenomPoolIdRequest;
                fromAmino(object: _291.QueryDenomPoolIdRequestAmino): _291.QueryDenomPoolIdRequest;
                toAmino(message: _291.QueryDenomPoolIdRequest): _291.QueryDenomPoolIdRequestAmino;
                fromAminoMsg(object: _291.QueryDenomPoolIdRequestAminoMsg): _291.QueryDenomPoolIdRequest;
                toAminoMsg(message: _291.QueryDenomPoolIdRequest): _291.QueryDenomPoolIdRequestAminoMsg;
                fromProtoMsg(message: _291.QueryDenomPoolIdRequestProtoMsg): _291.QueryDenomPoolIdRequest;
                toProto(message: _291.QueryDenomPoolIdRequest): Uint8Array;
                toProtoMsg(message: _291.QueryDenomPoolIdRequest): _291.QueryDenomPoolIdRequestProtoMsg;
            };
            QueryDenomPoolIdResponse: {
                typeUrl: string;
                encode(message: _291.QueryDenomPoolIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _291.QueryDenomPoolIdResponse;
                fromPartial(object: Partial<_291.QueryDenomPoolIdResponse>): _291.QueryDenomPoolIdResponse;
                fromAmino(object: _291.QueryDenomPoolIdResponseAmino): _291.QueryDenomPoolIdResponse;
                toAmino(message: _291.QueryDenomPoolIdResponse): _291.QueryDenomPoolIdResponseAmino;
                fromAminoMsg(object: _291.QueryDenomPoolIdResponseAminoMsg): _291.QueryDenomPoolIdResponse;
                toAminoMsg(message: _291.QueryDenomPoolIdResponse): _291.QueryDenomPoolIdResponseAminoMsg;
                fromProtoMsg(message: _291.QueryDenomPoolIdResponseProtoMsg): _291.QueryDenomPoolIdResponse;
                toProto(message: _291.QueryDenomPoolIdResponse): Uint8Array;
                toProtoMsg(message: _291.QueryDenomPoolIdResponse): _291.QueryDenomPoolIdResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                encode(_: _291.QueryBaseDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _291.QueryBaseDenomRequest;
                fromPartial(_: Partial<_291.QueryBaseDenomRequest>): _291.QueryBaseDenomRequest;
                fromAmino(_: _291.QueryBaseDenomRequestAmino): _291.QueryBaseDenomRequest;
                toAmino(_: _291.QueryBaseDenomRequest): _291.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _291.QueryBaseDenomRequestAminoMsg): _291.QueryBaseDenomRequest;
                toAminoMsg(message: _291.QueryBaseDenomRequest): _291.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _291.QueryBaseDenomRequestProtoMsg): _291.QueryBaseDenomRequest;
                toProto(message: _291.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _291.QueryBaseDenomRequest): _291.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                encode(message: _291.QueryBaseDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _291.QueryBaseDenomResponse;
                fromPartial(object: Partial<_291.QueryBaseDenomResponse>): _291.QueryBaseDenomResponse;
                fromAmino(object: _291.QueryBaseDenomResponseAmino): _291.QueryBaseDenomResponse;
                toAmino(message: _291.QueryBaseDenomResponse): _291.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _291.QueryBaseDenomResponseAminoMsg): _291.QueryBaseDenomResponse;
                toAminoMsg(message: _291.QueryBaseDenomResponse): _291.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _291.QueryBaseDenomResponseProtoMsg): _291.QueryBaseDenomResponse;
                toProto(message: _291.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _291.QueryBaseDenomResponse): _291.QueryBaseDenomResponseProtoMsg;
            };
            UpdateFeeTokenProposal: {
                typeUrl: string;
                encode(message: _290.UpdateFeeTokenProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _290.UpdateFeeTokenProposal;
                fromPartial(object: Partial<_290.UpdateFeeTokenProposal>): _290.UpdateFeeTokenProposal;
                fromAmino(object: _290.UpdateFeeTokenProposalAmino): _290.UpdateFeeTokenProposal;
                toAmino(message: _290.UpdateFeeTokenProposal): _290.UpdateFeeTokenProposalAmino;
                fromAminoMsg(object: _290.UpdateFeeTokenProposalAminoMsg): _290.UpdateFeeTokenProposal;
                toAminoMsg(message: _290.UpdateFeeTokenProposal): _290.UpdateFeeTokenProposalAminoMsg;
                fromProtoMsg(message: _290.UpdateFeeTokenProposalProtoMsg): _290.UpdateFeeTokenProposal;
                toProto(message: _290.UpdateFeeTokenProposal): Uint8Array;
                toProtoMsg(message: _290.UpdateFeeTokenProposal): _290.UpdateFeeTokenProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _289.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _289.GenesisState;
                fromPartial(object: Partial<_289.GenesisState>): _289.GenesisState;
                fromAmino(object: _289.GenesisStateAmino): _289.GenesisState;
                toAmino(message: _289.GenesisState): _289.GenesisStateAmino;
                fromAminoMsg(object: _289.GenesisStateAminoMsg): _289.GenesisState;
                toAminoMsg(message: _289.GenesisState): _289.GenesisStateAminoMsg;
                fromProtoMsg(message: _289.GenesisStateProtoMsg): _289.GenesisState;
                toProto(message: _289.GenesisState): Uint8Array;
                toProtoMsg(message: _289.GenesisState): _289.GenesisStateProtoMsg;
            };
            FeeToken: {
                typeUrl: string;
                encode(message: _288.FeeToken, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _288.FeeToken;
                fromPartial(object: Partial<_288.FeeToken>): _288.FeeToken;
                fromAmino(object: _288.FeeTokenAmino): _288.FeeToken;
                toAmino(message: _288.FeeToken): _288.FeeTokenAmino;
                fromAminoMsg(object: _288.FeeTokenAminoMsg): _288.FeeToken;
                toAminoMsg(message: _288.FeeToken): _288.FeeTokenAminoMsg;
                fromProtoMsg(message: _288.FeeTokenProtoMsg): _288.FeeToken;
                toProto(message: _288.FeeToken): Uint8Array;
                toProtoMsg(message: _288.FeeToken): _288.FeeTokenProtoMsg;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _548.MsgClientImpl;
            QueryClientImpl: typeof _538.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _292.UserValidatorPreferencesRequest): Promise<_292.UserValidatorPreferencesResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _294.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _294.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _294.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _294.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _294.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _294.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _294.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _294.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _294.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _294.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _294.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _294.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _294.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _294.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _294.MsgWithdrawDelegationRewards;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _294.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _294.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _294.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _294.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _294.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _294.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _294.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _294.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _294.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _294.MsgWithdrawDelegationRewards;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: (message: _294.MsgSetValidatorSetPreference) => _294.MsgSetValidatorSetPreferenceAmino;
                    fromAmino: (object: _294.MsgSetValidatorSetPreferenceAmino) => _294.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _294.MsgDelegateToValidatorSet) => _294.MsgDelegateToValidatorSetAmino;
                    fromAmino: (object: _294.MsgDelegateToValidatorSetAmino) => _294.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _294.MsgUndelegateFromValidatorSet) => _294.MsgUndelegateFromValidatorSetAmino;
                    fromAmino: (object: _294.MsgUndelegateFromValidatorSetAmino) => _294.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _294.MsgRedelegateValidatorSet) => _294.MsgRedelegateValidatorSetAmino;
                    fromAmino: (object: _294.MsgRedelegateValidatorSetAmino) => _294.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: (message: _294.MsgWithdrawDelegationRewards) => _294.MsgWithdrawDelegationRewardsAmino;
                    fromAmino: (object: _294.MsgWithdrawDelegationRewardsAmino) => _294.MsgWithdrawDelegationRewards;
                };
            };
            MsgSetValidatorSetPreference: {
                typeUrl: string;
                encode(message: _294.MsgSetValidatorSetPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _294.MsgSetValidatorSetPreference;
                fromPartial(object: Partial<_294.MsgSetValidatorSetPreference>): _294.MsgSetValidatorSetPreference;
                fromAmino(object: _294.MsgSetValidatorSetPreferenceAmino): _294.MsgSetValidatorSetPreference;
                toAmino(message: _294.MsgSetValidatorSetPreference): _294.MsgSetValidatorSetPreferenceAmino;
                fromAminoMsg(object: _294.MsgSetValidatorSetPreferenceAminoMsg): _294.MsgSetValidatorSetPreference;
                toAminoMsg(message: _294.MsgSetValidatorSetPreference): _294.MsgSetValidatorSetPreferenceAminoMsg;
                fromProtoMsg(message: _294.MsgSetValidatorSetPreferenceProtoMsg): _294.MsgSetValidatorSetPreference;
                toProto(message: _294.MsgSetValidatorSetPreference): Uint8Array;
                toProtoMsg(message: _294.MsgSetValidatorSetPreference): _294.MsgSetValidatorSetPreferenceProtoMsg;
            };
            MsgSetValidatorSetPreferenceResponse: {
                typeUrl: string;
                encode(_: _294.MsgSetValidatorSetPreferenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _294.MsgSetValidatorSetPreferenceResponse;
                fromPartial(_: Partial<_294.MsgSetValidatorSetPreferenceResponse>): _294.MsgSetValidatorSetPreferenceResponse;
                fromAmino(_: _294.MsgSetValidatorSetPreferenceResponseAmino): _294.MsgSetValidatorSetPreferenceResponse;
                toAmino(_: _294.MsgSetValidatorSetPreferenceResponse): _294.MsgSetValidatorSetPreferenceResponseAmino;
                fromAminoMsg(object: _294.MsgSetValidatorSetPreferenceResponseAminoMsg): _294.MsgSetValidatorSetPreferenceResponse;
                toAminoMsg(message: _294.MsgSetValidatorSetPreferenceResponse): _294.MsgSetValidatorSetPreferenceResponseAminoMsg;
                fromProtoMsg(message: _294.MsgSetValidatorSetPreferenceResponseProtoMsg): _294.MsgSetValidatorSetPreferenceResponse;
                toProto(message: _294.MsgSetValidatorSetPreferenceResponse): Uint8Array;
                toProtoMsg(message: _294.MsgSetValidatorSetPreferenceResponse): _294.MsgSetValidatorSetPreferenceResponseProtoMsg;
            };
            MsgDelegateToValidatorSet: {
                typeUrl: string;
                encode(message: _294.MsgDelegateToValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _294.MsgDelegateToValidatorSet;
                fromPartial(object: Partial<_294.MsgDelegateToValidatorSet>): _294.MsgDelegateToValidatorSet;
                fromAmino(object: _294.MsgDelegateToValidatorSetAmino): _294.MsgDelegateToValidatorSet;
                toAmino(message: _294.MsgDelegateToValidatorSet): _294.MsgDelegateToValidatorSetAmino;
                fromAminoMsg(object: _294.MsgDelegateToValidatorSetAminoMsg): _294.MsgDelegateToValidatorSet;
                toAminoMsg(message: _294.MsgDelegateToValidatorSet): _294.MsgDelegateToValidatorSetAminoMsg;
                fromProtoMsg(message: _294.MsgDelegateToValidatorSetProtoMsg): _294.MsgDelegateToValidatorSet;
                toProto(message: _294.MsgDelegateToValidatorSet): Uint8Array;
                toProtoMsg(message: _294.MsgDelegateToValidatorSet): _294.MsgDelegateToValidatorSetProtoMsg;
            };
            MsgDelegateToValidatorSetResponse: {
                typeUrl: string;
                encode(_: _294.MsgDelegateToValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _294.MsgDelegateToValidatorSetResponse;
                fromPartial(_: Partial<_294.MsgDelegateToValidatorSetResponse>): _294.MsgDelegateToValidatorSetResponse;
                fromAmino(_: _294.MsgDelegateToValidatorSetResponseAmino): _294.MsgDelegateToValidatorSetResponse;
                toAmino(_: _294.MsgDelegateToValidatorSetResponse): _294.MsgDelegateToValidatorSetResponseAmino;
                fromAminoMsg(object: _294.MsgDelegateToValidatorSetResponseAminoMsg): _294.MsgDelegateToValidatorSetResponse;
                toAminoMsg(message: _294.MsgDelegateToValidatorSetResponse): _294.MsgDelegateToValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _294.MsgDelegateToValidatorSetResponseProtoMsg): _294.MsgDelegateToValidatorSetResponse;
                toProto(message: _294.MsgDelegateToValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _294.MsgDelegateToValidatorSetResponse): _294.MsgDelegateToValidatorSetResponseProtoMsg;
            };
            MsgUndelegateFromValidatorSet: {
                typeUrl: string;
                encode(message: _294.MsgUndelegateFromValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _294.MsgUndelegateFromValidatorSet;
                fromPartial(object: Partial<_294.MsgUndelegateFromValidatorSet>): _294.MsgUndelegateFromValidatorSet;
                fromAmino(object: _294.MsgUndelegateFromValidatorSetAmino): _294.MsgUndelegateFromValidatorSet;
                toAmino(message: _294.MsgUndelegateFromValidatorSet): _294.MsgUndelegateFromValidatorSetAmino;
                fromAminoMsg(object: _294.MsgUndelegateFromValidatorSetAminoMsg): _294.MsgUndelegateFromValidatorSet;
                toAminoMsg(message: _294.MsgUndelegateFromValidatorSet): _294.MsgUndelegateFromValidatorSetAminoMsg;
                fromProtoMsg(message: _294.MsgUndelegateFromValidatorSetProtoMsg): _294.MsgUndelegateFromValidatorSet;
                toProto(message: _294.MsgUndelegateFromValidatorSet): Uint8Array;
                toProtoMsg(message: _294.MsgUndelegateFromValidatorSet): _294.MsgUndelegateFromValidatorSetProtoMsg;
            };
            MsgUndelegateFromValidatorSetResponse: {
                typeUrl: string;
                encode(_: _294.MsgUndelegateFromValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _294.MsgUndelegateFromValidatorSetResponse;
                fromPartial(_: Partial<_294.MsgUndelegateFromValidatorSetResponse>): _294.MsgUndelegateFromValidatorSetResponse;
                fromAmino(_: _294.MsgUndelegateFromValidatorSetResponseAmino): _294.MsgUndelegateFromValidatorSetResponse;
                toAmino(_: _294.MsgUndelegateFromValidatorSetResponse): _294.MsgUndelegateFromValidatorSetResponseAmino;
                fromAminoMsg(object: _294.MsgUndelegateFromValidatorSetResponseAminoMsg): _294.MsgUndelegateFromValidatorSetResponse;
                toAminoMsg(message: _294.MsgUndelegateFromValidatorSetResponse): _294.MsgUndelegateFromValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _294.MsgUndelegateFromValidatorSetResponseProtoMsg): _294.MsgUndelegateFromValidatorSetResponse;
                toProto(message: _294.MsgUndelegateFromValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _294.MsgUndelegateFromValidatorSetResponse): _294.MsgUndelegateFromValidatorSetResponseProtoMsg;
            };
            MsgRedelegateValidatorSet: {
                typeUrl: string;
                encode(message: _294.MsgRedelegateValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _294.MsgRedelegateValidatorSet;
                fromPartial(object: Partial<_294.MsgRedelegateValidatorSet>): _294.MsgRedelegateValidatorSet;
                fromAmino(object: _294.MsgRedelegateValidatorSetAmino): _294.MsgRedelegateValidatorSet;
                toAmino(message: _294.MsgRedelegateValidatorSet): _294.MsgRedelegateValidatorSetAmino;
                fromAminoMsg(object: _294.MsgRedelegateValidatorSetAminoMsg): _294.MsgRedelegateValidatorSet;
                toAminoMsg(message: _294.MsgRedelegateValidatorSet): _294.MsgRedelegateValidatorSetAminoMsg;
                fromProtoMsg(message: _294.MsgRedelegateValidatorSetProtoMsg): _294.MsgRedelegateValidatorSet;
                toProto(message: _294.MsgRedelegateValidatorSet): Uint8Array;
                toProtoMsg(message: _294.MsgRedelegateValidatorSet): _294.MsgRedelegateValidatorSetProtoMsg;
            };
            MsgRedelegateValidatorSetResponse: {
                typeUrl: string;
                encode(_: _294.MsgRedelegateValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _294.MsgRedelegateValidatorSetResponse;
                fromPartial(_: Partial<_294.MsgRedelegateValidatorSetResponse>): _294.MsgRedelegateValidatorSetResponse;
                fromAmino(_: _294.MsgRedelegateValidatorSetResponseAmino): _294.MsgRedelegateValidatorSetResponse;
                toAmino(_: _294.MsgRedelegateValidatorSetResponse): _294.MsgRedelegateValidatorSetResponseAmino;
                fromAminoMsg(object: _294.MsgRedelegateValidatorSetResponseAminoMsg): _294.MsgRedelegateValidatorSetResponse;
                toAminoMsg(message: _294.MsgRedelegateValidatorSetResponse): _294.MsgRedelegateValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _294.MsgRedelegateValidatorSetResponseProtoMsg): _294.MsgRedelegateValidatorSetResponse;
                toProto(message: _294.MsgRedelegateValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _294.MsgRedelegateValidatorSetResponse): _294.MsgRedelegateValidatorSetResponseProtoMsg;
            };
            MsgWithdrawDelegationRewards: {
                typeUrl: string;
                encode(message: _294.MsgWithdrawDelegationRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _294.MsgWithdrawDelegationRewards;
                fromPartial(object: Partial<_294.MsgWithdrawDelegationRewards>): _294.MsgWithdrawDelegationRewards;
                fromAmino(object: _294.MsgWithdrawDelegationRewardsAmino): _294.MsgWithdrawDelegationRewards;
                toAmino(message: _294.MsgWithdrawDelegationRewards): _294.MsgWithdrawDelegationRewardsAmino;
                fromAminoMsg(object: _294.MsgWithdrawDelegationRewardsAminoMsg): _294.MsgWithdrawDelegationRewards;
                toAminoMsg(message: _294.MsgWithdrawDelegationRewards): _294.MsgWithdrawDelegationRewardsAminoMsg;
                fromProtoMsg(message: _294.MsgWithdrawDelegationRewardsProtoMsg): _294.MsgWithdrawDelegationRewards;
                toProto(message: _294.MsgWithdrawDelegationRewards): Uint8Array;
                toProtoMsg(message: _294.MsgWithdrawDelegationRewards): _294.MsgWithdrawDelegationRewardsProtoMsg;
            };
            MsgWithdrawDelegationRewardsResponse: {
                typeUrl: string;
                encode(_: _294.MsgWithdrawDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _294.MsgWithdrawDelegationRewardsResponse;
                fromPartial(_: Partial<_294.MsgWithdrawDelegationRewardsResponse>): _294.MsgWithdrawDelegationRewardsResponse;
                fromAmino(_: _294.MsgWithdrawDelegationRewardsResponseAmino): _294.MsgWithdrawDelegationRewardsResponse;
                toAmino(_: _294.MsgWithdrawDelegationRewardsResponse): _294.MsgWithdrawDelegationRewardsResponseAmino;
                fromAminoMsg(object: _294.MsgWithdrawDelegationRewardsResponseAminoMsg): _294.MsgWithdrawDelegationRewardsResponse;
                toAminoMsg(message: _294.MsgWithdrawDelegationRewardsResponse): _294.MsgWithdrawDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _294.MsgWithdrawDelegationRewardsResponseProtoMsg): _294.MsgWithdrawDelegationRewardsResponse;
                toProto(message: _294.MsgWithdrawDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _294.MsgWithdrawDelegationRewardsResponse): _294.MsgWithdrawDelegationRewardsResponseProtoMsg;
            };
            ValidatorPreference: {
                typeUrl: string;
                encode(message: _293.ValidatorPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _293.ValidatorPreference;
                fromPartial(object: Partial<_293.ValidatorPreference>): _293.ValidatorPreference;
                fromAmino(object: _293.ValidatorPreferenceAmino): _293.ValidatorPreference;
                toAmino(message: _293.ValidatorPreference): _293.ValidatorPreferenceAmino;
                fromAminoMsg(object: _293.ValidatorPreferenceAminoMsg): _293.ValidatorPreference;
                toAminoMsg(message: _293.ValidatorPreference): _293.ValidatorPreferenceAminoMsg;
                fromProtoMsg(message: _293.ValidatorPreferenceProtoMsg): _293.ValidatorPreference;
                toProto(message: _293.ValidatorPreference): Uint8Array;
                toProtoMsg(message: _293.ValidatorPreference): _293.ValidatorPreferenceProtoMsg;
            };
            ValidatorSetPreferences: {
                typeUrl: string;
                encode(message: _293.ValidatorSetPreferences, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _293.ValidatorSetPreferences;
                fromPartial(object: Partial<_293.ValidatorSetPreferences>): _293.ValidatorSetPreferences;
                fromAmino(object: _293.ValidatorSetPreferencesAmino): _293.ValidatorSetPreferences;
                toAmino(message: _293.ValidatorSetPreferences): _293.ValidatorSetPreferencesAmino;
                fromAminoMsg(object: _293.ValidatorSetPreferencesAminoMsg): _293.ValidatorSetPreferences;
                toAminoMsg(message: _293.ValidatorSetPreferences): _293.ValidatorSetPreferencesAminoMsg;
                fromProtoMsg(message: _293.ValidatorSetPreferencesProtoMsg): _293.ValidatorSetPreferences;
                toProto(message: _293.ValidatorSetPreferences): Uint8Array;
                toProtoMsg(message: _293.ValidatorSetPreferences): _293.ValidatorSetPreferencesProtoMsg;
            };
            UserValidatorPreferencesRequest: {
                typeUrl: string;
                encode(message: _292.UserValidatorPreferencesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _292.UserValidatorPreferencesRequest;
                fromPartial(object: Partial<_292.UserValidatorPreferencesRequest>): _292.UserValidatorPreferencesRequest;
                fromAmino(object: _292.UserValidatorPreferencesRequestAmino): _292.UserValidatorPreferencesRequest;
                toAmino(message: _292.UserValidatorPreferencesRequest): _292.UserValidatorPreferencesRequestAmino;
                fromAminoMsg(object: _292.UserValidatorPreferencesRequestAminoMsg): _292.UserValidatorPreferencesRequest;
                toAminoMsg(message: _292.UserValidatorPreferencesRequest): _292.UserValidatorPreferencesRequestAminoMsg;
                fromProtoMsg(message: _292.UserValidatorPreferencesRequestProtoMsg): _292.UserValidatorPreferencesRequest;
                toProto(message: _292.UserValidatorPreferencesRequest): Uint8Array;
                toProtoMsg(message: _292.UserValidatorPreferencesRequest): _292.UserValidatorPreferencesRequestProtoMsg;
            };
            UserValidatorPreferencesResponse: {
                typeUrl: string;
                encode(message: _292.UserValidatorPreferencesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _292.UserValidatorPreferencesResponse;
                fromPartial(object: Partial<_292.UserValidatorPreferencesResponse>): _292.UserValidatorPreferencesResponse;
                fromAmino(object: _292.UserValidatorPreferencesResponseAmino): _292.UserValidatorPreferencesResponse;
                toAmino(message: _292.UserValidatorPreferencesResponse): _292.UserValidatorPreferencesResponseAmino;
                fromAminoMsg(object: _292.UserValidatorPreferencesResponseAminoMsg): _292.UserValidatorPreferencesResponse;
                toAminoMsg(message: _292.UserValidatorPreferencesResponse): _292.UserValidatorPreferencesResponseAminoMsg;
                fromProtoMsg(message: _292.UserValidatorPreferencesResponseProtoMsg): _292.UserValidatorPreferencesResponse;
                toProto(message: _292.UserValidatorPreferencesResponse): Uint8Array;
                toProtoMsg(message: _292.UserValidatorPreferencesResponse): _292.UserValidatorPreferencesResponseProtoMsg;
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
            osmosis: {
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _539.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _540.MsgClientImpl;
                        };
                    };
                    v1beta1: _541.MsgClientImpl;
                };
                incentives: _542.MsgClientImpl;
                lockup: _543.MsgClientImpl;
                protorev: {
                    v1beta1: _544.MsgClientImpl;
                };
                superfluid: _545.MsgClientImpl;
                swaprouter: {
                    v1beta1: _546.MsgClientImpl;
                };
                tokenfactory: {
                    v1beta1: _547.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _548.MsgClientImpl;
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
            osmosis: {
                downtimedetector: {
                    v1beta1: {
                        recoveredSinceDowntimeOfLength(request: _233.RecoveredSinceDowntimeOfLengthRequest): Promise<_233.RecoveredSinceDowntimeOfLengthResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _235.QueryEpochsInfoRequest): Promise<_235.QueryEpochsInfoResponse>;
                        currentEpoch(request: _235.QueryCurrentEpochRequest): Promise<_235.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _238.QueryPoolsRequest): Promise<_238.QueryPoolsResponse>;
                        numPools(request?: _238.QueryNumPoolsRequest): Promise<_238.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _238.QueryTotalLiquidityRequest): Promise<_238.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _238.QueryPoolsWithFilterRequest): Promise<_238.QueryPoolsWithFilterResponse>;
                        pool(request: _238.QueryPoolRequest): Promise<_238.QueryPoolResponse>;
                        poolType(request: _238.QueryPoolTypeRequest): Promise<_238.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _238.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_238.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _238.QueryCalcJoinPoolSharesRequest): Promise<_238.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _238.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_238.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _238.QueryPoolParamsRequest): Promise<_238.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _238.QueryTotalPoolLiquidityRequest): Promise<_238.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _238.QueryTotalSharesRequest): Promise<_238.QueryTotalSharesResponse>;
                        spotPrice(request: _238.QuerySpotPriceRequest): Promise<_238.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _238.QuerySwapExactAmountInRequest): Promise<_238.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _238.QuerySwapExactAmountOutRequest): Promise<_238.QuerySwapExactAmountOutResponse>;
                    };
                    v2: {
                        spotPrice(request: _243.QuerySpotPriceRequest): Promise<_243.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _245.QueryParamsRequest): Promise<_245.QueryParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _249.ModuleToDistributeCoinsRequest): Promise<_249.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _249.GaugeByIDRequest): Promise<_249.GaugeByIDResponse>;
                    gauges(request?: _249.GaugesRequest): Promise<_249.GaugesResponse>;
                    activeGauges(request?: _249.ActiveGaugesRequest): Promise<_249.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _249.ActiveGaugesPerDenomRequest): Promise<_249.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _249.UpcomingGaugesRequest): Promise<_249.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _249.UpcomingGaugesPerDenomRequest): Promise<_249.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _249.RewardsEstRequest): Promise<_249.RewardsEstResponse>;
                    lockableDurations(request?: _249.QueryLockableDurationsRequest): Promise<_249.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _254.ModuleBalanceRequest): Promise<_254.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _254.ModuleLockedAmountRequest): Promise<_254.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _254.AccountUnlockableCoinsRequest): Promise<_254.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _254.AccountUnlockingCoinsRequest): Promise<_254.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _254.AccountLockedCoinsRequest): Promise<_254.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _254.AccountLockedPastTimeRequest): Promise<_254.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _254.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_254.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _254.AccountUnlockedBeforeTimeRequest): Promise<_254.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _254.AccountLockedPastTimeDenomRequest): Promise<_254.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _254.LockedDenomRequest): Promise<_254.LockedDenomResponse>;
                    lockedByID(request: _254.LockedRequest): Promise<_254.LockedResponse>;
                    syntheticLockupsByLockupID(request: _254.SyntheticLockupsByLockupIDRequest): Promise<_254.SyntheticLockupsByLockupIDResponse>;
                    accountLockedLongerDuration(request: _254.AccountLockedLongerDurationRequest): Promise<_254.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _254.AccountLockedDurationRequest): Promise<_254.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _254.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_254.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _254.AccountLockedLongerDurationDenomRequest): Promise<_254.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _254.QueryParamsRequest): Promise<_254.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _258.QueryParamsRequest): Promise<_258.QueryParamsResponse>;
                        epochProvisions(request?: _258.QueryEpochProvisionsRequest): Promise<_258.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _262.QueryGaugeIdsRequest): Promise<_262.QueryGaugeIdsResponse>;
                        distrInfo(request?: _262.QueryDistrInfoRequest): Promise<_262.QueryDistrInfoResponse>;
                        params(request?: _262.QueryParamsRequest): Promise<_262.QueryParamsResponse>;
                        lockableDurations(request?: _262.QueryLockableDurationsRequest): Promise<_262.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _262.QueryIncentivizedPoolsRequest): Promise<_262.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _262.QueryExternalIncentiveGaugesRequest): Promise<_262.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _267.QueryParamsRequest): Promise<_267.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _267.QueryGetProtoRevNumberOfTradesRequest): Promise<_267.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _267.QueryGetProtoRevProfitsByDenomRequest): Promise<_267.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _267.QueryGetProtoRevAllProfitsRequest): Promise<_267.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByPool(request: _267.QueryGetProtoRevStatisticsByPoolRequest): Promise<_267.QueryGetProtoRevStatisticsByPoolResponse>;
                        getProtoRevAllStatistics(request?: _267.QueryGetProtoRevAllStatisticsRequest): Promise<_267.QueryGetProtoRevAllStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _267.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_267.QueryGetProtoRevTokenPairArbRoutesResponse>;
                    };
                };
                superfluid: {
                    params(request?: _272.QueryParamsRequest): Promise<_272.QueryParamsResponse>;
                    assetType(request: _272.AssetTypeRequest): Promise<_272.AssetTypeResponse>;
                    allAssets(request?: _272.AllAssetsRequest): Promise<_272.AllAssetsResponse>;
                    assetMultiplier(request: _272.AssetMultiplierRequest): Promise<_272.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _272.AllIntermediaryAccountsRequest): Promise<_272.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _272.ConnectedIntermediaryAccountRequest): Promise<_272.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _272.QueryTotalDelegationByValidatorForDenomRequest): Promise<_272.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _272.TotalSuperfluidDelegationsRequest): Promise<_272.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _272.SuperfluidDelegationAmountRequest): Promise<_272.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _272.SuperfluidDelegationsByDelegatorRequest): Promise<_272.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _272.SuperfluidUndelegationsByDelegatorRequest): Promise<_272.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _272.SuperfluidDelegationsByValidatorDenomRequest): Promise<_272.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _272.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_272.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _272.QueryTotalDelegationByDelegatorRequest): Promise<_272.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _272.QueryUnpoolWhitelistRequest): Promise<_272.QueryUnpoolWhitelistResponse>;
                };
                swaprouter: {
                    v1beta1: {
                        params(request?: _277.ParamsRequest): Promise<_277.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _277.EstimateSwapExactAmountInRequest): Promise<_277.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _277.EstimateSwapExactAmountOutRequest): Promise<_277.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _277.NumPoolsRequest): Promise<_277.NumPoolsResponse>;
                    };
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _283.QueryParamsRequest): Promise<_283.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _283.QueryDenomAuthorityMetadataRequest): Promise<_283.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _283.QueryDenomsFromCreatorRequest): Promise<_283.QueryDenomsFromCreatorResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _286.ParamsRequest): Promise<_286.ParamsResponse>;
                        arithmeticTwap(request: _286.ArithmeticTwapRequest): Promise<_286.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _286.ArithmeticTwapToNowRequest): Promise<_286.ArithmeticTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _291.QueryFeeTokensRequest): Promise<_291.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _291.QueryDenomSpotPriceRequest): Promise<_291.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _291.QueryDenomPoolIdRequest): Promise<_291.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _291.QueryBaseDenomRequest): Promise<_291.QueryBaseDenomResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _292.UserValidatorPreferencesRequest): Promise<_292.UserValidatorPreferencesResponse>;
                    };
                };
            };
        }>;
    };
}
