//@ts-nocheck
import * as _156 from "./applications/transfer/v1/genesis";
import * as _157 from "./applications/transfer/v1/query";
import * as _158 from "./applications/transfer/v1/transfer";
import * as _159 from "./applications/transfer/v1/tx";
import * as _160 from "./applications/transfer/v2/packet";
import * as _161 from "./core/channel/v1/channel";
import * as _162 from "./core/channel/v1/genesis";
import * as _163 from "./core/channel/v1/query";
import * as _164 from "./core/channel/v1/tx";
import * as _165 from "./core/client/v1/client";
import * as _166 from "./core/client/v1/genesis";
import * as _167 from "./core/client/v1/query";
import * as _168 from "./core/client/v1/tx";
import * as _169 from "./core/commitment/v1/commitment";
import * as _170 from "./core/connection/v1/connection";
import * as _171 from "./core/connection/v1/genesis";
import * as _172 from "./core/connection/v1/query";
import * as _173 from "./core/connection/v1/tx";
import * as _174 from "./lightclients/localhost/v1/localhost";
import * as _175 from "./lightclients/solomachine/v1/solomachine";
import * as _176 from "./lightclients/solomachine/v2/solomachine";
import * as _177 from "./lightclients/tendermint/v1/tendermint";
import * as _456 from "./applications/transfer/v1/tx.amino";
import * as _457 from "./core/channel/v1/tx.amino";
import * as _458 from "./core/client/v1/tx.amino";
import * as _459 from "./core/connection/v1/tx.amino";
import * as _460 from "./applications/transfer/v1/tx.registry";
import * as _461 from "./core/channel/v1/tx.registry";
import * as _462 from "./core/client/v1/tx.registry";
import * as _463 from "./core/connection/v1/tx.registry";
import * as _464 from "./applications/transfer/v1/query.rpc.Query";
import * as _465 from "./core/channel/v1/query.rpc.Query";
import * as _466 from "./core/client/v1/query.rpc.Query";
import * as _467 from "./core/connection/v1/query.rpc.Query";
import * as _468 from "./applications/transfer/v1/tx.rpc.msg";
import * as _469 from "./core/channel/v1/tx.rpc.msg";
import * as _470 from "./core/client/v1/tx.rpc.msg";
import * as _471 from "./core/connection/v1/tx.rpc.msg";
import * as _607 from "./rpc.query";
import * as _608 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._156,
        ..._157,
        ..._158,
        ..._159,
        ..._456,
        ..._460,
        ..._464,
        ..._468
      };
      export const v2 = {
        ..._160
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._457,
        ..._461,
        ..._465,
        ..._469
      };
    }
    export namespace client {
      export const v1 = {
        ..._165,
        ..._166,
        ..._167,
        ..._168,
        ..._458,
        ..._462,
        ..._466,
        ..._470
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._169
      };
    }
    export namespace connection {
      export const v1 = {
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._459,
        ..._463,
        ..._467,
        ..._471
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._174
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._175
      };
      export const v2 = {
        ..._176
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._177
      };
    }
  }
  export const ClientFactory = {
    ..._607,
    ..._608
  };
}