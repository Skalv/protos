import { BinaryReader } from "../../../binary";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse } from "./tx";
export class MsgClientImpl {
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
        const data = MsgCreateDenom.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "CreateDenom", data);
        return promise.then(data => MsgCreateDenomResponse.decode(new BinaryReader(data)));
    }
    mint(request) {
        const data = MsgMint.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Mint", data);
        return promise.then(data => MsgMintResponse.decode(new BinaryReader(data)));
    }
    burn(request) {
        const data = MsgBurn.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Burn", data);
        return promise.then(data => MsgBurnResponse.decode(new BinaryReader(data)));
    }
    changeAdmin(request) {
        const data = MsgChangeAdmin.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "ChangeAdmin", data);
        return promise.then(data => MsgChangeAdminResponse.decode(new BinaryReader(data)));
    }
    setDenomMetadata(request) {
        const data = MsgSetDenomMetadata.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "SetDenomMetadata", data);
        return promise.then(data => MsgSetDenomMetadataResponse.decode(new BinaryReader(data)));
    }
}
