import '../assets/style/footer.styl'

export default{
  data () {
    return {
      author: 'xiaoheng'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>Write By {this.author} </span>
      </div>
    )
  }
}
