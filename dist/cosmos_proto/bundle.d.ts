import * as _80 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _80.ScalarType;
    scalarTypeToJSON(object: _80.ScalarType): string;
    ScalarType: typeof _80.ScalarType;
    ScalarTypeSDKType: typeof _80.ScalarType;
    ScalarTypeAmino: typeof _80.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _80.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.InterfaceDescriptor;
        fromPartial(object: Partial<_80.InterfaceDescriptor>): _80.InterfaceDescriptor;
        fromAmino(object: _80.InterfaceDescriptorAmino): _80.InterfaceDescriptor;
        toAmino(message: _80.InterfaceDescriptor): _80.InterfaceDescriptorAmino;
        fromAminoMsg(object: _80.InterfaceDescriptorAminoMsg): _80.InterfaceDescriptor;
        fromProtoMsg(message: _80.InterfaceDescriptorProtoMsg): _80.InterfaceDescriptor;
        toProto(message: _80.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _80.InterfaceDescriptor): _80.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _80.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.ScalarDescriptor;
        fromPartial(object: Partial<_80.ScalarDescriptor>): _80.ScalarDescriptor;
        fromAmino(object: _80.ScalarDescriptorAmino): _80.ScalarDescriptor;
        toAmino(message: _80.ScalarDescriptor): _80.ScalarDescriptorAmino;
        fromAminoMsg(object: _80.ScalarDescriptorAminoMsg): _80.ScalarDescriptor;
        fromProtoMsg(message: _80.ScalarDescriptorProtoMsg): _80.ScalarDescriptor;
        toProto(message: _80.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _80.ScalarDescriptor): _80.ScalarDescriptorProtoMsg;
    };
};
