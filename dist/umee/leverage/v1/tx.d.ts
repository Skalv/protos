import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupply {
    /** Supplier is the account address supplying assets and the signer of the message. */
    supplier: string;
    asset: Coin;
}
export interface MsgSupplyProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgSupply";
    value: Uint8Array;
}
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupplyAmino {
    /** Supplier is the account address supplying assets and the signer of the message. */
    supplier?: string;
    asset?: CoinAmino;
}
export interface MsgSupplyAminoMsg {
    type: "/umee.leverage.v1.MsgSupply";
    value: MsgSupplyAmino;
}
/** MsgSupply represents a user's request to supply assets to the module. */
export interface MsgSupplySDKType {
    supplier: string;
    asset: CoinSDKType;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdraw {
    /** Supplier is the account address withdrawing assets and the signer of the message. */
    supplier: string;
    asset: Coin;
}
export interface MsgWithdrawProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgWithdraw";
    value: Uint8Array;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdrawAmino {
    /** Supplier is the account address withdrawing assets and the signer of the message. */
    supplier?: string;
    asset?: CoinAmino;
}
export interface MsgWithdrawAminoMsg {
    type: "/umee.leverage.v1.MsgWithdraw";
    value: MsgWithdrawAmino;
}
/**
 * MsgWithdraw represents a user's request to withdraw supplied assets.
 * Asset must be a uToken.
 */
export interface MsgWithdrawSDKType {
    supplier: string;
    asset: CoinSDKType;
}
/**
 * MsgCollateralize represents a user's request to enable selected
 * uTokens as collateral.
 */
export interface MsgCollateralize {
    /** Borrower is the account address adding collateral and the signer of the message. */
    borrower: string;
    asset: Coin;
}
export interface MsgCollateralizeProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgCollateralize";
    value: Uint8Array;
}
/**
 * MsgCollateralize represents a user's request to enable selected
 * uTokens as collateral.
 */
export interface MsgCollateralizeAmino {
    /** Borrower is the account address adding collateral and the signer of the message. */
    borrower?: string;
    asset?: CoinAmino;
}
export interface MsgCollateralizeAminoMsg {
    type: "/umee.leverage.v1.MsgCollateralize";
    value: MsgCollateralizeAmino;
}
/**
 * MsgCollateralize represents a user's request to enable selected
 * uTokens as collateral.
 */
export interface MsgCollateralizeSDKType {
    borrower: string;
    asset: CoinSDKType;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralize {
    /** Borrower is the account address removing collateral and the signer of the message. */
    borrower: string;
    asset: Coin;
}
export interface MsgDecollateralizeProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgDecollateralize";
    value: Uint8Array;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralizeAmino {
    /** Borrower is the account address removing collateral and the signer of the message. */
    borrower?: string;
    asset?: CoinAmino;
}
export interface MsgDecollateralizeAminoMsg {
    type: "/umee.leverage.v1.MsgDecollateralize";
    value: MsgDecollateralizeAmino;
}
/**
 * MsgDecollateralize represents a user's request to disable selected
 * uTokens as collateral.
 */
export interface MsgDecollateralizeSDKType {
    borrower: string;
    asset: CoinSDKType;
}
/**
 * MsgBorrow represents a user's request to borrow a base asset type
 * from the module.
 */
export interface MsgBorrow {
    /**
     * Borrower is the account address taking a loan and the signer
     * of the message.
     */
    borrower: string;
    asset: Coin;
}
export interface MsgBorrowProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgBorrow";
    value: Uint8Array;
}
/**
 * MsgBorrow represents a user's request to borrow a base asset type
 * from the module.
 */
export interface MsgBorrowAmino {
    /**
     * Borrower is the account address taking a loan and the signer
     * of the message.
     */
    borrower?: string;
    asset?: CoinAmino;
}
export interface MsgBorrowAminoMsg {
    type: "/umee.leverage.v1.MsgBorrow";
    value: MsgBorrowAmino;
}
/**
 * MsgBorrow represents a user's request to borrow a base asset type
 * from the module.
 */
export interface MsgBorrowSDKType {
    borrower: string;
    asset: CoinSDKType;
}
/**
 * MsgRepay represents a user's request to repay a borrowed base asset
 * type to the module.
 */
export interface MsgRepay {
    /**
     * Borrower is the account address repaying a loan and the signer
     * of the message.
     */
    borrower: string;
    asset: Coin;
}
export interface MsgRepayProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgRepay";
    value: Uint8Array;
}
/**
 * MsgRepay represents a user's request to repay a borrowed base asset
 * type to the module.
 */
export interface MsgRepayAmino {
    /**
     * Borrower is the account address repaying a loan and the signer
     * of the message.
     */
    borrower?: string;
    asset?: CoinAmino;
}
export interface MsgRepayAminoMsg {
    type: "/umee.leverage.v1.MsgRepay";
    value: MsgRepayAmino;
}
/**
 * MsgRepay represents a user's request to repay a borrowed base asset
 * type to the module.
 */
export interface MsgRepaySDKType {
    borrower: string;
    asset: CoinSDKType;
}
/** MsgLiquidate is the request structure for the Liquidate RPC. */
export interface MsgLiquidate {
    /**
     * Liquidator is the account address performing a liquidation and the signer
     * of the message.
     */
    liquidator: string;
    /**
     * Borrower is the account whose borrow is being repaid, and collateral consumed,
     * by the liquidation. It does not sign the message.
     */
    borrower: string;
    /**
     * Repayment is the maximum amount of base tokens that the liquidator is willing
     * to repay.
     */
    repayment: Coin;
    /**
     * RewardDenom is the denom that the liquidator will receive as a liquidation reward.
     * If it is a uToken, the liquidator will receive uTokens from the borrower's
     * collateral. If it is a base token, the uTokens will be redeemed directly at
     * a reduced Liquidation Incentive, and the liquidator will receive base tokens.
     */
    rewardDenom: string;
}
export interface MsgLiquidateProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgLiquidate";
    value: Uint8Array;
}
/** MsgLiquidate is the request structure for the Liquidate RPC. */
export interface MsgLiquidateAmino {
    /**
     * Liquidator is the account address performing a liquidation and the signer
     * of the message.
     */
    liquidator?: string;
    /**
     * Borrower is the account whose borrow is being repaid, and collateral consumed,
     * by the liquidation. It does not sign the message.
     */
    borrower?: string;
    /**
     * Repayment is the maximum amount of base tokens that the liquidator is willing
     * to repay.
     */
    repayment?: CoinAmino;
    /**
     * RewardDenom is the denom that the liquidator will receive as a liquidation reward.
     * If it is a uToken, the liquidator will receive uTokens from the borrower's
     * collateral. If it is a base token, the uTokens will be redeemed directly at
     * a reduced Liquidation Incentive, and the liquidator will receive base tokens.
     */
    reward_denom?: string;
}
export interface MsgLiquidateAminoMsg {
    type: "/umee.leverage.v1.MsgLiquidate";
    value: MsgLiquidateAmino;
}
/** MsgLiquidate is the request structure for the Liquidate RPC. */
export interface MsgLiquidateSDKType {
    liquidator: string;
    borrower: string;
    repayment: CoinSDKType;
    reward_denom: string;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponse {
    /** Received is the amount of uTokens received. */
    received: Coin;
}
export interface MsgSupplyResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgSupplyResponse";
    value: Uint8Array;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponseAmino {
    /** Received is the amount of uTokens received. */
    received?: CoinAmino;
}
export interface MsgSupplyResponseAminoMsg {
    type: "/umee.leverage.v1.MsgSupplyResponse";
    value: MsgSupplyResponseAmino;
}
/** MsgSupplyResponse defines the Msg/Supply response type. */
export interface MsgSupplyResponseSDKType {
    received: CoinSDKType;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponse {
    /** Received is the amount of base tokens received. */
    received: Coin;
}
export interface MsgWithdrawResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgWithdrawResponse";
    value: Uint8Array;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseAmino {
    /** Received is the amount of base tokens received. */
    received?: CoinAmino;
}
export interface MsgWithdrawResponseAminoMsg {
    type: "/umee.leverage.v1.MsgWithdrawResponse";
    value: MsgWithdrawResponseAmino;
}
/** MsgWithdrawResponse defines the Msg/Withdraw response type. */
export interface MsgWithdrawResponseSDKType {
    received: CoinSDKType;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponse {
}
export interface MsgCollateralizeResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgCollateralizeResponse";
    value: Uint8Array;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponseAmino {
}
export interface MsgCollateralizeResponseAminoMsg {
    type: "/umee.leverage.v1.MsgCollateralizeResponse";
    value: MsgCollateralizeResponseAmino;
}
/** MsgCollateralizeResponse defines the Msg/Collateralize response type. */
export interface MsgCollateralizeResponseSDKType {
}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponse {
}
export interface MsgDecollateralizeResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgDecollateralizeResponse";
    value: Uint8Array;
}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponseAmino {
}
export interface MsgDecollateralizeResponseAminoMsg {
    type: "/umee.leverage.v1.MsgDecollateralizeResponse";
    value: MsgDecollateralizeResponseAmino;
}
/** MsgDecollateralizeResponse defines the Msg/Decollateralize response type. */
export interface MsgDecollateralizeResponseSDKType {
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponse {
}
export interface MsgBorrowResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgBorrowResponse";
    value: Uint8Array;
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseAmino {
}
export interface MsgBorrowResponseAminoMsg {
    type: "/umee.leverage.v1.MsgBorrowResponse";
    value: MsgBorrowResponseAmino;
}
/** MsgBorrowResponse defines the Msg/Borrow response type. */
export interface MsgBorrowResponseSDKType {
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponse {
    /** Repaid is the amount of base tokens repaid to the module. */
    repaid: Coin;
}
export interface MsgRepayResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgRepayResponse";
    value: Uint8Array;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseAmino {
    /** Repaid is the amount of base tokens repaid to the module. */
    repaid?: CoinAmino;
}
export interface MsgRepayResponseAminoMsg {
    type: "/umee.leverage.v1.MsgRepayResponse";
    value: MsgRepayResponseAmino;
}
/** MsgRepayResponse defines the Msg/Repay response type. */
export interface MsgRepayResponseSDKType {
    repaid: CoinSDKType;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponse {
    /**
     * Repaid is the amount of borrowed base tokens that the liquidator repaid
     * to the module on behalf of the borrower.
     */
    repaid: Coin;
    /**
     * Collateral is the amount of the borrower's uToken collateral that
     * was liquidated.
     */
    collateral: Coin;
    /**
     * Reward is the amount of base tokens that the liquidator received from
     * the module as reward for the liquidation.
     */
    reward: Coin;
}
export interface MsgLiquidateResponseProtoMsg {
    typeUrl: "/umee.leverage.v1.MsgLiquidateResponse";
    value: Uint8Array;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseAmino {
    /**
     * Repaid is the amount of borrowed base tokens that the liquidator repaid
     * to the module on behalf of the borrower.
     */
    repaid?: CoinAmino;
    /**
     * Collateral is the amount of the borrower's uToken collateral that
     * was liquidated.
     */
    collateral?: CoinAmino;
    /**
     * Reward is the amount of base tokens that the liquidator received from
     * the module as reward for the liquidation.
     */
    reward?: CoinAmino;
}
export interface MsgLiquidateResponseAminoMsg {
    type: "/umee.leverage.v1.MsgLiquidateResponse";
    value: MsgLiquidateResponseAmino;
}
/** MsgLiquidateResponse defines the Msg/Liquidate response type. */
export interface MsgLiquidateResponseSDKType {
    repaid: CoinSDKType;
    collateral: CoinSDKType;
    reward: CoinSDKType;
}
export declare const MsgSupply: {
    typeUrl: string;
    encode(message: MsgSupply, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSupply;
    fromPartial(object: Partial<MsgSupply>): MsgSupply;
    fromAmino(object: MsgSupplyAmino): MsgSupply;
    toAmino(message: MsgSupply): MsgSupplyAmino;
    fromAminoMsg(object: MsgSupplyAminoMsg): MsgSupply;
    fromProtoMsg(message: MsgSupplyProtoMsg): MsgSupply;
    toProto(message: MsgSupply): Uint8Array;
    toProtoMsg(message: MsgSupply): MsgSupplyProtoMsg;
};
export declare const MsgWithdraw: {
    typeUrl: string;
    encode(message: MsgWithdraw, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdraw;
    fromPartial(object: Partial<MsgWithdraw>): MsgWithdraw;
    fromAmino(object: MsgWithdrawAmino): MsgWithdraw;
    toAmino(message: MsgWithdraw): MsgWithdrawAmino;
    fromAminoMsg(object: MsgWithdrawAminoMsg): MsgWithdraw;
    fromProtoMsg(message: MsgWithdrawProtoMsg): MsgWithdraw;
    toProto(message: MsgWithdraw): Uint8Array;
    toProtoMsg(message: MsgWithdraw): MsgWithdrawProtoMsg;
};
export declare const MsgCollateralize: {
    typeUrl: string;
    encode(message: MsgCollateralize, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCollateralize;
    fromPartial(object: Partial<MsgCollateralize>): MsgCollateralize;
    fromAmino(object: MsgCollateralizeAmino): MsgCollateralize;
    toAmino(message: MsgCollateralize): MsgCollateralizeAmino;
    fromAminoMsg(object: MsgCollateralizeAminoMsg): MsgCollateralize;
    fromProtoMsg(message: MsgCollateralizeProtoMsg): MsgCollateralize;
    toProto(message: MsgCollateralize): Uint8Array;
    toProtoMsg(message: MsgCollateralize): MsgCollateralizeProtoMsg;
};
export declare const MsgDecollateralize: {
    typeUrl: string;
    encode(message: MsgDecollateralize, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDecollateralize;
    fromPartial(object: Partial<MsgDecollateralize>): MsgDecollateralize;
    fromAmino(object: MsgDecollateralizeAmino): MsgDecollateralize;
    toAmino(message: MsgDecollateralize): MsgDecollateralizeAmino;
    fromAminoMsg(object: MsgDecollateralizeAminoMsg): MsgDecollateralize;
    fromProtoMsg(message: MsgDecollateralizeProtoMsg): MsgDecollateralize;
    toProto(message: MsgDecollateralize): Uint8Array;
    toProtoMsg(message: MsgDecollateralize): MsgDecollateralizeProtoMsg;
};
export declare const MsgBorrow: {
    typeUrl: string;
    encode(message: MsgBorrow, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBorrow;
    fromPartial(object: Partial<MsgBorrow>): MsgBorrow;
    fromAmino(object: MsgBorrowAmino): MsgBorrow;
    toAmino(message: MsgBorrow): MsgBorrowAmino;
    fromAminoMsg(object: MsgBorrowAminoMsg): MsgBorrow;
    fromProtoMsg(message: MsgBorrowProtoMsg): MsgBorrow;
    toProto(message: MsgBorrow): Uint8Array;
    toProtoMsg(message: MsgBorrow): MsgBorrowProtoMsg;
};
export declare const MsgRepay: {
    typeUrl: string;
    encode(message: MsgRepay, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRepay;
    fromPartial(object: Partial<MsgRepay>): MsgRepay;
    fromAmino(object: MsgRepayAmino): MsgRepay;
    toAmino(message: MsgRepay): MsgRepayAmino;
    fromAminoMsg(object: MsgRepayAminoMsg): MsgRepay;
    fromProtoMsg(message: MsgRepayProtoMsg): MsgRepay;
    toProto(message: MsgRepay): Uint8Array;
    toProtoMsg(message: MsgRepay): MsgRepayProtoMsg;
};
export declare const MsgLiquidate: {
    typeUrl: string;
    encode(message: MsgLiquidate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidate;
    fromPartial(object: Partial<MsgLiquidate>): MsgLiquidate;
    fromAmino(object: MsgLiquidateAmino): MsgLiquidate;
    toAmino(message: MsgLiquidate): MsgLiquidateAmino;
    fromAminoMsg(object: MsgLiquidateAminoMsg): MsgLiquidate;
    fromProtoMsg(message: MsgLiquidateProtoMsg): MsgLiquidate;
    toProto(message: MsgLiquidate): Uint8Array;
    toProtoMsg(message: MsgLiquidate): MsgLiquidateProtoMsg;
};
export declare const MsgSupplyResponse: {
    typeUrl: string;
    encode(message: MsgSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSupplyResponse;
    fromPartial(object: Partial<MsgSupplyResponse>): MsgSupplyResponse;
    fromAmino(object: MsgSupplyResponseAmino): MsgSupplyResponse;
    toAmino(message: MsgSupplyResponse): MsgSupplyResponseAmino;
    fromAminoMsg(object: MsgSupplyResponseAminoMsg): MsgSupplyResponse;
    fromProtoMsg(message: MsgSupplyResponseProtoMsg): MsgSupplyResponse;
    toProto(message: MsgSupplyResponse): Uint8Array;
    toProtoMsg(message: MsgSupplyResponse): MsgSupplyResponseProtoMsg;
};
export declare const MsgWithdrawResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawResponse;
    fromPartial(object: Partial<MsgWithdrawResponse>): MsgWithdrawResponse;
    fromAmino(object: MsgWithdrawResponseAmino): MsgWithdrawResponse;
    toAmino(message: MsgWithdrawResponse): MsgWithdrawResponseAmino;
    fromAminoMsg(object: MsgWithdrawResponseAminoMsg): MsgWithdrawResponse;
    fromProtoMsg(message: MsgWithdrawResponseProtoMsg): MsgWithdrawResponse;
    toProto(message: MsgWithdrawResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawResponse): MsgWithdrawResponseProtoMsg;
};
export declare const MsgCollateralizeResponse: {
    typeUrl: string;
    encode(_: MsgCollateralizeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCollateralizeResponse;
    fromPartial(_: Partial<MsgCollateralizeResponse>): MsgCollateralizeResponse;
    fromAmino(_: MsgCollateralizeResponseAmino): MsgCollateralizeResponse;
    toAmino(_: MsgCollateralizeResponse): MsgCollateralizeResponseAmino;
    fromAminoMsg(object: MsgCollateralizeResponseAminoMsg): MsgCollateralizeResponse;
    fromProtoMsg(message: MsgCollateralizeResponseProtoMsg): MsgCollateralizeResponse;
    toProto(message: MsgCollateralizeResponse): Uint8Array;
    toProtoMsg(message: MsgCollateralizeResponse): MsgCollateralizeResponseProtoMsg;
};
export declare const MsgDecollateralizeResponse: {
    typeUrl: string;
    encode(_: MsgDecollateralizeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDecollateralizeResponse;
    fromPartial(_: Partial<MsgDecollateralizeResponse>): MsgDecollateralizeResponse;
    fromAmino(_: MsgDecollateralizeResponseAmino): MsgDecollateralizeResponse;
    toAmino(_: MsgDecollateralizeResponse): MsgDecollateralizeResponseAmino;
    fromAminoMsg(object: MsgDecollateralizeResponseAminoMsg): MsgDecollateralizeResponse;
    fromProtoMsg(message: MsgDecollateralizeResponseProtoMsg): MsgDecollateralizeResponse;
    toProto(message: MsgDecollateralizeResponse): Uint8Array;
    toProtoMsg(message: MsgDecollateralizeResponse): MsgDecollateralizeResponseProtoMsg;
};
export declare const MsgBorrowResponse: {
    typeUrl: string;
    encode(_: MsgBorrowResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBorrowResponse;
    fromPartial(_: Partial<MsgBorrowResponse>): MsgBorrowResponse;
    fromAmino(_: MsgBorrowResponseAmino): MsgBorrowResponse;
    toAmino(_: MsgBorrowResponse): MsgBorrowResponseAmino;
    fromAminoMsg(object: MsgBorrowResponseAminoMsg): MsgBorrowResponse;
    fromProtoMsg(message: MsgBorrowResponseProtoMsg): MsgBorrowResponse;
    toProto(message: MsgBorrowResponse): Uint8Array;
    toProtoMsg(message: MsgBorrowResponse): MsgBorrowResponseProtoMsg;
};
export declare const MsgRepayResponse: {
    typeUrl: string;
    encode(message: MsgRepayResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRepayResponse;
    fromPartial(object: Partial<MsgRepayResponse>): MsgRepayResponse;
    fromAmino(object: MsgRepayResponseAmino): MsgRepayResponse;
    toAmino(message: MsgRepayResponse): MsgRepayResponseAmino;
    fromAminoMsg(object: MsgRepayResponseAminoMsg): MsgRepayResponse;
    fromProtoMsg(message: MsgRepayResponseProtoMsg): MsgRepayResponse;
    toProto(message: MsgRepayResponse): Uint8Array;
    toProtoMsg(message: MsgRepayResponse): MsgRepayResponseProtoMsg;
};
export declare const MsgLiquidateResponse: {
    typeUrl: string;
    encode(message: MsgLiquidateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLiquidateResponse;
    fromPartial(object: Partial<MsgLiquidateResponse>): MsgLiquidateResponse;
    fromAmino(object: MsgLiquidateResponseAmino): MsgLiquidateResponse;
    toAmino(message: MsgLiquidateResponse): MsgLiquidateResponseAmino;
    fromAminoMsg(object: MsgLiquidateResponseAminoMsg): MsgLiquidateResponse;
    fromProtoMsg(message: MsgLiquidateResponseProtoMsg): MsgLiquidateResponse;
    toProto(message: MsgLiquidateResponse): Uint8Array;
    toProtoMsg(message: MsgLiquidateResponse): MsgLiquidateResponseProtoMsg;
};
