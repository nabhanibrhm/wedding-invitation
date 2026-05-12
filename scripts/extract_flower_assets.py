from pathlib import Path
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src/assets/images/flowers_background.png"
OUTPUT_DIR = ROOT / "src/assets/images/decomposed_flowers"


ASSETS = [
    {
        "name": "rose_top_left_cream",
        "crop": (30, 0, 360, 280),
        "alpha_threshold": 188,
    },
    {
        "name": "rose_top_right_blush",
        "crop": (700, 0, 1024, 240),
        "alpha_threshold": 188,
    },
    {
        "name": "rose_upper_right_cream",
        "crop": (760, 140, 1024, 420),
        "alpha_threshold": 186,
    },
    {
        "name": "rose_bottom_left_cream",
        "crop": (0, 1080, 330, 1460),
        "alpha_threshold": 188,
    },
    {
        "name": "rose_bottom_left_blush",
        "crop": (180, 1180, 460, 1500),
        "alpha_threshold": 186,
    },
    {
        "name": "rose_bottom_right_cream",
        "crop": (650, 1100, 980, 1450),
        "alpha_threshold": 188,
    },
    {
        "name": "pink_blossom_cluster_bottom_left",
        "crop": (0, 1320, 220, 1536),
        "alpha_threshold": 180,
    },
    {
        "name": "leaf_stalk_bottom_right",
        "crop": (845, 820, 1024, 1090),
        "alpha_threshold": 130,
    },
]


def threshold_alpha(image, threshold):
    alpha = image.getchannel("A")
    alpha = alpha.point(lambda value: 255 if value >= threshold else 0)
    isolated = image.copy()
    isolated.putalpha(alpha)
    bbox = alpha.getbbox()
    if bbox:
        isolated = isolated.crop(bbox)
    return isolated


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE).convert("RGBA")

    for asset in ASSETS:
        crop = source.crop(asset["crop"])
        isolated = threshold_alpha(crop, asset["alpha_threshold"])
        isolated.save(
            OUTPUT_DIR / f"{asset['name']}.webp",
            "WEBP",
            lossless=True,
            method=6,
        )


if __name__ == "__main__":
    main()
