import * as _303 from "./data/v1/events";
import * as _304 from "./data/v1/query";
import * as _305 from "./data/v1/state";
import * as _306 from "./data/v1/tx";
import * as _307 from "./data/v1/types";
import * as _308 from "./data/v1alpha2/events";
import * as _309 from "./data/v1alpha2/genesis";
import * as _310 from "./data/v1alpha2/query";
import * as _311 from "./data/v1alpha2/tx";
import * as _312 from "./data/v1alpha2/types";
import * as _313 from "./ecocredit/basket/v1/events";
import * as _314 from "./ecocredit/basket/v1/query";
import * as _315 from "./ecocredit/basket/v1/state";
import * as _316 from "./ecocredit/basket/v1/tx";
import * as _317 from "./ecocredit/basket/v1/types";
import * as _318 from "./ecocredit/marketplace/v1/events";
import * as _319 from "./ecocredit/marketplace/v1/query";
import * as _320 from "./ecocredit/marketplace/v1/state";
import * as _321 from "./ecocredit/marketplace/v1/tx";
import * as _322 from "./ecocredit/marketplace/v1/types";
import * as _323 from "./ecocredit/orderbook/v1alpha1/memory";
import * as _324 from "./ecocredit/v1/events";
import * as _325 from "./ecocredit/v1/query";
import * as _326 from "./ecocredit/v1/state";
import * as _327 from "./ecocredit/v1/tx";
import * as _328 from "./ecocredit/v1/types";
import * as _329 from "./ecocredit/v1alpha1/events";
import * as _330 from "./ecocredit/v1alpha1/genesis";
import * as _331 from "./ecocredit/v1alpha1/query";
import * as _332 from "./ecocredit/v1alpha1/tx";
import * as _333 from "./ecocredit/v1alpha1/types";
import * as _334 from "./group/v1alpha1/events";
import * as _335 from "./group/v1alpha1/genesis";
import * as _336 from "./group/v1alpha1/query";
import * as _337 from "./group/v1alpha1/tx";
import * as _338 from "./group/v1alpha1/types";
import * as _568 from "./data/v1/query.rpc.Query";
import * as _569 from "./data/v1alpha2/query.rpc.Query";
import * as _570 from "./ecocredit/basket/v1/query.rpc.Query";
import * as _571 from "./ecocredit/marketplace/v1/query.rpc.Query";
import * as _572 from "./ecocredit/v1/query.rpc.Query";
import * as _573 from "./ecocredit/v1alpha1/query.rpc.Query";
import * as _574 from "./group/v1alpha1/query.rpc.Query";
import * as _575 from "./data/v1/tx.rpc.msg";
import * as _576 from "./data/v1alpha2/tx.rpc.msg";
import * as _577 from "./ecocredit/basket/v1/tx.rpc.msg";
import * as _578 from "./ecocredit/marketplace/v1/tx.rpc.msg";
import * as _579 from "./ecocredit/v1/tx.rpc.msg";
import * as _580 from "./ecocredit/v1alpha1/tx.rpc.msg";
import * as _581 from "./group/v1alpha1/tx.rpc.msg";
export declare namespace regen {
    namespace data {
        const v1: {
            MsgClientImpl: typeof _575.MsgClientImpl;
            QueryClientImpl: typeof _568.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                byIRI(request: _304.QueryByIRIRequest): Promise<_304.QueryByIRIResponse>;
                byHash(request: _304.QueryByHashRequest): Promise<_304.QueryByHashResponse>;
                byAttestor(request: _304.QueryByAttestorRequest): Promise<_304.QueryByAttestorResponse>;
                iRIByHash(request: _304.QueryIRIByHashRequest): Promise<_304.QueryIRIByHashResponse>;
                iRIByRawHash(request: _304.QueryIRIByRawHashRequest): Promise<_304.QueryIRIByRawHashResponse>;
                iRIByGraphHash(request: _304.QueryIRIByGraphHashRequest): Promise<_304.QueryIRIByGraphHashResponse>;
                hashByIRI(request: _304.QueryHashByIRIRequest): Promise<_304.QueryHashByIRIResponse>;
                attestorsByIRI(request: _304.QueryAttestorsByIRIRequest): Promise<_304.QueryAttestorsByIRIResponse>;
                attestorsByHash(request: _304.QueryAttestorsByHashRequest): Promise<_304.QueryAttestorsByHashResponse>;
                resolversByIRI(request: _304.QueryResolversByIRIRequest): Promise<_304.QueryResolversByIRIResponse>;
                resolversByHash(request: _304.QueryResolversByHashRequest): Promise<_304.QueryResolversByHashResponse>;
                resolverInfo(request: _304.QueryResolverInfoRequest): Promise<_304.QueryResolverInfoResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchor(value: _306.MsgAnchor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    attest(value: _306.MsgAttest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    defineResolver(value: _306.MsgDefineResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerResolver(value: _306.MsgRegisterResolver): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchor(value: _306.MsgAnchor): {
                        typeUrl: string;
                        value: _306.MsgAnchor;
                    };
                    attest(value: _306.MsgAttest): {
                        typeUrl: string;
                        value: _306.MsgAttest;
                    };
                    defineResolver(value: _306.MsgDefineResolver): {
                        typeUrl: string;
                        value: _306.MsgDefineResolver;
                    };
                    registerResolver(value: _306.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _306.MsgRegisterResolver;
                    };
                };
                fromPartial: {
                    anchor(value: _306.MsgAnchor): {
                        typeUrl: string;
                        value: _306.MsgAnchor;
                    };
                    attest(value: _306.MsgAttest): {
                        typeUrl: string;
                        value: _306.MsgAttest;
                    };
                    defineResolver(value: _306.MsgDefineResolver): {
                        typeUrl: string;
                        value: _306.MsgDefineResolver;
                    };
                    registerResolver(value: _306.MsgRegisterResolver): {
                        typeUrl: string;
                        value: _306.MsgRegisterResolver;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1.MsgAnchor": {
                    aminoType: string;
                    toAmino: (message: _306.MsgAnchor) => _306.MsgAnchorAmino;
                    fromAmino: (object: _306.MsgAnchorAmino) => _306.MsgAnchor;
                };
                "/regen.data.v1.MsgAttest": {
                    aminoType: string;
                    toAmino: (message: _306.MsgAttest) => _306.MsgAttestAmino;
                    fromAmino: (object: _306.MsgAttestAmino) => _306.MsgAttest;
                };
                "/regen.data.v1.MsgDefineResolver": {
                    aminoType: string;
                    toAmino: (message: _306.MsgDefineResolver) => _306.MsgDefineResolverAmino;
                    fromAmino: (object: _306.MsgDefineResolverAmino) => _306.MsgDefineResolver;
                };
                "/regen.data.v1.MsgRegisterResolver": {
                    aminoType: string;
                    toAmino: (message: _306.MsgRegisterResolver) => _306.MsgRegisterResolverAmino;
                    fromAmino: (object: _306.MsgRegisterResolverAmino) => _306.MsgRegisterResolver;
                };
            };
            digestAlgorithmFromJSON(object: any): _307.DigestAlgorithm;
            digestAlgorithmToJSON(object: _307.DigestAlgorithm): string;
            rawMediaTypeFromJSON(object: any): _307.RawMediaType;
            rawMediaTypeToJSON(object: _307.RawMediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _307.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _307.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _307.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _307.GraphMerkleTree): string;
            DigestAlgorithm: typeof _307.DigestAlgorithm;
            DigestAlgorithmSDKType: typeof _307.DigestAlgorithm;
            DigestAlgorithmAmino: typeof _307.DigestAlgorithm;
            RawMediaType: typeof _307.RawMediaType;
            RawMediaTypeSDKType: typeof _307.RawMediaType;
            RawMediaTypeAmino: typeof _307.RawMediaType;
            GraphCanonicalizationAlgorithm: typeof _307.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmSDKType: typeof _307.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmAmino: typeof _307.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _307.GraphMerkleTree;
            GraphMerkleTreeSDKType: typeof _307.GraphMerkleTree;
            GraphMerkleTreeAmino: typeof _307.GraphMerkleTree;
            ContentHash: {
                typeUrl: string;
                encode(message: _307.ContentHash, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _307.ContentHash;
                fromPartial(object: Partial<_307.ContentHash>): _307.ContentHash;
                fromAmino(object: _307.ContentHashAmino): _307.ContentHash;
                toAmino(message: _307.ContentHash): _307.ContentHashAmino;
                fromAminoMsg(object: _307.ContentHashAminoMsg): _307.ContentHash;
                fromProtoMsg(message: _307.ContentHashProtoMsg): _307.ContentHash;
                toProto(message: _307.ContentHash): Uint8Array;
                toProtoMsg(message: _307.ContentHash): _307.ContentHashProtoMsg;
            };
            ContentHash_Raw: {
                typeUrl: string;
                encode(message: _307.ContentHash_Raw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _307.ContentHash_Raw;
                fromPartial(object: Partial<_307.ContentHash_Raw>): _307.ContentHash_Raw;
                fromAmino(object: _307.ContentHash_RawAmino): _307.ContentHash_Raw;
                toAmino(message: _307.ContentHash_Raw): _307.ContentHash_RawAmino;
                fromAminoMsg(object: _307.ContentHash_RawAminoMsg): _307.ContentHash_Raw;
                fromProtoMsg(message: _307.ContentHash_RawProtoMsg): _307.ContentHash_Raw;
                toProto(message: _307.ContentHash_Raw): Uint8Array;
                toProtoMsg(message: _307.ContentHash_Raw): _307.ContentHash_RawProtoMsg;
            };
            ContentHash_Graph: {
                typeUrl: string;
                encode(message: _307.ContentHash_Graph, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _307.ContentHash_Graph;
                fromPartial(object: Partial<_307.ContentHash_Graph>): _307.ContentHash_Graph;
                fromAmino(object: _307.ContentHash_GraphAmino): _307.ContentHash_Graph;
                toAmino(message: _307.ContentHash_Graph): _307.ContentHash_GraphAmino;
                fromAminoMsg(object: _307.ContentHash_GraphAminoMsg): _307.ContentHash_Graph;
                fromProtoMsg(message: _307.ContentHash_GraphProtoMsg): _307.ContentHash_Graph;
                toProto(message: _307.ContentHash_Graph): Uint8Array;
                toProtoMsg(message: _307.ContentHash_Graph): _307.ContentHash_GraphProtoMsg;
            };
            ContentEntry: {
                typeUrl: string;
                encode(message: _307.ContentEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _307.ContentEntry;
                fromPartial(object: Partial<_307.ContentEntry>): _307.ContentEntry;
                fromAmino(object: _307.ContentEntryAmino): _307.ContentEntry;
                toAmino(message: _307.ContentEntry): _307.ContentEntryAmino;
                fromAminoMsg(object: _307.ContentEntryAminoMsg): _307.ContentEntry;
                fromProtoMsg(message: _307.ContentEntryProtoMsg): _307.ContentEntry;
                toProto(message: _307.ContentEntry): Uint8Array;
                toProtoMsg(message: _307.ContentEntry): _307.ContentEntryProtoMsg;
            };
            AttestorEntry: {
                typeUrl: string;
                encode(message: _307.AttestorEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _307.AttestorEntry;
                fromPartial(object: Partial<_307.AttestorEntry>): _307.AttestorEntry;
                fromAmino(object: _307.AttestorEntryAmino): _307.AttestorEntry;
                toAmino(message: _307.AttestorEntry): _307.AttestorEntryAmino;
                fromAminoMsg(object: _307.AttestorEntryAminoMsg): _307.AttestorEntry;
                fromProtoMsg(message: _307.AttestorEntryProtoMsg): _307.AttestorEntry;
                toProto(message: _307.AttestorEntry): Uint8Array;
                toProtoMsg(message: _307.AttestorEntry): _307.AttestorEntryProtoMsg;
            };
            ContentHashes: {
                typeUrl: string;
                encode(message: _307.ContentHashes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _307.ContentHashes;
                fromPartial(object: Partial<_307.ContentHashes>): _307.ContentHashes;
                fromAmino(object: _307.ContentHashesAmino): _307.ContentHashes;
                toAmino(message: _307.ContentHashes): _307.ContentHashesAmino;
                fromAminoMsg(object: _307.ContentHashesAminoMsg): _307.ContentHashes;
                fromProtoMsg(message: _307.ContentHashesProtoMsg): _307.ContentHashes;
                toProto(message: _307.ContentHashes): Uint8Array;
                toProtoMsg(message: _307.ContentHashes): _307.ContentHashesProtoMsg;
            };
            MsgAnchor: {
                typeUrl: string;
                encode(message: _306.MsgAnchor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _306.MsgAnchor;
                fromPartial(object: Partial<_306.MsgAnchor>): _306.MsgAnchor;
                fromAmino(object: _306.MsgAnchorAmino): _306.MsgAnchor;
                toAmino(message: _306.MsgAnchor): _306.MsgAnchorAmino;
                fromAminoMsg(object: _306.MsgAnchorAminoMsg): _306.MsgAnchor;
                fromProtoMsg(message: _306.MsgAnchorProtoMsg): _306.MsgAnchor;
                toProto(message: _306.MsgAnchor): Uint8Array;
                toProtoMsg(message: _306.MsgAnchor): _306.MsgAnchorProtoMsg;
            };
            MsgAnchorResponse: {
                typeUrl: string;
                encode(message: _306.MsgAnchorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _306.MsgAnchorResponse;
                fromPartial(object: Partial<_306.MsgAnchorResponse>): _306.MsgAnchorResponse;
                fromAmino(object: _306.MsgAnchorResponseAmino): _306.MsgAnchorResponse;
                toAmino(message: _306.MsgAnchorResponse): _306.MsgAnchorResponseAmino;
                fromAminoMsg(object: _306.MsgAnchorResponseAminoMsg): _306.MsgAnchorResponse;
                fromProtoMsg(message: _306.MsgAnchorResponseProtoMsg): _306.MsgAnchorResponse;
                toProto(message: _306.MsgAnchorResponse): Uint8Array;
                toProtoMsg(message: _306.MsgAnchorResponse): _306.MsgAnchorResponseProtoMsg;
            };
            MsgAttest: {
                typeUrl: string;
                encode(message: _306.MsgAttest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _306.MsgAttest;
                fromPartial(object: Partial<_306.MsgAttest>): _306.MsgAttest;
                fromAmino(object: _306.MsgAttestAmino): _306.MsgAttest;
                toAmino(message: _306.MsgAttest): _306.MsgAttestAmino;
                fromAminoMsg(object: _306.MsgAttestAminoMsg): _306.MsgAttest;
                fromProtoMsg(message: _306.MsgAttestProtoMsg): _306.MsgAttest;
                toProto(message: _306.MsgAttest): Uint8Array;
                toProtoMsg(message: _306.MsgAttest): _306.MsgAttestProtoMsg;
            };
            MsgAttestResponse: {
                typeUrl: string;
                encode(message: _306.MsgAttestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _306.MsgAttestResponse;
                fromPartial(object: Partial<_306.MsgAttestResponse>): _306.MsgAttestResponse;
                fromAmino(object: _306.MsgAttestResponseAmino): _306.MsgAttestResponse;
                toAmino(message: _306.MsgAttestResponse): _306.MsgAttestResponseAmino;
                fromAminoMsg(object: _306.MsgAttestResponseAminoMsg): _306.MsgAttestResponse;
                fromProtoMsg(message: _306.MsgAttestResponseProtoMsg): _306.MsgAttestResponse;
                toProto(message: _306.MsgAttestResponse): Uint8Array;
                toProtoMsg(message: _306.MsgAttestResponse): _306.MsgAttestResponseProtoMsg;
            };
            MsgDefineResolver: {
                typeUrl: string;
                encode(message: _306.MsgDefineResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _306.MsgDefineResolver;
                fromPartial(object: Partial<_306.MsgDefineResolver>): _306.MsgDefineResolver;
                fromAmino(object: _306.MsgDefineResolverAmino): _306.MsgDefineResolver;
                toAmino(message: _306.MsgDefineResolver): _306.MsgDefineResolverAmino;
                fromAminoMsg(object: _306.MsgDefineResolverAminoMsg): _306.MsgDefineResolver;
                fromProtoMsg(message: _306.MsgDefineResolverProtoMsg): _306.MsgDefineResolver;
                toProto(message: _306.MsgDefineResolver): Uint8Array;
                toProtoMsg(message: _306.MsgDefineResolver): _306.MsgDefineResolverProtoMsg;
            };
            MsgDefineResolverResponse: {
                typeUrl: string;
                encode(message: _306.MsgDefineResolverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _306.MsgDefineResolverResponse;
                fromPartial(object: Partial<_306.MsgDefineResolverResponse>): _306.MsgDefineResolverResponse;
                fromAmino(object: _306.MsgDefineResolverResponseAmino): _306.MsgDefineResolverResponse;
                toAmino(message: _306.MsgDefineResolverResponse): _306.MsgDefineResolverResponseAmino;
                fromAminoMsg(object: _306.MsgDefineResolverResponseAminoMsg): _306.MsgDefineResolverResponse;
                fromProtoMsg(message: _306.MsgDefineResolverResponseProtoMsg): _306.MsgDefineResolverResponse;
                toProto(message: _306.MsgDefineResolverResponse): Uint8Array;
                toProtoMsg(message: _306.MsgDefineResolverResponse): _306.MsgDefineResolverResponseProtoMsg;
            };
            MsgRegisterResolver: {
                typeUrl: string;
                encode(message: _306.MsgRegisterResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _306.MsgRegisterResolver;
                fromPartial(object: Partial<_306.MsgRegisterResolver>): _306.MsgRegisterResolver;
                fromAmino(object: _306.MsgRegisterResolverAmino): _306.MsgRegisterResolver;
                toAmino(message: _306.MsgRegisterResolver): _306.MsgRegisterResolverAmino;
                fromAminoMsg(object: _306.MsgRegisterResolverAminoMsg): _306.MsgRegisterResolver;
                fromProtoMsg(message: _306.MsgRegisterResolverProtoMsg): _306.MsgRegisterResolver;
                toProto(message: _306.MsgRegisterResolver): Uint8Array;
                toProtoMsg(message: _306.MsgRegisterResolver): _306.MsgRegisterResolverProtoMsg;
            };
            MsgRegisterResolverResponse: {
                typeUrl: string;
                encode(_: _306.MsgRegisterResolverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _306.MsgRegisterResolverResponse;
                fromPartial(_: Partial<_306.MsgRegisterResolverResponse>): _306.MsgRegisterResolverResponse;
                fromAmino(_: _306.MsgRegisterResolverResponseAmino): _306.MsgRegisterResolverResponse;
                toAmino(_: _306.MsgRegisterResolverResponse): _306.MsgRegisterResolverResponseAmino;
                fromAminoMsg(object: _306.MsgRegisterResolverResponseAminoMsg): _306.MsgRegisterResolverResponse;
                fromProtoMsg(message: _306.MsgRegisterResolverResponseProtoMsg): _306.MsgRegisterResolverResponse;
                toProto(message: _306.MsgRegisterResolverResponse): Uint8Array;
                toProtoMsg(message: _306.MsgRegisterResolverResponse): _306.MsgRegisterResolverResponseProtoMsg;
            };
            DataID: {
                typeUrl: string;
                encode(message: _305.DataID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _305.DataID;
                fromPartial(object: Partial<_305.DataID>): _305.DataID;
                fromAmino(object: _305.DataIDAmino): _305.DataID;
                toAmino(message: _305.DataID): _305.DataIDAmino;
                fromAminoMsg(object: _305.DataIDAminoMsg): _305.DataID;
                fromProtoMsg(message: _305.DataIDProtoMsg): _305.DataID;
                toProto(message: _305.DataID): Uint8Array;
                toProtoMsg(message: _305.DataID): _305.DataIDProtoMsg;
            };
            DataAnchor: {
                typeUrl: string;
                encode(message: _305.DataAnchor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _305.DataAnchor;
                fromPartial(object: Partial<_305.DataAnchor>): _305.DataAnchor;
                fromAmino(object: _305.DataAnchorAmino): _305.DataAnchor;
                toAmino(message: _305.DataAnchor): _305.DataAnchorAmino;
                fromAminoMsg(object: _305.DataAnchorAminoMsg): _305.DataAnchor;
                fromProtoMsg(message: _305.DataAnchorProtoMsg): _305.DataAnchor;
                toProto(message: _305.DataAnchor): Uint8Array;
                toProtoMsg(message: _305.DataAnchor): _305.DataAnchorProtoMsg;
            };
            DataAttestor: {
                typeUrl: string;
                encode(message: _305.DataAttestor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _305.DataAttestor;
                fromPartial(object: Partial<_305.DataAttestor>): _305.DataAttestor;
                fromAmino(object: _305.DataAttestorAmino): _305.DataAttestor;
                toAmino(message: _305.DataAttestor): _305.DataAttestorAmino;
                fromAminoMsg(object: _305.DataAttestorAminoMsg): _305.DataAttestor;
                fromProtoMsg(message: _305.DataAttestorProtoMsg): _305.DataAttestor;
                toProto(message: _305.DataAttestor): Uint8Array;
                toProtoMsg(message: _305.DataAttestor): _305.DataAttestorProtoMsg;
            };
            ResolverInfo: {
                typeUrl: string;
                encode(message: _305.ResolverInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _305.ResolverInfo;
                fromPartial(object: Partial<_305.ResolverInfo>): _305.ResolverInfo;
                fromAmino(object: _305.ResolverInfoAmino): _305.ResolverInfo;
                toAmino(message: _305.ResolverInfo): _305.ResolverInfoAmino;
                fromAminoMsg(object: _305.ResolverInfoAminoMsg): _305.ResolverInfo;
                fromProtoMsg(message: _305.ResolverInfoProtoMsg): _305.ResolverInfo;
                toProto(message: _305.ResolverInfo): Uint8Array;
                toProtoMsg(message: _305.ResolverInfo): _305.ResolverInfoProtoMsg;
            };
            DataResolver: {
                typeUrl: string;
                encode(message: _305.DataResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _305.DataResolver;
                fromPartial(object: Partial<_305.DataResolver>): _305.DataResolver;
                fromAmino(object: _305.DataResolverAmino): _305.DataResolver;
                toAmino(message: _305.DataResolver): _305.DataResolverAmino;
                fromAminoMsg(object: _305.DataResolverAminoMsg): _305.DataResolver;
                fromProtoMsg(message: _305.DataResolverProtoMsg): _305.DataResolver;
                toProto(message: _305.DataResolver): Uint8Array;
                toProtoMsg(message: _305.DataResolver): _305.DataResolverProtoMsg;
            };
            QueryByIRIRequest: {
                typeUrl: string;
                encode(message: _304.QueryByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryByIRIRequest;
                fromPartial(object: Partial<_304.QueryByIRIRequest>): _304.QueryByIRIRequest;
                fromAmino(object: _304.QueryByIRIRequestAmino): _304.QueryByIRIRequest;
                toAmino(message: _304.QueryByIRIRequest): _304.QueryByIRIRequestAmino;
                fromAminoMsg(object: _304.QueryByIRIRequestAminoMsg): _304.QueryByIRIRequest;
                fromProtoMsg(message: _304.QueryByIRIRequestProtoMsg): _304.QueryByIRIRequest;
                toProto(message: _304.QueryByIRIRequest): Uint8Array;
                toProtoMsg(message: _304.QueryByIRIRequest): _304.QueryByIRIRequestProtoMsg;
            };
            QueryByIRIResponse: {
                typeUrl: string;
                encode(message: _304.QueryByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryByIRIResponse;
                fromPartial(object: Partial<_304.QueryByIRIResponse>): _304.QueryByIRIResponse;
                fromAmino(object: _304.QueryByIRIResponseAmino): _304.QueryByIRIResponse;
                toAmino(message: _304.QueryByIRIResponse): _304.QueryByIRIResponseAmino;
                fromAminoMsg(object: _304.QueryByIRIResponseAminoMsg): _304.QueryByIRIResponse;
                fromProtoMsg(message: _304.QueryByIRIResponseProtoMsg): _304.QueryByIRIResponse;
                toProto(message: _304.QueryByIRIResponse): Uint8Array;
                toProtoMsg(message: _304.QueryByIRIResponse): _304.QueryByIRIResponseProtoMsg;
            };
            QueryByHashRequest: {
                typeUrl: string;
                encode(message: _304.QueryByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryByHashRequest;
                fromPartial(object: Partial<_304.QueryByHashRequest>): _304.QueryByHashRequest;
                fromAmino(object: _304.QueryByHashRequestAmino): _304.QueryByHashRequest;
                toAmino(message: _304.QueryByHashRequest): _304.QueryByHashRequestAmino;
                fromAminoMsg(object: _304.QueryByHashRequestAminoMsg): _304.QueryByHashRequest;
                fromProtoMsg(message: _304.QueryByHashRequestProtoMsg): _304.QueryByHashRequest;
                toProto(message: _304.QueryByHashRequest): Uint8Array;
                toProtoMsg(message: _304.QueryByHashRequest): _304.QueryByHashRequestProtoMsg;
            };
            QueryByHashResponse: {
                typeUrl: string;
                encode(message: _304.QueryByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryByHashResponse;
                fromPartial(object: Partial<_304.QueryByHashResponse>): _304.QueryByHashResponse;
                fromAmino(object: _304.QueryByHashResponseAmino): _304.QueryByHashResponse;
                toAmino(message: _304.QueryByHashResponse): _304.QueryByHashResponseAmino;
                fromAminoMsg(object: _304.QueryByHashResponseAminoMsg): _304.QueryByHashResponse;
                fromProtoMsg(message: _304.QueryByHashResponseProtoMsg): _304.QueryByHashResponse;
                toProto(message: _304.QueryByHashResponse): Uint8Array;
                toProtoMsg(message: _304.QueryByHashResponse): _304.QueryByHashResponseProtoMsg;
            };
            QueryByAttestorRequest: {
                typeUrl: string;
                encode(message: _304.QueryByAttestorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryByAttestorRequest;
                fromPartial(object: Partial<_304.QueryByAttestorRequest>): _304.QueryByAttestorRequest;
                fromAmino(object: _304.QueryByAttestorRequestAmino): _304.QueryByAttestorRequest;
                toAmino(message: _304.QueryByAttestorRequest): _304.QueryByAttestorRequestAmino;
                fromAminoMsg(object: _304.QueryByAttestorRequestAminoMsg): _304.QueryByAttestorRequest;
                fromProtoMsg(message: _304.QueryByAttestorRequestProtoMsg): _304.QueryByAttestorRequest;
                toProto(message: _304.QueryByAttestorRequest): Uint8Array;
                toProtoMsg(message: _304.QueryByAttestorRequest): _304.QueryByAttestorRequestProtoMsg;
            };
            QueryByAttestorResponse: {
                typeUrl: string;
                encode(message: _304.QueryByAttestorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryByAttestorResponse;
                fromPartial(object: Partial<_304.QueryByAttestorResponse>): _304.QueryByAttestorResponse;
                fromAmino(object: _304.QueryByAttestorResponseAmino): _304.QueryByAttestorResponse;
                toAmino(message: _304.QueryByAttestorResponse): _304.QueryByAttestorResponseAmino;
                fromAminoMsg(object: _304.QueryByAttestorResponseAminoMsg): _304.QueryByAttestorResponse;
                fromProtoMsg(message: _304.QueryByAttestorResponseProtoMsg): _304.QueryByAttestorResponse;
                toProto(message: _304.QueryByAttestorResponse): Uint8Array;
                toProtoMsg(message: _304.QueryByAttestorResponse): _304.QueryByAttestorResponseProtoMsg;
            };
            QueryIRIByHashRequest: {
                typeUrl: string;
                encode(message: _304.QueryIRIByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryIRIByHashRequest;
                fromPartial(object: Partial<_304.QueryIRIByHashRequest>): _304.QueryIRIByHashRequest;
                fromAmino(object: _304.QueryIRIByHashRequestAmino): _304.QueryIRIByHashRequest;
                toAmino(message: _304.QueryIRIByHashRequest): _304.QueryIRIByHashRequestAmino;
                fromAminoMsg(object: _304.QueryIRIByHashRequestAminoMsg): _304.QueryIRIByHashRequest;
                fromProtoMsg(message: _304.QueryIRIByHashRequestProtoMsg): _304.QueryIRIByHashRequest;
                toProto(message: _304.QueryIRIByHashRequest): Uint8Array;
                toProtoMsg(message: _304.QueryIRIByHashRequest): _304.QueryIRIByHashRequestProtoMsg;
            };
            QueryIRIByHashResponse: {
                typeUrl: string;
                encode(message: _304.QueryIRIByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryIRIByHashResponse;
                fromPartial(object: Partial<_304.QueryIRIByHashResponse>): _304.QueryIRIByHashResponse;
                fromAmino(object: _304.QueryIRIByHashResponseAmino): _304.QueryIRIByHashResponse;
                toAmino(message: _304.QueryIRIByHashResponse): _304.QueryIRIByHashResponseAmino;
                fromAminoMsg(object: _304.QueryIRIByHashResponseAminoMsg): _304.QueryIRIByHashResponse;
                fromProtoMsg(message: _304.QueryIRIByHashResponseProtoMsg): _304.QueryIRIByHashResponse;
                toProto(message: _304.QueryIRIByHashResponse): Uint8Array;
                toProtoMsg(message: _304.QueryIRIByHashResponse): _304.QueryIRIByHashResponseProtoMsg;
            };
            QueryIRIByRawHashRequest: {
                typeUrl: string;
                encode(message: _304.QueryIRIByRawHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryIRIByRawHashRequest;
                fromPartial(object: Partial<_304.QueryIRIByRawHashRequest>): _304.QueryIRIByRawHashRequest;
                fromAmino(object: _304.QueryIRIByRawHashRequestAmino): _304.QueryIRIByRawHashRequest;
                toAmino(message: _304.QueryIRIByRawHashRequest): _304.QueryIRIByRawHashRequestAmino;
                fromAminoMsg(object: _304.QueryIRIByRawHashRequestAminoMsg): _304.QueryIRIByRawHashRequest;
                fromProtoMsg(message: _304.QueryIRIByRawHashRequestProtoMsg): _304.QueryIRIByRawHashRequest;
                toProto(message: _304.QueryIRIByRawHashRequest): Uint8Array;
                toProtoMsg(message: _304.QueryIRIByRawHashRequest): _304.QueryIRIByRawHashRequestProtoMsg;
            };
            QueryIRIByRawHashResponse: {
                typeUrl: string;
                encode(message: _304.QueryIRIByRawHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryIRIByRawHashResponse;
                fromPartial(object: Partial<_304.QueryIRIByRawHashResponse>): _304.QueryIRIByRawHashResponse;
                fromAmino(object: _304.QueryIRIByRawHashResponseAmino): _304.QueryIRIByRawHashResponse;
                toAmino(message: _304.QueryIRIByRawHashResponse): _304.QueryIRIByRawHashResponseAmino;
                fromAminoMsg(object: _304.QueryIRIByRawHashResponseAminoMsg): _304.QueryIRIByRawHashResponse;
                fromProtoMsg(message: _304.QueryIRIByRawHashResponseProtoMsg): _304.QueryIRIByRawHashResponse;
                toProto(message: _304.QueryIRIByRawHashResponse): Uint8Array;
                toProtoMsg(message: _304.QueryIRIByRawHashResponse): _304.QueryIRIByRawHashResponseProtoMsg;
            };
            QueryIRIByGraphHashRequest: {
                typeUrl: string;
                encode(message: _304.QueryIRIByGraphHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryIRIByGraphHashRequest;
                fromPartial(object: Partial<_304.QueryIRIByGraphHashRequest>): _304.QueryIRIByGraphHashRequest;
                fromAmino(object: _304.QueryIRIByGraphHashRequestAmino): _304.QueryIRIByGraphHashRequest;
                toAmino(message: _304.QueryIRIByGraphHashRequest): _304.QueryIRIByGraphHashRequestAmino;
                fromAminoMsg(object: _304.QueryIRIByGraphHashRequestAminoMsg): _304.QueryIRIByGraphHashRequest;
                fromProtoMsg(message: _304.QueryIRIByGraphHashRequestProtoMsg): _304.QueryIRIByGraphHashRequest;
                toProto(message: _304.QueryIRIByGraphHashRequest): Uint8Array;
                toProtoMsg(message: _304.QueryIRIByGraphHashRequest): _304.QueryIRIByGraphHashRequestProtoMsg;
            };
            QueryIRIByGraphHashResponse: {
                typeUrl: string;
                encode(message: _304.QueryIRIByGraphHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryIRIByGraphHashResponse;
                fromPartial(object: Partial<_304.QueryIRIByGraphHashResponse>): _304.QueryIRIByGraphHashResponse;
                fromAmino(object: _304.QueryIRIByGraphHashResponseAmino): _304.QueryIRIByGraphHashResponse;
                toAmino(message: _304.QueryIRIByGraphHashResponse): _304.QueryIRIByGraphHashResponseAmino;
                fromAminoMsg(object: _304.QueryIRIByGraphHashResponseAminoMsg): _304.QueryIRIByGraphHashResponse;
                fromProtoMsg(message: _304.QueryIRIByGraphHashResponseProtoMsg): _304.QueryIRIByGraphHashResponse;
                toProto(message: _304.QueryIRIByGraphHashResponse): Uint8Array;
                toProtoMsg(message: _304.QueryIRIByGraphHashResponse): _304.QueryIRIByGraphHashResponseProtoMsg;
            };
            QueryHashByIRIRequest: {
                typeUrl: string;
                encode(message: _304.QueryHashByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryHashByIRIRequest;
                fromPartial(object: Partial<_304.QueryHashByIRIRequest>): _304.QueryHashByIRIRequest;
                fromAmino(object: _304.QueryHashByIRIRequestAmino): _304.QueryHashByIRIRequest;
                toAmino(message: _304.QueryHashByIRIRequest): _304.QueryHashByIRIRequestAmino;
                fromAminoMsg(object: _304.QueryHashByIRIRequestAminoMsg): _304.QueryHashByIRIRequest;
                fromProtoMsg(message: _304.QueryHashByIRIRequestProtoMsg): _304.QueryHashByIRIRequest;
                toProto(message: _304.QueryHashByIRIRequest): Uint8Array;
                toProtoMsg(message: _304.QueryHashByIRIRequest): _304.QueryHashByIRIRequestProtoMsg;
            };
            QueryHashByIRIResponse: {
                typeUrl: string;
                encode(message: _304.QueryHashByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryHashByIRIResponse;
                fromPartial(object: Partial<_304.QueryHashByIRIResponse>): _304.QueryHashByIRIResponse;
                fromAmino(object: _304.QueryHashByIRIResponseAmino): _304.QueryHashByIRIResponse;
                toAmino(message: _304.QueryHashByIRIResponse): _304.QueryHashByIRIResponseAmino;
                fromAminoMsg(object: _304.QueryHashByIRIResponseAminoMsg): _304.QueryHashByIRIResponse;
                fromProtoMsg(message: _304.QueryHashByIRIResponseProtoMsg): _304.QueryHashByIRIResponse;
                toProto(message: _304.QueryHashByIRIResponse): Uint8Array;
                toProtoMsg(message: _304.QueryHashByIRIResponse): _304.QueryHashByIRIResponseProtoMsg;
            };
            QueryAttestorsByIRIRequest: {
                typeUrl: string;
                encode(message: _304.QueryAttestorsByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryAttestorsByIRIRequest;
                fromPartial(object: Partial<_304.QueryAttestorsByIRIRequest>): _304.QueryAttestorsByIRIRequest;
                fromAmino(object: _304.QueryAttestorsByIRIRequestAmino): _304.QueryAttestorsByIRIRequest;
                toAmino(message: _304.QueryAttestorsByIRIRequest): _304.QueryAttestorsByIRIRequestAmino;
                fromAminoMsg(object: _304.QueryAttestorsByIRIRequestAminoMsg): _304.QueryAttestorsByIRIRequest;
                fromProtoMsg(message: _304.QueryAttestorsByIRIRequestProtoMsg): _304.QueryAttestorsByIRIRequest;
                toProto(message: _304.QueryAttestorsByIRIRequest): Uint8Array;
                toProtoMsg(message: _304.QueryAttestorsByIRIRequest): _304.QueryAttestorsByIRIRequestProtoMsg;
            };
            QueryAttestorsByIRIResponse: {
                typeUrl: string;
                encode(message: _304.QueryAttestorsByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryAttestorsByIRIResponse;
                fromPartial(object: Partial<_304.QueryAttestorsByIRIResponse>): _304.QueryAttestorsByIRIResponse;
                fromAmino(object: _304.QueryAttestorsByIRIResponseAmino): _304.QueryAttestorsByIRIResponse;
                toAmino(message: _304.QueryAttestorsByIRIResponse): _304.QueryAttestorsByIRIResponseAmino;
                fromAminoMsg(object: _304.QueryAttestorsByIRIResponseAminoMsg): _304.QueryAttestorsByIRIResponse;
                fromProtoMsg(message: _304.QueryAttestorsByIRIResponseProtoMsg): _304.QueryAttestorsByIRIResponse;
                toProto(message: _304.QueryAttestorsByIRIResponse): Uint8Array;
                toProtoMsg(message: _304.QueryAttestorsByIRIResponse): _304.QueryAttestorsByIRIResponseProtoMsg;
            };
            QueryAttestorsByHashRequest: {
                typeUrl: string;
                encode(message: _304.QueryAttestorsByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryAttestorsByHashRequest;
                fromPartial(object: Partial<_304.QueryAttestorsByHashRequest>): _304.QueryAttestorsByHashRequest;
                fromAmino(object: _304.QueryAttestorsByHashRequestAmino): _304.QueryAttestorsByHashRequest;
                toAmino(message: _304.QueryAttestorsByHashRequest): _304.QueryAttestorsByHashRequestAmino;
                fromAminoMsg(object: _304.QueryAttestorsByHashRequestAminoMsg): _304.QueryAttestorsByHashRequest;
                fromProtoMsg(message: _304.QueryAttestorsByHashRequestProtoMsg): _304.QueryAttestorsByHashRequest;
                toProto(message: _304.QueryAttestorsByHashRequest): Uint8Array;
                toProtoMsg(message: _304.QueryAttestorsByHashRequest): _304.QueryAttestorsByHashRequestProtoMsg;
            };
            QueryAttestorsByHashResponse: {
                typeUrl: string;
                encode(message: _304.QueryAttestorsByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryAttestorsByHashResponse;
                fromPartial(object: Partial<_304.QueryAttestorsByHashResponse>): _304.QueryAttestorsByHashResponse;
                fromAmino(object: _304.QueryAttestorsByHashResponseAmino): _304.QueryAttestorsByHashResponse;
                toAmino(message: _304.QueryAttestorsByHashResponse): _304.QueryAttestorsByHashResponseAmino;
                fromAminoMsg(object: _304.QueryAttestorsByHashResponseAminoMsg): _304.QueryAttestorsByHashResponse;
                fromProtoMsg(message: _304.QueryAttestorsByHashResponseProtoMsg): _304.QueryAttestorsByHashResponse;
                toProto(message: _304.QueryAttestorsByHashResponse): Uint8Array;
                toProtoMsg(message: _304.QueryAttestorsByHashResponse): _304.QueryAttestorsByHashResponseProtoMsg;
            };
            QueryResolversByIRIRequest: {
                typeUrl: string;
                encode(message: _304.QueryResolversByIRIRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryResolversByIRIRequest;
                fromPartial(object: Partial<_304.QueryResolversByIRIRequest>): _304.QueryResolversByIRIRequest;
                fromAmino(object: _304.QueryResolversByIRIRequestAmino): _304.QueryResolversByIRIRequest;
                toAmino(message: _304.QueryResolversByIRIRequest): _304.QueryResolversByIRIRequestAmino;
                fromAminoMsg(object: _304.QueryResolversByIRIRequestAminoMsg): _304.QueryResolversByIRIRequest;
                fromProtoMsg(message: _304.QueryResolversByIRIRequestProtoMsg): _304.QueryResolversByIRIRequest;
                toProto(message: _304.QueryResolversByIRIRequest): Uint8Array;
                toProtoMsg(message: _304.QueryResolversByIRIRequest): _304.QueryResolversByIRIRequestProtoMsg;
            };
            QueryResolversByIRIResponse: {
                typeUrl: string;
                encode(message: _304.QueryResolversByIRIResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryResolversByIRIResponse;
                fromPartial(object: Partial<_304.QueryResolversByIRIResponse>): _304.QueryResolversByIRIResponse;
                fromAmino(object: _304.QueryResolversByIRIResponseAmino): _304.QueryResolversByIRIResponse;
                toAmino(message: _304.QueryResolversByIRIResponse): _304.QueryResolversByIRIResponseAmino;
                fromAminoMsg(object: _304.QueryResolversByIRIResponseAminoMsg): _304.QueryResolversByIRIResponse;
                fromProtoMsg(message: _304.QueryResolversByIRIResponseProtoMsg): _304.QueryResolversByIRIResponse;
                toProto(message: _304.QueryResolversByIRIResponse): Uint8Array;
                toProtoMsg(message: _304.QueryResolversByIRIResponse): _304.QueryResolversByIRIResponseProtoMsg;
            };
            QueryResolversByHashRequest: {
                typeUrl: string;
                encode(message: _304.QueryResolversByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryResolversByHashRequest;
                fromPartial(object: Partial<_304.QueryResolversByHashRequest>): _304.QueryResolversByHashRequest;
                fromAmino(object: _304.QueryResolversByHashRequestAmino): _304.QueryResolversByHashRequest;
                toAmino(message: _304.QueryResolversByHashRequest): _304.QueryResolversByHashRequestAmino;
                fromAminoMsg(object: _304.QueryResolversByHashRequestAminoMsg): _304.QueryResolversByHashRequest;
                fromProtoMsg(message: _304.QueryResolversByHashRequestProtoMsg): _304.QueryResolversByHashRequest;
                toProto(message: _304.QueryResolversByHashRequest): Uint8Array;
                toProtoMsg(message: _304.QueryResolversByHashRequest): _304.QueryResolversByHashRequestProtoMsg;
            };
            QueryResolversByHashResponse: {
                typeUrl: string;
                encode(message: _304.QueryResolversByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryResolversByHashResponse;
                fromPartial(object: Partial<_304.QueryResolversByHashResponse>): _304.QueryResolversByHashResponse;
                fromAmino(object: _304.QueryResolversByHashResponseAmino): _304.QueryResolversByHashResponse;
                toAmino(message: _304.QueryResolversByHashResponse): _304.QueryResolversByHashResponseAmino;
                fromAminoMsg(object: _304.QueryResolversByHashResponseAminoMsg): _304.QueryResolversByHashResponse;
                fromProtoMsg(message: _304.QueryResolversByHashResponseProtoMsg): _304.QueryResolversByHashResponse;
                toProto(message: _304.QueryResolversByHashResponse): Uint8Array;
                toProtoMsg(message: _304.QueryResolversByHashResponse): _304.QueryResolversByHashResponseProtoMsg;
            };
            QueryResolverInfoRequest: {
                typeUrl: string;
                encode(message: _304.QueryResolverInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryResolverInfoRequest;
                fromPartial(object: Partial<_304.QueryResolverInfoRequest>): _304.QueryResolverInfoRequest;
                fromAmino(object: _304.QueryResolverInfoRequestAmino): _304.QueryResolverInfoRequest;
                toAmino(message: _304.QueryResolverInfoRequest): _304.QueryResolverInfoRequestAmino;
                fromAminoMsg(object: _304.QueryResolverInfoRequestAminoMsg): _304.QueryResolverInfoRequest;
                fromProtoMsg(message: _304.QueryResolverInfoRequestProtoMsg): _304.QueryResolverInfoRequest;
                toProto(message: _304.QueryResolverInfoRequest): Uint8Array;
                toProtoMsg(message: _304.QueryResolverInfoRequest): _304.QueryResolverInfoRequestProtoMsg;
            };
            QueryResolverInfoResponse: {
                typeUrl: string;
                encode(message: _304.QueryResolverInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _304.QueryResolverInfoResponse;
                fromPartial(object: Partial<_304.QueryResolverInfoResponse>): _304.QueryResolverInfoResponse;
                fromAmino(object: _304.QueryResolverInfoResponseAmino): _304.QueryResolverInfoResponse;
                toAmino(message: _304.QueryResolverInfoResponse): _304.QueryResolverInfoResponseAmino;
                fromAminoMsg(object: _304.QueryResolverInfoResponseAminoMsg): _304.QueryResolverInfoResponse;
                fromProtoMsg(message: _304.QueryResolverInfoResponseProtoMsg): _304.QueryResolverInfoResponse;
                toProto(message: _304.QueryResolverInfoResponse): Uint8Array;
                toProtoMsg(message: _304.QueryResolverInfoResponse): _304.QueryResolverInfoResponseProtoMsg;
            };
            EventAnchor: {
                typeUrl: string;
                encode(message: _303.EventAnchor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _303.EventAnchor;
                fromPartial(object: Partial<_303.EventAnchor>): _303.EventAnchor;
                fromAmino(object: _303.EventAnchorAmino): _303.EventAnchor;
                toAmino(message: _303.EventAnchor): _303.EventAnchorAmino;
                fromAminoMsg(object: _303.EventAnchorAminoMsg): _303.EventAnchor;
                fromProtoMsg(message: _303.EventAnchorProtoMsg): _303.EventAnchor;
                toProto(message: _303.EventAnchor): Uint8Array;
                toProtoMsg(message: _303.EventAnchor): _303.EventAnchorProtoMsg;
            };
            EventAttest: {
                typeUrl: string;
                encode(message: _303.EventAttest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _303.EventAttest;
                fromPartial(object: Partial<_303.EventAttest>): _303.EventAttest;
                fromAmino(object: _303.EventAttestAmino): _303.EventAttest;
                toAmino(message: _303.EventAttest): _303.EventAttestAmino;
                fromAminoMsg(object: _303.EventAttestAminoMsg): _303.EventAttest;
                fromProtoMsg(message: _303.EventAttestProtoMsg): _303.EventAttest;
                toProto(message: _303.EventAttest): Uint8Array;
                toProtoMsg(message: _303.EventAttest): _303.EventAttestProtoMsg;
            };
            EventDefineResolver: {
                typeUrl: string;
                encode(message: _303.EventDefineResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _303.EventDefineResolver;
                fromPartial(object: Partial<_303.EventDefineResolver>): _303.EventDefineResolver;
                fromAmino(object: _303.EventDefineResolverAmino): _303.EventDefineResolver;
                toAmino(message: _303.EventDefineResolver): _303.EventDefineResolverAmino;
                fromAminoMsg(object: _303.EventDefineResolverAminoMsg): _303.EventDefineResolver;
                fromProtoMsg(message: _303.EventDefineResolverProtoMsg): _303.EventDefineResolver;
                toProto(message: _303.EventDefineResolver): Uint8Array;
                toProtoMsg(message: _303.EventDefineResolver): _303.EventDefineResolverProtoMsg;
            };
            EventRegisterResolver: {
                typeUrl: string;
                encode(message: _303.EventRegisterResolver, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _303.EventRegisterResolver;
                fromPartial(object: Partial<_303.EventRegisterResolver>): _303.EventRegisterResolver;
                fromAmino(object: _303.EventRegisterResolverAmino): _303.EventRegisterResolver;
                toAmino(message: _303.EventRegisterResolver): _303.EventRegisterResolverAmino;
                fromAminoMsg(object: _303.EventRegisterResolverAminoMsg): _303.EventRegisterResolver;
                fromProtoMsg(message: _303.EventRegisterResolverProtoMsg): _303.EventRegisterResolver;
                toProto(message: _303.EventRegisterResolver): Uint8Array;
                toProtoMsg(message: _303.EventRegisterResolver): _303.EventRegisterResolverProtoMsg;
            };
        };
        const v1alpha2: {
            MsgClientImpl: typeof _576.MsgClientImpl;
            QueryClientImpl: typeof _569.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                byHash(request: _310.QueryByHashRequest): Promise<_310.QueryByHashResponse>;
                bySigner(request: _310.QueryBySignerRequest): Promise<_310.QueryBySignerResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    anchorData(value: _311.MsgAnchorData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    signData(value: _311.MsgSignData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeRawData(value: _311.MsgStoreRawData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    anchorData(value: _311.MsgAnchorData): {
                        typeUrl: string;
                        value: _311.MsgAnchorData;
                    };
                    signData(value: _311.MsgSignData): {
                        typeUrl: string;
                        value: _311.MsgSignData;
                    };
                    storeRawData(value: _311.MsgStoreRawData): {
                        typeUrl: string;
                        value: _311.MsgStoreRawData;
                    };
                };
                fromPartial: {
                    anchorData(value: _311.MsgAnchorData): {
                        typeUrl: string;
                        value: _311.MsgAnchorData;
                    };
                    signData(value: _311.MsgSignData): {
                        typeUrl: string;
                        value: _311.MsgSignData;
                    };
                    storeRawData(value: _311.MsgStoreRawData): {
                        typeUrl: string;
                        value: _311.MsgStoreRawData;
                    };
                };
            };
            AminoConverter: {
                "/regen.data.v1alpha2.MsgAnchorData": {
                    aminoType: string;
                    toAmino: (message: _311.MsgAnchorData) => _311.MsgAnchorDataAmino;
                    fromAmino: (object: _311.MsgAnchorDataAmino) => _311.MsgAnchorData;
                };
                "/regen.data.v1alpha2.MsgSignData": {
                    aminoType: string;
                    toAmino: (message: _311.MsgSignData) => _311.MsgSignDataAmino;
                    fromAmino: (object: _311.MsgSignDataAmino) => _311.MsgSignData;
                };
                "/regen.data.v1alpha2.MsgStoreRawData": {
                    aminoType: string;
                    toAmino: (message: _311.MsgStoreRawData) => _311.MsgStoreRawDataAmino;
                    fromAmino: (object: _311.MsgStoreRawDataAmino) => _311.MsgStoreRawData;
                };
            };
            mediaTypeFromJSON(object: any): _312.MediaType;
            mediaTypeToJSON(object: _312.MediaType): string;
            graphCanonicalizationAlgorithmFromJSON(object: any): _312.GraphCanonicalizationAlgorithm;
            graphCanonicalizationAlgorithmToJSON(object: _312.GraphCanonicalizationAlgorithm): string;
            graphMerkleTreeFromJSON(object: any): _312.GraphMerkleTree;
            graphMerkleTreeToJSON(object: _312.GraphMerkleTree): string;
            digestAlgorithmFromJSON(object: any): _312.DigestAlgorithm;
            digestAlgorithmToJSON(object: _312.DigestAlgorithm): string;
            MediaType: typeof _312.MediaType;
            MediaTypeSDKType: typeof _312.MediaType;
            MediaTypeAmino: typeof _312.MediaType;
            GraphCanonicalizationAlgorithm: typeof _312.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmSDKType: typeof _312.GraphCanonicalizationAlgorithm;
            GraphCanonicalizationAlgorithmAmino: typeof _312.GraphCanonicalizationAlgorithm;
            GraphMerkleTree: typeof _312.GraphMerkleTree;
            GraphMerkleTreeSDKType: typeof _312.GraphMerkleTree;
            GraphMerkleTreeAmino: typeof _312.GraphMerkleTree;
            DigestAlgorithm: typeof _312.DigestAlgorithm;
            DigestAlgorithmSDKType: typeof _312.DigestAlgorithm;
            DigestAlgorithmAmino: typeof _312.DigestAlgorithm;
            ContentHash: {
                typeUrl: string;
                encode(message: _312.ContentHash, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _312.ContentHash;
                fromPartial(object: Partial<_312.ContentHash>): _312.ContentHash;
                fromAmino(object: _312.ContentHashAmino): _312.ContentHash;
                toAmino(message: _312.ContentHash): _312.ContentHashAmino;
                fromAminoMsg(object: _312.ContentHashAminoMsg): _312.ContentHash;
                fromProtoMsg(message: _312.ContentHashProtoMsg): _312.ContentHash;
                toProto(message: _312.ContentHash): Uint8Array;
                toProtoMsg(message: _312.ContentHash): _312.ContentHashProtoMsg;
            };
            ContentHash_Raw: {
                typeUrl: string;
                encode(message: _312.ContentHash_Raw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _312.ContentHash_Raw;
                fromPartial(object: Partial<_312.ContentHash_Raw>): _312.ContentHash_Raw;
                fromAmino(object: _312.ContentHash_RawAmino): _312.ContentHash_Raw;
                toAmino(message: _312.ContentHash_Raw): _312.ContentHash_RawAmino;
                fromAminoMsg(object: _312.ContentHash_RawAminoMsg): _312.ContentHash_Raw;
                fromProtoMsg(message: _312.ContentHash_RawProtoMsg): _312.ContentHash_Raw;
                toProto(message: _312.ContentHash_Raw): Uint8Array;
                toProtoMsg(message: _312.ContentHash_Raw): _312.ContentHash_RawProtoMsg;
            };
            ContentHash_Graph: {
                typeUrl: string;
                encode(message: _312.ContentHash_Graph, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _312.ContentHash_Graph;
                fromPartial(object: Partial<_312.ContentHash_Graph>): _312.ContentHash_Graph;
                fromAmino(object: _312.ContentHash_GraphAmino): _312.ContentHash_Graph;
                toAmino(message: _312.ContentHash_Graph): _312.ContentHash_GraphAmino;
                fromAminoMsg(object: _312.ContentHash_GraphAminoMsg): _312.ContentHash_Graph;
                fromProtoMsg(message: _312.ContentHash_GraphProtoMsg): _312.ContentHash_Graph;
                toProto(message: _312.ContentHash_Graph): Uint8Array;
                toProtoMsg(message: _312.ContentHash_Graph): _312.ContentHash_GraphProtoMsg;
            };
            Content: {
                typeUrl: string;
                encode(message: _312.Content, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _312.Content;
                fromPartial(object: Partial<_312.Content>): _312.Content;
                fromAmino(object: _312.ContentAmino): _312.Content;
                toAmino(message: _312.Content): _312.ContentAmino;
                fromAminoMsg(object: _312.ContentAminoMsg): _312.Content;
                fromProtoMsg(message: _312.ContentProtoMsg): _312.Content;
                toProto(message: _312.Content): Uint8Array;
                toProtoMsg(message: _312.Content): _312.ContentProtoMsg;
            };
            SignerEntry: {
                typeUrl: string;
                encode(message: _312.SignerEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _312.SignerEntry;
                fromPartial(object: Partial<_312.SignerEntry>): _312.SignerEntry;
                fromAmino(object: _312.SignerEntryAmino): _312.SignerEntry;
                toAmino(message: _312.SignerEntry): _312.SignerEntryAmino;
                fromAminoMsg(object: _312.SignerEntryAminoMsg): _312.SignerEntry;
                fromProtoMsg(message: _312.SignerEntryProtoMsg): _312.SignerEntry;
                toProto(message: _312.SignerEntry): Uint8Array;
                toProtoMsg(message: _312.SignerEntry): _312.SignerEntryProtoMsg;
            };
            MsgAnchorData: {
                typeUrl: string;
                encode(message: _311.MsgAnchorData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _311.MsgAnchorData;
                fromPartial(object: Partial<_311.MsgAnchorData>): _311.MsgAnchorData;
                fromAmino(object: _311.MsgAnchorDataAmino): _311.MsgAnchorData;
                toAmino(message: _311.MsgAnchorData): _311.MsgAnchorDataAmino;
                fromAminoMsg(object: _311.MsgAnchorDataAminoMsg): _311.MsgAnchorData;
                fromProtoMsg(message: _311.MsgAnchorDataProtoMsg): _311.MsgAnchorData;
                toProto(message: _311.MsgAnchorData): Uint8Array;
                toProtoMsg(message: _311.MsgAnchorData): _311.MsgAnchorDataProtoMsg;
            };
            MsgAnchorDataResponse: {
                typeUrl: string;
                encode(message: _311.MsgAnchorDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _311.MsgAnchorDataResponse;
                fromPartial(object: Partial<_311.MsgAnchorDataResponse>): _311.MsgAnchorDataResponse;
                fromAmino(object: _311.MsgAnchorDataResponseAmino): _311.MsgAnchorDataResponse;
                toAmino(message: _311.MsgAnchorDataResponse): _311.MsgAnchorDataResponseAmino;
                fromAminoMsg(object: _311.MsgAnchorDataResponseAminoMsg): _311.MsgAnchorDataResponse;
                fromProtoMsg(message: _311.MsgAnchorDataResponseProtoMsg): _311.MsgAnchorDataResponse;
                toProto(message: _311.MsgAnchorDataResponse): Uint8Array;
                toProtoMsg(message: _311.MsgAnchorDataResponse): _311.MsgAnchorDataResponseProtoMsg;
            };
            MsgSignData: {
                typeUrl: string;
                encode(message: _311.MsgSignData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _311.MsgSignData;
                fromPartial(object: Partial<_311.MsgSignData>): _311.MsgSignData;
                fromAmino(object: _311.MsgSignDataAmino): _311.MsgSignData;
                toAmino(message: _311.MsgSignData): _311.MsgSignDataAmino;
                fromAminoMsg(object: _311.MsgSignDataAminoMsg): _311.MsgSignData;
                fromProtoMsg(message: _311.MsgSignDataProtoMsg): _311.MsgSignData;
                toProto(message: _311.MsgSignData): Uint8Array;
                toProtoMsg(message: _311.MsgSignData): _311.MsgSignDataProtoMsg;
            };
            MsgSignDataResponse: {
                typeUrl: string;
                encode(_: _311.MsgSignDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _311.MsgSignDataResponse;
                fromPartial(_: Partial<_311.MsgSignDataResponse>): _311.MsgSignDataResponse;
                fromAmino(_: _311.MsgSignDataResponseAmino): _311.MsgSignDataResponse;
                toAmino(_: _311.MsgSignDataResponse): _311.MsgSignDataResponseAmino;
                fromAminoMsg(object: _311.MsgSignDataResponseAminoMsg): _311.MsgSignDataResponse;
                fromProtoMsg(message: _311.MsgSignDataResponseProtoMsg): _311.MsgSignDataResponse;
                toProto(message: _311.MsgSignDataResponse): Uint8Array;
                toProtoMsg(message: _311.MsgSignDataResponse): _311.MsgSignDataResponseProtoMsg;
            };
            MsgStoreRawData: {
                typeUrl: string;
                encode(message: _311.MsgStoreRawData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _311.MsgStoreRawData;
                fromPartial(object: Partial<_311.MsgStoreRawData>): _311.MsgStoreRawData;
                fromAmino(object: _311.MsgStoreRawDataAmino): _311.MsgStoreRawData;
                toAmino(message: _311.MsgStoreRawData): _311.MsgStoreRawDataAmino;
                fromAminoMsg(object: _311.MsgStoreRawDataAminoMsg): _311.MsgStoreRawData;
                fromProtoMsg(message: _311.MsgStoreRawDataProtoMsg): _311.MsgStoreRawData;
                toProto(message: _311.MsgStoreRawData): Uint8Array;
                toProtoMsg(message: _311.MsgStoreRawData): _311.MsgStoreRawDataProtoMsg;
            };
            MsgStoreRawDataResponse: {
                typeUrl: string;
                encode(_: _311.MsgStoreRawDataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _311.MsgStoreRawDataResponse;
                fromPartial(_: Partial<_311.MsgStoreRawDataResponse>): _311.MsgStoreRawDataResponse;
                fromAmino(_: _311.MsgStoreRawDataResponseAmino): _311.MsgStoreRawDataResponse;
                toAmino(_: _311.MsgStoreRawDataResponse): _311.MsgStoreRawDataResponseAmino;
                fromAminoMsg(object: _311.MsgStoreRawDataResponseAminoMsg): _311.MsgStoreRawDataResponse;
                fromProtoMsg(message: _311.MsgStoreRawDataResponseProtoMsg): _311.MsgStoreRawDataResponse;
                toProto(message: _311.MsgStoreRawDataResponse): Uint8Array;
                toProtoMsg(message: _311.MsgStoreRawDataResponse): _311.MsgStoreRawDataResponseProtoMsg;
            };
            QueryByHashRequest: {
                typeUrl: string;
                encode(message: _310.QueryByHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _310.QueryByHashRequest;
                fromPartial(object: Partial<_310.QueryByHashRequest>): _310.QueryByHashRequest;
                fromAmino(object: _310.QueryByHashRequestAmino): _310.QueryByHashRequest;
                toAmino(message: _310.QueryByHashRequest): _310.QueryByHashRequestAmino;
                fromAminoMsg(object: _310.QueryByHashRequestAminoMsg): _310.QueryByHashRequest;
                fromProtoMsg(message: _310.QueryByHashRequestProtoMsg): _310.QueryByHashRequest;
                toProto(message: _310.QueryByHashRequest): Uint8Array;
                toProtoMsg(message: _310.QueryByHashRequest): _310.QueryByHashRequestProtoMsg;
            };
            QueryByHashResponse: {
                typeUrl: string;
                encode(message: _310.QueryByHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _310.QueryByHashResponse;
                fromPartial(object: Partial<_310.QueryByHashResponse>): _310.QueryByHashResponse;
                fromAmino(object: _310.QueryByHashResponseAmino): _310.QueryByHashResponse;
                toAmino(message: _310.QueryByHashResponse): _310.QueryByHashResponseAmino;
                fromAminoMsg(object: _310.QueryByHashResponseAminoMsg): _310.QueryByHashResponse;
                fromProtoMsg(message: _310.QueryByHashResponseProtoMsg): _310.QueryByHashResponse;
                toProto(message: _310.QueryByHashResponse): Uint8Array;
                toProtoMsg(message: _310.QueryByHashResponse): _310.QueryByHashResponseProtoMsg;
            };
            QueryBySignerRequest: {
                typeUrl: string;
                encode(message: _310.QueryBySignerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _310.QueryBySignerRequest;
                fromPartial(object: Partial<_310.QueryBySignerRequest>): _310.QueryBySignerRequest;
                fromAmino(object: _310.QueryBySignerRequestAmino): _310.QueryBySignerRequest;
                toAmino(message: _310.QueryBySignerRequest): _310.QueryBySignerRequestAmino;
                fromAminoMsg(object: _310.QueryBySignerRequestAminoMsg): _310.QueryBySignerRequest;
                fromProtoMsg(message: _310.QueryBySignerRequestProtoMsg): _310.QueryBySignerRequest;
                toProto(message: _310.QueryBySignerRequest): Uint8Array;
                toProtoMsg(message: _310.QueryBySignerRequest): _310.QueryBySignerRequestProtoMsg;
            };
            QueryBySignerResponse: {
                typeUrl: string;
                encode(message: _310.QueryBySignerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _310.QueryBySignerResponse;
                fromPartial(object: Partial<_310.QueryBySignerResponse>): _310.QueryBySignerResponse;
                fromAmino(object: _310.QueryBySignerResponseAmino): _310.QueryBySignerResponse;
                toAmino(message: _310.QueryBySignerResponse): _310.QueryBySignerResponseAmino;
                fromAminoMsg(object: _310.QueryBySignerResponseAminoMsg): _310.QueryBySignerResponse;
                fromProtoMsg(message: _310.QueryBySignerResponseProtoMsg): _310.QueryBySignerResponse;
                toProto(message: _310.QueryBySignerResponse): Uint8Array;
                toProtoMsg(message: _310.QueryBySignerResponse): _310.QueryBySignerResponseProtoMsg;
            };
            ContentEntry: {
                typeUrl: string;
                encode(message: _310.ContentEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _310.ContentEntry;
                fromPartial(object: Partial<_310.ContentEntry>): _310.ContentEntry;
                fromAmino(object: _310.ContentEntryAmino): _310.ContentEntry;
                toAmino(message: _310.ContentEntry): _310.ContentEntryAmino;
                fromAminoMsg(object: _310.ContentEntryAminoMsg): _310.ContentEntry;
                fromProtoMsg(message: _310.ContentEntryProtoMsg): _310.ContentEntry;
                toProto(message: _310.ContentEntry): Uint8Array;
                toProtoMsg(message: _310.ContentEntry): _310.ContentEntryProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _309.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _309.GenesisState;
                fromPartial(object: Partial<_309.GenesisState>): _309.GenesisState;
                fromAmino(object: _309.GenesisStateAmino): _309.GenesisState;
                toAmino(message: _309.GenesisState): _309.GenesisStateAmino;
                fromAminoMsg(object: _309.GenesisStateAminoMsg): _309.GenesisState;
                fromProtoMsg(message: _309.GenesisStateProtoMsg): _309.GenesisState;
                toProto(message: _309.GenesisState): Uint8Array;
                toProtoMsg(message: _309.GenesisState): _309.GenesisStateProtoMsg;
            };
            GenesisContentEntry: {
                typeUrl: string;
                encode(message: _309.GenesisContentEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _309.GenesisContentEntry;
                fromPartial(object: Partial<_309.GenesisContentEntry>): _309.GenesisContentEntry;
                fromAmino(object: _309.GenesisContentEntryAmino): _309.GenesisContentEntry;
                toAmino(message: _309.GenesisContentEntry): _309.GenesisContentEntryAmino;
                fromAminoMsg(object: _309.GenesisContentEntryAminoMsg): _309.GenesisContentEntry;
                fromProtoMsg(message: _309.GenesisContentEntryProtoMsg): _309.GenesisContentEntry;
                toProto(message: _309.GenesisContentEntry): Uint8Array;
                toProtoMsg(message: _309.GenesisContentEntry): _309.GenesisContentEntryProtoMsg;
            };
            EventAnchorData: {
                typeUrl: string;
                encode(message: _308.EventAnchorData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _308.EventAnchorData;
                fromPartial(object: Partial<_308.EventAnchorData>): _308.EventAnchorData;
                fromAmino(object: _308.EventAnchorDataAmino): _308.EventAnchorData;
                toAmino(message: _308.EventAnchorData): _308.EventAnchorDataAmino;
                fromAminoMsg(object: _308.EventAnchorDataAminoMsg): _308.EventAnchorData;
                fromProtoMsg(message: _308.EventAnchorDataProtoMsg): _308.EventAnchorData;
                toProto(message: _308.EventAnchorData): Uint8Array;
                toProtoMsg(message: _308.EventAnchorData): _308.EventAnchorDataProtoMsg;
            };
            EventSignData: {
                typeUrl: string;
                encode(message: _308.EventSignData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _308.EventSignData;
                fromPartial(object: Partial<_308.EventSignData>): _308.EventSignData;
                fromAmino(object: _308.EventSignDataAmino): _308.EventSignData;
                toAmino(message: _308.EventSignData): _308.EventSignDataAmino;
                fromAminoMsg(object: _308.EventSignDataAminoMsg): _308.EventSignData;
                fromProtoMsg(message: _308.EventSignDataProtoMsg): _308.EventSignData;
                toProto(message: _308.EventSignData): Uint8Array;
                toProtoMsg(message: _308.EventSignData): _308.EventSignDataProtoMsg;
            };
            EventStoreRawData: {
                typeUrl: string;
                encode(message: _308.EventStoreRawData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _308.EventStoreRawData;
                fromPartial(object: Partial<_308.EventStoreRawData>): _308.EventStoreRawData;
                fromAmino(object: _308.EventStoreRawDataAmino): _308.EventStoreRawData;
                toAmino(message: _308.EventStoreRawData): _308.EventStoreRawDataAmino;
                fromAminoMsg(object: _308.EventStoreRawDataAminoMsg): _308.EventStoreRawData;
                fromProtoMsg(message: _308.EventStoreRawDataProtoMsg): _308.EventStoreRawData;
                toProto(message: _308.EventStoreRawData): Uint8Array;
                toProtoMsg(message: _308.EventStoreRawData): _308.EventStoreRawDataProtoMsg;
            };
        };
    }
    namespace ecocredit {
        namespace basket {
            const v1: {
                MsgClientImpl: typeof _577.MsgClientImpl;
                QueryClientImpl: typeof _570.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    basket(request: _314.QueryBasketRequest): Promise<_314.QueryBasketResponse>;
                    baskets(request?: _314.QueryBasketsRequest): Promise<_314.QueryBasketsResponse>;
                    basketBalances(request: _314.QueryBasketBalancesRequest): Promise<_314.QueryBasketBalancesResponse>;
                    basketBalance(request: _314.QueryBasketBalanceRequest): Promise<_314.QueryBasketBalanceResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        create(value: _316.MsgCreate): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        put(value: _316.MsgPut): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        take(value: _316.MsgTake): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        create(value: _316.MsgCreate): {
                            typeUrl: string;
                            value: _316.MsgCreate;
                        };
                        put(value: _316.MsgPut): {
                            typeUrl: string;
                            value: _316.MsgPut;
                        };
                        take(value: _316.MsgTake): {
                            typeUrl: string;
                            value: _316.MsgTake;
                        };
                    };
                    fromPartial: {
                        create(value: _316.MsgCreate): {
                            typeUrl: string;
                            value: _316.MsgCreate;
                        };
                        put(value: _316.MsgPut): {
                            typeUrl: string;
                            value: _316.MsgPut;
                        };
                        take(value: _316.MsgTake): {
                            typeUrl: string;
                            value: _316.MsgTake;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.basket.v1.MsgCreate": {
                        aminoType: string;
                        toAmino: (message: _316.MsgCreate) => _316.MsgCreateAmino;
                        fromAmino: (object: _316.MsgCreateAmino) => _316.MsgCreate;
                    };
                    "/regen.ecocredit.basket.v1.MsgPut": {
                        aminoType: string;
                        toAmino: (message: _316.MsgPut) => _316.MsgPutAmino;
                        fromAmino: (object: _316.MsgPutAmino) => _316.MsgPut;
                    };
                    "/regen.ecocredit.basket.v1.MsgTake": {
                        aminoType: string;
                        toAmino: (message: _316.MsgTake) => _316.MsgTakeAmino;
                        fromAmino: (object: _316.MsgTakeAmino) => _316.MsgTake;
                    };
                };
                BasketCredit: {
                    typeUrl: string;
                    encode(message: _317.BasketCredit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _317.BasketCredit;
                    fromPartial(object: Partial<_317.BasketCredit>): _317.BasketCredit;
                    fromAmino(object: _317.BasketCreditAmino): _317.BasketCredit;
                    toAmino(message: _317.BasketCredit): _317.BasketCreditAmino;
                    fromAminoMsg(object: _317.BasketCreditAminoMsg): _317.BasketCredit;
                    fromProtoMsg(message: _317.BasketCreditProtoMsg): _317.BasketCredit;
                    toProto(message: _317.BasketCredit): Uint8Array;
                    toProtoMsg(message: _317.BasketCredit): _317.BasketCreditProtoMsg;
                };
                DateCriteria: {
                    typeUrl: string;
                    encode(message: _317.DateCriteria, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _317.DateCriteria;
                    fromPartial(object: Partial<_317.DateCriteria>): _317.DateCriteria;
                    fromAmino(object: _317.DateCriteriaAmino): _317.DateCriteria;
                    toAmino(message: _317.DateCriteria): _317.DateCriteriaAmino;
                    fromAminoMsg(object: _317.DateCriteriaAminoMsg): _317.DateCriteria;
                    fromProtoMsg(message: _317.DateCriteriaProtoMsg): _317.DateCriteria;
                    toProto(message: _317.DateCriteria): Uint8Array;
                    toProtoMsg(message: _317.DateCriteria): _317.DateCriteriaProtoMsg;
                };
                MsgCreate: {
                    typeUrl: string;
                    encode(message: _316.MsgCreate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _316.MsgCreate;
                    fromPartial(object: Partial<_316.MsgCreate>): _316.MsgCreate;
                    fromAmino(object: _316.MsgCreateAmino): _316.MsgCreate;
                    toAmino(message: _316.MsgCreate): _316.MsgCreateAmino;
                    fromAminoMsg(object: _316.MsgCreateAminoMsg): _316.MsgCreate;
                    fromProtoMsg(message: _316.MsgCreateProtoMsg): _316.MsgCreate;
                    toProto(message: _316.MsgCreate): Uint8Array;
                    toProtoMsg(message: _316.MsgCreate): _316.MsgCreateProtoMsg;
                };
                MsgCreateResponse: {
                    typeUrl: string;
                    encode(message: _316.MsgCreateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _316.MsgCreateResponse;
                    fromPartial(object: Partial<_316.MsgCreateResponse>): _316.MsgCreateResponse;
                    fromAmino(object: _316.MsgCreateResponseAmino): _316.MsgCreateResponse;
                    toAmino(message: _316.MsgCreateResponse): _316.MsgCreateResponseAmino;
                    fromAminoMsg(object: _316.MsgCreateResponseAminoMsg): _316.MsgCreateResponse;
                    fromProtoMsg(message: _316.MsgCreateResponseProtoMsg): _316.MsgCreateResponse;
                    toProto(message: _316.MsgCreateResponse): Uint8Array;
                    toProtoMsg(message: _316.MsgCreateResponse): _316.MsgCreateResponseProtoMsg;
                };
                MsgPut: {
                    typeUrl: string;
                    encode(message: _316.MsgPut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _316.MsgPut;
                    fromPartial(object: Partial<_316.MsgPut>): _316.MsgPut;
                    fromAmino(object: _316.MsgPutAmino): _316.MsgPut;
                    toAmino(message: _316.MsgPut): _316.MsgPutAmino;
                    fromAminoMsg(object: _316.MsgPutAminoMsg): _316.MsgPut;
                    fromProtoMsg(message: _316.MsgPutProtoMsg): _316.MsgPut;
                    toProto(message: _316.MsgPut): Uint8Array;
                    toProtoMsg(message: _316.MsgPut): _316.MsgPutProtoMsg;
                };
                MsgPutResponse: {
                    typeUrl: string;
                    encode(message: _316.MsgPutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _316.MsgPutResponse;
                    fromPartial(object: Partial<_316.MsgPutResponse>): _316.MsgPutResponse;
                    fromAmino(object: _316.MsgPutResponseAmino): _316.MsgPutResponse;
                    toAmino(message: _316.MsgPutResponse): _316.MsgPutResponseAmino;
                    fromAminoMsg(object: _316.MsgPutResponseAminoMsg): _316.MsgPutResponse;
                    fromProtoMsg(message: _316.MsgPutResponseProtoMsg): _316.MsgPutResponse;
                    toProto(message: _316.MsgPutResponse): Uint8Array;
                    toProtoMsg(message: _316.MsgPutResponse): _316.MsgPutResponseProtoMsg;
                };
                MsgTake: {
                    typeUrl: string;
                    encode(message: _316.MsgTake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _316.MsgTake;
                    fromPartial(object: Partial<_316.MsgTake>): _316.MsgTake;
                    fromAmino(object: _316.MsgTakeAmino): _316.MsgTake;
                    toAmino(message: _316.MsgTake): _316.MsgTakeAmino;
                    fromAminoMsg(object: _316.MsgTakeAminoMsg): _316.MsgTake;
                    fromProtoMsg(message: _316.MsgTakeProtoMsg): _316.MsgTake;
                    toProto(message: _316.MsgTake): Uint8Array;
                    toProtoMsg(message: _316.MsgTake): _316.MsgTakeProtoMsg;
                };
                MsgTakeResponse: {
                    typeUrl: string;
                    encode(message: _316.MsgTakeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _316.MsgTakeResponse;
                    fromPartial(object: Partial<_316.MsgTakeResponse>): _316.MsgTakeResponse;
                    fromAmino(object: _316.MsgTakeResponseAmino): _316.MsgTakeResponse;
                    toAmino(message: _316.MsgTakeResponse): _316.MsgTakeResponseAmino;
                    fromAminoMsg(object: _316.MsgTakeResponseAminoMsg): _316.MsgTakeResponse;
                    fromProtoMsg(message: _316.MsgTakeResponseProtoMsg): _316.MsgTakeResponse;
                    toProto(message: _316.MsgTakeResponse): Uint8Array;
                    toProtoMsg(message: _316.MsgTakeResponse): _316.MsgTakeResponseProtoMsg;
                };
                Basket: {
                    typeUrl: string;
                    encode(message: _315.Basket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _315.Basket;
                    fromPartial(object: Partial<_315.Basket>): _315.Basket;
                    fromAmino(object: _315.BasketAmino): _315.Basket;
                    toAmino(message: _315.Basket): _315.BasketAmino;
                    fromAminoMsg(object: _315.BasketAminoMsg): _315.Basket;
                    fromProtoMsg(message: _315.BasketProtoMsg): _315.Basket;
                    toProto(message: _315.Basket): Uint8Array;
                    toProtoMsg(message: _315.Basket): _315.BasketProtoMsg;
                };
                BasketClass: {
                    typeUrl: string;
                    encode(message: _315.BasketClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _315.BasketClass;
                    fromPartial(object: Partial<_315.BasketClass>): _315.BasketClass;
                    fromAmino(object: _315.BasketClassAmino): _315.BasketClass;
                    toAmino(message: _315.BasketClass): _315.BasketClassAmino;
                    fromAminoMsg(object: _315.BasketClassAminoMsg): _315.BasketClass;
                    fromProtoMsg(message: _315.BasketClassProtoMsg): _315.BasketClass;
                    toProto(message: _315.BasketClass): Uint8Array;
                    toProtoMsg(message: _315.BasketClass): _315.BasketClassProtoMsg;
                };
                BasketBalance: {
                    typeUrl: string;
                    encode(message: _315.BasketBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _315.BasketBalance;
                    fromPartial(object: Partial<_315.BasketBalance>): _315.BasketBalance;
                    fromAmino(object: _315.BasketBalanceAmino): _315.BasketBalance;
                    toAmino(message: _315.BasketBalance): _315.BasketBalanceAmino;
                    fromAminoMsg(object: _315.BasketBalanceAminoMsg): _315.BasketBalance;
                    fromProtoMsg(message: _315.BasketBalanceProtoMsg): _315.BasketBalance;
                    toProto(message: _315.BasketBalance): Uint8Array;
                    toProtoMsg(message: _315.BasketBalance): _315.BasketBalanceProtoMsg;
                };
                QueryBasketRequest: {
                    typeUrl: string;
                    encode(message: _314.QueryBasketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _314.QueryBasketRequest;
                    fromPartial(object: Partial<_314.QueryBasketRequest>): _314.QueryBasketRequest;
                    fromAmino(object: _314.QueryBasketRequestAmino): _314.QueryBasketRequest;
                    toAmino(message: _314.QueryBasketRequest): _314.QueryBasketRequestAmino;
                    fromAminoMsg(object: _314.QueryBasketRequestAminoMsg): _314.QueryBasketRequest;
                    fromProtoMsg(message: _314.QueryBasketRequestProtoMsg): _314.QueryBasketRequest;
                    toProto(message: _314.QueryBasketRequest): Uint8Array;
                    toProtoMsg(message: _314.QueryBasketRequest): _314.QueryBasketRequestProtoMsg;
                };
                QueryBasketResponse: {
                    typeUrl: string;
                    encode(message: _314.QueryBasketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _314.QueryBasketResponse;
                    fromPartial(object: Partial<_314.QueryBasketResponse>): _314.QueryBasketResponse;
                    fromAmino(object: _314.QueryBasketResponseAmino): _314.QueryBasketResponse;
                    toAmino(message: _314.QueryBasketResponse): _314.QueryBasketResponseAmino;
                    fromAminoMsg(object: _314.QueryBasketResponseAminoMsg): _314.QueryBasketResponse;
                    fromProtoMsg(message: _314.QueryBasketResponseProtoMsg): _314.QueryBasketResponse;
                    toProto(message: _314.QueryBasketResponse): Uint8Array;
                    toProtoMsg(message: _314.QueryBasketResponse): _314.QueryBasketResponseProtoMsg;
                };
                QueryBasketsRequest: {
                    typeUrl: string;
                    encode(message: _314.QueryBasketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _314.QueryBasketsRequest;
                    fromPartial(object: Partial<_314.QueryBasketsRequest>): _314.QueryBasketsRequest;
                    fromAmino(object: _314.QueryBasketsRequestAmino): _314.QueryBasketsRequest;
                    toAmino(message: _314.QueryBasketsRequest): _314.QueryBasketsRequestAmino;
                    fromAminoMsg(object: _314.QueryBasketsRequestAminoMsg): _314.QueryBasketsRequest;
                    fromProtoMsg(message: _314.QueryBasketsRequestProtoMsg): _314.QueryBasketsRequest;
                    toProto(message: _314.QueryBasketsRequest): Uint8Array;
                    toProtoMsg(message: _314.QueryBasketsRequest): _314.QueryBasketsRequestProtoMsg;
                };
                QueryBasketsResponse: {
                    typeUrl: string;
                    encode(message: _314.QueryBasketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _314.QueryBasketsResponse;
                    fromPartial(object: Partial<_314.QueryBasketsResponse>): _314.QueryBasketsResponse;
                    fromAmino(object: _314.QueryBasketsResponseAmino): _314.QueryBasketsResponse;
                    toAmino(message: _314.QueryBasketsResponse): _314.QueryBasketsResponseAmino;
                    fromAminoMsg(object: _314.QueryBasketsResponseAminoMsg): _314.QueryBasketsResponse;
                    fromProtoMsg(message: _314.QueryBasketsResponseProtoMsg): _314.QueryBasketsResponse;
                    toProto(message: _314.QueryBasketsResponse): Uint8Array;
                    toProtoMsg(message: _314.QueryBasketsResponse): _314.QueryBasketsResponseProtoMsg;
                };
                QueryBasketBalancesRequest: {
                    typeUrl: string;
                    encode(message: _314.QueryBasketBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _314.QueryBasketBalancesRequest;
                    fromPartial(object: Partial<_314.QueryBasketBalancesRequest>): _314.QueryBasketBalancesRequest;
                    fromAmino(object: _314.QueryBasketBalancesRequestAmino): _314.QueryBasketBalancesRequest;
                    toAmino(message: _314.QueryBasketBalancesRequest): _314.QueryBasketBalancesRequestAmino;
                    fromAminoMsg(object: _314.QueryBasketBalancesRequestAminoMsg): _314.QueryBasketBalancesRequest;
                    fromProtoMsg(message: _314.QueryBasketBalancesRequestProtoMsg): _314.QueryBasketBalancesRequest;
                    toProto(message: _314.QueryBasketBalancesRequest): Uint8Array;
                    toProtoMsg(message: _314.QueryBasketBalancesRequest): _314.QueryBasketBalancesRequestProtoMsg;
                };
                QueryBasketBalancesResponse: {
                    typeUrl: string;
                    encode(message: _314.QueryBasketBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _314.QueryBasketBalancesResponse;
                    fromPartial(object: Partial<_314.QueryBasketBalancesResponse>): _314.QueryBasketBalancesResponse;
                    fromAmino(object: _314.QueryBasketBalancesResponseAmino): _314.QueryBasketBalancesResponse;
                    toAmino(message: _314.QueryBasketBalancesResponse): _314.QueryBasketBalancesResponseAmino;
                    fromAminoMsg(object: _314.QueryBasketBalancesResponseAminoMsg): _314.QueryBasketBalancesResponse;
                    fromProtoMsg(message: _314.QueryBasketBalancesResponseProtoMsg): _314.QueryBasketBalancesResponse;
                    toProto(message: _314.QueryBasketBalancesResponse): Uint8Array;
                    toProtoMsg(message: _314.QueryBasketBalancesResponse): _314.QueryBasketBalancesResponseProtoMsg;
                };
                QueryBasketBalanceRequest: {
                    typeUrl: string;
                    encode(message: _314.QueryBasketBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _314.QueryBasketBalanceRequest;
                    fromPartial(object: Partial<_314.QueryBasketBalanceRequest>): _314.QueryBasketBalanceRequest;
                    fromAmino(object: _314.QueryBasketBalanceRequestAmino): _314.QueryBasketBalanceRequest;
                    toAmino(message: _314.QueryBasketBalanceRequest): _314.QueryBasketBalanceRequestAmino;
                    fromAminoMsg(object: _314.QueryBasketBalanceRequestAminoMsg): _314.QueryBasketBalanceRequest;
                    fromProtoMsg(message: _314.QueryBasketBalanceRequestProtoMsg): _314.QueryBasketBalanceRequest;
                    toProto(message: _314.QueryBasketBalanceRequest): Uint8Array;
                    toProtoMsg(message: _314.QueryBasketBalanceRequest): _314.QueryBasketBalanceRequestProtoMsg;
                };
                QueryBasketBalanceResponse: {
                    typeUrl: string;
                    encode(message: _314.QueryBasketBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _314.QueryBasketBalanceResponse;
                    fromPartial(object: Partial<_314.QueryBasketBalanceResponse>): _314.QueryBasketBalanceResponse;
                    fromAmino(object: _314.QueryBasketBalanceResponseAmino): _314.QueryBasketBalanceResponse;
                    toAmino(message: _314.QueryBasketBalanceResponse): _314.QueryBasketBalanceResponseAmino;
                    fromAminoMsg(object: _314.QueryBasketBalanceResponseAminoMsg): _314.QueryBasketBalanceResponse;
                    fromProtoMsg(message: _314.QueryBasketBalanceResponseProtoMsg): _314.QueryBasketBalanceResponse;
                    toProto(message: _314.QueryBasketBalanceResponse): Uint8Array;
                    toProtoMsg(message: _314.QueryBasketBalanceResponse): _314.QueryBasketBalanceResponseProtoMsg;
                };
                BasketInfo: {
                    typeUrl: string;
                    encode(message: _314.BasketInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _314.BasketInfo;
                    fromPartial(object: Partial<_314.BasketInfo>): _314.BasketInfo;
                    fromAmino(object: _314.BasketInfoAmino): _314.BasketInfo;
                    toAmino(message: _314.BasketInfo): _314.BasketInfoAmino;
                    fromAminoMsg(object: _314.BasketInfoAminoMsg): _314.BasketInfo;
                    fromProtoMsg(message: _314.BasketInfoProtoMsg): _314.BasketInfo;
                    toProto(message: _314.BasketInfo): Uint8Array;
                    toProtoMsg(message: _314.BasketInfo): _314.BasketInfoProtoMsg;
                };
                BasketBalanceInfo: {
                    typeUrl: string;
                    encode(message: _314.BasketBalanceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _314.BasketBalanceInfo;
                    fromPartial(object: Partial<_314.BasketBalanceInfo>): _314.BasketBalanceInfo;
                    fromAmino(object: _314.BasketBalanceInfoAmino): _314.BasketBalanceInfo;
                    toAmino(message: _314.BasketBalanceInfo): _314.BasketBalanceInfoAmino;
                    fromAminoMsg(object: _314.BasketBalanceInfoAminoMsg): _314.BasketBalanceInfo;
                    fromProtoMsg(message: _314.BasketBalanceInfoProtoMsg): _314.BasketBalanceInfo;
                    toProto(message: _314.BasketBalanceInfo): Uint8Array;
                    toProtoMsg(message: _314.BasketBalanceInfo): _314.BasketBalanceInfoProtoMsg;
                };
                EventCreate: {
                    typeUrl: string;
                    encode(message: _313.EventCreate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _313.EventCreate;
                    fromPartial(object: Partial<_313.EventCreate>): _313.EventCreate;
                    fromAmino(object: _313.EventCreateAmino): _313.EventCreate;
                    toAmino(message: _313.EventCreate): _313.EventCreateAmino;
                    fromAminoMsg(object: _313.EventCreateAminoMsg): _313.EventCreate;
                    fromProtoMsg(message: _313.EventCreateProtoMsg): _313.EventCreate;
                    toProto(message: _313.EventCreate): Uint8Array;
                    toProtoMsg(message: _313.EventCreate): _313.EventCreateProtoMsg;
                };
                EventPut: {
                    typeUrl: string;
                    encode(message: _313.EventPut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _313.EventPut;
                    fromPartial(object: Partial<_313.EventPut>): _313.EventPut;
                    fromAmino(object: _313.EventPutAmino): _313.EventPut;
                    toAmino(message: _313.EventPut): _313.EventPutAmino;
                    fromAminoMsg(object: _313.EventPutAminoMsg): _313.EventPut;
                    fromProtoMsg(message: _313.EventPutProtoMsg): _313.EventPut;
                    toProto(message: _313.EventPut): Uint8Array;
                    toProtoMsg(message: _313.EventPut): _313.EventPutProtoMsg;
                };
                EventTake: {
                    typeUrl: string;
                    encode(message: _313.EventTake, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _313.EventTake;
                    fromPartial(object: Partial<_313.EventTake>): _313.EventTake;
                    fromAmino(object: _313.EventTakeAmino): _313.EventTake;
                    toAmino(message: _313.EventTake): _313.EventTakeAmino;
                    fromAminoMsg(object: _313.EventTakeAminoMsg): _313.EventTake;
                    fromProtoMsg(message: _313.EventTakeProtoMsg): _313.EventTake;
                    toProto(message: _313.EventTake): Uint8Array;
                    toProtoMsg(message: _313.EventTake): _313.EventTakeProtoMsg;
                };
            };
        }
        namespace marketplace {
            const v1: {
                MsgClientImpl: typeof _578.MsgClientImpl;
                QueryClientImpl: typeof _571.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    sellOrder(request: _319.QuerySellOrderRequest): Promise<_319.QuerySellOrderResponse>;
                    sellOrders(request?: _319.QuerySellOrdersRequest): Promise<_319.QuerySellOrdersResponse>;
                    sellOrdersByBatchDenom(request: _319.QuerySellOrdersByBatchDenomRequest): Promise<_319.QuerySellOrdersByBatchDenomResponse>;
                    sellOrdersByAddress(request: _319.QuerySellOrdersByAddressRequest): Promise<_319.QuerySellOrdersByAddressResponse>;
                    allowedDenoms(request?: _319.QueryAllowedDenomsRequest): Promise<_319.QueryAllowedDenomsResponse>;
                };
                registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        sell(value: _321.MsgSell): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateSellOrders(value: _321.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        cancelSellOrder(value: _321.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        buyDirect(value: _321.MsgBuyDirect): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        sell(value: _321.MsgSell): {
                            typeUrl: string;
                            value: _321.MsgSell;
                        };
                        updateSellOrders(value: _321.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _321.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _321.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _321.MsgCancelSellOrder;
                        };
                        buyDirect(value: _321.MsgBuyDirect): {
                            typeUrl: string;
                            value: _321.MsgBuyDirect;
                        };
                    };
                    fromPartial: {
                        sell(value: _321.MsgSell): {
                            typeUrl: string;
                            value: _321.MsgSell;
                        };
                        updateSellOrders(value: _321.MsgUpdateSellOrders): {
                            typeUrl: string;
                            value: _321.MsgUpdateSellOrders;
                        };
                        cancelSellOrder(value: _321.MsgCancelSellOrder): {
                            typeUrl: string;
                            value: _321.MsgCancelSellOrder;
                        };
                        buyDirect(value: _321.MsgBuyDirect): {
                            typeUrl: string;
                            value: _321.MsgBuyDirect;
                        };
                    };
                };
                AminoConverter: {
                    "/regen.ecocredit.marketplace.v1.MsgSell": {
                        aminoType: string;
                        toAmino: (message: _321.MsgSell) => _321.MsgSellAmino;
                        fromAmino: (object: _321.MsgSellAmino) => _321.MsgSell;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders": {
                        aminoType: string;
                        toAmino: (message: _321.MsgUpdateSellOrders) => _321.MsgUpdateSellOrdersAmino;
                        fromAmino: (object: _321.MsgUpdateSellOrdersAmino) => _321.MsgUpdateSellOrders;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder": {
                        aminoType: string;
                        toAmino: (message: _321.MsgCancelSellOrder) => _321.MsgCancelSellOrderAmino;
                        fromAmino: (object: _321.MsgCancelSellOrderAmino) => _321.MsgCancelSellOrder;
                    };
                    "/regen.ecocredit.marketplace.v1.MsgBuyDirect": {
                        aminoType: string;
                        toAmino: (message: _321.MsgBuyDirect) => _321.MsgBuyDirectAmino;
                        fromAmino: (object: _321.MsgBuyDirectAmino) => _321.MsgBuyDirect;
                    };
                };
                AllowDenomProposal: {
                    typeUrl: string;
                    encode(message: _322.AllowDenomProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _322.AllowDenomProposal;
                    fromPartial(object: Partial<_322.AllowDenomProposal>): _322.AllowDenomProposal;
                    fromAmino(object: _322.AllowDenomProposalAmino): _322.AllowDenomProposal;
                    toAmino(message: _322.AllowDenomProposal): _322.AllowDenomProposalAmino;
                    fromAminoMsg(object: _322.AllowDenomProposalAminoMsg): _322.AllowDenomProposal;
                    fromProtoMsg(message: _322.AllowDenomProposalProtoMsg): _322.AllowDenomProposal;
                    toProto(message: _322.AllowDenomProposal): Uint8Array;
                    toProtoMsg(message: _322.AllowDenomProposal): _322.AllowDenomProposalProtoMsg;
                };
                MsgSell: {
                    typeUrl: string;
                    encode(message: _321.MsgSell, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _321.MsgSell;
                    fromPartial(object: Partial<_321.MsgSell>): _321.MsgSell;
                    fromAmino(object: _321.MsgSellAmino): _321.MsgSell;
                    toAmino(message: _321.MsgSell): _321.MsgSellAmino;
                    fromAminoMsg(object: _321.MsgSellAminoMsg): _321.MsgSell;
                    fromProtoMsg(message: _321.MsgSellProtoMsg): _321.MsgSell;
                    toProto(message: _321.MsgSell): Uint8Array;
                    toProtoMsg(message: _321.MsgSell): _321.MsgSellProtoMsg;
                };
                MsgSell_Order: {
                    typeUrl: string;
                    encode(message: _321.MsgSell_Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _321.MsgSell_Order;
                    fromPartial(object: Partial<_321.MsgSell_Order>): _321.MsgSell_Order;
                    fromAmino(object: _321.MsgSell_OrderAmino): _321.MsgSell_Order;
                    toAmino(message: _321.MsgSell_Order): _321.MsgSell_OrderAmino;
                    fromAminoMsg(object: _321.MsgSell_OrderAminoMsg): _321.MsgSell_Order;
                    fromProtoMsg(message: _321.MsgSell_OrderProtoMsg): _321.MsgSell_Order;
                    toProto(message: _321.MsgSell_Order): Uint8Array;
                    toProtoMsg(message: _321.MsgSell_Order): _321.MsgSell_OrderProtoMsg;
                };
                MsgSellResponse: {
                    typeUrl: string;
                    encode(message: _321.MsgSellResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _321.MsgSellResponse;
                    fromPartial(object: Partial<_321.MsgSellResponse>): _321.MsgSellResponse;
                    fromAmino(object: _321.MsgSellResponseAmino): _321.MsgSellResponse;
                    toAmino(message: _321.MsgSellResponse): _321.MsgSellResponseAmino;
                    fromAminoMsg(object: _321.MsgSellResponseAminoMsg): _321.MsgSellResponse;
                    fromProtoMsg(message: _321.MsgSellResponseProtoMsg): _321.MsgSellResponse;
                    toProto(message: _321.MsgSellResponse): Uint8Array;
                    toProtoMsg(message: _321.MsgSellResponse): _321.MsgSellResponseProtoMsg;
                };
                MsgUpdateSellOrders: {
                    typeUrl: string;
                    encode(message: _321.MsgUpdateSellOrders, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _321.MsgUpdateSellOrders;
                    fromPartial(object: Partial<_321.MsgUpdateSellOrders>): _321.MsgUpdateSellOrders;
                    fromAmino(object: _321.MsgUpdateSellOrdersAmino): _321.MsgUpdateSellOrders;
                    toAmino(message: _321.MsgUpdateSellOrders): _321.MsgUpdateSellOrdersAmino;
                    fromAminoMsg(object: _321.MsgUpdateSellOrdersAminoMsg): _321.MsgUpdateSellOrders;
                    fromProtoMsg(message: _321.MsgUpdateSellOrdersProtoMsg): _321.MsgUpdateSellOrders;
                    toProto(message: _321.MsgUpdateSellOrders): Uint8Array;
                    toProtoMsg(message: _321.MsgUpdateSellOrders): _321.MsgUpdateSellOrdersProtoMsg;
                };
                MsgUpdateSellOrders_Update: {
                    typeUrl: string;
                    encode(message: _321.MsgUpdateSellOrders_Update, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _321.MsgUpdateSellOrders_Update;
                    fromPartial(object: Partial<_321.MsgUpdateSellOrders_Update>): _321.MsgUpdateSellOrders_Update;
                    fromAmino(object: _321.MsgUpdateSellOrders_UpdateAmino): _321.MsgUpdateSellOrders_Update;
                    toAmino(message: _321.MsgUpdateSellOrders_Update): _321.MsgUpdateSellOrders_UpdateAmino;
                    fromAminoMsg(object: _321.MsgUpdateSellOrders_UpdateAminoMsg): _321.MsgUpdateSellOrders_Update;
                    fromProtoMsg(message: _321.MsgUpdateSellOrders_UpdateProtoMsg): _321.MsgUpdateSellOrders_Update;
                    toProto(message: _321.MsgUpdateSellOrders_Update): Uint8Array;
                    toProtoMsg(message: _321.MsgUpdateSellOrders_Update): _321.MsgUpdateSellOrders_UpdateProtoMsg;
                };
                MsgUpdateSellOrdersResponse: {
                    typeUrl: string;
                    encode(_: _321.MsgUpdateSellOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _321.MsgUpdateSellOrdersResponse;
                    fromPartial(_: Partial<_321.MsgUpdateSellOrdersResponse>): _321.MsgUpdateSellOrdersResponse;
                    fromAmino(_: _321.MsgUpdateSellOrdersResponseAmino): _321.MsgUpdateSellOrdersResponse;
                    toAmino(_: _321.MsgUpdateSellOrdersResponse): _321.MsgUpdateSellOrdersResponseAmino;
                    fromAminoMsg(object: _321.MsgUpdateSellOrdersResponseAminoMsg): _321.MsgUpdateSellOrdersResponse;
                    fromProtoMsg(message: _321.MsgUpdateSellOrdersResponseProtoMsg): _321.MsgUpdateSellOrdersResponse;
                    toProto(message: _321.MsgUpdateSellOrdersResponse): Uint8Array;
                    toProtoMsg(message: _321.MsgUpdateSellOrdersResponse): _321.MsgUpdateSellOrdersResponseProtoMsg;
                };
                MsgCancelSellOrder: {
                    typeUrl: string;
                    encode(message: _321.MsgCancelSellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _321.MsgCancelSellOrder;
                    fromPartial(object: Partial<_321.MsgCancelSellOrder>): _321.MsgCancelSellOrder;
                    fromAmino(object: _321.MsgCancelSellOrderAmino): _321.MsgCancelSellOrder;
                    toAmino(message: _321.MsgCancelSellOrder): _321.MsgCancelSellOrderAmino;
                    fromAminoMsg(object: _321.MsgCancelSellOrderAminoMsg): _321.MsgCancelSellOrder;
                    fromProtoMsg(message: _321.MsgCancelSellOrderProtoMsg): _321.MsgCancelSellOrder;
                    toProto(message: _321.MsgCancelSellOrder): Uint8Array;
                    toProtoMsg(message: _321.MsgCancelSellOrder): _321.MsgCancelSellOrderProtoMsg;
                };
                MsgCancelSellOrderResponse: {
                    typeUrl: string;
                    encode(_: _321.MsgCancelSellOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _321.MsgCancelSellOrderResponse;
                    fromPartial(_: Partial<_321.MsgCancelSellOrderResponse>): _321.MsgCancelSellOrderResponse;
                    fromAmino(_: _321.MsgCancelSellOrderResponseAmino): _321.MsgCancelSellOrderResponse;
                    toAmino(_: _321.MsgCancelSellOrderResponse): _321.MsgCancelSellOrderResponseAmino;
                    fromAminoMsg(object: _321.MsgCancelSellOrderResponseAminoMsg): _321.MsgCancelSellOrderResponse;
                    fromProtoMsg(message: _321.MsgCancelSellOrderResponseProtoMsg): _321.MsgCancelSellOrderResponse;
                    toProto(message: _321.MsgCancelSellOrderResponse): Uint8Array;
                    toProtoMsg(message: _321.MsgCancelSellOrderResponse): _321.MsgCancelSellOrderResponseProtoMsg;
                };
                MsgBuyDirect: {
                    typeUrl: string;
                    encode(message: _321.MsgBuyDirect, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _321.MsgBuyDirect;
                    fromPartial(object: Partial<_321.MsgBuyDirect>): _321.MsgBuyDirect;
                    fromAmino(object: _321.MsgBuyDirectAmino): _321.MsgBuyDirect;
                    toAmino(message: _321.MsgBuyDirect): _321.MsgBuyDirectAmino;
                    fromAminoMsg(object: _321.MsgBuyDirectAminoMsg): _321.MsgBuyDirect;
                    fromProtoMsg(message: _321.MsgBuyDirectProtoMsg): _321.MsgBuyDirect;
                    toProto(message: _321.MsgBuyDirect): Uint8Array;
                    toProtoMsg(message: _321.MsgBuyDirect): _321.MsgBuyDirectProtoMsg;
                };
                MsgBuyDirect_Order: {
                    typeUrl: string;
                    encode(message: _321.MsgBuyDirect_Order, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _321.MsgBuyDirect_Order;
                    fromPartial(object: Partial<_321.MsgBuyDirect_Order>): _321.MsgBuyDirect_Order;
                    fromAmino(object: _321.MsgBuyDirect_OrderAmino): _321.MsgBuyDirect_Order;
                    toAmino(message: _321.MsgBuyDirect_Order): _321.MsgBuyDirect_OrderAmino;
                    fromAminoMsg(object: _321.MsgBuyDirect_OrderAminoMsg): _321.MsgBuyDirect_Order;
                    fromProtoMsg(message: _321.MsgBuyDirect_OrderProtoMsg): _321.MsgBuyDirect_Order;
                    toProto(message: _321.MsgBuyDirect_Order): Uint8Array;
                    toProtoMsg(message: _321.MsgBuyDirect_Order): _321.MsgBuyDirect_OrderProtoMsg;
                };
                MsgBuyDirectResponse: {
                    typeUrl: string;
                    encode(_: _321.MsgBuyDirectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _321.MsgBuyDirectResponse;
                    fromPartial(_: Partial<_321.MsgBuyDirectResponse>): _321.MsgBuyDirectResponse;
                    fromAmino(_: _321.MsgBuyDirectResponseAmino): _321.MsgBuyDirectResponse;
                    toAmino(_: _321.MsgBuyDirectResponse): _321.MsgBuyDirectResponseAmino;
                    fromAminoMsg(object: _321.MsgBuyDirectResponseAminoMsg): _321.MsgBuyDirectResponse;
                    fromProtoMsg(message: _321.MsgBuyDirectResponseProtoMsg): _321.MsgBuyDirectResponse;
                    toProto(message: _321.MsgBuyDirectResponse): Uint8Array;
                    toProtoMsg(message: _321.MsgBuyDirectResponse): _321.MsgBuyDirectResponseProtoMsg;
                };
                SellOrder: {
                    typeUrl: string;
                    encode(message: _320.SellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _320.SellOrder;
                    fromPartial(object: Partial<_320.SellOrder>): _320.SellOrder;
                    fromAmino(object: _320.SellOrderAmino): _320.SellOrder;
                    toAmino(message: _320.SellOrder): _320.SellOrderAmino;
                    fromAminoMsg(object: _320.SellOrderAminoMsg): _320.SellOrder;
                    fromProtoMsg(message: _320.SellOrderProtoMsg): _320.SellOrder;
                    toProto(message: _320.SellOrder): Uint8Array;
                    toProtoMsg(message: _320.SellOrder): _320.SellOrderProtoMsg;
                };
                AllowedDenom: {
                    typeUrl: string;
                    encode(message: _320.AllowedDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _320.AllowedDenom;
                    fromPartial(object: Partial<_320.AllowedDenom>): _320.AllowedDenom;
                    fromAmino(object: _320.AllowedDenomAmino): _320.AllowedDenom;
                    toAmino(message: _320.AllowedDenom): _320.AllowedDenomAmino;
                    fromAminoMsg(object: _320.AllowedDenomAminoMsg): _320.AllowedDenom;
                    fromProtoMsg(message: _320.AllowedDenomProtoMsg): _320.AllowedDenom;
                    toProto(message: _320.AllowedDenom): Uint8Array;
                    toProtoMsg(message: _320.AllowedDenom): _320.AllowedDenomProtoMsg;
                };
                Market: {
                    typeUrl: string;
                    encode(message: _320.Market, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _320.Market;
                    fromPartial(object: Partial<_320.Market>): _320.Market;
                    fromAmino(object: _320.MarketAmino): _320.Market;
                    toAmino(message: _320.Market): _320.MarketAmino;
                    fromAminoMsg(object: _320.MarketAminoMsg): _320.Market;
                    fromProtoMsg(message: _320.MarketProtoMsg): _320.Market;
                    toProto(message: _320.Market): Uint8Array;
                    toProtoMsg(message: _320.Market): _320.MarketProtoMsg;
                };
                QuerySellOrderRequest: {
                    typeUrl: string;
                    encode(message: _319.QuerySellOrderRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _319.QuerySellOrderRequest;
                    fromPartial(object: Partial<_319.QuerySellOrderRequest>): _319.QuerySellOrderRequest;
                    fromAmino(object: _319.QuerySellOrderRequestAmino): _319.QuerySellOrderRequest;
                    toAmino(message: _319.QuerySellOrderRequest): _319.QuerySellOrderRequestAmino;
                    fromAminoMsg(object: _319.QuerySellOrderRequestAminoMsg): _319.QuerySellOrderRequest;
                    fromProtoMsg(message: _319.QuerySellOrderRequestProtoMsg): _319.QuerySellOrderRequest;
                    toProto(message: _319.QuerySellOrderRequest): Uint8Array;
                    toProtoMsg(message: _319.QuerySellOrderRequest): _319.QuerySellOrderRequestProtoMsg;
                };
                QuerySellOrderResponse: {
                    typeUrl: string;
                    encode(message: _319.QuerySellOrderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _319.QuerySellOrderResponse;
                    fromPartial(object: Partial<_319.QuerySellOrderResponse>): _319.QuerySellOrderResponse;
                    fromAmino(object: _319.QuerySellOrderResponseAmino): _319.QuerySellOrderResponse;
                    toAmino(message: _319.QuerySellOrderResponse): _319.QuerySellOrderResponseAmino;
                    fromAminoMsg(object: _319.QuerySellOrderResponseAminoMsg): _319.QuerySellOrderResponse;
                    fromProtoMsg(message: _319.QuerySellOrderResponseProtoMsg): _319.QuerySellOrderResponse;
                    toProto(message: _319.QuerySellOrderResponse): Uint8Array;
                    toProtoMsg(message: _319.QuerySellOrderResponse): _319.QuerySellOrderResponseProtoMsg;
                };
                QuerySellOrdersRequest: {
                    typeUrl: string;
                    encode(message: _319.QuerySellOrdersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _319.QuerySellOrdersRequest;
                    fromPartial(object: Partial<_319.QuerySellOrdersRequest>): _319.QuerySellOrdersRequest;
                    fromAmino(object: _319.QuerySellOrdersRequestAmino): _319.QuerySellOrdersRequest;
                    toAmino(message: _319.QuerySellOrdersRequest): _319.QuerySellOrdersRequestAmino;
                    fromAminoMsg(object: _319.QuerySellOrdersRequestAminoMsg): _319.QuerySellOrdersRequest;
                    fromProtoMsg(message: _319.QuerySellOrdersRequestProtoMsg): _319.QuerySellOrdersRequest;
                    toProto(message: _319.QuerySellOrdersRequest): Uint8Array;
                    toProtoMsg(message: _319.QuerySellOrdersRequest): _319.QuerySellOrdersRequestProtoMsg;
                };
                QuerySellOrdersResponse: {
                    typeUrl: string;
                    encode(message: _319.QuerySellOrdersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _319.QuerySellOrdersResponse;
                    fromPartial(object: Partial<_319.QuerySellOrdersResponse>): _319.QuerySellOrdersResponse;
                    fromAmino(object: _319.QuerySellOrdersResponseAmino): _319.QuerySellOrdersResponse;
                    toAmino(message: _319.QuerySellOrdersResponse): _319.QuerySellOrdersResponseAmino;
                    fromAminoMsg(object: _319.QuerySellOrdersResponseAminoMsg): _319.QuerySellOrdersResponse;
                    fromProtoMsg(message: _319.QuerySellOrdersResponseProtoMsg): _319.QuerySellOrdersResponse;
                    toProto(message: _319.QuerySellOrdersResponse): Uint8Array;
                    toProtoMsg(message: _319.QuerySellOrdersResponse): _319.QuerySellOrdersResponseProtoMsg;
                };
                QuerySellOrdersByBatchDenomRequest: {
                    typeUrl: string;
                    encode(message: _319.QuerySellOrdersByBatchDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _319.QuerySellOrdersByBatchDenomRequest;
                    fromPartial(object: Partial<_319.QuerySellOrdersByBatchDenomRequest>): _319.QuerySellOrdersByBatchDenomRequest;
                    fromAmino(object: _319.QuerySellOrdersByBatchDenomRequestAmino): _319.QuerySellOrdersByBatchDenomRequest;
                    toAmino(message: _319.QuerySellOrdersByBatchDenomRequest): _319.QuerySellOrdersByBatchDenomRequestAmino;
                    fromAminoMsg(object: _319.QuerySellOrdersByBatchDenomRequestAminoMsg): _319.QuerySellOrdersByBatchDenomRequest;
                    fromProtoMsg(message: _319.QuerySellOrdersByBatchDenomRequestProtoMsg): _319.QuerySellOrdersByBatchDenomRequest;
                    toProto(message: _319.QuerySellOrdersByBatchDenomRequest): Uint8Array;
                    toProtoMsg(message: _319.QuerySellOrdersByBatchDenomRequest): _319.QuerySellOrdersByBatchDenomRequestProtoMsg;
                };
                QuerySellOrdersByBatchDenomResponse: {
                    typeUrl: string;
                    encode(message: _319.QuerySellOrdersByBatchDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _319.QuerySellOrdersByBatchDenomResponse;
                    fromPartial(object: Partial<_319.QuerySellOrdersByBatchDenomResponse>): _319.QuerySellOrdersByBatchDenomResponse;
                    fromAmino(object: _319.QuerySellOrdersByBatchDenomResponseAmino): _319.QuerySellOrdersByBatchDenomResponse;
                    toAmino(message: _319.QuerySellOrdersByBatchDenomResponse): _319.QuerySellOrdersByBatchDenomResponseAmino;
                    fromAminoMsg(object: _319.QuerySellOrdersByBatchDenomResponseAminoMsg): _319.QuerySellOrdersByBatchDenomResponse;
                    fromProtoMsg(message: _319.QuerySellOrdersByBatchDenomResponseProtoMsg): _319.QuerySellOrdersByBatchDenomResponse;
                    toProto(message: _319.QuerySellOrdersByBatchDenomResponse): Uint8Array;
                    toProtoMsg(message: _319.QuerySellOrdersByBatchDenomResponse): _319.QuerySellOrdersByBatchDenomResponseProtoMsg;
                };
                QuerySellOrdersByAddressRequest: {
                    typeUrl: string;
                    encode(message: _319.QuerySellOrdersByAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _319.QuerySellOrdersByAddressRequest;
                    fromPartial(object: Partial<_319.QuerySellOrdersByAddressRequest>): _319.QuerySellOrdersByAddressRequest;
                    fromAmino(object: _319.QuerySellOrdersByAddressRequestAmino): _319.QuerySellOrdersByAddressRequest;
                    toAmino(message: _319.QuerySellOrdersByAddressRequest): _319.QuerySellOrdersByAddressRequestAmino;
                    fromAminoMsg(object: _319.QuerySellOrdersByAddressRequestAminoMsg): _319.QuerySellOrdersByAddressRequest;
                    fromProtoMsg(message: _319.QuerySellOrdersByAddressRequestProtoMsg): _319.QuerySellOrdersByAddressRequest;
                    toProto(message: _319.QuerySellOrdersByAddressRequest): Uint8Array;
                    toProtoMsg(message: _319.QuerySellOrdersByAddressRequest): _319.QuerySellOrdersByAddressRequestProtoMsg;
                };
                QuerySellOrdersByAddressResponse: {
                    typeUrl: string;
                    encode(message: _319.QuerySellOrdersByAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _319.QuerySellOrdersByAddressResponse;
                    fromPartial(object: Partial<_319.QuerySellOrdersByAddressResponse>): _319.QuerySellOrdersByAddressResponse;
                    fromAmino(object: _319.QuerySellOrdersByAddressResponseAmino): _319.QuerySellOrdersByAddressResponse;
                    toAmino(message: _319.QuerySellOrdersByAddressResponse): _319.QuerySellOrdersByAddressResponseAmino;
                    fromAminoMsg(object: _319.QuerySellOrdersByAddressResponseAminoMsg): _319.QuerySellOrdersByAddressResponse;
                    fromProtoMsg(message: _319.QuerySellOrdersByAddressResponseProtoMsg): _319.QuerySellOrdersByAddressResponse;
                    toProto(message: _319.QuerySellOrdersByAddressResponse): Uint8Array;
                    toProtoMsg(message: _319.QuerySellOrdersByAddressResponse): _319.QuerySellOrdersByAddressResponseProtoMsg;
                };
                QueryAllowedDenomsRequest: {
                    typeUrl: string;
                    encode(message: _319.QueryAllowedDenomsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _319.QueryAllowedDenomsRequest;
                    fromPartial(object: Partial<_319.QueryAllowedDenomsRequest>): _319.QueryAllowedDenomsRequest;
                    fromAmino(object: _319.QueryAllowedDenomsRequestAmino): _319.QueryAllowedDenomsRequest;
                    toAmino(message: _319.QueryAllowedDenomsRequest): _319.QueryAllowedDenomsRequestAmino;
                    fromAminoMsg(object: _319.QueryAllowedDenomsRequestAminoMsg): _319.QueryAllowedDenomsRequest;
                    fromProtoMsg(message: _319.QueryAllowedDenomsRequestProtoMsg): _319.QueryAllowedDenomsRequest;
                    toProto(message: _319.QueryAllowedDenomsRequest): Uint8Array;
                    toProtoMsg(message: _319.QueryAllowedDenomsRequest): _319.QueryAllowedDenomsRequestProtoMsg;
                };
                QueryAllowedDenomsResponse: {
                    typeUrl: string;
                    encode(message: _319.QueryAllowedDenomsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _319.QueryAllowedDenomsResponse;
                    fromPartial(object: Partial<_319.QueryAllowedDenomsResponse>): _319.QueryAllowedDenomsResponse;
                    fromAmino(object: _319.QueryAllowedDenomsResponseAmino): _319.QueryAllowedDenomsResponse;
                    toAmino(message: _319.QueryAllowedDenomsResponse): _319.QueryAllowedDenomsResponseAmino;
                    fromAminoMsg(object: _319.QueryAllowedDenomsResponseAminoMsg): _319.QueryAllowedDenomsResponse;
                    fromProtoMsg(message: _319.QueryAllowedDenomsResponseProtoMsg): _319.QueryAllowedDenomsResponse;
                    toProto(message: _319.QueryAllowedDenomsResponse): Uint8Array;
                    toProtoMsg(message: _319.QueryAllowedDenomsResponse): _319.QueryAllowedDenomsResponseProtoMsg;
                };
                SellOrderInfo: {
                    typeUrl: string;
                    encode(message: _319.SellOrderInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _319.SellOrderInfo;
                    fromPartial(object: Partial<_319.SellOrderInfo>): _319.SellOrderInfo;
                    fromAmino(object: _319.SellOrderInfoAmino): _319.SellOrderInfo;
                    toAmino(message: _319.SellOrderInfo): _319.SellOrderInfoAmino;
                    fromAminoMsg(object: _319.SellOrderInfoAminoMsg): _319.SellOrderInfo;
                    fromProtoMsg(message: _319.SellOrderInfoProtoMsg): _319.SellOrderInfo;
                    toProto(message: _319.SellOrderInfo): Uint8Array;
                    toProtoMsg(message: _319.SellOrderInfo): _319.SellOrderInfoProtoMsg;
                };
                EventSell: {
                    typeUrl: string;
                    encode(message: _318.EventSell, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _318.EventSell;
                    fromPartial(object: Partial<_318.EventSell>): _318.EventSell;
                    fromAmino(object: _318.EventSellAmino): _318.EventSell;
                    toAmino(message: _318.EventSell): _318.EventSellAmino;
                    fromAminoMsg(object: _318.EventSellAminoMsg): _318.EventSell;
                    fromProtoMsg(message: _318.EventSellProtoMsg): _318.EventSell;
                    toProto(message: _318.EventSell): Uint8Array;
                    toProtoMsg(message: _318.EventSell): _318.EventSellProtoMsg;
                };
                EventUpdateSellOrder: {
                    typeUrl: string;
                    encode(message: _318.EventUpdateSellOrder, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _318.EventUpdateSellOrder;
                    fromPartial(object: Partial<_318.EventUpdateSellOrder>): _318.EventUpdateSellOrder;
                    fromAmino(object: _318.EventUpdateSellOrderAmino): _318.EventUpdateSellOrder;
                    toAmino(message: _318.EventUpdateSellOrder): _318.EventUpdateSellOrderAmino;
                    fromAminoMsg(object: _318.EventUpdateSellOrderAminoMsg): _318.EventUpdateSellOrder;
                    fromProtoMsg(message: _318.EventUpdateSellOrderProtoMsg): _318.EventUpdateSellOrder;
                    toProto(message: _318.EventUpdateSellOrder): Uint8Array;
                    toProtoMsg(message: _318.EventUpdateSellOrder): _318.EventUpdateSellOrderProtoMsg;
                };
                EventAllowDenom: {
                    typeUrl: string;
                    encode(message: _318.EventAllowDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _318.EventAllowDenom;
                    fromPartial(object: Partial<_318.EventAllowDenom>): _318.EventAllowDenom;
                    fromAmino(object: _318.EventAllowDenomAmino): _318.EventAllowDenom;
                    toAmino(message: _318.EventAllowDenom): _318.EventAllowDenomAmino;
                    fromAminoMsg(object: _318.EventAllowDenomAminoMsg): _318.EventAllowDenom;
                    fromProtoMsg(message: _318.EventAllowDenomProtoMsg): _318.EventAllowDenom;
                    toProto(message: _318.EventAllowDenom): Uint8Array;
                    toProtoMsg(message: _318.EventAllowDenom): _318.EventAllowDenomProtoMsg;
                };
            };
        }
        namespace orderbook {
            const v1alpha1: {
                BuyOrderSellOrderMatch: {
                    typeUrl: string;
                    encode(message: _323.BuyOrderSellOrderMatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _323.BuyOrderSellOrderMatch;
                    fromPartial(object: Partial<_323.BuyOrderSellOrderMatch>): _323.BuyOrderSellOrderMatch;
                    fromAmino(object: _323.BuyOrderSellOrderMatchAmino): _323.BuyOrderSellOrderMatch;
                    toAmino(message: _323.BuyOrderSellOrderMatch): _323.BuyOrderSellOrderMatchAmino;
                    fromAminoMsg(object: _323.BuyOrderSellOrderMatchAminoMsg): _323.BuyOrderSellOrderMatch;
                    fromProtoMsg(message: _323.BuyOrderSellOrderMatchProtoMsg): _323.BuyOrderSellOrderMatch;
                    toProto(message: _323.BuyOrderSellOrderMatch): Uint8Array;
                    toProtoMsg(message: _323.BuyOrderSellOrderMatch): _323.BuyOrderSellOrderMatchProtoMsg;
                };
                BuyOrderClassSelector: {
                    typeUrl: string;
                    encode(message: _323.BuyOrderClassSelector, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _323.BuyOrderClassSelector;
                    fromPartial(object: Partial<_323.BuyOrderClassSelector>): _323.BuyOrderClassSelector;
                    fromAmino(object: _323.BuyOrderClassSelectorAmino): _323.BuyOrderClassSelector;
                    toAmino(message: _323.BuyOrderClassSelector): _323.BuyOrderClassSelectorAmino;
                    fromAminoMsg(object: _323.BuyOrderClassSelectorAminoMsg): _323.BuyOrderClassSelector;
                    fromProtoMsg(message: _323.BuyOrderClassSelectorProtoMsg): _323.BuyOrderClassSelector;
                    toProto(message: _323.BuyOrderClassSelector): Uint8Array;
                    toProtoMsg(message: _323.BuyOrderClassSelector): _323.BuyOrderClassSelectorProtoMsg;
                };
                BuyOrderProjectSelector: {
                    typeUrl: string;
                    encode(message: _323.BuyOrderProjectSelector, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _323.BuyOrderProjectSelector;
                    fromPartial(object: Partial<_323.BuyOrderProjectSelector>): _323.BuyOrderProjectSelector;
                    fromAmino(object: _323.BuyOrderProjectSelectorAmino): _323.BuyOrderProjectSelector;
                    toAmino(message: _323.BuyOrderProjectSelector): _323.BuyOrderProjectSelectorAmino;
                    fromAminoMsg(object: _323.BuyOrderProjectSelectorAminoMsg): _323.BuyOrderProjectSelector;
                    fromProtoMsg(message: _323.BuyOrderProjectSelectorProtoMsg): _323.BuyOrderProjectSelector;
                    toProto(message: _323.BuyOrderProjectSelector): Uint8Array;
                    toProtoMsg(message: _323.BuyOrderProjectSelector): _323.BuyOrderProjectSelectorProtoMsg;
                };
                BuyOrderBatchSelector: {
                    typeUrl: string;
                    encode(message: _323.BuyOrderBatchSelector, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _323.BuyOrderBatchSelector;
                    fromPartial(object: Partial<_323.BuyOrderBatchSelector>): _323.BuyOrderBatchSelector;
                    fromAmino(object: _323.BuyOrderBatchSelectorAmino): _323.BuyOrderBatchSelector;
                    toAmino(message: _323.BuyOrderBatchSelector): _323.BuyOrderBatchSelectorAmino;
                    fromAminoMsg(object: _323.BuyOrderBatchSelectorAminoMsg): _323.BuyOrderBatchSelector;
                    fromProtoMsg(message: _323.BuyOrderBatchSelectorProtoMsg): _323.BuyOrderBatchSelector;
                    toProto(message: _323.BuyOrderBatchSelector): Uint8Array;
                    toProtoMsg(message: _323.BuyOrderBatchSelector): _323.BuyOrderBatchSelectorProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _579.MsgClientImpl;
            QueryClientImpl: typeof _572.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                classes(request?: _325.QueryClassesRequest): Promise<_325.QueryClassesResponse>;
                classesByAdmin(request: _325.QueryClassesByAdminRequest): Promise<_325.QueryClassesByAdminResponse>;
                class(request: _325.QueryClassRequest): Promise<_325.QueryClassResponse>;
                classIssuers(request: _325.QueryClassIssuersRequest): Promise<_325.QueryClassIssuersResponse>;
                projects(request: _325.QueryProjectsRequest): Promise<_325.QueryProjectsResponse>;
                projectsByReferenceId(request: _325.QueryProjectsByReferenceIdRequest): Promise<_325.QueryProjectsByReferenceIdResponse>;
                project(request: _325.QueryProjectRequest): Promise<_325.QueryProjectResponse>;
                batches(request: _325.QueryBatchesRequest): Promise<_325.QueryBatchesResponse>;
                batchesByIssuer(request: _325.QueryBatchesByIssuerRequest): Promise<_325.QueryBatchesByIssuerResponse>;
                batchesByClass(request: _325.QueryBatchesByClassRequest): Promise<_325.QueryBatchesByClassResponse>;
                batch(request: _325.QueryBatchRequest): Promise<_325.QueryBatchResponse>;
                balance(request: _325.QueryBalanceRequest): Promise<_325.QueryBalanceResponse>;
                balances(request: _325.QueryBalancesRequest): Promise<_325.QueryBalancesResponse>;
                supply(request: _325.QuerySupplyRequest): Promise<_325.QuerySupplyResponse>;
                creditTypes(request?: _325.QueryCreditTypesRequest): Promise<_325.QueryCreditTypesResponse>;
                params(request?: _325.QueryParamsRequest): Promise<_325.QueryParamsResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _327.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProject(value: _327.MsgCreateProject): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _327.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mintBatchCredits(value: _327.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sealBatch(value: _327.MsgSealBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _327.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _327.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _327.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _327.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _327.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _327.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectAdmin(value: _327.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateProjectMetadata(value: _327.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _327.MsgCreateClass): {
                        typeUrl: string;
                        value: _327.MsgCreateClass;
                    };
                    createProject(value: _327.MsgCreateProject): {
                        typeUrl: string;
                        value: _327.MsgCreateProject;
                    };
                    createBatch(value: _327.MsgCreateBatch): {
                        typeUrl: string;
                        value: _327.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _327.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _327.MsgMintBatchCredits;
                    };
                    sealBatch(value: _327.MsgSealBatch): {
                        typeUrl: string;
                        value: _327.MsgSealBatch;
                    };
                    send(value: _327.MsgSend): {
                        typeUrl: string;
                        value: _327.MsgSend;
                    };
                    retire(value: _327.MsgRetire): {
                        typeUrl: string;
                        value: _327.MsgRetire;
                    };
                    cancel(value: _327.MsgCancel): {
                        typeUrl: string;
                        value: _327.MsgCancel;
                    };
                    updateClassAdmin(value: _327.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _327.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _327.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _327.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _327.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _327.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _327.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _327.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _327.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _327.MsgUpdateProjectMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _327.MsgCreateClass): {
                        typeUrl: string;
                        value: _327.MsgCreateClass;
                    };
                    createProject(value: _327.MsgCreateProject): {
                        typeUrl: string;
                        value: _327.MsgCreateProject;
                    };
                    createBatch(value: _327.MsgCreateBatch): {
                        typeUrl: string;
                        value: _327.MsgCreateBatch;
                    };
                    mintBatchCredits(value: _327.MsgMintBatchCredits): {
                        typeUrl: string;
                        value: _327.MsgMintBatchCredits;
                    };
                    sealBatch(value: _327.MsgSealBatch): {
                        typeUrl: string;
                        value: _327.MsgSealBatch;
                    };
                    send(value: _327.MsgSend): {
                        typeUrl: string;
                        value: _327.MsgSend;
                    };
                    retire(value: _327.MsgRetire): {
                        typeUrl: string;
                        value: _327.MsgRetire;
                    };
                    cancel(value: _327.MsgCancel): {
                        typeUrl: string;
                        value: _327.MsgCancel;
                    };
                    updateClassAdmin(value: _327.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _327.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _327.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _327.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _327.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _327.MsgUpdateClassMetadata;
                    };
                    updateProjectAdmin(value: _327.MsgUpdateProjectAdmin): {
                        typeUrl: string;
                        value: _327.MsgUpdateProjectAdmin;
                    };
                    updateProjectMetadata(value: _327.MsgUpdateProjectMetadata): {
                        typeUrl: string;
                        value: _327.MsgUpdateProjectMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: (message: _327.MsgCreateClass) => _327.MsgCreateClassAmino;
                    fromAmino: (object: _327.MsgCreateClassAmino) => _327.MsgCreateClass;
                };
                "/regen.ecocredit.v1.MsgCreateProject": {
                    aminoType: string;
                    toAmino: (message: _327.MsgCreateProject) => _327.MsgCreateProjectAmino;
                    fromAmino: (object: _327.MsgCreateProjectAmino) => _327.MsgCreateProject;
                };
                "/regen.ecocredit.v1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: (message: _327.MsgCreateBatch) => _327.MsgCreateBatchAmino;
                    fromAmino: (object: _327.MsgCreateBatchAmino) => _327.MsgCreateBatch;
                };
                "/regen.ecocredit.v1.MsgMintBatchCredits": {
                    aminoType: string;
                    toAmino: (message: _327.MsgMintBatchCredits) => _327.MsgMintBatchCreditsAmino;
                    fromAmino: (object: _327.MsgMintBatchCreditsAmino) => _327.MsgMintBatchCredits;
                };
                "/regen.ecocredit.v1.MsgSealBatch": {
                    aminoType: string;
                    toAmino: (message: _327.MsgSealBatch) => _327.MsgSealBatchAmino;
                    fromAmino: (object: _327.MsgSealBatchAmino) => _327.MsgSealBatch;
                };
                "/regen.ecocredit.v1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _327.MsgSend) => _327.MsgSendAmino;
                    fromAmino: (object: _327.MsgSendAmino) => _327.MsgSend;
                };
                "/regen.ecocredit.v1.MsgRetire": {
                    aminoType: string;
                    toAmino: (message: _327.MsgRetire) => _327.MsgRetireAmino;
                    fromAmino: (object: _327.MsgRetireAmino) => _327.MsgRetire;
                };
                "/regen.ecocredit.v1.MsgCancel": {
                    aminoType: string;
                    toAmino: (message: _327.MsgCancel) => _327.MsgCancelAmino;
                    fromAmino: (object: _327.MsgCancelAmino) => _327.MsgCancel;
                };
                "/regen.ecocredit.v1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: (message: _327.MsgUpdateClassAdmin) => _327.MsgUpdateClassAdminAmino;
                    fromAmino: (object: _327.MsgUpdateClassAdminAmino) => _327.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: (message: _327.MsgUpdateClassIssuers) => _327.MsgUpdateClassIssuersAmino;
                    fromAmino: (object: _327.MsgUpdateClassIssuersAmino) => _327.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: (message: _327.MsgUpdateClassMetadata) => _327.MsgUpdateClassMetadataAmino;
                    fromAmino: (object: _327.MsgUpdateClassMetadataAmino) => _327.MsgUpdateClassMetadata;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectAdmin": {
                    aminoType: string;
                    toAmino: (message: _327.MsgUpdateProjectAdmin) => _327.MsgUpdateProjectAdminAmino;
                    fromAmino: (object: _327.MsgUpdateProjectAdminAmino) => _327.MsgUpdateProjectAdmin;
                };
                "/regen.ecocredit.v1.MsgUpdateProjectMetadata": {
                    aminoType: string;
                    toAmino: (message: _327.MsgUpdateProjectMetadata) => _327.MsgUpdateProjectMetadataAmino;
                    fromAmino: (object: _327.MsgUpdateProjectMetadataAmino) => _327.MsgUpdateProjectMetadata;
                };
            };
            Params: {
                typeUrl: string;
                encode(message: _328.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _328.Params;
                fromPartial(object: Partial<_328.Params>): _328.Params;
                fromAmino(object: _328.ParamsAmino): _328.Params;
                toAmino(message: _328.Params): _328.ParamsAmino;
                fromAminoMsg(object: _328.ParamsAminoMsg): _328.Params;
                fromProtoMsg(message: _328.ParamsProtoMsg): _328.Params;
                toProto(message: _328.Params): Uint8Array;
                toProtoMsg(message: _328.Params): _328.ParamsProtoMsg;
            };
            OriginTx: {
                typeUrl: string;
                encode(message: _328.OriginTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _328.OriginTx;
                fromPartial(object: Partial<_328.OriginTx>): _328.OriginTx;
                fromAmino(object: _328.OriginTxAmino): _328.OriginTx;
                toAmino(message: _328.OriginTx): _328.OriginTxAmino;
                fromAminoMsg(object: _328.OriginTxAminoMsg): _328.OriginTx;
                fromProtoMsg(message: _328.OriginTxProtoMsg): _328.OriginTx;
                toProto(message: _328.OriginTx): Uint8Array;
                toProtoMsg(message: _328.OriginTx): _328.OriginTxProtoMsg;
            };
            CreditTypeProposal: {
                typeUrl: string;
                encode(message: _328.CreditTypeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _328.CreditTypeProposal;
                fromPartial(object: Partial<_328.CreditTypeProposal>): _328.CreditTypeProposal;
                fromAmino(object: _328.CreditTypeProposalAmino): _328.CreditTypeProposal;
                toAmino(message: _328.CreditTypeProposal): _328.CreditTypeProposalAmino;
                fromAminoMsg(object: _328.CreditTypeProposalAminoMsg): _328.CreditTypeProposal;
                fromProtoMsg(message: _328.CreditTypeProposalProtoMsg): _328.CreditTypeProposal;
                toProto(message: _328.CreditTypeProposal): Uint8Array;
                toProtoMsg(message: _328.CreditTypeProposal): _328.CreditTypeProposalProtoMsg;
            };
            MsgCreateClass: {
                typeUrl: string;
                encode(message: _327.MsgCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgCreateClass;
                fromPartial(object: Partial<_327.MsgCreateClass>): _327.MsgCreateClass;
                fromAmino(object: _327.MsgCreateClassAmino): _327.MsgCreateClass;
                toAmino(message: _327.MsgCreateClass): _327.MsgCreateClassAmino;
                fromAminoMsg(object: _327.MsgCreateClassAminoMsg): _327.MsgCreateClass;
                fromProtoMsg(message: _327.MsgCreateClassProtoMsg): _327.MsgCreateClass;
                toProto(message: _327.MsgCreateClass): Uint8Array;
                toProtoMsg(message: _327.MsgCreateClass): _327.MsgCreateClassProtoMsg;
            };
            MsgCreateClassResponse: {
                typeUrl: string;
                encode(message: _327.MsgCreateClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgCreateClassResponse;
                fromPartial(object: Partial<_327.MsgCreateClassResponse>): _327.MsgCreateClassResponse;
                fromAmino(object: _327.MsgCreateClassResponseAmino): _327.MsgCreateClassResponse;
                toAmino(message: _327.MsgCreateClassResponse): _327.MsgCreateClassResponseAmino;
                fromAminoMsg(object: _327.MsgCreateClassResponseAminoMsg): _327.MsgCreateClassResponse;
                fromProtoMsg(message: _327.MsgCreateClassResponseProtoMsg): _327.MsgCreateClassResponse;
                toProto(message: _327.MsgCreateClassResponse): Uint8Array;
                toProtoMsg(message: _327.MsgCreateClassResponse): _327.MsgCreateClassResponseProtoMsg;
            };
            MsgCreateProject: {
                typeUrl: string;
                encode(message: _327.MsgCreateProject, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgCreateProject;
                fromPartial(object: Partial<_327.MsgCreateProject>): _327.MsgCreateProject;
                fromAmino(object: _327.MsgCreateProjectAmino): _327.MsgCreateProject;
                toAmino(message: _327.MsgCreateProject): _327.MsgCreateProjectAmino;
                fromAminoMsg(object: _327.MsgCreateProjectAminoMsg): _327.MsgCreateProject;
                fromProtoMsg(message: _327.MsgCreateProjectProtoMsg): _327.MsgCreateProject;
                toProto(message: _327.MsgCreateProject): Uint8Array;
                toProtoMsg(message: _327.MsgCreateProject): _327.MsgCreateProjectProtoMsg;
            };
            MsgCreateProjectResponse: {
                typeUrl: string;
                encode(message: _327.MsgCreateProjectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgCreateProjectResponse;
                fromPartial(object: Partial<_327.MsgCreateProjectResponse>): _327.MsgCreateProjectResponse;
                fromAmino(object: _327.MsgCreateProjectResponseAmino): _327.MsgCreateProjectResponse;
                toAmino(message: _327.MsgCreateProjectResponse): _327.MsgCreateProjectResponseAmino;
                fromAminoMsg(object: _327.MsgCreateProjectResponseAminoMsg): _327.MsgCreateProjectResponse;
                fromProtoMsg(message: _327.MsgCreateProjectResponseProtoMsg): _327.MsgCreateProjectResponse;
                toProto(message: _327.MsgCreateProjectResponse): Uint8Array;
                toProtoMsg(message: _327.MsgCreateProjectResponse): _327.MsgCreateProjectResponseProtoMsg;
            };
            MsgCreateBatch: {
                typeUrl: string;
                encode(message: _327.MsgCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgCreateBatch;
                fromPartial(object: Partial<_327.MsgCreateBatch>): _327.MsgCreateBatch;
                fromAmino(object: _327.MsgCreateBatchAmino): _327.MsgCreateBatch;
                toAmino(message: _327.MsgCreateBatch): _327.MsgCreateBatchAmino;
                fromAminoMsg(object: _327.MsgCreateBatchAminoMsg): _327.MsgCreateBatch;
                fromProtoMsg(message: _327.MsgCreateBatchProtoMsg): _327.MsgCreateBatch;
                toProto(message: _327.MsgCreateBatch): Uint8Array;
                toProtoMsg(message: _327.MsgCreateBatch): _327.MsgCreateBatchProtoMsg;
            };
            BatchIssuance: {
                typeUrl: string;
                encode(message: _327.BatchIssuance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.BatchIssuance;
                fromPartial(object: Partial<_327.BatchIssuance>): _327.BatchIssuance;
                fromAmino(object: _327.BatchIssuanceAmino): _327.BatchIssuance;
                toAmino(message: _327.BatchIssuance): _327.BatchIssuanceAmino;
                fromAminoMsg(object: _327.BatchIssuanceAminoMsg): _327.BatchIssuance;
                fromProtoMsg(message: _327.BatchIssuanceProtoMsg): _327.BatchIssuance;
                toProto(message: _327.BatchIssuance): Uint8Array;
                toProtoMsg(message: _327.BatchIssuance): _327.BatchIssuanceProtoMsg;
            };
            MsgCreateBatchResponse: {
                typeUrl: string;
                encode(message: _327.MsgCreateBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgCreateBatchResponse;
                fromPartial(object: Partial<_327.MsgCreateBatchResponse>): _327.MsgCreateBatchResponse;
                fromAmino(object: _327.MsgCreateBatchResponseAmino): _327.MsgCreateBatchResponse;
                toAmino(message: _327.MsgCreateBatchResponse): _327.MsgCreateBatchResponseAmino;
                fromAminoMsg(object: _327.MsgCreateBatchResponseAminoMsg): _327.MsgCreateBatchResponse;
                fromProtoMsg(message: _327.MsgCreateBatchResponseProtoMsg): _327.MsgCreateBatchResponse;
                toProto(message: _327.MsgCreateBatchResponse): Uint8Array;
                toProtoMsg(message: _327.MsgCreateBatchResponse): _327.MsgCreateBatchResponseProtoMsg;
            };
            MsgMintBatchCredits: {
                typeUrl: string;
                encode(message: _327.MsgMintBatchCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgMintBatchCredits;
                fromPartial(object: Partial<_327.MsgMintBatchCredits>): _327.MsgMintBatchCredits;
                fromAmino(object: _327.MsgMintBatchCreditsAmino): _327.MsgMintBatchCredits;
                toAmino(message: _327.MsgMintBatchCredits): _327.MsgMintBatchCreditsAmino;
                fromAminoMsg(object: _327.MsgMintBatchCreditsAminoMsg): _327.MsgMintBatchCredits;
                fromProtoMsg(message: _327.MsgMintBatchCreditsProtoMsg): _327.MsgMintBatchCredits;
                toProto(message: _327.MsgMintBatchCredits): Uint8Array;
                toProtoMsg(message: _327.MsgMintBatchCredits): _327.MsgMintBatchCreditsProtoMsg;
            };
            MsgSealBatch: {
                typeUrl: string;
                encode(message: _327.MsgSealBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgSealBatch;
                fromPartial(object: Partial<_327.MsgSealBatch>): _327.MsgSealBatch;
                fromAmino(object: _327.MsgSealBatchAmino): _327.MsgSealBatch;
                toAmino(message: _327.MsgSealBatch): _327.MsgSealBatchAmino;
                fromAminoMsg(object: _327.MsgSealBatchAminoMsg): _327.MsgSealBatch;
                fromProtoMsg(message: _327.MsgSealBatchProtoMsg): _327.MsgSealBatch;
                toProto(message: _327.MsgSealBatch): Uint8Array;
                toProtoMsg(message: _327.MsgSealBatch): _327.MsgSealBatchProtoMsg;
            };
            MsgMintBatchCreditsResponse: {
                typeUrl: string;
                encode(_: _327.MsgMintBatchCreditsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgMintBatchCreditsResponse;
                fromPartial(_: Partial<_327.MsgMintBatchCreditsResponse>): _327.MsgMintBatchCreditsResponse;
                fromAmino(_: _327.MsgMintBatchCreditsResponseAmino): _327.MsgMintBatchCreditsResponse;
                toAmino(_: _327.MsgMintBatchCreditsResponse): _327.MsgMintBatchCreditsResponseAmino;
                fromAminoMsg(object: _327.MsgMintBatchCreditsResponseAminoMsg): _327.MsgMintBatchCreditsResponse;
                fromProtoMsg(message: _327.MsgMintBatchCreditsResponseProtoMsg): _327.MsgMintBatchCreditsResponse;
                toProto(message: _327.MsgMintBatchCreditsResponse): Uint8Array;
                toProtoMsg(message: _327.MsgMintBatchCreditsResponse): _327.MsgMintBatchCreditsResponseProtoMsg;
            };
            MsgSealBatchResponse: {
                typeUrl: string;
                encode(_: _327.MsgSealBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgSealBatchResponse;
                fromPartial(_: Partial<_327.MsgSealBatchResponse>): _327.MsgSealBatchResponse;
                fromAmino(_: _327.MsgSealBatchResponseAmino): _327.MsgSealBatchResponse;
                toAmino(_: _327.MsgSealBatchResponse): _327.MsgSealBatchResponseAmino;
                fromAminoMsg(object: _327.MsgSealBatchResponseAminoMsg): _327.MsgSealBatchResponse;
                fromProtoMsg(message: _327.MsgSealBatchResponseProtoMsg): _327.MsgSealBatchResponse;
                toProto(message: _327.MsgSealBatchResponse): Uint8Array;
                toProtoMsg(message: _327.MsgSealBatchResponse): _327.MsgSealBatchResponseProtoMsg;
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _327.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgSend;
                fromPartial(object: Partial<_327.MsgSend>): _327.MsgSend;
                fromAmino(object: _327.MsgSendAmino): _327.MsgSend;
                toAmino(message: _327.MsgSend): _327.MsgSendAmino;
                fromAminoMsg(object: _327.MsgSendAminoMsg): _327.MsgSend;
                fromProtoMsg(message: _327.MsgSendProtoMsg): _327.MsgSend;
                toProto(message: _327.MsgSend): Uint8Array;
                toProtoMsg(message: _327.MsgSend): _327.MsgSendProtoMsg;
            };
            MsgSend_SendCredits: {
                typeUrl: string;
                encode(message: _327.MsgSend_SendCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgSend_SendCredits;
                fromPartial(object: Partial<_327.MsgSend_SendCredits>): _327.MsgSend_SendCredits;
                fromAmino(object: _327.MsgSend_SendCreditsAmino): _327.MsgSend_SendCredits;
                toAmino(message: _327.MsgSend_SendCredits): _327.MsgSend_SendCreditsAmino;
                fromAminoMsg(object: _327.MsgSend_SendCreditsAminoMsg): _327.MsgSend_SendCredits;
                fromProtoMsg(message: _327.MsgSend_SendCreditsProtoMsg): _327.MsgSend_SendCredits;
                toProto(message: _327.MsgSend_SendCredits): Uint8Array;
                toProtoMsg(message: _327.MsgSend_SendCredits): _327.MsgSend_SendCreditsProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _327.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgSendResponse;
                fromPartial(_: Partial<_327.MsgSendResponse>): _327.MsgSendResponse;
                fromAmino(_: _327.MsgSendResponseAmino): _327.MsgSendResponse;
                toAmino(_: _327.MsgSendResponse): _327.MsgSendResponseAmino;
                fromAminoMsg(object: _327.MsgSendResponseAminoMsg): _327.MsgSendResponse;
                fromProtoMsg(message: _327.MsgSendResponseProtoMsg): _327.MsgSendResponse;
                toProto(message: _327.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _327.MsgSendResponse): _327.MsgSendResponseProtoMsg;
            };
            MsgRetire: {
                typeUrl: string;
                encode(message: _327.MsgRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgRetire;
                fromPartial(object: Partial<_327.MsgRetire>): _327.MsgRetire;
                fromAmino(object: _327.MsgRetireAmino): _327.MsgRetire;
                toAmino(message: _327.MsgRetire): _327.MsgRetireAmino;
                fromAminoMsg(object: _327.MsgRetireAminoMsg): _327.MsgRetire;
                fromProtoMsg(message: _327.MsgRetireProtoMsg): _327.MsgRetire;
                toProto(message: _327.MsgRetire): Uint8Array;
                toProtoMsg(message: _327.MsgRetire): _327.MsgRetireProtoMsg;
            };
            MsgRetire_RetireCredits: {
                typeUrl: string;
                encode(message: _327.MsgRetire_RetireCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgRetire_RetireCredits;
                fromPartial(object: Partial<_327.MsgRetire_RetireCredits>): _327.MsgRetire_RetireCredits;
                fromAmino(object: _327.MsgRetire_RetireCreditsAmino): _327.MsgRetire_RetireCredits;
                toAmino(message: _327.MsgRetire_RetireCredits): _327.MsgRetire_RetireCreditsAmino;
                fromAminoMsg(object: _327.MsgRetire_RetireCreditsAminoMsg): _327.MsgRetire_RetireCredits;
                fromProtoMsg(message: _327.MsgRetire_RetireCreditsProtoMsg): _327.MsgRetire_RetireCredits;
                toProto(message: _327.MsgRetire_RetireCredits): Uint8Array;
                toProtoMsg(message: _327.MsgRetire_RetireCredits): _327.MsgRetire_RetireCreditsProtoMsg;
            };
            MsgRetireResponse: {
                typeUrl: string;
                encode(_: _327.MsgRetireResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgRetireResponse;
                fromPartial(_: Partial<_327.MsgRetireResponse>): _327.MsgRetireResponse;
                fromAmino(_: _327.MsgRetireResponseAmino): _327.MsgRetireResponse;
                toAmino(_: _327.MsgRetireResponse): _327.MsgRetireResponseAmino;
                fromAminoMsg(object: _327.MsgRetireResponseAminoMsg): _327.MsgRetireResponse;
                fromProtoMsg(message: _327.MsgRetireResponseProtoMsg): _327.MsgRetireResponse;
                toProto(message: _327.MsgRetireResponse): Uint8Array;
                toProtoMsg(message: _327.MsgRetireResponse): _327.MsgRetireResponseProtoMsg;
            };
            MsgCancel: {
                typeUrl: string;
                encode(message: _327.MsgCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgCancel;
                fromPartial(object: Partial<_327.MsgCancel>): _327.MsgCancel;
                fromAmino(object: _327.MsgCancelAmino): _327.MsgCancel;
                toAmino(message: _327.MsgCancel): _327.MsgCancelAmino;
                fromAminoMsg(object: _327.MsgCancelAminoMsg): _327.MsgCancel;
                fromProtoMsg(message: _327.MsgCancelProtoMsg): _327.MsgCancel;
                toProto(message: _327.MsgCancel): Uint8Array;
                toProtoMsg(message: _327.MsgCancel): _327.MsgCancelProtoMsg;
            };
            MsgCancel_CancelCredits: {
                typeUrl: string;
                encode(message: _327.MsgCancel_CancelCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgCancel_CancelCredits;
                fromPartial(object: Partial<_327.MsgCancel_CancelCredits>): _327.MsgCancel_CancelCredits;
                fromAmino(object: _327.MsgCancel_CancelCreditsAmino): _327.MsgCancel_CancelCredits;
                toAmino(message: _327.MsgCancel_CancelCredits): _327.MsgCancel_CancelCreditsAmino;
                fromAminoMsg(object: _327.MsgCancel_CancelCreditsAminoMsg): _327.MsgCancel_CancelCredits;
                fromProtoMsg(message: _327.MsgCancel_CancelCreditsProtoMsg): _327.MsgCancel_CancelCredits;
                toProto(message: _327.MsgCancel_CancelCredits): Uint8Array;
                toProtoMsg(message: _327.MsgCancel_CancelCredits): _327.MsgCancel_CancelCreditsProtoMsg;
            };
            MsgCancelResponse: {
                typeUrl: string;
                encode(_: _327.MsgCancelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgCancelResponse;
                fromPartial(_: Partial<_327.MsgCancelResponse>): _327.MsgCancelResponse;
                fromAmino(_: _327.MsgCancelResponseAmino): _327.MsgCancelResponse;
                toAmino(_: _327.MsgCancelResponse): _327.MsgCancelResponseAmino;
                fromAminoMsg(object: _327.MsgCancelResponseAminoMsg): _327.MsgCancelResponse;
                fromProtoMsg(message: _327.MsgCancelResponseProtoMsg): _327.MsgCancelResponse;
                toProto(message: _327.MsgCancelResponse): Uint8Array;
                toProtoMsg(message: _327.MsgCancelResponse): _327.MsgCancelResponseProtoMsg;
            };
            MsgUpdateClassAdmin: {
                typeUrl: string;
                encode(message: _327.MsgUpdateClassAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgUpdateClassAdmin;
                fromPartial(object: Partial<_327.MsgUpdateClassAdmin>): _327.MsgUpdateClassAdmin;
                fromAmino(object: _327.MsgUpdateClassAdminAmino): _327.MsgUpdateClassAdmin;
                toAmino(message: _327.MsgUpdateClassAdmin): _327.MsgUpdateClassAdminAmino;
                fromAminoMsg(object: _327.MsgUpdateClassAdminAminoMsg): _327.MsgUpdateClassAdmin;
                fromProtoMsg(message: _327.MsgUpdateClassAdminProtoMsg): _327.MsgUpdateClassAdmin;
                toProto(message: _327.MsgUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _327.MsgUpdateClassAdmin): _327.MsgUpdateClassAdminProtoMsg;
            };
            MsgUpdateClassAdminResponse: {
                typeUrl: string;
                encode(_: _327.MsgUpdateClassAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgUpdateClassAdminResponse;
                fromPartial(_: Partial<_327.MsgUpdateClassAdminResponse>): _327.MsgUpdateClassAdminResponse;
                fromAmino(_: _327.MsgUpdateClassAdminResponseAmino): _327.MsgUpdateClassAdminResponse;
                toAmino(_: _327.MsgUpdateClassAdminResponse): _327.MsgUpdateClassAdminResponseAmino;
                fromAminoMsg(object: _327.MsgUpdateClassAdminResponseAminoMsg): _327.MsgUpdateClassAdminResponse;
                fromProtoMsg(message: _327.MsgUpdateClassAdminResponseProtoMsg): _327.MsgUpdateClassAdminResponse;
                toProto(message: _327.MsgUpdateClassAdminResponse): Uint8Array;
                toProtoMsg(message: _327.MsgUpdateClassAdminResponse): _327.MsgUpdateClassAdminResponseProtoMsg;
            };
            MsgUpdateClassIssuers: {
                typeUrl: string;
                encode(message: _327.MsgUpdateClassIssuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgUpdateClassIssuers;
                fromPartial(object: Partial<_327.MsgUpdateClassIssuers>): _327.MsgUpdateClassIssuers;
                fromAmino(object: _327.MsgUpdateClassIssuersAmino): _327.MsgUpdateClassIssuers;
                toAmino(message: _327.MsgUpdateClassIssuers): _327.MsgUpdateClassIssuersAmino;
                fromAminoMsg(object: _327.MsgUpdateClassIssuersAminoMsg): _327.MsgUpdateClassIssuers;
                fromProtoMsg(message: _327.MsgUpdateClassIssuersProtoMsg): _327.MsgUpdateClassIssuers;
                toProto(message: _327.MsgUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _327.MsgUpdateClassIssuers): _327.MsgUpdateClassIssuersProtoMsg;
            };
            MsgUpdateClassIssuersResponse: {
                typeUrl: string;
                encode(_: _327.MsgUpdateClassIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgUpdateClassIssuersResponse;
                fromPartial(_: Partial<_327.MsgUpdateClassIssuersResponse>): _327.MsgUpdateClassIssuersResponse;
                fromAmino(_: _327.MsgUpdateClassIssuersResponseAmino): _327.MsgUpdateClassIssuersResponse;
                toAmino(_: _327.MsgUpdateClassIssuersResponse): _327.MsgUpdateClassIssuersResponseAmino;
                fromAminoMsg(object: _327.MsgUpdateClassIssuersResponseAminoMsg): _327.MsgUpdateClassIssuersResponse;
                fromProtoMsg(message: _327.MsgUpdateClassIssuersResponseProtoMsg): _327.MsgUpdateClassIssuersResponse;
                toProto(message: _327.MsgUpdateClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _327.MsgUpdateClassIssuersResponse): _327.MsgUpdateClassIssuersResponseProtoMsg;
            };
            MsgUpdateClassMetadata: {
                typeUrl: string;
                encode(message: _327.MsgUpdateClassMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgUpdateClassMetadata;
                fromPartial(object: Partial<_327.MsgUpdateClassMetadata>): _327.MsgUpdateClassMetadata;
                fromAmino(object: _327.MsgUpdateClassMetadataAmino): _327.MsgUpdateClassMetadata;
                toAmino(message: _327.MsgUpdateClassMetadata): _327.MsgUpdateClassMetadataAmino;
                fromAminoMsg(object: _327.MsgUpdateClassMetadataAminoMsg): _327.MsgUpdateClassMetadata;
                fromProtoMsg(message: _327.MsgUpdateClassMetadataProtoMsg): _327.MsgUpdateClassMetadata;
                toProto(message: _327.MsgUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _327.MsgUpdateClassMetadata): _327.MsgUpdateClassMetadataProtoMsg;
            };
            MsgUpdateClassMetadataResponse: {
                typeUrl: string;
                encode(_: _327.MsgUpdateClassMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgUpdateClassMetadataResponse;
                fromPartial(_: Partial<_327.MsgUpdateClassMetadataResponse>): _327.MsgUpdateClassMetadataResponse;
                fromAmino(_: _327.MsgUpdateClassMetadataResponseAmino): _327.MsgUpdateClassMetadataResponse;
                toAmino(_: _327.MsgUpdateClassMetadataResponse): _327.MsgUpdateClassMetadataResponseAmino;
                fromAminoMsg(object: _327.MsgUpdateClassMetadataResponseAminoMsg): _327.MsgUpdateClassMetadataResponse;
                fromProtoMsg(message: _327.MsgUpdateClassMetadataResponseProtoMsg): _327.MsgUpdateClassMetadataResponse;
                toProto(message: _327.MsgUpdateClassMetadataResponse): Uint8Array;
                toProtoMsg(message: _327.MsgUpdateClassMetadataResponse): _327.MsgUpdateClassMetadataResponseProtoMsg;
            };
            MsgUpdateProjectAdmin: {
                typeUrl: string;
                encode(message: _327.MsgUpdateProjectAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgUpdateProjectAdmin;
                fromPartial(object: Partial<_327.MsgUpdateProjectAdmin>): _327.MsgUpdateProjectAdmin;
                fromAmino(object: _327.MsgUpdateProjectAdminAmino): _327.MsgUpdateProjectAdmin;
                toAmino(message: _327.MsgUpdateProjectAdmin): _327.MsgUpdateProjectAdminAmino;
                fromAminoMsg(object: _327.MsgUpdateProjectAdminAminoMsg): _327.MsgUpdateProjectAdmin;
                fromProtoMsg(message: _327.MsgUpdateProjectAdminProtoMsg): _327.MsgUpdateProjectAdmin;
                toProto(message: _327.MsgUpdateProjectAdmin): Uint8Array;
                toProtoMsg(message: _327.MsgUpdateProjectAdmin): _327.MsgUpdateProjectAdminProtoMsg;
            };
            MsgUpdateProjectAdminResponse: {
                typeUrl: string;
                encode(_: _327.MsgUpdateProjectAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgUpdateProjectAdminResponse;
                fromPartial(_: Partial<_327.MsgUpdateProjectAdminResponse>): _327.MsgUpdateProjectAdminResponse;
                fromAmino(_: _327.MsgUpdateProjectAdminResponseAmino): _327.MsgUpdateProjectAdminResponse;
                toAmino(_: _327.MsgUpdateProjectAdminResponse): _327.MsgUpdateProjectAdminResponseAmino;
                fromAminoMsg(object: _327.MsgUpdateProjectAdminResponseAminoMsg): _327.MsgUpdateProjectAdminResponse;
                fromProtoMsg(message: _327.MsgUpdateProjectAdminResponseProtoMsg): _327.MsgUpdateProjectAdminResponse;
                toProto(message: _327.MsgUpdateProjectAdminResponse): Uint8Array;
                toProtoMsg(message: _327.MsgUpdateProjectAdminResponse): _327.MsgUpdateProjectAdminResponseProtoMsg;
            };
            MsgUpdateProjectMetadata: {
                typeUrl: string;
                encode(message: _327.MsgUpdateProjectMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgUpdateProjectMetadata;
                fromPartial(object: Partial<_327.MsgUpdateProjectMetadata>): _327.MsgUpdateProjectMetadata;
                fromAmino(object: _327.MsgUpdateProjectMetadataAmino): _327.MsgUpdateProjectMetadata;
                toAmino(message: _327.MsgUpdateProjectMetadata): _327.MsgUpdateProjectMetadataAmino;
                fromAminoMsg(object: _327.MsgUpdateProjectMetadataAminoMsg): _327.MsgUpdateProjectMetadata;
                fromProtoMsg(message: _327.MsgUpdateProjectMetadataProtoMsg): _327.MsgUpdateProjectMetadata;
                toProto(message: _327.MsgUpdateProjectMetadata): Uint8Array;
                toProtoMsg(message: _327.MsgUpdateProjectMetadata): _327.MsgUpdateProjectMetadataProtoMsg;
            };
            MsgUpdateProjectMetadataResponse: {
                typeUrl: string;
                encode(_: _327.MsgUpdateProjectMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _327.MsgUpdateProjectMetadataResponse;
                fromPartial(_: Partial<_327.MsgUpdateProjectMetadataResponse>): _327.MsgUpdateProjectMetadataResponse;
                fromAmino(_: _327.MsgUpdateProjectMetadataResponseAmino): _327.MsgUpdateProjectMetadataResponse;
                toAmino(_: _327.MsgUpdateProjectMetadataResponse): _327.MsgUpdateProjectMetadataResponseAmino;
                fromAminoMsg(object: _327.MsgUpdateProjectMetadataResponseAminoMsg): _327.MsgUpdateProjectMetadataResponse;
                fromProtoMsg(message: _327.MsgUpdateProjectMetadataResponseProtoMsg): _327.MsgUpdateProjectMetadataResponse;
                toProto(message: _327.MsgUpdateProjectMetadataResponse): Uint8Array;
                toProtoMsg(message: _327.MsgUpdateProjectMetadataResponse): _327.MsgUpdateProjectMetadataResponseProtoMsg;
            };
            CreditType: {
                typeUrl: string;
                encode(message: _326.CreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _326.CreditType;
                fromPartial(object: Partial<_326.CreditType>): _326.CreditType;
                fromAmino(object: _326.CreditTypeAmino): _326.CreditType;
                toAmino(message: _326.CreditType): _326.CreditTypeAmino;
                fromAminoMsg(object: _326.CreditTypeAminoMsg): _326.CreditType;
                fromProtoMsg(message: _326.CreditTypeProtoMsg): _326.CreditType;
                toProto(message: _326.CreditType): Uint8Array;
                toProtoMsg(message: _326.CreditType): _326.CreditTypeProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _326.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _326.Class;
                fromPartial(object: Partial<_326.Class>): _326.Class;
                fromAmino(object: _326.ClassAmino): _326.Class;
                toAmino(message: _326.Class): _326.ClassAmino;
                fromAminoMsg(object: _326.ClassAminoMsg): _326.Class;
                fromProtoMsg(message: _326.ClassProtoMsg): _326.Class;
                toProto(message: _326.Class): Uint8Array;
                toProtoMsg(message: _326.Class): _326.ClassProtoMsg;
            };
            ClassIssuer: {
                typeUrl: string;
                encode(message: _326.ClassIssuer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _326.ClassIssuer;
                fromPartial(object: Partial<_326.ClassIssuer>): _326.ClassIssuer;
                fromAmino(object: _326.ClassIssuerAmino): _326.ClassIssuer;
                toAmino(message: _326.ClassIssuer): _326.ClassIssuerAmino;
                fromAminoMsg(object: _326.ClassIssuerAminoMsg): _326.ClassIssuer;
                fromProtoMsg(message: _326.ClassIssuerProtoMsg): _326.ClassIssuer;
                toProto(message: _326.ClassIssuer): Uint8Array;
                toProtoMsg(message: _326.ClassIssuer): _326.ClassIssuerProtoMsg;
            };
            Project: {
                typeUrl: string;
                encode(message: _326.Project, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _326.Project;
                fromPartial(object: Partial<_326.Project>): _326.Project;
                fromAmino(object: _326.ProjectAmino): _326.Project;
                toAmino(message: _326.Project): _326.ProjectAmino;
                fromAminoMsg(object: _326.ProjectAminoMsg): _326.Project;
                fromProtoMsg(message: _326.ProjectProtoMsg): _326.Project;
                toProto(message: _326.Project): Uint8Array;
                toProtoMsg(message: _326.Project): _326.ProjectProtoMsg;
            };
            Batch: {
                typeUrl: string;
                encode(message: _326.Batch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _326.Batch;
                fromPartial(object: Partial<_326.Batch>): _326.Batch;
                fromAmino(object: _326.BatchAmino): _326.Batch;
                toAmino(message: _326.Batch): _326.BatchAmino;
                fromAminoMsg(object: _326.BatchAminoMsg): _326.Batch;
                fromProtoMsg(message: _326.BatchProtoMsg): _326.Batch;
                toProto(message: _326.Batch): Uint8Array;
                toProtoMsg(message: _326.Batch): _326.BatchProtoMsg;
            };
            ClassSequence: {
                typeUrl: string;
                encode(message: _326.ClassSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _326.ClassSequence;
                fromPartial(object: Partial<_326.ClassSequence>): _326.ClassSequence;
                fromAmino(object: _326.ClassSequenceAmino): _326.ClassSequence;
                toAmino(message: _326.ClassSequence): _326.ClassSequenceAmino;
                fromAminoMsg(object: _326.ClassSequenceAminoMsg): _326.ClassSequence;
                fromProtoMsg(message: _326.ClassSequenceProtoMsg): _326.ClassSequence;
                toProto(message: _326.ClassSequence): Uint8Array;
                toProtoMsg(message: _326.ClassSequence): _326.ClassSequenceProtoMsg;
            };
            ProjectSequence: {
                typeUrl: string;
                encode(message: _326.ProjectSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _326.ProjectSequence;
                fromPartial(object: Partial<_326.ProjectSequence>): _326.ProjectSequence;
                fromAmino(object: _326.ProjectSequenceAmino): _326.ProjectSequence;
                toAmino(message: _326.ProjectSequence): _326.ProjectSequenceAmino;
                fromAminoMsg(object: _326.ProjectSequenceAminoMsg): _326.ProjectSequence;
                fromProtoMsg(message: _326.ProjectSequenceProtoMsg): _326.ProjectSequence;
                toProto(message: _326.ProjectSequence): Uint8Array;
                toProtoMsg(message: _326.ProjectSequence): _326.ProjectSequenceProtoMsg;
            };
            BatchSequence: {
                typeUrl: string;
                encode(message: _326.BatchSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _326.BatchSequence;
                fromPartial(object: Partial<_326.BatchSequence>): _326.BatchSequence;
                fromAmino(object: _326.BatchSequenceAmino): _326.BatchSequence;
                toAmino(message: _326.BatchSequence): _326.BatchSequenceAmino;
                fromAminoMsg(object: _326.BatchSequenceAminoMsg): _326.BatchSequence;
                fromProtoMsg(message: _326.BatchSequenceProtoMsg): _326.BatchSequence;
                toProto(message: _326.BatchSequence): Uint8Array;
                toProtoMsg(message: _326.BatchSequence): _326.BatchSequenceProtoMsg;
            };
            BatchBalance: {
                typeUrl: string;
                encode(message: _326.BatchBalance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _326.BatchBalance;
                fromPartial(object: Partial<_326.BatchBalance>): _326.BatchBalance;
                fromAmino(object: _326.BatchBalanceAmino): _326.BatchBalance;
                toAmino(message: _326.BatchBalance): _326.BatchBalanceAmino;
                fromAminoMsg(object: _326.BatchBalanceAminoMsg): _326.BatchBalance;
                fromProtoMsg(message: _326.BatchBalanceProtoMsg): _326.BatchBalance;
                toProto(message: _326.BatchBalance): Uint8Array;
                toProtoMsg(message: _326.BatchBalance): _326.BatchBalanceProtoMsg;
            };
            BatchSupply: {
                typeUrl: string;
                encode(message: _326.BatchSupply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _326.BatchSupply;
                fromPartial(object: Partial<_326.BatchSupply>): _326.BatchSupply;
                fromAmino(object: _326.BatchSupplyAmino): _326.BatchSupply;
                toAmino(message: _326.BatchSupply): _326.BatchSupplyAmino;
                fromAminoMsg(object: _326.BatchSupplyAminoMsg): _326.BatchSupply;
                fromProtoMsg(message: _326.BatchSupplyProtoMsg): _326.BatchSupply;
                toProto(message: _326.BatchSupply): Uint8Array;
                toProtoMsg(message: _326.BatchSupply): _326.BatchSupplyProtoMsg;
            };
            BatchOrigTx: {
                typeUrl: string;
                encode(message: _326.BatchOrigTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _326.BatchOrigTx;
                fromPartial(object: Partial<_326.BatchOrigTx>): _326.BatchOrigTx;
                fromAmino(object: _326.BatchOrigTxAmino): _326.BatchOrigTx;
                toAmino(message: _326.BatchOrigTx): _326.BatchOrigTxAmino;
                fromAminoMsg(object: _326.BatchOrigTxAminoMsg): _326.BatchOrigTx;
                fromProtoMsg(message: _326.BatchOrigTxProtoMsg): _326.BatchOrigTx;
                toProto(message: _326.BatchOrigTx): Uint8Array;
                toProtoMsg(message: _326.BatchOrigTx): _326.BatchOrigTxProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _325.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryClassesRequest;
                fromPartial(object: Partial<_325.QueryClassesRequest>): _325.QueryClassesRequest;
                fromAmino(object: _325.QueryClassesRequestAmino): _325.QueryClassesRequest;
                toAmino(message: _325.QueryClassesRequest): _325.QueryClassesRequestAmino;
                fromAminoMsg(object: _325.QueryClassesRequestAminoMsg): _325.QueryClassesRequest;
                fromProtoMsg(message: _325.QueryClassesRequestProtoMsg): _325.QueryClassesRequest;
                toProto(message: _325.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _325.QueryClassesRequest): _325.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _325.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryClassesResponse;
                fromPartial(object: Partial<_325.QueryClassesResponse>): _325.QueryClassesResponse;
                fromAmino(object: _325.QueryClassesResponseAmino): _325.QueryClassesResponse;
                toAmino(message: _325.QueryClassesResponse): _325.QueryClassesResponseAmino;
                fromAminoMsg(object: _325.QueryClassesResponseAminoMsg): _325.QueryClassesResponse;
                fromProtoMsg(message: _325.QueryClassesResponseProtoMsg): _325.QueryClassesResponse;
                toProto(message: _325.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _325.QueryClassesResponse): _325.QueryClassesResponseProtoMsg;
            };
            QueryClassesByAdminRequest: {
                typeUrl: string;
                encode(message: _325.QueryClassesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryClassesByAdminRequest;
                fromPartial(object: Partial<_325.QueryClassesByAdminRequest>): _325.QueryClassesByAdminRequest;
                fromAmino(object: _325.QueryClassesByAdminRequestAmino): _325.QueryClassesByAdminRequest;
                toAmino(message: _325.QueryClassesByAdminRequest): _325.QueryClassesByAdminRequestAmino;
                fromAminoMsg(object: _325.QueryClassesByAdminRequestAminoMsg): _325.QueryClassesByAdminRequest;
                fromProtoMsg(message: _325.QueryClassesByAdminRequestProtoMsg): _325.QueryClassesByAdminRequest;
                toProto(message: _325.QueryClassesByAdminRequest): Uint8Array;
                toProtoMsg(message: _325.QueryClassesByAdminRequest): _325.QueryClassesByAdminRequestProtoMsg;
            };
            QueryClassesByAdminResponse: {
                typeUrl: string;
                encode(message: _325.QueryClassesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryClassesByAdminResponse;
                fromPartial(object: Partial<_325.QueryClassesByAdminResponse>): _325.QueryClassesByAdminResponse;
                fromAmino(object: _325.QueryClassesByAdminResponseAmino): _325.QueryClassesByAdminResponse;
                toAmino(message: _325.QueryClassesByAdminResponse): _325.QueryClassesByAdminResponseAmino;
                fromAminoMsg(object: _325.QueryClassesByAdminResponseAminoMsg): _325.QueryClassesByAdminResponse;
                fromProtoMsg(message: _325.QueryClassesByAdminResponseProtoMsg): _325.QueryClassesByAdminResponse;
                toProto(message: _325.QueryClassesByAdminResponse): Uint8Array;
                toProtoMsg(message: _325.QueryClassesByAdminResponse): _325.QueryClassesByAdminResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _325.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryClassRequest;
                fromPartial(object: Partial<_325.QueryClassRequest>): _325.QueryClassRequest;
                fromAmino(object: _325.QueryClassRequestAmino): _325.QueryClassRequest;
                toAmino(message: _325.QueryClassRequest): _325.QueryClassRequestAmino;
                fromAminoMsg(object: _325.QueryClassRequestAminoMsg): _325.QueryClassRequest;
                fromProtoMsg(message: _325.QueryClassRequestProtoMsg): _325.QueryClassRequest;
                toProto(message: _325.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _325.QueryClassRequest): _325.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _325.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryClassResponse;
                fromPartial(object: Partial<_325.QueryClassResponse>): _325.QueryClassResponse;
                fromAmino(object: _325.QueryClassResponseAmino): _325.QueryClassResponse;
                toAmino(message: _325.QueryClassResponse): _325.QueryClassResponseAmino;
                fromAminoMsg(object: _325.QueryClassResponseAminoMsg): _325.QueryClassResponse;
                fromProtoMsg(message: _325.QueryClassResponseProtoMsg): _325.QueryClassResponse;
                toProto(message: _325.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _325.QueryClassResponse): _325.QueryClassResponseProtoMsg;
            };
            QueryClassIssuersRequest: {
                typeUrl: string;
                encode(message: _325.QueryClassIssuersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryClassIssuersRequest;
                fromPartial(object: Partial<_325.QueryClassIssuersRequest>): _325.QueryClassIssuersRequest;
                fromAmino(object: _325.QueryClassIssuersRequestAmino): _325.QueryClassIssuersRequest;
                toAmino(message: _325.QueryClassIssuersRequest): _325.QueryClassIssuersRequestAmino;
                fromAminoMsg(object: _325.QueryClassIssuersRequestAminoMsg): _325.QueryClassIssuersRequest;
                fromProtoMsg(message: _325.QueryClassIssuersRequestProtoMsg): _325.QueryClassIssuersRequest;
                toProto(message: _325.QueryClassIssuersRequest): Uint8Array;
                toProtoMsg(message: _325.QueryClassIssuersRequest): _325.QueryClassIssuersRequestProtoMsg;
            };
            QueryClassIssuersResponse: {
                typeUrl: string;
                encode(message: _325.QueryClassIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryClassIssuersResponse;
                fromPartial(object: Partial<_325.QueryClassIssuersResponse>): _325.QueryClassIssuersResponse;
                fromAmino(object: _325.QueryClassIssuersResponseAmino): _325.QueryClassIssuersResponse;
                toAmino(message: _325.QueryClassIssuersResponse): _325.QueryClassIssuersResponseAmino;
                fromAminoMsg(object: _325.QueryClassIssuersResponseAminoMsg): _325.QueryClassIssuersResponse;
                fromProtoMsg(message: _325.QueryClassIssuersResponseProtoMsg): _325.QueryClassIssuersResponse;
                toProto(message: _325.QueryClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _325.QueryClassIssuersResponse): _325.QueryClassIssuersResponseProtoMsg;
            };
            QueryProjectsRequest: {
                typeUrl: string;
                encode(message: _325.QueryProjectsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryProjectsRequest;
                fromPartial(object: Partial<_325.QueryProjectsRequest>): _325.QueryProjectsRequest;
                fromAmino(object: _325.QueryProjectsRequestAmino): _325.QueryProjectsRequest;
                toAmino(message: _325.QueryProjectsRequest): _325.QueryProjectsRequestAmino;
                fromAminoMsg(object: _325.QueryProjectsRequestAminoMsg): _325.QueryProjectsRequest;
                fromProtoMsg(message: _325.QueryProjectsRequestProtoMsg): _325.QueryProjectsRequest;
                toProto(message: _325.QueryProjectsRequest): Uint8Array;
                toProtoMsg(message: _325.QueryProjectsRequest): _325.QueryProjectsRequestProtoMsg;
            };
            QueryProjectsResponse: {
                typeUrl: string;
                encode(message: _325.QueryProjectsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryProjectsResponse;
                fromPartial(object: Partial<_325.QueryProjectsResponse>): _325.QueryProjectsResponse;
                fromAmino(object: _325.QueryProjectsResponseAmino): _325.QueryProjectsResponse;
                toAmino(message: _325.QueryProjectsResponse): _325.QueryProjectsResponseAmino;
                fromAminoMsg(object: _325.QueryProjectsResponseAminoMsg): _325.QueryProjectsResponse;
                fromProtoMsg(message: _325.QueryProjectsResponseProtoMsg): _325.QueryProjectsResponse;
                toProto(message: _325.QueryProjectsResponse): Uint8Array;
                toProtoMsg(message: _325.QueryProjectsResponse): _325.QueryProjectsResponseProtoMsg;
            };
            QueryProjectsByReferenceIdRequest: {
                typeUrl: string;
                encode(message: _325.QueryProjectsByReferenceIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryProjectsByReferenceIdRequest;
                fromPartial(object: Partial<_325.QueryProjectsByReferenceIdRequest>): _325.QueryProjectsByReferenceIdRequest;
                fromAmino(object: _325.QueryProjectsByReferenceIdRequestAmino): _325.QueryProjectsByReferenceIdRequest;
                toAmino(message: _325.QueryProjectsByReferenceIdRequest): _325.QueryProjectsByReferenceIdRequestAmino;
                fromAminoMsg(object: _325.QueryProjectsByReferenceIdRequestAminoMsg): _325.QueryProjectsByReferenceIdRequest;
                fromProtoMsg(message: _325.QueryProjectsByReferenceIdRequestProtoMsg): _325.QueryProjectsByReferenceIdRequest;
                toProto(message: _325.QueryProjectsByReferenceIdRequest): Uint8Array;
                toProtoMsg(message: _325.QueryProjectsByReferenceIdRequest): _325.QueryProjectsByReferenceIdRequestProtoMsg;
            };
            QueryProjectsByReferenceIdResponse: {
                typeUrl: string;
                encode(message: _325.QueryProjectsByReferenceIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryProjectsByReferenceIdResponse;
                fromPartial(object: Partial<_325.QueryProjectsByReferenceIdResponse>): _325.QueryProjectsByReferenceIdResponse;
                fromAmino(object: _325.QueryProjectsByReferenceIdResponseAmino): _325.QueryProjectsByReferenceIdResponse;
                toAmino(message: _325.QueryProjectsByReferenceIdResponse): _325.QueryProjectsByReferenceIdResponseAmino;
                fromAminoMsg(object: _325.QueryProjectsByReferenceIdResponseAminoMsg): _325.QueryProjectsByReferenceIdResponse;
                fromProtoMsg(message: _325.QueryProjectsByReferenceIdResponseProtoMsg): _325.QueryProjectsByReferenceIdResponse;
                toProto(message: _325.QueryProjectsByReferenceIdResponse): Uint8Array;
                toProtoMsg(message: _325.QueryProjectsByReferenceIdResponse): _325.QueryProjectsByReferenceIdResponseProtoMsg;
            };
            QueryProjectRequest: {
                typeUrl: string;
                encode(message: _325.QueryProjectRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryProjectRequest;
                fromPartial(object: Partial<_325.QueryProjectRequest>): _325.QueryProjectRequest;
                fromAmino(object: _325.QueryProjectRequestAmino): _325.QueryProjectRequest;
                toAmino(message: _325.QueryProjectRequest): _325.QueryProjectRequestAmino;
                fromAminoMsg(object: _325.QueryProjectRequestAminoMsg): _325.QueryProjectRequest;
                fromProtoMsg(message: _325.QueryProjectRequestProtoMsg): _325.QueryProjectRequest;
                toProto(message: _325.QueryProjectRequest): Uint8Array;
                toProtoMsg(message: _325.QueryProjectRequest): _325.QueryProjectRequestProtoMsg;
            };
            QueryProjectResponse: {
                typeUrl: string;
                encode(message: _325.QueryProjectResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryProjectResponse;
                fromPartial(object: Partial<_325.QueryProjectResponse>): _325.QueryProjectResponse;
                fromAmino(object: _325.QueryProjectResponseAmino): _325.QueryProjectResponse;
                toAmino(message: _325.QueryProjectResponse): _325.QueryProjectResponseAmino;
                fromAminoMsg(object: _325.QueryProjectResponseAminoMsg): _325.QueryProjectResponse;
                fromProtoMsg(message: _325.QueryProjectResponseProtoMsg): _325.QueryProjectResponse;
                toProto(message: _325.QueryProjectResponse): Uint8Array;
                toProtoMsg(message: _325.QueryProjectResponse): _325.QueryProjectResponseProtoMsg;
            };
            QueryBatchesRequest: {
                typeUrl: string;
                encode(message: _325.QueryBatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryBatchesRequest;
                fromPartial(object: Partial<_325.QueryBatchesRequest>): _325.QueryBatchesRequest;
                fromAmino(object: _325.QueryBatchesRequestAmino): _325.QueryBatchesRequest;
                toAmino(message: _325.QueryBatchesRequest): _325.QueryBatchesRequestAmino;
                fromAminoMsg(object: _325.QueryBatchesRequestAminoMsg): _325.QueryBatchesRequest;
                fromProtoMsg(message: _325.QueryBatchesRequestProtoMsg): _325.QueryBatchesRequest;
                toProto(message: _325.QueryBatchesRequest): Uint8Array;
                toProtoMsg(message: _325.QueryBatchesRequest): _325.QueryBatchesRequestProtoMsg;
            };
            QueryBatchesResponse: {
                typeUrl: string;
                encode(message: _325.QueryBatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryBatchesResponse;
                fromPartial(object: Partial<_325.QueryBatchesResponse>): _325.QueryBatchesResponse;
                fromAmino(object: _325.QueryBatchesResponseAmino): _325.QueryBatchesResponse;
                toAmino(message: _325.QueryBatchesResponse): _325.QueryBatchesResponseAmino;
                fromAminoMsg(object: _325.QueryBatchesResponseAminoMsg): _325.QueryBatchesResponse;
                fromProtoMsg(message: _325.QueryBatchesResponseProtoMsg): _325.QueryBatchesResponse;
                toProto(message: _325.QueryBatchesResponse): Uint8Array;
                toProtoMsg(message: _325.QueryBatchesResponse): _325.QueryBatchesResponseProtoMsg;
            };
            QueryBatchesByIssuerRequest: {
                typeUrl: string;
                encode(message: _325.QueryBatchesByIssuerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryBatchesByIssuerRequest;
                fromPartial(object: Partial<_325.QueryBatchesByIssuerRequest>): _325.QueryBatchesByIssuerRequest;
                fromAmino(object: _325.QueryBatchesByIssuerRequestAmino): _325.QueryBatchesByIssuerRequest;
                toAmino(message: _325.QueryBatchesByIssuerRequest): _325.QueryBatchesByIssuerRequestAmino;
                fromAminoMsg(object: _325.QueryBatchesByIssuerRequestAminoMsg): _325.QueryBatchesByIssuerRequest;
                fromProtoMsg(message: _325.QueryBatchesByIssuerRequestProtoMsg): _325.QueryBatchesByIssuerRequest;
                toProto(message: _325.QueryBatchesByIssuerRequest): Uint8Array;
                toProtoMsg(message: _325.QueryBatchesByIssuerRequest): _325.QueryBatchesByIssuerRequestProtoMsg;
            };
            QueryBatchesByIssuerResponse: {
                typeUrl: string;
                encode(message: _325.QueryBatchesByIssuerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryBatchesByIssuerResponse;
                fromPartial(object: Partial<_325.QueryBatchesByIssuerResponse>): _325.QueryBatchesByIssuerResponse;
                fromAmino(object: _325.QueryBatchesByIssuerResponseAmino): _325.QueryBatchesByIssuerResponse;
                toAmino(message: _325.QueryBatchesByIssuerResponse): _325.QueryBatchesByIssuerResponseAmino;
                fromAminoMsg(object: _325.QueryBatchesByIssuerResponseAminoMsg): _325.QueryBatchesByIssuerResponse;
                fromProtoMsg(message: _325.QueryBatchesByIssuerResponseProtoMsg): _325.QueryBatchesByIssuerResponse;
                toProto(message: _325.QueryBatchesByIssuerResponse): Uint8Array;
                toProtoMsg(message: _325.QueryBatchesByIssuerResponse): _325.QueryBatchesByIssuerResponseProtoMsg;
            };
            QueryBatchesByClassRequest: {
                typeUrl: string;
                encode(message: _325.QueryBatchesByClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryBatchesByClassRequest;
                fromPartial(object: Partial<_325.QueryBatchesByClassRequest>): _325.QueryBatchesByClassRequest;
                fromAmino(object: _325.QueryBatchesByClassRequestAmino): _325.QueryBatchesByClassRequest;
                toAmino(message: _325.QueryBatchesByClassRequest): _325.QueryBatchesByClassRequestAmino;
                fromAminoMsg(object: _325.QueryBatchesByClassRequestAminoMsg): _325.QueryBatchesByClassRequest;
                fromProtoMsg(message: _325.QueryBatchesByClassRequestProtoMsg): _325.QueryBatchesByClassRequest;
                toProto(message: _325.QueryBatchesByClassRequest): Uint8Array;
                toProtoMsg(message: _325.QueryBatchesByClassRequest): _325.QueryBatchesByClassRequestProtoMsg;
            };
            QueryBatchesByClassResponse: {
                typeUrl: string;
                encode(message: _325.QueryBatchesByClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryBatchesByClassResponse;
                fromPartial(object: Partial<_325.QueryBatchesByClassResponse>): _325.QueryBatchesByClassResponse;
                fromAmino(object: _325.QueryBatchesByClassResponseAmino): _325.QueryBatchesByClassResponse;
                toAmino(message: _325.QueryBatchesByClassResponse): _325.QueryBatchesByClassResponseAmino;
                fromAminoMsg(object: _325.QueryBatchesByClassResponseAminoMsg): _325.QueryBatchesByClassResponse;
                fromProtoMsg(message: _325.QueryBatchesByClassResponseProtoMsg): _325.QueryBatchesByClassResponse;
                toProto(message: _325.QueryBatchesByClassResponse): Uint8Array;
                toProtoMsg(message: _325.QueryBatchesByClassResponse): _325.QueryBatchesByClassResponseProtoMsg;
            };
            QueryBatchRequest: {
                typeUrl: string;
                encode(message: _325.QueryBatchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryBatchRequest;
                fromPartial(object: Partial<_325.QueryBatchRequest>): _325.QueryBatchRequest;
                fromAmino(object: _325.QueryBatchRequestAmino): _325.QueryBatchRequest;
                toAmino(message: _325.QueryBatchRequest): _325.QueryBatchRequestAmino;
                fromAminoMsg(object: _325.QueryBatchRequestAminoMsg): _325.QueryBatchRequest;
                fromProtoMsg(message: _325.QueryBatchRequestProtoMsg): _325.QueryBatchRequest;
                toProto(message: _325.QueryBatchRequest): Uint8Array;
                toProtoMsg(message: _325.QueryBatchRequest): _325.QueryBatchRequestProtoMsg;
            };
            QueryBatchResponse: {
                typeUrl: string;
                encode(message: _325.QueryBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryBatchResponse;
                fromPartial(object: Partial<_325.QueryBatchResponse>): _325.QueryBatchResponse;
                fromAmino(object: _325.QueryBatchResponseAmino): _325.QueryBatchResponse;
                toAmino(message: _325.QueryBatchResponse): _325.QueryBatchResponseAmino;
                fromAminoMsg(object: _325.QueryBatchResponseAminoMsg): _325.QueryBatchResponse;
                fromProtoMsg(message: _325.QueryBatchResponseProtoMsg): _325.QueryBatchResponse;
                toProto(message: _325.QueryBatchResponse): Uint8Array;
                toProtoMsg(message: _325.QueryBatchResponse): _325.QueryBatchResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _325.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryBalanceRequest;
                fromPartial(object: Partial<_325.QueryBalanceRequest>): _325.QueryBalanceRequest;
                fromAmino(object: _325.QueryBalanceRequestAmino): _325.QueryBalanceRequest;
                toAmino(message: _325.QueryBalanceRequest): _325.QueryBalanceRequestAmino;
                fromAminoMsg(object: _325.QueryBalanceRequestAminoMsg): _325.QueryBalanceRequest;
                fromProtoMsg(message: _325.QueryBalanceRequestProtoMsg): _325.QueryBalanceRequest;
                toProto(message: _325.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _325.QueryBalanceRequest): _325.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _325.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryBalanceResponse;
                fromPartial(object: Partial<_325.QueryBalanceResponse>): _325.QueryBalanceResponse;
                fromAmino(object: _325.QueryBalanceResponseAmino): _325.QueryBalanceResponse;
                toAmino(message: _325.QueryBalanceResponse): _325.QueryBalanceResponseAmino;
                fromAminoMsg(object: _325.QueryBalanceResponseAminoMsg): _325.QueryBalanceResponse;
                fromProtoMsg(message: _325.QueryBalanceResponseProtoMsg): _325.QueryBalanceResponse;
                toProto(message: _325.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _325.QueryBalanceResponse): _325.QueryBalanceResponseProtoMsg;
            };
            QueryBalancesRequest: {
                typeUrl: string;
                encode(message: _325.QueryBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryBalancesRequest;
                fromPartial(object: Partial<_325.QueryBalancesRequest>): _325.QueryBalancesRequest;
                fromAmino(object: _325.QueryBalancesRequestAmino): _325.QueryBalancesRequest;
                toAmino(message: _325.QueryBalancesRequest): _325.QueryBalancesRequestAmino;
                fromAminoMsg(object: _325.QueryBalancesRequestAminoMsg): _325.QueryBalancesRequest;
                fromProtoMsg(message: _325.QueryBalancesRequestProtoMsg): _325.QueryBalancesRequest;
                toProto(message: _325.QueryBalancesRequest): Uint8Array;
                toProtoMsg(message: _325.QueryBalancesRequest): _325.QueryBalancesRequestProtoMsg;
            };
            QueryBalancesResponse: {
                typeUrl: string;
                encode(message: _325.QueryBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryBalancesResponse;
                fromPartial(object: Partial<_325.QueryBalancesResponse>): _325.QueryBalancesResponse;
                fromAmino(object: _325.QueryBalancesResponseAmino): _325.QueryBalancesResponse;
                toAmino(message: _325.QueryBalancesResponse): _325.QueryBalancesResponseAmino;
                fromAminoMsg(object: _325.QueryBalancesResponseAminoMsg): _325.QueryBalancesResponse;
                fromProtoMsg(message: _325.QueryBalancesResponseProtoMsg): _325.QueryBalancesResponse;
                toProto(message: _325.QueryBalancesResponse): Uint8Array;
                toProtoMsg(message: _325.QueryBalancesResponse): _325.QueryBalancesResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _325.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QuerySupplyRequest;
                fromPartial(object: Partial<_325.QuerySupplyRequest>): _325.QuerySupplyRequest;
                fromAmino(object: _325.QuerySupplyRequestAmino): _325.QuerySupplyRequest;
                toAmino(message: _325.QuerySupplyRequest): _325.QuerySupplyRequestAmino;
                fromAminoMsg(object: _325.QuerySupplyRequestAminoMsg): _325.QuerySupplyRequest;
                fromProtoMsg(message: _325.QuerySupplyRequestProtoMsg): _325.QuerySupplyRequest;
                toProto(message: _325.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _325.QuerySupplyRequest): _325.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _325.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QuerySupplyResponse;
                fromPartial(object: Partial<_325.QuerySupplyResponse>): _325.QuerySupplyResponse;
                fromAmino(object: _325.QuerySupplyResponseAmino): _325.QuerySupplyResponse;
                toAmino(message: _325.QuerySupplyResponse): _325.QuerySupplyResponseAmino;
                fromAminoMsg(object: _325.QuerySupplyResponseAminoMsg): _325.QuerySupplyResponse;
                fromProtoMsg(message: _325.QuerySupplyResponseProtoMsg): _325.QuerySupplyResponse;
                toProto(message: _325.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _325.QuerySupplyResponse): _325.QuerySupplyResponseProtoMsg;
            };
            QueryCreditTypesRequest: {
                typeUrl: string;
                encode(_: _325.QueryCreditTypesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryCreditTypesRequest;
                fromPartial(_: Partial<_325.QueryCreditTypesRequest>): _325.QueryCreditTypesRequest;
                fromAmino(_: _325.QueryCreditTypesRequestAmino): _325.QueryCreditTypesRequest;
                toAmino(_: _325.QueryCreditTypesRequest): _325.QueryCreditTypesRequestAmino;
                fromAminoMsg(object: _325.QueryCreditTypesRequestAminoMsg): _325.QueryCreditTypesRequest;
                fromProtoMsg(message: _325.QueryCreditTypesRequestProtoMsg): _325.QueryCreditTypesRequest;
                toProto(message: _325.QueryCreditTypesRequest): Uint8Array;
                toProtoMsg(message: _325.QueryCreditTypesRequest): _325.QueryCreditTypesRequestProtoMsg;
            };
            QueryCreditTypesResponse: {
                typeUrl: string;
                encode(message: _325.QueryCreditTypesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryCreditTypesResponse;
                fromPartial(object: Partial<_325.QueryCreditTypesResponse>): _325.QueryCreditTypesResponse;
                fromAmino(object: _325.QueryCreditTypesResponseAmino): _325.QueryCreditTypesResponse;
                toAmino(message: _325.QueryCreditTypesResponse): _325.QueryCreditTypesResponseAmino;
                fromAminoMsg(object: _325.QueryCreditTypesResponseAminoMsg): _325.QueryCreditTypesResponse;
                fromProtoMsg(message: _325.QueryCreditTypesResponseProtoMsg): _325.QueryCreditTypesResponse;
                toProto(message: _325.QueryCreditTypesResponse): Uint8Array;
                toProtoMsg(message: _325.QueryCreditTypesResponse): _325.QueryCreditTypesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _325.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryParamsRequest;
                fromPartial(_: Partial<_325.QueryParamsRequest>): _325.QueryParamsRequest;
                fromAmino(_: _325.QueryParamsRequestAmino): _325.QueryParamsRequest;
                toAmino(_: _325.QueryParamsRequest): _325.QueryParamsRequestAmino;
                fromAminoMsg(object: _325.QueryParamsRequestAminoMsg): _325.QueryParamsRequest;
                fromProtoMsg(message: _325.QueryParamsRequestProtoMsg): _325.QueryParamsRequest;
                toProto(message: _325.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _325.QueryParamsRequest): _325.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _325.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.QueryParamsResponse;
                fromPartial(object: Partial<_325.QueryParamsResponse>): _325.QueryParamsResponse;
                fromAmino(object: _325.QueryParamsResponseAmino): _325.QueryParamsResponse;
                toAmino(message: _325.QueryParamsResponse): _325.QueryParamsResponseAmino;
                fromAminoMsg(object: _325.QueryParamsResponseAminoMsg): _325.QueryParamsResponse;
                fromProtoMsg(message: _325.QueryParamsResponseProtoMsg): _325.QueryParamsResponse;
                toProto(message: _325.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _325.QueryParamsResponse): _325.QueryParamsResponseProtoMsg;
            };
            ClassInfo: {
                typeUrl: string;
                encode(message: _325.ClassInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.ClassInfo;
                fromPartial(object: Partial<_325.ClassInfo>): _325.ClassInfo;
                fromAmino(object: _325.ClassInfoAmino): _325.ClassInfo;
                toAmino(message: _325.ClassInfo): _325.ClassInfoAmino;
                fromAminoMsg(object: _325.ClassInfoAminoMsg): _325.ClassInfo;
                fromProtoMsg(message: _325.ClassInfoProtoMsg): _325.ClassInfo;
                toProto(message: _325.ClassInfo): Uint8Array;
                toProtoMsg(message: _325.ClassInfo): _325.ClassInfoProtoMsg;
            };
            ProjectInfo: {
                typeUrl: string;
                encode(message: _325.ProjectInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.ProjectInfo;
                fromPartial(object: Partial<_325.ProjectInfo>): _325.ProjectInfo;
                fromAmino(object: _325.ProjectInfoAmino): _325.ProjectInfo;
                toAmino(message: _325.ProjectInfo): _325.ProjectInfoAmino;
                fromAminoMsg(object: _325.ProjectInfoAminoMsg): _325.ProjectInfo;
                fromProtoMsg(message: _325.ProjectInfoProtoMsg): _325.ProjectInfo;
                toProto(message: _325.ProjectInfo): Uint8Array;
                toProtoMsg(message: _325.ProjectInfo): _325.ProjectInfoProtoMsg;
            };
            BatchInfo: {
                typeUrl: string;
                encode(message: _325.BatchInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.BatchInfo;
                fromPartial(object: Partial<_325.BatchInfo>): _325.BatchInfo;
                fromAmino(object: _325.BatchInfoAmino): _325.BatchInfo;
                toAmino(message: _325.BatchInfo): _325.BatchInfoAmino;
                fromAminoMsg(object: _325.BatchInfoAminoMsg): _325.BatchInfo;
                fromProtoMsg(message: _325.BatchInfoProtoMsg): _325.BatchInfo;
                toProto(message: _325.BatchInfo): Uint8Array;
                toProtoMsg(message: _325.BatchInfo): _325.BatchInfoProtoMsg;
            };
            BatchBalanceInfo: {
                typeUrl: string;
                encode(message: _325.BatchBalanceInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _325.BatchBalanceInfo;
                fromPartial(object: Partial<_325.BatchBalanceInfo>): _325.BatchBalanceInfo;
                fromAmino(object: _325.BatchBalanceInfoAmino): _325.BatchBalanceInfo;
                toAmino(message: _325.BatchBalanceInfo): _325.BatchBalanceInfoAmino;
                fromAminoMsg(object: _325.BatchBalanceInfoAminoMsg): _325.BatchBalanceInfo;
                fromProtoMsg(message: _325.BatchBalanceInfoProtoMsg): _325.BatchBalanceInfo;
                toProto(message: _325.BatchBalanceInfo): Uint8Array;
                toProtoMsg(message: _325.BatchBalanceInfo): _325.BatchBalanceInfoProtoMsg;
            };
            EventCreateClass: {
                typeUrl: string;
                encode(message: _324.EventCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventCreateClass;
                fromPartial(object: Partial<_324.EventCreateClass>): _324.EventCreateClass;
                fromAmino(object: _324.EventCreateClassAmino): _324.EventCreateClass;
                toAmino(message: _324.EventCreateClass): _324.EventCreateClassAmino;
                fromAminoMsg(object: _324.EventCreateClassAminoMsg): _324.EventCreateClass;
                fromProtoMsg(message: _324.EventCreateClassProtoMsg): _324.EventCreateClass;
                toProto(message: _324.EventCreateClass): Uint8Array;
                toProtoMsg(message: _324.EventCreateClass): _324.EventCreateClassProtoMsg;
            };
            EventCreateProject: {
                typeUrl: string;
                encode(message: _324.EventCreateProject, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventCreateProject;
                fromPartial(object: Partial<_324.EventCreateProject>): _324.EventCreateProject;
                fromAmino(object: _324.EventCreateProjectAmino): _324.EventCreateProject;
                toAmino(message: _324.EventCreateProject): _324.EventCreateProjectAmino;
                fromAminoMsg(object: _324.EventCreateProjectAminoMsg): _324.EventCreateProject;
                fromProtoMsg(message: _324.EventCreateProjectProtoMsg): _324.EventCreateProject;
                toProto(message: _324.EventCreateProject): Uint8Array;
                toProtoMsg(message: _324.EventCreateProject): _324.EventCreateProjectProtoMsg;
            };
            EventCreateBatch: {
                typeUrl: string;
                encode(message: _324.EventCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventCreateBatch;
                fromPartial(object: Partial<_324.EventCreateBatch>): _324.EventCreateBatch;
                fromAmino(object: _324.EventCreateBatchAmino): _324.EventCreateBatch;
                toAmino(message: _324.EventCreateBatch): _324.EventCreateBatchAmino;
                fromAminoMsg(object: _324.EventCreateBatchAminoMsg): _324.EventCreateBatch;
                fromProtoMsg(message: _324.EventCreateBatchProtoMsg): _324.EventCreateBatch;
                toProto(message: _324.EventCreateBatch): Uint8Array;
                toProtoMsg(message: _324.EventCreateBatch): _324.EventCreateBatchProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _324.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventMint;
                fromPartial(object: Partial<_324.EventMint>): _324.EventMint;
                fromAmino(object: _324.EventMintAmino): _324.EventMint;
                toAmino(message: _324.EventMint): _324.EventMintAmino;
                fromAminoMsg(object: _324.EventMintAminoMsg): _324.EventMint;
                fromProtoMsg(message: _324.EventMintProtoMsg): _324.EventMint;
                toProto(message: _324.EventMint): Uint8Array;
                toProtoMsg(message: _324.EventMint): _324.EventMintProtoMsg;
            };
            EventTransfer: {
                typeUrl: string;
                encode(message: _324.EventTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventTransfer;
                fromPartial(object: Partial<_324.EventTransfer>): _324.EventTransfer;
                fromAmino(object: _324.EventTransferAmino): _324.EventTransfer;
                toAmino(message: _324.EventTransfer): _324.EventTransferAmino;
                fromAminoMsg(object: _324.EventTransferAminoMsg): _324.EventTransfer;
                fromProtoMsg(message: _324.EventTransferProtoMsg): _324.EventTransfer;
                toProto(message: _324.EventTransfer): Uint8Array;
                toProtoMsg(message: _324.EventTransfer): _324.EventTransferProtoMsg;
            };
            EventRetire: {
                typeUrl: string;
                encode(message: _324.EventRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventRetire;
                fromPartial(object: Partial<_324.EventRetire>): _324.EventRetire;
                fromAmino(object: _324.EventRetireAmino): _324.EventRetire;
                toAmino(message: _324.EventRetire): _324.EventRetireAmino;
                fromAminoMsg(object: _324.EventRetireAminoMsg): _324.EventRetire;
                fromProtoMsg(message: _324.EventRetireProtoMsg): _324.EventRetire;
                toProto(message: _324.EventRetire): Uint8Array;
                toProtoMsg(message: _324.EventRetire): _324.EventRetireProtoMsg;
            };
            EventCancel: {
                typeUrl: string;
                encode(message: _324.EventCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventCancel;
                fromPartial(object: Partial<_324.EventCancel>): _324.EventCancel;
                fromAmino(object: _324.EventCancelAmino): _324.EventCancel;
                toAmino(message: _324.EventCancel): _324.EventCancelAmino;
                fromAminoMsg(object: _324.EventCancelAminoMsg): _324.EventCancel;
                fromProtoMsg(message: _324.EventCancelProtoMsg): _324.EventCancel;
                toProto(message: _324.EventCancel): Uint8Array;
                toProtoMsg(message: _324.EventCancel): _324.EventCancelProtoMsg;
            };
            EventUpdateClassAdmin: {
                typeUrl: string;
                encode(message: _324.EventUpdateClassAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventUpdateClassAdmin;
                fromPartial(object: Partial<_324.EventUpdateClassAdmin>): _324.EventUpdateClassAdmin;
                fromAmino(object: _324.EventUpdateClassAdminAmino): _324.EventUpdateClassAdmin;
                toAmino(message: _324.EventUpdateClassAdmin): _324.EventUpdateClassAdminAmino;
                fromAminoMsg(object: _324.EventUpdateClassAdminAminoMsg): _324.EventUpdateClassAdmin;
                fromProtoMsg(message: _324.EventUpdateClassAdminProtoMsg): _324.EventUpdateClassAdmin;
                toProto(message: _324.EventUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _324.EventUpdateClassAdmin): _324.EventUpdateClassAdminProtoMsg;
            };
            EventUpdateClassIssuers: {
                typeUrl: string;
                encode(message: _324.EventUpdateClassIssuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventUpdateClassIssuers;
                fromPartial(object: Partial<_324.EventUpdateClassIssuers>): _324.EventUpdateClassIssuers;
                fromAmino(object: _324.EventUpdateClassIssuersAmino): _324.EventUpdateClassIssuers;
                toAmino(message: _324.EventUpdateClassIssuers): _324.EventUpdateClassIssuersAmino;
                fromAminoMsg(object: _324.EventUpdateClassIssuersAminoMsg): _324.EventUpdateClassIssuers;
                fromProtoMsg(message: _324.EventUpdateClassIssuersProtoMsg): _324.EventUpdateClassIssuers;
                toProto(message: _324.EventUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _324.EventUpdateClassIssuers): _324.EventUpdateClassIssuersProtoMsg;
            };
            EventUpdateClassMetadata: {
                typeUrl: string;
                encode(message: _324.EventUpdateClassMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventUpdateClassMetadata;
                fromPartial(object: Partial<_324.EventUpdateClassMetadata>): _324.EventUpdateClassMetadata;
                fromAmino(object: _324.EventUpdateClassMetadataAmino): _324.EventUpdateClassMetadata;
                toAmino(message: _324.EventUpdateClassMetadata): _324.EventUpdateClassMetadataAmino;
                fromAminoMsg(object: _324.EventUpdateClassMetadataAminoMsg): _324.EventUpdateClassMetadata;
                fromProtoMsg(message: _324.EventUpdateClassMetadataProtoMsg): _324.EventUpdateClassMetadata;
                toProto(message: _324.EventUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _324.EventUpdateClassMetadata): _324.EventUpdateClassMetadataProtoMsg;
            };
            EventUpdateProjectAdmin: {
                typeUrl: string;
                encode(message: _324.EventUpdateProjectAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventUpdateProjectAdmin;
                fromPartial(object: Partial<_324.EventUpdateProjectAdmin>): _324.EventUpdateProjectAdmin;
                fromAmino(object: _324.EventUpdateProjectAdminAmino): _324.EventUpdateProjectAdmin;
                toAmino(message: _324.EventUpdateProjectAdmin): _324.EventUpdateProjectAdminAmino;
                fromAminoMsg(object: _324.EventUpdateProjectAdminAminoMsg): _324.EventUpdateProjectAdmin;
                fromProtoMsg(message: _324.EventUpdateProjectAdminProtoMsg): _324.EventUpdateProjectAdmin;
                toProto(message: _324.EventUpdateProjectAdmin): Uint8Array;
                toProtoMsg(message: _324.EventUpdateProjectAdmin): _324.EventUpdateProjectAdminProtoMsg;
            };
            EventUpdateProjectMetadata: {
                typeUrl: string;
                encode(message: _324.EventUpdateProjectMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventUpdateProjectMetadata;
                fromPartial(object: Partial<_324.EventUpdateProjectMetadata>): _324.EventUpdateProjectMetadata;
                fromAmino(object: _324.EventUpdateProjectMetadataAmino): _324.EventUpdateProjectMetadata;
                toAmino(message: _324.EventUpdateProjectMetadata): _324.EventUpdateProjectMetadataAmino;
                fromAminoMsg(object: _324.EventUpdateProjectMetadataAminoMsg): _324.EventUpdateProjectMetadata;
                fromProtoMsg(message: _324.EventUpdateProjectMetadataProtoMsg): _324.EventUpdateProjectMetadata;
                toProto(message: _324.EventUpdateProjectMetadata): Uint8Array;
                toProtoMsg(message: _324.EventUpdateProjectMetadata): _324.EventUpdateProjectMetadataProtoMsg;
            };
            EventSealBatch: {
                typeUrl: string;
                encode(message: _324.EventSealBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventSealBatch;
                fromPartial(object: Partial<_324.EventSealBatch>): _324.EventSealBatch;
                fromAmino(object: _324.EventSealBatchAmino): _324.EventSealBatch;
                toAmino(message: _324.EventSealBatch): _324.EventSealBatchAmino;
                fromAminoMsg(object: _324.EventSealBatchAminoMsg): _324.EventSealBatch;
                fromProtoMsg(message: _324.EventSealBatchProtoMsg): _324.EventSealBatch;
                toProto(message: _324.EventSealBatch): Uint8Array;
                toProtoMsg(message: _324.EventSealBatch): _324.EventSealBatchProtoMsg;
            };
            EventAddCreditType: {
                typeUrl: string;
                encode(message: _324.EventAddCreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _324.EventAddCreditType;
                fromPartial(object: Partial<_324.EventAddCreditType>): _324.EventAddCreditType;
                fromAmino(object: _324.EventAddCreditTypeAmino): _324.EventAddCreditType;
                toAmino(message: _324.EventAddCreditType): _324.EventAddCreditTypeAmino;
                fromAminoMsg(object: _324.EventAddCreditTypeAminoMsg): _324.EventAddCreditType;
                fromProtoMsg(message: _324.EventAddCreditTypeProtoMsg): _324.EventAddCreditType;
                toProto(message: _324.EventAddCreditType): Uint8Array;
                toProtoMsg(message: _324.EventAddCreditType): _324.EventAddCreditTypeProtoMsg;
            };
        };
        const v1alpha1: {
            MsgClientImpl: typeof _580.MsgClientImpl;
            QueryClientImpl: typeof _573.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                classes(request?: _331.QueryClassesRequest): Promise<_331.QueryClassesResponse>;
                classInfo(request: _331.QueryClassInfoRequest): Promise<_331.QueryClassInfoResponse>;
                batches(request: _331.QueryBatchesRequest): Promise<_331.QueryBatchesResponse>;
                batchInfo(request: _331.QueryBatchInfoRequest): Promise<_331.QueryBatchInfoResponse>;
                balance(request: _331.QueryBalanceRequest): Promise<_331.QueryBalanceResponse>;
                supply(request: _331.QuerySupplyRequest): Promise<_331.QuerySupplyResponse>;
                creditTypes(request?: _331.QueryCreditTypesRequest): Promise<_331.QueryCreditTypesResponse>;
                params(request?: _331.QueryParamsRequest): Promise<_331.QueryParamsResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClass(value: _332.MsgCreateClass): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBatch(value: _332.MsgCreateBatch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    send(value: _332.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    retire(value: _332.MsgRetire): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancel(value: _332.MsgCancel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassAdmin(value: _332.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassIssuers(value: _332.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateClassMetadata(value: _332.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClass(value: _332.MsgCreateClass): {
                        typeUrl: string;
                        value: _332.MsgCreateClass;
                    };
                    createBatch(value: _332.MsgCreateBatch): {
                        typeUrl: string;
                        value: _332.MsgCreateBatch;
                    };
                    send(value: _332.MsgSend): {
                        typeUrl: string;
                        value: _332.MsgSend;
                    };
                    retire(value: _332.MsgRetire): {
                        typeUrl: string;
                        value: _332.MsgRetire;
                    };
                    cancel(value: _332.MsgCancel): {
                        typeUrl: string;
                        value: _332.MsgCancel;
                    };
                    updateClassAdmin(value: _332.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _332.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _332.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _332.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _332.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _332.MsgUpdateClassMetadata;
                    };
                };
                fromPartial: {
                    createClass(value: _332.MsgCreateClass): {
                        typeUrl: string;
                        value: _332.MsgCreateClass;
                    };
                    createBatch(value: _332.MsgCreateBatch): {
                        typeUrl: string;
                        value: _332.MsgCreateBatch;
                    };
                    send(value: _332.MsgSend): {
                        typeUrl: string;
                        value: _332.MsgSend;
                    };
                    retire(value: _332.MsgRetire): {
                        typeUrl: string;
                        value: _332.MsgRetire;
                    };
                    cancel(value: _332.MsgCancel): {
                        typeUrl: string;
                        value: _332.MsgCancel;
                    };
                    updateClassAdmin(value: _332.MsgUpdateClassAdmin): {
                        typeUrl: string;
                        value: _332.MsgUpdateClassAdmin;
                    };
                    updateClassIssuers(value: _332.MsgUpdateClassIssuers): {
                        typeUrl: string;
                        value: _332.MsgUpdateClassIssuers;
                    };
                    updateClassMetadata(value: _332.MsgUpdateClassMetadata): {
                        typeUrl: string;
                        value: _332.MsgUpdateClassMetadata;
                    };
                };
            };
            AminoConverter: {
                "/regen.ecocredit.v1alpha1.MsgCreateClass": {
                    aminoType: string;
                    toAmino: (message: _332.MsgCreateClass) => _332.MsgCreateClassAmino;
                    fromAmino: (object: _332.MsgCreateClassAmino) => _332.MsgCreateClass;
                };
                "/regen.ecocredit.v1alpha1.MsgCreateBatch": {
                    aminoType: string;
                    toAmino: (message: _332.MsgCreateBatch) => _332.MsgCreateBatchAmino;
                    fromAmino: (object: _332.MsgCreateBatchAmino) => _332.MsgCreateBatch;
                };
                "/regen.ecocredit.v1alpha1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _332.MsgSend) => _332.MsgSendAmino;
                    fromAmino: (object: _332.MsgSendAmino) => _332.MsgSend;
                };
                "/regen.ecocredit.v1alpha1.MsgRetire": {
                    aminoType: string;
                    toAmino: (message: _332.MsgRetire) => _332.MsgRetireAmino;
                    fromAmino: (object: _332.MsgRetireAmino) => _332.MsgRetire;
                };
                "/regen.ecocredit.v1alpha1.MsgCancel": {
                    aminoType: string;
                    toAmino: (message: _332.MsgCancel) => _332.MsgCancelAmino;
                    fromAmino: (object: _332.MsgCancelAmino) => _332.MsgCancel;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassAdmin": {
                    aminoType: string;
                    toAmino: (message: _332.MsgUpdateClassAdmin) => _332.MsgUpdateClassAdminAmino;
                    fromAmino: (object: _332.MsgUpdateClassAdminAmino) => _332.MsgUpdateClassAdmin;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassIssuers": {
                    aminoType: string;
                    toAmino: (message: _332.MsgUpdateClassIssuers) => _332.MsgUpdateClassIssuersAmino;
                    fromAmino: (object: _332.MsgUpdateClassIssuersAmino) => _332.MsgUpdateClassIssuers;
                };
                "/regen.ecocredit.v1alpha1.MsgUpdateClassMetadata": {
                    aminoType: string;
                    toAmino: (message: _332.MsgUpdateClassMetadata) => _332.MsgUpdateClassMetadataAmino;
                    fromAmino: (object: _332.MsgUpdateClassMetadataAmino) => _332.MsgUpdateClassMetadata;
                };
            };
            ClassInfo: {
                typeUrl: string;
                encode(message: _333.ClassInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _333.ClassInfo;
                fromPartial(object: Partial<_333.ClassInfo>): _333.ClassInfo;
                fromAmino(object: _333.ClassInfoAmino): _333.ClassInfo;
                toAmino(message: _333.ClassInfo): _333.ClassInfoAmino;
                fromAminoMsg(object: _333.ClassInfoAminoMsg): _333.ClassInfo;
                fromProtoMsg(message: _333.ClassInfoProtoMsg): _333.ClassInfo;
                toProto(message: _333.ClassInfo): Uint8Array;
                toProtoMsg(message: _333.ClassInfo): _333.ClassInfoProtoMsg;
            };
            BatchInfo: {
                typeUrl: string;
                encode(message: _333.BatchInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _333.BatchInfo;
                fromPartial(object: Partial<_333.BatchInfo>): _333.BatchInfo;
                fromAmino(object: _333.BatchInfoAmino): _333.BatchInfo;
                toAmino(message: _333.BatchInfo): _333.BatchInfoAmino;
                fromAminoMsg(object: _333.BatchInfoAminoMsg): _333.BatchInfo;
                fromProtoMsg(message: _333.BatchInfoProtoMsg): _333.BatchInfo;
                toProto(message: _333.BatchInfo): Uint8Array;
                toProtoMsg(message: _333.BatchInfo): _333.BatchInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _333.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _333.Params;
                fromPartial(object: Partial<_333.Params>): _333.Params;
                fromAmino(object: _333.ParamsAmino): _333.Params;
                toAmino(message: _333.Params): _333.ParamsAmino;
                fromAminoMsg(object: _333.ParamsAminoMsg): _333.Params;
                fromProtoMsg(message: _333.ParamsProtoMsg): _333.Params;
                toProto(message: _333.Params): Uint8Array;
                toProtoMsg(message: _333.Params): _333.ParamsProtoMsg;
            };
            CreditType: {
                typeUrl: string;
                encode(message: _333.CreditType, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _333.CreditType;
                fromPartial(object: Partial<_333.CreditType>): _333.CreditType;
                fromAmino(object: _333.CreditTypeAmino): _333.CreditType;
                toAmino(message: _333.CreditType): _333.CreditTypeAmino;
                fromAminoMsg(object: _333.CreditTypeAminoMsg): _333.CreditType;
                fromProtoMsg(message: _333.CreditTypeProtoMsg): _333.CreditType;
                toProto(message: _333.CreditType): Uint8Array;
                toProtoMsg(message: _333.CreditType): _333.CreditTypeProtoMsg;
            };
            CreditTypeSeq: {
                typeUrl: string;
                encode(message: _333.CreditTypeSeq, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _333.CreditTypeSeq;
                fromPartial(object: Partial<_333.CreditTypeSeq>): _333.CreditTypeSeq;
                fromAmino(object: _333.CreditTypeSeqAmino): _333.CreditTypeSeq;
                toAmino(message: _333.CreditTypeSeq): _333.CreditTypeSeqAmino;
                fromAminoMsg(object: _333.CreditTypeSeqAminoMsg): _333.CreditTypeSeq;
                fromProtoMsg(message: _333.CreditTypeSeqProtoMsg): _333.CreditTypeSeq;
                toProto(message: _333.CreditTypeSeq): Uint8Array;
                toProtoMsg(message: _333.CreditTypeSeq): _333.CreditTypeSeqProtoMsg;
            };
            MsgCreateClass: {
                typeUrl: string;
                encode(message: _332.MsgCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgCreateClass;
                fromPartial(object: Partial<_332.MsgCreateClass>): _332.MsgCreateClass;
                fromAmino(object: _332.MsgCreateClassAmino): _332.MsgCreateClass;
                toAmino(message: _332.MsgCreateClass): _332.MsgCreateClassAmino;
                fromAminoMsg(object: _332.MsgCreateClassAminoMsg): _332.MsgCreateClass;
                fromProtoMsg(message: _332.MsgCreateClassProtoMsg): _332.MsgCreateClass;
                toProto(message: _332.MsgCreateClass): Uint8Array;
                toProtoMsg(message: _332.MsgCreateClass): _332.MsgCreateClassProtoMsg;
            };
            MsgCreateClassResponse: {
                typeUrl: string;
                encode(message: _332.MsgCreateClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgCreateClassResponse;
                fromPartial(object: Partial<_332.MsgCreateClassResponse>): _332.MsgCreateClassResponse;
                fromAmino(object: _332.MsgCreateClassResponseAmino): _332.MsgCreateClassResponse;
                toAmino(message: _332.MsgCreateClassResponse): _332.MsgCreateClassResponseAmino;
                fromAminoMsg(object: _332.MsgCreateClassResponseAminoMsg): _332.MsgCreateClassResponse;
                fromProtoMsg(message: _332.MsgCreateClassResponseProtoMsg): _332.MsgCreateClassResponse;
                toProto(message: _332.MsgCreateClassResponse): Uint8Array;
                toProtoMsg(message: _332.MsgCreateClassResponse): _332.MsgCreateClassResponseProtoMsg;
            };
            MsgCreateBatch: {
                typeUrl: string;
                encode(message: _332.MsgCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgCreateBatch;
                fromPartial(object: Partial<_332.MsgCreateBatch>): _332.MsgCreateBatch;
                fromAmino(object: _332.MsgCreateBatchAmino): _332.MsgCreateBatch;
                toAmino(message: _332.MsgCreateBatch): _332.MsgCreateBatchAmino;
                fromAminoMsg(object: _332.MsgCreateBatchAminoMsg): _332.MsgCreateBatch;
                fromProtoMsg(message: _332.MsgCreateBatchProtoMsg): _332.MsgCreateBatch;
                toProto(message: _332.MsgCreateBatch): Uint8Array;
                toProtoMsg(message: _332.MsgCreateBatch): _332.MsgCreateBatchProtoMsg;
            };
            MsgCreateBatch_BatchIssuance: {
                typeUrl: string;
                encode(message: _332.MsgCreateBatch_BatchIssuance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgCreateBatch_BatchIssuance;
                fromPartial(object: Partial<_332.MsgCreateBatch_BatchIssuance>): _332.MsgCreateBatch_BatchIssuance;
                fromAmino(object: _332.MsgCreateBatch_BatchIssuanceAmino): _332.MsgCreateBatch_BatchIssuance;
                toAmino(message: _332.MsgCreateBatch_BatchIssuance): _332.MsgCreateBatch_BatchIssuanceAmino;
                fromAminoMsg(object: _332.MsgCreateBatch_BatchIssuanceAminoMsg): _332.MsgCreateBatch_BatchIssuance;
                fromProtoMsg(message: _332.MsgCreateBatch_BatchIssuanceProtoMsg): _332.MsgCreateBatch_BatchIssuance;
                toProto(message: _332.MsgCreateBatch_BatchIssuance): Uint8Array;
                toProtoMsg(message: _332.MsgCreateBatch_BatchIssuance): _332.MsgCreateBatch_BatchIssuanceProtoMsg;
            };
            MsgCreateBatchResponse: {
                typeUrl: string;
                encode(message: _332.MsgCreateBatchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgCreateBatchResponse;
                fromPartial(object: Partial<_332.MsgCreateBatchResponse>): _332.MsgCreateBatchResponse;
                fromAmino(object: _332.MsgCreateBatchResponseAmino): _332.MsgCreateBatchResponse;
                toAmino(message: _332.MsgCreateBatchResponse): _332.MsgCreateBatchResponseAmino;
                fromAminoMsg(object: _332.MsgCreateBatchResponseAminoMsg): _332.MsgCreateBatchResponse;
                fromProtoMsg(message: _332.MsgCreateBatchResponseProtoMsg): _332.MsgCreateBatchResponse;
                toProto(message: _332.MsgCreateBatchResponse): Uint8Array;
                toProtoMsg(message: _332.MsgCreateBatchResponse): _332.MsgCreateBatchResponseProtoMsg;
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _332.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgSend;
                fromPartial(object: Partial<_332.MsgSend>): _332.MsgSend;
                fromAmino(object: _332.MsgSendAmino): _332.MsgSend;
                toAmino(message: _332.MsgSend): _332.MsgSendAmino;
                fromAminoMsg(object: _332.MsgSendAminoMsg): _332.MsgSend;
                fromProtoMsg(message: _332.MsgSendProtoMsg): _332.MsgSend;
                toProto(message: _332.MsgSend): Uint8Array;
                toProtoMsg(message: _332.MsgSend): _332.MsgSendProtoMsg;
            };
            MsgSend_SendCredits: {
                typeUrl: string;
                encode(message: _332.MsgSend_SendCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgSend_SendCredits;
                fromPartial(object: Partial<_332.MsgSend_SendCredits>): _332.MsgSend_SendCredits;
                fromAmino(object: _332.MsgSend_SendCreditsAmino): _332.MsgSend_SendCredits;
                toAmino(message: _332.MsgSend_SendCredits): _332.MsgSend_SendCreditsAmino;
                fromAminoMsg(object: _332.MsgSend_SendCreditsAminoMsg): _332.MsgSend_SendCredits;
                fromProtoMsg(message: _332.MsgSend_SendCreditsProtoMsg): _332.MsgSend_SendCredits;
                toProto(message: _332.MsgSend_SendCredits): Uint8Array;
                toProtoMsg(message: _332.MsgSend_SendCredits): _332.MsgSend_SendCreditsProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _332.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgSendResponse;
                fromPartial(_: Partial<_332.MsgSendResponse>): _332.MsgSendResponse;
                fromAmino(_: _332.MsgSendResponseAmino): _332.MsgSendResponse;
                toAmino(_: _332.MsgSendResponse): _332.MsgSendResponseAmino;
                fromAminoMsg(object: _332.MsgSendResponseAminoMsg): _332.MsgSendResponse;
                fromProtoMsg(message: _332.MsgSendResponseProtoMsg): _332.MsgSendResponse;
                toProto(message: _332.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _332.MsgSendResponse): _332.MsgSendResponseProtoMsg;
            };
            MsgRetire: {
                typeUrl: string;
                encode(message: _332.MsgRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgRetire;
                fromPartial(object: Partial<_332.MsgRetire>): _332.MsgRetire;
                fromAmino(object: _332.MsgRetireAmino): _332.MsgRetire;
                toAmino(message: _332.MsgRetire): _332.MsgRetireAmino;
                fromAminoMsg(object: _332.MsgRetireAminoMsg): _332.MsgRetire;
                fromProtoMsg(message: _332.MsgRetireProtoMsg): _332.MsgRetire;
                toProto(message: _332.MsgRetire): Uint8Array;
                toProtoMsg(message: _332.MsgRetire): _332.MsgRetireProtoMsg;
            };
            MsgRetire_RetireCredits: {
                typeUrl: string;
                encode(message: _332.MsgRetire_RetireCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgRetire_RetireCredits;
                fromPartial(object: Partial<_332.MsgRetire_RetireCredits>): _332.MsgRetire_RetireCredits;
                fromAmino(object: _332.MsgRetire_RetireCreditsAmino): _332.MsgRetire_RetireCredits;
                toAmino(message: _332.MsgRetire_RetireCredits): _332.MsgRetire_RetireCreditsAmino;
                fromAminoMsg(object: _332.MsgRetire_RetireCreditsAminoMsg): _332.MsgRetire_RetireCredits;
                fromProtoMsg(message: _332.MsgRetire_RetireCreditsProtoMsg): _332.MsgRetire_RetireCredits;
                toProto(message: _332.MsgRetire_RetireCredits): Uint8Array;
                toProtoMsg(message: _332.MsgRetire_RetireCredits): _332.MsgRetire_RetireCreditsProtoMsg;
            };
            MsgRetireResponse: {
                typeUrl: string;
                encode(_: _332.MsgRetireResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgRetireResponse;
                fromPartial(_: Partial<_332.MsgRetireResponse>): _332.MsgRetireResponse;
                fromAmino(_: _332.MsgRetireResponseAmino): _332.MsgRetireResponse;
                toAmino(_: _332.MsgRetireResponse): _332.MsgRetireResponseAmino;
                fromAminoMsg(object: _332.MsgRetireResponseAminoMsg): _332.MsgRetireResponse;
                fromProtoMsg(message: _332.MsgRetireResponseProtoMsg): _332.MsgRetireResponse;
                toProto(message: _332.MsgRetireResponse): Uint8Array;
                toProtoMsg(message: _332.MsgRetireResponse): _332.MsgRetireResponseProtoMsg;
            };
            MsgCancel: {
                typeUrl: string;
                encode(message: _332.MsgCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgCancel;
                fromPartial(object: Partial<_332.MsgCancel>): _332.MsgCancel;
                fromAmino(object: _332.MsgCancelAmino): _332.MsgCancel;
                toAmino(message: _332.MsgCancel): _332.MsgCancelAmino;
                fromAminoMsg(object: _332.MsgCancelAminoMsg): _332.MsgCancel;
                fromProtoMsg(message: _332.MsgCancelProtoMsg): _332.MsgCancel;
                toProto(message: _332.MsgCancel): Uint8Array;
                toProtoMsg(message: _332.MsgCancel): _332.MsgCancelProtoMsg;
            };
            MsgCancel_CancelCredits: {
                typeUrl: string;
                encode(message: _332.MsgCancel_CancelCredits, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgCancel_CancelCredits;
                fromPartial(object: Partial<_332.MsgCancel_CancelCredits>): _332.MsgCancel_CancelCredits;
                fromAmino(object: _332.MsgCancel_CancelCreditsAmino): _332.MsgCancel_CancelCredits;
                toAmino(message: _332.MsgCancel_CancelCredits): _332.MsgCancel_CancelCreditsAmino;
                fromAminoMsg(object: _332.MsgCancel_CancelCreditsAminoMsg): _332.MsgCancel_CancelCredits;
                fromProtoMsg(message: _332.MsgCancel_CancelCreditsProtoMsg): _332.MsgCancel_CancelCredits;
                toProto(message: _332.MsgCancel_CancelCredits): Uint8Array;
                toProtoMsg(message: _332.MsgCancel_CancelCredits): _332.MsgCancel_CancelCreditsProtoMsg;
            };
            MsgCancelResponse: {
                typeUrl: string;
                encode(_: _332.MsgCancelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgCancelResponse;
                fromPartial(_: Partial<_332.MsgCancelResponse>): _332.MsgCancelResponse;
                fromAmino(_: _332.MsgCancelResponseAmino): _332.MsgCancelResponse;
                toAmino(_: _332.MsgCancelResponse): _332.MsgCancelResponseAmino;
                fromAminoMsg(object: _332.MsgCancelResponseAminoMsg): _332.MsgCancelResponse;
                fromProtoMsg(message: _332.MsgCancelResponseProtoMsg): _332.MsgCancelResponse;
                toProto(message: _332.MsgCancelResponse): Uint8Array;
                toProtoMsg(message: _332.MsgCancelResponse): _332.MsgCancelResponseProtoMsg;
            };
            MsgUpdateClassAdmin: {
                typeUrl: string;
                encode(message: _332.MsgUpdateClassAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgUpdateClassAdmin;
                fromPartial(object: Partial<_332.MsgUpdateClassAdmin>): _332.MsgUpdateClassAdmin;
                fromAmino(object: _332.MsgUpdateClassAdminAmino): _332.MsgUpdateClassAdmin;
                toAmino(message: _332.MsgUpdateClassAdmin): _332.MsgUpdateClassAdminAmino;
                fromAminoMsg(object: _332.MsgUpdateClassAdminAminoMsg): _332.MsgUpdateClassAdmin;
                fromProtoMsg(message: _332.MsgUpdateClassAdminProtoMsg): _332.MsgUpdateClassAdmin;
                toProto(message: _332.MsgUpdateClassAdmin): Uint8Array;
                toProtoMsg(message: _332.MsgUpdateClassAdmin): _332.MsgUpdateClassAdminProtoMsg;
            };
            MsgUpdateClassAdminResponse: {
                typeUrl: string;
                encode(_: _332.MsgUpdateClassAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgUpdateClassAdminResponse;
                fromPartial(_: Partial<_332.MsgUpdateClassAdminResponse>): _332.MsgUpdateClassAdminResponse;
                fromAmino(_: _332.MsgUpdateClassAdminResponseAmino): _332.MsgUpdateClassAdminResponse;
                toAmino(_: _332.MsgUpdateClassAdminResponse): _332.MsgUpdateClassAdminResponseAmino;
                fromAminoMsg(object: _332.MsgUpdateClassAdminResponseAminoMsg): _332.MsgUpdateClassAdminResponse;
                fromProtoMsg(message: _332.MsgUpdateClassAdminResponseProtoMsg): _332.MsgUpdateClassAdminResponse;
                toProto(message: _332.MsgUpdateClassAdminResponse): Uint8Array;
                toProtoMsg(message: _332.MsgUpdateClassAdminResponse): _332.MsgUpdateClassAdminResponseProtoMsg;
            };
            MsgUpdateClassIssuers: {
                typeUrl: string;
                encode(message: _332.MsgUpdateClassIssuers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgUpdateClassIssuers;
                fromPartial(object: Partial<_332.MsgUpdateClassIssuers>): _332.MsgUpdateClassIssuers;
                fromAmino(object: _332.MsgUpdateClassIssuersAmino): _332.MsgUpdateClassIssuers;
                toAmino(message: _332.MsgUpdateClassIssuers): _332.MsgUpdateClassIssuersAmino;
                fromAminoMsg(object: _332.MsgUpdateClassIssuersAminoMsg): _332.MsgUpdateClassIssuers;
                fromProtoMsg(message: _332.MsgUpdateClassIssuersProtoMsg): _332.MsgUpdateClassIssuers;
                toProto(message: _332.MsgUpdateClassIssuers): Uint8Array;
                toProtoMsg(message: _332.MsgUpdateClassIssuers): _332.MsgUpdateClassIssuersProtoMsg;
            };
            MsgUpdateClassIssuersResponse: {
                typeUrl: string;
                encode(_: _332.MsgUpdateClassIssuersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgUpdateClassIssuersResponse;
                fromPartial(_: Partial<_332.MsgUpdateClassIssuersResponse>): _332.MsgUpdateClassIssuersResponse;
                fromAmino(_: _332.MsgUpdateClassIssuersResponseAmino): _332.MsgUpdateClassIssuersResponse;
                toAmino(_: _332.MsgUpdateClassIssuersResponse): _332.MsgUpdateClassIssuersResponseAmino;
                fromAminoMsg(object: _332.MsgUpdateClassIssuersResponseAminoMsg): _332.MsgUpdateClassIssuersResponse;
                fromProtoMsg(message: _332.MsgUpdateClassIssuersResponseProtoMsg): _332.MsgUpdateClassIssuersResponse;
                toProto(message: _332.MsgUpdateClassIssuersResponse): Uint8Array;
                toProtoMsg(message: _332.MsgUpdateClassIssuersResponse): _332.MsgUpdateClassIssuersResponseProtoMsg;
            };
            MsgUpdateClassMetadata: {
                typeUrl: string;
                encode(message: _332.MsgUpdateClassMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgUpdateClassMetadata;
                fromPartial(object: Partial<_332.MsgUpdateClassMetadata>): _332.MsgUpdateClassMetadata;
                fromAmino(object: _332.MsgUpdateClassMetadataAmino): _332.MsgUpdateClassMetadata;
                toAmino(message: _332.MsgUpdateClassMetadata): _332.MsgUpdateClassMetadataAmino;
                fromAminoMsg(object: _332.MsgUpdateClassMetadataAminoMsg): _332.MsgUpdateClassMetadata;
                fromProtoMsg(message: _332.MsgUpdateClassMetadataProtoMsg): _332.MsgUpdateClassMetadata;
                toProto(message: _332.MsgUpdateClassMetadata): Uint8Array;
                toProtoMsg(message: _332.MsgUpdateClassMetadata): _332.MsgUpdateClassMetadataProtoMsg;
            };
            MsgUpdateClassMetadataResponse: {
                typeUrl: string;
                encode(_: _332.MsgUpdateClassMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _332.MsgUpdateClassMetadataResponse;
                fromPartial(_: Partial<_332.MsgUpdateClassMetadataResponse>): _332.MsgUpdateClassMetadataResponse;
                fromAmino(_: _332.MsgUpdateClassMetadataResponseAmino): _332.MsgUpdateClassMetadataResponse;
                toAmino(_: _332.MsgUpdateClassMetadataResponse): _332.MsgUpdateClassMetadataResponseAmino;
                fromAminoMsg(object: _332.MsgUpdateClassMetadataResponseAminoMsg): _332.MsgUpdateClassMetadataResponse;
                fromProtoMsg(message: _332.MsgUpdateClassMetadataResponseProtoMsg): _332.MsgUpdateClassMetadataResponse;
                toProto(message: _332.MsgUpdateClassMetadataResponse): Uint8Array;
                toProtoMsg(message: _332.MsgUpdateClassMetadataResponse): _332.MsgUpdateClassMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _331.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryParamsRequest;
                fromPartial(_: Partial<_331.QueryParamsRequest>): _331.QueryParamsRequest;
                fromAmino(_: _331.QueryParamsRequestAmino): _331.QueryParamsRequest;
                toAmino(_: _331.QueryParamsRequest): _331.QueryParamsRequestAmino;
                fromAminoMsg(object: _331.QueryParamsRequestAminoMsg): _331.QueryParamsRequest;
                fromProtoMsg(message: _331.QueryParamsRequestProtoMsg): _331.QueryParamsRequest;
                toProto(message: _331.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _331.QueryParamsRequest): _331.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _331.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryParamsResponse;
                fromPartial(object: Partial<_331.QueryParamsResponse>): _331.QueryParamsResponse;
                fromAmino(object: _331.QueryParamsResponseAmino): _331.QueryParamsResponse;
                toAmino(message: _331.QueryParamsResponse): _331.QueryParamsResponseAmino;
                fromAminoMsg(object: _331.QueryParamsResponseAminoMsg): _331.QueryParamsResponse;
                fromProtoMsg(message: _331.QueryParamsResponseProtoMsg): _331.QueryParamsResponse;
                toProto(message: _331.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _331.QueryParamsResponse): _331.QueryParamsResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _331.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryClassesRequest;
                fromPartial(object: Partial<_331.QueryClassesRequest>): _331.QueryClassesRequest;
                fromAmino(object: _331.QueryClassesRequestAmino): _331.QueryClassesRequest;
                toAmino(message: _331.QueryClassesRequest): _331.QueryClassesRequestAmino;
                fromAminoMsg(object: _331.QueryClassesRequestAminoMsg): _331.QueryClassesRequest;
                fromProtoMsg(message: _331.QueryClassesRequestProtoMsg): _331.QueryClassesRequest;
                toProto(message: _331.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _331.QueryClassesRequest): _331.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _331.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryClassesResponse;
                fromPartial(object: Partial<_331.QueryClassesResponse>): _331.QueryClassesResponse;
                fromAmino(object: _331.QueryClassesResponseAmino): _331.QueryClassesResponse;
                toAmino(message: _331.QueryClassesResponse): _331.QueryClassesResponseAmino;
                fromAminoMsg(object: _331.QueryClassesResponseAminoMsg): _331.QueryClassesResponse;
                fromProtoMsg(message: _331.QueryClassesResponseProtoMsg): _331.QueryClassesResponse;
                toProto(message: _331.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _331.QueryClassesResponse): _331.QueryClassesResponseProtoMsg;
            };
            QueryClassInfoRequest: {
                typeUrl: string;
                encode(message: _331.QueryClassInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryClassInfoRequest;
                fromPartial(object: Partial<_331.QueryClassInfoRequest>): _331.QueryClassInfoRequest;
                fromAmino(object: _331.QueryClassInfoRequestAmino): _331.QueryClassInfoRequest;
                toAmino(message: _331.QueryClassInfoRequest): _331.QueryClassInfoRequestAmino;
                fromAminoMsg(object: _331.QueryClassInfoRequestAminoMsg): _331.QueryClassInfoRequest;
                fromProtoMsg(message: _331.QueryClassInfoRequestProtoMsg): _331.QueryClassInfoRequest;
                toProto(message: _331.QueryClassInfoRequest): Uint8Array;
                toProtoMsg(message: _331.QueryClassInfoRequest): _331.QueryClassInfoRequestProtoMsg;
            };
            QueryClassInfoResponse: {
                typeUrl: string;
                encode(message: _331.QueryClassInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryClassInfoResponse;
                fromPartial(object: Partial<_331.QueryClassInfoResponse>): _331.QueryClassInfoResponse;
                fromAmino(object: _331.QueryClassInfoResponseAmino): _331.QueryClassInfoResponse;
                toAmino(message: _331.QueryClassInfoResponse): _331.QueryClassInfoResponseAmino;
                fromAminoMsg(object: _331.QueryClassInfoResponseAminoMsg): _331.QueryClassInfoResponse;
                fromProtoMsg(message: _331.QueryClassInfoResponseProtoMsg): _331.QueryClassInfoResponse;
                toProto(message: _331.QueryClassInfoResponse): Uint8Array;
                toProtoMsg(message: _331.QueryClassInfoResponse): _331.QueryClassInfoResponseProtoMsg;
            };
            QueryBatchesRequest: {
                typeUrl: string;
                encode(message: _331.QueryBatchesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryBatchesRequest;
                fromPartial(object: Partial<_331.QueryBatchesRequest>): _331.QueryBatchesRequest;
                fromAmino(object: _331.QueryBatchesRequestAmino): _331.QueryBatchesRequest;
                toAmino(message: _331.QueryBatchesRequest): _331.QueryBatchesRequestAmino;
                fromAminoMsg(object: _331.QueryBatchesRequestAminoMsg): _331.QueryBatchesRequest;
                fromProtoMsg(message: _331.QueryBatchesRequestProtoMsg): _331.QueryBatchesRequest;
                toProto(message: _331.QueryBatchesRequest): Uint8Array;
                toProtoMsg(message: _331.QueryBatchesRequest): _331.QueryBatchesRequestProtoMsg;
            };
            QueryBatchesResponse: {
                typeUrl: string;
                encode(message: _331.QueryBatchesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryBatchesResponse;
                fromPartial(object: Partial<_331.QueryBatchesResponse>): _331.QueryBatchesResponse;
                fromAmino(object: _331.QueryBatchesResponseAmino): _331.QueryBatchesResponse;
                toAmino(message: _331.QueryBatchesResponse): _331.QueryBatchesResponseAmino;
                fromAminoMsg(object: _331.QueryBatchesResponseAminoMsg): _331.QueryBatchesResponse;
                fromProtoMsg(message: _331.QueryBatchesResponseProtoMsg): _331.QueryBatchesResponse;
                toProto(message: _331.QueryBatchesResponse): Uint8Array;
                toProtoMsg(message: _331.QueryBatchesResponse): _331.QueryBatchesResponseProtoMsg;
            };
            QueryBatchInfoRequest: {
                typeUrl: string;
                encode(message: _331.QueryBatchInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryBatchInfoRequest;
                fromPartial(object: Partial<_331.QueryBatchInfoRequest>): _331.QueryBatchInfoRequest;
                fromAmino(object: _331.QueryBatchInfoRequestAmino): _331.QueryBatchInfoRequest;
                toAmino(message: _331.QueryBatchInfoRequest): _331.QueryBatchInfoRequestAmino;
                fromAminoMsg(object: _331.QueryBatchInfoRequestAminoMsg): _331.QueryBatchInfoRequest;
                fromProtoMsg(message: _331.QueryBatchInfoRequestProtoMsg): _331.QueryBatchInfoRequest;
                toProto(message: _331.QueryBatchInfoRequest): Uint8Array;
                toProtoMsg(message: _331.QueryBatchInfoRequest): _331.QueryBatchInfoRequestProtoMsg;
            };
            QueryBatchInfoResponse: {
                typeUrl: string;
                encode(message: _331.QueryBatchInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryBatchInfoResponse;
                fromPartial(object: Partial<_331.QueryBatchInfoResponse>): _331.QueryBatchInfoResponse;
                fromAmino(object: _331.QueryBatchInfoResponseAmino): _331.QueryBatchInfoResponse;
                toAmino(message: _331.QueryBatchInfoResponse): _331.QueryBatchInfoResponseAmino;
                fromAminoMsg(object: _331.QueryBatchInfoResponseAminoMsg): _331.QueryBatchInfoResponse;
                fromProtoMsg(message: _331.QueryBatchInfoResponseProtoMsg): _331.QueryBatchInfoResponse;
                toProto(message: _331.QueryBatchInfoResponse): Uint8Array;
                toProtoMsg(message: _331.QueryBatchInfoResponse): _331.QueryBatchInfoResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _331.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryBalanceRequest;
                fromPartial(object: Partial<_331.QueryBalanceRequest>): _331.QueryBalanceRequest;
                fromAmino(object: _331.QueryBalanceRequestAmino): _331.QueryBalanceRequest;
                toAmino(message: _331.QueryBalanceRequest): _331.QueryBalanceRequestAmino;
                fromAminoMsg(object: _331.QueryBalanceRequestAminoMsg): _331.QueryBalanceRequest;
                fromProtoMsg(message: _331.QueryBalanceRequestProtoMsg): _331.QueryBalanceRequest;
                toProto(message: _331.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _331.QueryBalanceRequest): _331.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _331.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryBalanceResponse;
                fromPartial(object: Partial<_331.QueryBalanceResponse>): _331.QueryBalanceResponse;
                fromAmino(object: _331.QueryBalanceResponseAmino): _331.QueryBalanceResponse;
                toAmino(message: _331.QueryBalanceResponse): _331.QueryBalanceResponseAmino;
                fromAminoMsg(object: _331.QueryBalanceResponseAminoMsg): _331.QueryBalanceResponse;
                fromProtoMsg(message: _331.QueryBalanceResponseProtoMsg): _331.QueryBalanceResponse;
                toProto(message: _331.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _331.QueryBalanceResponse): _331.QueryBalanceResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _331.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QuerySupplyRequest;
                fromPartial(object: Partial<_331.QuerySupplyRequest>): _331.QuerySupplyRequest;
                fromAmino(object: _331.QuerySupplyRequestAmino): _331.QuerySupplyRequest;
                toAmino(message: _331.QuerySupplyRequest): _331.QuerySupplyRequestAmino;
                fromAminoMsg(object: _331.QuerySupplyRequestAminoMsg): _331.QuerySupplyRequest;
                fromProtoMsg(message: _331.QuerySupplyRequestProtoMsg): _331.QuerySupplyRequest;
                toProto(message: _331.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _331.QuerySupplyRequest): _331.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _331.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QuerySupplyResponse;
                fromPartial(object: Partial<_331.QuerySupplyResponse>): _331.QuerySupplyResponse;
                fromAmino(object: _331.QuerySupplyResponseAmino): _331.QuerySupplyResponse;
                toAmino(message: _331.QuerySupplyResponse): _331.QuerySupplyResponseAmino;
                fromAminoMsg(object: _331.QuerySupplyResponseAminoMsg): _331.QuerySupplyResponse;
                fromProtoMsg(message: _331.QuerySupplyResponseProtoMsg): _331.QuerySupplyResponse;
                toProto(message: _331.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _331.QuerySupplyResponse): _331.QuerySupplyResponseProtoMsg;
            };
            QueryCreditTypesRequest: {
                typeUrl: string;
                encode(_: _331.QueryCreditTypesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryCreditTypesRequest;
                fromPartial(_: Partial<_331.QueryCreditTypesRequest>): _331.QueryCreditTypesRequest;
                fromAmino(_: _331.QueryCreditTypesRequestAmino): _331.QueryCreditTypesRequest;
                toAmino(_: _331.QueryCreditTypesRequest): _331.QueryCreditTypesRequestAmino;
                fromAminoMsg(object: _331.QueryCreditTypesRequestAminoMsg): _331.QueryCreditTypesRequest;
                fromProtoMsg(message: _331.QueryCreditTypesRequestProtoMsg): _331.QueryCreditTypesRequest;
                toProto(message: _331.QueryCreditTypesRequest): Uint8Array;
                toProtoMsg(message: _331.QueryCreditTypesRequest): _331.QueryCreditTypesRequestProtoMsg;
            };
            QueryCreditTypesResponse: {
                typeUrl: string;
                encode(message: _331.QueryCreditTypesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _331.QueryCreditTypesResponse;
                fromPartial(object: Partial<_331.QueryCreditTypesResponse>): _331.QueryCreditTypesResponse;
                fromAmino(object: _331.QueryCreditTypesResponseAmino): _331.QueryCreditTypesResponse;
                toAmino(message: _331.QueryCreditTypesResponse): _331.QueryCreditTypesResponseAmino;
                fromAminoMsg(object: _331.QueryCreditTypesResponseAminoMsg): _331.QueryCreditTypesResponse;
                fromProtoMsg(message: _331.QueryCreditTypesResponseProtoMsg): _331.QueryCreditTypesResponse;
                toProto(message: _331.QueryCreditTypesResponse): Uint8Array;
                toProtoMsg(message: _331.QueryCreditTypesResponse): _331.QueryCreditTypesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _330.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _330.GenesisState;
                fromPartial(object: Partial<_330.GenesisState>): _330.GenesisState;
                fromAmino(object: _330.GenesisStateAmino): _330.GenesisState;
                toAmino(message: _330.GenesisState): _330.GenesisStateAmino;
                fromAminoMsg(object: _330.GenesisStateAminoMsg): _330.GenesisState;
                fromProtoMsg(message: _330.GenesisStateProtoMsg): _330.GenesisState;
                toProto(message: _330.GenesisState): Uint8Array;
                toProtoMsg(message: _330.GenesisState): _330.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _330.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _330.Balance;
                fromPartial(object: Partial<_330.Balance>): _330.Balance;
                fromAmino(object: _330.BalanceAmino): _330.Balance;
                toAmino(message: _330.Balance): _330.BalanceAmino;
                fromAminoMsg(object: _330.BalanceAminoMsg): _330.Balance;
                fromProtoMsg(message: _330.BalanceProtoMsg): _330.Balance;
                toProto(message: _330.Balance): Uint8Array;
                toProtoMsg(message: _330.Balance): _330.BalanceProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _330.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _330.Supply;
                fromPartial(object: Partial<_330.Supply>): _330.Supply;
                fromAmino(object: _330.SupplyAmino): _330.Supply;
                toAmino(message: _330.Supply): _330.SupplyAmino;
                fromAminoMsg(object: _330.SupplyAminoMsg): _330.Supply;
                fromProtoMsg(message: _330.SupplyProtoMsg): _330.Supply;
                toProto(message: _330.Supply): Uint8Array;
                toProtoMsg(message: _330.Supply): _330.SupplyProtoMsg;
            };
            EventCreateClass: {
                typeUrl: string;
                encode(message: _329.EventCreateClass, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _329.EventCreateClass;
                fromPartial(object: Partial<_329.EventCreateClass>): _329.EventCreateClass;
                fromAmino(object: _329.EventCreateClassAmino): _329.EventCreateClass;
                toAmino(message: _329.EventCreateClass): _329.EventCreateClassAmino;
                fromAminoMsg(object: _329.EventCreateClassAminoMsg): _329.EventCreateClass;
                fromProtoMsg(message: _329.EventCreateClassProtoMsg): _329.EventCreateClass;
                toProto(message: _329.EventCreateClass): Uint8Array;
                toProtoMsg(message: _329.EventCreateClass): _329.EventCreateClassProtoMsg;
            };
            EventCreateBatch: {
                typeUrl: string;
                encode(message: _329.EventCreateBatch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _329.EventCreateBatch;
                fromPartial(object: Partial<_329.EventCreateBatch>): _329.EventCreateBatch;
                fromAmino(object: _329.EventCreateBatchAmino): _329.EventCreateBatch;
                toAmino(message: _329.EventCreateBatch): _329.EventCreateBatchAmino;
                fromAminoMsg(object: _329.EventCreateBatchAminoMsg): _329.EventCreateBatch;
                fromProtoMsg(message: _329.EventCreateBatchProtoMsg): _329.EventCreateBatch;
                toProto(message: _329.EventCreateBatch): Uint8Array;
                toProtoMsg(message: _329.EventCreateBatch): _329.EventCreateBatchProtoMsg;
            };
            EventReceive: {
                typeUrl: string;
                encode(message: _329.EventReceive, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _329.EventReceive;
                fromPartial(object: Partial<_329.EventReceive>): _329.EventReceive;
                fromAmino(object: _329.EventReceiveAmino): _329.EventReceive;
                toAmino(message: _329.EventReceive): _329.EventReceiveAmino;
                fromAminoMsg(object: _329.EventReceiveAminoMsg): _329.EventReceive;
                fromProtoMsg(message: _329.EventReceiveProtoMsg): _329.EventReceive;
                toProto(message: _329.EventReceive): Uint8Array;
                toProtoMsg(message: _329.EventReceive): _329.EventReceiveProtoMsg;
            };
            EventRetire: {
                typeUrl: string;
                encode(message: _329.EventRetire, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _329.EventRetire;
                fromPartial(object: Partial<_329.EventRetire>): _329.EventRetire;
                fromAmino(object: _329.EventRetireAmino): _329.EventRetire;
                toAmino(message: _329.EventRetire): _329.EventRetireAmino;
                fromAminoMsg(object: _329.EventRetireAminoMsg): _329.EventRetire;
                fromProtoMsg(message: _329.EventRetireProtoMsg): _329.EventRetire;
                toProto(message: _329.EventRetire): Uint8Array;
                toProtoMsg(message: _329.EventRetire): _329.EventRetireProtoMsg;
            };
            EventCancel: {
                typeUrl: string;
                encode(message: _329.EventCancel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _329.EventCancel;
                fromPartial(object: Partial<_329.EventCancel>): _329.EventCancel;
                fromAmino(object: _329.EventCancelAmino): _329.EventCancel;
                toAmino(message: _329.EventCancel): _329.EventCancelAmino;
                fromAminoMsg(object: _329.EventCancelAminoMsg): _329.EventCancel;
                fromProtoMsg(message: _329.EventCancelProtoMsg): _329.EventCancel;
                toProto(message: _329.EventCancel): Uint8Array;
                toProtoMsg(message: _329.EventCancel): _329.EventCancelProtoMsg;
            };
        };
    }
    namespace group {
        const v1alpha1: {
            MsgClientImpl: typeof _581.MsgClientImpl;
            QueryClientImpl: typeof _574.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _336.QueryGroupInfoRequest): Promise<_336.QueryGroupInfoResponse>;
                groupAccountInfo(request: _336.QueryGroupAccountInfoRequest): Promise<_336.QueryGroupAccountInfoResponse>;
                groupMembers(request: _336.QueryGroupMembersRequest): Promise<_336.QueryGroupMembersResponse>;
                groupsByAdmin(request: _336.QueryGroupsByAdminRequest): Promise<_336.QueryGroupsByAdminResponse>;
                groupAccountsByGroup(request: _336.QueryGroupAccountsByGroupRequest): Promise<_336.QueryGroupAccountsByGroupResponse>;
                groupAccountsByAdmin(request: _336.QueryGroupAccountsByAdminRequest): Promise<_336.QueryGroupAccountsByAdminResponse>;
                proposal(request: _336.QueryProposalRequest): Promise<_336.QueryProposalResponse>;
                proposalsByGroupAccount(request: _336.QueryProposalsByGroupAccountRequest): Promise<_336.QueryProposalsByGroupAccountResponse>;
                voteByProposalVoter(request: _336.QueryVoteByProposalVoterRequest): Promise<_336.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _336.QueryVotesByProposalRequest): Promise<_336.QueryVotesByProposalResponse>;
                votesByVoter(request: _336.QueryVotesByVoterRequest): Promise<_336.QueryVotesByVoterResponse>;
            };
            registry: ReadonlyArray<[string, import("@cosmjs/proto-signing").GeneratedType]>;
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _337.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _337.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _337.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _337.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupAccount(value: _337.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountAdmin(value: _337.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountDecisionPolicy(value: _337.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAccountMetadata(value: _337.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createProposal(value: _337.MsgCreateProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _337.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _337.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _337.MsgCreateGroup): {
                        typeUrl: string;
                        value: _337.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _337.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _337.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _337.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _337.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _337.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _337.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: _337.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: _337.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: _337.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: _337.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: _337.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: _337.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: _337.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: _337.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: _337.MsgCreateProposal): {
                        typeUrl: string;
                        value: _337.MsgCreateProposal;
                    };
                    vote(value: _337.MsgVote): {
                        typeUrl: string;
                        value: _337.MsgVote;
                    };
                    exec(value: _337.MsgExec): {
                        typeUrl: string;
                        value: _337.MsgExec;
                    };
                };
                fromPartial: {
                    createGroup(value: _337.MsgCreateGroup): {
                        typeUrl: string;
                        value: _337.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _337.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _337.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _337.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _337.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _337.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _337.MsgUpdateGroupMetadata;
                    };
                    createGroupAccount(value: _337.MsgCreateGroupAccount): {
                        typeUrl: string;
                        value: _337.MsgCreateGroupAccount;
                    };
                    updateGroupAccountAdmin(value: _337.MsgUpdateGroupAccountAdmin): {
                        typeUrl: string;
                        value: _337.MsgUpdateGroupAccountAdmin;
                    };
                    updateGroupAccountDecisionPolicy(value: _337.MsgUpdateGroupAccountDecisionPolicy): {
                        typeUrl: string;
                        value: _337.MsgUpdateGroupAccountDecisionPolicy;
                    };
                    updateGroupAccountMetadata(value: _337.MsgUpdateGroupAccountMetadata): {
                        typeUrl: string;
                        value: _337.MsgUpdateGroupAccountMetadata;
                    };
                    createProposal(value: _337.MsgCreateProposal): {
                        typeUrl: string;
                        value: _337.MsgCreateProposal;
                    };
                    vote(value: _337.MsgVote): {
                        typeUrl: string;
                        value: _337.MsgVote;
                    };
                    exec(value: _337.MsgExec): {
                        typeUrl: string;
                        value: _337.MsgExec;
                    };
                };
            };
            AminoConverter: {
                "/regen.group.v1alpha1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _337.MsgCreateGroup) => _337.MsgCreateGroupAmino;
                    fromAmino: (object: _337.MsgCreateGroupAmino) => _337.MsgCreateGroup;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _337.MsgUpdateGroupMembers) => _337.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _337.MsgUpdateGroupMembersAmino) => _337.MsgUpdateGroupMembers;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _337.MsgUpdateGroupAdmin) => _337.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _337.MsgUpdateGroupAdminAmino) => _337.MsgUpdateGroupAdmin;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _337.MsgUpdateGroupMetadata) => _337.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _337.MsgUpdateGroupMetadataAmino) => _337.MsgUpdateGroupMetadata;
                };
                "/regen.group.v1alpha1.MsgCreateGroupAccount": {
                    aminoType: string;
                    toAmino: (message: _337.MsgCreateGroupAccount) => _337.MsgCreateGroupAccountAmino;
                    fromAmino: (object: _337.MsgCreateGroupAccountAmino) => _337.MsgCreateGroupAccount;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin": {
                    aminoType: string;
                    toAmino: (message: _337.MsgUpdateGroupAccountAdmin) => _337.MsgUpdateGroupAccountAdminAmino;
                    fromAmino: (object: _337.MsgUpdateGroupAccountAdminAmino) => _337.MsgUpdateGroupAccountAdmin;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _337.MsgUpdateGroupAccountDecisionPolicy) => _337.MsgUpdateGroupAccountDecisionPolicyAmino;
                    fromAmino: (object: _337.MsgUpdateGroupAccountDecisionPolicyAmino) => _337.MsgUpdateGroupAccountDecisionPolicy;
                };
                "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata": {
                    aminoType: string;
                    toAmino: (message: _337.MsgUpdateGroupAccountMetadata) => _337.MsgUpdateGroupAccountMetadataAmino;
                    fromAmino: (object: _337.MsgUpdateGroupAccountMetadataAmino) => _337.MsgUpdateGroupAccountMetadata;
                };
                "/regen.group.v1alpha1.MsgCreateProposal": {
                    aminoType: string;
                    toAmino: (message: _337.MsgCreateProposal) => _337.MsgCreateProposalAmino;
                    fromAmino: (object: _337.MsgCreateProposalAmino) => _337.MsgCreateProposal;
                };
                "/regen.group.v1alpha1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _337.MsgVote) => _337.MsgVoteAmino;
                    fromAmino: (object: _337.MsgVoteAmino) => _337.MsgVote;
                };
                "/regen.group.v1alpha1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _337.MsgExec) => _337.MsgExecAmino;
                    fromAmino: (object: _337.MsgExecAmino) => _337.MsgExec;
                };
            };
            choiceFromJSON(object: any): _338.Choice;
            choiceToJSON(object: _338.Choice): string;
            proposal_StatusFromJSON(object: any): _338.Proposal_Status;
            proposal_StatusToJSON(object: _338.Proposal_Status): string;
            proposal_ResultFromJSON(object: any): _338.Proposal_Result;
            proposal_ResultToJSON(object: _338.Proposal_Result): string;
            proposal_ExecutorResultFromJSON(object: any): _338.Proposal_ExecutorResult;
            proposal_ExecutorResultToJSON(object: _338.Proposal_ExecutorResult): string;
            Choice: typeof _338.Choice;
            ChoiceSDKType: typeof _338.Choice;
            ChoiceAmino: typeof _338.Choice;
            Proposal_Status: typeof _338.Proposal_Status;
            Proposal_StatusSDKType: typeof _338.Proposal_Status;
            Proposal_StatusAmino: typeof _338.Proposal_Status;
            Proposal_Result: typeof _338.Proposal_Result;
            Proposal_ResultSDKType: typeof _338.Proposal_Result;
            Proposal_ResultAmino: typeof _338.Proposal_Result;
            Proposal_ExecutorResult: typeof _338.Proposal_ExecutorResult;
            Proposal_ExecutorResultSDKType: typeof _338.Proposal_ExecutorResult;
            Proposal_ExecutorResultAmino: typeof _338.Proposal_ExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _338.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _338.Member;
                fromPartial(object: Partial<_338.Member>): _338.Member;
                fromAmino(object: _338.MemberAmino): _338.Member;
                toAmino(message: _338.Member): _338.MemberAmino;
                fromAminoMsg(object: _338.MemberAminoMsg): _338.Member;
                fromProtoMsg(message: _338.MemberProtoMsg): _338.Member;
                toProto(message: _338.Member): Uint8Array;
                toProtoMsg(message: _338.Member): _338.MemberProtoMsg;
            };
            Members: {
                typeUrl: string;
                encode(message: _338.Members, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _338.Members;
                fromPartial(object: Partial<_338.Members>): _338.Members;
                fromAmino(object: _338.MembersAmino): _338.Members;
                toAmino(message: _338.Members): _338.MembersAmino;
                fromAminoMsg(object: _338.MembersAminoMsg): _338.Members;
                fromProtoMsg(message: _338.MembersProtoMsg): _338.Members;
                toProto(message: _338.Members): Uint8Array;
                toProtoMsg(message: _338.Members): _338.MembersProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _338.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _338.ThresholdDecisionPolicy;
                fromPartial(object: Partial<_338.ThresholdDecisionPolicy>): _338.ThresholdDecisionPolicy;
                fromAmino(object: _338.ThresholdDecisionPolicyAmino): _338.ThresholdDecisionPolicy;
                toAmino(message: _338.ThresholdDecisionPolicy): _338.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _338.ThresholdDecisionPolicyAminoMsg): _338.ThresholdDecisionPolicy;
                fromProtoMsg(message: _338.ThresholdDecisionPolicyProtoMsg): _338.ThresholdDecisionPolicy;
                toProto(message: _338.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _338.ThresholdDecisionPolicy): _338.ThresholdDecisionPolicyProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _338.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _338.GroupInfo;
                fromPartial(object: Partial<_338.GroupInfo>): _338.GroupInfo;
                fromAmino(object: _338.GroupInfoAmino): _338.GroupInfo;
                toAmino(message: _338.GroupInfo): _338.GroupInfoAmino;
                fromAminoMsg(object: _338.GroupInfoAminoMsg): _338.GroupInfo;
                fromProtoMsg(message: _338.GroupInfoProtoMsg): _338.GroupInfo;
                toProto(message: _338.GroupInfo): Uint8Array;
                toProtoMsg(message: _338.GroupInfo): _338.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _338.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _338.GroupMember;
                fromPartial(object: Partial<_338.GroupMember>): _338.GroupMember;
                fromAmino(object: _338.GroupMemberAmino): _338.GroupMember;
                toAmino(message: _338.GroupMember): _338.GroupMemberAmino;
                fromAminoMsg(object: _338.GroupMemberAminoMsg): _338.GroupMember;
                fromProtoMsg(message: _338.GroupMemberProtoMsg): _338.GroupMember;
                toProto(message: _338.GroupMember): Uint8Array;
                toProtoMsg(message: _338.GroupMember): _338.GroupMemberProtoMsg;
            };
            GroupAccountInfo: {
                typeUrl: string;
                encode(message: _338.GroupAccountInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _338.GroupAccountInfo;
                fromPartial(object: Partial<_338.GroupAccountInfo>): _338.GroupAccountInfo;
                fromAmino(object: _338.GroupAccountInfoAmino): _338.GroupAccountInfo;
                toAmino(message: _338.GroupAccountInfo): _338.GroupAccountInfoAmino;
                fromAminoMsg(object: _338.GroupAccountInfoAminoMsg): _338.GroupAccountInfo;
                fromProtoMsg(message: _338.GroupAccountInfoProtoMsg): _338.GroupAccountInfo;
                toProto(message: _338.GroupAccountInfo): Uint8Array;
                toProtoMsg(message: _338.GroupAccountInfo): _338.GroupAccountInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _338.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _338.Proposal;
                fromPartial(object: Partial<_338.Proposal>): _338.Proposal;
                fromAmino(object: _338.ProposalAmino): _338.Proposal;
                toAmino(message: _338.Proposal): _338.ProposalAmino;
                fromAminoMsg(object: _338.ProposalAminoMsg): _338.Proposal;
                fromProtoMsg(message: _338.ProposalProtoMsg): _338.Proposal;
                toProto(message: _338.Proposal): Uint8Array;
                toProtoMsg(message: _338.Proposal): _338.ProposalProtoMsg;
            };
            Tally: {
                typeUrl: string;
                encode(message: _338.Tally, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _338.Tally;
                fromPartial(object: Partial<_338.Tally>): _338.Tally;
                fromAmino(object: _338.TallyAmino): _338.Tally;
                toAmino(message: _338.Tally): _338.TallyAmino;
                fromAminoMsg(object: _338.TallyAminoMsg): _338.Tally;
                fromProtoMsg(message: _338.TallyProtoMsg): _338.Tally;
                toProto(message: _338.Tally): Uint8Array;
                toProtoMsg(message: _338.Tally): _338.TallyProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _338.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _338.Vote;
                fromPartial(object: Partial<_338.Vote>): _338.Vote;
                fromAmino(object: _338.VoteAmino): _338.Vote;
                toAmino(message: _338.Vote): _338.VoteAmino;
                fromAminoMsg(object: _338.VoteAminoMsg): _338.Vote;
                fromProtoMsg(message: _338.VoteProtoMsg): _338.Vote;
                toProto(message: _338.Vote): Uint8Array;
                toProtoMsg(message: _338.Vote): _338.VoteProtoMsg;
            };
            DecisionPolicy_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => _338.ThresholdDecisionPolicy | import("../google/protobuf/any").Any;
            DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _337.Exec;
            execToJSON(object: _337.Exec): string;
            Exec: typeof _337.Exec;
            ExecSDKType: typeof _337.Exec;
            ExecAmino: typeof _337.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _337.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgCreateGroup;
                fromPartial(object: Partial<_337.MsgCreateGroup>): _337.MsgCreateGroup;
                fromAmino(object: _337.MsgCreateGroupAmino): _337.MsgCreateGroup;
                toAmino(message: _337.MsgCreateGroup): _337.MsgCreateGroupAmino;
                fromAminoMsg(object: _337.MsgCreateGroupAminoMsg): _337.MsgCreateGroup;
                fromProtoMsg(message: _337.MsgCreateGroupProtoMsg): _337.MsgCreateGroup;
                toProto(message: _337.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _337.MsgCreateGroup): _337.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _337.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgCreateGroupResponse;
                fromPartial(object: Partial<_337.MsgCreateGroupResponse>): _337.MsgCreateGroupResponse;
                fromAmino(object: _337.MsgCreateGroupResponseAmino): _337.MsgCreateGroupResponse;
                toAmino(message: _337.MsgCreateGroupResponse): _337.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _337.MsgCreateGroupResponseAminoMsg): _337.MsgCreateGroupResponse;
                fromProtoMsg(message: _337.MsgCreateGroupResponseProtoMsg): _337.MsgCreateGroupResponse;
                toProto(message: _337.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _337.MsgCreateGroupResponse): _337.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _337.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgUpdateGroupMembers;
                fromPartial(object: Partial<_337.MsgUpdateGroupMembers>): _337.MsgUpdateGroupMembers;
                fromAmino(object: _337.MsgUpdateGroupMembersAmino): _337.MsgUpdateGroupMembers;
                toAmino(message: _337.MsgUpdateGroupMembers): _337.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _337.MsgUpdateGroupMembersAminoMsg): _337.MsgUpdateGroupMembers;
                fromProtoMsg(message: _337.MsgUpdateGroupMembersProtoMsg): _337.MsgUpdateGroupMembers;
                toProto(message: _337.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _337.MsgUpdateGroupMembers): _337.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _337.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgUpdateGroupMembersResponse;
                fromPartial(_: Partial<_337.MsgUpdateGroupMembersResponse>): _337.MsgUpdateGroupMembersResponse;
                fromAmino(_: _337.MsgUpdateGroupMembersResponseAmino): _337.MsgUpdateGroupMembersResponse;
                toAmino(_: _337.MsgUpdateGroupMembersResponse): _337.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _337.MsgUpdateGroupMembersResponseAminoMsg): _337.MsgUpdateGroupMembersResponse;
                fromProtoMsg(message: _337.MsgUpdateGroupMembersResponseProtoMsg): _337.MsgUpdateGroupMembersResponse;
                toProto(message: _337.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _337.MsgUpdateGroupMembersResponse): _337.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _337.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgUpdateGroupAdmin;
                fromPartial(object: Partial<_337.MsgUpdateGroupAdmin>): _337.MsgUpdateGroupAdmin;
                fromAmino(object: _337.MsgUpdateGroupAdminAmino): _337.MsgUpdateGroupAdmin;
                toAmino(message: _337.MsgUpdateGroupAdmin): _337.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _337.MsgUpdateGroupAdminAminoMsg): _337.MsgUpdateGroupAdmin;
                fromProtoMsg(message: _337.MsgUpdateGroupAdminProtoMsg): _337.MsgUpdateGroupAdmin;
                toProto(message: _337.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _337.MsgUpdateGroupAdmin): _337.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _337.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgUpdateGroupAdminResponse;
                fromPartial(_: Partial<_337.MsgUpdateGroupAdminResponse>): _337.MsgUpdateGroupAdminResponse;
                fromAmino(_: _337.MsgUpdateGroupAdminResponseAmino): _337.MsgUpdateGroupAdminResponse;
                toAmino(_: _337.MsgUpdateGroupAdminResponse): _337.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _337.MsgUpdateGroupAdminResponseAminoMsg): _337.MsgUpdateGroupAdminResponse;
                fromProtoMsg(message: _337.MsgUpdateGroupAdminResponseProtoMsg): _337.MsgUpdateGroupAdminResponse;
                toProto(message: _337.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _337.MsgUpdateGroupAdminResponse): _337.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _337.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgUpdateGroupMetadata;
                fromPartial(object: Partial<_337.MsgUpdateGroupMetadata>): _337.MsgUpdateGroupMetadata;
                fromAmino(object: _337.MsgUpdateGroupMetadataAmino): _337.MsgUpdateGroupMetadata;
                toAmino(message: _337.MsgUpdateGroupMetadata): _337.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _337.MsgUpdateGroupMetadataAminoMsg): _337.MsgUpdateGroupMetadata;
                fromProtoMsg(message: _337.MsgUpdateGroupMetadataProtoMsg): _337.MsgUpdateGroupMetadata;
                toProto(message: _337.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _337.MsgUpdateGroupMetadata): _337.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _337.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgUpdateGroupMetadataResponse;
                fromPartial(_: Partial<_337.MsgUpdateGroupMetadataResponse>): _337.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _337.MsgUpdateGroupMetadataResponseAmino): _337.MsgUpdateGroupMetadataResponse;
                toAmino(_: _337.MsgUpdateGroupMetadataResponse): _337.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _337.MsgUpdateGroupMetadataResponseAminoMsg): _337.MsgUpdateGroupMetadataResponse;
                fromProtoMsg(message: _337.MsgUpdateGroupMetadataResponseProtoMsg): _337.MsgUpdateGroupMetadataResponse;
                toProto(message: _337.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _337.MsgUpdateGroupMetadataResponse): _337.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupAccount: {
                typeUrl: string;
                encode(message: _337.MsgCreateGroupAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgCreateGroupAccount;
                fromPartial(object: Partial<_337.MsgCreateGroupAccount>): _337.MsgCreateGroupAccount;
                fromAmino(object: _337.MsgCreateGroupAccountAmino): _337.MsgCreateGroupAccount;
                toAmino(message: _337.MsgCreateGroupAccount): _337.MsgCreateGroupAccountAmino;
                fromAminoMsg(object: _337.MsgCreateGroupAccountAminoMsg): _337.MsgCreateGroupAccount;
                fromProtoMsg(message: _337.MsgCreateGroupAccountProtoMsg): _337.MsgCreateGroupAccount;
                toProto(message: _337.MsgCreateGroupAccount): Uint8Array;
                toProtoMsg(message: _337.MsgCreateGroupAccount): _337.MsgCreateGroupAccountProtoMsg;
            };
            MsgCreateGroupAccountResponse: {
                typeUrl: string;
                encode(message: _337.MsgCreateGroupAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgCreateGroupAccountResponse;
                fromPartial(object: Partial<_337.MsgCreateGroupAccountResponse>): _337.MsgCreateGroupAccountResponse;
                fromAmino(object: _337.MsgCreateGroupAccountResponseAmino): _337.MsgCreateGroupAccountResponse;
                toAmino(message: _337.MsgCreateGroupAccountResponse): _337.MsgCreateGroupAccountResponseAmino;
                fromAminoMsg(object: _337.MsgCreateGroupAccountResponseAminoMsg): _337.MsgCreateGroupAccountResponse;
                fromProtoMsg(message: _337.MsgCreateGroupAccountResponseProtoMsg): _337.MsgCreateGroupAccountResponse;
                toProto(message: _337.MsgCreateGroupAccountResponse): Uint8Array;
                toProtoMsg(message: _337.MsgCreateGroupAccountResponse): _337.MsgCreateGroupAccountResponseProtoMsg;
            };
            MsgUpdateGroupAccountAdmin: {
                typeUrl: string;
                encode(message: _337.MsgUpdateGroupAccountAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgUpdateGroupAccountAdmin;
                fromPartial(object: Partial<_337.MsgUpdateGroupAccountAdmin>): _337.MsgUpdateGroupAccountAdmin;
                fromAmino(object: _337.MsgUpdateGroupAccountAdminAmino): _337.MsgUpdateGroupAccountAdmin;
                toAmino(message: _337.MsgUpdateGroupAccountAdmin): _337.MsgUpdateGroupAccountAdminAmino;
                fromAminoMsg(object: _337.MsgUpdateGroupAccountAdminAminoMsg): _337.MsgUpdateGroupAccountAdmin;
                fromProtoMsg(message: _337.MsgUpdateGroupAccountAdminProtoMsg): _337.MsgUpdateGroupAccountAdmin;
                toProto(message: _337.MsgUpdateGroupAccountAdmin): Uint8Array;
                toProtoMsg(message: _337.MsgUpdateGroupAccountAdmin): _337.MsgUpdateGroupAccountAdminProtoMsg;
            };
            MsgUpdateGroupAccountAdminResponse: {
                typeUrl: string;
                encode(_: _337.MsgUpdateGroupAccountAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgUpdateGroupAccountAdminResponse;
                fromPartial(_: Partial<_337.MsgUpdateGroupAccountAdminResponse>): _337.MsgUpdateGroupAccountAdminResponse;
                fromAmino(_: _337.MsgUpdateGroupAccountAdminResponseAmino): _337.MsgUpdateGroupAccountAdminResponse;
                toAmino(_: _337.MsgUpdateGroupAccountAdminResponse): _337.MsgUpdateGroupAccountAdminResponseAmino;
                fromAminoMsg(object: _337.MsgUpdateGroupAccountAdminResponseAminoMsg): _337.MsgUpdateGroupAccountAdminResponse;
                fromProtoMsg(message: _337.MsgUpdateGroupAccountAdminResponseProtoMsg): _337.MsgUpdateGroupAccountAdminResponse;
                toProto(message: _337.MsgUpdateGroupAccountAdminResponse): Uint8Array;
                toProtoMsg(message: _337.MsgUpdateGroupAccountAdminResponse): _337.MsgUpdateGroupAccountAdminResponseProtoMsg;
            };
            MsgUpdateGroupAccountDecisionPolicy: {
                typeUrl: string;
                encode(message: _337.MsgUpdateGroupAccountDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgUpdateGroupAccountDecisionPolicy;
                fromPartial(object: Partial<_337.MsgUpdateGroupAccountDecisionPolicy>): _337.MsgUpdateGroupAccountDecisionPolicy;
                fromAmino(object: _337.MsgUpdateGroupAccountDecisionPolicyAmino): _337.MsgUpdateGroupAccountDecisionPolicy;
                toAmino(message: _337.MsgUpdateGroupAccountDecisionPolicy): _337.MsgUpdateGroupAccountDecisionPolicyAmino;
                fromAminoMsg(object: _337.MsgUpdateGroupAccountDecisionPolicyAminoMsg): _337.MsgUpdateGroupAccountDecisionPolicy;
                fromProtoMsg(message: _337.MsgUpdateGroupAccountDecisionPolicyProtoMsg): _337.MsgUpdateGroupAccountDecisionPolicy;
                toProto(message: _337.MsgUpdateGroupAccountDecisionPolicy): Uint8Array;
                toProtoMsg(message: _337.MsgUpdateGroupAccountDecisionPolicy): _337.MsgUpdateGroupAccountDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupAccountDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _337.MsgUpdateGroupAccountDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgUpdateGroupAccountDecisionPolicyResponse;
                fromPartial(_: Partial<_337.MsgUpdateGroupAccountDecisionPolicyResponse>): _337.MsgUpdateGroupAccountDecisionPolicyResponse;
                fromAmino(_: _337.MsgUpdateGroupAccountDecisionPolicyResponseAmino): _337.MsgUpdateGroupAccountDecisionPolicyResponse;
                toAmino(_: _337.MsgUpdateGroupAccountDecisionPolicyResponse): _337.MsgUpdateGroupAccountDecisionPolicyResponseAmino;
                fromAminoMsg(object: _337.MsgUpdateGroupAccountDecisionPolicyResponseAminoMsg): _337.MsgUpdateGroupAccountDecisionPolicyResponse;
                fromProtoMsg(message: _337.MsgUpdateGroupAccountDecisionPolicyResponseProtoMsg): _337.MsgUpdateGroupAccountDecisionPolicyResponse;
                toProto(message: _337.MsgUpdateGroupAccountDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _337.MsgUpdateGroupAccountDecisionPolicyResponse): _337.MsgUpdateGroupAccountDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupAccountMetadata: {
                typeUrl: string;
                encode(message: _337.MsgUpdateGroupAccountMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgUpdateGroupAccountMetadata;
                fromPartial(object: Partial<_337.MsgUpdateGroupAccountMetadata>): _337.MsgUpdateGroupAccountMetadata;
                fromAmino(object: _337.MsgUpdateGroupAccountMetadataAmino): _337.MsgUpdateGroupAccountMetadata;
                toAmino(message: _337.MsgUpdateGroupAccountMetadata): _337.MsgUpdateGroupAccountMetadataAmino;
                fromAminoMsg(object: _337.MsgUpdateGroupAccountMetadataAminoMsg): _337.MsgUpdateGroupAccountMetadata;
                fromProtoMsg(message: _337.MsgUpdateGroupAccountMetadataProtoMsg): _337.MsgUpdateGroupAccountMetadata;
                toProto(message: _337.MsgUpdateGroupAccountMetadata): Uint8Array;
                toProtoMsg(message: _337.MsgUpdateGroupAccountMetadata): _337.MsgUpdateGroupAccountMetadataProtoMsg;
            };
            MsgUpdateGroupAccountMetadataResponse: {
                typeUrl: string;
                encode(_: _337.MsgUpdateGroupAccountMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgUpdateGroupAccountMetadataResponse;
                fromPartial(_: Partial<_337.MsgUpdateGroupAccountMetadataResponse>): _337.MsgUpdateGroupAccountMetadataResponse;
                fromAmino(_: _337.MsgUpdateGroupAccountMetadataResponseAmino): _337.MsgUpdateGroupAccountMetadataResponse;
                toAmino(_: _337.MsgUpdateGroupAccountMetadataResponse): _337.MsgUpdateGroupAccountMetadataResponseAmino;
                fromAminoMsg(object: _337.MsgUpdateGroupAccountMetadataResponseAminoMsg): _337.MsgUpdateGroupAccountMetadataResponse;
                fromProtoMsg(message: _337.MsgUpdateGroupAccountMetadataResponseProtoMsg): _337.MsgUpdateGroupAccountMetadataResponse;
                toProto(message: _337.MsgUpdateGroupAccountMetadataResponse): Uint8Array;
                toProtoMsg(message: _337.MsgUpdateGroupAccountMetadataResponse): _337.MsgUpdateGroupAccountMetadataResponseProtoMsg;
            };
            MsgCreateProposal: {
                typeUrl: string;
                encode(message: _337.MsgCreateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgCreateProposal;
                fromPartial(object: Partial<_337.MsgCreateProposal>): _337.MsgCreateProposal;
                fromAmino(object: _337.MsgCreateProposalAmino): _337.MsgCreateProposal;
                toAmino(message: _337.MsgCreateProposal): _337.MsgCreateProposalAmino;
                fromAminoMsg(object: _337.MsgCreateProposalAminoMsg): _337.MsgCreateProposal;
                fromProtoMsg(message: _337.MsgCreateProposalProtoMsg): _337.MsgCreateProposal;
                toProto(message: _337.MsgCreateProposal): Uint8Array;
                toProtoMsg(message: _337.MsgCreateProposal): _337.MsgCreateProposalProtoMsg;
            };
            MsgCreateProposalResponse: {
                typeUrl: string;
                encode(message: _337.MsgCreateProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgCreateProposalResponse;
                fromPartial(object: Partial<_337.MsgCreateProposalResponse>): _337.MsgCreateProposalResponse;
                fromAmino(object: _337.MsgCreateProposalResponseAmino): _337.MsgCreateProposalResponse;
                toAmino(message: _337.MsgCreateProposalResponse): _337.MsgCreateProposalResponseAmino;
                fromAminoMsg(object: _337.MsgCreateProposalResponseAminoMsg): _337.MsgCreateProposalResponse;
                fromProtoMsg(message: _337.MsgCreateProposalResponseProtoMsg): _337.MsgCreateProposalResponse;
                toProto(message: _337.MsgCreateProposalResponse): Uint8Array;
                toProtoMsg(message: _337.MsgCreateProposalResponse): _337.MsgCreateProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _337.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgVote;
                fromPartial(object: Partial<_337.MsgVote>): _337.MsgVote;
                fromAmino(object: _337.MsgVoteAmino): _337.MsgVote;
                toAmino(message: _337.MsgVote): _337.MsgVoteAmino;
                fromAminoMsg(object: _337.MsgVoteAminoMsg): _337.MsgVote;
                fromProtoMsg(message: _337.MsgVoteProtoMsg): _337.MsgVote;
                toProto(message: _337.MsgVote): Uint8Array;
                toProtoMsg(message: _337.MsgVote): _337.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _337.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgVoteResponse;
                fromPartial(_: Partial<_337.MsgVoteResponse>): _337.MsgVoteResponse;
                fromAmino(_: _337.MsgVoteResponseAmino): _337.MsgVoteResponse;
                toAmino(_: _337.MsgVoteResponse): _337.MsgVoteResponseAmino;
                fromAminoMsg(object: _337.MsgVoteResponseAminoMsg): _337.MsgVoteResponse;
                fromProtoMsg(message: _337.MsgVoteResponseProtoMsg): _337.MsgVoteResponse;
                toProto(message: _337.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _337.MsgVoteResponse): _337.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _337.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgExec;
                fromPartial(object: Partial<_337.MsgExec>): _337.MsgExec;
                fromAmino(object: _337.MsgExecAmino): _337.MsgExec;
                toAmino(message: _337.MsgExec): _337.MsgExecAmino;
                fromAminoMsg(object: _337.MsgExecAminoMsg): _337.MsgExec;
                fromProtoMsg(message: _337.MsgExecProtoMsg): _337.MsgExec;
                toProto(message: _337.MsgExec): Uint8Array;
                toProtoMsg(message: _337.MsgExec): _337.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(_: _337.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _337.MsgExecResponse;
                fromPartial(_: Partial<_337.MsgExecResponse>): _337.MsgExecResponse;
                fromAmino(_: _337.MsgExecResponseAmino): _337.MsgExecResponse;
                toAmino(_: _337.MsgExecResponse): _337.MsgExecResponseAmino;
                fromAminoMsg(object: _337.MsgExecResponseAminoMsg): _337.MsgExecResponse;
                fromProtoMsg(message: _337.MsgExecResponseProtoMsg): _337.MsgExecResponse;
                toProto(message: _337.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _337.MsgExecResponse): _337.MsgExecResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _336.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryGroupInfoRequest;
                fromPartial(object: Partial<_336.QueryGroupInfoRequest>): _336.QueryGroupInfoRequest;
                fromAmino(object: _336.QueryGroupInfoRequestAmino): _336.QueryGroupInfoRequest;
                toAmino(message: _336.QueryGroupInfoRequest): _336.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _336.QueryGroupInfoRequestAminoMsg): _336.QueryGroupInfoRequest;
                fromProtoMsg(message: _336.QueryGroupInfoRequestProtoMsg): _336.QueryGroupInfoRequest;
                toProto(message: _336.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _336.QueryGroupInfoRequest): _336.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _336.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryGroupInfoResponse;
                fromPartial(object: Partial<_336.QueryGroupInfoResponse>): _336.QueryGroupInfoResponse;
                fromAmino(object: _336.QueryGroupInfoResponseAmino): _336.QueryGroupInfoResponse;
                toAmino(message: _336.QueryGroupInfoResponse): _336.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _336.QueryGroupInfoResponseAminoMsg): _336.QueryGroupInfoResponse;
                fromProtoMsg(message: _336.QueryGroupInfoResponseProtoMsg): _336.QueryGroupInfoResponse;
                toProto(message: _336.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _336.QueryGroupInfoResponse): _336.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupAccountInfoRequest: {
                typeUrl: string;
                encode(message: _336.QueryGroupAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryGroupAccountInfoRequest;
                fromPartial(object: Partial<_336.QueryGroupAccountInfoRequest>): _336.QueryGroupAccountInfoRequest;
                fromAmino(object: _336.QueryGroupAccountInfoRequestAmino): _336.QueryGroupAccountInfoRequest;
                toAmino(message: _336.QueryGroupAccountInfoRequest): _336.QueryGroupAccountInfoRequestAmino;
                fromAminoMsg(object: _336.QueryGroupAccountInfoRequestAminoMsg): _336.QueryGroupAccountInfoRequest;
                fromProtoMsg(message: _336.QueryGroupAccountInfoRequestProtoMsg): _336.QueryGroupAccountInfoRequest;
                toProto(message: _336.QueryGroupAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _336.QueryGroupAccountInfoRequest): _336.QueryGroupAccountInfoRequestProtoMsg;
            };
            QueryGroupAccountInfoResponse: {
                typeUrl: string;
                encode(message: _336.QueryGroupAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryGroupAccountInfoResponse;
                fromPartial(object: Partial<_336.QueryGroupAccountInfoResponse>): _336.QueryGroupAccountInfoResponse;
                fromAmino(object: _336.QueryGroupAccountInfoResponseAmino): _336.QueryGroupAccountInfoResponse;
                toAmino(message: _336.QueryGroupAccountInfoResponse): _336.QueryGroupAccountInfoResponseAmino;
                fromAminoMsg(object: _336.QueryGroupAccountInfoResponseAminoMsg): _336.QueryGroupAccountInfoResponse;
                fromProtoMsg(message: _336.QueryGroupAccountInfoResponseProtoMsg): _336.QueryGroupAccountInfoResponse;
                toProto(message: _336.QueryGroupAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _336.QueryGroupAccountInfoResponse): _336.QueryGroupAccountInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _336.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryGroupMembersRequest;
                fromPartial(object: Partial<_336.QueryGroupMembersRequest>): _336.QueryGroupMembersRequest;
                fromAmino(object: _336.QueryGroupMembersRequestAmino): _336.QueryGroupMembersRequest;
                toAmino(message: _336.QueryGroupMembersRequest): _336.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _336.QueryGroupMembersRequestAminoMsg): _336.QueryGroupMembersRequest;
                fromProtoMsg(message: _336.QueryGroupMembersRequestProtoMsg): _336.QueryGroupMembersRequest;
                toProto(message: _336.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _336.QueryGroupMembersRequest): _336.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _336.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryGroupMembersResponse;
                fromPartial(object: Partial<_336.QueryGroupMembersResponse>): _336.QueryGroupMembersResponse;
                fromAmino(object: _336.QueryGroupMembersResponseAmino): _336.QueryGroupMembersResponse;
                toAmino(message: _336.QueryGroupMembersResponse): _336.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _336.QueryGroupMembersResponseAminoMsg): _336.QueryGroupMembersResponse;
                fromProtoMsg(message: _336.QueryGroupMembersResponseProtoMsg): _336.QueryGroupMembersResponse;
                toProto(message: _336.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _336.QueryGroupMembersResponse): _336.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _336.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryGroupsByAdminRequest;
                fromPartial(object: Partial<_336.QueryGroupsByAdminRequest>): _336.QueryGroupsByAdminRequest;
                fromAmino(object: _336.QueryGroupsByAdminRequestAmino): _336.QueryGroupsByAdminRequest;
                toAmino(message: _336.QueryGroupsByAdminRequest): _336.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _336.QueryGroupsByAdminRequestAminoMsg): _336.QueryGroupsByAdminRequest;
                fromProtoMsg(message: _336.QueryGroupsByAdminRequestProtoMsg): _336.QueryGroupsByAdminRequest;
                toProto(message: _336.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _336.QueryGroupsByAdminRequest): _336.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _336.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryGroupsByAdminResponse;
                fromPartial(object: Partial<_336.QueryGroupsByAdminResponse>): _336.QueryGroupsByAdminResponse;
                fromAmino(object: _336.QueryGroupsByAdminResponseAmino): _336.QueryGroupsByAdminResponse;
                toAmino(message: _336.QueryGroupsByAdminResponse): _336.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _336.QueryGroupsByAdminResponseAminoMsg): _336.QueryGroupsByAdminResponse;
                fromProtoMsg(message: _336.QueryGroupsByAdminResponseProtoMsg): _336.QueryGroupsByAdminResponse;
                toProto(message: _336.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _336.QueryGroupsByAdminResponse): _336.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupAccountsByGroupRequest: {
                typeUrl: string;
                encode(message: _336.QueryGroupAccountsByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryGroupAccountsByGroupRequest;
                fromPartial(object: Partial<_336.QueryGroupAccountsByGroupRequest>): _336.QueryGroupAccountsByGroupRequest;
                fromAmino(object: _336.QueryGroupAccountsByGroupRequestAmino): _336.QueryGroupAccountsByGroupRequest;
                toAmino(message: _336.QueryGroupAccountsByGroupRequest): _336.QueryGroupAccountsByGroupRequestAmino;
                fromAminoMsg(object: _336.QueryGroupAccountsByGroupRequestAminoMsg): _336.QueryGroupAccountsByGroupRequest;
                fromProtoMsg(message: _336.QueryGroupAccountsByGroupRequestProtoMsg): _336.QueryGroupAccountsByGroupRequest;
                toProto(message: _336.QueryGroupAccountsByGroupRequest): Uint8Array;
                toProtoMsg(message: _336.QueryGroupAccountsByGroupRequest): _336.QueryGroupAccountsByGroupRequestProtoMsg;
            };
            QueryGroupAccountsByGroupResponse: {
                typeUrl: string;
                encode(message: _336.QueryGroupAccountsByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryGroupAccountsByGroupResponse;
                fromPartial(object: Partial<_336.QueryGroupAccountsByGroupResponse>): _336.QueryGroupAccountsByGroupResponse;
                fromAmino(object: _336.QueryGroupAccountsByGroupResponseAmino): _336.QueryGroupAccountsByGroupResponse;
                toAmino(message: _336.QueryGroupAccountsByGroupResponse): _336.QueryGroupAccountsByGroupResponseAmino;
                fromAminoMsg(object: _336.QueryGroupAccountsByGroupResponseAminoMsg): _336.QueryGroupAccountsByGroupResponse;
                fromProtoMsg(message: _336.QueryGroupAccountsByGroupResponseProtoMsg): _336.QueryGroupAccountsByGroupResponse;
                toProto(message: _336.QueryGroupAccountsByGroupResponse): Uint8Array;
                toProtoMsg(message: _336.QueryGroupAccountsByGroupResponse): _336.QueryGroupAccountsByGroupResponseProtoMsg;
            };
            QueryGroupAccountsByAdminRequest: {
                typeUrl: string;
                encode(message: _336.QueryGroupAccountsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryGroupAccountsByAdminRequest;
                fromPartial(object: Partial<_336.QueryGroupAccountsByAdminRequest>): _336.QueryGroupAccountsByAdminRequest;
                fromAmino(object: _336.QueryGroupAccountsByAdminRequestAmino): _336.QueryGroupAccountsByAdminRequest;
                toAmino(message: _336.QueryGroupAccountsByAdminRequest): _336.QueryGroupAccountsByAdminRequestAmino;
                fromAminoMsg(object: _336.QueryGroupAccountsByAdminRequestAminoMsg): _336.QueryGroupAccountsByAdminRequest;
                fromProtoMsg(message: _336.QueryGroupAccountsByAdminRequestProtoMsg): _336.QueryGroupAccountsByAdminRequest;
                toProto(message: _336.QueryGroupAccountsByAdminRequest): Uint8Array;
                toProtoMsg(message: _336.QueryGroupAccountsByAdminRequest): _336.QueryGroupAccountsByAdminRequestProtoMsg;
            };
            QueryGroupAccountsByAdminResponse: {
                typeUrl: string;
                encode(message: _336.QueryGroupAccountsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryGroupAccountsByAdminResponse;
                fromPartial(object: Partial<_336.QueryGroupAccountsByAdminResponse>): _336.QueryGroupAccountsByAdminResponse;
                fromAmino(object: _336.QueryGroupAccountsByAdminResponseAmino): _336.QueryGroupAccountsByAdminResponse;
                toAmino(message: _336.QueryGroupAccountsByAdminResponse): _336.QueryGroupAccountsByAdminResponseAmino;
                fromAminoMsg(object: _336.QueryGroupAccountsByAdminResponseAminoMsg): _336.QueryGroupAccountsByAdminResponse;
                fromProtoMsg(message: _336.QueryGroupAccountsByAdminResponseProtoMsg): _336.QueryGroupAccountsByAdminResponse;
                toProto(message: _336.QueryGroupAccountsByAdminResponse): Uint8Array;
                toProtoMsg(message: _336.QueryGroupAccountsByAdminResponse): _336.QueryGroupAccountsByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _336.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryProposalRequest;
                fromPartial(object: Partial<_336.QueryProposalRequest>): _336.QueryProposalRequest;
                fromAmino(object: _336.QueryProposalRequestAmino): _336.QueryProposalRequest;
                toAmino(message: _336.QueryProposalRequest): _336.QueryProposalRequestAmino;
                fromAminoMsg(object: _336.QueryProposalRequestAminoMsg): _336.QueryProposalRequest;
                fromProtoMsg(message: _336.QueryProposalRequestProtoMsg): _336.QueryProposalRequest;
                toProto(message: _336.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _336.QueryProposalRequest): _336.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _336.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryProposalResponse;
                fromPartial(object: Partial<_336.QueryProposalResponse>): _336.QueryProposalResponse;
                fromAmino(object: _336.QueryProposalResponseAmino): _336.QueryProposalResponse;
                toAmino(message: _336.QueryProposalResponse): _336.QueryProposalResponseAmino;
                fromAminoMsg(object: _336.QueryProposalResponseAminoMsg): _336.QueryProposalResponse;
                fromProtoMsg(message: _336.QueryProposalResponseProtoMsg): _336.QueryProposalResponse;
                toProto(message: _336.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _336.QueryProposalResponse): _336.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupAccountRequest: {
                typeUrl: string;
                encode(message: _336.QueryProposalsByGroupAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryProposalsByGroupAccountRequest;
                fromPartial(object: Partial<_336.QueryProposalsByGroupAccountRequest>): _336.QueryProposalsByGroupAccountRequest;
                fromAmino(object: _336.QueryProposalsByGroupAccountRequestAmino): _336.QueryProposalsByGroupAccountRequest;
                toAmino(message: _336.QueryProposalsByGroupAccountRequest): _336.QueryProposalsByGroupAccountRequestAmino;
                fromAminoMsg(object: _336.QueryProposalsByGroupAccountRequestAminoMsg): _336.QueryProposalsByGroupAccountRequest;
                fromProtoMsg(message: _336.QueryProposalsByGroupAccountRequestProtoMsg): _336.QueryProposalsByGroupAccountRequest;
                toProto(message: _336.QueryProposalsByGroupAccountRequest): Uint8Array;
                toProtoMsg(message: _336.QueryProposalsByGroupAccountRequest): _336.QueryProposalsByGroupAccountRequestProtoMsg;
            };
            QueryProposalsByGroupAccountResponse: {
                typeUrl: string;
                encode(message: _336.QueryProposalsByGroupAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryProposalsByGroupAccountResponse;
                fromPartial(object: Partial<_336.QueryProposalsByGroupAccountResponse>): _336.QueryProposalsByGroupAccountResponse;
                fromAmino(object: _336.QueryProposalsByGroupAccountResponseAmino): _336.QueryProposalsByGroupAccountResponse;
                toAmino(message: _336.QueryProposalsByGroupAccountResponse): _336.QueryProposalsByGroupAccountResponseAmino;
                fromAminoMsg(object: _336.QueryProposalsByGroupAccountResponseAminoMsg): _336.QueryProposalsByGroupAccountResponse;
                fromProtoMsg(message: _336.QueryProposalsByGroupAccountResponseProtoMsg): _336.QueryProposalsByGroupAccountResponse;
                toProto(message: _336.QueryProposalsByGroupAccountResponse): Uint8Array;
                toProtoMsg(message: _336.QueryProposalsByGroupAccountResponse): _336.QueryProposalsByGroupAccountResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _336.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryVoteByProposalVoterRequest;
                fromPartial(object: Partial<_336.QueryVoteByProposalVoterRequest>): _336.QueryVoteByProposalVoterRequest;
                fromAmino(object: _336.QueryVoteByProposalVoterRequestAmino): _336.QueryVoteByProposalVoterRequest;
                toAmino(message: _336.QueryVoteByProposalVoterRequest): _336.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _336.QueryVoteByProposalVoterRequestAminoMsg): _336.QueryVoteByProposalVoterRequest;
                fromProtoMsg(message: _336.QueryVoteByProposalVoterRequestProtoMsg): _336.QueryVoteByProposalVoterRequest;
                toProto(message: _336.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _336.QueryVoteByProposalVoterRequest): _336.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _336.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryVoteByProposalVoterResponse;
                fromPartial(object: Partial<_336.QueryVoteByProposalVoterResponse>): _336.QueryVoteByProposalVoterResponse;
                fromAmino(object: _336.QueryVoteByProposalVoterResponseAmino): _336.QueryVoteByProposalVoterResponse;
                toAmino(message: _336.QueryVoteByProposalVoterResponse): _336.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _336.QueryVoteByProposalVoterResponseAminoMsg): _336.QueryVoteByProposalVoterResponse;
                fromProtoMsg(message: _336.QueryVoteByProposalVoterResponseProtoMsg): _336.QueryVoteByProposalVoterResponse;
                toProto(message: _336.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _336.QueryVoteByProposalVoterResponse): _336.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _336.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryVotesByProposalRequest;
                fromPartial(object: Partial<_336.QueryVotesByProposalRequest>): _336.QueryVotesByProposalRequest;
                fromAmino(object: _336.QueryVotesByProposalRequestAmino): _336.QueryVotesByProposalRequest;
                toAmino(message: _336.QueryVotesByProposalRequest): _336.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _336.QueryVotesByProposalRequestAminoMsg): _336.QueryVotesByProposalRequest;
                fromProtoMsg(message: _336.QueryVotesByProposalRequestProtoMsg): _336.QueryVotesByProposalRequest;
                toProto(message: _336.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _336.QueryVotesByProposalRequest): _336.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _336.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryVotesByProposalResponse;
                fromPartial(object: Partial<_336.QueryVotesByProposalResponse>): _336.QueryVotesByProposalResponse;
                fromAmino(object: _336.QueryVotesByProposalResponseAmino): _336.QueryVotesByProposalResponse;
                toAmino(message: _336.QueryVotesByProposalResponse): _336.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _336.QueryVotesByProposalResponseAminoMsg): _336.QueryVotesByProposalResponse;
                fromProtoMsg(message: _336.QueryVotesByProposalResponseProtoMsg): _336.QueryVotesByProposalResponse;
                toProto(message: _336.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _336.QueryVotesByProposalResponse): _336.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _336.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryVotesByVoterRequest;
                fromPartial(object: Partial<_336.QueryVotesByVoterRequest>): _336.QueryVotesByVoterRequest;
                fromAmino(object: _336.QueryVotesByVoterRequestAmino): _336.QueryVotesByVoterRequest;
                toAmino(message: _336.QueryVotesByVoterRequest): _336.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _336.QueryVotesByVoterRequestAminoMsg): _336.QueryVotesByVoterRequest;
                fromProtoMsg(message: _336.QueryVotesByVoterRequestProtoMsg): _336.QueryVotesByVoterRequest;
                toProto(message: _336.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _336.QueryVotesByVoterRequest): _336.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _336.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _336.QueryVotesByVoterResponse;
                fromPartial(object: Partial<_336.QueryVotesByVoterResponse>): _336.QueryVotesByVoterResponse;
                fromAmino(object: _336.QueryVotesByVoterResponseAmino): _336.QueryVotesByVoterResponse;
                toAmino(message: _336.QueryVotesByVoterResponse): _336.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _336.QueryVotesByVoterResponseAminoMsg): _336.QueryVotesByVoterResponse;
                fromProtoMsg(message: _336.QueryVotesByVoterResponseProtoMsg): _336.QueryVotesByVoterResponse;
                toProto(message: _336.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _336.QueryVotesByVoterResponse): _336.QueryVotesByVoterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _335.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _335.GenesisState;
                fromPartial(object: Partial<_335.GenesisState>): _335.GenesisState;
                fromAmino(object: _335.GenesisStateAmino): _335.GenesisState;
                toAmino(message: _335.GenesisState): _335.GenesisStateAmino;
                fromAminoMsg(object: _335.GenesisStateAminoMsg): _335.GenesisState;
                fromProtoMsg(message: _335.GenesisStateProtoMsg): _335.GenesisState;
                toProto(message: _335.GenesisState): Uint8Array;
                toProtoMsg(message: _335.GenesisState): _335.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _334.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _334.EventCreateGroup;
                fromPartial(object: Partial<_334.EventCreateGroup>): _334.EventCreateGroup;
                fromAmino(object: _334.EventCreateGroupAmino): _334.EventCreateGroup;
                toAmino(message: _334.EventCreateGroup): _334.EventCreateGroupAmino;
                fromAminoMsg(object: _334.EventCreateGroupAminoMsg): _334.EventCreateGroup;
                fromProtoMsg(message: _334.EventCreateGroupProtoMsg): _334.EventCreateGroup;
                toProto(message: _334.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _334.EventCreateGroup): _334.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _334.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _334.EventUpdateGroup;
                fromPartial(object: Partial<_334.EventUpdateGroup>): _334.EventUpdateGroup;
                fromAmino(object: _334.EventUpdateGroupAmino): _334.EventUpdateGroup;
                toAmino(message: _334.EventUpdateGroup): _334.EventUpdateGroupAmino;
                fromAminoMsg(object: _334.EventUpdateGroupAminoMsg): _334.EventUpdateGroup;
                fromProtoMsg(message: _334.EventUpdateGroupProtoMsg): _334.EventUpdateGroup;
                toProto(message: _334.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _334.EventUpdateGroup): _334.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupAccount: {
                typeUrl: string;
                encode(message: _334.EventCreateGroupAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _334.EventCreateGroupAccount;
                fromPartial(object: Partial<_334.EventCreateGroupAccount>): _334.EventCreateGroupAccount;
                fromAmino(object: _334.EventCreateGroupAccountAmino): _334.EventCreateGroupAccount;
                toAmino(message: _334.EventCreateGroupAccount): _334.EventCreateGroupAccountAmino;
                fromAminoMsg(object: _334.EventCreateGroupAccountAminoMsg): _334.EventCreateGroupAccount;
                fromProtoMsg(message: _334.EventCreateGroupAccountProtoMsg): _334.EventCreateGroupAccount;
                toProto(message: _334.EventCreateGroupAccount): Uint8Array;
                toProtoMsg(message: _334.EventCreateGroupAccount): _334.EventCreateGroupAccountProtoMsg;
            };
            EventUpdateGroupAccount: {
                typeUrl: string;
                encode(message: _334.EventUpdateGroupAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _334.EventUpdateGroupAccount;
                fromPartial(object: Partial<_334.EventUpdateGroupAccount>): _334.EventUpdateGroupAccount;
                fromAmino(object: _334.EventUpdateGroupAccountAmino): _334.EventUpdateGroupAccount;
                toAmino(message: _334.EventUpdateGroupAccount): _334.EventUpdateGroupAccountAmino;
                fromAminoMsg(object: _334.EventUpdateGroupAccountAminoMsg): _334.EventUpdateGroupAccount;
                fromProtoMsg(message: _334.EventUpdateGroupAccountProtoMsg): _334.EventUpdateGroupAccount;
                toProto(message: _334.EventUpdateGroupAccount): Uint8Array;
                toProtoMsg(message: _334.EventUpdateGroupAccount): _334.EventUpdateGroupAccountProtoMsg;
            };
            EventCreateProposal: {
                typeUrl: string;
                encode(message: _334.EventCreateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _334.EventCreateProposal;
                fromPartial(object: Partial<_334.EventCreateProposal>): _334.EventCreateProposal;
                fromAmino(object: _334.EventCreateProposalAmino): _334.EventCreateProposal;
                toAmino(message: _334.EventCreateProposal): _334.EventCreateProposalAmino;
                fromAminoMsg(object: _334.EventCreateProposalAminoMsg): _334.EventCreateProposal;
                fromProtoMsg(message: _334.EventCreateProposalProtoMsg): _334.EventCreateProposal;
                toProto(message: _334.EventCreateProposal): Uint8Array;
                toProtoMsg(message: _334.EventCreateProposal): _334.EventCreateProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _334.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _334.EventVote;
                fromPartial(object: Partial<_334.EventVote>): _334.EventVote;
                fromAmino(object: _334.EventVoteAmino): _334.EventVote;
                toAmino(message: _334.EventVote): _334.EventVoteAmino;
                fromAminoMsg(object: _334.EventVoteAminoMsg): _334.EventVote;
                fromProtoMsg(message: _334.EventVoteProtoMsg): _334.EventVote;
                toProto(message: _334.EventVote): Uint8Array;
                toProtoMsg(message: _334.EventVote): _334.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _334.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _334.EventExec;
                fromPartial(object: Partial<_334.EventExec>): _334.EventExec;
                fromAmino(object: _334.EventExecAmino): _334.EventExec;
                toAmino(message: _334.EventExec): _334.EventExecAmino;
                fromAminoMsg(object: _334.EventExecAminoMsg): _334.EventExec;
                fromProtoMsg(message: _334.EventExecProtoMsg): _334.EventExec;
                toProto(message: _334.EventExec): Uint8Array;
                toProtoMsg(message: _334.EventExec): _334.EventExecProtoMsg;
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
            regen: {
                data: {
                    v1: _575.MsgClientImpl;
                    v1alpha2: _576.MsgClientImpl;
                };
                ecocredit: {
                    basket: {
                        v1: _577.MsgClientImpl;
                    };
                    marketplace: {
                        v1: _578.MsgClientImpl;
                    };
                    v1: _579.MsgClientImpl;
                    v1alpha1: _580.MsgClientImpl;
                };
                group: {
                    v1alpha1: _581.MsgClientImpl;
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
            regen: {
                data: {
                    v1: {
                        byIRI(request: _304.QueryByIRIRequest): Promise<_304.QueryByIRIResponse>;
                        byHash(request: _304.QueryByHashRequest): Promise<_304.QueryByHashResponse>;
                        byAttestor(request: _304.QueryByAttestorRequest): Promise<_304.QueryByAttestorResponse>;
                        iRIByHash(request: _304.QueryIRIByHashRequest): Promise<_304.QueryIRIByHashResponse>;
                        iRIByRawHash(request: _304.QueryIRIByRawHashRequest): Promise<_304.QueryIRIByRawHashResponse>;
                        iRIByGraphHash(request: _304.QueryIRIByGraphHashRequest): Promise<_304.QueryIRIByGraphHashResponse>;
                        hashByIRI(request: _304.QueryHashByIRIRequest): Promise<_304.QueryHashByIRIResponse>;
                        attestorsByIRI(request: _304.QueryAttestorsByIRIRequest): Promise<_304.QueryAttestorsByIRIResponse>;
                        attestorsByHash(request: _304.QueryAttestorsByHashRequest): Promise<_304.QueryAttestorsByHashResponse>;
                        resolversByIRI(request: _304.QueryResolversByIRIRequest): Promise<_304.QueryResolversByIRIResponse>;
                        resolversByHash(request: _304.QueryResolversByHashRequest): Promise<_304.QueryResolversByHashResponse>;
                        resolverInfo(request: _304.QueryResolverInfoRequest): Promise<_304.QueryResolverInfoResponse>;
                    };
                    v1alpha2: {
                        byHash(request: _310.QueryByHashRequest): Promise<_310.QueryByHashResponse>;
                        bySigner(request: _310.QueryBySignerRequest): Promise<_310.QueryBySignerResponse>;
                    };
                };
                ecocredit: {
                    basket: {
                        v1: {
                            basket(request: _314.QueryBasketRequest): Promise<_314.QueryBasketResponse>;
                            baskets(request?: _314.QueryBasketsRequest): Promise<_314.QueryBasketsResponse>;
                            basketBalances(request: _314.QueryBasketBalancesRequest): Promise<_314.QueryBasketBalancesResponse>;
                            basketBalance(request: _314.QueryBasketBalanceRequest): Promise<_314.QueryBasketBalanceResponse>;
                        };
                    };
                    marketplace: {
                        v1: {
                            sellOrder(request: _319.QuerySellOrderRequest): Promise<_319.QuerySellOrderResponse>;
                            sellOrders(request?: _319.QuerySellOrdersRequest): Promise<_319.QuerySellOrdersResponse>;
                            sellOrdersByBatchDenom(request: _319.QuerySellOrdersByBatchDenomRequest): Promise<_319.QuerySellOrdersByBatchDenomResponse>;
                            sellOrdersByAddress(request: _319.QuerySellOrdersByAddressRequest): Promise<_319.QuerySellOrdersByAddressResponse>;
                            allowedDenoms(request?: _319.QueryAllowedDenomsRequest): Promise<_319.QueryAllowedDenomsResponse>;
                        };
                    };
                    v1: {
                        classes(request?: _325.QueryClassesRequest): Promise<_325.QueryClassesResponse>;
                        classesByAdmin(request: _325.QueryClassesByAdminRequest): Promise<_325.QueryClassesByAdminResponse>;
                        class(request: _325.QueryClassRequest): Promise<_325.QueryClassResponse>;
                        classIssuers(request: _325.QueryClassIssuersRequest): Promise<_325.QueryClassIssuersResponse>;
                        projects(request: _325.QueryProjectsRequest): Promise<_325.QueryProjectsResponse>;
                        projectsByReferenceId(request: _325.QueryProjectsByReferenceIdRequest): Promise<_325.QueryProjectsByReferenceIdResponse>;
                        project(request: _325.QueryProjectRequest): Promise<_325.QueryProjectResponse>;
                        batches(request: _325.QueryBatchesRequest): Promise<_325.QueryBatchesResponse>;
                        batchesByIssuer(request: _325.QueryBatchesByIssuerRequest): Promise<_325.QueryBatchesByIssuerResponse>;
                        batchesByClass(request: _325.QueryBatchesByClassRequest): Promise<_325.QueryBatchesByClassResponse>;
                        batch(request: _325.QueryBatchRequest): Promise<_325.QueryBatchResponse>;
                        balance(request: _325.QueryBalanceRequest): Promise<_325.QueryBalanceResponse>;
                        balances(request: _325.QueryBalancesRequest): Promise<_325.QueryBalancesResponse>;
                        supply(request: _325.QuerySupplyRequest): Promise<_325.QuerySupplyResponse>;
                        creditTypes(request?: _325.QueryCreditTypesRequest): Promise<_325.QueryCreditTypesResponse>;
                        params(request?: _325.QueryParamsRequest): Promise<_325.QueryParamsResponse>;
                    };
                    v1alpha1: {
                        classes(request?: _331.QueryClassesRequest): Promise<_331.QueryClassesResponse>;
                        classInfo(request: _331.QueryClassInfoRequest): Promise<_331.QueryClassInfoResponse>;
                        batches(request: _331.QueryBatchesRequest): Promise<_331.QueryBatchesResponse>;
                        batchInfo(request: _331.QueryBatchInfoRequest): Promise<_331.QueryBatchInfoResponse>;
                        balance(request: _331.QueryBalanceRequest): Promise<_331.QueryBalanceResponse>;
                        supply(request: _331.QuerySupplyRequest): Promise<_331.QuerySupplyResponse>;
                        creditTypes(request?: _331.QueryCreditTypesRequest): Promise<_331.QueryCreditTypesResponse>;
                        params(request?: _331.QueryParamsRequest): Promise<_331.QueryParamsResponse>;
                    };
                };
                group: {
                    v1alpha1: {
                        groupInfo(request: _336.QueryGroupInfoRequest): Promise<_336.QueryGroupInfoResponse>;
                        groupAccountInfo(request: _336.QueryGroupAccountInfoRequest): Promise<_336.QueryGroupAccountInfoResponse>;
                        groupMembers(request: _336.QueryGroupMembersRequest): Promise<_336.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _336.QueryGroupsByAdminRequest): Promise<_336.QueryGroupsByAdminResponse>;
                        groupAccountsByGroup(request: _336.QueryGroupAccountsByGroupRequest): Promise<_336.QueryGroupAccountsByGroupResponse>;
                        groupAccountsByAdmin(request: _336.QueryGroupAccountsByAdminRequest): Promise<_336.QueryGroupAccountsByAdminResponse>;
                        proposal(request: _336.QueryProposalRequest): Promise<_336.QueryProposalResponse>;
                        proposalsByGroupAccount(request: _336.QueryProposalsByGroupAccountRequest): Promise<_336.QueryProposalsByGroupAccountResponse>;
                        voteByProposalVoter(request: _336.QueryVoteByProposalVoterRequest): Promise<_336.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _336.QueryVotesByProposalRequest): Promise<_336.QueryVotesByProposalResponse>;
                        votesByVoter(request: _336.QueryVotesByVoterRequest): Promise<_336.QueryVotesByVoterResponse>;
                    };
                };
            };
        }>;
    };
}
