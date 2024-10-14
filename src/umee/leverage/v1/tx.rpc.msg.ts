//@ts-nocheck
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.supply = this.supply.bind(this);
    this.withdraw = this.withdraw.bind(this);
    this.collateralize = this.collateralize.bind(this);
    this.decollateralize = this.decollateralize.bind(this);
    this.borrow = this.borrow.bind(this);
    this.repay = this.repay.bind(this);
    this.liquidate = this.liquidate.bind(this);
  }
  supply(request: MsgSupply): Promise<MsgSupplyResponse> {
    const data = MsgSupply.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Supply", data);
    return promise.then(data => MsgSupplyResponse.decode(new BinaryReader(data)));
  }
  withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Withdraw", data);
    return promise.then(data => MsgWithdrawResponse.decode(new BinaryReader(data)));
  }
  collateralize(request: MsgCollateralize): Promise<MsgCollateralizeResponse> {
    const data = MsgCollateralize.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Collateralize", data);
    return promise.then(data => MsgCollateralizeResponse.decode(new BinaryReader(data)));
  }
  decollateralize(request: MsgDecollateralize): Promise<MsgDecollateralizeResponse> {
    const data = MsgDecollateralize.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Decollateralize", data);
    return promise.then(data => MsgDecollateralizeResponse.decode(new BinaryReader(data)));
  }
  borrow(request: MsgBorrow): Promise<MsgBorrowResponse> {
    const data = MsgBorrow.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Borrow", data);
    return promise.then(data => MsgBorrowResponse.decode(new BinaryReader(data)));
  }
  repay(request: MsgRepay): Promise<MsgRepayResponse> {
    const data = MsgRepay.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Repay", data);
    return promise.then(data => MsgRepayResponse.decode(new BinaryReader(data)));
  }
  liquidate(request: MsgLiquidate): Promise<MsgLiquidateResponse> {
    const data = MsgLiquidate.encode(request).finish();
    const promise = this.rpc.request("umee.leverage.v1.Msg", "Liquidate", data);
    return promise.then(data => MsgLiquidateResponse.decode(new BinaryReader(data)));
  }
}