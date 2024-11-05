"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_1 = require("../../../binary");
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.deposit = this.deposit.bind(this);
        this.withdraw = this.withdraw.bind(this);
        this.instantSpotMarketLaunch = this.instantSpotMarketLaunch.bind(this);
        this.instantPerpetualMarketLaunch = this.instantPerpetualMarketLaunch.bind(this);
        this.instantExpiryFuturesMarketLaunch = this.instantExpiryFuturesMarketLaunch.bind(this);
        this.createSpotLimitOrder = this.createSpotLimitOrder.bind(this);
        this.batchCreateSpotLimitOrders = this.batchCreateSpotLimitOrders.bind(this);
        this.createSpotMarketOrder = this.createSpotMarketOrder.bind(this);
        this.cancelSpotOrder = this.cancelSpotOrder.bind(this);
        this.batchCancelSpotOrders = this.batchCancelSpotOrders.bind(this);
        this.batchUpdateOrders = this.batchUpdateOrders.bind(this);
        this.exec = this.exec.bind(this);
        this.createDerivativeLimitOrder = this.createDerivativeLimitOrder.bind(this);
        this.batchCreateDerivativeLimitOrders = this.batchCreateDerivativeLimitOrders.bind(this);
        this.createDerivativeMarketOrder = this.createDerivativeMarketOrder.bind(this);
        this.cancelDerivativeOrder = this.cancelDerivativeOrder.bind(this);
        this.batchCancelDerivativeOrders = this.batchCancelDerivativeOrders.bind(this);
        this.instantBinaryOptionsMarketLaunch = this.instantBinaryOptionsMarketLaunch.bind(this);
        this.createBinaryOptionsLimitOrder = this.createBinaryOptionsLimitOrder.bind(this);
        this.createBinaryOptionsMarketOrder = this.createBinaryOptionsMarketOrder.bind(this);
        this.cancelBinaryOptionsOrder = this.cancelBinaryOptionsOrder.bind(this);
        this.batchCancelBinaryOptionsOrders = this.batchCancelBinaryOptionsOrders.bind(this);
        this.subaccountTransfer = this.subaccountTransfer.bind(this);
        this.externalTransfer = this.externalTransfer.bind(this);
        this.liquidatePosition = this.liquidatePosition.bind(this);
        this.increasePositionMargin = this.increasePositionMargin.bind(this);
        this.rewardsOptOut = this.rewardsOptOut.bind(this);
        this.adminUpdateBinaryOptionsMarket = this.adminUpdateBinaryOptionsMarket.bind(this);
    }
    deposit(request) {
        const data = tx_1.MsgDeposit.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Deposit", data);
        return promise.then(data => tx_1.MsgDepositResponse.decode(new binary_1.BinaryReader(data)));
    }
    withdraw(request) {
        const data = tx_1.MsgWithdraw.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Withdraw", data);
        return promise.then(data => tx_1.MsgWithdrawResponse.decode(new binary_1.BinaryReader(data)));
    }
    instantSpotMarketLaunch(request) {
        const data = tx_1.MsgInstantSpotMarketLaunch.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantSpotMarketLaunch", data);
        return promise.then(data => tx_1.MsgInstantSpotMarketLaunchResponse.decode(new binary_1.BinaryReader(data)));
    }
    instantPerpetualMarketLaunch(request) {
        const data = tx_1.MsgInstantPerpetualMarketLaunch.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantPerpetualMarketLaunch", data);
        return promise.then(data => tx_1.MsgInstantPerpetualMarketLaunchResponse.decode(new binary_1.BinaryReader(data)));
    }
    instantExpiryFuturesMarketLaunch(request) {
        const data = tx_1.MsgInstantExpiryFuturesMarketLaunch.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantExpiryFuturesMarketLaunch", data);
        return promise.then(data => tx_1.MsgInstantExpiryFuturesMarketLaunchResponse.decode(new binary_1.BinaryReader(data)));
    }
    createSpotLimitOrder(request) {
        const data = tx_1.MsgCreateSpotLimitOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateSpotLimitOrder", data);
        return promise.then(data => tx_1.MsgCreateSpotLimitOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchCreateSpotLimitOrders(request) {
        const data = tx_1.MsgBatchCreateSpotLimitOrders.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCreateSpotLimitOrders", data);
        return promise.then(data => tx_1.MsgBatchCreateSpotLimitOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    createSpotMarketOrder(request) {
        const data = tx_1.MsgCreateSpotMarketOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateSpotMarketOrder", data);
        return promise.then(data => tx_1.MsgCreateSpotMarketOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    cancelSpotOrder(request) {
        const data = tx_1.MsgCancelSpotOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelSpotOrder", data);
        return promise.then(data => tx_1.MsgCancelSpotOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchCancelSpotOrders(request) {
        const data = tx_1.MsgBatchCancelSpotOrders.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelSpotOrders", data);
        return promise.then(data => tx_1.MsgBatchCancelSpotOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchUpdateOrders(request) {
        const data = tx_1.MsgBatchUpdateOrders.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchUpdateOrders", data);
        return promise.then(data => tx_1.MsgBatchUpdateOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    exec(request) {
        const data = tx_1.MsgExec.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Exec", data);
        return promise.then(data => tx_1.MsgExecResponse.decode(new binary_1.BinaryReader(data)));
    }
    createDerivativeLimitOrder(request) {
        const data = tx_1.MsgCreateDerivativeLimitOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateDerivativeLimitOrder", data);
        return promise.then(data => tx_1.MsgCreateDerivativeLimitOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchCreateDerivativeLimitOrders(request) {
        const data = tx_1.MsgBatchCreateDerivativeLimitOrders.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCreateDerivativeLimitOrders", data);
        return promise.then(data => tx_1.MsgBatchCreateDerivativeLimitOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    createDerivativeMarketOrder(request) {
        const data = tx_1.MsgCreateDerivativeMarketOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateDerivativeMarketOrder", data);
        return promise.then(data => tx_1.MsgCreateDerivativeMarketOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    cancelDerivativeOrder(request) {
        const data = tx_1.MsgCancelDerivativeOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelDerivativeOrder", data);
        return promise.then(data => tx_1.MsgCancelDerivativeOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchCancelDerivativeOrders(request) {
        const data = tx_1.MsgBatchCancelDerivativeOrders.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelDerivativeOrders", data);
        return promise.then(data => tx_1.MsgBatchCancelDerivativeOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    instantBinaryOptionsMarketLaunch(request) {
        const data = tx_1.MsgInstantBinaryOptionsMarketLaunch.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantBinaryOptionsMarketLaunch", data);
        return promise.then(data => tx_1.MsgInstantBinaryOptionsMarketLaunchResponse.decode(new binary_1.BinaryReader(data)));
    }
    createBinaryOptionsLimitOrder(request) {
        const data = tx_1.MsgCreateBinaryOptionsLimitOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateBinaryOptionsLimitOrder", data);
        return promise.then(data => tx_1.MsgCreateBinaryOptionsLimitOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    createBinaryOptionsMarketOrder(request) {
        const data = tx_1.MsgCreateBinaryOptionsMarketOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateBinaryOptionsMarketOrder", data);
        return promise.then(data => tx_1.MsgCreateBinaryOptionsMarketOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    cancelBinaryOptionsOrder(request) {
        const data = tx_1.MsgCancelBinaryOptionsOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelBinaryOptionsOrder", data);
        return promise.then(data => tx_1.MsgCancelBinaryOptionsOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    batchCancelBinaryOptionsOrders(request) {
        const data = tx_1.MsgBatchCancelBinaryOptionsOrders.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelBinaryOptionsOrders", data);
        return promise.then(data => tx_1.MsgBatchCancelBinaryOptionsOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    subaccountTransfer(request) {
        const data = tx_1.MsgSubaccountTransfer.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "SubaccountTransfer", data);
        return promise.then(data => tx_1.MsgSubaccountTransferResponse.decode(new binary_1.BinaryReader(data)));
    }
    externalTransfer(request) {
        const data = tx_1.MsgExternalTransfer.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "ExternalTransfer", data);
        return promise.then(data => tx_1.MsgExternalTransferResponse.decode(new binary_1.BinaryReader(data)));
    }
    liquidatePosition(request) {
        const data = tx_1.MsgLiquidatePosition.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "LiquidatePosition", data);
        return promise.then(data => tx_1.MsgLiquidatePositionResponse.decode(new binary_1.BinaryReader(data)));
    }
    increasePositionMargin(request) {
        const data = tx_1.MsgIncreasePositionMargin.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "IncreasePositionMargin", data);
        return promise.then(data => tx_1.MsgIncreasePositionMarginResponse.decode(new binary_1.BinaryReader(data)));
    }
    rewardsOptOut(request) {
        const data = tx_1.MsgRewardsOptOut.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "RewardsOptOut", data);
        return promise.then(data => tx_1.MsgRewardsOptOutResponse.decode(new binary_1.BinaryReader(data)));
    }
    adminUpdateBinaryOptionsMarket(request) {
        const data = tx_1.MsgAdminUpdateBinaryOptionsMarket.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "AdminUpdateBinaryOptionsMarket", data);
        return promise.then(data => tx_1.MsgAdminUpdateBinaryOptionsMarketResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
