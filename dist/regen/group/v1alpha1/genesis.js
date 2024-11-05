"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const types_1 = require("./types");
const binary_1 = require("../../../binary");
function createBaseGenesisState() {
    return {
        groupSeq: BigInt(0),
        groups: [],
        groupMembers: [],
        groupAccountSeq: BigInt(0),
        groupAccounts: [],
        proposalSeq: BigInt(0),
        proposals: [],
        votes: []
    };
}
exports.GenesisState = {
    typeUrl: "/regen.group.v1alpha1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.groupSeq !== BigInt(0)) {
            writer.uint32(8).uint64(message.groupSeq);
        }
        for (const v of message.groups) {
            types_1.GroupInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.groupMembers) {
            types_1.GroupMember.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.groupAccountSeq !== BigInt(0)) {
            writer.uint32(32).uint64(message.groupAccountSeq);
        }
        for (const v of message.groupAccounts) {
            types_1.GroupAccountInfo.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.proposalSeq !== BigInt(0)) {
            writer.uint32(48).uint64(message.proposalSeq);
        }
        for (const v of message.proposals) {
            types_1.Proposal.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.votes) {
            types_1.Vote.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupSeq = reader.uint64();
                    break;
                case 2:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.groupMembers.push(types_1.GroupMember.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.groupAccountSeq = reader.uint64();
                    break;
                case 5:
                    message.groupAccounts.push(types_1.GroupAccountInfo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.proposalSeq = reader.uint64();
                    break;
                case 7:
                    message.proposals.push(types_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.groupSeq = object.groupSeq !== undefined && object.groupSeq !== null ? BigInt(object.groupSeq.toString()) : BigInt(0);
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromPartial(e)) || [];
        message.groupMembers = object.groupMembers?.map(e => types_1.GroupMember.fromPartial(e)) || [];
        message.groupAccountSeq = object.groupAccountSeq !== undefined && object.groupAccountSeq !== null ? BigInt(object.groupAccountSeq.toString()) : BigInt(0);
        message.groupAccounts = object.groupAccounts?.map(e => types_1.GroupAccountInfo.fromPartial(e)) || [];
        message.proposalSeq = object.proposalSeq !== undefined && object.proposalSeq !== null ? BigInt(object.proposalSeq.toString()) : BigInt(0);
        message.proposals = object.proposals?.map(e => types_1.Proposal.fromPartial(e)) || [];
        message.votes = object.votes?.map(e => types_1.Vote.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.group_seq !== undefined && object.group_seq !== null) {
            message.groupSeq = BigInt(object.group_seq);
        }
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromAmino(e)) || [];
        message.groupMembers = object.group_members?.map(e => types_1.GroupMember.fromAmino(e)) || [];
        if (object.group_account_seq !== undefined && object.group_account_seq !== null) {
            message.groupAccountSeq = BigInt(object.group_account_seq);
        }
        message.groupAccounts = object.group_accounts?.map(e => types_1.GroupAccountInfo.fromAmino(e)) || [];
        if (object.proposal_seq !== undefined && object.proposal_seq !== null) {
            message.proposalSeq = BigInt(object.proposal_seq);
        }
        message.proposals = object.proposals?.map(e => types_1.Proposal.fromAmino(e)) || [];
        message.votes = object.votes?.map(e => types_1.Vote.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_seq = message.groupSeq !== BigInt(0) ? (message.groupSeq?.toString)() : undefined;
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = message.groups;
        }
        if (message.groupMembers) {
            obj.group_members = message.groupMembers.map(e => e ? types_1.GroupMember.toAmino(e) : undefined);
        }
        else {
            obj.group_members = message.groupMembers;
        }
        obj.group_account_seq = message.groupAccountSeq !== BigInt(0) ? (message.groupAccountSeq?.toString)() : undefined;
        if (message.groupAccounts) {
            obj.group_accounts = message.groupAccounts.map(e => e ? types_1.GroupAccountInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_accounts = message.groupAccounts;
        }
        obj.proposal_seq = message.proposalSeq !== BigInt(0) ? (message.proposalSeq?.toString)() : undefined;
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = message.proposals;
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = message.votes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/regen.group.v1alpha1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};