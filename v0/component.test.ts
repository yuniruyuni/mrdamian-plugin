import { describe, expect, it } from "bun:test";
import { Component, type ComponentConfig } from "./component";
import type { Field } from "./environment";

type DummyConfig = ComponentConfig;

class Dummy extends Component<DummyConfig> {
  async process(_config: DummyConfig): Promise<Field> {
    return "dummy-process";
  }
}

class DummyEmitter {
  events: Field[] = [];
  emit(event: Field) {
    this.events.push(event);
  }
}

describe("Component", () => {
  it("can emit event", async () => {
    const emitter = new DummyEmitter();
    const dummy = new Dummy(emitter);
    dummy.emit("abc");

    expect(await emitter.events).toEqual(["abc"]);
  });
});
