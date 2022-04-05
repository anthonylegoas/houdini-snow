if (typeof registerPaint !== "undefined") {
  class StarryNight {
    static get inputProperties() {
      return ["--stars-number", "--stars-size-min", "--stars-size-max"];
    }

    paint(ctx, size, properties) {
      const starsNumber = parseInt(properties.get("--stars-number")) || 130;
      const starsSizeMin = parseInt(properties.get("--stars-size-min")) || 1;
      const starsSizeMax = parseInt(properties.get("--stars-size-max")) || 3;

      // Add the stars in the sky.
      for (let i = 0; i < starsNumber; i++) {
        const hue = 0;
        const sat = 0;
        const light = rand(80, 100);
        const color = `hsl(${hue}deg, ${sat}%, ${light}%)`;
        const circle = {
          x: rand(0, size.width),
          y: rand(0, size.height),
          r: rand(starsSizeMin, starsSizeMax),
          color,
          alpha: 100,
        };

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);
        ctx.fillStyle = circle.color;
        ctx.fill();
        ctx.closePath();
      }

      // Add the moon in the sky.
      ctx.beginPath();
      ctx.arc(
        rand(size.width - 100, size.width - 50),
        rand(20, 50),
        20,
        0,
        Math.PI * 2,
        true
      );
      ctx.fillStyle = `hsl(0deg, 0%, 100%)`;
      ctx.fill();
      ctx.closePath();
    }
  }

  registerPaint("starry-night", StarryNight);
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
