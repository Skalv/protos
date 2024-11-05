import * as _54 from "../bcna/bitcannaid";
import * as _55 from "../bcna/genesis";
import * as _56 from "../bcna/params";
import * as _57 from "../bcna/query";
import * as _58 from "../bcna/supplychain";
import * as _59 from "../bcna/tx";
import * as _407 from "../bcna/query.rpc.Query";
import * as _408 from "../bcna/tx.rpc.msg";
export declare namespace BitCannaGlobal {
    namespace bcna {
        const bcna: {
            MsgClientImpl: typeof _408.MsgClientImpl;
            QueryClientImpl: typeof _407.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                bitcannaid(request: _57.QueryGetBitcannaidRequest): Promise<_57.QueryGetBitcannaidResponse>;
                bitcannaidAll(request?: _57.QueryAllBitcannaidRequest): Promise<_57.QueryAllBitcannaidResponse>;
                supplychain(request: _57.QueryGetSupplychainRequest): Promise<_57.QueryGetSupplychainResponse>;
                supplychainAll(request?: _57.QueryAllSupplychainRequest): Promise<_57.QueryAllSupplychainResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createBitcannaid(value: _59.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBitcannaid(value: _59.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteBitcannaid(value: _59.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSupplychain(value: _59.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateSupplychain(value: _59.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteSupplychain(value: _59.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createBitcannaid(value: _59.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: _59.MsgCreateBitcannaid;
                    };
                    updateBitcannaid(value: _59.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: _59.MsgUpdateBitcannaid;
                    };
                    deleteBitcannaid(value: _59.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: _59.MsgDeleteBitcannaid;
                    };
                    createSupplychain(value: _59.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: _59.MsgCreateSupplychain;
                    };
                    updateSupplychain(value: _59.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: _59.MsgUpdateSupplychain;
                    };
                    deleteSupplychain(value: _59.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: _59.MsgDeleteSupplychain;
                    };
                };
                fromPartial: {
                    createBitcannaid(value: _59.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: _59.MsgCreateBitcannaid;
                    };
                    updateBitcannaid(value: _59.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: _59.MsgUpdateBitcannaid;
                    };
                    deleteBitcannaid(value: _59.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: _59.MsgDeleteBitcannaid;
                    };
                    createSupplychain(value: _59.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: _59.MsgCreateSupplychain;
                    };
                    updateSupplychain(value: _59.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: _59.MsgUpdateSupplychain;
                    };
                    deleteSupplychain(value: _59.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: _59.MsgDeleteSupplychain;
                    };
                };
            };
            AminoConverter: {
                "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid": {
                    aminoType: string;
                    toAmino: (message: _59.MsgCreateBitcannaid) => _59.MsgCreateBitcannaidAmino;
                    fromAmino: (object: _59.MsgCreateBitcannaidAmino) => _59.MsgCreateBitcannaid;
                };
                "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid": {
                    aminoType: string;
                    toAmino: (message: _59.MsgUpdateBitcannaid) => _59.MsgUpdateBitcannaidAmino;
                    fromAmino: (object: _59.MsgUpdateBitcannaidAmino) => _59.MsgUpdateBitcannaid;
                };
                "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid": {
                    aminoType: string;
                    toAmino: (message: _59.MsgDeleteBitcannaid) => _59.MsgDeleteBitcannaidAmino;
                    fromAmino: (object: _59.MsgDeleteBitcannaidAmino) => _59.MsgDeleteBitcannaid;
                };
                "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain": {
                    aminoType: string;
                    toAmino: (message: _59.MsgCreateSupplychain) => _59.MsgCreateSupplychainAmino;
                    fromAmino: (object: _59.MsgCreateSupplychainAmino) => _59.MsgCreateSupplychain;
                };
                "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain": {
                    aminoType: string;
                    toAmino: (message: _59.MsgUpdateSupplychain) => _59.MsgUpdateSupplychainAmino;
                    fromAmino: (object: _59.MsgUpdateSupplychainAmino) => _59.MsgUpdateSupplychain;
                };
                "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain": {
                    aminoType: string;
                    toAmino: (message: _59.MsgDeleteSupplychain) => _59.MsgDeleteSupplychainAmino;
                    fromAmino: (object: _59.MsgDeleteSupplychainAmino) => _59.MsgDeleteSupplychain;
                };
            };
            MsgCreateBitcannaid: {
                typeUrl: string;
                encode(message: _59.MsgCreateBitcannaid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgCreateBitcannaid;
                fromPartial(object: Partial<_59.MsgCreateBitcannaid>): _59.MsgCreateBitcannaid;
                fromAmino(object: _59.MsgCreateBitcannaidAmino): _59.MsgCreateBitcannaid;
                toAmino(message: _59.MsgCreateBitcannaid): _59.MsgCreateBitcannaidAmino;
                fromAminoMsg(object: _59.MsgCreateBitcannaidAminoMsg): _59.MsgCreateBitcannaid;
                fromProtoMsg(message: _59.MsgCreateBitcannaidProtoMsg): _59.MsgCreateBitcannaid;
                toProto(message: _59.MsgCreateBitcannaid): Uint8Array;
                toProtoMsg(message: _59.MsgCreateBitcannaid): _59.MsgCreateBitcannaidProtoMsg;
            };
            MsgCreateBitcannaidResponse: {
                typeUrl: string;
                encode(message: _59.MsgCreateBitcannaidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgCreateBitcannaidResponse;
                fromPartial(object: Partial<_59.MsgCreateBitcannaidResponse>): _59.MsgCreateBitcannaidResponse;
                fromAmino(object: _59.MsgCreateBitcannaidResponseAmino): _59.MsgCreateBitcannaidResponse;
                toAmino(message: _59.MsgCreateBitcannaidResponse): _59.MsgCreateBitcannaidResponseAmino;
                fromAminoMsg(object: _59.MsgCreateBitcannaidResponseAminoMsg): _59.MsgCreateBitcannaidResponse;
                fromProtoMsg(message: _59.MsgCreateBitcannaidResponseProtoMsg): _59.MsgCreateBitcannaidResponse;
                toProto(message: _59.MsgCreateBitcannaidResponse): Uint8Array;
                toProtoMsg(message: _59.MsgCreateBitcannaidResponse): _59.MsgCreateBitcannaidResponseProtoMsg;
            };
            MsgUpdateBitcannaid: {
                typeUrl: string;
                encode(message: _59.MsgUpdateBitcannaid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgUpdateBitcannaid;
                fromPartial(object: Partial<_59.MsgUpdateBitcannaid>): _59.MsgUpdateBitcannaid;
                fromAmino(object: _59.MsgUpdateBitcannaidAmino): _59.MsgUpdateBitcannaid;
                toAmino(message: _59.MsgUpdateBitcannaid): _59.MsgUpdateBitcannaidAmino;
                fromAminoMsg(object: _59.MsgUpdateBitcannaidAminoMsg): _59.MsgUpdateBitcannaid;
                fromProtoMsg(message: _59.MsgUpdateBitcannaidProtoMsg): _59.MsgUpdateBitcannaid;
                toProto(message: _59.MsgUpdateBitcannaid): Uint8Array;
                toProtoMsg(message: _59.MsgUpdateBitcannaid): _59.MsgUpdateBitcannaidProtoMsg;
            };
            MsgUpdateBitcannaidResponse: {
                typeUrl: string;
                encode(_: _59.MsgUpdateBitcannaidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgUpdateBitcannaidResponse;
                fromPartial(_: Partial<_59.MsgUpdateBitcannaidResponse>): _59.MsgUpdateBitcannaidResponse;
                fromAmino(_: _59.MsgUpdateBitcannaidResponseAmino): _59.MsgUpdateBitcannaidResponse;
                toAmino(_: _59.MsgUpdateBitcannaidResponse): _59.MsgUpdateBitcannaidResponseAmino;
                fromAminoMsg(object: _59.MsgUpdateBitcannaidResponseAminoMsg): _59.MsgUpdateBitcannaidResponse;
                fromProtoMsg(message: _59.MsgUpdateBitcannaidResponseProtoMsg): _59.MsgUpdateBitcannaidResponse;
                toProto(message: _59.MsgUpdateBitcannaidResponse): Uint8Array;
                toProtoMsg(message: _59.MsgUpdateBitcannaidResponse): _59.MsgUpdateBitcannaidResponseProtoMsg;
            };
            MsgDeleteBitcannaid: {
                typeUrl: string;
                encode(message: _59.MsgDeleteBitcannaid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgDeleteBitcannaid;
                fromPartial(object: Partial<_59.MsgDeleteBitcannaid>): _59.MsgDeleteBitcannaid;
                fromAmino(object: _59.MsgDeleteBitcannaidAmino): _59.MsgDeleteBitcannaid;
                toAmino(message: _59.MsgDeleteBitcannaid): _59.MsgDeleteBitcannaidAmino;
                fromAminoMsg(object: _59.MsgDeleteBitcannaidAminoMsg): _59.MsgDeleteBitcannaid;
                fromProtoMsg(message: _59.MsgDeleteBitcannaidProtoMsg): _59.MsgDeleteBitcannaid;
                toProto(message: _59.MsgDeleteBitcannaid): Uint8Array;
                toProtoMsg(message: _59.MsgDeleteBitcannaid): _59.MsgDeleteBitcannaidProtoMsg;
            };
            MsgDeleteBitcannaidResponse: {
                typeUrl: string;
                encode(_: _59.MsgDeleteBitcannaidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgDeleteBitcannaidResponse;
                fromPartial(_: Partial<_59.MsgDeleteBitcannaidResponse>): _59.MsgDeleteBitcannaidResponse;
                fromAmino(_: _59.MsgDeleteBitcannaidResponseAmino): _59.MsgDeleteBitcannaidResponse;
                toAmino(_: _59.MsgDeleteBitcannaidResponse): _59.MsgDeleteBitcannaidResponseAmino;
                fromAminoMsg(object: _59.MsgDeleteBitcannaidResponseAminoMsg): _59.MsgDeleteBitcannaidResponse;
                fromProtoMsg(message: _59.MsgDeleteBitcannaidResponseProtoMsg): _59.MsgDeleteBitcannaidResponse;
                toProto(message: _59.MsgDeleteBitcannaidResponse): Uint8Array;
                toProtoMsg(message: _59.MsgDeleteBitcannaidResponse): _59.MsgDeleteBitcannaidResponseProtoMsg;
            };
            MsgCreateSupplychain: {
                typeUrl: string;
                encode(message: _59.MsgCreateSupplychain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgCreateSupplychain;
                fromPartial(object: Partial<_59.MsgCreateSupplychain>): _59.MsgCreateSupplychain;
                fromAmino(object: _59.MsgCreateSupplychainAmino): _59.MsgCreateSupplychain;
                toAmino(message: _59.MsgCreateSupplychain): _59.MsgCreateSupplychainAmino;
                fromAminoMsg(object: _59.MsgCreateSupplychainAminoMsg): _59.MsgCreateSupplychain;
                fromProtoMsg(message: _59.MsgCreateSupplychainProtoMsg): _59.MsgCreateSupplychain;
                toProto(message: _59.MsgCreateSupplychain): Uint8Array;
                toProtoMsg(message: _59.MsgCreateSupplychain): _59.MsgCreateSupplychainProtoMsg;
            };
            MsgCreateSupplychainResponse: {
                typeUrl: string;
                encode(message: _59.MsgCreateSupplychainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgCreateSupplychainResponse;
                fromPartial(object: Partial<_59.MsgCreateSupplychainResponse>): _59.MsgCreateSupplychainResponse;
                fromAmino(object: _59.MsgCreateSupplychainResponseAmino): _59.MsgCreateSupplychainResponse;
                toAmino(message: _59.MsgCreateSupplychainResponse): _59.MsgCreateSupplychainResponseAmino;
                fromAminoMsg(object: _59.MsgCreateSupplychainResponseAminoMsg): _59.MsgCreateSupplychainResponse;
                fromProtoMsg(message: _59.MsgCreateSupplychainResponseProtoMsg): _59.MsgCreateSupplychainResponse;
                toProto(message: _59.MsgCreateSupplychainResponse): Uint8Array;
                toProtoMsg(message: _59.MsgCreateSupplychainResponse): _59.MsgCreateSupplychainResponseProtoMsg;
            };
            MsgUpdateSupplychain: {
                typeUrl: string;
                encode(message: _59.MsgUpdateSupplychain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgUpdateSupplychain;
                fromPartial(object: Partial<_59.MsgUpdateSupplychain>): _59.MsgUpdateSupplychain;
                fromAmino(object: _59.MsgUpdateSupplychainAmino): _59.MsgUpdateSupplychain;
                toAmino(message: _59.MsgUpdateSupplychain): _59.MsgUpdateSupplychainAmino;
                fromAminoMsg(object: _59.MsgUpdateSupplychainAminoMsg): _59.MsgUpdateSupplychain;
                fromProtoMsg(message: _59.MsgUpdateSupplychainProtoMsg): _59.MsgUpdateSupplychain;
                toProto(message: _59.MsgUpdateSupplychain): Uint8Array;
                toProtoMsg(message: _59.MsgUpdateSupplychain): _59.MsgUpdateSupplychainProtoMsg;
            };
            MsgUpdateSupplychainResponse: {
                typeUrl: string;
                encode(_: _59.MsgUpdateSupplychainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgUpdateSupplychainResponse;
                fromPartial(_: Partial<_59.MsgUpdateSupplychainResponse>): _59.MsgUpdateSupplychainResponse;
                fromAmino(_: _59.MsgUpdateSupplychainResponseAmino): _59.MsgUpdateSupplychainResponse;
                toAmino(_: _59.MsgUpdateSupplychainResponse): _59.MsgUpdateSupplychainResponseAmino;
                fromAminoMsg(object: _59.MsgUpdateSupplychainResponseAminoMsg): _59.MsgUpdateSupplychainResponse;
                fromProtoMsg(message: _59.MsgUpdateSupplychainResponseProtoMsg): _59.MsgUpdateSupplychainResponse;
                toProto(message: _59.MsgUpdateSupplychainResponse): Uint8Array;
                toProtoMsg(message: _59.MsgUpdateSupplychainResponse): _59.MsgUpdateSupplychainResponseProtoMsg;
            };
            MsgDeleteSupplychain: {
                typeUrl: string;
                encode(message: _59.MsgDeleteSupplychain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgDeleteSupplychain;
                fromPartial(object: Partial<_59.MsgDeleteSupplychain>): _59.MsgDeleteSupplychain;
                fromAmino(object: _59.MsgDeleteSupplychainAmino): _59.MsgDeleteSupplychain;
                toAmino(message: _59.MsgDeleteSupplychain): _59.MsgDeleteSupplychainAmino;
                fromAminoMsg(object: _59.MsgDeleteSupplychainAminoMsg): _59.MsgDeleteSupplychain;
                fromProtoMsg(message: _59.MsgDeleteSupplychainProtoMsg): _59.MsgDeleteSupplychain;
                toProto(message: _59.MsgDeleteSupplychain): Uint8Array;
                toProtoMsg(message: _59.MsgDeleteSupplychain): _59.MsgDeleteSupplychainProtoMsg;
            };
            MsgDeleteSupplychainResponse: {
                typeUrl: string;
                encode(_: _59.MsgDeleteSupplychainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.MsgDeleteSupplychainResponse;
                fromPartial(_: Partial<_59.MsgDeleteSupplychainResponse>): _59.MsgDeleteSupplychainResponse;
                fromAmino(_: _59.MsgDeleteSupplychainResponseAmino): _59.MsgDeleteSupplychainResponse;
                toAmino(_: _59.MsgDeleteSupplychainResponse): _59.MsgDeleteSupplychainResponseAmino;
                fromAminoMsg(object: _59.MsgDeleteSupplychainResponseAminoMsg): _59.MsgDeleteSupplychainResponse;
                fromProtoMsg(message: _59.MsgDeleteSupplychainResponseProtoMsg): _59.MsgDeleteSupplychainResponse;
                toProto(message: _59.MsgDeleteSupplychainResponse): Uint8Array;
                toProtoMsg(message: _59.MsgDeleteSupplychainResponse): _59.MsgDeleteSupplychainResponseProtoMsg;
            };
            Supplychain: {
                typeUrl: string;
                encode(message: _58.Supplychain, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.Supplychain;
                fromPartial(object: Partial<_58.Supplychain>): _58.Supplychain;
                fromAmino(object: _58.SupplychainAmino): _58.Supplychain;
                toAmino(message: _58.Supplychain): _58.SupplychainAmino;
                fromAminoMsg(object: _58.SupplychainAminoMsg): _58.Supplychain;
                fromProtoMsg(message: _58.SupplychainProtoMsg): _58.Supplychain;
                toProto(message: _58.Supplychain): Uint8Array;
                toProtoMsg(message: _58.Supplychain): _58.SupplychainProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _57.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.QueryParamsRequest;
                fromPartial(_: Partial<_57.QueryParamsRequest>): _57.QueryParamsRequest;
                fromAmino(_: _57.QueryParamsRequestAmino): _57.QueryParamsRequest;
                toAmino(_: _57.QueryParamsRequest): _57.QueryParamsRequestAmino;
                fromAminoMsg(object: _57.QueryParamsRequestAminoMsg): _57.QueryParamsRequest;
                fromProtoMsg(message: _57.QueryParamsRequestProtoMsg): _57.QueryParamsRequest;
                toProto(message: _57.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _57.QueryParamsRequest): _57.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _57.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.QueryParamsResponse;
                fromPartial(object: Partial<_57.QueryParamsResponse>): _57.QueryParamsResponse;
                fromAmino(object: _57.QueryParamsResponseAmino): _57.QueryParamsResponse;
                toAmino(message: _57.QueryParamsResponse): _57.QueryParamsResponseAmino;
                fromAminoMsg(object: _57.QueryParamsResponseAminoMsg): _57.QueryParamsResponse;
                fromProtoMsg(message: _57.QueryParamsResponseProtoMsg): _57.QueryParamsResponse;
                toProto(message: _57.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _57.QueryParamsResponse): _57.QueryParamsResponseProtoMsg;
            };
            QueryGetBitcannaidRequest: {
                typeUrl: string;
                encode(message: _57.QueryGetBitcannaidRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.QueryGetBitcannaidRequest;
                fromPartial(object: Partial<_57.QueryGetBitcannaidRequest>): _57.QueryGetBitcannaidRequest;
                fromAmino(object: _57.QueryGetBitcannaidRequestAmino): _57.QueryGetBitcannaidRequest;
                toAmino(message: _57.QueryGetBitcannaidRequest): _57.QueryGetBitcannaidRequestAmino;
                fromAminoMsg(object: _57.QueryGetBitcannaidRequestAminoMsg): _57.QueryGetBitcannaidRequest;
                fromProtoMsg(message: _57.QueryGetBitcannaidRequestProtoMsg): _57.QueryGetBitcannaidRequest;
                toProto(message: _57.QueryGetBitcannaidRequest): Uint8Array;
                toProtoMsg(message: _57.QueryGetBitcannaidRequest): _57.QueryGetBitcannaidRequestProtoMsg;
            };
            QueryGetBitcannaidResponse: {
                typeUrl: string;
                encode(message: _57.QueryGetBitcannaidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.QueryGetBitcannaidResponse;
                fromPartial(object: Partial<_57.QueryGetBitcannaidResponse>): _57.QueryGetBitcannaidResponse;
                fromAmino(object: _57.QueryGetBitcannaidResponseAmino): _57.QueryGetBitcannaidResponse;
                toAmino(message: _57.QueryGetBitcannaidResponse): _57.QueryGetBitcannaidResponseAmino;
                fromAminoMsg(object: _57.QueryGetBitcannaidResponseAminoMsg): _57.QueryGetBitcannaidResponse;
                fromProtoMsg(message: _57.QueryGetBitcannaidResponseProtoMsg): _57.QueryGetBitcannaidResponse;
                toProto(message: _57.QueryGetBitcannaidResponse): Uint8Array;
                toProtoMsg(message: _57.QueryGetBitcannaidResponse): _57.QueryGetBitcannaidResponseProtoMsg;
            };
            QueryAllBitcannaidRequest: {
                typeUrl: string;
                encode(message: _57.QueryAllBitcannaidRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.QueryAllBitcannaidRequest;
                fromPartial(object: Partial<_57.QueryAllBitcannaidRequest>): _57.QueryAllBitcannaidRequest;
                fromAmino(object: _57.QueryAllBitcannaidRequestAmino): _57.QueryAllBitcannaidRequest;
                toAmino(message: _57.QueryAllBitcannaidRequest): _57.QueryAllBitcannaidRequestAmino;
                fromAminoMsg(object: _57.QueryAllBitcannaidRequestAminoMsg): _57.QueryAllBitcannaidRequest;
                fromProtoMsg(message: _57.QueryAllBitcannaidRequestProtoMsg): _57.QueryAllBitcannaidRequest;
                toProto(message: _57.QueryAllBitcannaidRequest): Uint8Array;
                toProtoMsg(message: _57.QueryAllBitcannaidRequest): _57.QueryAllBitcannaidRequestProtoMsg;
            };
            QueryAllBitcannaidResponse: {
                typeUrl: string;
                encode(message: _57.QueryAllBitcannaidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.QueryAllBitcannaidResponse;
                fromPartial(object: Partial<_57.QueryAllBitcannaidResponse>): _57.QueryAllBitcannaidResponse;
                fromAmino(object: _57.QueryAllBitcannaidResponseAmino): _57.QueryAllBitcannaidResponse;
                toAmino(message: _57.QueryAllBitcannaidResponse): _57.QueryAllBitcannaidResponseAmino;
                fromAminoMsg(object: _57.QueryAllBitcannaidResponseAminoMsg): _57.QueryAllBitcannaidResponse;
                fromProtoMsg(message: _57.QueryAllBitcannaidResponseProtoMsg): _57.QueryAllBitcannaidResponse;
                toProto(message: _57.QueryAllBitcannaidResponse): Uint8Array;
                toProtoMsg(message: _57.QueryAllBitcannaidResponse): _57.QueryAllBitcannaidResponseProtoMsg;
            };
            QueryGetSupplychainRequest: {
                typeUrl: string;
                encode(message: _57.QueryGetSupplychainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.QueryGetSupplychainRequest;
                fromPartial(object: Partial<_57.QueryGetSupplychainRequest>): _57.QueryGetSupplychainRequest;
                fromAmino(object: _57.QueryGetSupplychainRequestAmino): _57.QueryGetSupplychainRequest;
                toAmino(message: _57.QueryGetSupplychainRequest): _57.QueryGetSupplychainRequestAmino;
                fromAminoMsg(object: _57.QueryGetSupplychainRequestAminoMsg): _57.QueryGetSupplychainRequest;
                fromProtoMsg(message: _57.QueryGetSupplychainRequestProtoMsg): _57.QueryGetSupplychainRequest;
                toProto(message: _57.QueryGetSupplychainRequest): Uint8Array;
                toProtoMsg(message: _57.QueryGetSupplychainRequest): _57.QueryGetSupplychainRequestProtoMsg;
            };
            QueryGetSupplychainResponse: {
                typeUrl: string;
                encode(message: _57.QueryGetSupplychainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.QueryGetSupplychainResponse;
                fromPartial(object: Partial<_57.QueryGetSupplychainResponse>): _57.QueryGetSupplychainResponse;
                fromAmino(object: _57.QueryGetSupplychainResponseAmino): _57.QueryGetSupplychainResponse;
                toAmino(message: _57.QueryGetSupplychainResponse): _57.QueryGetSupplychainResponseAmino;
                fromAminoMsg(object: _57.QueryGetSupplychainResponseAminoMsg): _57.QueryGetSupplychainResponse;
                fromProtoMsg(message: _57.QueryGetSupplychainResponseProtoMsg): _57.QueryGetSupplychainResponse;
                toProto(message: _57.QueryGetSupplychainResponse): Uint8Array;
                toProtoMsg(message: _57.QueryGetSupplychainResponse): _57.QueryGetSupplychainResponseProtoMsg;
            };
            QueryAllSupplychainRequest: {
                typeUrl: string;
                encode(message: _57.QueryAllSupplychainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.QueryAllSupplychainRequest;
                fromPartial(object: Partial<_57.QueryAllSupplychainRequest>): _57.QueryAllSupplychainRequest;
                fromAmino(object: _57.QueryAllSupplychainRequestAmino): _57.QueryAllSupplychainRequest;
                toAmino(message: _57.QueryAllSupplychainRequest): _57.QueryAllSupplychainRequestAmino;
                fromAminoMsg(object: _57.QueryAllSupplychainRequestAminoMsg): _57.QueryAllSupplychainRequest;
                fromProtoMsg(message: _57.QueryAllSupplychainRequestProtoMsg): _57.QueryAllSupplychainRequest;
                toProto(message: _57.QueryAllSupplychainRequest): Uint8Array;
                toProtoMsg(message: _57.QueryAllSupplychainRequest): _57.QueryAllSupplychainRequestProtoMsg;
            };
            QueryAllSupplychainResponse: {
                typeUrl: string;
                encode(message: _57.QueryAllSupplychainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.QueryAllSupplychainResponse;
                fromPartial(object: Partial<_57.QueryAllSupplychainResponse>): _57.QueryAllSupplychainResponse;
                fromAmino(object: _57.QueryAllSupplychainResponseAmino): _57.QueryAllSupplychainResponse;
                toAmino(message: _57.QueryAllSupplychainResponse): _57.QueryAllSupplychainResponseAmino;
                fromAminoMsg(object: _57.QueryAllSupplychainResponseAminoMsg): _57.QueryAllSupplychainResponse;
                fromProtoMsg(message: _57.QueryAllSupplychainResponseProtoMsg): _57.QueryAllSupplychainResponse;
                toProto(message: _57.QueryAllSupplychainResponse): Uint8Array;
                toProtoMsg(message: _57.QueryAllSupplychainResponse): _57.QueryAllSupplychainResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(_: _56.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.Params;
                fromPartial(_: Partial<_56.Params>): _56.Params;
                fromAmino(_: _56.ParamsAmino): _56.Params;
                toAmino(_: _56.Params): _56.ParamsAmino;
                fromAminoMsg(object: _56.ParamsAminoMsg): _56.Params;
                fromProtoMsg(message: _56.ParamsProtoMsg): _56.Params;
                toProto(message: _56.Params): Uint8Array;
                toProtoMsg(message: _56.Params): _56.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _55.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.GenesisState;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
                fromAmino(object: _55.GenesisStateAmino): _55.GenesisState;
                toAmino(message: _55.GenesisState): _55.GenesisStateAmino;
                fromAminoMsg(object: _55.GenesisStateAminoMsg): _55.GenesisState;
                fromProtoMsg(message: _55.GenesisStateProtoMsg): _55.GenesisState;
                toProto(message: _55.GenesisState): Uint8Array;
                toProtoMsg(message: _55.GenesisState): _55.GenesisStateProtoMsg;
            };
            Bitcannaid: {
                typeUrl: string;
                encode(message: _54.Bitcannaid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.Bitcannaid;
                fromPartial(object: Partial<_54.Bitcannaid>): _54.Bitcannaid;
                fromAmino(object: _54.BitcannaidAmino): _54.Bitcannaid;
                toAmino(message: _54.Bitcannaid): _54.BitcannaidAmino;
                fromAminoMsg(object: _54.BitcannaidAminoMsg): _54.Bitcannaid;
                fromProtoMsg(message: _54.BitcannaidProtoMsg): _54.Bitcannaid;
                toProto(message: _54.Bitcannaid): Uint8Array;
                toProtoMsg(message: _54.Bitcannaid): _54.BitcannaidProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            BitCannaGlobal: {
                bcna: {
                    bcna: _408.MsgClientImpl;
                };
            };
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
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            BitCannaGlobal: {
                bcna: {
                    bcna: {
                        params(request?: _57.QueryParamsRequest): Promise<_57.QueryParamsResponse>;
                        bitcannaid(request: _57.QueryGetBitcannaidRequest): Promise<_57.QueryGetBitcannaidResponse>;
                        bitcannaidAll(request?: _57.QueryAllBitcannaidRequest): Promise<_57.QueryAllBitcannaidResponse>;
                        supplychain(request: _57.QueryGetSupplychainRequest): Promise<_57.QueryGetSupplychainResponse>;
                        supplychainAll(request?: _57.QueryAllSupplychainRequest): Promise<_57.QueryAllSupplychainResponse>;
                    };
                };
            };
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
        }>;
    };
}
