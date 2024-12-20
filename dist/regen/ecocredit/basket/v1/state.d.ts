import { DateCriteria, DateCriteriaAmino, DateCriteriaSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** Basket represents a basket in state. */
export interface Basket {
    /**
     * id is the uint64 ID of the basket. It is used internally for reducing
     * storage space.
     */
    id: bigint;
    /** basket_denom is the basket bank denom. */
    basketDenom: string;
    /**
     * name is the unique name of the basket specified in MsgCreate. Basket
     * names must be unique across all credit types and choices of exponent
     * above and beyond the uniqueness constraint on basket_denom.
     */
    name: string;
    /**
     * disable_auto_retire indicates whether or not the credits will be retired
     * upon withdraw from the basket.
     */
    disableAutoRetire: boolean;
    /**
     * credit_type_abbrev is the abbreviation of the credit type this basket is
     * able to hold.
     */
    creditTypeAbbrev: string;
    /** date_criteria is the date criteria for batches admitted to the basket. */
    dateCriteria?: DateCriteria;
    /** exponent is the exponent for converting credits to/from basket tokens. */
    exponent: number;
    /**
     * curator is the address of the basket curator who is able to change certain
     * basket settings.
     *
     * Since Revision 1
     */
    curator: Uint8Array;
}
export interface BasketProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.Basket";
    value: Uint8Array;
}
/** Basket represents a basket in state. */
export interface BasketAmino {
    /**
     * id is the uint64 ID of the basket. It is used internally for reducing
     * storage space.
     */
    id?: string;
    /** basket_denom is the basket bank denom. */
    basket_denom?: string;
    /**
     * name is the unique name of the basket specified in MsgCreate. Basket
     * names must be unique across all credit types and choices of exponent
     * above and beyond the uniqueness constraint on basket_denom.
     */
    name?: string;
    /**
     * disable_auto_retire indicates whether or not the credits will be retired
     * upon withdraw from the basket.
     */
    disable_auto_retire?: boolean;
    /**
     * credit_type_abbrev is the abbreviation of the credit type this basket is
     * able to hold.
     */
    credit_type_abbrev?: string;
    /** date_criteria is the date criteria for batches admitted to the basket. */
    date_criteria?: DateCriteriaAmino;
    /** exponent is the exponent for converting credits to/from basket tokens. */
    exponent?: number;
    /**
     * curator is the address of the basket curator who is able to change certain
     * basket settings.
     *
     * Since Revision 1
     */
    curator?: string;
}
export interface BasketAminoMsg {
    type: "/regen.ecocredit.basket.v1.Basket";
    value: BasketAmino;
}
/** Basket represents a basket in state. */
export interface BasketSDKType {
    id: bigint;
    basket_denom: string;
    name: string;
    disable_auto_retire: boolean;
    credit_type_abbrev: string;
    date_criteria?: DateCriteriaSDKType;
    exponent: number;
    curator: Uint8Array;
}
/** BasketClass describes a credit class that can be deposited in a basket. */
export interface BasketClass {
    /** basket_id is the ID of the basket */
    basketId: bigint;
    /**
     * class_id is the id of the credit class that is allowed to be deposited in
     * the basket
     */
    classId: string;
}
export interface BasketClassProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.BasketClass";
    value: Uint8Array;
}
/** BasketClass describes a credit class that can be deposited in a basket. */
export interface BasketClassAmino {
    /** basket_id is the ID of the basket */
    basket_id?: string;
    /**
     * class_id is the id of the credit class that is allowed to be deposited in
     * the basket
     */
    class_id?: string;
}
export interface BasketClassAminoMsg {
    type: "/regen.ecocredit.basket.v1.BasketClass";
    value: BasketClassAmino;
}
/** BasketClass describes a credit class that can be deposited in a basket. */
export interface BasketClassSDKType {
    basket_id: bigint;
    class_id: string;
}
/** BasketBalance stores the amount of credits from a batch in a basket */
export interface BasketBalance {
    /** basket_id is the ID of the basket */
    basketId: bigint;
    /** batch_denom is the denom of the credit batch */
    batchDenom: string;
    /** balance is the amount of ecocredits held in the basket */
    balance: string;
    /**
     * batch_start_date is the start date of the batch. This field is used
     * to create an index which is used to remove the oldest credits first.
     */
    batchStartDate?: Date;
}
export interface BasketBalanceProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.BasketBalance";
    value: Uint8Array;
}
/** BasketBalance stores the amount of credits from a batch in a basket */
export interface BasketBalanceAmino {
    /** basket_id is the ID of the basket */
    basket_id?: string;
    /** batch_denom is the denom of the credit batch */
    batch_denom?: string;
    /** balance is the amount of ecocredits held in the basket */
    balance?: string;
    /**
     * batch_start_date is the start date of the batch. This field is used
     * to create an index which is used to remove the oldest credits first.
     */
    batch_start_date?: string;
}
export interface BasketBalanceAminoMsg {
    type: "/regen.ecocredit.basket.v1.BasketBalance";
    value: BasketBalanceAmino;
}
/** BasketBalance stores the amount of credits from a batch in a basket */
export interface BasketBalanceSDKType {
    basket_id: bigint;
    batch_denom: string;
    balance: string;
    batch_start_date?: Date;
}
export declare const Basket: {
    typeUrl: string;
    encode(message: Basket, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Basket;
    fromPartial(object: Partial<Basket>): Basket;
    fromAmino(object: BasketAmino): Basket;
    toAmino(message: Basket): BasketAmino;
    fromAminoMsg(object: BasketAminoMsg): Basket;
    fromProtoMsg(message: BasketProtoMsg): Basket;
    toProto(message: Basket): Uint8Array;
    toProtoMsg(message: Basket): BasketProtoMsg;
};
export declare const BasketClass: {
    typeUrl: string;
    encode(message: BasketClass, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BasketClass;
    fromPartial(object: Partial<BasketClass>): BasketClass;
    fromAmino(object: BasketClassAmino): BasketClass;
    toAmino(message: BasketClass): BasketClassAmino;
    fromAminoMsg(object: BasketClassAminoMsg): BasketClass;
    fromProtoMsg(message: BasketClassProtoMsg): BasketClass;
    toProto(message: BasketClass): Uint8Array;
    toProtoMsg(message: BasketClass): BasketClassProtoMsg;
};
export declare const BasketBalance: {
    typeUrl: string;
    encode(message: BasketBalance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BasketBalance;
    fromPartial(object: Partial<BasketBalance>): BasketBalance;
    fromAmino(object: BasketBalanceAmino): BasketBalance;
    toAmino(message: BasketBalance): BasketBalanceAmino;
    fromAminoMsg(object: BasketBalanceAminoMsg): BasketBalance;
    fromProtoMsg(message: BasketBalanceProtoMsg): BasketBalance;
    toProto(message: BasketBalance): Uint8Array;
    toProtoMsg(message: BasketBalance): BasketBalanceProtoMsg;
};
