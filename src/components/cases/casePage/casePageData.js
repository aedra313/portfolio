import ralabsCover from './../../../media/cases/ralabs/ralabsCover.png';
import ralabsLogo from './../../../media/cases/ralabs/ralabsLogo.svg';
import ralabsProject1 from './../../../media/cases/ralabs/ralabsProject1.png';
import ralabsProject2 from './../../../media/cases/ralabs/ralabsProject2.png';
import ralabsProcess1 from './../../../media/cases/ralabs/ralabsProcess1.png';
import ralabsProcess2 from './../../../media/cases/ralabs/ralabsProcess2.png';
import lumisCover from './../../../media/cases/lumis/lumisCover.png';
import lumisProject1 from './../../../media/cases/lumis/lumisProject1.png';
import lumisProcess1 from './../../../media/cases/lumis/lumisProcess1.png';
import lumisProcess2 from './../../../media/cases/lumis/lumisProcess2.png';

const DATA = {
  ralabs: {
    intro: {
      name: 'Ralabs',
      link: 'https://ralabs.org/',
      description: 'Creative copy for a Ukrainian outsourcing company’s website. Half-serious, puns, jokes \n' +
          '& Pigeon emoji intended.',
      tags: ['software', 'healthcare'],
      img: ralabsCover,
    },
    feedback: {
      textLine1: 'Mariia who was in charge is very talented and wow-ed us with the copy - bold, emotional and straight to the point.',
      textLine2: 'The copy we have – GENIOUS.',
      name: 'Yulia Darmorez',
      position: 'Lead Marketing Manager',
      company: 'Ralabs',
      logo: ralabsLogo,

    },
    aboutProject: {
      textLine1: 'In Ukraine, there are more than 1,000 software dev companies. And only one Ralabs. Because Ralabs isn’t just another “expert mobile professional software app in 2 weeks top development company”.',
      textLine2: 'Ralabs comes with a story. Style. And spirit.',
      img1: ralabsProject1,
      img2: ralabsProject2,
    },
    aboutProcess: {
      textLine1: 'The task was to capture that spirit, boldness, and atmosphere inside of the client’s team with a new, wholly rethought copy. To make Ralabs stand out among those 999 software dev companies.',
      textLine2: 'And, of course, add a pinch of SEO optimization ✨',
      img1: ralabsProcess1,
      img2: ralabsProcess2,
    },
  },
  lumis: {
    intro: {
      name: 'Lumis',
      link: 'https://lumis.com',
      description: ' ',
      tags: ['software', 'healthcare'],
      img: lumisCover,
    },
    feedback: {
      textLine1: '',
      textLine2: '',
      name: '',
      position: '',
      company: '',
      logo: null,

    },
    aboutProject: {
      textLine1: 'Ever skipped your domain’s renewal date and lost it to another person? Oh, I have — and it still hurts. For ppl like me, there’s Lumis, a team of domain brokers who go and talk to your beloved domain’s owners on your behalf. And sometimes manage to get those domains back to you. ',
      textLine2: 'If Superman was real, he’d probably be doing this, too. For humanity.',
      img1: lumisProject1,
      img2: null,
    },
    aboutProcess: {
      textLine1: 'The old website was old, strict & too official. The new design was not going to be. ',
      textLine2: 'So the copy was re-made in favor of a more light-hearted and simplified version, with fewer words but more fun. To explain to new people what the team is about and if they can get them that goddamn google.com domain (apparently, not).',
      img1: lumisProcess1,
      img2: lumisProcess2,
    },
  },
};

export default DATA;
