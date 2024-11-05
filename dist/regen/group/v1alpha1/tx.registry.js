"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/regen.group.v1alpha1.MsgCreateGroup", tx_1.MsgCreateGroup], ["/regen.group.v1alpha1.MsgUpdateGroupMembers", tx_1.MsgUpdateGroupMembers], ["/regen.group.v1alpha1.MsgUpdateGroupAdmin", tx_1.MsgUpdateGroupAdmin], ["/regen.group.v1alpha1.MsgUpdateGroupMetadata", tx_1.MsgUpdateGroupMetadata], ["/regen.group.v1alpha1.MsgCreateGroupAccount", tx_1.MsgCreateGroupAccount], ["/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin", tx_1.MsgUpdateGroupAccountAdmin], ["/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy", tx_1.MsgUpdateGroupAccountDecisionPolicy], ["/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata", tx_1.MsgUpdateGroupAccountMetadata], ["/regen.group.v1alpha1.MsgCreateProposal", tx_1.MsgCreateProposal], ["/regen.group.v1alpha1.MsgVote", tx_1.MsgVote], ["/regen.group.v1alpha1.MsgExec", tx_1.MsgExec]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createGroup(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgCreateGroup",
                value: tx_1.MsgCreateGroup.encode(value).finish()
            };
        },
        updateGroupMembers(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembers",
                value: tx_1.MsgUpdateGroupMembers.encode(value).finish()
            };
        },
        updateGroupAdmin(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdmin",
                value: tx_1.MsgUpdateGroupAdmin.encode(value).finish()
            };
        },
        updateGroupMetadata(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadata",
                value: tx_1.MsgUpdateGroupMetadata.encode(value).finish()
            };
        },
        createGroupAccount(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccount",
                value: tx_1.MsgCreateGroupAccount.encode(value).finish()
            };
        },
        updateGroupAccountAdmin(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin",
                value: tx_1.MsgUpdateGroupAccountAdmin.encode(value).finish()
            };
        },
        updateGroupAccountDecisionPolicy(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy",
                value: tx_1.MsgUpdateGroupAccountDecisionPolicy.encode(value).finish()
            };
        },
        updateGroupAccountMetadata(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata",
                value: tx_1.MsgUpdateGroupAccountMetadata.encode(value).finish()
            };
        },
        createProposal(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgCreateProposal",
                value: tx_1.MsgCreateProposal.encode(value).finish()
            };
        },
        vote(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgVote",
                value: tx_1.MsgVote.encode(value).finish()
            };
        },
        exec(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgExec",
                value: tx_1.MsgExec.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createGroup(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgCreateGroup",
                value
            };
        },
        updateGroupMembers(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembers",
                value
            };
        },
        updateGroupAdmin(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdmin",
                value
            };
        },
        updateGroupMetadata(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadata",
                value
            };
        },
        createGroupAccount(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccount",
                value
            };
        },
        updateGroupAccountAdmin(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin",
                value
            };
        },
        updateGroupAccountDecisionPolicy(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy",
                value
            };
        },
        updateGroupAccountMetadata(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata",
                value
            };
        },
        createProposal(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgCreateProposal",
                value
            };
        },
        vote(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgVote",
                value
            };
        },
        exec(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgExec",
                value
            };
        }
    },
    fromPartial: {
        createGroup(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgCreateGroup",
                value: tx_1.MsgCreateGroup.fromPartial(value)
            };
        },
        updateGroupMembers(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMembers",
                value: tx_1.MsgUpdateGroupMembers.fromPartial(value)
            };
        },
        updateGroupAdmin(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAdmin",
                value: tx_1.MsgUpdateGroupAdmin.fromPartial(value)
            };
        },
        updateGroupMetadata(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupMetadata",
                value: tx_1.MsgUpdateGroupMetadata.fromPartial(value)
            };
        },
        createGroupAccount(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgCreateGroupAccount",
                value: tx_1.MsgCreateGroupAccount.fromPartial(value)
            };
        },
        updateGroupAccountAdmin(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountAdmin",
                value: tx_1.MsgUpdateGroupAccountAdmin.fromPartial(value)
            };
        },
        updateGroupAccountDecisionPolicy(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountDecisionPolicy",
                value: tx_1.MsgUpdateGroupAccountDecisionPolicy.fromPartial(value)
            };
        },
        updateGroupAccountMetadata(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgUpdateGroupAccountMetadata",
                value: tx_1.MsgUpdateGroupAccountMetadata.fromPartial(value)
            };
        },
        createProposal(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgCreateProposal",
                value: tx_1.MsgCreateProposal.fromPartial(value)
            };
        },
        vote(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgVote",
                value: tx_1.MsgVote.fromPartial(value)
            };
        },
        exec(value) {
            return {
                typeUrl: "/regen.group.v1alpha1.MsgExec",
                value: tx_1.MsgExec.fromPartial(value)
            };
        }
    }
};
