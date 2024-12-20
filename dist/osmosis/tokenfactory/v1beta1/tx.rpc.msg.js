"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createDenom = this.createDenom.bind(this);
        this.mint = this.mint.bind(this);
        this.burn = this.burn.bind(this);
        this.changeAdmin = this.changeAdmin.bind(this);
        this.setDenomMetadata = this.setDenomMetadata.bind(this);
    }
    createDenom(request) {
        const data = tx_1.MsgCreateDenom.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "CreateDenom", data);
        return promise.then(data => tx_1.MsgCreateDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    mint(request) {
        const data = tx_1.MsgMint.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Mint", data);
        return promise.then(data => tx_1.MsgMintResponse.decode(new binary_1.BinaryReader(data)));
    }
    burn(request) {
        const data = tx_1.MsgBurn.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Burn", data);
        return promise.then(data => tx_1.MsgBurnResponse.decode(new binary_1.BinaryReader(data)));
    }
    changeAdmin(request) {
        const data = tx_1.MsgChangeAdmin.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "ChangeAdmin", data);
        return promise.then(data => tx_1.MsgChangeAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    setDenomMetadata(request) {
        const data = tx_1.MsgSetDenomMetadata.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "SetDenomMetadata", data);
        return promise.then(data => tx_1.MsgSetDenomMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
