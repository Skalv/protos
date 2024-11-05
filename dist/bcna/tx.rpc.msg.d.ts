import { Rpc } from "../helpers";
import { MsgCreateBitcannaid, MsgCreateBitcannaidResponse, MsgUpdateBitcannaid, MsgUpdateBitcannaidResponse, MsgDeleteBitcannaid, MsgDeleteBitcannaidResponse, MsgCreateSupplychain, MsgCreateSupplychainResponse, MsgUpdateSupplychain, MsgUpdateSupplychainResponse, MsgDeleteSupplychain, MsgDeleteSupplychainResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    createBitcannaid(request: MsgCreateBitcannaid): Promise<MsgCreateBitcannaidResponse>;
    updateBitcannaid(request: MsgUpdateBitcannaid): Promise<MsgUpdateBitcannaidResponse>;
    deleteBitcannaid(request: MsgDeleteBitcannaid): Promise<MsgDeleteBitcannaidResponse>;
    createSupplychain(request: MsgCreateSupplychain): Promise<MsgCreateSupplychainResponse>;
    updateSupplychain(request: MsgUpdateSupplychain): Promise<MsgUpdateSupplychainResponse>;
    deleteSupplychain(request: MsgDeleteSupplychain): Promise<MsgDeleteSupplychainResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createBitcannaid(request: MsgCreateBitcannaid): Promise<MsgCreateBitcannaidResponse>;
    updateBitcannaid(request: MsgUpdateBitcannaid): Promise<MsgUpdateBitcannaidResponse>;
    deleteBitcannaid(request: MsgDeleteBitcannaid): Promise<MsgDeleteBitcannaidResponse>;
    createSupplychain(request: MsgCreateSupplychain): Promise<MsgCreateSupplychainResponse>;
    updateSupplychain(request: MsgUpdateSupplychain): Promise<MsgUpdateSupplychainResponse>;
    deleteSupplychain(request: MsgDeleteSupplychain): Promise<MsgDeleteSupplychainResponse>;
}
