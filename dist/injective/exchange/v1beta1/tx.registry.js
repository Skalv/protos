"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/injective.exchange.v1beta1.MsgDeposit", tx_1.MsgDeposit], ["/injective.exchange.v1beta1.MsgWithdraw", tx_1.MsgWithdraw], ["/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch", tx_1.MsgInstantSpotMarketLaunch], ["/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch", tx_1.MsgInstantPerpetualMarketLaunch], ["/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch", tx_1.MsgInstantExpiryFuturesMarketLaunch], ["/injective.exchange.v1beta1.MsgCreateSpotLimitOrder", tx_1.MsgCreateSpotLimitOrder], ["/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders", tx_1.MsgBatchCreateSpotLimitOrders], ["/injective.exchange.v1beta1.MsgCreateSpotMarketOrder", tx_1.MsgCreateSpotMarketOrder], ["/injective.exchange.v1beta1.MsgCancelSpotOrder", tx_1.MsgCancelSpotOrder], ["/injective.exchange.v1beta1.MsgBatchCancelSpotOrders", tx_1.MsgBatchCancelSpotOrders], ["/injective.exchange.v1beta1.MsgBatchUpdateOrders", tx_1.MsgBatchUpdateOrders], ["/injective.exchange.v1beta1.MsgExec", tx_1.MsgExec], ["/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder", tx_1.MsgCreateDerivativeLimitOrder], ["/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders", tx_1.MsgBatchCreateDerivativeLimitOrders], ["/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder", tx_1.MsgCreateDerivativeMarketOrder], ["/injective.exchange.v1beta1.MsgCancelDerivativeOrder", tx_1.MsgCancelDerivativeOrder], ["/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders", tx_1.MsgBatchCancelDerivativeOrders], ["/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch", tx_1.MsgInstantBinaryOptionsMarketLaunch], ["/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder", tx_1.MsgCreateBinaryOptionsLimitOrder], ["/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder", tx_1.MsgCreateBinaryOptionsMarketOrder], ["/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder", tx_1.MsgCancelBinaryOptionsOrder], ["/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders", tx_1.MsgBatchCancelBinaryOptionsOrders], ["/injective.exchange.v1beta1.MsgSubaccountTransfer", tx_1.MsgSubaccountTransfer], ["/injective.exchange.v1beta1.MsgExternalTransfer", tx_1.MsgExternalTransfer], ["/injective.exchange.v1beta1.MsgLiquidatePosition", tx_1.MsgLiquidatePosition], ["/injective.exchange.v1beta1.MsgIncreasePositionMargin", tx_1.MsgIncreasePositionMargin], ["/injective.exchange.v1beta1.MsgRewardsOptOut", tx_1.MsgRewardsOptOut], ["/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket", tx_1.MsgAdminUpdateBinaryOptionsMarket]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        deposit(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
                value: tx_1.MsgDeposit.encode(value).finish()
            };
        },
        withdraw(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
                value: tx_1.MsgWithdraw.encode(value).finish()
            };
        },
        instantSpotMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
                value: tx_1.MsgInstantSpotMarketLaunch.encode(value).finish()
            };
        },
        instantPerpetualMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
                value: tx_1.MsgInstantPerpetualMarketLaunch.encode(value).finish()
            };
        },
        instantExpiryFuturesMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
                value: tx_1.MsgInstantExpiryFuturesMarketLaunch.encode(value).finish()
            };
        },
        createSpotLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
                value: tx_1.MsgCreateSpotLimitOrder.encode(value).finish()
            };
        },
        batchCreateSpotLimitOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
                value: tx_1.MsgBatchCreateSpotLimitOrders.encode(value).finish()
            };
        },
        createSpotMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
                value: tx_1.MsgCreateSpotMarketOrder.encode(value).finish()
            };
        },
        cancelSpotOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
                value: tx_1.MsgCancelSpotOrder.encode(value).finish()
            };
        },
        batchCancelSpotOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
                value: tx_1.MsgBatchCancelSpotOrders.encode(value).finish()
            };
        },
        batchUpdateOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
                value: tx_1.MsgBatchUpdateOrders.encode(value).finish()
            };
        },
        exec(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgExec",
                value: tx_1.MsgExec.encode(value).finish()
            };
        },
        createDerivativeLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
                value: tx_1.MsgCreateDerivativeLimitOrder.encode(value).finish()
            };
        },
        batchCreateDerivativeLimitOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
                value: tx_1.MsgBatchCreateDerivativeLimitOrders.encode(value).finish()
            };
        },
        createDerivativeMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
                value: tx_1.MsgCreateDerivativeMarketOrder.encode(value).finish()
            };
        },
        cancelDerivativeOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
                value: tx_1.MsgCancelDerivativeOrder.encode(value).finish()
            };
        },
        batchCancelDerivativeOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
                value: tx_1.MsgBatchCancelDerivativeOrders.encode(value).finish()
            };
        },
        instantBinaryOptionsMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
                value: tx_1.MsgInstantBinaryOptionsMarketLaunch.encode(value).finish()
            };
        },
        createBinaryOptionsLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
                value: tx_1.MsgCreateBinaryOptionsLimitOrder.encode(value).finish()
            };
        },
        createBinaryOptionsMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
                value: tx_1.MsgCreateBinaryOptionsMarketOrder.encode(value).finish()
            };
        },
        cancelBinaryOptionsOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
                value: tx_1.MsgCancelBinaryOptionsOrder.encode(value).finish()
            };
        },
        batchCancelBinaryOptionsOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
                value: tx_1.MsgBatchCancelBinaryOptionsOrders.encode(value).finish()
            };
        },
        subaccountTransfer(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
                value: tx_1.MsgSubaccountTransfer.encode(value).finish()
            };
        },
        externalTransfer(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
                value: tx_1.MsgExternalTransfer.encode(value).finish()
            };
        },
        liquidatePosition(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
                value: tx_1.MsgLiquidatePosition.encode(value).finish()
            };
        },
        increasePositionMargin(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
                value: tx_1.MsgIncreasePositionMargin.encode(value).finish()
            };
        },
        rewardsOptOut(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
                value: tx_1.MsgRewardsOptOut.encode(value).finish()
            };
        },
        adminUpdateBinaryOptionsMarket(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
                value: tx_1.MsgAdminUpdateBinaryOptionsMarket.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        deposit(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
                value
            };
        },
        withdraw(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
                value
            };
        },
        instantSpotMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
                value
            };
        },
        instantPerpetualMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
                value
            };
        },
        instantExpiryFuturesMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
                value
            };
        },
        createSpotLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
                value
            };
        },
        batchCreateSpotLimitOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
                value
            };
        },
        createSpotMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
                value
            };
        },
        cancelSpotOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
                value
            };
        },
        batchCancelSpotOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
                value
            };
        },
        batchUpdateOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
                value
            };
        },
        exec(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgExec",
                value
            };
        },
        createDerivativeLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
                value
            };
        },
        batchCreateDerivativeLimitOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
                value
            };
        },
        createDerivativeMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
                value
            };
        },
        cancelDerivativeOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
                value
            };
        },
        batchCancelDerivativeOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
                value
            };
        },
        instantBinaryOptionsMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
                value
            };
        },
        createBinaryOptionsLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
                value
            };
        },
        createBinaryOptionsMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
                value
            };
        },
        cancelBinaryOptionsOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
                value
            };
        },
        batchCancelBinaryOptionsOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
                value
            };
        },
        subaccountTransfer(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
                value
            };
        },
        externalTransfer(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
                value
            };
        },
        liquidatePosition(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
                value
            };
        },
        increasePositionMargin(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
                value
            };
        },
        rewardsOptOut(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
                value
            };
        },
        adminUpdateBinaryOptionsMarket(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
                value
            };
        }
    },
    fromPartial: {
        deposit(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
                value: tx_1.MsgDeposit.fromPartial(value)
            };
        },
        withdraw(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
                value: tx_1.MsgWithdraw.fromPartial(value)
            };
        },
        instantSpotMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
                value: tx_1.MsgInstantSpotMarketLaunch.fromPartial(value)
            };
        },
        instantPerpetualMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
                value: tx_1.MsgInstantPerpetualMarketLaunch.fromPartial(value)
            };
        },
        instantExpiryFuturesMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
                value: tx_1.MsgInstantExpiryFuturesMarketLaunch.fromPartial(value)
            };
        },
        createSpotLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
                value: tx_1.MsgCreateSpotLimitOrder.fromPartial(value)
            };
        },
        batchCreateSpotLimitOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
                value: tx_1.MsgBatchCreateSpotLimitOrders.fromPartial(value)
            };
        },
        createSpotMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
                value: tx_1.MsgCreateSpotMarketOrder.fromPartial(value)
            };
        },
        cancelSpotOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
                value: tx_1.MsgCancelSpotOrder.fromPartial(value)
            };
        },
        batchCancelSpotOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
                value: tx_1.MsgBatchCancelSpotOrders.fromPartial(value)
            };
        },
        batchUpdateOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
                value: tx_1.MsgBatchUpdateOrders.fromPartial(value)
            };
        },
        exec(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgExec",
                value: tx_1.MsgExec.fromPartial(value)
            };
        },
        createDerivativeLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
                value: tx_1.MsgCreateDerivativeLimitOrder.fromPartial(value)
            };
        },
        batchCreateDerivativeLimitOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
                value: tx_1.MsgBatchCreateDerivativeLimitOrders.fromPartial(value)
            };
        },
        createDerivativeMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
                value: tx_1.MsgCreateDerivativeMarketOrder.fromPartial(value)
            };
        },
        cancelDerivativeOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
                value: tx_1.MsgCancelDerivativeOrder.fromPartial(value)
            };
        },
        batchCancelDerivativeOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
                value: tx_1.MsgBatchCancelDerivativeOrders.fromPartial(value)
            };
        },
        instantBinaryOptionsMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
                value: tx_1.MsgInstantBinaryOptionsMarketLaunch.fromPartial(value)
            };
        },
        createBinaryOptionsLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
                value: tx_1.MsgCreateBinaryOptionsLimitOrder.fromPartial(value)
            };
        },
        createBinaryOptionsMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
                value: tx_1.MsgCreateBinaryOptionsMarketOrder.fromPartial(value)
            };
        },
        cancelBinaryOptionsOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
                value: tx_1.MsgCancelBinaryOptionsOrder.fromPartial(value)
            };
        },
        batchCancelBinaryOptionsOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
                value: tx_1.MsgBatchCancelBinaryOptionsOrders.fromPartial(value)
            };
        },
        subaccountTransfer(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
                value: tx_1.MsgSubaccountTransfer.fromPartial(value)
            };
        },
        externalTransfer(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
                value: tx_1.MsgExternalTransfer.fromPartial(value)
            };
        },
        liquidatePosition(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
                value: tx_1.MsgLiquidatePosition.fromPartial(value)
            };
        },
        increasePositionMargin(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
                value: tx_1.MsgIncreasePositionMargin.fromPartial(value)
            };
        },
        rewardsOptOut(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
                value: tx_1.MsgRewardsOptOut.fromPartial(value)
            };
        },
        adminUpdateBinaryOptionsMarket(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
                value: tx_1.MsgAdminUpdateBinaryOptionsMarket.fromPartial(value)
            };
        }
    }
};
