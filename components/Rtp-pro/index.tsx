import $ from "jquery";

export default function Rtppro() {
  var x = [
    2987, 74, 2425, 1106, 2562, 2434, 1584, 722, 51, 1480, 200, 115, 2409, 1083,
    1987, 2675, 1166, 462, 704, 2551, 79, 418, 432, 1548, 846, 1613, 513, 1433,
    177, 113, 1868, 1776, 1733, 794, 2736, 160, 956, 240, 2928, 2077, 2933,
    2069, 2510, 463, 231, 1402, 2883, 1721, 2819, 2863, 1226, 1324, 2443, 2860,
    1163, 1453, 1023, 1850, 1985, 2668, 1814, 2445, 1784, 833, 327, 151, 1892,
    1537, 377, 927, 1246, 1065, 507, 2316, 366, 2911, 2695, 930, 41, 2535, 1876,
    1074, 2735, 484, 1678, 375, 2768, 2628, 1138, 1997, 197, 2821, 838, 2501,
    1769, 2893, 1148, 881, 226, 960, 2135, 1640, 1368, 451, 159, 254, 826, 1177,
    297, 1703, 756, 945, 319, 2779, 1014, 1992, 224, 1512, 732, 2832, 2532,
    2354, 2664, 2555, 2861, 2728, 452, 2913, 382, 844, 6, 1113, 1605, 1048,
    1405, 2642, 742, 1234, 323, 2754, 646, 1109, 1365, 1398, 541, 336, 1810,
    1966, 2718, 2374, 1255, 253, 629, 1004, 245, 1131, 46, 2673, 1958, 2504,
    220, 137, 1534, 2130, 1376, 1375, 1173, 845, 134, 1458, 1093, 2930, 2613,
    805, 835, 2926, 317, 1479, 2892, 412, 2758, 654, 2213, 322, 1274, 628, 2008,
    1947, 1828, 1422, 1084, 1317, 2602, 1834, 1843, 1388, 1521, 576, 2828, 271,
    214, 1805, 199, 1578, 180, 961, 2910, 723, 2599, 1708, 2333, 472, 1656, 905,
    256, 535, 2971, 1443, 2512, 2094, 2267, 1848, 2160, 2843, 202, 1616, 2378,
    211, 1333, 2899, 1945, 533, 1189, 2568, 157, 2275, 1743, 2373, 642, 469,
    668, 489, 568, 171, 2361, 353, 692, 1382, 2064, 1962, 2476, 521, 2353, 1494,
    830, 1430, 2547, 37, 1167, 2438, 1707, 674, 1325, 2676, 158, 914, 1236,
    1690, 2143, 2990, 1472, 749, 1332, 1973, 744, 475, 31, 2560, 2812, 754,
    2561, 2506, 1607, 2320, 1628, 663, 610, 440, 1015, 1273, 2312, 2256, 477,
    42, 1073, 2903, 2244, 870, 1134, 64, 2788, 2371, 2271, 1815, 1500, 2881,
    1126, 2480, 311, 923, 631, 2583, 1063, 12, 688, 427, 1928, 1954, 26, 1726,
    2, 2654, 1031, 766, 2556, 831, 61, 36, 371, 1939, 1957, 2405, 2549, 758,
    2889, 1175, 349, 2385, 1574, 544, 330, 1555, 2850, 1282, 1487, 2484, 1263,
    1852, 259, 540, 2651, 1197, 420, 2677, 2478, 88, 761, 550, 1682, 1499, 429,
    1496, 511, 1984, 798, 348, 1936, 2527, 2946, 617, 2040, 2864, 196, 1639,
    313, 1547, 2730, 886, 2600, 2665, 1533, 1857, 2657, 2277, 1406, 2690, 1579,
    2604, 1309, 2426, 1159, 2988, 2529, 2545, 1018, 2087, 2357, 1931, 2702,
    2694, 1535, 2424, 2342, 146, 2119, 670, 2993, 2671, 2418, 1742, 567, 19,
    1457, 848, 1130, 1050, 2297, 1354, 161, 1355, 1142, 1635, 2174, 1231, 1600,
    517, 1300, 1182, 1575, 2056, 2107, 286, 232, 2334, 1855, 139, 2699, 2372,
    2182, 947, 2595, 847, 1052, 1520, 2074, 2047, 235, 2207, 2239, 1147, 40,
    2519, 2012, 2774, 2242, 1620, 1897, 1212, 1051, 2793, 1360, 98, 1711, 1162,
    2233, 2262, 1188, 590, 2383, 561, 2447, 1723, 1041, 2713, 762, 673, 2507,
    2696, 2687, 2749, 1700, 957, 679, 1253, 2420, 608, 2986, 1862, 2200, 1914,
    1087, 878, 2377, 1660, 1337, 1132, 1811, 1404, 2716, 243, 447, 803, 167,
    1518, 2848, 339, 2635, 873, 1625, 490, 1307, 528, 2866, 1449, 399, 2219,
    263, 816, 865, 2680, 919, 1254, 997, 1891, 50, 1757, 669, 1856, 1951, 86,
    2091, 1530, 2525, 2259, 56, 480, 996, 853, 2039, 2076, 2945, 1330, 1507,
    931, 764, 407, 2018, 301, 1851, 1320, 2791, 308, 585, 752, 573, 2419, 1490,
    1027, 383, 952, 509, 658, 773, 1361, 834, 1235, 1694, 1229, 1207, 1, 2070,
    1570, 2973, 785, 1193, 2862, 2446, 836, 2017, 2294, 1022, 2606, 2217, 2521,
    677, 2194, 2133, 1305, 2874, 924, 2558, 1259, 1466, 1232, 2402, 2516, 1492,
    1081, 1075, 1462, 2655, 337, 1436, 2734, 2192, 326, 1688, 1421, 1791, 2287,
    2225, 2061, 2258, 1077, 1495, 1403, 11, 750, 1596, 85, 401, 1793, 2140, 587,
    1473, 2118, 2451, 1624, 367, 698, 874, 2629, 2896, 2576, 1918, 1090, 1835,
    2023, 101, 2046, 2058, 2593, 2873, 474, 445, 2801, 2674, 1665, 1750, 1577,
    1669, 918, 2415, 261, 1356, 828, 2487, 1618, 262, 553, 2831, 2656, 2618,
    2376, 512, 2797, 77, 2389, 1343, 887, 1165, 1944, 555, 1904, 527, 2955, 362,
    1146, 1279, 2177, 1884, 73, 1026, 802, 2826, 1359, 251, 503, 2508, 395,
    1220, 478, 2720, 166, 2456, 16, 820, 282, 983, 1268, 2633, 724, 2479, 1960,
    152, 403, 1911, 2684, 2169, 951, 2485, 68, 1794, 457, 1996, 2869, 574, 1322,
    1486, 2229, 1840, 2760, 1823, 2806, 625, 2947, 2917, 2198, 18, 341, 1777,
    1889, 2989, 1938, 2188, 551, 2491, 2126, 708, 1292, 437, 2458, 72, 39, 1900,
    1693, 510, 2572, 2199, 653, 1318, 1312, 149, 2969, 1895, 536, 1465, 2450,
    1888, 1621, 523, 1470, 89, 190, 1000, 760, 571, 2503, 2164, 460, 1381, 2349,
    2959, 2085, 2163, 2559, 786, 464, 1329, 2640, 687, 2632, 121, 2209, 1989,
    118, 2302, 413, 1644, 2953, 272, 1184, 136, 2422, 2531, 2166, 1143, 1651,
    2805, 549, 2167, 2218, 632, 2168, 354, 2515, 62, 1735, 877, 1444, 1603,
    1728, 2762, 1068, 1675, 2183, 218, 2202, 1311, 1400, 2416, 2877, 2246, 1674,
    2172, 1135, 269, 2536, 1098, 1804, 2084, 448, 1033, 1631, 801, 369, 2223,
    2363, 1739, 156, 13, 1323, 1250, 2195, 903, 1261, 2355, 2757, 1181, 1396,
    811, 1829, 1937, 1413, 1758, 1813, 572, 2719, 1752, 2938, 2978, 2846, 827,
    755, 2906, 1334, 1749, 2697, 825, 774, 303, 2396, 1998, 1725, 2109, 340,
    132, 852, 2127, 2116, 748, 1731, 697, 977, 855, 795, 141, 1441, 1734, 125,
    2028, 2764, 1680, 2523, 1967, 1772, 539, 2726, 1366, 907, 350, 2123, 578,
    1176, 1178, 499, 2454, 1971, 2614, 2321, 1634, 589, 1230, 2646, 665, 492,
    2036, 667, 2398, 1372, 241, 884, 1779, 148, 696, 1903, 1439, 1169, 1546,
    204, 446, 837, 1529, 1768, 2854, 680, 1086, 965, 1662, 1652, 783, 2492,
    1092, 290, 1755, 2151, 1454, 8, 1319, 318, 2010, 145, 1544, 1251, 1667,
    1859, 817, 1386, 206, 792, 993, 1898, 28, 538, 2851, 1208, 1969, 1747, 995,
    2644, 779, 623, 1491, 2891, 1294, 1017, 1718, 1767, 2027, 1943, 223, 911,
    2691, 2319, 2612, 2428, 2078, 1986, 702, 2370, 274, 1591, 2840, 2958, 1837,
    2786, 1203, 2103, 866, 989, 2238, 1553, 2145, 981, 117, 2999, 864, 2482,
    2660, 2645, 736, 1595, 321, 1346, 1561, 1339, 2954, 1558, 217, 394, 1686,
    2513, 1643, 1114, 2368, 2670, 2250, 2742, 1589, 228, 1474, 500, 59, 486,
    1399, 100, 1581, 1983, 449, 1623, 229, 1550, 1737, 1797, 2317, 928, 2261,
    2584, 1187, 25, 331, 1252, 1408, 1481, 2961, 1002, 659, 201, 2252, 1841,
    2240, 1287, 347, 283, 2048, 2138, 2836, 554, 2430, 2234, 2099, 1293, 1392,
    459, 715, 1358, 2136, 1489, 2437, 1469, 2914, 681, 2643, 2072, 111, 1448,
  ];

  const text = document.getElementsByClassName("percent-txt");
  const barr = document.getElementsByClassName("percent-bar");
  const jam = document.getElementsByClassName("jamgacorRange");
  const pola1: [
    HTMLCollectionOf<Element>,
    HTMLCollectionOf<Element>,
    HTMLCollectionOf<Element>
  ] = [
    document.getElementsByClassName("pola1"),
    document.getElementsByClassName("pola2"),
    document.getElementsByClassName("pola3"),
  ];
  const pola = document.getElementsByClassName("pola");
  const jambg = document.getElementsByClassName("jamgacor");

  const random: string[] = ["✖️", "✔️", "✖️", "✔️", "✖️", "✔️"];

  const random2: number[] = [10, 25, 50, 100, 10];

  const random3: string[] = [
    "Auto",
    "Auto",
    "Manual 3",
    "Manual 5",
    "Manual 7",
    "Manual 10",
    "Auto",
    "Auto",
    "Auto",
    "Auto",
    "Auto",
    "Auto",
  ];

  const game = window.location.pathname;

  if (game == "/pragmatic" || game == "/pragmatic") {
    game = "";
  }

  let xxx = 0;

  for (let i = 0; i < game.length; i++) {
    xxx += game.charCodeAt(i);
  }

  const d = new Date();
  let date = d.getUTCDate();
  const day = d.getUTCDay() + 1;
  const year = d.getUTCFullYear();
  const month = d.getUTCMonth() + 1;
  const hour = d.getUTCHours();
  let min = d.getMinutes();
  let xx = day + year * month * date;

  for (let i = 0; i < text.length; i++) {
    // ... (rest of the code)
    if (min < 30) {
      min = 1;
    } else {
      min = 2;
    }
    xx = Math.pow(xx, hour * min);
    x[i] += xxx;
    xx = xx * x[i];

    if (i >= 0 && i <= 15) {
      xx = xx % 27;
      xx += 70;
    } else {
      xx = xx % 83;
      xx += 8;
    }
    const percentTxt = text[i];
    const bar = barr[i];
    percentTxt.innerHTML = xx + "%";
    $(barr[i])
      .attr("aria-valuenow", xx)
      .css("width", xx + "%");
    if (xx < 30) {
      bar.classList.add("red");
    } else if (xx > 70) {
      bar.classList.add("green");
    } else {
      bar.classList.add("yellow");
    }

    if (xx >= 30) {
      const hour2 = (hour + 7) % 24;
      const target = (xx % 3) + 1;
      let randomTarget = (hour2 + target) % 24;
      if (randomTarget < 10) {
        randomTarget = 0 + randomTarget;
      }
      const min1 = xx % 60;
      let min2 = (xx * date) % 60;
      if (min1 < 10) {
        min1 = 0 + min1;
      }
      if (min2 < 10) {
        min2 = 0 + min2;
      }
      if (hour2 < 10) {
        hour2 = 0 + hour2;
      }

      if (jam[i]) {
        // Check if jam[i] exists
        jam[i].textContent =
          hour2 + ":" + min1 + " - " + randomTarget + ":" + min2;
      }

      const n = i % 6;
      const p = [(x[n] + xx) % 6, (x[2 * n] + xx) % 6, (x[3 * n] + xx) % 6];

      const n2 = i % 5;
      const p2 = [
        (x[4 * n2] + xx) % 4,
        (x[5 * n2] + xx) % 5,
        (x[6 * n2] + xx) % 5,
      ];

      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          if (p[j] == p[k] && j != k) {
            p[k] = (p[k] + 1) % 6;
          }
        }
      }

      const p3 = [
        Math.pow(p[0], p2[0]) % 12,
        Math.pow(p[1], p2[1]) % 12,
        Math.pow(p[2], p2[2]) % 12,
      ];
      for (let j = 0; j < 3; j++) {
        if (pola1[j][i]) {
          if (random3[p3[j]] === "Auto") {
            pola1[j][i].textContent =
              random2[p2[j]] + " " + random[p2[j]] + " " + random3[p3[j]];
          } else {
            pola1[j][i].textContent = random3[p3[j]] + " " + random[p[j]];
          }
        }
      }

      if (xx > 70) {
        if (pola[i] && jambg[i]) {
          // Check if pola[i] and jambg[i] exist
          (pola[i] as HTMLElement).style.backgroundColor = "#28a745";
          (jambg[i] as HTMLElement).style.backgroundColor = "#28a745";
        }
      } else {
        if (pola[i] && jambg[i]) {
          // Check if pola[i] and jambg[i] exist
          (pola[i] as HTMLElement).style.backgroundColor = "#ffc107";
          (jambg[i] as HTMLElement).style.backgroundColor = "#ffc107";
        }
      }
    } else {
      if (jam[i]) {
        // Check if jam[i] exists
        jam[i].textContent = "-";
      }
      if (pola[i] && jambg[i]) {
        // Check if pola[i] and jambg[i] exist
        (pola[i] as HTMLElement).style.backgroundColor = "#dc3545";
        (jambg[i] as HTMLElement).style.backgroundColor = "#dc3545";
      }
      if (pola1[1][i]) {
        // Check if pola1[1][i] exists
        pola1[0][i].textContent = ""; // Clear content
        pola1[1][i].textContent = "JANGAN MAIN!!!";
        pola1[2][i].textContent = ""; // Clear content
      }
    }
    // ... (rest of the code)
  }
  // Your provided code ends here
  return (
    <>
      <div className="">
        <div className="percent z-10 text-black font-bold">
          <p id="percent-txt" className="percent-txt z-20"></p>
          <div
            id="percent-bar"
            className="percent-bar"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={0}
          ></div>
        </div>
        <div className="jam flex flex-col justify-between text-center text-black font-bold m-2">
          <div className="jamgacor jamBg h-[50px] border-b-2 border-black rounded-t-md">
            <div>JAM GACOR</div>
            <div className="jamgacorRange">XX - XX</div>
          </div>
          <div className="pola jamBg h-[150px] grid grid-rows-4 rounded-b-md">
            <div className="flex justify-center items-center row-span-1">
              POLA
            </div>
            <div className="grid grid-flow-row grid-rows-3 row-span-3 text-xs">
              <p className="pola1 flex items-center justify-center"></p>
              <p className="pola2 flex items-center justify-center"></p>
              <p className="pola3 flex items-center justify-center"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
