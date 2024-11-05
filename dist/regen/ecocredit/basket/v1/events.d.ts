import { BasketCredit, BasketCreditAmino, BasketCreditSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** EventCreate is an event emitted when a basket is created. */
export interface EventCreate {
    /** basket_denom is the basket bank denom. */
    basketDenom: string;
    /**
     * curator is the address of the basket curator who is able to change certain
     * basket settings.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    curator: string;
}
export interface EventCreateProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.EventCreate";
    value: Uint8Array;
}
/** EventCreate is an event emitted when a basket is created. */
export interface EventCreateAmino {
    /** basket_denom is the basket bank denom. */
    basket_denom?: string;
    /**
     * curator is the address of the basket curator who is able to change certain
     * basket settings.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    curator?: string;
}
export interface EventCreateAminoMsg {
    type: "/regen.ecocredit.basket.v1.EventCreate";
    value: EventCreateAmino;
}
/** EventCreate is an event emitted when a basket is created. */
export interface EventCreateSDKType {
    basket_denom: string;
    /** @deprecated */
    curator: string;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */
export interface EventPut {
    /** owner is the owner of the credits put into the basket. */
    owner: string;
    /** basket_denom is the basket bank denom that the credits were added to. */
    basketDenom: string;
    /**
     * credits are the credits that were added to the basket.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    credits: BasketCredit[];
    /**
     * amount is the integer number of basket tokens converted from credits.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    amount: string;
}
export interface EventPutProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.EventPut";
    value: Uint8Array;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */
export interface EventPutAmino {
    /** owner is the owner of the credits put into the basket. */
    owner?: string;
    /** basket_denom is the basket bank denom that the credits were added to. */
    basket_denom?: string;
    /**
     * credits are the credits that were added to the basket.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    credits?: BasketCreditAmino[];
    /**
     * amount is the integer number of basket tokens converted from credits.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    amount?: string;
}
export interface EventPutAminoMsg {
    type: "/regen.ecocredit.basket.v1.EventPut";
    value: EventPutAmino;
}
/**
 * EventPut is an event emitted when credits are put into a basket in return for
 * basket tokens.
 */
export interface EventPutSDKType {
    owner: string;
    basket_denom: string;
    /** @deprecated */
    credits: BasketCreditSDKType[];
    /** @deprecated */
    amount: string;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */
export interface EventTake {
    /** owner is the owner of the credits taken from the basket. */
    owner: string;
    /** basket_denom is the basket bank denom that credits were taken from. */
    basketDenom: string;
    /**
     * credits are the credits that were taken from the basket.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    credits: BasketCredit[];
    /**
     * amount is the integer number of basket tokens converted to credits.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    amount: string;
}
export interface EventTakeProtoMsg {
    typeUrl: "/regen.ecocredit.basket.v1.EventTake";
    value: Uint8Array;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */
export interface EventTakeAmino {
    /** owner is the owner of the credits taken from the basket. */
    owner?: string;
    /** basket_denom is the basket bank denom that credits were taken from. */
    basket_denom?: string;
    /**
     * credits are the credits that were taken from the basket.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    credits?: BasketCreditAmino[];
    /**
     * amount is the integer number of basket tokens converted to credits.
     * Deprecated: This field is still populated and will be removed in the
     * next version.
     */
    /** @deprecated */
    amount?: string;
}
export interface EventTakeAminoMsg {
    type: "/regen.ecocredit.basket.v1.EventTake";
    value: EventTakeAmino;
}
/**
 * EventTake is an event emitted when credits are taken from a basket starting
 * from the oldest credits first.
 */
export interface EventTakeSDKType {
    owner: string;
    basket_denom: string;
    /** @deprecated */
    credits: BasketCreditSDKType[];
    /** @deprecated */
    amount: string;
}
export declare const EventCreate: {
    typeUrl: string;
    encode(message: EventCreate, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventCreate;
    fromPartial(object: Partial<EventCreate>): EventCreate;
    fromAmino(object: EventCreateAmino): EventCreate;
    toAmino(message: EventCreate): EventCreateAmino;
    fromAminoMsg(object: EventCreateAminoMsg): EventCreate;
    fromProtoMsg(message: EventCreateProtoMsg): EventCreate;
    toProto(message: EventCreate): Uint8Array;
    toProtoMsg(message: EventCreate): EventCreateProtoMsg;
};
export declare const EventPut: {
    typeUrl: string;
    encode(message: EventPut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventPut;
    fromPartial(object: Partial<EventPut>): EventPut;
    fromAmino(object: EventPutAmino): EventPut;
    toAmino(message: EventPut): EventPutAmino;
    fromAminoMsg(object: EventPutAminoMsg): EventPut;
    fromProtoMsg(message: EventPutProtoMsg): EventPut;
    toProto(message: EventPut): Uint8Array;
    toProtoMsg(message: EventPut): EventPutProtoMsg;
};
export declare const EventTake: {
    typeUrl: string;
    encode(message: EventTake, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventTake;
    fromPartial(object: Partial<EventTake>): EventTake;
    fromAmino(object: EventTakeAmino): EventTake;
    toAmino(message: EventTake): EventTakeAmino;
    fromAminoMsg(object: EventTakeAminoMsg): EventTake;
    fromProtoMsg(message: EventTakeProtoMsg): EventTake;
    toProto(message: EventTake): Uint8Array;
    toProtoMsg(message: EventTake): EventTakeProtoMsg;
};
