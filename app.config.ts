// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Rosalana Dev',
    description: 'My awesome library of components',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      twitter: 'michal_bany',
      github: 'michalbany/rosalana-dev',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },
    github: {
      dir: '.',
      branch: 'master',
      repo: 'rosalana-dev',
      owner: 'michalbany',
      edit: false
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
