import { BinaryReader, BinaryWriter } from "../../../binary";
/** This describes how the endpoint is implemented when the lease is deployed */
export declare enum Endpoint_Kind {
    /** SHARED_HTTP - Describes an endpoint that becomes a Kubernetes Ingress */
    SHARED_HTTP = 0,
    /** RANDOM_PORT - Describes an endpoint that becomes a Kubernetes NodePort */
    RANDOM_PORT = 1,
    UNRECOGNIZED = -1
}
export declare const Endpoint_KindSDKType: typeof Endpoint_Kind;
export declare const Endpoint_KindAmino: typeof Endpoint_Kind;
export declare function endpoint_KindFromJSON(object: any): Endpoint_Kind;
export declare function endpoint_KindToJSON(object: Endpoint_Kind): string;
/** Endpoint describes a publicly accessible IP service */
export interface Endpoint {
    kind: Endpoint_Kind;
}
export interface EndpointProtoMsg {
    typeUrl: "/akash.base.v1beta1.Endpoint";
    value: Uint8Array;
}
/** Endpoint describes a publicly accessible IP service */
export interface EndpointAmino {
    kind?: Endpoint_Kind;
}
export interface EndpointAminoMsg {
    type: "/akash.base.v1beta1.Endpoint";
    value: EndpointAmino;
}
/** Endpoint describes a publicly accessible IP service */
export interface EndpointSDKType {
    kind: Endpoint_Kind;
}
export declare const Endpoint: {
    typeUrl: string;
    encode(message: Endpoint, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Endpoint;
    fromPartial(object: Partial<Endpoint>): Endpoint;
    fromAmino(object: EndpointAmino): Endpoint;
    toAmino(message: Endpoint): EndpointAmino;
    fromAminoMsg(object: EndpointAminoMsg): Endpoint;
    fromProtoMsg(message: EndpointProtoMsg): Endpoint;
    toProto(message: Endpoint): Uint8Array;
    toProtoMsg(message: Endpoint): EndpointProtoMsg;
};
