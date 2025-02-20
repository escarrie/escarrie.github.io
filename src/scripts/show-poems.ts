/* eslint-disable */
// @ts-ignore
import { poems } from "../config/poems.ts";

poems.forEach((poem) => {
    console.log("--------------------------\n\t" + poem.date + "\n--------------------------\n" + poem.content.replaceAll("\\n", "\n") + "\n\n");
});
