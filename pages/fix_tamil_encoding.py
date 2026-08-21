from pathlib import Path

replacements = {
    "à®®à¯à®•à®ªà¯à®ªà¯": "முகப்பு",
    "à®•à¯‹à®¯à®¿à®²à¯ à®…à®±à®¿à®®à¯à®•à®®à¯": "கோயில் அறிமுகம்",
    "à®µà®°à®²à®¾à®±à¯": "வரலாறு",
    "à®¤à®¿à®°à¯à®µà®¿à®´à®¾à®•à¯à®•à®³à¯": "திருவிழாக்கள்",
    "à®¨à¯‡à®°à®™à¯à®•à®³à¯": "நேரங்கள்",
    "à®ªà®Ÿà®¤à¯à®¤à¯Šà®•à¯à®ªà¯à®ªà¯": "படத்தொகுப்பு",
    "à®¤à¯Šà®Ÿà®°à¯à®ªà¯": "தொடர்பு",
    "à®¤à®®à®¿à®´à¯": "தமிழ்",
    "à®•à¯‹à®¯à®¿à®²à¯ à®¤à®¿à®±à®•à¯à®•à¯à®®à¯ à®¨à¯‡à®°à®®à¯": "கோயில் திறக்கும் நேரம்",
    "à®•à®¾à®²à¯ˆ": "காலை",
    "à®®à®¾à®²à¯ˆ": "மாலை",
    "â°": "🕉️",
}

for filename in ("festivals.html", "gallery.html"):
    path = Path(filename)
    text = path.read_text(encoding="utf-8")
    counts = {bad: text.count(bad) for bad in replacements}
    for bad, good in replacements.items():
        text = text.replace(bad, good)
    path.write_text(text, encoding="utf-8")
    print(f"{filename}: replaced {sum(counts.values())} corrupted occurrence(s)")
    print(f"  Tamil verification: {'முகப்பு' in text and 'தமிழ்' in text and 'திருவிழாக்கள்' in text}")
