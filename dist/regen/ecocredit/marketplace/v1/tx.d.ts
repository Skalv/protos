import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
/** MsgSell is the Msg/Sell request type. */
export interface MsgSell {
    /** owner is the address of the owner of the credits being sold. */
    owner: string;
    /** orders are the sell orders being created. */
    orders: MsgSell_Order[];
}
export interface MsgSellProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgSell";
    value: Uint8Array;
}
/** MsgSell is the Msg/Sell request type. */
export interface MsgSellAmino {
    /** owner is the address of the owner of the credits being sold. */
    owner?: string;
    /** orders are the sell orders being created. */
    orders?: MsgSell_OrderAmino[];
}
export interface MsgSellAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgSell";
    value: MsgSellAmino;
}
/** MsgSell is the Msg/Sell request type. */
export interface MsgSellSDKType {
    owner: string;
    orders: MsgSell_OrderSDKType[];
}
/** Order is the content of a new sell order. */
export interface MsgSell_Order {
    /** batch_denom is the credit batch being sold. */
    batchDenom: string;
    /**
     * quantity is the quantity of credits being sold from this batch. If it is
     * less then the balance of credits the owner has available at the time this
     * sell order is matched, the quantity will be adjusted downwards to the
     * owner's balance. However, if the balance of credits is less than this
     * quantity at the time the sell order is created, the operation will fail.
     */
    quantity: string;
    /**
     * ask_price is the price the seller is asking for each unit of the
     * batch_denom. Each credit unit of the batch will be sold for at least the
     * ask_price or more.
     */
    askPrice?: Coin;
    /**
     * disable_auto_retire disables auto-retirement of credits which allows a
     * buyer to disable auto-retirement in their buy order enabling them to
     * resell the credits to another buyer.
     */
    disableAutoRetire: boolean;
    /**
     * expiration is an optional timestamp when the sell order expires. When the
     * expiration time is reached, the sell order is removed from state.
     */
    expiration?: Date;
}
export interface MsgSell_OrderProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.Order";
    value: Uint8Array;
}
/** Order is the content of a new sell order. */
export interface MsgSell_OrderAmino {
    /** batch_denom is the credit batch being sold. */
    batch_denom?: string;
    /**
     * quantity is the quantity of credits being sold from this batch. If it is
     * less then the balance of credits the owner has available at the time this
     * sell order is matched, the quantity will be adjusted downwards to the
     * owner's balance. However, if the balance of credits is less than this
     * quantity at the time the sell order is created, the operation will fail.
     */
    quantity?: string;
    /**
     * ask_price is the price the seller is asking for each unit of the
     * batch_denom. Each credit unit of the batch will be sold for at least the
     * ask_price or more.
     */
    ask_price?: CoinAmino;
    /**
     * disable_auto_retire disables auto-retirement of credits which allows a
     * buyer to disable auto-retirement in their buy order enabling them to
     * resell the credits to another buyer.
     */
    disable_auto_retire?: boolean;
    /**
     * expiration is an optional timestamp when the sell order expires. When the
     * expiration time is reached, the sell order is removed from state.
     */
    expiration?: string;
}
export interface MsgSell_OrderAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.Order";
    value: MsgSell_OrderAmino;
}
/** Order is the content of a new sell order. */
export interface MsgSell_OrderSDKType {
    batch_denom: string;
    quantity: string;
    ask_price?: CoinSDKType;
    disable_auto_retire: boolean;
    expiration?: Date;
}
/** MsgSellResponse is the Msg/Sell response type. */
export interface MsgSellResponse {
    /** sell_order_ids are the sell order IDs of the newly created sell orders. */
    sellOrderIds: bigint[];
}
export interface MsgSellResponseProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgSellResponse";
    value: Uint8Array;
}
/** MsgSellResponse is the Msg/Sell response type. */
export interface MsgSellResponseAmino {
    /** sell_order_ids are the sell order IDs of the newly created sell orders. */
    sell_order_ids?: string[];
}
export interface MsgSellResponseAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgSellResponse";
    value: MsgSellResponseAmino;
}
/** MsgSellResponse is the Msg/Sell response type. */
export interface MsgSellResponseSDKType {
    sell_order_ids: bigint[];
}
/** MsgUpdateSellOrders is the Msg/UpdateSellOrders request type. */
export interface MsgUpdateSellOrders {
    /** owner is the owner of the sell orders. */
    owner: string;
    /** updates are updates to existing sell orders. */
    updates: MsgUpdateSellOrders_Update[];
}
export interface MsgUpdateSellOrdersProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders";
    value: Uint8Array;
}
/** MsgUpdateSellOrders is the Msg/UpdateSellOrders request type. */
export interface MsgUpdateSellOrdersAmino {
    /** owner is the owner of the sell orders. */
    owner?: string;
    /** updates are updates to existing sell orders. */
    updates?: MsgUpdateSellOrders_UpdateAmino[];
}
export interface MsgUpdateSellOrdersAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrders";
    value: MsgUpdateSellOrdersAmino;
}
/** MsgUpdateSellOrders is the Msg/UpdateSellOrders request type. */
export interface MsgUpdateSellOrdersSDKType {
    owner: string;
    updates: MsgUpdateSellOrders_UpdateSDKType[];
}
/** Update is an update to an existing sell order. */
export interface MsgUpdateSellOrders_Update {
    /** sell_order_id is the ID of an existing sell order. */
    sellOrderId: bigint;
    /**
     * new_quantity is the updated quantity of credits available to sell, if it
     * is set to zero then the order is cancelled.
     */
    newQuantity: string;
    /** new_ask_price is the new ask price for this sell order */
    newAskPrice?: Coin;
    /**
     * disable_auto_retire updates the disable_auto_retire field in the sell
     * order.
     */
    disableAutoRetire: boolean;
    /**
     * new_expiration is an optional timestamp when the sell order expires. When
     * the expiration time is reached, the sell order is removed from state.
     */
    newExpiration?: Date;
}
export interface MsgUpdateSellOrders_UpdateProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.Update";
    value: Uint8Array;
}
/** Update is an update to an existing sell order. */
export interface MsgUpdateSellOrders_UpdateAmino {
    /** sell_order_id is the ID of an existing sell order. */
    sell_order_id?: string;
    /**
     * new_quantity is the updated quantity of credits available to sell, if it
     * is set to zero then the order is cancelled.
     */
    new_quantity?: string;
    /** new_ask_price is the new ask price for this sell order */
    new_ask_price?: CoinAmino;
    /**
     * disable_auto_retire updates the disable_auto_retire field in the sell
     * order.
     */
    disable_auto_retire?: boolean;
    /**
     * new_expiration is an optional timestamp when the sell order expires. When
     * the expiration time is reached, the sell order is removed from state.
     */
    new_expiration?: string;
}
export interface MsgUpdateSellOrders_UpdateAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.Update";
    value: MsgUpdateSellOrders_UpdateAmino;
}
/** Update is an update to an existing sell order. */
export interface MsgUpdateSellOrders_UpdateSDKType {
    sell_order_id: bigint;
    new_quantity: string;
    new_ask_price?: CoinSDKType;
    disable_auto_retire: boolean;
    new_expiration?: Date;
}
/** MsgUpdateSellOrdersResponse is the Msg/UpdateSellOrders response type. */
export interface MsgUpdateSellOrdersResponse {
}
export interface MsgUpdateSellOrdersResponseProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrdersResponse";
    value: Uint8Array;
}
/** MsgUpdateSellOrdersResponse is the Msg/UpdateSellOrders response type. */
export interface MsgUpdateSellOrdersResponseAmino {
}
export interface MsgUpdateSellOrdersResponseAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgUpdateSellOrdersResponse";
    value: MsgUpdateSellOrdersResponseAmino;
}
/** MsgUpdateSellOrdersResponse is the Msg/UpdateSellOrders response type. */
export interface MsgUpdateSellOrdersResponseSDKType {
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder request type. */
export interface MsgCancelSellOrder {
    /** seller is the address of the seller. */
    seller: string;
    /** sell_order_id is the id of the seller order to cancel. */
    sellOrderId: bigint;
}
export interface MsgCancelSellOrderProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder";
    value: Uint8Array;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder request type. */
export interface MsgCancelSellOrderAmino {
    /** seller is the address of the seller. */
    seller?: string;
    /** sell_order_id is the id of the seller order to cancel. */
    sell_order_id?: string;
}
export interface MsgCancelSellOrderAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrder";
    value: MsgCancelSellOrderAmino;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder request type. */
export interface MsgCancelSellOrderSDKType {
    seller: string;
    sell_order_id: bigint;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder response type. */
export interface MsgCancelSellOrderResponse {
}
export interface MsgCancelSellOrderResponseProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrderResponse";
    value: Uint8Array;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder response type. */
export interface MsgCancelSellOrderResponseAmino {
}
export interface MsgCancelSellOrderResponseAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgCancelSellOrderResponse";
    value: MsgCancelSellOrderResponseAmino;
}
/** MsgCancelSellOrder is the Msg/CancelSellOrder response type. */
export interface MsgCancelSellOrderResponseSDKType {
}
/** MsgBuyDirect is the Msg/BuyDirect request type. */
export interface MsgBuyDirect {
    /** buyer is the address of the credit buyer. */
    buyer: string;
    /** orders is a list of orders for ecocredits. */
    orders: MsgBuyDirect_Order[];
}
export interface MsgBuyDirectProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirect";
    value: Uint8Array;
}
/** MsgBuyDirect is the Msg/BuyDirect request type. */
export interface MsgBuyDirectAmino {
    /** buyer is the address of the credit buyer. */
    buyer?: string;
    /** orders is a list of orders for ecocredits. */
    orders?: MsgBuyDirect_OrderAmino[];
}
export interface MsgBuyDirectAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgBuyDirect";
    value: MsgBuyDirectAmino;
}
/** MsgBuyDirect is the Msg/BuyDirect request type. */
export interface MsgBuyDirectSDKType {
    buyer: string;
    orders: MsgBuyDirect_OrderSDKType[];
}
/** Order contains the information needed to purchase an ecocredit. */
export interface MsgBuyDirect_Order {
    /**
     * sell_order_id is the sell order ID against which the buyer is trying
     * to buy.
     */
    sellOrderId: bigint;
    /** quantity is the quantity of credits to buy. */
    quantity: string;
    /** bid_price is the price the buyer is willing to pay per credit. */
    bidPrice?: Coin;
    /**
     * disable_auto_retire allows auto-retirement to be disabled. If it is set
     * to true the credits will not auto-retire and can be resold assuming that
     * the corresponding sell order has auto-retirement disabled. If the sell
     * order hasn't disabled auto-retirement and the buy order tries to disable
     * it, that buy order will fail.
     */
    disableAutoRetire: boolean;
    /**
     * retirement_jurisdiction is the optional retirement jurisdiction for the
     * credits which will be used only if disable_auto_retire is false.
     */
    retirementJurisdiction: string;
}
export interface MsgBuyDirect_OrderProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.Order";
    value: Uint8Array;
}
/** Order contains the information needed to purchase an ecocredit. */
export interface MsgBuyDirect_OrderAmino {
    /**
     * sell_order_id is the sell order ID against which the buyer is trying
     * to buy.
     */
    sell_order_id?: string;
    /** quantity is the quantity of credits to buy. */
    quantity?: string;
    /** bid_price is the price the buyer is willing to pay per credit. */
    bid_price?: CoinAmino;
    /**
     * disable_auto_retire allows auto-retirement to be disabled. If it is set
     * to true the credits will not auto-retire and can be resold assuming that
     * the corresponding sell order has auto-retirement disabled. If the sell
     * order hasn't disabled auto-retirement and the buy order tries to disable
     * it, that buy order will fail.
     */
    disable_auto_retire?: boolean;
    /**
     * retirement_jurisdiction is the optional retirement jurisdiction for the
     * credits which will be used only if disable_auto_retire is false.
     */
    retirement_jurisdiction?: string;
}
export interface MsgBuyDirect_OrderAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.Order";
    value: MsgBuyDirect_OrderAmino;
}
/** Order contains the information needed to purchase an ecocredit. */
export interface MsgBuyDirect_OrderSDKType {
    sell_order_id: bigint;
    quantity: string;
    bid_price?: CoinSDKType;
    disable_auto_retire: boolean;
    retirement_jurisdiction: string;
}
/** MsgBuyDirectResponse is the Msg/BuyDirect response type. */
export interface MsgBuyDirectResponse {
}
export interface MsgBuyDirectResponseProtoMsg {
    typeUrl: "/regen.ecocredit.marketplace.v1.MsgBuyDirectResponse";
    value: Uint8Array;
}
/** MsgBuyDirectResponse is the Msg/BuyDirect response type. */
export interface MsgBuyDirectResponseAmino {
}
export interface MsgBuyDirectResponseAminoMsg {
    type: "/regen.ecocredit.marketplace.v1.MsgBuyDirectResponse";
    value: MsgBuyDirectResponseAmino;
}
/** MsgBuyDirectResponse is the Msg/BuyDirect response type. */
export interface MsgBuyDirectResponseSDKType {
}
export declare const MsgSell: {
    typeUrl: string;
    encode(message: MsgSell, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSell;
    fromPartial(object: Partial<MsgSell>): MsgSell;
    fromAmino(object: MsgSellAmino): MsgSell;
    toAmino(message: MsgSell): MsgSellAmino;
    fromAminoMsg(object: MsgSellAminoMsg): MsgSell;
    fromProtoMsg(message: MsgSellProtoMsg): MsgSell;
    toProto(message: MsgSell): Uint8Array;
    toProtoMsg(message: MsgSell): MsgSellProtoMsg;
};
export declare const MsgSell_Order: {
    typeUrl: string;
    encode(message: MsgSell_Order, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSell_Order;
    fromPartial(object: Partial<MsgSell_Order>): MsgSell_Order;
    fromAmino(object: MsgSell_OrderAmino): MsgSell_Order;
    toAmino(message: MsgSell_Order): MsgSell_OrderAmino;
    fromAminoMsg(object: MsgSell_OrderAminoMsg): MsgSell_Order;
    fromProtoMsg(message: MsgSell_OrderProtoMsg): MsgSell_Order;
    toProto(message: MsgSell_Order): Uint8Array;
    toProtoMsg(message: MsgSell_Order): MsgSell_OrderProtoMsg;
};
export declare const MsgSellResponse: {
    typeUrl: string;
    encode(message: MsgSellResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSellResponse;
    fromPartial(object: Partial<MsgSellResponse>): MsgSellResponse;
    fromAmino(object: MsgSellResponseAmino): MsgSellResponse;
    toAmino(message: MsgSellResponse): MsgSellResponseAmino;
    fromAminoMsg(object: MsgSellResponseAminoMsg): MsgSellResponse;
    fromProtoMsg(message: MsgSellResponseProtoMsg): MsgSellResponse;
    toProto(message: MsgSellResponse): Uint8Array;
    toProtoMsg(message: MsgSellResponse): MsgSellResponseProtoMsg;
};
export declare const MsgUpdateSellOrders: {
    typeUrl: string;
    encode(message: MsgUpdateSellOrders, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSellOrders;
    fromPartial(object: Partial<MsgUpdateSellOrders>): MsgUpdateSellOrders;
    fromAmino(object: MsgUpdateSellOrdersAmino): MsgUpdateSellOrders;
    toAmino(message: MsgUpdateSellOrders): MsgUpdateSellOrdersAmino;
    fromAminoMsg(object: MsgUpdateSellOrdersAminoMsg): MsgUpdateSellOrders;
    fromProtoMsg(message: MsgUpdateSellOrdersProtoMsg): MsgUpdateSellOrders;
    toProto(message: MsgUpdateSellOrders): Uint8Array;
    toProtoMsg(message: MsgUpdateSellOrders): MsgUpdateSellOrdersProtoMsg;
};
export declare const MsgUpdateSellOrders_Update: {
    typeUrl: string;
    encode(message: MsgUpdateSellOrders_Update, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSellOrders_Update;
    fromPartial(object: Partial<MsgUpdateSellOrders_Update>): MsgUpdateSellOrders_Update;
    fromAmino(object: MsgUpdateSellOrders_UpdateAmino): MsgUpdateSellOrders_Update;
    toAmino(message: MsgUpdateSellOrders_Update): MsgUpdateSellOrders_UpdateAmino;
    fromAminoMsg(object: MsgUpdateSellOrders_UpdateAminoMsg): MsgUpdateSellOrders_Update;
    fromProtoMsg(message: MsgUpdateSellOrders_UpdateProtoMsg): MsgUpdateSellOrders_Update;
    toProto(message: MsgUpdateSellOrders_Update): Uint8Array;
    toProtoMsg(message: MsgUpdateSellOrders_Update): MsgUpdateSellOrders_UpdateProtoMsg;
};
export declare const MsgUpdateSellOrdersResponse: {
    typeUrl: string;
    encode(_: MsgUpdateSellOrdersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateSellOrdersResponse;
    fromPartial(_: Partial<MsgUpdateSellOrdersResponse>): MsgUpdateSellOrdersResponse;
    fromAmino(_: MsgUpdateSellOrdersResponseAmino): MsgUpdateSellOrdersResponse;
    toAmino(_: MsgUpdateSellOrdersResponse): MsgUpdateSellOrdersResponseAmino;
    fromAminoMsg(object: MsgUpdateSellOrdersResponseAminoMsg): MsgUpdateSellOrdersResponse;
    fromProtoMsg(message: MsgUpdateSellOrdersResponseProtoMsg): MsgUpdateSellOrdersResponse;
    toProto(message: MsgUpdateSellOrdersResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateSellOrdersResponse): MsgUpdateSellOrdersResponseProtoMsg;
};
export declare const MsgCancelSellOrder: {
    typeUrl: string;
    encode(message: MsgCancelSellOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSellOrder;
    fromPartial(object: Partial<MsgCancelSellOrder>): MsgCancelSellOrder;
    fromAmino(object: MsgCancelSellOrderAmino): MsgCancelSellOrder;
    toAmino(message: MsgCancelSellOrder): MsgCancelSellOrderAmino;
    fromAminoMsg(object: MsgCancelSellOrderAminoMsg): MsgCancelSellOrder;
    fromProtoMsg(message: MsgCancelSellOrderProtoMsg): MsgCancelSellOrder;
    toProto(message: MsgCancelSellOrder): Uint8Array;
    toProtoMsg(message: MsgCancelSellOrder): MsgCancelSellOrderProtoMsg;
};
export declare const MsgCancelSellOrderResponse: {
    typeUrl: string;
    encode(_: MsgCancelSellOrderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelSellOrderResponse;
    fromPartial(_: Partial<MsgCancelSellOrderResponse>): MsgCancelSellOrderResponse;
    fromAmino(_: MsgCancelSellOrderResponseAmino): MsgCancelSellOrderResponse;
    toAmino(_: MsgCancelSellOrderResponse): MsgCancelSellOrderResponseAmino;
    fromAminoMsg(object: MsgCancelSellOrderResponseAminoMsg): MsgCancelSellOrderResponse;
    fromProtoMsg(message: MsgCancelSellOrderResponseProtoMsg): MsgCancelSellOrderResponse;
    toProto(message: MsgCancelSellOrderResponse): Uint8Array;
    toProtoMsg(message: MsgCancelSellOrderResponse): MsgCancelSellOrderResponseProtoMsg;
};
export declare const MsgBuyDirect: {
    typeUrl: string;
    encode(message: MsgBuyDirect, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyDirect;
    fromPartial(object: Partial<MsgBuyDirect>): MsgBuyDirect;
    fromAmino(object: MsgBuyDirectAmino): MsgBuyDirect;
    toAmino(message: MsgBuyDirect): MsgBuyDirectAmino;
    fromAminoMsg(object: MsgBuyDirectAminoMsg): MsgBuyDirect;
    fromProtoMsg(message: MsgBuyDirectProtoMsg): MsgBuyDirect;
    toProto(message: MsgBuyDirect): Uint8Array;
    toProtoMsg(message: MsgBuyDirect): MsgBuyDirectProtoMsg;
};
export declare const MsgBuyDirect_Order: {
    typeUrl: string;
    encode(message: MsgBuyDirect_Order, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyDirect_Order;
    fromPartial(object: Partial<MsgBuyDirect_Order>): MsgBuyDirect_Order;
    fromAmino(object: MsgBuyDirect_OrderAmino): MsgBuyDirect_Order;
    toAmino(message: MsgBuyDirect_Order): MsgBuyDirect_OrderAmino;
    fromAminoMsg(object: MsgBuyDirect_OrderAminoMsg): MsgBuyDirect_Order;
    fromProtoMsg(message: MsgBuyDirect_OrderProtoMsg): MsgBuyDirect_Order;
    toProto(message: MsgBuyDirect_Order): Uint8Array;
    toProtoMsg(message: MsgBuyDirect_Order): MsgBuyDirect_OrderProtoMsg;
};
export declare const MsgBuyDirectResponse: {
    typeUrl: string;
    encode(_: MsgBuyDirectResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBuyDirectResponse;
    fromPartial(_: Partial<MsgBuyDirectResponse>): MsgBuyDirectResponse;
    fromAmino(_: MsgBuyDirectResponseAmino): MsgBuyDirectResponse;
    toAmino(_: MsgBuyDirectResponse): MsgBuyDirectResponseAmino;
    fromAminoMsg(object: MsgBuyDirectResponseAminoMsg): MsgBuyDirectResponse;
    fromProtoMsg(message: MsgBuyDirectResponseProtoMsg): MsgBuyDirectResponse;
    toProto(message: MsgBuyDirectResponse): Uint8Array;
    toProtoMsg(message: MsgBuyDirectResponse): MsgBuyDirectResponseProtoMsg;
};
