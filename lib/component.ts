import type { ComponentConfig } from "./config";
import type { Field } from "./environment";
import type { EventEmitter } from "./event";
import type { Fetch } from "./fetch";

export abstract class Component<C extends ComponentConfig> {
  readonly mrdamianPluginRevision: number = 0;
  // fetch is used to define this component's http endpoints.
  async fetch(): Promise<Fetch | undefined> {
    return undefined;
  }

  // initialize is called when pipeline is constructing.
  async initialize(_config: C, _emitter: EventEmitter): Promise<void> {}
  // start is called when pipeline is starting.
  async start(_config: C, _emitter: EventEmitter): Promise<void> {}
  // process is called when pipeline event has come.
  abstract process(config: C, _emitter: EventEmitter): Promise<Field>;
  // stop is called when pipeline is stopping.
  async stop(_config: C, _emitter: EventEmitter): Promise<void> {}
  // finalize is called when pipeline is reconstructing.
  async finalize(_config: C, _emitter: EventEmitter): Promise<void> {}
}
