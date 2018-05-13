
/* eslint-disable quote-props */
import { getUserMapping } from './userMappings'
import F0 from './mappings/2box.js'
import F1 from './mappings/Addictive Drums.js'
import F2 from './mappings/Alesis DM Pro.js'
import F3 from './mappings/Alesis DM10.js'
import F4 from './mappings/Alesis DM5.js'
import F5 from './mappings/BFD2.js'
import F6 from './mappings/BFD3.js'
import F7 from './mappings/Battery 3.js'
import F8 from './mappings/E-MU Protean Acoustic.js'
import F9 from './mappings/E-MU Protean Bread n Butter.js'
import F10 from './mappings/E-MU Protean Studio.js'
import F11 from './mappings/E-MU Protean Synth.js'
import F12 from './mappings/EZ Drummer The Classic EZX.js'
import F13 from './mappings/EZDrummer Jazz Kit.js'
import F14 from './mappings/EZDrummer Latin Percussion.js'
import F15 from './mappings/EZDrummer.js'
import F16 from './mappings/General MIDI.js'
import F17 from './mappings/Infinite Instruments.js'
import F18 from './mappings/John Emrich - Articulations 1.js'
import F19 from './mappings/Kontakt 2.js'
import F20 from './mappings/Ocean Way Drums.js'
import F21 from './mappings/Pearl Redbox.js'
import F22 from './mappings/Roland HandSonic 15.js'
import F23 from './mappings/Roland TD-10 Perc 1.js'
import F24 from './mappings/Roland TD-10 Perc 2.js'
import F25 from './mappings/Roland TD-10 Perc 3.js'
import F26 from './mappings/Roland TD-10 Perc 4.js'
import F27 from './mappings/Roland TD-10.js'
import F28 from './mappings/Roland TD-12 Perc 1 (Latin).js'
import F29 from './mappings/Roland TD-12 Perc 2 (Indian).js'
import F30 from './mappings/Roland TD-12 Perc 3 (African).js'
import F31 from './mappings/Roland TD-12 Perc 4 (Salsa).js'
import F32 from './mappings/Roland TD-12 Perc 5 (SFX).js'
import F33 from './mappings/Roland TD-12 Perc 6-8 (User).js'
import F34 from './mappings/Roland TD-12.js'
import F35 from './mappings/Roland TD-20 Perc.js'
import F36 from './mappings/Roland TD-20.js'
import F37 from './mappings/Roland TD-3.js'
import F38 from './mappings/Roland TD-30 Perc 1 (Latin).js'
import F39 from './mappings/Roland TD-30 Perc 2 (Indian).js'
import F40 from './mappings/Roland TD-30 Perc 3 (African).js'
import F41 from './mappings/Roland TD-30 Perc 4 (Salsa).js'
import F42 from './mappings/Roland TD-30 Perc 5 (SFX).js'
import F43 from './mappings/Roland TD-30 Perc 6-8 (User).js'
import F44 from './mappings/Roland TD-30.js'
import F45 from './mappings/Roland TD-5.js'
import F46 from './mappings/Roland TD-6 Perc 1.js'
import F47 from './mappings/Roland TD-6 Perc 10 (Special).js'
import F48 from './mappings/Roland TD-6 Perc 2.js'
import F49 from './mappings/Roland TD-6 Perc 3 (Room).js'
import F50 from './mappings/Roland TD-6 Perc 4 (Power).js'
import F51 from './mappings/Roland TD-6 Perc 5 (Elec).js'
import F52 from './mappings/Roland TD-6 Perc 6 (808).js'
import F53 from './mappings/Roland TD-6 Perc 7 (Jazz).js'
import F54 from './mappings/Roland TD-6 Perc 8 (Brush).js'
import F55 from './mappings/Roland TD-6 Perc 9 (Perc).js'
import F56 from './mappings/Roland TD-6.js'
import F57 from './mappings/Roland TD-7.js'
import F58 from './mappings/Roland TD-8 Perc 1.js'
import F59 from './mappings/Roland TD-8 Perc 10 (Special).js'
import F60 from './mappings/Roland TD-8 Perc 2.js'
import F61 from './mappings/Roland TD-8 Perc 3 (Room).js'
import F62 from './mappings/Roland TD-8 Perc 4 (Power).js'
import F63 from './mappings/Roland TD-8 Perc 5 (Elec).js'
import F64 from './mappings/Roland TD-8 Perc 6 (808).js'
import F65 from './mappings/Roland TD-8 Perc 7 (Jazz).js'
import F66 from './mappings/Roland TD-8 Perc 8 (Brush).js'
import F67 from './mappings/Roland TD-8 Perc 9 (Perc).js'
import F68 from './mappings/Roland TD-8.js'
import F69 from './mappings/Roland TD-9 Perc.js'
import F70 from './mappings/Roland TD-9.js'
import F71 from './mappings/Simmons SD1000.js'
import F72 from './mappings/Simmons SD5X.js'
import F73 from './mappings/Simmons SD7.js'
import F74 from './mappings/Simmons SD7PK.js'
import F75 from './mappings/Simmons SD9K.js'
import F76 from './mappings/Sonic Reality iMap Extended.js'
import F77 from './mappings/Sonic Reality iMap Standard.js'
import F78 from './mappings/Studio ProFiles.js'
import F79 from './mappings/Superior Drummer.js'
import F80 from './mappings/Yamaha DTX 700.js'
import F81 from './mappings/Yamaha DTXplorer.js'
import F82 from './mappings/Zendrum Stompblock.js'
import F83 from './mappings/Zendrum TRS 2.0.js'
import F84 from './mappings/Zendrum TRS.js'

export const getStockNames = () => ([
  '2box',
  'Addictive Drums',
  'Alesis DM Pro',
  'Alesis DM10',
  'Alesis DM5',
  'BFD2',
  'BFD3',
  'Battery 3',
  'E-MU Protean Acoustic',
  'E-MU Protean Bread n Butter',
  'E-MU Protean Studio',
  'E-MU Protean Synth',
  'EZ Drummer The Classic EZX',
  'EZDrummer Jazz Kit',
  'EZDrummer Latin Percussion',
  'EZDrummer',
  'General MIDI',
  'Infinite Instruments',
  'John Emrich - Articulations 1',
  'Kontakt 2',
  'Ocean Way Drums',
  'Pearl Redbox',
  'Roland HandSonic 15',
  'Roland TD-10 Perc 1',
  'Roland TD-10 Perc 2',
  'Roland TD-10 Perc 3',
  'Roland TD-10 Perc 4',
  'Roland TD-10',
  'Roland TD-12 Perc 1 (Latin)',
  'Roland TD-12 Perc 2 (Indian)',
  'Roland TD-12 Perc 3 (African)',
  'Roland TD-12 Perc 4 (Salsa)',
  'Roland TD-12 Perc 5 (SFX)',
  'Roland TD-12 Perc 6-8 (User)',
  'Roland TD-12',
  'Roland TD-20 Perc',
  'Roland TD-20',
  'Roland TD-3',
  'Roland TD-30 Perc 1 (Latin)',
  'Roland TD-30 Perc 2 (Indian)',
  'Roland TD-30 Perc 3 (African)',
  'Roland TD-30 Perc 4 (Salsa)',
  'Roland TD-30 Perc 5 (SFX)',
  'Roland TD-30 Perc 6-8 (User)',
  'Roland TD-30',
  'Roland TD-5',
  'Roland TD-6 Perc 1',
  'Roland TD-6 Perc 10 (Special)',
  'Roland TD-6 Perc 2',
  'Roland TD-6 Perc 3 (Room)',
  'Roland TD-6 Perc 4 (Power)',
  'Roland TD-6 Perc 5 (Elec)',
  'Roland TD-6 Perc 6 (808)',
  'Roland TD-6 Perc 7 (Jazz)',
  'Roland TD-6 Perc 8 (Brush)',
  'Roland TD-6 Perc 9 (Perc)',
  'Roland TD-6',
  'Roland TD-7',
  'Roland TD-8 Perc 1',
  'Roland TD-8 Perc 10 (Special)',
  'Roland TD-8 Perc 2',
  'Roland TD-8 Perc 3 (Room)',
  'Roland TD-8 Perc 4 (Power)',
  'Roland TD-8 Perc 5 (Elec)',
  'Roland TD-8 Perc 6 (808)',
  'Roland TD-8 Perc 7 (Jazz)',
  'Roland TD-8 Perc 8 (Brush)',
  'Roland TD-8 Perc 9 (Perc)',
  'Roland TD-8',
  'Roland TD-9 Perc',
  'Roland TD-9',
  'Simmons SD1000',
  'Simmons SD5X',
  'Simmons SD7',
  'Simmons SD7PK',
  'Simmons SD9K',
  'Sonic Reality iMap Extended',
  'Sonic Reality iMap Standard',
  'Studio ProFiles',
  'Superior Drummer',
  'Yamaha DTX 700',
  'Yamaha DTXplorer',
  'Zendrum Stompblock',
  'Zendrum TRS 2.0',
  'Zendrum TRS',
])

export const getMapping = (name) => {
  const userMapping = getUserMapping(name)
  if (userMapping) {
    return userMapping
  }

  switch (name) {
    case '2box': return F0
    case 'Addictive Drums': return F1
    case 'Alesis DM Pro': return F2
    case 'Alesis DM10': return F3
    case 'Alesis DM5': return F4
    case 'BFD2': return F5
    case 'BFD3': return F6
    case 'Battery 3': return F7
    case 'E-MU Protean Acoustic': return F8
    case 'E-MU Protean Bread n Butter': return F9
    case 'E-MU Protean Studio': return F10
    case 'E-MU Protean Synth': return F11
    case 'EZ Drummer The Classic EZX': return F12
    case 'EZDrummer Jazz Kit': return F13
    case 'EZDrummer Latin Percussion': return F14
    case 'EZDrummer': return F15
    case 'General MIDI': return F16
    case 'Infinite Instruments': return F17
    case 'John Emrich - Articulations 1': return F18
    case 'Kontakt 2': return F19
    case 'Ocean Way Drums': return F20
    case 'Pearl Redbox': return F21
    case 'Roland HandSonic 15': return F22
    case 'Roland TD-10 Perc 1': return F23
    case 'Roland TD-10 Perc 2': return F24
    case 'Roland TD-10 Perc 3': return F25
    case 'Roland TD-10 Perc 4': return F26
    case 'Roland TD-10': return F27
    case 'Roland TD-12 Perc 1 (Latin)': return F28
    case 'Roland TD-12 Perc 2 (Indian)': return F29
    case 'Roland TD-12 Perc 3 (African)': return F30
    case 'Roland TD-12 Perc 4 (Salsa)': return F31
    case 'Roland TD-12 Perc 5 (SFX)': return F32
    case 'Roland TD-12 Perc 6-8 (User)': return F33
    case 'Roland TD-12': return F34
    case 'Roland TD-20 Perc': return F35
    case 'Roland TD-20': return F36
    case 'Roland TD-3': return F37
    case 'Roland TD-30 Perc 1 (Latin)': return F38
    case 'Roland TD-30 Perc 2 (Indian)': return F39
    case 'Roland TD-30 Perc 3 (African)': return F40
    case 'Roland TD-30 Perc 4 (Salsa)': return F41
    case 'Roland TD-30 Perc 5 (SFX)': return F42
    case 'Roland TD-30 Perc 6-8 (User)': return F43
    case 'Roland TD-30': return F44
    case 'Roland TD-5': return F45
    case 'Roland TD-6 Perc 1': return F46
    case 'Roland TD-6 Perc 10 (Special)': return F47
    case 'Roland TD-6 Perc 2': return F48
    case 'Roland TD-6 Perc 3 (Room)': return F49
    case 'Roland TD-6 Perc 4 (Power)': return F50
    case 'Roland TD-6 Perc 5 (Elec)': return F51
    case 'Roland TD-6 Perc 6 (808)': return F52
    case 'Roland TD-6 Perc 7 (Jazz)': return F53
    case 'Roland TD-6 Perc 8 (Brush)': return F54
    case 'Roland TD-6 Perc 9 (Perc)': return F55
    case 'Roland TD-6': return F56
    case 'Roland TD-7': return F57
    case 'Roland TD-8 Perc 1': return F58
    case 'Roland TD-8 Perc 10 (Special)': return F59
    case 'Roland TD-8 Perc 2': return F60
    case 'Roland TD-8 Perc 3 (Room)': return F61
    case 'Roland TD-8 Perc 4 (Power)': return F62
    case 'Roland TD-8 Perc 5 (Elec)': return F63
    case 'Roland TD-8 Perc 6 (808)': return F64
    case 'Roland TD-8 Perc 7 (Jazz)': return F65
    case 'Roland TD-8 Perc 8 (Brush)': return F66
    case 'Roland TD-8 Perc 9 (Perc)': return F67
    case 'Roland TD-8': return F68
    case 'Roland TD-9 Perc': return F69
    case 'Roland TD-9': return F70
    case 'Simmons SD1000': return F71
    case 'Simmons SD5X': return F72
    case 'Simmons SD7': return F73
    case 'Simmons SD7PK': return F74
    case 'Simmons SD9K': return F75
    case 'Sonic Reality iMap Extended': return F76
    case 'Sonic Reality iMap Standard': return F77
    case 'Studio ProFiles': return F78
    case 'Superior Drummer': return F79
    case 'Yamaha DTX 700': return F80
    case 'Yamaha DTXplorer': return F81
    case 'Zendrum Stompblock': return F82
    case 'Zendrum TRS 2.0': return F83
    case 'Zendrum TRS': return F84
    default: return null
  }
}
