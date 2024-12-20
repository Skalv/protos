import { BinaryReader } from "../../binary";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockResponse, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolResponse } from "./tx";
export class MsgClientImpl {
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
        const data = MsgSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidDelegate", data);
        return promise.then(data => MsgSuperfluidDelegateResponse.decode(new BinaryReader(data)));
    }
    superfluidUndelegate(request) {
        const data = MsgSuperfluidUndelegate.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUndelegate", data);
        return promise.then(data => MsgSuperfluidUndelegateResponse.decode(new BinaryReader(data)));
    }
    superfluidUnbondLock(request) {
        const data = MsgSuperfluidUnbondLock.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "SuperfluidUnbondLock", data);
        return promise.then(data => MsgSuperfluidUnbondLockResponse.decode(new BinaryReader(data)));
    }
    lockAndSuperfluidDelegate(request) {
        const data = MsgLockAndSuperfluidDelegate.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "LockAndSuperfluidDelegate", data);
        return promise.then(data => MsgLockAndSuperfluidDelegateResponse.decode(new BinaryReader(data)));
    }
    unPoolWhitelistedPool(request) {
        const data = MsgUnPoolWhitelistedPool.encode(request).finish();
        const promise = this.rpc.request("osmosis.superfluid.Msg", "UnPoolWhitelistedPool", data);
        return promise.then(data => MsgUnPoolWhitelistedPoolResponse.decode(new BinaryReader(data)));
    }
}
