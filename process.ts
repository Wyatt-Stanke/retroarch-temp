Deno.run({
  cmd: ["sudo", "apt-get", "install", "p7zip"],
});
Deno.run({
  cmd: ["p7zip", "-d", "-f", "retroarch.7z"],
});
