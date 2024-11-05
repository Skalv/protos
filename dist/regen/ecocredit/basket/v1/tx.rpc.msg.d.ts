import { Rpc } from "../../../../helpers";
import { MsgCreate, MsgCreateResponse, MsgPut, MsgPutResponse, MsgTake, MsgTakeResponse } from "./tx";
/** Msg is the regen.ecocredit.basket.v1 Msg service. */
export interface Msg {
    /** Create creates a bank denom which wraps credits. */
    create(request: MsgCreate): Promise<MsgCreateResponse>;
    /** Put puts credits into a basket in return for basket tokens. */
    put(request: MsgPut): Promise<MsgPutResponse>;
    /**
     * Take takes credits from a basket starting from the oldest
     * credits first.
     */
    take(request: MsgTake): Promise<MsgTakeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    create(request: MsgCreate): Promise<MsgCreateResponse>;
    put(request: MsgPut): Promise<MsgPutResponse>;
    take(request: MsgTake): Promise<MsgTakeResponse>;
}
