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

  async fetch(_config: C): Promise<Fetch | undefined> {
    return undefined;
  }

  async initialize(_config: C): Promise<void> {}
  abstract process(config: C): Promise<Field>;
  async finalize(_config: C): Promise<void> {}
}
