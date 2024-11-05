import { BinaryReader } from "../../../binary";
import { MsgDeposit, MsgDepositResponse, MsgWithdraw, MsgWithdrawResponse, MsgInstantSpotMarketLaunch, MsgInstantSpotMarketLaunchResponse, MsgInstantPerpetualMarketLaunch, MsgInstantPerpetualMarketLaunchResponse, MsgInstantExpiryFuturesMarketLaunch, MsgInstantExpiryFuturesMarketLaunchResponse, MsgCreateSpotLimitOrder, MsgCreateSpotLimitOrderResponse, MsgBatchCreateSpotLimitOrders, MsgBatchCreateSpotLimitOrdersResponse, MsgCreateSpotMarketOrder, MsgCreateSpotMarketOrderResponse, MsgCancelSpotOrder, MsgCancelSpotOrderResponse, MsgBatchCancelSpotOrders, MsgBatchCancelSpotOrdersResponse, MsgBatchUpdateOrders, MsgBatchUpdateOrdersResponse, MsgExec, MsgExecResponse, MsgCreateDerivativeLimitOrder, MsgCreateDerivativeLimitOrderResponse, MsgBatchCreateDerivativeLimitOrders, MsgBatchCreateDerivativeLimitOrdersResponse, MsgCreateDerivativeMarketOrder, MsgCreateDerivativeMarketOrderResponse, MsgCancelDerivativeOrder, MsgCancelDerivativeOrderResponse, MsgBatchCancelDerivativeOrders, MsgBatchCancelDerivativeOrdersResponse, MsgInstantBinaryOptionsMarketLaunch, MsgInstantBinaryOptionsMarketLaunchResponse, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsLimitOrderResponse, MsgCreateBinaryOptionsMarketOrder, MsgCreateBinaryOptionsMarketOrderResponse, MsgCancelBinaryOptionsOrder, MsgCancelBinaryOptionsOrderResponse, MsgBatchCancelBinaryOptionsOrders, MsgBatchCancelBinaryOptionsOrdersResponse, MsgSubaccountTransfer, MsgSubaccountTransferResponse, MsgExternalTransfer, MsgExternalTransferResponse, MsgLiquidatePosition, MsgLiquidatePositionResponse, MsgIncreasePositionMargin, MsgIncreasePositionMarginResponse, MsgRewardsOptOut, MsgRewardsOptOutResponse, MsgAdminUpdateBinaryOptionsMarket, MsgAdminUpdateBinaryOptionsMarketResponse } from "./tx";
export class MsgClientImpl {
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
        const data = MsgDeposit.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Deposit", data);
        return promise.then(data => MsgDepositResponse.decode(new BinaryReader(data)));
    }
    withdraw(request) {
        const data = MsgWithdraw.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Withdraw", data);
        return promise.then(data => MsgWithdrawResponse.decode(new BinaryReader(data)));
    }
    instantSpotMarketLaunch(request) {
        const data = MsgInstantSpotMarketLaunch.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantSpotMarketLaunch", data);
        return promise.then(data => MsgInstantSpotMarketLaunchResponse.decode(new BinaryReader(data)));
    }
    instantPerpetualMarketLaunch(request) {
        const data = MsgInstantPerpetualMarketLaunch.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantPerpetualMarketLaunch", data);
        return promise.then(data => MsgInstantPerpetualMarketLaunchResponse.decode(new BinaryReader(data)));
    }
    instantExpiryFuturesMarketLaunch(request) {
        const data = MsgInstantExpiryFuturesMarketLaunch.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantExpiryFuturesMarketLaunch", data);
        return promise.then(data => MsgInstantExpiryFuturesMarketLaunchResponse.decode(new BinaryReader(data)));
    }
    createSpotLimitOrder(request) {
        const data = MsgCreateSpotLimitOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateSpotLimitOrder", data);
        return promise.then(data => MsgCreateSpotLimitOrderResponse.decode(new BinaryReader(data)));
    }
    batchCreateSpotLimitOrders(request) {
        const data = MsgBatchCreateSpotLimitOrders.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCreateSpotLimitOrders", data);
        return promise.then(data => MsgBatchCreateSpotLimitOrdersResponse.decode(new BinaryReader(data)));
    }
    createSpotMarketOrder(request) {
        const data = MsgCreateSpotMarketOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateSpotMarketOrder", data);
        return promise.then(data => MsgCreateSpotMarketOrderResponse.decode(new BinaryReader(data)));
    }
    cancelSpotOrder(request) {
        const data = MsgCancelSpotOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelSpotOrder", data);
        return promise.then(data => MsgCancelSpotOrderResponse.decode(new BinaryReader(data)));
    }
    batchCancelSpotOrders(request) {
        const data = MsgBatchCancelSpotOrders.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelSpotOrders", data);
        return promise.then(data => MsgBatchCancelSpotOrdersResponse.decode(new BinaryReader(data)));
    }
    batchUpdateOrders(request) {
        const data = MsgBatchUpdateOrders.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchUpdateOrders", data);
        return promise.then(data => MsgBatchUpdateOrdersResponse.decode(new BinaryReader(data)));
    }
    exec(request) {
        const data = MsgExec.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "Exec", data);
        return promise.then(data => MsgExecResponse.decode(new BinaryReader(data)));
    }
    createDerivativeLimitOrder(request) {
        const data = MsgCreateDerivativeLimitOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateDerivativeLimitOrder", data);
        return promise.then(data => MsgCreateDerivativeLimitOrderResponse.decode(new BinaryReader(data)));
    }
    batchCreateDerivativeLimitOrders(request) {
        const data = MsgBatchCreateDerivativeLimitOrders.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCreateDerivativeLimitOrders", data);
        return promise.then(data => MsgBatchCreateDerivativeLimitOrdersResponse.decode(new BinaryReader(data)));
    }
    createDerivativeMarketOrder(request) {
        const data = MsgCreateDerivativeMarketOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateDerivativeMarketOrder", data);
        return promise.then(data => MsgCreateDerivativeMarketOrderResponse.decode(new BinaryReader(data)));
    }
    cancelDerivativeOrder(request) {
        const data = MsgCancelDerivativeOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelDerivativeOrder", data);
        return promise.then(data => MsgCancelDerivativeOrderResponse.decode(new BinaryReader(data)));
    }
    batchCancelDerivativeOrders(request) {
        const data = MsgBatchCancelDerivativeOrders.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelDerivativeOrders", data);
        return promise.then(data => MsgBatchCancelDerivativeOrdersResponse.decode(new BinaryReader(data)));
    }
    instantBinaryOptionsMarketLaunch(request) {
        const data = MsgInstantBinaryOptionsMarketLaunch.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "InstantBinaryOptionsMarketLaunch", data);
        return promise.then(data => MsgInstantBinaryOptionsMarketLaunchResponse.decode(new BinaryReader(data)));
    }
    createBinaryOptionsLimitOrder(request) {
        const data = MsgCreateBinaryOptionsLimitOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateBinaryOptionsLimitOrder", data);
        return promise.then(data => MsgCreateBinaryOptionsLimitOrderResponse.decode(new BinaryReader(data)));
    }
    createBinaryOptionsMarketOrder(request) {
        const data = MsgCreateBinaryOptionsMarketOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CreateBinaryOptionsMarketOrder", data);
        return promise.then(data => MsgCreateBinaryOptionsMarketOrderResponse.decode(new BinaryReader(data)));
    }
    cancelBinaryOptionsOrder(request) {
        const data = MsgCancelBinaryOptionsOrder.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "CancelBinaryOptionsOrder", data);
        return promise.then(data => MsgCancelBinaryOptionsOrderResponse.decode(new BinaryReader(data)));
    }
    batchCancelBinaryOptionsOrders(request) {
        const data = MsgBatchCancelBinaryOptionsOrders.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "BatchCancelBinaryOptionsOrders", data);
        return promise.then(data => MsgBatchCancelBinaryOptionsOrdersResponse.decode(new BinaryReader(data)));
    }
    subaccountTransfer(request) {
        const data = MsgSubaccountTransfer.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "SubaccountTransfer", data);
        return promise.then(data => MsgSubaccountTransferResponse.decode(new BinaryReader(data)));
    }
    externalTransfer(request) {
        const data = MsgExternalTransfer.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "ExternalTransfer", data);
        return promise.then(data => MsgExternalTransferResponse.decode(new BinaryReader(data)));
    }
    liquidatePosition(request) {
        const data = MsgLiquidatePosition.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "LiquidatePosition", data);
        return promise.then(data => MsgLiquidatePositionResponse.decode(new BinaryReader(data)));
    }
    increasePositionMargin(request) {
        const data = MsgIncreasePositionMargin.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "IncreasePositionMargin", data);
        return promise.then(data => MsgIncreasePositionMarginResponse.decode(new BinaryReader(data)));
    }
    rewardsOptOut(request) {
        const data = MsgRewardsOptOut.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "RewardsOptOut", data);
        return promise.then(data => MsgRewardsOptOutResponse.decode(new BinaryReader(data)));
    }
    adminUpdateBinaryOptionsMarket(request) {
        const data = MsgAdminUpdateBinaryOptionsMarket.encode(request).finish();
        const promise = this.rpc.request("injective.exchange.v1beta1.Msg", "AdminUpdateBinaryOptionsMarket", data);
        return promise.then(data => MsgAdminUpdateBinaryOptionsMarketResponse.decode(new BinaryReader(data)));
    }
}
