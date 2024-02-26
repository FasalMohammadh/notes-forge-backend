import { createYoga } from "graphql-yoga";

import schema from "./../schema/index.js";

const yoga = createYoga({ schema });

export default yoga;
