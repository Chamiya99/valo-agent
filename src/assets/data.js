import zIndex from "@mui/material/styles/zIndex";


export const ImgData = [
    {
        img: 'src/assets/Images/img1.jpeg',
        title: 'Title 1',
    },
    {
        img: 'src/assets/Images/img2.jpg',
        title: 'Title 2',
    },
    {
        img: 'src/assets/Images/img3.avif',
        title: 'Title 3',
    },
    {
        img: 'src/assets/Images/img4.jfif',
        title: 'Title 4',
    },
    {
        img: 'src/assets/Images/img5.webp',
        title: 'Title 5',
    },
    {
        img: 'src/assets/Images/img6.avif',
        title: 'Title 6',
    },
    {
        img: 'src/assets/Images/img7.jfif',
        title: 'Title 7',
    },
];


export const AgentData = [
    {
        id: '01',
        name: 'Brimstone',
        desc: "Joining from the U.S.A., Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/28db4af74acd1d78ddba82ed127a99731261b9c8-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/51e62f3c74356a7501d06feba42ac643133257d7-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Controller.svg',
            name: 'Controller',
        },
        abilities: [
            {
                name: 'INCENDIARY',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d7e00a4ad8a1a01b2edcb9fc1193d05e4e50248f-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.",
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9df59d490062acceb7c6ca32a3650b55718381f7.mp4',
            },
            {
                name: 'SKY SMOKE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/5325b2340045a32d919d467ce3b09c3725de73ea-126x126.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a tactical map. FIRE to set locations where Brimstone's smoke clouds will land. ALT FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.",
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/8e0b72295747346b60c354765944f5233fb208f2.mp4',
            },
            {
                name: 'STIM BEACON',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/f6c1e1c587dbfe97a4185a47326ce45c42620583-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.",
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/da2d65e4abc2129e284cf5248fd70925f093a0b3.mp4',
            },
            {
                name: 'ORBITAL STRIKE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8cfa836d1d19356685e42c13054f9f5bc8e9e029-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.",
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ccd8e6c574b7017a2681e5d37c744f5a654327e3.mp4',
            },
        ]


    },
    {
        id: '02',
        name: 'Phoenix',
        desc: "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ecdb26df5c69c4a1adcae5cf5ec31e7b0e252e66-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/47387e354c34d51b84066bc47af3c5755b92b9c5-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Duelist.svg',
            name: 'Duelist',
        },
        abilities: [
            {
                name: 'CURVEBALL',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/beb874d19c79982f0e99e858098c067d9132a95a-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.',
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/c62125b1b5637b7b0e0881348502f7e8b8e93572.mp4',
            },
            {
                name: 'HOT HANDS',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/67df9ca3cb158a945fc9b13eb0e3949683c4c65d-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.',
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/b702ed368fd050e7cb77adf26bc55bb63c5936fb.mp4',
            },
            {
                name: 'BLAZE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d807a982ce70475acb2e8461b4f8737204e35d96-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.',
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/8c5b0e23be0814583ad4601b4297d04dbaff79f7.mp4',
            },
            {
                name: 'RUN IT BACK',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d428c0c6c73ba34676e063092a7ae7157268db0c-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.",
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/aa122a33b1ef0320174991b8ddee4e82dbc2b937.mp4',
            },
        ]


    },
    {
        id: '03',
        name: 'Sage',
        desc: "The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ded53d6f127a00074675eb79fde95437f2c2f521-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/58a180961a14beb631877921e647c233804853c1-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Sentinel.svg',
            name: 'Sentinel',
        },
        abilities: [
            {
                name: 'SLOW ORB',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/f2931e5af58255216179b21cce81f53eab15d6ee-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.',
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/45053483528b96cbe003ac39e6b53c9866d5fea6.mp4',
            },
            {
                name: 'HEALING ORB',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/cdc246179e160ded2788fd37ac21f10bc040ad54-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.',
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a247d196383136d3de15b4d6d9c816e3c8054ba0.mp4',
            },
            {
                name: 'BARRIER ORB',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/829075fef7193503dd480947b79d78193d729d42-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.',
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/a79b1d6838cee5572b428babd74a2db0c07f4ea5.mp4',
            },
            {
                name: 'RESURRECTION',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/90b6e1ca1a3ecd68e2a3072515d071f80bf46c1d-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.',
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/df83929ed5da349c37a5bf4600c2b55010c72402.mp4',
            },
        ]
    },
    {
        id: '04',
        name: 'Sova',
        desc: "Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/14331d268e545efd4f74c443e9a855f85c779aa4-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/08b3d8822544bd327ebed0768c8b90fcec83d1a5-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Initiator.svg',
            name: 'Initiator',
        },
         abilities: [
            {
                name: 'SHOCK BOLT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8ab5a2d03438ff0f8b2ba2d7b26c812ab6b7adbb-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.',
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/7776fa677e90c72da94ec7d188d2d4618116c41b.mp4',
            },
            {
                name: 'RECON BOLT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b428e1783f98a0990b86d13872f564095442f44b-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and Revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the projectile. ALT FIRE to add up to two bounces to this arrow.',
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/50f9d870fa2a9b9ba38408eb718ffc06879c11a8.mp4',
            },
            {
                name: 'OWL DRONE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/07877d7c79546ef64338eae550ffa5649f3582b0-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. Enemies can destroy the Owl Drone.',
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/6c6f036376c18ddf4ed0c589b506b8889d86a29a.mp4',
            },
            {
                name: "HUNTER'S FURY",
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/7b9f078b0576e87e74b8175b0d33ac682b7a8ab3-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.',
                video: 'https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/df9ce34c3d2a7f527929cac123501e1473e0da0e.mp4',
            },
        ]
    },
    {
        id: '05',
        name: 'Viper',
        desc: "The American Chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mindgames surely will.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/9f3940cdddc20db52bade0f791763ca959dcebc6-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/152244f121e61ca32bdd2bea9fc5370e315664fb-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Controller.svg',
            name: 'Controller',
        },
         abilities: [
            {
                name: 'POISON CLOUD',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/3eba05b8ed1ac69c440d54cec365e537d294be25-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be picked up to be REDEPLOYED before the round starts and can be RE-USED more than once throughout the round.',
                video: '',
            },
            {
                name: 'TOXIC SCREEN',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b1204a1fbcc0e2fced090f18ad18e7587357c783-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.',
                video: '',
            },
            {
                name: 'SNAKE BITE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/f477dce332e51e53f4e2f565f2d3d868dd2d0df8-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.',
                video: '',
            },
            {
                name: "VIPER'S PIT",
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/dab73c2ea877aca79a5bb0b8533d1de4ac07186a-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.',
                video: '',
            },
        ]
    },
    {
        id: '06',
        name: 'Cypher',
        desc: "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/c5fc45f615ff1f0ca2ea71a69510316639c49ad7-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/4a648cdbcbbeef137050deefeaf6a1369c606666-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Sentinel.svg',
            name: 'Sentinel',
        },
         abilities: [
            {
                name: 'CYBER CAGE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/292fbe783ac9e2f638822c5f87f09b005b48a712-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.',
                video: '',
            },
            {
                name: 'SPYCAM',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/eae012cb583a41bbc0de83f0963a40de58f5534f-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will Reveal the location of any player struck by the dart. This ability can be picked up to be REDEPLOYED.",
                video: '',
            },
            {
                name: 'TRAPWIRE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/df43766f56e1e844ed1b179722c9444a1bd1d45c-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.",
                video: '',
            },
            {
                name: 'NEURAL THEFT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/3e8e1779afeebd0612c019f8b2d41d7a984781b3-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.',
                video: '',
            },
        ]
    },
    {
        id: '07',
        name: 'Reyna',
        desc: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/285726b9f66a2ab65a4f7f51f2acb8c6a33ec915-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7cb513c9b3eae3286449776e85753138436d553c-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Duelist.svg',
            name: 'Duelist',
        },
         abilities: [
            {
                name: 'DEVOUR',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/62dc726ff81568e4500167d0d402e0b083c507d9-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.",
                video: '',
            },
            {
                name: 'DISMISS',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/a9ca2fbba6c3f00e1a07e3514ac6a8f107e43e17-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.",
                video: '',
            },
            {
                name: 'LEER',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/9d295b17382acbc17bdb4e45e0be74d58e94e6c5-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.',
                video: '',
            },
            {
                name: 'EMPRESS',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/daf434a1a75cee1f52309b2cf4eb8f878d07b419-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'NSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.',
                video: '',
            },
        ]
    },
    {
        id: '08',
        name: 'Killjoy',
        desc: "The genius of Germany. Killjoy secures the battlefield with ease using her arsenal of inventions. If the damage from her gear doesn't stop her enemies, her robots' debuff will help make short work of them.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d1a10ef502d13649e803119b02b7c9917bfc860c-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/820d36d431fff77b1e1ece39ad6f007746bd31f6-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Sentinel.svg',
            name: 'Sentinel',
        },
         abilities: [
            {
                name: 'ALARMBOT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d86a84fcd7cc656fec66be28d496a56b5171dd52-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a covert Alarmbot. FIRE to deploy a bot that hunts down enemies that get in range. After reaching its target, the bot explodes, applying Vulernable. HOLD EQUIP to recall a deployed bot.",
                video: '',
            },
            {
                name: 'TURRET',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/6fcb1a4dfb49ad8fabae929bc5aea5240ddb42ac-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a Turret. FIRE to deploy a turret that fires at enemies in a 180 degree cone. HOLD EQUIP to recall the deployed turret.',
                video: '',
            },
            {
                name: 'NANOSWARM',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/4ca9c7f4a85e5e454d8d9638247bd36cab1d4124-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a Nanoswarm grenade. FIRE to throw the grenade. Upon landing, the Nanoswarm goes covert. ACTIVATE the Nanoswarm to deploy a damaging swarm of nanobots.',
                video: '',
            },
            {
                name: 'LOCKDOWN',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d7d7787df75af327d171b723a262172693125dc4-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP the Lockdown device. FIRE to deploy the device. After a long windup, the device Detains all enemies caught in the radius. The device can be destroyed by enemies.',
                video: '',
            },
        ]
    },
    {
        id: '09',
        name: 'Breach',
        desc: 'Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.',
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/39d339b3de35f47fb0bc4bb295a9dc4aa07eeb55-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e435c3378b7999a3338b408dbb5da8ba63f91150-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Initiator.svg',
            name: 'Initiator',
        },
         abilities: [
            {
                name: 'FLASHPOINT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/cca58acc93956ee755ccea171a36584a402793c2-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.',
                video: '',
            },
            {
                name: 'FAULT LINE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/668ca53aca3c788f4b9ef8ad35e86979b84745db-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.',
                video: '',
            },
            {
                name: 'AFTERSHOCK',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2621c00e27da47f6a57772902c7806a7bfe0eb66-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.',
                video: '',
            },
            {
                name: 'ROLLING THUNDER',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/58784f89733dfe25c41f8ba950c6eb4c46507d63-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.',
                video: '',
            },
        ]
    },
    {
        id: '10',
        name: 'Omen',
        desc: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/dc30d112789cbf1ccd04bcce306b6059d7bca132-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/015a083717e9687de8a741cfceddb836775b5f9f-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Controller.svg',
            name: 'Controller',
        },
         abilities: [
            {
                name: 'PARANOIA',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/e8544e323a51c9b8ff7ae8fca257e038a570819d-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.',
                video: '',
            },
            {
                name: 'DARK COVER',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/e4012aeda506a8e77f2e83d48aa8c5c73a37b659-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a shadow orb, entering a phased world to place and target the orbs. PRESS the ability key to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD FIRE while targeting to move the marker further away. HOLD ALT FIRE while targeting to move the marker closer. PRESS RELOAD to toggle normal targeting view.',
                video: '',
            },
            {
                name: 'SHROUDED STEP',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2790998724c94f38688c9c6c5d43c0712cae18ef-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.',
                video: '',
            },
            {
                name: 'FROM THE SHADOWS',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/fed58cd5eb95f4e50b7b8230a150c3b686b82f78-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.',
                video: '',
            },
        ]
    },
    {
        id: '11',
        name: 'Jett',
        desc: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/74075835ddc4e8457fb30f7fe560d2aff6d51702-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d41286dc9017bf79c0b4d907b7a260c27b0adb69-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Duelist.svg',
            name: 'Duelist',
        },
         abilities: [
            {
                name: 'UPDRAFT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/a0c72fe005e2f87f60f38fdb440569271c51a8fb-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'INSTANTLY propel Jett high into the air.',
                video: '',
            },
            {
                name: 'TAILWIND',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/18cb69683c16d11590eda4c5458a7025f0667895-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'ACTIVATE to prepare a gust of wind for a limited time. RE-USE the wind to propel Jett in the direction she is moving. If Jett is standing still, she propels forward. Tailwind charge resets every two kills.',
                video: '',
            },
            {
                name: 'CLOUDBURST',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8c5e94bfc817e5d35eca7692fd242404de5ac5dd-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.',
                video: '',
            },
            {
                name: 'BLADE STORM',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8d8e6c956af64b241e49e3625b3cb02fcc61eb09-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a set of highly accurate throwing knives. FIRE to throw a single knife and recharge knives on a kill. ALT FIRE to throw all remaining daggers but does not recharge on a kill.',
                video: '',
            },
        ]
    },
    {
        id: '12',
        name: 'Raze',
        desc: 'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of "boom."',
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b4f9209f59915785278b06ff6a065f83cd4af8cc-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/40b4b242b68afe30d21e7f95bdcacaebca46ea60-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Duelist.svg',
            name: 'Duelist',
        },
         abilities: [
            {
                name: 'BLAST PACK',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ce6b40ccaa79e226c9d5e237af6739dfe412b948-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.",
                video: '',
            },
            {
                name: 'PAINT SHELLS',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/4751e0f887099484e0c39c69d7d4762b782e99f8-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. ALT FIRE to lob. Paint Shells charge resets every two kills.',
                video: '',
            },
            {
                name: 'BOOM BOT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/5ab8a4e5cf6d7229021e6cfe8b50a03543c5978f-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.',
                video: '',
            },
            {
                name: 'SHOWSTOPPER',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/9a02bebe0a944ad2f2c764a0df1dfc8a1e7757fa-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a rocket launcher. FIRE to shoot a rocket that does massive area damage on contact with anything.',
                video: '',
            },
        ]
    },
    {
        id: '13',
        name: 'Skye',
        desc: "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/c73f832e9448cec260412368f8992420b8224819-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/37ea1466beebb54aad4f16efbad184566cb80368-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Initiator.svg',
            name: 'Initiator',
        },
         abilities: [
            {
                name: 'Trailblazer',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b905a3a39bc979bc43653eccf9fdb289b03c5223-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a Tasmanian tiger trinket. FIRE to send out and take control of the predator. While in control, FIRE to leap forward, exploding in a concussive blast and damaging directly hit enemies.',
                video: '',
            },
            {
                name: 'Guiding Light',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ed6e5f91be20274ff84cb24644c3b559bfa8fed1-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a hawk trinket. FIRE to send it forward. HOLD FIRE to guide the hawk in the direction of your crosshair. RE-USE while the hawk is in flight to transform it into a flash that plays a hit confirm if an enemy was within range and line of sight.',
                video: '',
            },
            {
                name: 'Regrowth',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b80c38c49a8e37d69cda3bf335c885170975b415-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a healing trinket. HOLD FIRE to channel, healing allies in range and line of sight. Can be reused until her healing pool is depleted. Skye cannot heal herself.',
                video: '',
            },
            {
                name: 'Seekers',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/9ccbd11eadca50047c6e84125285a11e1d334acd-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: 'EQUIP a Seeker trinket. FIRE to send out three Seekers to track down the three closest enemies. If a Seeker reaches its target, it nearsights them.',
                video: '',
            },
        ]
    },
    {
        id: '14',
        name: 'Yoru',
        desc: "Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/0336d9a53f3d051ca731d578b74f93b118854471-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/05e1a996814dd10d7179efee327d29a7be00e912-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Duelist.svg',
            name: 'Duelist',
        },
         abilities: [
            {
                name: 'Blindside',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ea733bf224ae53e8e53cabfae19bfc12ce9fcda3-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP to rip an unstable dimensional fragment from reality. FIRE to throw the fragment, activating a flash that winds up once it collides with a hard surface in the world",
                video: '',
            },
            {
                name: 'Gatecrash',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/580f94ecab50ae7c01279dcd0adb86f9c65362c3-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a rift tether FIRE to send the tether forward ALT FIRE to place a stationary tether ACTIVATE to teleport to the tether's location USE to trigger a fake teleport",
                video: '',
            },
            {
                name: 'Fakeout',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/43416e5b34cd80c691ed0cc3b69fc73fae93f923-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP an echo that transforms into a mirror image of Yoru when activated FIRE to instantly activate the mirror image and send it forward ALT FIRE to place an inactive echo USE to transform an inactive echo into a mirror image and send it forward. Mirror images explode in a blinding flash when destroyed by enemies.",
                video: '',
            },
            {
                name: 'Dimensional Drift',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/51e64df7500b3114c76e5e86dfea2e622bb438e5-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a mask that can see between dimensions. FIRE to drift into Yoru's dimension, unable to be affected or seen by enemies from the outside",
                video: '',
            },
        ]
    },
    {
        id: '15',
        name: 'Astra',
        desc: "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she's always eons ahead of her enemy's next move.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/c46c9b84f2cc977e984fe23ec3757470ac01a271-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ba51d43803082941b0274b66413b0acc972546dd-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Controller.svg',
            name: 'Controller',
        },
         abilities: [
            {
                name: 'NOVA PULSE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/c68e59e5036f302959366885133e4ab4850bb650-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "Place Stars in Astral Form. ACTIVATE a Star to detonate a Nova Pulse. The Nova Pulse charges briefly then strikes, concussing all players in its area.",
                video: '',
            },
            {
                name: 'NEBULA',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/fe8a6fdb673e9f5a94c3379bde8e78aa9ec7c6c1-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "Place Stars in Astral Form. ACTIVATE a Star to transform it into a Nebula (smoke). USE a Star to Dissipate it, returning the Star to be placed in a new location after a delay. Dissipate briefly forms a fake Nebula at the Star's location before returning.",
                video: '',
            },
            {
                name: 'GRAVITY WELL',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/6c53596bfc3c04a16087fd4553b03c1449d84987-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "Place Stars in Astral Form (X) ACTIVATE a Star to form a Gravity Well. Players in the area are pulled toward the center before it explodes, making all players still trapped inside Vulnerable.",
                video: '',
            },
            {
                name: 'ASTRAL FORM / COSMIC DIVIDE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/1e6ad40dac4f0e475a055b96864a4d5c1eabf34e-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "ACTIVATE to enter Astral Form where you can place Stars with FIRE. Stars can be reactivated later, transforming them into a Nova Pulse, Nebula, or Gravity Well. When Cosmic Divide is charged, use ALT FIRE in Astral Form to begin aiming it, then FIRE to select two locations. An infinite Cosmic Divide connects the two points you select. Cosmic Divide blocks bullets and heavily dampens audio.",
                video: '',
            },
        ]
    },
    {
        id: '16',
        name: 'KAY/O',
        desc: "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/41354c181dc03318b79c77c5b99fee141e53cd20-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fe52e0efac73ec782b19a54e98a4658b03677407-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Initiator.svg',
            name: 'Initiator',
        },
         abilities: [
            {
                name: 'FLASH/DRIVE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/40a6811eadf8b794b94e2b40695e14b7c36281a8-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight.",
                video: '',
            },
            {
                name: 'ZERO/POINT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/6771e933554434541c91d58749aa0bbda58619e1-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.",
                video: '',
            },
            {
                name: 'FRAG/MENT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/40a6811eadf8b794b94e2b40695e14b7c36281a8-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.",
                video: '',
            },
            {
                name: 'NULL/CMD',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/dabcf9f31c4b63cb2c2e537655ca0cc3b6e08d24-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "INSTANTLY overload with polarized radianite energy that empowers KAY/O and causes large energy pulses to emit from his location. Enemies hit with these pulses are suppressed for a short duration.",
                video: '',
            },
        ]
    },
    {
        id: '17',
        name: 'Chamber',
        desc: 'Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.',
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/e0411bbb14b69f7ce3d18b56fcf33649fdcc6a4b-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0f5b668b77499c0051201389d6ac5e7343c9727f-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Sentinel.svg',
            name: 'Sentinel',
        },
         abilities: [
            {
                name: 'HEADHUNTER',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/d8a0105305eefcd44c6c5c823bc6638c18d3850c-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "ACTIVATE to equip a heavy pistol. ALT FIRE with the pistol equipped to aim down sights.",
                video: '',
            },
            {
                name: 'RENDEZVOUS',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/53b23071d96ffa2d27b73c5edb6ba8b0cf1dc30a-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "PLACE a teleport anchor. While on the ground and in range of the anchor, REACTIVATE to quickly teleport to the anchor. The anchor can be picked up to be REDEPLOYED.",
                video: '',
            },
            {
                name: 'TRADEMARK',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/6070c2db4a22931c24ff59349664a0c666a777c3-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "PLACE a trap that scans for enemies. When a visible enemy comes in range, the trap counts down and then destabilizes the terrain around them, creating a lingering field that slows players caught inside of it. The trap can be picked up to be REDEPLOYED.",
                video: '',
            },
            {
                name: 'TOUR DE FORCE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b2f83e29d7ff8fbc59aa568eca0ed82d30ab007f-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "ACTIVATE to summon a powerful, custom sniper rifle that will kill an enemy with any direct hit. Killing an enemy creates a lingering field that slows players caught inside of it.",
                video: '',
            },
        ]
    },
    {
        id: '18',
        name: 'Neon',
        desc: 'Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.',
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/911b0e61672512310b4f280a7ee65950544fee2a-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/14145d7bf9be17afa80c04ee4fbe200076cc1769-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Duelist.svg',
            name: 'Duelist',
        },
         abilities: [
            {
                name: 'RELAY BOLT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/fe17f22ec96403cf3b58b707db4f8e77531a47a6-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "INSTANTLY throw an energy bolt that bounces once. Upon hitting each surface, the bolt electrifies the ground below with a concussive blast.",
                video: '',
            },
            {
                name: 'HIGH GEAR',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2bfcbc821895e8d01a4f17e8f045dabf24c052e0-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "INSTANTLY channel Neon’s power for increased speed. When charged, ALT FIRE to trigger an electric slide. Slide charge resets every two kills.",
                video: '',
            },
            {
                name: 'FAST LANE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/46c16f398d28f7e029f42bc742f3838443e8a3d3-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "FIRE two energy lines forward on the ground that extend a short distance or until they hit a surface. The lines rise into walls of static electricity that block vision and damage enemies passing through them.",
                video: '',
            },
            {
                name: 'OVERDRIVE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/6a0012b92eba95e42828411c1e58d8d1c6420a5f-256x256.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "Unleash Neon's full power and speed for a short duration. FIRE to channel the power into a deadly lightning beam with high movement accuracy. The duration resets on each kill.",
                video: '',
            },
        ]
    },
    {
        id: '19',
        name: 'Fade',
        desc: 'Turkish bounty hunter, Fade, unleashes the power of raw nightmares to seize enemy secrets. Attuned with terror itself, she hunts targets and reveals their deepest fears—before crushing them in the dark.',
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ded0162c660c1b1f5f1667d040c80bb4140f6c4c-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/e7099cc13a665ed2b556d514e50984393ed49967-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Initiator.svg',
            name: 'Initiator',
        },
         abilities: [
            {
                name: 'SEIZE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8f34a932e08cdc5e6472b445f5c2dc150228eda7-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "Equip an orb of nightmare ink. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the ink will explode and create a zone in which enemies who are caught in it cannot escape the zone by normal means. RE-USE the ability to drop the projectile early in-flight",
                video: '',
            },
            {
                name: 'HAUNT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/272ae63510fddab9fa751f59349def5bd09a40b2-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "Equip a nightmarish entity. FIRE to throw the orb which will plummet to the ground after a set amount of time. Upon hitting the ground, the orb will turn into a nightmarish entity that will reveal the location of enemies caught in its line of sight. Enemies can destroy this entity. RE-USE the ability to drop the projectile early in-flight.",
                video: '',
            },
            {
                name: 'PROWLER',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/0389b190631d8c27a09e147070aab4b706113959-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a Prowler. FIRE will send the Prowler out, causing it to travel in a straight line. The Prowler will lock onto any enemies or trails in their frontal vision cone and chase them, nearsighting them if it reaches them. HOLD the FIRE button to steer the Prowler in the direction of your crosshair.",
                video: '',
            },
            {
                name: 'NIGHTFALL',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/7ba7b49c678cfcf07564ab57907c60636bb916b0-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP the power of Fear. FIRE to send out a wave of nightmare energy that can traverse through walls. The energy creates a trail to the opponent as well as deafens and decays them.",
                video: '',
            },
        ]
    },
    {
        id: '20',
        name: 'Harbor',
        desc: "Hailing from India's coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies and pummel those that oppose him.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/a5f673b653fc9f09f01f1be6f5c669e5af42e958-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1246b5c517f6c8fa660e884a7032c1c54994003e-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Controller.svg',
            name: 'Controller',
        },
         abilities: [
            {
                name: 'COVE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/e988e2cc973a4c6791db0b87c13ce6a02162ed89-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a sphere of shielding water. FIRE to throw. ALT FIRE to underhand throw. Upon impacting the ground, spawn a destructible water shield that blocks bullets.",
                video: '',
            },
            {
                name: 'HIGH TIDE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/e6af3e9f6f2259ffe3c69448adc9f89beebc4f80-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a wall of water. FIRE to send the water forward along the ground. HOLD FIRE to guide the water in the direction of your crosshair, passing through the world, spawning a wall along the water's path. ALT FIRE while bending to stop the water early. Players hit are SLOWED",
                video: '',
            },
            {
                name: 'CASCADE',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/88032d13dc1b40e61bc763749c5aae29a056735d-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a wave of water. FIRE to send the wave rolling forward and through walls. RE- USE to stop the wave. Players hit are SLOWED.",
                video: '',
            },
            {
                name: 'RECKONING',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8fb4f759e45fdfb5c6888a456ef6ec5e027ad052-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP the full power of your Artifact. FIRE to summon a geyser pool on the ground. Enemy players in the area are targeted by successive geyser strikes. Players caught within a strike are CONCUSSED.",
                video: '',
            },
        ]
    },
    {
        id: '21',
        name: 'Gekko',
        desc: 'Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.',
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/eaea442872157b1108ae8a5483de2d9fd3de40ad-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8d88f133f735f6a9077679b1ece754e5624c728e-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Initiator.svg',
            name: 'Initiator',
        },
         abilities: [
            {
                name: 'WINGMAN',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/0be9c33b718eb7f941890558e661f147802cf762-256x236.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP Wingman FIRE to send Wingman forward seeking enemies. Wingman unleashes a concussive blast toward the first enemy he sees ALT FIRE when targeting a Spike site or planted Spike to have Wingman defuse or plant the Spike. To plant, Gekko must have the Spike in his inventory. When Wingman expires he reverts into a dormant globule INTERACT to reclaim the globule and gain another Wingman charge after a short cooldown.",
                video: '',
            },
            {
                name: 'DIZZY',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/5cd2d39b6747b897e6648172d084d355477ea545-255x248.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP Dizzy FIRE to send Dizzy soaring forward through the air. Dizzy charges then unleashes plasma blasts at enemies in line of sight. Enemies hit by her plasma are blinded. When Dizzy expires she reverts into a dormant globule INTERACT to reclaim the globule and gain another Dizzy charge after a short cooldown.",
                video: '',
            },
            {
                name: 'MOSH PIT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/6a9ead27349e4fa318bc426ac57f9addb2ecf143-252x175.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP Mosh FIRE to throw Mosh like a grenade ALT FIRE to throw underhand. Upon landing Mosh duplicates across a large area then after a short delay explodes.",
                video: '',
            },
            {
                name: 'THRASH',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/589f75f0e50a8c1c465e2bf95599d140c52c69f4-254x241.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP Thrash FIRE to link with Thrash's mind and steer her through enemy territory ACTIVATE to lunge forward and explode, detaining any enemies in a small radius. When Thrash expires she reverts into a dormant globule INTERACT to reclaim the globule and gain another Thrash charge after a short cooldown. Thrash can be reclaimed once.",
                video: '',
            },
        ]
    },
    {
        id: '22',
        name: 'Deadlock',
        desc: "Norwegian operative Deadlock deploys an array of cutting-edge nanowire to secure the battlefield from even the most lethal assault. No one escapes her vigilant watch, nor survives her unyielding ferocity.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/806fdea778ca34a6afe8ec5d7a074e36a09b0036-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/477284dfe402a85abcf6b07512bcd6f01c8fe60e-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Sentinel.svg',
            name: 'Sentinel',
        },
         abilities: [
            {
                name: 'SONIC SENSOR',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/3abe232b9adae7ae2d96a5b87d0a4fecb8a3bd5a-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a Sonic Sensor. FIRE to deploy. The sensor monitors an area for enemies making sound. It concusses that area if footsteps, weapons fire, or significant noise are detected.",
                video: '',
            },
            {
                name: 'BARRIER MESH',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/f712588876f0df7fa899418b4f2b2b6fbccfedbf-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a Barrier Mesh disc. FIRE to throw forward. Upon landing, the disc generates barriers from the origin point that block character movement.",
                video: '',
            },
            {
                name: 'GRAVNET',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/4516d714505d1a69918c8405dda463aeb7c5718b-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a GravNet grenade. FIRE to throw. ALT FIRE to lob the grenade underhand. The GravNet detonates upon landing, forcing any enemies caught within to crouch and move slowly.",
                video: '',
            },
            {
                name: 'ANNIHILATION',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/fba13a9ca1a5efb4e3456b96c0e78cbf4b3ec46d-512x512.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a Nanowire Accelerator. FIRE to unleash a pulse of nanowires that captures the first enemy contacted. The cocooned enemy is pulled along a nanowire path and will die if they reach the end, unless they are freed. The nanowire cocoon is destructible.",
                video: '',
            },
        ]
    },
    {
        id: '23',
        name: 'Iso',
        desc: "Chinese fixer for hire, Iso falls into a flow state to dismantle the opposition. Reconfiguring ambient energy into bulletproof protection, he advances with focus towards his next duel to the death.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/95a070badaa024eead9138d3e9255d8bcb155caa-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2c35cef9c38283f8478d1e808b1c129f371e50b3-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Duelist.svg',
            name: 'Duelist',
        },
         abilities: [
            {
                name: 'UNDERCUT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/5b981e9b6c35a518177ff1c7170a213e36f393c7-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a molecular bolt. Fire to throw it forward, applying a brief FRAGILE to all players it touches. The bolt can pass through solid objects, including walls.",
                video: '',
            },
            {
                name: 'DOUBLE TAP',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ac58844d85858401edcefdb8e38ec23bfb672481-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "START a focus timer. Once completed, enter a flow state during which downed enemies you kill or damage generate an energy orb. Shooting this orb grants you a shield which absorbs one instance of damage from any source.",
                video: '',
            },
            {
                name: 'CONTINGENCY',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/2439fd36c37debf4bd082c0609b356733577de04-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP to assemble prismatic energy. FIRE to push an indestructible wall of energy forward that blocks bullets.",
                video: '',
            },
            {
                name: 'KILL CONTRACT',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/67aa0a3de742de9793d4b1fbfae38961c8d0076f-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP an interdimensional arena. FIRE to hurl a column of energy through the battlefield, pulling you and the first enemy hit into the arena. You and your opponent duel to the death.",
                video: '',
            },
        ]
    },
    {
        id: '24',
        name: 'Clove',
        desc: "Scottish troublemaker Clove makes mischief for enemies in both the heat of combat and the cold of death. The young immortal keeps foes guessing, even from beyond the grave, their return to the living only ever a moment away.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/9b7acd6a5e06ac50039e4c8ec4e0c30e8dba7f5c-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9f02060077f9d61dbe89555a339e6231006d9b7b-616x822.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Controller.svg',
            name: 'Controller',
        },
         abilities: [
            {
                name: 'Meddle',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/b193ce03089f357e330a51876dbb7172444e80da-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a fragment of immortality essence. FIRE to throw the fragment, which erupts after a short delay and temporarily decays all targets caught inside.",
                video: '',
            },
            {
                name: 'Ruse',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/5ce846ce8e5ae7ce7904f0c31824f7729307743e-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP to view the battlefield. FIRE to set the locations where Clove’s clouds will settle. ALT FIRE to confirm, launching clouds that block vision in the chosen areas. Clove can use this ability after death.",
                video: '',
            },
            {
                name: 'Pick-Me-Up',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8207dec024cbac83685eb14379055e25d8c3bbed-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "INSTANTLY absorb the life force of a fallen enemy that Clove damaged or killed, gaining haste and temporary health.",
                video: '',
            },
            {
                name: 'Not Dead Yet',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/cb541873b62077199333f468fddd54620635870a-128x128.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "After dying, ACTIVATE to resurrect. Once resurrected, Clove must earn a kill or a damaging assist within a set time or they will die.",
                video: '',
            },
        ]
    },
    {
        id: '25',
        name: 'Vyse',
        desc: "Metallic mastermind Vyse unleashes liquid metal to isolate, trap, and disarm her enemies. Through cunning and manipulation, she forces all who oppose her to fear the battlefield itself.",
        img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/baa1f0d6255d92329812f6a689193536b4093db4-5120x1772.png?auto=format&fit=fill&q=80&w=1899',
        shortImg: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/370e4b820670ef0bac7e685f6e8c5e64d19f1890-587x900.png?auto=format&fit=fill&q=80&w=404',
        role: {
            img: 'src/assets/Role/Sentinel.svg',
            name: 'Sentinel',
        },
         abilities: [
            {
                name: 'Shear',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/665d8820138b5d817a7f6f6522e983edd1ea9df7-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP filaments of liquid metal. FIRE to place a hidden wall trap. When an enemy crosses, an indestructible wall bursts from the ground behind them. The wall lasts for a brief time before dissipating.",
                video: '',
            },
            {
                name: 'Arc Rose',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f0ac7fb5d31a65820bcc22217abcafbbfb4077e7-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP an Arc Rose. Target a surface and FIRE to place a stealthed Arc Rose, or ALT Fire to place the Arc Rose through it. REUSE to blind all players looking at it. This ability can be picked up to be REDEPLOYED.",
                video: '',
            },
            {
                name: 'Razorvine',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3a3e90a9b09ba95e7aed7b3f5979ed88d62d2785-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a nest of liquid metal. FIRE to launch. Upon landing, the nest becomes invisible. When ACTIVATED, it sprawls out into a large razorvine nest which slows and damages all players who move through it.",
                video: '',
            },
            {
                name: 'Steel Garden',
                img: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d67be7669c8a4b483305cf7501c27c25adb44236-1024x1024.png?auto=format&fit=crop&q=80&h=60&w=60&crop=center',
                desc: "EQUIP a bramble of liquid metal. FIRE to send the metal erupting from you as a torrent of metal thorns, JAMMING enemy primary weapons after a brief windup.",
                video: '',
            },
        ]
    },

];