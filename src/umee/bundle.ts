//@ts-nocheck
import * as _362 from "./leverage/v1/events";
import * as _363 from "./leverage/v1/genesis";
import * as _364 from "./leverage/v1/gov";
import * as _365 from "./leverage/v1/leverage";
import * as _366 from "./leverage/v1/query";
import * as _367 from "./leverage/v1/tx";
import * as _368 from "./oracle/v1/events";
import * as _369 from "./oracle/v1/genesis";
import * as _370 from "./oracle/v1/oracle";
import * as _371 from "./oracle/v1/query";
import * as _372 from "./oracle/v1/tx";
import * as _591 from "./leverage/v1/tx.amino";
import * as _592 from "./oracle/v1/tx.amino";
import * as _593 from "./leverage/v1/tx.registry";
import * as _594 from "./oracle/v1/tx.registry";
import * as _595 from "./leverage/v1/query.rpc.Query";
import * as _596 from "./oracle/v1/query.rpc.Query";
import * as _597 from "./leverage/v1/tx.rpc.msg";
import * as _598 from "./oracle/v1/tx.rpc.msg";
import * as _626 from "./rpc.query";
import * as _627 from "./rpc.tx";
export namespace umee {
  export namespace leverage {
    export const v1 = {
      ..._362,
      ..._363,
      ..._364,
      ..._365,
      ..._366,
      ..._367,
      ..._591,
      ..._593,
      ..._595,
      ..._597
    };
  }
  export namespace oracle {
    export const v1 = {
      ..._368,
      ..._369,
      ..._370,
      ..._371,
      ..._372,
      ..._592,
      ..._594,
      ..._596,
      ..._598
    };
  }
  export const ClientFactory = {
    ..._626,
    ..._627
  };
}