# D&D 5e Spinoff
In an effort to improve my issues with D&amp;D 5e, I have attempted to craft my own game system based.

## Website

The website will probably use Astro & their documentation framework.

### Requirements

* It should support versioning. I want to make sure that each version of the game system can be held online and referenced.
* It should be searchable.
* It should have an intuitive hierachy. Perhaps sections for race, class, equipment, spells, rules. There should be rules for all three pillars of gameplay: combat, social, and exploration.

## Rules

### v0.0.1

* Start with the D&D 5e SRD
  * you can get the JSON version of the SRD here: https://github.com/5e-bits/5e-database/tree/main/src
  * alternatively, you can get the official PDF SRD here: https://media.wizards.com/2023/downloads/dnd/SRD_CC_v5.1.pdf
* modify how dying and death saves work
  * critical 1s no longer count as two failures. instead, they are given a lingering injury
  * 10s no longer count as a success. 1-10 is a failure, 11-20 is a success.
  * 20 no longer returns you to 1hp but immediately stabilizes you
  * each time a character loses consciousness, they gain one level of exhaustion
  * (note to self: review Nimble rules. they have a way players can stay engaged)
