import { BinaryReader } from "../../../binary";
import { MsgCreateFeed, MsgCreateFeedResponse, MsgUpdateFeed, MsgUpdateFeedResponse, MsgTransmit, MsgTransmitResponse, MsgFundFeedRewardPool, MsgFundFeedRewardPoolResponse, MsgWithdrawFeedRewardPool, MsgWithdrawFeedRewardPoolResponse, MsgSetPayees, MsgSetPayeesResponse, MsgTransferPayeeship, MsgTransferPayeeshipResponse, MsgAcceptPayeeship, MsgAcceptPayeeshipResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createFeed = this.createFeed.bind(this);
        this.updateFeed = this.updateFeed.bind(this);
        this.transmit = this.transmit.bind(this);
        this.fundFeedRewardPool = this.fundFeedRewardPool.bind(this);
        this.withdrawFeedRewardPool = this.withdrawFeedRewardPool.bind(this);
        this.setPayees = this.setPayees.bind(this);
        this.transferPayeeship = this.transferPayeeship.bind(this);
        this.acceptPayeeship = this.acceptPayeeship.bind(this);
    }
    createFeed(request) {
        const data = MsgCreateFeed.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "CreateFeed", data);
        return promise.then(data => MsgCreateFeedResponse.decode(new BinaryReader(data)));
    }
    updateFeed(request) {
        const data = MsgUpdateFeed.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "UpdateFeed", data);
        return promise.then(data => MsgUpdateFeedResponse.decode(new BinaryReader(data)));
    }
    transmit(request) {
        const data = MsgTransmit.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "Transmit", data);
        return promise.then(data => MsgTransmitResponse.decode(new BinaryReader(data)));
    }
    fundFeedRewardPool(request) {
        const data = MsgFundFeedRewardPool.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "FundFeedRewardPool", data);
        return promise.then(data => MsgFundFeedRewardPoolResponse.decode(new BinaryReader(data)));
    }
    withdrawFeedRewardPool(request) {
        const data = MsgWithdrawFeedRewardPool.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "WithdrawFeedRewardPool", data);
        return promise.then(data => MsgWithdrawFeedRewardPoolResponse.decode(new BinaryReader(data)));
    }
    setPayees(request) {
        const data = MsgSetPayees.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "SetPayees", data);
        return promise.then(data => MsgSetPayeesResponse.decode(new BinaryReader(data)));
    }
    transferPayeeship(request) {
        const data = MsgTransferPayeeship.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "TransferPayeeship", data);
        return promise.then(data => MsgTransferPayeeshipResponse.decode(new BinaryReader(data)));
    }
    acceptPayeeship(request) {
        const data = MsgAcceptPayeeship.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "AcceptPayeeship", data);
        return promise.then(data => MsgAcceptPayeeshipResponse.decode(new BinaryReader(data)));
    }
}
