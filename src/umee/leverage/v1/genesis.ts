//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType, Token, TokenAmino, TokenSDKType } from "./leverage";
import { Coin, CoinAmino, CoinSDKType, DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
/** GenesisState defines the x/leverage module's genesis state. */
export interface GenesisState {
  params: Params;
  registry: Token[];
  adjustedBorrows: AdjustedBorrow[];
  collateral: Collateral[];
  reserves: Coin[];
  lastInterestTime: bigint;
  badDebts: BadDebt[];
  interestScalars: InterestScalar[];
  utokenSupply: Coin[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/umee.leverage.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the x/leverage module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  registry?: TokenAmino[];
  adjusted_borrows?: AdjustedBorrowAmino[];
  collateral?: CollateralAmino[];
  reserves?: CoinAmino[];
  last_interest_time?: string;
  bad_debts?: BadDebtAmino[];
  interest_scalars?: InterestScalarAmino[];
  utoken_supply?: CoinAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/umee.leverage.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the x/leverage module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  registry: TokenSDKType[];
  adjusted_borrows: AdjustedBorrowSDKType[];
  collateral: CollateralSDKType[];
  reserves: CoinSDKType[];
  last_interest_time: bigint;
  bad_debts: BadDebtSDKType[];
  interest_scalars: InterestScalarSDKType[];
  utoken_supply: CoinSDKType[];
}
/**
 * AdjustedBorrow is a borrow struct used in the leverage module's genesis
 * state.
 */
export interface AdjustedBorrow {
  address: string;
  amount: DecCoin;
}
export interface AdjustedBorrowProtoMsg {
  typeUrl: "/umee.leverage.v1.AdjustedBorrow";
  value: Uint8Array;
}
/**
 * AdjustedBorrow is a borrow struct used in the leverage module's genesis
 * state.
 */
export interface AdjustedBorrowAmino {
  address?: string;
  amount?: DecCoinAmino;
}
export interface AdjustedBorrowAminoMsg {
  type: "/umee.leverage.v1.AdjustedBorrow";
  value: AdjustedBorrowAmino;
}
/**
 * AdjustedBorrow is a borrow struct used in the leverage module's genesis
 * state.
 */
export interface AdjustedBorrowSDKType {
  address: string;
  amount: DecCoinSDKType;
}
/**
 * Collateral is a collateral struct used in the leverage module's genesis
 * state.
 */
export interface Collateral {
  address: string;
  amount: Coin;
}
export interface CollateralProtoMsg {
  typeUrl: "/umee.leverage.v1.Collateral";
  value: Uint8Array;
}
/**
 * Collateral is a collateral struct used in the leverage module's genesis
 * state.
 */
export interface CollateralAmino {
  address?: string;
  amount?: CoinAmino;
}
export interface CollateralAminoMsg {
  type: "/umee.leverage.v1.Collateral";
  value: CollateralAmino;
}
/**
 * Collateral is a collateral struct used in the leverage module's genesis
 * state.
 */
export interface CollateralSDKType {
  address: string;
  amount: CoinSDKType;
}
/** BadDebt is a bad debt instance used in the leverage module's genesis state. */
export interface BadDebt {
  address: string;
  denom: string;
}
export interface BadDebtProtoMsg {
  typeUrl: "/umee.leverage.v1.BadDebt";
  value: Uint8Array;
}
/** BadDebt is a bad debt instance used in the leverage module's genesis state. */
export interface BadDebtAmino {
  address?: string;
  denom?: string;
}
export interface BadDebtAminoMsg {
  type: "/umee.leverage.v1.BadDebt";
  value: BadDebtAmino;
}
/** BadDebt is a bad debt instance used in the leverage module's genesis state. */
export interface BadDebtSDKType {
  address: string;
  denom: string;
}
/**
 * InterestScalar is an interest scalar used in the leverage module's genesis
 * state.
 */
export interface InterestScalar {
  denom: string;
  scalar: string;
}
export interface InterestScalarProtoMsg {
  typeUrl: "/umee.leverage.v1.InterestScalar";
  value: Uint8Array;
}
/**
 * InterestScalar is an interest scalar used in the leverage module's genesis
 * state.
 */
export interface InterestScalarAmino {
  denom?: string;
  scalar?: string;
}
export interface InterestScalarAminoMsg {
  type: "/umee.leverage.v1.InterestScalar";
  value: InterestScalarAmino;
}
/**
 * InterestScalar is an interest scalar used in the leverage module's genesis
 * state.
 */
export interface InterestScalarSDKType {
  denom: string;
  scalar: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    registry: [],
    adjustedBorrows: [],
    collateral: [],
    reserves: [],
    lastInterestTime: BigInt(0),
    badDebts: [],
    interestScalars: [],
    utokenSupply: []
  };
}
export const GenesisState = {
  typeUrl: "/umee.leverage.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.registry) {
      Token.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.adjustedBorrows) {
      AdjustedBorrow.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.collateral) {
      Collateral.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reserves) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastInterestTime !== BigInt(0)) {
      writer.uint32(48).int64(message.lastInterestTime);
    }
    for (const v of message.badDebts) {
      BadDebt.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.interestScalars) {
      InterestScalar.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.utokenSupply) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.registry.push(Token.decode(reader, reader.uint32()));
          break;
        case 3:
          message.adjustedBorrows.push(AdjustedBorrow.decode(reader, reader.uint32()));
          break;
        case 4:
          message.collateral.push(Collateral.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reserves.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.lastInterestTime = reader.int64();
          break;
        case 7:
          message.badDebts.push(BadDebt.decode(reader, reader.uint32()));
          break;
        case 8:
          message.interestScalars.push(InterestScalar.decode(reader, reader.uint32()));
          break;
        case 9:
          message.utokenSupply.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.registry = object.registry?.map(e => Token.fromPartial(e)) || [];
    message.adjustedBorrows = object.adjustedBorrows?.map(e => AdjustedBorrow.fromPartial(e)) || [];
    message.collateral = object.collateral?.map(e => Collateral.fromPartial(e)) || [];
    message.reserves = object.reserves?.map(e => Coin.fromPartial(e)) || [];
    message.lastInterestTime = object.lastInterestTime !== undefined && object.lastInterestTime !== null ? BigInt(object.lastInterestTime.toString()) : BigInt(0);
    message.badDebts = object.badDebts?.map(e => BadDebt.fromPartial(e)) || [];
    message.interestScalars = object.interestScalars?.map(e => InterestScalar.fromPartial(e)) || [];
    message.utokenSupply = object.utokenSupply?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.registry = object.registry?.map(e => Token.fromAmino(e)) || [];
    message.adjustedBorrows = object.adjusted_borrows?.map(e => AdjustedBorrow.fromAmino(e)) || [];
    message.collateral = object.collateral?.map(e => Collateral.fromAmino(e)) || [];
    message.reserves = object.reserves?.map(e => Coin.fromAmino(e)) || [];
    if (object.last_interest_time !== undefined && object.last_interest_time !== null) {
      message.lastInterestTime = BigInt(object.last_interest_time);
    }
    message.badDebts = object.bad_debts?.map(e => BadDebt.fromAmino(e)) || [];
    message.interestScalars = object.interest_scalars?.map(e => InterestScalar.fromAmino(e)) || [];
    message.utokenSupply = object.utoken_supply?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.registry) {
      obj.registry = message.registry.map(e => e ? Token.toAmino(e) : undefined);
    } else {
      obj.registry = message.registry;
    }
    if (message.adjustedBorrows) {
      obj.adjusted_borrows = message.adjustedBorrows.map(e => e ? AdjustedBorrow.toAmino(e) : undefined);
    } else {
      obj.adjusted_borrows = message.adjustedBorrows;
    }
    if (message.collateral) {
      obj.collateral = message.collateral.map(e => e ? Collateral.toAmino(e) : undefined);
    } else {
      obj.collateral = message.collateral;
    }
    if (message.reserves) {
      obj.reserves = message.reserves.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reserves = message.reserves;
    }
    obj.last_interest_time = message.lastInterestTime !== BigInt(0) ? (message.lastInterestTime?.toString)() : undefined;
    if (message.badDebts) {
      obj.bad_debts = message.badDebts.map(e => e ? BadDebt.toAmino(e) : undefined);
    } else {
      obj.bad_debts = message.badDebts;
    }
    if (message.interestScalars) {
      obj.interest_scalars = message.interestScalars.map(e => e ? InterestScalar.toAmino(e) : undefined);
    } else {
      obj.interest_scalars = message.interestScalars;
    }
    if (message.utokenSupply) {
      obj.utoken_supply = message.utokenSupply.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.utoken_supply = message.utokenSupply;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseAdjustedBorrow(): AdjustedBorrow {
  return {
    address: "",
    amount: DecCoin.fromPartial({})
  };
}
export const AdjustedBorrow = {
  typeUrl: "/umee.leverage.v1.AdjustedBorrow",
  encode(message: AdjustedBorrow, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== undefined) {
      DecCoin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AdjustedBorrow {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdjustedBorrow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AdjustedBorrow>): AdjustedBorrow {
    const message = createBaseAdjustedBorrow();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: AdjustedBorrowAmino): AdjustedBorrow {
    const message = createBaseAdjustedBorrow();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = DecCoin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: AdjustedBorrow): AdjustedBorrowAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount ? DecCoin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: AdjustedBorrowAminoMsg): AdjustedBorrow {
    return AdjustedBorrow.fromAmino(object.value);
  },
  fromProtoMsg(message: AdjustedBorrowProtoMsg): AdjustedBorrow {
    return AdjustedBorrow.decode(message.value);
  },
  toProto(message: AdjustedBorrow): Uint8Array {
    return AdjustedBorrow.encode(message).finish();
  },
  toProtoMsg(message: AdjustedBorrow): AdjustedBorrowProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.AdjustedBorrow",
      value: AdjustedBorrow.encode(message).finish()
    };
  }
};
function createBaseCollateral(): Collateral {
  return {
    address: "",
    amount: Coin.fromPartial({})
  };
}
export const Collateral = {
  typeUrl: "/umee.leverage.v1.Collateral",
  encode(message: Collateral, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Collateral {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Collateral>): Collateral {
    const message = createBaseCollateral();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: CollateralAmino): Collateral {
    const message = createBaseCollateral();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: Collateral): CollateralAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: CollateralAminoMsg): Collateral {
    return Collateral.fromAmino(object.value);
  },
  fromProtoMsg(message: CollateralProtoMsg): Collateral {
    return Collateral.decode(message.value);
  },
  toProto(message: Collateral): Uint8Array {
    return Collateral.encode(message).finish();
  },
  toProtoMsg(message: Collateral): CollateralProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.Collateral",
      value: Collateral.encode(message).finish()
    };
  }
};
function createBaseBadDebt(): BadDebt {
  return {
    address: "",
    denom: ""
  };
}
export const BadDebt = {
  typeUrl: "/umee.leverage.v1.BadDebt",
  encode(message: BadDebt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BadDebt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BadDebt>): BadDebt {
    const message = createBaseBadDebt();
    message.address = object.address ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: BadDebtAmino): BadDebt {
    const message = createBaseBadDebt();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: BadDebt): BadDebtAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: BadDebtAminoMsg): BadDebt {
    return BadDebt.fromAmino(object.value);
  },
  fromProtoMsg(message: BadDebtProtoMsg): BadDebt {
    return BadDebt.decode(message.value);
  },
  toProto(message: BadDebt): Uint8Array {
    return BadDebt.encode(message).finish();
  },
  toProtoMsg(message: BadDebt): BadDebtProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.BadDebt",
      value: BadDebt.encode(message).finish()
    };
  }
};
function createBaseInterestScalar(): InterestScalar {
  return {
    denom: "",
    scalar: ""
  };
}
export const InterestScalar = {
  typeUrl: "/umee.leverage.v1.InterestScalar",
  encode(message: InterestScalar, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.scalar !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.scalar, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterestScalar {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterestScalar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.scalar = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<InterestScalar>): InterestScalar {
    const message = createBaseInterestScalar();
    message.denom = object.denom ?? "";
    message.scalar = object.scalar ?? "";
    return message;
  },
  fromAmino(object: InterestScalarAmino): InterestScalar {
    const message = createBaseInterestScalar();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.scalar !== undefined && object.scalar !== null) {
      message.scalar = object.scalar;
    }
    return message;
  },
  toAmino(message: InterestScalar): InterestScalarAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.scalar = message.scalar === "" ? undefined : message.scalar;
    return obj;
  },
  fromAminoMsg(object: InterestScalarAminoMsg): InterestScalar {
    return InterestScalar.fromAmino(object.value);
  },
  fromProtoMsg(message: InterestScalarProtoMsg): InterestScalar {
    return InterestScalar.decode(message.value);
  },
  toProto(message: InterestScalar): Uint8Array {
    return InterestScalar.encode(message).finish();
  },
  toProtoMsg(message: InterestScalar): InterestScalarProtoMsg {
    return {
      typeUrl: "/umee.leverage.v1.InterestScalar",
      value: InterestScalar.encode(message).finish()
    };
  }
};