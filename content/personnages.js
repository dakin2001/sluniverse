// "personnages" page: generated from editeur.html on 8/18/2026
// You can also edit this file by hand: each object is one entry.
window.WIKI = window.WIKI || {};
window.WIKI.personnages = [
  {
    "id": "heptablade",
    "title": "Hepta Blade",
    "subtitle": "Hatotian's Seven Kills - Training Fanatic - Where Loyalty Lies",
    "image": "images/personnages/heptablade/heptablade-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Bruiser",
      "Main DPS"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Chen Xin"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Bruiser"
      },
      {
        "label": "Role",
        "value": "Main DPS"
      },
      {
        "label": "Mechanic",
        "value": "Laceration"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Hepta Blade is all about stacking damage over time and then blowing it all up at once. His main gimmick is a status called [Selfless] once it's active, he summons floating swords that automatically attack enemies for him, unleashing continuous strikes on anyone unlucky enough to be nearby. Every hit adds stacks of [Laceration] on the target (basically a \"wound\" debuff that builds up).\n\nThe goal is simple: get into [Selfless] mode, pile up as many [Laceration] stacks as you can on the enemy, then use his big Skill 1 or Skill 4 ultimate to detonate everything at once for a huge burst of damage.\n\nAs you level him up (Spirit ranks), he gets extra perks like more Crit Damage while in [Selfless], faster attacks, and even stronger explosions from Laceration.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/heptablade/background/heptablade-background.png",
    "mechanics": [
      "Laceration"
    ],
    "normalAttack": {
      "title": "Body Strike",
      "key": "Dmg",
      "icon": "◆",
      "description": "As the pinnacle Spirit of swordsmanship, the Hepta Blade's edge can shatter all, unleashing sword shadows forward for multiple Combo attacks on the target, dealing a total of 68+445.2% ATK Dmg."
    },
    "initiative": {
      "title": "Strategic Mastery",
      "key": "Dmg",
      "icon": "◆",
      "description": "The unparalleled Sword Will of the Hepta Blade is unstoppable, summoning five sharp swords to continuously inflict Dmg on surrounding enemies, dealing up to 12.5% ATK Dmg"
    },
    "ultimate": {
      "skill1": {
        "title": "Omni Slash",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Gain [Selfless] effect. Sword formation continuously attacks, adding 1 stack of [Laceration] with each hit. Total Dmg equals 756+1036.8% ATK. Execute ultimate can be unleashed during this time.\n\nExecute ultimate consumes all [Sword Will], transforming into the true Hepta Blade, dealing 504+691.2% ATK Dmg to all enemies in range and immediately triggering [Laceration], increasing [Laceration] Dmg by 50.0%, then ending [Selfless] Status.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Laceration] effect triggered by Execute Ultimate increased to 100%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Execute Ultimate Dmg increases by an additional 20%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "During the ultimate continuous attacks, the Passive [Sword Will] Crit Dmg increases by 20%",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50K Yr",
            "description": "During the ultimate continuous attacks, Dmg to the target is enhanced by the number of [Laceration] stacks on the target, up to a maximum of 40%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "During the Skill, Hepta Blade's overall Crit Dmg Up by 50.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Divine Slayer",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Channel your killing intent to merge into Giant Hepta Blade and enter [Selfless] Status. Then, use Bladeride to perform a horizontal sweep in front, dealing significant Dmg and triggering [Laceration]. This trigger will not clear the [Laceration] stacks. Follow up with a downward Execute, triggering [Laceration], and then exit [Selfless] Status.\n\nTotal Dmg can reach 1149+1584.0% ATK.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Laceration] Dmg triggered by Ultimate increased by 100%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "During the Ultimate, [Sword Will] attack speed doubles and Crit Dmg increases by 20%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Execute Dmg is enhanced by the target's [Laceration] stacks, up to 40%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Execute Crit Dmg is enhanced by the target's [Laceration] stacks, up to 40%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Execute Strike additionally detonates [Laceration].",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Sword Rain",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Gain [Selfless] Status. For the next 5 seconds, Hepta Blade's attack applies 1 stack of [Laceration] to the target. Release [Sword Shadow] in the forward area, dealing a total of 75+519.2% ATK Dmg to all targets within range.\n\nRecasting the skill deals 18+126.0% ATK Dmg to enemies along the path and immediately triggers [Laceration].",
        "cost": 0,
        "cd": 20,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Within 5s after releasing Skill, each hit by Chen Xin inflicts [Laceration] on the enemy.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Skill second stage increases [Laceration] Dmg by 10% when triggered.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Skill second stage does not remove [Laceration] effect when triggered. Additionally, doubles the current Laceration stacks on the target when hit.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Selfless] Status allows the second skill to be repeatedly activated with a 5s cooldown. Repeated activation of the second skill does not refresh the [Selfless] Status.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "In Selfless state, gain an additional 3 stacks for every 10 stacks of [Laceration].",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Unified Sword",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Summon sword formation deals total 45+302.4% ATK as Dmg to enemies around, entering [Selfless] Status and gaining 10 stacks of [Jade Fragment]. Increases Sword Aura Dmg to a total of 18+129.6%.",
        "cost": 0,
        "cd": 20,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Sword Aura inflicts [Laceration] increased to 3 stacks.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Sword Aura Dmg Up by 25%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After casting this Skill, every three Sword Aura hits on enemies with 30+ stacks of [Laceration] triggers Laceration Dmg without removing the effect.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "In [Selfless] state, each [Laceration] trigger increases Sword Aura Dmg by 20%, up to 60%, lasting until exiting [Selfless] state.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Sword Aura inflicts [Laceration] increased to 5 stacks, Sword Aura Dmg Up by 50.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Seven Killings",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Each time you gain [Selfless] effect, you additionally gain 1 stack of [Sword Will]. Each attack on a target transforms each stack of [Sword Will] into a sword that Auto attacks the target and deals Dmg. After each sword attack, gain an additional stack of [Sword Will]. You can have up to 7 stacks of [Sword Will]. When [Selfless] effect ends, lose all [Sword Will] stacks.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Asura Hepta Blade Talent",
        "haloDescription": "Sword Will reaches the Selfless realm, Asura merges with the Hepta Blade.\n\nDuring [Selfless] Duration, increases [Laceration] cap to 200 stacks, and Hepta Blade's Laceration Dmg gains 20% [Final Dmg Up].",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Sword Will] attack has a 20% chance to inflict [Laceration].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Sword Will] chance to inflict [Laceration] increased to 50%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Gain an additional 20% Crit Dmg increase in [Selfless] Status.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each stack of [Sword Will] grants an additional 4% Dmg Bonus.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Upon hitting the target, Dmg Up based on the target's Laceration stacks by 0.1%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Sword Forged Hepta Blade",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Each time you gain [Selfless] effect, you additionally gain 1 stack of [Sword Will]. Each attack on a target transforms each stack of [Sword Will] into a sword that auto attacks the target and deals Dmg. Each time Hepta Blade deals a Normal, [Sword Will] stacks double. You can have up to 7 stacks of [Sword Will]. When [Selfless] effect ends, lose all [Sword Will] stacks. Every 35 hits by swords transformed from [Sword Will], gain a stack of [Jade Fragment].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Asura Hepta Blade Talent",
        "haloDescription": "Asura grants the Hepta Blade the power of slaughter, allowing it to unleash a crimson sky with a single strike.\n\nDuring [Selfless] Duration, increases [Laceration] cap to 200 stacks, and Hepta Blade's Laceration Dmg gains 20% [Final Dmg Up].",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "With 7 stacks of [Sword Will], Sword Aura Dmg Up by 20%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Gain a stack of [Jade Fragment] for every 25 Dmg dealt by the sword formed from [Sword Will].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "In [Selfless] Status, Crit Dmg from Sword Aura increases by 30%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Extend [Selfless] Status Duration by 3s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Every 20 Dmg dealt by the sword formed from [Sword Will] grants a stack of [Jade Fragment].",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "thunderex",
    "title": "Thunderex",
    "subtitle": "Tyrant's Kin - Supreme Divine Thunder - Linked by Fate",
    "image": "images/personnages/thunderex/thunderex-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Bruiser",
      "Main DPS"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Yu Yuanxing"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Bruiser"
      },
      {
        "label": "Role",
        "value": "Main DPS"
      },
      {
        "label": "Mechanic",
        "value": "Electrified"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Thunderex is a shapeshifting storm on legs, spending most of the fight building up [Wind Thunder Power] so he can transform into his beefed-up [Thunder Form]. Once he's in that state, he takes to the skies with Super Armor on, gets a whole new combo set, and basically becomes immune to being interrupted while he zaps everything nearby.\n\nHis main damage tool is [Electrified], a debuff he slaps onto enemies that makes them take extra damage from basically everything he does afterward. Stack it up, keep it refreshed, and watch his numbers snowball the longer the fight goes.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/thunderex/background/thunderex-background.png",
    "mechanics": [
      "Electrified"
    ],
    "normalAttack": {
      "title": "Thunder Motives",
      "key": "Dmg",
      "icon": "◆",
      "description": "Wield the Dragon Orb to guide Thunderex in ATK, performing up to five Combo Normal Attacks, dealing a total of 35+282.9% ATK Dmg."
    },
    "initiative": {
      "title": "Divine Thunder",
      "key": "Dmg, Traction",
      "icon": "◆",
      "description": "Summon Thunderex at the target location to ATK and Traction nearby targets, then unleash Divine Thunder, dealing a total of 14.1% ATK Dmg. If [Thunderstorm] or [Wind Thunder Power] is unlocked, restore 300 [Wind Thunder Power]."
    },
    "ultimate": {
      "skill1": {
        "title": "Tyrant's Piercing Strike",
        "key": "Dmg, Electrified",
        "icon": "◆",
        "description": "The Thunder Dragon Orb slowly ascends as Thunderex spirals upward to chase it, finally crashing down to deal massive area Dmg, totaling 125+846.6% ATK Dmg.",
        "cost": 3,
        "cd": 20,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "In [Thunder Form], the Ultimate hits targets with an additional [Electrified] effect. Thunderex's Normal ATK, Skill, and Ultimate in [Thunder Form] deal 10% Dmg Bonus to [Electrified] targets for 10s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After unleashing the Ultimate, increase Normal, Skill, and Ultimate Dmg Bonus by 10% for Thunderex Spirit in [Thunder Form] for 10s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "In [Thunder Form], Ultimate Strike Dmg increased by 80%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Upon unleashing the Ultimate, each target with [Electrified] gains a 40% Dmg increase, up to a maximum of 80%, lasting 10s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Aerial Ultimate Soul Power cost reduced to 200; Aerial Ultimate hit applies [Yang Thunder], and Ground Ultimate hit applies [Yin Thunder]. [Yang Thunder] and [Yin Thunder]: Duration 5s. When both effects are present, consumes [Yang Thunder] and [Yin Thunder] to deal 6+42.3% ATK as Ultimate Dmg.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "True Dragon's Majestic Gaze",
        "key": "Dmg, Electrified",
        "icon": "◆",
        "description": "First-Stage Ultimate: Thunderex reveals Dragon's Might, summoning multiple Divine Thunder strikes to attack surrounding targets, dealing 40+281.9% ATK as Dmg. If [Thunderstorm] is unlocked, enter [Thunder Form]. When releasing the first-stage Ultimate, if already in [Thunder Form], restore 50% [Wind Thunder Power].\n\nSecond-Stage Ultimate: Thunderex swallows the Thunder Dragon Orb, gaining full Thunder power and transforming into a Thunder Golden Dragon. Unleashes a world-shattering golden Thunder, dealing 102+704.7% ATK as Dmg to the target, and immediately exits [Thunder Form].",
        "cost": 3,
        "cd": 20,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "A hit with the Ultimate adds [Electrified]; increases Dmg Bonus by 20% for 10s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each Normal hit in [Thunder Form] grants 1 stack of [Thunderbolt]; Skill hit in [Thunder Form] grants 3 stacks of [Thunderbolt]. [Thunderbolt]: Each stack provides 3% Strike Dmg Up, stacks up to 15, Duration 15s. Effect removed upon exiting [Thunder Form].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After casting the first stage of the ultimate, a lightning bolt strikes a target location every second, dealing Dmg and granting 1 stack of [Thunderbolt], Duration 15s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "The second stage of the ultimate consumes all [Thunderbolt] stacks, increasing ultimate Dmg by 8% per stack.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After unleashing an Ultimate, summon additional lightning to deal damage and gain 1 stack of [Thunder Wrath] for 15s. Enhance [Thunder Wrath] effect: Each stack increases Strike Dmg to 4.0%, stacking up to 15 layers for 15s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Thunder Dragon Breath",
        "key": "Dmg",
        "icon": "◆",
        "description": "Thunderex unleashes Dragon Breath, dealing multiple hits of Dmg to a wide range of enemies in front, totaling 56+412.4% ATK Dmg.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Lightning bursts again along the breath's path, dealing two-stage Dmg.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Second-stage explosion Dmg Up by 100%. The resulting Shock gathers targets in the area into a single path.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Electrified] targets' Strike Dmg Up by 60%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "In [Thunder Form], Normal Attack hits reduce aerial Skill cooldown by 0.5s each time. After releasing an aerial Skill, Use Normal Attack to directly trigger the third stage of [Thunder Form] Normal Attack.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "The second-stage explosion triggers 4 additional times, increasing Dmg range each time.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Divine Thunder Transforms into Dragon",
        "key": "Dmg",
        "icon": "◆",
        "description": "Thunderex lunges forward, then Divine Dragon's Tail Whip sweeps out ground Thunder, dealing a total of 1116.6% ATK as Dmg.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Skill hits apply [Electrified] to the target.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Electrified] Dmg caused by Skill Up by 50%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Strike Dmg [Electrified] targets increased by 80%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Skill hit applies [Primal Thunder] effect to target, lasting 10s. Thunderex Spirit Dmg to target increased by 15%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Enhances [Primal Thunder] effect, and target receives 20.0% Dmg Bonus from Thunderex Spirit for 10s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Thunderstorm",
        "key": "Dmg",
        "icon": "◆",
        "description": "[Wind Thunder Power]: Automatically regenerates over time; hitting a target restores [Wind Thunder Power]. When [Wind Thunder Power] is full, it activates the enhanced Skill [Thunder Strike], entering [Thunder Form] upon Skill release.\n\n[Thunder Form]: Enter Fight Fly Status, maintaining Super Armor throughout, continuously consuming [Wind Thunder Power]. When [Wind Thunder Power] is depleted, or upon actively performing a jump action, swiftly return to the ground. Gain a new set of Normal Attacks, a three-stage Combo Normal Attack, dealing a total of 54+353.5% ATK as Dmg, only affected by Passive Dmg Bonus. Refresh Skill cooldown and enhance Skill effects.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Asura Thunder Dragon Talent",
        "haloDescription": "Blessed by the Asura, Thunderex gains enhanced thunder power. In [Thunder Form], Thunderex's [Skill] gains [Final Dmg Up] by 20%. In Ground Form, Thunderex's [Skill] gains [Final Dmg Up] by 25%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "In [Thunder Form], gain [Furious Thunder], increasing Dmg Bonus by 20% for 10s. Effect removed upon exiting [Thunder Form].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Upon first entering the Fight, gain 50% [Wind Thunder Power].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Wind Thunder Power] energy cap increased by 500; while grounded, triggering [Electrified] Dmg restores 21 [Wind Thunder Power] each time, once per second.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Control Immunity for 8 seconds upon entering [Thunder Form] (adjusted to 3 seconds in PVP).",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Upon entering the aerial state, gain [Blitz] for 8s, granting Thunderex Spirit a Dmg Bonus of 10.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Wind Thunder Companion",
        "key": "Dmg",
        "icon": "◆",
        "description": "[Wind Thunder Power]: Automatically regenerates over time; hitting a target restores [Wind Thunder Power]. When [Wind Thunder Power] is full, it activates the enhanced Skill [Thunder Strike], entering [Thunder Form] upon Skill release.\n\n[Thunder Form]: Enter Fight Fly Status, maintaining Super Armor throughout, continuously consuming [Wind Thunder Power]. When [Wind Thunder Power] is depleted, or upon actively performing a jump action, swiftly return to the ground.\n\nGain a new set of Normal Attacks, a three-stage Combo Normal Attack, dealing a total of 54+353.5% ATK as Dmg, only affected by Passive Dmg Bonus. Refresh Skill cooldown and enhance Skill effects. Hold Normal to release charged Normal [Thunderous Surge], swiftly consuming [Wind Thunder Power], dealing 24+162.5% ATK as Dmg per second to a wide range of nearby targets, only affected by Passive Dmg Bonus.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Asura Thunder Dragon Talent",
        "haloDescription": "Blessed by the Asura, Thunderex gains enhanced thunder power. In [Thunder Form], Thunderex's [Skill] gains [Final Dmg Up] by 20%. In Ground Form, Thunderex's [Skill] gains [Final Dmg Up] by 25%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "In [Thunder Form], gain [Furious Thunder], increasing Dmg Bonus by 20% for 10s. Effect removed upon exiting [Thunder Form].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Upon first entering the Fight, gain 50% [Wind Thunder Power].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Continuously charge and release Normal [Thunderous Surge], increasing Dmg Bonus by 10% per second, up to a maximum of 40%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Control Immunity for 8 seconds upon entering [Thunder Form] (adjusted to 3 seconds in PVP).",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Gain [Flash Strike] for 6s after entering aerial state; Thunderex Spirit Dmg receives 10.0% Dmg Bonus.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "celestimums",
    "title": "Celestimums",
    "subtitle": "Phantom Chrysanthemum Frost - Herd's Temptation - Withering Throne",
    "image": "images/personnages/celestimums/celestimums-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Bruiser",
      "Sub Dps"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Yue Guan"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Bruiser"
      },
      {
        "label": "Role",
        "value": "Light Sub Dps"
      },
      {
        "label": "Mechanic",
        "value": "Flash"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Celestimums looks delicate but plays like a garden that's actively trying to kill you. Her whole kit revolves around planting [Frost Blossom] flowers around the battlefield, then watching them bloom into extra damage and stacks of [Self-Admiration] (yes, that's really the buff name, she knows she's pretty and it shows in her damage numbers).\n\nThe more flowers she plants and blooms, the stronger she gets, up to 100+ stacks of Self-Admiration boosting her overall damage. On top of that, she applies [Flash] to enemies, a debuff that makes them take extra damage whenever it's triggered again, which happens a lot once her flowers start spreading it around too.\n\nHer ultimates lean into two different vibes: Skyward Chrysanthemum rains golden beams from above like some kind of holy judgment, while Heartbroken as Flowers Fall turns her petals into a blade tornado that pulls enemies in and shreds them for 10 seconds straight.\n\nPlant flowers, let them bloom, get stronger, then bury the enemy in petals and light. Prettiest character in the game, also lowkey terrifying.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/celestimums/background/celestimums-background.png",
    "mechanics": [
      "Flash"
    ],
    "normalAttack": {
      "title": "Petal Blade",
      "key": "Dmg",
      "icon": "◆",
      "description": "Blade-like Celestimums petals swiftly dance in the air, striking enemies ahead multiple times, inflicting 49+366.0% ATK as Dmg. Unlock Passive Skill to create 1 [Frost Blossom] during the fourth attack.\n\nHold Normal to unleash a charged Normal, repositioning [Frost Blossom] and teleporting around the current..."
    },
    "initiative": {
      "title": "Blooming Miracle",
      "key": "Dmg",
      "icon": "◆",
      "description": "Summon Celestimums to float mid-air and slowly advance, continuously emitting golden Clinging Light to targets within range, dealing up to 48.0% ATK Dmg.\n\nUpon unlocking the passive skill, Celestimums transform into buds and fall to the ground, creating 1 [Frost Blossom]."
    },
    "ultimate": {
      "skill1": {
        "title": "Skyward Chrysanthemum",
        "key": "Dmg",
        "icon": "◆",
        "description": "Celestimums ascend slowly, bursting into radiant gold for 7s, golden beams descend on random targets, dealing 8+54.9% ATK Dmg. Maximum Dmg: 168+1153.3% ATK.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Ultimate active area follows player movement, Ultimate range increased by 20%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Every fourth Light Beam attack inflicts 1 stack of [Flash] on the targets hit.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Ultimate Duration +3s, Light Beam Strike Cap increased to 30 times",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After unleashing Ultimate, Celestimums Spirit's Strike Dmg increased by 30% for 15s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Increases Light Pillar's ATK range by 50% and applies [Radiance] to the first target hit. [Radiance]: Each stack increases Flash Dmg taken by the target by 2%, up to 360%, Duration 60s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Heartbroken as Flowers Fall",
        "key": "Dmg",
        "icon": "◆",
        "description": "Celestimums release a flurry of petals, transforming into sharp blades, creating a Windstorm of countless petal blades. The Windstorm lasts 10s, continuously pulling targets within range towards the center and dealing Dmg, up to 180+1170.0% ATK Dmg.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Activate Core Passive to automatically create a [Frost Blossom] every 3s during the Ultimate.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "During the Ultimate, apply 1 stack of [Flash] to all targets within range every 3s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Within range, [Frost Blossom] and [Skyward Frost Blossom] Dmg Up by 50%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Activate core passive, during Ultimate, each [Frost Blossom] and [Skyward Frost Blossom] created increases Ultimate Dmg by 5%, up to 40%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Within the Ultimate's range, create a Feather Blade zone every 2s, dealing extra damage and applying [Afterglow]. Each stack of [Afterglow] increases the target's Flash Dmg by 20%, up to 100%, Duration 20s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Frost Gather",
        "key": "Dmg, Traction",
        "icon": "◆",
        "description": "Celestimums transform into blades for Swift Combo ATK ahead, dealing a total of 36+222.4% ATK as Dmg, then return to the starting point for a powerful horizontal slash dealing 30+222.5% ATK as Dmg and apply 1 layer of [Flash]. Unlock Passive Skill to create 2 additional [Frost Blossom].",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When Skill first hits different targets, [Fade] applies 2 stacks of [Flash] to the target and grants 2 stacks of [Light Energy].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Skill hits apply [Nether Court] effect.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Creates an additional [Frost Blossom] at the Skill starting point.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Enhances [Nether Court] effect, increasing Strike Dmg to 30%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Greatly accelerates Skill release speed, and Skill Dmg Up by 100%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Frost Blades",
        "key": "Dmg",
        "icon": "◆",
        "description": "Celestimums transform into [Celestial Frost Blossom], with petals becoming sharp blades for a Swift Combo, dealing a total of 40+277.3% ATK Dmg, Duration 10s.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Every 2s, apply 1 stack of [Flash] to targets around [Fade], gain 1 stack of [Light Energy].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Skill hits apply [Nether Court] effect.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When only Skill-created [Skyward Frost Blossom] ends, create 1 [Frost Blossom] at the original location.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Enhances [Nether Court] effect, increasing Strike Dmg to 30%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Enhances [Nether Court] effect, increasing Strike Dmg to 50%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Desolation Frost Blossom",
        "key": "Dmg",
        "icon": "◆",
        "description": "When Celestimums Spirit releases specific moves, it creates [Frost Blossom] at designated locations. When [Frost Blossom] blooms, gain 1 stack of [Self-Admiration], each stack increases Celestimums Spirit's Dmg Bonus by 0.4%, up to 100 stacks, Duration 30s.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When Celestimums Spirit applies [Flash] to enemies, it also adds [Flash] to [Frost Blossom] near the target. Each [Frost Blossom] can have up to 3 stacks of [Flash].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Max [Frost Blossom] Quantity increased by 1.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Use other Spirit's Normal Attacks to create 1 [Frost Blossom] around the target, triggering at most once every 10s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After each [Frost Blossom] blooms, add 2 stacks of [Self-Admiration]; [Self-Admiration] stack limit increased to 200, granting an additional 20% Dmg Bonus at full stacks.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When the Celestimums Spirit is in the background, Dmg increases by 25.0% Dmg Bonus.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Chrysanthemum of the Heavens",
        "key": "Dmg",
        "icon": "◆",
        "description": "When Celestimums Spirit uses specific moves, it creates [Frost Blossom] at designated locations. When there are 3 [Frost Blossom] on the field, the first 3 created [Frost Blossom] immediately bloom and fuse into one [Celestial Chrysanthemum]. After each [Frost Blossom] blooms, gain 1 stack of [Self-Admiration], each stack increases Celestimums Spirit Dmg Bonus by 0.6%, stackable up to 100 stacks, Duration 30s. When the Celestimums Spirit applies [Flash] to an enemy, it also applies the [Flash] effect to nearby [Frost Blossom] and [Celestial Chrysanthemum]. Each [Frost Blossom] and [Celestial Chrysanthemum] can have up to 3 stacks of [Flash].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When [Chrysanthemum of the Heavens] is created, apply 1 stack of [Flash] to nearby targets.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Use other Spirit's Normal Attacks to create 1 [Frost Blossom] around the target, triggering at most once every 10s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Chrysanthemum of the Heavens] starts with 1 stack of [Flash], up to 5 stacks of [Flash].",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Self-Admiration] stack limit increased by 100 stacks.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When the Celestimums Spirit is in the background, Dmg increases by 25.0% Dmg Bonus.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": {
      "title": "Stalled Pole Domain",
      "key": "Dmg, Control",
      "icon": "◆",
      "cost": 0,
      "cd": 600,
      "fuseWith": "guimei",
      "description": "Forcibly merge the extreme energies of light and shadow, creating a time-distorting [Stalled Pole Domain] with a Duration of 4.5s. Inflicts 100% [Time Lag] effect on all targets within the field, dealing Gui Mei 150.0% ATK as Dmg per second. Spirimaster within the field gains a 30% [Support Dmg Bonus], Duration 10s.",
      "tiers": [
        {
          "threshold": "All Spirit Combinations",
          "description": "Yuel Guran and Gui Mei gain 1 stack of [Lucid Murk] after each Ultimate cast, duration permanent, max 12 stacks. When casting [Stalled Pole Domain], gain equal stacks of [Ever Shadow] based on [Lucid Murk] stacks. [Ever Shadow]: each stack grants 4% [Support Dmg Bonus], Duration 30s.",
          "condition": "🟡 5★ activated"
        },
        {
          "threshold": "All Spirit Combinations",
          "description": "[Stalled Pole Domain] Duration extended to 6s. Cooldown reduced to 180s.",
          "condition": "🔴 2★ activated"
        },
        {
          "threshold": "All Spirit Combinations",
          "description": "[Ever Shadow] effect duration extended to 60s.",
          "condition": "🔴 4★ activated"
        }
      ]
    },
    "skins": []
  },
  {
    "id": "guimei",
    "title": "Gui Mei",
    "subtitle": "Hell Enchant - Hell Master and Disciple - Eternal Night's Flame",
    "image": "images/personnages/guimei/guimei-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Support",
      "Control Dmg Up"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Gui Mei"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Healer"
      },
      {
        "label": "Role",
        "value": "Support"
      },
      {
        "label": "Mechanic",
        "value": "Lifesteal (self-damage → healing conversion)"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Gui Mei is a creepy little support who basically fights by feeding off his own health and calling in ghost buddies to do his dirty work. His core mechanic, [Illusory Blood], turns his HP into a special resource whenever he takes damage, then he spends that resource to heal himself back up when he hits enemies. It's a weird risk and reward loop: take a hit, convert it into fuel, use that fuel to patch yourself up.\n\nHis ultimates summon ghosts and spectral hands that auto attack nearby enemies, chip away at their Soul Power, and shower the whole team with [Support Dmg Bonus] stacks. Basically, every time a ghost does something, everyone on the team gets a little stronger.\n\nHe's also got a nasty invincibility dodge (Phantom Escape), letting him merge into the ground and become untouchable for a couple seconds before popping back up to smack whatever's nearby. Combine that with his passive [Soul Drain Claw], ghostly hands that pop out of the ground to zap enemies and refund his Soul Power, and he's less \"healer\" and more \"friendly neighborhood poltergeist who happens to keep the team alive.\"",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/guimei/background/guimei-background.png",
    "normalAttack": {
      "title": "Excruciating Pain",
      "key": "Dmg",
      "icon": "◆",
      "description": "Life and death are unpredictable, the ghost scythe claims lives. Transforms into a ghostly scythe, performing up to four attacks, dealing a total of 32+213.2% ATK Dmg."
    },
    "initiative": {
      "title": "Phantom Escape",
      "key": "Dmg, Invincibility, Strong Super Amor",
      "icon": "◆",
      "description": "Ghostly and elusive, vanishing without a trace. Gui Mei merges into the ground, transforming into a shadow for 2s, becoming immune to Dmg and freely mobile, dealing Dmg to nearby targets.\n\nAfter 2s, the shadow reforms into a human shape, bursting from the ground with dark energy, dealing a total of 30+179.4% ATK Dmg."
    },
    "ultimate": {
      "skill1": {
        "title": "Mist Parade",
        "key": "Dmg, SP Regen",
        "icon": "◆",
        "description": "Spectre envelops the battlefield in pure darkness, summoning Hell spirits to hunt down enemies.\n\nSpirits automatically track foes, each attacking up to 6 times, dealing 3+17.5% ATK as Dmg per hit. Spirimaster gains 1% [Support Dmg Bonus], up to a maximum of 10% [Support Dmg Bonus], Duration 20s.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "God of Stars Spectre Ultimate",
        "haloDescription": "Command the spirits, heed my call. Vanquish intruders, names unasked.\n\nUltimate does not consume Soul Power, but deducts 10% current HP. Each ghost hit grants 1 stack of [Impermanence], increasing all Spirit final Dmg by 2% per stack, up to 16%, Duration 15s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Summon an additional [Ghost].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Ghost] hitting a target grants Spirimaster up to 20% [Support Dmg Bonus], lasting 25s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Summon an additional [Ghost], and [Ghost] hits have a 10% chance to trigger [Soul Drain Claw].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Increase the maximum attack count of [Ghost] by 4 times.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Ghost] adds 1 [Soul Erosion] mark per attack. All Spirit Normals on targets with [Soul Erosion] consume all [Soul Erosion] stacks, dealing Ultimate Dmg based on triggering Spirit ATK and [Soul Erosion] stacks.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Phantom Gate of Ghosts",
        "key": "Dmg, SP Regen",
        "icon": "◆",
        "description": "Gui Mei reveals its true form, claiming the souls of all nearby enemies, and finally reaps all souls with the Reaper's Scythe, dealing 27+129.6% ATK as Dmg; Spirimaster gains 1 stack of [Underworld Passage] effect.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "God of Stars Spectre Ultimate",
        "haloDescription": "With this scythe, guide you through the Underworld. Cross this gate, eternal rest awaits.\n\nUltimate does not consume Soul Power, but deducts 10% current HP. Enhances [Underworld Passage], increasing all Spirit final Dmg by 3% per stack, up to 18%, Duration 60s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Apply [Locked Souls] to the target for 20s; Spirimaster gains 10% [Support Dmg Bonus] for 20s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When a Spirimaster attacks a target with [Locked Souls], it summons a [Ghost] to Auto attack the target once, restoring 4.5% of the Gui Mei's Max Hp. Can trigger once every 2s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Ghost] restores 10 SP upon hitting a target; each stack of [Underworld Passage] additionally restores 2.5 SP.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Every 3 stacks of [Underworld Passage], when the Spirimaster attacks a target with [Locked Souls], an additional [Ghost] is summoned for Auto attack. The second [Ghost] triggers at 2s intervals; the third [Ghost] triggers at 2.5s intervals.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Underworld Passage] grants all Spirits 5% Skill Dmg and 5% Ultimate Dmg per stack.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Shadowed Soul",
        "key": "Healing, SP Regen",
        "icon": "◆",
        "description": "Gain [Illusory Blood] mechanic bar:\n\nWhen taking Dmg, 100% of HP is converted to [Illusory Blood]. [Illusory Blood] depletes at 1% of its maximum value per second, and each time Dmg is taken, 20% of current [Illusory Blood] is lost.\nWhen dealing Dmg to enemies, consume 20% [Illusory Blood] to restore HP at 25% efficiency.\n\nActively release Skill to summon Gui Mei possession, adding [Brain Devour] for a Duration of 7s.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Upon releasing Skill, gain [Soul Absorption] for a Duration of 20s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Illusory Blood] will no longer decrease over time.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Soul Absorption]: Sp Regen efficiency upon hit increased to 125%, Duration 20s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Brain Devour] Dmg taken will no longer reduce [Illusory Blood], [Brain Devour] Duration increased by 2s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Soul Absorption] grants 10% Support Dmg Bonus.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Shadow of Nothingness",
        "key": "Healing, SP Regen",
        "icon": "◆",
        "description": "Gain [Illusory Blood] Mechanism bar:\n\nWhen taking Dmg, 100% of HP is converted to [Illusory Blood]. [Illusory Blood] depletes at 1% of its maximum value per second, and each time Dmg is taken, 20% of current [Illusory Blood] is lost.\nWhen dealing Dmg to enemies, consume 20% [Illusory Blood] to restore HP at 25% efficiency.\n\nActively release Skill to summon Gui Mei possession, adding [Brain Devour] for a Duration of 30s. Release [Skill] or [Ultimate] 3 times to end the effect early.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Illusory Blood] no longer decreases automatically over time; each hit reduces [Illusory Blood] by 10% of its current value.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When Spirimaster is in [Corrosive Shadow] area, gain [Soul Absorption] for 20s. Triggers once every 30s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Soul Absorption]: Sp Regen efficiency upon hit increased to 125%, Duration 20s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Brain Devour] activation count increased to 4; triggered [Skill] or [Ultimate] Dmg Bonus increased to 25%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Brain Devour] activation increased to 5 times; triggered [Skill] or [Ultimate] Dmg Bonus increased to 40%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Soul Drain Claw",
        "key": "Dmg, SP Regen",
        "icon": "◆",
        "description": "After a Normal attack from any Spirit hits a target, there is a 15% chance for a ghost hand to emerge from the ground near the target. The ghost hand strikes the ground, dealing 1+7.4% ATK as area Dmg, triggering at most once every 5s.\n\nWhen the ghost hand hits, it reduces the target's Soul Power by 10, restores 40 Soul Power to the Spirimaster, and gains 1 stack of [Soul Fragment].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When Passive is triggered, there is a 15% chance to summon 2 [Soul Drain Claw].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Soul Drain Claw] restores SP to 50 upon hit.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Increase [Soul Drain Claw] trigger chance by 10%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Soul Drain Claw] has a 50% chance to gain 2 stacks of [Soul Fragment] upon hit, with a stack cap increased to 30 stacks.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After entering the Fight, every 10s, [Soul Drain Claw] emerges from the ground to attack, dealing Dmg, with a 10%/50%/25%/15% chance to gain 25/50/75/100 SP Restore.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Phantom Claw",
        "key": "Dmg, SP Regen",
        "icon": "◆",
        "description": "After a Normal attack from any Spirit hits a target, there is a 15% chance for a ghost hand to emerge from the ground near the target, dealing area Dmg equal to 1+7.4% of ATK, triggering at most once every 5s.\n\nGhost hand hits reduce the target's Soul Power by 10, restore 40 Soul Power to self, and gain 1 stack of [Soul Fragment]. Ghost hand creates an area of [Corrosive Shadow], granting Spirimaster 15% [Support Dmg Bonus] when inside.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When Passive is triggered, there is a 15% chance to summon 2 [Soul Drain Claw].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Soul Drain Claw] restores SP to 50 upon hit.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When Spirimaster is in [Corrosive Shadow] area, all Spectre Spirit skill trigger chance increased by 7.5%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Spirimaster in [Corrosive Shadow] gains [Support Dmg Bonus] increased to 10%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Spirimaster under [Corrosive Shadow] gains 30% Dmg Reduction.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "fieryphoenix",
    "title": "Fiery Phoenix",
    "subtitle": "Intense Blast Burn - Scorching Shadow - Ice and Fire Nirvana",
    "image": "images/personnages/fieryphoenix/fieryphoenix-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Bruiser",
      "Additional Attack"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Ma Hongjun"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Bruiser"
      },
      {
        "label": "Role",
        "value": "Additional Attack"
      },
      {
        "label": "Mechanic",
        "value": "Scorch"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Fiery Phoenix basically fights by setting the entire battlefield on fire and letting it cook. His whole kit revolves around stacking [Burn] on enemies and keeping the flame effect [Flaming Phoenix] alive as long as possible, ticking damage every second while boosting his own Burn damage in the process.\n\nHis Ultimate (Phoenix Strike) drops a Phoenix Supernova that slowly builds up before exploding for a massive burst of damage, leaving behind a Flame Zone that keeps burning enemies even after the explosion's done. Meanwhile his passive turns every Skill or Ultimate cast into more free burn ticks, plus a periodic Solar Shock that blasts everyone nearby.\n\nHe's less \"phoenix that occasionally breathes fire\" and more \"walking wildfire that never really stops burning.\" Every skill just adds more layers of fire on top of fire, until the enemy is basically standing in a bonfire with legs.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/fieryphoenix/background/fieryphoenix-background.png",
    "mechanics": [
      "Scorch"
    ],
    "normalAttack": {
      "title": "Phoenix Call",
      "key": "Dmg",
      "icon": "◆",
      "description": "Harness the Fiery Phoenix's flames to unleash up to 4 Combo attacks, dealing a total of 45+321.0% ATK Dmg."
    },
    "initiative": {
      "title": "Soaring Phoenix",
      "key": "Dmg",
      "icon": "◆",
      "description": "Vibrating fiery wings, unleashing a Burst of intense Fire, dealing 16+105.0% ATK Dmg to nearby enemies."
    },
    "ultimate": {
      "skill1": {
        "title": "Phoenix Strike!",
        "key": "Dmg, Scorch",
        "icon": "◆",
        "description": "Decree the Phoenix to incinerate the land with a blazing Fire, unleashing [Phoenix Supernova] to deal Dmg per second to nearby targets for a Duration of 6s. The supernova culminates in a powerful explosion, dealing a total of 168+1133.3% ATK Dmg. Each time this Skill deals Dmg, it applies 1 stack of [Scorch] effect to the target.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Phoenix Supernova] explosion leaves a [Flame Zone], dealing 5% of [Phoenix Supernova] Blast Dmg per second and applying [Scorch], Duration 5s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Enemies hit by the ultimate receive 140% increased [Scorch] Dmg, Duration 10s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Enemies hit by the ultimate receive 240% increased [Scorch] Dmg, Duration 10s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Flame Zone] Duration increased to 10s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Phoenix Supernova] Dmg Up by 15%, and [Flame Zone] Dmg Up by 10%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Fire Phoenix Domain",
        "key": "Dmg, Scorch",
        "icon": "◆",
        "description": "Fiery Phoenix activates [Fire Phoenix Domain], dealing 14+94.6% Dmg per second to nearby targets and applying [Scorch] effect for 10s. Refreshes [Flaming Phoenix] Duration within the domain, doubling the Enhance range; boosts [Flaming Phoenix] and [Purgatory Flare] Dmg by 15%.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Fire Phoenix Domain] Dmg Up 7.5%, and [Scorch] frequency doubles.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Targets in Domain take 140% increased [Scorch] Dmg.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Flaming Phoenix] Dmg CD reduced to 0.85s; [Fire Phoenix Domain] Duration increased by 5s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Targets in Domain take 240% increased [Scorch] Dmg.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Fire Phoenix Domain] Dmg Up by 15%, and permanent [Flaming Phoenix] [Flare Shock] Dmg increased to 10%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Heaven Soar",
        "key": "Dmg, Scorch",
        "icon": "◆",
        "description": "Summon a forward-spreading pillar of Fire, erupting 3 times, with the final strike calling forth a Fiery Phoenix to Execute the enemy and apply [Scorch] effect, dealing a total of 58+390.0% ATK Dmg.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Fire pillar gains a tracking effect.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each Shock Fire Pillar hit grants the Spirimaster a stack of [Phoenix Might], providing 15% Strike Dmg from this Spirit per stack, up to 3 stacks, Duration 20s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Upgrade to erupt four Shock Fire pillars.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Skill upgraded to a two-charge skill.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Shock Fire Pillar Dmg Up by 15%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Falling Meteor",
        "key": "Dmg, Scorch",
        "icon": "◆",
        "description": "Summon Fiery Phoenix to continuously flap its wings, with scorching feathers striking the ground like fiery meteors, dealing a total of 60+352.4% ATK as Dmg and applying [Scorch] effect.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Phoenix Meteor Shower] gains 2 additional waves.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Phoenix Meteor Shower] grants a stack of [Phoenix Might] per hit, providing 15% Strike Dmg to this Spirit per stack, up to 3 stacks, Duration 20s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Phoenix Meteor Shower] expands its attack range.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each Meteor Strike hit deals additional Dmg.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Phoenix Meteor Shower] Dmg Up by 15%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Flaming Phoenix",
        "key": "Dmg",
        "icon": "◆",
        "description": "Unleash the ultimate skill to gain the [Flaming Phoenix] effect, dealing 1+9.0% ATK Dmg to nearby enemies every second; simultaneously, Spirimaster's [Scorch] Dmg Up by 75%, Duration 10s. Each 5 time the target takes [Flaming Phoenix] Dmg, trigger the [Purgatory Flare] effect, dealing 15+105.9% ATK Dmg.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Asura Phoenix Talent",
        "haloDescription": "Blessed by the Asura God, the Fiery Phoenix gains enhanced flame power. The Dmg of [Purgatory Flare] increases [Final Dmg Up] by 100%. Each time [Purgatory Flare] triggers, gain [Rising Flames]. [Rising Flames]: All Spirits gain 10% [Final Dmg Up] for a Duration of 10s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Activating [Flaming Phoenix] with Skill release, repeated additions extend effect Duration.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Purgatory Flare] inflicts [Scorch] effect, increasing this Spirit's Strike Dmg by 15% for 4s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Trigger [Purgatory Flare] after 4 [Flaming Phoenix] hits.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Upon entering the Fight, gain the [Flaming Phoenix] effect immediately.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After using Ultimate, Spirimaster Dmg Up by 7.5% for 15s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Blazing Fire Phoenix",
        "key": "Dmg",
        "icon": "◆",
        "description": "Unleash [Skill] and [Ultimate] to gain [Flaming Phoenix] effect, dealing 1+7.9% ATK as Dmg to nearby enemies every second; simultaneously, Spirimaster's [Scorch] Dmg Up by 75%, Duration 10s. Every 10s, trigger the [Solar Flare Shock] effect, dealing 27+184.4% ATK as Dmg to all surrounding targets.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Asura Phoenix Talent",
        "haloDescription": "Blessed by the Asura God, the Fiery Phoenix gains enhanced flame power. The Dmg of [Flare Shock] increases [Final Dmg Up] by 100%. Each time [Flare Shock] triggers, gain [Rising Flames]. [Rising Flames]: All Spirits gain 10% [Final Dmg Up] for a Duration of 10s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each [Solar Flare Shock] Burst increases Spirimaster Scorch Dmg by 15%, up to 75%, lasting 15s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Solar Flare Shock] inflicts [Scorch] and increases Spirit's Strike Dmg by 15% for 8s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When [Solar Flare Shock] in [Fire Phoenix Domain], doubles Dmg range and reduces Burst interval by 3s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Upon entering the Fight, immediately gain [Flaming Phoenix] effect, with Duration auto-refreshing during the Fight. [Flaming Phoenix] Dmg increases by 1.667% per second, up to a maximum of 50%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After using Ultimate, Spirimaster Dmg Up by 7.5% for 15s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "wraithcat",
    "title": "Wraith Cat",
    "subtitle": "Shadowless Technique - Speed Contest - Speed Aesthetics",
    "image": "images/personnages/wraithcat/wraithcat-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Agility",
      "Additional Attack"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Zhu Zhuqing"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Agility"
      },
      {
        "label": "Role",
        "value": "Additional Attack"
      },
      {
        "label": "Mechanic",
        "value": "Laceration"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon - Mall"
      }
    ],
    "description": "Wraith Cat is a fast, slippery agility fighter who basically fights by summoning an army of clones to gang up on enemies while she racks up debuffs on everyone unlucky enough to be in range. Her whole kit revolves around [Wraith Mark], a stack she builds up that lets her swap her Normal Attacks into stronger combo variants like [Wraith Phantom] or [Wraith Clone Slash], each hitting harder and applying [Weakness] to targets.\n\nOnce enemies are loaded up with [Weakness], her Ultimates go to town on them, consuming those stacks for bonus damage and piling on [Laceration] like it's going out of style. Her passives ([Wraith Shadow Rift] and [Wraith Shadow Chain]) keep summoning [Wraith Clones] in the background to auto-attack and detonate more Laceration stacks, so even when she's not actively doing anything flashy, there's a small army of shadow clones quietly doing work for her.\n\nShe's got a fusion move too (Wraith Tiger), where she teams up with White Tiger to unleash a barrage of roaring shockwaves across a wide area, stacking even more Laceration and buffing Final Dmg for a while after.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/wraithcat/background/wraithcat-background.png",
    "mechanics": [
      "Laceration"
    ],
    "normalAttack": {
      "title": "Fragmented Shadow",
      "key": "Dmg",
      "icon": "◆",
      "description": "Like an elusive wraith in the dark, darting between enemies with claws and inflicting multiple hits, dealing a total of Dmg equal to 76+518.4% of Normal ATK. Gain 1 stack of [Wraith Mark] when successfully hitting with the final attack."
    },
    "initiative": {
      "title": "Cat Strangle",
      "key": "Dmg",
      "icon": "◆",
      "description": "Dash through enemies, dealing 16+108.0% ATK as Dmg to enemies along the path. Then unleash a flurry of claw strikes, dealing 12+88.2% ATK as Dmg and gaining 2 stacks of [Wraith Mark]."
    },
    "ultimate": {
      "skill1": {
        "title": "Wraith Shadow Clone",
        "key": "Dmg? Laceration",
        "icon": "◆",
        "description": "Rapidly dash around the battlefield, creating a Wraith Clone that charges with a piercing attack, dealing 20+581.4% ATK as Ultimate Dmg. Then generate a [Wraith Spike Array], causing enemies within range to receive a [Wraith Spike] attack every 2s, dealing 9+64.8% ATK as Ultimate Dmg and applying 5 stacks of [Laceration]. If the target has a [Weakness] effect, consume 1 stack of [Weakness] to receive an additional [Wraith Spike] attack. This effect triggers only once per [Wraith Spike] attack.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Every 4 times [Wraith Spike] Dmg taken, receive an additional enhanced [Wraith Spike] attack. The enhanced [Wraith Spike] does not apply [Laceration].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Wraith Spike Array] Duration increased to 16s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Ultimate Dmg from [Wraith Spike] is increased by 15%, and [Laceration] stacks applied to enemies by [Wraith Spike] are increased to 8 stacks.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After dealing Dmg, [Wraith Spike] increases the next [Wraith Spike] Strike Dmg by 10%, up to 50%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Wraith Stab] Ultimate Dmg increased to 30%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Wraith Claws",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Unleash extreme speed and strike with relentless claws to deal 95+636.3% ATK as Ultimate Dmg. For 20s after releasing, when Spirimaster's Normal hits, trigger [Wraith Claw] to pass through the target position, dealing 19+129.6% ATK as Ultimate Dmg, and inflicting 6 stacks of [Laceration] to the targets hit. If the targets have [Weakness], consume 1 stack of [Weakness], increasing the Dmg from [Wraith Claw] by 20% and applying 4 additional stacks of [Laceration]. [Wraith Claw] can trigger at most once every 3s.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each trigger of [Wraith Claw] increases the Spirit's next [Initiative] Dmg by 20%, up to 180%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Wraith Claw] trigger interval reduced to 2s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Ultimate Dmg from [Wraith Claw] increases by an additional 20%, and when [Wraith Claw] consumes [Weakness], it inflicts an additional 3 stacks of [Laceration].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each trigger of [Wraith Claw] increases the next [Wraith Claw] Strike Dmg by 6%, up to 60%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After casting Ultimate, [Wraith Claw] Duration extends to 180s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Wraith Thrust",
        "key": "Dmg",
        "icon": "◆",
        "description": "Swiftly move in front of the target, clawing upwards to deal a total of 40+276.9% ATK as Skill Dmg and gain 1 stack of [Wraith Mark]. For the next 10s, if possessing [Wraith Mark], aerial Normals are replaced with [Wraith Phantom], dealing 19+133.2% ATK as Dmg and applying a stack of [Weakness] to the target.",
        "cost": 0,
        "cd": 20,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Gain [Strong Super Armor] and reduce Dmg taken by 50% for 1.5s when using enhanced aerial Normal [Wraith Phantom]. Reapplying the effect refreshes its Duration.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each time an enhanced aerial Normal [Wraith Phantom] is released, Skill Dmg increases by 10%, up to 60%, with a Duration of 3s, refreshing the Duration. Consuming the last stack of [Wraith Mark] to release [Wraith Phantom] allows the next aerial Normal to be replaced with an enhanced aerial Normal Execute.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Enhanced aerial Normal [Wraith Phantom] has a 60% chance to apply 1 additional stack of [Weakness] on hit targets.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each time Enhanced aerial Normal [Wraith Phantom] is used, Skill Dmg Up by 20%, up to 120%, Duration 3s, stacking refreshes Duration.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Each use of enhanced aerial Normal Attack [Wraith Phantom] increases Skill Dmg by 40%, up to 200%, lasting 3s. Stacking refreshes its Duration.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Wraith Possession",
        "key": "Dmg",
        "icon": "◆",
        "description": "Summon a clone, charging forward alternately to deal a total of 26+331.2% ATK as Skill Dmg, and gain 1 stack of [Wraith Mark]. Within the next 10s, if possessing [Wraith Mark], Normal will be replaced with [Wraith Clone Slash], dealing 5+151.2% ATK as Dmg, and applying 1 stack of [Weakness] to the target.",
        "cost": 0,
        "cd": 20,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "The [Weakness] stacks applied by [Wraith Clone Slash] on hit targets increased to 2.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After releasing [Wraith Clone Slash] and having [Wraith Mark], following up with a Normal will release a second-stage Execute Slash. The second-stage Execute Slash consumes all [Wraith Mark]. Each stack of [Wraith Mark] increases the base multiplier by 110% and applies 2 stacks of [Weakness].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Each [Wraith Mark] consumed by the second-stage Execute Slash increases its Skill Dmg by 12%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "For each [Wraith Mark] consumed by the second-stage Execute Slash, the base multiplier increases to 120%, and the number of [Weakness] stacks applied rises to 3.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After the Spirit or Wraith Cat uses a Skill, if possessing [Wraith Mark], each first Normal hit consumes 1 layer of [Wraith Mark] to unleash [Wraith Slash], dealing 5+100.8% ATK as Skill Dmg and applying 3 layers of [Weakness], lasting 8s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Wraith Shadow Rift",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "In Fight, after Spirimaster releases 8 Normal attacks, summon 3 [Wraith Clones] to attack enemies, dealing up to 12+64.8% ATK as passive skill Dmg, with a 50% chance to gain 1 stack of [Wraith Mark]. This passive effect triggers once every 5s. Additionally, each [Wraith Clone] attack consumes 1 stack of [Weakness], applying 3 stacks of [Laceration].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Wind Spirit Wraith Cat Talent",
        "haloDescription": "The Wraith Cat conveys the will of the gods, vanishing with the wind when obstructed. Each time the Wraith Cat consumes 1 stack of [Wraith Mark], it summons 2 [Wraith Clones] to launch an ATK, each dealing up to 18+112.5% as passive Skill Dmg. When [Wraith Mark] reaches its limit, gaining another [Wraith Mark] summons 1 [Wraith Clone] to launch an ATK, dealing up to 18+112.5% as passive Skill Dmg.\n\n[Godly Halo] special effect summons [Wraith Clones] without consuming [Weakness], enhancing the effect based on the corresponding year.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When [Wraith Mark] reaches the maximum stacks, passive Dmg from [Wraith Clone] increases by 30%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Chance to obtain [Wraith Mark] increased to 100%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Laceration] stacks applied by [Wraith Clone] are increased to 5. Each detonation of [Laceration] increases the next [Wraith Clone] Dmg by 10%, up to 30%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each stack of [Weakness] increases [Wraith Clone] Strike Dmg by 10%, up to 50%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When [Wraith Mark] reaches maximum stacks, passive Dmg from [Wraith Clone] increases to 90%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Wraith Shadow Chain",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "In Fight, each Normal skill hit by the Spirimaster has a 20% chance to trigger a summon of 2 [Wraith Clones] to attack enemies, dealing up to 12+64.8% ATK as passive Dmg. This passive effect can trigger once every 3s. After triggering the summon of [Wraith Clones] 3 times, gain 1 stack of [Wraith Mark]. Additionally, each hit by [Wraith Clones] consumes 1 stack of [Weakness], applying 4 stacks of [Laceration]. When [Laceration] Dmg is triggered, summon [Wraith Clones] for a powerful ATK on the enemy, dealing higher Dmg. [Wraith Clones] enhanced ATK can be summoned once every 3s. (Enhanced ATK does not apply [Laceration] stacks and does not count towards the total summon count.)",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Wind Spirit Wraith Cat Talent",
        "haloDescription": "The Wraith Cat patrols the territory on behalf of the deity, manifesting countless forms. After a Bruiser Spirit or Wraith Cat unleashes its Ultimate, it gains [Wraith Pursuit], [Wraith Pursuit] Duration 15s, obtainable once every 30s.\n\n[Wraith Pursuit]: All Spirits gain 20% Normal Attack Dmg Bonus; Each Normal Attack Skill hit summons a [Wraith Clone] to strike, dealing up to 12+90.0% ATK as passive Skill Dmg, triggering once every 0.5s.\n\n[Godly Halo] special effect summons [Wraith Clone] without consuming [Weakness], not counting towards the summon limit, and gains enhanced effects based on the corresponding year.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Wraith Clone] enhances ATK and applies [Thousand Tribulations] to hit targets, inflicting 5 stacks of [Laceration] per second for 10s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Normal hit increases summon chance of [Wraith Clone] to 40%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Wraith Clone] increases passive Dmg to [Thousand Tribulations] targets by 20%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Laceration] stacks applied by [Wraith Clone] increased to 6 on each hit, and [Wraith Clone] enhances ATK, with passive Dmg Up by 30%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Normal hit chance to summon [Wraith Clone] increased to 60%; [Thousand Tribulations] max stacks increased to 3. [Wraith Clone]'s passive Dmg to [Thousand Tribulations] targets and [Laceration] stacks applied per second by [Thousand Tribulations] will stack based on [Thousand Tribulations] stacks.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": {
      "title": "Wraith Tiger",
      "key": "Dmg, Laceration",
      "icon": "◆",
      "cost": 0,
      "cd": 600,
      "fuseWith": "whitetiger",
      "description": "The White Tiger and Wraith Cat merge into the Wraith Tiger, unleashing multiple Wraith Tiger Roar Waves in a wide area ahead, dealing up to 84+649.5% ATK as Dmg.\nAfter casting, every 1s, 3 Wraith Tiger Roar Waves randomly target an enemy within range, dealing 15+75.7% ATK as Dmg to all hit enemies, with a Duration of 10s.\nAfter casting, the White Tiger gains an additional 15.0% final Dmg increase, with a Duration of 120s.",
      "tiers": [
        {
          "threshold": "All Spirit Combinations",
          "description": "Wraith Tiger Roar Wave applies 3 stacks of [Laceration] to each hit enemy.",
          "condition": ""
        },
        {
          "threshold": "All Spirit Combinations",
          "description": "Fusion Skill cooldown reduced to 180s; Wraith Tiger Roar Wave Duration extended to 20s.",
          "condition": "🔴 2★ activated"
        },
        {
          "threshold": "All Spirit Combinations",
          "description": "[Wraith Tiger Roar] White Tiger's final Dmg Up to 20%, Duration 120s.",
          "condition": "🔴 4★ activated"
        }
      ]
    },
    "skins": []
  },
  {
    "id": "whitetiger",
    "title": "White Tiger",
    "subtitle": "Closer Than Brothers - By Your Side - Hope of the Clan",
    "image": "images/personnages/whitetiger/whitetiger-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Main DPS",
      "Bruiser"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Dai Mubai"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Bruiser"
      },
      {
        "label": "Role",
        "value": "Main DPS"
      },
      {
        "label": "Mechanic",
        "value": "Laceration"
      },
      {
        "label": "Acquisition",
        "value": "Mall"
      }
    ],
    "description": "White Tiger is a pure transformation brawler, he doesn't mess around with fancy resource management, he just picks a form and goes full beast mode. His two big Ultimates send him into either [Vajra Transformation] or [White Tiger God Transformation] (Demon Transformation), both of which reset his Skill cooldowns and let him spam his abilities way more often, while stacking [Laceration] on everyone nearby the whole time.\n\nIn [Demon Transformation] specifically, he gets Strong Super Armor and Control Immunity, basically becoming unkillable and uninterruptible while he wrecks face for 15 seconds straight. His Skills (Meteor Shower and Destruction Strike) hit hard on their own, but get even scarier while transformed, more meteors, wider slashes, extra claw strikes, all while piling on more [Laceration] stacks.\n\nHis passives borrow some spectral tech from the Wraith Cat family, summoning [Wraith Clones] to auto-attack in the background, consuming [Weakness] stacks and applying even more [Laceration] as they go.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/whitetiger/background/whitetiger-background.png",
    "mechanics": [
      "Laceration"
    ],
    "normalAttack": {
      "title": "White Tiger Claw",
      "key": "Dmg",
      "icon": "◆",
      "description": "Wield tiger claws to deal a total of 33+237.6% ATK as Normal Dmg."
    },
    "initiative": {
      "title": "Fierce Light",
      "key": "Dmg",
      "icon": "◆",
      "description": "Continuously emit energy waves forward, dealing 26 +151.1% ATK as Initiative Dmg to enemies within range."
    },
    "ultimate": {
      "skill1": {
        "title": "Vajra Transformation",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Immediately inflicts 150+1033.2% ATK Ultimate Dmg to surrounding enemy targets and enters [Vajra Transformation] state for 15s, resetting White Tiger Skill cooldown upon entry.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "During the Duration, Skill cooldown is reduced to 15s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "During the Duration, each Normal hit on the enemy reduces Skill cooldown by 1s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Duration increases to 20s, during which [Laceration] Dmg increases by an additional 100%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each time White Tiger uses a Skill, Duration extends by 1s, up to a maximum of 5s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "During Duration, Skill Dmg increases by an additional 20%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Demon Transformation",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Immediately inflict 57+392.4% ATK as Ultimate Dmg to nearby enemy targets and enter the [White Tiger God Transformation] state, completely altering Normal and Skill forms and gaining Strong Super Armor and Control Immunity for a duration of 15s (12s in PVP mode, and removing Control Immunity effect). Upon entering the state, reset White Tiger Skill cooldown. Cooldown extended to 45s in PVP mode.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each second of Duration increases triggered [Laceration] Dmg by an additional 10%, up to 15 stacks.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Gain [Tiger Might] effect: During the Duration, each Dmg to enemies triggers an additional Dmg.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "During Duration, each time White Tiger inflicts Dmg, applies 1 stack of [Laceration].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "White Tiger extends Duration by 0.5s for each Normal used, max extension up to 10s (max extension up to 5s in PVP mode). [Tiger Might] Dmg increased to 3 times the original.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "During Duration, Normal Dmg to enemies with [Laceration] Status increases by 20%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "White Tiger Meteor Shower",
        "key": "Dmg",
        "icon": "◆",
        "description": "Launch a fierce assault on the enemy target ahead, dealing a total of 19+129.6% ATK as Skill Dmg, while creating 8 White Tiger Meteors that are fired at the target location, each dealing 8+54.0% ATK as Skill Dmg (does not track targets in PVP mode).\n\nIn the Ultimate state, the effect is enhanced: In the [Vajra Transformation] state, release creates more White Tiger Meteors. In the [Demon God Transformation] state, release immediately leaps into the air, then descends to deal Dmg to enemy targets in the area, counting as generating 17 White Tiger Meteor Showers upon release (air movement speed is reduced in PVP mode).",
        "cost": 0,
        "cd": 20,
        "haloTitle": "Asura White Tiger Skill",
        "haloDescription": "White Tiger's Might, Asura's Gift. Fists fall like meteors, unending like rain.\nFor every 5 White Tiger Meteors generated, an additional Annihilation Meteor is created, dealing 63+432.0% ATK as Skill Dmg to the target area.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each Dmg dealt by this Skill applies 2 stacks of [Laceration].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Dmg from [Laceration] triggered by this Skill is increased by an additional 100%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "The next 3 Normal attacks after releasing this Skill directly trigger [Laceration] Dmg.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Within 10s after release, White Tiger's Crit Dmg increases by 20%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Within 10s after release, every 3 Normal attacks trigger a Phantom Fist attack on the enemy.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "White Tiger Destruction Strike",
        "key": "Dmg",
        "icon": "◆",
        "description": "Swing claws to inflict 51+352.8% ATK Skill Dmg on the enemy target, forming a massive cross slash in the air that flies forward, dealing a total of 24+151.2% ATK Skill Dmg, and finally exploding to cause 9+64.8% ATK Skill Dmg.\n\nIn Ultimate state, effects are enhanced: [Vajra Transformation] Cross slash range expands. [Demon God Transformation] Multiple claw strikes for additional Dmg.",
        "cost": 0,
        "cd": 20,
        "haloTitle": "Asura White Tiger Skill",
        "haloDescription": "Tiger Claw shatters all. Asura's blessing annihilates all.\nPerform Normal or trigger Laceration a total of 5 times to gain one layer of [Destruction], stacking up to 10 layers. The next Skill release consumes all [Destruction] layers, dealing additional Skill Dmg of 94+648.0% ATK per layer.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each time this Skill deals Dmg, it applies 3 stacks of [Laceration] to the enemy.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Within 5s after releasing this Skill, each Dmg dealt applies 1 stack of [Laceration] to the enemy.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Cross Slash Dmg frequency doubles.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Dmg from [Laceration] triggered by this Skill is increased by an additional 100%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Each stage of Cross Slash Dmg triggers [Laceration] Dmg once.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "White Tiger Shield",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "After each Skill cast, deploy a Counter Barrier, gaining Strong Super Armor, reducing Dmg taken by 20%, and automatically counterattacking enemy targets when damaged, triggering a counterattack once per second, dealing 9+64.8% ATK as passive Dmg, Duration 5s, effective only when White Tiger is the current Spirit. Outside of PVP mode, reduce Dmg taken by White Tiger by an additional 30% within the first 2s of activating Skill.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "During Duration, counterattacks one random nearby enemy per second.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each counterattack reduces Skill cooldown by 1s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Counterattack applies 5 stacks of [Laceration].",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Duration extended to 8 seconds, with an additional 50% Dmg increase from [Laceration] during this time.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Active counterattack triggers every 0.7 seconds.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "White Tiger Overlord Emerges",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Each Normal by White Tiger inflicts 2+16.0% ATK as passive Dmg, and each time Dmg is dealt to enemy targets, gain [Berserk] effect, gaining 1 stack every 0.1s. [Berserk] effect applies only to White Tiger itself.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Berserk] stack limit increased to 100, granting an additional 5% Normal Dmg at full stacks.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When [Berserk] reaches full stacks, [Laceration] Dmg increases by an additional 50%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Berserk] at full stacks grants an additional 20% Crit Dmg. Each Berserk stack provides White Tiger with a passive Dmg Up of 4.5%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After casting the Ultimate, gain a temporary max stack [Berserk] effect for 5s, during which [Berserk] stacks can continue to accumulate.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Berserk] at max stacks instantly refreshes Skill CD.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "crescentglaives",
    "title": "Crescent Glaives",
    "subtitle": "Crimson Moon Blossom Sea - Heritage - Formidable Rival",
    "image": "images/personnages/crescentglaives/crescentglaives-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Agility",
      "Main DPS"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Xie Yue"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Agility"
      },
      {
        "label": "Role",
        "value": "Main DPS"
      },
      {
        "label": "Mechanic",
        "value": "Severe Wound"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Crescent Glaives fights with a bit of a \"twin\" gimmick, every time he builds up [Moonshadow Mark] stacks, he summons a [Moon Shadow] clone that mirrors his attacks, basically doubling his damage output for free. The more stacks he has, the more copies join in on his Normal Attacks and Ultimates, turning him into a one-man (well, two-man) blade storm.\n\nHis whole kit is built around stacking [Severe Wound] on enemies through his Skills and Ultimates, and the more stacks pile up, the bigger the bonus damage everyone gets against that target. His passives take it further with [Red Moon], another stacking buff gained every time a [Moon Shadow] is summoned, rewarding him for constantly cloning himself into the fight.\n\nHis Ultimates (Full Moon Arrival and Crimson Moon Slash) both lean into flashy crescent-shaped slashes that leave blade trails behind and immediately slap 15 stacks of [Severe Wound] onto whatever he's hitting, while his Moon Shadows tag along to double up the damage.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/crescentglaives/background/crescentglaives-background.png",
    "mechanics": [
      "Severe Wound"
    ],
    "normalAttack": {
      "title": "Shadow Piercer",
      "key": "Dmg",
      "icon": "◆",
      "description": "Wield Crescent Glaives to shuttle across the battlefield, dealing a total of 37+260.2% ATK as Dmg. Each stack of [Moonshadow Mark] additionally summons [Moon Shadow] during Normal attacks, dealing up to an extra 14.5% ATK as Dmg.\nWith 1 stack of [Moonshadow Mark]: Summon [Moon Shadow] in the 2nd stage of Normal Attack. With 2 stacks of [Moonshadow Mark]: Summon [Moon Shadow] in the 3rd stage of Normal Attack. With 3 stacks of [Moonshadow Mark]: Summon [Moon Shadow] in the 4th stage of Normal Attack."
    },
    "initiative": {
      "title": "Crescent Assail",
      "key": "Dmg",
      "icon": "◆",
      "description": "Dash towards the enemy and unleash a slash, dealing up to 11.4% ATK as Dmg. Simultaneously, create a [Moon Shadow] around the enemy, executing the same attack and dealing up to 11.4% ATK as Dmg. Temporarily gain 1 stack of [Moonshadow Mark] for the next 10s."
    },
    "ultimate": {
      "skill1": {
        "title": "Full Moon Arrival",
        "key": "Dmg, Severe Wound",
        "icon": "◆",
        "description": "Dash forward in a crescent arc, creating multiple blade lights behind, each dealing 6+43.2% ATK as Dmg, totaling 48+346.2% ATK as Dmg. Upon sheathing, deal 75+519.4% ATK as Dmg and apply 15 stacks of [Severe Wound]. Gain 1 stack of [Moonshadow Mark] after casting, additionally summoning a [Moon Shadow] to perform the same attack, dealing a total of 8+61.8% ATK as Dmg.\n\n[Moon Shadow] will not perform the final sheathing attack.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each layer of [Moonshadow Mark] causes the trailing blade to deal Dmg 2 additional times.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Gain 2 stacks of [Moonshadow Mark] to summon an additional [Moon Shadow] to unleash the Ultimate.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Moon Shadow] performs an extra attack, leaving Crescent Glaives on the field.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Releasing the ultimate refreshes Skill cooldown.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Gain 3 stacks of [Moonshadow Mark] to summon an additional [Moon Shadow] to unleash the Ultimate.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "rimson Moon Slash",
        "key": "Dmg, Severe Wound",
        "icon": "◆",
        "description": "Leap into the air, using Crescent Glaives to encircle oneself, then perform a spinning slash while descending, severing the full moon behind and landing smoothly. Land at the target location, dealing 109+749.0% ATK as Dmg and applying 15 stacks of [Severe Wound]. Gain one [Moonshadow Mark] upon use. After using the Ultimate, summon one [Moonshadow] for each [Moonshadow Mark] to release shuttle slashes, each time dealing 5+35.6% ATK as Dmg.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When unleashing the Ultimate, each stack of [Moonshadow Mark] increases Dmg by an additional 5%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Moon Shadow] Shuttle Slash Dmg Up by 100%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "At 3 stacks of [Moonshadow Mark], unleash Ultimate to reduce the next 2 Skills' cooldown to 6s. The effect removed after exiting Fight.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Within 15s after using Ultimate, each time using the fourth stage Normal, summons an additional [Moon Shadow] for Shuttle Slash.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Moon Shadow] Shuttle Slash Dmg Up by 50%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Moonlit Ambush",
        "key": "Dmg, Severe Wound",
        "icon": "◆",
        "description": "Quickly Dodge backward, throw a returning Crescent Glaive forward, then create several blade light areas at the Crescent Glaive location, dealing 18+143.7% ATK as Dmg, then charge forward, releasing an Execute Slash dealing 32+215.6% ATK as Dmg and applying 5 stacks of [Severe Wound].\n\nNormal Attack starts from the third stage after the skill.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "With 3 stacks of [Moonshadow Mark], Execute Slash applies 5 additional stacks of [Severe Wound].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When Dodging backward, if attacked, enter [Invincibility] and summon [Moon Shadow].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "With 3 stacks of [Moonshadow Mark], enter [Invincibility} during retreat and trigger [Moon Shadow] to attack.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Skill can be reactivated during retreat.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When [Moon Shadow] Execute Slash hits an enemy, Crescent Glaives gain 50.0% Crit Dmg Bonus, Duration 6s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Phantom Moon Shadow",
        "key": "Dmg, Severe Wound",
        "icon": "◆",
        "description": "Swiftly move to the target's front, unleash a series of slashes in the surrounding area, dealing 6+22.2% ATK as Dmg, then release an Execute Slash, dealing 36+244.5% ATK as Dmg.\n\nNormal Attack starts from the third stage after the skill.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each stack of [Moonshadow Mark] summons an additional [Moon Shadow] to attack.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "With 3 stacks of [Moonshadow Mark], Crescent Glaives combo adds 5 stacks of [Severe Wound].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Each stack of [Moonshadow Mark] grants Crescent Glaives and [Moon Shadow] skill an additional 10% Dmg.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "If Dmg is taken during the combo, skill cooldown is reduced by 2s, triggering up to 5 times per skill, and cannot trigger again within 20s after skill ends.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Each combo hit grants a buff effect increasing 2.5% Ultimate Dmg, up to 40 stacks, consumed and activated on the next Ultimate use ([Moon Shadow] combo do not stack buff).",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Cull Weak",
        "key": "Dmg, Severe Wound",
        "icon": "◆",
        "description": "[Moon Shadow] ATK will forcibly trigger [Severe Wound] Dmg.\n\nFor enemies with [Severe Wound], increases Dmg progressively based on the number of [Severe Wound] stacks. The increment is 10.0%/15.0%/30.0% (when [Severe Wound] stacks reach 1/20/50).",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Wind God Crescent Glaives Talent",
        "haloDescription": "The Wind God admires the sharpness of the Crescent Glaives, granting the swift wind to harvest the awe of all beings.\nFor enemies with [Severe Wound], when [Severe Wound] reaches 150 stacks, gain [Final Dmg Up] by 20.0%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Severe Wound] Dmg Up from stacks increased to 15%/20%/35%/50% (1 stack/20 stacks/50 stacks/90 stacks).",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Severe Wound] Dmg Up from stacks increased to 15%/20%/35%/50%/135% (1 stack/20 stacks/50 stacks/90 stacks/120 stacks).",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Each stack of [Moonshadow Mark] grants 5% crit dmg, gain an additional 5% crit dmg at 3 stacks.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After 3 stacks of [Moonshadow Mark], the Character's Normal enters [Moon Frenzy] Status, ceasing to release Normal Execute and Normal Attack 1.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Each stack of [Moonshadow Mark] increases Crit Dmg from 5% to 10%. At 3 stacks, Crit Dmg increases from 5% to 20%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Add Insult to Injury",
        "key": "Dmg, Severe Wound",
        "icon": "◆",
        "description": "[Moon Shadow] ATK forcibly triggers [Severe Wound] Dmg.\n\nEach time [Moon Shadow] is summoned, gain a stack of [Red Moon], lasting 15s. Re-gaining grants an additional stack and refreshes the Duration. Increases Dmg progressively based on the number of [Red Moon] stacks. The increment is 2.0%/4.0%/6.0% (when [Red Moon] stacks reach 1/10/15).",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Wind God Crescent Glaives Talent",
        "haloDescription": "The Red Moon listens to the divine words of the swift wind, and the Crescent Glaives flow with divine favor.\nWhen [Red Moon] reaches 40 stacks, gain [Final Dmg Up] by 20.0%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When [Red Moon] reaches 25 stacks, gain an additional 4% Dmg. For enemies with [Severe Wound], each stack of [Severe Wound] increases Dmg by 0.4%, up to 40%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When [Red Moon] reaches 40 stacks, gain an additional 5% Dmg. For enemies with [Severe Wound], each stack of [Severe Wound] increases Dmg by an extra 0.6%, up to 90%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Each stack of [Moonshadow Mark] increases Dmg Up by an additional 10%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After 40 stacks of [Crimson Moon], the Character's Normal enters [Moon Madness] Status, ceasing to release Normal Execute and Normal 1 stage.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When [Red Moon] reaches 1/10/15/25/40 stacks, gain 5.0%/10.0%/15.0%/20.0%/30.0% Crit Dmg effect respectively.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "ninetailedfox",
    "title": "Nine-tailed Fox",
    "subtitle": "Transform into an Enchantress - Asura Descendant - Ultimate Phantom",
    "image": "images/personnages/ninetailedfox/ninetailedfox-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Control",
      "Control Dmg Up",
      "Stun"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Hu Liena"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Control"
      },
      {
        "label": "Role",
        "value": "Control Dmg Up"
      },
      {
        "label": "Mechanic",
        "value": "Severe Wound - Illusionist"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Nine Tailed Fox plays a lot of mind games, literally. Her entire kit is built around summoning illusions and clones that dance around the battlefield, dealing damage on their own while she stays safe (and often invisible). Every illusion, every dodge, every skill just adds more stacks of [Enchant], a resource that seems to be the glue holding her whole \"confuse and control\" playstyle together.\n\nShe leans hard into crowd control, applying [Stun] to enemies caught in [Descent], locking targets into [Heartbreak] status while her illusion zones are active, and stacking [Severe Wound] on top of it all for extra bonus damage. Her clones aren't just decoration either, they actively chase down enemies, transform into red smoke on arrival, and detonate for solid damage before vanishing.\n\nShe's also got some serious mobility and safety tools, gaining Invisibility and even Invincibility during her dashes and dodges, meaning she can dish out chaos while barely being touchable herself.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/ninetailedfox/background/ninetailedfox-background.png",
    "mechanics": [
      "Severe Wound"
    ],
    "normalAttack": {
      "title": "Deception",
      "key": "Dmg",
      "icon": "◆",
      "description": "The Nine-Tailed Fox uses concentrated Enchant aura to attack enemies ahead multiple times, dealing a total of 35+233.3% ATK as Dmg.\n\nHold Normal to charge and release to deal 20+140.0% ATK as Dmg to surrounding enemies, adding 1 stack of [Enchant]. If the enemy hit is in [Descent] state, cause 3s [Stun] (adjusted to 1s in PVP)."
    },
    "initiative": {
      "title": "Soul Snare",
      "key": "Dmg",
      "icon": "◆",
      "description": "Launches a barrage of magic missiles at the target, each hit inflicts 1+10.0% ATK Dmg with a 20% chance to apply 1 stack of [Enchant], up to 21+nan%+210.0% ATK Dmg. Dragging the joystick to Dodge will be replaced by [Drift].\n\n[Drift]: The Spirit Nine-Tailed Fox Enhances its Dodge Pose and can Combo three times. Deals 2+11.6% ATK Dmg to enemies along the path, applying 1 stack of [Enchant]."
    },
    "ultimate": {
      "skill1": {
        "title": "Tempting Beauty",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "Unleash an Illusion Area for 7s. Inflicts 30+209.3% ATK as Dmg to nearby enemies and applies 1 stack of [Enchant]. Gains Invisibility every 2s for 1s during the Duration, creating an illusion near enemies upon entering Invisibility. All enemies remain in [Heartbreak] Status during the Illusion Area Duration. The Illusions perform a charged attack, dealing 10+69.7% ATK as Dmg and applying 1 stack of [Enchant] before vanishing. If nearby enemies are in [Descent], inflicts 3s of [Stun] (adjusted to 1s in PVP).",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "During the illusion zone Duration, [Severe Wound] Dmg increases by an additional 100%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "During the Illusion Area Duration, apply 1 stack of [Enchant] to all enemies every 2 seconds.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Apply 3 stacks of [Enchant] to all enemies when the zone unfolds.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "During the Illusion Area Duration, [Severe Wound] Dmg increases by an additional 200%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "During the illusion zone Duration, [Severe Wound] Dmg increases by an additional 250%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Heart's Illusion Dance",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "Unleash an illusion zone for 7s, inflicting continuous Dmg and adding 1 stack of [Enchant] to enemies within. Summon four illusions. Illusions Auto Use Drift towards targets, dealing Dmg and adding a stack of [Enchant]. Upon reaching targets, they transform into red smoke, dealing Dmg and adding 1 stack of [Enchant]. Can deal up to 43+286.1% ATK Dmg. During the illusion zone's Duration, each Dodge grants an additional 2s of Invisibility.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "During Illusion Zone Duration, each Dodge summons an additional illusion clone, with a maximum of two during each Ultimate.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "During Illusion Zone Duration, Dmg to Heartbreak enemies adds 2 stacks of [Severe Wound], with a 5s cooldown.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "During the use of Flutter, illusion clones apply Traction to nearby enemies and add a stack of [Enchant].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "During the Illusion Area Duration, Dmg to enemies with [Heartbreak] adds 2 stacks of [Severe Wound], cooldown reduced to 3s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "During Illusion Area Duration, Dmg to [Heartbreak] enemies adds 2 stacks of [Severe Wound], cooldown reduced to 1s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Illusory Drift",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "Move towards the joystick direction, gaining Invincibility and Invisibility for 1s, creating an illusion at the original position. The illusion continuously approaches the current target, dealing 2+14.5% ATK Dmg to surrounding enemies and applying 1 layer of [Enchant]. Upon reaching the target, it transforms into a red smoke, dealing 19+130.5% ATK Dmg to surrounding enemies and applying 1 layer of [Enchant], then disappears. The illusion lasts up to 7s.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Can use the Skill again to Swap positions with the nearest illusion to the enemy. No new illusion is created when used again.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When unleashing the Skill, apply 1 layer of [Enchant] to all surrounding enemies.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When the Skill illusion disappears, apply 3 layers of [Severe Wound] to all surrounding enemies.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When the Skill illusion uses Enhanced Evasion, it will [Stun] enemies along the path for 1s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When the Skill illusion disappears, apply 5 layers of [Severe Wound] to all surrounding enemies.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Moon in Water",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "Enter Invisibility for 1s and create an illusion near the target. The illusion uses a charged attack to deal 18+122.5% ATK as Dmg to surrounding enemies and applies 3 layers of [Enchant] before disappearing. If surrounding enemies are under [Descent], it causes a 3s [Stun] (adjusted to 1s in PVP).",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Reuse Skill to Swap with the farthest illusion, inflicting Dmg around and adding 3 stacks of [Enchant].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When Skill illusion inflicts Dmg on enemies, if [Severe Wound] on them exceeds 50 stacks, additionally apply [Heartbreak].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When Skill illusion inflicts Dmg on an enemy, if [Severe Wound] on the enemy exceeds 100 stacks, trigger Severe Wound Dmg once more.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Skill illusion appears and applies [Heartbreak] to all nearby enemies with [Obsession] or higher.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill illusion inflicts a 3s [Stun] on all nearby enemies with [Obsession], adjusted to 1s in PVP.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Heartless Betrayal",
        "key": "Dmg",
        "icon": "◆",
        "description": "When the illusion fades, inflict 1+9.2% ATK as Dmg to all nearby enemies with [Obsession] or higher and apply [Heartbreak] effect.\n[Heartbreak]: Duration 5s, during which they receive a 20% [Control Vulnerability] effect. Each time they suffer [Severe Wound] Dmg, gain an additional 10% Dmg Up from [Severe Wound], up to 5 times. [Severe Wound] additionally deals Dmg equal to 2% of the enemy's Max HP, not exceeding 100% of ATK.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "God of The Sea Nine-Tailed Fox Talent",
        "haloDescription": "Listen to the divine fox's words, lost in the depths of Enchant.\nDuring the [Heartbreak] Duration, if the target has [Severe Wound], all Spirits gain [Final Dmg Up] when attacking the target by 12.0%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When the illusion dissipates, apply a stack of [Enchant] to nearby enemies.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Heartbreak] base [Control Vulnerability] effect increased to 35%, and additionally increases target's [Severe Wound] Dmg Up by 40%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Heartbreak] base [Control Vulnerability] effect increased to 45%, and additionally increases target's [Severe Wound] Dmg Up to 80%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "During [Heartbreak], Severe Wound Dmg additionally inflicts Dmg equal to 2% of Max HP, up to 50% of ATK.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Heartbreak] base [Control Vulnerability] effect increased to 55%, additionally enhances target's [Severe Wound] Dmg Up to 100%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Heartless Beauty",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "Upon triggering [Severe Wound] Dmg, if the target is not in [Stun] Status, apply [Heartbreak] effect and inflict 2s [Stun]. This effect triggers once every 30s.\n[Heartbreak]: Duration 5s, during which they receive a 20% [Control Vulnerability] effect. Each time they suffer [Severe Wound] Dmg, gain an additional 10% Dmg Up from [Severe Wound], up to 5 times. [Severe Wound] additionally deals Dmg equal to 2% of the enemy's Max HP, not exceeding 100% of ATK.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "God of The Sea Nine-Tailed Fox Talent",
        "haloDescription": "Heartless beauty sheds tears, the sea roars, even gods feel heartbreak.\nDuring the [Heartbreak] effect, if the target has [Severe Wound], all Spirits gain [Final Dmg Up] when attacking the target by 12.0%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After enemies entering [Obsession], their [Stun] Duration increases to 2s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "During [Heartbreak], each time [Severe Wound] Dmg is received, the received [Severe Wound] Dmg Up effect increases to 20%, with an additional 2% [Control Vulnerability] effect.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "During [Heartbreak], each time [Severe Wound] Dmg is received, the Dmg Up effect from [Severe Wound] increases to 30%, with an additional 4% [Control Vulnerability] effect.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Nine-tailed Fox's [Stun] effect duration is extended by 2s (1s in PVP), with a 45s cooldown.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Nine-tailed Fox's [Stun] effect duration cooldown reduced to 30s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": {
      "title": "Enchantress",
      "key": "Dmg, Severe Wound",
      "icon": "◆",
      "cost": 0,
      "cd": 600,
      "fuseWith": "crescentglaives",
      "description": "Transform into [Enchantress] for Fight, Duration 12s.\n\n[Enchantress]: Replaces current Normal and Skill, gains Strong Super Armor and Control Immunity, inherits passive Skill effects of Crescent Glaives.\n\nIf [Red Moon] exists, [Red Moon] Duration increases by 20s until transformation ends.",
      "tiers": [
        {
          "threshold": "All Spirit Combinations",
          "description": "[Red Moon Phantom] Dmg Up by an additional 50%.",
          "condition": "🟡 5★ activated"
        },
        {
          "threshold": "All Spirit Combinations",
          "description": "[Red Moon Phantom] final heavy slash applies 5 stacks of [Severe Wound] to the targets.",
          "condition": "🔴 2★ activated"
        },
        {
          "threshold": "All Spirit Combinations",
          "description": "[Enchantress] transformation duration increased to 22s.",
          "condition": "🔴 4★ activated"
        }
      ]
    },
    "skins": []
  },
  {
    "id": "firedrake",
    "title": "Firedrake",
    "subtitle": "Firedrake's Tenderness - Tyrant's Kin - Blazing Dual Poles",
    "image": "images/personnages/firedrake/firedrake-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Agility",
      "Additional Attack"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Liu Erlong"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Agility"
      },
      {
        "label": "Role",
        "value": "Main DPS"
      },
      {
        "label": "Mechanic",
        "value": "Scorch"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Fire Drake is basically an angry dragon who fights better the angrier she gets, literally. Her whole kit revolves around building up [Rage] and dumping it into [Dragon Power] state, where every stack of leftover Rage converts into [Burning Rage], boosting her damage by 15% per stack. The more Rage she's holding onto when she pops off, the harder she hits.\n\nHer Skills lean heavily into tanky aggression too, several of them grant [Dragon Body], a state giving her Strong Super Armor and Control Immunity while cutting incoming damage in half. So not only is she building up steam to explode, she's basically unstoppable while doing it.\n\nHer Ultimates (Firedrake Inferno and Purple Dragon Avatar) both hit like a truck, calling down flaming dragon strikes and charging through enemies, all while [Scorch] and [Flame Blast] effects pile on for extra burn damage. And once she's in [Dragon Power] state, her Normal Attacks start shaving time off her Skill cooldowns, letting her loop back into more Rage generation even faster.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/firedrake/background/firedrake-background.png",
    "mechanics": [
      "Scorch"
    ],
    "normalAttack": {
      "title": "Dragon Howl",
      "key": "Dmg, Scorch",
      "icon": "◆",
      "description": "Rapidly approach the target and execute multiple Combo attacks, dealing a total of 50+351.8% ATK Dmg. Additionally, trigger the [Flame Blast] effect. The final attack inflicts [Scorch] on the enemy."
    },
    "initiative": {
      "title": "Dragon Fire Surge",
      "key": "Dmg, Scorch",
      "icon": "◆",
      "description": "Gain 3 [Rage] instantly. Summon a Firedrake to circle the target area, dealing a total of 6+76.6% ATK as Dmg and applying the [Scorch] effect, while pulling all targets in the area to the center."
    },
    "ultimate": {
      "skill1": {
        "title": "Firedrake Inferno",
        "key": "Dmg",
        "icon": "◆",
        "description": "Leap into the air and summon a Firedrake to circle around, then strike the ground, dealing 98+676.6% ATK Dmg to all enemies within range.\n\n[Dragon's Might] Status deals 103+710.5% ATK Dmg.",
        "cost": 3,
        "cd": 26,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After using the ultimate, Skill Dmg increases by an additional 10% for 7s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "In [Dragon's Might] Status, using Ultimate grants an additional 25% Dmg Bonus until [Dragon's Might] Status ends.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Unleashing the Ultimate grants an additional 1 [Rage].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After using the Ultimate, the next Skill cooldown is reduced to 6s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After using the Ultimate, Skill Dmg Up increases to 15.0% for 15s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Crimson Dragon Avatar",
        "key": "Dmg",
        "icon": "◆",
        "description": "Summon the Firedrake Spirit, igniting its flames, then the Firedrake charges forward, dealing a total of 74+513.3% ATK Dmg to all enemies in its path.\n\nWithin 15 seconds after releasing the Ultimate, [Dragon's Might] Normal Attack hits reduce Skill cooldown by 1 second, with a 2-second trigger interval.",
        "cost": 3,
        "cd": 26,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After unleashing the Ultimate, the first Normal after Skill under [Dragon's Might] transforms into [Dragon Attack], dealing Dmg and [Scorch] to enemies along the path.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After unleashing the Ultimate, Firedrake's Normal Dmg increases by 50% for 15s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After using the Ultimate, [Rage] restores to three points.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Ultimate gains 135% Crit Dmg Bonus.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After unleashing the Ultimate, Firedrake's Normal Attack Dmg Bonus increases to 60.0% for 15s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Rampant Dragon Kick",
        "key": "Dmg, Scorch",
        "icon": "◆",
        "description": "Spin forward with a flying kick, followed by 7 consecutive kicks and bursts of intense Fire, dealing a total of 87+580.0% ATK as Dmg to the target.\n\nDuring this skill, gain [Dragon Body] effect, entering Strong Super Armor and Control Immunity states, reducing all incoming Dmg by 50.0%.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After Skill ends, extend [Dragon Body] effect by 3s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each stage of Skill hit inflicts [Scorch].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "An additional 3 stacks of Dmg during consecutive kicks.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "First and last stages of Skill trigger [Flame Blast] effect.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "This Skill deals additional 30.0% Crit Dmg.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Tyrannical Fist",
        "key": "Dmg, Scorch",
        "icon": "◆",
        "description": "This Skill can be released in multiple stages.\n\nThe first stage spreads flames around, dealing 47+324.5% ATK as Dmg.\nThe second stage swiftly dashes to the enemy, then delivers a Combo of punches totaling 104+741.9% ATK as Dmg.\nThe third stage delivers an Execute punch forward and summons a Firedrake, dealing 48+324.5% ATK as Dmg and applying [Scorch] effect.\n\nDuring each stage of the Skill, gain [Dragon Body] effect, entering Strong Super Armor and Control Immunity states, reducing all received Dmg by 50.0%.",
        "cost": 0,
        "cd": 25,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "First and third stages of Skill trigger [Flame Blast] effect.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Within 3s after each Skill release, Firedrake deals an additional 20% Dmg, non-stackable.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "If Dmg is taken during Skill release, its cooldown reduces by 10s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After releasing the second-stage Skill, an additional second-stage Skill can be released.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Second stage Skill's first hit on enemy triggers [Flame Blast] effect.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Tyrannical Rage",
        "key": "Dmg Up",
        "icon": "◆",
        "description": "Firedrake unleashes its Ultimate, consuming [Rage] to enter [Dragon's Might] Status. Each [Rage] stacks [Burning Rage], increasing Firedrake's 15.0% Dmg per stack, up to 3 stacks. End [Dragon's Might] Status will clear [Burning Rage] stacks.\n\nWhen not in [Dragon's Might] Status and [Rage] is 0, 1 [Rage] is restored.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Wind Spirit Firedrake Talent",
        "haloDescription": "The god of the storm eagerly fuels this rage to consume all.\nWhen in [Dragon's Might] state, triggers [Flame Blast] and gains 40.0% [Final Dmg Up",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "In [Dragon's Might] Status, the fifth Normal and aerial Normal consume 1 [Rage] to reduce Skill cooldown by 2s. This effect can only trigger once per cooldown. Further [Rage] consumption during this cooldown does not reduce the cooldown again.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Increase the Spirit's Dmg Bonus gained by [Rage] consumption to 22.5%. In [Dragon's Might] Status, [Flame Blast] no longer has trigger cooldown.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Dragon's Might] Status grants this Spirit an additional 50% Crit Dmg.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "In [Dragon's Might] Status, using Normal reduces Skill cooldown slightly, up to 3s per cooldown.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Dragon's Might] Status increases this Spirit's Crit Dmg Bonus to 60.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Firedrake Fury",
        "key": "Dmg Up",
        "icon": "◆",
        "description": "After Firedrake Dodges, the first Normal attack after Ultimate Skill or Skill consumes [Rage] to enter [Dragon's Might] state. Each [Rage] stacks [Burning Rage], increasing Firedrake's 15.0% Dmg per stack, up to 3 stacks. End [Dragon's Might] state will clear [Burning Rage] stacks.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Wind Spirit Firedrake Talent",
        "haloDescription": "\"Let the fury come even stronger!\" promised the storm god.\nWhen in [Dragon's Might] state, triggers [Flame Blast] and gains 50.0% [Final Dmg Up].",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After casting Ultimate, if not in [Dragon's Might] Status, enter [Dragon's Might] Status.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When casting Ultimate or Skill, if no [Rage], Restore 1 [Rage].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "In [Dragon's Might] Status, Firedrake's Normal gains an additional 33.5% Crit Dmg.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Burning Rage] stack limit increased to 5.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "In [Dragon's Might] Status, Firedrake's Normal Crit Dmg Bonus increases to 60.0%. In [Dragon's Might] Status, [Flame Blast] no longer triggers cooldown.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "supplerabbit",
    "title": "Supple Rabbit",
    "subtitle": "Sacrifice Yourself - Lovesickness - Supple Rakshasa Tomb",
    "image": "images/personnages/supplerabbit/supplerabbit-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Agility",
      "Additional Attack"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Xiao Wu"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Agility"
      },
      {
        "label": "Role",
        "value": "Additional Attack"
      },
      {
        "label": "Mechanic",
        "value": "Vibration"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Supple Rabbit fights like a caffeinated bunny with too much energy, fast kicks, quick combos, and a whole squad of ghost rabbits backing them up. Their core resource, [Fleeting Hare], builds up through Skills and gets converted into summoned [Supple Rabbit Ghosts], spectral clones that stick around on the field and auto-attack for extra damage. So the more they hop around fighting, the more backup they call in.\n\nTheir kit revolves heavily around [Shock] stacks, which feed into [Vibration], a bonus damage debuff that boosts overall damage taken by the target once triggered. Landing hits, chaining kicks, and stacking Shock is basically the whole game plan, everything eventually funnels into more Vibration damage.\n\nTheir Ultimate (Twin Rabbit Strike) summons two Rabbit Ghosts that stick around for 15 seconds, continuously attacking, and if more Rabbit Ghosts are already out on the field, they all pile on together for even more damage. It's basically a rabbit rave by the time the whole squad shows up.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/supplerabbit/background/supplerabbit-background.png",
    "mechanics": [
      "Vibration"
    ],
    "normalAttack": {
      "title": "Rabbit Bow",
      "key": "Dmg",
      "icon": "◆",
      "description": "Supple Rabbit grants Spirimaster immense leg Burst, delivering a series of Swift strikes forward, dealing a total of 58+389.9% ATK as Dmg. Upon the final hit, apply 1 stack of [Shock].\n\nHold the Normal button to unleash Supple Spin Thrust, delivering a series of kicks to the target, dealing a total of 5+270.0% ATK as Dmg.\n\nWhen [Fleeting Hare] reaches max stacks, gain [Frenzy] state. In [Frenzy] state, tap the Normal button to release Balance Break Slash, dealing 50+343.8% ATK as Dmg and inflicting [Vibration] state. Defeating an enemy in [Frenzy] state re-enters [Frenzy] state.\n\nAir Normal can deal 7+45.0% ATK Dmg and apply 1 stack of [Shock], gaining 1 stack of [Fleeting Hare]."
    },
    "initiative": {
      "title": "Ghost Strike",
      "key": "Dmg",
      "icon": "◆",
      "description": "Leap forward and perform a Spiral Thrust to attack enemies, dealing a total of 14+95.9% ATK Dmg. Gain 1 stack of [Fleeting Hare] after using this skill and enter [Rapid Assault] state. In [Rapid Assault] state, the combo after the fourth Normal Attack changes to Soft Bone Spin [Rapid Assault] state, Duration 15s."
    },
    "ultimate": {
      "skill1": {
        "title": "Soft Octadic Throw",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Execute the Octadic Throw on the target, inflicting a total of 204+1399.9% ATK Dmg to the target and the area ahead.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "If [Fleeting Hare] is not at max stacks when released, gain 5 stacks of [Fleeting Hare].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Upon the final hit, inflict an additional 10 stacks of [Shock] on the target.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Ultimate deals an additional 3 instances of Dmg.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Hit enemies receive 100% increased subsequent Vibration Dmg for 15s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "The Ultimate Dmg Up by 10.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Twin Rabbits Strike",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Summon two [Supple Rabbit Phantoms] and command them to launch a total attack on enemies, applying 5 stacks of [Shock] upon hit. After the total attack, [Supple Rabbit Phantoms] remain on the field for 15s, continuously attacking the target, each time dealing 13+88.8% ATK as Dmg.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Enter [Frenzy] Status after releasing this Ultimate.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "If there are other rabbits on the field, they will also join the attack, increasing total ATK Dmg by 3% for each rabbit.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When this skill is first released in a Fight, summon rabbits equal to the current rabbit limit.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "If there are other rabbits on the field, they will also join the attack, increasing total ATK Dmg by 6% for each rabbit.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "The Ultimate Dmg Up by 10.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Bunny Kick",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Gain a stack of [Fleeting Hare] after using the skill, perform a flying kick on the enemy. If it hits, it applies 3 stacks of [Shock] to the target and triggers a follow-up Combo kick, dealing a total of 36+233.3% ATK Dmg. During the Combo kick, you can interrupt with the Normal attack button.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When Skill hits targets, grants Shock equal to [Fleeting Hare] stacks.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Skill hit increases kick speed by 100%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Upon using a minor skill, all Spirits gain enhanced Vibration Dmg based on [Fleeting Hare] stacks, 10% per stack, Duration 15s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Skill deals an additional 35% Dmg to enemies not in [Vibration] Status. Hit enemies receive 100% increased subsequent Vibration Dmg for 15s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Hit [Vibration] enemies, extend Vibration duration by 5s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Holy Rabbit Supple Body",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Perform a three-stage wide-range kick Combo ahead, dealing a total of 27+184.2% ATK as Dmg. The final hit applies 2 stacks of [Shock] and grants 1 stack of [Fleeting Hare].",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Gain 1s Super Armor and Dmg↓ each time this skill is used.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each Skill hit grants 1 stack of [Fleeting Hare] to self.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Upon hitting, Supple Rabbit gains Dmg Up, stacking up to 3 times for 15s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "This skill is further affected by [Fleeting Hare], with each stack granting the skill's Dmg Up.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "This Skill Dmg Up by 15.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Hare Dash",
        "key": "Dmg",
        "icon": "◆",
        "description": "Upon entering the Fight, gain 7 stacks of [Fleeting Hare]. Supple Rabbit deals additional 5.0% Dmg to enemies not in [Vibration]. Balance Break Slash increases to deal 55+382.0% ATK as Dmg.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Wind God Supple Rabbit Talent",
        "haloDescription": "Enchanted Rabbit invites the dance of the gods, granting the Supple Rabbit's edge. When Supple Rabbit applies [Shock] to a target, it also applies the same number of [Dmg Amplification] layers, up to 10 layers. Each layer grants all Spirits [Final Dmg Up] by 1.2% when attacking the target. Duration 20s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Killing enemies in [Frenzy] Status grants a 5% Dmg Bonus to Spirit until [Frenzy] Status ends.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Increase additional Dmg to non-[Vibration] enemies to 10%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Each stack of [Fleeting Hare] grants an additional 8.5% Crit Dmg.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Balance Break Slash] Crit Dmg increased by 90%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When [Balance Break Slash] hits [Minion] or [Elite], deals Dmg equal to 30% of target's max HP.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Supple Rabbit Blitz",
        "key": "Dmg",
        "icon": "◆",
        "description": "Each time [Fleeting Hare] is obtained, summon a [Supple Rabbit Phantoms] instead, then remove [Fleeting Hare]. The maximum number of Supple Rabbit Phantoms increases to 5.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Wind God Supple Rabbit Talent",
        "haloDescription": "Suddenly, a gentle breeze passes, and countless rabbits and spirits are spoken of as gods.\n\nWhen Supple Rabbit applies [Shock] to a target, it also applies the same number of layers of [Dmg Up] to the target, up to 10 layers. Each layer grants all Spirits [Final Dmg Up] by 1.2% when attacking the target. Duration 20s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "In [Frenzy], Supple Rabbit's phantom ASPD increases.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "In [Frenzy], Supple Rabbit's phantom Dmg Up.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Supple Rabbit's phantom survival time extends to 10s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When Supple Rabbit's phantom attacks, it increases the target's received Vibration Dmg, stackable up to 10 times, for 10s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When Supple Rabbit's phantom attacks, it increases the Crit Dmg of the target's received Vibration Dmg by 10.0%, for 10s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": [
      {
        "id": "s1786238370250701",
        "name": "5 year Promise",
        "image": "images/personnages/supplerabbit/skins/supplerabbit-skin.png",
        "description": "Wait for me, San..."
      }
    ]
  },
  {
    "id": "goldfeatheredowl",
    "title": "Gold-Feathered Owl",
    "subtitle": "Thunderous Might - Aerial Sprite - Golden World",
    "image": "images/personnages/goldfeatheredowl/goldfeatheredowl-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Agility",
      "Additional Attack"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Lu Chonghua"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Agility"
      },
      {
        "label": "Role",
        "value": "Additional Attack"
      },
      {
        "label": "Mechanic",
        "value": "Electrified"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Gold Feathered Owl basically fights by throwing feathers everywhere and letting them do the work. Their whole kit revolves around generating [Feather] stacks through Skills and Normal Attacks, then those feathers stick around, auto-attacking nearby enemies on their own. It's less \"one owl fighting\" and more \"one owl commanding a small army of magical thunder feathers.\"\n\nTheir core damage engine is [Hunt Mark], stacked up by every Feather hit, and once an enemy hits 50 stacks, the Owl swoops in for a big burst hit and clears all the stacks at once. Combine that with [Thunder Spread], a bonus debuff that boosts damage further once triggered, and the whole playstyle becomes: throw feathers, stack marks, cash out, repeat.\n\nTheir Ultimate (Omniscient Feather) scales directly with how many Feathers are currently active, more feathers following the dive means more damage on the way down, so the longer she's been feather-farming before popping the Ultimate, the bigger the payoff.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/goldfeatheredowl/background/goldfeatheredowl-background.png",
    "mechanics": [
      "Electrified"
    ],
    "normalAttack": {
      "title": "Sharp Feather",
      "key": "Dmg",
      "icon": "◆",
      "description": "Imbue feathers with Lightning power, unleashing a series of elegant strikes on the target. The final strike summons a Gold-Feathered Owl to inflict multiple instances of Dmg, dealing a total of 39+228.0% ATK Dmg.\n\nDuring the attack, three [Feather] are generated."
    },
    "initiative": {
      "title": "Thunder Glide",
      "key": "Dmg",
      "icon": "◆",
      "description": "Transform into the Spirit Gold-Feathered Owl, Blitz forward with incredible speed, dealing Dmg to all nearby enemies, up to 24+192.0% ATK.\n\nDuring the release, use Normal or Dodge to end Fly early, creating up to 4 [Feather] along the way."
    },
    "ultimate": {
      "skill1": {
        "title": "Gale Plume",
        "key": "Dmg",
        "icon": "◆",
        "description": "Summon the Gold-Feathered Owl to create a Thunder Feather zone at the enemy's location for a Duration of 5s, dealing continuous Dmg to all enemies within, up to 95+605.5% ATK Dmg.\n\nSimultaneously, command all [Feather] to attack the enemy, each [Feather] dealing 2+16.1% ATK Dmg per attack, for a Duration of 5s. First ultimate release after entering Fight increases Dmg by 25.0%.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "During the Ultimate area Duration, Auto summon Thunder twice, dealing 148% Dmg.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Thunder Crit Dmg Up by an additional 80%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Gold-Feathered Owl Dmg increases by 50% for 10s after the first Ultimate release in the Fight.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "During the Ultimate Zone's Duration, if there are no enemy targets within the area, it will transform back into 5 feathers to attack enemies on the field.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Gold-Feathered Owl Dmg increases to 60.0% for 10s after the first Ultimate release in the Fight.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Omni Feather",
        "key": "Dmg",
        "icon": "◆",
        "description": "Summon a Lightning Owl to soar into the sky, with all Golden Feathers following. It then transforms into Lightning, striking enemies with significant Dmg. The more Golden Feathers, the higher the Dmg, up to an additional 50%. Each feather follows the Owl's descent, dealing extra Dmg. Total Dmg can reach 158+1116.6% ATK.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each [Feather] increases the Hunt value of this skill.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Ultimate hits target and applies [Thunder Spread] effect. The effect triggers once every 180s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Crit Dmg dealt by Ultimate increases by 80%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "If the targets are already in [Thunder Spread] Status, Crit Dmg of Ultimate increases by 45%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Ultimate hits target and applies [Thunder Spread] effect. Cooldown reduced to once every 30s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Feather Rush",
        "key": "Dmg",
        "icon": "◆",
        "description": "Harness the power of lightning to make feathers float around you, dealing continuous 30+181.2% ATK Dmg and inflicting [Electrified] for a Duration of 10s.\n\nDuring this time, generate one [Feather] every 0.5s and attract nearby [Feather] to follow you. The following [Feather] automatically attacks nearby enemies every 2s, each dealing 2+12.0% ATK Dmg.\n\nThis skill can be used during Initiative release.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Following [Feather] Auto ATK Dmg Up by 15%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Following [Feather] Auto ATK Dmg Up by 30%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After casting the Skill, Owl gains 50% Crit Dmg Up for 10s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Recast the skill to launch all following [Feather] at the targets, dealing 100% Dmg. Auto-launch at the end of Skill Duration.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After casting the Skill, Owl's Crit Dmg Up increases to 75.0% for 10s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Feather Rush",
        "key": "Dmg",
        "icon": "◆",
        "description": "Release 5 [Feather] forward, attacking enemies three times and dealing up to 60+400.0% ATK as Dmg to the target, with added [Electrified].\n\nThen retrieve all [Feather], each dealing additional 4+26.6% ATK as Dmg on contact.\n\nReturned [Feather] will remain on the ground.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each time a [Feather] is Retrieved, Owl Dmg increases by an additional 1%, up to 10 stacks, lasting 15s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "The Dmg Bonus from Retrieving each [Feather] increases to 2%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "The Dmg Bonus from Retrieving each [Feather] increases to 3%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After Retrieving [Feather], auto fire all [Feather] at the current target enemy.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After releasing this Skill, Owl gains 25,0% Crit Dmg Up, and all Spirits gain 100,0% Electrified Dmg Up for 20s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Feather Pursuit",
        "key": "Dmg",
        "icon": "◆",
        "description": "Use [Feather] to add 1 stack of [Pursuit Mark] upon a successful hit. When the enemy accumulates 50 stacks of [Pursuit Mark], the Gold-Feathered Owl shutters through the enemy, dealing 32+224.8% ATK as Dmg, then removes all [Pursuit Mark] from enemies.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Wind Spirit Owl Talent",
        "haloDescription": "The Tempest follows the Owl, shredding its foes.\n\nAfter [Pursuit Mark] triggers, Gold-Feathered Owl weaves through enemies dealing final damage, with additional [Thunder Spread], and gaining 75.0% [Final Dmg Up]. All Spirits gain 150.0% [Electrified] Dmg Up for 20s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Initiative and Normal Attack will additionally generate [Feather] around the enemy.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When [Hunting Mark] is triggered, apply the [Thunder Spread] effect to the target. The [Thunder Spread] effect lasts for 5s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "The Duration of [Thunder Spread] is extended to 7s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Crit Dmg of [Thunder Spread] increases by 10%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "The Duration of [Thunder Spread] is extended to 10s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Thunder Hunter Eagle",
        "key": "Dmg",
        "icon": "◆",
        "description": "Use [Feather] to add 1 stack of [Pursuit Mark] upon a successful hit. When the enemy accumulates 50 stacks of [Pursuit Mark], the Gold-Feathered Owl shutters through the enemy, dealing 32+224.8% ATK as Dmg, then removes all [Pursuit Mark] from enemies. For every 10 stacks of [Pursuit Mark] removed, generate 1 [Feather].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Wind Spirit Owl Talent",
        "haloDescription": "The Storm answers the Owl, as the divine blesses its followers.\n\nAfter [Pursuit Mark] triggers, Gold-Feathered Owl weaves through enemies dealing final damage, with additional [Thunder Spread], and gaining 75.0% [Final Dmg Up]. All Spirits gain 150.0% [Electrified] Dmg Up for 20s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Upon receiving the first Dmg from Initiative or Skill, the enemy gains an additional 10 stacks of [Hunt Mark].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When [Hunting Mark] is triggered, apply the [Thunder Spread] effect to the target. The [Thunder Spread] effect lasts for 5s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "During the Duration of [Thunder Spread], Owl Dmg Up by 20%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "During the Duration of [Thunder Spread], Owl Dmg Up increased to 35%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "The Duration of [Thunder Spread] is extended to 10s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "deadlyarachnid",
    "title": "Deadly Arachnid",
    "subtitle": "Pontiff Legacy - Follow to the End - Power-hungry",
    "image": "images/personnages/deadlyarachnid/deadlyarachnid-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Control",
      "Control Dmg Up",
      "Stun"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Bibidong"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Control"
      },
      {
        "label": "Role",
        "value": "Control and Long-term Dmg Up"
      },
      {
        "label": "Mechanic",
        "value": "Imprison"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Deadly Arachnid is basically a giant web-slinging nightmare who wants to trap you first and shred you second. Their whole kit revolves around locking enemies down with [Cobweb], [Imprison], and various web effects, all while stacking [Control Vulnerability] so those control effects (and everyone else's) hit even harder.\n\nThe real fun starts once [Deadly Spider] minions get summoned, tiny spiders that crawl down the web, self-destruct on contact for bonus damage, and leave behind [Death Mark] stacks that boost the target's [Severe Wound] cap and stack even more Control Vulnerability. Every spider explosion is basically a little bonus present that makes the enemy easier to control and easier to hurt afterward.\n\nTheir passives lean into a feast-based system, [Feast of Death] rewards every spider self-destruct with stacks that boost either the spider's own damage or the whole team's [Severe Wound] damage, depending on which passive is active. At high enough stacks, things escalate into [Rakshasa Mark] or even [Abyss Mark], permanent debuffs that seriously crank up Control Vulnerability and team-wide Severe Wound damage.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/deadlyarachnid/background/deadlyarachnid-background.png",
    "mechanics": [
      "Severe Wound"
    ],
    "normalAttack": {
      "title": "Soul Drain Web",
      "key": "Dmg",
      "icon": "◆",
      "description": "Utilize spider silk to move in mid-air, summoning sharp spider silk for a four-stage Normal ATK to slice enemies. Finally, [Deadly Spider] tears the targets and self-destructs, dealing a total of 29+205.3% ATK as Dmg."
    },
    "initiative": {
      "title": "Half Moon",
      "key": "Dmg, Control",
      "icon": "◆",
      "description": "Summon spider claws forward to repel nearby enemies, dealing a total of Dmg equal to 5+35.4% ATK and inflicting 1 stack of [Severe Wound]."
    },
    "ultimate": {
      "skill1": {
        "title": "Spider Summon",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "The Deadly Arachnid descends onto the battlefield, weaving a massive [Cobweb] that envelops the entire field, dealing 43+295.8% ATK as Dmg to a wide range of targets and applying 4 seconds of [Imprison]. [Cobweb] lasts for 15 seconds, and targets trapped within continuously suffer from the [Death Bind] effect, receiving 25.0% of [Control Vulnerability].",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Cobweb] spawns 1 [Death Spider] every 5s, descending on silk to spray webs forward, swiftly retracting to gather targets and self-destruct, dealing Dmg (In PVP mode, [Cobweb] spawns 1 [Death Spider] every 7.5s).",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Cobweb] [Control Vulnerability] increased to 35%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When the target is trapped in [Cobweb] for over 5s, they receive a 1s Stun. (In PVP mode, if the target is trapped in [Cobweb] for over 7.5s, they receive a 0.5s Stun.)",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Extend [Cobweb] Duration by 5s and [Control Vulnerability] Duration by 5s; [Cobweb] spawns 1 [Death Spider] every 4s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Death Spider] summoned by Ultimate sprays webs, applying [Stun] for 0.8s; [Death Spider] self-destruct attack range increased by 100%",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Arachnid Clone",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "[Deadly Arachnid] obscures the sky, spreading an endless aura of death from the heavens to the earth. Deadly Arachnid descends from the celestial heights, unleashing Deadly Domain and continuously launching massive webs at targets, dealing 3+20.8% Dmg, while applying 1 stack of [Devouring Silk] effect to hit targets, each stack adding 2.5% [Control Vulnerability], up to a maximum of 10 stacks. Deadly Domain lasts for 15s.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each stack of [Silk] causes 15% movement Slowed.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Summons 1 [Deadly Spider] every 6s to crawl down the silk from the sky and self-destruct to deal Dmg.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Fire 2 [Silks] every 0.5s for ATK.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Extend [Deadly Domain] Duration by 5s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Apply additional [Control Vulnerability] of 10.0% to targets within the field.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Eternal Rift",
        "key": "Dmg Up, Severe Wound",
        "icon": "◆",
        "description": "Deadly Arachnid's claws appear behind, unleashing a fierce blade light to deal 17+117.3% Dmg and inflict [Eternal Rift] on hit targets.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each time [Severe Wound] is added, gain 2 stacks of [Severe Wound Enhancement].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Eternal Rift] on first hit, summon a [Deadly Spider] to track and self-destruct on the targets.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Eternal Rift] Duration extended by 5s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Take additional Dmg each time triggering [Severe Wound] Dmg. Triggers every 4s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Eternal Rift] adds an extra 10.0% of [Control Vulnerability].",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Death Bind",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "Summon [Deadly Spider], unleashing a wide range of silk to Twine, dealing 4+26.2% Dmg and connecting spider silk, lasting 6s. During the Duration, [Deadly Spider] will apply ongoing Traction effect on all targets linked by the spider silk, finally self-destructing to deal 4+26.2% Dmg.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Death Spider Demon] summoned by Skill applies 1 stack of [Severe Wound Enhancement] per second to targets connected by spider silk. Each stack of [Severe Wound Enhancement] increases [Severe Wound] Dmg by 0.5%, up to 60 stacks, Duration 60s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Death Spider Demon] summoned by Skill sprays spider silk at targets, applying 2s of [Imprison] effect.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Death Spider Demon] summoned by the Skill shoots webs every 3s to attack.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Skill summons [Death Spider Demon] with an extended lifespan of 2s and an enhanced [Severe Wound Enhancement], increasing [Severe Wound] Dmg by 1% per stack, up to 60 stacks, Duration 60s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Death Spider] applies 1 stack of [Cursed Silk] with each web spray: lasts 5s, up to 3 stacks. Each stack adds 3.0% of [Control Vulnerability].",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Bloodsucking Spider Bite",
        "key": "Vulnerability, Severe Wound",
        "icon": "◆",
        "description": "[Deadly Spider] applies 1 stack of [Death Mark] upon self-destruction, up to 20 stacks, Duration permanent. Each stack applies 0.7% [Control Vulnerability], while increasing the target's [Severe Wound] stack limit by 2. [Deadly Spider] grants the Spirimaster 1 stack of [Death Feast] upon self-destruction, each stack increasing [Deadly Spider] self-destruction Dmg by 10%, up to 10 stacks, lasting 30s.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "God of The Sea Deadly Arachnid Talent",
        "haloDescription": "After entering the Fight, every 10s, summon a [Spectral Spider Demon] from the void to leap at the nearest enemy, self-destructing to deal a total of 9+50.0% ATK as Dmg, and applying 1 stack of [Bite of Death] to the target hit. [Bite of Death]: Each stack increases the [Final Dmg] the target takes by 1.5%, up to 18%, Duration 60s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When [Death Spider Demon] self-destructs, for every 10 stacks of [Death Feast], Spirimaster inflicts 1 stack of [Severe Wound] on it.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Death Mark] stack limit +10.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When a target with [Death Mark] dies, a violent explosion occurs, damaging nearby targets and applying 1 stack of [Death Mark].",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Death Mark] at max stacks additionally applies [Rakshasa Mark].",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When [Death Mark] is applied, if the target's HP is below 25%, directly apply [Rakshasa Mark]. Enhance [Rakshasa Mark]: Increase [Control Vulnerability] to 55.0%, and if HP is below 35%, further increase by 10.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "A Dream of Life and Death",
        "key": "Vulnerability, Severe Wound",
        "icon": "◆",
        "description": "[Deadly Spider] inflicts [Death Mark] upon self-destructing, non-stackable, Duration 20s. Adds 15.0% [Control Vulnerability]. [Deadly Spider]'s self-destruction grants Spirimaster 1 stack of [Death Feast]; each stack increases all Spirit's [Severe Wound] Dmg Bonus by 5%, up to 20 stacks, Duration 20s.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "God of The Sea Deadly Arachnid Talent",
        "haloDescription": "After entering the Fight, every 10s, summon a [Spectral Spider Demon] from the void to leap at the nearest enemy, self-destructing to deal a total of 9+50.0% ATK as Dmg, and applying 1 stack of [Bite of Death] to the target hit. [Bite of Death]: Each stack increases the [Final Dmg] the target takes by 1.5%, up to 18%, Duration 60s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Death Mark] increases target's [Severe Wound] stack limit by 20.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each stack of [Death Feast] grants all Spirits a 7.5% Dmg Bonus to [Severe Wound].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When [Death Spider Demon] self-destructs, for every 10 stacks of [Death Feast], Spirimaster inflicts 1 stack of [Severe Wound] on it.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Feast of Death] at full stacks, all [Death Sigil] Upgrade to [Rakshasa Sigil].",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Feast of Death] Upon reaching max stacks, [Death Spider] self-destructs, applying [Abyss Mark]. [Abyss Mark]: Duration is permanent, adding 10.0% of [Control Vulnerability]. Increases all Spirits' [Severe Wound] Dmg Bonus by 100%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": {
      "title": "Twin Arachnid",
      "key": "Dmg, Final Dmg Up",
      "icon": "◆",
      "cost": 0,
      "cd": 600,
      "fuseWith": "souleatingarachnid",
      "description": "The Soul-Eating Arachnid and Death Arachnid fuse into a Twin Arachnid, descending to deal 2060.2% ATK Dmg to enemies in a wide area. Grants [Weave Calamity] to the Spirimaster and applies [Arachnid Bite] to enemies. [Weave Calamity]: Soul-Eating Arachnid gains [Final Dmg Up] 10.0%. Duration: 180s. [Arachnid Bite]: Deals 228.9% ATK Dmg every 3s. Duration: 180s.",
      "tiers": [
        {
          "threshold": "All Spirit Combinations",
          "description": "[Spider Bite] Dmg Up by 50%",
          "condition": "🟡 5★ activated"
        },
        {
          "threshold": "All Spirit Combinations",
          "description": "Fusion Skill cooldown reduced to 180s.",
          "condition": "🔴 2★ activated"
        },
        {
          "threshold": "All Spirit Combinations",
          "description": "[Weave Doom] Final Dmg Up increased to 20%.",
          "condition": "🔴 4★ activated"
        }
      ]
    },
    "skins": []
  },
  {
    "id": "silvangrass",
    "title": "Silvan Grass",
    "subtitle": "A Lifetime Promise - Herbal Regeneration",
    "image": "images/personnages/silvangrass/silvangrass-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Control",
      "Control Dmg Up",
      "Stun"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Spirimaster"
      },
      {
        "label": "Gender",
        "value": "Male/Female"
      },
      {
        "label": "Archetype",
        "value": "Control"
      },
      {
        "label": "Role",
        "value": "Control Dmg up"
      },
      {
        "label": "Mechanic",
        "value": "Imprison"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Silvan Grass is basically a plant that really doesn't want you moving. Their entire kit is built around locking enemies down with [Imprison] over and over, pulling them into vine cages, cobweb traps, and lingering [Silvan Area] zones that keep ticking damage while enemies are stuck inside. If control effects had a mascot, it'd be this one.\n\nLayered on top of all that trapping is [Silvan Toxin] and [Control Vulnerability], stacking debuffs that make every future control effect (and often bonus damage) hit even harder on already-trapped targets. So it's not just \"lock them down\", it's \"lock them down, then make the next lockdown even worse.\"\n\nTheir passive throws in [Parasite], a sneaky delayed-detonation effect that seeds itself on enemies and, after a short delay, bursts into another Imprison plus bonus damage, basically a landmine made of plant magic. Combine that with [Silvan Area] zones slowing enemies and reapplying Vulnerability, and enemies barely get a chance to move before getting tangled up again.",
    "rarity": "R",
    "backgroundImage": "",
    "normalAttack": {
      "title": "Twine",
      "key": "Dmg",
      "icon": "◆",
      "description": "Skillfully Use Silvan Grass in conjunction with martial arts to perform multiple Combo attacks on the target, dealing a total of 154.0% ATK Dmg."
    },
    "initiative": {
      "title": "Silvan Spear",
      "key": "Dmg",
      "icon": "◆",
      "description": "Condense Silvan Grass into a spear and throw it forward, dealing 14.0% ATK Dmg to hit enemies. Upon landing, it creates a [Silvan Area] dealing 9.3% ATK Dmg. All enemies within the area take 9.3% ATK Dmg per second, Duration 5 seconds."
    },
    "ultimate": {
      "skill1": {
        "title": "Silvan Thrust",
        "key": "Dmg, Imprison",
        "icon": "◆",
        "description": "Deals Dmg equal to 205.4% ATK to all enemies within the area and pulls them in front, dealing additional Dmg equal to 205.4% ATK. Randomly applies [Imprison] effect to 3 enemies, Duration 4s. (1s in PVP) All hit enemies gain [Silvan Toxin] effect, increasing [Control Vulnerability] by 10.0%, Duration 15s.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "If Traction successfully affects more than two enemies, deals two additional stages of ultimate Dmg.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Silvan Toxin] [Control Vulnerability] by Ultimate increased by 5%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After hitting multiple enemies, a [Silvan Area] is generated nearby.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Imprison] target Quantity increased to 6.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Silvan Toxin] [Control Vulnerability] by Ultimate increased by 5%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Cobweb Trap",
        "key": "Dmg, Imprison",
        "icon": "◆",
        "description": "Release condensed Silvan Grass energy, shooting multiple vines forward, dealing 129.4% ATK Dmg and [Imprison] up to 5 enemies for 5s (1.25s in PVP). All enemies hit by the ultimate are afflicted with the [Silvan Toxin] effect, causing 10.0% [Control Vulnerability] effect.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Ultimate increases [Silvan Toxin] Vulnerability by 5%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Dmg to enemies under [Imprison] by the ultimate also triggers [Parasite].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "If there's only one enemy, [Imprison] duration extends to 7s (adjusted to 1.75s in PVP).",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Enemies under [Imprison] by the ultimate in the [Silvan Area] receive additional Dmg from [Silvan Area].",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Silvan Toxin] [Control Vulnerability] by Ultimate increased by 5%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Silvan Cage",
        "key": "Dmg, Imprison",
        "icon": "◆",
        "description": "Manipulate Silvan Grass to launch a surprise attack on the target, inflicting 133.8% ATK Dmg upon hit and applying [Imprison] effect for a Duration of 4s (Duration is 2s for boss enemies, not effective in PVP).",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Enemies affected by this skill [Imprison] have a chance to trigger [Parasite] when taking Dmg.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Imprison] duration extended by 1s (Not effective in PVP).",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Targets [Imprisoned] generate two additional vine paths to imprison hit enemies.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Cooldown reduced by 4s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill Dmg Up 20%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Silvan Area",
        "key": "Dmg, Imprison",
        "icon": "◆",
        "description": "Summon a [Silvan Area] at the target location, dealing 2.0% ATK as Dmg per second to all enemies within, and additionally applying [Control Vulnerability] effect of 5.0%, Duration 10s. If enemies are already within the [Silvan Area], the newly summoned [Silvan Area] immediately deals 113.7% ATK as Dmg and applies [Imprison] effect. Duration 3s (1s for bosses, not effective in PVP).",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Enemies in [Silvan Area] have speed reduced by 30%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Control Vulnerability] effect applied by [Silvan Area] increased by 5%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Silvan Area] Dmg frequency increased to every 0.5s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Reduce this skill's cooldown by 4s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill Dmg Up 20%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Parasite Seed",
        "key": "Dmg, Imprison",
        "icon": "◆",
        "description": "Use Silvan Grass Initiative, Skill has a 30% chance to inflict [Parasite] effect on the enemy, which triggers Parasite Burst after 10s, applying [Imprison] effect and inflicting Dmg equal to 29.0% ATK, Duration 3s (1s for bosses, not effective in PVP).",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Silvan Grass Ultimate has a 30% chance to cause [Parasite].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "All chances to cause [Parasite] increased to 60%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After [Parasite] triggers, enemies enter a 7.5% [Control Vulnerability] state for 10s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When enemies affected by [Parasite] receive Dmg 10 times, enhance the effect triggered by Parasite, and increase Control Duration by 100% and Parasite Dmg.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After [Parasite] triggers, enemies enter a 12.5% [Control Vulnerability] state for 10s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Parasite Seed",
        "key": "Dmg, Imprison",
        "icon": "◆",
        "description": "Use Silvan Grass Initiative, Skill has a 15% chance to inflict [Parasite] effect on the enemy, which triggers Parasite Burst after 10s, applying [Imprison] effect and inflicting Dmg equal to 29.0% ATK, Duration 3s (1s for bosses, not effective in PVP).",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Has a 30% chance to trigger [Parasite] again during [Parasite] Burst.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Chance of triggering [Parasite] again increased to 40%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Parasite] Burst Dmg Up by 10%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Same enemy applied [Parasite] again enters 7.5% [Control Vulnerability] state for 3s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Same enemy applied [Parasite] again enters 12.5% [Control Vulnerability] state for 3s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "healingsceptre",
    "title": "Healing Sceptre",
    "subtitle": "Septa Healing - Solid Support",
    "image": "images/personnages/healingsceptre/healingsceptre-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Support"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Jiang Zhu"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Support"
      },
      {
        "label": "Role",
        "value": "Healing"
      },
      {
        "label": "Mechanic",
        "value": "Battery"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Healing Sceptre builds [Healing Sprite] stacks whenever any Spirit lands a Normal Attack, passively healing the team over time. Their Ultimates consume all those stacks for a big burst heal, plus they hand out SP regen and [Support Dmg Bonus] buffs along the way.",
    "rarity": "R",
    "backgroundImage": "images/personnages/healingsceptre/background/healingsceptre-background.png",
    "normalAttack": {
      "title": "Retribution",
      "key": "Dmg",
      "icon": "◆",
      "description": "Summon a sprite to target and inflict Dmg, performing up to four Combo attacks, dealing a total of 181.7% ATK Dmg."
    },
    "initiative": {
      "title": "Salvation",
      "key": "Healing, SP Regen",
      "icon": "◆",
      "description": "The Healing Sceptre guides the Spirimaster to retreat a distance for safety, then swiftly swings the sceptre to restore 11 HP and 50 SP."
    },
    "ultimate": {
      "skill1": {
        "title": "Hallowed Aura",
        "key": "Healing",
        "icon": "◆",
        "description": "The Healing Sceptre gathers all nearby sprites to the sceptre, instantly restoring 269 HP. Activating the ultimate consumes all [Healing Sprite] stacks, increasing healing effectiveness by 0.25% per [Healing Sprite] stack consumed.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When [Healing Sprite] reaches 20 stacks, Ultimate Healing increases by 5%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After casting Ultimate, retain half of [Healing Sprite] stacks.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When the Spirimaster's HP is below 30%, Healing effect increases by 10%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "For each layer consumed of [Healing Sprite], Healing effect increases to 0.33%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "fter unleashing the Ultimate, gain [Bloom] with 20 SP Restore per second for 20s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Hymn of Healing",
        "key": "Healing",
        "icon": "◆",
        "description": "The Character summons a Healing Sceptre from the ground, raising it to emit a bright light, gathering nearby sprites onto the sceptre, instantly restoring 229 HP. The sceptre is then planted into the ground, creating an illusion that remains on the battlefield for a Duration, guiding [Healing Chain]. The ultimate skill consumes all [Healing Sprite] stacks, increasing the ultimate healing effect by 0.25% per stack. [Healing Chain]: Connects to the target, healing 8 HP every 2 seconds for 10 seconds.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When [Healing Sprite] reaches 30 layers, ultimate Healing amount increases by 5%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After unleashing the ultimate skill, retain half of the [Healing Sprite] stacks. Each [Healing Sprite] stack consumed increases healing effectiveness by 0.33%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Healing Chain] reduces Healing interval by 1 second.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Healing Chain] grants linked targets 5% Dmg reduction.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After unleashing the Ultimate, gain [Bloom] with 20 SP Restore per second for 20s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Divine Protection",
        "key": "Healing, SP Regen",
        "icon": "◆",
        "description": "The Healing Sceptre unleashes the divine healing power within the Spirit, granting the user the [Radiance] effect and restoring 150 SP. [Radiance]: Restores 11 HP per second for a Duration of 5s.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Use Skill to gain an extra 50 SP.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Restore a small amount of HP immediately after using a Skill.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Upon using Skill, [Support Dmg Bonus] increased to 5% for 25s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Upon using Skill, [Support Dmg Bonus] increased to 10%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Upon using Skill, [Support Dmg Bonus] increased to 15%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Hallowed Healing",
        "key": "Healing, SP Regen",
        "icon": "◆",
        "description": "The Character spins the sceptre, granting themselves a 2% [Support Dmg Bonus] for a Duration of 20s, and applies [Divine Healing]. Simultaneously, restores 200 SP. [Divine Healing]: Dmg Reduction by 10%; upon taking damage, restores HP equal to the Healing Sceptre's max HP 22+0.0%, lasting for a Duration of 8s; removed after Duration ends or after taking damage 3 times.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Restore a small amount of HP immediately after using a Skill.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Skill trigger count +1, Duration +2s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Upon using Skill, gain 5% [Support Dmg Bonus].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Upon using Skill, gain 10% [Support Dmg Bonus].",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Upon using Skill, [Support Dmg Bonus] increased to 15%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Healing Aura",
        "key": "Healing",
        "icon": "◆",
        "description": "When the Healing Sceptre is in the active Party, any Spirit landing a Normal attack on a target grants itself 1 stack of [Healing Sprite] effect. Each stack provides HP regeneration per second equal to 1 of the Healing Sceptre's Max HP.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Upon entering Fight, immediately gain 5 layers of [Healing Sprite].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When [Healing Sprite] stacks exceed 20, gain 5% [Support Dmg Bonus].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Healing Sprite] stack limit increases by 10.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Normal attack hit grants an additional [Healing Sprite] stack.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Healing Sprite] stacks exceed 30, gain an additional 5% [Support Dmg Bonus].",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Healing Aura",
        "key": "Healing",
        "icon": "◆",
        "description": "When the Healing Sceptre is in the active Party, any Spirit landing a Normal attack on a target grants itself 1 stack of [Healing Sprite] effect. Each stack provides HP regeneration per second equal to 1 of the Healing Sceptre's Max HP.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Upon entering Fight, immediately gain full [Healing Sprite] stacks.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Support Dmg Bonus] provided 10% by [Healing Sprite].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Healing Sprite] Stack limit increased by 30 stacks.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Healing Sprite] Healing efficiency increased by an additional 50% per stack.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Healing Sprite] stacks exceed 30, gain an additional 5% [Support Dmg Bonus].",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "firewolf",
    "title": "Fire Wolf",
    "subtitle": "Burning Heart - Fiery Feast Soul",
    "image": "images/personnages/firewolf/firewolf-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Main DPS",
      "Bruiser"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Qin Ming"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Bruiser"
      },
      {
        "label": "Role",
        "value": "Main DPS"
      },
      {
        "label": "Mechanic",
        "value": "Scorch"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Fire Wolf stacks up [Wolf's Mark] through Normal Attacks and Skills, and once it's maxed out, consuming it triggers [Wolf's Spirit], a transformed state with buffed damage and enhanced Normal Attacks. His whole rhythm is build stacks, transform, hit harder, repeat.\n\nHis passives constantly summon Fire Wolf for coordinated attacks whenever [Wolf's Mark] increases, and those attacks get way stronger against [Scorch] targets, so keeping enemies burning while stacking marks is the core loop. His Skills lean into that synergy too, applying Scorch and dealing bonus damage while in Wolf's Spirit form.",
    "rarity": "SR",
    "backgroundImage": "images/personnages/firewolf/background/firewolf-background.png",
    "mechanics": [
      "Scorch"
    ],
    "normalAttack": {
      "title": "Blazing Fire",
      "key": "Dmg",
      "icon": "◆",
      "description": "Fire Wolf imbues the Spirimaster's fists and feet with flame power, delivering multiple Swift strikes to enemies, dealing a total of 90+315.1% ATK Dmg. Landing the final hit of Normal on an enemy grants 1 stack of [Wolf's Mark]. When in [Wolf's Spirit], Normal Attack changes to a step-in followed by multiple rapid claw strikes, significantly increasing Dmg, dealing a total of 207+555.7% ATK Dmg."
    },
    "initiative": {
      "title": "Divine Wolf's Tail Whip",
      "key": "Dmg, Scorch",
      "icon": "◆",
      "description": "Create a wolf tail phantom, then swiftly spin one and a half times, generating intense Fire to deal 12+36.0% ATK Dmg to enemies. Subsequently, cause a Blast to deal 16+54.0% ATK Dmg to surrounding enemies, also applying [Scorch] to hit targets. Gain 2 layers of [Wolf's Mark] after release."
    },
    "ultimate": {
      "skill1": {
        "title": "Sacred Wolf Fire",
        "key": "Dmg",
        "icon": "◆",
        "description": "Summon Fire Wolf descending from the sky, inflicting a total of 140+490.0% ATK Dmg to targets in contact. Finally, Fire Wolf crashes into the ground, causing a fiery Blast within the area, dealing 142+490.0% ATK Dmg to all targets in range. If [Wolf's Mark] has reached its limit upon casting the ultimate, all [Wolf's Mark] will be consumed, activating [Wolf's Spirit].",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After casting the ultimate, if [Wolf's Mark] is not maxed, gain 2 layers of [Wolf's Mark].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Wolf's Spirit] form Duration increases by an additional 2 seconds.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Wolf's Spirit] form grants 50% Normal Attack Dmg Bonus.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Gain 3 stacks of [Wolf's Mark] immediately after [Wolf's Spirit] ends.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After unleashing the Ultimate, Fire Wolf's Normal Attack Dmg increases by 25.0% for 8s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Heaven-Scorching Flame",
        "key": "Dmg",
        "icon": "◆",
        "description": "Summon Fire Wolf to leap into the air, releasing continuous flames in the area. Each flame hit deals 6+22.0% ATK Dmg, released 45 times, Duration 6s. If [Wolf's Mark] stacks are not maxed when the ultimate is cast, gain 1 [Wolf's Mark] every 2s during the ultimate Duration. If [Wolf's Mark] stacks are maxed during the ultimate Duration, consume all [Wolf's Mark] and activate [Wolf's Spirit] form.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Wolf's Spirit] form grants Super Armor with 15% Dmg Reduction during Duration.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "In [Wolf's Spirit] form, Execute with Normal Attack gains 15% Normal Attack Dmg Bonus.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Ultimate Duration increased by 4s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "In [Wolf's Spirit] form, executing a Normal Attack increases Duration by an additional 1.5s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Normal Attack Execute in [Wolf's Spirit] form gains 15.0% Normal Attack Dmg Bonus.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Wolf Scorch",
        "key": "Dmg, Scorch",
        "icon": "◆",
        "description": "Cast three fireball attacks in succession, each dealing 16+53.3% ATK Dmg to the target. At the end of the skill, summon Fire Wolf to unleash a powerful strike at the target location, knocking back enemies and dealing 47+160.0% ATK Dmg. After Fire Wolf's strike hits the target, gain 1 stack of [Wolf's Mark].",
        "cost": 0,
        "cd": 10,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Following Skill, Normal Attack triggers its final stage immediately. If not in [Wolf's Spirit] form, this Normal Attack deals additional Dmg.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Fire Wolf hitting a target grants 1 stack of [Wolf's Mark].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Wolf's Spirit] form increases Skill Dmg to [Scorch] targets by 25%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "In [Wolf's Spirit] form, Skill Dmg to [Scorch] targets increases by 50%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Wolf's Spirit] form increases Skill Dmg to [Scorch] targets by 75.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Furious Wolf Blaze",
        "key": "Dmg, Scorch",
        "icon": "◆",
        "description": "Summon Fire Wolf to roar at the target location, dealing area ATK, up to 112+383.3% ATK as Dmg. Gain [Seething] and 1 stack of [Wolf's Mark].",
        "cost": 0,
        "cd": 10,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "During [Seething] Duration, this Spirit's Normal Dmg increases by 10%, with an additional 5% increase if hitting a [Scorch] target.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "During [Seething], Normal Execute gains 1 extra stack of [Wolf's Mark].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Casting Skill in [Wolf's Spirit] form extends Skill Duration by 2s; casting Skill in non-[Wolf's Spirit] form gains 2 extra stacks of [Wolf's Mark].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "During [Seething], Normal hits on [Scorch] targets increase Dmg to 15%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "During [Seething], Normal hits on [Scorch] targets increase Dmg to 40.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Wolf's Mark",
        "key": "Dmg, Scorch",
        "icon": "◆",
        "description": "The 4th Normal Attack hits [Scorch] target, gain an additional stack of [Wolf's Mark]. When [Wolf's Mark] stacks increase, summon Fire Wolf for a coordinated attack, dealing 8+8.9% ATK as Dmg to enemies. In [Wolf's Spirit] form, using Normal Attacks continuously summons Fire Wolf for coordinated attacks, dealing a total of 8+83.3% ATK as Dmg to enemies.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Fire Wolf's Synergy attack on [Scorch] targets increases Passive skill Dmg Up by 15%",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "In [Wolf's Spirit] form, Fire Wolf extends Duration by 1s for every 4 coordinated attacks.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Fire Wolf's coordinated attack on [Scorch] targets increases Passive skill Dmg Up by 50%",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When the 4th Normal hit lands on a [Scorch] target, there's a 50% chance to gain an additional layer of [Wolf's Mark].",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Fire Wolf's coordinated attack on [Scorch] targets increases Passive skill Dmg Up by 75.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Wolf Hunt",
        "key": "Dmg, Scorch",
        "icon": "◆",
        "description": "The 4th Normal Attack hits [Scorch] target, gain an additional stack of [Wolf's Mark]. When [Wolf's Mark] stacks increase, summon Fire Wolf for a coordinated attack, dealing 8+26.1% ATK as Dmg to enemies. In [Wolf's Spirit] form, using Normal Attacks continuously summons Fire Wolf for coordinated attacks, dealing a total of 8+24.4% ATK as Dmg to enemies.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Fire Wolf's coordinated attack has a 25% chance to trigger a flame explosion upon each hit, dealing Dmg to the target and applying [Scorch] (one attack can only trigger this effect once).",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "In [Wolf's Spirit] form, Fire Wolf extends Duration by 1.2s for every 4 coordinated attacks.",
            "condition": ""
          },
          {
            "threshold": "25k Yr",
            "description": "Fire Wolf's coordinated attack increases the chance of triggering flame explosion Dmg to 75% per hit.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "In [Wolf's Spirit] form, when Fire Wolf's coordinated attack triggers flame explosion Dmg, it increases the Spirit's Normal ATK Dmg to [Scorch] targets by 25% for 2s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Fire Wolf's coordinated attack guarantees Flame explosion Dmg with each hit.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "windbellbird",
    "title": "Windbell Bird",
    "subtitle": "Fiery Battle - Wind's Feast Song",
    "image": "images/personnages/windbellbird/windbellbird-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Agility",
      "Additional Attack"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Wind Rider"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Agility"
      },
      {
        "label": "Role",
        "value": "Additional Attack"
      },
      {
        "label": "Mechanic",
        "value": "Laceration"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Windbell fights through a swarm of small bird companions, constantly triggering [Furious Wind] attacks that pile [Laceration] stacks onto enemies. Nearly every Skill, Normal Attack, and Ultimate feeds into this loop, hit enemies, release Furious Wind, stack Laceration, repeat.\n\nTheir [Wind Field] zones boost mobility and enhance follow-up Skills when passed through, while their passives introduce [Windburn], a nasty debuff that converts existing Laceration stacks into extra bonus damage over time. So the more Laceration piled up beforehand, the harder Windburn hits once it triggers.",
    "rarity": "SR",
    "backgroundImage": "images/personnages/windbellbird/background/windbellbird-background.png",
    "mechanics": [
      "Laceration"
    ],
    "normalAttack": {
      "title": "Freewind",
      "key": "Dmg, Laceration",
      "icon": "◆",
      "description": "Launch multiple attacks on the target, dealing a total of 62+205.0% ATK Dmg. The second and fourth stages hit, releasing [Furious Wind] once, dealing 1+4.1% ATK Dmg. [Furious Wind] applies 1 stack of [Laceration] to all hit enemies."
    },
    "initiative": {
      "title": "Wind Chaser",
      "key": "Dmg",
      "icon": "◆",
      "description": "Inflicts 19+66.0% ATK Dmg to enemies within range at the current location, then creates a [Wind Field], increasing movement Speed by 50% for allies within the [Wind Field] for a Duration of 6s."
    },
    "ultimate": {
      "skill1": {
        "title": "Rising Storm",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Summon multiple Windbell Birds to gather and circle around a designated area, creating a large rotating airflow. Inflicts 40+139.5% ATK Dmg per second to enemies within the area for a Duration of 8s. Each instance of Dmg releases a [Furious Wind] attack, dealing 4+15.5% ATK Dmg. [Furious Wind] applies 3 stacks of [Laceration] to all hit enemies.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Ultimate's [Furious Wind] attack Dmg Up by 10%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Ultimate has an additional 20% chance to trigger [Furious Wind] once per second when dealing Dmg.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Ultimate's [Furious Wind] Dmg Up to 20%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Ultimate's attack range increases, causing Dmg Up by 20%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Ultimate's [Furious Wind] attack Dmg increased to 35.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Windchaser",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Summon all Windbell Birds to dive bomb from the sky to the ground, dealing a total of 333+1140.0% ATK damage to enemies in the area. The final attack of the ultimate releases 4 [Wind Fury] attacks, each dealing 4+15.0% ATK damage. [Wind Fury] applies 3 stacks of [Laceration] to all hit enemies.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "The final stage of the ultimate applies [Windburn] to all hit targets.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Ultimate attack range increases, causing Dmg Up by 10%. Ultimate's [Furious Wind] Dmg Up by 10%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Ultimate adds an extra final attack, also triggering [Furious Wind] and [Windburn] effects.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each hit of the ultimate on targets with [Windburn] triggers an additional [Furious Wind] attack.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Ultimate's [Furious Wind] attack Dmg increased to 25.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Dragon's Shadow",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Move a certain distance in the current direction, releasing 2 Windbell Birds towards the target, dealing 13+43.7% ATK damage to enemies in the path. Release an additional [Furious Wind] attack, dealing 3+11.6% ATK damage. [Furious Wind] applies 2 stacks of [Laceration] to all hit enemies. If passing through a [Wind Field] during mobility, gain the power of [Wind Field] to enhance the skill, increasing Windbell Bird fly speed and Dmg Up to 15+52.4% ATK. This skill can be released in 2 consecutive stages.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Wind Field] triggers an additional [Furious Wind] attack when a Skill is used.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Skill gains 1 additional release stage.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Skill summons 1 additional Windbell Bird.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Release Skill within [Wind Field] to trigger an additional [Furious Wind] attack, increasing the count to 2 times.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill's [Furious Wind] attack Dmg increased to 15.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Flock Drift",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "Summon two Windbell Birds to spiral down onto a target within a certain range, dealing 8+26.0% ATK as Dmg, and release a [Furious Wind] attack, dealing 28+95.3% ATK as Dmg. [Furious Wind] applies 4 stacks of [Laceration] to all hit enemies. If there is [Wind Field], it absorbs the [Wind Field] to enhance this minor skill, attacking up to 3 targets within a certain range, but still only releasing one [Furious Wind] attack.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Absorb [Wind Field] to enhance skill release, and if only 1 enemy is within range, Dmg Up by 10%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Absorb [Wind Field] to enhance skill release, increasing [Furious Wind] ATK count by 1.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Hit an enemy to apply a mark, and for the next 6s, Windbell Bird will launch a spinning ATK every 3s, targeting up to 3 enemies simultaneously.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each Windbell Bird ATK applies [Windburn] to hit enemies.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill's [Furious Wind] attack Dmg increased to 15.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Power of Wind Rider",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "After every 6 [Furious Wind] attacks, summon a Windbell Bird at the target location to Dive on enemies, inflicting 8+26.5% ATK Dmg and applying [Windburn] to hit enemies. While in [Windburn] Status, receive additional Laceration Dmg equal to Laceration stacks*1+1.7% ATK, up to 50 stacks, Duration 9s.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Windburn] Dmg Up by an additional 20%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Windbell Bird Dive attack creates 1 [Wind Field] spread and deals extra Dmg.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Windburn] Dmg calculated with [Laceration] stack limit increased to 100.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Windburn] Duration increased to 15s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Windburn] Dmg Up by an additional 35.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Child of Windstorm",
        "key": "Dmg, Laceration",
        "icon": "◆",
        "description": "After every 6 [Furious Wind] attacks, summon a Windbell Bird at the target location to Dive on enemies, inflicting 21.2% ATK Dmg and applying [Windburn] to hit enemies. While in [Windburn] Status, receive additional Laceration Dmg equal to Laceration stacks*1.4% ATK, up to 50 stacks, Duration 9s.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each application of [Windburn] resummons Windbell Bird to Dive, dealing Dmg to enemies. This Dive does not apply [Windburn].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Windburn] calculated with a maximum of 100 stacks.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When taking extra Dmg from [Windburn], apply [Windburn] to the target again, triggering at most once every 3s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each [Windburn] application increases subsequent [Windburn] extra Dmg and passive Windbell Bird Dive Dmg by 2%, up to 12%, Duration 6s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Each application of [Windburn] increases subsequent [Windburn] Dmg and passive Windbell Bird Dive Dmg by 4%, up to 24%, for 6s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "soulbreaker",
    "title": "Soulbreaker",
    "subtitle": "Ultimate Clash - Sharp Gleam",
    "image": "images/personnages/soulbreaker/soulbreaker-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Agility",
      "Sub Dps"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Yang Wudi"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Agility"
      },
      {
        "label": "Role",
        "value": "Sub Dps"
      },
      {
        "label": "Mechanic",
        "value": "Momentum"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Soulbreaker builds [Momentum] with every successful hit, a stacking buff that quietly boosts damage the whole fight, up to 50 stacks worth. Stay aggressive and keep attacking, and it snowballs into free damage over time. Stop attacking for too long, though, and it starts decaying, so this Spirit punishes hesitation.\n\nAt 15 Momentum stacks, the charged attack upgrades into [Break·Vanquish], a heavy hitting enhanced strike that grants [Force Break] stacks. Those Force Break stacks get consumed entirely when the Ultimate goes off, each one adding a chunk of bonus Ultimate damage. So the loop becomes: attack constantly, build Momentum, charge into Break·Vanquish, bank Force Break, then cash it all in on the Ultimate.",
    "rarity": "SR",
    "backgroundImage": "images/personnages/soulbreaker/background/soulbreaker-background.png",
    "normalAttack": {
      "title": "Blitz",
      "key": "Dmg",
      "icon": "◆",
      "description": "Blitz with the Soulbreaker, unstoppable! Perform up to 5 Combo attacks, dealing a total of 101+354.5% ATK Dmg. Hold the Normal Attack button to unleash the charged Normal Attack [Break·Slash], Jump into the air and slash down to deal 32+108.7% ATK Dmg. [Exude] After using a Skill or Dodging, immediately follow up with a Normal Attack [Blitz] to start directly from the 4th move of [Blitz]."
    },
    "initiative": {
      "title": "Eleusium",
      "key": "Dmg",
      "icon": "◆",
      "description": "Aim true, follow your heart! Unleash the Soul Power concentrated at the spearhead, dash forward to gather targets, then deal a total of 29+100.0% ATK Dmg to surrounding targets."
    },
    "ultimate": {
      "skill1": {
        "title": "Blast",
        "key": "Dmg",
        "icon": "◆",
        "description": "Stand alone, Desolation! Throw the Soulbreaker forward and unleash a sacrificial strike, dealing a total of 215+740.0% ATK Dmg to all targets in the area.",
        "cost": 3,
        "cd": 20,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "If the target's HP is below 30%, Ultimate Dmg Bonus is 15%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "With 2 stacks of [Force Break], reduce Soul Power consumption by 100 points.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When hitting a single target, Ultimate Dmg Bonus is 5%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Increase Ultimate Soul Power consumption by 100 points, Ultimate Dmg Bonus by 20%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Ultimate Dmg Up by 15%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Lorarii",
        "key": "Dmg",
        "icon": "◆",
        "description": "Charge into battle! No retreat, no surrender! Wield the Soulbreaker for two sweeping strikes, dealing a total of 61+208.5% ATK Dmg.",
        "cost": 3,
        "cd": 20,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When Ultimate hits, increase Ultimate Dmg Bonus by 3% per target hit, up to a maximum of 15%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When target HP is above 50%, Ultimate Dmg Up by 20%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "First Ultimate hit increases second hit Dmg by 3% per Unit killed, up to a maximum of 15% Dmg Bonus.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "With 2 stacks of [Force Break], reduce Soul Power consumption by 100 points.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Ultimate Dmg Up by 15%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Bash",
        "key": "Dmg",
        "icon": "◆",
        "description": "Valiant Breakthrough, Exude! The Soulbreaker pierces through enemy lines like a dragon, transforming into a spear god and thrusting forward, dealing Dmg equal to 29+99.1% ATK to surrounding targets. This Skill can be stored up to 2 times for use.",
        "cost": 0,
        "cd": 10,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After a thrust attack, trigger a second-stage Traction, pulling targets along the path to the thrust endpoint.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "The second-stage Void Break deals Dmg; Skill Dmg increases by 25%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Skill maximum charge count increased by one.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After using the Skill, the Spirit gains a 5% Skill Dmg boost, which does not stack with repeated triggers, lasting for 8s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill max charge count +1, Skill Dmg +30%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Quake",
        "key": "Dmg",
        "icon": "◆",
        "description": "Soulbreaker unleashes Mighty Tornado, dealing 77+380.0% ATK as Dmg to nearby targets, then Quakes the ground, attacking surrounding targets.",
        "cost": 0,
        "cd": 10,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Traction range increased by 50%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Tap the Normal button during gun spin to trigger Quake early; Quake Dmg Up by 20%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Skill grants 2% Dmg Bonus per target hit, up to a maximum of 10% Bonus.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After releasing Skill, Soulbreaker gains 35% Normal Attack Dmg Bonus for 10s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After releasing Skill, Soulbreaker gains 50% Normal Attack Dmg Bonus for 10s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Exude",
        "key": "Dmg, Enhanced Normal Attack",
        "icon": "◆",
        "description": "Gain 1 stack of [Momentum] with each successful hit, up to 1 stack of [Momentum] per hit. -Each [Momentum] stack grants a 0.5% Dmg Bonus, up to 50 stacks. -After the Soulbreaker Spirit ceases attacking for 10s, 2 [Momentum] stacks are lost every 5s. -Upon reaching 15 [Momentum] stacks, the next charged attack converts to [Break·Vanquish]. -Enhanced charged attack [Break·Vanquish] deals double damage, granting 1 stack of [Force Break]. -[Force Break] can have up to 2 stacks. -When unleashing the Ultimate Skill, all [Force Break] stacks are consumed on hit, each adding 5% Ultimate damage.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After Soulbreaker stops attacking, [Momentum] does not decrease.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Force Break] cap increased to 3 stacks. When Ultimate consumes 3 stacks of [Force Break] at a time, the Ultimate Dmg Bonus from [Force Break] increases to 20%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Gain 3 stacks of [Force Break] upon entering the Fight, each [Force Break] stack grants 2% Dmg Bonus.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Normal Attack type Dmg receives a 25% Dmg Bonus.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Normal Attack type Dmg receives a 50% Dmg Bonus.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Will",
        "key": "Dmg, Normal",
        "icon": "◆",
        "description": "Gain 1 stack of [Momentum] with each successful hit, up to 1 stack of [Momentum] per hit. -Each [Momentum] stack grants a 0.5% Dmg Bonus, up to 50 stacks. -After the Soulbreaker Spirit ceases attacking for 10s, 2 [Momentum] stacks are lost every 5s. -Upon reaching 15 [Momentum] stacks, the next charged attack converts to [Break·Vanquish]. -Enhanced charged attack [Break·Vanquish] deals double damage, granting 1 stack of [Force Break]. -[Force Break] can have up to 2 stacks. -When unleashing the Ultimate Skill, all [Force Break] stacks are consumed on hit, each adding 5% Ultimate damage.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After Soulbreaker stops attacking, [Momentum] does not decrease. Gain 5 stacks of [Momentum] for each target killed.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Force Break] cap increased to 3 stacks. When Ultimate consumes 3 stacks of [Force Break] at a time, the Ultimate Dmg Bonus from [Force Break] increases to 30%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Each stack of [Momentum] grants a Dmg Bonus, increased to 0.75%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Enhanced charged Normal [Break·Destruction] gains 30% Dmg Up.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Enhanced charged Normal [Break·Destruction] gains 50% Dmg Up.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "icephoenix",
    "title": "Ice Phoenix",
    "subtitle": "Frozen Illusion - Birds Flock to the Phoenix",
    "image": "images/personnages/icephoenix/icephoenix-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Control",
      "Control Dmg Up"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Shui Bing'er"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Control"
      },
      {
        "label": "Role",
        "value": "Control Dmg Up"
      },
      {
        "label": "Mechanic",
        "value": "Freeze-stacking"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Ice Phoenix chills enemies down until they're basically frozen solid. Their whole kit revolves around stacking [Icebound], and once it hits 10 stacks, it converts into [Soul Freeze], a debuff that boosts damage taken while also refreshing [Icering Armor], a defensive buff that shields them from losing resources when hit.\n\nEverything ties together in a loop: hit enemies to stack Icebound, cap it out to trigger Soul Freeze, use that to keep Icering Armor rolling, all while sprinkling [Frozen] and [Control Vulnerability] onto enemies to lock them down and make future control effects hit even harder.",
    "rarity": "SR",
    "backgroundImage": "images/personnages/icephoenix/background/icephoenix-background.png",
    "normalAttack": {
      "title": "Sleet",
      "key": "Dmg",
      "icon": "◆",
      "description": "Harness the power of frost to shoot ice arrows forward, allowing up to 3 Combo attacks. When the final attack hits, apply 3 stacks of [Icebound] effect to the target. Deals a total of 42+149.3% ATK Dmg."
    },
    "initiative": {
      "title": "Icefeather Clash",
      "key": "Dmg, Frozen",
      "icon": "◆",
      "description": "Gain 1 stack of [Icering Armor], harness the power of ice to unleash an Ice Phoenix projection forward, forming [Permafrost Domain], inflicting 1s of [Frozen] and dealing 17+58.3% ATK as Dmg to enemies along the path."
    },
    "ultimate": {
      "skill1": {
        "title": "Frostbite Chill",
        "key": "Dmg",
        "icon": "◆",
        "description": "The Ice Phoenix harnesses the power of surrounding frost to drop 8 ice spikes, dealing 2+5.2% ATK Dmg and spreading cold wind upon impact, applying one layer of [Icebound]. The ice spikes last for 3s. When the ice spikes explode, they deal additional 12+41.6% ATK Dmg to nearby targets and apply [Bone Chill], increasing 10.0% Control Vulnerability for 15s.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Ice Spikes spread cold wind every second, dealing Dmg and applying a stack of [Icebound] to nearby enemies.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "The final explosion inflicts 1s [Frozen] on nearby targets in [Soul Freeze].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Ice Spike Duration extended by 2s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Extend [Frozen] caused by the explosion by 1s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Control Vulnerability] effect increased to 15%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Icarus Blizzard",
        "key": "Dmg",
        "icon": "◆",
        "description": "Ice Phoenix forms a solid entity, charges towards the target area, and detonates, dealing 88+303.3% ATK Dmg to all nearby enemies and applying a 3s [Frozen] (adjusted to 1.5s in PVP), causing a 10s 10.0% [Control Vulnerability] effect.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Enemies become Slowed for 5s when [Frozen] ends.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Control Vulnerability] effect increased to 12.5%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Control Vulnerability] effect increased to 15%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "During [Frozen], when enemies take other Ultimate Dmg, inflict [Frozen Expanse] Dmg again. Can only trigger once per Ultimate.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Control Vulnerability] effect increased to 20%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Cry of Ice Phoenix",
        "key": "Dmg, Frozen, Control",
        "icon": "◆",
        "description": "Unleash Cry of Ice Phoenix, dealing 50+173.8% ATK as Dmg to enemies within range and applying [Frozen] effect for 2s. Effect lasts 1s on bosses.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Upon release, if [Icering Armor] effect is active, inflict 6 additional stacks of [Icebound] on the enemy.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Increase Skill Range.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "All [Frozen] Duration extended by 1s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Cooldown is reduced by 4s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill Dmg Up 20%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Frostfeather Sting",
        "key": "Dmg, Frozen, Control",
        "icon": "◆",
        "description": "Summon 6 ice spikes to Auto ATK the current target, each dealing 3+9.9% ATK Dmg.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Ice Spikes deal 10% Dmg Up to enemies with [Soul Freeze] or [Frozen].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Ice Spikes apply 1 stack of [Icebound] to enemies hit.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When triggering [Icering Armor] Dmg↓ effect, fire 3 Ice Spikes at the current targets.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When Ice Spikes hit enemies in [Soul Freeze], extend [Soul Freeze] Duration by 0.5s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill Dmg Up 20%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Icering Armor",
        "key": "Dmg",
        "icon": "◆",
        "description": "Gain 1 stack of [Icering Armor] effect every 30s, Duration 15s, max 1 stack. [Icebound] reaches 10 stacks, clear [Icebound] and apply 1 stack of [Soul Freeze] to the target, Duration 10s. [Soul Freeze] increases target's Dmg Up 7.5%, gain 1 stack of [Icering Armor] when [Soul Freeze] is applied.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Apply 3 additional stacks of [Icebound] to enemies taken Dmg.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "20% chance not to consume [Icering Armor] when taking Dmg.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Max [Icering Armor] Quantity +1.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "50% chance not to consume [Icering Armor] when taking Dmg.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Soul Freeze] effect increased to 12.5%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Icering Armor",
        "key": "Dmg",
        "icon": "◆",
        "description": "Gain 1 stack of [Icering Armor] effect every 30s, Duration 15s, max 1 stack. [Icebound] reaches 10 stacks, clear [Icebound] and apply 1 stack of [Soul Freeze] to the target, Duration 10s. [Soul Freeze] increases target's Dmg Up 7.5%, gain 1 stack of [Icering Armor] when [Soul Freeze] is applied.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Soul Freeze] effect increased to 10%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After using Ice Phoenix Initiative, emit a cold wind every second, dealing Dmg and applying 1 stack of [Icebound] for 4s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Icering Armor] grants 20% Dmg Down for 5s upon consumption.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Soul Freeze] effect increased to 15%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Soul Freeze] effect increased to 20%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "septapagoda",
    "title": "Septa Pagoda",
    "subtitle": "Septa Sceptre - Seven Treasures Feast",
    "image": "images/personnages/septapagoda/septapagoda-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Support",
      "Shield"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Ning Fengzhi"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Support"
      },
      {
        "label": "Role",
        "value": "Shield"
      },
      {
        "label": "Mechanic",
        "value": "Sigil-cycling"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Septa Pagoda revolves around [Pagoda Sigil], randomly gained stacks that grant different rotating bonuses depending on which one shows up. Their whole kit builds toward stacking, refreshing, and enhancing these Sigils, while stacking permanent [Support Dmg Bonus] for the team on the side.\n\nThey're also a solid shield-bot, nearly every Skill hands out a Shield based on their own HP and refunds Soul Power, keeping the team both protected and topped off on resources. Their Ultimates lean into buffing the team's Ultimate economy too, reducing SP costs and cooldowns for everyone during [Septa Divine Light].",
    "rarity": "SR",
    "backgroundImage": "images/personnages/septapagoda/background/septapagoda-background.png",
    "normalAttack": {
      "title": "Light Snatch",
      "key": "Dmg",
      "icon": "◆",
      "description": "Gracefully wield the Nine-Colored Staff for four forward attacks, dealing a total of 118+391.9% ATK Dmg."
    },
    "initiative": {
      "title": "Bastion Shield",
      "key": "Dmg, Dmg↓",
      "icon": "◆",
      "description": "Use Septa Pagoda to envelop yourself, dealing 3+10.0% ATK Dmg to nearby enemies. Gain Dmg reduction and Strong Super Armor for 10s, and randomly gain one layer of [Pagoda Sigil]. Normal Attack is replaced with a special attack for 5s, and after release, gain the current [Pagoda Sigil]."
    },
    "ultimate": {
      "skill1": {
        "title": "Septa Pagoda Boost",
        "key": "Dmg Up, SP Regen",
        "icon": "◆",
        "description": "Summon Septa Pagoda, divine light envelops you, granting a Shield equal to 64% of the Septa Pagoda's own HP, and gain [Septa Divine Light] for a Duration of 25s. During [Septa Divine Light], all Spirit Ultimate Soul Power consumption is reduced by 100, and the cooldown is reduced by 5s after casting. [Septa Divine Light] effect activates only once.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After casting this ultimate, return 100 Soul Power.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Skill pre-randomized [Pagoda Sigil] fixed as [Pagoda Sigil: Soul].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Skill effect activation increased to 2 times.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After casting this ultimate, SP restoration effect increased to 200 points.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After unleashing this Ultimate, gain 5.0% [Support Dmg Bonus] for 30s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Septa Pagoda Heart",
        "key": "Dmg Up, SP Regen",
        "icon": "◆",
        "description": "Release an aura centered on self, Duration 20s, granting an enhanced version of current [Pagoda Sigil] effect. During this time, players cannot gain [Pagoda Sigil].",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Aura range increased.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "SP Cost Reduction by 100 for this skill.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Aura Duration increased to 25s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Aura grants a Shield equal to 5% of Septa Pagoda's HP every 5 seconds to players within range, non-stackable.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Aura Duration increased to 30s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Septa Pagoda Protection",
        "key": "Shield, SP Regen",
        "icon": "◆",
        "description": "Extend your hand to summon the Septa Pagoda, granting yourself a Shield equal to 16% of the Pagoda's own HP, while restoring 200 Soul Power points.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Gain 5% Dmg Down while Shield is active.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After skill activation, randomly gain 1 layer of [Pagoda Sigil].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When the Shield disappears, Restore some health.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Reduce this skill's cooldown by 3s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Restore an additional 100 Soul Power when the Skill is cast.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Septa Pagoda Might",
        "key": "Shield, SP Regen",
        "icon": "◆",
        "description": "Reach out to summon the Septa Pagoda, dealing 18+58.3% ATK as Dmg to nearby enemies, applying a 15s 2.5% [Support Dmg Bonus] to self, and restoring 200 Soul Power. After Skill release, randomly gain 1 stack of [Pagoda Sigil].",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Support Dmg Bonus Duration increased to 30s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Skill pre-randomized [Pagoda Sigil] fixed as [Pagoda Sigil: Soul].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Support Dmg Bonus increased to 5%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Reduce this skill's cooldown by 5s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Restore an additional 100 Soul Power when the Skill is cast.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Multi-Mind",
        "key": "Dmg",
        "icon": "◆",
        "description": "[Pagoda Sigil] cap increased to two stacks, defaulting to two permanent [Pagoda Sigil]. When one [Pagoda Sigil] stack expires, gain a random [Pagoda Sigil] stack. Spirimaster gains permanent 2.5% [Support Dmg Bonus].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Enhance Pagoda Sigil [Power] [Speed] [Soul] Stats.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Enhance Pagoda Sigil [Defense] [Attack] [Boost] Stats.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Support Dmg Bonus increased to 5%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Gain 5% Support Dmg Bonus for 20s when 1 layer of [Pagoda Sigil] refreshes.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Support Dmg Bonus] increased to 7.5%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Eternal Splendor",
        "key": "Dmg",
        "icon": "◆",
        "description": "[Pagoda Sigil] cap increased to two stacks, defaulting to two permanent [Pagoda Sigil]. When one [Pagoda Sigil] stack expires, gain a random [Pagoda Sigil] stack. Spirimaster gains permanent 2.5% [Support Dmg Bonus].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Enhance all Pagoda Sigil Stats.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Support Dmg Bonus increased to 5%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Each time a stack of [Pagoda Sigil] refreshes, gain a Shield with HP equal to 5% of the Septa Pagoda.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Gain 5% [Support Dmg Bonus] for 20s whenever 1 stack of [Pagoda Sigil] refreshes.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Support Dmg Bonus] increased to 7.5%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "imperialruinblade",
    "title": "Imperial Ruinblade",
    "subtitle": "Sword Spirit Twine - Sword Follows the Wind - Sword Points to the Universe",
    "image": "images/personnages/imperialruinblade/imperialruinblade-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Agility",
      "Main DPS"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Mo Chang'ge"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Agility"
      },
      {
        "label": "Role",
        "value": "Main Dps"
      },
      {
        "label": "Mechanic",
        "value": "Scorch, Electrified"
      },
      {
        "label": "Acquisition",
        "value": "Sovereign Sundering Summon"
      }
    ],
    "description": "Imperial Ruinblade is basically fighting a two-front war at all times, juggling [King Yin] (dark) and [Holy Yang] (light) stacks while alternating between two Ultimate forms: [Dual Blades Liberation] for fast dual-sword combos, and [Greatsword Liberation] for one big two-handed smash session. Depending on the fight, she can go quick and flashy or slow and devastating.\n\nHer core gimmick revolves around [Electrified] and [Scorch], two opposing elemental debuffs that convert into each other on hit. Land a Scorch hit, and it applies Electrified; land an Electrified hit, and it applies Scorch. It's a constant cycle, feeding into her passive triggers [Yin Thunder] and [Yang Flame], which fire off bonus damage whenever she stacks enough hits on the matching element.\n\nHer whole playstyle is about balancing King Yin and Holy Yang, since whichever stack is higher determines bonus effects, buffs, and even Crit Damage scaling. In her Greatsword form, she instantly floods herself with both stacks, then burns through them for a big Chaos-fueled finisher.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/imperialruinblade/background/imperialruinblade-background.png",
    "mechanics": [
      "Electrified",
      "Scorch"
    ],
    "normalAttack": {
      "title": "Sword Dance",
      "key": "Dmg",
      "icon": "◆",
      "description": "Twin Blades Dance gracefully like a dragon, resembling a startled swan. Perform up to 6 Normal attacks, dealing a total of 70+485.4% ATK Dmg."
    },
    "initiative": {
      "title": "Quick Slash",
      "key": "Dmg",
      "icon": "◆",
      "description": "Twin Blade Whirlwind Slash, during which you can tap Normal up to 5 times, dealing a total of 20+144.0% ATK Dmg."
    },
    "ultimate": {
      "skill1": {
        "title": "Imperial Ruinblade in the Present World",
        "key": "Dmg",
        "icon": "◆",
        "description": "Unleash the Power of the Imperial Ruinblade, entering [Dual Blades Liberation] state. The [Dual Blades Liberation] state exits when leaving the Fight, and this ultimate cannot be used again in this state. During [Dual Blades Liberation] state, dual blade attacks hitting enemies consume some Soul Power, dealing extra Dmg. Additionally, the state unlocks the dual blade charged attack. Hold Normal for a dual blade flurry, continuously dealing Dmg to enemies. Every two strikes deal 8+54.0% ATK Dmg. Release when the red light flashes to perform an Execute Slash, dealing 152+1044.0% ATK Dmg, consuming all current [King Yin] and [Holy Yang] stacks for additional Dmg. After activating the state, the lower stack between [King Yin] and [Holy Yang] converts to the higher stack.",
        "cost": 1,
        "cd": 30,
        "haloTitle": "Wind God Imperiale Ruinbalde Ultimate",
        "haloDescription": "In the [Dual Blades Liberation] state, Dual Blades charging can emit sword energy and alter the form of the Execute, generating sword energy that lasts for several seconds. Upon hitting a target, it slowly advances forward, dealing a total of 192+1324.3% ATK as Ultimate Dmg.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Increase ASPD for Charged Attack Twin Blade Dance.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Reduce Soul Power consumption upon hit in [Dual Blades Liberation] state.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Gain Super Armor and Dmg Reduction during Twin Blade Dance. If [Holy Yang] or [King Yin] is at 20 stacks or more, Execute deals additional 50.0% Crit Dmg.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When [King Yin] exceeds [Holy Yang], hitting 4 times with a charged dance grants one stack of [King Yin]. When [Holy Yang] exceeds [King Yin], hitting 4 times with a charged dance grants one stack of [Holy Yang].",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Each stack of [King Yin] or [Holy Yang] increases the Dmg of [Electrified] or [Scorch] triggered by Execute by 100.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Liberation of the Imperial Ruinblade",
        "key": "Dmg",
        "icon": "◆",
        "description": "Unleash the power of the Imperial Ruinblade, entering [Greatsword Liberation] state, gaining Strong Super Armor and Dmg reduction, while replacing Normal ATK with Greatsword ATK. During [Greatsword Liberation] state, perform the second-stage ultimate [Chaos Annihilation], dealing 13+88.2% ATK Dmg, and exit [Greatsword Liberation] state after execution. Upon entering [Greatsword Liberation] state, instantly gain 20 stacks of [King Yin] and [Holy Yang], and cannot gain [King Yin] and [Holy Yang] by any other means during this state. In [Greatsword Liberation] state, each Greatsword Normal ATK consumes one stack of [King Yin] or [Holy Yang], prioritizing the higher stack count. In [Greatsword Liberation] state, for each stack of [King Yin] and [Holy Yang] consumed, gain one stack of [Chaos]. The second-stage ultimate [Chaos Annihilation] receives a Dmg Bonus based on [Chaos] stack count, and all stacks of [Chaos], [King Yin], or [Holy Yang] are removed after [Chaos Annihilation] execution.\n",
        "cost": 3,
        "cd": 30,
        "haloTitle": "Wind God Imperiale Ruinbalde Ultimate",
        "haloDescription": "[Chaos Annihilation] cast above 20 Chaos stacks increases final damage by 30.0%, and targets hit by this [Chaos Annihilation] receive increased final damage by 10.0%, Duration 20s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Enhance [Chaos Annihilation] Dmg based on the time in [Greatsword Liberation] state, increasing 0.5% Ultimate Dmg per second, up to 20.0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Greatsword's charged Normal consumes 5 stacks of [King Yin] or [Holy Yang], dealing additional Electrified and Scorch Dmg.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Chaos Annihilation] hits targets with [Electrified] or [Scorch] for Dmg Up 30.0%, both effects increase by 50.0%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Activate [Greatsword Liberation] to gain an additional 10 stacks of [Holy Yang] and [King Yin], and during [Greatsword Liberation], the entire team receives Electrified Dmg and Scorching Dmg Bonus 100.0%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "18% chance to gain an additional stack when getting stacks [Chaos].",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Shadow Raid",
        "key": "Dmg",
        "icon": "◆",
        "description": "After a brief preparation, the dual swords perform a forward slash, dealing a total of 64+432.0% ATK Dmg to enemies in its path. If the skill hits an enemy with [Electrified], gain 1 stack of [King Yin]; if the enemy has [Scorch], gain [Holy Yang]. If both or neither are present, gain 1 stack of [Holy Yang]. If the target hit has [Scorch], apply [Electrified] with a Duration of 20s; if it has [Electrified], apply [Scorch] with a Duration of 20s. If neither is present, prioritize applying [Electrified].",
        "cost": 0,
        "cd": 20,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Reduce skill cooldown by 5s, gain an additional stack of [Holy Yang] or [King Yin].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Shorten draw time and increase chase distance, skill Dmg Up by 30.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Skill adds a follow-up multi-hit blade light, dealing 4+25.9% Dmg.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each stack of [Holy Yang] or [King Yin] increases Skill Crit Dmg by 1.0%, calculated based on the higher stack count.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Within 5s after release, Dmg Up of Normal attacks by Imperial Ruinblade's Twin Swords by 10.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Sword Will Attraction",
        "key": "Dmg",
        "icon": "◆",
        "description": "Reach out to drag enemies in the front area before you, then perform an upward slash with the greatsword, dealing a total of 116+792.0% ATK Dmg. In the [Greatsword Liberation] state, this skill is enhanced, expanding the drag range and upgrading the upward slash to a Rising Dragon Slash, dealing a total of 116+791.9% ATK Dmg, followed by a direct aerial normal attack for a downward strike. If the target hit has [Scorch], apply a 20-second [Electrified]; if Electrified, apply a 20-second [Scorch]. If neither, prioritize applying [Scorch].",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "This Skill increases Skill Dmg by 5.0% for each additional target hit, up to a maximum increase of 25.0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Normal attack following the enhanced version of this Skill has Dmg Up and inflicts [Stun] on the target for 2 seconds.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Every time any Spirit in the team deals [Electrified Dmg] or [Scorch Dmg], this Skill's cooldown is reduced by 0.3 seconds, up to a maximum reduction of 15 seconds.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Normal attack following the enhanced version of this Skill inflicts [Yin-Yang Disintegration] on the target for 20 seconds, allowing all Spirits to trigger Electrified Dmg on [Electrified] targets.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "In [Greatsword Liberation] state, each use of this skill increases the Dmg of the next [Chaos Annihilation] or [Dual Sword Charge Execute Slash] by 10.0%, stacking up to 3 times then resets after activation.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Yin-Yang Cycle",
        "key": "Dmg",
        "icon": "◆",
        "description": "When the Imperial Ruinblade's Black Sword hits a target with existing [Scorch], accumulating 5 times triggers [Yin Thunder], dealing 9+64.8% ATK Dmg and gaining a stack of [King Yin]. When the Imperial Ruinblade's White Sword hits a target with existing [Electrified], accumulating 5 times triggers [Yang Flame], dealing 9+64.8% ATK Dmg and gaining a stack of [Holy Yang].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When [King Yin] exceeds [Holy Yang], [Yin Thunder] has a 50% chance to trigger consecutively. When [Holy Yang] exceeds [King Yin], [Yang Flame] has a 50% chance to trigger consecutively.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Yin Thunder] and [Yang Flame] require only 3 successful hits to trigger.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Holy Yang] and [King Yin] gain an additional layer each time acquired.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Crit Dmg from [Yin Thunder] and [Yang Flame] increases by 30.0% when hitting targets with both Scorch and Electrified.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When either [Holy Yang] or [King Yin] reaches 20 stacks, the other resets to 0. The side that reaches 20 stacks breaks the limit and gains an additional 20 stacks, becoming 40 stacks.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Holy Yang King Yin",
        "key": "Dmg",
        "icon": "◆",
        "description": "When Imperial Ruinblade strikes a target, if both [King Yin] and [Holy Yang] are present, consume 3 stacks each to generate [Yin Thunder] or [Yang Flame], triggering a 3s cooldown, dealing 78+540.0% ATK or 78+540.0% ATK Dmg.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Within 30 seconds of activating the [Greatsword Liberation] or [Dual Blades Liberation] state, grants the entire team the ability to trigger this passive, and increases the team's Electrified Dmg and Scorch Dmg by 50.0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When inflicting [Yin Thunder], if the target is [Electrified], trigger [Falling Thunder] on all nearby targets, dealing Electrified Dmg. When inflicting [Yang Flame], if the target is [Electrified], trigger [Flame Blast] on all nearby targets, dealing Scorch Dmg",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When inflicting [Yin Thunder], if the target is [Scorched], there's a 50% chance to trigger an additional [Falling Thunder] Combo on the target, up to 3 times, with Electrified Dmg. When inflicting [Yang Flame], if the target is [Scorched], there's a 50% chance to trigger an additional [Flame Blast] Combo on the target, up to 3 times, with Scorch Dmg.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Yin Thunder] enhancement, multi-stage Dmg with outward spread, targets hit gain [Flammable Conductor] status, increasing Electrified Dmg and Scorch Dmg by 75.0%, Duration 5s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Cooldown reduced to 2s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "pyrelord",
    "title": "Pyrelord",
    "subtitle": "Crimson Flame Spider Authority - Fire-Tempered Gold Balde - Golden Ember Shadow",
    "image": "images/personnages/pyrelord/pyrelord-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Defense",
      "Shield"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Yan"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Defense"
      },
      {
        "label": "Role",
        "value": "Tank"
      },
      {
        "label": "Mechanic",
        "value": "Scorch"
      },
      {
        "label": "Acquisition",
        "value": "Scorching Flames Summon"
      }
    ],
    "description": "PyreLord is exactly what you'd expect from a fire tank: block hits, build fire, mark enemies for extra damage, and hit like a volcano when it counts. His whole kit revolves around blocking with his Initiative shield, which not only protects him but also builds up [Frenzied Flame] and [Fury Fire], resources he burns through to apply juicy debuffs like [DEF Vulnerability] on marked enemies.\n\nHe's got a two-in-one identity: tank and burst damage dealer. Successful blocks trigger counterattacks like [Unyielding Roar] or [Crushing Blow], both hitting insanely hard for a \"defensive\" character (we're talking thousands of percent ATK). Meanwhile his marking system, [Molten Bone] and [Scorching Soul], tags enemies with HP-based marks that increase how much extra damage they take, stacking Vulnerability higher and higher the longer the fight drags on.\n\nHis Ultimates lean into area denial too, Purgatory Cage traps enemies (and himself) inside a Lava Territory where nobody can escape, while Inferno Punch drops a massive Synergy Dmg burst alongside a magma eruption that applies long-lasting [Scorch].",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/pyrelord/background/pyrelord-background.png",
    "mechanics": [
      "Scorch"
    ],
    "normalAttack": {
      "title": "Molten Fist",
      "key": "Dmg",
      "icon": "◆",
      "description": "Swift close-range strikes deal up to 60+399.6% ATK Normal Dmg to hit targets.\n\nIn mid-air, Normal attacks with clenched fists reveal the Pyrelord's rocky armguards, dealing 12+82.8% ATK Normal Dmg."
    },
    "initiative": {
      "title": "Molten Shield",
      "key": "Dmg, Shield, Dmg Down",
      "icon": "◆",
      "description": "Raise a lava-formed defense shield and trigger [Sandstorm]. Additionally, gain a Pyrelord Spirit 10.0% Max HP shield, trigger a successful block effect when taking damage, gaining an extra 5 stacks[Frenzied Flame]. While the shield exists, gain Final Dmg Down 80.0%. Initiative can be released once every 5s (once every 15s in PVP).\n\n[Sandstorm]: Rocks erupt around, dealing 9+54.0% ATK Dmg and gaining 10 stacks[Frenzied Flame], triggering once every 30s.\n\nIn Quick Combo state, Initiative block auto-triggers before taking damage, with a 15s cooldown."
    },
    "ultimate": {
      "skill1": {
        "title": "Inferno Punch",
        "key": "Dmg, Dmg Up, Vulnerability",
        "icon": "◆",
        "description": "After charging with the left arm, unleash a Burst Rising Dragon Punch dealing 1074+7400.7% ATK as a Secret Art [Synergy Dmg]. Simultaneously, the Pyrelord appears, causing multiple eruptions of magma in a large area ahead, dealing 32+218.7% ATK as Secret Art Dmg, and inflicting [Scorch] and a 60s [Scorch] effect on hit enemies.\n\n[Scorch]: All Spirits deal [Scorching] Style Dmg Up 60.0% to targets with [Scorch], lasting 60s, with repeated applications refreshing the Duration.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Upon Skill release, gain a Shield equal to Pyrelord's 50.0% max HP.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Upon Skill release, gain 10 stacks of [Fury Fire].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After the first Ultimate in Fight, each subsequent Initiative triggers [Sandstorm], activating a special Ultimate once (priority over Normal Ultimate). Special Ultimate Rising Dragon Fist deals 1074+7400.7% ATK as Ultimate [Synergy Dmg] and causes a magma eruption dealing 32+218.7% ATK as Ultimate Dmg. Special Ultimate does not consume Soul Power and does not affect basic Ultimate cooldown.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Inferno Punch] hits targets under [Scorch] or [Holy Flame], increasing Final Dmg by 50.0%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Burn] increases the damage of the [Scorch] style to 90.0%, and [Burn] additionally applies a mark on the target with 15% of maximum health (for normal or elite monsters, the mark is 100% of maximum health) as 8.0%[Defense Vulnerability]. Repeated acquisition refreshes the marked health and duration.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Purgatory Cage",
        "key": "Dmg, Dmg Down, Shield",
        "icon": "◆",
        "description": "Jumps into the air, then punches the ground to deal 102+696.6% ATK Ultimate Dmg to targets in range and gain 20 stacks of [Frenzied Flame]. If in fight, creates [Lava Territory] in the area for 6s.\n\n[Lava Territory]: A blocked area by lava, preventing both allies and enemies from leaving (some bosses can ignore the block). Enemy movement speed reduced by 20.0%, taking 3+21.8% ATK Ultimate Dmg per second. If the Ultimate is used again or exiting fight during the duration, removes [Lava Territory]. If [Lava Territory] already exists, creating a new [Lava Territory] will remove the existing one and generate a new [Lava Territory].",
        "cost": 2,
        "cd": 60,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "In [Lava Territory], neither self nor enemies can switch Spirits.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Within [Lava Territory], Dmg taken reduced by 20.0%; if HP falls below 50%, Dmg taken further reduced by 40.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Within [Lava Territory], every 3s, 2 magma pillars erupt, dealing up to 30+218.7% ATK as ultimate Dmg, knocking up hit targets.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Lava Territory] Duration increased to 10s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Lava Territory] Upon ending, gain a Shield equal to 80.0% of Pyrelord's max HP.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Fiery Counterstrike",
        "key": "Dmg, Shield, Vulnerability",
        "icon": "◆",
        "description": "Summon Pyrelord to unleash flames forward, dealing up to 32+181.8% ATK Skill Dmg. Gain a Shield of 50.0% Pyrelord's max HP. Consume all [Fury Fire] to apply [Molten Bone] to Skill-hit targets. Every 5 stacks of [Fury Fire] applies 1 stack of [Molten Bone]. (If [Fury Fire] stacks are less than 5, [Molten Bone] won't apply, but [Fury Fire] stacks will be consumed.)\n\n[Molten Bone]: Each stack marks target for 3% max HP (for Normal or Elite Monsters, marks for 100% max HP). Each stack's marked HP Dmg gains 9.0% [DEF Vulnerability] effect, Duration 60s, max 5 stacks. Reapplying stacks refreshes marked HP and Duration.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "God of The Sea Pyrelord Skill",
        "haloDescription": "Sinful Molten Bones, layer upon layer; where divine grace reaches, all are condemned. All Spirits deal Final Dmg Up 15.0% to targets with [Molten Bones].",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When taking Dmg with Spirit Pyrelord Shield, inflict [Molten Bone] on nearby enemies, effect cooldown 15s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Molten Bone] stack limit increased by 1 layer.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Molten Bone] Dmg to marked HP gains [DEF Vulnerability] increased to 10.0%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each stack of [Molten Bone] reduces [Fury Fire] consumption to 4 stacks.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When the target reaches the maximum stack of [Molten Bone], each application of [Molten Bone] will additionally apply 1 stack of a mark with 10% max HP (for Normal or Elite Monsters, the mark is 100% max HP) of 6.0%[Vulnerability], up to 2 stacks. Repeated applications will stack and refresh the mark's HP (stacking does not increase [DEF Vulnerability]). When [Molten Bone] is removed, the [DEF Vulnerability] effect is also removed.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Earthfire Shield",
        "key": "Dmg, Shield, Vulnerability",
        "icon": "◆",
        "description": "Summon Pyrelord to slam the ground, creating a series of rock spikes in a straight line ahead, dealing up to 51+333.0% ATK Skill Dmg. Gain a Shield equal to 60.0% Pyrelord Spirit's max HP.\n\nWith [Fury Fire], Normal can be linked to release different types of [Normal Combo]: [Normal Combo] each hit deals 4+28.0% ATK Skill Dmg, Execute punch deals 20+136.8% ATK Skill Dmg, Duration Strong Super Armor and gain Final Dmg Down 60.0%. [Aerial Normal Combo] each hit deals 5+40.5% ATK Skill Dmg, Execute heavy hammer deals 20+133.2% ATK Skill Dmg, Duration Strong Super Armor.\n\n[Scorching Soul]: Each mark targets 1% max HP (marks 100% max HP for Normal or Elite Monster), each mark's Dmg gains 2.5% [DEF Vulnerability], Duration 60s, max 20 stacks, repeated gains stack and refresh mark HP and Duration.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "God of The Sea Pyrelord Skill",
        "haloDescription": "Holy Flame Soul Stack, Sea Prison Descends; Divine Might Reduces All to Ashes. Each stack of [Holy Flame] on the target increases Final Dmg Up 2.5% from all Spirits.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Normal Combo] and [Aerial Normal Combo] consume [Fury Fire] each time, granting a Shield equal to 10.0% Pyrelord Spirit max HP, refreshing upon re-acquisition. 10k Yr: [Holy Flame] stack cap increased by 1 stack.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Holy Flame] stack cap increased by 1 stack.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Scorching Soul] increases [DEF Vulnerability] per stack to 3.0%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Normal Combo] and [Aerial Normal Combo] are considered as causing Skill [Synergy Dmg].",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When applying [Scorching Soul], for each 1 stack of [Holy Flame] on the target, apply an additional 1 stack marking 1% Max HP (marks 100% Max HP for Normal or Elite Monster) of 0.5%[DEF Vulnerability], up to 20 stacks, with repeated applications stacking and refreshing the marked HP and Duration.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Molten Rebirth",
        "key": "Dmg, Shield, Dmg Down",
        "icon": "◆",
        "description": "When [Unyielding Roar] hits a [Scorch] target, it deals additional passive [Synergy Dmg] equal to 1396+9622.8% ATK.\n\n[Cower]: Spirimaster's final damage taken from [Cower] targets is reduced by 20.0%, and all Spirits deal increased [Scorch] type damage to [Cower] targets by 90.0%, Duration 15s.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Unyielding Roar] — When dealing Dmg to a target, if equipped with Skill [Flame Counter] or [Earthfire Shield] and the target has [Scorch], apply 2 stacks of [Molten Bone] or [Scorching Soul] to the target.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each application of [Molten Bone] or [Scorching Soul] grants an additional Shield of the Spirit Pyrelord's 10.0% max HP, Duration 20s, repeated applications refresh the Shield.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Unyielding Roar] hits a target with [Molten Bone] or [Scorching Soul], it additionally applies a mark of 15% Max HP (for Normal or Elite Monster, marks 100% Max HP) 7.5%[DEF Vulnerability], Duration 60s, non-stackable, repeated acquisition refreshes mark HP and Duration.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Even without a successful block, [Unyielding Roar] can be released after Initiative following a Normal attack, this effect can trigger once every 60s. All Spirits deal increased [Scorch] damage to [Cower] targets 180.0%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Applies [Molten Bone] and [Scorching Soul]; if target has [Scorch], additionally applies 1 layer of mark 1.5% Max HP (for Normal or Elite Monster, mark 100% Max HP) 6.0%[DEF Vulnerability], Duration 30s, max 5 layers; repeated application stacks and refreshes mark HP and Duration (stacking layers does not increase [DEF Vulnerability]).",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Holy Flame Scorch",
        "key": "Dmg, Stun, Holy Flame",
        "icon": "◆",
        "description": "Increases the max stack of Holy Flame by 1. Each time a Spirit deals Dmg with Initiative, it applies 1 stack of Holy Flame to the target hit. When other Spirits in the team use Initiative, the Pyrelord's Initiative effect Sandstorm has its cooldown reduced by 3s.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "For each 1 layer of [Holy Flame] on target, [Crushing Blow] gains Final Dmg Up by 10.0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When all Spirits use Initiative to deal Dmg to [Holy Flame] targets, gain a Shield equal to the Pyrelord Spirit's 10.0% maximum HP, cooldown 5s, repeated gains refresh the Shield.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Increase the stack limit of [Holy Flame] by 1 layer. Can chain Normal to release [Crushing Blow] after Initiative, even without a successful block, this effect can trigger once every 60s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Crushing Blow] inflicts Dmg on target, if target has [Holy Flame] and any [DEF Vulnerability] applied by Spirit Pyrelord, each 1 stack[Holy Flame] additionally applies 1 stack mark 15% max HP (marks 100% max HP for Normal or Elite Monster) 1.2%[DEF Vulnerability], Duration 30s, max 8 stacks, repeated acquisition will stack and refresh mark HP and Duration (stacking does not increase Vulnerability mark HP).",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Crushing Blow] can be used in a 2-time Combo. If it hits a target with any [DEF Vulnerability] applied by the Spirit Pyrelord, it adds an extra 1 stack marking 15% Max HP (for Normal or Elite Monsters, marks 100% Max HP) of 3.0%[DEF Vulnerability], with a Duration of 30s, up to 2 stacks. Repeated acquisition will stack and refresh the mark's HP and Duration (stacking does not increase Vulnerability mark HP).",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "silvanemperor",
    "title": "Silvan Emperor",
    "subtitle": "Mother and Child United - Dual Sovereigns' Forbidden Domain - Cycle of Life and Death",
    "image": "images/personnages/silvanemperor/silvanemperor-image.png",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Control",
      "Control Dmg Up",
      "Stun"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Ayn"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Control"
      },
      {
        "label": "Role",
        "value": "Blast Dmg Up"
      },
      {
        "label": "Mechanic",
        "value": "Imprison"
      },
      {
        "label": "Acquisition",
        "value": "Silvan's Descent Summon"
      }
    ],
    "description": "Silvan Emperor is a walking forest of vines and thorns whose entire purpose is trapping enemies and never letting go. Nearly every Skill and Ultimate spreads [Imprison], layered with debuffs like [Sacrificial Thorn] and [Silvan Strangle] that both stack [Control Vulnerability], making every future lockdown hit harder than the last.\n\nTheir core passive revolves around summoning [Silvan Emperor] minions on entering the fight, then sacrificing them during Ultimates for bonus effects like extended Strangle duration or stacks of [Earthbind] and [Devouring Gold Silk]. It's a constant push-and-pull: keep the vine minions alive for passive Control Vulnerability, or burn them all at once for a bigger payoff when the Ultimate lands.\n\nTheir whole identity revolves around [Enfeeble], a state most of their effects either build toward or amplify once the target is in it. Between Silvan Domain zones, poison stacks, and thorn effects that trigger extra debuffs on Enfeeble, this Spirit is basically running a slow-motion strangulation of anything caught in its forest.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/silvanemperor/background/silvanemperor-background.png",
    "normalAttack": {
      "title": "Silvan Retribution",
      "key": "Dmg",
      "icon": "◆",
      "description": "Strike swiftly with a resilient long whip woven from the Silvan Emperor, dealing a total of 6+41.4% ATK as Dmg."
    },
    "initiative": {
      "title": "Silvan Embrace",
      "key": "Dmg, Imprison",
      "icon": "◆",
      "description": "Summon Silvan Emperor vines from underground to pierce enemies ahead, dealing 9+57.0% ATK as Dmg and applying 2s [Imprison]. (In PVP mode, apply 1s [Imprison].)"
    },
    "ultimate": {
      "skill1": {
        "title": "All-Encompassing",
        "key": "Dmg, Imprison, Control",
        "icon": "◆",
        "description": "In the Silvan Forest, life thrives abundantly. Harnessing immense vitality, massive Silvan Emperor vines surge from beneath, spreading to enemy positions, forming a towering Silvan Forest. Inflicts 69+476.0% ATK as Ultimate Dmg to a wide range of targets, adding [Sacrificial Thorn] and [Silvan Strangle] effects. [Sacrificial Thorn]: Duration 15s. Applies 25.0% [Control Vulnerability]. [Silvan Strangle]: Duration 2s. Reduces target's Max Poise by 5% every 0.5s and causes 0.6s [Imprison] every 0.5s. Effect removed when target enters [Enfeeble]. If the core passive is activated, unleashing the Ultimate sacrifices All [Silvan Emperor], extending [Silvan Strangle] added by Ultimate by 1s for each sacrificed [Silvan Emperor]. (In PVP mode, each sacrificed [Silvan Emperor] extends [Silvan Strangle] added by Ultimate by 0.6s.)",
        "cost": 2,
        "cd": 30,
        "haloTitle": "God of The Sea Silvan Emperor",
        "haloDescription": "Blessed by the Silvan Emperor, may you rest eternally in the God of Sea's embrace. Upon unleashing the Ultimate skill, if the core passive is activated and [Silvan Emperor] is present within the domain, inflict [Silvan Bone Erosion] on the target, Duration 20s, increasing final Dmg taken by 20%. If [Silvan Emperor] is absent, inflict [Silvan Soul Bind], Duration 20s, increasing final Dmg received by 10%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "If it hits a target without a Tenacity bar, [Silvan Strangle] additionally applies 3s of [Imprison] after the effect ends (not effective in PVP mode).",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Additional [Control Vulnerability] from [Sacrificial Thorn] increased to 35.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Silvan Strangle] Max Poise reduction every 0.5s increased to 7.5%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "For each sacrificed [Silvan Emperor], the [Silvan Strangle] duration extends by 1.5s (In PVP mode, for each sacrificed [Silvan Emperor], the Ultimate's additional [Silvan Strangle] extends by 0.8s duration).",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Sacrificial Thorn]'s additional [Control Vulnerability] increased to 45.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Embrace All",
        "key": "Dmg, Imprison, Control",
        "icon": "◆",
        "description": "People of the Forest, sacrifice to the Emperor. Harness the essence of the Silvan Forest, growing Silvan Emperor vines that pierce a wide range of enemies from above, dealing 76+517.6% ATK as Ultimate Dmg, causing a 2s [Imprison] effect. Adds [Sacrificial Thorn] and [Earthbind] effects. [Sacrificial Thorn]: Duration 15s, adds 25.0% [Control Vulnerability]. [Earthbind]: Stacks up to 5 layers, Duration 60s. During this time, when the target triggers [Break Toughness], the [Enfeeble] Duration is extended by 1s per layer. The target will only be affected by [Earthbind] once within 60s. If the core passive is activated, unleashing the Ultimate will sacrifice All [Silvan Emperor], adding 1 layer of [Earthbind] for each sacrificed [Silvan Emperor].",
        "cost": 2,
        "cd": 30,
        "haloTitle": "God of The Sea Silvan Emperor",
        "haloDescription": "May the God of Sea's mercy be bestowed upon the people, offering the souls of foes to the God of Sea. Upon unleashing the Ultimate skill, if the core passive is activated and [Silvan Emperor] is present within the domain, inflict [Silvan Bone Erosion] on the target, Duration 20s, increasing final Dmg received by 20%. If [Silvan Emperor] is absent, inflict [Silvan Soul Bind], Duration 20s, increasing final Dmg received by 10%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Earthbind]: Each stack extends target's [Enfeeble] Duration by 1.5s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Additional [Control Vulnerability] from [Sacrificial Thorn] increased to 35.0%, Duration extended to 20s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Earthbind]: Each stack extends target's [Enfeeble] Duration by 2s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Sacrificial Thorn] applies additional 5.0% [Control Vulnerability] to targets with [Enfeeble].",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "If the target's Max Poise bar is below 15% upon Ultimate hit, directly reduce the Poise bar by 15%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Silvan Strangle",
        "key": "Dmg, Imprison",
        "icon": "◆",
        "description": "Silvan Emperor vines transform into a large-scale strangling cage, trapping enemies within and dealing 20+133.8% ATK as Skill Dmg, with an additional [Imprison] for 2s (In PvP mode, adds 1s [Imprison]). If the core passive is activated and [Silvan Emperor] is present in the area, additionally applies [Silvan Thorns], with [Control Vulnerability] of 10.0%, Duration 20s.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Skill base cooldown reduced to 28s; Skill changed to a charge-type Skill, with a maximum of 2 charges (In PVP, Combo Skill with a 15s interval).",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "If the core passive is activated and [Silvan Emperor] is present, Skill range expands by 50%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "If core passive is activated and [Silvan Emperor] exists, [Imprison] effect extends to 5s (In PVP, [Imprison] effect extends to 2s).",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Domain doesn't require [Silvan Emperor]. Casting Skill also counts as having [Silvan Emperor]. Skill charge limit increased by 1.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Control Vulnerability] applied by [Silvan Thorns] increased to 15.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Breath of Silvan",
        "key": "Imprison, Control",
        "icon": "◆",
        "description": "Endless vitality, Silvan revival. If the core passive is activated, casting a Skill will enhance [Silvan Domain], applying an additional 12.5% [Control Vulnerability] to targets within the domain for a Duration of 15s. If the [Silvan Emperor] is present within the domain, an additional 15.0% [Control Vulnerability] is applied to targets within the domain for a Duration of 15s.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "If core passive is activated and [Silvan Emperor] is present, casting Skill will create 1 [Silvan Seed] in front. When target steps on [Silvan Seed], it triggers a vine-strangling ATK, gathering all targets in range. [Silvan Seed] Duration 7s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "If the core passive is activated and [Silvan Emperor] is present, casting the Skill enhances the [Silvan Domain] Duration by 5s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Silvan Seed] Burst Vine Strangle attack inflicts 3s [Imprison].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Domain presence of [Silvan Emperor] not required, releasing Skill considered as presence of [Silvan Emperor]. Skill changed to charge-type, max 2 charges.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Casting Skill enhances [Silvan Domain], and additionally applies 20.0% [Control Vulnerability] to targets within the domain.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Silvan Sea",
        "key": "Imprison, Control",
        "icon": "◆",
        "description": "Upon entering the Fight, immediately summon a battlefield-covering [Silvan Domain] and creat 3 [Silvan Emperor]. Within the domain, continuously apply 5.0% [Control Vulnerability] to all targets. When releasing Ultimate Sacrifice [Silvan Emperor], each [Silvan Emperor] adds 1 layer of [Devouring Gold Silk] to all targets in the domain. [Devouring Gold Silk]: Each layer increases the target's toughness Dmg by 5%, Duration 15s, stacks up to 4 layers. In [Silvan Domain], [Silvan Emperor] can Reset once, with a Reset cooldown of 25s. Once Reset times are depleted, 360s of [Dormancy] is required to Restore 1 Reset.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "For each sacrificed [Silvan Emperor], apply 1 stack of [Silvan Emperor Toxin] to all targets within the domain, adding 10.0% [Control Vulnerability], lasting 20s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After entering the Fight, creates an additional [Silvan Emperor].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "In [Silvan Domain], [Silvan Emperor] can Reset 2 times, with a Reset cooldown of 25s. After all Resets are used, 1 Reset is Restored after 360s of [Dormancy].",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Devouring Gold Thread]: Each stack increases target's poise Dmg by 10%, Duration 15s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Silvan Emperor Toxin] applies additional 10.0% [Control Vulnerability] to targets under [Enfeeble].",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Boundless Silvan",
        "key": "Imprison, Control",
        "icon": "◆",
        "description": "Upon entering the Fight, immediately summon a battlefield-covering [Silvan Domain] and creat 3 [Silvan Emperor]. Within the domain, continuously apply 5.0% [Control Vulnerability] to all targets. When releasing Ultimate Sacrifice [Silvan Emperor], each [Silvan Emperor] adds 1 layer of [Parasite Thorn] to all targets within the domain. [Parasite Thorn]: Duration 60s, stacks up to 4 layers. During the Duration, when the target triggers [Enfeeble], apply the same number of [Celestial Thorn] effects as layers, and remove [Parasite Thorn]. [Celestial Thorn]: Each layer increases the target's Dmg bonus under [Enfeeble] by 2.5%, Duration 60s, stacks up to 4 layers. Remove effect after ending [Enfeeble]. In [Silvan Domain], [Silvan Emperor] can Reset once, with a Reset cooldown of 25s. Once Reset times are depleted, 360s of [Dormancy] is required to Restore 1 Reset.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "For each sacrificed [Silvan Emperor], apply 1 stack of [Silvan Emperor Toxin] to all targets within the domain, adding 10.0% [Control Vulnerability], lasting 20s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After entering the Fight, creates an additional [Silvan Emperor].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "In [Silvan Domain], [Silvan Emperor] can Reset 2 times, with a Reset cooldown of 25s. After all Resets are used, 1 Reset is Restored after 360s of [Dormancy].",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Celestial Thorn]: Each stack increases the target's injury bonus by 5% under [Enfeeble] for 60s. Effect removed after [Enfeeble] ends.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Silvan Emperor Toxin] applies additional 10.0% [Control Vulnerability] to targets under [Enfeeble].",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "souleatingarachnid",
    "title": "Soul-Eating Arachnid",
    "subtitle": "Self Pilgrimage - Fateful Eve - Dragon Howl Web",
    "image": "images/personnages/souleatingarachnid/souleatingarachnid-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Bruiser",
      "Main DPS"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Bibiana"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Bruiser"
      },
      {
        "label": "Role",
        "value": "Main DPS"
      },
      {
        "label": "Mechanic",
        "value": "Poison Dmg"
      },
      {
        "label": "Acquisition",
        "value": "Saintess Descends Summon"
      }
    ],
    "description": "Soul-Eating Arachnid buries enemies under layers of poison, stacking multiple flavors of [Spider Toxin] with nearly every attack. Between [Marrow Erosion Toxin], [Bloodlust Toxin], and [Soulless Toxin], enemies rack up debuffs fast, and all that toxin damage eventually gets stored into a [Venom Pool], a resource that can be converted for even bigger payoff later.\n\nTheir whole gameplan revolves around summoning spiders that self-destruct on contact, whether it's small ones from Normal Attacks or bigger enhanced spiders from Skills, each explosion piles on more Toxin. Their passive [Venomous Reign] takes it further, letting them convert existing Poison or Toxin stacks on enemies into [Ravenous], a personal buff that scales their own damage the more they've fed off the enemy's suffering.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/souleatingarachnid/background/souleatingarachnid-background.png",
    "mechanics": [
      "Poison"
    ],
    "normalAttack": {
      "title": "Spider Summon",
      "key": "Dmg",
      "icon": "◆",
      "description": "Each Normal summons a different small spider for a self-destruct attack, dealing a total of 50+338.4% ATK as Normal Dmg. Each attack applies a type of [Spider Toxin], adding 1 stack each time. Normal first-stage: [Marrow Erosion Toxin] Normal second-stage: [Bloodlust Toxin] Normal third-stage: [Soulless Toxin]"
    },
    "initiative": {
      "title": "Venomous Walk",
      "key": "Poisoned",
      "icon": "◆",
      "description": "Inflict 5 stacks of [Poison] on nearby enemies. If possessing Venomous Reign, gain 5 stacks of [Ravenous]."
    },
    "ultimate": {
      "skill1": {
        "title": "Soul-Eating Spider Domain",
        "key": "Dmg, Detonation, Poison Pool",
        "icon": "◆",
        "description": "Summon [Soul-Eating Barrier] to continuously inflict 80+518.4% ATK as Ultimate Dmg on enemies, reducing Dmg taken by 50% during this time (adjusted to 60% in PVP). The barrier explodes after channeling, dealing 75+518.4% ATK as Ultimate Dmg. Dmg dealt during the barrier's Duration triggers [Spider Toxin]'s [Settlement]. When possessing [Venom Codex], all Ultimate Dmg is added to the [Venom Pool].",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Soul-Eating Barrier range +50%",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Dmg from Soul-Eating Barrier explosion +50.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When casting Soul-Eating Spider Domain, apply 10 layers of all [Spider Toxin] to enemies in a large area.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Dmg increases by 5 ticks during the Soul-Eating Barrier Duration.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Dmg from Soul-Eating Spider Domain counts towards [Venom Pool] and increases by 1.2x.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Annihilation Gaze",
        "key": "Dmg, Toxin",
        "icon": "◆",
        "description": "Summon the Soul-Eating Arachnid to continuously emit lasers, dealing 234+1591.2% ATK as Ultimate Dmg to enemies in a wide area ahead. During this time, continuously summon spiders to attack, reducing Dmg taken by 60% (adjusted to 80% in PVP). After the laser ends, summon Twin Arachnids, which automatically attack enemies. The spiders exist for 20s. When the Twin Arachnids exceed a certain distance from the target, they teleport to the target's location, dealing area Dmg upon landing and inflicting random [Spider Toxin] on all hit targets.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Laser width increases by 30%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When the Twin Arachnid is on the field, all toxin Dmg increases by 50.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Laser Dmg multiplier increases by 50.0%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When the Twin Arachnid is on the field, all toxin Dmg increases by 100.0%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Spirimaster's [Ravenous] stacks exceed 100, and laser gains an additional 60.0% Dmg Up.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Spiders Toxic Mark",
        "key": "Toxin, Dmg",
        "icon": "◆",
        "description": "Summon an enhanced spider to charge at the target and self-destruct, dealing 105+722.5% ATK as Skill Dmg, adding 1 stack of all [Spider Toxin]. If possessing [Venom Codex], summon a corresponding upgraded enhanced spider based on the Normal count before casting the Skill to charge at the target and self-destruct. The upgraded enhanced spider adds 6 stacks of Normal count corresponding [Spider Toxin].",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Enhanced Spider adds [Spider Toxin] increased to 2 stacks.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Enhanced Spider's self-destruction Dmg increase effect raised to 25.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Enhanced Spider adds [Spider Toxin] increased to 3 stacks, and [Settle] all [Spider Toxin].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Enhanced Spider's self-destruction Dmg boost increases to 50.0%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Enhanced Spider's self-destruction Dmg recorded in [Venom Pool].",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Arachnid's Decree",
        "key": "Toxin",
        "icon": "◆",
        "description": "Applies 5 stacks of all [Spider Toxin] and [Poison] to all nearby units. If possessing [Venomous Reign], also adds equivalent stacks of [Ravenous] to self, and within 20 seconds, when dealing damage with [Summon Spider], inflicts additional Skill Dmg equal to 12+80.0% ATK.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "All [Spider Toxin] and [Poison] applied by this Skill increased to 8 stacks.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Additional Dmg provided by this Skill increases based on the number of [Ravenous] stacks. Each stack of [Ravenous] increases an additional 0.3% Dmg.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Skill resets cooldown upon hitting a target, with a 30s cooldown for this effect.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Additional Dmg from this Skill increases with each stack of [Ravenous], granting 0.6% extra Dmg per stack.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Toxin Dmg increases by 10.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Venom Codex",
        "key": "Poison Pool, Toxin",
        "icon": "◆",
        "description": "When the Soul-Eating Arachnid switches to the foreground, it randomly gains one from [Blazing Venom], [Venom Frenzy], or [Venom Blast] within [Spider Sense]. The directed toxin is removed when the [Spider Sense] effect ends. Dmg caused by [Spider Toxin] is stored in the [Venom Pool].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Asura Soul-Eating Arachnid Talent",
        "haloDescription": "Asura's killing power converges into a point, declaring death with a fingertip's kiss.\nWhen [Soul-Eating Barrier] deals damage, grants 1 stack of [Spider Toxin] of all types.\nWhen any [Spider Toxin] reaches 20 stacks, the Soul-Eating Arachnid gains a [Poison-type Dmg Bonus] of 10,0%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Three types of [Spider Sense] have increased toxin Dmg effect to 1500.0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Spider Toxin] stack limit increased to 20 stacks.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Venom Pool] Dmg converted by [Venom Detonation] increased to 140%, and toxin Dmg increased by 250.0%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Every 2s, deal Dmg to enemies in a large area and settle all [Spider Toxin].",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Toxin Dmg Up by 50.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Venomous Reign",
        "key": "Frenzied Devoure, Toxin",
        "icon": "◆",
        "description": "[Spider Toxin] cap increased to 50 stacks. When the spider's attack hits an enemy with [Poison] or [Spider Toxin], it converts the target's [Poison] or [Spider Toxin] into [Ravenous] and adds it to itself, converting up to 5 stacks each time. When this passive is activated, the Normal form changes.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Asura Soul-Eating Arachnid Talent",
        "haloDescription": "The blood and bones of the fallen fuel a feast of carnage, and the battlefield is but a stepping stone to the Asura Throne.\nIncreases [Ravenous] Max Stacks by 50. At 150 stacks of [Ravenous], gain additional [Poison-type Dmg Bonus] 10,0%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Ravenous] AoE range doubled.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Spider Summon] adds an extra stack of [Spider Toxin].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Toxin Dmg increases by 150.0%, and [Ravenous] Dmg Up effect increases to 0.25%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Spider Summon] deals an additional instance of Dmg when dealing Dmg, and applies corresponding [Spider Toxin].",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Max stacks of [Ravenous] increased by 50.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "seraph",
    "title": "Seraph",
    "subtitle": "Angelic Rakshasa - Heavenly Hammer's Silence - Divine Frostwing",
    "image": "images/personnages/seraph/seraph-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Bruiser",
      "Main DPS"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Qian Renxue"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Bruiser"
      },
      {
        "label": "Role",
        "value": "Light Energy Main DPS"
      },
      {
        "label": "Mechanic",
        "value": "Flash"
      },
      {
        "label": "Acquisition",
        "value": "Radiant Wings Summon"
      }
    ],
    "description": "Seraph Spirit is basically a divine sword saint with two different Ultimate personalities to pick from. Skill 1 sends her into [Execution Stance], a mode built around stacking [Verdict Purge] and [Light Energy] for a devastating charged finisher, while Skill 4 sends her into [Judgment Stance], a much deeper three-stage Ultimate that escalates from [Judgment Descent] into [Light's End] and eventually into a colossal-sword finisher called [Final Judgment], if she's built up enough [Ascend] stacks along the way.\n\nBoth stances share the same underlying gimmick: apply [Flash] to enemies constantly, then convert that Flash (or accumulated Light Energy) into bigger and bigger Ultimate damage. While transformed, she also gets [Zeal], granting Super Armor and Control Immunity, so she's basically unkillable and uninterruptible while she's busy delivering judgment.\n\nHer passives (Covenant of Execution and Domain of Judgment) leave lingering zones after her Ultimates end, continuing to punish enemies caught inside with bonus damage every time Flash gets applied or removed.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/seraph/background/seraph-background.png",
    "mechanics": [
      "Flash"
    ],
    "normalAttack": {
      "title": "Holylight Slash",
      "key": "Dmg",
      "icon": "◆",
      "description": "With the Angelic Holy Sword, cleave away the world's sins. Swift four-stage normal combo attacks, dealing a total of 52+277.5% ATK Dmg."
    },
    "initiative": {
      "title": "Holy Light Descent",
      "key": "Dmg, Flash",
      "icon": "◆",
      "description": "With divine presence, descend upon the battlefield. Raise the Angelic Holy Sword to dispel the filth ahead. Deals 8+57.5% ATK Dmg to enemies ahead and inflicts 2 stacks of [Flash]."
    },
    "ultimate": {
      "skill1": {
        "title": "Angelic Descent",
        "key": "Dmg, Flash, Dmg Up",
        "icon": "◆",
        "description": "Summon [Blade of Execution] from the Sacred Realm to strike nearby enemies, dealing 120+831.8% ATK Arcane Dmg and enter [Execution Stance]: 1. Duration lasts until exiting fight. Cannot enter [Execution Stance] outside fight. (PVP: [Execution Stance] lasts 15s) 2. Gain aerial fight capability, enhance skills and evasion 3. Gain [Zeal] effect: Duration 10s, grants [Strong Super Armor] and [Control Immunity]. (PVP: grants 5s [Control Immunity]) 4. Gain Enhanced Normal Attack: Transform [Angelic Holy Sword] into colossal [Blade of Execution], wave the [Blade of Execution] to unleash 5-hit normal attack combo, dealing 74+525.1% ATK Dmg 5. Gain 10 stacks [Verdict Purge]: When releasing enhanced normal attacks, consume 1 stack [Verdict Purge] to summon flame-wrapped [Pure Blade], dealing damage. Full 5-hit enhanced normal attacks trigger [Pure Blade] to deal max 30+209.6% ATK Arcane Dmg and 62+426.0% ATK Radiant Dmg. 6. Enhanced Charged [Final Execution]: Activates when [Light Energy] reaches 60 stacks. Release consumes all [Light Energy] stacks, dealing 40+260.6% ATK Arcane Dmg and 70+104.2% ATK Flash Dmg to wide area. Each stack of [Light Energy] consumed grants 2.3% Dmg Bonus.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "Asura Seraph",
        "haloDescription": "Divine flames cascade like solar coronas, purifying all realms; where their light reaches, sins burn away and all things return to primordial purity.\nWhen releasing an enhanced normal attack, if you possess [Verdict Purge] stacks, summon 1 additional [Purge Blade] to deal damage. Extra [Purge Blades] summoned do not consume [Verdict Purge] stacks. When releasing a complete 5-hit enhanced normal attack, extra [Purge Blades] deal up to 30+209.6% ATK Ultimate Dmg and 62+426.0% ATK Flash Dmg. After releasing an Ultimate skill, gain [Sacred Will]: Duration 20s, Seraph Spirit gains 12% Final Dmg Bonus.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each [Purge Blade] removes 5 stacks of [Flash] on hit.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Enhanced [Zeal] duration increased to 18s, additionally grants 50.0% Dmg Down and 50.0% Seraph Dmg Bonus.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Release Ultimate to gain 50 stacks of [Light Energy]. Simultaneously gain 1 stack of [Resolution]: Enhance the next Charged Normal Attack [Final Execution], increasing 100.0% Dmg Bonus.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Gains 15 stacks of [Verdict Purge] upon ultimate skill release. Damage dealt by [Purge Blade] increases by 50.0%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Release Ultimate to gain max stacks of [Light Energy]. Simultaneously gain 1 stack of [Resolution]: Enhance the next Charged Normal Attack [Final Execution], increasing 160.0% Dmg Bonus.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Final Judgment",
        "key": "Dmg, Flash, Dmg Up",
        "icon": "◆",
        "description": "Radiant Divine Power—when thousand lights converge, all beings shall face judgment. Release Ultimate [Judgment Descent] summoning [Sword of Judgment], dealing 87+606.4% ATK Ultimate Dmg to surrounding enemies and entering [Judgment Stance]: 1. Duration ends until exiting fight. Cannot enter [Judgment Stance] outside fight. (PVP: [Judgment Stance] lasts 15s). 2. Gain aerial fight capability, Enhanced Skill, Enhanced Evasion. 3. Gain [Zeal] effect: 10s duration, grants [Strong Super Armor] and [Control Immunity]. (PVP: [Control Immunity] lasts 5s) 4. Gain Enhanced Normal Attack: wield [Angelic Holy Sword] unleashing rapid dense sword waves in multi-hit combos. After the third enhanced normal attack, briefly enter [Celestial Thousand-Light Sword] state, soaring higher for swift five-stage sword wave attacks while maintaining mobility. Complete enhanced normal attack combo deals up to 117+587.2% ATK Ultimate Dmg. 5. Gain 25 stacks [Radiance]: holding [Radiance] stacks enters [Celestial Thousand-Light Sword] state. Each [Celestial Thousand-Light Sword]'s enhanced normal attack hit consumes 1 stack of [Radiance] and summons 1 [Sword of Judgment], dealing 2+10.3% ATK Ultimate Dmg and 14+97.0% ATK Flash Dmg. After entering [Judgment Stance], unlock second-stage Ultimate [Light's End], raising Angelic Holy Sword gathering all nearby targets' light energy, dealing 110+763.6% ATK Ultimate Dmg to surrounding targets and removing all [Flash] stacks from targets, converting to self [Light Energy]. If self [Light Energy] reaches 80+ stacks, converts to 2 stacks [Ascend]. After the second-stage Ultimate ends, Ultimate reverts to first-stage [Judgment Descent]. When [Ascend] reaches max 12 stacks, after entering [Judgment Stance], unlock third-stage Ultimate [Final Judgment]. Converging Angelic Holy Sword and Sword of Judgment into colossal light greatsword, consuming all self [Light Energy] stacks to unleash a devastating earth-rending strike, dealing 319+2192.6% ATK Ultimate Dmg. Each consumed [Light Energy] stack provides 3.2% Ultimate Dmg Bonus. When the third-stage Ultimate ends, Ultimate reverts to first-stage [Judgment Descent].",
        "cost": 3,
        "cd": 30,
        "haloTitle": "Asura Seraph",
        "haloDescription": "Celestial decree descends as law; within its court, all beings hear the final verdict!\nAfter every 5 enhanced normal attacks, summon an additional [Judgment Greatsword] to strike the main target for 24+162.4% ATK damage.\nUpon unleashing Ultimate, gain [Sacred Will]: Duration 20s, Seraph Spirit gains 12% Final Dmg Bonus.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Sword of Judgment] applies 2 stacks of [Flash] on each hit.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Enhanced [Zeal] Duration increased to 18s. Additionally grants 50.0% Dmg Down and 5.0% Seraph Dmg Bonus.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Casting Ultimate grants 35 stacks of [Radiance]. [Sword of Judgment] Dmg increases by 30.0%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Casts second-stage Ultimate [Light's End]. If [Light Energy] exceeds 50 stacks, converts to 2 stacks of [Ascend]. If [Light Energy] reaches 90+ stacks, converts to 3 stacks of [Ascend].",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "At max stacks of [Ascend], additionally grants 25.0% Seraph Dmg Bonus and maintains 100 stacks of [Light Energy].",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Angelic Holy Sword",
        "key": "Dmg, Flash",
        "icon": "◆",
        "description": "Light grants redemption to the mortal world. Rush toward the enemy in front and perform an upward slash attack, dealing 18+124.9% ATK damage to the enemy. When in [Execution Stance], unleash a more fierce sword technique, dealing 60+407.4% ATK damage to the enemy. When in [Judgment Stance], summon multiple [Swords of Judgment] to crash down from the sky, dealing 95+642.4% ATK damage to the enemy.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Apply 10 stacks of [Flash] to hit targets. Skill Dmg in [Execution Stance] and [Judgment Stance] is increased by 20.0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "In [Execution Stance], the light sword summoned by Skill bursts with holy radiance, dealing 59+407.4% ATK as Skill Dmg. In [Judgment Stance], Skill summons an additional [Sword of Judgment], dealing extra 64+428.3% ATK damage.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Release Skill in [Execution Stance] to gain 30 stacks of [Light Energy]. Release Skill in [Judgment Stance] to gain 15.0% Normal Attack Dmg Up, Duration 15s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Release Skill in [Execution Stance] to gain 50 stacks of [Light Energy]. Release Skill in [Judgment Stance] to gain 25.0% Normal Attack Dmg Up, lasting 15s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Release Skill in [Execution Stance] and [Judgment Stance] increases Skill Dmg by 50.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Angel's Oath",
        "key": "Dmg, Flash",
        "icon": "◆",
        "description": "With unwavering sacred will, angelic radiance envelops self, dispersing nearby enemies and dealing damage of 72+499.4% ATK. Gains [Fervent Zeal] effect: Duration 15s, each normal attack hit inflicts additional damage of 2.7% ATK. While in [Execution Stance], each normal attack hit under [Fervent Zeal] inflicts additional damage of 2.7% ATK. While in [Judgment Stance], each normal attack hit under [Fervent Zeal] inflicts additional damage of 1+5.5% ATK. Damage increases based on target's [Flash] stack count.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Duration of [Fervent Zeal] increases to 25s. Each normal attack hit grants 1 stack of [Fervent Heart]. [Fervent Heart]: Duration 60s, max 10 stacks. Each stack grants 1.0% Seraph Ultimate Dmg Bonus.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "During [Fervent Zeal], normal attacks apply 1 stack of [Holy Fire] to the target. [Holy Fire]: Lasts 30s, stacks up to 5 layers. When reaching 5 layers, consumes all stacks to deal 1+7.1% ATK Dmg to the target.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Under [Execution Stance], cast skill to gain [Fervent Zeal], which additionally grants 10.0% Seraph Ultimate Dmg Bonus. Under [Judgment Stance], cast skill to gain [Fervent Zeal], which additionally grants 20% Seraph Normal ATK Speed Bonus.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Enhance [Holy Fire]: Duration 30s, stack up to 3 layers. When reaching 3 layers, consume all stacks to deal 1+7.1% ATK Dmg to the target.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Release skill under [Execution Stance] to gain [Fervent Zeal], which additionally provides 15.0% Seraph Ultimate Dmg Bonus. Release skill under [Judgment Stance] to gain [Fervent Zeal], which additionally provides 40% Seraph Normal ATK Speed Bonus.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Covenant of Execution",
        "key": "Dmg, Dmg Up",
        "icon": "◆",
        "description": "After releasing an Ultimate, deploy [Domain of Execution] that persists with you. [Domain of Execution] lasts 15s. Targets in the domain take increased Ultimate Dmg from Seraph Spirit by 15.0%.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Targets in [Domain of Execution] take 20+140.2% ATK [Umbral Light] Dmg each time [Flash] is removed.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Domain of Execution] Duration increases to 25s; provides 25.0% Dmg Down within domain.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Seraph Spirit's Ultimate Dmg to targets in [Domain of Execution] increases to 35.0%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Domain of Execution] range expands by 50%. Targets in the domain take 50.0% more passive damage from [Umbral Light] when [Flash] is removed.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Targets in [Domain of Execution] take 25.0% more damage from Seraph Spirit.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Domain of Judgment",
        "key": "Dmg, Dmg Up",
        "icon": "◆",
        "description": "After casting Ultimate, deploy [Domain of Judgment] that persists and follows the primary target. [Domain of Judgment] lasts 15s. Targets in the domain take increased Seraph Spirit Ultimate Dmg by 15.0%.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Targets in [Domain of Judgment] take 9+64.6% ATK [Refracted Light] Dmg each time [Flash] is inflicted. Can be triggered up to once per second.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Domain of Judgment] Duration extends to 25s, applies 40% Movement Speed Down to targets within.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Seraph Spirit's Ultimate Dmg to targets in [Domain of Judgment] increases to 35.0%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Domain of Judgment] range expands by 50%. Targets in the domain take 30.0% more damage from [Refracted Light] when [Flash] is inflicted.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After Seraph Spirit releases 5 normal attacks, [Domain of Judgment] erupts with 5+33.0% ATK Flash Dmg within the domain.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "bonedragon",
    "title": "Bonedragon",
    "subtitle": "Sword Bone PAct - Defiant Tiger Spirit - Eternal Support",
    "image": "images/personnages/bonedragon/bonedragon-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Defense",
      "Shield"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Gu Rong"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Defense"
      },
      {
        "label": "Role",
        "value": "Dmg Up Invincibility"
      },
      {
        "label": "Mechanic",
        "value": "Shield-stacking"
      },
      {
        "label": "Acquisition",
        "value": ""
      }
    ],
    "description": "Bonedragon is a shield-stacking, damage-tanking fortress on legs, built around [Bone Armor] and its upgraded forms, [Dragonbone Sturdy Armor] and [Void Phantom Armor]. Every version grants Super Armor to the whole team while active, meaning his shields aren't just protecting him, they're protecting everyone.\n\nHis core damage debuff is [Bone Erosion], applied through nearly every Skill and Ultimate, stacking up [DEF Vulnerability] on enemies to make them take more damage overall. Meanwhile his shields aren't just passive either, they actively get consumed to summon Bonedragon for bonus attacks, whether that's through [Dragon Transformation]'s multi-phase strikes or Void Phantom Armor's overflow-absorbing burst.\n\nHis utility toolkit is stacked too, [Space Gate] portals let him (and his team) reposition and dash through for bonus Final Dmg Reduction, while his Invincibility windows (like Bonedragon Guardian) let him tank hits that would otherwise wreck the team.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/bonedragon/background/bonedragon-background.png",
    "normalAttack": {
      "title": "Dragonbone",
      "key": "Dmg",
      "icon": "◆",
      "description": "Harness the spatial power of the Bonedragon Spirit to deliver 4 unpredictable attacks on the target, dealing a total of 38+258.9% ATK Normal Attack Dmg."
    },
    "initiative": {
      "title": "Cocoon",
      "key": "Dmg, Shield",
      "icon": "◆",
      "description": "Condense a bone cocoon, gaining Invincibility and Control Immunity. Then explode, dealing 10+70.0% ATK Initiative Dmg to surrounding enemies, and apply [Bone Armor] to self. [Bone Armor] grants a Shield Value of Bonedragon's 60.0% max HP, and while the shield exists, all Spirits gain a Medium Super Armor effect, Duration 30s."
    },
    "ultimate": {
      "skill1": {
        "title": "Ossified Divine Dragon",
        "key": "Dmg, Vulnerability, Shield",
        "icon": "◆",
        "description": "The Bonedragon tears through the void, unleashing a breath attack that deals 232+1603.5% ATK Ultimate Dmg to enemies within range, applying 1 stack of [Bone Erosion]. After casting the Ultimate, gain [Dragon Transformation]. During this time, every 3 Normal Attacks or Skill releases of any Spirit will consume [Bone Armor] Shield Value equal to 15% of the Bonedragon's max HP, then summon the Bonedragon to attack the target, triggering a 3-second cooldown, up to 3 times. [Dragon Transformation]: On the first summon, the Bonedragon sweeps at the target enemy, dealing 15+100.2% ATK Ultimate Dmg. On the second summon, the Bonedragon slams the ground, summoning bone spikes that deal 15+100.2% ATK Ultimate Dmg to enemies within range. On the third summon, the Bonedragon breathes fire, dealing 4+25.0% ATK Ultimate Dmg to enemies within range, applying 1 stack of [Bone Erosion]. [Dragon Transformation] lasts up to 10 seconds and ends immediately if [Bone Armor] is not held. If the current [Bone Armor] remaining Shield Value does not meet the conditions, the [Dragon Transformation] effect will not trigger. (In PVP, this ultimate's cooldown is increased by 30 seconds.)",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Duration of [Ossified Divine Dragon] increased to 15s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "All [Bone Erosion] applied [DEF Vulnerability] effect increased to 67.5%, stacking up to 5 layers.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Ossified Divine Dragon] Duration is increased to 25s, and upon ending, gain [Bone Armor] immediately.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Ossified Divine Dragon] reduces the [Bone Armor] Shield Value consumed per trigger to 8% of Bonedragon's max HP, with no limit on trigger times. From the fourth trigger onwards, Bonedragon breathes fire, dealing 4+25.0% ATK as Ultimate Dmg to enemies in range and applies 1 stack of [Bone Erosion] effect. All [Defense Vulnerability] effects applied by [Bone Erosion] are increased to 72.5%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "All [Bone Erosion] applied [DEF Vulnerability] effect increased to 82.5%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Bonedragon Guardian",
        "key": "Dmg, Vulnerability, Invincibility",
        "icon": "◆",
        "description": "Summon Bonedragon for protection, gaining Invincibility and Control Immunity, but unable to perform other actions, lasting up to 10s (5s in PVP) After Duration ends or upon reactivation, Bonedragon ends protection and charges forward, colliding with enemies in its path, dealing 93+638.8% ATK as ultimate Dmg, and applies 1 stack of [Bone Erosion].",
        "cost": 2,
        "cd": 60,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Bonedragon leaves a set of connected [Space Gate] at the start and end of its Fly path.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Bonedragon protection max Duration extended to 15s (8s in PVP).",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When Bonedragon dashes, immediately reopens all [Space Gates] created by itself on the field.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "This Ultimate's cooldown reduces by 15s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After Bonedragon's Shelter ends, apply an unenhanced [Bone Armor] to all allied Spirimasters without [Dragonbone Sturdy Armor] or [Void Phantom Armor] (this effect has a 45s shared cooldown), and grant yourself additional 15,0% Final Dmg Reduction, Duration 10s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Spacious Space, Myriad Bones",
        "key": "Dmg, Dmg↓, Vulnerability",
        "icon": "◆",
        "description": "Channel spatial power, gaining Strong Super Armor and Control Immunity, and receive 30,0% final Dmg Reduction effect. After 1.5s, release [Bone Spike Domain] centered on self, dealing 40+275.0% ATK Skill Dmg to enemies within range. If attacked during spatial power channeling, immediately release [Bone Spike Domain], applying 1 stack of [Bone Erosion] to all targets within the domain.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "During the concentration of spatial power, the final Dmg Reduction effect increases to 75,0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After casting [Bone Spike Domain], if holding [Dragonbone Sturdy Armor], gain 10 stacks of [Dragonbone Fragment].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When attacked by enemies while harnessing spatial power, if equipped with [Dragonbone Sturdy Armor], gain an additional 5 stacks of [Dragonbone Fragment].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After casting Bone Spike Domain, gain an additional 7,5% Final Dmg Reduction for 10s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After casting Bone Spike Domain, gain an additional 15,0% Final Dmg Reduction for 10s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Gate of Bones",
        "key": "Dmg, Dmg↓, Vulnerability",
        "icon": "◆",
        "description": "Open a set of connected [Space Gates] between yourself and the target enemy, traverse through them, then unleash massive bone spikes to attack enemies in the frontal area, dealing a total of 20+145.0% ATK as Skill Dmg and applying 1 stack of [Bone Erosion].",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Space Gate] reopens 30s after closing.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Up to 2 sets of [Space Gate] can exist on the field.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After traversing [Space Gate], gain 15,0% Final Dmg Reduction for 3s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Skill can be stored up to 2 uses.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Up to 3 sets of [Space Gate] can exist on the field.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Dragonbone Sturdy Armor",
        "key": "Shield",
        "icon": "◆",
        "description": "Bonedragon enhances all its [Bone Armor] to [Dragonbone Sturdy Armor], providing a Shield Value based on Bonedragon's 80.0% max HP. While the shield exists, all Spirits gain Strong Super Armor with no Duration limit and are still considered [Bone Armor]. [Dragonbone Sturdy Armor]: [Dragonbone Sturdy Armor] consumes Shield Value equal to 15% of Bonedragon's max HP to gain 1 stack of [Dragonbone Fragment]. Max 20 stacks. Upon gaining [Dragonbone Sturdy Armor], all [Dragonbone Fragments] are consumed, granting additional Shield Value equal to the number of consumed [Dragonbone Fragments] multiplied by 2.5% max HP.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Dragonbone Sturdy Armor] grants an additional Shield Value of 20% of Bonedragon's max HP.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "The Shield Value gained from each stack of [Dragonbone Fragment] increases to Bonedragon's 5.0% max HP.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Dragonbone Sturdy Armor] extra Shield Value increases to Bonedragon 40% max HP.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Dragonbone Fragment] can be stacked up to 30 stacks.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Dragonbone Sturdy Armor] can store 1 additional stack. When [Dragonbone Sturdy Armor] shatters, automatically release stored [Dragonbone Sturdy Armor].",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Void Phantom Armor",
        "key": "Shield, Dmg↓, Vulnerability",
        "icon": "◆",
        "description": "Bonedragon enhances its [Bone Armor] to [Void Phantom Armor], granting a Shield Value based on Bonedragon's 10.0% max HP, and provides all Spirits with a Medium Super Armor effect while the shield is active, with no Duration limit, still considered as [Bone Armor]. [Void Phantom Armor]: When [Void Phantom Armor] is shattered, it absorbs the overflow damage from the attack and grants itself the [Void] effect, providing all Spirits with 65,0% final Dmg Reduction, lasting 3s (2s in PVP). Each time passing through [Space Gate], gains [Void Phantom Armor].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When holding [Void Phantom Armor] or [Void], each time you take Dmg, summon several giant bone spikes near the Dmg source, dealing passive Dmg of 1+5.5% ATK to enemies within range, and apply 1 stack of [Bone Erosion]. This effect has a 3s trigger cooldown.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "All [Bone Erosion] applied [DEF Vulnerability] effect increased to 67.5%, stacking up to 5 layers.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Void Phantom Armor] can store an additional layer. Stored [Void Phantom Armor] will automatically release when [Void] effect ends. [Void] increases final Dmg Reduction to 80,0%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Void Phantom Armor] can store 2 additional stacks. All [Defense Vulnerability] effects applied by [Bone Erosion] increases to 72.5%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "All [Bone Erosion] applied [DEF Vulnerability] effect increased to 82.5%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "deliatearoma",
    "title": "Delicate Aroma",
    "subtitle": "Fragant Glaze - Feathers Bloom - Jade Brocade",
    "image": "images/personnages/deliatearoma/deliatearoma-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Support",
      "Control Dmg Up",
      "Healing"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Ye Yuan"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Support"
      },
      {
        "label": "Role",
        "value": "Healer"
      },
      {
        "label": "Mechanic",
        "value": "Stacking"
      },
      {
        "label": "Acquisition",
        "value": "Event Reward"
      }
    ],
    "description": "Delicate Aroma is a healer with a permanent floating companion, [Delicate Aroma] itself, a summoned entity that sticks around, connects to her for SP regeneration, and helps deliver healing zones. Her Ultimates lean into area-based support, creating flower domains and firing off healing seeds to allies across the whole field, all while cleansing negative status effects along the way.\n\nHer core resource is [Fragrance Trace] (or [Aroma], depending on which passive is active), a stacking buff gained over time that eventually converts into big bonuses like [Support Dmg Bonus] boosts and Soul Power restoration when consumed. Both passives also unlock [Enhanced Initiative], letting her react instantly with a powered-up defensive dodge even if she's mid-attack or under crowd control.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/deliatearoma/background/deliatearoma-background.png",
    "normalAttack": {
      "title": "Jade Flower",
      "key": "Dmg",
      "icon": "◆",
      "description": "Use a flute to channel floral energy for an attack, dealing a total of 19.4% ATK as Dmg to enemies."
    },
    "initiative": {
      "title": "Delicate Bloom",
      "key": "Summon",
      "icon": "◆",
      "description": "Upon entering a Fight, automatically summon [Delicate Aroma] on the battlefield, playing the flute as petals envelop self, while [Delicate Aroma] appears on the ground beside the Character."
    },
    "ultimate": {
      "skill1": {
        "title": "Delicate Dance Formation",
        "key": "Summon, Healing",
        "icon": "◆",
        "description": "The Character plays a flute, spinning into the air with [Delicate Aroma], releasing a Golden floral fragrance that summons a flower domain for 10s. While in the flower domain, the Character continuously gains the [Lingering Fragrance] effect, which is dispelled upon leaving the domain. [Lingering Fragrance]: Grants a certain Healing effect per second and provides Super Armor for 2s during its Duration. After release, [Delicate Aroma] is recalled.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Lingering Fragrance] grants Immunity to negative status during its Duration.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Lingering Fragrance]'s Super Armor upgrades to [Strong Super Armor], enhancing [Lingering Fragrance]'s Healing effect, and restoring 99+5.2% HP.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Flower Domain Duration increases by 4s. During [Lingering Fragrance] Duration, gain an additional 10% Dmg↓ effect.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Lingering Fragrance] added by Ultimate does not dispel after the Character leaves Flower Domain, Duration adjusted to 5s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After unleashing the Ultimate, gains [Light Song] and [Graceful Dance]. [Light Song]: Grants Control Immunity, Duration 5s (adjusted to 3s in PVP). [Graceful Dance]: Increases [Support Dmg Bonus] by 8%, Duration 30s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Delicate Aroma Bloom",
        "key": "Summon, Healing, Dispel",
        "icon": "◆",
        "description": "[Delicate Aroma] releases golden flower seeds that fly towards all allies on the field, ignoring distance, and applies [Soothing Aroma] to them. [Soothing Aroma]: Grants a certain Healing effect per second and dispels negative status upon receiving, Duration 5s. After casting, [Delicate Aroma] is recalled.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When [Soothing Aroma] ends, dispel negative status again. Successfully dispelling restores an additional 133+7.0% HP.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Soothing Aroma] Duration increased by 2s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After casting the Ultimate, Restore self 133+7.0% HP.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Soothing Aroma] grants [Strong Super Armor] during Duration, with an additional 10% Dmg↓.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After unleashing the Ultimate, gains [Floral Veil] and [Jade Melody]. [Floral Veil]: Grants Control Immunity, Duration 5s (adjusted to 3s in PVP). [Jade Melody]: Increases [Support Dmg Bonus] by 8%, Duration 30s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Jade Aroma",
        "key": "Healing, Summon",
        "icon": "◆",
        "description": "Dash in a chosen direction, repositioning [Delicate Aroma] after the dash, and instantly restore 705+35.0%+0.5% HP.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Gain [Invincibility] and [Strong Super Armor] effects during the dash.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Healing increased to 705+35.0%+0.5%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After using a Skill, the Soul Power cost for the next Delicate Aroma's Ultimate is reduced by 100.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After releasing Skill, dispel own negative status.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill base cooldown adjusted to 40s. Skill changed to a charge-type Skill, with a maximum of 2 charges.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Aroma Purification",
        "key": "Dmg, Summon",
        "icon": "◆",
        "description": "Character teleports to [Delicate Aroma]'s location, unleashing flute sounds to attack nearby targets, dealing 81.6% ATK as Dmg.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After releasing a Skill, gain [Purification]. [Purification]: Gain Control Immunity, Duration 5s (adjusted to 2s in PVP).",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Dispel negative status after Skill release, successfully dispelling restores 12+81.6% HP.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After using a Skill, the Soul Power cost for the next Delicate Aroma's Ultimate is reduced by 100.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After using a Skill, gain [Soul Wander], additionally gain two layers of [Aroma] or [Fragrance Trace]. [Soul Wander]: Gain [Strong Super Armor], Duration 5s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill base cooldown adjusted to 40s; Skill changed to a charge-type Skill, with a maximum of 2 charges.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Pure Aroma",
        "key": "SP Regen, Dmg Up",
        "icon": "◆",
        "description": "[Delicate Aroma] continuously transmits floral scent to the Character, connected by ribbon-like light. The connection radius is 40 meters, restoring 8 Soul Power per second while connected. The Character gains one stack of [Fragrance Trace] per second. [Fragrance Trace]: When the Character approaches [Delicate Aroma], it triggers [Fragrance Trace], consuming all [Fragrance Trace] stacks, and granting a specified number of [Fragrance Tracking] based on the stack count. [Fragrance Trace] has a maximum of 10 stacks. Upon activating this passive, Initiative upgrades to [Enhanced Initiative]. When attacked or controlled, Initiative is immediately activated, allowing the use of [Enhanced Initiative] even while under attack or control. (This effect has a 60-second cooldown)",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Fragrance Trace] will not be triggered by [Delicate Aroma] when below 10 stacks. Immediately gain 6 stacks of [Fragrance Trace] upon entering Fight.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Fragrance Trace] cap increased by 5 stacks, and [Fragrance Trace] acquisition speed increased by 50%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Enhanced Initiative cooldown reduced to 45s. When consuming more than 10 layers of [Fragrance Trace] at once, each additional layer adds one layer of [Floral Resonance]. [Floral Resonance]: Each layer increases [Support Dmg Bonus] by 2%, Duration 5s, max 5 layers.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Consuming more than 10 layers of [Fragrance Trace] at once restores an additional 100 Soul Power.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Consuming more than 10 layers of [Fragrance Trace] at once grants [Delicate Melody] to self. [Delicate Melody]: Each layer increases [Support Dmg Bonus] by 12%, Duration 30s, max 1 layer.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Delicate Pure Land",
        "key": "SP Regen, Dmg Up",
        "icon": "◆",
        "description": "[Delicate Aroma] creates a Fragrance Domain. While in the field, players gain 1 stack of [Aroma] every second. [Aroma]: Each stack increases [Support Dmg Bonus] by 1% and restores 15 Soul Power per second. [Aroma] has a maximum of 10 stacks, Duration 2s. Upon activating this passive, Initiative upgrades to [Enhanced Initiative]. When the character is hit or controlled, Initiative is immediately activated, allowing [Enhanced Initiative] to be used while hit or controlled (this effect has a 60s independent cooldown)",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Aroma] at 10 stacks instantly restores 200 Soul Power, triggered once every 360s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Aroma] grants [Heavenly Melody] at full stacks. [Heavenly Melody]: Increases [Support Dmg Bonus] by 9%, max 1 stack.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Enhanced Initiative cooldown reduced to 45s. [Aroma] at full stacks additionally provide Soul Power Restore, with an extra 5 Soul Power per second.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Fragrance Domain range increased by 30%, and [Aroma] Duration changed to 5s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Aroma]'s [Support Dmg Bonus] increased by 1%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "lightfeatherbow",
    "title": "Lightfeather Bow",
    "subtitle": "Icy Spider Queen - Absolute Frost Nova - Wolfen Feather",
    "image": "images/personnages/lightfeatherbow/lightfeatherbow-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Agility",
      "Sub Dps",
      "Additional Attack"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Lightfeater Guru"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Agility"
      },
      {
        "label": "Role",
        "value": "Light Dmg"
      },
      {
        "label": "Mechanic",
        "value": "Flash"
      },
      {
        "label": "Acquisition",
        "value": "Event Reward"
      }
    ],
    "description": "Lightfeather Bow is a precision-based ice archer who fights around two different Core Passive builds: [Formless Arrow] for a stealthy aiming-mode playstyle, or [Glacial Arrow] for a stack-and-release burst build. Either way, nearly every attack stacks [Flash] on enemies, feeding into bonus effects tied to whichever passive he's running.\n\nWith [Formless Arrow], he enters [State of Mind], a locked-aiming stance that trades mobility for enhanced dodges and a powerful charged shot consuming [Ice Arrow] stacks, converting removed Flash stacks into [Light Energy] along the way. With [Glacial Arrow] instead, he builds up [Glacial Shard] stacks that all get dumped at once into one big charged Flash-heavy nuke, scaling harder the more stacks he's saved up.\n\nHis Ultimates hit like snowstorms, freezing lines of enemies and applying [Starry Plume], a buff that boosts his overall damage and even detonates for bonus damage based on how many times the target got hit by his signature charged arrows during its uptime.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/lightfeatherbow/background/lightfeatherbow-background.png",
    "mechanics": [
      "Flash"
    ],
    "normalAttack": {
      "title": "Rapid Shot",
      "key": "Dmg",
      "icon": "◆",
      "description": "Fires four rapid shots, dealing a total of 32+209.7% ATK Dmg to enemies. The final hit of the Normal Attack applies 2 stacks of [Flash]. During Normal Attack combos, moving the left joystick triggers [Stride], allowing a quick dash in the joystick's direction while firing arrows to deal damage. Based on the activated Core Passive, landing the final hit of the Normal Attack grants 1 stack of [Ice Arrow] or 2 stacks of [Glacial Arrow]."
    },
    "initiative": {
      "title": "Charged Shot",
      "key": "Dmg, Flash, Light Energy",
      "icon": "◆",
      "description": "Cold winds arise a chilling longbow. Lightfeather Bow fires an explosive ice arrow, attacking and knocking back enemies in the front, dealing 12+80.0% ATK Dmg, and applying 3 stacks of [Flash]. Based on the activated Core Passive, gain 1 stack of [Ice Arrow] or 2 stacks of [Glacial Shard] upon release."
    },
    "ultimate": {
      "skill1": {
        "title": "Endpoint",
        "key": "Dmg, Flash, Light Energy",
        "icon": "◆",
        "description": "Drawing the bow with your feet, unleash an ice formation and fire a devastating shot that deals 212+1459.2% ATK of Ultimate Dmg to all targets in a straight line. Based on the activated Core Passive, grants 2 stacks of [Ice Arrow] or 4 stacks of [Glacial Shard] upon skill activation.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Inflicts 10 stacks of [Flash] on the target.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Ultimate hits apply [Starry Plume]. [Starry Plume] lasts for 15s, granting a Dmg Bonus of 15.0% from Lightfeather Bow.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Sharp ice spikes erupt along the Ultimate's path, dealing 28+171.0% ATK as Ultimate Dmg.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When [Starry Plume] expires, deals 37+257.4% ATK Dmg to the target. This damage is increased by 5.0% for each time the target was hit by [Formless Arrow] or [Glacial Arrow] during its duration, up to 11 times.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Increases the damage from [Starry Plume] at the end of its duration. This damage is further increased by 7.2% for each time the target was hit by [Formless Arrow] or [Glacial Arrow], up to 11 times.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Ultimate Featherlight",
        "key": "Dmg, Flash, Light Energy",
        "icon": "◆",
        "description": "Lightfeather Bow channels extreme ice power into a single arrow, creating a massive iceberg upon impact, dealing 166+1143.3% ATK as Ultimate Dmg to a wide area. Based on the activated Core Passive, grants 2 stacks of [Ice Arrow] or 4 stacks of [Glacial Shard] upon skill activation.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Inflict 15 stacks of [Flash] on the target.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Ultimate hits apply [Starry Plume]. [Starry Plume] lasts for 15s, granting a Dmg Bonus of 15.0% from Lightfeather Bow.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Ultimate Dmg is increased by 15.0%. Iceberg inflicts [Frozen] on the target 3s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Ultimate hits apply [Starry Plume]. [Starry Plume] lasts for 15s, granting a Dmg Bonus of 25.0% from Lightfeather Bow.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Increases Ultimate Dmg by 30.0%. If Core Passive [Glacial Arrow] is activated, using the Ultimate will consume all [Glacial Shard] stacks and trigger all effects of Core Passive [Glacial Arrow].",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Swift Action",
        "key": "Dmg, Flash, Light Energy",
        "icon": "◆",
        "description": "Act swiftly without delay, like a ray of cold light! Dash toward the target to deliver a swift kick and get behind with a headshot, dealing a total of 48+328.3% ATK Dmg. Based on the activated Core Passive, grants 1 stack of [Ice Arrow] or 2 stacks of [Glacial Shard] upon release.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Headshot applies 5 stacks of [Flash] to the target.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Upgraded the skill to charge-type (up to 2 charges). While airborne, grants [Strong Super Armor], [Invincibility], and [Control Immunity]. Using the skill maintains [State of Mind].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Headshot applies [Star Mark] to targets on hit. [Star Mark]: up to 2 stacks, lasts 15s. Each stack increases Strike Dmg from [Formless Arrow] or [Glacial Arrow] by 33.0%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Gain [Invisibility] for 3s after the skill lands. Increases the Skill Dmg by 30.0%. (In PVP, [Invisibility] duration is reduced to 1.5s)",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Enhanced [Star Mark] effect: up to 2 stacks, lasts 15s. Each stack increases Strike Dmg from [Formless Arrow] or [Glacial Arrow] by 44.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Ice Arrow Rain",
        "key": "Dmg, Flash, Light Energy",
        "icon": "◆",
        "description": "Snow and ice fall like rain. Ice arrows rain down on the target area for 4s, dealing a total of 639.9% ATK Dmg to targets within the area. Based on the activated Core Passive, grants 2 stacks of [Ice Arrow] or 4 stacks of [Glacial Shard] upon skill activation.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Inflicts 3 stacks of [Flash] per second.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "The duration of Ice Arrow Rain is increased to 5s while inflicting [Star Mark]. [Star Mark]: Lasts 5s. Increases Strike Dmg from [Formless Arrow] or [Glacial Arrow] by 66.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Increases Skill Dmg by 20.0% and Ice Arrow Rain's skill range by 30%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Enhances [Star Mark]: Lasts 5s. Increases Strike Dmg from [Formless Arrow] or [Glacial Arrow] by 88.0%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill Dmg is further increased by 30.0%. Reduces the movement speed of targets within the arrow rain by 60%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Formless Arrow",
        "key": "Dmg, Fade, Light Energy",
        "icon": "◆",
        "description": "Grants [Ice Arrow] stacks after using specific moves. Using the Enhanced Charged Normal Attack [Formless Realm] enters [State of Mind] Aiming Mode for 15s. While in [State of Mind]: Casting Skills, Ultimates, Initiative Skills, or Jumping ends [State of Mind]. Movement is disabled, but a Special Dodge with enhanced range and performance can be used. Unlocks Enhanced Normal Attack [Formless Arrow]: Consumes 1 stack of [Ice Arrow] to deal 40+271.3% ATK Passive Dmg and 5+30.1% ATK Flash Dmg to enemies in a line.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Wind God's Lightfeather Bow Talent",
        "haloDescription": "The frozen left eye, the source of extreme ice. Strike Dmg dealt by [Formless Arrow] +45.0%. Upon entering combat, gain [Stone Cold] effect: Lightfeather Bow gains 15% Final Dmg Up. After taking damage, [Stone Cold] halves the Final Dmg Up effect provided, which restores to full strength after 5s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Formless Arrow] removes 5 stacks of [Flash] from the target, granting the Spirimaster an equal number of [Light Energy].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When [Light Energy] reaches 50 stacks and [Ice Arrow] has fewer than 2 stacks, consumes 50 stacks of [Light Energy] to immediately gain 5 stacks of [Ice Arrow].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Formless Arrow]'s Strike Dmg increases by 50.0%. [Formless Arrow] removes 10 stacks of [Flash] from the target, granting the Spirimaster an equal number of [Light Energy].",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Formless Arrow]'s Strike Dmg increases by 100.0%. [Formless Arrow] applies [Frozen] that lasts 0.4s to targets on hit.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When [Light Energy] reaches 50 stacks and [Ice Arrow] has fewer than 2 stacks, consumes 50 stacks of [Light Energy] to immediately gain 5 stacks of [Ice Arrow]. Meanwhile, gain [Ultimate Featherlight] effect: lasts 10s. Increases [Formless Arrow]'s Strike Dmg by 72.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Glacial Arrow",
        "key": "Dmg, Flash, Light Energy",
        "icon": "◆",
        "description": "Grants [Glacial Shard] stacks after using specific moves. Using the Enhanced Charged Normal Attack [Glacial Arrow] consumes all [Glacial Shard] stacks to deal Passive Dmg equal to 23+157.5% ATK and Flash Dmg equal to 3+17.5% ATK to enemies in a straight line. Each stack of [Glacial Shard] consumed increases the Dmg Bonus of [Glacial Arrow] by 5%.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "Wind God's Lightfeather Bow Talent",
        "haloDescription": "Born of eternal frost and glacial breath, this arrow pierces the heavens. [Glacial Arrow] increases Strike Dmg by 45.0% and applies [Frigid Light] to targets on hit. [Frigid Light]: Increases the target's Final Dmg taken by 10% for 60s. When the target takes Flash Dmg from other Spirits during this time, it upgrades to [Absolute Chill], increasing the target's Final Dmg taken to 25%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Inflicts 10 stacks of [Flash] on the target.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Apply [Polar Glimmer] to hit targets. [Polar Glimmer]: Lasts 20s. Increases Flash Dmg taken by the target by 100.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Gain 1 stack of [Feather] for every stack of [Light Energy] gained. Every 7 stacks of [Feather] convert into 1 stack of [Glacial Shard].",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Enhance [Polar Glimmer]: Lasts 20s. Increases Flash Dmg taken by the target by 200.0%. While [Polar Glimmer] is active, if [Flash] is applied or removed by other Spirits, deal 19+128.9% ATK Dmg (triggers once every 2s).",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Each stack of [Glacial Shard] consumed increases [Glacial Arrow] Dmg by 8%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "fieryshadow",
    "title": "Fiery Shadow",
    "subtitle": "Born from Flames - Song of Ice and Fire - A Kiss on the Cheek",
    "image": "images/personnages/fieryshadow/fieryshadow-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Control",
      "Stun"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Huo Wu"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Control"
      },
      {
        "label": "Role",
        "value": "Dmg Up Enemy Cluster"
      },
      {
        "label": "Mechanic",
        "value": "Scorch"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Huo Wu weaponizes fire into a proper control tool, her Ultimates aren't just about burning things, they lock enemies down with [Stun] and stack heavy [Control Vulnerability] on top. Every hit spreads [Scorch], and her whole kit revolves around punishing burned targets even harder afterward.\n\nHer signature mechanic is [Fire Thorns], stacks built up from Skills and Ultimates that either burst automatically after enough Scorch instances or get consumed on Scorch hits, dealing bonus damage and piling on even more Control Vulnerability. It's basically a landmine field made of fire debuffs waiting to detonate.\n\nHer passive Fiery Shadow tags along too, when she switches off-field, her shadow companion keeps attacking on Normal Attack hits, spreading Scorch and Fire Thorns even while she's not the one on screen.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/fieryshadow/background/fieryshadow-background.png",
    "mechanics": [
      "Scorch"
    ],
    "normalAttack": {
      "title": "Skyfire",
      "key": "Dmg",
      "icon": "◆",
      "description": "Transform into flames and perform up to 4 Combo attacks on the target, dealing a total of 47+303.3% ATK as Dmg."
    },
    "initiative": {
      "title": "Fiery Shadow",
      "key": "Dmg",
      "icon": "◆",
      "description": "Fiery Shadow dashes forward swiftly, dealing a total of 20+126.6% ATK as area Dmg to surrounding targets."
    },
    "ultimate": {
      "skill1": {
        "title": "Huo Wu Radiant Sun",
        "key": "Dmg, Control, Stun",
        "icon": "◆",
        "description": "Unleash a sun-like blaze, dealing total Dmg of 80+516.3% ATK to all targets within range, inflicting a 5s [Stun] effect and applying [Scorch] effect. All hit enemies gain [Fiery Shadow Scorch] effect, receiving 25.0% [Control Vulnerability], Duration 15s.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Ultimate hit applies [Fire] effect, reducing the interval of [Scorch] periodic Dmg by 0.3s for 15s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Ultimate applies [Control Vulnerability] base effect increased to 35.0% for 15s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Ultimate hit applies [Fire] effect increased, reducing the interval of [Scorch] periodic Dmg by 0.5s for 15s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Fire] Duration increased to 20s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Ultimate applies [Control Vulnerability] base effect increased to 40.0% for 20s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Dual Flame Blast",
        "key": "Dmg, Control, Stun",
        "icon": "◆",
        "description": "Huo Wu unleashes the power of solar flames, causing a Burst of 71+488.7% ATK Dmg to all targets and applying [Scorch] effect. Inflicts a 5s [Stun] effect, immediately triggering the [Fire Thorns] effect on the target, and applying a 15s [Fiery Scorch] effect. Increases target's [Control Vulnerability] by 25.0%.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Ultimate hit applies [Flame Molding] for 15s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Ultimate hit increases the base effect of [Control Vulnerability] to 35.0% for 15s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Ultimate hit applies [Flame Molding], Duration increased to 20s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Ultimate hit applies [Fire], reducing the interval of [Scorch] periodic Dmg by 0.5s, Duration 20s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Ultimate applies [Control Vulnerability] base effect increased to 40.0% for 20s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Wildfire Aura",
        "key": "Dmg, Control, Stun",
        "icon": "◆",
        "description": "Fiery Shadow sweeps surrounding targets with Exude, gathers them in front, then releases a Shockwave to repel targets, dealing a total of 25+166.4% ATK Dmg and applying 1 stack of [Scorch] effect.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "The Traction range of the Skill doubles, increasing by 100%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Shockwave upgraded to triple burst, and ATK range increased by 100%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Skill Dmg Up by 50%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "If Skill hits a target with Soul Power below 300, causes 2.5s [Stun].",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill Dmg increases by an additional 50%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Fiery Shadow Dance",
        "key": "Dmg",
        "icon": "◆",
        "description": "Summon Fiery Shadow to merge with self, gaining [Weaving Dance] effect for 15s. [Weaving Dance]: When switching to another Spirit and hitting a target with a Normal Attack, Fiery Shadow appears beside the target to unleash [Fiery Shadow Strike], dealing 3+21.2% ATK as Dmg and applying [Scorch]. Triggers once every 3s. If [Core Passive] is activated, [Fiery Shadow Strike] applies 3 stacks of [Fire Thorns].",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Enemies hit by [Fiery Shadow Blitz] take 20% increased [Scorch] Dmg for 5s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Weaving Dance] Duration extended to 20s; upon activating [Core Passive], [Fiery Shadow Blitz] attack adds 5 stacks of [Fire Thorns].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Enemies hit by [Fiery Shadow Blitz] take 50% increased [Scorch] Dmg for 5s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Fiery Shadow Blitz] trigger interval reduced to 2s; [Fiery Shadow Blitz] Dmg increased by 30%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Weaving Dance] Duration extended to 30s; [Fiery Shadow Blitz] Dmg increased to 50%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Blazing Fury",
        "key": "Dmg, Scorch, Vulnerability",
        "icon": "◆",
        "description": "Skills and Ultimates apply 1 stack of [Fire Thorns] with each hit, lasting 30s. [Fire Thorns]: Triggers after receiving 5 instances of [Scorch] Dmg. Each stack of [Fire Thorns] deals 3+20.0% ATK as Dmg and applies 12.0% [Control Vulnerability] for a duration of 10s.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Fire Thorns] increases the base effect of [Control Vulnerability] to 18.0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When [Fire Thorns] triggers, deduct 5 Soul Power per stack from the target.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Fire Thorns] extends [Control Vulnerability] effect Duration to 15s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When [Fire Thorns] triggers, deduct an additional 5 Soul Power per stack from the target. [Fire Thorns] Burst Dmg Up by 20%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Fire Thorns] Dmg Up by 30%, [Fire Thorns] base effect of [Control Vulnerability] increases to 20.0%, Duration extends to 20s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Blazing Flame Dance",
        "key": "Dmg, Scorch, Vulnerability",
        "icon": "◆",
        "description": "Skills and Ultimates add 1 stack of [Fire Thorns] on each hit, lasting 30s. [Fire Thorns]: Consumes 1 stack of [Fire Thorns] after taking [Scorch] Dmg, dealing 3+20.0% ATK as Dmg and applying 1 stack of [Fire Thorns Vulnerability]. [Fire Thorns Vulnerability]: Each stack applies 0.6% [Control Vulnerability], stacks up to 12 times, Duration 10s.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Fire Thorns]: Each time [Scorch] Dmg is taken, consumes 2 stacks of [Fire Thorns] and adds 2 stacks of [Fire Thorns Vulnerability].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Fire Thorns Vulnerability] at full stacks transforms into [Fire Thorns Bloom]. [Fire Thorns Bloom]: [Control Vulnerability] increases to 20.0%, Duration 10s. No [Fire Thorns] can be added during this time, 30s trigger interval.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Apply [Fire Thorns Bloom] and deduct 100 SP from the target.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Fire Thorns Bloom] allows normal application of [Fire Thorns Vulnerability].",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Fire Thorns Bloom] grants [Control Vulnerability] effect increased to 24.0%, duration increased to 20s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "emeraldserpent",
    "title": "Emerald Serpent",
    "subtitle": "Rakshasa's Figure - Timeless Friendship - Darkfire Emerald",
    "image": "images/personnages/emeraldserpent/emeraldserpent-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Control"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Dugu Bo"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Control"
      },
      {
        "label": "Role",
        "value": "Poisoner"
      },
      {
        "label": "Mechanic",
        "value": "Poison"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Emerald Serpent locks enemies down through poison rather than brute force, nearly every attack applies [Poison] and [Immobility], slowly trapping enemies in place while chipping away at them. Their whole kit builds toward [Control Vulnerability], stacking it heavily so once enemies are poisoned, every future control effect lands even harder.\n\nTheir passive converts accumulated [Poison] into [Snake Venom], and once that hits 10 stacks, it transforms into a stronger effect ([Emerald Venom] or [Snake Emperor Venom] depending on the passive), unlocking bonus Control Vulnerability and extended lockdown time. Their Ultimates lean into area denial too, [Toxic Domain] and [Poison Pool] both spray venom repeatedly over their duration, converting Poison stacks into [Toxic] for even more bonus Control Vulnerability.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/emeraldserpent/background/emeraldserpent-background.png",
    "mechanics": [
      "Poison"
    ],
    "normalAttack": {
      "title": "Poison Breath",
      "key": "Dmg",
      "icon": "◆",
      "description": "Summon Emerald Serpent to perform up to four Combo attacks on nearby enemies, dealing a total of 37+260.1% ATK as Normal attack Dmg."
    },
    "initiative": {
      "title": "Serpent Orb",
      "key": "Dmg",
      "icon": "◆",
      "description": "Conjure an orb above the head to explode, dealing 9+56.0% ATK as Dmg to nearby targets and inflicting a 3s [Immobility] effect (adjusted to 1s [Immobility] in PVP). Apply 1 stack of [Poison]."
    },
    "ultimate": {
      "skill1": {
        "title": "Emerald Domain",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "Summon Emerald Serpent to release [Toxic Domain]. [Toxic Domain] lasts 10s, generating a Poison Orb every 2s and exploding to deal 6+40.4% ATK as Dmg to nearby enemies and converting one stack of [Poison] to [Toxic].",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After the poison orb explodes, two parallel poison jets are released, dealing Dmg to enemies hit and inflicting [Poison].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each stack of [Toxic] increases [Control Vulnerability] by 1%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Toxic] no longer requires consuming [Poison] stacks.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Toxic] Duration extended by 3s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Each stack of [Toxic] increases [Control Vulnerability] by 2%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Emerald Poison Barrier",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "After a brief wind-up, summon Emerald Serpent to spew a large area of venom, forming a massive [Poison Pool], lasting 1.5s. [Poison Pool] sprays a venom column at a random target within range every 0.3s, dealing 12+84.3% ATK as Dmg and inflicting 0.4s [Immobility] and 1 stack of [Poison] effect. When [Poison Pool] ends, apply [Control Vulnerability] of 20.0% to all targets within range, lasting 15s.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Poison Pool] Duration increased by 1s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Upon Poison Pool Burst, deals additional Dmg per stack based on [Poison] stacks on the target.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Control Vulnerability] increased to 30%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Emerald Poison Barrier] extends each [Immobilize] Duration to 0.5s, stackable up to 4s (up to 2s in PVP).",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Control Vulnerability] increased to 40%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Venomous Corrosion",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "Summon Spirit to spray venom at the target, dealing 64+434.1% ATK as Dmg to enemies in a line and inflicting 3 stacks of [Poison] and 1.5s [Immobility] effect.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Immobility] duration extended by 0.5s",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Poison] stacks applied increased by 2.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Venomous Corrosion] Dmg Up by 50%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Venomous Corrosion] becomes 2-layer charge.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Venomous Corrosion] gains 3 charges, and [Venomous Corrosion] Dmg increased by 80%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Time Freeze",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "Condense toxins to strike forward, dealing 60+423.7% ATK as Dmg to the first enemy hit and inflicting a 5s [Immobility] effect. If the target is a player, final Dmg taken during [Immobility] caused by [Time Freeze] is reduced by 50%.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Time Freeze] additionally inflicts 5 stacks of [Poison].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Time Freeze] inflicts [Root], granting the target an additional 5% [Control Vulnerability].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Time Freeze] increases [Immobility] duration to 6s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Time Freeze] inflicts [Root], granting the target an additional 10% [Control Vulnerability].",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Time Freeze] inflicts [Root], granting the target an additional 15% [Control Vulnerability].",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Emerald Venom",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "All effects of Emerald Serpent that apply [Poison] grant the target an equal number of [Snake Venom]. [Snake Venom]: Upon reaching 10 stacks, it transforms into [Emerald Venom].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Phosphorescent Poison] Healing reduction effect increased to 50%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Phosphorescent Poison] enhances [Control Vulnerability] effect by 5%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Phosphorescent Poison] Duration extended by 5s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Phosphorescent Poison] inflicts 2s [Immobilize] when the target receives Healing, this effect triggers only once every 30s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Emerald Venom]'s [Control Vulnerability] effect increased to 20%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Snake Venom Bone Devour",
        "key": "Dmg, Control",
        "icon": "◆",
        "description": "All effects of Emerald Serpent that apply [Poison] grant the target an equal number of [Snake Venom]. [Snake Venom]: Upon reaching 10 stacks, it transforms into [Snake Emperor Venom].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Snake Emperor Venom] extends Immobility duration by 1s upon triggering.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Snake Emperor Venom] inflicts 1s [Immobility] when removed.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Snake Emperor Venom] [Control Vulnerability] effect increased by 5%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Serpent Poison] Duration extended by 5s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Snake Emperor Venom]'s [Control Vulnerability] effect increased to 20%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "universelock",
    "title": "Universe Lock",
    "subtitle": "Chaotic Thunder - Scorching Gold - Surpassing the Master",
    "image": "images/personnages/universelock/universelock-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Control",
      "Control Dmg Up"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Lou Xin"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Control"
      },
      {
        "label": "Role",
        "value": "Control Dmg Up"
      },
      {
        "label": "Mechanic",
        "value": "Time-lock stacking"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Universe Lock is a lockdown machine built entirely around trapping enemies in place, whether it's through [Cosmo Cage] sealing an entire area for seconds at a time, or [Heavenly Soul Lock] physically imprisoning a single target. Everything they do stacks [Control Vulnerability] and [Flash], meaning enemies get harder to escape the longer the fight drags on.\n\nTheir signature resource is [Universal Solution], built up passively through Normal Attacks, Skills, and Ultimates, which shortens the charge time for their ultimate crowd control tool, [Temporal Restriction]. Once fully charged, releasing it slows every enemy's movement and Pose to a crawl for a solid 10 seconds, basically freezing the whole battlefield in place.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/universelock/background/universelock-background.png",
    "normalAttack": {
      "title": "Void Clarity",
      "key": "Dmg, Control",
      "icon": "◆",
      "description": "Wield the Universe Lock to attack enemies ahead, dealing a total of 28+191.3% ATK Dmg. Hold Normal Attack to unleash [Temporal Restriction]. [Temporal Restriction]: During the charged attack, continuously unlock the Universe Lock's restrictions. Once fully unlocked, the Universe Lock releases [Temporal Restriction], lasting 10s. While [Temporal Restriction] is active, reduce all enemies' Pose and movement Speed by 50%. Consume all [Universal Solution]. (PVP Duration and effect reduced by 50%)"
    },
    "initiative": {
      "title": "Sealed Void",
      "key": "Dmg",
      "icon": "◆",
      "description": "Throw the Universe Lock forward to create a Sealed Void, dealing a total of 17+116.6% ATK Dmg to all enemies within range."
    },
    "ultimate": {
      "skill1": {
        "title": "Cosmo Cage",
        "key": "Control, Stun, Traction",
        "icon": "◆",
        "description": "Completely unseal the Universe Lock, unleashing spatial power to trap all enemies in the target area within the Broken Lock Space for 8s. All Dmg dealt by enemies within the range of the Ultimate is reduced by 20% and they cannot leave the Broken Lock Space. All hit enemies are inflicted with 3 stacks of [Flash] and a 15s [Lock] effect, suffering 20% [Control Vulnerability].",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "If enemies forcibly leave the Broken Lock Space, inflict Dmg and [Stun] for 2s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When Spirimaster has 20 stacks of [Light Energy], [Control Vulnerability] effect increases to 25%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Gain [Universal Solution] effect increased to 3 stacks.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Domain Duration increased by 3s, and [Stun] time upon leaving the area increased by 1s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When Spirimaster has 15 stacks of [Light Energy], [Control Vulnerability] effect increases to 30.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Heavenly Soul Lock",
        "key": "Control, Stun, Traction",
        "icon": "◆",
        "description": "Throw the Primal Lock at the target, dealing 66+453.7% ATK as Dmg. Upon hitting the target, it temporarily seals them within the lock. Minion Duration 20s, Elite Duration 10s, and Boss can only be sealed for 5s after Tenacity is depleted. Targets hit by the throw gain 20.0% [Control Vulnerability] for 15s, and your Tenacity Dmg dealt increases by 50%.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Gain 3 stacks of [Universal Solution].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When the Primal Lock ends, it explodes, dealing additional Dmg. The Dmg increases by 10% per hit during the seal, up to 10 times.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When the Primal Lock hits, it inflicts 100 Toughness Dmg.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When the Primordial Lock explodes, it triggers a brief [Temporal Restriction] effect, which does not benefit from passive Skill bonuses.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Ultimate applies [Control Vulnerability] effect increased to 30.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Spacetime Matrix",
        "key": "Dmg",
        "icon": "◆",
        "description": "Universe Lock, controlled by Soul Power, flies towards the enemy. Upon hitting the target or landing, it releases the seal to form [Flying Lock Space], dealing Dmg equal to 1+8.5% ATK to all enemies within range every 0.2 seconds for a Duration of 3 seconds. When the skill hits, it adds 2 stacks of [Flash].",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Gain [Universal Solution] effect increased to 2 stacks.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When [Flying Lock Space] deals Dmg, it applies 0.75% [Control Vulnerability] to enemies, up to 10 stacks.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Dmg interval reduced by 0.1s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Flying Lock Space] inflicts Dmg, applying 0.75% [Control Vulnerability] to enemies, up to 10 stacks. When Spirimaster has 20 stacks of [Light Energy], max Vulnerability stacks increase to 20.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Flying Lock Space] inflicts Dmg, increasing [Control Vulnerability] effect to 1.2%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Star Shift",
        "key": "Dmg",
        "icon": "◆",
        "description": "Throw Universe Lock to the ground, dealing Dmg equal to 1+6.7% ATK to all enemies within range every 0.3s, and applying continuous Traction effect on enemies for 5s. When the skill hits, it adds 3 stacks of [Flash] and 10% [Control Vulnerability] for 15s.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Monsters are pulled to the innermost circle with a 0.5s [Stun] effect.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Dmg interval reduced by 0.1s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Reduce this skill's cooldown by 5s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "At the end, the array center triggers an explosion, inflicting 50 Toughness Dmg.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill applies [Control Vulnerability] effect increased to 15.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Primordial Cosmos",
        "key": "Control",
        "icon": "◆",
        "description": "The Universe Lock, due to its immense temporal dominance, was sealed by the gods in ancient times. The Universe Lock gains 1 stack of [Universal Solution] with each final hit of a Normal Attack and when a Skill hits an enemy, while an Ultimate hit grants 2 stacks of [Universal Solution]. The higher the [Universal Solution] stacks, the shorter the charge time required for [Temporal Restriction]. Upon releasing [Temporal Restriction], all [Universal Solution] stacks are consumed. [Temporal Restriction] effect becomes more potent, enemies hit suffer 7.5% Vulnerability for a Duration of 15s.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When carrying the Primal Lock, other Spirits gain the [Universal Solution] effect when casting Ultimates, gaining 1 stack each time.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When carrying the Primal Lock, each Light Energy absorption grants a [Universal Solution] effect, one stack per absorption. At 9 stacks, [Universal Solution] releases a charged heavy strike, increasing Control Vulnerability to 15%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Charged attacks increase the Slowed effect on enemies to 100%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Activating [Temporal Restriction] doesn't consume All [Universal Solution] stacks, reducing consumption to 6 stacks.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When carrying the Primal Lock, other Spirits gain the [Universal Solution] effect when casting Ultimates, gaining 2 stacks each time.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "No Unbreakable Secret",
        "key": "Control",
        "icon": "◆",
        "description": "The Universe Lock, due to its immense temporal dominance, was sealed by the gods in ancient times. The Universe Lock gains 1 stack of [Universal Solution] with each final hit of a Normal Attack and when a Skill hits an enemy, while an Ultimate hit grants 2 stacks of [Universal Solution]. The higher the [Universal Solution] stacks, the shorter the charge time required for [Temporal Restriction]. Upon releasing [Temporal Restriction], all [Universal Solution] stacks are consumed. [Temporal Restriction] effect changes, no longer causing [Time Lag] effect, granting players a 10% toughness boost, and enemies hit suffer 7.5% Vulnerability, and 5% reduced Dmg for a Duration of 15s.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When carrying the Primal Lock, other Spirits gain the [Universal Solution] effect when casting Ultimates, gaining 1 stack each time.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When carrying the Primal Lock, each Light Energy absorption grants the [Universal Solution] effect, gaining 1 stack each time.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Temporal Restriction] duration extended.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When Spirimaster has [Light Energy] 20 stacks, Monsters within [Temporal Restriction] take 10% increased Dmg upon breaking toughness.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When carrying the Primal Lock, other Spirits gain the [Universal Solution] effect when casting Ultimates, gaining 2 stacks each time.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "sausage",
    "title": "Sausage",
    "subtitle": "Culinary Arcs - Gluttonous Duo - Tears of Food God",
    "image": "images/personnages/sausage/sausage-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Support",
      "Control Dmg Up",
      "Healing"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Oscar"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Support"
      },
      {
        "label": "Role",
        "value": "Healing"
      },
      {
        "label": "Mechanic",
        "value": "Sausage-fueled buffing"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon, Mall"
      }
    ],
    "description": "Sausage Spirit is exactly as chaotic as it sounds, a support who fuels the whole team's Ultimates by throwing food at people. Their core resource, [Sausage], gets consumed to power up their own Ultimates, refunding Soul Power and granting bonus effects like [Roasted Sausage], a stacking buff that boosts the entire team's [Support Dmg Bonus] and even hands out Strong Super Armor at high stacks.\n\nTheir two Ultimate variants both drop bonus effects over time, whether it's healing sausages raining down the battlefield or a big burst heal paired with damage. Nearly every Skill also restores Soul Power and grants Support Dmg Bonus, so they're constantly keeping the team's resource bars and damage output topped off between throws.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/sausage/background/sausage-background.png",
    "normalAttack": {
      "title": "Sausage Toss",
      "key": "Dmg, Dmg Up, Dmg↓",
      "icon": "◆",
      "description": "Throw a Sausage at the target, dealing three-stage attack, totaling 26+180.4% ATK as Dmg. In Fight, the final Normal hit restores 2+3.0% of max HP; and grants one of the following Buffs for 15s: Dmg taken reduced by 5.0%; [Support Dmg Bonus] 5.0%. In specific situations, Normal is replaced by [Showtime], dealing 7+56.0% ATK as Dmg, restoring 12+21.5% of max HP. If in Fight, gain both Dmg taken reduced by 5.0% and 5.0% [Support Dmg Bonus]."
    },
    "initiative": {
      "title": "Urgent!",
      "key": "Dmg, Healing",
      "icon": "◆",
      "description": "Sprints to the target location, circles around, and Restores 37+64.6% of max HP while knocking back nearby enemies, dealing up to 18+103.9% ATK as Dmg."
    },
    "ultimate": {
      "skill1": {
        "title": "Extremity Sausage",
        "key": "Dmg, Healing, SP Regen",
        "icon": "◆",
        "description": "Consume 1 stack of [Sausage] to transform into Extremity Green Sausage. When 6 stacks of [Extremity Sausage] are gained, unleashing the ultimate will instantly restore 66+116.3% of max HP and deal 27+184.3% ATK Dmg to nearby enemies. If no [Sausage] is present during the ultimate release, the ultimate will not grant [Extremity Sausage].",
        "cost": 2,
        "cd": 30,
        "haloTitle": "God of Stars Sausage",
        "haloDescription": "Such deliciousness, a divine surprise, the God of Stars is delighted. After the Sausage Spirit unleashes its Ultimate skill, the Spirimaster receives 25.0% Ultimate Dmg's [Final Dmg Up], Duration 25s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Ultimate HP recovery effect increased by 12.5%. If current HP is below 50%, Ultimate HP recovery effect increases to 25.0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "During the Fight, after unleashing an Ultimate, if possessing [Sausage], gain 2 stacks of [Beyond Limits], each stack grants Ultimate Dmg Up 2.0%, Duration 30s. During [Beyond Limits] Duration, for every 100 Soul Power consumed, gain 1 stack of [Beyond Limits], up to 8 stacks.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "During the [Extremity] Duration, if total Soul Power consumption is 500 or more, the next Ultimate Dmg is further increased by 50.0% (this increase is capped at 50%).",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each stack of [Beyond Limits] increases Ultimate Dmg Bonus to 3.7%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "If current HP percentage is below 50%, Ultimate's HP recovery effect increases to 50.0%; each stack of [Extremity] increases Ultimate Dmg to 6.5%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Crystal Sausage",
        "key": "Dmg, Healing, SP Regen",
        "icon": "◆",
        "description": "Consume 1 stack of [Sausage] to conjure a Crystal Sausage. If in a Fight, gain 600 stacks of [Soul Power Storage] upon release. After casting the Ultimate, a sausage will drop at the target location every 2s, restoring 1+1.4% of your max HP and dealing 5+35.0% ATK as Dmg to hit enemies. Sausages continue to drop for 10s. If there's no [Sausage] when casting the Ultimate, you will not gain [Soul Power Storage].",
        "cost": 2,
        "cd": 30,
        "haloTitle": "God of Stars Sausage",
        "haloDescription": "Shining like a Crystal Sausage, even the God of Stars covets it. After the Sausage Spirit unleashes its Ultimate, the Spirimaster gains 25.0% Ultimate Dmg's [Final Dmg Up], Duration 25s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "For each Sausage dropped, if in Fight and possessing [Sausage], entire team Ultimate Dmg Up 2.5%, max 25% increase, Duration 30s, effect refreshes Duration when stacking.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Sausage drop interval reduced to 1s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "For each Sausage dropped, if in Fight and possessing [Sausage], entire team Ultimate Dmg Up 5.0%, max 50% increase, Duration 30s, effect refreshes Duration when stacking.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Crystal Sausage grants an additional 200 stacks of [Soul Power Storage]; if no [Sausage] is present when unleashing the Ultimate, gain 3.7% [Support Dmg Bonus] for 15s, and the next Normal will be replaced by [Showtime].",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Crystal Sausage grants an additional 350 stacks of [Soul Power Storage]; when unleashing the Ultimate, regardless of [Sausage] presence, gain 5.0% [Support Dmg Bonus] for 15s, and directly receive [Showtime] Buff effect.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Pink Sausage",
        "key": "Dmg, SP Regen, Dmg Up",
        "icon": "◆",
        "description": "Wield the Pink Sausage to inflict 12+79.3% Dmg to nearby enemies and restore 150 Soul Power. In Fight, gain 7.5% [Support Dmg Bonus] for a Duration of 16s. Within 3s after casting Skill, using Normal directly unleashes the final stage.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Within 3s after releasing Skill, follow-up Normal will unleash [Performance Moment].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Gain an additional 50 Soul Power upon unleashing Skill.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When possessing [Sausage], Skill's [Support Dmg Bonus] effect increases to 15.0%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When possessing [Sausage], Skill's [Support Dmg Bonus] effect increases to 22.5%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When possessing [Sausage], Skill gains [Support Dmg Bonus] effect increased to 27.5%; gain an additional 200 Soul Power upon Skill release.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Juicy Sausage",
        "key": "Dmg, SP Regen, Dmg Up",
        "icon": "◆",
        "description": "Throw an enlarged Sausage to inflict 14+86.3% ATK as Dmg on enemies and restore 150 Soul Power. In Fight, gain 5.0% [Support Dmg Bonus], effect Duration 30s. Within 3s after Skill release, using Normal directly triggers [Showtime].",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Gain an additional 50 Soul Power upon unleashing Skill.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After a Skill hits an enemy, it applies [Hot Pursuit] for 15s. Any Spirit's Ultimate deals increased Ultimate Dmg to enemies with [Hot Pursuit] by 7.5%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When possessing [Sausage], Skill's [Support Dmg Bonus] effect increases to 10.0%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Any Spirit's Ultimate Dmg to enemies with [Hot Pursuit] increases to 15.0%. When Skill gains [Support Dmg Bonus], every 6% Crit Rate of Sausage Spirit further increases all Spirits' 0.6% [Support Dmg Bonus], up to a maximum increase of 6.0% [Support Dmg Bonus].",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When possessing [Sausage], Skill gains [Support Dmg Bonus] effect increased to 32.5%; gain an additional 150 Soul Power upon Skill release.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Mini Recovery Sausage",
        "key": "SP Regen, Dmg Up",
        "icon": "◆",
        "description": "Gain 100 Soul Power each time you consume [Sausage]. (If Soul Power overflows, you'll receive [Extremity Sausage] or [Soul Power Storage] based on your chosen Ultimate) With full Soul Power, any Spirit unleashing an Ultimate grants [Roasted Sausage], increasing [Support Dmg Bonus] by 2.0% per stack, up to 3 stacks, lasting 30s. At 3 stacks, all Spirits gain a continuous Strong Super Armor effect for 10s. (In PVP, Strong Super Armor lasts 5s) Within 3s after using a Switch Skill, using Normal directly triggers [Showtime].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Support Dmg Bonus] provided by [Roasted Sausage] per stack increased to 4.0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Gain an additional 100 Soul Power when consuming [Sausage]. The effect activates once every 360s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Roasted Sausage] limit increased to 6 stacks. Gain 3 extra stacks of [Roasted Sausage] when consuming [Sausage]. The effect activates once every 360s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Roasted Sausage] increases [Support Dmg Bonus] per stack to 6.0%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When using the Sausage Initiative Skill, if HP percentage is below 60%, restore 37+64.6% of max HP; [Roasted Sausage] increases [Support Dmg Bonus] per stack to 10.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Recovery Sausage",
        "key": "SP Regen, Dmg Up",
        "icon": "◆",
        "description": "Gain 100 Soul Power and 1 stack of [Roasted Sausage] each time you consume [Sausage]. (If Soul Power overflows, you'll receive [Extremity Sausage] or [Soul Power Storage] based on your chosen Ultimate) With full Soul Power, any Spirit unleashing Ultimate grants [Roasted Sausage], increasing [Support Dmg Bonus] by 1.5% per stack, up to 6 stacks, lasting 30s. At 3 stacks, all Spirits gain a continuous Strong Super Armor effect for 10s. (In PVP, Strong Super Armor lasts 5s) Within 3s after using a Switch Skill, using Normal directly triggers [Showtime].",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Support Dmg Bonus] provided by [Roasted Sausage] per stack increased to 3.0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Gain an additional 100 Soul Power and 3 stacks of [Roasted Sausage] when consuming [Sausage]. The effect activates once every 360s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After the Sausage Spirit unleashes its Ultimate, the Dmg Up of the next 3 ultimates from any Spirit is increased by 15.0%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Roasted Sausage] increases the [Support Dmg Bonus] effect per stack to 5.0%. [Roasted Sausage] at full stacks grants an additional [Support Dmg Bonus] effect of 0.6% for every 6% Crit Rate of the Sausage Spirit, up to a maximum of 6.0% [Support Dmg Bonus] effect, which is removed when [Roasted Sausage] duration ends.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Consuming [Sausage] grants an additional 250 Soul Power and 3 stacks of [Roasted Sausage], effective once every 360s; [Roasted Sausage] increases the [Support Dmg Bonus] effect per stack to 9.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "galewolf",
    "title": "Gale Wolf",
    "subtitle": "Moonlight Wolf Howl - Wind Climb Shadow Leap - Deathwind Wolf Howl",
    "image": "images/personnages/galewolf/galewolf-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Bruiser",
      "Main DPS"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Fieng Xiaotian"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Bruiser"
      },
      {
        "label": "Role",
        "value": "Main DPS"
      },
      {
        "label": "Mechanic",
        "value": "Severe Wound"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Gale Wolf is a whirlwind of claws and gusts, hitting fast and stacking [Severe Wound] on enemies through nearly every Skill. His Ultimates aren't shy either, both explode on impact and immediately pile on stacks of Severe Wound, setting up huge follow-up damage from anything else that hits the wound afterward.\n\nHis core resource is [Gale], gained from his enhanced dash ([Gale Flurry]) and boosting Strike Damage the more stacks he's built up. His passives also introduce off-field mechanics through [Demon Wolf Hunt] and [Tornado Blade], letting him keep dishing out Severe Wound stacks and bonus attacks even when he's not the active Spirit on screen.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/galewolf/background/galewolf-background.png",
    "mechanics": [
      "Severe Wound"
    ],
    "normalAttack": {
      "title": "Windfist",
      "key": "Dmg",
      "icon": "◆",
      "description": "Perform up to four Combo punches and kicks on the target, dealing a total of 38+286.1% ATK as Normal Dmg."
    },
    "initiative": {
      "title": "Hurricane Roll",
      "key": "Dmg",
      "icon": "◆",
      "description": "Unfurl wings to spin and attack, dealing 21+137.3% ATK as Dmg to nearby enemies."
    },
    "ultimate": {
      "skill1": {
        "title": "Demon Wolf Storm",
        "key": "Dmg",
        "icon": "◆",
        "description": "Summon Gale Wolf, transforming into two wolf-headed whirlwinds, spiraling and colliding with the ground to trigger an explosion, dealing 158+1088.8% ATK as Dmg over a wide area. The explosion applies 3 stacks of [Severe Wound] upon hitting the target.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After unleashing the Ultimate, Normal is replaced by [Gale Wolf's Thirty-Six Slashes] rapidly spinning forward with wings extended, up to 4 hits, increasing Dmg by 30% against Severe Wound targets. [Gale Wolf's Thirty-Six Slashes] grants Super Armor and Dmg↓ during the action.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each hit of [Gale Wolf's Thirty-Six Slashes] increases the next Dmg by 7.5% Ultimate Dmg, stacking up to 30 times.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Gale Wolf's Thirty-Six Slashes] Refreshes [Dual Wolf Possession] Skill cooldown after the final hit of the fourth segment.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Gale Wolf's Thirty-Six Slashes] gains a 25% Strike Dmg Bonus per [Gale] stack.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Gale Wolf's Thirty-Six Slashes] gains a 35% Strike Dmg Bonus per [Gale] stack.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Wind Fury",
        "key": "Dmg",
        "icon": "◆",
        "description": "Summon the Gale Wolf to deliver a powerful punch to the ground, creating a fierce whirlwind and an explosion that spreads, dealing wide-range Dmg of 104+725.2% ATK. The explosion applies 10 stacks of [Severe Wound] upon hitting the target.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After unleashing the Ultimate, gain [Demon Wolf Hunt]. When the Twin-Headed Wolf is off-field, each application of [Severe Wound] summons a Demon Wolf to lock onto a target and attack, dealing 17+119.5% ATK as Dmg and inflicting an independent Severe Wound. Can summon at most once every 5s, [Demon Wolf Hunt] Duration 15s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Targets hit by the Demon Wolf's attack gain [Severe Wound Amplified], stacking up to 5 layers, Duration 30s. Each layer increases Severe Wound Dmg by 20%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Demon Wolf Hunt] extended to 25s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Demon Wolf Hunt] minimum summon interval reduced to 3s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Targets hit by the Demon Wolf's attack gain [Severe Wound Amplified], stacking up to 5 layers, Duration 30s, each layer increases Severe Wound Dmg by 30%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Dual Wolf Possession",
        "key": "Dmg",
        "icon": "◆",
        "description": "Summon a Phantom Demon Wolf to deliver a powerful Rising Dragon Punch, dealing 72+506.0% ATK as Dmg. Upon the first-stage hit, apply 2 stacks of [Severe Wound] to the target.",
        "cost": 0,
        "cd": 25,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Aerial Normal Dmg following this Skill further increases.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Targets hit by this skill take 40% more Ultimate Dmg from [Gale Wolf's Thirty-Six Slashes] for 10s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "This skill grants a 33% Strike Dmg Bonus per stack of [Gale].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Raging Wind] boosts Strike Dmg by 80% against Severe Wound targets.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Raging Wind] grants a 100% Strike Dmg Bonus against Severe Wound targets.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Wind Blade Formation",
        "key": "Dmg",
        "icon": "◆",
        "description": "Unfurl wings to summon two [Whirling Wind Blades], then hurl them at the current target. Upon impact, the Whirling Wind Blades continue to spin and slice at the target, dealing 100+697.2% ATK as Dmg. Each hit adds 1 stack of [Severe Wound], up to 10 stacks.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Whirling Wind Blade] each hit increases the next Dmg by 4%, up to 10 stacks.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Whirling Wind Blade] deals additional Dmg upon completion.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Each time Gale Wolf Initiative Skill is used, this Skill's Dmg is increased by 30% for 10s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "This Skill gains a 50% Strike Dmg Bonus.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Wind Blade Formation launches two additional [Whirling Wind Blades].",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Swift Gale Dash",
        "key": "Dmg",
        "icon": "◆",
        "description": "After entering the Fight, Initiative is replaced with [Gale Flurry]. [Gale Flurry] grants 1 stack of [Gale] with each use. [Gale Flurry]: Unfurl wings to become a gale, dashing through enemies at high speed, dealing a total of 27+161.3% ATK as Dmg, with a cooldown of 30s. [Gale Flurry] reduces the remaining cooldowns of [Dual Wolf Possession] and [Demon Wolf Storm] by 5s after the final hit lands.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Upon activating [Gale Flurry], gain [Raging Wind] for a duration of 15s. During this time, Gale Wolf inflicts [Severe Wound] Dmg and deals an additional instance of Dmg.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Raging Wind] Duration extended to 20s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Gale Flurry] inflicts up to 10 stacks of [Severe Wound] on hit targets.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[Gale Flurry] gains increased Strike Dmg based on [Gale] stacks, each stack 25.0%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Raging Wind] grants Strong Super Armor and movement speed bonus. During [Raging Wind], each kill extends [Raging Wind] Duration by 3s. If only one enemy is nearby when gaining [Raging Wind], extend [Raging Wind] Duration by 10s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Tornado Blade",
        "key": "Dmg",
        "icon": "◆",
        "description": "When Gale Wolf is off-field, after the on-field Spirit inflicts 60 instances of [Severe Wound] Dmg, Gale Wolf's Initiative Skill cooldown is reduced by 20s, and the next use will be replaced with [Gale Blade]. [Gale Blade] grants 1 stack of [Demon Wolf Frenzy] with each use. [Gale Blade]: Feng Xiaotian swings his wings, swiftly releasing multiple wind blades at the target, dealing a total of 24+176.4% ATK as Dmg, with a cooldown of 60s.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Upon starting using [Gale Break Blade], apply [Gale] to self for 15s, increasing all Spirit Severe Wound Dmg by 50%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "During [Gale] Duration, enhance Halo 4 [Wind Fury] Dmg by 20%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Reduce Gale Wolf Initiative Skill by 30s after achieving the goal.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "During [Gale] Duration, enhance Halo 4 [Wind Fury] Strike Dmg by 80%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Gale] Duration extended to 20s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "zenithcauldron",
    "title": "Zenith Cauldron",
    "subtitle": "Spacetime Domain - Eternal Twins - Stabilize the Land",
    "image": "images/personnages/zenithcauldron/zenithcauldron-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Support"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Nangong Chiyu"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Support"
      },
      {
        "label": "Role",
        "value": "Healing, Dmg Up"
      },
      {
        "label": "Mechanic",
        "value": "Pill-crafting"
      },
      {
        "label": "Acquisition",
        "value": "Regular Summon"
      }
    ],
    "description": "Nangong Twins — Support (Alchemist Spirit)\n\nNangong Twins are a two-sister healer duo running an entire pill-crafting economy on the battlefield. Their whole kit revolves around dropping and collecting various [Elixir] types (Blue, Purple, Orange, Great Golden), each granting different amounts of healing and stacking [Pill Chain], a buff that boosts [Support Dmg Bonus] the more pills get picked up.\n\nTheir Ultimates split by sister, using them switches which twin is active, so you get access to different flavors of survivability. One grants a long healing-over-time buff with Control Immunity and Super Armor, while the other summons a [Nine-Turn Revival Pill], essentially a self-revive safety net that can trigger Invincibility on activation.\n\nTheir passives leave a Cauldron on the field that charges up from combat and eventually cranks out bonus pills, plus one variant can even straight-up execute weak enemies and turn them into more elixirs. It's basically a full alchemy shop running in the middle of a fight.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/zenithcauldron/background/zenithcauldron-background.png",
    "normalAttack": {
      "title": "Terror Soul",
      "key": "Dmg",
      "icon": "◆",
      "description": "Attack enemies with the White Jade Cauldron. The sisters have different attack styles. The younger sister inflicts total Dmg of 6+90.7%ATK. The elder sister inflicts total Dmg of 23+183.9%ATK."
    },
    "initiative": {
      "title": "Pill Chain",
      "key": "Dmg, Dmg↓",
      "icon": "◆",
      "description": "Raise the White Jade Cauldron to cast a spell, granting a Shield equal to 10% of the Jade Cauldron's max HP and restoring 100 Sp. Picking up pills restores HP and grants Dmg Up: Blue Pill: Minor Healing and 1 stack of [Pill Chain]. Purple Pill: Moderate Healing and 2 stacks of [Pill Chain]. Orange Pill: Major Healing and 3 stacks of [Pill Chain]. Great Golden Pill: Grants Moderate Healing, [Golden Pill], and restores 100 Sp. [Pill Chain]: Each stack increases [Support Dmg Bonus] by 1%, decreases by 1 stack every 5 seconds, up to 15 stacks. [Golden Pill]: Coexists with [Pill Chain] Dmg Up, each stack provides 3% [Support Dmg Bonus], Duration 20 seconds."
    },
    "ultimate": {
      "skill1": {
        "title": "Forget Worry Technique",
        "key": "Dmg Up, SP Regen",
        "icon": "◆",
        "description": "The sisters cast the White Jade Cauldron together, granting themselves a 10s Buff of Control Immunity and Strong Super Armor, while continuously restoring HP during the Buff, restoring 4+7.0% HP per second. After releasing the second stage of the ultimate skill, switch the current character of the Nangong Twins. (Control Immunity effect removed in PVP.)",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Upon skill activation, gain an additional Healing effect based on the Zenith Cauldron's max HP.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After pill crafting completion, the next Ultimate skill of the Zenith Cauldron will consume 100 less Soul Power.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "During the Zenith Cauldron's Duration, each time Dmg is taken, it provides 5 energy to the stationed cauldron.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "The Ultimate's Restore Duration extends to 15s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Extend the Duration of the ultimate's Restore effect to 20s, providing 5% Support Dmg Bonus during this time.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Nine-Turn Revival Pill",
        "key": "Dmg Up, SP Regen",
        "icon": "◆",
        "description": "The sister retrieves the Nine-Turn Revival Pill from the cauldron, instantly restoring 20+35.0% HP, and applies the [Nine-Turn Revival Pill] status to herself. After releasing the second-stage ultimate, switches the current character of the Nangong Twins.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Enhance the Restore effect when triggering the revival effect of [Revival Pill]. Restore 70% of the Zenith Cauldron's max HP.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After pill crafting completion, the next Ultimate skill of the Zenith Cauldron will consume 100 less Soul Power.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Gain an additional Shield effect when triggering the revival effect of [Revival Pill].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When triggering the [Revival Pill]'s revival effect, gain an additional 3s [Invincibility] state.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Extend the [Invincibility] state duration to 6s when triggering the [Revival Pill] revival effect.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Elixir Vitality",
        "key": "Shield, SP Regen",
        "icon": "◆",
        "description": "Summon the White Jade Cauldron to release elixirs. When the younger sister uses this skill, a [Great Golden Elixir] is guaranteed to drop. When the elder sister uses this skill, 3 randomly Quality [Normal Elixir] drop. After the skill is used, immediately restore 6+10.5% HP and 100 Soul Power.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Unlock second-stage Skill effect, collecting all pills on the field upon release.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After pill crafting completion, gain 10% Dmg↓ effect for 10s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After pill crafting completion, gain an additional [Normal Pill].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After pill crafting completion, gain 5% Dmg Up for 10s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After pill crafting completion, increase Dmg Up effect to 15% for 15s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Completed Sky Mending",
        "key": "Shield, SP Regen",
        "icon": "◆",
        "description": "Summon the Jade Cauldron to draw in front enemies. Non-[Boss] and non-[Elite] Monsters with HP below 30% are directly absorbed and Executed, transforming into pills. After casting, 3 base [Normal Elixir] are generated. Each [Minion] refined grants 1 additional [Normal Elixir]. When the sister casts this skill, it deals higher Dmg, while the elder sister grants an additional Restore.",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Unlock second-stage Skill effect, collecting all pills on the field upon release.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Skill can Execute [Elite] Monsters below 10% HP. Successful Execute increases the Cauldron's charge effect by 10%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Gain two additional [Normal Pills] after pill crafting completion.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Successfully Executing an [Elite] Monster drops an additional [Great Pill].",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Max stacks of [Great Elixir] +2, Duration extended to 30s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Transformation",
        "key": "Dmg Up",
        "icon": "◆",
        "description": "[Great Golden Elixir] and [Normal Elixir] enhance 100% Healing effect. After using the Skill, leave the Jade Cauldron on the field. When a player defeats a [non-boss] target or deals Dmg to a [boss] target, it charges the Jade Cauldron. When the elixir charging is full or time ends, obtain a different quantity of [Normal Elixir] based on the Jade Cauldron's charging stage.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "God of Stars White Jade Cauldron Talent",
        "haloDescription": "When the divine stars enter the cauldron, the heavenly way follows. Upon reaching 10 or more layers of [Pill Chain], gain an additional [Final Dmg Up] by 8%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Enhance the cauldron charge effect gained from killing Monsters.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Gain 20% base charge when the on-field Cauldron is generated.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Generate an additional [Great Pill] when the on-field Cauldron's pill crafting charge is full.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Increase the chance of obtaining high-Quality pills.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Each stack of [Pill Chain] grants a Support Dmg Bonus of 1.5%",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Fill the Gap",
        "key": "Dmg Up",
        "icon": "◆",
        "description": "After using the Skill, the Zenith Cauldron remains on the field. When a player kills a [non-boss] target or deals Dmg to a [boss] target, it charges the Zenith Cauldron. While the Zenith Cauldron is present, it deals 5+35.0% ATK as Dmg to nearby targets every 6 seconds. Upon hitting a target, it charges the Zenith Cauldron. Additionally, it restores 1+2.1% of the Zenith Cauldron's max HP to allied units within range every second. When pill crafting is fully charged or time ends, different quantities of [Normal Pills] are obtained based on the Zenith Cauldron's charge stage.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "God of Stars White Jade Cauldron Talent",
        "haloDescription": "Oracle's Cauldron Pattern, divine will grants you victory. [Great Pill] Soul Power Restore effect increases by 50 points. During the Great Pill's Dmg Up Duration, gain an additional [Final Dmg Up] by 10%.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When the on-field Cauldron is present, nearby allies gain 10% Dmg↓ effect.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Generate an additional [Great Pill] when the on-field Cauldron's pill crafting charge is full.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Gain 30% base charge when the on-field Cauldron is generated.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After pill crafting is completed, the Restore aura can continue to exist for 10s.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Gain an additional 7% Support Dmg Bonus when within the aura.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": [
      {
        "id": "s1786323789823933",
        "name": "Ocean Moon's Whisper",
        "image": "images/personnages/zenithcauldron/skins/zenithcauldron-ocean-moon-s-whisper.png",
        "description": "Ocean moon reflects in pairs, sweet frost hidden at fingertips."
      }
    ]
  },
  {
    "id": "swift",
    "title": "Swift",
    "subtitle": "Nightfall Strike - Speed Battle - Unfulfilled Promise",
    "image": "images/personnages/swift/swift-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Agility",
      "Additional Attack"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Bai Chenxiang"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Agility"
      },
      {
        "label": "Role",
        "value": "Additional Attack"
      },
      {
        "label": "Mechanic",
        "value": "Laceration"
      },
      {
        "label": "Acquisition",
        "value": "Event Reward"
      }
    ],
    "description": "Swallow Spirit fights with a flock's worth of speed, summoning [Swallow/Swift Clones] constantly to auto-attack alongside their own hits. Their whole kit revolves around stacking [Laceration] on enemies through nearly every Skill and Ultimate, then amplifying it further with bonus effects like [Trimmed Feather], which scales damage based on how many Laceration stacks the target is already carrying.\n\nTheir core resource, [Spirit Swallow], gets built up passively and consumed to summon more clones or convert into [Swallow Chirping], a team-wide buff boosting movement speed and Laceration damage. So the loop becomes: attack, stack Spirit Swallow, dump it into clones or buffs, repeat, all while enemies get shredded by accumulating Laceration.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/swift/background/swift-background.png",
    "mechanics": [
      "Laceration"
    ],
    "normalAttack": {
      "title": "Swallow Return",
      "key": "Dmg",
      "icon": "◆",
      "description": "Summon swallows for 5 Combo attacks on the target, dealing a total of 60+420.9% ATK as Normal Dmg."
    },
    "initiative": {
      "title": "Swallow Soar",
      "key": "Dmg",
      "icon": "◆",
      "description": "Ascend and summon a swirling Swift formation, after a brief moment, the flock soars upward, dealing 20 +136.5% ATK Dmg to enemies in range. If passive is activated, after casting this Initiative, the Character gains 3 stacks of [Spirit Swallow]. Swift fly speed increases by 20%."
    },
    "ultimate": {
      "skill1": {
        "title": "Swift Swallow Rain Dance",
        "key": "Dmg",
        "icon": "◆",
        "description": "Soar through the sky, then split into 3 phantoms to Dive at the target, dealing a total of 144 +996.0% ATK as Ultimate Dmg and applying [Trimmed Feather] to hit enemies. Each time the target takes [Spirit Swallow] Dmg, they take additional Dmg equal to their current [Laceration] stacks multiplied by 0 +1.3% ATK as Dmg, up to 50 stacks of [Laceration], Duration 10s. If the passive is activated, the Character gains 6 stacks of [Spirit Swallow] after using this Ultimate.",
        "cost": 3,
        "cd": 30,
        "haloTitle": "Wind God Swallow",
        "haloDescription": "The deity praises the swift's wind-following form, granting its phantom divine power. [Trimmed Feather] gain [Final Dmg Up] by 70.0%. When Swift releases its ultimate, all Spirits gain [Final Dmg Up] 10.0%, Duration 20s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Ultimate has a 50% chance to apply 1 layer of [Laceration] to enemies when dealing Dmg.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Trimmed Feather] Dmg Up 100.0%, Duration increased by 100%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Ultimate Strike Dmg Up 60.0%.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Ultimate has a 100% chance to apply 1 layer of [Laceration] to enemies when dealing Dmg.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Trimmed Feather] calculates up to 65 stacks of [Laceration] when dealing extra Dmg.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Phantom Swallow Form",
        "key": "Dmg",
        "icon": "◆",
        "description": "Spread wings, summon 2 [Swift Clone], then Dive towards the target, dealing 125 +861.6% ATK as Ultimate Dmg. [Swift Clone] remain on the field and automatically attack enemies, each attack dealing 6 +43.0% ATK as Dmg, disappearing after 8 attacks. If the passive is activated, after casting this Ultimate, the Character gains 6 stacks of [Spirit Swallow].",
        "cost": 3,
        "cd": 30,
        "haloTitle": "Wind God Swallow",
        "haloDescription": "The deity praises the swift's wind-following form, granting its phantom divine power. All [Swift Clone] gain [Final Dmg Up] by 60.0%. When Swift releases its ultimate, all Spirits gain [Final Dmg Up] 10.0%, Duration 20s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "All [Swift Clone] apply 1 stack of [Laceration] when dealing Dmg.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Ultimate summons 1 additional [Swift Clone].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "All [Swift Clone] apply 1 stack of [Laceration] Dmg Up 10.0% to targets when dealing Dmg, up to 15 stacks, Duration 25s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "All [Swift Clone] Strike Dmg Up 60.0%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "All [Swift Clone] apply 2 stacks of [Laceration] to targets when dealing Dmg.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Step Swallow",
        "key": "Dmg",
        "icon": "◆",
        "description": "Swiftly traverse and attack enemies in the forward area, dealing a total of 24 +171.0% ATK as Skill Dmg, then Dive down for an attack, dealing 25 +171.0% ATK as Skill Dmg. If Passive is activated, gain 3 stacks of [Spirit Swallow] after casting the Skill.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each stage of Skill hit has a 50% chance to inflict 1 stack of [Laceration] on the target.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Skill Dmg Up 15.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Each stage of Skill hit has a 100% chance to inflict 1 stack of [Laceration] on the target.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Skill deals an additional 3 instances of Skill Dmg totaling 12 +85.5% ATK.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill can be stored up to 2 uses, Strike Dmg Up by 60.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Spring Swallows",
        "key": "Dmg",
        "icon": "◆",
        "description": "Spin backward and Jump, summoning 5 swallows to charge forward, dealing a total of 20 +136.5% ATK Skill Dmg. If passive is activated, the Character gains 3 stacks of [Spirit Swallow] after casting this Skill.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Skill's summoned Swifts have a 50% chance to apply 1 stack of [Laceration] when hitting a target.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Increases the number of summoned Swifts by 2.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After casting this Skill, all Spirits' [Laceration] Dmg Up by 50.0% for 15s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "After casting this Skill, Swift's Normal Strike Dmg Up by 60.0% for 5s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill summons a swift, applying 1 stack of [Laceration] to the target with a 100% chance upon hit; after casting this Skill, the [Laceration] Dmg Up effect for all Spirits increases to 100.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Swallow Call",
        "key": "Dmg",
        "icon": "◆",
        "description": "When any Spirit uses a Skill, if holding [Spirit Swallow] with more than 3 stacks, consume 3 stacks of [Spirit Swallow]. For each stack of [Spirit Swallow] consumed, gain one stack of [Swallow Chirping], increasing all Spirits' movement speed by 1.0% and Laceration Dmg Up by 6.0%, Duration 20 seconds, stacking up to 10 times.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "[Swallow Chirping] stack limit +10.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each stack of [Swallow Chirping] grants all Spirits additional 4.0% [Laceration] Dmg Up and 0.7% Skill Crit Dmg Up.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Spirit Swallow] Dmg Up 20.0%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each [Spirit Swallow] consumed has a 40% chance to gain 1 extra [Swallow Chirping].",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Spirit Swallow] Dmg Up by an additional 10.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Swallow Summon",
        "key": "Dmg",
        "icon": "◆",
        "description": "This Spirit consumes up to 2 stacks of [Spirit Swallow] when each Normal first hits an enemy. for every 12 stacks of [Spirit Swallow] consumed, summon 1 [Swallow Clone] near the target. [Swallow Clone] remains on the field and automatically attacks enemies, dealing 10 +67.0% ATK Dmg per attack, disappearing after 8 attacks.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When the final Normal of this Spirit first hits an enemy, if [Spirit Swallow] stacks are sufficient, consume 2 additional stacks of [Spirit Swallow].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each [Swift Clone] on the field increases the Spirit's Dmg by 2.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "All [Swift Clone] can attack 4 additional times.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each [Swift Clone] on the field increases the Spirit's Strike Dmg by 7.5%.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "The number of passively summoned [Swift Clone] increases by 1.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "haotianhammer",
    "title": "Haotian Hammer",
    "subtitle": "The Three-Five Duo - Shadow of the Past - World-Shaking Twins",
    "image": "images/personnages/haotianhammer/haotianhammer-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Bruiser",
      "Main DPS"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Tang San"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Bruiser"
      },
      {
        "label": "Role",
        "value": "Main DPS"
      },
      {
        "label": "Mechanic",
        "value": "Vibration"
      },
      {
        "label": "Acquisition",
        "value": "Mall, Game Reward"
      }
    ],
    "description": "Haotian Hammer swings hard and builds a two-tier stacking system on enemies: [Shock] stacks first, then convert into [Vibration], a higher-tier status that both amplifies future Shock application and triggers bonus [Aftershock] hits every time it's consumed. So the loop isn't just \"hit hard,\" it's \"hit hard, then hit again for free because of the last hit.\"\n\nTheir Ultimate (Cyclone Hammer) unlocks [Haotian Unmatched], a limited-use but powerful state boosting overall Ultimate, Skill, and Normal Attack damage significantly, alongside transforming their whole moveset into a faster, harder-hitting combo chain called [Cyclone Hammer]. Every Skill also scales with Soul Power consumed, so spending more resources upfront translates directly into bigger Ultimate damage.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/haotianhammer/background/haotianhammer-background.png",
    "mechanics": [
      "Vibration"
    ],
    "normalAttack": {
      "title": "Tatian",
      "key": "Dmg",
      "icon": "◆",
      "description": "Haotian's Might resembles the wrath of a Celestial, shattering stones and piercing clouds, as it swings Haotian Hammer forward in a Combo of multiple attacks on the target, dealing a total of 51+367.7% ATK as Dmg."
    },
    "initiative": {
      "title": "Falling Thunder Hammer",
      "key": "Dmg, Shock, Vibration",
      "icon": "◆",
      "description": "Haotian Hammer becomes a phantom to lock the target, dealing 12+56.0% ATK as Dmg and leaping into the air to launch an offensive, then dealing 12+84.0% ATK as area Dmg. This skill applies 1 stack of [Shock] effect to the enemy."
    },
    "ultimate": {
      "skill1": {
        "title": "Titan's Hammer",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Haotian Hammer channels the might of Divine Thunder, concentrating the power of the Thunder of Evil Break on the hammer, capable of dispelling darkness across realms with a single strike. Haotian Hammer transforms into a divine weapon, descending from the heavens to strike the target, then releases Divine Thunder in the target area, dealing a total Dmg of 174+1213.3% ATK to enemies it touches. The Ultimate applies 3 stacks of [Shock] to enemies under [Vibration], and 1 stack of [Shock] to those not under [Vibration].",
        "cost": 3,
        "cd": 30,
        "haloTitle": "Asura Haotian",
        "haloDescription": "Haotian Hammer's Ultimate adds 2 extra lightning ATK for each [Vibration] target hit, dealing 12+90.9% ATK as Dmg per lightning, up to 10 lightning strikes.\n\nIf the Ultimate hits only one target and it's a [Vibration] Elite or Boss, 8 extra lightning ATK are added directly.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "If the ultimate hits an enemy under [Vibration], apply 5 additional layers of [Shock].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Under [Haotian Unmatched], gain Dmg Up for ultimate 100.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "The ultimate consumes up to 600 Soul Power, enhancing its damage based on the consumed amount, providing up to an additional 48% Dmg Bonus, with 8% per 100 Soul Power.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "The ultimate consumes up to 600 Soul Power, enhancing its Dmg based on the consumed amount, providing up to an additional 96% Dmg Bonus, with 16% per 100 Soul Power.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "The Ultimate consumes up to 600 Soul Power, enhancing its Dmg based on the consumed amount, providing up to an additional 210% Dmg Bonus, with 35% per 100 Soul Power.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Earthshatter",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Haotian Hammer transforms into a colossal force descending from the sky, crushing all obstacles in its path. It delivers 4 powerful Wind Pressure hits to enemies, each hit dealing 17+118.3% ATK as Dmg, and concludes with an Execute Earthshatter, dealing 103+710.0% ATK as Dmg to the target. The Ultimate applies 3 stacks of [Shock] to enemies under [Vibration], and 1 stack of [Shock] to those not under [Vibration].",
        "cost": 3,
        "cd": 30,
        "haloTitle": "Asura Haotian",
        "haloDescription": "The Ultimate's final hit on a [Vibration] target extends [Vibration] by 3s. Within 10s after casting the Ultimate, [Aftershock] is replaced with [Blast Aftershock], dealing an additional 17+118.3% ATK as Dmg each time.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each stage of the ultimate's multi-stage Wind Pressure Dmg inflicts 1 layer of [Shock] on [Vibration] enemies.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Under [Haotian Unmatched], for each layer of [Shock] on the hit enemy, the Ultimate Dmg increases by 4%; if the hit enemy is under [Vibration], the Ultimate Dmg increases by 60%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After the Ultimate ends, each trigger of [Aftershock] increases the next [Aftershock] Dmg by 3%, up to 15%, this effect Duration 10s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Ultimate Dmg increases based on Soul Power when cast, providing up to an additional 96% Dmg Bonus, with 16% per 100 Soul Power.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "When the Ultimate is activated, its Dmg is enhanced based on Soul Power, providing up to an additional 150% Dmg Bonus, with 25% per 100 Soul Power. Each stage of the Ultimate's multi-stage Wind Pressure Dmg inflicts 3 layers of [Shock] on [Vibration] enemies.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Empyrean Might",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Haotian Hammer, with its supreme power, stirs the earth, unleashing sharp spikes in a fan-shaped area ahead, repelling all enemies within and dealing a total of 150+1033.3% ATK as Dmg. This Skill applies 3 stacks of [Shock] to enemies under [Vibration], and 1 stack of [Shock] to those not under [Vibration]. After using this Skill, Normal attacks start from the third hit.",
        "cost": 0,
        "cd": 25,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Skill Dmg to enemies under [Vibration] increased by 15.0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Inflict 5 additional stacks of [Shock] on enemies under [Vibration].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When the next Normal after Skill hits enemies under [Vibration], inflict 5 additional stacks of [Shock].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Trigger an extra, stronger Earthquake, inflicting 3 additional stack of [Shock] on enemies under [Vibration].",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Skill Dmg to enemies under [Vibration] increased by 50.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Haotian Nine Extremes",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "The Haotian Hammer absorbs the power of the Halo and releases a battle energy wave in a straight line ahead. This Skill can be released in 3 stages, dealing up to a total of 90+583.3% ATK Dmg to enemies in the straight line range ahead. Each stage applies 1 stack of [Shock] to hit enemies. After each stage of this Skill, Normal attacks start from the third hit.",
        "cost": 0,
        "cd": 15,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each skill stage released increases subsequent Normal Strike Dmg by 22.5% for 3s, non-stackable.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Each skill stage inflicts 2 additional stacks of [Shock] on enemies under [Vibration].",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Each skill stage released increases subsequent Normal Strike Dmg by 45.0% for 3s, non-stackable.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Each skill stage released grants 1 stack of 10.0% Dmg Bonus for 10s, stackable up to 3 times.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After each stage of the skill, Normals start from the last attack. Each skill stage inflicts 5 additional stacks of [Shock] on [Vibration] enemies.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Cyclone Hammer",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Cyclone Hammer focuses power on a single point, overwhelming enemies with relentless attacks. Ultimate activates [Cyclone Hammer], changing Normal and Skill forms. Exit [Cyclone Hammer] after Skill Combo. [Cyclone Hammer] lasts 9 seconds. Ultimate activates [Haotian Unmatched], Haotian Hammer's Ultimate Dmg Up by 60.0%, [Cyclone Hammer] Skill and Normal Dmg Up by 50.0%, activatable every 360 seconds. [Cyclone Hammer]: During this time, Normal changes to Hammer Frenzy, dealing a total of 4-stage 22+153.4% ATK as Passive Skill Dmg. Each hit inflicts 1 [Shock] stack on [Vibration] enemies. After 4-stage Normal hits, it directly connects to 3-stage Normal for a fast Combo.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "In [Cyclone Hammer] form, after 4 Normal hits, the next Skill is enhanced, and using the enhanced Skill deals an additional 8 stacks of [Shock] to [Vibration] enemies.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[Cyclone Hammer] grants Strong Super Armor and Dmg Reduction 30.0%, and after each Skill release, the next 4 Normals deal an additional 2 stacks of [Shock] to [Vibration] enemies.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Cyclone Hammer] form increases Skill and Normal Strike Dmg by an additional 150.0%. This effect has a cooldown of 360s. [Cyclone Hammer] first Skill hit on [Vibration] enemies extends [Vibration] by 3s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "In [Cyclone Hammer] form, after releasing the third stage of Skill, an additional powerful attack is unleashed (this attack is Invincible and cannot be interrupted), dealing high Dmg and applying the same number of [Shock] stacks to [Vibration] enemies.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Under [Haotian Unmatched], Haotian Hammer Ultimate Dmg increases to 120.0%, and [Cyclone Hammer] Skill and Normal Dmg increases to 100.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Aftershock",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Each time Haotian Hammer consumes [Shock] to trigger [Vibration], it generates one [Aftershock], dealing additional Dmg to nearby enemies equal to 11+75.0% of ATK. The more [Shock] stacks consumed by this [Aftershock], the higher the Dmg dealt. If a single attack hits multiple targets that can trigger [Aftershock], only one [Aftershock] will occur. Ultimate activates [Haotian Unmatched], increasing Ultimate Dmg Up by 40.0%, and reducing Ultimate cooldown by 2s after each [Aftershock] trigger, up to a maximum of 20s cooldown reduction. Can be activated once every 360 seconds.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each stage of Normal Attack applies 1 layer of [Shock] effect to enemies under the [Vibration] effect, triggering [Aftershock] for additional Dmg.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When [Aftershock] triggers, if no other enemies are in range, 50% chance to trigger [Aftershock] again.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "[Aftershock] Dmg increases by 70.0%.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When [Quake] triggers, if no other enemies are in range, 100% chance to trigger [Quake] again.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Under [Haotian Unmatched], Ultimate Dmg Up to 80.0%, and Strike Dmg from [Aftershock] increases to 100.0%. The final Normal ATK applies 3 additional layers of [Shock] to enemies under [Vibration].",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": []
  },
  {
    "id": "haotianhammerdeathgod",
    "title": "Haotian Hammer Deathgod",
    "subtitle": "Haotian Legacy - Supreme Artifact Soul - Eternal True Love",
    "image": "images/personnages/haotianhammerdeathgod/haotianhammerdeathgod-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Bruiser",
      "Main DPS"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Tang Hao"
      },
      {
        "label": "Gender",
        "value": "Male"
      },
      {
        "label": "Archetype",
        "value": "Bruiser"
      },
      {
        "label": "Role",
        "value": "Main DPS"
      },
      {
        "label": "Mechanic",
        "value": "Vibration"
      },
      {
        "label": "Acquisition",
        "value": "Event Reward"
      }
    ],
    "description": "Deathgod Haotian Hammer is Haotian Hammer's heavier-hitting cousin, still built around [Shock] and [Vibration], but with an entirely new layer stacked on top depending on which Core Passive you pick. [Sky Shatter Pressure] builds [Sky Shatter] stacks that eventually unlock a devastating airborne finisher, [Haotian Suppression], while [Earth Shake Fury] instead builds [Earthquake] stacks toward its own airborne nuke, [Earth Shake: Great Sumeru Hammer].\n\nBoth passives reward the whole team for triggering Vibration, not just this Spirit, meaning every Spirit's Vibration hits feed the resource generation. The bigger the stacks, the bigger the eventual payoff, and at max investment, both paths unlock rare, hard-hitting finishers like [Extreme·Great Sumeru Hammer] that can only be used once every 360 seconds.\n\nTheir Ultimates hit similarly hard on their own too, Haotian Nine Extremes spins through enemies before hurling the hammer for a second big hit, while Great Sumeru Hammer channels everything into one devastating strike, both scaling harder against Vibration targets.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/haotianhammerdeathgod/background/haotianhammerdeathgod-background.png",
    "mechanics": [
      "Vibration"
    ],
    "normalAttack": {
      "title": "Heavy Hammer",
      "key": "Dmg",
      "icon": "◆",
      "description": "The Haotian Hammer wields immense power, striking foes with fierce force. Perform up to five Normal attacks, dealing a total of 98+661.1% ATK as Normal Dmg. When selecting the core passive [Sky Shatter Pressure], the final Normal Attack adds 5 stacks of [Shock] to enemies in [Vibration]. When selecting the core passive [Earth Shake Fury], the final Normal attack adds 2 stacks of [Shock] to enemies not in [Vibration]."
    },
    "initiative": {
      "title": "Haotian Divine Might",
      "key": "Dmg, Shock, Vibration",
      "icon": "◆",
      "description": "Haotian descends with earth-shaking force, hurling the mighty Haotian Hammer to deal 5+31.6% ATK as Dmg to surrounding enemies, then swiftly spins on the ground, dealing up to 47.5% ATK as Dmg."
    },
    "ultimate": {
      "skill1": {
        "title": "Haotian Nine Extremes",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Unstoppable force against foes. Continuously spin the Haotian Hammer, sweeping all nearby targets with Bash, dealing 276+1879.7% ATK as Ultimate Dmg, reducing Dmg taken by 25.0% during this time. (50% in PVP) Finally, hurl the Deathgod Haotian Hammer forward with unstoppable force, inflicting 138+939.9% ATK as Ultimate Dmg to a wide area of enemies ahead. (Ultimate cooldown adjusted to 45s in PVP)",
        "cost": 3,
        "cd": 60,
        "haloTitle": "Asura Deathgod Haotian",
        "haloDescription": "With the Godly Hammer, lightning strikes. Asura aids, Haotian ascends. During the spinning Duration, adds an Enemy Cluster effect, accompanied by 10 [Godly Thunder Strikes], dealing up to 120+845.9% ATK as ultimate Dmg to hit targets. When the Deathgod Haotian Hammer is thrown, additional [Godly Thunder Strikes] fall in front, dealing up to 182+1268.8% ATK as Ultimate Dmg to hit targets.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each hit from the Deathgod Haotian Hammer applies 5 layers of [Shock] to [Vibration] targets, triggering up to 3 times.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Ultimate spinning attack applies 3 layer of [Shock] to [Vibration] targets per hit.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After using the Ultimate, the next [Haotian Divine Might] gains [Thunderbolt Sky Shatter], increasing Deathgod Haotian Hammer's passive Dmg Up by 20.0%, Duration 20s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Ultimate deals Ultimate Dmg Up by 60.0% to [Vibration] targets; during Ultimate, Dmg taken is reduced to 50.0% (adjusted to 80% in PVP).",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "During [Thunderbolt Sky Shatter] Duration, gain Strong Super Armor. Deathgod Haotian Hammer's Crit Dmg increases to 54.0%; [Extreme·Great Sumeru Hammer] deals additional Crit Dmg by 18.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Great Sumeru Hammer",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Peerless Haotian, unstoppable by gods or Buddhas. Channel all power into the Deathgod Haotian Hammer to deliver a devastating strike to a wide range of targets, dealing 192+1337.4% ATK as Ultimate Dmg.",
        "cost": 3,
        "cd": 40,
        "haloTitle": "Asura Deathgod Haotian",
        "haloDescription": "Supreme Haotian, unstoppable by gods or buddhas. Channel all power into the Deathgod Haotian Hammer, delivering a devastating strike to a wide range of targets, causing 192+1337.4% ATK as Ultimate Dmg. [Godly Halo]: Haotian's strike, Asura's thunder, the god descends, leaving no life. The devastating strike is accompanied by several [Godly Thunder Strikes] spreading forward, dealing up to 119+802.4% ATK as Ultimate Dmg to hit targets. After releasing the Ultimate, all Spirits' final Dmg Up by 15.0%, Duration 30s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When the Ultimate deals Dmg to targets not under [Vibration], apply 4 layers of [Shock].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After casting Ultimate, when all Spirits deal [Vibration] Dmg, reduce the Deathgod Haotian Hammer's Ultimate cooldown by 2.5s, up to 10s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When the Ultimate deals Dmg, apply 10 layers of [Shock] to enemies not under [Vibration].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Ultimate Dmg Up by 50.0%. Upon hitting an enemy, extend the target's [Vibration] duration by 10s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Ultimate deals additional 80.0% Ultimate Dmg to targets not in [Vibration] state. After obtaining [Sumeru Haotian], the next Deathgod Haotian Hammer Ultimate doesn't consume Soul Power.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Haotian Charge",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Haotian Secret Technique sweeps everything. Throw the Deathgod Haotian Hammer to create a hammer wind tornado, then collide with targets in range to deal up to 126+865.1% ATK as Skill Dmg, and apply 10 stacks of [Shock] to enemies in [Vibration].",
        "cost": 0,
        "cd": 25,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After using Skill, follow up with Normal to directly unleash the final Normal attack.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "After entering the Fight, alternately gain [Sky Shatter·Break] or [Sky Shatter·Pierce] after releasing Skill. [Sky Shatter·Break]: Provides 30.0% Ultimate Dmg Up, Duration 10s. [Sky Shatter·Pierce]: Provides 30.0% passive Dmg Up, Duration 15s.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "During Skill, Dmg Reduction by 30.0%; after casting Skill, all aerial Normals of the Deathgod Haotian Hammer deal Dmg Up by 50.0% to [Vibration] targets for 3.5s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Collision ATK hit extends [Vibration] by 5s; [Sky Shatter·Break] effect boost: grants 50.0% Ultimate Dmg Up, Duration 10s; [Sky Shatter·Pierce] effect boost: grants 50.0% passive Dmg Up, Duration 15s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "During casting, Dmg Reduction by 50.0%; after casting Skill, all aerial Normals of the Deathgod Haotian Hammer deal 80.0% Dmg Up to [Vibration] targets for 3.5s.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Cyclone Hammer",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "Raise the hammer to the sky, unleashing a fierce aura that attacks surrounding enemies, dealing 20+138.1% ATK as Skill Dmg and gaining [Haotian Will]. [Haotian Will]: Duration 10s. Every 2s a Haotian Hammer descends from the sky, striking the ground and dealing 15+103.6% ATK as Skill Dmg, applying 1 layer of [Shock] to targets not in [Vibration].",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "During the Duration of [Haotian Will], all Spirits have a 50% chance to drop an additional Haotian Hammer when dealing [Vibration] Dmg, inflicting Skill Dmg equal to 4+30.4% of ATK on enemies, and applying 1 layer of [Shock] to targets not under [Vibration]. Probability check occurs once per second.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "For each Haotian Hammer dropped, all Spirits' [Vibration] Dmg Up by 12.0%, up to 144.0%. Effect removed when [Haotian Will] ends.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "When dealing [Vibration] Dmg triggers extra Haotian Hammer drop, extend [Haotian Will] by 2s, up to 8s per [Haotian Will].",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "During [Haotian Will] Duration, when all Spirits inflict [Vibration] Dmg, an additional Haotian Hammer drops, dealing 4+30.4% ATK as Skill Dmg to enemies, and inflicting 1 layer of [Shock] on non-[Vibration] enemies. Probability check triggers once per second.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "For each Haotian Hammer dropped, all Spirits' [Vibration] Dmg Up by 20.0%, up to 300.0%. Effect removed when [Haotian Will] ends.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Sky Shatter Pressure",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "When Initiative [Haotian Divine Might] is activated, Spirimaster gains 3 stacks of [Sky Shatter]. When all Spirits applying [Shock] to targets not under [Vibration], gain 3 stacks of [Sky Shatter], triggering at most once every 5s; gaining 3 stacks of [Sky Shatter] when causing [Vibration] on enemies, triggering at most once every 20s. [Sky Shatter] can stack up to 24 times. When [Sky Shatter] reaches 6 stacks, the final part of Normal ATK Dmg Up to 17+122.1% ATK as passive Dmg, and leaps into the air. Simultaneously, airborne Normal ATK will be replaced by [Haotian Suppression], consuming 6 stacks of [Sky Shatter], dealing 59+440.3% ATK as passive Dmg. If [Sky Shatter] stacks are sufficient, [Haotian Suppression] can be released in Combo.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "When [Sky Shatter] stacks reach 16 or more, increase Deathgod Haotian Hammer's 20.0% passive Dmg Up, Duration 15s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "All Spirits gain [Sky Shatter] stacks up to 5 when applying [Shock] to targets not in [Vibration]. This effect triggers once every 5s; Gain [Sky Shatter] stacks up to 5 when causing [Vibration] on enemies. This effect triggers once every 5s; Meanwhile, [Haotian Suppression] reduces [Sky Shatter] stack consumption to 4.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Continuously unleash [Haotian Suppression], and the 4th [Haotian Suppression] will be replaced by [Extreme·Great Sumeru Hammer], dealing passive Dmg equal to 596+4059.2% of ATK, with HP remaining at a minimum of 1 during release. [Extreme·Great Sumeru Hammer] can be unleashed once every 360s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Crit Dmg from [Haotian Suppression] increases by 90.0% and from [Extreme·Great Sumeru Hammer] by 18.0% when hitting [Vibration] targets.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "After unleashing [Extreme·Great Sumeru Hammer], the next aerial Normal or Combo [Haotian Suppression] will be replaced by [Sky Shatter·Great Sumeru Hammer] without consuming [Sky Shatter] stacks, dealing a maximum passive Dmg equal to 255+1762.8% of ATK.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Earth Shake Fury",
        "key": "Dmg, Shock, Vibration",
        "icon": "◆",
        "description": "After activating Initiative [Haotian Might], gain Strong Super Armor effect for 6s (this effect is removed when switching Spirit). When Initiative [Haotian Might] hits a target, it applies 4 stacks of [Shock] to targets not in [Vibration] state. Each time a Spirit deals [Vibration] Dmg, gain 1 stack of [Earthquake], up to 1 stack every 0.5s, up to 15 stacks. When [Earthquake] reaches 10 stacks, the final move of Normal Attack is leaping into the air, dealing Passive Dmg of 16+118.8% ATK. Simultaneously, airborne Normal Attack is replaced with [Earthquake: Great Sumeru Hammer], consuming all [Earthquake] stacks, dealing Passive Dmg of 132+906.0% ATK.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Each stack of [Earth Shake] increases [Vibration] Dmg from all Spirits by 12.0%, up to a maximum of 60.0%.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "When casting [Earth Shake·Great Sumeru Hammer] and [Earth Shake] stacks exceed 10, each additional stack increases [Earth Shake·Great Sumeru Hammer] passive Dmg Up by 11.0%, up to a maximum increase of 55.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "During the use of [Earth Shake·Great Sumeru Hammer], Dmg Reduction by 50.0% and gain [Sumeru Haotian], increasing [Earth Shake·Great Sumeru Hammer] Dmg Up by 45.0%. [Sumeru Haotian] can be obtained once every 360s.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "When executing any type of aerial Normal, gain [Mighty Enemy Breaker] and begin recording all Spirit-induced [Vibration] Dmg for a Duration of 20s. If another aerial Normal is executed or the Duration ends, stop recording Dmg. Dmg can only be recorded once per Fight. Upon using [Earth Shake·Great Sumeru Hammer], deal an additional 750.0% [Mighty Enemy Breaker] recorded value Dmg. [Mighty Enemy Breaker] Dmg can be triggered 3 times per Fight, after which [Mighty Enemy Breaker] is removed.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "In [Sumeru Haotian] state, when [Earth Shake·Great Sumeru Hammer] hits [Vibration] targets, gain Dmg Up by 60.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": [
      {
        "id": "s1786324784125787",
        "name": "The God of Slaughter",
        "image": "images/personnages/haotianhammerdeathgod/skins/haotianhammerdeathgod-the-god-of-slaughter.png",
        "description": "Blood Armor forged by Berserk Fury, Quake Demon Slayer descends upon the world."
      }
    ]
  },
  {
    "id": "ennapagoda",
    "title": "Ennea Pagoda",
    "subtitle": "Ennea Food God - The Legacy of Hope - Nive-Treasure Enchanting Rabbit",
    "image": "images/personnages/ennapagoda/ennapagoda-image.jpg",
    "imageUrl": "",
    "useLocalImage": true,
    "tags": [
      "Support",
      "Shield"
    ],
    "stats": [
      {
        "label": "Name",
        "value": "Ning Rongrong"
      },
      {
        "label": "Gender",
        "value": "Female"
      },
      {
        "label": "Archetype",
        "value": "Support"
      },
      {
        "label": "Role",
        "value": "Shield Sp Regen"
      },
      {
        "label": "Mechanic",
        "value": "Sigil-cycling"
      },
      {
        "label": "Acquisition",
        "value": "Mall"
      }
    ],
    "description": "Ennea Pagoda is a randomized buff engine, their whole kit revolves around collecting different [Ennea Pagoda Sigil] types, each granting different bonus effects. Skills and Ultimates hand out random Sigil stacks, while their passives push toward upgrading and consolidating them into more powerful tiers.\n\nTheir core progression loop is collect 6 different Sigils to trigger [All-Purpose Status] (or automatically enter [Omniscient Status] on Ultimate use), a temporary window where all Sigils get upgraded to Tier 2, unlocking bonus effects like Damage Up, Invincibility, and reduced Ultimate costs across the team. Once the status ends though, everything resets, so timing the big payoff moment matters.\n\nThey're also a solid shield-and-SP support outside the Sigil system, their Skills consistently grant Shields, restore Soul Power, and buff overall team Damage, keeping the party topped up while the Sigil collection quietly builds toward its next big burst.",
    "rarity": "SSR",
    "backgroundImage": "images/personnages/ennapagoda/background/ennapagoda-background.png",
    "normalAttack": {
      "title": "Bastion",
      "key": "Dmg",
      "icon": "◆",
      "description": "Use Ennea Pagoda for a ranged ATK on enemies, dealing a total of 39+256.6% ATK Dmg."
    },
    "initiative": {
      "title": "Emerald Crystal",
      "key": "Dmg, Dmg↓",
      "icon": "◆",
      "description": "Drift backward and Use Ennea Pagoda to attack enemies, dealing 16+105.0% ATK Dmg. Randomly gain one layer of [Ennea Pagoda Sigil], then randomly Upgrade one layer of [Ennea Pagoda Sigil]."
    },
    "ultimate": {
      "skill1": {
        "title": "Pagoda Radiant Blessing",
        "key": "Dmg Up, SP Regen",
        "icon": "◆",
        "description": "Add a Shield equal to 75% of Ennea Pagoda's max HP for 20s. Gain Strong Super Armor during the Shield's Duration, reducing Dmg taken by 5%. (Strong Super Armor effect unavailable in PVP) Consume all Tier 2 [Ennea Pagoda Sigil] upon activation. For each consumed Tier 2 [Ennea Pagoda Sigil], randomly gain two stacks of [Ennea Pagoda Sigil], prioritizing those not currently possessed. If in [All-Purpose Status] when casting, further Enhance [Ennea Pagoda Sigil]. The Shield can stack with the Shield outside of [All-Purpose Status].",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "For each consumed second-level [Ennea Pagoda Sigil] due to this skill effect, gain additional Shield Value equal to 5% of Ennea Pagoda Max HP.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Gain 2.0% Dmg Up for each unique [Ennea Pagoda Sigil] when casting the ultimate, up to 12.0%.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "During the Ultimate Shield, Restore 50 SP per hit, CD 10s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "In [All-Purpose Status], when casting the Ultimate, every 6% Strike Rate of Ennea Pagoda grants 2% Support Dmg Bonus to all Spirits, with a maximum of 12% Support Dmg Bonus through this method.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Gain 4.0% Dmg Up for each unique [Ennea Pagoda Sigil] when casting the ultimate, up to 24.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill4": {
        "title": "Nine-Colored Realm",
        "key": "Dmg Up, SP Regen",
        "icon": "◆",
        "description": "Upon release, randomly gain 2 stacks of [Ennea Pagoda Sigil], and deploy a Glazed Tower on the field to form an aura for a duration of 20s. Players within the aura receive effects based on the current [Ennea Pagoda Sigil] of the aura's caster.",
        "cost": 2,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Players inside the barrier gain a Shield equal to 22% of the current Spirit's HP per 5s, non-stackable.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Restore 150 Soul Power when the barrier ends.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Aura duration increased to 30s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "Reduce Skill CD by 5s. After casting the Ultimate, if in [Omniscient Status], every 6% Strike Rate of Ennea Pagoda grants 1.5% Support Dmg Bonus to all Spirits, with a maximum of 9% Support Dmg Bonus through this method.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Provides 3.0% Support Dmg Bonus within the aura range.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "skill": {
      "skill2": {
        "title": "Crystal Brilliant Star",
        "key": "Shield, SP Regen",
        "icon": "◆",
        "description": "Reach out to summon Ennea Pagoda, granting 10% Dmg Up for 30s, restoring 200 Soul Power, then randomly gain a layer of [Ennea Pagoda Sigil].",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Provides a Shield equal to 30% of Ennea Pagoda's max HP after releasing Skill.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Restore an additional 50 SP.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Gain an extra random layer of [Ennea Pagoda Sigil], and randomly Upgrade one layer of [Ennea Pagoda Sigil], aiding the Ennea Pagoda to enter [All-Purpose Status] faster.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "If in [All-Purpose Status], Dmg Up increased to 15.0%.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "If in [All-Purpose Status], Dmg Up increased to 30.0%.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill6": {
        "title": "Jade Light Chaser",
        "key": "Shield, SP Regen",
        "icon": "◆",
        "description": "Summon a Glazed Tower to attack enemies continuously. Initial Duration is 10s, each attack dealing 3.8% ATK as Dmg. Upon casting, restore 200 Soul Power, then randomly gain 2 stacks of [Ennea Pagoda Sigil].",
        "cost": 0,
        "cd": 30,
        "haloTitle": "",
        "haloDescription": "",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "After the summoned Glazed Tower's ATK hits a target, apply 2.0% Support Dmg Bonus to self, stacking up to 5 layers, Duration 5s. Glazed Tower's existence time increased to 15s.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Restore an additional 50 Soul Power when the Skill is cast.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "After the summoned Glazed Tower's ATK hits a target, apply 2.0% Support Dmg Bonus to self, stacking up to 6 layers, Duration 5s. Glazed Tower's existence time increased to 20s.",
            "condition": "🟡 5★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "The summoned Glazed Tower Duration increased to 35s.",
            "condition": "🔴 2★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "Summoned Glazed Tower's ATK provides Support Dmg Bonus, layer limit increased to 10 layers.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "passive": {
      "skill3": {
        "title": "Apertures of Ingenuity",
        "key": "Dmg Up",
        "icon": "◆",
        "description": "Upon acquiring 6 different [Ennea Pagoda Sigil], immediately upgrade all [Ennea Pagoda Sigil] to Tier 2. Triggering this enters [All-Purpose Status] for a duration of 20s. [All-Purpose Status] prevents sigil acquisition and removes all sigils when it ends.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "God of Stars Nine Treasures Talent",
        "haloDescription": "The exquisite mind explores divine intentions, with the starry array aiding in opening the seven apertures. Upon entering [All-Purpose Status], gain an additional [Final Dmg Up] 15%, Duration 30s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Upon triggering, reset Ennea Pagoda Skill cooldown.",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "[All-Purpose Status] extended to 25s. Restore 100 SP upon triggering.",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "Upon triggering, reset Ennea Pagoda Ultimate cooldown, and the next Ennea Pagoda Ultimate consumes 0 SP.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "[All-Purpose Status] extended to 30s. Restore 200 SP upon triggering.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[All-Purpose Status] Upon ending, randomly retain 3 Lv.1 marks and gain 100 SP.",
            "condition": "🔴 4★ activated"
          }
        ]
      },
      "skill5": {
        "title": "Ennea Exquisite",
        "key": "Dmg Up",
        "icon": "◆",
        "description": "Upon releasing the Ultimate, automatically enter [Omniscient Status]. During [Omniscient Status], all [Ennea Pagoda Sigil] obtained are automatically upgraded to Lv.2. [Omniscient Status] duration is 20s, and all sigils are removed when the status ends.",
        "cost": 0,
        "cd": 0,
        "haloTitle": "God of Stars Nine Treasures Talent",
        "haloDescription": "Glimpse into destiny with divine insight, revealing omniscience of the Nine Treasures. Upon entering [Omniscient Status], gain an additional [Final Dmg Up] 15%, Duration 30s.",
        "tiers": [
          {
            "threshold": "1k Yr",
            "description": "Upon entering [Omniscient Status], gain 2 prioritized non-repeating [Ennea Pagoda Sigil].",
            "condition": ""
          },
          {
            "threshold": "10k Yr",
            "description": "Upon entering [Omniscient State], gain 5 seconds of [Invincibility], [Strong Super Armor], and [Control Immunity] (duration reduced to 2.5 seconds in PVP).",
            "condition": "🟡 4★ activated"
          },
          {
            "threshold": "25k Yr",
            "description": "In [Omniscient Status], all Spirits' Ultimate Soul Power consumption reduced by 100.",
            "condition": "🔴 1★ activated"
          },
          {
            "threshold": "50k Yr",
            "description": "In [Omniscient Status], gain 1% Dmg Up per mark, stacking up to 6 times. Removed when [Omniscient Status] ends.",
            "condition": "🔴 3★ activated"
          },
          {
            "threshold": "100k Yr",
            "description": "[Omniscient Status] Duration extended to 30s.",
            "condition": "🔴 4★ activated"
          }
        ]
      }
    },
    "fusion": null,
    "skins": [
      {
        "id": "s1786325300932517",
        "name": "Splendid Wave's Light",
        "image": "images/personnages/ennapagoda/skins/ennapagoda-splendid-wave-s-light.png",
        "description": "Nine Treasures' Radiance summons tidal sounds, splendid shells overlap stars on tidal reefs."
      }
    ]
  }
];
