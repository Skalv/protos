import { Rpc } from "../../../helpers";
import { MsgSupply, MsgSupplyResponse, MsgWithdraw, MsgWithdrawResponse, MsgCollateralize, MsgCollateralizeResponse, MsgDecollateralize, MsgDecollateralizeResponse, MsgBorrow, MsgBorrowResponse, MsgRepay, MsgRepayResponse, MsgLiquidate, MsgLiquidateResponse } from "./tx";
/** Msg defines the x/leverage module's Msg service. */
export interface Msg {
    /**
     * Supply moves tokens from user balance to the module for lending or collateral.
     * The user receives uTokens in return.
     */
    supply(request: MsgSupply): Promise<MsgSupplyResponse>;
    /**
     * Withdraw moves previously supplied tokens from the module back to the user balance in
     * exchange for burning uTokens.
     */
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    /** Collateralize enables selected uTokens as collateral, which moves them to the module. */
    collateralize(request: MsgCollateralize): Promise<MsgCollateralizeResponse>;
    /**
     * Decollateralize disables selected uTokens as collateral. They are returned to the user's
     * balance from the module.
     */
    decollateralize(request: MsgDecollateralize): Promise<MsgDecollateralizeResponse>;
    /** Borrow allows a user to borrow tokens from the module if they have sufficient collateral. */
    borrow(request: MsgBorrow): Promise<MsgBorrowResponse>;
    /** Repay allows a user to repay previously borrowed tokens and interest. */
    repay(request: MsgRepay): Promise<MsgRepayResponse>;
    /**
     * Liquidate allows a user to repay a different user's borrowed coins in exchange for some
     * of the target's collateral.
     */
    liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    supply(request: MsgSupply): Promise<MsgSupplyResponse>;
    withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
    collateralize(request: MsgCollateralize): Promise<MsgCollateralizeResponse>;
    decollateralize(request: MsgDecollateralize): Promise<MsgDecollateralizeResponse>;
    borrow(request: MsgBorrow): Promise<MsgBorrowResponse>;
    repay(request: MsgRepay): Promise<MsgRepayResponse>;
    liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse>;
}
