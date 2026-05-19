content = File.read("src/components/layout/Header.tsx")
before1 = "backgroundColor: scrolled || \!isHome"
after1 = "backgroundColor: scrolled"
before2 = "color-mix(in oklch, var(--color-surface) 80%, transparent)"
after2 = "var(--color-surface)"
before3 = "backdropFilter: scrolled || \!isHome ? \"blur(16px)\" : \"none\""
after3 = "backdropFilter: scrolled ? \"blur(16px)\" : \"none\""
before4 = "WebkitBackdropFilter: scrolled || \!isHome ? \"blur(16px)\" : \"none\""
after4 = "WebkitBackdropFilter: scrolled ? \"blur(16px)\" : \"none\""
content = content.gsub(before1, after1)
content = content.gsub(before2, after2)
content = content.gsub(before3, after3)
content = content.gsub(before4, after4)
File.write("src/components/layout/Header.tsx", content)
puts "File modified successfully"
