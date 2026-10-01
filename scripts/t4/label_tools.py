# -*- coding: utf-8 -*-
"""Small helper to overlay real French text legends onto AI-generated
scientific/anatomical diagrams (which are generated without any text,
since AI image models render garbled text). We expand the canvas with a
white margin and draw a short leader line from the diagram's existing
colored marker (or a chosen anchor point) out to a legible text label
drawn with a real TTF font (DejaVu Sans Bold, which supports French
accents)."""
from PIL import Image, ImageDraw, ImageFont

FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"


def add_legend_labels(src_path, out_path, labels, pad_left=0, pad_right=0,
                       pad_top=0, pad_bottom=0, font_size=34, line_len=150,
                       bg=(255, 255, 255)):
    """labels: list of dicts with keys:
        anchor: (fx, fy) fraction (0-1) of the ORIGINAL image where the
                existing colored dot / feature is located.
        text:   the French label to draw.
        side:   'left' | 'right' | 'top' | 'bottom' - which way to extend
                the leader line into the new padding area.
        color:  (r,g,b) tuple for the dot + leader line (optional).
    """
    img = Image.open(src_path).convert("RGB")
    W, H = img.size
    newW, newH = W + pad_left + pad_right, H + pad_top + pad_bottom
    canvas = Image.new("RGB", (newW, newH), bg)
    canvas.paste(img, (pad_left, pad_top))
    draw = ImageDraw.Draw(canvas)
    font = ImageFont.truetype(FONT_BOLD, font_size)

    for lab in labels:
        fx, fy = lab["anchor"]
        ax, ay = pad_left + fx * W, pad_top + fy * H
        color = lab.get("color", (40, 40, 40))
        side = lab.get("side", "left")
        text = lab["text"]
        ll = lab.get("line_len", line_len)
        bbox = draw.textbbox((0, 0), text, font=font)
        tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]

        if side == "left":
            tx, ty = ax - ll, ay
            draw.line([(tx, ty), (ax, ay)], fill=color, width=5)
            text_xy = (tx - tw - 16, ty - th / 2 - bbox[1])
        elif side == "right":
            tx, ty = ax + ll, ay
            draw.line([(ax, ay), (tx, ty)], fill=color, width=5)
            text_xy = (tx + 16, ty - th / 2 - bbox[1])
        elif side == "top":
            tx, ty = ax, ay - ll
            draw.line([(ax, ay), (tx, ty)], fill=color, width=5)
            text_xy = (tx - tw / 2, ty - th - 14 - bbox[1])
        else:  # bottom
            tx, ty = ax, ay + ll
            draw.line([(ax, ay), (tx, ty)], fill=color, width=5)
            text_xy = (tx - tw / 2, ty + 14 - bbox[1])

        draw.ellipse([ax - 8, ay - 8, ax + 8, ay + 8], fill=color, outline=(0, 0, 0))
        # White halo behind text for legibility, then the text itself.
        halo_box = [text_xy[0] - 6, text_xy[1] - 4, text_xy[0] + tw + 6, text_xy[1] + th + 8]
        draw.rectangle(halo_box, fill=(255, 255, 255))
        draw.text(text_xy, text, font=font, fill=(20, 20, 20))

    canvas.save(out_path, "JPEG", quality=92)


def add_legend_key(src_path, out_path, items, font_size=34, line_gap=14,
                    pad=40, bg=(255, 255, 255), columns=1):
    """Append a plain caption-style legend band below the image, listing
    'N — Nom' entries in order. Safer than leader lines for grid diagrams
    with 4-6 numbered/colored panels (avoids crossing lines / clipping).
    items: list of (marker, name) tuples, e.g. [('1', 'Marteau'), ...].
    columns: split the list into this many side-by-side columns if long.
    """
    img = Image.open(src_path).convert("RGB")
    W, H = img.size
    font = ImageFont.truetype(FONT_BOLD, font_size)
    tmp = Image.new("RGB", (10, 10))
    tdraw = ImageDraw.Draw(tmp)

    rows = (len(items) + columns - 1) // columns
    col_items = [items[i * rows:(i + 1) * rows] for i in range(columns)]
    col_widths = []
    for col in col_items:
        w = 0
        for marker, name in col:
            txt = f"{marker} — {name}"
            bbox = tdraw.textbbox((0, 0), txt, font=font)
            w = max(w, bbox[2] - bbox[0])
        col_widths.append(w)

    line_h = font.getbbox("Ag")[3] - font.getbbox("Ag")[1]
    band_h = pad * 2 + rows * (line_h + line_gap) - line_gap
    col_gap = 60
    total_cols_w = sum(col_widths) + col_gap * (columns - 1)
    newW = max(W, total_cols_w + pad * 2)
    newH = H + band_h
    canvas = Image.new("RGB", (newW, newH), bg)
    canvas.paste(img, ((newW - W) // 2, 0))
    draw = ImageDraw.Draw(canvas)

    start_x = (newW - total_cols_w) // 2
    x = start_x
    for ci, col in enumerate(col_items):
        y = H + pad
        for marker, name in col:
            txt = f"{marker} — {name}"
            draw.text((x, y), txt, font=font, fill=(20, 20, 20))
            y += line_h + line_gap
        x += col_widths[ci] + col_gap

    canvas.save(out_path, "JPEG", quality=92)
