"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_govv1beta1Content_ToAmino = exports.Cosmos_govv1beta1Content_FromAmino = exports.Cosmos_govv1beta1Content_InterfaceDecoder = exports.TallyParams = exports.VotingParams = exports.DepositParams = exports.Vote = exports.TallyResult = exports.Proposal = exports.Deposit = exports.TextProposal = exports.WeightedVoteOption = exports.ProposalStatusAmino = exports.ProposalStatusSDKType = exports.ProposalStatus = exports.VoteOptionAmino = exports.VoteOptionSDKType = exports.VoteOption = void 0;
exports.voteOptionFromJSON = voteOptionFromJSON;
exports.voteOptionToJSON = voteOptionToJSON;
exports.proposalStatusFromJSON = proposalStatusFromJSON;
exports.proposalStatusToJSON = proposalStatusToJSON;
//@ts-nocheck
const coin_1 = require("../../base/v1beta1/coin");
const any_1 = require("../../../google/protobuf/any");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const distribution_1 = require("../../distribution/v1beta1/distribution");
const params_1 = require("../../params/v1beta1/params");
const upgrade_1 = require("../../upgrade/v1beta1/upgrade");
const proposal_1 = require("../../../cosmwasm/wasm/v1/proposal");
const client_1 = require("../../../ibc/core/client/v1/client");
const gov_1 = require("../../../osmosis/pool-incentives/v1beta1/gov");
const gov_2 = require("../../../osmosis/protorev/v1beta1/gov");
const gov_3 = require("../../../osmosis/superfluid/v1beta1/gov");
const gov_4 = require("../../../osmosis/txfees/v1beta1/gov");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../helpers");
/** VoteOption enumerates the valid vote options for a given governance proposal. */
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
/** ProposalStatus enumerates the valid statuses of a proposal. */
var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
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
        case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
        case 2:
        case "PROPOSAL_STATUS_VOTING_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
        case 3:
        case "PROPOSAL_STATUS_PASSED":
            return ProposalStatus.PROPOSAL_STATUS_PASSED;
        case 4:
        case "PROPOSAL_STATUS_REJECTED":
            return ProposalStatus.PROPOSAL_STATUS_REJECTED;
        case 5:
        case "PROPOSAL_STATUS_FAILED":
            return ProposalStatus.PROPOSAL_STATUS_FAILED;
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
        case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
            return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
            return "PROPOSAL_STATUS_VOTING_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_PASSED:
            return "PROPOSAL_STATUS_PASSED";
        case ProposalStatus.PROPOSAL_STATUS_REJECTED:
            return "PROPOSAL_STATUS_REJECTED";
        case ProposalStatus.PROPOSAL_STATUS_FAILED:
            return "PROPOSAL_STATUS_FAILED";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseWeightedVoteOption() {
    return {
        option: 0,
        weight: ""
    };
}
exports.WeightedVoteOption = {
    typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.option !== 0) {
            writer.uint32(8).int32(message.option);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedVoteOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.option = reader.int32();
                    break;
                case 2:
                    message.weight = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseWeightedVoteOption();
        message.option = object.option ?? 0;
        message.weight = object.weight ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseWeightedVoteOption();
        if (object.option !== undefined && object.option !== null) {
            message.option = object.option;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.option = message.option === 0 ? undefined : message.option;
        obj.weight = message.weight === "" ? undefined : message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WeightedVoteOption.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/WeightedVoteOption",
            value: exports.WeightedVoteOption.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.WeightedVoteOption.decode(message.value);
    },
    toProto(message) {
        return exports.WeightedVoteOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption",
            value: exports.WeightedVoteOption.encode(message).finish()
        };
    }
};
function createBaseTextProposal() {
    return {
        $typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        title: "",
        description: ""
    };
}
exports.TextProposal = {
    typeUrl: "/cosmos.gov.v1beta1.TextProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTextProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTextProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTextProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TextProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TextProposal",
            value: exports.TextProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TextProposal.decode(message.value);
    },
    toProto(message) {
        return exports.TextProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.TextProposal",
            value: exports.TextProposal.encode(message).finish()
        };
    }
};
function createBaseDeposit() {
    return {
        proposalId: BigInt(0),
        depositor: "",
        amount: []
    };
}
exports.Deposit = {
    typeUrl: "/cosmos.gov.v1beta1.Deposit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDeposit();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.depositor = object.depositor ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDeposit();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        obj.depositor = message.depositor === "" ? undefined : message.depositor;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = message.amount;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Deposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Deposit",
            value: exports.Deposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Deposit.decode(message.value);
    },
    toProto(message) {
        return exports.Deposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.Deposit",
            value: exports.Deposit.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        proposalId: BigInt(0),
        content: undefined,
        status: 0,
        finalTallyResult: exports.TallyResult.fromPartial({}),
        submitTime: new Date(),
        depositEndTime: new Date(),
        totalDeposit: [],
        votingStartTime: new Date(),
        votingEndTime: new Date()
    };
}
exports.Proposal = {
    typeUrl: "/cosmos.gov.v1beta1.Proposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.content !== undefined) {
            any_1.Any.encode(message.content, writer.uint32(18).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.finalTallyResult !== undefined) {
            exports.TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
        }
        if (message.submitTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.submitTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.depositEndTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.depositEndTime), writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.totalDeposit) {
            coin_1.Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.votingStartTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.votingStartTime), writer.uint32(66).fork()).ldelim();
        }
        if (message.votingEndTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.votingEndTime), writer.uint32(74).fork()).ldelim();
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
                    message.content = (0, exports.Cosmos_govv1beta1Content_InterfaceDecoder)(reader);
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.finalTallyResult = exports.TallyResult.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.depositEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.totalDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votingStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.votingEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
        message.content = object.content !== undefined && object.content !== null ? any_1.Any.fromPartial(object.content) : undefined;
        message.status = object.status ?? 0;
        message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? exports.TallyResult.fromPartial(object.finalTallyResult) : undefined;
        message.submitTime = object.submitTime ?? undefined;
        message.depositEndTime = object.depositEndTime ?? undefined;
        message.totalDeposit = object.totalDeposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.votingStartTime = object.votingStartTime ?? undefined;
        message.votingEndTime = object.votingEndTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.content !== undefined && object.content !== null) {
            message.content = (0, exports.Cosmos_govv1beta1Content_FromAmino)(object.content);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.final_tally_result !== undefined && object.final_tally_result !== null) {
            message.finalTallyResult = exports.TallyResult.fromAmino(object.final_tally_result);
        }
        if (object.submit_time !== undefined && object.submit_time !== null) {
            message.submitTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.submit_time));
        }
        if (object.deposit_end_time !== undefined && object.deposit_end_time !== null) {
            message.depositEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.deposit_end_time));
        }
        message.totalDeposit = object.total_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.voting_start_time !== undefined && object.voting_start_time !== null) {
            message.votingStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.voting_start_time));
        }
        if (object.voting_end_time !== undefined && object.voting_end_time !== null) {
            message.votingEndTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.voting_end_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        obj.content = message.content ? (0, exports.Cosmos_govv1beta1Content_ToAmino)(message.content) : undefined;
        obj.status = message.status === 0 ? undefined : message.status;
        obj.final_tally_result = message.finalTallyResult ? exports.TallyResult.toAmino(message.finalTallyResult) : undefined;
        obj.submit_time = message.submitTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.submitTime)) : undefined;
        obj.deposit_end_time = message.depositEndTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.depositEndTime)) : undefined;
        if (message.totalDeposit) {
            obj.total_deposit = message.totalDeposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_deposit = message.totalDeposit;
        }
        obj.voting_start_time = message.votingStartTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.votingStartTime)) : undefined;
        obj.voting_end_time = message.votingEndTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.votingEndTime)) : undefined;
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
            typeUrl: "/cosmos.gov.v1beta1.Proposal",
            value: exports.Proposal.encode(message).finish()
        };
    }
};
function createBaseTallyResult() {
    return {
        yes: "",
        abstain: "",
        no: "",
        noWithVeto: ""
    };
}
exports.TallyResult = {
    typeUrl: "/cosmos.gov.v1beta1.TallyResult",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.yes !== "") {
            writer.uint32(10).string(message.yes);
        }
        if (message.abstain !== "") {
            writer.uint32(18).string(message.abstain);
        }
        if (message.no !== "") {
            writer.uint32(26).string(message.no);
        }
        if (message.noWithVeto !== "") {
            writer.uint32(34).string(message.noWithVeto);
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
                    message.yes = reader.string();
                    break;
                case 2:
                    message.abstain = reader.string();
                    break;
                case 3:
                    message.no = reader.string();
                    break;
                case 4:
                    message.noWithVeto = reader.string();
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
        message.yes = object.yes ?? "";
        message.abstain = object.abstain ?? "";
        message.no = object.no ?? "";
        message.noWithVeto = object.noWithVeto ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTallyResult();
        if (object.yes !== undefined && object.yes !== null) {
            message.yes = object.yes;
        }
        if (object.abstain !== undefined && object.abstain !== null) {
            message.abstain = object.abstain;
        }
        if (object.no !== undefined && object.no !== null) {
            message.no = object.no;
        }
        if (object.no_with_veto !== undefined && object.no_with_veto !== null) {
            message.noWithVeto = object.no_with_veto;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.yes = message.yes === "" ? undefined : message.yes;
        obj.abstain = message.abstain === "" ? undefined : message.abstain;
        obj.no = message.no === "" ? undefined : message.no;
        obj.no_with_veto = message.noWithVeto === "" ? undefined : message.noWithVeto;
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
            typeUrl: "/cosmos.gov.v1beta1.TallyResult",
            value: exports.TallyResult.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        proposalId: BigInt(0),
        voter: "",
        option: 0,
        options: []
    };
}
exports.Vote = {
    typeUrl: "/cosmos.gov.v1beta1.Vote",
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
        for (const v of message.options) {
            exports.WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.options.push(exports.WeightedVoteOption.decode(reader, reader.uint32()));
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
        message.options = object.options?.map(e => exports.WeightedVoteOption.fromPartial(e)) || [];
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
        message.options = object.options?.map(e => exports.WeightedVoteOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? (message.proposalId?.toString)() : "0";
        obj.voter = message.voter === "" ? undefined : message.voter;
        obj.option = message.option === 0 ? undefined : message.option;
        if (message.options) {
            obj.options = message.options.map(e => e ? exports.WeightedVoteOption.toAmino(e) : undefined);
        }
        else {
            obj.options = message.options;
        }
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
            typeUrl: "/cosmos.gov.v1beta1.Vote",
            value: exports.Vote.encode(message).finish()
        };
    }
};
function createBaseDepositParams() {
    return {
        minDeposit: [],
        maxDepositPeriod: duration_1.Duration.fromPartial({})
    };
}
exports.DepositParams = {
    typeUrl: "/cosmos.gov.v1beta1.DepositParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.minDeposit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxDepositPeriod !== undefined) {
            duration_1.Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.maxDepositPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDepositParams();
        message.minDeposit = object.minDeposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.maxDepositPeriod = object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null ? duration_1.Duration.fromPartial(object.maxDepositPeriod) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDepositParams();
        message.minDeposit = object.min_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
            message.maxDepositPeriod = duration_1.Duration.fromAmino(object.max_deposit_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.minDeposit) {
            obj.min_deposit = message.minDeposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_deposit = message.minDeposit;
        }
        obj.max_deposit_period = message.maxDepositPeriod ? duration_1.Duration.toAmino(message.maxDepositPeriod) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DepositParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DepositParams",
            value: exports.DepositParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DepositParams.decode(message.value);
    },
    toProto(message) {
        return exports.DepositParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.DepositParams",
            value: exports.DepositParams.encode(message).finish()
        };
    }
};
function createBaseVotingParams() {
    return {
        votingPeriod: duration_1.Duration.fromPartial({})
    };
}
exports.VotingParams = {
    typeUrl: "/cosmos.gov.v1beta1.VotingParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.votingPeriod !== undefined) {
            duration_1.Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVotingParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votingPeriod = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseVotingParams();
        message.votingPeriod = object.votingPeriod !== undefined && object.votingPeriod !== null ? duration_1.Duration.fromPartial(object.votingPeriod) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseVotingParams();
        if (object.voting_period !== undefined && object.voting_period !== null) {
            message.votingPeriod = duration_1.Duration.fromAmino(object.voting_period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.voting_period = message.votingPeriod ? duration_1.Duration.toAmino(message.votingPeriod) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VotingParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/VotingParams",
            value: exports.VotingParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.VotingParams.decode(message.value);
    },
    toProto(message) {
        return exports.VotingParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.VotingParams",
            value: exports.VotingParams.encode(message).finish()
        };
    }
};
function createBaseTallyParams() {
    return {
        quorum: new Uint8Array(),
        threshold: new Uint8Array(),
        vetoThreshold: new Uint8Array()
    };
}
exports.TallyParams = {
    typeUrl: "/cosmos.gov.v1beta1.TallyParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.quorum.length !== 0) {
            writer.uint32(10).bytes(message.quorum);
        }
        if (message.threshold.length !== 0) {
            writer.uint32(18).bytes(message.threshold);
        }
        if (message.vetoThreshold.length !== 0) {
            writer.uint32(26).bytes(message.vetoThreshold);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quorum = reader.bytes();
                    break;
                case 2:
                    message.threshold = reader.bytes();
                    break;
                case 3:
                    message.vetoThreshold = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseTallyParams();
        message.quorum = object.quorum ?? new Uint8Array();
        message.threshold = object.threshold ?? new Uint8Array();
        message.vetoThreshold = object.vetoThreshold ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseTallyParams();
        if (object.quorum !== undefined && object.quorum !== null) {
            message.quorum = (0, helpers_1.bytesFromBase64)(object.quorum);
        }
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = (0, helpers_1.bytesFromBase64)(object.threshold);
        }
        if (object.veto_threshold !== undefined && object.veto_threshold !== null) {
            message.vetoThreshold = (0, helpers_1.bytesFromBase64)(object.veto_threshold);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.quorum = message.quorum ? (0, helpers_1.base64FromBytes)(message.quorum) : undefined;
        obj.threshold = message.threshold ? (0, helpers_1.base64FromBytes)(message.threshold) : undefined;
        obj.veto_threshold = message.vetoThreshold ? (0, helpers_1.base64FromBytes)(message.vetoThreshold) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TallyParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TallyParams",
            value: exports.TallyParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TallyParams.decode(message.value);
    },
    toProto(message) {
        return exports.TallyParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.TallyParams",
            value: exports.TallyParams.encode(message).finish()
        };
    }
};
const Cosmos_govv1beta1Content_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
            return distribution_1.CommunityPoolSpendProposal.decode(data.value);
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
            return distribution_1.CommunityPoolSpendProposalWithDeposit.decode(data.value);
        case "/cosmos.gov.v1beta1.TextProposal":
            return exports.TextProposal.decode(data.value);
        case "/cosmos.params.v1beta1.ParameterChangeProposal":
            return params_1.ParameterChangeProposal.decode(data.value);
        case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
            return upgrade_1.SoftwareUpgradeProposal.decode(data.value);
        case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
            return upgrade_1.CancelSoftwareUpgradeProposal.decode(data.value);
        case "/cosmwasm.wasm.v1.StoreCodeProposal":
            return proposal_1.StoreCodeProposal.decode(data.value);
        case "/cosmwasm.wasm.v1.InstantiateContractProposal":
            return proposal_1.InstantiateContractProposal.decode(data.value);
        case "/cosmwasm.wasm.v1.InstantiateContract2Proposal":
            return proposal_1.InstantiateContract2Proposal.decode(data.value);
        case "/cosmwasm.wasm.v1.MigrateContractProposal":
            return proposal_1.MigrateContractProposal.decode(data.value);
        case "/cosmwasm.wasm.v1.SudoContractProposal":
            return proposal_1.SudoContractProposal.decode(data.value);
        case "/cosmwasm.wasm.v1.ExecuteContractProposal":
            return proposal_1.ExecuteContractProposal.decode(data.value);
        case "/cosmwasm.wasm.v1.UpdateAdminProposal":
            return proposal_1.UpdateAdminProposal.decode(data.value);
        case "/cosmwasm.wasm.v1.ClearAdminProposal":
            return proposal_1.ClearAdminProposal.decode(data.value);
        case "/cosmwasm.wasm.v1.PinCodesProposal":
            return proposal_1.PinCodesProposal.decode(data.value);
        case "/cosmwasm.wasm.v1.UnpinCodesProposal":
            return proposal_1.UnpinCodesProposal.decode(data.value);
        case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
            return proposal_1.UpdateInstantiateConfigProposal.decode(data.value);
        case "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal":
            return proposal_1.StoreAndInstantiateContractProposal.decode(data.value);
        case "/ibc.core.client.v1.ClientUpdateProposal":
            return client_1.ClientUpdateProposal.decode(data.value);
        case "/ibc.core.client.v1.UpgradeProposal":
            return client_1.UpgradeProposal.decode(data.value);
        case "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal":
            return gov_1.ReplacePoolIncentivesProposal.decode(data.value);
        case "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal":
            return gov_1.UpdatePoolIncentivesProposal.decode(data.value);
        case "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal":
            return gov_2.SetProtoRevEnabledProposal.decode(data.value);
        case "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal":
            return gov_2.SetProtoRevAdminAccountProposal.decode(data.value);
        case "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal":
            return gov_3.SetSuperfluidAssetsProposal.decode(data.value);
        case "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal":
            return gov_3.RemoveSuperfluidAssetsProposal.decode(data.value);
        case "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal":
            return gov_3.UpdateUnpoolWhiteListProposal.decode(data.value);
        case "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal":
            return gov_4.UpdateFeeTokenProposal.decode(data.value);
        default:
            return data;
    }
};
exports.Cosmos_govv1beta1Content_InterfaceDecoder = Cosmos_govv1beta1Content_InterfaceDecoder;
const Cosmos_govv1beta1Content_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/CommunityPoolSpendProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
                value: distribution_1.CommunityPoolSpendProposal.encode(distribution_1.CommunityPoolSpendProposal.fromPartial(distribution_1.CommunityPoolSpendProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/CommunityPoolSpendProposalWithDeposit":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
                value: distribution_1.CommunityPoolSpendProposalWithDeposit.encode(distribution_1.CommunityPoolSpendProposalWithDeposit.fromPartial(distribution_1.CommunityPoolSpendProposalWithDeposit.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/TextProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                value: exports.TextProposal.encode(exports.TextProposal.fromPartial(exports.TextProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/ParameterChangeProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
                value: params_1.ParameterChangeProposal.encode(params_1.ParameterChangeProposal.fromPartial(params_1.ParameterChangeProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/SoftwareUpgradeProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
                value: upgrade_1.SoftwareUpgradeProposal.encode(upgrade_1.SoftwareUpgradeProposal.fromPartial(upgrade_1.SoftwareUpgradeProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/CancelSoftwareUpgradeProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
                value: upgrade_1.CancelSoftwareUpgradeProposal.encode(upgrade_1.CancelSoftwareUpgradeProposal.fromPartial(upgrade_1.CancelSoftwareUpgradeProposal.fromAmino(content.value))).finish()
            });
        case "wasm/StoreCodeProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal",
                value: proposal_1.StoreCodeProposal.encode(proposal_1.StoreCodeProposal.fromPartial(proposal_1.StoreCodeProposal.fromAmino(content.value))).finish()
            });
        case "wasm/InstantiateContractProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal",
                value: proposal_1.InstantiateContractProposal.encode(proposal_1.InstantiateContractProposal.fromPartial(proposal_1.InstantiateContractProposal.fromAmino(content.value))).finish()
            });
        case "wasm/InstantiateContract2Proposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.InstantiateContract2Proposal",
                value: proposal_1.InstantiateContract2Proposal.encode(proposal_1.InstantiateContract2Proposal.fromPartial(proposal_1.InstantiateContract2Proposal.fromAmino(content.value))).finish()
            });
        case "wasm/MigrateContractProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal",
                value: proposal_1.MigrateContractProposal.encode(proposal_1.MigrateContractProposal.fromPartial(proposal_1.MigrateContractProposal.fromAmino(content.value))).finish()
            });
        case "wasm/SudoContractProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal",
                value: proposal_1.SudoContractProposal.encode(proposal_1.SudoContractProposal.fromPartial(proposal_1.SudoContractProposal.fromAmino(content.value))).finish()
            });
        case "wasm/ExecuteContractProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal",
                value: proposal_1.ExecuteContractProposal.encode(proposal_1.ExecuteContractProposal.fromPartial(proposal_1.ExecuteContractProposal.fromAmino(content.value))).finish()
            });
        case "wasm/UpdateAdminProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal",
                value: proposal_1.UpdateAdminProposal.encode(proposal_1.UpdateAdminProposal.fromPartial(proposal_1.UpdateAdminProposal.fromAmino(content.value))).finish()
            });
        case "wasm/ClearAdminProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal",
                value: proposal_1.ClearAdminProposal.encode(proposal_1.ClearAdminProposal.fromPartial(proposal_1.ClearAdminProposal.fromAmino(content.value))).finish()
            });
        case "wasm/PinCodesProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal",
                value: proposal_1.PinCodesProposal.encode(proposal_1.PinCodesProposal.fromPartial(proposal_1.PinCodesProposal.fromAmino(content.value))).finish()
            });
        case "wasm/UnpinCodesProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal",
                value: proposal_1.UnpinCodesProposal.encode(proposal_1.UnpinCodesProposal.fromPartial(proposal_1.UnpinCodesProposal.fromAmino(content.value))).finish()
            });
        case "wasm/UpdateInstantiateConfigProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal",
                value: proposal_1.UpdateInstantiateConfigProposal.encode(proposal_1.UpdateInstantiateConfigProposal.fromPartial(proposal_1.UpdateInstantiateConfigProposal.fromAmino(content.value))).finish()
            });
        case "wasm/StoreAndInstantiateContractProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal",
                value: proposal_1.StoreAndInstantiateContractProposal.encode(proposal_1.StoreAndInstantiateContractProposal.fromPartial(proposal_1.StoreAndInstantiateContractProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/ClientUpdateProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
                value: client_1.ClientUpdateProposal.encode(client_1.ClientUpdateProposal.fromPartial(client_1.ClientUpdateProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/UpgradeProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/ibc.core.client.v1.UpgradeProposal",
                value: client_1.UpgradeProposal.encode(client_1.UpgradeProposal.fromPartial(client_1.UpgradeProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/poolincentives/replace-pool-incentives-proposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
                value: gov_1.ReplacePoolIncentivesProposal.encode(gov_1.ReplacePoolIncentivesProposal.fromPartial(gov_1.ReplacePoolIncentivesProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/UpdatePoolIncentivesProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
                value: gov_1.UpdatePoolIncentivesProposal.encode(gov_1.UpdatePoolIncentivesProposal.fromPartial(gov_1.UpdatePoolIncentivesProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/protorev/set-proto-rev-enabled-proposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal",
                value: gov_2.SetProtoRevEnabledProposal.encode(gov_2.SetProtoRevEnabledProposal.fromPartial(gov_2.SetProtoRevEnabledProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/protorev/set-proto-rev-admin-account-proposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal",
                value: gov_2.SetProtoRevAdminAccountProposal.encode(gov_2.SetProtoRevAdminAccountProposal.fromPartial(gov_2.SetProtoRevAdminAccountProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/set-superfluid-assets-proposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
                value: gov_3.SetSuperfluidAssetsProposal.encode(gov_3.SetSuperfluidAssetsProposal.fromPartial(gov_3.SetSuperfluidAssetsProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/del-superfluid-assets-proposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
                value: gov_3.RemoveSuperfluidAssetsProposal.encode(gov_3.RemoveSuperfluidAssetsProposal.fromPartial(gov_3.RemoveSuperfluidAssetsProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/update-unpool-whitelist":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
                value: gov_3.UpdateUnpoolWhiteListProposal.encode(gov_3.UpdateUnpoolWhiteListProposal.fromPartial(gov_3.UpdateUnpoolWhiteListProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/UpdateFeeTokenProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
                value: gov_4.UpdateFeeTokenProposal.encode(gov_4.UpdateFeeTokenProposal.fromPartial(gov_4.UpdateFeeTokenProposal.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.Cosmos_govv1beta1Content_FromAmino = Cosmos_govv1beta1Content_FromAmino;
const Cosmos_govv1beta1Content_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal":
            return {
                type: "cosmos-sdk/CommunityPoolSpendProposal",
                value: distribution_1.CommunityPoolSpendProposal.toAmino(distribution_1.CommunityPoolSpendProposal.decode(content.value, undefined))
            };
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
            return {
                type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
                value: distribution_1.CommunityPoolSpendProposalWithDeposit.toAmino(distribution_1.CommunityPoolSpendProposalWithDeposit.decode(content.value, undefined))
            };
        case "/cosmos.gov.v1beta1.TextProposal":
            return {
                type: "cosmos-sdk/TextProposal",
                value: exports.TextProposal.toAmino(exports.TextProposal.decode(content.value, undefined))
            };
        case "/cosmos.params.v1beta1.ParameterChangeProposal":
            return {
                type: "cosmos-sdk/ParameterChangeProposal",
                value: params_1.ParameterChangeProposal.toAmino(params_1.ParameterChangeProposal.decode(content.value, undefined))
            };
        case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
            return {
                type: "cosmos-sdk/SoftwareUpgradeProposal",
                value: upgrade_1.SoftwareUpgradeProposal.toAmino(upgrade_1.SoftwareUpgradeProposal.decode(content.value, undefined))
            };
        case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
            return {
                type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
                value: upgrade_1.CancelSoftwareUpgradeProposal.toAmino(upgrade_1.CancelSoftwareUpgradeProposal.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.StoreCodeProposal":
            return {
                type: "wasm/StoreCodeProposal",
                value: proposal_1.StoreCodeProposal.toAmino(proposal_1.StoreCodeProposal.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.InstantiateContractProposal":
            return {
                type: "wasm/InstantiateContractProposal",
                value: proposal_1.InstantiateContractProposal.toAmino(proposal_1.InstantiateContractProposal.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.InstantiateContract2Proposal":
            return {
                type: "wasm/InstantiateContract2Proposal",
                value: proposal_1.InstantiateContract2Proposal.toAmino(proposal_1.InstantiateContract2Proposal.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.MigrateContractProposal":
            return {
                type: "wasm/MigrateContractProposal",
                value: proposal_1.MigrateContractProposal.toAmino(proposal_1.MigrateContractProposal.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.SudoContractProposal":
            return {
                type: "wasm/SudoContractProposal",
                value: proposal_1.SudoContractProposal.toAmino(proposal_1.SudoContractProposal.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.ExecuteContractProposal":
            return {
                type: "wasm/ExecuteContractProposal",
                value: proposal_1.ExecuteContractProposal.toAmino(proposal_1.ExecuteContractProposal.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.UpdateAdminProposal":
            return {
                type: "wasm/UpdateAdminProposal",
                value: proposal_1.UpdateAdminProposal.toAmino(proposal_1.UpdateAdminProposal.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.ClearAdminProposal":
            return {
                type: "wasm/ClearAdminProposal",
                value: proposal_1.ClearAdminProposal.toAmino(proposal_1.ClearAdminProposal.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.PinCodesProposal":
            return {
                type: "wasm/PinCodesProposal",
                value: proposal_1.PinCodesProposal.toAmino(proposal_1.PinCodesProposal.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.UnpinCodesProposal":
            return {
                type: "wasm/UnpinCodesProposal",
                value: proposal_1.UnpinCodesProposal.toAmino(proposal_1.UnpinCodesProposal.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.UpdateInstantiateConfigProposal":
            return {
                type: "wasm/UpdateInstantiateConfigProposal",
                value: proposal_1.UpdateInstantiateConfigProposal.toAmino(proposal_1.UpdateInstantiateConfigProposal.decode(content.value, undefined))
            };
        case "/cosmwasm.wasm.v1.StoreAndInstantiateContractProposal":
            return {
                type: "wasm/StoreAndInstantiateContractProposal",
                value: proposal_1.StoreAndInstantiateContractProposal.toAmino(proposal_1.StoreAndInstantiateContractProposal.decode(content.value, undefined))
            };
        case "/ibc.core.client.v1.ClientUpdateProposal":
            return {
                type: "cosmos-sdk/ClientUpdateProposal",
                value: client_1.ClientUpdateProposal.toAmino(client_1.ClientUpdateProposal.decode(content.value, undefined))
            };
        case "/ibc.core.client.v1.UpgradeProposal":
            return {
                type: "cosmos-sdk/UpgradeProposal",
                value: client_1.UpgradeProposal.toAmino(client_1.UpgradeProposal.decode(content.value, undefined))
            };
        case "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal":
            return {
                type: "osmosis/poolincentives/replace-pool-incentives-proposal",
                value: gov_1.ReplacePoolIncentivesProposal.toAmino(gov_1.ReplacePoolIncentivesProposal.decode(content.value, undefined))
            };
        case "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal":
            return {
                type: "osmosis/UpdatePoolIncentivesProposal",
                value: gov_1.UpdatePoolIncentivesProposal.toAmino(gov_1.UpdatePoolIncentivesProposal.decode(content.value, undefined))
            };
        case "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal":
            return {
                type: "osmosis/protorev/set-proto-rev-enabled-proposal",
                value: gov_2.SetProtoRevEnabledProposal.toAmino(gov_2.SetProtoRevEnabledProposal.decode(content.value, undefined))
            };
        case "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal":
            return {
                type: "osmosis/protorev/set-proto-rev-admin-account-proposal",
                value: gov_2.SetProtoRevAdminAccountProposal.toAmino(gov_2.SetProtoRevAdminAccountProposal.decode(content.value, undefined))
            };
        case "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal":
            return {
                type: "osmosis/set-superfluid-assets-proposal",
                value: gov_3.SetSuperfluidAssetsProposal.toAmino(gov_3.SetSuperfluidAssetsProposal.decode(content.value, undefined))
            };
        case "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal":
            return {
                type: "osmosis/del-superfluid-assets-proposal",
                value: gov_3.RemoveSuperfluidAssetsProposal.toAmino(gov_3.RemoveSuperfluidAssetsProposal.decode(content.value, undefined))
            };
        case "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal":
            return {
                type: "osmosis/update-unpool-whitelist",
                value: gov_3.UpdateUnpoolWhiteListProposal.toAmino(gov_3.UpdateUnpoolWhiteListProposal.decode(content.value, undefined))
            };
        case "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal":
            return {
                type: "osmosis/UpdateFeeTokenProposal",
                value: gov_4.UpdateFeeTokenProposal.toAmino(gov_4.UpdateFeeTokenProposal.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.Cosmos_govv1beta1Content_ToAmino = Cosmos_govv1beta1Content_ToAmino;
