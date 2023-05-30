import darkTheme from 'prism-react-renderer/themes/synthwave84/index.cjs.js';

const xefDark = {
  plain: {
    ...darkTheme.plain,
    backgroundColor:
      'linear-gradient(62.54deg, #000 9.29%, var(--ifm-background-color) 91.64%)',
    backgroundImage: '#34294f',
    color: 'var(--ifm-color-content)',
    textShadow:
      '0 0 2px #100c0f, 0 0 5px var(--ifm-color-primary-darkest), 0 0 10px #fff3',
  },
  styles: [
    ...darkTheme.styles,
    {
      types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#495495',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#ccc',
      },
    },
    {
      types: [
        'tag',
        'attr-name',
        'namespace',
        'number',
        'unit',
        'hexcode',
        'deleted',
      ],
      style: {
        color: 'var(--xef-color-complementary)',
      },
    },
    {
      types: ['property', 'selector'],
      style: {
        color: '#72f1b8',
        textShadow: '0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475',
      },
    },
    {
      types: ['function-name'],
      style: {
        color: '#6196cc',
      },
    },
    {
      types: ['boolean', 'selector-id', 'function'],
      style: {
        color: 'var(--xef-color-secondary)',
        textShadow:
          '0 0 2px #001716, 0 0 1px var(--ifm-color-primary-darkest), 0 0 1px var(--ifm-color-primary-darker), 0 0 3px var(--ifm-color-primary)',
      },
    },
    {
      types: ['class-name', 'maybe-class-name', 'builtin'],
      style: {
        color: 'var(--xef-color-primary-lightest)',
        textShadow:
          '0 0 2px #000, 0 0 10px var(--xef-color-secondary-dark), 0 0 5px var(--xef-color-secondary-dark), 0 0 16px var(--xef-color-secondary-dark)',
      },
    },
    {
      types: ['constant', 'symbol'],
      style: {
        color: 'var(--xef-color-primary)',
        textShadow:
          '0 0 2px #100c0f, 0 0 5px var(--ifm-color-primary-darkest), 0 0 10px #fff3',
      },
    },
    {
      types: ['important', 'atrule', 'keyword', 'selector-class'],
      style: {
        color: 'var(--ifm-color-primary-lightest)',
        textShadow:
          '0 0 2px #393a33, 0 0 8px var(--xef-color-secondary-dark), 0 0 2px var(--xef-color-secondary-dark)',
      },
    },
    {
      types: ['string', 'char', 'attr-value', 'regex', 'variable'],
      style: {
        color: 'var(--xef-color-secondary-dark)',
      },
    },
    {
      types: ['parameter'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity', 'url'],
      style: {
        color: '#67cdcc',
      },
    },
    {
      types: ['operator'],
      style: {
        color: '#ffb488',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['entity'],
      style: {
        cursor: 'help',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: 'green',
      },
    },
  ],
};

export { xefDark };
