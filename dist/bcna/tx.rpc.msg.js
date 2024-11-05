"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createBitcannaid = this.createBitcannaid.bind(this);
        this.updateBitcannaid = this.updateBitcannaid.bind(this);
        this.deleteBitcannaid = this.deleteBitcannaid.bind(this);
        this.createSupplychain = this.createSupplychain.bind(this);
        this.updateSupplychain = this.updateSupplychain.bind(this);
        this.deleteSupplychain = this.deleteSupplychain.bind(this);
    }
    createBitcannaid(request) {
        const data = tx_1.MsgCreateBitcannaid.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "CreateBitcannaid", data);
        return promise.then(data => tx_1.MsgCreateBitcannaidResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateBitcannaid(request) {
        const data = tx_1.MsgUpdateBitcannaid.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "UpdateBitcannaid", data);
        return promise.then(data => tx_1.MsgUpdateBitcannaidResponse.decode(new binary_1.BinaryReader(data)));
    }
    deleteBitcannaid(request) {
        const data = tx_1.MsgDeleteBitcannaid.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "DeleteBitcannaid", data);
        return promise.then(data => tx_1.MsgDeleteBitcannaidResponse.decode(new binary_1.BinaryReader(data)));
    }
    createSupplychain(request) {
        const data = tx_1.MsgCreateSupplychain.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "CreateSupplychain", data);
        return promise.then(data => tx_1.MsgCreateSupplychainResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateSupplychain(request) {
        const data = tx_1.MsgUpdateSupplychain.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "UpdateSupplychain", data);
        return promise.then(data => tx_1.MsgUpdateSupplychainResponse.decode(new binary_1.BinaryReader(data)));
    }
    deleteSupplychain(request) {
        const data = tx_1.MsgDeleteSupplychain.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "DeleteSupplychain", data);
        return promise.then(data => tx_1.MsgDeleteSupplychainResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
