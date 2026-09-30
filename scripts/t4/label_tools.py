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
