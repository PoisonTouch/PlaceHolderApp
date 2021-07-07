import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Post from '../Pages/Post'
import PostCard from './PostCard'

class LoadPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts:[],
            users:[],
            isLoading:true,
            isError: false
        }
    }

    

    async componentDidMount() {
        this.setState({isLoading:true})

        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const response1 = await fetch("https://jsonplaceholder.typicode.com/users")
        if(response.ok){
            const posts = await response.json()
            this.setState({posts,isLoading:false})
        }else{
            this.setState({isError:true,isLoading:false})
        }
        if(response1.ok){
            const users = await response1.json()
            this.setState({users,isLoading:false})
        }else{
            this.setState({isError:true,isLoading:false})
            
        }
    }

    getNameUser(UserID)
    {
        var usersid =this.state.users.map( user => {
            return (
                user.id
            )
        })
        var usersname =this.state.users.map( user => {
            return (
                user.name
            )
        })
        let NameUser=""
        for(let i=0;i<10;i++){
            if(UserID==usersid[i]){
                NameUser=usersname[i]
            }
        }
        return NameUser
    }
    

    renderPost = () => {
        return this.state.posts.map( post => {
            return (
                <PostCard title={post.title} text={post.body} name={this.getNameUser(post.userId)} fullpostref=">"></PostCard>
            )
        })
    }

    render(){
        const {posts,users,isLoading,isError} = this.state
        if(isLoading) {
            return <div>Loading...</div>
        }

        if(isError){
            return<div>Not found</div>
        }

        return (
            this.renderPost()
        ) 
    }
}

export default LoadPosts