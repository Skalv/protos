"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.setValidatorSetPreference = this.setValidatorSetPreference.bind(this);
        this.delegateToValidatorSet = this.delegateToValidatorSet.bind(this);
        this.undelegateFromValidatorSet = this.undelegateFromValidatorSet.bind(this);
        this.redelegateValidatorSet = this.redelegateValidatorSet.bind(this);
        this.withdrawDelegationRewards = this.withdrawDelegationRewards.bind(this);
    }
    setValidatorSetPreference(request) {
        const data = tx_1.MsgSetValidatorSetPreference.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "SetValidatorSetPreference", data);
        return promise.then(data => tx_1.MsgSetValidatorSetPreferenceResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegateToValidatorSet(request) {
        const data = tx_1.MsgDelegateToValidatorSet.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "DelegateToValidatorSet", data);
        return promise.then(data => tx_1.MsgDelegateToValidatorSetResponse.decode(new binary_1.BinaryReader(data)));
    }
    undelegateFromValidatorSet(request) {
        const data = tx_1.MsgUndelegateFromValidatorSet.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "UndelegateFromValidatorSet", data);
        return promise.then(data => tx_1.MsgUndelegateFromValidatorSetResponse.decode(new binary_1.BinaryReader(data)));
    }
    redelegateValidatorSet(request) {
        const data = tx_1.MsgRedelegateValidatorSet.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "RedelegateValidatorSet", data);
        return promise.then(data => tx_1.MsgRedelegateValidatorSetResponse.decode(new binary_1.BinaryReader(data)));
    }
    withdrawDelegationRewards(request) {
        const data = tx_1.MsgWithdrawDelegationRewards.encode(request).finish();
        const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Msg", "WithdrawDelegationRewards", data);
        return promise.then(data => tx_1.MsgWithdrawDelegationRewardsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
