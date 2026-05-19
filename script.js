const fs = require("fs");
const h = fs.readFileSync("src/components/layout/Header.tsx", "utf8").split("\n");
h[55] = "          : \!isHome ? \"var(--color-surface)\" : \"transparent\",";
fs.writeFileSync("src/components/layout/Header.tsx", h.join("\n"));
