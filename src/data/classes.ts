import { Dice } from '../utils/rollDie';
import { CharacterTemplate } from '../models';
import { defaultRolls } from './defaultRolls';

export const classes: CharacterTemplate[] = [
    {
        className: 'Fanged Deserter',
        roll: 1,
        stats: [
            {
                name: 'strength',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 2,
            },
            {
                name: 'agility',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: -1,
            },
            {
                name: 'presence',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: -1,
            },
            {
                name: 'toughness',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'maxHP',
                dice: [Dice.d10],
            },
            {
                name: 'omens',
                dice: [defaultRolls.omen],
            },
        ],
        weapon: defaultRolls.weapon,
        armor: defaultRolls.armor,
        randomAbilityCount: 1,
        origins: [
            'Your earliest memories are of a burnt-black building in Sarkash. Your home?',
            'Your earliest memories are of a derelict rotting ship rolling endlessly across a grey sea.',
            'Your earliest memories are of a brothel in Schleswig. Quite a friendly environment.',
            'Your earliest memories are of sleeping with dogs in the corner of an inn, waiting for someone to return.',
            'Your earliest memories are of following an army in eastern W\xe4stland.',
            'Your earliest memories are of suckling a wolf in the wilds of Bergen Chrypt.',
        ],
        appendix:
            'You have thirty or so friends who never let you down: YOUR TEETH. Disloyal, deranged or simply uncontrollable, any group that didn\u2019t boot you out you left anyway. But your parliament of teeth \u2014 enormous, protruding, thick and sharp \u2014 have always been your allies.',
        classAbilities: [
            {
                name: 'Clumsy and Dull-witted',
                description:
                    'Agility tests are DR+2, excluding defence. You are incapable of understanding scrolls.',
            },
            {
                name: 'Bite Attack',
                description:
                    'DR10 to attack, d6 damage. You must be close to your target. 1\u20132 on d6 chance the enemy gets a free attack.',
                dice: Dice.d20,
                difficulty: 10
            },
        ],
        randomAbilities: [
            {
                name: 'Crumpled Monster Mask',
                description:
                    'Strikes primitive fear into lesser creatures like goblins, gnoums and children. While worn, they check Morale every round.',
                roll: 1,
            },

            {
                name: 'The Brown Scimitar of Galgenbeck',
                description:
                    'A stinking sword you pulled from a military shit-ditch. D6 damage. DR10 attack and defence while you wield it. 1 in 6 chance a wounded enemy is smitten with potent sepsis, dying in 10 minutes.',
                roll: 2,
            },
            {
                name: 'Wizard Teeth',
                description:
                    'Four weird teeth rattle within a blackened pouch. Before battle roll a d6 for each one. For every 6 one of your attacks deals maximum damage.',
                roll: 3,
            },
            {
                name: "Old Sig\xfbrd's Sling",
                description:
                    'Sig\xfbrd was the strongest man whose throat you ever gnawed. Woven from his long grey hair, this sling has never failed you. 2d4 damage, requires fist-sized rocks which, perhaps regrettably, are everywhere.',
                roll: 4,
            },
            {
                name: 'Ancient Gore-Hound',
                description:
                    'Asthmatic, deluded and on its last legs, this wizened creature still has a superb nose and can snif\ufb02e up treasure in the most disgusting debris. Attacks with DR10 (bite d6). Defends with DR12, 10 HP. Becomes frenzied around goblins and berserkers.',
                roll: 5,
            },
            {
                name: "The Shoe of Death's Horse",
                description:
                    'It looks normal but since finding it in an obscure crypt you are convinced this shoe came from the horse of Death himself. In your hands it hits with DR10, d4 damage. 1 in 6 chance the shoe smashes the skull, instantly killing small-to-medium sized creatures. The shoe returns to your hand like a boomerang.',
                roll: 6,
            },
            {
                name: 'Man-sized Tower Shield*',
                description:
                    'It\u2019s said that this targe of massive proportions was once the tea tray of a half-giant tavernkeep. While wielding it, defence is DR10 and uses Strength instead of Agility.',
            },
            {
                name: 'Rusted Spirit Stein*',
                description:
                    'A spit-stained tankard found after an unrecalled night of binging. Drink any liquid from it and test DR12 Toughness. Regain d6 HP on a success or take the same amount of damage on a failure.',
            },
            {
                name: 'Apostate Spear*',
                description:
                    'With the spear that once soaked in the blood of \u028d\u0279ou\u0183 \u027e\u01ddsns, you perform a critical on a natural 19 in addition to a 20. D6 damage and DR10 attack.',
            },
            {
                name: 'Greymatter Crown*',
                description:
                    'This always-sticky circlet has seen many a scholar-king\u2019s brain sprayed across its thorny rim. Wearing it grants +1 Presence and allows the comprehension of scrolls.',
            },
            {
                name: 'Pathogenic Fangs\u2396\u2396*',
                description:
                    'Your sordid teeth contain years of accumulated filth and muck. On a successful bite, the enemy must test DR12 Toughness or have their immune system SHATTER, suffering d10 damage and leaving them infected.',
            },
            {
                name: 'War-tattoos of the Berserker Cult*',
                description:
                    'Only etched into the fiercest of blood-crazed maniacs. After killing an enemy you may enter a blood-rage and make an attack at DR14 against another enemy within range. As long as you keep killing with each attack, you may keep attacking, each time increasing the DR by +2.',
            },
        ],
        silver: { dice: [Dice.d6, Dice.d6], modifier: 10 },
        hpModifier: Dice.d10,
    },
    {
        className: 'Gutterborn Scum',
        roll: 2,
        stats: [
            {
                name: 'strength',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: -2,
            },
            {
                name: 'agility',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'presence',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'toughness',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'omens',
                dice: [defaultRolls.omen],
            },
        ],
        weapon: Dice.d6,
        armor: Dice.d2,
        randomAbilityCount: 1,
        origins: [
            'As a child, you were dumped onto a moving shit-cart still in your birth caul.',
            'As a child, your mother was hanged from a tree outside of Galgenbeck, you fell from the corpse.',
            'As a child, you were raised by rats in the gutters of Grift.',
            "As a child, you grew up kicked and beaten beneath a baker's table in Schleswig.",
            'As a child, you escaped the Tvelandian orphanarium.',
            'As a child, you were educated by outlaws in a hovel south of Alli\xe1ns.',
        ],
        appendix:
            'An ill star smiled upon your birth. Poverty, crime and bad parenting didn\u2019t help either. In your community an honest day\u2019s work was never an option. Not that you ever tried, what are you, some kind of mug? A razor blade and a moonless night are worth a week of chump-work.',
        classAbilities: [
            {
                name: 'Stealthy',
                description:
                    'All Presence and Agility tests have their DR reduced by 2 (normal tests are DR10 instead of DR12).',
            },
        ],
        randomAbilities: [
            {
                name: "Coward's Jab",
                description:
                    'When attacking by surprise test Agility DR10. On a success you automatically hit once with a light one-handed weapon, dealing normal damage +3.',
                dice: Dice.d20,
                difficulty: 10,
            },
            {
                name: 'Filthy Fingersmith',
                description:
                    'Your snaky little digits get into pockets and pick locks with a DR8 Agility test. You also begin with lockpicks!',
                dice: Dice.d20,
                difficulty: 8,
            },
            {
                name: 'Abominable Gob Lobber',
                description:
                    'Your phlegm is viscous, lumpy, vile and ballistically accurate at short range. You can spit d2 times during a fight. Roll a DR8 Presence test for accuracy. Targets are blinded, retching and vomiting for d4 rounds. Anyone witnessing this \u2014 friend and foe \u2014 must make a Toughness test to not also vomit. PCs test DR10 and enemies DR12.',
                dice: Dice.d20,
                difficulty: 8,
            },
            {
                name: 'Escaping Fate',
                description:
                    'Every time you use an omen there is a 50% chance it is not spent.',
                dice: Dice.d2,
                difficulty: 2,
            },
            {
                name: 'Excretal Stealth',
                description:
                    'You have an astounding, almost preternatural ability to hide in muck, debris and filth. When hidden in these conditions a DR16 Presence test is required to notice you.',
            },
            {
                name: 'Dodging Death',
                description:
                    'You are so unpleasant, irrelevant, disgusting and vile even Death would rather avoid you if it can. On death, if there is even the slightest possibility that you survived, there is a 50% chance that you did. If successful, after 10 rounds you pop back up with d4 HP and an unlikely explanation of your escape.',
                dice: Dice.d2,
                difficulty: 2,
            },
        ],
        silver: {
            dice: [Dice.d6],
            modifier: 10,
        },
        hpModifier: Dice.d6,
    },
    {
        className: 'Esoteric Hermit',
        roll: 3,
        stats: [
            {
                name: 'strength',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: -2,
            },
            {
                name: 'agility',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'presence',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 2,
            },
            {
                name: 'toughness',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'omens',
                dice: [defaultRolls.omen],
            },
        ],
        armor: Dice.d2,
        weapon: Dice.d4,
        randomAbilityCount: 1,
        origins: [
            'You remember awakening, adult, in a ritual circle underneath the northern bridge to Grift.',
            'You wandered, memoryless, from the mouth of a cavern at the cliffs of Terion.',
            'You were the single child survivor of an incident in the Valley of the Unfortunate Undead.',
            'You were dying of plague in a Bergen Chrypt hovel, when you touched something from outside.',
            'You were an average individual until you encountered something in a dim glade in Sarkash.',
            "You were raised on a lonely island in Lake Onda. No one else has ever heard of this island and you can't return.",
        ],

        appendix:
            'The stone of your cave is one with the stars. Silence and perfection. Now the chaos of a fallen world disturbs your rituals and the caul of night grows blacker than your cavern\u2019s gloom. Irritating!',
        randomAbilities: [
            {
                name: 'Master of Fate',
                description:
                    'What use are maps when the substance of causality itself is open to you? You know the right way with a DR8 Presence test.',
            },
            {
                name: 'A Book of Boiling Blood',
                description:
                    'You may open and read from this book once a day. Your enemy must make a DR12 test to prevent this. If they fail D2 Berserker-slayers (see page 60) appear from the depths of a forgotten dimension of blood. Roll a D6. On a 1\u20134 these creatures fight alongside you. On a 5\u20136 they turn on you, attempting to kill you and destroy the book. After the battle they return to their imprisonment.',
            },
            {
                name: 'Speaker of Truths',
                description:
                    'Twice per day use your wisdom, knowledge, advice and inner calm to bring clarity to a creature of your choice. The DR of the next test they undertake is lowered by 4.',
            },
            {
                name: 'Initiate of the Invisible College',
                description:
                    'Once per day you may summon D2 scrolls, whose power can be used only once. Roll a d4, on a 1\u20132 the scrolls are sacred, on a 3\u20134, unclean. If the scrolls are not used before sunrise they turn to ash.',
            },
            {
                name: 'Bard of the Undying',
                description:
                    'You learnt your melodies in the Otherworld. The music of your Harp gives +D4 on reaction rolls.',
            },
            {
                name: 'Hawk as Weapon',
                description:
                    'Your crafty almost-intelligent hawk is loyal only to you. Even without shared language, you understand its cries as it keeps watch, scouts and swoops to attack foes. Attacks/defence DR10 (claws/bite D4), HP 8.',
            },
        ],
        silver: { dice: [Dice.d6], modifier: 10 },
        hpModifier: Dice.d4,
    },
    {
        className: 'Wretched Royalty',
        roll: 4,
        stats: [
            {
                name: 'strength',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'agility',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'presence',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'toughness',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'omens',
                dice: [defaultRolls.omen],
            },
        ],
        weapon: Dice.d8,
        armor: Dice.d3,
        randomAbilityCount: 2,
        origins: [
            'Things were going so well, until your W\xe4stland palace was reduced to rubble.',
            'Things were going so well, until your caravan kingdom of Tveland fell into penury.',
            "Things were going so well, until King Fathmu IX's brother Zigmund, your father, was murdered.",
            'Things were going so well, until the southern empire of S\xfcdglans sank into the sea.',
            'Things were going so well, until two young princes were kidnapped west of Bergen Chrypt and disappeared into the black crevasse of the eastern slopes.',
            'Things were going so well, until Anthelia demanded a gift of noble blood.',
        ],
        appendix:
            'Bowed down only by the memories of your own lost glory, you could never submit to anyone else. Not you, of noble blood! (Not that you expect any of these peons to understand the depths of your sorrow.)',
        randomAbilities: [
            {
                name: 'The Blade of your Ancestors',
                description:
                    "This magnificent and clearly magical talking sword is foppish, unreliable and quietly despises you. It taunts your failures and, if continually disappointed, develops a 1 in 6 chance to \u2018accidentally' attack you or your companions. Deals d6+1 damage. Attack/Defence DR is 10.",
            },
            {
                name: '"Poltroon" the Court Jester',
                description:
                    "While practically useless, personally irritating and an emotional drain, Poltroon's capering actually makes enemies lose their focus in combat. For the first two rounds you and your allies get +2 on attack/defence.",
            },
            {
                name: 'Barbarister the Incredible Horse',
                description:
                    'Barbarister is magical, intelligent, arrogant and vain. He can also talk. If you can persuade him to care, Barbarister occasionally adds +2 to Presence tests involving logic and intellect. The horse may be smarter than you and is quite aware of this.',
            },
            {
                name: 'Hamfund the Squire',
                description:
                    'This intensely cowardly servant acts only as guardian for the scabbard of the cursed sword Eurekia. Once per combat, if Ham can be found, Eurekia may be drawn. The sword does 2d6 damage, and for every swing of Eurekia roll a d6. On a 1 the squire is slain and Eurekia vanishes forever.',
            },
            {
                name: 'The Snake-Skin Gift',
                description:
                    'An expensive sandalwood box bound in snakeskin. It contains a seemingly ordinary dagger, wrapped in silk. The dagger does d4 damage but on a 1 the target dies immediately of deadly poison weeping from the blade.',
            },
            {
                name: 'Horn of the Schleswig Lords!',
                description:
                    'Once per day release a blare from this dented old trumpet and test Presence DR12. One creature may make their next non-combat test an automatic success.',
            },
        ],
        silver: { dice: [Dice.d6, Dice.d6, Dice.d6, Dice.d6], modifier: 10 },
        hpModifier: Dice.d6,
    },
    {
        className: 'Heretical Priest',
        roll: 5,
        stats: [
            {
                name: 'strength',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: -2,
            },
            {
                name: 'agility',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'presence',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 2,
            },
            {
                name: 'toughness',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'omens',
                dice: [Dice.d4],
            },
        ],
        weapon: Dice.d8,
        armor: Dice.d4,
        randomAbilityCount: 1,
        origins: [
            'You come from Galgenbeck, near the cathedral of the Two-Headed Basilisks.',
            'You are the sole survivor of a massacred Alli\xe1ns cult.',
            'You come from the crypts of Grift.',
            'You come from some temple ruins in the Valley of the Unfortunate Undead.',
            'You come from one of the many Graven-Tosk thief-tunnels.',
            'You come from a secret Bergen Chrypt church.',
        ],

        appendix:
            'Hunted by the Two-Headed Basilisks of the One True Faith, you can be found raving in ruins, traipsing endlessly down dusty roads and desecrating cathedrals by night.',
        randomAbilities: [
            {
                name: "Sacred Shepherd's Crook",
                description:
                    'Its head a hook of human bone inscribed with overlapping anti-prayers. This crook hooks through other worlds. Staff does 2d4 damage except to faithless humans.',
            },
            {
                name: 'Stolen Mitre',
                description:
                    "While wearing this holy hat the priest's vile body fades, becoming hard to hit in combat (Defence DR10). If pulled over the ears outside of battle the priest becomes nearly invisible, testing stealth against DR8.",
            },
            {
                name: 'List of Sins',
                description:
                    "A long and accurate document cross-referenced against reality to discover unseen evil-doers. Successful Presence DR10: A strange light surrounds evil creatures. The list's owner defends with +2 against any being discovered this way.",
            },
            {
                name: 'The Blasphemous Nechrubel Bible',
                description:
                    'So intensely blasphemous even the Priests themselves can only peruse it once per day. When read, roll a die.\\nEven result: For the rest of the day PCs heal d4 HP after just five minutes of rest.\\nOdd result: The priest is plagued by demonic hallucinations. The DM may invent d3 things that only the Priest can see and describe them to the player as if true. This effect ends with sunrise.',
            },
            {
                name: "Stones taken from Thel-Emas' Lost Temple",
                description:
                    'Cast the stones on the ground. Their pattern reveals if danger lurks in an adjacent room. The stones can lie. The priest tests Presence DR10 to see if they are true but after failing they cannot test again until the sun has set.',
            },
            {
                name: '(\u028d\u0279ou\u0183 \u027e\u01ddsns) \u0254\u0279u\u0254\u0131\u025f\u0131x',
                description:
                    "The crucifix can be used in encounters with the undead as well as lesser trolls and goblins. Check morale (add or subtract the priest's Presence modifier) to see if the creatures bow and kindly remove themselves.",
            },
        ],
        silver: { dice: [Dice.d6, Dice.d6, Dice.d6], modifier: 10 },
        hpModifier: Dice.d8,
    },
    {
        className: 'Occult Herbmaster',
        roll: 6,
        stats: [
            {
                name: 'strength',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: -2,
            },
            {
                name: 'agility',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'presence',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 0,
            },
            {
                name: 'toughness',
                dice: [Dice.d6, Dice.d6, Dice.d6],
                modifier: 2,
            },
            {
                name: 'omens',
                dice: [defaultRolls.omen],
            },
        ],
        weapon: Dice.d6,
        armor: Dice.d2,
        origins: [
            'Raised in calm isolation in the Sarkash dark.',
            'Raised in calm isolation in the Sarkash dark.',
            'Raised in calm isolation in the Sarkash dark.',
            'From the illegal midnight markets of Schleswig.',
            'From the heretic isle of Cr\xeblut, two nautical miles east of Grift.',
            'From the old frozen ruins not far from Alli\xe1ns.',
            'From a little witches cottage in Galgenbeck.',
            "From the ruins of the Shadow King's manse, thick of memories of mushrooms and smoke.",
        ],
        appendix:
            'Born of the mushroom, raised in the glade, watched by the eye of the moon in a silverblack pool.',
        classAbilities: [
            {
                name: 'Portable Laboratory',
                description:
                    'You carry a portable laboratory and continually search for frequently expended ingredients. Daily you have the materials to create two randomly determined decoctions and can brew a total of d4 doses. If unused they lose vitality after 24 hours.',
            },
            {
                name: 'List of Decoctions:',
                description: `\n* Red Poison - Toughness DR12 or -d10 HP.
- Ezumiel's Vapor - Pass a DR14 test or severe hallucinations for d4 hours.
- Southern Frog - Stew Vomit for d4 hours, pass a DR14 test or you can do nothing else.
- Elixir Vitalis - Heals d6 HP and stops infection. Can be habit-forming.
- Spider-Owl Soup - See in darkness, climb on walls for 30 minutes.
- Fernors Philtre - Translucent oil, must be dabbed right into the eye. Heals infection and gives +2 on Presence tests for d4 hours.
- Hyphoss Enervating Snuff - Berserk! Two attacks per round but defend with DR14. Lasts one fight. Must be snorted, causes sneezing.
- Black Poison - Toughness DR14 or -d6 HP and blinded for one hour.`,
            },
        ],
        silver: { dice: [Dice.d6, Dice.d6], modifier: 10 },
        hpModifier: Dice.d6,
    },
];
