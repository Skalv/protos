"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.superfluidDelegate = this.superfluidDelegate.bind(this);
        this.superfluidUndelegate = this.superfluidUndelegate.bind(this);
        this.superfluidUnbondLock = this.superfluidUnbondLock.bind(this);
        this.lockAndSuperfluidDelegate = this.lockAndSuperfluidDelegate.bind(this);
        this.unPoolWhitelistedPool = this.unPoolWhitelistedPool.bind(this);
    }
    superfluidDelegate(request) {
        const data = tx_1.MsgSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidDelegate", data);
        return promise.then(data => tx_1.MsgSuperfluidDelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    superfluidUndelegate(request) {
        const data = tx_1.MsgSuperfluidUndelegate.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUndelegate", data);
        return promise.then(data => tx_1.MsgSuperfluidUndelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    superfluidUnbondLock(request) {
        const data = tx_1.MsgSuperfluidUnbondLock.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUnbondLock", data);
        return promise.then(data => tx_1.MsgSuperfluidUnbondLockResponse.decode(new binary_1.BinaryReader(data)));
    }
    lockAndSuperfluidDelegate(request) {
        const data = tx_1.MsgLockAndSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "LockAndSuperfluidDelegate", data);
        return promise.then(data => tx_1.MsgLockAndSuperfluidDelegateResponse.decode(new binary_1.BinaryReader(data)));
    }
    unPoolWhitelistedPool(request) {
        const data = tx_1.MsgUnPoolWhitelistedPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "UnPoolWhitelistedPool", data);
        return promise.then(data => tx_1.MsgUnPoolWhitelistedPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
