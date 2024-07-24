import type { ComponentConfig } from "./config";
import type { Field } from "./environment";
import type { EventEmitter } from "./event";
import type { Fetch } from "./fetch";

export interface Component<C extends ComponentConfig> {
  // fetch is used to define this component's http endpoints.
  // if you didn't write this function in your component, it will be generated automatically.
  fetch?(): Promise<Fetch>;

  // initialize is called when pipeline is constructing.
  // if you didn't write this function in your component, it will be generated automatically.
  initialize?(_config: C, _emitter: EventEmitter): Promise<void>;
  // start is called when pipeline is starting.
  // if you didn't write this function in your component, it will be generated automatically.
  start?(_config: C, _emitter: EventEmitter): Promise<void>;
  // process is called when pipeline event has come.
  // if you didn't write this function in your component, it will be generated automatically.
  process?(config: C, _emitter: EventEmitter): Promise<Field>;
  // stop is called when pipeline is stopping.
  // if you didn't write this function in your component, it will be generated automatically.
  stop?(_config: C, _emitter: EventEmitter): Promise<void>;
  // finalize is called when pipeline is reconstructing.
  // if you didn't write this function in your component, it will be generated automatically.
  finalize?(_config: C, _emitter: EventEmitter): Promise<void>;
}