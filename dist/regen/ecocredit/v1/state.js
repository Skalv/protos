"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchOrigTx = exports.BatchSupply = exports.BatchBalance = exports.BatchSequence = exports.ProjectSequence = exports.ClassSequence = exports.Batch = exports.Project = exports.ClassIssuer = exports.Class = exports.CreditType = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseCreditType() {
    return {
        abbreviation: "",
        name: "",
        unit: "",
        precision: 0
    };
}
exports.CreditType = {
    typeUrl: "/regen.ecocredit.v1.CreditType",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.abbreviation !== "") {
            writer.uint32(10).string(message.abbreviation);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.unit !== "") {
            writer.uint32(26).string(message.unit);
        }
        if (message.precision !== 0) {
            writer.uint32(32).uint32(message.precision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreditType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.abbreviation = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.unit = reader.string();
                    break;
                case 4:
                    message.precision = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseCreditType();
        message.abbreviation = object.abbreviation ?? "";
        message.name = object.name ?? "";
        message.unit = object.unit ?? "";
        message.precision = object.precision ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCreditType();
        if (object.abbreviation !== undefined && object.abbreviation !== null) {
            message.abbreviation = object.abbreviation;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.unit !== undefined && object.unit !== null) {
            message.unit = object.unit;
        }
        if (object.precision !== undefined && object.precision !== null) {
            message.precision = object.precision;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.abbreviation = message.abbreviation === "" ? undefined : message.abbreviation;
        obj.name = message.name === "" ? undefined : message.name;
        obj.unit = message.unit === "" ? undefined : message.unit;
        obj.precision = message.precision === 0 ? undefined : message.precision;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CreditType.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CreditType.decode(message.value);
    },
    toProto(message) {
        return exports.CreditType.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.CreditType",
            value: exports.CreditType.encode(message).finish()
        };
    }
};
function createBaseClass() {
    return {
        key: BigInt(0),
        id: "",
        admin: new Uint8Array(),
        metadata: "",
        creditTypeAbbrev: ""
    };
}
exports.Class = {
    typeUrl: "/regen.ecocredit.v1.Class",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key !== BigInt(0)) {
            writer.uint32(8).uint64(message.key);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.admin.length !== 0) {
            writer.uint32(26).bytes(message.admin);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.creditTypeAbbrev !== "") {
            writer.uint32(42).string(message.creditTypeAbbrev);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.uint64();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.admin = reader.bytes();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.creditTypeAbbrev = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClass();
        message.key = object.key !== undefined && object.key !== null ? BigInt(object.key.toString()) : BigInt(0);
        message.id = object.id ?? "";
        message.admin = object.admin ?? new Uint8Array();
        message.metadata = object.metadata ?? "";
        message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseClass();
        if (object.key !== undefined && object.key !== null) {
            message.key = BigInt(object.key);
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = (0, helpers_1.bytesFromBase64)(object.admin);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
            message.creditTypeAbbrev = object.credit_type_abbrev;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key !== BigInt(0) ? (message.key?.toString)() : undefined;
        obj.id = message.id === "" ? undefined : message.id;
        obj.admin = message.admin ? (0, helpers_1.base64FromBytes)(message.admin) : undefined;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Class.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Class.decode(message.value);
    },
    toProto(message) {
        return exports.Class.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Class",
            value: exports.Class.encode(message).finish()
        };
    }
};
function createBaseClassIssuer() {
    return {
        classKey: BigInt(0),
        issuer: new Uint8Array()
    };
}
exports.ClassIssuer = {
    typeUrl: "/regen.ecocredit.v1.ClassIssuer",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classKey !== BigInt(0)) {
            writer.uint32(8).uint64(message.classKey);
        }
        if (message.issuer.length !== 0) {
            writer.uint32(18).bytes(message.issuer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClassIssuer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classKey = reader.uint64();
                    break;
                case 2:
                    message.issuer = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClassIssuer();
        message.classKey = object.classKey !== undefined && object.classKey !== null ? BigInt(object.classKey.toString()) : BigInt(0);
        message.issuer = object.issuer ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseClassIssuer();
        if (object.class_key !== undefined && object.class_key !== null) {
            message.classKey = BigInt(object.class_key);
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = (0, helpers_1.bytesFromBase64)(object.issuer);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_key = message.classKey !== BigInt(0) ? (message.classKey?.toString)() : undefined;
        obj.issuer = message.issuer ? (0, helpers_1.base64FromBytes)(message.issuer) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClassIssuer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ClassIssuer.decode(message.value);
    },
    toProto(message) {
        return exports.ClassIssuer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.ClassIssuer",
            value: exports.ClassIssuer.encode(message).finish()
        };
    }
};
function createBaseProject() {
    return {
        key: BigInt(0),
        id: "",
        admin: new Uint8Array(),
        classKey: BigInt(0),
        jurisdiction: "",
        metadata: "",
        referenceId: ""
    };
}
exports.Project = {
    typeUrl: "/regen.ecocredit.v1.Project",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key !== BigInt(0)) {
            writer.uint32(8).uint64(message.key);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.admin.length !== 0) {
            writer.uint32(26).bytes(message.admin);
        }
        if (message.classKey !== BigInt(0)) {
            writer.uint32(32).uint64(message.classKey);
        }
        if (message.jurisdiction !== "") {
            writer.uint32(42).string(message.jurisdiction);
        }
        if (message.metadata !== "") {
            writer.uint32(50).string(message.metadata);
        }
        if (message.referenceId !== "") {
            writer.uint32(58).string(message.referenceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.uint64();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.admin = reader.bytes();
                    break;
                case 4:
                    message.classKey = reader.uint64();
                    break;
                case 5:
                    message.jurisdiction = reader.string();
                    break;
                case 6:
                    message.metadata = reader.string();
                    break;
                case 7:
                    message.referenceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProject();
        message.key = object.key !== undefined && object.key !== null ? BigInt(object.key.toString()) : BigInt(0);
        message.id = object.id ?? "";
        message.admin = object.admin ?? new Uint8Array();
        message.classKey = object.classKey !== undefined && object.classKey !== null ? BigInt(object.classKey.toString()) : BigInt(0);
        message.jurisdiction = object.jurisdiction ?? "";
        message.metadata = object.metadata ?? "";
        message.referenceId = object.referenceId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseProject();
        if (object.key !== undefined && object.key !== null) {
            message.key = BigInt(object.key);
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = (0, helpers_1.bytesFromBase64)(object.admin);
        }
        if (object.class_key !== undefined && object.class_key !== null) {
            message.classKey = BigInt(object.class_key);
        }
        if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
            message.jurisdiction = object.jurisdiction;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.reference_id !== undefined && object.reference_id !== null) {
            message.referenceId = object.reference_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key !== BigInt(0) ? (message.key?.toString)() : undefined;
        obj.id = message.id === "" ? undefined : message.id;
        obj.admin = message.admin ? (0, helpers_1.base64FromBytes)(message.admin) : undefined;
        obj.class_key = message.classKey !== BigInt(0) ? (message.classKey?.toString)() : undefined;
        obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.reference_id = message.referenceId === "" ? undefined : message.referenceId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Project.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Project.decode(message.value);
    },
    toProto(message) {
        return exports.Project.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Project",
            value: exports.Project.encode(message).finish()
        };
    }
};
function createBaseBatch() {
    return {
        key: BigInt(0),
        issuer: new Uint8Array(),
        projectKey: BigInt(0),
        denom: "",
        metadata: "",
        startDate: undefined,
        endDate: undefined,
        issuanceDate: undefined,
        open: false
    };
}
exports.Batch = {
    typeUrl: "/regen.ecocredit.v1.Batch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key !== BigInt(0)) {
            writer.uint32(8).uint64(message.key);
        }
        if (message.issuer.length !== 0) {
            writer.uint32(18).bytes(message.issuer);
        }
        if (message.projectKey !== BigInt(0)) {
            writer.uint32(24).uint64(message.projectKey);
        }
        if (message.denom !== "") {
            writer.uint32(34).string(message.denom);
        }
        if (message.metadata !== "") {
            writer.uint32(42).string(message.metadata);
        }
        if (message.startDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endDate), writer.uint32(58).fork()).ldelim();
        }
        if (message.issuanceDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.issuanceDate), writer.uint32(66).fork()).ldelim();
        }
        if (message.open === true) {
            writer.uint32(72).bool(message.open);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.uint64();
                    break;
                case 2:
                    message.issuer = reader.bytes();
                    break;
                case 3:
                    message.projectKey = reader.uint64();
                    break;
                case 4:
                    message.denom = reader.string();
                    break;
                case 5:
                    message.metadata = reader.string();
                    break;
                case 6:
                    message.startDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.endDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.issuanceDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.open = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatch();
        message.key = object.key !== undefined && object.key !== null ? BigInt(object.key.toString()) : BigInt(0);
        message.issuer = object.issuer ?? new Uint8Array();
        message.projectKey = object.projectKey !== undefined && object.projectKey !== null ? BigInt(object.projectKey.toString()) : BigInt(0);
        message.denom = object.denom ?? "";
        message.metadata = object.metadata ?? "";
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.issuanceDate = object.issuanceDate ?? undefined;
        message.open = object.open ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatch();
        if (object.key !== undefined && object.key !== null) {
            message.key = BigInt(object.key);
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = (0, helpers_1.bytesFromBase64)(object.issuer);
        }
        if (object.project_key !== undefined && object.project_key !== null) {
            message.projectKey = BigInt(object.project_key);
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_date));
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_date));
        }
        if (object.issuance_date !== undefined && object.issuance_date !== null) {
            message.issuanceDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.issuance_date));
        }
        if (object.open !== undefined && object.open !== null) {
            message.open = object.open;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key !== BigInt(0) ? (message.key?.toString)() : undefined;
        obj.issuer = message.issuer ? (0, helpers_1.base64FromBytes)(message.issuer) : undefined;
        obj.project_key = message.projectKey !== BigInt(0) ? (message.projectKey?.toString)() : undefined;
        obj.denom = message.denom === "" ? undefined : message.denom;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.start_date = message.startDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startDate)) : undefined;
        obj.end_date = message.endDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endDate)) : undefined;
        obj.issuance_date = message.issuanceDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.issuanceDate)) : undefined;
        obj.open = message.open === false ? undefined : message.open;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Batch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Batch.decode(message.value);
    },
    toProto(message) {
        return exports.Batch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.Batch",
            value: exports.Batch.encode(message).finish()
        };
    }
};
function createBaseClassSequence() {
    return {
        creditTypeAbbrev: "",
        nextSequence: BigInt(0)
    };
}
exports.ClassSequence = {
    typeUrl: "/regen.ecocredit.v1.ClassSequence",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creditTypeAbbrev !== "") {
            writer.uint32(10).string(message.creditTypeAbbrev);
        }
        if (message.nextSequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClassSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creditTypeAbbrev = reader.string();
                    break;
                case 2:
                    message.nextSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseClassSequence();
        message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
        message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? BigInt(object.nextSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseClassSequence();
        if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
            message.creditTypeAbbrev = object.credit_type_abbrev;
        }
        if (object.next_sequence !== undefined && object.next_sequence !== null) {
            message.nextSequence = BigInt(object.next_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
        obj.next_sequence = message.nextSequence !== BigInt(0) ? (message.nextSequence?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClassSequence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ClassSequence.decode(message.value);
    },
    toProto(message) {
        return exports.ClassSequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.ClassSequence",
            value: exports.ClassSequence.encode(message).finish()
        };
    }
};
function createBaseProjectSequence() {
    return {
        classKey: BigInt(0),
        nextSequence: BigInt(0)
    };
}
exports.ProjectSequence = {
    typeUrl: "/regen.ecocredit.v1.ProjectSequence",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classKey !== BigInt(0)) {
            writer.uint32(8).uint64(message.classKey);
        }
        if (message.nextSequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classKey = reader.uint64();
                    break;
                case 2:
                    message.nextSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProjectSequence();
        message.classKey = object.classKey !== undefined && object.classKey !== null ? BigInt(object.classKey.toString()) : BigInt(0);
        message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? BigInt(object.nextSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseProjectSequence();
        if (object.class_key !== undefined && object.class_key !== null) {
            message.classKey = BigInt(object.class_key);
        }
        if (object.next_sequence !== undefined && object.next_sequence !== null) {
            message.nextSequence = BigInt(object.next_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_key = message.classKey !== BigInt(0) ? (message.classKey?.toString)() : undefined;
        obj.next_sequence = message.nextSequence !== BigInt(0) ? (message.nextSequence?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProjectSequence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProjectSequence.decode(message.value);
    },
    toProto(message) {
        return exports.ProjectSequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.ProjectSequence",
            value: exports.ProjectSequence.encode(message).finish()
        };
    }
};
function createBaseBatchSequence() {
    return {
        projectKey: BigInt(0),
        nextSequence: BigInt(0)
    };
}
exports.BatchSequence = {
    typeUrl: "/regen.ecocredit.v1.BatchSequence",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.projectKey !== BigInt(0)) {
            writer.uint32(8).uint64(message.projectKey);
        }
        if (message.nextSequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectKey = reader.uint64();
                    break;
                case 2:
                    message.nextSequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchSequence();
        message.projectKey = object.projectKey !== undefined && object.projectKey !== null ? BigInt(object.projectKey.toString()) : BigInt(0);
        message.nextSequence = object.nextSequence !== undefined && object.nextSequence !== null ? BigInt(object.nextSequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchSequence();
        if (object.project_key !== undefined && object.project_key !== null) {
            message.projectKey = BigInt(object.project_key);
        }
        if (object.next_sequence !== undefined && object.next_sequence !== null) {
            message.nextSequence = BigInt(object.next_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project_key = message.projectKey !== BigInt(0) ? (message.projectKey?.toString)() : undefined;
        obj.next_sequence = message.nextSequence !== BigInt(0) ? (message.nextSequence?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchSequence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchSequence.decode(message.value);
    },
    toProto(message) {
        return exports.BatchSequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchSequence",
            value: exports.BatchSequence.encode(message).finish()
        };
    }
};
function createBaseBatchBalance() {
    return {
        batchKey: BigInt(0),
        address: new Uint8Array(),
        tradable: "",
        retired: "",
        escrowed: ""
    };
}
exports.BatchBalance = {
    typeUrl: "/regen.ecocredit.v1.BatchBalance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchKey !== BigInt(0)) {
            writer.uint32(8).uint64(message.batchKey);
        }
        if (message.address.length !== 0) {
            writer.uint32(18).bytes(message.address);
        }
        if (message.tradable !== "") {
            writer.uint32(26).string(message.tradable);
        }
        if (message.retired !== "") {
            writer.uint32(34).string(message.retired);
        }
        if (message.escrowed !== "") {
            writer.uint32(42).string(message.escrowed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchKey = reader.uint64();
                    break;
                case 2:
                    message.address = reader.bytes();
                    break;
                case 3:
                    message.tradable = reader.string();
                    break;
                case 4:
                    message.retired = reader.string();
                    break;
                case 5:
                    message.escrowed = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchBalance();
        message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? BigInt(object.batchKey.toString()) : BigInt(0);
        message.address = object.address ?? new Uint8Array();
        message.tradable = object.tradable ?? "";
        message.retired = object.retired ?? "";
        message.escrowed = object.escrowed ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchBalance();
        if (object.batch_key !== undefined && object.batch_key !== null) {
            message.batchKey = BigInt(object.batch_key);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = (0, helpers_1.bytesFromBase64)(object.address);
        }
        if (object.tradable !== undefined && object.tradable !== null) {
            message.tradable = object.tradable;
        }
        if (object.retired !== undefined && object.retired !== null) {
            message.retired = object.retired;
        }
        if (object.escrowed !== undefined && object.escrowed !== null) {
            message.escrowed = object.escrowed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_key = message.batchKey !== BigInt(0) ? (message.batchKey?.toString)() : undefined;
        obj.address = message.address ? (0, helpers_1.base64FromBytes)(message.address) : undefined;
        obj.tradable = message.tradable === "" ? undefined : message.tradable;
        obj.retired = message.retired === "" ? undefined : message.retired;
        obj.escrowed = message.escrowed === "" ? undefined : message.escrowed;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchBalance.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchBalance.decode(message.value);
    },
    toProto(message) {
        return exports.BatchBalance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchBalance",
            value: exports.BatchBalance.encode(message).finish()
        };
    }
};
function createBaseBatchSupply() {
    return {
        batchKey: BigInt(0),
        tradableAmount: "",
        retiredAmount: "",
        cancelledAmount: ""
    };
}
exports.BatchSupply = {
    typeUrl: "/regen.ecocredit.v1.BatchSupply",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchKey !== BigInt(0)) {
            writer.uint32(8).uint64(message.batchKey);
        }
        if (message.tradableAmount !== "") {
            writer.uint32(18).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(26).string(message.retiredAmount);
        }
        if (message.cancelledAmount !== "") {
            writer.uint32(34).string(message.cancelledAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchSupply();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchKey = reader.uint64();
                    break;
                case 2:
                    message.tradableAmount = reader.string();
                    break;
                case 3:
                    message.retiredAmount = reader.string();
                    break;
                case 4:
                    message.cancelledAmount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchSupply();
        message.batchKey = object.batchKey !== undefined && object.batchKey !== null ? BigInt(object.batchKey.toString()) : BigInt(0);
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        message.cancelledAmount = object.cancelledAmount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchSupply();
        if (object.batch_key !== undefined && object.batch_key !== null) {
            message.batchKey = BigInt(object.batch_key);
        }
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        if (object.cancelled_amount !== undefined && object.cancelled_amount !== null) {
            message.cancelledAmount = object.cancelled_amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_key = message.batchKey !== BigInt(0) ? (message.batchKey?.toString)() : undefined;
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        obj.cancelled_amount = message.cancelledAmount === "" ? undefined : message.cancelledAmount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchSupply.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchSupply.decode(message.value);
    },
    toProto(message) {
        return exports.BatchSupply.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchSupply",
            value: exports.BatchSupply.encode(message).finish()
        };
    }
};
function createBaseBatchOrigTx() {
    return {
        txId: "",
        typ: "",
        note: "",
        batchDenom: ""
    };
}
exports.BatchOrigTx = {
    typeUrl: "/regen.ecocredit.v1.BatchOrigTx",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.txId !== "") {
            writer.uint32(10).string(message.txId);
        }
        if (message.typ !== "") {
            writer.uint32(18).string(message.typ);
        }
        if (message.note !== "") {
            writer.uint32(26).string(message.note);
        }
        if (message.batchDenom !== "") {
            writer.uint32(34).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchOrigTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txId = reader.string();
                    break;
                case 2:
                    message.typ = reader.string();
                    break;
                case 3:
                    message.note = reader.string();
                    break;
                case 4:
                    message.batchDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchOrigTx();
        message.txId = object.txId ?? "";
        message.typ = object.typ ?? "";
        message.note = object.note ?? "";
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchOrigTx();
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = object.tx_id;
        }
        if (object.typ !== undefined && object.typ !== null) {
            message.typ = object.typ;
        }
        if (object.note !== undefined && object.note !== null) {
            message.note = object.note;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_id = message.txId === "" ? undefined : message.txId;
        obj.typ = message.typ === "" ? undefined : message.typ;
        obj.note = message.note === "" ? undefined : message.note;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchOrigTx.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchOrigTx.decode(message.value);
    },
    toProto(message) {
        return exports.BatchOrigTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchOrigTx",
            value: exports.BatchOrigTx.encode(message).finish()
        };
    }
};
