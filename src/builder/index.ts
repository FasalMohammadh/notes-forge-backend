import SchemaBuilder from "@pothos/core";

import type { Context } from "@/types/index.js";

const builder = new SchemaBuilder<{
  Context: Context;
}>({});

export default builder;
