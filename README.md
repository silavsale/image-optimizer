Install dependencies: ```brew install librsvg imagemagick mozjpeg```

```raster SVG: rsvg-convert ${file}.svg -o ${file}.png (can’t just extract since there are SVG effects/layers that affect the image)```

if file has transparency:

`pngquant ${file}.png, if the -fs8.png is smaller use it, otherwise ${file}.png`

otherwise, convert to jpg w/ imagemagick:

`convert ${file}.png -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB ${file}.jpg`

`jpegtran ${file}.jpg > ${file}-opt.jpg, if ${file}-opt.jpg is smaller use it, otherwise ${file}.jpg`
