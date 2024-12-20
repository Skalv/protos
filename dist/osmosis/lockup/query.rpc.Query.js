"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
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
        const data = query_1.ModuleBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "ModuleBalance", data);
        return promise.then(data => query_1.ModuleBalanceResponse.decode(new binary_1.BinaryReader(data)));
    }
    moduleLockedAmount(request = {}) {
        const data = query_1.ModuleLockedAmountRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "ModuleLockedAmount", data);
        return promise.then(data => query_1.ModuleLockedAmountResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountUnlockableCoins(request) {
        const data = query_1.AccountUnlockableCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockableCoins", data);
        return promise.then(data => query_1.AccountUnlockableCoinsResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountUnlockingCoins(request) {
        const data = query_1.AccountUnlockingCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockingCoins", data);
        return promise.then(data => query_1.AccountUnlockingCoinsResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountLockedCoins(request) {
        const data = query_1.AccountLockedCoinsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedCoins", data);
        return promise.then(data => query_1.AccountLockedCoinsResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountLockedPastTime(request) {
        const data = query_1.AccountLockedPastTimeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTime", data);
        return promise.then(data => query_1.AccountLockedPastTimeResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountLockedPastTimeNotUnlockingOnly(request) {
        const data = query_1.AccountLockedPastTimeNotUnlockingOnlyRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeNotUnlockingOnly", data);
        return promise.then(data => query_1.AccountLockedPastTimeNotUnlockingOnlyResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountUnlockedBeforeTime(request) {
        const data = query_1.AccountUnlockedBeforeTimeRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockedBeforeTime", data);
        return promise.then(data => query_1.AccountUnlockedBeforeTimeResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountLockedPastTimeDenom(request) {
        const data = query_1.AccountLockedPastTimeDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeDenom", data);
        return promise.then(data => query_1.AccountLockedPastTimeDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    lockedDenom(request) {
        const data = query_1.LockedDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "LockedDenom", data);
        return promise.then(data => query_1.LockedDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    lockedByID(request) {
        const data = query_1.LockedRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "LockedByID", data);
        return promise.then(data => query_1.LockedResponse.decode(new binary_1.BinaryReader(data)));
    }
    syntheticLockupsByLockupID(request) {
        const data = query_1.SyntheticLockupsByLockupIDRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "SyntheticLockupsByLockupID", data);
        return promise.then(data => query_1.SyntheticLockupsByLockupIDResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountLockedLongerDuration(request) {
        const data = query_1.AccountLockedLongerDurationRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDuration", data);
        return promise.then(data => query_1.AccountLockedLongerDurationResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountLockedDuration(request) {
        const data = query_1.AccountLockedDurationRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedDuration", data);
        return promise.then(data => query_1.AccountLockedDurationResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountLockedLongerDurationNotUnlockingOnly(request) {
        const data = query_1.AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationNotUnlockingOnly", data);
        return promise.then(data => query_1.AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(new binary_1.BinaryReader(data)));
    }
    accountLockedLongerDurationDenom(request) {
        const data = query_1.AccountLockedLongerDurationDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationDenom", data);
        return promise.then(data => query_1.AccountLockedLongerDurationDenomResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.lockup.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
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
exports.createRpcQueryExtension = createRpcQueryExtension;
