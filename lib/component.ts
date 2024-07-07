import type { ComponentConfig } from "./config";
import type { Field } from "./environment";
import type { EventEmitter } from "./event";
import type { Fetch } from "./fetch";

export abstract class Component<C extends ComponentConfig> {
  readonly mrdamianPluginRevision: number = 0;
  private readonly emitter: EventEmitter;
  constructor(emitter: EventEmitter) {
    this.emitter = emitter;
  }

  emit(event: Field) {
    this.emitter.emit(event);
  }

  // fetch is used to define this component's http endpoints.
  async fetch(): Promise<Fetch | undefined> {
    return undefined;
  }

  // initialize is called when pipeline is constructing.
  async initialize(_config: C): Promise<void> {}
  // start is called when pipeline is starting.
  async start(_config: C): Promise<void> {}
  // process is called when pipeline event has come.
  abstract process(config: C): Promise<Field>;
  // stop is called when pipeline is stopping.
  async stop(_config: C): Promise<void> {}
  // finalize is called when pipeline is reconstructing.
  async finalize(_config: C): Promise<void> {}
}
