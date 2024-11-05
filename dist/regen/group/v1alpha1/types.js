"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecisionPolicy_ToAmino = exports.DecisionPolicy_FromAmino = exports.DecisionPolicy_InterfaceDecoder = exports.Vote = exports.Tally = exports.Proposal = exports.GroupAccountInfo = exports.GroupMember = exports.GroupInfo = exports.ThresholdDecisionPolicy = exports.Members = exports.Member = exports.Proposal_ExecutorResultAmino = exports.Proposal_ExecutorResultSDKType = exports.Proposal_ExecutorResult = exports.Proposal_ResultAmino = exports.Proposal_ResultSDKType = exports.Proposal_Result = exports.Proposal_StatusAmino = exports.Proposal_StatusSDKType = exports.Proposal_Status = exports.ChoiceAmino = exports.ChoiceSDKType = exports.Choice = void 0;
exports.choiceFromJSON = choiceFromJSON;
exports.choiceToJSON = choiceToJSON;
exports.proposal_StatusFromJSON = proposal_StatusFromJSON;
exports.proposal_StatusToJSON = proposal_StatusToJSON;
exports.proposal_ResultFromJSON = proposal_ResultFromJSON;
exports.proposal_ResultToJSON = proposal_ResultToJSON;
exports.proposal_ExecutorResultFromJSON = proposal_ExecutorResultFromJSON;
exports.proposal_ExecutorResultToJSON = proposal_ExecutorResultToJSON;
//@ts-nocheck
const duration_1 = require("../../../google/protobuf/duration");
const any_1 = require("../../../google/protobuf/any");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
/** Choice defines available types of choices for voting. */
var Choice;
(function (Choice) {
    /** CHOICE_UNSPECIFIED - CHOICE_UNSPECIFIED defines a no-op voting choice. */
    Choice[Choice["CHOICE_UNSPECIFIED"] = 0] = "CHOICE_UNSPECIFIED";
    /** CHOICE_NO - CHOICE_NO defines a no voting choice. */
    Choice[Choice["CHOICE_NO"] = 1] = "CHOICE_NO";
    /** CHOICE_YES - CHOICE_YES defines a yes voting choice. */
    Choice[Choice["CHOICE_YES"] = 2] = "CHOICE_YES";
    /** CHOICE_ABSTAIN - CHOICE_ABSTAIN defines an abstaining voting choice. */
    Choice[Choice["CHOICE_ABSTAIN"] = 3] = "CHOICE_ABSTAIN";
    /** CHOICE_VETO - CHOICE_VETO defines a voting choice with veto. */
    Choice[Choice["CHOICE_VETO"] = 4] = "CHOICE_VETO";
    Choice[Choice["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Choice || (exports.Choice = Choice = {}));
exports.ChoiceSDKType = Choice;
exports.ChoiceAmino = Choice;
function choiceFromJSON(object) {
    switch (object) {
        case 0:
        case "CHOICE_UNSPECIFIED":
            return Choice.CHOICE_UNSPECIFIED;
        case 1:
        case "CHOICE_NO":
            return Choice.CHOICE_NO;
        case 2:
        case "CHOICE_YES":
            return Choice.CHOICE_YES;
        case 3:
        case "CHOICE_ABSTAIN":
            return Choice.CHOICE_ABSTAIN;
        case 4:
        case "CHOICE_VETO":
            return Choice.CHOICE_VETO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Choice.UNRECOGNIZED;
    }
}
function choiceToJSON(object) {
    switch (object) {
        case Choice.CHOICE_UNSPECIFIED:
            return "CHOICE_UNSPECIFIED";
        case Choice.CHOICE_NO:
            return "CHOICE_NO";
        case Choice.CHOICE_YES:
            return "CHOICE_YES";
        case Choice.CHOICE_ABSTAIN:
            return "CHOICE_ABSTAIN";
        case Choice.CHOICE_VETO:
            return "CHOICE_VETO";
        case Choice.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Status defines proposal statuses. */
var Proposal_Status;
(function (Proposal_Status) {
    /** STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    Proposal_Status[Proposal_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    /** STATUS_SUBMITTED - Initial status of a proposal when persisted. */
    Proposal_Status[Proposal_Status["STATUS_SUBMITTED"] = 1] = "STATUS_SUBMITTED";
    /** STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
    Proposal_Status[Proposal_Status["STATUS_CLOSED"] = 2] = "STATUS_CLOSED";
    /**
     * STATUS_ABORTED - Final status of a proposal when the group was modified before the final
     * tally.
     */
    Proposal_Status[Proposal_Status["STATUS_ABORTED"] = 3] = "STATUS_ABORTED";
    Proposal_Status[Proposal_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Proposal_Status || (exports.Proposal_Status = Proposal_Status = {}));
exports.Proposal_StatusSDKType = Proposal_Status;
exports.Proposal_StatusAmino = Proposal_Status;
function proposal_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Proposal_Status.STATUS_UNSPECIFIED;
        case 1:
        case "STATUS_SUBMITTED":
            return Proposal_Status.STATUS_SUBMITTED;
        case 2:
        case "STATUS_CLOSED":
            return Proposal_Status.STATUS_CLOSED;
        case 3:
        case "STATUS_ABORTED":
            return Proposal_Status.STATUS_ABORTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Proposal_Status.UNRECOGNIZED;
    }
}
function proposal_StatusToJSON(object) {
    switch (object) {
        case Proposal_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Proposal_Status.STATUS_SUBMITTED:
            return "STATUS_SUBMITTED";
        case Proposal_Status.STATUS_CLOSED:
            return "STATUS_CLOSED";
        case Proposal_Status.STATUS_ABORTED:
            return "STATUS_ABORTED";
        case Proposal_Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Result defines types of proposal results. */
var Proposal_Result;
(function (Proposal_Result) {
    /** RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
    Proposal_Result[Proposal_Result["RESULT_UNSPECIFIED"] = 0] = "RESULT_UNSPECIFIED";
    /** RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
    Proposal_Result[Proposal_Result["RESULT_UNFINALIZED"] = 1] = "RESULT_UNFINALIZED";
    /** RESULT_ACCEPTED - Final result of the tally */
    Proposal_Result[Proposal_Result["RESULT_ACCEPTED"] = 2] = "RESULT_ACCEPTED";
    /** RESULT_REJECTED - Final result of the tally */
    Proposal_Result[Proposal_Result["RESULT_REJECTED"] = 3] = "RESULT_REJECTED";
    Proposal_Result[Proposal_Result["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Proposal_Result || (exports.Proposal_Result = Proposal_Result = {}));
exports.Proposal_ResultSDKType = Proposal_Result;
exports.Proposal_ResultAmino = Proposal_Result;
function proposal_ResultFromJSON(object) {
    switch (object) {
        case 0:
        case "RESULT_UNSPECIFIED":
            return Proposal_Result.RESULT_UNSPECIFIED;
        case 1:
        case "RESULT_UNFINALIZED":
            return Proposal_Result.RESULT_UNFINALIZED;
        case 2:
        case "RESULT_ACCEPTED":
            return Proposal_Result.RESULT_ACCEPTED;
        case 3:
        case "RESULT_REJECTED":
            return Proposal_Result.RESULT_REJECTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Proposal_Result.UNRECOGNIZED;
    }
}
function proposal_ResultToJSON(object) {
    switch (object) {
        case Proposal_Result.RESULT_UNSPECIFIED:
            return "RESULT_UNSPECIFIED";
        case Proposal_Result.RESULT_UNFINALIZED:
            return "RESULT_UNFINALIZED";
        case Proposal_Result.RESULT_ACCEPTED:
            return "RESULT_ACCEPTED";
        case Proposal_Result.RESULT_REJECTED:
            return "RESULT_REJECTED";
        case Proposal_Result.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ExecutorResult defines types of proposal executor results. */
var Proposal_ExecutorResult;
(function (Proposal_ExecutorResult) {
    /** EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
    Proposal_ExecutorResult[Proposal_ExecutorResult["EXECUTOR_RESULT_UNSPECIFIED"] = 0] = "EXECUTOR_RESULT_UNSPECIFIED";
    /** EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
    Proposal_ExecutorResult[Proposal_ExecutorResult["EXECUTOR_RESULT_NOT_RUN"] = 1] = "EXECUTOR_RESULT_NOT_RUN";
    /** EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
    Proposal_ExecutorResult[Proposal_ExecutorResult["EXECUTOR_RESULT_SUCCESS"] = 2] = "EXECUTOR_RESULT_SUCCESS";
    /** EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
    Proposal_ExecutorResult[Proposal_ExecutorResult["EXECUTOR_RESULT_FAILURE"] = 3] = "EXECUTOR_RESULT_FAILURE";
    Proposal_ExecutorResult[Proposal_ExecutorResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Proposal_ExecutorResult || (exports.Proposal_ExecutorResult = Proposal_ExecutorResult = {}));
exports.Proposal_ExecutorResultSDKType = Proposal_ExecutorResult;
exports.Proposal_ExecutorResultAmino = Proposal_ExecutorResult;
function proposal_ExecutorResultFromJSON(object) {
    switch (object) {
        case 0:
        case "EXECUTOR_RESULT_UNSPECIFIED":
            return Proposal_ExecutorResult.EXECUTOR_RESULT_UNSPECIFIED;
        case 1:
        case "EXECUTOR_RESULT_NOT_RUN":
            return Proposal_ExecutorResult.EXECUTOR_RESULT_NOT_RUN;
        case 2:
        case "EXECUTOR_RESULT_SUCCESS":
            return Proposal_ExecutorResult.EXECUTOR_RESULT_SUCCESS;
        case 3:
        case "EXECUTOR_RESULT_FAILURE":
            return Proposal_ExecutorResult.EXECUTOR_RESULT_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Proposal_ExecutorResult.UNRECOGNIZED;
    }
}
function proposal_ExecutorResultToJSON(object) {
    switch (object) {
        case Proposal_ExecutorResult.EXECUTOR_RESULT_UNSPECIFIED:
            return "EXECUTOR_RESULT_UNSPECIFIED";
        case Proposal_ExecutorResult.EXECUTOR_RESULT_NOT_RUN:
            return "EXECUTOR_RESULT_NOT_RUN";
        case Proposal_ExecutorResult.EXECUTOR_RESULT_SUCCESS:
            return "EXECUTOR_RESULT_SUCCESS";
        case Proposal_ExecutorResult.EXECUTOR_RESULT_FAILURE:
            return "EXECUTOR_RESULT_FAILURE";
        case Proposal_ExecutorResult.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMember() {
    return {
        address: "",
        weight: "",
        metadata: new Uint8Array()
    };
}
exports.Member = {
    typeUrl: "/regen.group.v1alpha1.Member",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(26).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                case 3:
                    message.metadata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMember();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        message.metadata = object.metadata ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMember();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.weight = message.weight === "" ? undefined : message.weight;
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Member.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Member.decode(message.value);
    },
    toProto(message) {
        return exports.Member.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.Member",
            value: exports.Member.encode(message).finish()
        };
    }
};
function createBaseMembers() {
    return {
        members: []
    };
}
exports.Members = {
    typeUrl: "/regen.group.v1alpha1.Members",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.members) {
            exports.Member.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(exports.Member.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMembers();
        message.members = object.members?.map(e => exports.Member.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMembers();
        message.members = object.members?.map(e => exports.Member.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? exports.Member.toAmino(e) : undefined);
        }
        else {
            obj.members = message.members;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Members.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Members.decode(message.value);
    },
    toProto(message) {
        return exports.Members.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.Members",
            value: exports.Members.encode(message).finish()
        };
    }
};
function createBaseThresholdDecisionPolicy() {
    return {
        $typeUrl: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
        threshold: "",
        timeout: duration_1.Duration.fromPartial({})
    };
}
exports.ThresholdDecisionPolicy = {
    typeUrl: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.threshold !== "") {
            writer.uint32(10).string(message.threshold);
        }
        if (message.timeout !== undefined) {
            duration_1.Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseThresholdDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.string();
                    break;
                case 2:
                    message.timeout = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseThresholdDecisionPolicy();
        message.threshold = object.threshold ?? "";
        message.timeout = object.timeout !== undefined && object.timeout !== null ? duration_1.Duration.fromPartial(object.timeout) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseThresholdDecisionPolicy();
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = duration_1.Duration.fromAmino(object.timeout);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.threshold = message.threshold === "" ? undefined : message.threshold;
        obj.timeout = message.timeout ? duration_1.Duration.toAmino(message.timeout) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ThresholdDecisionPolicy.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ThresholdDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.ThresholdDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
            value: exports.ThresholdDecisionPolicy.encode(message).finish()
        };
    }
};
function createBaseGroupInfo() {
    return {
        groupId: BigInt(0),
        admin: "",
        metadata: new Uint8Array(),
        version: BigInt(0),
        totalWeight: ""
    };
}
exports.GroupInfo = {
    typeUrl: "/regen.group.v1alpha1.GroupInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(26).bytes(message.metadata);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(32).uint64(message.version);
        }
        if (message.totalWeight !== "") {
            writer.uint32(42).string(message.totalWeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.metadata = reader.bytes();
                    break;
                case 4:
                    message.version = reader.uint64();
                    break;
                case 5:
                    message.totalWeight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroupInfo();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.admin = object.admin ?? "";
        message.metadata = object.metadata ?? new Uint8Array();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.totalWeight = object.totalWeight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroupInfo();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        if (object.total_weight !== undefined && object.total_weight !== null) {
            message.totalWeight = object.total_weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        obj.version = message.version !== BigInt(0) ? (message.version?.toString)() : undefined;
        obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GroupInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GroupInfo.decode(message.value);
    },
    toProto(message) {
        return exports.GroupInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.GroupInfo",
            value: exports.GroupInfo.encode(message).finish()
        };
    }
};
function createBaseGroupMember() {
    return {
        groupId: BigInt(0),
        member: undefined
    };
}
exports.GroupMember = {
    typeUrl: "/regen.group.v1alpha1.GroupMember",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupId !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.member !== undefined) {
            exports.Member.encode(message.member, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.member = exports.Member.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroupMember();
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.member = object.member !== undefined && object.member !== null ? exports.Member.fromPartial(object.member) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroupMember();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.member !== undefined && object.member !== null) {
            message.member = exports.Member.fromAmino(object.member);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.member = message.member ? exports.Member.toAmino(message.member) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GroupMember.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GroupMember.decode(message.value);
    },
    toProto(message) {
        return exports.GroupMember.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.GroupMember",
            value: exports.GroupMember.encode(message).finish()
        };
    }
};
function createBaseGroupAccountInfo() {
    return {
        address: "",
        groupId: BigInt(0),
        admin: "",
        metadata: new Uint8Array(),
        version: BigInt(0),
        decisionPolicy: undefined,
        derivationKey: new Uint8Array()
    };
}
exports.GroupAccountInfo = {
    typeUrl: "/regen.group.v1alpha1.GroupAccountInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.groupId !== BigInt(0)) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.admin !== "") {
            writer.uint32(26).string(message.admin);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(34).bytes(message.metadata);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(40).uint64(message.version);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.derivationKey.length !== 0) {
            writer.uint32(58).bytes(message.derivationKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupAccountInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.admin = reader.string();
                    break;
                case 4:
                    message.metadata = reader.bytes();
                    break;
                case 5:
                    message.version = reader.uint64();
                    break;
                case 6:
                    message.decisionPolicy = (0, exports.DecisionPolicy_InterfaceDecoder)(reader);
                    break;
                case 7:
                    message.derivationKey = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroupAccountInfo();
        message.address = object.address ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.admin = object.admin ?? "";
        message.metadata = object.metadata ?? new Uint8Array();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? any_1.Any.fromPartial(object.decisionPolicy) : undefined;
        message.derivationKey = object.derivationKey ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroupAccountInfo();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.groupId = BigInt(object.group_id);
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decisionPolicy = (0, exports.DecisionPolicy_FromAmino)(object.decision_policy);
        }
        if (object.derivation_key !== undefined && object.derivation_key !== null) {
            message.derivationKey = (0, helpers_1.bytesFromBase64)(object.derivation_key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        obj.version = message.version !== BigInt(0) ? (message.version?.toString)() : undefined;
        obj.decision_policy = message.decisionPolicy ? (0, exports.DecisionPolicy_ToAmino)(message.decisionPolicy) : undefined;
        obj.derivation_key = message.derivationKey ? (0, helpers_1.base64FromBytes)(message.derivationKey) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GroupAccountInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GroupAccountInfo.decode(message.value);
    },
    toProto(message) {
        return exports.GroupAccountInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.GroupAccountInfo",
            value: exports.GroupAccountInfo.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        proposalId: BigInt(0),
        address: "",
        metadata: new Uint8Array(),
        proposers: [],
        submittedAt: new Date(),
        groupVersion: BigInt(0),
        groupAccountVersion: BigInt(0),
        status: 0,
        result: 0,
        voteState: exports.Tally.fromPartial({}),
        timeout: new Date(),
        executorResult: 0,
        msgs: []
    };
}
exports.Proposal = {
    typeUrl: "/regen.group.v1alpha1.Proposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(26).bytes(message.metadata);
        }
        for (const v of message.proposers) {
            writer.uint32(34).string(v);
        }
        if (message.submittedAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submittedAt), writer.uint32(42).fork()).ldelim();
        }
        if (message.groupVersion !== BigInt(0)) {
            writer.uint32(48).uint64(message.groupVersion);
        }
        if (message.groupAccountVersion !== BigInt(0)) {
            writer.uint32(56).uint64(message.groupAccountVersion);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.result !== 0) {
            writer.uint32(72).int32(message.result);
        }
        if (message.voteState !== undefined) {
            exports.Tally.encode(message.voteState, writer.uint32(82).fork()).ldelim();
        }
        if (message.timeout !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timeout), writer.uint32(90).fork()).ldelim();
        }
        if (message.executorResult !== 0) {
            writer.uint32(96).int32(message.executorResult);
        }
        for (const v of message.msgs) {
            any_1.Any.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.bytes();
                    break;
                case 4:
                    message.proposers.push(reader.string());
                    break;
                case 5:
                    message.submittedAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.groupVersion = reader.uint64();
                    break;
                case 7:
                    message.groupAccountVersion = reader.uint64();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.result = reader.int32();
                    break;
                case 10:
                    message.voteState = exports.Tally.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.timeout = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.executorResult = reader.int32();
                    break;
                case 13:
                    message.msgs.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.address = object.address ?? "";
        message.metadata = object.metadata ?? new Uint8Array();
        message.proposers = object.proposers?.map(e => e) || [];
        message.submittedAt = object.submittedAt ?? undefined;
        message.groupVersion = object.groupVersion !== undefined && object.groupVersion !== null ? BigInt(object.groupVersion.toString()) : BigInt(0);
        message.groupAccountVersion = object.groupAccountVersion !== undefined && object.groupAccountVersion !== null ? BigInt(object.groupAccountVersion.toString()) : BigInt(0);
        message.status = object.status ?? 0;
        message.result = object.result ?? 0;
        message.voteState = object.voteState !== undefined && object.voteState !== null ? exports.Tally.fromPartial(object.voteState) : undefined;
        message.timeout = object.timeout ?? undefined;
        message.executorResult = object.executorResult ?? 0;
        message.msgs = object.msgs?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        message.proposers = object.proposers?.map(e => e) || [];
        if (object.submitted_at !== undefined && object.submitted_at !== null) {
            message.submittedAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.submitted_at));
        }
        if (object.group_version !== undefined && object.group_version !== null) {
            message.groupVersion = BigInt(object.group_version);
        }
        if (object.group_account_version !== undefined && object.group_account_version !== null) {
            message.groupAccountVersion = BigInt(object.group_account_version);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        if (object.vote_state !== undefined && object.vote_state !== null) {
            message.voteState = exports.Tally.fromAmino(object.vote_state);
        }
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timeout));
        }
        if (object.executor_result !== undefined && object.executor_result !== null) {
            message.executorResult = object.executor_result;
        }
        message.msgs = object.msgs?.map(e => any_1.Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        obj.address = message.address === "" ? undefined : message.address;
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = message.proposers;
        }
        obj.submitted_at = message.submittedAt ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.submittedAt)) : undefined;
        obj.group_version = message.groupVersion !== BigInt(0) ? (message.groupVersion?.toString)() : undefined;
        obj.group_account_version = message.groupAccountVersion !== BigInt(0) ? (message.groupAccountVersion?.toString)() : undefined;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.result = message.result === 0 ? undefined : message.result;
        obj.vote_state = message.voteState ? exports.Tally.toAmino(message.voteState) : undefined;
        obj.timeout = message.timeout ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timeout)) : undefined;
        obj.executor_result = message.executorResult === 0 ? undefined : message.executorResult;
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.msgs = message.msgs;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Proposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Proposal.decode(message.value);
    },
    toProto(message) {
        return exports.Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.Proposal",
            value: exports.Proposal.encode(message).finish()
        };
    }
};
function createBaseTally() {
    return {
        yesCount: "",
        noCount: "",
        abstainCount: "",
        vetoCount: ""
    };
}
exports.Tally = {
    typeUrl: "/regen.group.v1alpha1.Tally",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.yesCount !== "") {
            writer.uint32(10).string(message.yesCount);
        }
        if (message.noCount !== "") {
            writer.uint32(18).string(message.noCount);
        }
        if (message.abstainCount !== "") {
            writer.uint32(26).string(message.abstainCount);
        }
        if (message.vetoCount !== "") {
            writer.uint32(34).string(message.vetoCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTally();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yesCount = reader.string();
                    break;
                case 2:
                    message.noCount = reader.string();
                    break;
                case 3:
                    message.abstainCount = reader.string();
                    break;
                case 4:
                    message.vetoCount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTally();
        message.yesCount = object.yesCount ?? "";
        message.noCount = object.noCount ?? "";
        message.abstainCount = object.abstainCount ?? "";
        message.vetoCount = object.vetoCount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTally();
        if (object.yes_count !== undefined && object.yes_count !== null) {
            message.yesCount = object.yes_count;
        }
        if (object.no_count !== undefined && object.no_count !== null) {
            message.noCount = object.no_count;
        }
        if (object.abstain_count !== undefined && object.abstain_count !== null) {
            message.abstainCount = object.abstain_count;
        }
        if (object.veto_count !== undefined && object.veto_count !== null) {
            message.vetoCount = object.veto_count;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.yes_count = message.yesCount === "" ? undefined : message.yesCount;
        obj.no_count = message.noCount === "" ? undefined : message.noCount;
        obj.abstain_count = message.abstainCount === "" ? undefined : message.abstainCount;
        obj.veto_count = message.vetoCount === "" ? undefined : message.vetoCount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Tally.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Tally.decode(message.value);
    },
    toProto(message) {
        return exports.Tally.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.Tally",
            value: exports.Tally.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        proposalId: BigInt(0),
        voter: "",
        choice: 0,
        metadata: new Uint8Array(),
        submittedAt: new Date()
    };
}
exports.Vote = {
    typeUrl: "/regen.group.v1alpha1.Vote",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.choice !== 0) {
            writer.uint32(24).int32(message.choice);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(34).bytes(message.metadata);
        }
        if (message.submittedAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submittedAt), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.choice = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.bytes();
                    break;
                case 5:
                    message.submittedAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.choice = object.choice ?? 0;
        message.metadata = object.metadata ?? new Uint8Array();
        message.submittedAt = object.submittedAt ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.choice !== undefined && object.choice !== null) {
            message.choice = object.choice;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = (0, helpers_1.bytesFromBase64)(object.metadata);
        }
        if (object.submitted_at !== undefined && object.submitted_at !== null) {
            message.submittedAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.submitted_at));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        obj.voter = message.voter === "" ? undefined : message.voter;
        obj.choice = message.choice === 0 ? undefined : message.choice;
        obj.metadata = message.metadata ? (0, helpers_1.base64FromBytes)(message.metadata) : undefined;
        obj.submitted_at = message.submittedAt ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.submittedAt)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Vote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Vote.decode(message.value);
    },
    toProto(message) {
        return exports.Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.Vote",
            value: exports.Vote.encode(message).finish()
        };
    }
};
const DecisionPolicy_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/regen.group.v1alpha1.ThresholdDecisionPolicy":
            return exports.ThresholdDecisionPolicy.decode(data.value);
        default:
            return data;
    }
};
exports.DecisionPolicy_InterfaceDecoder = DecisionPolicy_InterfaceDecoder;
const DecisionPolicy_FromAmino = (content) => {
    switch (content.type) {
        case "/regen.group.v1alpha1.ThresholdDecisionPolicy":
            return any_1.Any.fromPartial({
                typeUrl: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
                value: exports.ThresholdDecisionPolicy.encode(exports.ThresholdDecisionPolicy.fromPartial(exports.ThresholdDecisionPolicy.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.DecisionPolicy_FromAmino = DecisionPolicy_FromAmino;
const DecisionPolicy_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/regen.group.v1alpha1.ThresholdDecisionPolicy":
            return {
                type: "/regen.group.v1alpha1.ThresholdDecisionPolicy",
                value: exports.ThresholdDecisionPolicy.toAmino(exports.ThresholdDecisionPolicy.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.DecisionPolicy_ToAmino = DecisionPolicy_ToAmino;
