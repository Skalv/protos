//@ts-nocheck
import * as _223 from "./v1beta1/genesis";
import * as _224 from "./v1beta1/liquidity";
import * as _225 from "./v1beta1/query";
import * as _226 from "./v1beta1/tx";
import * as _498 from "./v1beta1/tx.amino";
import * as _499 from "./v1beta1/tx.registry";
import * as _500 from "./v1beta1/query.rpc.Query";
import * as _501 from "./v1beta1/tx.rpc.msg";
import * as _612 from "./rpc.query";
import * as _613 from "./rpc.tx";
export namespace liquidity {
  export const v1beta1 = {
    ..._223,
    ..._224,
    ..._225,
    ..._226,
    ..._498,
    ..._499,
    ..._500,
    ..._501
  };
  export const ClientFactory = {
    ..._612,
    ..._613
  };
}