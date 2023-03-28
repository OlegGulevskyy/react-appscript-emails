import * as cp from "child_process";

export function runCmd({ cmd, cwd = "." }: { cmd: string; cwd?: string }) {
  console.log("Running cmd ->", cmd, " at: ", cwd);
  cp.execSync(cmd, {
    encoding: "utf-8",
    stdio: "inherit",
    cwd,
  });
}
