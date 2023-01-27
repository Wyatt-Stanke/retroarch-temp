Deno.run({
  cmd: ["sudo", "apt-get", "install", "p7zip"],
});
Deno.run({
  cmd: ["p7zip", "-d", "-f", Deno.args[0]],
});
// await Deno.remove("RetroArch.7z");
