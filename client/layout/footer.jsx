import '../assets/style/footer.styl'

export default{
    data() {
        return {
            author: 'jokcy'
        }
    },
    render(){
        return(
            <div id="footer">
                <span>Write By {this.author} </span>
            </div>
        )
    }
}