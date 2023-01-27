Deno.run({
  cmd: ["sudo", "apt-get", "install", "p7zip"],
});
Deno.run({
  cmd: ["p7zip", "-d", "-f", "RetroArch.7z"],
});
await Deno.remove("RetroArch.7z");
