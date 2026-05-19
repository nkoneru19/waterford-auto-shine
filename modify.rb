content = File.read("src/components/layout/Header.tsx")
content.gsub\!(/backgroundColor: scrolled \|\| \!isHome
 *\? "color-mix\(in oklch, var\(--color-surface\) 80%, transparent\)"
 *: "transparent"/, "backgroundColor: scrolled
          ? \"var(--color-surface)\"
          : \"transparent\"")
content.gsub\!(/backdropFilter: scrolled \|\| \!isHome \? "blur\(16px\)" : "none"/, "backdropFilter: scrolled ? \"blur(16px)\" : \"none\"")
content.gsub\!(/WebkitBackdropFilter: scrolled \|\| \!isHome \? "blur\(16px\)" : "none"/, "WebkitBackdropFilter: scrolled ? \"blur(16px)\" : \"none\"")
File.write("src/components/layout/Header.tsx", content)
puts "File modified successfully"
