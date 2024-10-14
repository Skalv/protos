//@ts-nocheck
import * as _227 from "./alloc/v1beta1/genesis";
import * as _228 from "./alloc/v1beta1/params";
import * as _229 from "./alloc/v1beta1/query";
import * as _230 from "./alloc/v1beta1/tx";
import * as _502 from "./alloc/v1beta1/query.rpc.Query";
import * as _614 from "./rpc.query";
import * as _615 from "./rpc.tx";
export namespace omniflix {
  export namespace alloc {
    export const v1beta1 = {
      ..._227,
      ..._228,
      ..._229,
      ..._230,
      ..._502
    };
  }
  export const ClientFactory = {
    ..._614,
    ..._615
  };
}