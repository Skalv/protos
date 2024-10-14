//@ts-nocheck
import * as _300 from "./halving/v1beta1/genesis";
import * as _301 from "./halving/v1beta1/halving";
import * as _302 from "./halving/v1beta1/query";
import * as _553 from "./halving/v1beta1/query.rpc.Query";
import * as _620 from "./rpc.query";
export namespace persistence {
  export namespace halving {
    export const v1beta1 = {
      ..._300,
      ..._301,
      ..._302,
      ..._553
    };
  }
  export const ClientFactory = {
    ..._620
  };
}