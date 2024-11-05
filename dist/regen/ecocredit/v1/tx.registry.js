"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/regen.ecocredit.v1.MsgCreateClass", tx_1.MsgCreateClass], ["/regen.ecocredit.v1.MsgCreateProject", tx_1.MsgCreateProject], ["/regen.ecocredit.v1.MsgCreateBatch", tx_1.MsgCreateBatch], ["/regen.ecocredit.v1.MsgMintBatchCredits", tx_1.MsgMintBatchCredits], ["/regen.ecocredit.v1.MsgSealBatch", tx_1.MsgSealBatch], ["/regen.ecocredit.v1.MsgSend", tx_1.MsgSend], ["/regen.ecocredit.v1.MsgRetire", tx_1.MsgRetire], ["/regen.ecocredit.v1.MsgCancel", tx_1.MsgCancel], ["/regen.ecocredit.v1.MsgUpdateClassAdmin", tx_1.MsgUpdateClassAdmin], ["/regen.ecocredit.v1.MsgUpdateClassIssuers", tx_1.MsgUpdateClassIssuers], ["/regen.ecocredit.v1.MsgUpdateClassMetadata", tx_1.MsgUpdateClassMetadata], ["/regen.ecocredit.v1.MsgUpdateProjectAdmin", tx_1.MsgUpdateProjectAdmin], ["/regen.ecocredit.v1.MsgUpdateProjectMetadata", tx_1.MsgUpdateProjectMetadata]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createClass(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateClass",
                value: tx_1.MsgCreateClass.encode(value).finish()
            };
        },
        createProject(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
                value: tx_1.MsgCreateProject.encode(value).finish()
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
                value: tx_1.MsgCreateBatch.encode(value).finish()
            };
        },
        mintBatchCredits(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
                value: tx_1.MsgMintBatchCredits.encode(value).finish()
            };
        },
        sealBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
                value: tx_1.MsgSealBatch.encode(value).finish()
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSend",
                value: tx_1.MsgSend.encode(value).finish()
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRetire",
                value: tx_1.MsgRetire.encode(value).finish()
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCancel",
                value: tx_1.MsgCancel.encode(value).finish()
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
                value: tx_1.MsgUpdateClassAdmin.encode(value).finish()
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
                value: tx_1.MsgUpdateClassIssuers.encode(value).finish()
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
                value: tx_1.MsgUpdateClassMetadata.encode(value).finish()
            };
        },
        updateProjectAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
                value: tx_1.MsgUpdateProjectAdmin.encode(value).finish()
            };
        },
        updateProjectMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
                value: tx_1.MsgUpdateProjectMetadata.encode(value).finish()
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
                value: tx_1.MsgCreateClass.fromPartial(value)
            };
        },
        createProject(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateProject",
                value: tx_1.MsgCreateProject.fromPartial(value)
            };
        },
        createBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCreateBatch",
                value: tx_1.MsgCreateBatch.fromPartial(value)
            };
        },
        mintBatchCredits(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgMintBatchCredits",
                value: tx_1.MsgMintBatchCredits.fromPartial(value)
            };
        },
        sealBatch(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSealBatch",
                value: tx_1.MsgSealBatch.fromPartial(value)
            };
        },
        send(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgSend",
                value: tx_1.MsgSend.fromPartial(value)
            };
        },
        retire(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgRetire",
                value: tx_1.MsgRetire.fromPartial(value)
            };
        },
        cancel(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgCancel",
                value: tx_1.MsgCancel.fromPartial(value)
            };
        },
        updateClassAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassAdmin",
                value: tx_1.MsgUpdateClassAdmin.fromPartial(value)
            };
        },
        updateClassIssuers(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassIssuers",
                value: tx_1.MsgUpdateClassIssuers.fromPartial(value)
            };
        },
        updateClassMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateClassMetadata",
                value: tx_1.MsgUpdateClassMetadata.fromPartial(value)
            };
        },
        updateProjectAdmin(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectAdmin",
                value: tx_1.MsgUpdateProjectAdmin.fromPartial(value)
            };
        },
        updateProjectMetadata(value) {
            return {
                typeUrl: "/regen.ecocredit.v1.MsgUpdateProjectMetadata",
                value: tx_1.MsgUpdateProjectMetadata.fromPartial(value)
            };
        }
    }
};
