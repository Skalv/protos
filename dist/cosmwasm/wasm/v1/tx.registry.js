"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/cosmwasm.wasm.v1.MsgStoreCode", tx_1.MsgStoreCode], ["/cosmwasm.wasm.v1.MsgInstantiateContract", tx_1.MsgInstantiateContract], ["/cosmwasm.wasm.v1.MsgInstantiateContract2", tx_1.MsgInstantiateContract2], ["/cosmwasm.wasm.v1.MsgExecuteContract", tx_1.MsgExecuteContract], ["/cosmwasm.wasm.v1.MsgMigrateContract", tx_1.MsgMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateAdmin", tx_1.MsgUpdateAdmin], ["/cosmwasm.wasm.v1.MsgClearAdmin", tx_1.MsgClearAdmin]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value: tx_1.MsgStoreCode.encode(value).finish()
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value: tx_1.MsgInstantiateContract.encode(value).finish()
            };
        },
        instantiateContract2(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
                value: tx_1.MsgInstantiateContract2.encode(value).finish()
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_1.MsgExecuteContract.encode(value).finish()
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value: tx_1.MsgMigrateContract.encode(value).finish()
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value: tx_1.MsgUpdateAdmin.encode(value).finish()
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value: tx_1.MsgClearAdmin.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value
            };
        },
        instantiateContract2(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
                value
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value
            };
        }
    },
    fromPartial: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value: tx_1.MsgStoreCode.fromPartial(value)
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value: tx_1.MsgInstantiateContract.fromPartial(value)
            };
        },
        instantiateContract2(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
                value: tx_1.MsgInstantiateContract2.fromPartial(value)
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_1.MsgExecuteContract.fromPartial(value)
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value: tx_1.MsgMigrateContract.fromPartial(value)
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value: tx_1.MsgUpdateAdmin.fromPartial(value)
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value: tx_1.MsgClearAdmin.fromPartial(value)
            };
        }
    }
};
