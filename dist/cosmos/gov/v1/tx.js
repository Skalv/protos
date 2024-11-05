"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_govv1beta1Content_ToAmino = exports.Cosmos_govv1beta1Content_FromAmino = exports.Cosmos_govv1beta1Content_InterfaceDecoder = exports.MsgDepositResponse = exports.MsgDeposit = exports.MsgVoteWeightedResponse = exports.MsgVoteWeighted = exports.MsgVoteResponse = exports.MsgVote = exports.MsgExecLegacyContentResponse = exports.MsgExecLegacyContent = exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = void 0;
//@ts-nocheck
const any_1 = require("../../../google/protobuf/any");
const coin_1 = require("../../base/v1beta1/coin");
const gov_1 = require("./gov");
const distribution_1 = require("../../distribution/v1beta1/distribution");
const gov_2 = require("../v1beta1/gov");
const params_1 = require("../../params/v1beta1/params");
const upgrade_1 = require("../../upgrade/v1beta1/upgrade");
const proposal_1 = require("../../../cosmwasm/wasm/v1/proposal");
const client_1 = require("../../../ibc/core/client/v1/client");
const gov_3 = require("../../../osmosis/pool-incentives/v1beta1/gov");
const gov_4 = require("../../../osmosis/protorev/v1beta1/gov");
const gov_5 = require("../../../osmosis/superfluid/v1beta1/gov");
const gov_6 = require("../../../osmosis/txfees/v1beta1/gov");
const binary_1 = require("../../../binary");
function createBaseMsgSubmitProposal() {
    return {
        messages: [],
        initialDeposit: [],
        proposer: "",
        metadata: ""
    };
}
exports.MsgSubmitProposal = {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.initialDeposit) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.proposer !== "") {
            writer.uint32(26).string(message.proposer);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.initialDeposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.proposer = reader.string();
                    break;
                case 4:
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
        const message = createBaseMsgSubmitProposal();
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        message.initialDeposit = object.initialDeposit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.proposer = object.proposer ?? "";
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposal();
        message.messages = object.messages?.map(e => any_1.Any.fromAmino(e)) || [];
        message.initialDeposit = object.initial_deposit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = object.proposer;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = message.messages;
        }
        if (message.initialDeposit) {
            obj.initial_deposit = message.initialDeposit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_deposit = message.initialDeposit;
        }
        obj.proposer = message.proposer === "" ? undefined : message.proposer;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgSubmitProposal",
            value: exports.MsgSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
            value: exports.MsgSubmitProposal.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitProposalResponse() {
    return {
        proposalId: BigInt(0)
    };
}
exports.MsgSubmitProposalResponse = {
    typeUrl: "/cosmos.gov.v1.MsgSubmitProposalResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalResponse();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposalResponse();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId !== BigInt(0) ? (message.proposalId?.toString)() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgSubmitProposalResponse",
            value: exports.MsgSubmitProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgSubmitProposalResponse",
            value: exports.MsgSubmitProposalResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExecLegacyContent() {
    return {
        content: undefined,
        authority: ""
    };
}
exports.MsgExecLegacyContent = {
    typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.content !== undefined) {
            any_1.Any.encode(message.content, writer.uint32(10).fork()).ldelim();
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecLegacyContent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = (0, exports.Cosmos_govv1beta1Content_InterfaceDecoder)(reader);
                    break;
                case 2:
                    message.authority = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgExecLegacyContent();
        message.content = object.content !== undefined && object.content !== null ? any_1.Any.fromPartial(object.content) : undefined;
        message.authority = object.authority ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExecLegacyContent();
        if (object.content !== undefined && object.content !== null) {
            message.content = (0, exports.Cosmos_govv1beta1Content_FromAmino)(object.content);
        }
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content = message.content ? (0, exports.Cosmos_govv1beta1Content_ToAmino)(message.content) : undefined;
        obj.authority = message.authority === "" ? undefined : message.authority;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExecLegacyContent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgExecLegacyContent",
            value: exports.MsgExecLegacyContent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExecLegacyContent.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecLegacyContent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
            value: exports.MsgExecLegacyContent.encode(message).finish()
        };
    }
};
function createBaseMsgExecLegacyContentResponse() {
    return {};
}
exports.MsgExecLegacyContentResponse = {
    typeUrl: "/cosmos.gov.v1.MsgExecLegacyContentResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecLegacyContentResponse();
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
        const message = createBaseMsgExecLegacyContentResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgExecLegacyContentResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExecLegacyContentResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgExecLegacyContentResponse",
            value: exports.MsgExecLegacyContentResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExecLegacyContentResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExecLegacyContentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgExecLegacyContentResponse",
            value: exports.MsgExecLegacyContentResponse.encode(message).finish()
        };
    }
};
function createBaseMsgVote() {
    return {
        proposalId: BigInt(0),
        voter: "",
        option: 0,
        metadata: ""
    };
}
exports.MsgVote = {
    typeUrl: "/cosmos.gov.v1.MsgVote",
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgVote();
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
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? (message.proposalId?.toString)() : "0";
        obj.voter = message.voter === "" ? undefined : message.voter;
        obj.option = message.option === 0 ? undefined : message.option;
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgVote",
            value: exports.MsgVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVote.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgVote",
            value: exports.MsgVote.encode(message).finish()
        };
    }
};
function createBaseMsgVoteResponse() {
    return {};
}
exports.MsgVoteResponse = {
    typeUrl: "/cosmos.gov.v1.MsgVoteResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
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
        const message = createBaseMsgVoteResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgVoteResponse",
            value: exports.MsgVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgVoteResponse",
            value: exports.MsgVoteResponse.encode(message).finish()
        };
    }
};
function createBaseMsgVoteWeighted() {
    return {
        proposalId: BigInt(0),
        voter: "",
        options: [],
        metadata: ""
    };
}
exports.MsgVoteWeighted = {
    typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        for (const v of message.options) {
            gov_1.WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeighted();
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
                    message.options.push(gov_1.WeightedVoteOption.decode(reader, reader.uint32()));
                    break;
                case 4:
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
        const message = createBaseMsgVoteWeighted();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.options = object.options?.map(e => gov_1.WeightedVoteOption.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgVoteWeighted();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        message.options = object.options?.map(e => gov_1.WeightedVoteOption.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? (message.proposalId?.toString)() : "0";
        obj.voter = message.voter === "" ? undefined : message.voter;
        if (message.options) {
            obj.options = message.options.map(e => e ? gov_1.WeightedVoteOption.toAmino(e) : undefined);
        }
        else {
            obj.options = message.options;
        }
        obj.metadata = message.metadata === "" ? undefined : message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteWeighted.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgVoteWeighted",
            value: exports.MsgVoteWeighted.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteWeighted.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteWeighted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
            value: exports.MsgVoteWeighted.encode(message).finish()
        };
    }
};
function createBaseMsgVoteWeightedResponse() {
    return {};
}
exports.MsgVoteWeightedResponse = {
    typeUrl: "/cosmos.gov.v1.MsgVoteWeightedResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteWeightedResponse();
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
        const message = createBaseMsgVoteWeightedResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgVoteWeightedResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgVoteWeightedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgVoteWeightedResponse",
            value: exports.MsgVoteWeightedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgVoteWeightedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgVoteWeightedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgVoteWeightedResponse",
            value: exports.MsgVoteWeightedResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeposit() {
    return {
        proposalId: BigInt(0),
        depositor: "",
        amount: []
    };
}
exports.MsgDeposit = {
    typeUrl: "/cosmos.gov.v1.MsgDeposit",
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
        const message = createBaseMsgDeposit();
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
        const message = createBaseMsgDeposit();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.depositor = object.depositor ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDeposit();
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
        obj.proposal_id = message.proposalId ? (message.proposalId?.toString)() : "0";
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
        return exports.MsgDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgDeposit",
            value: exports.MsgDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgDeposit",
            value: exports.MsgDeposit.encode(message).finish()
        };
    }
};
function createBaseMsgDepositResponse() {
    return {};
}
exports.MsgDepositResponse = {
    typeUrl: "/cosmos.gov.v1.MsgDepositResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
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
        const message = createBaseMsgDepositResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/MsgDepositResponse",
            value: exports.MsgDepositResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDepositResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.MsgDepositResponse",
            value: exports.MsgDepositResponse.encode(message).finish()
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
            return gov_2.TextProposal.decode(data.value);
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
            return gov_3.ReplacePoolIncentivesProposal.decode(data.value);
        case "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal":
            return gov_3.UpdatePoolIncentivesProposal.decode(data.value);
        case "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal":
            return gov_4.SetProtoRevEnabledProposal.decode(data.value);
        case "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal":
            return gov_4.SetProtoRevAdminAccountProposal.decode(data.value);
        case "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal":
            return gov_5.SetSuperfluidAssetsProposal.decode(data.value);
        case "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal":
            return gov_5.RemoveSuperfluidAssetsProposal.decode(data.value);
        case "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal":
            return gov_5.UpdateUnpoolWhiteListProposal.decode(data.value);
        case "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal":
            return gov_6.UpdateFeeTokenProposal.decode(data.value);
        default:
            return data;
    }
};
exports.Cosmos_govv1beta1Content_InterfaceDecoder = Cosmos_govv1beta1Content_InterfaceDecoder;
const Cosmos_govv1beta1Content_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/v1/CommunityPoolSpendProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
                value: distribution_1.CommunityPoolSpendProposal.encode(distribution_1.CommunityPoolSpendProposal.fromPartial(distribution_1.CommunityPoolSpendProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/v1/CommunityPoolSpendProposalWithDeposit":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
                value: distribution_1.CommunityPoolSpendProposalWithDeposit.encode(distribution_1.CommunityPoolSpendProposalWithDeposit.fromPartial(distribution_1.CommunityPoolSpendProposalWithDeposit.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/v1/TextProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                value: gov_2.TextProposal.encode(gov_2.TextProposal.fromPartial(gov_2.TextProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/v1/ParameterChangeProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
                value: params_1.ParameterChangeProposal.encode(params_1.ParameterChangeProposal.fromPartial(params_1.ParameterChangeProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/v1/SoftwareUpgradeProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
                value: upgrade_1.SoftwareUpgradeProposal.encode(upgrade_1.SoftwareUpgradeProposal.fromPartial(upgrade_1.SoftwareUpgradeProposal.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/v1/CancelSoftwareUpgradeProposal":
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
                value: gov_3.ReplacePoolIncentivesProposal.encode(gov_3.ReplacePoolIncentivesProposal.fromPartial(gov_3.ReplacePoolIncentivesProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/UpdatePoolIncentivesProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
                value: gov_3.UpdatePoolIncentivesProposal.encode(gov_3.UpdatePoolIncentivesProposal.fromPartial(gov_3.UpdatePoolIncentivesProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/protorev/set-proto-rev-enabled-proposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal",
                value: gov_4.SetProtoRevEnabledProposal.encode(gov_4.SetProtoRevEnabledProposal.fromPartial(gov_4.SetProtoRevEnabledProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/protorev/set-proto-rev-admin-account-proposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal",
                value: gov_4.SetProtoRevAdminAccountProposal.encode(gov_4.SetProtoRevAdminAccountProposal.fromPartial(gov_4.SetProtoRevAdminAccountProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/set-superfluid-assets-proposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
                value: gov_5.SetSuperfluidAssetsProposal.encode(gov_5.SetSuperfluidAssetsProposal.fromPartial(gov_5.SetSuperfluidAssetsProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/del-superfluid-assets-proposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
                value: gov_5.RemoveSuperfluidAssetsProposal.encode(gov_5.RemoveSuperfluidAssetsProposal.fromPartial(gov_5.RemoveSuperfluidAssetsProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/update-unpool-whitelist":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
                value: gov_5.UpdateUnpoolWhiteListProposal.encode(gov_5.UpdateUnpoolWhiteListProposal.fromPartial(gov_5.UpdateUnpoolWhiteListProposal.fromAmino(content.value))).finish()
            });
        case "osmosis/UpdateFeeTokenProposal":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
                value: gov_6.UpdateFeeTokenProposal.encode(gov_6.UpdateFeeTokenProposal.fromPartial(gov_6.UpdateFeeTokenProposal.fromAmino(content.value))).finish()
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
                type: "cosmos-sdk/v1/CommunityPoolSpendProposal",
                value: distribution_1.CommunityPoolSpendProposal.toAmino(distribution_1.CommunityPoolSpendProposal.decode(content.value, undefined))
            };
        case "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit":
            return {
                type: "cosmos-sdk/v1/CommunityPoolSpendProposalWithDeposit",
                value: distribution_1.CommunityPoolSpendProposalWithDeposit.toAmino(distribution_1.CommunityPoolSpendProposalWithDeposit.decode(content.value, undefined))
            };
        case "/cosmos.gov.v1beta1.TextProposal":
            return {
                type: "cosmos-sdk/v1/TextProposal",
                value: gov_2.TextProposal.toAmino(gov_2.TextProposal.decode(content.value, undefined))
            };
        case "/cosmos.params.v1beta1.ParameterChangeProposal":
            return {
                type: "cosmos-sdk/v1/ParameterChangeProposal",
                value: params_1.ParameterChangeProposal.toAmino(params_1.ParameterChangeProposal.decode(content.value, undefined))
            };
        case "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal":
            return {
                type: "cosmos-sdk/v1/SoftwareUpgradeProposal",
                value: upgrade_1.SoftwareUpgradeProposal.toAmino(upgrade_1.SoftwareUpgradeProposal.decode(content.value, undefined))
            };
        case "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal":
            return {
                type: "cosmos-sdk/v1/CancelSoftwareUpgradeProposal",
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
                value: gov_3.ReplacePoolIncentivesProposal.toAmino(gov_3.ReplacePoolIncentivesProposal.decode(content.value, undefined))
            };
        case "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal":
            return {
                type: "osmosis/UpdatePoolIncentivesProposal",
                value: gov_3.UpdatePoolIncentivesProposal.toAmino(gov_3.UpdatePoolIncentivesProposal.decode(content.value, undefined))
            };
        case "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal":
            return {
                type: "osmosis/protorev/set-proto-rev-enabled-proposal",
                value: gov_4.SetProtoRevEnabledProposal.toAmino(gov_4.SetProtoRevEnabledProposal.decode(content.value, undefined))
            };
        case "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal":
            return {
                type: "osmosis/protorev/set-proto-rev-admin-account-proposal",
                value: gov_4.SetProtoRevAdminAccountProposal.toAmino(gov_4.SetProtoRevAdminAccountProposal.decode(content.value, undefined))
            };
        case "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal":
            return {
                type: "osmosis/set-superfluid-assets-proposal",
                value: gov_5.SetSuperfluidAssetsProposal.toAmino(gov_5.SetSuperfluidAssetsProposal.decode(content.value, undefined))
            };
        case "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal":
            return {
                type: "osmosis/del-superfluid-assets-proposal",
                value: gov_5.RemoveSuperfluidAssetsProposal.toAmino(gov_5.RemoveSuperfluidAssetsProposal.decode(content.value, undefined))
            };
        case "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal":
            return {
                type: "osmosis/update-unpool-whitelist",
                value: gov_5.UpdateUnpoolWhiteListProposal.toAmino(gov_5.UpdateUnpoolWhiteListProposal.decode(content.value, undefined))
            };
        case "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal":
            return {
                type: "osmosis/UpdateFeeTokenProposal",
                value: gov_6.UpdateFeeTokenProposal.toAmino(gov_6.UpdateFeeTokenProposal.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.Cosmos_govv1beta1Content_ToAmino = Cosmos_govv1beta1Content_ToAmino;
