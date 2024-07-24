import { describe, expect, it } from "bun:test";
import { Component } from "./component";
import type { ComponentConfig } from "./config";
import type { Field } from "./environment";
import { Path } from "./event";

type DummyConfig = ComponentConfig;

class Dummy extends Component<DummyConfig> {
  async process(_config: DummyConfig): Promise<Field> {
    this.emit("abc", Path.local)
    return "dummy-process";
  }
}

class DummyEmitter {
  events: Field[] = [];
  emit(event: Field, _: Path = Path.local): void {
    this.events.push(event);
  }
}

describe("Component", () => {
  it("can emit event", async () => {
    const emitter = new DummyEmitter();
    const dummy = new Dummy(emitter);
    await dummy.process({} as DummyConfig);

    expect(await emitter.events).toEqual(["abc"]);
  });
});
