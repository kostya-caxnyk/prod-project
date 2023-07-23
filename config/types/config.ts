export type BuildMode = "development" | "production";

export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
};

export interface BuildEnv {
  port?: number;
  mode?: BuildMode;
}

export type BuildOptions = {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
};
