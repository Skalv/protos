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
export declare const MsgCreate: {
    typeUrl: string;
    encode(message: MsgCreate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreate;
    fromPartial(object: Partial<MsgCreate>): MsgCreate;
    fromAmino(object: MsgCreateAmino): MsgCreate;
    toAmino(message: MsgCreate): MsgCreateAmino;
    fromAminoMsg(object: MsgCreateAminoMsg): MsgCreate;
    fromProtoMsg(message: MsgCreateProtoMsg): MsgCreate;
    toProto(message: MsgCreate): Uint8Array;
    toProtoMsg(message: MsgCreate): MsgCreateProtoMsg;
};
export declare const MsgCreateResponse: {
    typeUrl: string;
    encode(message: MsgCreateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateResponse;
    fromPartial(object: Partial<MsgCreateResponse>): MsgCreateResponse;
    fromAmino(object: MsgCreateResponseAmino): MsgCreateResponse;
    toAmino(message: MsgCreateResponse): MsgCreateResponseAmino;
    fromAminoMsg(object: MsgCreateResponseAminoMsg): MsgCreateResponse;
    fromProtoMsg(message: MsgCreateResponseProtoMsg): MsgCreateResponse;
    toProto(message: MsgCreateResponse): Uint8Array;
    toProtoMsg(message: MsgCreateResponse): MsgCreateResponseProtoMsg;
};
export declare const MsgPut: {
    typeUrl: string;
    encode(message: MsgPut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPut;
    fromPartial(object: Partial<MsgPut>): MsgPut;
    fromAmino(object: MsgPutAmino): MsgPut;
    toAmino(message: MsgPut): MsgPutAmino;
    fromAminoMsg(object: MsgPutAminoMsg): MsgPut;
    fromProtoMsg(message: MsgPutProtoMsg): MsgPut;
    toProto(message: MsgPut): Uint8Array;
    toProtoMsg(message: MsgPut): MsgPutProtoMsg;
};
export declare const MsgPutResponse: {
    typeUrl: string;
    encode(message: MsgPutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPutResponse;
    fromPartial(object: Partial<MsgPutResponse>): MsgPutResponse;
    fromAmino(object: MsgPutResponseAmino): MsgPutResponse;
    toAmino(message: MsgPutResponse): MsgPutResponseAmino;
    fromAminoMsg(object: MsgPutResponseAminoMsg): MsgPutResponse;
    fromProtoMsg(message: MsgPutResponseProtoMsg): MsgPutResponse;
    toProto(message: MsgPutResponse): Uint8Array;
    toProtoMsg(message: MsgPutResponse): MsgPutResponseProtoMsg;
};
export declare const MsgTake: {
    typeUrl: string;
    encode(message: MsgTake, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTake;
    fromPartial(object: Partial<MsgTake>): MsgTake;
    fromAmino(object: MsgTakeAmino): MsgTake;
    toAmino(message: MsgTake): MsgTakeAmino;
    fromAminoMsg(object: MsgTakeAminoMsg): MsgTake;
    fromProtoMsg(message: MsgTakeProtoMsg): MsgTake;
    toProto(message: MsgTake): Uint8Array;
    toProtoMsg(message: MsgTake): MsgTakeProtoMsg;
};
export declare const MsgTakeResponse: {
    typeUrl: string;
    encode(message: MsgTakeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTakeResponse;
    fromPartial(object: Partial<MsgTakeResponse>): MsgTakeResponse;
    fromAmino(object: MsgTakeResponseAmino): MsgTakeResponse;
    toAmino(message: MsgTakeResponse): MsgTakeResponseAmino;
    fromAminoMsg(object: MsgTakeResponseAminoMsg): MsgTakeResponse;
    fromProtoMsg(message: MsgTakeResponseProtoMsg): MsgTakeResponse;
    toProto(message: MsgTakeResponse): Uint8Array;
    toProtoMsg(message: MsgTakeResponse): MsgTakeResponseProtoMsg;
};
