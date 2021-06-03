import faker from 'faker'
import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>Are you sure you want to do this?</div>
                
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='Sam' timeAgo='Today at 2' avatar={faker.image.avatar()} content='Farts'/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail  author='Alex' timeAgo='Today at 3'avatar={faker.image.avatar()} content='Smell'/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='Jane' timeAgo='Today at 4'avatar={faker.image.avatar ()} content='Like'/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author='Chauncey' timeAgo='Today at 5' avatar={faker.image.avatar()} content='Roses'/>
            </ApprovalCard>
        </div>
        
    )


}


ReactDOM.render(<App />, document.querySelector('#root'))