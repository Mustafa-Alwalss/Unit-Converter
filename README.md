# UnitShift - Professional Unit Converter

A comprehensive, responsive unit conversion application built with React and TypeScript that supports conversions across 10 different measurement categories with over 200 units.

![UnitShift - Professional Unit Converter](./screenshots/Screenshot%202026-10-15%20at%2011-13-57%20unit_converter.png)
*Screenshot of the UnitShift unit converter application*

## Features

- **Real-time Conversion**: Instant results as you type or change units
- **Bidirectional Conversion**: Easily swap between source and target units
- **Extensive Unit Support**: 200+ units across 10 measurement categories
- **Input Validation**: Robust error handling for invalid inputs
- **History Tracking**: Save and revisit recent conversions
- **Copy to Clipboard**: One-click copying of conversion results
- **Preset Conversions**: Quick access to common conversion pairs
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Formula Display**: Shows the mathematical relationship between units

## Unit Categories and Supported Units

| # | Category | Number of Units |
|---|----------|-----------------|
| 1 | Length | 35 |
| 2 | Mass | 15 |
| 3 | Time | 21 |
| 4 | Temperature | 8 |
| 5 | Area | 16 |
| 6 | Volume | 27 |
| 7 | Data | 34 |
| 8 | Energy | 19 |
| 9 | Pressure | 14 |
| 10 | Speed | 12 |
| **Total** | **All Categories** | **201** |

### Detailed Unit Lists

**Length (35 units)**
am, fm, pm, nm, µm, mm, cm, dm, m, dam, hm, km, Mm, Gm, Tm, Pm, Em, Zm, Ym, Å, th, in, ft, yd, mi, nmi, lea, ftm, ch, fur, rd, li, AU, ly, pc

**Mass (15 units)**
u, µg, mg, g, kg, t, ct, gr, oz, lb, stone, cwt_us, cwt_uk, sh_tn, ln_tn

**Time (21 units)**
ns, µs, ms, cs, ds, s, das, hs, ks, min, h, day, week, ft (fortnight), month, year, decade, century, millennium, Ms, Gs

**Temperature (8 units)**
K, C, F, R, Ré, Ro, N, D

**Area (16 units)**
nm2, µm2, mm2, cm2, dm2, m2, dam2, hm2, km2, in2, ft2, yd2, mi2, nmi2, acre, hectare

**Volume (27 units)**
nm3, µm3, mm3, cm3, dm3, m3, dam3, hm3, km3, in3, ft3, yd3, tsp, tbsp, cup, pt, qt, gal, bbl, uk_fl_oz, uk_pt, uk_qt, uk_gal, us_dry_pt, us_dry_qt, us_pk, us_bu

**Data (34 units)**
bit, kb, Mb, Gb, Tb, Pb, Eb, Zb, Yb, Kib, Mib, Gib, Tib, Pib, Eib, Zib, Yib, B, kB, MB, GB, TB, PB, EB, ZB, YB, KiB, MiB, GiB, TiB, PiB, EiB, ZiB, YiB

**Energy (19 units)**
eV, keV, MeV, GeV, erg, J, kJ, MJ, GJ, TJ, cal, kcal, Wh, kWh, BTU_IT, BTU_th, therm, ftlb, tTNT

**Pressure (14 units)**
Ba, Pa, kPa, MPa, GPa, mbar, bar, psi, atm, at, Torr, mmHg, inHg, psf

**Speed (12 units)**
mm_per_s, cm_per_s, in_per_s, ft_per_s, mi_per_h, knot, km_per_h, yd_per_s, m_per_s, km_per_s, mi_per_s, c

## Tech Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/unit-converter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd unit-converter
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Development
To start the development server with hot module replacement:
```bash
npm run dev
```
or
```bash
yarn dev
```

The application will be available at `http://localhost:5173`
## Project Structure
```
unit-converter/
├── src/
│   ├── App.tsx                 # Main application component
│   ├── components/             # Reusable UI components
│   │   ├── Header.tsx          # Application header
│   │   ├── CategorySelector.tsx # Category selection pills
│   │   ├── PresetsRow.tsx      # Quick preset buttons
│   │   ├── ConversionCard.tsx  # Main conversion interface
│   │   ├── FormulaDisplay.tsx  # Conversion formula display
│   │   ├── ActionButton.tsx    # Add to history button
│   │   ├── HistoryPanel.tsx    # Conversion history panel
│   │   └── Footer.tsx          # Application footer
│   ├── engine/                 # Conversion logic (preserved)
│   │   ├── convert.ts          # Core conversion functions
│   │   ├── index.ts            # Engine exports
│   │   ├── errors.ts           # Custom error classes
│   │   └── conversions/        # Linear and temperature conversion logic
│   ├── units/                  # Unit definitions (preserved)
│   │   ├── area.ts             # Area unit definitions
│   │   ├── data.ts             # Data storage unit definitions
│   │   ├── energy.ts           # Energy unit definitions
│   │   ├── interface.ts        # Shared unit interface
│   │   ├── length.ts           # Length unit definitions
│   │   ├── mass.ts             # Mass unit definitions
│   │   ├── pressure.ts         # Pressure unit definitions
│   │   ├── speed.ts            # Speed unit definitions
│   │   ├── temperature.ts      # Temperature unit definitions
│   │   ├── time.ts             # Time unit definitions
│   │   └── volume.ts           # Volume unit definitions
│   ├── index.css               # Global CSS styles
│   ├── main.tsx                # Application entry point
│   └── App.css                 # Component-specific styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # This file
```



---

