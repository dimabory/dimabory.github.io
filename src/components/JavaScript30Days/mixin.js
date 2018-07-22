export default function (data, init = () => true) {
  return {
    data,
    mounted () {
      init()
      this.$emit('mounted', data.call(this))
    }
  }
}
