import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export const registry = [["/cosmos.gov.v1.MsgSubmitProposal", MsgSubmitProposal], ["/cosmos.gov.v1.MsgExecLegacyContent", MsgExecLegacyContent], ["/cosmos.gov.v1.MsgVote", MsgVote], ["/cosmos.gov.v1.MsgVoteWeighted", MsgVoteWeighted], ["/cosmos.gov.v1.MsgDeposit", MsgDeposit]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value: MsgSubmitProposal.encode(value).finish()
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value: MsgExecLegacyContent.encode(value).finish()
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value: MsgVote.encode(value).finish()
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value: MsgVoteWeighted.encode(value).finish()
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value: MsgDeposit.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value
            };
        }
    },
    fromPartial: {
        submitProposal(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgSubmitProposal",
                value: MsgSubmitProposal.fromPartial(value)
            };
        },
        execLegacyContent(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgExecLegacyContent",
                value: MsgExecLegacyContent.fromPartial(value)
            };
        },
        vote(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVote",
                value: MsgVote.fromPartial(value)
            };
        },
        voteWeighted(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgVoteWeighted",
                value: MsgVoteWeighted.fromPartial(value)
            };
        },
        deposit(value) {
            return {
                typeUrl: "/cosmos.gov.v1.MsgDeposit",
                value: MsgDeposit.fromPartial(value)
            };
        }
    }
};
