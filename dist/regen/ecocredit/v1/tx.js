"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateProjectMetadataResponse = exports.MsgUpdateProjectMetadata = exports.MsgUpdateProjectAdminResponse = exports.MsgUpdateProjectAdmin = exports.MsgUpdateClassMetadataResponse = exports.MsgUpdateClassMetadata = exports.MsgUpdateClassIssuersResponse = exports.MsgUpdateClassIssuers = exports.MsgUpdateClassAdminResponse = exports.MsgUpdateClassAdmin = exports.MsgCancelResponse = exports.MsgCancel_CancelCredits = exports.MsgCancel = exports.MsgRetireResponse = exports.MsgRetire_RetireCredits = exports.MsgRetire = exports.MsgSendResponse = exports.MsgSend_SendCredits = exports.MsgSend = exports.MsgSealBatchResponse = exports.MsgMintBatchCreditsResponse = exports.MsgSealBatch = exports.MsgMintBatchCredits = exports.MsgCreateBatchResponse = exports.BatchIssuance = exports.MsgCreateBatch = exports.MsgCreateProjectResponse = exports.MsgCreateProject = exports.MsgCreateClassResponse = exports.MsgCreateClass = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseMsgCreateClass() {
    return {
        admin: "",
        issuers: [],
        metadata: "",
        creditTypeAbbrev: "",
        fee: undefined
    };
}
exports.MsgCreateClass = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.issuers) {
            writer.uint32(18).string(v);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.creditTypeAbbrev !== "") {
            writer.uint32(34).string(message.creditTypeAbbrev);
        }
        if (message.fee !== undefined) {
            coin_1.Coin.encode(message.fee, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.issuers.push(reader.string());
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.creditTypeAbbrev = reader.string();
                    break;
                case 5:
                    message.fee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateClass();
        message.admin = object.admin ?? "";
        message.issuers = object.issuers?.map(e => e) || [];
        message.metadata = object.metadata ?? "";
        message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
        message.fee = object.fee !== undefined && object.fee !== null ? coin_1.Coin.fromPartial(object.fee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateClass();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.issuers = object.issuers?.map(e => e) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
            message.creditTypeAbbrev = object.credit_type_abbrev;
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = coin_1.Coin.fromAmino(object.fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        if (message.issuers) {
            obj.issuers = message.issuers.map(e => e);
        }
        else {
            obj.issuers = message.issuers;
        }
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
        obj.fee = message.fee ? coin_1.Coin.toAmino(message.fee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateClass.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateClass.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateClass.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
            value: exports.MsgCreateClass.encode(message).finish()
        };
    }
};
function createBaseMsgCreateClassResponse() {
    return {
        classId: ""
    };
}
exports.MsgCreateClassResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.classId !== "") {
            writer.uint32(10).string(message.classId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClassResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.classId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateClassResponse();
        message.classId = object.classId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateClassResponse();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.classId === "" ? undefined : message.classId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateClassResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateClassResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateClassResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateClassResponse",
            value: exports.MsgCreateClassResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateProject() {
    return {
        issuer: "",
        classId: "",
        metadata: "",
        jurisdiction: "",
        referenceId: ""
    };
}
exports.MsgCreateProject = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.jurisdiction !== "") {
            writer.uint32(34).string(message.jurisdiction);
        }
        if (message.referenceId !== "") {
            writer.uint32(42).string(message.referenceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.jurisdiction = reader.string();
                    break;
                case 5:
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
        const message = createBaseMsgCreateProject();
        message.issuer = object.issuer ?? "";
        message.classId = object.classId ?? "";
        message.metadata = object.metadata ?? "";
        message.jurisdiction = object.jurisdiction ?? "";
        message.referenceId = object.referenceId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateProject();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
            message.jurisdiction = object.jurisdiction;
        }
        if (object.reference_id !== undefined && object.reference_id !== null) {
            message.referenceId = object.reference_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
        obj.reference_id = message.referenceId === "" ? undefined : message.referenceId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateProject.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateProject.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateProject.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
            value: exports.MsgCreateProject.encode(message).finish()
        };
    }
};
function createBaseMsgCreateProjectResponse() {
    return {
        projectId: ""
    };
}
exports.MsgCreateProjectResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateProjectResponse();
        message.projectId = object.projectId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateProjectResponse();
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateProjectResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateProjectResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateProjectResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateProjectResponse",
            value: exports.MsgCreateProjectResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBatch() {
    return {
        issuer: "",
        projectId: "",
        issuance: [],
        metadata: "",
        startDate: undefined,
        endDate: undefined,
        open: false,
        originTx: undefined,
        note: ""
    };
}
exports.MsgCreateBatch = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        for (const v of message.issuance) {
            exports.BatchIssuance.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.startDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startDate), writer.uint32(42).fork()).ldelim();
        }
        if (message.endDate !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.endDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.open === true) {
            writer.uint32(56).bool(message.open);
        }
        if (message.originTx !== undefined) {
            types_1.OriginTx.encode(message.originTx, writer.uint32(66).fork()).ldelim();
        }
        if (message.note !== "") {
            writer.uint32(74).string(message.note);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
                    message.projectId = reader.string();
                    break;
                case 3:
                    message.issuance.push(exports.BatchIssuance.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.startDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.endDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.open = reader.bool();
                    break;
                case 8:
                    message.originTx = types_1.OriginTx.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.note = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBatch();
        message.issuer = object.issuer ?? "";
        message.projectId = object.projectId ?? "";
        message.issuance = object.issuance?.map(e => exports.BatchIssuance.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        message.startDate = object.startDate ?? undefined;
        message.endDate = object.endDate ?? undefined;
        message.open = object.open ?? false;
        message.originTx = object.originTx !== undefined && object.originTx !== null ? types_1.OriginTx.fromPartial(object.originTx) : undefined;
        message.note = object.note ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBatch();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        message.issuance = object.issuance?.map(e => exports.BatchIssuance.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.start_date !== undefined && object.start_date !== null) {
            message.startDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.start_date));
        }
        if (object.end_date !== undefined && object.end_date !== null) {
            message.endDate = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.end_date));
        }
        if (object.open !== undefined && object.open !== null) {
            message.open = object.open;
        }
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = types_1.OriginTx.fromAmino(object.origin_tx);
        }
        if (object.note !== undefined && object.note !== null) {
            message.note = object.note;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        if (message.issuance) {
            obj.issuance = message.issuance.map(e => e ? exports.BatchIssuance.toAmino(e) : undefined);
        }
        else {
            obj.issuance = message.issuance;
        }
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.start_date = message.startDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.startDate)) : undefined;
        obj.end_date = message.endDate ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.endDate)) : undefined;
        obj.open = message.open === false ? undefined : message.open;
        obj.origin_tx = message.originTx ? types_1.OriginTx.toAmino(message.originTx) : undefined;
        obj.note = message.note === "" ? undefined : message.note;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBatch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
            value: exports.MsgCreateBatch.encode(message).finish()
        };
    }
};
function createBaseBatchIssuance() {
    return {
        recipient: "",
        tradableAmount: "",
        retiredAmount: "",
        retirementJurisdiction: ""
    };
}
exports.BatchIssuance = {
    typeUrl: "/regen.ecocredit.v1.BatchIssuance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.recipient !== "") {
            writer.uint32(10).string(message.recipient);
        }
        if (message.tradableAmount !== "") {
            writer.uint32(18).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(26).string(message.retiredAmount);
        }
        if (message.retirementJurisdiction !== "") {
            writer.uint32(34).string(message.retirementJurisdiction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchIssuance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recipient = reader.string();
                    break;
                case 2:
                    message.tradableAmount = reader.string();
                    break;
                case 3:
                    message.retiredAmount = reader.string();
                    break;
                case 4:
                    message.retirementJurisdiction = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBatchIssuance();
        message.recipient = object.recipient ?? "";
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        message.retirementJurisdiction = object.retirementJurisdiction ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseBatchIssuance();
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        if (object.retirement_jurisdiction !== undefined && object.retirement_jurisdiction !== null) {
            message.retirementJurisdiction = object.retirement_jurisdiction;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        obj.retirement_jurisdiction = message.retirementJurisdiction === "" ? undefined : message.retirementJurisdiction;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BatchIssuance.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BatchIssuance.decode(message.value);
    },
    toProto(message) {
        return exports.BatchIssuance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.BatchIssuance",
            value: exports.BatchIssuance.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBatchResponse() {
    return {
        batchDenom: ""
    };
}
exports.MsgCreateBatchResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseMsgCreateBatchResponse();
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateBatchResponse();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCreateBatchResponse",
            value: exports.MsgCreateBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMintBatchCredits() {
    return {
        issuer: "",
        batchDenom: "",
        issuance: [],
        originTx: undefined,
        note: ""
    };
}
exports.MsgMintBatchCredits = {
    typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        for (const v of message.issuance) {
            exports.BatchIssuance.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.originTx !== undefined) {
            types_1.OriginTx.encode(message.originTx, writer.uint32(34).fork()).ldelim();
        }
        if (message.note !== "") {
            writer.uint32(42).string(message.note);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintBatchCredits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
                    message.batchDenom = reader.string();
                    break;
                case 3:
                    message.issuance.push(exports.BatchIssuance.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.originTx = types_1.OriginTx.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.note = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgMintBatchCredits();
        message.issuer = object.issuer ?? "";
        message.batchDenom = object.batchDenom ?? "";
        message.issuance = object.issuance?.map(e => exports.BatchIssuance.fromPartial(e)) || [];
        message.originTx = object.originTx !== undefined && object.originTx !== null ? types_1.OriginTx.fromPartial(object.originTx) : undefined;
        message.note = object.note ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgMintBatchCredits();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        message.issuance = object.issuance?.map(e => exports.BatchIssuance.fromAmino(e)) || [];
        if (object.origin_tx !== undefined && object.origin_tx !== null) {
            message.originTx = types_1.OriginTx.fromAmino(object.origin_tx);
        }
        if (object.note !== undefined && object.note !== null) {
            message.note = object.note;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        if (message.issuance) {
            obj.issuance = message.issuance.map(e => e ? exports.BatchIssuance.toAmino(e) : undefined);
        }
        else {
            obj.issuance = message.issuance;
        }
        obj.origin_tx = message.originTx ? types_1.OriginTx.toAmino(message.originTx) : undefined;
        obj.note = message.note === "" ? undefined : message.note;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMintBatchCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgMintBatchCredits.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMintBatchCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
            value: exports.MsgMintBatchCredits.encode(message).finish()
        };
    }
};
function createBaseMsgSealBatch() {
    return {
        issuer: "",
        batchDenom: ""
    };
}
exports.MsgSealBatch = {
    typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.batchDenom !== "") {
            writer.uint32(18).string(message.batchDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSealBatch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgSealBatch();
        message.issuer = object.issuer ?? "";
        message.batchDenom = object.batchDenom ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSealBatch();
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.issuer = message.issuer === "" ? undefined : message.issuer;
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSealBatch.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSealBatch.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSealBatch.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
            value: exports.MsgSealBatch.encode(message).finish()
        };
    }
};
function createBaseMsgMintBatchCreditsResponse() {
    return {};
}
exports.MsgMintBatchCreditsResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintBatchCreditsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgMintBatchCreditsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgMintBatchCreditsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMintBatchCreditsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgMintBatchCreditsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMintBatchCreditsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgMintBatchCreditsResponse",
            value: exports.MsgMintBatchCreditsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSealBatchResponse() {
    return {};
}
exports.MsgSealBatchResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSealBatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgSealBatchResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSealBatchResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSealBatchResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSealBatchResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSealBatchResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSealBatchResponse",
            value: exports.MsgSealBatchResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSend() {
    return {
        sender: "",
        recipient: "",
        credits: []
    };
}
exports.MsgSend = {
    typeUrl: "/regen.ecocredit.v1.MsgSend",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        for (const v of message.credits) {
            exports.MsgSend_SendCredits.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.recipient = reader.string();
                    break;
                case 3:
                    message.credits.push(exports.MsgSend_SendCredits.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSend();
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        message.credits = object.credits?.map(e => exports.MsgSend_SendCredits.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSend();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        message.credits = object.credits?.map(e => exports.MsgSend_SendCredits.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? exports.MsgSend_SendCredits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSend.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSend.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSend",
            value: exports.MsgSend.encode(message).finish()
        };
    }
};
function createBaseMsgSend_SendCredits() {
    return {
        batchDenom: "",
        tradableAmount: "",
        retiredAmount: "",
        retirementJurisdiction: ""
    };
}
exports.MsgSend_SendCredits = {
    typeUrl: "/regen.ecocredit.v1.SendCredits",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.tradableAmount !== "") {
            writer.uint32(18).string(message.tradableAmount);
        }
        if (message.retiredAmount !== "") {
            writer.uint32(26).string(message.retiredAmount);
        }
        if (message.retirementJurisdiction !== "") {
            writer.uint32(34).string(message.retirementJurisdiction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSend_SendCredits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.tradableAmount = reader.string();
                    break;
                case 3:
                    message.retiredAmount = reader.string();
                    break;
                case 4:
                    message.retirementJurisdiction = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSend_SendCredits();
        message.batchDenom = object.batchDenom ?? "";
        message.tradableAmount = object.tradableAmount ?? "";
        message.retiredAmount = object.retiredAmount ?? "";
        message.retirementJurisdiction = object.retirementJurisdiction ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSend_SendCredits();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.tradable_amount !== undefined && object.tradable_amount !== null) {
            message.tradableAmount = object.tradable_amount;
        }
        if (object.retired_amount !== undefined && object.retired_amount !== null) {
            message.retiredAmount = object.retired_amount;
        }
        if (object.retirement_jurisdiction !== undefined && object.retirement_jurisdiction !== null) {
            message.retirementJurisdiction = object.retirement_jurisdiction;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.tradable_amount = message.tradableAmount === "" ? undefined : message.tradableAmount;
        obj.retired_amount = message.retiredAmount === "" ? undefined : message.retiredAmount;
        obj.retirement_jurisdiction = message.retirementJurisdiction === "" ? undefined : message.retirementJurisdiction;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSend_SendCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSend_SendCredits.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSend_SendCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.SendCredits",
            value: exports.MsgSend_SendCredits.encode(message).finish()
        };
    }
};
function createBaseMsgSendResponse() {
    return {};
}
exports.MsgSendResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgSendResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgSendResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSendResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSendResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSendResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgSendResponse",
            value: exports.MsgSendResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRetire() {
    return {
        holder: "",
        credits: [],
        jurisdiction: ""
    };
}
exports.MsgRetire = {
    typeUrl: "/regen.ecocredit.v1.MsgRetire",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.holder !== "") {
            writer.uint32(10).string(message.holder);
        }
        for (const v of message.credits) {
            exports.MsgRetire_RetireCredits.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.jurisdiction !== "") {
            writer.uint32(26).string(message.jurisdiction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRetire();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.holder = reader.string();
                    break;
                case 2:
                    message.credits.push(exports.MsgRetire_RetireCredits.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.jurisdiction = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRetire();
        message.holder = object.holder ?? "";
        message.credits = object.credits?.map(e => exports.MsgRetire_RetireCredits.fromPartial(e)) || [];
        message.jurisdiction = object.jurisdiction ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRetire();
        if (object.holder !== undefined && object.holder !== null) {
            message.holder = object.holder;
        }
        message.credits = object.credits?.map(e => exports.MsgRetire_RetireCredits.fromAmino(e)) || [];
        if (object.jurisdiction !== undefined && object.jurisdiction !== null) {
            message.jurisdiction = object.jurisdiction;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.holder = message.holder === "" ? undefined : message.holder;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? exports.MsgRetire_RetireCredits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        obj.jurisdiction = message.jurisdiction === "" ? undefined : message.jurisdiction;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRetire.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRetire.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRetire.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRetire",
            value: exports.MsgRetire.encode(message).finish()
        };
    }
};
function createBaseMsgRetire_RetireCredits() {
    return {
        batchDenom: "",
        amount: ""
    };
}
exports.MsgRetire_RetireCredits = {
    typeUrl: "/regen.ecocredit.v1.RetireCredits",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRetire_RetireCredits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgRetire_RetireCredits();
        message.batchDenom = object.batchDenom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRetire_RetireCredits();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRetire_RetireCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRetire_RetireCredits.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRetire_RetireCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.RetireCredits",
            value: exports.MsgRetire_RetireCredits.encode(message).finish()
        };
    }
};
function createBaseMsgRetireResponse() {
    return {};
}
exports.MsgRetireResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgRetireResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRetireResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgRetireResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRetireResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRetireResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRetireResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRetireResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgRetireResponse",
            value: exports.MsgRetireResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancel() {
    return {
        holder: "",
        credits: []
    };
}
exports.MsgCancel = {
    typeUrl: "/regen.ecocredit.v1.MsgCancel",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.holder !== "") {
            writer.uint32(10).string(message.holder);
        }
        for (const v of message.credits) {
            exports.MsgCancel_CancelCredits.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.holder = reader.string();
                    break;
                case 2:
                    message.credits.push(exports.MsgCancel_CancelCredits.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancel();
        message.holder = object.holder ?? "";
        message.credits = object.credits?.map(e => exports.MsgCancel_CancelCredits.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancel();
        if (object.holder !== undefined && object.holder !== null) {
            message.holder = object.holder;
        }
        message.credits = object.credits?.map(e => exports.MsgCancel_CancelCredits.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.holder = message.holder === "" ? undefined : message.holder;
        if (message.credits) {
            obj.credits = message.credits.map(e => e ? exports.MsgCancel_CancelCredits.toAmino(e) : undefined);
        }
        else {
            obj.credits = message.credits;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancel.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancel.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCancel",
            value: exports.MsgCancel.encode(message).finish()
        };
    }
};
function createBaseMsgCancel_CancelCredits() {
    return {
        batchDenom: "",
        amount: ""
    };
}
exports.MsgCancel_CancelCredits = {
    typeUrl: "/regen.ecocredit.v1.CancelCredits",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.batchDenom !== "") {
            writer.uint32(10).string(message.batchDenom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancel_CancelCredits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batchDenom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancel_CancelCredits();
        message.batchDenom = object.batchDenom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancel_CancelCredits();
        if (object.batch_denom !== undefined && object.batch_denom !== null) {
            message.batchDenom = object.batch_denom;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.batch_denom = message.batchDenom === "" ? undefined : message.batchDenom;
        obj.amount = message.amount === "" ? undefined : message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancel_CancelCredits.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancel_CancelCredits.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancel_CancelCredits.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.CancelCredits",
            value: exports.MsgCancel_CancelCredits.encode(message).finish()
        };
    }
};
function createBaseMsgCancelResponse() {
    return {};
}
exports.MsgCancelResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgCancelResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgCancelResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgCancelResponse",
            value: exports.MsgCancelResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassAdmin() {
    return {
        admin: "",
        classId: "",
        newAdmin: ""
    };
}
exports.MsgUpdateClassAdmin = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClassAdmin();
        message.admin = object.admin ?? "";
        message.classId = object.classId ?? "";
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClassAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
            value: exports.MsgUpdateClassAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassAdminResponse() {
    return {};
}
exports.MsgUpdateClassAdminResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateClassAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateClassAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdminResponse",
            value: exports.MsgUpdateClassAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassIssuers() {
    return {
        admin: "",
        classId: "",
        addIssuers: [],
        removeIssuers: []
    };
}
exports.MsgUpdateClassIssuers = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        for (const v of message.addIssuers) {
            writer.uint32(26).string(v);
        }
        for (const v of message.removeIssuers) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassIssuers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.addIssuers.push(reader.string());
                    break;
                case 4:
                    message.removeIssuers.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClassIssuers();
        message.admin = object.admin ?? "";
        message.classId = object.classId ?? "";
        message.addIssuers = object.addIssuers?.map(e => e) || [];
        message.removeIssuers = object.removeIssuers?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClassIssuers();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        message.addIssuers = object.add_issuers?.map(e => e) || [];
        message.removeIssuers = object.remove_issuers?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        if (message.addIssuers) {
            obj.add_issuers = message.addIssuers.map(e => e);
        }
        else {
            obj.add_issuers = message.addIssuers;
        }
        if (message.removeIssuers) {
            obj.remove_issuers = message.removeIssuers.map(e => e);
        }
        else {
            obj.remove_issuers = message.removeIssuers;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassIssuers.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassIssuers.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassIssuers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
            value: exports.MsgUpdateClassIssuers.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassIssuersResponse() {
    return {};
}
exports.MsgUpdateClassIssuersResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassIssuersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateClassIssuersResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateClassIssuersResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassIssuersResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassIssuersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassIssuersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuersResponse",
            value: exports.MsgUpdateClassIssuersResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassMetadata() {
    return {
        admin: "",
        classId: "",
        metadata: ""
    };
}
exports.MsgUpdateClassMetadata = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.classId !== "") {
            writer.uint32(18).string(message.classId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.classId = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClassMetadata();
        message.admin = object.admin ?? "";
        message.classId = object.classId ?? "";
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClassMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.class_id !== undefined && object.class_id !== null) {
            message.classId = object.class_id;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.class_id = message.classId === "" ? undefined : message.classId;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
            value: exports.MsgUpdateClassMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClassMetadataResponse() {
    return {};
}
exports.MsgUpdateClassMetadataResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClassMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateClassMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateClassMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClassMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClassMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClassMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadataResponse",
            value: exports.MsgUpdateClassMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProjectAdmin() {
    return {
        admin: "",
        newAdmin: "",
        projectId: ""
    };
}
exports.MsgUpdateProjectAdmin = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.newAdmin !== "") {
            writer.uint32(18).string(message.newAdmin);
        }
        if (message.projectId !== "") {
            writer.uint32(26).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProjectAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.newAdmin = reader.string();
                    break;
                case 3:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateProjectAdmin();
        message.admin = object.admin ?? "";
        message.newAdmin = object.newAdmin ?? "";
        message.projectId = object.projectId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateProjectAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.newAdmin = object.new_admin;
        }
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.new_admin = message.newAdmin === "" ? undefined : message.newAdmin;
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateProjectAdmin.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateProjectAdmin.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateProjectAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
            value: exports.MsgUpdateProjectAdmin.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProjectAdminResponse() {
    return {};
}
exports.MsgUpdateProjectAdminResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProjectAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateProjectAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateProjectAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateProjectAdminResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateProjectAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateProjectAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdminResponse",
            value: exports.MsgUpdateProjectAdminResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProjectMetadata() {
    return {
        admin: "",
        newMetadata: "",
        projectId: ""
    };
}
exports.MsgUpdateProjectMetadata = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.newMetadata !== "") {
            writer.uint32(18).string(message.newMetadata);
        }
        if (message.projectId !== "") {
            writer.uint32(26).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProjectMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.newMetadata = reader.string();
                    break;
                case 3:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateProjectMetadata();
        message.admin = object.admin ?? "";
        message.newMetadata = object.newMetadata ?? "";
        message.projectId = object.projectId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateProjectMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.new_metadata !== undefined && object.new_metadata !== null) {
            message.newMetadata = object.new_metadata;
        }
        if (object.project_id !== undefined && object.project_id !== null) {
            message.projectId = object.project_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.new_metadata = message.newMetadata === "" ? undefined : message.newMetadata;
        obj.project_id = message.projectId === "" ? undefined : message.projectId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateProjectMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateProjectMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateProjectMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
            value: exports.MsgUpdateProjectMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateProjectMetadataResponse() {
    return {};
}
exports.MsgUpdateProjectMetadataResponse = {
    typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateProjectMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateProjectMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateProjectMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateProjectMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateProjectMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateProjectMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadataResponse",
            value: exports.MsgUpdateProjectMetadataResponse.encode(message).finish()
        };
    }
};
