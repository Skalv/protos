"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.storeCode = this.storeCode.bind(this);
        this.instantiateContract = this.instantiateContract.bind(this);
        this.instantiateContract2 = this.instantiateContract2.bind(this);
        this.executeContract = this.executeContract.bind(this);
        this.migrateContract = this.migrateContract.bind(this);
        this.updateAdmin = this.updateAdmin.bind(this);
        this.clearAdmin = this.clearAdmin.bind(this);
    }
    storeCode(request) {
        const data = tx_1.MsgStoreCode.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
        return promise.then(data => tx_1.MsgStoreCodeResponse.decode(new binary_1.BinaryReader(data)));
    }
    instantiateContract(request) {
        const data = tx_1.MsgInstantiateContract.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
        return promise.then(data => tx_1.MsgInstantiateContractResponse.decode(new binary_1.BinaryReader(data)));
    }
    instantiateContract2(request) {
        const data = tx_1.MsgInstantiateContract2.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract2", data);
        return promise.then(data => tx_1.MsgInstantiateContract2Response.decode(new binary_1.BinaryReader(data)));
    }
    executeContract(request) {
        const data = tx_1.MsgExecuteContract.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
        return promise.then(data => tx_1.MsgExecuteContractResponse.decode(new binary_1.BinaryReader(data)));
    }
    migrateContract(request) {
        const data = tx_1.MsgMigrateContract.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
        return promise.then(data => tx_1.MsgMigrateContractResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateAdmin(request) {
        const data = tx_1.MsgUpdateAdmin.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
        return promise.then(data => tx_1.MsgUpdateAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    clearAdmin(request) {
        const data = tx_1.MsgClearAdmin.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
        return promise.then(data => tx_1.MsgClearAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
