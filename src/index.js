import faker from 'faker'
import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail author='Sam' timeAgo='Today at 2' image={faker.image.avatar()} text='Farts'/>
            <CommentDetail author='Alex' timeAgo='Today at 3'image={faker.image.avatar()} text='Farts'/>
            <CommentDetail author='Jane' timeAgo='Today at 4'image={faker.image.avatar()} text='Farts'/>
            <CommentDetail author='Chauncey' timeAgo='Today at 5' image={faker.image.avatar()} text='Farts'/>
            
        </div>
        
    )


}


ReactDOM.render(<App />, document.querySelector('#root'))