import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let data = require('./data.json');
// const PropTypes = require ('prop-types');

// header component
class Header extends React.Component {
    render() {
        return (<div id='head'>
            <h4 id='hello'>Reddit Clone</h4>
        </div>);
    }
};

//new post button component && filter input && sort by component

class Newpost extends React.Component {
    render() {
        return (
            <div>
                <button type='submit' onClick={this.props.makePost}>New Post</button>
                <input id='filterinput' placeholder='filter'></input>
                <div className="dropdown">
                    <a>Sort By <img id='dropdownimg'src='https://banner2.kisspng.com/20180329/baq/kisspng-chevron-corporation-computer-icons-arrow-icon-desi-down-arrow-5abd35014a4866.6604741715223493133043.jpg' /></a>
                    <div className="dropdown-content">
                       <ul>
                           <li><a href= ''>Votes</a></li>
                           <li><a href= ''>Dates</a></li>
                           <li><a href= ''>Title</a></li>
                       </ul>
                    </div>
                </div>
            </div>
        )
    }
};

class NewPostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: '',
            body: '',
            author: '',
            img: ''

        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState(
            { [name]: value },
        )
    }
    handleSubmit(e) {
        e.preventDefault();

        this.props.export(this.state);
        //reset this state to blank
        this.setState({
            id: '',
            title: '',
            body: '',
            author: '',
            img: ''
        })
    }

    // {() => this.prop.func()}
    render() {
        return (
            <div className="form1">
                <form onSubmit={this.handleSubmit}>

                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleInput} />
                    </div>

                    <label className="label">Body</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="body"
                            value={this.state.body}
                            onChange={this.handleInput} />
                    </div>

                    <label className="label">Author</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="author"
                            value={this.state.author}
                            onChange={this.handleInput} />
                    </div>

                    <label className="label">Image Url</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            name="img"
                            value={this.state.img}
                            onChange={this.handleInput} />
                    </div>

                    <input type="submit" value="Create Post" />


                </form>
            </div>


        );
    }
}
function sort(x, y) {
    if (x.votes > y.votes)
        return -1;
    if (x.votes < y.votes)
        return 1;
    return 0;
}

function PostList(props) {
    let postSorted = Object.values(props.posts).sort(sort);
    return (
        <div className='postList'>
            {postSorted.map(post => {
                return (
                    <div
                        key={post.id}
                        className='postBox'>
                        <div className='postImg'>
                            <img id='postImg' src={post.img} alt={'img for ' + post.title} />
                        </div>
                        <div className = 'vote'>
                  <img id = 'upvote' 
                      src="http://kazoocmh.org/portals/4/007408-blue-jelly-icon-arrows-hand-clear-pointer-up.png" 
                      alt="upvote"
                      onClick = {(e)=>props.upvote(post.id)}
                      />
                  <img id = 'downvote' 
                      src="http://kazoocmh.org/portals/4/007408-blue-jelly-icon-arrows-hand-clear-pointer-up.png" 
                      alt="downvote"
                      onClick = {(e)=>props.downvote(post.id)}
                      />
                  
  
                </div>
                        <div className='postTitle'>
                            <h2>{post.title}</h2>
                        </div>
                        <div className='postBody'>
                       
                            <p>{post.body}</p>
                            
                            <div className='time'>time    ||  <div  className= 'voteno' >{post.votes} Votes</div>
                            </div>
                            <div className='author'>{post.author}</div>
                           
                        </div>
                       

                    </div>
                )
            })}
        </div>



    )
}



class App extends React.Component {
    constructor(props) {
        super(props)
        let mydata = JSON.stringify(data);
        for (let i = 0; i < mydata.length; i++) {
            this.state = {
                makingPost: false,
                postCounter: 2,

                posts: {
                    1: {
                        id: 1,
                        title: "The Haunter in the Dark",
                        body: "There was something more. The butler, tougher-fibred than I, did not wish to go thither because it suggests something Wilcox had told no one could perhaps crawl inconspicuously through the arched gate into Celephaïs and in charge of the lower hall, at one point there lay a trim white Nahum Gardner house amidst its fertile gardens and watch the dense personnel of such a doubt, although no ghostly evidence was damnably vast and imposing labyrinths of stone with a notorious cult-leader, lately expelled from England, who had suffered but little idea of any hippocephalic bird. Its outline against the walls of slippery thumping.",
                        author: "Robert Blake",
                        img: "https://r.hswstatic.com/w_907/gif/stufftoblowyourmind-23-2014-04-The_Haunter_of_the_Dark_by_PeteAmachree.jpg",
                        votes: 5,
                    },
                    2 : {
                        id: 2,
                        title: "The Colour out of Space",
                        body: "Horrible beyond conception was the Frye yard. The natives, all of a tangible object with measureable dimensions could so easily lead back at the virtual identity, and reflecting on what had set out through the solid form. One definite flash I shall go mad itself at Plate XII, which represented in gruesome detail a butcher’s shop of the frightful position of subordination and pleading. Noyes’s tones exuded a kind of jewellery that the kylix parted, and Willett appeared in the dark. Only once in a throaty voice of my prospective host. From his cursory survey were made. From the very moment I decided that the visions (rather than the worst had happened.",
                        author: "Nahum Gardner",
                        img: "https://f4.bcbits.com/img/a2106523465_10.jpg",
                        votes: 2,
                    },
                }
            }
        }
    this.openForm = this.openForm.bind(this);
    this.import = this.import.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);

    }
    openForm() {
        this.setState(
            { makingPost: true }
        )
    }
    
    import(data) {
        let newPost = {
            title: data.title,
            body: data.body,
            author: data.author,
            img: data.img,
            votes: null
        }
        let id = this.state.postCounter;
        this.setState((e) => {
            e.posts[id] = newPost;
            e.postCounter = e.postCounter + 1;
            e.makingPost = false;
            return e;
        })
    }
    upvote(e,id) {
        this.setState ( (e) => {
            console.log(e)
          e.posts[id].votes = e.posts[id].votes +1;
          return e.posts[id].votes;
        })
      }
      downvote(e,id) {
        this.setState ( (e) => {
          if (e.posts[id].votes > 0) {
          e.posts[id].votes = e.posts[id].votes -1
          };
          return e;
        })
    }    

    render() {
        return (
            <div className='container'>
                <Header />
                < Newpost
                    makePost={this.openForm} />

                {this.state.makingPost &&
                    < NewPostForm
                        id={this.postCounter}
                        export={this.import}
                    />}
                <PostList
                    posts={this.state.posts}
                    upvote = {this.upvote}
                    downvote = {this.downvote}
                />

            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('index')
)

