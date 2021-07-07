import React, { Component } from 'react'
import { Col } from 'react-bootstrap'
import Post from '../Pages/Post'
import UserCard from './UserCard'

class LoadUsers extends Component {
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
    
    getLogouser(name)
    {
       let chars = []
       chars = name
       let logo ="" 
       for(let i = 0;i<chars.length;i++){
           if(i==0){
               logo+=chars[i]
           }
           if(chars[i]==" "){
               logo+=chars[i+1]
           }
       }
       return logo
    }

    renderUser = () => {
        return this.state.users.map( user => {
            return (
                <UserCard logo={this.getLogouser(user.name)} name={user.name} mail={user.email} phone={user.phone}></UserCard>
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
            this.renderUser()
        ) 
    }
}

export default LoadUsers