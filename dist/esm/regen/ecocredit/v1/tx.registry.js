import { MsgCreateClass, MsgCreateProject, MsgCreateBatch, MsgMintBatchCredits, MsgSealBatch, MsgSend, MsgRetire, MsgCancel, MsgUpdateClassAdmin, MsgUpdateClassIssuers, MsgUpdateClassMetadata, MsgUpdateProjectAdmin, MsgUpdateProjectMetadata } from "./tx";
export const registry = [["/regen.ecocredit.v1.MsgCreateClass", MsgCreateClass], ["/regen.ecocredit.v1.MsgCreateProject", MsgCreateProject], ["/regen.ecocredit.v1.MsgCreateBatch", MsgCreateBatch], ["/regen.ecocredit.v1.MsgMintBatchCredits", MsgMintBatchCredits], ["/regen.ecocredit.v1.MsgSealBatch", MsgSealBatch], ["/regen.ecocredit.v1.MsgSend", MsgSend], ["/regen.ecocredit.v1.MsgRetire", MsgRetire], ["/regen.ecocredit.v1.MsgCancel", MsgCancel], ["/regen.ecocredit.v1.MsgUpdateClassAdmin", MsgUpdateClassAdmin], ["/regen.ecocredit.v1.MsgUpdateClassIssuers", MsgUpdateClassIssuers], ["/regen.ecocredit.v1.MsgUpdateClassMetadata", MsgUpdateClassMetadata], ["/regen.ecocredit.v1.MsgUpdateProjectAdmin", MsgUpdateProjectAdmin], ["/regen.ecocredit.v1.MsgUpdateProjectMetadata", MsgUpdateProjectMetadata]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createClass(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
                value: MsgCreateClass.encode(value).finish()
            };
        },
        createProject(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
                value: MsgCreateProject.encode(value).finish()
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
                value: MsgCreateBatch.encode(value).finish()
            };
        },
        mintBatchCredits(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
                value: MsgMintBatchCredits.encode(value).finish()
            };
        },
        sealBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
                value: MsgSealBatch.encode(value).finish()
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSend",
                value: MsgSend.encode(value).finish()
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRetire",
                value: MsgRetire.encode(value).finish()
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCancel",
                value: MsgCancel.encode(value).finish()
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
                value: MsgUpdateClassAdmin.encode(value).finish()
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
                value: MsgUpdateClassIssuers.encode(value).finish()
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
                value: MsgUpdateClassMetadata.encode(value).finish()
            };
        },
        updateProjectAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
                value: MsgUpdateProjectAdmin.encode(value).finish()
            };
        },
        updateProjectMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
                value: MsgUpdateProjectMetadata.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createClass(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
                value
            };
        },
        createProject(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
                value
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
                value
            };
        },
        mintBatchCredits(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
                value
            };
        },
        sealBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
                value
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSend",
                value
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRetire",
                value
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCancel",
                value
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
                value
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
                value
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
                value
            };
        },
        updateProjectAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
                value
            };
        },
        updateProjectMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
                value
            };
        }
    },
    fromPartial: {
        createClass(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
                value: MsgCreateClass.fromPartial(value)
            };
        },
        createProject(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
                value: MsgCreateProject.fromPartial(value)
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
                value: MsgCreateBatch.fromPartial(value)
            };
        },
        mintBatchCredits(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
                value: MsgMintBatchCredits.fromPartial(value)
            };
        },
        sealBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
                value: MsgSealBatch.fromPartial(value)
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSend",
                value: MsgSend.fromPartial(value)
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRetire",
                value: MsgRetire.fromPartial(value)
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCancel",
                value: MsgCancel.fromPartial(value)
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
                value: MsgUpdateClassAdmin.fromPartial(value)
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
                value: MsgUpdateClassIssuers.fromPartial(value)
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
                value: MsgUpdateClassMetadata.fromPartial(value)
            };
        },
        updateProjectAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
                value: MsgUpdateProjectAdmin.fromPartial(value)
            };
        },
        updateProjectMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
                value: MsgUpdateProjectMetadata.fromPartial(value)
            };
        }
    }
};
