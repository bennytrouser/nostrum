// Xiao SMD Footprint with cutouts for undersode soldering 
module.exports = {
    params: {
        class: 'MCU',
        side:  'F',
        VIN: {type: 'net', value: 'VIN'},
        SWDIO: {type: 'net', value: 'SWDIO'},
        SWDCLK: {type: 'net', value: 'SWDCLK'},
        RST: {type: 'net', value: 'RST'},
        GND: {type: 'net', value: 'GND'},
        P0: {type: 'net', value: 'P0'},
        P1: {type: 'net', value: 'P1'},
        P2: {type: 'net', value: 'P2'},
        P3: {type: 'net', value: 'P3'},
        P4: {type: 'net', value: 'P4'},
        P5: {type: 'net', value: 'P5'},
        P6: {type: 'net', value: 'P6'},
        P7: {type: 'net', value: 'P7'},
        P8: {type: 'net', value: 'P8'},
        P9: {type: 'net', value: 'P9'},
        P10: {type: 'net', value: 'P10'},
        RAW3V3:{type: 'net', value: 'RAW3V3'},
        RAW5V: {type: 'net', value: 'RAW5V'}
    },
    body:   p => `
        (module "xiao-ble-smd-cutout" (layer "${ p.side }.Cu") (tedit 621096A8) (attr smd exclude_from_pos_files)
        ${ p.at /* parametric position */ }
  
        ${ ''/* Pads */ }
        (pad "1" smd oval (at -8.56996 -7.62 ${p.rot + 180}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P0.str })
        (pad "2" smd oval (at -8.56996 -5.08 ${p.rot + 180}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P1.str })
        (pad "3" smd oval (at -8.56996 -2.54 ${p.rot + 180}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P2.str })
        (pad "4" smd oval (at -8.56996 0 ${p.rot + 180}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P3.str })
        (pad "5" smd oval (at -8.56996 2.54 ${p.rot + 180}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P4.str })
        (pad "6" smd oval (at -8.56996 5.08 ${p.rot + 180}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P5.str })
        (pad "7" smd oval (at -8.56996 7.62 ${p.rot + 180}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P6.str })
        (pad "8" smd oval (at 8.56996 7.62 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P7.str })
        (pad "9" smd oval (at 8.56996 5.08 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P8.str })
        (pad "10" smd oval (at 8.56996 2.54 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P9.str })
        (pad "11" smd oval (at 8.56996 0 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.P10.str })
        (pad "12" smd oval (at 8.56996 -2.54 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.RAW3V3.str })
        (pad "13" smd oval (at 8.56996 -5.08 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.GND.str })
        (pad "14" smd oval (at 8.56996 -7.62 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers "${ p.side }.Cu" "${ p.side }.Paste" "${ p.side }.Mask") ${ p.RAW5V.str })
        (pad "15" thru_hole circle (at -1.27 -8.572 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${ p.SWDCLK.str })
        (pad "16" thru_hole circle (at 1.27 -8.572 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${ p.SWDIO.str })
        (pad "17" thru_hole circle (at -1.27 -6.032 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${ p.GND.str })
        (pad "18" thru_hole circle (at 1.27 -6.032 90) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${ p.RST.str })
        (pad "19" thru_hole circle (at -4.445 -0.317 ${p.rot + 180}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${ p.VIN.str })
        (pad "20" thru_hole circle (at -4.445 -2.222 ${p.rot + 180}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${ p.GND.str })
        (pad "21" thru_hole circle (at 3.81 9.208 ${p.rot + 180}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask))
        (pad "22" thru_hole circle (at 5.715 9.208 ${p.rot + 180}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask))

        ${ ''/* Drawings */ }
        (fp_rect (start -8.89 10.5) (end 8.89 -10.5) (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User"))
        (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813) (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User"))
        (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813) (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User"))
        (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813) (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User"))
        (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813) (stroke (width 0.12) (type solid)) (fill none) (layer "Dwgs.User"))

        ${ ''/* Edgecuts */ }
        (fp_line (start -4.699 -1.7902) (end -4.0132 -2.476) (stroke (width 0.12) (type default)) (layer "Edge.Cuts"))
        (fp_line (start -4.699 -0.7488) (end -4.699 -1.7902) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
        (fp_line (start -4.699 -0.7488) (end -4.0132 -0.063) (stroke (width 0.12) (type default)) (layer "Edge.Cuts"))
        (fp_line (start -4.0132 -2.476) (end -2.413 -2.476) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
        (fp_line (start -2.413 -2.476) (end -2.032 -2.095) (stroke (width 0.12) (type default)) (layer "Edge.Cuts"))
        (fp_line (start -2.413 -0.063) (end -4.0132 -0.063) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
        (fp_line (start -2.413 -0.063) (end -2.032 -0.444) (stroke (width 0.12) (type default)) (layer "Edge.Cuts"))
        (fp_line (start -2.032 -2.095) (end -2.032 -0.444) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
        (fp_line (start -1.524 -6.4638) (end -1.524 -8.1402) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
        (fp_line (start -1.524 -6.4638) (end -0.8382 -5.778) (stroke (width 0.12) (type default)) (layer "Edge.Cuts"))
        (fp_line (start -0.8382 -8.826) (end -1.524 -8.1402) (stroke (width 0.12) (type default)) (layer "Edge.Cuts"))
        (fp_line (start -0.8382 -8.826) (end 0.8382 -8.826) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
        (fp_line (start -0.8382 -5.778) (end 0.8382 -5.778) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
        (fp_line (start 0.8382 -8.826) (end 1.524 -8.1402) (stroke (width 0.12) (type default)) (layer "Edge.Cuts"))
        (fp_line (start 0.8382 -5.778) (end 1.524 -6.4638) (stroke (width 0.12) (type default)) (layer "Edge.Cuts"))
        (fp_line (start 1.524 -6.4638) (end 1.524 -8.1402) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
        (fp_line (start 3.556 8.7762) (end 3.5565 7.176) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
        (fp_line (start 3.556 8.7762) (end 4.2418 9.462) (stroke (width 0.12) (type default)) (layer "Edge.Cuts"))
        (fp_line (start 3.5565 7.176) (end 3.9375 6.795) (stroke (width 0.12) (type default)) (layer "Edge.Cuts"))
        (fp_line (start 3.9375 6.795) (end 5.5885 6.795) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
        (fp_line (start 5.2832 9.462) (end 4.2418 9.462) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
        (fp_line (start 5.5885 6.795) (end 5.9695 7.176) (stroke (width 0.12) (type default)) (layer "Edge.Cuts"))
        (fp_line (start 5.969 8.7762) (end 5.2832 9.462) (stroke (width 0.12) (type default)) (layer "Edge.Cuts"))
        (fp_line (start 5.9695 7.176) (end 5.969 8.7762) (stroke (width 0.12) (type solid)) (layer "Edge.Cuts"))
    )
    `
}