import Logo from './Logo.vue'

export default {
  title: 'Logo',
  component: Logo
}

export const Basic = () => ({
  components: { Logo },
  template: '<Logo></Logo>'
})
