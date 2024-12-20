"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_groupDecisionPolicy_ToAmino = exports.Cosmos_groupDecisionPolicy_FromAmino = exports.Cosmos_groupDecisionPolicy_InterfaceDecoder = exports.Vote = exports.TallyResult = exports.Proposal = exports.GroupPolicyInfo = exports.GroupMember = exports.GroupInfo = exports.DecisionPolicyWindows = exports.PercentageDecisionPolicy = exports.ThresholdDecisionPolicy = exports.Members = exports.Member = exports.ProposalExecutorResultAmino = exports.ProposalExecutorResultSDKType = exports.ProposalExecutorResult = exports.ProposalResultAmino = exports.ProposalResultSDKType = exports.ProposalResult = exports.ProposalStatusAmino = exports.ProposalStatusSDKType = exports.ProposalStatus = exports.VoteOptionAmino = exports.VoteOptionSDKType = exports.VoteOption = void 0;
exports.voteOptionFromJSON = voteOptionFromJSON;
exports.voteOptionToJSON = voteOptionToJSON;
exports.proposalStatusFromJSON = proposalStatusFromJSON;
exports.proposalStatusToJSON = proposalStatusToJSON;
exports.proposalResultFromJSON = proposalResultFromJSON;
exports.proposalResultToJSON = proposalResultToJSON;
exports.proposalExecutorResultFromJSON = proposalExecutorResultFromJSON;
exports.proposalExecutorResultToJSON = proposalExecutorResultToJSON;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
/** VoteOption enumerates the valid vote options for a given proposal. */
var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption || (exports.VoteOption = VoteOption = {}));
exports.VoteOptionSDKType = VoteOption;
exports.VoteOptionAmino = VoteOption;
function voteOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_OPTION_UNSPECIFIED":
            return VoteOption.VOTE_OPTION_UNSPECIFIED;
        case 1:
        case "VOTE_OPTION_YES":
            return VoteOption.VOTE_OPTION_YES;
        case 2:
        case "VOTE_OPTION_ABSTAIN":
            return VoteOption.VOTE_OPTION_ABSTAIN;
        case 3:
        case "VOTE_OPTION_NO":
            return VoteOption.VOTE_OPTION_NO;
        case 4:
        case "VOTE_OPTION_NO_WITH_VETO":
            return VoteOption.VOTE_OPTION_NO_WITH_VETO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteOption.UNRECOGNIZED;
    }
}
function voteOptionToJSON(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return "VOTE_OPTION_UNSPECIFIED";
        case VoteOption.VOTE_OPTION_YES:
            return "VOTE_OPTION_YES";
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return "VOTE_OPTION_ABSTAIN";
        case VoteOption.VOTE_OPTION_NO:
            return "VOTE_OPTION_NO";
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return "VOTE_OPTION_NO_WITH_VETO";
        case VoteOption.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ProposalStatus defines proposal statuses. */
var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when persisted. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_SUBMITTED"] = 1] = "PROPOSAL_STATUS_SUBMITTED";
    /** PROPOSAL_STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_CLOSED"] = 2] = "PROPOSAL_STATUS_CLOSED";
    /** PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group was modified before the final tally. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ABORTED"] = 3] = "PROPOSAL_STATUS_ABORTED";
    /**
     * PROPOSAL_STATUS_WITHDRAWN - A proposal can be deleted before the voting start time by the owner. When this happens the final status
     * is Withdrawn.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_WITHDRAWN"] = 4] = "PROPOSAL_STATUS_WITHDRAWN";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus || (exports.ProposalStatus = ProposalStatus = {}));
exports.ProposalStatusSDKType = ProposalStatus;
exports.ProposalStatusAmino = ProposalStatus;
function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_STATUS_UNSPECIFIED":
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case "PROPOSAL_STATUS_SUBMITTED":
            return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
        case 2:
        case "PROPOSAL_STATUS_CLOSED":
            return ProposalStatus.PROPOSAL_STATUS_CLOSED;
        case 3:
        case "PROPOSAL_STATUS_ABORTED":
            return ProposalStatus.PROPOSAL_STATUS_ABORTED;
        case 4:
        case "PROPOSAL_STATUS_WITHDRAWN":
            return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalStatus.UNRECOGNIZED;
    }
}
function proposalStatusToJSON(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return "PROPOSAL_STATUS_UNSPECIFIED";
        case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
            return "PROPOSAL_STATUS_SUBMITTED";
        case ProposalStatus.PROPOSAL_STATUS_CLOSED:
            return "PROPOSAL_STATUS_CLOSED";
        case ProposalStatus.PROPOSAL_STATUS_ABORTED:
            return "PROPOSAL_STATUS_ABORTED";
        case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
            return "PROPOSAL_STATUS_WITHDRAWN";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ProposalResult defines types of proposal results. */
var ProposalResult;
(function (ProposalResult) {
    /** PROPOSAL_RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_RESULT_UNSPECIFIED";
    /** PROPOSAL_RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_UNFINALIZED"] = 1] = "PROPOSAL_RESULT_UNFINALIZED";
    /** PROPOSAL_RESULT_ACCEPTED - Final result of the tally */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_ACCEPTED"] = 2] = "PROPOSAL_RESULT_ACCEPTED";
    /** PROPOSAL_RESULT_REJECTED - Final result of the tally */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_REJECTED"] = 3] = "PROPOSAL_RESULT_REJECTED";
    ProposalResult[ProposalResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalResult || (exports.ProposalResult = ProposalResult = {}));
exports.ProposalResultSDKType = ProposalResult;
exports.ProposalResultAmino = ProposalResult;
function proposalResultFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_RESULT_UNSPECIFIED":
            return ProposalResult.PROPOSAL_RESULT_UNSPECIFIED;
        case 1:
        case "PROPOSAL_RESULT_UNFINALIZED":
            return ProposalResult.PROPOSAL_RESULT_UNFINALIZED;
        case 2:
        case "PROPOSAL_RESULT_ACCEPTED":
            return ProposalResult.PROPOSAL_RESULT_ACCEPTED;
        case 3:
        case "PROPOSAL_RESULT_REJECTED":
            return ProposalResult.PROPOSAL_RESULT_REJECTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalResult.UNRECOGNIZED;
    }
}
function proposalResultToJSON(object) {
    switch (object) {
        case ProposalResult.PROPOSAL_RESULT_UNSPECIFIED:
            return "PROPOSAL_RESULT_UNSPECIFIED";
        case ProposalResult.PROPOSAL_RESULT_UNFINALIZED:
            return "PROPOSAL_RESULT_UNFINALIZED";
        case ProposalResult.PROPOSAL_RESULT_ACCEPTED:
            return "PROPOSAL_RESULT_ACCEPTED";
        case ProposalResult.PROPOSAL_RESULT_REJECTED:
            return "PROPOSAL_RESULT_REJECTED";
        case ProposalResult.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ProposalExecutorResult defines types of proposal executor results. */
var ProposalExecutorResult;
(function (ProposalExecutorResult) {
    /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_NOT_RUN"] = 1] = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_SUCCESS"] = 2] = "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_FAILURE"] = 3] = "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    ProposalExecutorResult[ProposalExecutorResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalExecutorResult || (exports.ProposalExecutorResult = ProposalExecutorResult = {}));
exports.ProposalExecutorResultSDKType = ProposalExecutorResult;
exports.ProposalExecutorResultAmino = ProposalExecutorResult;
function proposalExecutorResultFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
        case 1:
        case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
        case 2:
        case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
        case 3:
        case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalExecutorResult.UNRECOGNIZED;
    }
}
function proposalExecutorResultToJSON(object) {
    switch (object) {
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
            return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
            return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
            return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
            return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
        case ProposalExecutorResult.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMember() {
    return {
        address: "",
        weight: "",
        metadata: "",
        addedAt: new Date()
    };
}
exports.Member = {
    typeUrl: "/cosmos.group.v1.Member",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.addedAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.addedAt), writer.uint32(34).fork()).ldelim();
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
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.addedAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        message.metadata = object.metadata ?? "";
        message.addedAt = object.addedAt ?? undefined;
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
            message.metadata = object.metadata;
        }
        if (object.added_at !== undefined && object.added_at !== null) {
            message.addedAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.added_at));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.weight = message.weight === "" ? undefined : message.weight;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.added_at = message.addedAt ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.addedAt)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Member.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Member",
            value: exports.Member.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Member.decode(message.value);
    },
    toProto(message) {
        return exports.Member.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.Member",
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
    typeUrl: "/cosmos.group.v1.Members",
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
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Members",
            value: exports.Members.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Members.decode(message.value);
    },
    toProto(message) {
        return exports.Members.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.Members",
            value: exports.Members.encode(message).finish()
        };
    }
};
function createBaseThresholdDecisionPolicy() {
    return {
        $typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
        threshold: "",
        windows: undefined
    };
}
exports.ThresholdDecisionPolicy = {
    typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.threshold !== "") {
            writer.uint32(10).string(message.threshold);
        }
        if (message.windows !== undefined) {
            exports.DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
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
                    message.windows = exports.DecisionPolicyWindows.decode(reader, reader.uint32());
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
        message.windows = object.windows !== undefined && object.windows !== null ? exports.DecisionPolicyWindows.fromPartial(object.windows) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseThresholdDecisionPolicy();
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        if (object.windows !== undefined && object.windows !== null) {
            message.windows = exports.DecisionPolicyWindows.fromAmino(object.windows);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.threshold = message.threshold === "" ? undefined : message.threshold;
        obj.windows = message.windows ? exports.DecisionPolicyWindows.toAmino(message.windows) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ThresholdDecisionPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ThresholdDecisionPolicy",
            value: exports.ThresholdDecisionPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ThresholdDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.ThresholdDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
            value: exports.ThresholdDecisionPolicy.encode(message).finish()
        };
    }
};
function createBasePercentageDecisionPolicy() {
    return {
        $typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
        percentage: "",
        windows: undefined
    };
}
exports.PercentageDecisionPolicy = {
    typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.percentage !== "") {
            writer.uint32(10).string(message.percentage);
        }
        if (message.windows !== undefined) {
            exports.DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePercentageDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.percentage = reader.string();
                    break;
                case 2:
                    message.windows = exports.DecisionPolicyWindows.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePercentageDecisionPolicy();
        message.percentage = object.percentage ?? "";
        message.windows = object.windows !== undefined && object.windows !== null ? exports.DecisionPolicyWindows.fromPartial(object.windows) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePercentageDecisionPolicy();
        if (object.percentage !== undefined && object.percentage !== null) {
            message.percentage = object.percentage;
        }
        if (object.windows !== undefined && object.windows !== null) {
            message.windows = exports.DecisionPolicyWindows.fromAmino(object.windows);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.percentage = message.percentage === "" ? undefined : message.percentage;
        obj.windows = message.windows ? exports.DecisionPolicyWindows.toAmino(message.windows) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PercentageDecisionPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PercentageDecisionPolicy",
            value: exports.PercentageDecisionPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PercentageDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return exports.PercentageDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
            value: exports.PercentageDecisionPolicy.encode(message).finish()
        };
    }
};
function createBaseDecisionPolicyWindows() {
    return {
        votingPeriod: duration_1.Duration.fromPartial({}),
        minExecutionPeriod: duration_1.Duration.fromPartial({})
    };
}
exports.DecisionPolicyWindows = {
    typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.votingPeriod !== undefined) {
            duration_1.Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
        }
        if (message.minExecutionPeriod !== undefined) {
            duration_1.Duration.encode(message.minExecutionPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecisionPolicyWindows();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.minExecutionPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDecisionPolicyWindows();
        message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? duration_1.Duration.fromPartial(object.votingPeriod) : undefined;
        message.minExecutionPeriod = object.minExecutionPeriod !== undefined && object.minExecutionPeriod !== null ? duration_1.Duration.fromPartial(object.minExecutionPeriod) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDecisionPolicyWindows();
        if (object.voting_period !== undefined && object.voting_period !== null) {
            message.votingPeriod = duration_1.Duration.fromAmino(object.voting_period);
        }
        if (object.min_execution_period !== undefined && object.min_execution_period !== null) {
            message.minExecutionPeriod = duration_1.Duration.fromAmino(object.min_execution_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.voting_period = message.votingPeriod ? duration_1.Duration.toAmino(message.votingPeriod) : undefined;
        obj.min_execution_period = message.minExecutionPeriod ? duration_1.Duration.toAmino(message.minExecutionPeriod) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DecisionPolicyWindows.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DecisionPolicyWindows",
            value: exports.DecisionPolicyWindows.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DecisionPolicyWindows.decode(message.value);
    },
    toProto(message) {
        return exports.DecisionPolicyWindows.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
            value: exports.DecisionPolicyWindows.encode(message).finish()
        };
    }
};
function createBaseGroupInfo() {
    return {
        id: BigInt(0),
        admin: "",
        metadata: "",
        version: BigInt(0),
        totalWeight: "",
        createdAt: new Date()
    };
}
exports.GroupInfo = {
    typeUrl: "/cosmos.group.v1.GroupInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(32).uint64(message.version);
        }
        if (message.totalWeight !== "") {
            writer.uint32(42).string(message.totalWeight);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.createdAt), writer.uint32(50).fork()).ldelim();
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
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.version = reader.uint64();
                    break;
                case 5:
                    message.totalWeight = reader.string();
                    break;
                case 6:
                    message.createdAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.admin = object.admin ?? "";
        message.metadata = object.metadata ?? "";
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.totalWeight = object.totalWeight ?? "";
        message.createdAt = object.createdAt ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroupInfo();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        if (object.total_weight !== undefined && object.total_weight !== null) {
            message.totalWeight = object.total_weight;
        }
        if (object.created_at !== undefined && object.created_at !== null) {
            message.createdAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.created_at));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.version = message.version !== BigInt(0) ? (message.version?.toString)() : undefined;
        obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
        obj.created_at = message.createdAt ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.createdAt)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GroupInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GroupInfo",
            value: exports.GroupInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GroupInfo.decode(message.value);
    },
    toProto(message) {
        return exports.GroupInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.GroupInfo",
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
    typeUrl: "/cosmos.group.v1.GroupMember",
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
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GroupMember",
            value: exports.GroupMember.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GroupMember.decode(message.value);
    },
    toProto(message) {
        return exports.GroupMember.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.GroupMember",
            value: exports.GroupMember.encode(message).finish()
        };
    }
};
function createBaseGroupPolicyInfo() {
    return {
        address: "",
        groupId: BigInt(0),
        admin: "",
        metadata: "",
        version: BigInt(0),
        decisionPolicy: undefined,
        createdAt: new Date()
    };
}
exports.GroupPolicyInfo = {
    typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
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
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(40).uint64(message.version);
        }
        if (message.decisionPolicy !== undefined) {
            any_1.Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupPolicyInfo();
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
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.version = reader.uint64();
                    break;
                case 6:
                    message.decisionPolicy = (0, exports.Cosmos_groupDecisionPolicy_InterfaceDecoder)(reader);
                    break;
                case 7:
                    message.createdAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGroupPolicyInfo();
        message.address = object.address ?? "";
        message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
        message.admin = object.admin ?? "";
        message.metadata = object.metadata ?? "";
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? any_1.Any.fromPartial(object.decisionPolicy) : undefined;
        message.createdAt = object.createdAt ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGroupPolicyInfo();
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
            message.metadata = object.metadata;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decisionPolicy = (0, exports.Cosmos_groupDecisionPolicy_FromAmino)(object.decision_policy);
        }
        if (object.created_at !== undefined && object.created_at !== null) {
            message.createdAt = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.created_at));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.group_id = message.groupId !== BigInt(0) ? (message.groupId?.toString)() : undefined;
        obj.admin = message.admin === "" ? undefined : message.admin;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.version = message.version !== BigInt(0) ? (message.version?.toString)() : undefined;
        obj.decision_policy = message.decisionPolicy ? (0, exports.Cosmos_groupDecisionPolicy_ToAmino)(message.decisionPolicy) : undefined;
        obj.created_at = message.createdAt ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.createdAt)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GroupPolicyInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GroupPolicyInfo",
            value: exports.GroupPolicyInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GroupPolicyInfo.decode(message.value);
    },
    toProto(message) {
        return exports.GroupPolicyInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
            value: exports.GroupPolicyInfo.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        id: BigInt(0),
        address: "",
        metadata: "",
        proposers: [],
        submitTime: new Date(),
        groupVersion: BigInt(0),
        groupPolicyVersion: BigInt(0),
        status: 0,
        result: 0,
        finalTallyResult: exports.TallyResult.fromPartial({}),
        votingPeriodEnd: new Date(),
        executorResult: 0,
        messages: []
    };
}
exports.Proposal = {
    typeUrl: "/cosmos.group.v1.Proposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (const v of message.proposers) {
            writer.uint32(34).string(v);
        }
        if (message.submitTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.groupVersion !== BigInt(0)) {
            writer.uint32(48).uint64(message.groupVersion);
        }
        if (message.groupPolicyVersion !== BigInt(0)) {
            writer.uint32(56).uint64(message.groupPolicyVersion);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.result !== 0) {
            writer.uint32(72).int32(message.result);
        }
        if (message.finalTallyResult !== undefined) {
            exports.TallyResult.encode(message.finalTallyResult, writer.uint32(82).fork()).ldelim();
        }
        if (message.votingPeriodEnd !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.votingPeriodEnd), writer.uint32(90).fork()).ldelim();
        }
        if (message.executorResult !== 0) {
            writer.uint32(96).int32(message.executorResult);
        }
        for (const v of message.messages) {
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
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.proposers.push(reader.string());
                    break;
                case 5:
                    message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.groupVersion = reader.uint64();
                    break;
                case 7:
                    message.groupPolicyVersion = reader.uint64();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.result = reader.int32();
                    break;
                case 10:
                    message.finalTallyResult = exports.TallyResult.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.votingPeriodEnd = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.executorResult = reader.int32();
                    break;
                case 13:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
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
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.address = object.address ?? "";
        message.metadata = object.metadata ?? "";
        message.proposers = object.proposers?.map(e => e) || [];
        message.submitTime = object.submitTime ?? undefined;
        message.groupVersion = object.groupVersion !== undefined && object.groupVersion !== null ? BigInt(object.groupVersion.toString()) : BigInt(0);
        message.groupPolicyVersion = object.groupPolicyVersion !== undefined && object.groupPolicyVersion !== null ? BigInt(object.groupPolicyVersion.toString()) : BigInt(0);
        message.status = object.status ?? 0;
        message.result = object.result ?? 0;
        message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? exports.TallyResult.fromPartial(object.finalTallyResult) : undefined;
        message.votingPeriodEnd = object.votingPeriodEnd ?? undefined;
        message.executorResult = object.executorResult ?? 0;
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseProposal();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        message.proposers = object.proposers?.map(e => e) || [];
        if (object.submit_time !== undefined && object.submit_time !== null) {
            message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.submit_time));
        }
        if (object.group_version !== undefined && object.group_version !== null) {
            message.groupVersion = BigInt(object.group_version);
        }
        if (object.group_policy_version !== undefined && object.group_policy_version !== null) {
            message.groupPolicyVersion = BigInt(object.group_policy_version);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        if (object.final_tally_result !== undefined && object.final_tally_result !== null) {
            message.finalTallyResult = exports.TallyResult.fromAmino(object.final_tally_result);
        }
        if (object.voting_period_end !== undefined && object.voting_period_end !== null) {
            message.votingPeriodEnd = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.voting_period_end));
        }
        if (object.executor_result !== undefined && object.executor_result !== null) {
            message.executorResult = object.executor_result;
        }
        message.messages = object.messages?.map(e => any_1.Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? (message.id?.toString)() : undefined;
        obj.address = message.address === "" ? undefined : message.address;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = message.proposers;
        }
        obj.submit_time = message.submitTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.submitTime)) : undefined;
        obj.group_version = message.groupVersion !== BigInt(0) ? (message.groupVersion?.toString)() : undefined;
        obj.group_policy_version = message.groupPolicyVersion !== BigInt(0) ? (message.groupPolicyVersion?.toString)() : undefined;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.result = message.result === 0 ? undefined : message.result;
        obj.final_tally_result = message.finalTallyResult ? exports.TallyResult.toAmino(message.finalTallyResult) : undefined;
        obj.voting_period_end = message.votingPeriodEnd ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.votingPeriodEnd)) : undefined;
        obj.executor_result = message.executorResult === 0 ? undefined : message.executorResult;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = message.messages;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Proposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Proposal",
            value: exports.Proposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Proposal.decode(message.value);
    },
    toProto(message) {
        return exports.Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.Proposal",
            value: exports.Proposal.encode(message).finish()
        };
    }
};
function createBaseTallyResult() {
    return {
        yesCount: "",
        abstainCount: "",
        noCount: "",
        noWithVetoCount: ""
    };
}
exports.TallyResult = {
    typeUrl: "/cosmos.group.v1.TallyResult",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.yesCount !== "") {
            writer.uint32(10).string(message.yesCount);
        }
        if (message.abstainCount !== "") {
            writer.uint32(18).string(message.abstainCount);
        }
        if (message.noCount !== "") {
            writer.uint32(26).string(message.noCount);
        }
        if (message.noWithVetoCount !== "") {
            writer.uint32(34).string(message.noWithVetoCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yesCount = reader.string();
                    break;
                case 2:
                    message.abstainCount = reader.string();
                    break;
                case 3:
                    message.noCount = reader.string();
                    break;
                case 4:
                    message.noWithVetoCount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTallyResult();
        message.yesCount = object.yesCount ?? "";
        message.abstainCount = object.abstainCount ?? "";
        message.noCount = object.noCount ?? "";
        message.noWithVetoCount = object.noWithVetoCount ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTallyResult();
        if (object.yes_count !== undefined && object.yes_count !== null) {
            message.yesCount = object.yes_count;
        }
        if (object.abstain_count !== undefined && object.abstain_count !== null) {
            message.abstainCount = object.abstain_count;
        }
        if (object.no_count !== undefined && object.no_count !== null) {
            message.noCount = object.no_count;
        }
        if (object.no_with_veto_count !== undefined && object.no_with_veto_count !== null) {
            message.noWithVetoCount = object.no_with_veto_count;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.yes_count = message.yesCount === "" ? undefined : message.yesCount;
        obj.abstain_count = message.abstainCount === "" ? undefined : message.abstainCount;
        obj.no_count = message.noCount === "" ? undefined : message.noCount;
        obj.no_with_veto_count = message.noWithVetoCount === "" ? undefined : message.noWithVetoCount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TallyResult.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TallyResult",
            value: exports.TallyResult.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TallyResult.decode(message.value);
    },
    toProto(message) {
        return exports.TallyResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.TallyResult",
            value: exports.TallyResult.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        proposalId: BigInt(0),
        voter: "",
        option: 0,
        metadata: "",
        submitTime: new Date()
    };
}
exports.Vote = {
    typeUrl: "/cosmos.group.v1.Vote",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.submitTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
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
                    message.option = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        message.option = object.option ?? 0;
        message.metadata = object.metadata ?? "";
        message.submitTime = object.submitTime ?? undefined;
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
        if (object.option !== undefined && object.option !== null) {
            message.option = object.option;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.submit_time !== undefined && object.submit_time !== null) {
            message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.submit_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        obj.voter = message.voter === "" ? undefined : message.voter;
        obj.option = message.option === 0 ? undefined : message.option;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        obj.submit_time = message.submitTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.submitTime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Vote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Vote",
            value: exports.Vote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Vote.decode(message.value);
    },
    toProto(message) {
        return exports.Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.Vote",
            value: exports.Vote.encode(message).finish()
        };
    }
};
const Cosmos_groupDecisionPolicy_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.group.v1.ThresholdDecisionPolicy":
            return exports.ThresholdDecisionPolicy.decode(data.value);
        case "/cosmos.group.v1.PercentageDecisionPolicy":
            return exports.PercentageDecisionPolicy.decode(data.value);
        default:
            return data;
    }
};
exports.Cosmos_groupDecisionPolicy_InterfaceDecoder = Cosmos_groupDecisionPolicy_InterfaceDecoder;
const Cosmos_groupDecisionPolicy_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/ThresholdDecisionPolicy":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
                value: exports.ThresholdDecisionPolicy.encode(exports.ThresholdDecisionPolicy.fromPartial(exports.ThresholdDecisionPolicy.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/PercentageDecisionPolicy":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
                value: exports.PercentageDecisionPolicy.encode(exports.PercentageDecisionPolicy.fromPartial(exports.PercentageDecisionPolicy.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.Cosmos_groupDecisionPolicy_FromAmino = Cosmos_groupDecisionPolicy_FromAmino;
const Cosmos_groupDecisionPolicy_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.group.v1.ThresholdDecisionPolicy":
            return {
                type: "cosmos-sdk/ThresholdDecisionPolicy",
                value: exports.ThresholdDecisionPolicy.toAmino(exports.ThresholdDecisionPolicy.decode(content.value, undefined))
            };
        case "/cosmos.group.v1.PercentageDecisionPolicy":
            return {
                type: "cosmos-sdk/PercentageDecisionPolicy",
                value: exports.PercentageDecisionPolicy.toAmino(exports.PercentageDecisionPolicy.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.Cosmos_groupDecisionPolicy_ToAmino = Cosmos_groupDecisionPolicy_ToAmino;
