import clear from 'assets/Clear.png';
import hail from 'assets/Hail.png';
import heavyCloud from 'assets/HeavyCloud.png';
import lightCloud from 'assets/LightCloud.png';
import shower from 'assets/Shower.png';
import sleet from 'assets/Sleet.png';
import snow from 'assets/Snow.png';
import thunderstorm from 'assets/Thunderstorm.png';

const IMAGES = {
  0: clear,
  1: hail,
  2: heavyCloud,
  3: lightCloud,
  4: shower,
  5: sleet,
  6: snow,
  7: thunderstorm,
};

export default function getStateImage(code: number) {
  if (code === 1000) return IMAGES[0];
  if (
    code === 1003 ||
    (code >= 1150 && code <= 284) ||
    (code >= 1180 && code <= 1195)
  )
    return IMAGES[3];
  if ((code >= 1006 && code <= 1030) || (code >= 1240 && code <= 1246))
    return IMAGES[2];
  if (code === 1063) return IMAGES[4];
  if (code >= 1066 && code <= 1072) return IMAGES[1];
  if (code === 1087 || (code >= 1273 && code <= 1282)) return IMAGES[7];
  if (code >= 1114 && code <= 1147) return IMAGES[6];
  if ((code >= 1198 && code <= 1237) || (code >= 1249 && code <= 1264))
    return IMAGES[5];
}
