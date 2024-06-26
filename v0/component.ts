import type { ComponentConfig } from "./config";
import type { Field } from "./environment";
import type { EventEmitter } from "./event";
import type { Fetch } from "./fetch";

export abstract class Component<C extends ComponentConfig> {
  private readonly emitter: EventEmitter;
  constructor(emitter: EventEmitter) {
    this.emitter = emitter;
  }

  emit(event: Field) {
    this.emitter.emit(event);
  }

  async initialize(_config: C): Promise<void> {}
  abstract process(config: C): Promise<Field>;
  async finalize(_config: C): Promise<void> {}

  get fetch(): Fetch {
    return (_req: Request): Response | Promise<Response> => {
      return new Response("No configuration", {
        status: 200,
        headers: { "Content-Type": "text/html" },
      });
    };
  }
}
