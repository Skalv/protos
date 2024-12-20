import { BinaryReader } from "../../binary";
import { createProtobufRpcClient } from "@cosmjs/stargate";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.moduleBalance = this.moduleBalance.bind(this);
        this.moduleLockedAmount = this.moduleLockedAmount.bind(this);
        this.accountUnlockableCoins = this.accountUnlockableCoins.bind(this);
        this.accountUnlockingCoins = this.accountUnlockingCoins.bind(this);
        this.accountLockedCoins = this.accountLockedCoins.bind(this);
        this.accountLockedPastTime = this.accountLockedPastTime.bind(this);
        this.accountLockedPastTimeNotUnlockingOnly = this.accountLockedPastTimeNotUnlockingOnly.bind(this);
        this.accountUnlockedBeforeTime = this.accountUnlockedBeforeTime.bind(this);
        this.accountLockedPastTimeDenom = this.accountLockedPastTimeDenom.bind(this);
        this.lockedDenom = this.lockedDenom.bind(this);
        this.lockedByID = this.lockedByID.bind(this);
        this.syntheticLockupsByLockupID = this.syntheticLockupsByLockupID.bind(this);
        this.accountLockedLongerDuration = this.accountLockedLongerDuration.bind(this);
        this.accountLockedDuration = this.accountLockedDuration.bind(this);
        this.accountLockedLongerDurationNotUnlockingOnly = this.accountLockedLongerDurationNotUnlockingOnly.bind(this);
        this.accountLockedLongerDurationDenom = this.accountLockedLongerDurationDenom.bind(this);
        this.params = this.params.bind(this);
    }
    moduleBalance(request = {}) {
        const data = ModuleBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "ModuleBalance", data);
        return promise.then(data => ModuleBalanceResponse.decode(new BinaryReader(data)));
    }
    moduleLockedAmount(request = {}) {
        const data = ModuleLockedAmountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "ModuleLockedAmount", data);
        return promise.then(data => ModuleLockedAmountResponse.decode(new BinaryReader(data)));
    }
    accountUnlockableCoins(request) {
        const data = AccountUnlockableCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockableCoins", data);
        return promise.then(data => AccountUnlockableCoinsResponse.decode(new BinaryReader(data)));
    }
    accountUnlockingCoins(request) {
        const data = AccountUnlockingCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockingCoins", data);
        return promise.then(data => AccountUnlockingCoinsResponse.decode(new BinaryReader(data)));
    }
    accountLockedCoins(request) {
        const data = AccountLockedCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedCoins", data);
        return promise.then(data => AccountLockedCoinsResponse.decode(new BinaryReader(data)));
    }
    accountLockedPastTime(request) {
        const data = AccountLockedPastTimeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTime", data);
        return promise.then(data => AccountLockedPastTimeResponse.decode(new BinaryReader(data)));
    }
    accountLockedPastTimeNotUnlockingOnly(request) {
        const data = AccountLockedPastTimeNotUnlockingOnlyRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeNotUnlockingOnly", data);
        return promise.then(data => AccountLockedPastTimeNotUnlockingOnlyResponse.decode(new BinaryReader(data)));
    }
    accountUnlockedBeforeTime(request) {
        const data = AccountUnlockedBeforeTimeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockedBeforeTime", data);
        return promise.then(data => AccountUnlockedBeforeTimeResponse.decode(new BinaryReader(data)));
    }
    accountLockedPastTimeDenom(request) {
        const data = AccountLockedPastTimeDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeDenom", data);
        return promise.then(data => AccountLockedPastTimeDenomResponse.decode(new BinaryReader(data)));
    }
    lockedDenom(request) {
        const data = LockedDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "LockedDenom", data);
        return promise.then(data => LockedDenomResponse.decode(new BinaryReader(data)));
    }
    lockedByID(request) {
        const data = LockedRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "LockedByID", data);
        return promise.then(data => LockedResponse.decode(new BinaryReader(data)));
    }
    syntheticLockupsByLockupID(request) {
        const data = SyntheticLockupsByLockupIDRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "SyntheticLockupsByLockupID", data);
        return promise.then(data => SyntheticLockupsByLockupIDResponse.decode(new BinaryReader(data)));
    }
    accountLockedLongerDuration(request) {
        const data = AccountLockedLongerDurationRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDuration", data);
        return promise.then(data => AccountLockedLongerDurationResponse.decode(new BinaryReader(data)));
    }
    accountLockedDuration(request) {
        const data = AccountLockedDurationRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedDuration", data);
        return promise.then(data => AccountLockedDurationResponse.decode(new BinaryReader(data)));
    }
    accountLockedLongerDurationNotUnlockingOnly(request) {
        const data = AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationNotUnlockingOnly", data);
        return promise.then(data => AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(new BinaryReader(data)));
    }
    accountLockedLongerDurationDenom(request) {
        const data = AccountLockedLongerDurationDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationDenom", data);
        return promise.then(data => AccountLockedLongerDurationDenomResponse.decode(new BinaryReader(data)));
    }
    params(request = {}) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "Params", data);
        return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
    }
}
export const createRpcQueryExtension = (base) => {
    const rpc = createProtobufRpcClient(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        moduleBalance(request) {
            return queryService.moduleBalance(request);
        },
        moduleLockedAmount(request) {
            return queryService.moduleLockedAmount(request);
        },
        accountUnlockableCoins(request) {
            return queryService.accountUnlockableCoins(request);
        },
        accountUnlockingCoins(request) {
            return queryService.accountUnlockingCoins(request);
        },
        accountLockedCoins(request) {
            return queryService.accountLockedCoins(request);
        },
        accountLockedPastTime(request) {
            return queryService.accountLockedPastTime(request);
        },
        accountLockedPastTimeNotUnlockingOnly(request) {
            return queryService.accountLockedPastTimeNotUnlockingOnly(request);
        },
        accountUnlockedBeforeTime(request) {
            return queryService.accountUnlockedBeforeTime(request);
        },
        accountLockedPastTimeDenom(request) {
            return queryService.accountLockedPastTimeDenom(request);
        },
        lockedDenom(request) {
            return queryService.lockedDenom(request);
        },
        lockedByID(request) {
            return queryService.lockedByID(request);
        },
        syntheticLockupsByLockupID(request) {
            return queryService.syntheticLockupsByLockupID(request);
        },
        accountLockedLongerDuration(request) {
            return queryService.accountLockedLongerDuration(request);
        },
        accountLockedDuration(request) {
            return queryService.accountLockedDuration(request);
        },
        accountLockedLongerDurationNotUnlockingOnly(request) {
            return queryService.accountLockedLongerDurationNotUnlockingOnly(request);
        },
        accountLockedLongerDurationDenom(request) {
            return queryService.accountLockedLongerDurationDenom(request);
        },
        params(request) {
            return queryService.params(request);
        }
    };
};
