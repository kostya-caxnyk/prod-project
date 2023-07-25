import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

const buildResolver = (options: BuildOptions): ResolveOptions => ({
  extensions: [".tsx", ".ts", ".js"],
  preferAbsolute: true,
  modules: [options.paths.src, "node_modules"],
  mainFiles: ["index"],
  alias: {},
});

export default buildResolver;
