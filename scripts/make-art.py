#!/usr/bin/env python3
"""Generates the ink-wash reed artwork used as the page background (original artwork, deterministic).

    python3 scripts/make-art.py

Writes public/art/hang-left.svg, hang-right.svg (blades hanging from the top edge) and enso.svg (a brush circle). Each blade is a tapered, curved leaf shape filled with a
soft green wash; a few blurred layers give depth. Nothing is traced from any other work.
"""
import math, random, os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'art')
W, H = 900, 900

def blade(rng, x0, y0, length, angle, bend, width):
    """Polygon outline of one curved, tapered leaf. angle: radians from straight up (negative = leaning left)."""
    pts_l, pts_r = [], []
    steps = 28
    # centre line: starts along `angle`, curves by `bend` radians over its length
    x, y, a = x0, y0, angle
    seg = length / steps
    for i in range(steps + 1):
        t = i / steps
        # width profile: quick swell near the base, long taper to a fine tip
        wprof = (math.sin(min(1, t * 1.15) * math.pi * 0.5) ** 0.8) * (1 - t) ** 1.15
        wob = 1 + 0.08 * math.sin(t * 9 + rng.random())
        hw = max(0.15, width * wprof * wob)
        nx, ny = math.cos(a), math.sin(a)  # normal to the direction (dx,dy)=(sin a,-cos a)
        pts_l.append((x - nx * hw, y - ny * hw))
        pts_r.append((x + nx * hw, y + ny * hw))
        a += bend / steps
        x += math.sin(a) * seg
        y -= math.cos(a) * seg
    poly = pts_l + pts_r[::-1]
    return 'M' + ' L'.join(f'{px:.1f},{py:.1f}' for px, py in poly) + ' Z'

def clump(rng, cx, cy, count, spread, flip):
    """A fan of blades growing from a base point; returns (path, depth) tuples."""
    out = []
    for _ in range(count):
        lean = rng.uniform(-0.75, 0.75)
        length = rng.uniform(260, 620) * (1 - abs(lean) * 0.25)
        bend = rng.uniform(0.25, 1.1) * (1 if lean >= 0 else -1) * flip * 0.9
        width = rng.uniform(7, 17)
        x0 = cx + rng.uniform(-spread, spread)
        out.append((blade(rng, x0, cy, length, lean * 0.85, bend, width), rng.random()))
    return out

def svg(seed, clumps, flip):
    rng = random.Random(seed)
    defs = f'''<defs>
<linearGradient id="g1" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#2f6f62"/><stop offset="0.55" stop-color="#6e9a8b"/><stop offset="1" stop-color="#bfd3c8"/></linearGradient>
<linearGradient id="g2" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#185c53"/><stop offset="0.6" stop-color="#4e8576"/><stop offset="1" stop-color="#a9c6ba"/></linearGradient>
<radialGradient id="wash" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#cfe0d6" stop-opacity="0.55"/><stop offset="0.7" stop-color="#cfe0d6" stop-opacity="0.18"/><stop offset="1" stop-color="#cfe0d6" stop-opacity="0"/></radialGradient>
<filter id="soft" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0.7"/></filter>
<filter id="haze" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3.2"/></filter>
</defs>'''
    layers = {'back': [], 'mid': [], 'front': []}
    for (cx, cy, n, spread) in clumps:
        for path, depth in clump(rng, cx, cy, n, spread, flip):
            layers['back' if depth < 0.34 else 'mid' if depth < 0.75 else 'front'].append(path)
    body = [defs]
    body.append(f'<ellipse cx="{W*0.5:.0f}" cy="{H*0.95:.0f}" rx="{W*0.62:.0f}" ry="{H*0.34:.0f}" fill="url(#wash)"/>')
    body.append('<g filter="url(#haze)" opacity="0.30" fill="url(#g1)">' + ''.join(f'<path d="{p}"/>' for p in layers['back']) + '</g>')
    body.append('<g filter="url(#soft)" opacity="0.38" fill="url(#g1)">' + ''.join(f'<path d="{p}"/>' for p in layers['mid']) + '</g>')
    body.append('<g filter="url(#soft)" opacity="0.55" fill="url(#g2)">' + ''.join(f'<path d="{p}"/>' for p in layers['front']) + '</g>')
    # a few ink drops, like spatter from a brush
    drops = []
    for _ in range(14):
        drops.append(f'<circle cx="{rng.uniform(40, W-40):.0f}" cy="{rng.uniform(300, H-60):.0f}" r="{rng.uniform(1.2, 3.6):.1f}" fill="#3d7467" opacity="{rng.uniform(0.10, 0.28):.2f}"/>')
    body.append(''.join(drops))
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="presentation" aria-hidden="true">' + ''.join(body) + '</svg>'

def hanging(seed, clumps, flip, sparse=False):
    """Blades that hang from the top edge and arc downward, like orchid leaves in an ink painting."""
    rng = random.Random(seed)
    defs = """<defs>
<linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f6f62"/><stop offset="0.55" stop-color="#6e9a8b"/><stop offset="1" stop-color="#bfd3c8"/></linearGradient>
<linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#185c53"/><stop offset="0.6" stop-color="#4e8576"/><stop offset="1" stop-color="#a9c6ba"/></linearGradient>
<filter id="soft" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0.7"/></filter>
<filter id="haze" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3.2"/></filter>
</defs>"""
    layers = {'back': [], 'mid': [], 'front': []}
    for (cx, cy, n, spread) in clumps:
        for _ in range(n):
            lean = rng.uniform(-0.55, 0.55)
            length = rng.uniform(240, 560) * (0.6 if sparse else 1)
            bend = rng.uniform(0.3, 1.0) * flip * (1 if lean >= 0 else -1) * 0.8
            width = rng.uniform(6, 15)
            x0 = cx + rng.uniform(-spread, spread)
            d = blade(rng, x0, cy, length, math.pi + lean * 0.8, bend, width)
            depth = rng.random()
            layers['back' if depth < 0.34 else 'mid' if depth < 0.75 else 'front'].append(d)
    body = [defs,
        '<g filter="url(#haze)" opacity="0.28" fill="url(#g1)">' + ''.join(f'<path d="{p}"/>' for p in layers['back']) + '</g>',
        '<g filter="url(#soft)" opacity="0.36" fill="url(#g1)">' + ''.join(f'<path d="{p}"/>' for p in layers['mid']) + '</g>',
        '<g filter="url(#soft)" opacity="0.52" fill="url(#g2)">' + ''.join(f'<path d="{p}"/>' for p in layers['front']) + '</g>']
    drops = ''.join(f'<circle cx="{rng.uniform(40, W-40):.0f}" cy="{rng.uniform(40, 520):.0f}" r="{rng.uniform(1.2, 3.4):.1f}" fill="#3d7467" opacity="{rng.uniform(0.10, 0.26):.2f}"/>' for _ in range(10))
    body.append(drops)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="presentation" aria-hidden="true">' + ''.join(body) + '</svg>'

def enso(seed=5, size=700):
    """An open brush circle: a ring whose width swells and thins, with a gap where the brush lifted."""
    rng = random.Random(seed)
    cx = cy = size / 2
    r = size * 0.40
    start, sweep = -math.pi * 0.62, math.pi * 1.88
    n = 220
    outer, inner = [], []
    for i in range(n + 1):
        t = i / n
        ang = start + sweep * t
        # thick where the brush lands, thin and dry where it lifts
        width = size * (0.034 * (1 - t) ** 0.55 + 0.004) * (1 + 0.18 * math.sin(t * 17 + 1.3)) * (0.75 + 0.5 * rng.random() * 0.2)
        rr = r * (1 + 0.012 * math.sin(t * 5 + 0.7)) + size * 0.01 * t
        outer.append((cx + (rr + width) * math.cos(ang), cy + (rr + width) * math.sin(ang)))
        inner.append((cx + (rr - width) * math.cos(ang), cy + (rr - width) * math.sin(ang)))
    poly = outer + inner[::-1]
    d = 'M' + ' L'.join(f'{x:.1f},{y:.1f}' for x, y in poly) + ' Z'
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width="{size}" height="{size}" role="presentation" aria-hidden="true">
<defs><filter id="rough" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="5"/><feGaussianBlur stdDeviation="0.6"/></filter></defs>
<path d="{d}" fill="#185c53" opacity="0.8" filter="url(#rough)"/></svg>"""

os.makedirs(OUT, exist_ok=True)
# Bases sit along the bottom edge (y = H) so the clumps grow upward into the page.
left = svg(11, [(140, H + 20, 34, 150), (330, H + 40, 20, 100), (30, H, 16, 60), (470, H + 60, 8, 60)], 1)
right = svg(23, [(760, H + 20, 32, 150), (570, H + 40, 20, 100), (870, H, 16, 60), (430, H + 60, 8, 60)], -1)
hang_left = hanging(31, [(120, -30, 30, 140), (310, -40, 16, 100), (20, -20, 12, 40)], 1)
hang_right = hanging(47, [(800, -30, 14, 90), (700, -40, 8, 60)], -1, sparse=True)
for name, text in (('hang-left.svg', hang_left), ('hang-right.svg', hang_right), ('enso.svg', enso())):
    with open(os.path.join(OUT, name), 'w', encoding='utf-8') as f:
        f.write(text)
    print(name, f'{len(text)/1024:.0f} KB')
