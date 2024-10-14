//@ts-nocheck
import { DateCriteria, DateCriteriaAmino, DateCriteriaSDKType, BasketCredit, BasketCreditAmino, BasketCreditSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** MsgCreateBasket is the Msg/CreateBasket request type. */
export interface MsgCreate {
  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   */
  curator: string;
  /**
   * name will be used to together with prefix to create a bank denom for this
   * basket token. It can be between 3-8 alphanumeric characters, with the
   * first character being alphabetic.
   * 
   * The bank denom will be formed from name, credit type and exponent and be
   * of the form `eco.<prefix><credit_type_abbrev>.<name>` where prefix
   * is derived from exponent.
   */
  name: string;
  /**
   * description is a human-readable description of the basket denom that should
   * be at most 256 characters.
   */
  description: string;
  /**
   * exponent is the exponent that will be used for converting credits to basket
   * tokens and for bank denom metadata. It also limits the precision of
   * credit amounts when putting credits into a basket. An exponent of 6 will
   * mean that 10^6 units of a basket token will be issued for 1.0 credits and
   * that this should be displayed as one unit in user interfaces. It also means
   * that the maximum precision of credit amounts is 6 decimal places so that
   * the need to round is eliminated. The exponent must be >= the precision of
   * the credit type at the time the basket is created and be of one of the
   * following values 0, 1, 2, 3, 6, 9, 12, 15, 18, 21, or 24 which correspond
   * to the exponents which have an official SI prefix.
   * 
   * The exponent will be used to form the prefix part of the the bank denom
   * and will be mapped as follows:
   *   0 - no prefix
   *   1 - d (deci)
   *   2 - c (centi)
   *   3 - m (milli)
   *   6 - u (micro)
   *   9 - n (nano)
   *   12 - p (pico)
   *   15 - f (femto)
   *   18 - a (atto)
   *   21 - z (zepto)
   *   24 - y (yocto)
   */
  exponent: number;
  /**
   * disable_auto_retire allows auto-retirement to be disabled.
   * The credits will be auto-retired if disable_auto_retire is
   * false unless the credits were previously put into the basket by the
   * address picking them from the basket, in which case they will remain
   * tradable.
   */
  disableAutoRetire: boolean;
  /**
   * credit_type_abbrev is the abbreviation of the credit type this basket is
   * able to hold.
   */
  creditTypeAbbrev: string;
  /** allowed_classes are the credit classes allowed to be put in the basket */
  allowedClasses: string[];
  /**
   * date_criteria is the date criteria for batches admitted to the basket.
   * At most, only one of the fields in the date_criteria should be set.
   */
  dateCriteria?: DateCriteria;
  /**
   * fee is the fee that the curator will pay to create the basket. It must be
   * >= the required Params.basket_creation_fee. We include the fee explicitly
   * here so that the curator explicitly acknowledges paying this fee and
   * is not surprised to learn that the paid a big fee and didn't know
   * beforehand.
   */
  fee: Coin[];
}
export interface MsgCreateProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgCreate";
  value: Uint8Array;
}
/** MsgCreateBasket is the Msg/CreateBasket request type. */
export interface MsgCreateAmino {
  /**
   * curator is the address of the basket curator who is able to change certain
   * basket settings.
   */
  curator?: string;
  /**
   * name will be used to together with prefix to create a bank denom for this
   * basket token. It can be between 3-8 alphanumeric characters, with the
   * first character being alphabetic.
   * 
   * The bank denom will be formed from name, credit type and exponent and be
   * of the form `eco.<prefix><credit_type_abbrev>.<name>` where prefix
   * is derived from exponent.
   */
  name?: string;
  /**
   * description is a human-readable description of the basket denom that should
   * be at most 256 characters.
   */
  description?: string;
  /**
   * exponent is the exponent that will be used for converting credits to basket
   * tokens and for bank denom metadata. It also limits the precision of
   * credit amounts when putting credits into a basket. An exponent of 6 will
   * mean that 10^6 units of a basket token will be issued for 1.0 credits and
   * that this should be displayed as one unit in user interfaces. It also means
   * that the maximum precision of credit amounts is 6 decimal places so that
   * the need to round is eliminated. The exponent must be >= the precision of
   * the credit type at the time the basket is created and be of one of the
   * following values 0, 1, 2, 3, 6, 9, 12, 15, 18, 21, or 24 which correspond
   * to the exponents which have an official SI prefix.
   * 
   * The exponent will be used to form the prefix part of the the bank denom
   * and will be mapped as follows:
   *   0 - no prefix
   *   1 - d (deci)
   *   2 - c (centi)
   *   3 - m (milli)
   *   6 - u (micro)
   *   9 - n (nano)
   *   12 - p (pico)
   *   15 - f (femto)
   *   18 - a (atto)
   *   21 - z (zepto)
   *   24 - y (yocto)
   */
  exponent?: number;
  /**
   * disable_auto_retire allows auto-retirement to be disabled.
   * The credits will be auto-retired if disable_auto_retire is
   * false unless the credits were previously put into the basket by the
   * address picking them from the basket, in which case they will remain
   * tradable.
   */
  disable_auto_retire?: boolean;
  /**
   * credit_type_abbrev is the abbreviation of the credit type this basket is
   * able to hold.
   */
  credit_type_abbrev?: string;
  /** allowed_classes are the credit classes allowed to be put in the basket */
  allowed_classes?: string[];
  /**
   * date_criteria is the date criteria for batches admitted to the basket.
   * At most, only one of the fields in the date_criteria should be set.
   */
  date_criteria?: DateCriteriaAmino;
  /**
   * fee is the fee that the curator will pay to create the basket. It must be
   * >= the required Params.basket_creation_fee. We include the fee explicitly
   * here so that the curator explicitly acknowledges paying this fee and
   * is not surprised to learn that the paid a big fee and didn't know
   * beforehand.
   */
  fee?: CoinAmino[];
}
export interface MsgCreateAminoMsg {
  type: "/regen.ecocredit.basket.v1.MsgCreate";
  value: MsgCreateAmino;
}
/** MsgCreateBasket is the Msg/CreateBasket request type. */
export interface MsgCreateSDKType {
  curator: string;
  name: string;
  description: string;
  exponent: number;
  disable_auto_retire: boolean;
  credit_type_abbrev: string;
  allowed_classes: string[];
  date_criteria?: DateCriteriaSDKType;
  fee: CoinSDKType[];
}
/** MsgCreateBasketResponse is the Msg/CreateBasket response type. */
export interface MsgCreateResponse {
  /** basket_denom is the unique denomination ID of the newly created basket. */
  basketDenom: string;
}
export interface MsgCreateResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgCreateResponse";
  value: Uint8Array;
}
/** MsgCreateBasketResponse is the Msg/CreateBasket response type. */
export interface MsgCreateResponseAmino {
  /** basket_denom is the unique denomination ID of the newly created basket. */
  basket_denom?: string;
}
export interface MsgCreateResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.MsgCreateResponse";
  value: MsgCreateResponseAmino;
}
/** MsgCreateBasketResponse is the Msg/CreateBasket response type. */
export interface MsgCreateResponseSDKType {
  basket_denom: string;
}
/** MsgAddToBasket is the Msg/AddToBasket request type. */
export interface MsgPut {
  /** owner is the owner of credits being put into the basket. */
  owner: string;
  /** basket_denom is the basket denom to add credits to. */
  basketDenom: string;
  /**
   * credits are credits to add to the basket. If they do not match the basket's
   * admission criteria the operation will fail. If there are any "dust" credits
   * left over when converting credits to basket tokens, these credits will
   * not be converted to basket tokens and instead remain with the owner.
   */
  credits: BasketCredit[];
}
export interface MsgPutProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgPut";
  value: Uint8Array;
}
/** MsgAddToBasket is the Msg/AddToBasket request type. */
export interface MsgPutAmino {
  /** owner is the owner of credits being put into the basket. */
  owner?: string;
  /** basket_denom is the basket denom to add credits to. */
  basket_denom?: string;
  /**
   * credits are credits to add to the basket. If they do not match the basket's
   * admission criteria the operation will fail. If there are any "dust" credits
   * left over when converting credits to basket tokens, these credits will
   * not be converted to basket tokens and instead remain with the owner.
   */
  credits?: BasketCreditAmino[];
}
export interface MsgPutAminoMsg {
  type: "/regen.ecocredit.basket.v1.MsgPut";
  value: MsgPutAmino;
}
/** MsgAddToBasket is the Msg/AddToBasket request type. */
export interface MsgPutSDKType {
  owner: string;
  basket_denom: string;
  credits: BasketCreditSDKType[];
}
/** MsgAddToBasketResponse is the Msg/AddToBasket response type. */
export interface MsgPutResponse {
  /** amount_received is the integer amount of basket tokens received. */
  amountReceived: string;
}
export interface MsgPutResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgPutResponse";
  value: Uint8Array;
}
/** MsgAddToBasketResponse is the Msg/AddToBasket response type. */
export interface MsgPutResponseAmino {
  /** amount_received is the integer amount of basket tokens received. */
  amount_received?: string;
}
export interface MsgPutResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.MsgPutResponse";
  value: MsgPutResponseAmino;
}
/** MsgAddToBasketResponse is the Msg/AddToBasket response type. */
export interface MsgPutResponseSDKType {
  amount_received: string;
}
/** MsgTakeFromBasket is the Msg/TakeFromBasket request type. */
export interface MsgTake {
  /** owner is the owner of the basket tokens. */
  owner: string;
  /** basket_denom is the basket bank denom to take credits from. */
  basketDenom: string;
  /** amount is the integer number of basket tokens to convert into credits. */
  amount: string;
  /**
   * retirement_jurisdiction is the optional retirement jurisdiction for the
   * credits which will be used only if retire_on_take is true for this basket.
   */
  retirementJurisdiction: string;
  /**
   * retire_on_take is a boolean that dictates whether the ecocredits
   * received in exchange for the basket tokens will be received as
   * retired or tradable credits.
   */
  retireOnTake: boolean;
}
export interface MsgTakeProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgTake";
  value: Uint8Array;
}
/** MsgTakeFromBasket is the Msg/TakeFromBasket request type. */
export interface MsgTakeAmino {
  /** owner is the owner of the basket tokens. */
  owner?: string;
  /** basket_denom is the basket bank denom to take credits from. */
  basket_denom?: string;
  /** amount is the integer number of basket tokens to convert into credits. */
  amount?: string;
  /**
   * retirement_jurisdiction is the optional retirement jurisdiction for the
   * credits which will be used only if retire_on_take is true for this basket.
   */
  retirement_jurisdiction?: string;
  /**
   * retire_on_take is a boolean that dictates whether the ecocredits
   * received in exchange for the basket tokens will be received as
   * retired or tradable credits.
   */
  retire_on_take?: boolean;
}
export interface MsgTakeAminoMsg {
  type: "/regen.ecocredit.basket.v1.MsgTake";
  value: MsgTakeAmino;
}
/** MsgTakeFromBasket is the Msg/TakeFromBasket request type. */
export interface MsgTakeSDKType {
  owner: string;
  basket_denom: string;
  amount: string;
  retirement_jurisdiction: string;
  retire_on_take: boolean;
}
/** MsgTakeFromBasketResponse is the Msg/TakeFromBasket response type. */
export interface MsgTakeResponse {
  /** credits are the credits taken out of the basket. */
  credits: BasketCredit[];
}
export interface MsgTakeResponseProtoMsg {
  typeUrl: "/regen.ecocredit.basket.v1.MsgTakeResponse";
  value: Uint8Array;
}
/** MsgTakeFromBasketResponse is the Msg/TakeFromBasket response type. */
export interface MsgTakeResponseAmino {
  /** credits are the credits taken out of the basket. */
  credits?: BasketCreditAmino[];
}
export interface MsgTakeResponseAminoMsg {
  type: "/regen.ecocredit.basket.v1.MsgTakeResponse";
  value: MsgTakeResponseAmino;
}
/** MsgTakeFromBasketResponse is the Msg/TakeFromBasket response type. */
export interface MsgTakeResponseSDKType {
  credits: BasketCreditSDKType[];
}
function createBaseMsgCreate(): MsgCreate {
  return {
    curator: "",
    name: "",
    description: "",
    exponent: 0,
    disableAutoRetire: false,
    creditTypeAbbrev: "",
    allowedClasses: [],
    dateCriteria: undefined,
    fee: []
  };
}
export const MsgCreate = {
  typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
  encode(message: MsgCreate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.curator !== "") {
      writer.uint32(10).string(message.curator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.exponent !== 0) {
      writer.uint32(32).uint32(message.exponent);
    }
    if (message.disableAutoRetire === true) {
      writer.uint32(40).bool(message.disableAutoRetire);
    }
    if (message.creditTypeAbbrev !== "") {
      writer.uint32(50).string(message.creditTypeAbbrev);
    }
    for (const v of message.allowedClasses) {
      writer.uint32(58).string(v!);
    }
    if (message.dateCriteria !== undefined) {
      DateCriteria.encode(message.dateCriteria, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.fee) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.curator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.exponent = reader.uint32();
          break;
        case 5:
          message.disableAutoRetire = reader.bool();
          break;
        case 6:
          message.creditTypeAbbrev = reader.string();
          break;
        case 7:
          message.allowedClasses.push(reader.string());
          break;
        case 8:
          message.dateCriteria = DateCriteria.decode(reader, reader.uint32());
          break;
        case 9:
          message.fee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreate>): MsgCreate {
    const message = createBaseMsgCreate();
    message.curator = object.curator ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.exponent = object.exponent ?? 0;
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.creditTypeAbbrev = object.creditTypeAbbrev ?? "";
    message.allowedClasses = object.allowedClasses?.map(e => e) || [];
    message.dateCriteria = object.dateCriteria !== undefined && object.dateCriteria !== null ? DateCriteria.fromPartial(object.dateCriteria) : undefined;
    message.fee = object.fee?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateAmino): MsgCreate {
    const message = createBaseMsgCreate();
    if (object.curator !== undefined && object.curator !== null) {
      message.curator = object.curator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    if (object.disable_auto_retire !== undefined && object.disable_auto_retire !== null) {
      message.disableAutoRetire = object.disable_auto_retire;
    }
    if (object.credit_type_abbrev !== undefined && object.credit_type_abbrev !== null) {
      message.creditTypeAbbrev = object.credit_type_abbrev;
    }
    message.allowedClasses = object.allowed_classes?.map(e => e) || [];
    if (object.date_criteria !== undefined && object.date_criteria !== null) {
      message.dateCriteria = DateCriteria.fromAmino(object.date_criteria);
    }
    message.fee = object.fee?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreate): MsgCreateAmino {
    const obj: any = {};
    obj.curator = message.curator === "" ? undefined : message.curator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    obj.disable_auto_retire = message.disableAutoRetire === false ? undefined : message.disableAutoRetire;
    obj.credit_type_abbrev = message.creditTypeAbbrev === "" ? undefined : message.creditTypeAbbrev;
    if (message.allowedClasses) {
      obj.allowed_classes = message.allowedClasses.map(e => e);
    } else {
      obj.allowed_classes = message.allowedClasses;
    }
    obj.date_criteria = message.dateCriteria ? DateCriteria.toAmino(message.dateCriteria) : undefined;
    if (message.fee) {
      obj.fee = message.fee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.fee = message.fee;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateAminoMsg): MsgCreate {
    return MsgCreate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProtoMsg): MsgCreate {
    return MsgCreate.decode(message.value);
  },
  toProto(message: MsgCreate): Uint8Array {
    return MsgCreate.encode(message).finish();
  },
  toProtoMsg(message: MsgCreate): MsgCreateProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgCreate",
      value: MsgCreate.encode(message).finish()
    };
  }
};
function createBaseMsgCreateResponse(): MsgCreateResponse {
  return {
    basketDenom: ""
  };
}
export const MsgCreateResponse = {
  typeUrl: "/regen.ecocredit.basket.v1.MsgCreateResponse",
  encode(message: MsgCreateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.basketDenom !== "") {
      writer.uint32(10).string(message.basketDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.basketDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateResponse>): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    message.basketDenom = object.basketDenom ?? "";
    return message;
  },
  fromAmino(object: MsgCreateResponseAmino): MsgCreateResponse {
    const message = createBaseMsgCreateResponse();
    if (object.basket_denom !== undefined && object.basket_denom !== null) {
      message.basketDenom = object.basket_denom;
    }
    return message;
  },
  toAmino(message: MsgCreateResponse): MsgCreateResponseAmino {
    const obj: any = {};
    obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
    return obj;
  },
  fromAminoMsg(object: MsgCreateResponseAminoMsg): MsgCreateResponse {
    return MsgCreateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateResponseProtoMsg): MsgCreateResponse {
    return MsgCreateResponse.decode(message.value);
  },
  toProto(message: MsgCreateResponse): Uint8Array {
    return MsgCreateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateResponse): MsgCreateResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgCreateResponse",
      value: MsgCreateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgPut(): MsgPut {
  return {
    owner: "",
    basketDenom: "",
    credits: []
  };
}
export const MsgPut = {
  typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
  encode(message: MsgPut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.basketDenom !== "") {
      writer.uint32(18).string(message.basketDenom);
    }
    for (const v of message.credits) {
      BasketCredit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.basketDenom = reader.string();
          break;
        case 3:
          message.credits.push(BasketCredit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPut>): MsgPut {
    const message = createBaseMsgPut();
    message.owner = object.owner ?? "";
    message.basketDenom = object.basketDenom ?? "";
    message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgPutAmino): MsgPut {
    const message = createBaseMsgPut();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.basket_denom !== undefined && object.basket_denom !== null) {
      message.basketDenom = object.basket_denom;
    }
    message.credits = object.credits?.map(e => BasketCredit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgPut): MsgPutAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toAmino(e) : undefined);
    } else {
      obj.credits = message.credits;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPutAminoMsg): MsgPut {
    return MsgPut.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPutProtoMsg): MsgPut {
    return MsgPut.decode(message.value);
  },
  toProto(message: MsgPut): Uint8Array {
    return MsgPut.encode(message).finish();
  },
  toProtoMsg(message: MsgPut): MsgPutProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgPut",
      value: MsgPut.encode(message).finish()
    };
  }
};
function createBaseMsgPutResponse(): MsgPutResponse {
  return {
    amountReceived: ""
  };
}
export const MsgPutResponse = {
  typeUrl: "/regen.ecocredit.basket.v1.MsgPutResponse",
  encode(message: MsgPutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amountReceived !== "") {
      writer.uint32(10).string(message.amountReceived);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amountReceived = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgPutResponse>): MsgPutResponse {
    const message = createBaseMsgPutResponse();
    message.amountReceived = object.amountReceived ?? "";
    return message;
  },
  fromAmino(object: MsgPutResponseAmino): MsgPutResponse {
    const message = createBaseMsgPutResponse();
    if (object.amount_received !== undefined && object.amount_received !== null) {
      message.amountReceived = object.amount_received;
    }
    return message;
  },
  toAmino(message: MsgPutResponse): MsgPutResponseAmino {
    const obj: any = {};
    obj.amount_received = message.amountReceived === "" ? undefined : message.amountReceived;
    return obj;
  },
  fromAminoMsg(object: MsgPutResponseAminoMsg): MsgPutResponse {
    return MsgPutResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgPutResponseProtoMsg): MsgPutResponse {
    return MsgPutResponse.decode(message.value);
  },
  toProto(message: MsgPutResponse): Uint8Array {
    return MsgPutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPutResponse): MsgPutResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgPutResponse",
      value: MsgPutResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTake(): MsgTake {
  return {
    owner: "",
    basketDenom: "",
    amount: "",
    retirementJurisdiction: "",
    retireOnTake: false
  };
}
export const MsgTake = {
  typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
  encode(message: MsgTake, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.basketDenom !== "") {
      writer.uint32(18).string(message.basketDenom);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.retirementJurisdiction !== "") {
      writer.uint32(34).string(message.retirementJurisdiction);
    }
    if (message.retireOnTake === true) {
      writer.uint32(40).bool(message.retireOnTake);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTake {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.basketDenom = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.retirementJurisdiction = reader.string();
          break;
        case 5:
          message.retireOnTake = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTake>): MsgTake {
    const message = createBaseMsgTake();
    message.owner = object.owner ?? "";
    message.basketDenom = object.basketDenom ?? "";
    message.amount = object.amount ?? "";
    message.retirementJurisdiction = object.retirementJurisdiction ?? "";
    message.retireOnTake = object.retireOnTake ?? false;
    return message;
  },
  fromAmino(object: MsgTakeAmino): MsgTake {
    const message = createBaseMsgTake();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.basket_denom !== undefined && object.basket_denom !== null) {
      message.basketDenom = object.basket_denom;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    if (object.retirement_jurisdiction !== undefined && object.retirement_jurisdiction !== null) {
      message.retirementJurisdiction = object.retirement_jurisdiction;
    }
    if (object.retire_on_take !== undefined && object.retire_on_take !== null) {
      message.retireOnTake = object.retire_on_take;
    }
    return message;
  },
  toAmino(message: MsgTake): MsgTakeAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.basket_denom = message.basketDenom === "" ? undefined : message.basketDenom;
    obj.amount = message.amount === "" ? undefined : message.amount;
    obj.retirement_jurisdiction = message.retirementJurisdiction === "" ? undefined : message.retirementJurisdiction;
    obj.retire_on_take = message.retireOnTake === false ? undefined : message.retireOnTake;
    return obj;
  },
  fromAminoMsg(object: MsgTakeAminoMsg): MsgTake {
    return MsgTake.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTakeProtoMsg): MsgTake {
    return MsgTake.decode(message.value);
  },
  toProto(message: MsgTake): Uint8Array {
    return MsgTake.encode(message).finish();
  },
  toProtoMsg(message: MsgTake): MsgTakeProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgTake",
      value: MsgTake.encode(message).finish()
    };
  }
};
function createBaseMsgTakeResponse(): MsgTakeResponse {
  return {
    credits: []
  };
}
export const MsgTakeResponse = {
  typeUrl: "/regen.ecocredit.basket.v1.MsgTakeResponse",
  encode(message: MsgTakeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.credits) {
      BasketCredit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTakeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTakeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.credits.push(BasketCredit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgTakeResponse>): MsgTakeResponse {
    const message = createBaseMsgTakeResponse();
    message.credits = object.credits?.map(e => BasketCredit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgTakeResponseAmino): MsgTakeResponse {
    const message = createBaseMsgTakeResponse();
    message.credits = object.credits?.map(e => BasketCredit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgTakeResponse): MsgTakeResponseAmino {
    const obj: any = {};
    if (message.credits) {
      obj.credits = message.credits.map(e => e ? BasketCredit.toAmino(e) : undefined);
    } else {
      obj.credits = message.credits;
    }
    return obj;
  },
  fromAminoMsg(object: MsgTakeResponseAminoMsg): MsgTakeResponse {
    return MsgTakeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgTakeResponseProtoMsg): MsgTakeResponse {
    return MsgTakeResponse.decode(message.value);
  },
  toProto(message: MsgTakeResponse): Uint8Array {
    return MsgTakeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTakeResponse): MsgTakeResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.basket.v1.MsgTakeResponse",
      value: MsgTakeResponse.encode(message).finish()
    };
  }
};