"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
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
        const data = tx_1.MsgCreateFeed.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "CreateFeed", data);
        return promise.then(data => tx_1.MsgCreateFeedResponse.decode(new binary_1.BinaryReader(data)));
    }
    updateFeed(request) {
        const data = tx_1.MsgUpdateFeed.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "UpdateFeed", data);
        return promise.then(data => tx_1.MsgUpdateFeedResponse.decode(new binary_1.BinaryReader(data)));
    }
    transmit(request) {
        const data = tx_1.MsgTransmit.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "Transmit", data);
        return promise.then(data => tx_1.MsgTransmitResponse.decode(new binary_1.BinaryReader(data)));
    }
    fundFeedRewardPool(request) {
        const data = tx_1.MsgFundFeedRewardPool.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "FundFeedRewardPool", data);
        return promise.then(data => tx_1.MsgFundFeedRewardPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    withdrawFeedRewardPool(request) {
        const data = tx_1.MsgWithdrawFeedRewardPool.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "WithdrawFeedRewardPool", data);
        return promise.then(data => tx_1.MsgWithdrawFeedRewardPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    setPayees(request) {
        const data = tx_1.MsgSetPayees.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "SetPayees", data);
        return promise.then(data => tx_1.MsgSetPayeesResponse.decode(new binary_1.BinaryReader(data)));
    }
    transferPayeeship(request) {
        const data = tx_1.MsgTransferPayeeship.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "TransferPayeeship", data);
        return promise.then(data => tx_1.MsgTransferPayeeshipResponse.decode(new binary_1.BinaryReader(data)));
    }
    acceptPayeeship(request) {
        const data = tx_1.MsgAcceptPayeeship.encode(request).finish();
        const promise = this.rpc.request("injective.ocr.v1beta1.Msg", "AcceptPayeeship", data);
        return promise.then(data => tx_1.MsgAcceptPayeeshipResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
