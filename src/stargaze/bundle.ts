//@ts-nocheck
import * as _348 from "./mint/v1beta1/genesis";
import * as _349 from "./mint/v1beta1/mint";
import * as _350 from "./mint/v1beta1/query";
import * as _590 from "./mint/v1beta1/query.rpc.Query";
import * as _625 from "./rpc.query";
export namespace stargaze {
  export namespace mint {
    export const v1beta1 = {
      ..._348,
      ..._349,
      ..._350,
      ..._590
    };
  }
  export const ClientFactory = {
    ..._625
  };
}