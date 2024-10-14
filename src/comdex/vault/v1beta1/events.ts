//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface EventCreateVault {
  sender: string;
  collateralType: string;
}
export interface EventCreateVaultProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.EventCreateVault";
  value: Uint8Array;
}
export interface EventCreateVaultAmino {
  sender?: string;
  collateral_type?: string;
}
export interface EventCreateVaultAminoMsg {
  type: "/comdex.vault.v1beta1.EventCreateVault";
  value: EventCreateVaultAmino;
}
export interface EventCreateVaultSDKType {
  sender: string;
  collateral_type: string;
}
export interface EventDepositCollateral {
  owner: string;
  collateralType: string;
  collateral: Coin;
}
export interface EventDepositCollateralProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.EventDepositCollateral";
  value: Uint8Array;
}
export interface EventDepositCollateralAmino {
  owner?: string;
  collateral_type?: string;
  collateral?: CoinAmino;
}
export interface EventDepositCollateralAminoMsg {
  type: "/comdex.vault.v1beta1.EventDepositCollateral";
  value: EventDepositCollateralAmino;
}
export interface EventDepositCollateralSDKType {
  owner: string;
  collateral_type: string;
  collateral: CoinSDKType;
}
export interface EventWithdrawCollateral {
  owner: string;
  collateralType: string;
  collateral: Coin;
}
export interface EventWithdrawCollateralProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.EventWithdrawCollateral";
  value: Uint8Array;
}
export interface EventWithdrawCollateralAmino {
  owner?: string;
  collateral_type?: string;
  collateral?: CoinAmino;
}
export interface EventWithdrawCollateralAminoMsg {
  type: "/comdex.vault.v1beta1.EventWithdrawCollateral";
  value: EventWithdrawCollateralAmino;
}
export interface EventWithdrawCollateralSDKType {
  owner: string;
  collateral_type: string;
  collateral: CoinSDKType;
}
export interface EventDrawDebt {
  owner: string;
  collateralType: string;
  debt: Coin;
}
export interface EventDrawDebtProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.EventDrawDebt";
  value: Uint8Array;
}
export interface EventDrawDebtAmino {
  owner?: string;
  collateral_type?: string;
  debt?: CoinAmino;
}
export interface EventDrawDebtAminoMsg {
  type: "/comdex.vault.v1beta1.EventDrawDebt";
  value: EventDrawDebtAmino;
}
export interface EventDrawDebtSDKType {
  owner: string;
  collateral_type: string;
  debt: CoinSDKType;
}
export interface EventRepayDebt {
  owner: string;
  collateralType: string;
  debt: Coin;
}
export interface EventRepayDebtProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.EventRepayDebt";
  value: Uint8Array;
}
export interface EventRepayDebtAmino {
  owner?: string;
  collateral_type?: string;
  debt?: CoinAmino;
}
export interface EventRepayDebtAminoMsg {
  type: "/comdex.vault.v1beta1.EventRepayDebt";
  value: EventRepayDebtAmino;
}
export interface EventRepayDebtSDKType {
  owner: string;
  collateral_type: string;
  debt: CoinSDKType;
}
export interface EventCloseVault {
  owner: string;
  collateralType: string;
}
export interface EventCloseVaultProtoMsg {
  typeUrl: "/comdex.vault.v1beta1.EventCloseVault";
  value: Uint8Array;
}
export interface EventCloseVaultAmino {
  owner?: string;
  collateral_type?: string;
}
export interface EventCloseVaultAminoMsg {
  type: "/comdex.vault.v1beta1.EventCloseVault";
  value: EventCloseVaultAmino;
}
export interface EventCloseVaultSDKType {
  owner: string;
  collateral_type: string;
}
function createBaseEventCreateVault(): EventCreateVault {
  return {
    sender: "",
    collateralType: ""
  };
}
export const EventCreateVault = {
  typeUrl: "/comdex.vault.v1beta1.EventCreateVault",
  encode(message: EventCreateVault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateVault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventCreateVault>): EventCreateVault {
    const message = createBaseEventCreateVault();
    message.sender = object.sender ?? "";
    message.collateralType = object.collateralType ?? "";
    return message;
  },
  fromAmino(object: EventCreateVaultAmino): EventCreateVault {
    const message = createBaseEventCreateVault();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    return message;
  },
  toAmino(message: EventCreateVault): EventCreateVaultAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.collateral_type = message.collateralType === "" ? undefined : message.collateralType;
    return obj;
  },
  fromAminoMsg(object: EventCreateVaultAminoMsg): EventCreateVault {
    return EventCreateVault.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateVaultProtoMsg): EventCreateVault {
    return EventCreateVault.decode(message.value);
  },
  toProto(message: EventCreateVault): Uint8Array {
    return EventCreateVault.encode(message).finish();
  },
  toProtoMsg(message: EventCreateVault): EventCreateVaultProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.EventCreateVault",
      value: EventCreateVault.encode(message).finish()
    };
  }
};
function createBaseEventDepositCollateral(): EventDepositCollateral {
  return {
    owner: "",
    collateralType: "",
    collateral: Coin.fromPartial({})
  };
}
export const EventDepositCollateral = {
  typeUrl: "/comdex.vault.v1beta1.EventDepositCollateral",
  encode(message: EventDepositCollateral, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDepositCollateral {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDepositCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        case 3:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventDepositCollateral>): EventDepositCollateral {
    const message = createBaseEventDepositCollateral();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    return message;
  },
  fromAmino(object: EventDepositCollateralAmino): EventDepositCollateral {
    const message = createBaseEventDepositCollateral();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromAmino(object.collateral);
    }
    return message;
  },
  toAmino(message: EventDepositCollateral): EventDepositCollateralAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.collateral_type = message.collateralType === "" ? undefined : message.collateralType;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventDepositCollateralAminoMsg): EventDepositCollateral {
    return EventDepositCollateral.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDepositCollateralProtoMsg): EventDepositCollateral {
    return EventDepositCollateral.decode(message.value);
  },
  toProto(message: EventDepositCollateral): Uint8Array {
    return EventDepositCollateral.encode(message).finish();
  },
  toProtoMsg(message: EventDepositCollateral): EventDepositCollateralProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.EventDepositCollateral",
      value: EventDepositCollateral.encode(message).finish()
    };
  }
};
function createBaseEventWithdrawCollateral(): EventWithdrawCollateral {
  return {
    owner: "",
    collateralType: "",
    collateral: Coin.fromPartial({})
  };
}
export const EventWithdrawCollateral = {
  typeUrl: "/comdex.vault.v1beta1.EventWithdrawCollateral",
  encode(message: EventWithdrawCollateral, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWithdrawCollateral {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawCollateral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        case 3:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventWithdrawCollateral>): EventWithdrawCollateral {
    const message = createBaseEventWithdrawCollateral();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    message.collateral = object.collateral !== undefined && object.collateral !== null ? Coin.fromPartial(object.collateral) : undefined;
    return message;
  },
  fromAmino(object: EventWithdrawCollateralAmino): EventWithdrawCollateral {
    const message = createBaseEventWithdrawCollateral();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromAmino(object.collateral);
    }
    return message;
  },
  toAmino(message: EventWithdrawCollateral): EventWithdrawCollateralAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.collateral_type = message.collateralType === "" ? undefined : message.collateralType;
    obj.collateral = message.collateral ? Coin.toAmino(message.collateral) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawCollateralAminoMsg): EventWithdrawCollateral {
    return EventWithdrawCollateral.fromAmino(object.value);
  },
  fromProtoMsg(message: EventWithdrawCollateralProtoMsg): EventWithdrawCollateral {
    return EventWithdrawCollateral.decode(message.value);
  },
  toProto(message: EventWithdrawCollateral): Uint8Array {
    return EventWithdrawCollateral.encode(message).finish();
  },
  toProtoMsg(message: EventWithdrawCollateral): EventWithdrawCollateralProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.EventWithdrawCollateral",
      value: EventWithdrawCollateral.encode(message).finish()
    };
  }
};
function createBaseEventDrawDebt(): EventDrawDebt {
  return {
    owner: "",
    collateralType: "",
    debt: Coin.fromPartial({})
  };
}
export const EventDrawDebt = {
  typeUrl: "/comdex.vault.v1beta1.EventDrawDebt",
  encode(message: EventDrawDebt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventDrawDebt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDrawDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        case 3:
          message.debt = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventDrawDebt>): EventDrawDebt {
    const message = createBaseEventDrawDebt();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    message.debt = object.debt !== undefined && object.debt !== null ? Coin.fromPartial(object.debt) : undefined;
    return message;
  },
  fromAmino(object: EventDrawDebtAmino): EventDrawDebt {
    const message = createBaseEventDrawDebt();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromAmino(object.debt);
    }
    return message;
  },
  toAmino(message: EventDrawDebt): EventDrawDebtAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.collateral_type = message.collateralType === "" ? undefined : message.collateralType;
    obj.debt = message.debt ? Coin.toAmino(message.debt) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventDrawDebtAminoMsg): EventDrawDebt {
    return EventDrawDebt.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDrawDebtProtoMsg): EventDrawDebt {
    return EventDrawDebt.decode(message.value);
  },
  toProto(message: EventDrawDebt): Uint8Array {
    return EventDrawDebt.encode(message).finish();
  },
  toProtoMsg(message: EventDrawDebt): EventDrawDebtProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.EventDrawDebt",
      value: EventDrawDebt.encode(message).finish()
    };
  }
};
function createBaseEventRepayDebt(): EventRepayDebt {
  return {
    owner: "",
    collateralType: "",
    debt: Coin.fromPartial({})
  };
}
export const EventRepayDebt = {
  typeUrl: "/comdex.vault.v1beta1.EventRepayDebt",
  encode(message: EventRepayDebt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    if (message.debt !== undefined) {
      Coin.encode(message.debt, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventRepayDebt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRepayDebt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        case 3:
          message.debt = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventRepayDebt>): EventRepayDebt {
    const message = createBaseEventRepayDebt();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    message.debt = object.debt !== undefined && object.debt !== null ? Coin.fromPartial(object.debt) : undefined;
    return message;
  },
  fromAmino(object: EventRepayDebtAmino): EventRepayDebt {
    const message = createBaseEventRepayDebt();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    if (object.debt !== undefined && object.debt !== null) {
      message.debt = Coin.fromAmino(object.debt);
    }
    return message;
  },
  toAmino(message: EventRepayDebt): EventRepayDebtAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.collateral_type = message.collateralType === "" ? undefined : message.collateralType;
    obj.debt = message.debt ? Coin.toAmino(message.debt) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventRepayDebtAminoMsg): EventRepayDebt {
    return EventRepayDebt.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRepayDebtProtoMsg): EventRepayDebt {
    return EventRepayDebt.decode(message.value);
  },
  toProto(message: EventRepayDebt): Uint8Array {
    return EventRepayDebt.encode(message).finish();
  },
  toProtoMsg(message: EventRepayDebt): EventRepayDebtProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.EventRepayDebt",
      value: EventRepayDebt.encode(message).finish()
    };
  }
};
function createBaseEventCloseVault(): EventCloseVault {
  return {
    owner: "",
    collateralType: ""
  };
}
export const EventCloseVault = {
  typeUrl: "/comdex.vault.v1beta1.EventCloseVault",
  encode(message: EventCloseVault, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.collateralType !== "") {
      writer.uint32(18).string(message.collateralType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCloseVault {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCloseVault();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collateralType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<EventCloseVault>): EventCloseVault {
    const message = createBaseEventCloseVault();
    message.owner = object.owner ?? "";
    message.collateralType = object.collateralType ?? "";
    return message;
  },
  fromAmino(object: EventCloseVaultAmino): EventCloseVault {
    const message = createBaseEventCloseVault();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.collateral_type !== undefined && object.collateral_type !== null) {
      message.collateralType = object.collateral_type;
    }
    return message;
  },
  toAmino(message: EventCloseVault): EventCloseVaultAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.collateral_type = message.collateralType === "" ? undefined : message.collateralType;
    return obj;
  },
  fromAminoMsg(object: EventCloseVaultAminoMsg): EventCloseVault {
    return EventCloseVault.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCloseVaultProtoMsg): EventCloseVault {
    return EventCloseVault.decode(message.value);
  },
  toProto(message: EventCloseVault): Uint8Array {
    return EventCloseVault.encode(message).finish();
  },
  toProtoMsg(message: EventCloseVault): EventCloseVaultProtoMsg {
    return {
      typeUrl: "/comdex.vault.v1beta1.EventCloseVault",
      value: EventCloseVault.encode(message).finish()
    };
  }
};