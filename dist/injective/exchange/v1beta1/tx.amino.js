"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/injective.exchange.v1beta1.MsgDeposit": {
        aminoType: "/injective.exchange.v1beta1.MsgDeposit",
        toAmino: tx_1.MsgDeposit.toAmino,
        fromAmino: tx_1.MsgDeposit.fromAmino
    },
    "/injective.exchange.v1beta1.MsgWithdraw": {
        aminoType: "/injective.exchange.v1beta1.MsgWithdraw",
        toAmino: tx_1.MsgWithdraw.toAmino,
        fromAmino: tx_1.MsgWithdraw.fromAmino
    },
    "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch": {
        aminoType: "/injective.exchange.v1beta1.MsgInstantSpotMarketLaunch",
        toAmino: tx_1.MsgInstantSpotMarketLaunch.toAmino,
        fromAmino: tx_1.MsgInstantSpotMarketLaunch.fromAmino
    },
    "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch": {
        aminoType: "/injective.exchange.v1beta1.MsgInstantPerpetualMarketLaunch",
        toAmino: tx_1.MsgInstantPerpetualMarketLaunch.toAmino,
        fromAmino: tx_1.MsgInstantPerpetualMarketLaunch.fromAmino
    },
    "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch": {
        aminoType: "/injective.exchange.v1beta1.MsgInstantExpiryFuturesMarketLaunch",
        toAmino: tx_1.MsgInstantExpiryFuturesMarketLaunch.toAmino,
        fromAmino: tx_1.MsgInstantExpiryFuturesMarketLaunch.fromAmino
    },
    "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder": {
        aminoType: "/injective.exchange.v1beta1.MsgCreateSpotLimitOrder",
        toAmino: tx_1.MsgCreateSpotLimitOrder.toAmino,
        fromAmino: tx_1.MsgCreateSpotLimitOrder.fromAmino
    },
    "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders": {
        aminoType: "/injective.exchange.v1beta1.MsgBatchCreateSpotLimitOrders",
        toAmino: tx_1.MsgBatchCreateSpotLimitOrders.toAmino,
        fromAmino: tx_1.MsgBatchCreateSpotLimitOrders.fromAmino
    },
    "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder": {
        aminoType: "/injective.exchange.v1beta1.MsgCreateSpotMarketOrder",
        toAmino: tx_1.MsgCreateSpotMarketOrder.toAmino,
        fromAmino: tx_1.MsgCreateSpotMarketOrder.fromAmino
    },
    "/injective.exchange.v1beta1.MsgCancelSpotOrder": {
        aminoType: "/injective.exchange.v1beta1.MsgCancelSpotOrder",
        toAmino: tx_1.MsgCancelSpotOrder.toAmino,
        fromAmino: tx_1.MsgCancelSpotOrder.fromAmino
    },
    "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders": {
        aminoType: "/injective.exchange.v1beta1.MsgBatchCancelSpotOrders",
        toAmino: tx_1.MsgBatchCancelSpotOrders.toAmino,
        fromAmino: tx_1.MsgBatchCancelSpotOrders.fromAmino
    },
    "/injective.exchange.v1beta1.MsgBatchUpdateOrders": {
        aminoType: "/injective.exchange.v1beta1.MsgBatchUpdateOrders",
        toAmino: tx_1.MsgBatchUpdateOrders.toAmino,
        fromAmino: tx_1.MsgBatchUpdateOrders.fromAmino
    },
    "/injective.exchange.v1beta1.MsgExec": {
        aminoType: "/injective.exchange.v1beta1.MsgExec",
        toAmino: tx_1.MsgExec.toAmino,
        fromAmino: tx_1.MsgExec.fromAmino
    },
    "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder": {
        aminoType: "/injective.exchange.v1beta1.MsgCreateDerivativeLimitOrder",
        toAmino: tx_1.MsgCreateDerivativeLimitOrder.toAmino,
        fromAmino: tx_1.MsgCreateDerivativeLimitOrder.fromAmino
    },
    "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders": {
        aminoType: "/injective.exchange.v1beta1.MsgBatchCreateDerivativeLimitOrders",
        toAmino: tx_1.MsgBatchCreateDerivativeLimitOrders.toAmino,
        fromAmino: tx_1.MsgBatchCreateDerivativeLimitOrders.fromAmino
    },
    "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder": {
        aminoType: "/injective.exchange.v1beta1.MsgCreateDerivativeMarketOrder",
        toAmino: tx_1.MsgCreateDerivativeMarketOrder.toAmino,
        fromAmino: tx_1.MsgCreateDerivativeMarketOrder.fromAmino
    },
    "/injective.exchange.v1beta1.MsgCancelDerivativeOrder": {
        aminoType: "/injective.exchange.v1beta1.MsgCancelDerivativeOrder",
        toAmino: tx_1.MsgCancelDerivativeOrder.toAmino,
        fromAmino: tx_1.MsgCancelDerivativeOrder.fromAmino
    },
    "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders": {
        aminoType: "/injective.exchange.v1beta1.MsgBatchCancelDerivativeOrders",
        toAmino: tx_1.MsgBatchCancelDerivativeOrders.toAmino,
        fromAmino: tx_1.MsgBatchCancelDerivativeOrders.fromAmino
    },
    "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch": {
        aminoType: "/injective.exchange.v1beta1.MsgInstantBinaryOptionsMarketLaunch",
        toAmino: tx_1.MsgInstantBinaryOptionsMarketLaunch.toAmino,
        fromAmino: tx_1.MsgInstantBinaryOptionsMarketLaunch.fromAmino
    },
    "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder": {
        aminoType: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsLimitOrder",
        toAmino: tx_1.MsgCreateBinaryOptionsLimitOrder.toAmino,
        fromAmino: tx_1.MsgCreateBinaryOptionsLimitOrder.fromAmino
    },
    "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder": {
        aminoType: "/injective.exchange.v1beta1.MsgCreateBinaryOptionsMarketOrder",
        toAmino: tx_1.MsgCreateBinaryOptionsMarketOrder.toAmino,
        fromAmino: tx_1.MsgCreateBinaryOptionsMarketOrder.fromAmino
    },
    "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder": {
        aminoType: "/injective.exchange.v1beta1.MsgCancelBinaryOptionsOrder",
        toAmino: tx_1.MsgCancelBinaryOptionsOrder.toAmino,
        fromAmino: tx_1.MsgCancelBinaryOptionsOrder.fromAmino
    },
    "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders": {
        aminoType: "/injective.exchange.v1beta1.MsgBatchCancelBinaryOptionsOrders",
        toAmino: tx_1.MsgBatchCancelBinaryOptionsOrders.toAmino,
        fromAmino: tx_1.MsgBatchCancelBinaryOptionsOrders.fromAmino
    },
    "/injective.exchange.v1beta1.MsgSubaccountTransfer": {
        aminoType: "/injective.exchange.v1beta1.MsgSubaccountTransfer",
        toAmino: tx_1.MsgSubaccountTransfer.toAmino,
        fromAmino: tx_1.MsgSubaccountTransfer.fromAmino
    },
    "/injective.exchange.v1beta1.MsgExternalTransfer": {
        aminoType: "/injective.exchange.v1beta1.MsgExternalTransfer",
        toAmino: tx_1.MsgExternalTransfer.toAmino,
        fromAmino: tx_1.MsgExternalTransfer.fromAmino
    },
    "/injective.exchange.v1beta1.MsgLiquidatePosition": {
        aminoType: "/injective.exchange.v1beta1.MsgLiquidatePosition",
        toAmino: tx_1.MsgLiquidatePosition.toAmino,
        fromAmino: tx_1.MsgLiquidatePosition.fromAmino
    },
    "/injective.exchange.v1beta1.MsgIncreasePositionMargin": {
        aminoType: "/injective.exchange.v1beta1.MsgIncreasePositionMargin",
        toAmino: tx_1.MsgIncreasePositionMargin.toAmino,
        fromAmino: tx_1.MsgIncreasePositionMargin.fromAmino
    },
    "/injective.exchange.v1beta1.MsgRewardsOptOut": {
        aminoType: "/injective.exchange.v1beta1.MsgRewardsOptOut",
        toAmino: tx_1.MsgRewardsOptOut.toAmino,
        fromAmino: tx_1.MsgRewardsOptOut.fromAmino
    },
    "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket": {
        aminoType: "/injective.exchange.v1beta1.MsgAdminUpdateBinaryOptionsMarket",
        toAmino: tx_1.MsgAdminUpdateBinaryOptionsMarket.toAmino,
        fromAmino: tx_1.MsgAdminUpdateBinaryOptionsMarket.fromAmino
    }
};
