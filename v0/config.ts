import type { Environment } from "./environment";

export type ComponentConfig = {
  // "type" field is a component type.
  type: string;
  // "name" field is a unique identifier for component instance.
  // this name will be used for assigning result to environment.
  // for example, if a component specified type = "twitch", name = "main",
  // the result value of the component will be assigned to "twitch.main".
  // it means, { "twitch": { "main": ... } } will be merged into current environment.
  name?: string;
  // "when" field is an expression for conditional execution.
  // this expression don't need define with "$" prefix.
  when?: string;
  // "args" field is a list of arguments for component.
  args?: Environment;
};
