import { BinaryReader, BinaryWriter } from "../../../binary";
export interface EventAddPair {
    id: bigint;
}
export interface EventAddPairProtoMsg {
    typeUrl: "/comdex.asset.v1beta1.EventAddPair";
    value: Uint8Array;
}
export interface EventAddPairAmino {
    id?: string;
}
export interface EventAddPairAminoMsg {
    type: "/comdex.asset.v1beta1.EventAddPair";
    value: EventAddPairAmino;
}
export interface EventAddPairSDKType {
    id: bigint;
}
export declare const EventAddPair: {
    typeUrl: string;
    encode(message: EventAddPair, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventAddPair;
    fromPartial(object: Partial<EventAddPair>): EventAddPair;
    fromAmino(object: EventAddPairAmino): EventAddPair;
    toAmino(message: EventAddPair): EventAddPairAmino;
    fromAminoMsg(object: EventAddPairAminoMsg): EventAddPair;
    fromProtoMsg(message: EventAddPairProtoMsg): EventAddPair;
    toProto(message: EventAddPair): Uint8Array;
    toProtoMsg(message: EventAddPair): EventAddPairProtoMsg;
};
