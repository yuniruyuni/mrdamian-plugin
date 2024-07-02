import type { Field } from "./environment";

export interface EventEmitter {
  emit(event: Field): void;
}
