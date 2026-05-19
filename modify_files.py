import sys
# Modify Header.tsx
with open('src/components/layout/Header.tsx', 'r') as f:
    header_lines = f.readlines()

header_lines[53] = '        backgroundColor: scrolled || \!isHome
'
