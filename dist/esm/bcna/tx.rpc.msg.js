import { BinaryReader } from "../binary";
import { MsgCreateBitcannaid, MsgCreateBitcannaidResponse, MsgUpdateBitcannaid, MsgUpdateBitcannaidResponse, MsgDeleteBitcannaid, MsgDeleteBitcannaidResponse, MsgCreateSupplychain, MsgCreateSupplychainResponse, MsgUpdateSupplychain, MsgUpdateSupplychainResponse, MsgDeleteSupplychain, MsgDeleteSupplychainResponse } from "./tx";
export class MsgClientImpl {
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
        const data = MsgCreateBitcannaid.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "CreateBitcannaid", data);
        return promise.then(data => MsgCreateBitcannaidResponse.decode(new BinaryReader(data)));
    }
    updateBitcannaid(request) {
        const data = MsgUpdateBitcannaid.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "UpdateBitcannaid", data);
        return promise.then(data => MsgUpdateBitcannaidResponse.decode(new BinaryReader(data)));
    }
    deleteBitcannaid(request) {
        const data = MsgDeleteBitcannaid.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "DeleteBitcannaid", data);
        return promise.then(data => MsgDeleteBitcannaidResponse.decode(new BinaryReader(data)));
    }
    createSupplychain(request) {
        const data = MsgCreateSupplychain.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "CreateSupplychain", data);
        return promise.then(data => MsgCreateSupplychainResponse.decode(new BinaryReader(data)));
    }
    updateSupplychain(request) {
        const data = MsgUpdateSupplychain.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "UpdateSupplychain", data);
        return promise.then(data => MsgUpdateSupplychainResponse.decode(new BinaryReader(data)));
    }
    deleteSupplychain(request) {
        const data = MsgDeleteSupplychain.encode(request).finish();
        const promise = this.rpc.request("BitCannaGlobal.bcna.bcna.Msg", "DeleteSupplychain", data);
        return promise.then(data => MsgDeleteSupplychainResponse.decode(new BinaryReader(data)));
    }
}
