"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.lockTokens = this.lockTokens.bind(this);
        this.beginUnlockingAll = this.beginUnlockingAll.bind(this);
        this.beginUnlocking = this.beginUnlocking.bind(this);
        this.extendLockup = this.extendLockup.bind(this);
        this.forceUnlock = this.forceUnlock.bind(this);
    }
    lockTokens(request) {
        const data = tx_1.MsgLockTokens.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Msg", "LockTokens", data);
        return promise.then(data => tx_1.MsgLockTokensResponse.decode(new binary_1.BinaryReader(data)));
    }
    beginUnlockingAll(request) {
        const data = tx_1.MsgBeginUnlockingAll.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Msg", "BeginUnlockingAll", data);
        return promise.then(data => tx_1.MsgBeginUnlockingAllResponse.decode(new binary_1.BinaryReader(data)));
    }
    beginUnlocking(request) {
        const data = tx_1.MsgBeginUnlocking.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Msg", "BeginUnlocking", data);
        return promise.then(data => tx_1.MsgBeginUnlockingResponse.decode(new binary_1.BinaryReader(data)));
    }
    extendLockup(request) {
        const data = tx_1.MsgExtendLockup.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Msg", "ExtendLockup", data);
        return promise.then(data => tx_1.MsgExtendLockupResponse.decode(new binary_1.BinaryReader(data)));
    }
    forceUnlock(request) {
        const data = tx_1.MsgForceUnlock.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Msg", "ForceUnlock", data);
        return promise.then(data => tx_1.MsgForceUnlockResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
