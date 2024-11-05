import { MsgDeposit, MsgWithdraw, MsgInstantSpotMarketLaunch, MsgInstantPerpetualMarketLaunch, MsgInstantExpiryFuturesMarketLaunch, MsgCreateSpotLimitOrder, MsgBatchCreateSpotLimitOrders, MsgCreateSpotMarketOrder, MsgCancelSpotOrder, MsgBatchCancelSpotOrders, MsgBatchUpdateOrders, MsgExec, MsgCreateDerivativeLimitOrder, MsgBatchCreateDerivativeLimitOrders, MsgCreateDerivativeMarketOrder, MsgCancelDerivativeOrder, MsgBatchCancelDerivativeOrders, MsgInstantBinaryOptionsMarketLaunch, MsgCreateBinaryOptionsLimitOrder, MsgCreateBinaryOptionsMarketOrder, MsgCancelBinaryOptionsOrder, MsgBatchCancelBinaryOptionsOrders, MsgSubaccountTransfer, MsgExternalTransfer, MsgLiquidatePosition, MsgIncreasePositionMargin, MsgRewardsOptOut, MsgAdminUpdateBinaryOptionsMarket } from "./tx";
export const registry = [["/injective.exchange.v1beta1.MsgDeposit", MsgDeposit], ["/injective.exchange.v1beta1.MsgWithdraw", MsgWithdraw], ["/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch", MsgInstantSpotMarketLaunch], ["/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch", MsgInstantPerpetualMarketLaunch], ["/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch", MsgInstantExpiryFuturesMarketLaunch], ["/injective.exchange.v1beta1.MsgCreateSpotLimitOrder", MsgCreateSpotLimitOrder], ["/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders", MsgBatchCreateSpotLimitOrders], ["/injective.exchange.v1beta1.MsgCreateSpotMarketOrder", MsgCreateSpotMarketOrder], ["/injective.exchange.v1beta1.MsgCancelSpotOrder", MsgCancelSpotOrder], ["/injective.exchange.v1beta1.MsgBatchCancelSpotOrders", MsgBatchCancelSpotOrders], ["/injective.exchange.v1beta1.MsgBatchUpdateOrders", MsgBatchUpdateOrders], ["/injective.exchange.v1beta1.MsgExec", MsgExec], ["/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder", MsgCreateDerivativeLimitOrder], ["/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders", MsgBatchCreateDerivativeLimitOrders], ["/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder", MsgCreateDerivativeMarketOrder], ["/injective.exchange.v1beta1.MsgCancelDerivativeOrder", MsgCancelDerivativeOrder], ["/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders", MsgBatchCancelDerivativeOrders], ["/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch", MsgInstantBinaryOptionsMarketLaunch], ["/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder", MsgCreateBinaryOptionsLimitOrder], ["/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder", MsgCreateBinaryOptionsMarketOrder], ["/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder", MsgCancelBinaryOptionsOrder], ["/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders", MsgBatchCancelBinaryOptionsOrders], ["/injective.exchange.v1beta1.MsgSubaccountTransfer", MsgSubaccountTransfer], ["/injective.exchange.v1beta1.MsgExternalTransfer", MsgExternalTransfer], ["/injective.exchange.v1beta1.MsgLiquidatePosition", MsgLiquidatePosition], ["/injective.exchange.v1beta1.MsgIncreasePositionMargin", MsgIncreasePositionMargin], ["/injective.exchange.v1beta1.MsgRewardsOptOut", MsgRewardsOptOut], ["/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket", MsgAdminUpdateBinaryOptionsMarket]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        deposit(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgDeposit",
                value: MsgDeposit.encode(value).finish()
            };
        },
        withdraw(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
                value: MsgWithdraw.encode(value).finish()
            };
        },
        instantSpotMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
                value: MsgInstantSpotMarketLaunch.encode(value).finish()
            };
        },
        instantPerpetualMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
                value: MsgInstantPerpetualMarketLaunch.encode(value).finish()
            };
        },
        instantExpiryFuturesMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
                value: MsgInstantExpiryFuturesMarketLaunch.encode(value).finish()
            };
        },
        createSpotLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
                value: MsgCreateSpotLimitOrder.encode(value).finish()
            };
        },
        batchCreateSpotLimitOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
                value: MsgBatchCreateSpotLimitOrders.encode(value).finish()
            };
        },
        createSpotMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
                value: MsgCreateSpotMarketOrder.encode(value).finish()
            };
        },
        cancelSpotOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
                value: MsgCancelSpotOrder.encode(value).finish()
            };
        },
        batchCancelSpotOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
                value: MsgBatchCancelSpotOrders.encode(value).finish()
            };
        },
        batchUpdateOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
                value: MsgBatchUpdateOrders.encode(value).finish()
            };
        },
        exec(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgExec",
                value: MsgExec.encode(value).finish()
            };
        },
        createDerivativeLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
                value: MsgCreateDerivativeLimitOrder.encode(value).finish()
            };
        },
        batchCreateDerivativeLimitOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
                value: MsgBatchCreateDerivativeLimitOrders.encode(value).finish()
            };
        },
        createDerivativeMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
                value: MsgCreateDerivativeMarketOrder.encode(value).finish()
            };
        },
        cancelDerivativeOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
                value: MsgCancelDerivativeOrder.encode(value).finish()
            };
        },
        batchCancelDerivativeOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
                value: MsgBatchCancelDerivativeOrders.encode(value).finish()
            };
        },
        instantBinaryOptionsMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
                value: MsgInstantBinaryOptionsMarketLaunch.encode(value).finish()
            };
        },
        createBinaryOptionsLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
                value: MsgCreateBinaryOptionsLimitOrder.encode(value).finish()
            };
        },
        createBinaryOptionsMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
                value: MsgCreateBinaryOptionsMarketOrder.encode(value).finish()
            };
        },
        cancelBinaryOptionsOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
                value: MsgCancelBinaryOptionsOrder.encode(value).finish()
            };
        },
        batchCancelBinaryOptionsOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
                value: MsgBatchCancelBinaryOptionsOrders.encode(value).finish()
            };
        },
        subaccountTransfer(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
                value: MsgSubaccountTransfer.encode(value).finish()
            };
        },
        externalTransfer(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
                value: MsgExternalTransfer.encode(value).finish()
            };
        },
        liquidatePosition(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
                value: MsgLiquidatePosition.encode(value).finish()
            };
        },
        increasePositionMargin(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
                value: MsgIncreasePositionMargin.encode(value).finish()
            };
        },
        rewardsOptOut(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
                value: MsgRewardsOptOut.encode(value).finish()
            };
        },
        adminUpdateBinaryOptionsMarket(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
                value: MsgAdminUpdateBinaryOptionsMarket.encode(value).finish()
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
                value: MsgDeposit.fromPartial(value)
            };
        },
        withdraw(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgWithdraw",
                value: MsgWithdraw.fromPartial(value)
            };
        },
        instantSpotMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
                value: MsgInstantSpotMarketLaunch.fromPartial(value)
            };
        },
        instantPerpetualMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
                value: MsgInstantPerpetualMarketLaunch.fromPartial(value)
            };
        },
        instantExpiryFuturesMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
                value: MsgInstantExpiryFuturesMarketLaunch.fromPartial(value)
            };
        },
        createSpotLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
                value: MsgCreateSpotLimitOrder.fromPartial(value)
            };
        },
        batchCreateSpotLimitOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
                value: MsgBatchCreateSpotLimitOrders.fromPartial(value)
            };
        },
        createSpotMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
                value: MsgCreateSpotMarketOrder.fromPartial(value)
            };
        },
        cancelSpotOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
                value: MsgCancelSpotOrder.fromPartial(value)
            };
        },
        batchCancelSpotOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
                value: MsgBatchCancelSpotOrders.fromPartial(value)
            };
        },
        batchUpdateOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
                value: MsgBatchUpdateOrders.fromPartial(value)
            };
        },
        exec(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgExec",
                value: MsgExec.fromPartial(value)
            };
        },
        createDerivativeLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
                value: MsgCreateDerivativeLimitOrder.fromPartial(value)
            };
        },
        batchCreateDerivativeLimitOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
                value: MsgBatchCreateDerivativeLimitOrders.fromPartial(value)
            };
        },
        createDerivativeMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
                value: MsgCreateDerivativeMarketOrder.fromPartial(value)
            };
        },
        cancelDerivativeOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
                value: MsgCancelDerivativeOrder.fromPartial(value)
            };
        },
        batchCancelDerivativeOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
                value: MsgBatchCancelDerivativeOrders.fromPartial(value)
            };
        },
        instantBinaryOptionsMarketLaunch(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
                value: MsgInstantBinaryOptionsMarketLaunch.fromPartial(value)
            };
        },
        createBinaryOptionsLimitOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
                value: MsgCreateBinaryOptionsLimitOrder.fromPartial(value)
            };
        },
        createBinaryOptionsMarketOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
                value: MsgCreateBinaryOptionsMarketOrder.fromPartial(value)
            };
        },
        cancelBinaryOptionsOrder(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
                value: MsgCancelBinaryOptionsOrder.fromPartial(value)
            };
        },
        batchCancelBinaryOptionsOrders(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
                value: MsgBatchCancelBinaryOptionsOrders.fromPartial(value)
            };
        },
        subaccountTransfer(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
                value: MsgSubaccountTransfer.fromPartial(value)
            };
        },
        externalTransfer(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgExternalTransfer",
                value: MsgExternalTransfer.fromPartial(value)
            };
        },
        liquidatePosition(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgLiquidatePosition",
                value: MsgLiquidatePosition.fromPartial(value)
            };
        },
        increasePositionMargin(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
                value: MsgIncreasePositionMargin.fromPartial(value)
            };
        },
        rewardsOptOut(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgRewardsOptOut",
                value: MsgRewardsOptOut.fromPartial(value)
            };
        },
        adminUpdateBinaryOptionsMarket(value) {
            return {
                typeUrl: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
                value: MsgAdminUpdateBinaryOptionsMarket.fromPartial(value)
            };
        }
    }
};
