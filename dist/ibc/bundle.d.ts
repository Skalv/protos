import * as _156 from "./applications/transfer/v1/genesis";
import * as _157 from "./applications/transfer/v1/query";
import * as _158 from "./applications/transfer/v1/transfer";
import * as _159 from "./applications/transfer/v1/tx";
import * as _160 from "./applications/transfer/v2/packet";
import * as _161 from "./core/channel/v1/channel";
import * as _162 from "./core/channel/v1/genesis";
import * as _163 from "./core/channel/v1/query";
import * as _164 from "./core/channel/v1/tx";
import * as _165 from "./core/client/v1/client";
import * as _166 from "./core/client/v1/genesis";
import * as _167 from "./core/client/v1/query";
import * as _168 from "./core/client/v1/tx";
import * as _169 from "./core/commitment/v1/commitment";
import * as _170 from "./core/connection/v1/connection";
import * as _171 from "./core/connection/v1/genesis";
import * as _172 from "./core/connection/v1/query";
import * as _173 from "./core/connection/v1/tx";
import * as _174 from "./lightclients/localhost/v1/localhost";
import * as _175 from "./lightclients/solomachine/v1/solomachine";
import * as _176 from "./lightclients/solomachine/v2/solomachine";
import * as _177 from "./lightclients/tendermint/v1/tendermint";
import * as _464 from "./applications/transfer/v1/query.rpc.Query";
import * as _465 from "./core/channel/v1/query.rpc.Query";
import * as _466 from "./core/client/v1/query.rpc.Query";
import * as _467 from "./core/connection/v1/query.rpc.Query";
import * as _468 from "./applications/transfer/v1/tx.rpc.msg";
import * as _469 from "./core/channel/v1/tx.rpc.msg";
import * as _470 from "./core/client/v1/tx.rpc.msg";
import * as _471 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _468.MsgClientImpl;
                QueryClientImpl: typeof _464.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _157.QueryDenomTraceRequest): Promise<_157.QueryDenomTraceResponse>;
                    denomTraces(request?: _157.QueryDenomTracesRequest): Promise<_157.QueryDenomTracesResponse>;
                    params(request?: _157.QueryParamsRequest): Promise<_157.QueryParamsResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _159.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _159.MsgTransfer): {
                            typeUrl: string;
                            value: _159.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _159.MsgTransfer): {
                            typeUrl: string;
                            value: _159.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _159.MsgTransfer) => _159.MsgTransferAmino;
                        fromAmino: (object: _159.MsgTransferAmino) => _159.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _159.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.MsgTransfer;
                    fromPartial(object: Partial<_159.MsgTransfer>): _159.MsgTransfer;
                    fromAmino(object: _159.MsgTransferAmino): _159.MsgTransfer;
                    toAmino(message: _159.MsgTransfer): _159.MsgTransferAmino;
                    fromAminoMsg(object: _159.MsgTransferAminoMsg): _159.MsgTransfer;
                    toAminoMsg(message: _159.MsgTransfer): _159.MsgTransferAminoMsg;
                    fromProtoMsg(message: _159.MsgTransferProtoMsg): _159.MsgTransfer;
                    toProto(message: _159.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _159.MsgTransfer): _159.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(_: _159.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _159.MsgTransferResponse;
                    fromPartial(_: Partial<_159.MsgTransferResponse>): _159.MsgTransferResponse;
                    fromAmino(_: _159.MsgTransferResponseAmino): _159.MsgTransferResponse;
                    toAmino(_: _159.MsgTransferResponse): _159.MsgTransferResponseAmino;
                    fromAminoMsg(object: _159.MsgTransferResponseAminoMsg): _159.MsgTransferResponse;
                    toAminoMsg(message: _159.MsgTransferResponse): _159.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _159.MsgTransferResponseProtoMsg): _159.MsgTransferResponse;
                    toProto(message: _159.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _159.MsgTransferResponse): _159.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _158.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.DenomTrace;
                    fromPartial(object: Partial<_158.DenomTrace>): _158.DenomTrace;
                    fromAmino(object: _158.DenomTraceAmino): _158.DenomTrace;
                    toAmino(message: _158.DenomTrace): _158.DenomTraceAmino;
                    fromAminoMsg(object: _158.DenomTraceAminoMsg): _158.DenomTrace;
                    toAminoMsg(message: _158.DenomTrace): _158.DenomTraceAminoMsg;
                    fromProtoMsg(message: _158.DenomTraceProtoMsg): _158.DenomTrace;
                    toProto(message: _158.DenomTrace): Uint8Array;
                    toProtoMsg(message: _158.DenomTrace): _158.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _158.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _158.Params;
                    fromPartial(object: Partial<_158.Params>): _158.Params;
                    fromAmino(object: _158.ParamsAmino): _158.Params;
                    toAmino(message: _158.Params): _158.ParamsAmino;
                    fromAminoMsg(object: _158.ParamsAminoMsg): _158.Params;
                    toAminoMsg(message: _158.Params): _158.ParamsAminoMsg;
                    fromProtoMsg(message: _158.ParamsProtoMsg): _158.Params;
                    toProto(message: _158.Params): Uint8Array;
                    toProtoMsg(message: _158.Params): _158.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _157.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryDenomTraceRequest;
                    fromPartial(object: Partial<_157.QueryDenomTraceRequest>): _157.QueryDenomTraceRequest;
                    fromAmino(object: _157.QueryDenomTraceRequestAmino): _157.QueryDenomTraceRequest;
                    toAmino(message: _157.QueryDenomTraceRequest): _157.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _157.QueryDenomTraceRequestAminoMsg): _157.QueryDenomTraceRequest;
                    toAminoMsg(message: _157.QueryDenomTraceRequest): _157.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _157.QueryDenomTraceRequestProtoMsg): _157.QueryDenomTraceRequest;
                    toProto(message: _157.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _157.QueryDenomTraceRequest): _157.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _157.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryDenomTraceResponse;
                    fromPartial(object: Partial<_157.QueryDenomTraceResponse>): _157.QueryDenomTraceResponse;
                    fromAmino(object: _157.QueryDenomTraceResponseAmino): _157.QueryDenomTraceResponse;
                    toAmino(message: _157.QueryDenomTraceResponse): _157.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _157.QueryDenomTraceResponseAminoMsg): _157.QueryDenomTraceResponse;
                    toAminoMsg(message: _157.QueryDenomTraceResponse): _157.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _157.QueryDenomTraceResponseProtoMsg): _157.QueryDenomTraceResponse;
                    toProto(message: _157.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _157.QueryDenomTraceResponse): _157.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _157.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryDenomTracesRequest;
                    fromPartial(object: Partial<_157.QueryDenomTracesRequest>): _157.QueryDenomTracesRequest;
                    fromAmino(object: _157.QueryDenomTracesRequestAmino): _157.QueryDenomTracesRequest;
                    toAmino(message: _157.QueryDenomTracesRequest): _157.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _157.QueryDenomTracesRequestAminoMsg): _157.QueryDenomTracesRequest;
                    toAminoMsg(message: _157.QueryDenomTracesRequest): _157.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _157.QueryDenomTracesRequestProtoMsg): _157.QueryDenomTracesRequest;
                    toProto(message: _157.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _157.QueryDenomTracesRequest): _157.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _157.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryDenomTracesResponse;
                    fromPartial(object: Partial<_157.QueryDenomTracesResponse>): _157.QueryDenomTracesResponse;
                    fromAmino(object: _157.QueryDenomTracesResponseAmino): _157.QueryDenomTracesResponse;
                    toAmino(message: _157.QueryDenomTracesResponse): _157.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _157.QueryDenomTracesResponseAminoMsg): _157.QueryDenomTracesResponse;
                    toAminoMsg(message: _157.QueryDenomTracesResponse): _157.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _157.QueryDenomTracesResponseProtoMsg): _157.QueryDenomTracesResponse;
                    toProto(message: _157.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _157.QueryDenomTracesResponse): _157.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _157.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryParamsRequest;
                    fromPartial(_: Partial<_157.QueryParamsRequest>): _157.QueryParamsRequest;
                    fromAmino(_: _157.QueryParamsRequestAmino): _157.QueryParamsRequest;
                    toAmino(_: _157.QueryParamsRequest): _157.QueryParamsRequestAmino;
                    fromAminoMsg(object: _157.QueryParamsRequestAminoMsg): _157.QueryParamsRequest;
                    toAminoMsg(message: _157.QueryParamsRequest): _157.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _157.QueryParamsRequestProtoMsg): _157.QueryParamsRequest;
                    toProto(message: _157.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _157.QueryParamsRequest): _157.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _157.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _157.QueryParamsResponse;
                    fromPartial(object: Partial<_157.QueryParamsResponse>): _157.QueryParamsResponse;
                    fromAmino(object: _157.QueryParamsResponseAmino): _157.QueryParamsResponse;
                    toAmino(message: _157.QueryParamsResponse): _157.QueryParamsResponseAmino;
                    fromAminoMsg(object: _157.QueryParamsResponseAminoMsg): _157.QueryParamsResponse;
                    toAminoMsg(message: _157.QueryParamsResponse): _157.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _157.QueryParamsResponseProtoMsg): _157.QueryParamsResponse;
                    toProto(message: _157.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _157.QueryParamsResponse): _157.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _156.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _156.GenesisState;
                    fromPartial(object: Partial<_156.GenesisState>): _156.GenesisState;
                    fromAmino(object: _156.GenesisStateAmino): _156.GenesisState;
                    toAmino(message: _156.GenesisState): _156.GenesisStateAmino;
                    fromAminoMsg(object: _156.GenesisStateAminoMsg): _156.GenesisState;
                    toAminoMsg(message: _156.GenesisState): _156.GenesisStateAminoMsg;
                    fromProtoMsg(message: _156.GenesisStateProtoMsg): _156.GenesisState;
                    toProto(message: _156.GenesisState): Uint8Array;
                    toProtoMsg(message: _156.GenesisState): _156.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _160.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _160.FungibleTokenPacketData;
                    fromPartial(object: Partial<_160.FungibleTokenPacketData>): _160.FungibleTokenPacketData;
                    fromAmino(object: _160.FungibleTokenPacketDataAmino): _160.FungibleTokenPacketData;
                    toAmino(message: _160.FungibleTokenPacketData): _160.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _160.FungibleTokenPacketDataAminoMsg): _160.FungibleTokenPacketData;
                    toAminoMsg(message: _160.FungibleTokenPacketData): _160.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _160.FungibleTokenPacketDataProtoMsg): _160.FungibleTokenPacketData;
                    toProto(message: _160.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _160.FungibleTokenPacketData): _160.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _469.MsgClientImpl;
                QueryClientImpl: typeof _465.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _163.QueryChannelRequest): Promise<_163.QueryChannelResponse>;
                    channels(request?: _163.QueryChannelsRequest): Promise<_163.QueryChannelsResponse>;
                    connectionChannels(request: _163.QueryConnectionChannelsRequest): Promise<_163.QueryConnectionChannelsResponse>;
                    channelClientState(request: _163.QueryChannelClientStateRequest): Promise<_163.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _163.QueryChannelConsensusStateRequest): Promise<_163.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _163.QueryPacketCommitmentRequest): Promise<_163.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _163.QueryPacketCommitmentsRequest): Promise<_163.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _163.QueryPacketReceiptRequest): Promise<_163.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _163.QueryPacketAcknowledgementRequest): Promise<_163.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _163.QueryPacketAcknowledgementsRequest): Promise<_163.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _163.QueryUnreceivedPacketsRequest): Promise<_163.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _163.QueryUnreceivedAcksRequest): Promise<_163.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _163.QueryNextSequenceReceiveRequest): Promise<_163.QueryNextSequenceReceiveResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _164.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _164.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _164.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _164.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _164.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _164.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _164.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _164.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _164.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _164.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _164.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _164.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _164.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _164.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _164.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _164.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _164.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _164.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _164.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _164.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _164.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _164.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _164.MsgRecvPacket): {
                            typeUrl: string;
                            value: _164.MsgRecvPacket;
                        };
                        timeout(value: _164.MsgTimeout): {
                            typeUrl: string;
                            value: _164.MsgTimeout;
                        };
                        timeoutOnClose(value: _164.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _164.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _164.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _164.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _164.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _164.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _164.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _164.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _164.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _164.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _164.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _164.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _164.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _164.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _164.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _164.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _164.MsgRecvPacket): {
                            typeUrl: string;
                            value: _164.MsgRecvPacket;
                        };
                        timeout(value: _164.MsgTimeout): {
                            typeUrl: string;
                            value: _164.MsgTimeout;
                        };
                        timeoutOnClose(value: _164.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _164.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _164.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _164.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _164.MsgChannelOpenInit) => _164.MsgChannelOpenInitAmino;
                        fromAmino: (object: _164.MsgChannelOpenInitAmino) => _164.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _164.MsgChannelOpenTry) => _164.MsgChannelOpenTryAmino;
                        fromAmino: (object: _164.MsgChannelOpenTryAmino) => _164.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _164.MsgChannelOpenAck) => _164.MsgChannelOpenAckAmino;
                        fromAmino: (object: _164.MsgChannelOpenAckAmino) => _164.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _164.MsgChannelOpenConfirm) => _164.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _164.MsgChannelOpenConfirmAmino) => _164.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _164.MsgChannelCloseInit) => _164.MsgChannelCloseInitAmino;
                        fromAmino: (object: _164.MsgChannelCloseInitAmino) => _164.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _164.MsgChannelCloseConfirm) => _164.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _164.MsgChannelCloseConfirmAmino) => _164.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _164.MsgRecvPacket) => _164.MsgRecvPacketAmino;
                        fromAmino: (object: _164.MsgRecvPacketAmino) => _164.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _164.MsgTimeout) => _164.MsgTimeoutAmino;
                        fromAmino: (object: _164.MsgTimeoutAmino) => _164.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _164.MsgTimeoutOnClose) => _164.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _164.MsgTimeoutOnCloseAmino) => _164.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _164.MsgAcknowledgement) => _164.MsgAcknowledgementAmino;
                        fromAmino: (object: _164.MsgAcknowledgementAmino) => _164.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _164.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgChannelOpenInit;
                    fromPartial(object: Partial<_164.MsgChannelOpenInit>): _164.MsgChannelOpenInit;
                    fromAmino(object: _164.MsgChannelOpenInitAmino): _164.MsgChannelOpenInit;
                    toAmino(message: _164.MsgChannelOpenInit): _164.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _164.MsgChannelOpenInitAminoMsg): _164.MsgChannelOpenInit;
                    toAminoMsg(message: _164.MsgChannelOpenInit): _164.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _164.MsgChannelOpenInitProtoMsg): _164.MsgChannelOpenInit;
                    toProto(message: _164.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _164.MsgChannelOpenInit): _164.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgChannelOpenInitResponse;
                    fromPartial(_: Partial<_164.MsgChannelOpenInitResponse>): _164.MsgChannelOpenInitResponse;
                    fromAmino(_: _164.MsgChannelOpenInitResponseAmino): _164.MsgChannelOpenInitResponse;
                    toAmino(_: _164.MsgChannelOpenInitResponse): _164.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _164.MsgChannelOpenInitResponseAminoMsg): _164.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _164.MsgChannelOpenInitResponse): _164.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgChannelOpenInitResponseProtoMsg): _164.MsgChannelOpenInitResponse;
                    toProto(message: _164.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgChannelOpenInitResponse): _164.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _164.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgChannelOpenTry;
                    fromPartial(object: Partial<_164.MsgChannelOpenTry>): _164.MsgChannelOpenTry;
                    fromAmino(object: _164.MsgChannelOpenTryAmino): _164.MsgChannelOpenTry;
                    toAmino(message: _164.MsgChannelOpenTry): _164.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _164.MsgChannelOpenTryAminoMsg): _164.MsgChannelOpenTry;
                    toAminoMsg(message: _164.MsgChannelOpenTry): _164.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _164.MsgChannelOpenTryProtoMsg): _164.MsgChannelOpenTry;
                    toProto(message: _164.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _164.MsgChannelOpenTry): _164.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgChannelOpenTryResponse;
                    fromPartial(_: Partial<_164.MsgChannelOpenTryResponse>): _164.MsgChannelOpenTryResponse;
                    fromAmino(_: _164.MsgChannelOpenTryResponseAmino): _164.MsgChannelOpenTryResponse;
                    toAmino(_: _164.MsgChannelOpenTryResponse): _164.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _164.MsgChannelOpenTryResponseAminoMsg): _164.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _164.MsgChannelOpenTryResponse): _164.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgChannelOpenTryResponseProtoMsg): _164.MsgChannelOpenTryResponse;
                    toProto(message: _164.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgChannelOpenTryResponse): _164.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _164.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgChannelOpenAck;
                    fromPartial(object: Partial<_164.MsgChannelOpenAck>): _164.MsgChannelOpenAck;
                    fromAmino(object: _164.MsgChannelOpenAckAmino): _164.MsgChannelOpenAck;
                    toAmino(message: _164.MsgChannelOpenAck): _164.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _164.MsgChannelOpenAckAminoMsg): _164.MsgChannelOpenAck;
                    toAminoMsg(message: _164.MsgChannelOpenAck): _164.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _164.MsgChannelOpenAckProtoMsg): _164.MsgChannelOpenAck;
                    toProto(message: _164.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _164.MsgChannelOpenAck): _164.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgChannelOpenAckResponse;
                    fromPartial(_: Partial<_164.MsgChannelOpenAckResponse>): _164.MsgChannelOpenAckResponse;
                    fromAmino(_: _164.MsgChannelOpenAckResponseAmino): _164.MsgChannelOpenAckResponse;
                    toAmino(_: _164.MsgChannelOpenAckResponse): _164.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _164.MsgChannelOpenAckResponseAminoMsg): _164.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _164.MsgChannelOpenAckResponse): _164.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgChannelOpenAckResponseProtoMsg): _164.MsgChannelOpenAckResponse;
                    toProto(message: _164.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgChannelOpenAckResponse): _164.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _164.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgChannelOpenConfirm;
                    fromPartial(object: Partial<_164.MsgChannelOpenConfirm>): _164.MsgChannelOpenConfirm;
                    fromAmino(object: _164.MsgChannelOpenConfirmAmino): _164.MsgChannelOpenConfirm;
                    toAmino(message: _164.MsgChannelOpenConfirm): _164.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _164.MsgChannelOpenConfirmAminoMsg): _164.MsgChannelOpenConfirm;
                    toAminoMsg(message: _164.MsgChannelOpenConfirm): _164.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _164.MsgChannelOpenConfirmProtoMsg): _164.MsgChannelOpenConfirm;
                    toProto(message: _164.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _164.MsgChannelOpenConfirm): _164.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgChannelOpenConfirmResponse;
                    fromPartial(_: Partial<_164.MsgChannelOpenConfirmResponse>): _164.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _164.MsgChannelOpenConfirmResponseAmino): _164.MsgChannelOpenConfirmResponse;
                    toAmino(_: _164.MsgChannelOpenConfirmResponse): _164.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _164.MsgChannelOpenConfirmResponseAminoMsg): _164.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _164.MsgChannelOpenConfirmResponse): _164.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgChannelOpenConfirmResponseProtoMsg): _164.MsgChannelOpenConfirmResponse;
                    toProto(message: _164.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgChannelOpenConfirmResponse): _164.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _164.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgChannelCloseInit;
                    fromPartial(object: Partial<_164.MsgChannelCloseInit>): _164.MsgChannelCloseInit;
                    fromAmino(object: _164.MsgChannelCloseInitAmino): _164.MsgChannelCloseInit;
                    toAmino(message: _164.MsgChannelCloseInit): _164.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _164.MsgChannelCloseInitAminoMsg): _164.MsgChannelCloseInit;
                    toAminoMsg(message: _164.MsgChannelCloseInit): _164.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _164.MsgChannelCloseInitProtoMsg): _164.MsgChannelCloseInit;
                    toProto(message: _164.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _164.MsgChannelCloseInit): _164.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgChannelCloseInitResponse;
                    fromPartial(_: Partial<_164.MsgChannelCloseInitResponse>): _164.MsgChannelCloseInitResponse;
                    fromAmino(_: _164.MsgChannelCloseInitResponseAmino): _164.MsgChannelCloseInitResponse;
                    toAmino(_: _164.MsgChannelCloseInitResponse): _164.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _164.MsgChannelCloseInitResponseAminoMsg): _164.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _164.MsgChannelCloseInitResponse): _164.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgChannelCloseInitResponseProtoMsg): _164.MsgChannelCloseInitResponse;
                    toProto(message: _164.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgChannelCloseInitResponse): _164.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _164.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgChannelCloseConfirm;
                    fromPartial(object: Partial<_164.MsgChannelCloseConfirm>): _164.MsgChannelCloseConfirm;
                    fromAmino(object: _164.MsgChannelCloseConfirmAmino): _164.MsgChannelCloseConfirm;
                    toAmino(message: _164.MsgChannelCloseConfirm): _164.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _164.MsgChannelCloseConfirmAminoMsg): _164.MsgChannelCloseConfirm;
                    toAminoMsg(message: _164.MsgChannelCloseConfirm): _164.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _164.MsgChannelCloseConfirmProtoMsg): _164.MsgChannelCloseConfirm;
                    toProto(message: _164.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _164.MsgChannelCloseConfirm): _164.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgChannelCloseConfirmResponse;
                    fromPartial(_: Partial<_164.MsgChannelCloseConfirmResponse>): _164.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _164.MsgChannelCloseConfirmResponseAmino): _164.MsgChannelCloseConfirmResponse;
                    toAmino(_: _164.MsgChannelCloseConfirmResponse): _164.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _164.MsgChannelCloseConfirmResponseAminoMsg): _164.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _164.MsgChannelCloseConfirmResponse): _164.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgChannelCloseConfirmResponseProtoMsg): _164.MsgChannelCloseConfirmResponse;
                    toProto(message: _164.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgChannelCloseConfirmResponse): _164.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _164.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgRecvPacket;
                    fromPartial(object: Partial<_164.MsgRecvPacket>): _164.MsgRecvPacket;
                    fromAmino(object: _164.MsgRecvPacketAmino): _164.MsgRecvPacket;
                    toAmino(message: _164.MsgRecvPacket): _164.MsgRecvPacketAmino;
                    fromAminoMsg(object: _164.MsgRecvPacketAminoMsg): _164.MsgRecvPacket;
                    toAminoMsg(message: _164.MsgRecvPacket): _164.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _164.MsgRecvPacketProtoMsg): _164.MsgRecvPacket;
                    toProto(message: _164.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _164.MsgRecvPacket): _164.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgRecvPacketResponse;
                    fromPartial(_: Partial<_164.MsgRecvPacketResponse>): _164.MsgRecvPacketResponse;
                    fromAmino(_: _164.MsgRecvPacketResponseAmino): _164.MsgRecvPacketResponse;
                    toAmino(_: _164.MsgRecvPacketResponse): _164.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _164.MsgRecvPacketResponseAminoMsg): _164.MsgRecvPacketResponse;
                    toAminoMsg(message: _164.MsgRecvPacketResponse): _164.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgRecvPacketResponseProtoMsg): _164.MsgRecvPacketResponse;
                    toProto(message: _164.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgRecvPacketResponse): _164.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _164.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgTimeout;
                    fromPartial(object: Partial<_164.MsgTimeout>): _164.MsgTimeout;
                    fromAmino(object: _164.MsgTimeoutAmino): _164.MsgTimeout;
                    toAmino(message: _164.MsgTimeout): _164.MsgTimeoutAmino;
                    fromAminoMsg(object: _164.MsgTimeoutAminoMsg): _164.MsgTimeout;
                    toAminoMsg(message: _164.MsgTimeout): _164.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _164.MsgTimeoutProtoMsg): _164.MsgTimeout;
                    toProto(message: _164.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _164.MsgTimeout): _164.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgTimeoutResponse;
                    fromPartial(_: Partial<_164.MsgTimeoutResponse>): _164.MsgTimeoutResponse;
                    fromAmino(_: _164.MsgTimeoutResponseAmino): _164.MsgTimeoutResponse;
                    toAmino(_: _164.MsgTimeoutResponse): _164.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _164.MsgTimeoutResponseAminoMsg): _164.MsgTimeoutResponse;
                    toAminoMsg(message: _164.MsgTimeoutResponse): _164.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgTimeoutResponseProtoMsg): _164.MsgTimeoutResponse;
                    toProto(message: _164.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgTimeoutResponse): _164.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _164.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgTimeoutOnClose;
                    fromPartial(object: Partial<_164.MsgTimeoutOnClose>): _164.MsgTimeoutOnClose;
                    fromAmino(object: _164.MsgTimeoutOnCloseAmino): _164.MsgTimeoutOnClose;
                    toAmino(message: _164.MsgTimeoutOnClose): _164.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _164.MsgTimeoutOnCloseAminoMsg): _164.MsgTimeoutOnClose;
                    toAminoMsg(message: _164.MsgTimeoutOnClose): _164.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _164.MsgTimeoutOnCloseProtoMsg): _164.MsgTimeoutOnClose;
                    toProto(message: _164.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _164.MsgTimeoutOnClose): _164.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgTimeoutOnCloseResponse;
                    fromPartial(_: Partial<_164.MsgTimeoutOnCloseResponse>): _164.MsgTimeoutOnCloseResponse;
                    fromAmino(_: _164.MsgTimeoutOnCloseResponseAmino): _164.MsgTimeoutOnCloseResponse;
                    toAmino(_: _164.MsgTimeoutOnCloseResponse): _164.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _164.MsgTimeoutOnCloseResponseAminoMsg): _164.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _164.MsgTimeoutOnCloseResponse): _164.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgTimeoutOnCloseResponseProtoMsg): _164.MsgTimeoutOnCloseResponse;
                    toProto(message: _164.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgTimeoutOnCloseResponse): _164.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _164.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgAcknowledgement;
                    fromPartial(object: Partial<_164.MsgAcknowledgement>): _164.MsgAcknowledgement;
                    fromAmino(object: _164.MsgAcknowledgementAmino): _164.MsgAcknowledgement;
                    toAmino(message: _164.MsgAcknowledgement): _164.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _164.MsgAcknowledgementAminoMsg): _164.MsgAcknowledgement;
                    toAminoMsg(message: _164.MsgAcknowledgement): _164.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _164.MsgAcknowledgementProtoMsg): _164.MsgAcknowledgement;
                    toProto(message: _164.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _164.MsgAcknowledgement): _164.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(_: _164.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _164.MsgAcknowledgementResponse;
                    fromPartial(_: Partial<_164.MsgAcknowledgementResponse>): _164.MsgAcknowledgementResponse;
                    fromAmino(_: _164.MsgAcknowledgementResponseAmino): _164.MsgAcknowledgementResponse;
                    toAmino(_: _164.MsgAcknowledgementResponse): _164.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _164.MsgAcknowledgementResponseAminoMsg): _164.MsgAcknowledgementResponse;
                    toAminoMsg(message: _164.MsgAcknowledgementResponse): _164.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _164.MsgAcknowledgementResponseProtoMsg): _164.MsgAcknowledgementResponse;
                    toProto(message: _164.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _164.MsgAcknowledgementResponse): _164.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryChannelRequest;
                    fromPartial(object: Partial<_163.QueryChannelRequest>): _163.QueryChannelRequest;
                    fromAmino(object: _163.QueryChannelRequestAmino): _163.QueryChannelRequest;
                    toAmino(message: _163.QueryChannelRequest): _163.QueryChannelRequestAmino;
                    fromAminoMsg(object: _163.QueryChannelRequestAminoMsg): _163.QueryChannelRequest;
                    toAminoMsg(message: _163.QueryChannelRequest): _163.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryChannelRequestProtoMsg): _163.QueryChannelRequest;
                    toProto(message: _163.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryChannelRequest): _163.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryChannelResponse;
                    fromPartial(object: Partial<_163.QueryChannelResponse>): _163.QueryChannelResponse;
                    fromAmino(object: _163.QueryChannelResponseAmino): _163.QueryChannelResponse;
                    toAmino(message: _163.QueryChannelResponse): _163.QueryChannelResponseAmino;
                    fromAminoMsg(object: _163.QueryChannelResponseAminoMsg): _163.QueryChannelResponse;
                    toAminoMsg(message: _163.QueryChannelResponse): _163.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryChannelResponseProtoMsg): _163.QueryChannelResponse;
                    toProto(message: _163.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryChannelResponse): _163.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryChannelsRequest;
                    fromPartial(object: Partial<_163.QueryChannelsRequest>): _163.QueryChannelsRequest;
                    fromAmino(object: _163.QueryChannelsRequestAmino): _163.QueryChannelsRequest;
                    toAmino(message: _163.QueryChannelsRequest): _163.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _163.QueryChannelsRequestAminoMsg): _163.QueryChannelsRequest;
                    toAminoMsg(message: _163.QueryChannelsRequest): _163.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryChannelsRequestProtoMsg): _163.QueryChannelsRequest;
                    toProto(message: _163.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryChannelsRequest): _163.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryChannelsResponse;
                    fromPartial(object: Partial<_163.QueryChannelsResponse>): _163.QueryChannelsResponse;
                    fromAmino(object: _163.QueryChannelsResponseAmino): _163.QueryChannelsResponse;
                    toAmino(message: _163.QueryChannelsResponse): _163.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _163.QueryChannelsResponseAminoMsg): _163.QueryChannelsResponse;
                    toAminoMsg(message: _163.QueryChannelsResponse): _163.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryChannelsResponseProtoMsg): _163.QueryChannelsResponse;
                    toProto(message: _163.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryChannelsResponse): _163.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryConnectionChannelsRequest;
                    fromPartial(object: Partial<_163.QueryConnectionChannelsRequest>): _163.QueryConnectionChannelsRequest;
                    fromAmino(object: _163.QueryConnectionChannelsRequestAmino): _163.QueryConnectionChannelsRequest;
                    toAmino(message: _163.QueryConnectionChannelsRequest): _163.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _163.QueryConnectionChannelsRequestAminoMsg): _163.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _163.QueryConnectionChannelsRequest): _163.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryConnectionChannelsRequestProtoMsg): _163.QueryConnectionChannelsRequest;
                    toProto(message: _163.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryConnectionChannelsRequest): _163.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryConnectionChannelsResponse;
                    fromPartial(object: Partial<_163.QueryConnectionChannelsResponse>): _163.QueryConnectionChannelsResponse;
                    fromAmino(object: _163.QueryConnectionChannelsResponseAmino): _163.QueryConnectionChannelsResponse;
                    toAmino(message: _163.QueryConnectionChannelsResponse): _163.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _163.QueryConnectionChannelsResponseAminoMsg): _163.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _163.QueryConnectionChannelsResponse): _163.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryConnectionChannelsResponseProtoMsg): _163.QueryConnectionChannelsResponse;
                    toProto(message: _163.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryConnectionChannelsResponse): _163.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryChannelClientStateRequest;
                    fromPartial(object: Partial<_163.QueryChannelClientStateRequest>): _163.QueryChannelClientStateRequest;
                    fromAmino(object: _163.QueryChannelClientStateRequestAmino): _163.QueryChannelClientStateRequest;
                    toAmino(message: _163.QueryChannelClientStateRequest): _163.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _163.QueryChannelClientStateRequestAminoMsg): _163.QueryChannelClientStateRequest;
                    toAminoMsg(message: _163.QueryChannelClientStateRequest): _163.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryChannelClientStateRequestProtoMsg): _163.QueryChannelClientStateRequest;
                    toProto(message: _163.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryChannelClientStateRequest): _163.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryChannelClientStateResponse;
                    fromPartial(object: Partial<_163.QueryChannelClientStateResponse>): _163.QueryChannelClientStateResponse;
                    fromAmino(object: _163.QueryChannelClientStateResponseAmino): _163.QueryChannelClientStateResponse;
                    toAmino(message: _163.QueryChannelClientStateResponse): _163.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _163.QueryChannelClientStateResponseAminoMsg): _163.QueryChannelClientStateResponse;
                    toAminoMsg(message: _163.QueryChannelClientStateResponse): _163.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryChannelClientStateResponseProtoMsg): _163.QueryChannelClientStateResponse;
                    toProto(message: _163.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryChannelClientStateResponse): _163.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryChannelConsensusStateRequest;
                    fromPartial(object: Partial<_163.QueryChannelConsensusStateRequest>): _163.QueryChannelConsensusStateRequest;
                    fromAmino(object: _163.QueryChannelConsensusStateRequestAmino): _163.QueryChannelConsensusStateRequest;
                    toAmino(message: _163.QueryChannelConsensusStateRequest): _163.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _163.QueryChannelConsensusStateRequestAminoMsg): _163.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _163.QueryChannelConsensusStateRequest): _163.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryChannelConsensusStateRequestProtoMsg): _163.QueryChannelConsensusStateRequest;
                    toProto(message: _163.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryChannelConsensusStateRequest): _163.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryChannelConsensusStateResponse;
                    fromPartial(object: Partial<_163.QueryChannelConsensusStateResponse>): _163.QueryChannelConsensusStateResponse;
                    fromAmino(object: _163.QueryChannelConsensusStateResponseAmino): _163.QueryChannelConsensusStateResponse;
                    toAmino(message: _163.QueryChannelConsensusStateResponse): _163.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _163.QueryChannelConsensusStateResponseAminoMsg): _163.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _163.QueryChannelConsensusStateResponse): _163.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryChannelConsensusStateResponseProtoMsg): _163.QueryChannelConsensusStateResponse;
                    toProto(message: _163.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryChannelConsensusStateResponse): _163.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryPacketCommitmentRequest;
                    fromPartial(object: Partial<_163.QueryPacketCommitmentRequest>): _163.QueryPacketCommitmentRequest;
                    fromAmino(object: _163.QueryPacketCommitmentRequestAmino): _163.QueryPacketCommitmentRequest;
                    toAmino(message: _163.QueryPacketCommitmentRequest): _163.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _163.QueryPacketCommitmentRequestAminoMsg): _163.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _163.QueryPacketCommitmentRequest): _163.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryPacketCommitmentRequestProtoMsg): _163.QueryPacketCommitmentRequest;
                    toProto(message: _163.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryPacketCommitmentRequest): _163.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryPacketCommitmentResponse;
                    fromPartial(object: Partial<_163.QueryPacketCommitmentResponse>): _163.QueryPacketCommitmentResponse;
                    fromAmino(object: _163.QueryPacketCommitmentResponseAmino): _163.QueryPacketCommitmentResponse;
                    toAmino(message: _163.QueryPacketCommitmentResponse): _163.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _163.QueryPacketCommitmentResponseAminoMsg): _163.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _163.QueryPacketCommitmentResponse): _163.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryPacketCommitmentResponseProtoMsg): _163.QueryPacketCommitmentResponse;
                    toProto(message: _163.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryPacketCommitmentResponse): _163.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryPacketCommitmentsRequest;
                    fromPartial(object: Partial<_163.QueryPacketCommitmentsRequest>): _163.QueryPacketCommitmentsRequest;
                    fromAmino(object: _163.QueryPacketCommitmentsRequestAmino): _163.QueryPacketCommitmentsRequest;
                    toAmino(message: _163.QueryPacketCommitmentsRequest): _163.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _163.QueryPacketCommitmentsRequestAminoMsg): _163.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _163.QueryPacketCommitmentsRequest): _163.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryPacketCommitmentsRequestProtoMsg): _163.QueryPacketCommitmentsRequest;
                    toProto(message: _163.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryPacketCommitmentsRequest): _163.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryPacketCommitmentsResponse;
                    fromPartial(object: Partial<_163.QueryPacketCommitmentsResponse>): _163.QueryPacketCommitmentsResponse;
                    fromAmino(object: _163.QueryPacketCommitmentsResponseAmino): _163.QueryPacketCommitmentsResponse;
                    toAmino(message: _163.QueryPacketCommitmentsResponse): _163.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _163.QueryPacketCommitmentsResponseAminoMsg): _163.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _163.QueryPacketCommitmentsResponse): _163.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryPacketCommitmentsResponseProtoMsg): _163.QueryPacketCommitmentsResponse;
                    toProto(message: _163.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryPacketCommitmentsResponse): _163.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryPacketReceiptRequest;
                    fromPartial(object: Partial<_163.QueryPacketReceiptRequest>): _163.QueryPacketReceiptRequest;
                    fromAmino(object: _163.QueryPacketReceiptRequestAmino): _163.QueryPacketReceiptRequest;
                    toAmino(message: _163.QueryPacketReceiptRequest): _163.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _163.QueryPacketReceiptRequestAminoMsg): _163.QueryPacketReceiptRequest;
                    toAminoMsg(message: _163.QueryPacketReceiptRequest): _163.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryPacketReceiptRequestProtoMsg): _163.QueryPacketReceiptRequest;
                    toProto(message: _163.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryPacketReceiptRequest): _163.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryPacketReceiptResponse;
                    fromPartial(object: Partial<_163.QueryPacketReceiptResponse>): _163.QueryPacketReceiptResponse;
                    fromAmino(object: _163.QueryPacketReceiptResponseAmino): _163.QueryPacketReceiptResponse;
                    toAmino(message: _163.QueryPacketReceiptResponse): _163.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _163.QueryPacketReceiptResponseAminoMsg): _163.QueryPacketReceiptResponse;
                    toAminoMsg(message: _163.QueryPacketReceiptResponse): _163.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryPacketReceiptResponseProtoMsg): _163.QueryPacketReceiptResponse;
                    toProto(message: _163.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryPacketReceiptResponse): _163.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryPacketAcknowledgementRequest;
                    fromPartial(object: Partial<_163.QueryPacketAcknowledgementRequest>): _163.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _163.QueryPacketAcknowledgementRequestAmino): _163.QueryPacketAcknowledgementRequest;
                    toAmino(message: _163.QueryPacketAcknowledgementRequest): _163.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _163.QueryPacketAcknowledgementRequestAminoMsg): _163.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _163.QueryPacketAcknowledgementRequest): _163.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryPacketAcknowledgementRequestProtoMsg): _163.QueryPacketAcknowledgementRequest;
                    toProto(message: _163.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryPacketAcknowledgementRequest): _163.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryPacketAcknowledgementResponse;
                    fromPartial(object: Partial<_163.QueryPacketAcknowledgementResponse>): _163.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _163.QueryPacketAcknowledgementResponseAmino): _163.QueryPacketAcknowledgementResponse;
                    toAmino(message: _163.QueryPacketAcknowledgementResponse): _163.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _163.QueryPacketAcknowledgementResponseAminoMsg): _163.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _163.QueryPacketAcknowledgementResponse): _163.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryPacketAcknowledgementResponseProtoMsg): _163.QueryPacketAcknowledgementResponse;
                    toProto(message: _163.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryPacketAcknowledgementResponse): _163.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: Partial<_163.QueryPacketAcknowledgementsRequest>): _163.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _163.QueryPacketAcknowledgementsRequestAmino): _163.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _163.QueryPacketAcknowledgementsRequest): _163.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _163.QueryPacketAcknowledgementsRequestAminoMsg): _163.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _163.QueryPacketAcknowledgementsRequest): _163.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryPacketAcknowledgementsRequestProtoMsg): _163.QueryPacketAcknowledgementsRequest;
                    toProto(message: _163.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryPacketAcknowledgementsRequest): _163.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: Partial<_163.QueryPacketAcknowledgementsResponse>): _163.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _163.QueryPacketAcknowledgementsResponseAmino): _163.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _163.QueryPacketAcknowledgementsResponse): _163.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _163.QueryPacketAcknowledgementsResponseAminoMsg): _163.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _163.QueryPacketAcknowledgementsResponse): _163.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryPacketAcknowledgementsResponseProtoMsg): _163.QueryPacketAcknowledgementsResponse;
                    toProto(message: _163.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryPacketAcknowledgementsResponse): _163.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryUnreceivedPacketsRequest;
                    fromPartial(object: Partial<_163.QueryUnreceivedPacketsRequest>): _163.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _163.QueryUnreceivedPacketsRequestAmino): _163.QueryUnreceivedPacketsRequest;
                    toAmino(message: _163.QueryUnreceivedPacketsRequest): _163.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _163.QueryUnreceivedPacketsRequestAminoMsg): _163.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _163.QueryUnreceivedPacketsRequest): _163.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryUnreceivedPacketsRequestProtoMsg): _163.QueryUnreceivedPacketsRequest;
                    toProto(message: _163.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryUnreceivedPacketsRequest): _163.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryUnreceivedPacketsResponse;
                    fromPartial(object: Partial<_163.QueryUnreceivedPacketsResponse>): _163.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _163.QueryUnreceivedPacketsResponseAmino): _163.QueryUnreceivedPacketsResponse;
                    toAmino(message: _163.QueryUnreceivedPacketsResponse): _163.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _163.QueryUnreceivedPacketsResponseAminoMsg): _163.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _163.QueryUnreceivedPacketsResponse): _163.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryUnreceivedPacketsResponseProtoMsg): _163.QueryUnreceivedPacketsResponse;
                    toProto(message: _163.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryUnreceivedPacketsResponse): _163.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryUnreceivedAcksRequest;
                    fromPartial(object: Partial<_163.QueryUnreceivedAcksRequest>): _163.QueryUnreceivedAcksRequest;
                    fromAmino(object: _163.QueryUnreceivedAcksRequestAmino): _163.QueryUnreceivedAcksRequest;
                    toAmino(message: _163.QueryUnreceivedAcksRequest): _163.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _163.QueryUnreceivedAcksRequestAminoMsg): _163.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _163.QueryUnreceivedAcksRequest): _163.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryUnreceivedAcksRequestProtoMsg): _163.QueryUnreceivedAcksRequest;
                    toProto(message: _163.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryUnreceivedAcksRequest): _163.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryUnreceivedAcksResponse;
                    fromPartial(object: Partial<_163.QueryUnreceivedAcksResponse>): _163.QueryUnreceivedAcksResponse;
                    fromAmino(object: _163.QueryUnreceivedAcksResponseAmino): _163.QueryUnreceivedAcksResponse;
                    toAmino(message: _163.QueryUnreceivedAcksResponse): _163.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _163.QueryUnreceivedAcksResponseAminoMsg): _163.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _163.QueryUnreceivedAcksResponse): _163.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryUnreceivedAcksResponseProtoMsg): _163.QueryUnreceivedAcksResponse;
                    toProto(message: _163.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryUnreceivedAcksResponse): _163.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _163.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryNextSequenceReceiveRequest;
                    fromPartial(object: Partial<_163.QueryNextSequenceReceiveRequest>): _163.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _163.QueryNextSequenceReceiveRequestAmino): _163.QueryNextSequenceReceiveRequest;
                    toAmino(message: _163.QueryNextSequenceReceiveRequest): _163.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _163.QueryNextSequenceReceiveRequestAminoMsg): _163.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _163.QueryNextSequenceReceiveRequest): _163.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _163.QueryNextSequenceReceiveRequestProtoMsg): _163.QueryNextSequenceReceiveRequest;
                    toProto(message: _163.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _163.QueryNextSequenceReceiveRequest): _163.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _163.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _163.QueryNextSequenceReceiveResponse;
                    fromPartial(object: Partial<_163.QueryNextSequenceReceiveResponse>): _163.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _163.QueryNextSequenceReceiveResponseAmino): _163.QueryNextSequenceReceiveResponse;
                    toAmino(message: _163.QueryNextSequenceReceiveResponse): _163.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _163.QueryNextSequenceReceiveResponseAminoMsg): _163.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _163.QueryNextSequenceReceiveResponse): _163.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _163.QueryNextSequenceReceiveResponseProtoMsg): _163.QueryNextSequenceReceiveResponse;
                    toProto(message: _163.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _163.QueryNextSequenceReceiveResponse): _163.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _162.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.GenesisState;
                    fromPartial(object: Partial<_162.GenesisState>): _162.GenesisState;
                    fromAmino(object: _162.GenesisStateAmino): _162.GenesisState;
                    toAmino(message: _162.GenesisState): _162.GenesisStateAmino;
                    fromAminoMsg(object: _162.GenesisStateAminoMsg): _162.GenesisState;
                    toAminoMsg(message: _162.GenesisState): _162.GenesisStateAminoMsg;
                    fromProtoMsg(message: _162.GenesisStateProtoMsg): _162.GenesisState;
                    toProto(message: _162.GenesisState): Uint8Array;
                    toProtoMsg(message: _162.GenesisState): _162.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _162.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _162.PacketSequence;
                    fromPartial(object: Partial<_162.PacketSequence>): _162.PacketSequence;
                    fromAmino(object: _162.PacketSequenceAmino): _162.PacketSequence;
                    toAmino(message: _162.PacketSequence): _162.PacketSequenceAmino;
                    fromAminoMsg(object: _162.PacketSequenceAminoMsg): _162.PacketSequence;
                    toAminoMsg(message: _162.PacketSequence): _162.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _162.PacketSequenceProtoMsg): _162.PacketSequence;
                    toProto(message: _162.PacketSequence): Uint8Array;
                    toProtoMsg(message: _162.PacketSequence): _162.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _161.State;
                stateToJSON(object: _161.State): string;
                orderFromJSON(object: any): _161.Order;
                orderToJSON(object: _161.Order): string;
                State: typeof _161.State;
                StateSDKType: typeof _161.State;
                StateAmino: typeof _161.State;
                Order: typeof _161.Order;
                OrderSDKType: typeof _161.Order;
                OrderAmino: typeof _161.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _161.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _161.Channel;
                    fromPartial(object: Partial<_161.Channel>): _161.Channel;
                    fromAmino(object: _161.ChannelAmino): _161.Channel;
                    toAmino(message: _161.Channel): _161.ChannelAmino;
                    fromAminoMsg(object: _161.ChannelAminoMsg): _161.Channel;
                    toAminoMsg(message: _161.Channel): _161.ChannelAminoMsg;
                    fromProtoMsg(message: _161.ChannelProtoMsg): _161.Channel;
                    toProto(message: _161.Channel): Uint8Array;
                    toProtoMsg(message: _161.Channel): _161.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _161.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _161.IdentifiedChannel;
                    fromPartial(object: Partial<_161.IdentifiedChannel>): _161.IdentifiedChannel;
                    fromAmino(object: _161.IdentifiedChannelAmino): _161.IdentifiedChannel;
                    toAmino(message: _161.IdentifiedChannel): _161.IdentifiedChannelAmino;
                    fromAminoMsg(object: _161.IdentifiedChannelAminoMsg): _161.IdentifiedChannel;
                    toAminoMsg(message: _161.IdentifiedChannel): _161.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _161.IdentifiedChannelProtoMsg): _161.IdentifiedChannel;
                    toProto(message: _161.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _161.IdentifiedChannel): _161.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _161.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _161.Counterparty;
                    fromPartial(object: Partial<_161.Counterparty>): _161.Counterparty;
                    fromAmino(object: _161.CounterpartyAmino): _161.Counterparty;
                    toAmino(message: _161.Counterparty): _161.CounterpartyAmino;
                    fromAminoMsg(object: _161.CounterpartyAminoMsg): _161.Counterparty;
                    toAminoMsg(message: _161.Counterparty): _161.CounterpartyAminoMsg;
                    fromProtoMsg(message: _161.CounterpartyProtoMsg): _161.Counterparty;
                    toProto(message: _161.Counterparty): Uint8Array;
                    toProtoMsg(message: _161.Counterparty): _161.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _161.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _161.Packet;
                    fromPartial(object: Partial<_161.Packet>): _161.Packet;
                    fromAmino(object: _161.PacketAmino): _161.Packet;
                    toAmino(message: _161.Packet): _161.PacketAmino;
                    fromAminoMsg(object: _161.PacketAminoMsg): _161.Packet;
                    toAminoMsg(message: _161.Packet): _161.PacketAminoMsg;
                    fromProtoMsg(message: _161.PacketProtoMsg): _161.Packet;
                    toProto(message: _161.Packet): Uint8Array;
                    toProtoMsg(message: _161.Packet): _161.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _161.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _161.PacketState;
                    fromPartial(object: Partial<_161.PacketState>): _161.PacketState;
                    fromAmino(object: _161.PacketStateAmino): _161.PacketState;
                    toAmino(message: _161.PacketState): _161.PacketStateAmino;
                    fromAminoMsg(object: _161.PacketStateAminoMsg): _161.PacketState;
                    toAminoMsg(message: _161.PacketState): _161.PacketStateAminoMsg;
                    fromProtoMsg(message: _161.PacketStateProtoMsg): _161.PacketState;
                    toProto(message: _161.PacketState): Uint8Array;
                    toProtoMsg(message: _161.PacketState): _161.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _161.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _161.Acknowledgement;
                    fromPartial(object: Partial<_161.Acknowledgement>): _161.Acknowledgement;
                    fromAmino(object: _161.AcknowledgementAmino): _161.Acknowledgement;
                    toAmino(message: _161.Acknowledgement): _161.AcknowledgementAmino;
                    fromAminoMsg(object: _161.AcknowledgementAminoMsg): _161.Acknowledgement;
                    toAminoMsg(message: _161.Acknowledgement): _161.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _161.AcknowledgementProtoMsg): _161.Acknowledgement;
                    toProto(message: _161.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _161.Acknowledgement): _161.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _470.MsgClientImpl;
                QueryClientImpl: typeof _466.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _167.QueryClientStateRequest): Promise<_167.QueryClientStateResponse>;
                    clientStates(request?: _167.QueryClientStatesRequest): Promise<_167.QueryClientStatesResponse>;
                    consensusState(request: _167.QueryConsensusStateRequest): Promise<_167.QueryConsensusStateResponse>;
                    consensusStates(request: _167.QueryConsensusStatesRequest): Promise<_167.QueryConsensusStatesResponse>;
                    clientStatus(request: _167.QueryClientStatusRequest): Promise<_167.QueryClientStatusResponse>;
                    clientParams(request?: _167.QueryClientParamsRequest): Promise<_167.QueryClientParamsResponse>;
                    upgradedClientState(request?: _167.QueryUpgradedClientStateRequest): Promise<_167.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _167.QueryUpgradedConsensusStateRequest): Promise<_167.QueryUpgradedConsensusStateResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _168.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _168.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _168.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _168.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _168.MsgCreateClient): {
                            typeUrl: string;
                            value: _168.MsgCreateClient;
                        };
                        updateClient(value: _168.MsgUpdateClient): {
                            typeUrl: string;
                            value: _168.MsgUpdateClient;
                        };
                        upgradeClient(value: _168.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _168.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _168.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _168.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _168.MsgCreateClient): {
                            typeUrl: string;
                            value: _168.MsgCreateClient;
                        };
                        updateClient(value: _168.MsgUpdateClient): {
                            typeUrl: string;
                            value: _168.MsgUpdateClient;
                        };
                        upgradeClient(value: _168.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _168.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _168.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _168.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _168.MsgCreateClient) => _168.MsgCreateClientAmino;
                        fromAmino: (object: _168.MsgCreateClientAmino) => _168.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _168.MsgUpdateClient) => _168.MsgUpdateClientAmino;
                        fromAmino: (object: _168.MsgUpdateClientAmino) => _168.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _168.MsgUpgradeClient) => _168.MsgUpgradeClientAmino;
                        fromAmino: (object: _168.MsgUpgradeClientAmino) => _168.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _168.MsgSubmitMisbehaviour) => _168.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _168.MsgSubmitMisbehaviourAmino) => _168.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _168.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.MsgCreateClient;
                    fromPartial(object: Partial<_168.MsgCreateClient>): _168.MsgCreateClient;
                    fromAmino(object: _168.MsgCreateClientAmino): _168.MsgCreateClient;
                    toAmino(message: _168.MsgCreateClient): _168.MsgCreateClientAmino;
                    fromAminoMsg(object: _168.MsgCreateClientAminoMsg): _168.MsgCreateClient;
                    toAminoMsg(message: _168.MsgCreateClient): _168.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _168.MsgCreateClientProtoMsg): _168.MsgCreateClient;
                    toProto(message: _168.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _168.MsgCreateClient): _168.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _168.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.MsgCreateClientResponse;
                    fromPartial(_: Partial<_168.MsgCreateClientResponse>): _168.MsgCreateClientResponse;
                    fromAmino(_: _168.MsgCreateClientResponseAmino): _168.MsgCreateClientResponse;
                    toAmino(_: _168.MsgCreateClientResponse): _168.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _168.MsgCreateClientResponseAminoMsg): _168.MsgCreateClientResponse;
                    toAminoMsg(message: _168.MsgCreateClientResponse): _168.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgCreateClientResponseProtoMsg): _168.MsgCreateClientResponse;
                    toProto(message: _168.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgCreateClientResponse): _168.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _168.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.MsgUpdateClient;
                    fromPartial(object: Partial<_168.MsgUpdateClient>): _168.MsgUpdateClient;
                    fromAmino(object: _168.MsgUpdateClientAmino): _168.MsgUpdateClient;
                    toAmino(message: _168.MsgUpdateClient): _168.MsgUpdateClientAmino;
                    fromAminoMsg(object: _168.MsgUpdateClientAminoMsg): _168.MsgUpdateClient;
                    toAminoMsg(message: _168.MsgUpdateClient): _168.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _168.MsgUpdateClientProtoMsg): _168.MsgUpdateClient;
                    toProto(message: _168.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _168.MsgUpdateClient): _168.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _168.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.MsgUpdateClientResponse;
                    fromPartial(_: Partial<_168.MsgUpdateClientResponse>): _168.MsgUpdateClientResponse;
                    fromAmino(_: _168.MsgUpdateClientResponseAmino): _168.MsgUpdateClientResponse;
                    toAmino(_: _168.MsgUpdateClientResponse): _168.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _168.MsgUpdateClientResponseAminoMsg): _168.MsgUpdateClientResponse;
                    toAminoMsg(message: _168.MsgUpdateClientResponse): _168.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgUpdateClientResponseProtoMsg): _168.MsgUpdateClientResponse;
                    toProto(message: _168.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgUpdateClientResponse): _168.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _168.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.MsgUpgradeClient;
                    fromPartial(object: Partial<_168.MsgUpgradeClient>): _168.MsgUpgradeClient;
                    fromAmino(object: _168.MsgUpgradeClientAmino): _168.MsgUpgradeClient;
                    toAmino(message: _168.MsgUpgradeClient): _168.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _168.MsgUpgradeClientAminoMsg): _168.MsgUpgradeClient;
                    toAminoMsg(message: _168.MsgUpgradeClient): _168.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _168.MsgUpgradeClientProtoMsg): _168.MsgUpgradeClient;
                    toProto(message: _168.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _168.MsgUpgradeClient): _168.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _168.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.MsgUpgradeClientResponse;
                    fromPartial(_: Partial<_168.MsgUpgradeClientResponse>): _168.MsgUpgradeClientResponse;
                    fromAmino(_: _168.MsgUpgradeClientResponseAmino): _168.MsgUpgradeClientResponse;
                    toAmino(_: _168.MsgUpgradeClientResponse): _168.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _168.MsgUpgradeClientResponseAminoMsg): _168.MsgUpgradeClientResponse;
                    toAminoMsg(message: _168.MsgUpgradeClientResponse): _168.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgUpgradeClientResponseProtoMsg): _168.MsgUpgradeClientResponse;
                    toProto(message: _168.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgUpgradeClientResponse): _168.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _168.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.MsgSubmitMisbehaviour;
                    fromPartial(object: Partial<_168.MsgSubmitMisbehaviour>): _168.MsgSubmitMisbehaviour;
                    fromAmino(object: _168.MsgSubmitMisbehaviourAmino): _168.MsgSubmitMisbehaviour;
                    toAmino(message: _168.MsgSubmitMisbehaviour): _168.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _168.MsgSubmitMisbehaviourAminoMsg): _168.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _168.MsgSubmitMisbehaviour): _168.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _168.MsgSubmitMisbehaviourProtoMsg): _168.MsgSubmitMisbehaviour;
                    toProto(message: _168.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _168.MsgSubmitMisbehaviour): _168.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _168.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _168.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: Partial<_168.MsgSubmitMisbehaviourResponse>): _168.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _168.MsgSubmitMisbehaviourResponseAmino): _168.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _168.MsgSubmitMisbehaviourResponse): _168.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _168.MsgSubmitMisbehaviourResponseAminoMsg): _168.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _168.MsgSubmitMisbehaviourResponse): _168.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _168.MsgSubmitMisbehaviourResponseProtoMsg): _168.MsgSubmitMisbehaviourResponse;
                    toProto(message: _168.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _168.MsgSubmitMisbehaviourResponse): _168.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryClientStateRequest;
                    fromPartial(object: Partial<_167.QueryClientStateRequest>): _167.QueryClientStateRequest;
                    fromAmino(object: _167.QueryClientStateRequestAmino): _167.QueryClientStateRequest;
                    toAmino(message: _167.QueryClientStateRequest): _167.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _167.QueryClientStateRequestAminoMsg): _167.QueryClientStateRequest;
                    toAminoMsg(message: _167.QueryClientStateRequest): _167.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryClientStateRequestProtoMsg): _167.QueryClientStateRequest;
                    toProto(message: _167.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryClientStateRequest): _167.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryClientStateResponse;
                    fromPartial(object: Partial<_167.QueryClientStateResponse>): _167.QueryClientStateResponse;
                    fromAmino(object: _167.QueryClientStateResponseAmino): _167.QueryClientStateResponse;
                    toAmino(message: _167.QueryClientStateResponse): _167.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _167.QueryClientStateResponseAminoMsg): _167.QueryClientStateResponse;
                    toAminoMsg(message: _167.QueryClientStateResponse): _167.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryClientStateResponseProtoMsg): _167.QueryClientStateResponse;
                    toProto(message: _167.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryClientStateResponse): _167.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryClientStatesRequest;
                    fromPartial(object: Partial<_167.QueryClientStatesRequest>): _167.QueryClientStatesRequest;
                    fromAmino(object: _167.QueryClientStatesRequestAmino): _167.QueryClientStatesRequest;
                    toAmino(message: _167.QueryClientStatesRequest): _167.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _167.QueryClientStatesRequestAminoMsg): _167.QueryClientStatesRequest;
                    toAminoMsg(message: _167.QueryClientStatesRequest): _167.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryClientStatesRequestProtoMsg): _167.QueryClientStatesRequest;
                    toProto(message: _167.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryClientStatesRequest): _167.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryClientStatesResponse;
                    fromPartial(object: Partial<_167.QueryClientStatesResponse>): _167.QueryClientStatesResponse;
                    fromAmino(object: _167.QueryClientStatesResponseAmino): _167.QueryClientStatesResponse;
                    toAmino(message: _167.QueryClientStatesResponse): _167.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _167.QueryClientStatesResponseAminoMsg): _167.QueryClientStatesResponse;
                    toAminoMsg(message: _167.QueryClientStatesResponse): _167.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryClientStatesResponseProtoMsg): _167.QueryClientStatesResponse;
                    toProto(message: _167.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryClientStatesResponse): _167.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryConsensusStateRequest;
                    fromPartial(object: Partial<_167.QueryConsensusStateRequest>): _167.QueryConsensusStateRequest;
                    fromAmino(object: _167.QueryConsensusStateRequestAmino): _167.QueryConsensusStateRequest;
                    toAmino(message: _167.QueryConsensusStateRequest): _167.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _167.QueryConsensusStateRequestAminoMsg): _167.QueryConsensusStateRequest;
                    toAminoMsg(message: _167.QueryConsensusStateRequest): _167.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryConsensusStateRequestProtoMsg): _167.QueryConsensusStateRequest;
                    toProto(message: _167.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryConsensusStateRequest): _167.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryConsensusStateResponse;
                    fromPartial(object: Partial<_167.QueryConsensusStateResponse>): _167.QueryConsensusStateResponse;
                    fromAmino(object: _167.QueryConsensusStateResponseAmino): _167.QueryConsensusStateResponse;
                    toAmino(message: _167.QueryConsensusStateResponse): _167.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _167.QueryConsensusStateResponseAminoMsg): _167.QueryConsensusStateResponse;
                    toAminoMsg(message: _167.QueryConsensusStateResponse): _167.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryConsensusStateResponseProtoMsg): _167.QueryConsensusStateResponse;
                    toProto(message: _167.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryConsensusStateResponse): _167.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryConsensusStatesRequest;
                    fromPartial(object: Partial<_167.QueryConsensusStatesRequest>): _167.QueryConsensusStatesRequest;
                    fromAmino(object: _167.QueryConsensusStatesRequestAmino): _167.QueryConsensusStatesRequest;
                    toAmino(message: _167.QueryConsensusStatesRequest): _167.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _167.QueryConsensusStatesRequestAminoMsg): _167.QueryConsensusStatesRequest;
                    toAminoMsg(message: _167.QueryConsensusStatesRequest): _167.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryConsensusStatesRequestProtoMsg): _167.QueryConsensusStatesRequest;
                    toProto(message: _167.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryConsensusStatesRequest): _167.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryConsensusStatesResponse;
                    fromPartial(object: Partial<_167.QueryConsensusStatesResponse>): _167.QueryConsensusStatesResponse;
                    fromAmino(object: _167.QueryConsensusStatesResponseAmino): _167.QueryConsensusStatesResponse;
                    toAmino(message: _167.QueryConsensusStatesResponse): _167.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _167.QueryConsensusStatesResponseAminoMsg): _167.QueryConsensusStatesResponse;
                    toAminoMsg(message: _167.QueryConsensusStatesResponse): _167.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryConsensusStatesResponseProtoMsg): _167.QueryConsensusStatesResponse;
                    toProto(message: _167.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryConsensusStatesResponse): _167.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _167.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryClientStatusRequest;
                    fromPartial(object: Partial<_167.QueryClientStatusRequest>): _167.QueryClientStatusRequest;
                    fromAmino(object: _167.QueryClientStatusRequestAmino): _167.QueryClientStatusRequest;
                    toAmino(message: _167.QueryClientStatusRequest): _167.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _167.QueryClientStatusRequestAminoMsg): _167.QueryClientStatusRequest;
                    toAminoMsg(message: _167.QueryClientStatusRequest): _167.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryClientStatusRequestProtoMsg): _167.QueryClientStatusRequest;
                    toProto(message: _167.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryClientStatusRequest): _167.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryClientStatusResponse;
                    fromPartial(object: Partial<_167.QueryClientStatusResponse>): _167.QueryClientStatusResponse;
                    fromAmino(object: _167.QueryClientStatusResponseAmino): _167.QueryClientStatusResponse;
                    toAmino(message: _167.QueryClientStatusResponse): _167.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _167.QueryClientStatusResponseAminoMsg): _167.QueryClientStatusResponse;
                    toAminoMsg(message: _167.QueryClientStatusResponse): _167.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryClientStatusResponseProtoMsg): _167.QueryClientStatusResponse;
                    toProto(message: _167.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryClientStatusResponse): _167.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _167.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryClientParamsRequest;
                    fromPartial(_: Partial<_167.QueryClientParamsRequest>): _167.QueryClientParamsRequest;
                    fromAmino(_: _167.QueryClientParamsRequestAmino): _167.QueryClientParamsRequest;
                    toAmino(_: _167.QueryClientParamsRequest): _167.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _167.QueryClientParamsRequestAminoMsg): _167.QueryClientParamsRequest;
                    toAminoMsg(message: _167.QueryClientParamsRequest): _167.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryClientParamsRequestProtoMsg): _167.QueryClientParamsRequest;
                    toProto(message: _167.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryClientParamsRequest): _167.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryClientParamsResponse;
                    fromPartial(object: Partial<_167.QueryClientParamsResponse>): _167.QueryClientParamsResponse;
                    fromAmino(object: _167.QueryClientParamsResponseAmino): _167.QueryClientParamsResponse;
                    toAmino(message: _167.QueryClientParamsResponse): _167.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _167.QueryClientParamsResponseAminoMsg): _167.QueryClientParamsResponse;
                    toAminoMsg(message: _167.QueryClientParamsResponse): _167.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryClientParamsResponseProtoMsg): _167.QueryClientParamsResponse;
                    toProto(message: _167.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryClientParamsResponse): _167.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _167.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryUpgradedClientStateRequest;
                    fromPartial(_: Partial<_167.QueryUpgradedClientStateRequest>): _167.QueryUpgradedClientStateRequest;
                    fromAmino(_: _167.QueryUpgradedClientStateRequestAmino): _167.QueryUpgradedClientStateRequest;
                    toAmino(_: _167.QueryUpgradedClientStateRequest): _167.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _167.QueryUpgradedClientStateRequestAminoMsg): _167.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _167.QueryUpgradedClientStateRequest): _167.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryUpgradedClientStateRequestProtoMsg): _167.QueryUpgradedClientStateRequest;
                    toProto(message: _167.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryUpgradedClientStateRequest): _167.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryUpgradedClientStateResponse;
                    fromPartial(object: Partial<_167.QueryUpgradedClientStateResponse>): _167.QueryUpgradedClientStateResponse;
                    fromAmino(object: _167.QueryUpgradedClientStateResponseAmino): _167.QueryUpgradedClientStateResponse;
                    toAmino(message: _167.QueryUpgradedClientStateResponse): _167.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _167.QueryUpgradedClientStateResponseAminoMsg): _167.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _167.QueryUpgradedClientStateResponse): _167.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryUpgradedClientStateResponseProtoMsg): _167.QueryUpgradedClientStateResponse;
                    toProto(message: _167.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryUpgradedClientStateResponse): _167.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _167.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: Partial<_167.QueryUpgradedConsensusStateRequest>): _167.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _167.QueryUpgradedConsensusStateRequestAmino): _167.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _167.QueryUpgradedConsensusStateRequest): _167.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _167.QueryUpgradedConsensusStateRequestAminoMsg): _167.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _167.QueryUpgradedConsensusStateRequest): _167.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _167.QueryUpgradedConsensusStateRequestProtoMsg): _167.QueryUpgradedConsensusStateRequest;
                    toProto(message: _167.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _167.QueryUpgradedConsensusStateRequest): _167.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _167.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _167.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: Partial<_167.QueryUpgradedConsensusStateResponse>): _167.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _167.QueryUpgradedConsensusStateResponseAmino): _167.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _167.QueryUpgradedConsensusStateResponse): _167.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _167.QueryUpgradedConsensusStateResponseAminoMsg): _167.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _167.QueryUpgradedConsensusStateResponse): _167.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _167.QueryUpgradedConsensusStateResponseProtoMsg): _167.QueryUpgradedConsensusStateResponse;
                    toProto(message: _167.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _167.QueryUpgradedConsensusStateResponse): _167.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _166.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _166.GenesisState;
                    fromPartial(object: Partial<_166.GenesisState>): _166.GenesisState;
                    fromAmino(object: _166.GenesisStateAmino): _166.GenesisState;
                    toAmino(message: _166.GenesisState): _166.GenesisStateAmino;
                    fromAminoMsg(object: _166.GenesisStateAminoMsg): _166.GenesisState;
                    toAminoMsg(message: _166.GenesisState): _166.GenesisStateAminoMsg;
                    fromProtoMsg(message: _166.GenesisStateProtoMsg): _166.GenesisState;
                    toProto(message: _166.GenesisState): Uint8Array;
                    toProtoMsg(message: _166.GenesisState): _166.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _166.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _166.GenesisMetadata;
                    fromPartial(object: Partial<_166.GenesisMetadata>): _166.GenesisMetadata;
                    fromAmino(object: _166.GenesisMetadataAmino): _166.GenesisMetadata;
                    toAmino(message: _166.GenesisMetadata): _166.GenesisMetadataAmino;
                    fromAminoMsg(object: _166.GenesisMetadataAminoMsg): _166.GenesisMetadata;
                    toAminoMsg(message: _166.GenesisMetadata): _166.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _166.GenesisMetadataProtoMsg): _166.GenesisMetadata;
                    toProto(message: _166.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _166.GenesisMetadata): _166.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _166.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _166.IdentifiedGenesisMetadata;
                    fromPartial(object: Partial<_166.IdentifiedGenesisMetadata>): _166.IdentifiedGenesisMetadata;
                    fromAmino(object: _166.IdentifiedGenesisMetadataAmino): _166.IdentifiedGenesisMetadata;
                    toAmino(message: _166.IdentifiedGenesisMetadata): _166.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _166.IdentifiedGenesisMetadataAminoMsg): _166.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _166.IdentifiedGenesisMetadata): _166.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _166.IdentifiedGenesisMetadataProtoMsg): _166.IdentifiedGenesisMetadata;
                    toProto(message: _166.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _166.IdentifiedGenesisMetadata): _166.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _165.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.IdentifiedClientState;
                    fromPartial(object: Partial<_165.IdentifiedClientState>): _165.IdentifiedClientState;
                    fromAmino(object: _165.IdentifiedClientStateAmino): _165.IdentifiedClientState;
                    toAmino(message: _165.IdentifiedClientState): _165.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _165.IdentifiedClientStateAminoMsg): _165.IdentifiedClientState;
                    toAminoMsg(message: _165.IdentifiedClientState): _165.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _165.IdentifiedClientStateProtoMsg): _165.IdentifiedClientState;
                    toProto(message: _165.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _165.IdentifiedClientState): _165.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _165.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.ConsensusStateWithHeight;
                    fromPartial(object: Partial<_165.ConsensusStateWithHeight>): _165.ConsensusStateWithHeight;
                    fromAmino(object: _165.ConsensusStateWithHeightAmino): _165.ConsensusStateWithHeight;
                    toAmino(message: _165.ConsensusStateWithHeight): _165.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _165.ConsensusStateWithHeightAminoMsg): _165.ConsensusStateWithHeight;
                    toAminoMsg(message: _165.ConsensusStateWithHeight): _165.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _165.ConsensusStateWithHeightProtoMsg): _165.ConsensusStateWithHeight;
                    toProto(message: _165.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _165.ConsensusStateWithHeight): _165.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _165.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.ClientConsensusStates;
                    fromPartial(object: Partial<_165.ClientConsensusStates>): _165.ClientConsensusStates;
                    fromAmino(object: _165.ClientConsensusStatesAmino): _165.ClientConsensusStates;
                    toAmino(message: _165.ClientConsensusStates): _165.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _165.ClientConsensusStatesAminoMsg): _165.ClientConsensusStates;
                    toAminoMsg(message: _165.ClientConsensusStates): _165.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _165.ClientConsensusStatesProtoMsg): _165.ClientConsensusStates;
                    toProto(message: _165.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _165.ClientConsensusStates): _165.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _165.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.ClientUpdateProposal;
                    fromPartial(object: Partial<_165.ClientUpdateProposal>): _165.ClientUpdateProposal;
                    fromAmino(object: _165.ClientUpdateProposalAmino): _165.ClientUpdateProposal;
                    toAmino(message: _165.ClientUpdateProposal): _165.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _165.ClientUpdateProposalAminoMsg): _165.ClientUpdateProposal;
                    toAminoMsg(message: _165.ClientUpdateProposal): _165.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _165.ClientUpdateProposalProtoMsg): _165.ClientUpdateProposal;
                    toProto(message: _165.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _165.ClientUpdateProposal): _165.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _165.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.UpgradeProposal;
                    fromPartial(object: Partial<_165.UpgradeProposal>): _165.UpgradeProposal;
                    fromAmino(object: _165.UpgradeProposalAmino): _165.UpgradeProposal;
                    toAmino(message: _165.UpgradeProposal): _165.UpgradeProposalAmino;
                    fromAminoMsg(object: _165.UpgradeProposalAminoMsg): _165.UpgradeProposal;
                    toAminoMsg(message: _165.UpgradeProposal): _165.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _165.UpgradeProposalProtoMsg): _165.UpgradeProposal;
                    toProto(message: _165.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _165.UpgradeProposal): _165.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _165.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.Height;
                    fromPartial(object: Partial<_165.Height>): _165.Height;
                    fromAmino(object: _165.HeightAmino): _165.Height;
                    toAmino(message: _165.Height): _165.HeightAmino;
                    fromAminoMsg(object: _165.HeightAminoMsg): _165.Height;
                    toAminoMsg(message: _165.Height): _165.HeightAminoMsg;
                    fromProtoMsg(message: _165.HeightProtoMsg): _165.Height;
                    toProto(message: _165.Height): Uint8Array;
                    toProtoMsg(message: _165.Height): _165.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _165.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _165.Params;
                    fromPartial(object: Partial<_165.Params>): _165.Params;
                    fromAmino(object: _165.ParamsAmino): _165.Params;
                    toAmino(message: _165.Params): _165.ParamsAmino;
                    fromAminoMsg(object: _165.ParamsAminoMsg): _165.Params;
                    toAminoMsg(message: _165.Params): _165.ParamsAminoMsg;
                    fromProtoMsg(message: _165.ParamsProtoMsg): _165.Params;
                    toProto(message: _165.Params): Uint8Array;
                    toProtoMsg(message: _165.Params): _165.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _169.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _169.MerkleRoot;
                    fromPartial(object: Partial<_169.MerkleRoot>): _169.MerkleRoot;
                    fromAmino(object: _169.MerkleRootAmino): _169.MerkleRoot;
                    toAmino(message: _169.MerkleRoot): _169.MerkleRootAmino;
                    fromAminoMsg(object: _169.MerkleRootAminoMsg): _169.MerkleRoot;
                    toAminoMsg(message: _169.MerkleRoot): _169.MerkleRootAminoMsg;
                    fromProtoMsg(message: _169.MerkleRootProtoMsg): _169.MerkleRoot;
                    toProto(message: _169.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _169.MerkleRoot): _169.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _169.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _169.MerklePrefix;
                    fromPartial(object: Partial<_169.MerklePrefix>): _169.MerklePrefix;
                    fromAmino(object: _169.MerklePrefixAmino): _169.MerklePrefix;
                    toAmino(message: _169.MerklePrefix): _169.MerklePrefixAmino;
                    fromAminoMsg(object: _169.MerklePrefixAminoMsg): _169.MerklePrefix;
                    toAminoMsg(message: _169.MerklePrefix): _169.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _169.MerklePrefixProtoMsg): _169.MerklePrefix;
                    toProto(message: _169.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _169.MerklePrefix): _169.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _169.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _169.MerklePath;
                    fromPartial(object: Partial<_169.MerklePath>): _169.MerklePath;
                    fromAmino(object: _169.MerklePathAmino): _169.MerklePath;
                    toAmino(message: _169.MerklePath): _169.MerklePathAmino;
                    fromAminoMsg(object: _169.MerklePathAminoMsg): _169.MerklePath;
                    toAminoMsg(message: _169.MerklePath): _169.MerklePathAminoMsg;
                    fromProtoMsg(message: _169.MerklePathProtoMsg): _169.MerklePath;
                    toProto(message: _169.MerklePath): Uint8Array;
                    toProtoMsg(message: _169.MerklePath): _169.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _169.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _169.MerkleProof;
                    fromPartial(object: Partial<_169.MerkleProof>): _169.MerkleProof;
                    fromAmino(object: _169.MerkleProofAmino): _169.MerkleProof;
                    toAmino(message: _169.MerkleProof): _169.MerkleProofAmino;
                    fromAminoMsg(object: _169.MerkleProofAminoMsg): _169.MerkleProof;
                    toAminoMsg(message: _169.MerkleProof): _169.MerkleProofAminoMsg;
                    fromProtoMsg(message: _169.MerkleProofProtoMsg): _169.MerkleProof;
                    toProto(message: _169.MerkleProof): Uint8Array;
                    toProtoMsg(message: _169.MerkleProof): _169.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _471.MsgClientImpl;
                QueryClientImpl: typeof _467.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _172.QueryConnectionRequest): Promise<_172.QueryConnectionResponse>;
                    connections(request?: _172.QueryConnectionsRequest): Promise<_172.QueryConnectionsResponse>;
                    clientConnections(request: _172.QueryClientConnectionsRequest): Promise<_172.QueryClientConnectionsResponse>;
                    connectionClientState(request: _172.QueryConnectionClientStateRequest): Promise<_172.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _172.QueryConnectionConsensusStateRequest): Promise<_172.QueryConnectionConsensusStateResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _173.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _173.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _173.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _173.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _173.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _173.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _173.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _173.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _173.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _173.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _173.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _173.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _173.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _173.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _173.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _173.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _173.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _173.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _173.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _173.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _173.MsgConnectionOpenInit) => _173.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _173.MsgConnectionOpenInitAmino) => _173.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _173.MsgConnectionOpenTry) => _173.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _173.MsgConnectionOpenTryAmino) => _173.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _173.MsgConnectionOpenAck) => _173.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _173.MsgConnectionOpenAckAmino) => _173.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _173.MsgConnectionOpenConfirm) => _173.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _173.MsgConnectionOpenConfirmAmino) => _173.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _173.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _173.MsgConnectionOpenInit;
                    fromPartial(object: Partial<_173.MsgConnectionOpenInit>): _173.MsgConnectionOpenInit;
                    fromAmino(object: _173.MsgConnectionOpenInitAmino): _173.MsgConnectionOpenInit;
                    toAmino(message: _173.MsgConnectionOpenInit): _173.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _173.MsgConnectionOpenInitAminoMsg): _173.MsgConnectionOpenInit;
                    toAminoMsg(message: _173.MsgConnectionOpenInit): _173.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _173.MsgConnectionOpenInitProtoMsg): _173.MsgConnectionOpenInit;
                    toProto(message: _173.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _173.MsgConnectionOpenInit): _173.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _173.MsgConnectionOpenInitResponse;
                    fromPartial(_: Partial<_173.MsgConnectionOpenInitResponse>): _173.MsgConnectionOpenInitResponse;
                    fromAmino(_: _173.MsgConnectionOpenInitResponseAmino): _173.MsgConnectionOpenInitResponse;
                    toAmino(_: _173.MsgConnectionOpenInitResponse): _173.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _173.MsgConnectionOpenInitResponseAminoMsg): _173.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _173.MsgConnectionOpenInitResponse): _173.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgConnectionOpenInitResponseProtoMsg): _173.MsgConnectionOpenInitResponse;
                    toProto(message: _173.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgConnectionOpenInitResponse): _173.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _173.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _173.MsgConnectionOpenTry;
                    fromPartial(object: Partial<_173.MsgConnectionOpenTry>): _173.MsgConnectionOpenTry;
                    fromAmino(object: _173.MsgConnectionOpenTryAmino): _173.MsgConnectionOpenTry;
                    toAmino(message: _173.MsgConnectionOpenTry): _173.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _173.MsgConnectionOpenTryAminoMsg): _173.MsgConnectionOpenTry;
                    toAminoMsg(message: _173.MsgConnectionOpenTry): _173.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _173.MsgConnectionOpenTryProtoMsg): _173.MsgConnectionOpenTry;
                    toProto(message: _173.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _173.MsgConnectionOpenTry): _173.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _173.MsgConnectionOpenTryResponse;
                    fromPartial(_: Partial<_173.MsgConnectionOpenTryResponse>): _173.MsgConnectionOpenTryResponse;
                    fromAmino(_: _173.MsgConnectionOpenTryResponseAmino): _173.MsgConnectionOpenTryResponse;
                    toAmino(_: _173.MsgConnectionOpenTryResponse): _173.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _173.MsgConnectionOpenTryResponseAminoMsg): _173.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _173.MsgConnectionOpenTryResponse): _173.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgConnectionOpenTryResponseProtoMsg): _173.MsgConnectionOpenTryResponse;
                    toProto(message: _173.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgConnectionOpenTryResponse): _173.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _173.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _173.MsgConnectionOpenAck;
                    fromPartial(object: Partial<_173.MsgConnectionOpenAck>): _173.MsgConnectionOpenAck;
                    fromAmino(object: _173.MsgConnectionOpenAckAmino): _173.MsgConnectionOpenAck;
                    toAmino(message: _173.MsgConnectionOpenAck): _173.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _173.MsgConnectionOpenAckAminoMsg): _173.MsgConnectionOpenAck;
                    toAminoMsg(message: _173.MsgConnectionOpenAck): _173.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _173.MsgConnectionOpenAckProtoMsg): _173.MsgConnectionOpenAck;
                    toProto(message: _173.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _173.MsgConnectionOpenAck): _173.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _173.MsgConnectionOpenAckResponse;
                    fromPartial(_: Partial<_173.MsgConnectionOpenAckResponse>): _173.MsgConnectionOpenAckResponse;
                    fromAmino(_: _173.MsgConnectionOpenAckResponseAmino): _173.MsgConnectionOpenAckResponse;
                    toAmino(_: _173.MsgConnectionOpenAckResponse): _173.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _173.MsgConnectionOpenAckResponseAminoMsg): _173.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _173.MsgConnectionOpenAckResponse): _173.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgConnectionOpenAckResponseProtoMsg): _173.MsgConnectionOpenAckResponse;
                    toProto(message: _173.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgConnectionOpenAckResponse): _173.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _173.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _173.MsgConnectionOpenConfirm;
                    fromPartial(object: Partial<_173.MsgConnectionOpenConfirm>): _173.MsgConnectionOpenConfirm;
                    fromAmino(object: _173.MsgConnectionOpenConfirmAmino): _173.MsgConnectionOpenConfirm;
                    toAmino(message: _173.MsgConnectionOpenConfirm): _173.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _173.MsgConnectionOpenConfirmAminoMsg): _173.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _173.MsgConnectionOpenConfirm): _173.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _173.MsgConnectionOpenConfirmProtoMsg): _173.MsgConnectionOpenConfirm;
                    toProto(message: _173.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _173.MsgConnectionOpenConfirm): _173.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _173.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _173.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: Partial<_173.MsgConnectionOpenConfirmResponse>): _173.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _173.MsgConnectionOpenConfirmResponseAmino): _173.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _173.MsgConnectionOpenConfirmResponse): _173.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _173.MsgConnectionOpenConfirmResponseAminoMsg): _173.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _173.MsgConnectionOpenConfirmResponse): _173.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _173.MsgConnectionOpenConfirmResponseProtoMsg): _173.MsgConnectionOpenConfirmResponse;
                    toProto(message: _173.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _173.MsgConnectionOpenConfirmResponse): _173.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _172.QueryConnectionRequest;
                    fromPartial(object: Partial<_172.QueryConnectionRequest>): _172.QueryConnectionRequest;
                    fromAmino(object: _172.QueryConnectionRequestAmino): _172.QueryConnectionRequest;
                    toAmino(message: _172.QueryConnectionRequest): _172.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _172.QueryConnectionRequestAminoMsg): _172.QueryConnectionRequest;
                    toAminoMsg(message: _172.QueryConnectionRequest): _172.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryConnectionRequestProtoMsg): _172.QueryConnectionRequest;
                    toProto(message: _172.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryConnectionRequest): _172.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _172.QueryConnectionResponse;
                    fromPartial(object: Partial<_172.QueryConnectionResponse>): _172.QueryConnectionResponse;
                    fromAmino(object: _172.QueryConnectionResponseAmino): _172.QueryConnectionResponse;
                    toAmino(message: _172.QueryConnectionResponse): _172.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _172.QueryConnectionResponseAminoMsg): _172.QueryConnectionResponse;
                    toAminoMsg(message: _172.QueryConnectionResponse): _172.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryConnectionResponseProtoMsg): _172.QueryConnectionResponse;
                    toProto(message: _172.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryConnectionResponse): _172.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _172.QueryConnectionsRequest;
                    fromPartial(object: Partial<_172.QueryConnectionsRequest>): _172.QueryConnectionsRequest;
                    fromAmino(object: _172.QueryConnectionsRequestAmino): _172.QueryConnectionsRequest;
                    toAmino(message: _172.QueryConnectionsRequest): _172.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _172.QueryConnectionsRequestAminoMsg): _172.QueryConnectionsRequest;
                    toAminoMsg(message: _172.QueryConnectionsRequest): _172.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryConnectionsRequestProtoMsg): _172.QueryConnectionsRequest;
                    toProto(message: _172.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryConnectionsRequest): _172.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _172.QueryConnectionsResponse;
                    fromPartial(object: Partial<_172.QueryConnectionsResponse>): _172.QueryConnectionsResponse;
                    fromAmino(object: _172.QueryConnectionsResponseAmino): _172.QueryConnectionsResponse;
                    toAmino(message: _172.QueryConnectionsResponse): _172.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _172.QueryConnectionsResponseAminoMsg): _172.QueryConnectionsResponse;
                    toAminoMsg(message: _172.QueryConnectionsResponse): _172.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryConnectionsResponseProtoMsg): _172.QueryConnectionsResponse;
                    toProto(message: _172.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryConnectionsResponse): _172.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _172.QueryClientConnectionsRequest;
                    fromPartial(object: Partial<_172.QueryClientConnectionsRequest>): _172.QueryClientConnectionsRequest;
                    fromAmino(object: _172.QueryClientConnectionsRequestAmino): _172.QueryClientConnectionsRequest;
                    toAmino(message: _172.QueryClientConnectionsRequest): _172.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _172.QueryClientConnectionsRequestAminoMsg): _172.QueryClientConnectionsRequest;
                    toAminoMsg(message: _172.QueryClientConnectionsRequest): _172.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryClientConnectionsRequestProtoMsg): _172.QueryClientConnectionsRequest;
                    toProto(message: _172.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryClientConnectionsRequest): _172.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _172.QueryClientConnectionsResponse;
                    fromPartial(object: Partial<_172.QueryClientConnectionsResponse>): _172.QueryClientConnectionsResponse;
                    fromAmino(object: _172.QueryClientConnectionsResponseAmino): _172.QueryClientConnectionsResponse;
                    toAmino(message: _172.QueryClientConnectionsResponse): _172.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _172.QueryClientConnectionsResponseAminoMsg): _172.QueryClientConnectionsResponse;
                    toAminoMsg(message: _172.QueryClientConnectionsResponse): _172.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryClientConnectionsResponseProtoMsg): _172.QueryClientConnectionsResponse;
                    toProto(message: _172.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryClientConnectionsResponse): _172.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _172.QueryConnectionClientStateRequest;
                    fromPartial(object: Partial<_172.QueryConnectionClientStateRequest>): _172.QueryConnectionClientStateRequest;
                    fromAmino(object: _172.QueryConnectionClientStateRequestAmino): _172.QueryConnectionClientStateRequest;
                    toAmino(message: _172.QueryConnectionClientStateRequest): _172.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _172.QueryConnectionClientStateRequestAminoMsg): _172.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _172.QueryConnectionClientStateRequest): _172.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryConnectionClientStateRequestProtoMsg): _172.QueryConnectionClientStateRequest;
                    toProto(message: _172.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryConnectionClientStateRequest): _172.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _172.QueryConnectionClientStateResponse;
                    fromPartial(object: Partial<_172.QueryConnectionClientStateResponse>): _172.QueryConnectionClientStateResponse;
                    fromAmino(object: _172.QueryConnectionClientStateResponseAmino): _172.QueryConnectionClientStateResponse;
                    toAmino(message: _172.QueryConnectionClientStateResponse): _172.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _172.QueryConnectionClientStateResponseAminoMsg): _172.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _172.QueryConnectionClientStateResponse): _172.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryConnectionClientStateResponseProtoMsg): _172.QueryConnectionClientStateResponse;
                    toProto(message: _172.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryConnectionClientStateResponse): _172.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _172.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _172.QueryConnectionConsensusStateRequest;
                    fromPartial(object: Partial<_172.QueryConnectionConsensusStateRequest>): _172.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _172.QueryConnectionConsensusStateRequestAmino): _172.QueryConnectionConsensusStateRequest;
                    toAmino(message: _172.QueryConnectionConsensusStateRequest): _172.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _172.QueryConnectionConsensusStateRequestAminoMsg): _172.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _172.QueryConnectionConsensusStateRequest): _172.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _172.QueryConnectionConsensusStateRequestProtoMsg): _172.QueryConnectionConsensusStateRequest;
                    toProto(message: _172.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _172.QueryConnectionConsensusStateRequest): _172.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _172.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _172.QueryConnectionConsensusStateResponse;
                    fromPartial(object: Partial<_172.QueryConnectionConsensusStateResponse>): _172.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _172.QueryConnectionConsensusStateResponseAmino): _172.QueryConnectionConsensusStateResponse;
                    toAmino(message: _172.QueryConnectionConsensusStateResponse): _172.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _172.QueryConnectionConsensusStateResponseAminoMsg): _172.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _172.QueryConnectionConsensusStateResponse): _172.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _172.QueryConnectionConsensusStateResponseProtoMsg): _172.QueryConnectionConsensusStateResponse;
                    toProto(message: _172.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _172.QueryConnectionConsensusStateResponse): _172.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _171.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _171.GenesisState;
                    fromPartial(object: Partial<_171.GenesisState>): _171.GenesisState;
                    fromAmino(object: _171.GenesisStateAmino): _171.GenesisState;
                    toAmino(message: _171.GenesisState): _171.GenesisStateAmino;
                    fromAminoMsg(object: _171.GenesisStateAminoMsg): _171.GenesisState;
                    toAminoMsg(message: _171.GenesisState): _171.GenesisStateAminoMsg;
                    fromProtoMsg(message: _171.GenesisStateProtoMsg): _171.GenesisState;
                    toProto(message: _171.GenesisState): Uint8Array;
                    toProtoMsg(message: _171.GenesisState): _171.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _170.State;
                stateToJSON(object: _170.State): string;
                State: typeof _170.State;
                StateSDKType: typeof _170.State;
                StateAmino: typeof _170.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _170.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _170.ConnectionEnd;
                    fromPartial(object: Partial<_170.ConnectionEnd>): _170.ConnectionEnd;
                    fromAmino(object: _170.ConnectionEndAmino): _170.ConnectionEnd;
                    toAmino(message: _170.ConnectionEnd): _170.ConnectionEndAmino;
                    fromAminoMsg(object: _170.ConnectionEndAminoMsg): _170.ConnectionEnd;
                    toAminoMsg(message: _170.ConnectionEnd): _170.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _170.ConnectionEndProtoMsg): _170.ConnectionEnd;
                    toProto(message: _170.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _170.ConnectionEnd): _170.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _170.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _170.IdentifiedConnection;
                    fromPartial(object: Partial<_170.IdentifiedConnection>): _170.IdentifiedConnection;
                    fromAmino(object: _170.IdentifiedConnectionAmino): _170.IdentifiedConnection;
                    toAmino(message: _170.IdentifiedConnection): _170.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _170.IdentifiedConnectionAminoMsg): _170.IdentifiedConnection;
                    toAminoMsg(message: _170.IdentifiedConnection): _170.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _170.IdentifiedConnectionProtoMsg): _170.IdentifiedConnection;
                    toProto(message: _170.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _170.IdentifiedConnection): _170.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _170.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _170.Counterparty;
                    fromPartial(object: Partial<_170.Counterparty>): _170.Counterparty;
                    fromAmino(object: _170.CounterpartyAmino): _170.Counterparty;
                    toAmino(message: _170.Counterparty): _170.CounterpartyAmino;
                    fromAminoMsg(object: _170.CounterpartyAminoMsg): _170.Counterparty;
                    toAminoMsg(message: _170.Counterparty): _170.CounterpartyAminoMsg;
                    fromProtoMsg(message: _170.CounterpartyProtoMsg): _170.Counterparty;
                    toProto(message: _170.Counterparty): Uint8Array;
                    toProtoMsg(message: _170.Counterparty): _170.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _170.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _170.ClientPaths;
                    fromPartial(object: Partial<_170.ClientPaths>): _170.ClientPaths;
                    fromAmino(object: _170.ClientPathsAmino): _170.ClientPaths;
                    toAmino(message: _170.ClientPaths): _170.ClientPathsAmino;
                    fromAminoMsg(object: _170.ClientPathsAminoMsg): _170.ClientPaths;
                    toAminoMsg(message: _170.ClientPaths): _170.ClientPathsAminoMsg;
                    fromProtoMsg(message: _170.ClientPathsProtoMsg): _170.ClientPaths;
                    toProto(message: _170.ClientPaths): Uint8Array;
                    toProtoMsg(message: _170.ClientPaths): _170.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _170.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _170.ConnectionPaths;
                    fromPartial(object: Partial<_170.ConnectionPaths>): _170.ConnectionPaths;
                    fromAmino(object: _170.ConnectionPathsAmino): _170.ConnectionPaths;
                    toAmino(message: _170.ConnectionPaths): _170.ConnectionPathsAmino;
                    fromAminoMsg(object: _170.ConnectionPathsAminoMsg): _170.ConnectionPaths;
                    toAminoMsg(message: _170.ConnectionPaths): _170.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _170.ConnectionPathsProtoMsg): _170.ConnectionPaths;
                    toProto(message: _170.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _170.ConnectionPaths): _170.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _170.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _170.Version;
                    fromPartial(object: Partial<_170.Version>): _170.Version;
                    fromAmino(object: _170.VersionAmino): _170.Version;
                    toAmino(message: _170.Version): _170.VersionAmino;
                    fromAminoMsg(object: _170.VersionAminoMsg): _170.Version;
                    toAminoMsg(message: _170.Version): _170.VersionAminoMsg;
                    fromProtoMsg(message: _170.VersionProtoMsg): _170.Version;
                    toProto(message: _170.Version): Uint8Array;
                    toProtoMsg(message: _170.Version): _170.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _170.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _170.Params;
                    fromPartial(object: Partial<_170.Params>): _170.Params;
                    fromAmino(object: _170.ParamsAmino): _170.Params;
                    toAmino(message: _170.Params): _170.ParamsAmino;
                    fromAminoMsg(object: _170.ParamsAminoMsg): _170.Params;
                    toAminoMsg(message: _170.Params): _170.ParamsAminoMsg;
                    fromProtoMsg(message: _170.ParamsProtoMsg): _170.Params;
                    toProto(message: _170.Params): Uint8Array;
                    toProtoMsg(message: _170.Params): _170.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _174.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _174.ClientState;
                    fromPartial(object: Partial<_174.ClientState>): _174.ClientState;
                    fromAmino(object: _174.ClientStateAmino): _174.ClientState;
                    toAmino(message: _174.ClientState): _174.ClientStateAmino;
                    fromAminoMsg(object: _174.ClientStateAminoMsg): _174.ClientState;
                    toAminoMsg(message: _174.ClientState): _174.ClientStateAminoMsg;
                    fromProtoMsg(message: _174.ClientStateProtoMsg): _174.ClientState;
                    toProto(message: _174.ClientState): Uint8Array;
                    toProtoMsg(message: _174.ClientState): _174.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _175.DataType;
                dataTypeToJSON(object: _175.DataType): string;
                DataType: typeof _175.DataType;
                DataTypeSDKType: typeof _175.DataType;
                DataTypeAmino: typeof _175.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _175.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.ClientState;
                    fromPartial(object: Partial<_175.ClientState>): _175.ClientState;
                    fromAmino(object: _175.ClientStateAmino): _175.ClientState;
                    toAmino(message: _175.ClientState): _175.ClientStateAmino;
                    fromAminoMsg(object: _175.ClientStateAminoMsg): _175.ClientState;
                    toAminoMsg(message: _175.ClientState): _175.ClientStateAminoMsg;
                    fromProtoMsg(message: _175.ClientStateProtoMsg): _175.ClientState;
                    toProto(message: _175.ClientState): Uint8Array;
                    toProtoMsg(message: _175.ClientState): _175.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _175.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.ConsensusState;
                    fromPartial(object: Partial<_175.ConsensusState>): _175.ConsensusState;
                    fromAmino(object: _175.ConsensusStateAmino): _175.ConsensusState;
                    toAmino(message: _175.ConsensusState): _175.ConsensusStateAmino;
                    fromAminoMsg(object: _175.ConsensusStateAminoMsg): _175.ConsensusState;
                    toAminoMsg(message: _175.ConsensusState): _175.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _175.ConsensusStateProtoMsg): _175.ConsensusState;
                    toProto(message: _175.ConsensusState): Uint8Array;
                    toProtoMsg(message: _175.ConsensusState): _175.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _175.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.Header;
                    fromPartial(object: Partial<_175.Header>): _175.Header;
                    fromAmino(object: _175.HeaderAmino): _175.Header;
                    toAmino(message: _175.Header): _175.HeaderAmino;
                    fromAminoMsg(object: _175.HeaderAminoMsg): _175.Header;
                    toAminoMsg(message: _175.Header): _175.HeaderAminoMsg;
                    fromProtoMsg(message: _175.HeaderProtoMsg): _175.Header;
                    toProto(message: _175.Header): Uint8Array;
                    toProtoMsg(message: _175.Header): _175.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _175.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.Misbehaviour;
                    fromPartial(object: Partial<_175.Misbehaviour>): _175.Misbehaviour;
                    fromAmino(object: _175.MisbehaviourAmino): _175.Misbehaviour;
                    toAmino(message: _175.Misbehaviour): _175.MisbehaviourAmino;
                    fromAminoMsg(object: _175.MisbehaviourAminoMsg): _175.Misbehaviour;
                    toAminoMsg(message: _175.Misbehaviour): _175.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _175.MisbehaviourProtoMsg): _175.Misbehaviour;
                    toProto(message: _175.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _175.Misbehaviour): _175.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _175.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.SignatureAndData;
                    fromPartial(object: Partial<_175.SignatureAndData>): _175.SignatureAndData;
                    fromAmino(object: _175.SignatureAndDataAmino): _175.SignatureAndData;
                    toAmino(message: _175.SignatureAndData): _175.SignatureAndDataAmino;
                    fromAminoMsg(object: _175.SignatureAndDataAminoMsg): _175.SignatureAndData;
                    toAminoMsg(message: _175.SignatureAndData): _175.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _175.SignatureAndDataProtoMsg): _175.SignatureAndData;
                    toProto(message: _175.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _175.SignatureAndData): _175.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _175.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.TimestampedSignatureData;
                    fromPartial(object: Partial<_175.TimestampedSignatureData>): _175.TimestampedSignatureData;
                    fromAmino(object: _175.TimestampedSignatureDataAmino): _175.TimestampedSignatureData;
                    toAmino(message: _175.TimestampedSignatureData): _175.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _175.TimestampedSignatureDataAminoMsg): _175.TimestampedSignatureData;
                    toAminoMsg(message: _175.TimestampedSignatureData): _175.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _175.TimestampedSignatureDataProtoMsg): _175.TimestampedSignatureData;
                    toProto(message: _175.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _175.TimestampedSignatureData): _175.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _175.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.SignBytes;
                    fromPartial(object: Partial<_175.SignBytes>): _175.SignBytes;
                    fromAmino(object: _175.SignBytesAmino): _175.SignBytes;
                    toAmino(message: _175.SignBytes): _175.SignBytesAmino;
                    fromAminoMsg(object: _175.SignBytesAminoMsg): _175.SignBytes;
                    toAminoMsg(message: _175.SignBytes): _175.SignBytesAminoMsg;
                    fromProtoMsg(message: _175.SignBytesProtoMsg): _175.SignBytes;
                    toProto(message: _175.SignBytes): Uint8Array;
                    toProtoMsg(message: _175.SignBytes): _175.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _175.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.HeaderData;
                    fromPartial(object: Partial<_175.HeaderData>): _175.HeaderData;
                    fromAmino(object: _175.HeaderDataAmino): _175.HeaderData;
                    toAmino(message: _175.HeaderData): _175.HeaderDataAmino;
                    fromAminoMsg(object: _175.HeaderDataAminoMsg): _175.HeaderData;
                    toAminoMsg(message: _175.HeaderData): _175.HeaderDataAminoMsg;
                    fromProtoMsg(message: _175.HeaderDataProtoMsg): _175.HeaderData;
                    toProto(message: _175.HeaderData): Uint8Array;
                    toProtoMsg(message: _175.HeaderData): _175.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _175.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.ClientStateData;
                    fromPartial(object: Partial<_175.ClientStateData>): _175.ClientStateData;
                    fromAmino(object: _175.ClientStateDataAmino): _175.ClientStateData;
                    toAmino(message: _175.ClientStateData): _175.ClientStateDataAmino;
                    fromAminoMsg(object: _175.ClientStateDataAminoMsg): _175.ClientStateData;
                    toAminoMsg(message: _175.ClientStateData): _175.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _175.ClientStateDataProtoMsg): _175.ClientStateData;
                    toProto(message: _175.ClientStateData): Uint8Array;
                    toProtoMsg(message: _175.ClientStateData): _175.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _175.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.ConsensusStateData;
                    fromPartial(object: Partial<_175.ConsensusStateData>): _175.ConsensusStateData;
                    fromAmino(object: _175.ConsensusStateDataAmino): _175.ConsensusStateData;
                    toAmino(message: _175.ConsensusStateData): _175.ConsensusStateDataAmino;
                    fromAminoMsg(object: _175.ConsensusStateDataAminoMsg): _175.ConsensusStateData;
                    toAminoMsg(message: _175.ConsensusStateData): _175.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _175.ConsensusStateDataProtoMsg): _175.ConsensusStateData;
                    toProto(message: _175.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _175.ConsensusStateData): _175.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _175.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.ConnectionStateData;
                    fromPartial(object: Partial<_175.ConnectionStateData>): _175.ConnectionStateData;
                    fromAmino(object: _175.ConnectionStateDataAmino): _175.ConnectionStateData;
                    toAmino(message: _175.ConnectionStateData): _175.ConnectionStateDataAmino;
                    fromAminoMsg(object: _175.ConnectionStateDataAminoMsg): _175.ConnectionStateData;
                    toAminoMsg(message: _175.ConnectionStateData): _175.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _175.ConnectionStateDataProtoMsg): _175.ConnectionStateData;
                    toProto(message: _175.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _175.ConnectionStateData): _175.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _175.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.ChannelStateData;
                    fromPartial(object: Partial<_175.ChannelStateData>): _175.ChannelStateData;
                    fromAmino(object: _175.ChannelStateDataAmino): _175.ChannelStateData;
                    toAmino(message: _175.ChannelStateData): _175.ChannelStateDataAmino;
                    fromAminoMsg(object: _175.ChannelStateDataAminoMsg): _175.ChannelStateData;
                    toAminoMsg(message: _175.ChannelStateData): _175.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _175.ChannelStateDataProtoMsg): _175.ChannelStateData;
                    toProto(message: _175.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _175.ChannelStateData): _175.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _175.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.PacketCommitmentData;
                    fromPartial(object: Partial<_175.PacketCommitmentData>): _175.PacketCommitmentData;
                    fromAmino(object: _175.PacketCommitmentDataAmino): _175.PacketCommitmentData;
                    toAmino(message: _175.PacketCommitmentData): _175.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _175.PacketCommitmentDataAminoMsg): _175.PacketCommitmentData;
                    toAminoMsg(message: _175.PacketCommitmentData): _175.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _175.PacketCommitmentDataProtoMsg): _175.PacketCommitmentData;
                    toProto(message: _175.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _175.PacketCommitmentData): _175.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _175.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.PacketAcknowledgementData;
                    fromPartial(object: Partial<_175.PacketAcknowledgementData>): _175.PacketAcknowledgementData;
                    fromAmino(object: _175.PacketAcknowledgementDataAmino): _175.PacketAcknowledgementData;
                    toAmino(message: _175.PacketAcknowledgementData): _175.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _175.PacketAcknowledgementDataAminoMsg): _175.PacketAcknowledgementData;
                    toAminoMsg(message: _175.PacketAcknowledgementData): _175.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _175.PacketAcknowledgementDataProtoMsg): _175.PacketAcknowledgementData;
                    toProto(message: _175.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _175.PacketAcknowledgementData): _175.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _175.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_175.PacketReceiptAbsenceData>): _175.PacketReceiptAbsenceData;
                    fromAmino(object: _175.PacketReceiptAbsenceDataAmino): _175.PacketReceiptAbsenceData;
                    toAmino(message: _175.PacketReceiptAbsenceData): _175.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _175.PacketReceiptAbsenceDataAminoMsg): _175.PacketReceiptAbsenceData;
                    toAminoMsg(message: _175.PacketReceiptAbsenceData): _175.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _175.PacketReceiptAbsenceDataProtoMsg): _175.PacketReceiptAbsenceData;
                    toProto(message: _175.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _175.PacketReceiptAbsenceData): _175.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _175.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _175.NextSequenceRecvData;
                    fromPartial(object: Partial<_175.NextSequenceRecvData>): _175.NextSequenceRecvData;
                    fromAmino(object: _175.NextSequenceRecvDataAmino): _175.NextSequenceRecvData;
                    toAmino(message: _175.NextSequenceRecvData): _175.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _175.NextSequenceRecvDataAminoMsg): _175.NextSequenceRecvData;
                    toAminoMsg(message: _175.NextSequenceRecvData): _175.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _175.NextSequenceRecvDataProtoMsg): _175.NextSequenceRecvData;
                    toProto(message: _175.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _175.NextSequenceRecvData): _175.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _176.DataType;
                dataTypeToJSON(object: _176.DataType): string;
                DataType: typeof _176.DataType;
                DataTypeSDKType: typeof _176.DataType;
                DataTypeAmino: typeof _176.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _176.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.ClientState;
                    fromPartial(object: Partial<_176.ClientState>): _176.ClientState;
                    fromAmino(object: _176.ClientStateAmino): _176.ClientState;
                    toAmino(message: _176.ClientState): _176.ClientStateAmino;
                    fromAminoMsg(object: _176.ClientStateAminoMsg): _176.ClientState;
                    toAminoMsg(message: _176.ClientState): _176.ClientStateAminoMsg;
                    fromProtoMsg(message: _176.ClientStateProtoMsg): _176.ClientState;
                    toProto(message: _176.ClientState): Uint8Array;
                    toProtoMsg(message: _176.ClientState): _176.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _176.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.ConsensusState;
                    fromPartial(object: Partial<_176.ConsensusState>): _176.ConsensusState;
                    fromAmino(object: _176.ConsensusStateAmino): _176.ConsensusState;
                    toAmino(message: _176.ConsensusState): _176.ConsensusStateAmino;
                    fromAminoMsg(object: _176.ConsensusStateAminoMsg): _176.ConsensusState;
                    toAminoMsg(message: _176.ConsensusState): _176.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _176.ConsensusStateProtoMsg): _176.ConsensusState;
                    toProto(message: _176.ConsensusState): Uint8Array;
                    toProtoMsg(message: _176.ConsensusState): _176.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _176.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.Header;
                    fromPartial(object: Partial<_176.Header>): _176.Header;
                    fromAmino(object: _176.HeaderAmino): _176.Header;
                    toAmino(message: _176.Header): _176.HeaderAmino;
                    fromAminoMsg(object: _176.HeaderAminoMsg): _176.Header;
                    toAminoMsg(message: _176.Header): _176.HeaderAminoMsg;
                    fromProtoMsg(message: _176.HeaderProtoMsg): _176.Header;
                    toProto(message: _176.Header): Uint8Array;
                    toProtoMsg(message: _176.Header): _176.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _176.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.Misbehaviour;
                    fromPartial(object: Partial<_176.Misbehaviour>): _176.Misbehaviour;
                    fromAmino(object: _176.MisbehaviourAmino): _176.Misbehaviour;
                    toAmino(message: _176.Misbehaviour): _176.MisbehaviourAmino;
                    fromAminoMsg(object: _176.MisbehaviourAminoMsg): _176.Misbehaviour;
                    toAminoMsg(message: _176.Misbehaviour): _176.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _176.MisbehaviourProtoMsg): _176.Misbehaviour;
                    toProto(message: _176.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _176.Misbehaviour): _176.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _176.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.SignatureAndData;
                    fromPartial(object: Partial<_176.SignatureAndData>): _176.SignatureAndData;
                    fromAmino(object: _176.SignatureAndDataAmino): _176.SignatureAndData;
                    toAmino(message: _176.SignatureAndData): _176.SignatureAndDataAmino;
                    fromAminoMsg(object: _176.SignatureAndDataAminoMsg): _176.SignatureAndData;
                    toAminoMsg(message: _176.SignatureAndData): _176.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _176.SignatureAndDataProtoMsg): _176.SignatureAndData;
                    toProto(message: _176.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _176.SignatureAndData): _176.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _176.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.TimestampedSignatureData;
                    fromPartial(object: Partial<_176.TimestampedSignatureData>): _176.TimestampedSignatureData;
                    fromAmino(object: _176.TimestampedSignatureDataAmino): _176.TimestampedSignatureData;
                    toAmino(message: _176.TimestampedSignatureData): _176.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _176.TimestampedSignatureDataAminoMsg): _176.TimestampedSignatureData;
                    toAminoMsg(message: _176.TimestampedSignatureData): _176.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _176.TimestampedSignatureDataProtoMsg): _176.TimestampedSignatureData;
                    toProto(message: _176.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _176.TimestampedSignatureData): _176.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _176.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.SignBytes;
                    fromPartial(object: Partial<_176.SignBytes>): _176.SignBytes;
                    fromAmino(object: _176.SignBytesAmino): _176.SignBytes;
                    toAmino(message: _176.SignBytes): _176.SignBytesAmino;
                    fromAminoMsg(object: _176.SignBytesAminoMsg): _176.SignBytes;
                    toAminoMsg(message: _176.SignBytes): _176.SignBytesAminoMsg;
                    fromProtoMsg(message: _176.SignBytesProtoMsg): _176.SignBytes;
                    toProto(message: _176.SignBytes): Uint8Array;
                    toProtoMsg(message: _176.SignBytes): _176.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _176.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.HeaderData;
                    fromPartial(object: Partial<_176.HeaderData>): _176.HeaderData;
                    fromAmino(object: _176.HeaderDataAmino): _176.HeaderData;
                    toAmino(message: _176.HeaderData): _176.HeaderDataAmino;
                    fromAminoMsg(object: _176.HeaderDataAminoMsg): _176.HeaderData;
                    toAminoMsg(message: _176.HeaderData): _176.HeaderDataAminoMsg;
                    fromProtoMsg(message: _176.HeaderDataProtoMsg): _176.HeaderData;
                    toProto(message: _176.HeaderData): Uint8Array;
                    toProtoMsg(message: _176.HeaderData): _176.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _176.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.ClientStateData;
                    fromPartial(object: Partial<_176.ClientStateData>): _176.ClientStateData;
                    fromAmino(object: _176.ClientStateDataAmino): _176.ClientStateData;
                    toAmino(message: _176.ClientStateData): _176.ClientStateDataAmino;
                    fromAminoMsg(object: _176.ClientStateDataAminoMsg): _176.ClientStateData;
                    toAminoMsg(message: _176.ClientStateData): _176.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _176.ClientStateDataProtoMsg): _176.ClientStateData;
                    toProto(message: _176.ClientStateData): Uint8Array;
                    toProtoMsg(message: _176.ClientStateData): _176.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _176.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.ConsensusStateData;
                    fromPartial(object: Partial<_176.ConsensusStateData>): _176.ConsensusStateData;
                    fromAmino(object: _176.ConsensusStateDataAmino): _176.ConsensusStateData;
                    toAmino(message: _176.ConsensusStateData): _176.ConsensusStateDataAmino;
                    fromAminoMsg(object: _176.ConsensusStateDataAminoMsg): _176.ConsensusStateData;
                    toAminoMsg(message: _176.ConsensusStateData): _176.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _176.ConsensusStateDataProtoMsg): _176.ConsensusStateData;
                    toProto(message: _176.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _176.ConsensusStateData): _176.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _176.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.ConnectionStateData;
                    fromPartial(object: Partial<_176.ConnectionStateData>): _176.ConnectionStateData;
                    fromAmino(object: _176.ConnectionStateDataAmino): _176.ConnectionStateData;
                    toAmino(message: _176.ConnectionStateData): _176.ConnectionStateDataAmino;
                    fromAminoMsg(object: _176.ConnectionStateDataAminoMsg): _176.ConnectionStateData;
                    toAminoMsg(message: _176.ConnectionStateData): _176.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _176.ConnectionStateDataProtoMsg): _176.ConnectionStateData;
                    toProto(message: _176.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _176.ConnectionStateData): _176.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _176.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.ChannelStateData;
                    fromPartial(object: Partial<_176.ChannelStateData>): _176.ChannelStateData;
                    fromAmino(object: _176.ChannelStateDataAmino): _176.ChannelStateData;
                    toAmino(message: _176.ChannelStateData): _176.ChannelStateDataAmino;
                    fromAminoMsg(object: _176.ChannelStateDataAminoMsg): _176.ChannelStateData;
                    toAminoMsg(message: _176.ChannelStateData): _176.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _176.ChannelStateDataProtoMsg): _176.ChannelStateData;
                    toProto(message: _176.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _176.ChannelStateData): _176.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _176.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.PacketCommitmentData;
                    fromPartial(object: Partial<_176.PacketCommitmentData>): _176.PacketCommitmentData;
                    fromAmino(object: _176.PacketCommitmentDataAmino): _176.PacketCommitmentData;
                    toAmino(message: _176.PacketCommitmentData): _176.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _176.PacketCommitmentDataAminoMsg): _176.PacketCommitmentData;
                    toAminoMsg(message: _176.PacketCommitmentData): _176.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _176.PacketCommitmentDataProtoMsg): _176.PacketCommitmentData;
                    toProto(message: _176.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _176.PacketCommitmentData): _176.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _176.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.PacketAcknowledgementData;
                    fromPartial(object: Partial<_176.PacketAcknowledgementData>): _176.PacketAcknowledgementData;
                    fromAmino(object: _176.PacketAcknowledgementDataAmino): _176.PacketAcknowledgementData;
                    toAmino(message: _176.PacketAcknowledgementData): _176.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _176.PacketAcknowledgementDataAminoMsg): _176.PacketAcknowledgementData;
                    toAminoMsg(message: _176.PacketAcknowledgementData): _176.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _176.PacketAcknowledgementDataProtoMsg): _176.PacketAcknowledgementData;
                    toProto(message: _176.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _176.PacketAcknowledgementData): _176.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _176.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.PacketReceiptAbsenceData;
                    fromPartial(object: Partial<_176.PacketReceiptAbsenceData>): _176.PacketReceiptAbsenceData;
                    fromAmino(object: _176.PacketReceiptAbsenceDataAmino): _176.PacketReceiptAbsenceData;
                    toAmino(message: _176.PacketReceiptAbsenceData): _176.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _176.PacketReceiptAbsenceDataAminoMsg): _176.PacketReceiptAbsenceData;
                    toAminoMsg(message: _176.PacketReceiptAbsenceData): _176.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _176.PacketReceiptAbsenceDataProtoMsg): _176.PacketReceiptAbsenceData;
                    toProto(message: _176.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _176.PacketReceiptAbsenceData): _176.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _176.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _176.NextSequenceRecvData;
                    fromPartial(object: Partial<_176.NextSequenceRecvData>): _176.NextSequenceRecvData;
                    fromAmino(object: _176.NextSequenceRecvDataAmino): _176.NextSequenceRecvData;
                    toAmino(message: _176.NextSequenceRecvData): _176.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _176.NextSequenceRecvDataAminoMsg): _176.NextSequenceRecvData;
                    toAminoMsg(message: _176.NextSequenceRecvData): _176.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _176.NextSequenceRecvDataProtoMsg): _176.NextSequenceRecvData;
                    toProto(message: _176.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _176.NextSequenceRecvData): _176.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _177.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _177.ClientState;
                    fromPartial(object: Partial<_177.ClientState>): _177.ClientState;
                    fromAmino(object: _177.ClientStateAmino): _177.ClientState;
                    toAmino(message: _177.ClientState): _177.ClientStateAmino;
                    fromAminoMsg(object: _177.ClientStateAminoMsg): _177.ClientState;
                    toAminoMsg(message: _177.ClientState): _177.ClientStateAminoMsg;
                    fromProtoMsg(message: _177.ClientStateProtoMsg): _177.ClientState;
                    toProto(message: _177.ClientState): Uint8Array;
                    toProtoMsg(message: _177.ClientState): _177.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _177.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _177.ConsensusState;
                    fromPartial(object: Partial<_177.ConsensusState>): _177.ConsensusState;
                    fromAmino(object: _177.ConsensusStateAmino): _177.ConsensusState;
                    toAmino(message: _177.ConsensusState): _177.ConsensusStateAmino;
                    fromAminoMsg(object: _177.ConsensusStateAminoMsg): _177.ConsensusState;
                    toAminoMsg(message: _177.ConsensusState): _177.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _177.ConsensusStateProtoMsg): _177.ConsensusState;
                    toProto(message: _177.ConsensusState): Uint8Array;
                    toProtoMsg(message: _177.ConsensusState): _177.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _177.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _177.Misbehaviour;
                    fromPartial(object: Partial<_177.Misbehaviour>): _177.Misbehaviour;
                    fromAmino(object: _177.MisbehaviourAmino): _177.Misbehaviour;
                    toAmino(message: _177.Misbehaviour): _177.MisbehaviourAmino;
                    fromAminoMsg(object: _177.MisbehaviourAminoMsg): _177.Misbehaviour;
                    toAminoMsg(message: _177.Misbehaviour): _177.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _177.MisbehaviourProtoMsg): _177.Misbehaviour;
                    toProto(message: _177.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _177.Misbehaviour): _177.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _177.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _177.Header;
                    fromPartial(object: Partial<_177.Header>): _177.Header;
                    fromAmino(object: _177.HeaderAmino): _177.Header;
                    toAmino(message: _177.Header): _177.HeaderAmino;
                    fromAminoMsg(object: _177.HeaderAminoMsg): _177.Header;
                    toAminoMsg(message: _177.Header): _177.HeaderAminoMsg;
                    fromProtoMsg(message: _177.HeaderProtoMsg): _177.Header;
                    toProto(message: _177.Header): Uint8Array;
                    toProtoMsg(message: _177.Header): _177.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _177.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _177.Fraction;
                    fromPartial(object: Partial<_177.Fraction>): _177.Fraction;
                    fromAmino(object: _177.FractionAmino): _177.Fraction;
                    toAmino(message: _177.Fraction): _177.FractionAmino;
                    fromAminoMsg(object: _177.FractionAminoMsg): _177.Fraction;
                    toAminoMsg(message: _177.Fraction): _177.FractionAminoMsg;
                    fromProtoMsg(message: _177.FractionProtoMsg): _177.Fraction;
                    toProto(message: _177.Fraction): Uint8Array;
                    toProtoMsg(message: _177.Fraction): _177.FractionProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _468.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _469.MsgClientImpl;
                    };
                    client: {
                        v1: _470.MsgClientImpl;
                    };
                    connection: {
                        v1: _471.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _157.QueryDenomTraceRequest): Promise<_157.QueryDenomTraceResponse>;
                            denomTraces(request?: _157.QueryDenomTracesRequest): Promise<_157.QueryDenomTracesResponse>;
                            params(request?: _157.QueryParamsRequest): Promise<_157.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _163.QueryChannelRequest): Promise<_163.QueryChannelResponse>;
                            channels(request?: _163.QueryChannelsRequest): Promise<_163.QueryChannelsResponse>;
                            connectionChannels(request: _163.QueryConnectionChannelsRequest): Promise<_163.QueryConnectionChannelsResponse>;
                            channelClientState(request: _163.QueryChannelClientStateRequest): Promise<_163.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _163.QueryChannelConsensusStateRequest): Promise<_163.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _163.QueryPacketCommitmentRequest): Promise<_163.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _163.QueryPacketCommitmentsRequest): Promise<_163.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _163.QueryPacketReceiptRequest): Promise<_163.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _163.QueryPacketAcknowledgementRequest): Promise<_163.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _163.QueryPacketAcknowledgementsRequest): Promise<_163.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _163.QueryUnreceivedPacketsRequest): Promise<_163.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _163.QueryUnreceivedAcksRequest): Promise<_163.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _163.QueryNextSequenceReceiveRequest): Promise<_163.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _167.QueryClientStateRequest): Promise<_167.QueryClientStateResponse>;
                            clientStates(request?: _167.QueryClientStatesRequest): Promise<_167.QueryClientStatesResponse>;
                            consensusState(request: _167.QueryConsensusStateRequest): Promise<_167.QueryConsensusStateResponse>;
                            consensusStates(request: _167.QueryConsensusStatesRequest): Promise<_167.QueryConsensusStatesResponse>;
                            clientStatus(request: _167.QueryClientStatusRequest): Promise<_167.QueryClientStatusResponse>;
                            clientParams(request?: _167.QueryClientParamsRequest): Promise<_167.QueryClientParamsResponse>;
                            upgradedClientState(request?: _167.QueryUpgradedClientStateRequest): Promise<_167.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _167.QueryUpgradedConsensusStateRequest): Promise<_167.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _172.QueryConnectionRequest): Promise<_172.QueryConnectionResponse>;
                            connections(request?: _172.QueryConnectionsRequest): Promise<_172.QueryConnectionsResponse>;
                            clientConnections(request: _172.QueryClientConnectionsRequest): Promise<_172.QueryClientConnectionsResponse>;
                            connectionClientState(request: _172.QueryConnectionClientStateRequest): Promise<_172.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _172.QueryConnectionConsensusStateRequest): Promise<_172.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
