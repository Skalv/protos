import { BinaryReader, BinaryWriter } from "../../../../binary";
/** EventSell is an event emitted when a sell order is created. */
export interface EventSell {
    /** order_id is the unique identifier of the sell order. */
    orderId: bigint;
}
export interface EventSellProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventSell";
    value: Uint8Array;
}
/** EventSell is an event emitted when a sell order is created. */
export interface EventSellAmino {
    /** order_id is the unique identifier of the sell order. */
    order_id?: string;
}
export interface EventSellAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventSell";
    value: EventSellAmino;
}
/** EventSell is an event emitted when a sell order is created. */
export interface EventSellSDKType {
    order_id: bigint;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrder {
    /** order_id is the unique identifier of the sell order. */
    orderId: bigint;
}
export interface EventUpdateSellOrderProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder";
    value: Uint8Array;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrderAmino {
    /** order_id is the unique identifier of the sell order. */
    order_id?: string;
}
export interface EventUpdateSellOrderAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventUpdateSellOrder";
    value: EventUpdateSellOrderAmino;
}
/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrderSDKType {
    order_id: bigint;
}
/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenom {
    /**
     * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) added to the list of
     * allowed denoms for use in the marketplace.
     */
    denom: string;
}
export interface EventAllowDenomProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.EventAllowDenom";
    value: Uint8Array;
}
/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenomAmino {
    /**
     * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) added to the list of
     * allowed denoms for use in the marketplace.
     */
    denom?: string;
}
export interface EventAllowDenomAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.EventAllowDenom";
    value: EventAllowDenomAmino;
}
/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenomSDKType {
    denom: string;
}
export declare const EventSell: {
    typeUrl: string;
    encode(message: EventSell, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventSell;
    fromPartial(object: Partial<EventSell>): EventSell;
    fromAmino(object: EventSellAmino): EventSell;
    toAmino(message: EventSell): EventSellAmino;
    fromAminoMsg(object: EventSellAminoMsg): EventSell;
    fromProtoMsg(message: EventSellProtoMsg): EventSell;
    toProto(message: EventSell): Uint8Array;
    toProtoMsg(message: EventSell): EventSellProtoMsg;
};
export declare const EventUpdateSellOrder: {
    typeUrl: string;
    encode(message: EventUpdateSellOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateSellOrder;
    fromPartial(object: Partial<EventUpdateSellOrder>): EventUpdateSellOrder;
    fromAmino(object: EventUpdateSellOrderAmino): EventUpdateSellOrder;
    toAmino(message: EventUpdateSellOrder): EventUpdateSellOrderAmino;
    fromAminoMsg(object: EventUpdateSellOrderAminoMsg): EventUpdateSellOrder;
    fromProtoMsg(message: EventUpdateSellOrderProtoMsg): EventUpdateSellOrder;
    toProto(message: EventUpdateSellOrder): Uint8Array;
    toProtoMsg(message: EventUpdateSellOrder): EventUpdateSellOrderProtoMsg;
};
export declare const EventAllowDenom: {
    typeUrl: string;
    encode(message: EventAllowDenom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EventAllowDenom;
    fromPartial(object: Partial<EventAllowDenom>): EventAllowDenom;
    fromAmino(object: EventAllowDenomAmino): EventAllowDenom;
    toAmino(message: EventAllowDenom): EventAllowDenomAmino;
    fromAminoMsg(object: EventAllowDenomAminoMsg): EventAllowDenom;
    fromProtoMsg(message: EventAllowDenomProtoMsg): EventAllowDenom;
    toProto(message: EventAllowDenom): Uint8Array;
    toProtoMsg(message: EventAllowDenom): EventAllowDenomProtoMsg;
};
