import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSell, MsgUpdateSellOrders, MsgCancelSellOrder, MsgBuyDirect } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        sell(value: MsgSell): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateSellOrders(value: MsgUpdateSellOrders): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelSellOrder(value: MsgCancelSellOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        buyDirect(value: MsgBuyDirect): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        sell(value: MsgSell): {
            typeUrl: string;
            value: MsgSell;
        };
        updateSellOrders(value: MsgUpdateSellOrders): {
            typeUrl: string;
            value: MsgUpdateSellOrders;
        };
        cancelSellOrder(value: MsgCancelSellOrder): {
            typeUrl: string;
            value: MsgCancelSellOrder;
        };
        buyDirect(value: MsgBuyDirect): {
            typeUrl: string;
            value: MsgBuyDirect;
        };
    };
    fromPartial: {
        sell(value: MsgSell): {
            typeUrl: string;
            value: MsgSell;
        };
        updateSellOrders(value: MsgUpdateSellOrders): {
            typeUrl: string;
            value: MsgUpdateSellOrders;
        };
        cancelSellOrder(value: MsgCancelSellOrder): {
            typeUrl: string;
            value: MsgCancelSellOrder;
        };
        buyDirect(value: MsgBuyDirect): {
            typeUrl: string;
            value: MsgBuyDirect;
        };
    };
};
