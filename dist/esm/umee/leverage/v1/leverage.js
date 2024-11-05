//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseParams() {
    return {
        completeLiquidationThreshold: "",
        minimumCloseFactor: "",
        oracleRewardFactor: "",
        smallLiquidationSize: "",
        directLiquidationFee: ""
    };
}
export const Params = {
    typeUrl: "/umee.leverage.v1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.completeLiquidationThreshold !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.completeLiquidationThreshold, 18).atomics);
        }
        if (message.minimumCloseFactor !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.minimumCloseFactor, 18).atomics);
        }
        if (message.oracleRewardFactor !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.oracleRewardFactor, 18).atomics);
        }
        if (message.smallLiquidationSize !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.smallLiquidationSize, 18).atomics);
        }
        if (message.directLiquidationFee !== "") {
            writer.uint32(50).string(Decimal.fromUserInput(message.directLiquidationFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.completeLiquidationThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.minimumCloseFactor = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.oracleRewardFactor = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.smallLiquidationSize = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.directLiquidationFee = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.completeLiquidationThreshold = object.completeLiquidationThreshold ?? "";
        message.minimumCloseFactor = object.minimumCloseFactor ?? "";
        message.oracleRewardFactor = object.oracleRewardFactor ?? "";
        message.smallLiquidationSize = object.smallLiquidationSize ?? "";
        message.directLiquidationFee = object.directLiquidationFee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.complete_liquidation_threshold !== undefined && object.complete_liquidation_threshold !== null) {
            message.completeLiquidationThreshold = object.complete_liquidation_threshold;
        }
        if (object.minimum_close_factor !== undefined && object.minimum_close_factor !== null) {
            message.minimumCloseFactor = object.minimum_close_factor;
        }
        if (object.oracle_reward_factor !== undefined && object.oracle_reward_factor !== null) {
            message.oracleRewardFactor = object.oracle_reward_factor;
        }
        if (object.small_liquidation_size !== undefined && object.small_liquidation_size !== null) {
            message.smallLiquidationSize = object.small_liquidation_size;
        }
        if (object.direct_liquidation_fee !== undefined && object.direct_liquidation_fee !== null) {
            message.directLiquidationFee = object.direct_liquidation_fee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.complete_liquidation_threshold = message.completeLiquidationThreshold === "" ? undefined : message.completeLiquidationThreshold;
        obj.minimum_close_factor = message.minimumCloseFactor === "" ? undefined : message.minimumCloseFactor;
        obj.oracle_reward_factor = message.oracleRewardFactor === "" ? undefined : message.oracleRewardFactor;
        obj.small_liquidation_size = message.smallLiquidationSize === "" ? undefined : message.smallLiquidationSize;
        obj.direct_liquidation_fee = message.directLiquidationFee === "" ? undefined : message.directLiquidationFee;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseToken() {
    return {
        baseDenom: "",
        reserveFactor: "",
        collateralWeight: "",
        liquidationThreshold: "",
        baseBorrowRate: "",
        kinkBorrowRate: "",
        maxBorrowRate: "",
        kinkUtilization: "",
        liquidationIncentive: "",
        symbolDenom: "",
        exponent: 0,
        enableMsgSupply: false,
        enableMsgBorrow: false,
        blacklist: false,
        maxCollateralShare: "",
        maxSupplyUtilization: "",
        minCollateralLiquidity: "",
        maxSupply: ""
    };
}
export const Token = {
    typeUrl: "/umee.leverage.v1.Token",
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseDenom !== "") {
            writer.uint32(10).string(message.baseDenom);
        }
        if (message.reserveFactor !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.reserveFactor, 18).atomics);
        }
        if (message.collateralWeight !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.collateralWeight, 18).atomics);
        }
        if (message.liquidationThreshold !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.liquidationThreshold, 18).atomics);
        }
        if (message.baseBorrowRate !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.baseBorrowRate, 18).atomics);
        }
        if (message.kinkBorrowRate !== "") {
            writer.uint32(50).string(Decimal.fromUserInput(message.kinkBorrowRate, 18).atomics);
        }
        if (message.maxBorrowRate !== "") {
            writer.uint32(58).string(Decimal.fromUserInput(message.maxBorrowRate, 18).atomics);
        }
        if (message.kinkUtilization !== "") {
            writer.uint32(66).string(Decimal.fromUserInput(message.kinkUtilization, 18).atomics);
        }
        if (message.liquidationIncentive !== "") {
            writer.uint32(74).string(Decimal.fromUserInput(message.liquidationIncentive, 18).atomics);
        }
        if (message.symbolDenom !== "") {
            writer.uint32(82).string(message.symbolDenom);
        }
        if (message.exponent !== 0) {
            writer.uint32(88).uint32(message.exponent);
        }
        if (message.enableMsgSupply === true) {
            writer.uint32(96).bool(message.enableMsgSupply);
        }
        if (message.enableMsgBorrow === true) {
            writer.uint32(104).bool(message.enableMsgBorrow);
        }
        if (message.blacklist === true) {
            writer.uint32(112).bool(message.blacklist);
        }
        if (message.maxCollateralShare !== "") {
            writer.uint32(122).string(Decimal.fromUserInput(message.maxCollateralShare, 18).atomics);
        }
        if (message.maxSupplyUtilization !== "") {
            writer.uint32(130).string(Decimal.fromUserInput(message.maxSupplyUtilization, 18).atomics);
        }
        if (message.minCollateralLiquidity !== "") {
            writer.uint32(138).string(Decimal.fromUserInput(message.minCollateralLiquidity, 18).atomics);
        }
        if (message.maxSupply !== "") {
            writer.uint32(146).string(message.maxSupply);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseDenom = reader.string();
                    break;
                case 2:
                    message.reserveFactor = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.collateralWeight = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.liquidationThreshold = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.baseBorrowRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.kinkBorrowRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.maxBorrowRate = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.kinkUtilization = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.liquidationIncentive = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.symbolDenom = reader.string();
                    break;
                case 11:
                    message.exponent = reader.uint32();
                    break;
                case 12:
                    message.enableMsgSupply = reader.bool();
                    break;
                case 13:
                    message.enableMsgBorrow = reader.bool();
                    break;
                case 14:
                    message.blacklist = reader.bool();
                    break;
                case 15:
                    message.maxCollateralShare = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 16:
                    message.maxSupplyUtilization = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 17:
                    message.minCollateralLiquidity = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 18:
                    message.maxSupply = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseToken();
        message.baseDenom = object.baseDenom ?? "";
        message.reserveFactor = object.reserveFactor ?? "";
        message.collateralWeight = object.collateralWeight ?? "";
        message.liquidationThreshold = object.liquidationThreshold ?? "";
        message.baseBorrowRate = object.baseBorrowRate ?? "";
        message.kinkBorrowRate = object.kinkBorrowRate ?? "";
        message.maxBorrowRate = object.maxBorrowRate ?? "";
        message.kinkUtilization = object.kinkUtilization ?? "";
        message.liquidationIncentive = object.liquidationIncentive ?? "";
        message.symbolDenom = object.symbolDenom ?? "";
        message.exponent = object.exponent ?? 0;
        message.enableMsgSupply = object.enableMsgSupply ?? false;
        message.enableMsgBorrow = object.enableMsgBorrow ?? false;
        message.blacklist = object.blacklist ?? false;
        message.maxCollateralShare = object.maxCollateralShare ?? "";
        message.maxSupplyUtilization = object.maxSupplyUtilization ?? "";
        message.minCollateralLiquidity = object.minCollateralLiquidity ?? "";
        message.maxSupply = object.maxSupply ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseToken();
        if (object.base_denom !== undefined && object.base_denom !== null) {
            message.baseDenom = object.base_denom;
        }
        if (object.reserve_factor !== undefined && object.reserve_factor !== null) {
            message.reserveFactor = object.reserve_factor;
        }
        if (object.collateral_weight !== undefined && object.collateral_weight !== null) {
            message.collateralWeight = object.collateral_weight;
        }
        if (object.liquidation_threshold !== undefined && object.liquidation_threshold !== null) {
            message.liquidationThreshold = object.liquidation_threshold;
        }
        if (object.base_borrow_rate !== undefined && object.base_borrow_rate !== null) {
            message.baseBorrowRate = object.base_borrow_rate;
        }
        if (object.kink_borrow_rate !== undefined && object.kink_borrow_rate !== null) {
            message.kinkBorrowRate = object.kink_borrow_rate;
        }
        if (object.max_borrow_rate !== undefined && object.max_borrow_rate !== null) {
            message.maxBorrowRate = object.max_borrow_rate;
        }
        if (object.kink_utilization !== undefined && object.kink_utilization !== null) {
            message.kinkUtilization = object.kink_utilization;
        }
        if (object.liquidation_incentive !== undefined && object.liquidation_incentive !== null) {
            message.liquidationIncentive = object.liquidation_incentive;
        }
        if (object.symbol_denom !== undefined && object.symbol_denom !== null) {
            message.symbolDenom = object.symbol_denom;
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        if (object.enable_msg_supply !== undefined && object.enable_msg_supply !== null) {
            message.enableMsgSupply = object.enable_msg_supply;
        }
        if (object.enable_msg_borrow !== undefined && object.enable_msg_borrow !== null) {
            message.enableMsgBorrow = object.enable_msg_borrow;
        }
        if (object.blacklist !== undefined && object.blacklist !== null) {
            message.blacklist = object.blacklist;
        }
        if (object.max_collateral_share !== undefined && object.max_collateral_share !== null) {
            message.maxCollateralShare = object.max_collateral_share;
        }
        if (object.max_supply_utilization !== undefined && object.max_supply_utilization !== null) {
            message.maxSupplyUtilization = object.max_supply_utilization;
        }
        if (object.min_collateral_liquidity !== undefined && object.min_collateral_liquidity !== null) {
            message.minCollateralLiquidity = object.min_collateral_liquidity;
        }
        if (object.max_supply !== undefined && object.max_supply !== null) {
            message.maxSupply = object.max_supply;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_denom = message.baseDenom === "" ? undefined : message.baseDenom;
        obj.reserve_factor = message.reserveFactor === "" ? undefined : message.reserveFactor;
        obj.collateral_weight = message.collateralWeight === "" ? undefined : message.collateralWeight;
        obj.liquidation_threshold = message.liquidationThreshold === "" ? undefined : message.liquidationThreshold;
        obj.base_borrow_rate = message.baseBorrowRate === "" ? undefined : message.baseBorrowRate;
        obj.kink_borrow_rate = message.kinkBorrowRate === "" ? undefined : message.kinkBorrowRate;
        obj.max_borrow_rate = message.maxBorrowRate === "" ? undefined : message.maxBorrowRate;
        obj.kink_utilization = message.kinkUtilization === "" ? undefined : message.kinkUtilization;
        obj.liquidation_incentive = message.liquidationIncentive === "" ? undefined : message.liquidationIncentive;
        obj.symbol_denom = message.symbolDenom === "" ? undefined : message.symbolDenom;
        obj.exponent = message.exponent === 0 ? undefined : message.exponent;
        obj.enable_msg_supply = message.enableMsgSupply === false ? undefined : message.enableMsgSupply;
        obj.enable_msg_borrow = message.enableMsgBorrow === false ? undefined : message.enableMsgBorrow;
        obj.blacklist = message.blacklist === false ? undefined : message.blacklist;
        obj.max_collateral_share = message.maxCollateralShare === "" ? undefined : message.maxCollateralShare;
        obj.max_supply_utilization = message.maxSupplyUtilization === "" ? undefined : message.maxSupplyUtilization;
        obj.min_collateral_liquidity = message.minCollateralLiquidity === "" ? undefined : message.minCollateralLiquidity;
        obj.max_supply = message.maxSupply === "" ? undefined : message.maxSupply;
        return obj;
    },
    fromAminoMsg(object) {
        return Token.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Token.decode(message.value);
    },
    toProto(message) {
        return Token.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/umee.leverage.v1.Token",
            value: Token.encode(message).finish()
        };
    }
};
