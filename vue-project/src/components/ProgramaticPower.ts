import { h } from 'vue'

const vnode = h('div', { id: 'foo', class: 'bar' }, [])

export default {
  render() {
    return vnode
  }
}
