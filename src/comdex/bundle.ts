//@ts-nocheck
import * as _60 from "./asset/v1beta1/asset";
import * as _61 from "./asset/v1beta1/events";
import * as _62 from "./asset/v1beta1/genesis";
import * as _63 from "./asset/v1beta1/gov";
import * as _64 from "./asset/v1beta1/msg";
import * as _65 from "./asset/v1beta1/pair";
import * as _66 from "./asset/v1beta1/params";
import * as _67 from "./asset/v1beta1/querier";
import * as _68 from "./oracle/v1beta1/genesis";
import * as _69 from "./oracle/v1beta1/gov";
import * as _70 from "./oracle/v1beta1/msg";
import * as _71 from "./oracle/v1beta1/oracle";
import * as _72 from "./oracle/v1beta1/params";
import * as _73 from "./oracle/v1beta1/querier";
import * as _74 from "./vault/v1beta1/events";
import * as _75 from "./vault/v1beta1/genesis";
import * as _76 from "./vault/v1beta1/msg";
import * as _77 from "./vault/v1beta1/querier";
import * as _78 from "./vault/v1beta1/vault";
export namespace comdex {
  export namespace asset {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._66,
      ..._67
    };
  }
  export namespace oracle {
    export const v1beta1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73
    };
  }
  export namespace vault {
    export const v1beta1 = {
      ..._74,
      ..._75,
      ..._76,
      ..._77,
      ..._78
    };
  }
}