import Icon1 from './assets/img/howitworks-1.2881a2d7.svg';
import Icon2 from './assets/img/howitworks-2.b6b60dae.svg';
import Icon3 from './assets/img/howitworks-3.37db1139.svg';

export const homepageContents = [
  {
    id: 1,
    icon: Icon1,
    title: 'At age 35',
    paragraph:
      'Peter and his wife, Jane got a home loan for their new home. He buys eDecreasingTerm that matches his home loan.',
    cards: [
      {
        id: 1,
        orange: {
          title: 'Home Loan Details',
          contents: [
            {
              id: 1,
              header: 'Home Loan',
              value: 'SGD 500,000',
            },
            {
              id: 2,
              header: 'Loan Tenure',
              value: '25 Years',
            },
            {
              id: 3,
              header: 'Interest Rate',
              value: '3%',
            },
          ],
        },
        violet: {
          title: 'Policy Details',
          contents: [
            {
              id: 1,
              header: 'Coverage Amount',
              value: 'SGD 500,000',
            },
            {
              id: 2,
              header: 'Policy Term',
              value: '25 Years',
            },
            {
              id: 3,
              header: 'Decreasing Rate',
              value: '3%',
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    icon: Icon2,
    title: 'During the policy term',
    paragraph:
      'Every month, Peter pays a premium of $31 for this policy. The coverage amount decreases at the same rate as his home loan.',
    cards: [
      {
        id: 1,
        orange: {
          title: 'Home Loan Details',
          contents: [
            {
              id: 1,
              header: 'Home Loan',
              value: 'SGD 486,286',
            },
            {
              id: 2,
              header: 'Loan Tenure',
              value: '23 Years',
            },
            {
              id: 3,
              header: 'Interest Rate',
              value: '3%',
            },
          ],
        },
        violet: {
          title: 'Policy Details',
          contents: [
            {
              id: 1,
              header: 'Coverage Amount',
              value: 'SGD 486,286',
            },
            {
              id: 2,
              header: 'Policy Term',
              value: '23 Years',
            },
            {
              id: 3,
              header: 'Decreasing Rate',
              value: '3%',
            },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    icon: Icon3,
    title: 'At age 40',
    paragraph:
      'He is unfortunately diagnosed with a terminal illness. Jane can use the lumpsum payout from this policy to pay off their outstanding home loan.',
    hasBorderLess: true,
    cards: [
      {
        id: 1,
        orange: [
          { id: 1, header: 'Outstandling Home Loan', value: 'SGD 442,626' },
        ],
        violet: [{ id: 2, header: 'Lumpsum Payout', value: 'SGD 442,626' }],
      },
    ],
  },
];
