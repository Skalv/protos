import * as _151 from "./protobuf/any";
import * as _152 from "./protobuf/descriptor";
import * as _153 from "./protobuf/duration";
import * as _154 from "./protobuf/empty";
import * as _155 from "./protobuf/timestamp";
export declare namespace google {
    const protobuf: {
        Timestamp: {
            typeUrl: string;
            encode(message: _155.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _155.Timestamp;
            fromPartial(object: Partial<_155.Timestamp>): _155.Timestamp;
            fromAmino(object: _155.TimestampAmino): _155.Timestamp;
            toAmino(message: _155.Timestamp): _155.TimestampAmino;
            fromAminoMsg(object: _155.TimestampAminoMsg): _155.Timestamp;
            fromProtoMsg(message: _155.TimestampProtoMsg): _155.Timestamp;
            toProto(message: _155.Timestamp): Uint8Array;
            toProtoMsg(message: _155.Timestamp): _155.TimestampProtoMsg;
        };
        Empty: {
            typeUrl: string;
            encode(_: _154.Empty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _154.Empty;
            fromPartial(_: Partial<_154.Empty>): _154.Empty;
            fromAmino(_: _154.EmptyAmino): _154.Empty;
            toAmino(_: _154.Empty): _154.EmptyAmino;
            fromAminoMsg(object: _154.EmptyAminoMsg): _154.Empty;
            fromProtoMsg(message: _154.EmptyProtoMsg): _154.Empty;
            toProto(message: _154.Empty): Uint8Array;
            toProtoMsg(message: _154.Empty): _154.EmptyProtoMsg;
        };
        Duration: {
            typeUrl: string;
            encode(message: _153.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _153.Duration;
            fromPartial(object: Partial<_153.Duration>): _153.Duration;
            fromAmino(object: _153.DurationAmino): _153.Duration;
            toAmino(message: _153.Duration): _153.DurationAmino;
            fromAminoMsg(object: _153.DurationAminoMsg): _153.Duration;
            fromProtoMsg(message: _153.DurationProtoMsg): _153.Duration;
            toProto(message: _153.Duration): Uint8Array;
            toProtoMsg(message: _153.Duration): _153.DurationProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _152.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _152.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _152.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _152.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _152.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _152.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _152.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _152.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _152.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _152.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _152.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _152.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _152.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _152.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _152.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _152.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _152.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _152.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _152.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _152.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _152.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _152.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _152.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _152.FieldOptions_CType;
        FieldOptions_JSType: typeof _152.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _152.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _152.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _152.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _152.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _152.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            encode(message: _152.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.FileDescriptorSet;
            fromPartial(object: Partial<_152.FileDescriptorSet>): _152.FileDescriptorSet;
            fromAmino(object: _152.FileDescriptorSetAmino): _152.FileDescriptorSet;
            toAmino(message: _152.FileDescriptorSet): _152.FileDescriptorSetAmino;
            fromAminoMsg(object: _152.FileDescriptorSetAminoMsg): _152.FileDescriptorSet;
            fromProtoMsg(message: _152.FileDescriptorSetProtoMsg): _152.FileDescriptorSet;
            toProto(message: _152.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _152.FileDescriptorSet): _152.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            encode(message: _152.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.FileDescriptorProto;
            fromPartial(object: Partial<_152.FileDescriptorProto>): _152.FileDescriptorProto;
            fromAmino(object: _152.FileDescriptorProtoAmino): _152.FileDescriptorProto;
            toAmino(message: _152.FileDescriptorProto): _152.FileDescriptorProtoAmino;
            fromAminoMsg(object: _152.FileDescriptorProtoAminoMsg): _152.FileDescriptorProto;
            fromProtoMsg(message: _152.FileDescriptorProtoProtoMsg): _152.FileDescriptorProto;
            toProto(message: _152.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _152.FileDescriptorProto): _152.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            encode(message: _152.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.DescriptorProto;
            fromPartial(object: Partial<_152.DescriptorProto>): _152.DescriptorProto;
            fromAmino(object: _152.DescriptorProtoAmino): _152.DescriptorProto;
            toAmino(message: _152.DescriptorProto): _152.DescriptorProtoAmino;
            fromAminoMsg(object: _152.DescriptorProtoAminoMsg): _152.DescriptorProto;
            fromProtoMsg(message: _152.DescriptorProtoProtoMsg): _152.DescriptorProto;
            toProto(message: _152.DescriptorProto): Uint8Array;
            toProtoMsg(message: _152.DescriptorProto): _152.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            encode(message: _152.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.DescriptorProto_ExtensionRange;
            fromPartial(object: Partial<_152.DescriptorProto_ExtensionRange>): _152.DescriptorProto_ExtensionRange;
            fromAmino(object: _152.DescriptorProto_ExtensionRangeAmino): _152.DescriptorProto_ExtensionRange;
            toAmino(message: _152.DescriptorProto_ExtensionRange): _152.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _152.DescriptorProto_ExtensionRangeAminoMsg): _152.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _152.DescriptorProto_ExtensionRangeProtoMsg): _152.DescriptorProto_ExtensionRange;
            toProto(message: _152.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _152.DescriptorProto_ExtensionRange): _152.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            encode(message: _152.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.DescriptorProto_ReservedRange;
            fromPartial(object: Partial<_152.DescriptorProto_ReservedRange>): _152.DescriptorProto_ReservedRange;
            fromAmino(object: _152.DescriptorProto_ReservedRangeAmino): _152.DescriptorProto_ReservedRange;
            toAmino(message: _152.DescriptorProto_ReservedRange): _152.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _152.DescriptorProto_ReservedRangeAminoMsg): _152.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _152.DescriptorProto_ReservedRangeProtoMsg): _152.DescriptorProto_ReservedRange;
            toProto(message: _152.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _152.DescriptorProto_ReservedRange): _152.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            encode(message: _152.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.ExtensionRangeOptions;
            fromPartial(object: Partial<_152.ExtensionRangeOptions>): _152.ExtensionRangeOptions;
            fromAmino(object: _152.ExtensionRangeOptionsAmino): _152.ExtensionRangeOptions;
            toAmino(message: _152.ExtensionRangeOptions): _152.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _152.ExtensionRangeOptionsAminoMsg): _152.ExtensionRangeOptions;
            fromProtoMsg(message: _152.ExtensionRangeOptionsProtoMsg): _152.ExtensionRangeOptions;
            toProto(message: _152.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _152.ExtensionRangeOptions): _152.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            encode(message: _152.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.FieldDescriptorProto;
            fromPartial(object: Partial<_152.FieldDescriptorProto>): _152.FieldDescriptorProto;
            fromAmino(object: _152.FieldDescriptorProtoAmino): _152.FieldDescriptorProto;
            toAmino(message: _152.FieldDescriptorProto): _152.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _152.FieldDescriptorProtoAminoMsg): _152.FieldDescriptorProto;
            fromProtoMsg(message: _152.FieldDescriptorProtoProtoMsg): _152.FieldDescriptorProto;
            toProto(message: _152.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _152.FieldDescriptorProto): _152.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            encode(message: _152.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.OneofDescriptorProto;
            fromPartial(object: Partial<_152.OneofDescriptorProto>): _152.OneofDescriptorProto;
            fromAmino(object: _152.OneofDescriptorProtoAmino): _152.OneofDescriptorProto;
            toAmino(message: _152.OneofDescriptorProto): _152.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _152.OneofDescriptorProtoAminoMsg): _152.OneofDescriptorProto;
            fromProtoMsg(message: _152.OneofDescriptorProtoProtoMsg): _152.OneofDescriptorProto;
            toProto(message: _152.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _152.OneofDescriptorProto): _152.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            encode(message: _152.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.EnumDescriptorProto;
            fromPartial(object: Partial<_152.EnumDescriptorProto>): _152.EnumDescriptorProto;
            fromAmino(object: _152.EnumDescriptorProtoAmino): _152.EnumDescriptorProto;
            toAmino(message: _152.EnumDescriptorProto): _152.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _152.EnumDescriptorProtoAminoMsg): _152.EnumDescriptorProto;
            fromProtoMsg(message: _152.EnumDescriptorProtoProtoMsg): _152.EnumDescriptorProto;
            toProto(message: _152.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _152.EnumDescriptorProto): _152.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            encode(message: _152.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: Partial<_152.EnumDescriptorProto_EnumReservedRange>): _152.EnumDescriptorProto_EnumReservedRange;
            fromAmino(object: _152.EnumDescriptorProto_EnumReservedRangeAmino): _152.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _152.EnumDescriptorProto_EnumReservedRange): _152.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _152.EnumDescriptorProto_EnumReservedRangeAminoMsg): _152.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _152.EnumDescriptorProto_EnumReservedRangeProtoMsg): _152.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _152.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _152.EnumDescriptorProto_EnumReservedRange): _152.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            encode(message: _152.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.EnumValueDescriptorProto;
            fromPartial(object: Partial<_152.EnumValueDescriptorProto>): _152.EnumValueDescriptorProto;
            fromAmino(object: _152.EnumValueDescriptorProtoAmino): _152.EnumValueDescriptorProto;
            toAmino(message: _152.EnumValueDescriptorProto): _152.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _152.EnumValueDescriptorProtoAminoMsg): _152.EnumValueDescriptorProto;
            fromProtoMsg(message: _152.EnumValueDescriptorProtoProtoMsg): _152.EnumValueDescriptorProto;
            toProto(message: _152.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _152.EnumValueDescriptorProto): _152.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            encode(message: _152.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.ServiceDescriptorProto;
            fromPartial(object: Partial<_152.ServiceDescriptorProto>): _152.ServiceDescriptorProto;
            fromAmino(object: _152.ServiceDescriptorProtoAmino): _152.ServiceDescriptorProto;
            toAmino(message: _152.ServiceDescriptorProto): _152.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _152.ServiceDescriptorProtoAminoMsg): _152.ServiceDescriptorProto;
            fromProtoMsg(message: _152.ServiceDescriptorProtoProtoMsg): _152.ServiceDescriptorProto;
            toProto(message: _152.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _152.ServiceDescriptorProto): _152.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            encode(message: _152.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.MethodDescriptorProto;
            fromPartial(object: Partial<_152.MethodDescriptorProto>): _152.MethodDescriptorProto;
            fromAmino(object: _152.MethodDescriptorProtoAmino): _152.MethodDescriptorProto;
            toAmino(message: _152.MethodDescriptorProto): _152.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _152.MethodDescriptorProtoAminoMsg): _152.MethodDescriptorProto;
            fromProtoMsg(message: _152.MethodDescriptorProtoProtoMsg): _152.MethodDescriptorProto;
            toProto(message: _152.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _152.MethodDescriptorProto): _152.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            encode(message: _152.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.FileOptions;
            fromPartial(object: Partial<_152.FileOptions>): _152.FileOptions;
            fromAmino(object: _152.FileOptionsAmino): _152.FileOptions;
            toAmino(message: _152.FileOptions): _152.FileOptionsAmino;
            fromAminoMsg(object: _152.FileOptionsAminoMsg): _152.FileOptions;
            fromProtoMsg(message: _152.FileOptionsProtoMsg): _152.FileOptions;
            toProto(message: _152.FileOptions): Uint8Array;
            toProtoMsg(message: _152.FileOptions): _152.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            encode(message: _152.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.MessageOptions;
            fromPartial(object: Partial<_152.MessageOptions>): _152.MessageOptions;
            fromAmino(object: _152.MessageOptionsAmino): _152.MessageOptions;
            toAmino(message: _152.MessageOptions): _152.MessageOptionsAmino;
            fromAminoMsg(object: _152.MessageOptionsAminoMsg): _152.MessageOptions;
            fromProtoMsg(message: _152.MessageOptionsProtoMsg): _152.MessageOptions;
            toProto(message: _152.MessageOptions): Uint8Array;
            toProtoMsg(message: _152.MessageOptions): _152.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            encode(message: _152.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.FieldOptions;
            fromPartial(object: Partial<_152.FieldOptions>): _152.FieldOptions;
            fromAmino(object: _152.FieldOptionsAmino): _152.FieldOptions;
            toAmino(message: _152.FieldOptions): _152.FieldOptionsAmino;
            fromAminoMsg(object: _152.FieldOptionsAminoMsg): _152.FieldOptions;
            fromProtoMsg(message: _152.FieldOptionsProtoMsg): _152.FieldOptions;
            toProto(message: _152.FieldOptions): Uint8Array;
            toProtoMsg(message: _152.FieldOptions): _152.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            encode(message: _152.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.OneofOptions;
            fromPartial(object: Partial<_152.OneofOptions>): _152.OneofOptions;
            fromAmino(object: _152.OneofOptionsAmino): _152.OneofOptions;
            toAmino(message: _152.OneofOptions): _152.OneofOptionsAmino;
            fromAminoMsg(object: _152.OneofOptionsAminoMsg): _152.OneofOptions;
            fromProtoMsg(message: _152.OneofOptionsProtoMsg): _152.OneofOptions;
            toProto(message: _152.OneofOptions): Uint8Array;
            toProtoMsg(message: _152.OneofOptions): _152.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            encode(message: _152.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.EnumOptions;
            fromPartial(object: Partial<_152.EnumOptions>): _152.EnumOptions;
            fromAmino(object: _152.EnumOptionsAmino): _152.EnumOptions;
            toAmino(message: _152.EnumOptions): _152.EnumOptionsAmino;
            fromAminoMsg(object: _152.EnumOptionsAminoMsg): _152.EnumOptions;
            fromProtoMsg(message: _152.EnumOptionsProtoMsg): _152.EnumOptions;
            toProto(message: _152.EnumOptions): Uint8Array;
            toProtoMsg(message: _152.EnumOptions): _152.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            encode(message: _152.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.EnumValueOptions;
            fromPartial(object: Partial<_152.EnumValueOptions>): _152.EnumValueOptions;
            fromAmino(object: _152.EnumValueOptionsAmino): _152.EnumValueOptions;
            toAmino(message: _152.EnumValueOptions): _152.EnumValueOptionsAmino;
            fromAminoMsg(object: _152.EnumValueOptionsAminoMsg): _152.EnumValueOptions;
            fromProtoMsg(message: _152.EnumValueOptionsProtoMsg): _152.EnumValueOptions;
            toProto(message: _152.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _152.EnumValueOptions): _152.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            encode(message: _152.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.ServiceOptions;
            fromPartial(object: Partial<_152.ServiceOptions>): _152.ServiceOptions;
            fromAmino(object: _152.ServiceOptionsAmino): _152.ServiceOptions;
            toAmino(message: _152.ServiceOptions): _152.ServiceOptionsAmino;
            fromAminoMsg(object: _152.ServiceOptionsAminoMsg): _152.ServiceOptions;
            fromProtoMsg(message: _152.ServiceOptionsProtoMsg): _152.ServiceOptions;
            toProto(message: _152.ServiceOptions): Uint8Array;
            toProtoMsg(message: _152.ServiceOptions): _152.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            encode(message: _152.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.MethodOptions;
            fromPartial(object: Partial<_152.MethodOptions>): _152.MethodOptions;
            fromAmino(object: _152.MethodOptionsAmino): _152.MethodOptions;
            toAmino(message: _152.MethodOptions): _152.MethodOptionsAmino;
            fromAminoMsg(object: _152.MethodOptionsAminoMsg): _152.MethodOptions;
            fromProtoMsg(message: _152.MethodOptionsProtoMsg): _152.MethodOptions;
            toProto(message: _152.MethodOptions): Uint8Array;
            toProtoMsg(message: _152.MethodOptions): _152.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            encode(message: _152.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.UninterpretedOption;
            fromPartial(object: Partial<_152.UninterpretedOption>): _152.UninterpretedOption;
            fromAmino(object: _152.UninterpretedOptionAmino): _152.UninterpretedOption;
            toAmino(message: _152.UninterpretedOption): _152.UninterpretedOptionAmino;
            fromAminoMsg(object: _152.UninterpretedOptionAminoMsg): _152.UninterpretedOption;
            fromProtoMsg(message: _152.UninterpretedOptionProtoMsg): _152.UninterpretedOption;
            toProto(message: _152.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _152.UninterpretedOption): _152.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            encode(message: _152.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.UninterpretedOption_NamePart;
            fromPartial(object: Partial<_152.UninterpretedOption_NamePart>): _152.UninterpretedOption_NamePart;
            fromAmino(object: _152.UninterpretedOption_NamePartAmino): _152.UninterpretedOption_NamePart;
            toAmino(message: _152.UninterpretedOption_NamePart): _152.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _152.UninterpretedOption_NamePartAminoMsg): _152.UninterpretedOption_NamePart;
            fromProtoMsg(message: _152.UninterpretedOption_NamePartProtoMsg): _152.UninterpretedOption_NamePart;
            toProto(message: _152.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _152.UninterpretedOption_NamePart): _152.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            encode(message: _152.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.SourceCodeInfo;
            fromPartial(object: Partial<_152.SourceCodeInfo>): _152.SourceCodeInfo;
            fromAmino(object: _152.SourceCodeInfoAmino): _152.SourceCodeInfo;
            toAmino(message: _152.SourceCodeInfo): _152.SourceCodeInfoAmino;
            fromAminoMsg(object: _152.SourceCodeInfoAminoMsg): _152.SourceCodeInfo;
            fromProtoMsg(message: _152.SourceCodeInfoProtoMsg): _152.SourceCodeInfo;
            toProto(message: _152.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _152.SourceCodeInfo): _152.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            encode(message: _152.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.SourceCodeInfo_Location;
            fromPartial(object: Partial<_152.SourceCodeInfo_Location>): _152.SourceCodeInfo_Location;
            fromAmino(object: _152.SourceCodeInfo_LocationAmino): _152.SourceCodeInfo_Location;
            toAmino(message: _152.SourceCodeInfo_Location): _152.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _152.SourceCodeInfo_LocationAminoMsg): _152.SourceCodeInfo_Location;
            fromProtoMsg(message: _152.SourceCodeInfo_LocationProtoMsg): _152.SourceCodeInfo_Location;
            toProto(message: _152.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _152.SourceCodeInfo_Location): _152.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            encode(message: _152.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.GeneratedCodeInfo;
            fromPartial(object: Partial<_152.GeneratedCodeInfo>): _152.GeneratedCodeInfo;
            fromAmino(object: _152.GeneratedCodeInfoAmino): _152.GeneratedCodeInfo;
            toAmino(message: _152.GeneratedCodeInfo): _152.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _152.GeneratedCodeInfoAminoMsg): _152.GeneratedCodeInfo;
            fromProtoMsg(message: _152.GeneratedCodeInfoProtoMsg): _152.GeneratedCodeInfo;
            toProto(message: _152.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _152.GeneratedCodeInfo): _152.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            encode(message: _152.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _152.GeneratedCodeInfo_Annotation;
            fromPartial(object: Partial<_152.GeneratedCodeInfo_Annotation>): _152.GeneratedCodeInfo_Annotation;
            fromAmino(object: _152.GeneratedCodeInfo_AnnotationAmino): _152.GeneratedCodeInfo_Annotation;
            toAmino(message: _152.GeneratedCodeInfo_Annotation): _152.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _152.GeneratedCodeInfo_AnnotationAminoMsg): _152.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _152.GeneratedCodeInfo_AnnotationProtoMsg): _152.GeneratedCodeInfo_Annotation;
            toProto(message: _152.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _152.GeneratedCodeInfo_Annotation): _152.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            typeUrl: string;
            encode(message: _151.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: import("..").BinaryReader | Uint8Array, length?: number): _151.Any;
            fromPartial(object: Partial<_151.Any>): _151.Any;
            fromAmino(object: _151.AnyAmino): _151.Any;
            toAmino(message: _151.Any): _151.AnyAmino;
            fromAminoMsg(object: _151.AnyAminoMsg): _151.Any;
            fromProtoMsg(message: _151.AnyProtoMsg): _151.Any;
            toProto(message: _151.Any): Uint8Array;
            toProtoMsg(message: _151.Any): _151.AnyProtoMsg;
        };
    };
}
