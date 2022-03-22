var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_eddbeae8 = require("../../chunks/index-eddbeae8.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".red.svelte-1wj5erj{color:red}",
  map: null
};
const Routes = (0, import_index_eddbeae8.c)(($$result, $$props, $$bindings, slots) => {
  let time = "not yet defined";
  $$result.css.add(css);
  return `<h1 class="${"red svelte-1wj5erj"}">Welcome to SvelteKit</h1>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>

<hr>
<h2 class="${"red svelte-1wj5erj"}">Time is: ${(0, import_index_eddbeae8.e)(time)}</h2>
<hr>
<p>This was a change that Shaye made</p>`;
});
