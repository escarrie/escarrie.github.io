/* eslint-disable */
// @ts-ignore
import { poems } from "../config/poems.ts";
import { emojify } from "node-emoji";

poems.forEach((poem) => {
    console.log("--------------------------\n\t" + poem.date + "\n--------------------------\n" + emojify(poem.content.replaceAll("\\n", "\n")) + "\n\n");
});
