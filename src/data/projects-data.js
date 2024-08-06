import eight from '../assets/svg/projects/eight.svg'
import five from '../assets/svg/projects/five.svg'
import four from '../assets/svg/projects/four.svg'
import one from '../assets/svg/projects/one.svg'
import seven from '../assets/svg/projects/seven.svg'
import six from '../assets/svg/projects/six.svg'
import three from '../assets/svg/projects/three.svg'
import two from '../assets/svg/projects/two.svg'
import morpio from '../assets/png/morpio.png'
import yieldy from '../assets/png/yieldy.png'
import senjayer from '../assets/png/senjayer.png'
import june from '../assets/png/june.png'
import code from '../assets/png/code.png'



export const projectsData = [
    
    
    {
        id: 1,
        projectName: 'Yieldy',
        projectDesc: 'Ceci est un projet pour une application mobile réalisée avec React Native et Django pour l\'investissement financier personnel.',
        tags: ['React Native', 'Django'],
        code: '',
        demo: 'https://drive.google.com/file/d/1Kr2x55yP8IGIh6Mt0aM030N1-nhMjz2x/view?usp=sharing',
        image: yieldy
    },
    {
        id: 2,
        projectName: 'Senjayer',
        projectDesc: 'Ceci est un projet de vente de billets d\'événements réalisé avec ReactJs.',
        tags: ['ReactJs'],
        code: '',
        demo: 'https://drive.google.com/drive/folders/1fvVNtM2qz_girskLGHtmYZp-pneMtObD?usp=sharing',
        image: senjayer
    },
    {
        id: 3,
        projectName: 'June',
        projectDesc: 'June est un projet de prise de rendez-vous et de suivi pour un accompagnement psychologique.',
        tags: ['ReactJs','Ionic'],
        code: '',
        demo: 'https://drive.google.com/drive/folders/1SW1-6ZvrmwrtH36KFQA78P2uDbqRpkUh?usp=sharing',
        image: june
    },
    {
        id: 4,
        projectName: 'Morpio Game',
        projectDesc: 'Ceci est un projet de jeu morpio réalisé avec Spring Boot et React Native.',
        tags: ['Spring Boot', 'React Native'],
        code: 'https://github.com/Shadows97/morpio-game',
        demo: 'https://drive.google.com/file/d/19TGLRJtqdXpYSDZexTGKMWatdlc1MJRu/view?usp=sharing',
        image: morpio
    },
    {
        id: 5,
        projectName: 'Numassa',
        projectDesc: 'Ceci est un projet pour une application mobile réalisée avec React Native et Odoo pour vendre des produits dont la date d\'expiration est supérieure à 30 jours.',
        tags: ['React Native', 'Odoo'],
        code: 'https://github.com/Shadows97/NumassaMobileApp',
        demo: 'https://github.com/Shadows97/NumassaMobileApp',
        image: code
    },
    {
        id: 6,
        projectName: 'Paylio',
        projectDesc: 'Ce projet est un exemple de plateforme de transfert d\'argent réalisée avec Laravel.',
        tags: ['Laravel'],
        code: 'https://github.com/Shadows97/paylio',
        demo: '',
        image: code
    },
    {
        id: 7,
        projectName: 'PySubtitle',
        projectDesc: 'PySubtitle est une bibliothèque Python conçue pour automatiser le processus de génération de sous-titres pour les fichiers vidéo. Elle extrait l\'audio des fichiers vidéo, convertit l\'audio en texte en utilisant les services de reconnaissance vocale de Google, et génère des fichiers VTT (Web Video Text Tracks) pour les sous-titres. Cette bibliothèque est particulièrement utile pour créer des sous-titres pour des vidéos dans différentes langues, rendant le contenu plus accessible à un public plus large.',
        tags: ['Python'],
        code: 'https://github.com/Shadows97/PySubtitle',
        demo: 'https://pypi.org/project/PySubtitle/',
        image: code
    },
    {
        id: 8,
        projectName: 'Stream-Server',
        projectDesc: 'Ceci est un projet de serveur de streaming pour la détection réalisé avec Flask.',
        tags: ['Python', 'Flask'],
        code: 'https://github.com/Shadows97/Stream-Server',
        demo: '',
        image: code
    },
    {
        id: 9,
        projectName: 'Object Detection Mobile App',
        projectDesc: 'Ceci est un projet de détection d\'objets réalisé avec AWS Rekognition et React Native.',
        tags: ['React Native', 'AWS Rekognition'],
        code: 'https://github.com/Shadows97/mobile-app-object-detection',
        demo: 'https://github.com/Shadows97/mobile-app-object-detection',
        image: code
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/