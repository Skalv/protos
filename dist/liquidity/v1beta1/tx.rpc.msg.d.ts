import { Rpc } from "../../helpers";
import { MsgCreatePool, MsgCreatePoolResponse, MsgDepositWithinBatch, MsgDepositWithinBatchResponse, MsgWithdrawWithinBatch, MsgWithdrawWithinBatchResponse, MsgSwapWithinBatch, MsgSwapWithinBatchResponse, MsgDirectSwap, MsgDirectSwapResponse } from "./tx";
/** Msg defines the liquidity Msg service. */
export interface Msg {
    /** Submit a create liquidity pool message. */
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    /** Submit a deposit to the liquidity pool batch. */
    depositWithinBatch(request: MsgDepositWithinBatch): Promise<MsgDepositWithinBatchResponse>;
    /** Submit a withdraw from the liquidity pool batch. */
    withdrawWithinBatch(request: MsgWithdrawWithinBatch): Promise<MsgWithdrawWithinBatchResponse>;
    /** Submit a swap to the liquidity pool batch. */
    swap(request: MsgSwapWithinBatch): Promise<MsgSwapWithinBatchResponse>;
    directSwap(request: MsgDirectSwap): Promise<MsgDirectSwapResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createPool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    depositWithinBatch(request: MsgDepositWithinBatch): Promise<MsgDepositWithinBatchResponse>;
    withdrawWithinBatch(request: MsgWithdrawWithinBatch): Promise<MsgWithdrawWithinBatchResponse>;
    swap(request: MsgSwapWithinBatch): Promise<MsgSwapWithinBatchResponse>;
    directSwap(request: MsgDirectSwap): Promise<MsgDirectSwapResponse>;
}
