import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the leverage module. */
export interface Params {
    /**
     * Complete Liquidation Threshold determines how far over their borrow
     * limit a borrower must be in order for their positions to be liquidated
     * fully in a single event.
     */
    completeLiquidationThreshold: string;
    /**
     * Minimum Close Factor determines the portion of a borrower's position
     * that can be liquidated in a single event, when the borrower is just barely
     * over their borrow limit.
     */
    minimumCloseFactor: string;
    /**
     * Oracle Reward Factor determines the portion of interest accrued on
     * borrows that is sent to the oracle module to fund its reward pool.
     */
    oracleRewardFactor: string;
    /**
     * Small Liquidation Size determines the USD value at which a borrow is
     * considered small enough to be liquidated in a single transaction, bypassing
     * dynamic close factor.
     */
    smallLiquidationSize: string;
    /**
     * Direct Liquidation Fee is a reduction factor in liquidation incentive
     * experienced by liquidators who choose to receive base assets instead of
     * uTokens as liquidation rewards.
     */
    directLiquidationFee: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/umee.leverage.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the leverage module. */
export interface ParamsAmino {
    /**
     * Complete Liquidation Threshold determines how far over their borrow
     * limit a borrower must be in order for their positions to be liquidated
     * fully in a single event.
     */
    complete_liquidation_threshold?: string;
    /**
     * Minimum Close Factor determines the portion of a borrower's position
     * that can be liquidated in a single event, when the borrower is just barely
     * over their borrow limit.
     */
    minimum_close_factor?: string;
    /**
     * Oracle Reward Factor determines the portion of interest accrued on
     * borrows that is sent to the oracle module to fund its reward pool.
     */
    oracle_reward_factor?: string;
    /**
     * Small Liquidation Size determines the USD value at which a borrow is
     * considered small enough to be liquidated in a single transaction, bypassing
     * dynamic close factor.
     */
    small_liquidation_size?: string;
    /**
     * Direct Liquidation Fee is a reduction factor in liquidation incentive
     * experienced by liquidators who choose to receive base assets instead of
     * uTokens as liquidation rewards.
     */
    direct_liquidation_fee?: string;
}
export interface ParamsAminoMsg {
    type: "/umee.leverage.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the leverage module. */
export interface ParamsSDKType {
    complete_liquidation_threshold: string;
    minimum_close_factor: string;
    oracle_reward_factor: string;
    small_liquidation_size: string;
    direct_liquidation_fee: string;
}
/**
 * Token defines a token, along with its metadata and parameters, in the Umee
 * capital facility that can be supplied and borrowed.
 */
export interface Token {
    /** Base Denom is the denomination of the underlying base token. */
    baseDenom: string;
    /**
     * Reserve Factor defines what portion of accrued interest goes to reserves
     * when this token is borrowed.
     */
    reserveFactor: string;
    /**
     * Collateral Weight defines what portion of the total value of the asset
     * can contribute to a users borrowing power. If the collateral weight is
     * zero, using this asset as collateral against borrowing will be disabled.
     */
    collateralWeight: string;
    /**
     * Liquidation Threshold defines what amount of the total value of the
     * asset can contribute to a user's liquidation threshold (above which they
     * become eligible for liquidation).
     */
    liquidationThreshold: string;
    /**
     * Base Borrow Rate defines the minimum interest rate for borrowing this
     * asset.
     */
    baseBorrowRate: string;
    /**
     * Kink Borrow Rate defines the interest rate for borrowing this
     * asset when supply utilization is equal to 'kink_utilization'.
     */
    kinkBorrowRate: string;
    /**
     * Max Borrow Rate defines the interest rate for borrowing this
     * asset when supply utilization is at its maximum.
     */
    maxBorrowRate: string;
    /**
     * Kink Utilization defines the supply utilization value where
     * the kink in the borrow interest rate function occurs.
     */
    kinkUtilization: string;
    /**
     * Liquidation Incentive determines the portion of bonus collateral of
     * a token type liquidators receive as a liquidation reward.
     */
    liquidationIncentive: string;
    /** Symbol Denom is the human readable denomination of this token. */
    symbolDenom: string;
    /**
     * Exponent is the power of ten by which to multiply, in order to convert
     * an amount of the token denoted in its symbol denom to the actual amount
     * of its base denom.
     */
    exponent: number;
    /**
     * Enable Msg Supply allows supplying for lending or collateral using this
     * token. `false` means that a token can no longer be supplied.
     * Note that withdrawing is always enabled. Disabling supply would
     * be one step in phasing out an asset type.
     */
    enableMsgSupply: boolean;
    /**
     * Enable Msg Borrow allows borrowing of this token. Note that repaying is
     * always enabled. Disabling borrowing would be one step in phasing out an
     * asset type, but could also be used from the start for asset types meant
     * to be collateral only, like meTokens.
     */
    enableMsgBorrow: boolean;
    /**
     * Blacklist should only be used to eliminate an asset completely. A blacklisted
     * asset is treated as though its oracle price is zero, and thus ignored by
     * calculations such as collateral value and borrow limit. Can still be repaid
     * or withdrawn, but not liquidated. A blacklisted token must have enable_msg_supply
     * and enable_msg_borrow set to false. Such tokens can be safely removed from the
     * oracle and price feeder as well.
     */
    blacklist: boolean;
    /**
     * Max Collateral Share specifies how much of the system's overall collateral
     * can be provided by a given token. 1.0 means that the token has no restriction.
     * 0.1 means maximum 10% of system's total collateral value can be provided by this token.
     * Valid values: 0-1.
     */
    maxCollateralShare: string;
    /**
     * Max Supply Utilization specifies the maximum supply utilization a token is
     * allowed to reach as a direct result of user borrowing. New borrows are not allowed when
     * the supply utilization is above `max_supply_utilization`.
     * Valid values: 0-1.
     */
    maxSupplyUtilization: string;
    /**
     * Min Collateral Liquidity specifies the minimum collateral liquidity a token is
     * allowed to reach as a direct result of users borrowing, collateralizing, or
     * withdrawing assets. Liquidity can only drop below this value due to interest
     * or liquidations.
     */
    minCollateralLiquidity: string;
    /**
     * Max Supply is the maximum amount of tokens the protocol can hold.
     * Adding more supply of the given token to the protocol will return an error.
     * Must be a non negative value. 0 means that there is no limit.
     * To mark a token as not valid for supply, `msg_supply` must be set to false.
     */
    maxSupply: string;
}
export interface TokenProtoMsg {
    typeUrl: "/umee.leverage.v1.Token";
    value: Uint8Array;
}
/**
 * Token defines a token, along with its metadata and parameters, in the Umee
 * capital facility that can be supplied and borrowed.
 */
export interface TokenAmino {
    /** Base Denom is the denomination of the underlying base token. */
    base_denom?: string;
    /**
     * Reserve Factor defines what portion of accrued interest goes to reserves
     * when this token is borrowed.
     */
    reserve_factor?: string;
    /**
     * Collateral Weight defines what portion of the total value of the asset
     * can contribute to a users borrowing power. If the collateral weight is
     * zero, using this asset as collateral against borrowing will be disabled.
     */
    collateral_weight?: string;
    /**
     * Liquidation Threshold defines what amount of the total value of the
     * asset can contribute to a user's liquidation threshold (above which they
     * become eligible for liquidation).
     */
    liquidation_threshold?: string;
    /**
     * Base Borrow Rate defines the minimum interest rate for borrowing this
     * asset.
     */
    base_borrow_rate?: string;
    /**
     * Kink Borrow Rate defines the interest rate for borrowing this
     * asset when supply utilization is equal to 'kink_utilization'.
     */
    kink_borrow_rate?: string;
    /**
     * Max Borrow Rate defines the interest rate for borrowing this
     * asset when supply utilization is at its maximum.
     */
    max_borrow_rate?: string;
    /**
     * Kink Utilization defines the supply utilization value where
     * the kink in the borrow interest rate function occurs.
     */
    kink_utilization?: string;
    /**
     * Liquidation Incentive determines the portion of bonus collateral of
     * a token type liquidators receive as a liquidation reward.
     */
    liquidation_incentive?: string;
    /** Symbol Denom is the human readable denomination of this token. */
    symbol_denom?: string;
    /**
     * Exponent is the power of ten by which to multiply, in order to convert
     * an amount of the token denoted in its symbol denom to the actual amount
     * of its base denom.
     */
    exponent?: number;
    /**
     * Enable Msg Supply allows supplying for lending or collateral using this
     * token. `false` means that a token can no longer be supplied.
     * Note that withdrawing is always enabled. Disabling supply would
     * be one step in phasing out an asset type.
     */
    enable_msg_supply?: boolean;
    /**
     * Enable Msg Borrow allows borrowing of this token. Note that repaying is
     * always enabled. Disabling borrowing would be one step in phasing out an
     * asset type, but could also be used from the start for asset types meant
     * to be collateral only, like meTokens.
     */
    enable_msg_borrow?: boolean;
    /**
     * Blacklist should only be used to eliminate an asset completely. A blacklisted
     * asset is treated as though its oracle price is zero, and thus ignored by
     * calculations such as collateral value and borrow limit. Can still be repaid
     * or withdrawn, but not liquidated. A blacklisted token must have enable_msg_supply
     * and enable_msg_borrow set to false. Such tokens can be safely removed from the
     * oracle and price feeder as well.
     */
    blacklist?: boolean;
    /**
     * Max Collateral Share specifies how much of the system's overall collateral
     * can be provided by a given token. 1.0 means that the token has no restriction.
     * 0.1 means maximum 10% of system's total collateral value can be provided by this token.
     * Valid values: 0-1.
     */
    max_collateral_share?: string;
    /**
     * Max Supply Utilization specifies the maximum supply utilization a token is
     * allowed to reach as a direct result of user borrowing. New borrows are not allowed when
     * the supply utilization is above `max_supply_utilization`.
     * Valid values: 0-1.
     */
    max_supply_utilization?: string;
    /**
     * Min Collateral Liquidity specifies the minimum collateral liquidity a token is
     * allowed to reach as a direct result of users borrowing, collateralizing, or
     * withdrawing assets. Liquidity can only drop below this value due to interest
     * or liquidations.
     */
    min_collateral_liquidity?: string;
    /**
     * Max Supply is the maximum amount of tokens the protocol can hold.
     * Adding more supply of the given token to the protocol will return an error.
     * Must be a non negative value. 0 means that there is no limit.
     * To mark a token as not valid for supply, `msg_supply` must be set to false.
     */
    max_supply?: string;
}
export interface TokenAminoMsg {
    type: "/umee.leverage.v1.Token";
    value: TokenAmino;
}
/**
 * Token defines a token, along with its metadata and parameters, in the Umee
 * capital facility that can be supplied and borrowed.
 */
export interface TokenSDKType {
    base_denom: string;
    reserve_factor: string;
    collateral_weight: string;
    liquidation_threshold: string;
    base_borrow_rate: string;
    kink_borrow_rate: string;
    max_borrow_rate: string;
    kink_utilization: string;
    liquidation_incentive: string;
    symbol_denom: string;
    exponent: number;
    enable_msg_supply: boolean;
    enable_msg_borrow: boolean;
    blacklist: boolean;
    max_collateral_share: string;
    max_supply_utilization: string;
    min_collateral_liquidity: string;
    max_supply: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const Token: {
    typeUrl: string;
    encode(message: Token, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Token;
    fromPartial(object: Partial<Token>): Token;
    fromAmino(object: TokenAmino): Token;
    toAmino(message: Token): TokenAmino;
    fromAminoMsg(object: TokenAminoMsg): Token;
    fromProtoMsg(message: TokenProtoMsg): Token;
    toProto(message: Token): Uint8Array;
    toProtoMsg(message: Token): TokenProtoMsg;
};
