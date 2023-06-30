import dayjs from 'dayjs';

/** Coaches ************************************************************************* */
export const mockCoaches = [
  {
    id: 1,
    name: 'Divya',
    trainingNames: ['facial', 'scrub'],
    image: {
      fileName: 'divya.jpg',
      authorName: 'Pradeep Ranjan',
      authorLink:
        'https://unsplash.com/@tinywor1d?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      platformName: 'Unsplash',
      platformLink: 'https://unsplash.com/',
    },
  },
  {
    id: 2,
    name: 'Sandra',
    trainingNames: ['facial', 'gym'],
    image: {
      fileName: 'sandra.jpg',
      authorName: 'Pj Go',
      authorLink:
        'https://unsplash.com/@phizzahot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      platformName: 'Unsplash',
      platformLink: 'https://unsplash.com/',
    },
  },
  {
    id: 3,
    name: 'Michael',
    trainingNames: ['facial', 'scrub', 'gym'],
    image: {
      fileName: 'michael.jpg',
      authorName: 'Fortune Vieyra',
      authorLink:
        'https://unsplash.com/@fortunevieyra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      platformName: 'Unsplash',
      platformLink: 'https://unsplash.com/',
    },
  },
  {
    id: 4,
    name: 'Mateo',
    trainingNames: ['gym'],
    image: {
      fileName: 'mateo.jpg',
      authorName: 'Luis Quintero',
      authorLink:
        'https://unsplash.com/@jibarofoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      platformName: 'Unsplash',
      platformLink: 'https://unsplash.com/',
    },
  },
];

/** APPOINTMENTS ************************************************************************* */
export const mockAppointments = {
  1: [
    {
      id: 10,
      trainingName: 'Massage',
      userId: 1,
      dateTime: dayjs().toDate(),
    },
    {
      id: 11,
      trainingName: 'Massage',
      dateTime: dayjs().add(-1, 'hours').toDate(),
    },
  ],
  12: [
    {
      id: 12,
      trainingName: 'Scrub',
      dateTime: dayjs().add(2, 'hours').subtract(4, 'days').toDate(),
    },
    {
      id: 13,
      trainingName: 'Facial',
      dateTime: dayjs().toDate(),
    },
  ],
  28: [
    {
      id: 16,
      trainingName: 'Massage',
      dateTime: dayjs().add(3, 'hours').toDate(),
    },
  ],
  30: [
    {
      id: 17,
      trainingName: 'Scrub',
      dateTime: dayjs().add(2, 'hours').toDate(),
    },
    {
      id: 18,
      trainingName: 'Scrub',
      dateTime: dayjs().add(-2, 'hours').toDate(),
    },
  ],
  31: [
    {
      id: 19,
      trainingName: 'Massage',
      dateTime: dayjs().add(3, 'hours').toDate(),
    },
    {
      id: 20,
      trainingName: 'Facial',
      dateTime: dayjs().toDate(),
    },
  ],
};

/** Trainings ************************************************************************* */
export const mockTrainings = [
  {
    id: 1,
    name: 'Massage',
    durationInMinutes: 60,
    image: {
      fileName: 'gym.jpg',
      authorName: 'Mariolh',
      authorLink:
        'https://pixabay.com/users/mariolh-62451/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=567021',
      platformName: 'Pixabay',
      platformLink:
        'https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=567021',
    },
    description: 'Restore your sense of peace and ease with a relaxing gym.',
  },
  {
    id: 2,
    name: 'Facial',
    durationInMinutes: 30,
    image: {
      fileName: 'facial.jpg',
      authorName: 'engin akyurt',
      authorLink:
        'https://unsplash.com/@enginakyurt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
      platformName: 'Unsplash',
      platformLink: 'https://unsplash.com/',
    },
    description: 'Give your face a healthy glow with this cleansing training.',
  },
  {
    id: 3,
    name: 'Scrub',
    durationInMinutes: 15,
    image: {
      fileName: 'scrub.jpg',
      authorName: 'Monfocus',
      authorLink:
        'https://pixabay.com/users/monfocus-2516394/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5475880',
      platformName: 'Pixabay',
      platformLink:
        'https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5475880',
    },
    description:
      'Invigorate your body and spirit with a scented Himalayan salt scrub.',
  },
];

/** USER APPOINTMENTS ************************************************************************* */
export const mockUserAppointments = [
  {
    id: 10,
    trainingName: 'Massage',
    userId: 1,
    dateTime: dayjs().toDate(),
  },
  {
    id: 13,
    trainingName: 'Facial',
    dateTime: dayjs().add(3, 'days').toDate(),
  },
];

/** USER  ************************************************************************* */
export const mockUser = {
  id: 1,
  email: 'test@test.com',
  name: 'Test Q. User',
  address: '123 Elm Street',
};
