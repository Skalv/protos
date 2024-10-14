//@ts-nocheck
import * as _339 from "../stargaze/alloc/v1beta1/genesis";
import * as _340 from "../stargaze/alloc/v1beta1/params";
import * as _341 from "../stargaze/alloc/v1beta1/query";
import * as _342 from "../stargaze/alloc/v1beta1/tx";
import * as _343 from "../stargaze/claim/v1beta1/claim_record";
import * as _344 from "../stargaze/claim/v1beta1/genesis";
import * as _345 from "../stargaze/claim/v1beta1/params";
import * as _346 from "../stargaze/claim/v1beta1/query";
import * as _347 from "../stargaze/claim/v1beta1/tx";
import * as _582 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _583 from "../stargaze/claim/v1beta1/tx.amino";
import * as _584 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _585 from "../stargaze/claim/v1beta1/tx.registry";
import * as _586 from "../stargaze/alloc/v1beta1/query.rpc.Query";
import * as _587 from "../stargaze/claim/v1beta1/query.rpc.Query";
import * as _588 from "../stargaze/alloc/v1beta1/tx.rpc.msg";
import * as _589 from "../stargaze/claim/v1beta1/tx.rpc.msg";
import * as _623 from "./rpc.query";
import * as _624 from "./rpc.tx";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = {
        ..._339,
        ..._340,
        ..._341,
        ..._342,
        ..._582,
        ..._584,
        ..._586,
        ..._588
      };
    }
    export namespace claim {
      export const v1beta1 = {
        ..._343,
        ..._344,
        ..._345,
        ..._346,
        ..._347,
        ..._583,
        ..._585,
        ..._587,
        ..._589
      };
    }
  }
  export const ClientFactory = {
    ..._623,
    ..._624
  };
}